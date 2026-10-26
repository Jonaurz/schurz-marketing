"use server";

import {
  ermittleClientIp,
  honeypotGefuellt,
  rateLimitUeberschritten,
  zuSchnellAbgeschickt,
} from "@/lib/bot-schutz";
import { csrfTokenAlterMs, verifyCsrfToken } from "@/lib/csrf";
import { sendKontaktanfrageEmail } from "@/lib/mailer";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Partial<Record<"name" | "email" | "phone" | "services" | "consent", string>>;
};

const serviceValues = new Set(["webseite", "social-media"]);
const serviceLabels: Record<string, string> = {
  webseite: "Webseite",
  "social-media": "Social Media",
};
const consentText =
  "Die Angaben dürfen zur Bearbeitung der Anfrage verwendet werden. Hinweise dazu stehen unter Datenschutz.";

// Wird Bots gezeigt, damit sie nicht merken, woran sie gescheitert sind.
const stillerErfolg: ContactFormState = {
  status: "success",
  message: "Danke für deine Anfrage. Ich melde mich zeitnah bei dir.",
};

const unvollstaendig: ContactFormState = {
  status: "error",
  message:
    "Es fehlen noch Angaben. Bitte geh das Formular von oben nach unten durch und beantworte alle Fragen.",
};

function asText(formData: FormData, key: string) {
  return String(formData.get(key) ?? "").trim();
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function submitContactAction(
  _: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const csrfToken = asText(formData, "_csrf");

  if (!verifyCsrfToken(csrfToken, "contact")) {
    return {
      status: "error",
      message:
        "Die Anfrage konnte aus Sicherheitsgründen nicht verarbeitet werden. Bitte lade die Seite neu und sende das Formular erneut.",
    };
  }

  // Botschutz: versteckte Felder, Tempo und Menge. Alle drei antworten
  // nach außen wie ein Erfolg, damit Skripte nicht nachjustieren koennen.
  if (honeypotGefuellt(formData)) return stillerErfolg;
  if (zuSchnellAbgeschickt(csrfTokenAlterMs(csrfToken))) return stillerErfolg;
  if (rateLimitUeberschritten(await ermittleClientIp())) return stillerErfolg;

  const services = formData
    .getAll("services")
    .map((value) => String(value))
    .filter((value) => serviceValues.has(value));
  const webseite = services.includes("webseite");
  const social = services.includes("social-media");

  const hatWebsite = asText(formData, "hatWebsite");
  const websiteAdresse = asText(formData, "websiteAdresse");
  const websiteWunsch = asText(formData, "websiteWunsch");
  const socialZiel = asText(formData, "socialZiel");
  const hatKanaele = asText(formData, "hatKanaele");
  const socialKanaele = asText(formData, "socialKanaele");

  const name = asText(formData, "name");
  const email = asText(formData, "email");
  const phone = asText(formData, "phone");
  const consent = formData.get("consent");

  if (services.length === 0) {
    return {
      status: "error",
      message: "Bitte wähle aus, womit ich dir helfen kann.",
      fieldErrors: { services: "Bitte wähle mindestens eine Leistung aus." },
    };
  }

  // Rueckfragen des jeweils gewaehlten Zweigs. Im Formular sind sie nicht zu
  // uebergehen, hier stehen sie als Absicherung.
  if (webseite) {
    if (hatWebsite !== "ja" && hatWebsite !== "nein") return unvollstaendig;
    if (hatWebsite === "ja" && !websiteAdresse) return unvollstaendig;
    if (!websiteWunsch) return unvollstaendig;
  }

  if (social) {
    if (!socialZiel) return unvollstaendig;
    if (hatKanaele !== "ja" && hatKanaele !== "nein") return unvollstaendig;
    if (hatKanaele === "ja" && !socialKanaele) return unvollstaendig;
  }

  if (!name || !email || !phone || !consent) {
    return {
      status: "error",
      message:
        "Bitte gib Name, E-Mail und Telefonnummer an und stimme der Verarbeitung deiner Angaben zu.",
      fieldErrors: {
        ...(name ? {} : { name: "Bitte gib deinen Namen ein." }),
        ...(email ? {} : { email: "Bitte gib deine E-Mail-Adresse ein." }),
        ...(phone ? {} : { phone: "Bitte gib deine Telefonnummer ein." }),
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

  const betreff = services.map((service) => serviceLabels[service] ?? service).join(" und ");

  const angaben: { label: string; value: string }[] = [];

  if (webseite) {
    angaben.push({
      label: "Website vorhanden",
      value: hatWebsite === "ja" ? `Ja – ${websiteAdresse}` : "Nein",
    });
    angaben.push({ label: "Ziel mit der Website", value: websiteWunsch });
  }

  if (social) {
    angaben.push({ label: "Ziel mit Social Media", value: socialZiel });
    angaben.push({
      label: "Kanäle vorhanden",
      value: hatKanaele === "ja" ? `Ja – ${socialKanaele}` : "Nein",
    });
  }

  try {
    await sendKontaktanfrageEmail({
      betreff,
      name,
      email,
      telefon: phone,
      angaben,
      consentText,
      eingegangenAm: new Date().toLocaleString("de-DE", {
        dateStyle: "long",
        timeStyle: "short",
        timeZone: "Europe/Berlin",
      }),
    });
  } catch (error) {
    console.error(error);

    return {
      status: "error",
      message:
        "Die Anfrage konnte gerade nicht verschickt werden. Bitte versuche es später noch einmal oder ruf direkt an: 0152 0426 3490.",
    };
  }

  return stillerErfolg;
}
