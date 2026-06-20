import "server-only";

import nodemailer from "nodemailer";
import {
  decryptSecret,
  isEmailSettingsReady,
  readEmailSettings,
  type EmailSettings,
} from "./email-settings";
import type { ContactSubmission } from "./contact-submissions";

const serviceLabels: Record<string, string> = {
  webseite: "Webseite",
  "social-media": "Social Media Betreuung",
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatServices(services: string[]) {
  return services.map((service) => serviceLabels[service] ?? service).join(", ");
}

function formatFrom(settings: { fromName: string; fromEmail: string }) {
  return settings.fromName ? `"${settings.fromName}" <${settings.fromEmail}>` : settings.fromEmail;
}

function createTransportForSettings(settings: EmailSettings) {
  if (!isEmailSettingsReady(settings)) {
    throw new Error("Der E-Mail-Versand ist im Adminbereich noch nicht vollständig eingerichtet.");
  }

  const password = decryptSecret(settings.smtpPasswordEncrypted);
  if (!password) {
    throw new Error("Das gespeicherte SMTP-Passwort konnte nicht entschlüsselt werden.");
  }

  return nodemailer.createTransport({
    host: settings.smtpHost,
    port: settings.smtpPort,
    secure: settings.smtpSecure,
    requireTLS: !settings.smtpSecure,
    connectionTimeout: 15000,
    greetingTimeout: 15000,
    socketTimeout: 20000,
    auth: {
      user: settings.smtpUser,
      pass: password,
    },
  });
}

async function createTransporter(settingsOverride?: EmailSettings) {
  const settings = settingsOverride ?? (await readEmailSettings());

  return {
    settings,
    transporter: createTransportForSettings(settings),
  };
}

export async function verifyEmailTransport() {
  const { transporter } = await createTransporter();
  await transporter.verify();
}

export async function verifyEmailSettings(settings: EmailSettings) {
  const transporter = createTransportForSettings(settings);
  await transporter.verify();
}

export async function sendEmailSettingsTestEmail() {
  const { settings, transporter } = await createTransporter();
  await transporter.verify();

  const from = formatFrom(settings);
  await transporter.sendMail({
    from,
    to: settings.recipientEmail,
    subject: "Technischer E-Mail-Test von schurz-marketing.de",
    text: [
      "Der SMTP-Test war erfolgreich.",
      "",
      "Diese Nachricht wurde über die gespeicherten E-Mail-Einstellungen der Website versendet.",
      `Zeitpunkt: ${new Date().toISOString()}`,
    ].join("\n"),
    html: `
      <h2>SMTP-Test erfolgreich</h2>
      <p>Diese Nachricht wurde über die gespeicherten E-Mail-Einstellungen der Website versendet.</p>
      <p><strong>Zeitpunkt:</strong> ${escapeHtml(new Date().toISOString())}</p>
    `,
  });
}

export async function sendContactConfirmationEmail(submission: ContactSubmission, confirmUrl: string) {
  const { settings, transporter } = await createTransporter();
  const from = formatFrom(settings);

  await transporter.sendMail({
    from,
    to: submission.email,
    subject: "Bitte bestätige deine Anfrage an Schurz Marketing",
    text: [
      `Hallo ${submission.name},`,
      "",
      "bitte bestätige deine Anfrage über den folgenden Link:",
      confirmUrl,
      "",
      "Erst nach der Bestätigung wird deine Anfrage an Schurz Marketing weitergeleitet.",
      "Der Link ist 24 Stunden gültig.",
      "",
      "Wenn du diese Anfrage nicht gestellt hast, kannst du diese E-Mail ignorieren.",
    ].join("\n"),
    html: `
      <p>Hallo ${escapeHtml(submission.name)},</p>
      <p>bitte bestätige deine Anfrage über den folgenden Link:</p>
      <p><a href="${escapeHtml(confirmUrl)}">${escapeHtml(confirmUrl)}</a></p>
      <p>Erst nach der Bestätigung wird deine Anfrage an Schurz Marketing weitergeleitet. Der Link ist 24 Stunden gültig.</p>
      <p>Wenn du diese Anfrage nicht gestellt hast, kannst du diese E-Mail ignorieren.</p>
    `,
  });
}

export async function sendConfirmedContactEmail(submission: ContactSubmission) {
  const { settings, transporter } = await createTransporter();
  const from = formatFrom(settings);
  const services = formatServices(submission.services);

  await transporter.sendMail({
    from,
    to: settings.recipientEmail,
    replyTo: submission.email,
    subject: `Bestätigte Anfrage über schurz-marketing.de: ${services}`,
    text: [
      "Neue bestätigte Anfrage über das Kontaktformular.",
      "",
      `Name: ${submission.name}`,
      `E-Mail: ${submission.email}`,
      `Telefon: ${submission.phone}`,
      `Dienstleistung: ${services}`,
      submission.branche ? `Branche/Gewerk: ${submission.branche}` : "",
      submission.location ? `Ort/Region: ${submission.location}` : "",
      submission.currentWebsite ? `Aktuelle Website: ${submission.currentWebsite}` : "",
      submission.googleProfile ? `Google-Unternehmensprofil: ${submission.googleProfile}` : "",
      submission.socialChannels ? `Social-Media-Kanäle: ${submission.socialChannels}` : "",
      "",
      `Eingegangen: ${submission.createdAt}`,
      `Bestätigt: ${submission.confirmedAt || new Date().toISOString()}`,
      `Einwilligung: ${submission.consentText}`,
    ]
      .filter(Boolean)
      .join("\n"),
    html: `
      <h2>Neue bestätigte Anfrage</h2>
      <p><strong>Name:</strong> ${escapeHtml(submission.name)}</p>
      <p><strong>E-Mail:</strong> ${escapeHtml(submission.email)}</p>
      <p><strong>Telefon:</strong> ${escapeHtml(submission.phone)}</p>
      <p><strong>Dienstleistung:</strong> ${escapeHtml(services)}</p>
      ${
        submission.branche
          ? `<p><strong>Branche/Gewerk:</strong> ${escapeHtml(submission.branche)}</p>`
          : ""
      }
      ${
        submission.location
          ? `<p><strong>Ort/Region:</strong> ${escapeHtml(submission.location)}</p>`
          : ""
      }
      ${
        submission.currentWebsite
          ? `<p><strong>Aktuelle Website:</strong> ${escapeHtml(submission.currentWebsite)}</p>`
          : ""
      }
      ${
        submission.googleProfile
          ? `<p><strong>Google-Unternehmensprofil:</strong> ${escapeHtml(submission.googleProfile)}</p>`
          : ""
      }
      ${
        submission.socialChannels
          ? `<p><strong>Social-Media-Kanäle:</strong><br>${escapeHtml(submission.socialChannels).replaceAll(
              "\n",
              "<br>",
            )}</p>`
          : ""
      }
      <hr>
      <p><strong>Eingegangen:</strong> ${escapeHtml(submission.createdAt)}</p>
      <p><strong>Bestätigt:</strong> ${escapeHtml(submission.confirmedAt || new Date().toISOString())}</p>
      <p><strong>Einwilligung:</strong> ${escapeHtml(submission.consentText)}</p>
    `,
  });
}
