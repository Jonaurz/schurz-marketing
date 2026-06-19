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
        "Die Anfrage konnte aus Sicherheitsgründen nicht verarbeitet werden. Bitte laden Sie die Seite neu und senden Sie das Formular erneut.",
    };
  }

  if (!name || !email || !phone || services.length === 0 || !consent) {
    return {
      status: "error",
      message:
        "Bitte füllen Sie Name, E-Mail, Telefonnummer aus, wählen Sie mindestens eine Dienstleistung und stimmen Sie der Verarbeitung Ihrer Angaben zu.",
      fieldErrors: {
        ...(name ? {} : { name: "Bitte geben Sie Ihren Namen ein." }),
        ...(email ? {} : { email: "Bitte geben Sie Ihre E-Mail-Adresse ein." }),
        ...(phone ? {} : { phone: "Bitte geben Sie Ihre Telefonnummer ein." }),
        ...(services.length > 0
          ? {}
          : { services: "Bitte wählen Sie mindestens eine Dienstleistung aus." }),
        ...(consent ? {} : { consent: "Bitte stimmen Sie der Verarbeitung Ihrer Angaben zu." }),
      },
    };
  }

  if (!isValidEmail(email)) {
    return {
      status: "error",
      message: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
      fieldErrors: { email: "Bitte geben Sie eine gültige E-Mail-Adresse ein." },
    };
  }

  if (!consent) {
    return {
      status: "error",
      message: "Bitte stimmen Sie der Verarbeitung Ihrer Angaben zu.",
      fieldErrors: { consent: "Bitte stimmen Sie der Verarbeitung Ihrer Angaben zu." },
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
    const origin = settings.baseUrl || (await getRequestOrigin());
    const confirmUrl = `${origin}/kontakt/bestaetigen?token=${encodeURIComponent(token)}`;
    await sendContactConfirmationEmail(submission, confirmUrl);
  } catch (error) {
    await deleteSubmission(submission.id);
    console.error(error);

    return {
      status: "error",
      message:
        "Die Anfrage konnte noch nicht verschickt werden. Bitte prüfen Sie im Adminbereich die E-Mail-Einstellungen.",
    };
  }

  return {
    status: "success",
    message:
      "Bitte bestätigen Sie Ihre Anfrage über den Link, den ich Ihnen gerade per E-Mail gesendet habe. Erst danach wird die Anfrage an mich weitergeleitet.",
  };
}
