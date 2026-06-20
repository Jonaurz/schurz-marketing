"use server";

import { headers } from "next/headers";
import { createPendingSubmission, deleteSubmission } from "@/lib/contact-submissions";
import { verifyCsrfToken } from "@/lib/csrf";
import { readEmailSettings } from "@/lib/email-settings";
import { sendContactConfirmationEmail } from "@/lib/mailer";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Partial<Record<"name" | "email" | "phone" | "services" | "consent", string>>;
};

const serviceValues = new Set(["webseite", "social-media"]);
const consentText =
  "Die Angaben dürfen zur Bearbeitung der Anfrage verwendet werden. Hinweise dazu stehen unter Datenschutz.";

function asText(formData: FormData, key: string) {
  return String(formData.get(key) ?? "").trim();
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function getRequestOrigin() {
  const headerStore = await headers();
  const forwardedProto = headerStore.get("x-forwarded-proto");
  const forwardedHost = headerStore.get("x-forwarded-host");
  const host = forwardedHost || headerStore.get("host");

  if (!host) return "https://schurz-marketing.de";

  return `${forwardedProto || "http"}://${host}`;
}

export async function submitContactAction(
  _: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = asText(formData, "name");
  const email = asText(formData, "email");
  const phone = asText(formData, "phone");
  const services = formData
    .getAll("services")
    .map((value) => String(value))
    .filter((value) => serviceValues.has(value));
  const currentWebsite = asText(formData, "currentWebsite");
  const socialChannels = asText(formData, "socialChannels");
  const branche = asText(formData, "branche");
  const location = asText(formData, "location");
  const googleProfile = asText(formData, "googleProfile");
  const consent = formData.get("consent");
  const csrfToken = asText(formData, "_csrf");

  if (!verifyCsrfToken(csrfToken, "contact")) {
    return {
      status: "error",
      message:
        "Die Anfrage konnte aus Sicherheitsgründen nicht verarbeitet werden. Bitte lade die Seite neu und sende das Formular erneut.",
    };
  }

  if (!name || !email || !phone || services.length === 0 || !consent) {
    return {
      status: "error",
      message:
        "Bitte fülle Name, E-Mail und Telefonnummer aus, wähle mindestens eine Dienstleistung und stimme der Verarbeitung deiner Angaben zu.",
      fieldErrors: {
        ...(name ? {} : { name: "Bitte gib deinen Namen ein." }),
        ...(email ? {} : { email: "Bitte gib deine E-Mail-Adresse ein." }),
        ...(phone ? {} : { phone: "Bitte gib deine Telefonnummer ein." }),
        ...(services.length > 0
          ? {}
          : { services: "Bitte wähle mindestens eine Dienstleistung aus." }),
        ...(consent ? {} : { consent: "Bitte stimme der Verarbeitung deiner Angaben zu." }),
      },
    };
  }

  if (!isValidEmail(email)) {
    return {
      status: "error",
      message: "Bitte gib eine gültige E-Mail-Adresse ein.",
      fieldErrors: { email: "Bitte gib eine gültige E-Mail-Adresse ein." },
    };
  }

  if (!consent) {
    return {
      status: "error",
      message: "Bitte stimme der Verarbeitung deiner Angaben zu.",
      fieldErrors: { consent: "Bitte stimme der Verarbeitung deiner Angaben zu." },
    };
  }

  const { token, submission } = await createPendingSubmission({
    name,
    email,
    phone,
    services,
    currentWebsite,
    socialChannels,
    branche,
    location,
    googleProfile,
    consentText,
  });

  try {
    const settings = await readEmailSettings();
    const origin = (settings.baseUrl || (await getRequestOrigin())).replace(/\/+$/, "");
    const confirmUrl = `${origin}/kontakt/bestaetigen?token=${encodeURIComponent(token)}`;
    await sendContactConfirmationEmail(submission, confirmUrl);
  } catch (error) {
    await deleteSubmission(submission.id);
    console.error(error);

    return {
      status: "error",
      message:
        "Die Anfrage konnte noch nicht verschickt werden. Bitte prüfe im Adminbereich die E-Mail-Einstellungen.",
    };
  }

  return {
    status: "success",
    message:
      "Bitte bestätige deine Anfrage über den Link, den ich dir gerade per E-Mail gesendet habe. Erst danach wird die Anfrage an mich weitergeleitet.",
  };
}
