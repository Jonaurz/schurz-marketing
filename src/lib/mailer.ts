import "server-only";

import nodemailer from "nodemailer";
import {
  decryptSecret,
  isEmailSettingsReady,
  readEmailSettings,
  type EmailSettings,
} from "./email-settings";
export type Kontaktanfrage = {
  betreff: string;
  name: string;
  email: string;
  telefon: string;
  // Weitere Angaben aus dem Formular, bereits beschriftet und in Reihenfolge.
  angaben: { label: string; value: string }[];
  consentText: string;
  eingegangenAm: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
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

export async function sendKontaktanfrageEmail(anfrage: Kontaktanfrage) {
  const { settings, transporter } = await createTransporter();
  const from = formatFrom(settings);

  const zeilen = [
    { label: "Name", value: anfrage.name },
    { label: "E-Mail", value: anfrage.email },
    { label: "Telefon", value: anfrage.telefon },
    ...anfrage.angaben,
  ].filter((zeile) => zeile.value.trim() !== "");

  await transporter.sendMail({
    from,
    to: settings.recipientEmail,
    replyTo: anfrage.email,
    subject: `Neue Anfrage über schurz-marketing.de: ${anfrage.betreff}`,
    text: [
      "Neue Anfrage über das Kontaktformular.",
      "",
      ...zeilen.map((zeile) => `${zeile.label}: ${zeile.value}`),
      "",
      `Eingegangen: ${anfrage.eingegangenAm}`,
      `Einwilligung: ${anfrage.consentText}`,
    ].join("\n"),
    html: [
      "<h2>Neue Anfrage</h2>",
      ...zeilen.map(
        (zeile) =>
          `<p><strong>${escapeHtml(zeile.label)}:</strong><br>${escapeHtml(zeile.value).replaceAll("\n", "<br>")}</p>`,
      ),
      "<hr>",
      `<p><strong>Eingegangen:</strong> ${escapeHtml(anfrage.eingegangenAm)}</p>`,
      `<p><strong>Einwilligung:</strong> ${escapeHtml(anfrage.consentText)}</p>`,
    ].join("\n"),
  });
}
