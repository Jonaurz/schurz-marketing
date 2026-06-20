"use server";

import { promises as fs } from "node:fs";
import { randomUUID } from "node:crypto";
import path from "node:path";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import {
  clearAdminSession,
  createAdminSession,
  getAdminSession,
  isAdminConfigured,
  verifyPassword,
} from "@/lib/admin-auth";
import { createPendingSubmission, deleteSubmission } from "@/lib/contact-submissions";
import { makeContentId, readContent, writeContent } from "@/lib/content";
import { encryptSecret, readEmailSettings, writeEmailSettings } from "@/lib/email-settings";
import {
  sendContactConfirmationEmail,
  sendEmailSettingsTestEmail,
  verifyEmailSettings,
} from "@/lib/mailer";

function asText(formData: FormData, key: string) {
  return String(formData.get(key) ?? "").trim();
}

function asNumber(formData: FormData, key: string) {
  const value = Number(asText(formData, key));
  return Number.isFinite(value) ? value : 99;
}

async function saveReferenceImage(file: FormDataEntryValue | null) {
  if (!(file instanceof File) || file.size === 0) return "";

  const allowedTypes: Record<string, string> = {
    "image/jpeg": "jpg",
    "image/png": "png",
    "image/webp": "webp",
  };
  const extension = allowedTypes[file.type];

  if (!extension) {
    throw new Error("Bitte nur JPG-, PNG- oder WebP-Bilder hochladen.");
  }
  if (file.size > 4 * 1024 * 1024) {
    throw new Error("Das Referenzbild darf maximal 4 MB groß sein.");
  }

  const uploadDirectory = path.join(process.cwd(), "public", "uploads", "references");
  const fileName = `${randomUUID()}.${extension}`;
  const targetPath = path.join(uploadDirectory, fileName);

  await fs.mkdir(uploadDirectory, { recursive: true });
  await fs.writeFile(targetPath, Buffer.from(await file.arrayBuffer()));

  return `/uploads/references/${fileName}`;
}

async function requireAdminForAction() {
  const session = await getAdminSession();
  if (!session) redirect("/schurz-admin/login");
}

function safeErrorMessage(error: unknown) {
  const message = error instanceof Error ? error.message : "Unbekannter Fehler";
  return message.length > 180 ? `${message.slice(0, 177)}...` : message;
}

function emailSetupErrorMessage(error: unknown) {
  const message = safeErrorMessage(error);
  const code =
    typeof error === "object" && error && "code" in error ? String(error.code) : "";
  const command =
    typeof error === "object" && error && "command" in error ? String(error.command) : "";

  if (code === "EAUTH" || command === "AUTH") {
    return `Der SMTP-Login wurde abgelehnt. Bitte Benutzername und Passwort prüfen. Technische Meldung: ${message}`;
  }

  if (code === "ETIMEDOUT" || code === "ECONNECTION") {
    return `Der SMTP-Server konnte nicht erreicht werden. Bitte Host, Port und Firewall prüfen. Technische Meldung: ${message}`;
  }

  if (
    code === "ESOCKET" ||
    message.toLowerCase().includes("wrong version number") ||
    message.toLowerCase().includes("ssl") ||
    message.toLowerCase().includes("tls")
  ) {
    return `Die SSL/TLS-Einstellung passt wahrscheinlich nicht zum Port. Für Port 587 meist SSL/TLS direkt ausschalten, für Port 465 meist einschalten. Technische Meldung: ${message}`;
  }

  return message;
}

function isLikelyEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function redirectWithEmailStatus(status: "success" | "error", message: string) {
  redirect(
    `/schurz-admin?emailStatus=${encodeURIComponent(status)}&emailMessage=${encodeURIComponent(
      message,
    )}`,
  );
}

export async function loginAction(_: unknown, formData: FormData) {
  if (!isAdminConfigured()) {
    return { error: "Der Admin-Login ist noch nicht konfiguriert." };
  }

  const username = asText(formData, "username");
  const password = asText(formData, "password");
  const expectedUsername = process.env.ADMIN_USERNAME ?? "jonas";

  if (username !== expectedUsername || !password || !(await verifyPassword(password))) {
    return { error: "Benutzer oder Passwort ist nicht korrekt." };
  }

  await createAdminSession();
  redirect("/schurz-admin");
}

export async function logoutAction() {
  await clearAdminSession();
  redirect("/schurz-admin/login");
}

export async function saveReferenceAction(formData: FormData) {
  await requireAdminForAction();
  const content = await readContent();
  const id = asText(formData, "id") || makeContentId("reference");
  const previousReference = content.references.find((item) => item.id === id);
  const uploadedImageUrl = await saveReferenceImage(formData.get("imageFile"));
  const nextReference = {
    id,
    sector: asText(formData, "sector"),
    region: asText(formData, "region"),
    title: asText(formData, "title"),
    problem: asText(formData, "problem"),
    goal: asText(formData, "goal"),
    consequence: asText(formData, "consequence"),
    solution: asText(formData, "solution"),
    result: asText(formData, "result"),
    services: asText(formData, "services"),
    imageUrl: uploadedImageUrl || asText(formData, "existingImageUrl") || previousReference?.imageUrl || "",
    imageAlt: asText(formData, "imageAlt"),
    mobileImageUrl: asText(formData, "mobileImageUrl"),
    mobileImageAlt: asText(formData, "mobileImageAlt"),
    sortOrder: asNumber(formData, "sortOrder"),
    published: formData.get("published") === "on",
  };

  if (!nextReference.sector || !nextReference.title) {
    throw new Error("Branche und Titel sind Pflichtfelder.");
  }

  content.references = [
    ...content.references.filter((item) => item.id !== id),
    nextReference,
  ].sort((a, b) => a.sortOrder - b.sortOrder);

  await writeContent(content);
  revalidatePath("/");
  revalidatePath("/schurz-admin");
  redirect("/schurz-admin");
}

export async function deleteReferenceAction(formData: FormData) {
  await requireAdminForAction();
  const id = asText(formData, "id");
  const content = await readContent();

  content.references = content.references.filter((item) => item.id !== id);
  await writeContent(content);
  revalidatePath("/");
  revalidatePath("/schurz-admin");
  redirect("/schurz-admin");
}

export async function saveTestimonialAction(formData: FormData) {
  await requireAdminForAction();
  const content = await readContent();
  const id = asText(formData, "id") || makeContentId("testimonial");
  const nextTestimonial = {
    id,
    quote: asText(formData, "quote"),
    author: asText(formData, "author"),
    company: asText(formData, "company"),
    role: asText(formData, "role"),
    project: asText(formData, "project"),
    result: asText(formData, "result"),
    sortOrder: asNumber(formData, "sortOrder"),
    published: formData.get("published") === "on",
  };

  if (!nextTestimonial.quote || !nextTestimonial.company) {
    throw new Error("Zitat und Unternehmen sind Pflichtfelder.");
  }

  content.testimonials = [
    ...content.testimonials.filter((item) => item.id !== id),
    nextTestimonial,
  ].sort((a, b) => a.sortOrder - b.sortOrder);

  await writeContent(content);
  revalidatePath("/");
  revalidatePath("/schurz-admin");
  redirect("/schurz-admin");
}

export async function deleteTestimonialAction(formData: FormData) {
  await requireAdminForAction();
  const id = asText(formData, "id");
  const content = await readContent();

  content.testimonials = content.testimonials.filter((item) => item.id !== id);
  await writeContent(content);
  revalidatePath("/");
  revalidatePath("/schurz-admin");
  redirect("/schurz-admin");
}

export async function saveEmailSettingsAction(formData: FormData) {
  await requireAdminForAction();
  const previousSettings = await readEmailSettings();
  const smtpPassword = asText(formData, "smtpPassword");
  const smtpPort = Number(asText(formData, "smtpPort"));
  const nextSettings = {
    enabled: formData.get("enabled") === "on",
    smtpHost: asText(formData, "smtpHost"),
    smtpPort: Number.isFinite(smtpPort) && smtpPort > 0 ? smtpPort : previousSettings.smtpPort || 587,
    smtpSecure: formData.get("smtpSecure") === "on",
    smtpUser: asText(formData, "smtpUser"),
    smtpPasswordEncrypted: smtpPassword
      ? encryptSecret(smtpPassword)
      : previousSettings.smtpPasswordEncrypted,
    fromEmail: asText(formData, "fromEmail"),
    fromName: asText(formData, "fromName"),
    recipientEmail: asText(formData, "recipientEmail"),
    baseUrl: asText(formData, "baseUrl"),
    savedAt: new Date().toISOString(),
  };

  if (
    nextSettings.enabled &&
    (!nextSettings.smtpHost ||
      !nextSettings.smtpPort ||
      !nextSettings.smtpUser ||
      !nextSettings.smtpPasswordEncrypted ||
      !nextSettings.fromEmail ||
      !nextSettings.recipientEmail)
  ) {
    redirectWithEmailStatus(
      "error",
      "Die E-Mail-Einstellungen wurden nicht gespeichert: Bitte alle Pflichtfelder für den aktiven E-Mail-Versand ausfüllen.",
    );
  }

  if (nextSettings.enabled) {
    if (!isLikelyEmail(nextSettings.fromEmail) || !isLikelyEmail(nextSettings.recipientEmail)) {
      redirectWithEmailStatus(
        "error",
        "Die E-Mail-Einstellungen wurden nicht gespeichert: Absender- und Empfänger-E-Mail müssen gültige E-Mail-Adressen sein.",
      );
    }

    try {
      await verifyEmailSettings(nextSettings);
    } catch (error) {
      redirectWithEmailStatus(
        "error",
        `Die E-Mail-Einstellungen wurden nicht gespeichert, weil die SMTP-Prüfung fehlgeschlagen ist: ${emailSetupErrorMessage(
          error,
        )}`,
      );
    }
  }

  await writeEmailSettings(nextSettings);
  revalidatePath("/schurz-admin");
  redirectWithEmailStatus(
    "success",
    nextSettings.enabled
      ? "E-Mail-Einstellungen gespeichert und SMTP-Verbindung erfolgreich geprüft."
      : "E-Mail-Einstellungen gespeichert. Der E-Mail-Versand ist aktuell deaktiviert.",
  );
}


export async function testEmailConnectionAction() {
  await requireAdminForAction();

  try {
    await sendEmailSettingsTestEmail();
  } catch (error) {
    redirectWithEmailStatus(
      "error",
      `Die SMTP-Testmail konnte nicht versendet werden: ${emailSetupErrorMessage(error)}`,
    );
  }

  redirectWithEmailStatus(
    "success",
    "SMTP-Verbindung erfolgreich. Eine Testmail wurde an die gespeicherte Empfänger-E-Mail gesendet.",
  );
}

export async function sendDoubleOptInTestAction() {
  await requireAdminForAction();

  let pendingSubmissionId = "";

  try {
    const settings = await readEmailSettings();
    if (!settings.recipientEmail) {
      throw new Error("Es ist keine Empfänger-E-Mail gespeichert.");
    }

    const { token, submission } = await createPendingSubmission({
      name: "Double-Opt-In Test",
      email: settings.recipientEmail,
      phone: "Test aus dem Adminbereich",
      services: ["webseite"],
      currentWebsite: settings.baseUrl || "https://schurz-marketing.de",
      socialChannels: "",
      consentText: "Technischer Double-Opt-In-Test aus dem Adminbereich.",
    });
    pendingSubmissionId = submission.id;

    const origin = (settings.baseUrl || "https://schurz-marketing.de").replace(/\/+$/, "");
    const confirmUrl = `${origin}/kontakt/bestaetigen?token=${encodeURIComponent(token)}`;

    await sendContactConfirmationEmail(submission, confirmUrl);
  } catch (error) {
    if (pendingSubmissionId) {
      await deleteSubmission(pendingSubmissionId).catch((cleanupError) => console.error(cleanupError));
    }

    redirectWithEmailStatus(
      "error",
      `Der Double-Opt-In-Test konnte nicht gestartet werden: ${emailSetupErrorMessage(error)}`,
    );
  }

  redirectWithEmailStatus(
    "success",
    "Double-Opt-In-Test gestartet. Eine Bestätigungsmail wurde an die gespeicherte Empfänger-E-Mail gesendet. Bitte den Link in dieser Mail anklicken, um die Weiterleitung zu testen.",
  );
}
