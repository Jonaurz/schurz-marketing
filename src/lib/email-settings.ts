import "server-only";

import { promises as fs } from "node:fs";
import { createCipheriv, createDecipheriv, createHash, randomBytes } from "node:crypto";
import path from "node:path";

export type EmailSettings = {
  enabled: boolean;
  smtpHost: string;
  smtpPort: number;
  smtpSecure: boolean;
  smtpUser: string;
  smtpPasswordEncrypted: string;
  fromEmail: string;
  fromName: string;
  recipientEmail: string;
  baseUrl: string;
  savedAt: string;
};

export type EmailSettingsForAdmin = Omit<EmailSettings, "smtpPasswordEncrypted"> & {
  hasSmtpPassword: boolean;
};

const defaultEmailSettings: EmailSettings = {
  enabled: false,
  smtpHost: "",
  smtpPort: 587,
  smtpSecure: false,
  smtpUser: "",
  smtpPasswordEncrypted: "",
  fromEmail: "",
  fromName: "Schurz Marketing",
  recipientEmail: "",
  baseUrl: "",
  savedAt: "",
};

function emailSettingsFilePath() {
  return path.join(process.cwd(), "data", "email-settings.json");
}

function getEncryptionKey() {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error("ADMIN_SESSION_SECRET muss gesetzt sein, um SMTP-Passwörter zu schützen.");
  }

  return createHash("sha256").update(secret).digest();
}

export function encryptSecret(value: string) {
  if (!value) return "";

  const iv = randomBytes(12);
  const cipher = createCipheriv("aes-256-gcm", getEncryptionKey(), iv);
  const encrypted = Buffer.concat([cipher.update(value, "utf8"), cipher.final()]);
  const tag = cipher.getAuthTag();

  return `aes-256-gcm:${iv.toString("base64url")}:${tag.toString("base64url")}:${encrypted.toString(
    "base64url",
  )}`;
}

export function decryptSecret(value: string) {
  if (!value) return "";

  const [algorithm, iv, tag, encrypted] = value.split(":");
  if (algorithm !== "aes-256-gcm" || !iv || !tag || !encrypted) return "";

  const decipher = createDecipheriv("aes-256-gcm", getEncryptionKey(), Buffer.from(iv, "base64url"));
  decipher.setAuthTag(Buffer.from(tag, "base64url"));

  return Buffer.concat([
    decipher.update(Buffer.from(encrypted, "base64url")),
    decipher.final(),
  ]).toString("utf8");
}

function normalizeEmailSettings(settings: Partial<EmailSettings> | null | undefined): EmailSettings {
  return {
    ...defaultEmailSettings,
    ...settings,
    smtpPort: Number.isFinite(Number(settings?.smtpPort))
      ? Number(settings?.smtpPort)
      : defaultEmailSettings.smtpPort,
    enabled: Boolean(settings?.enabled),
    smtpSecure: Boolean(settings?.smtpSecure),
  };
}

export async function readEmailSettings(): Promise<EmailSettings> {
  try {
    const raw = await fs.readFile(emailSettingsFilePath(), "utf8");
    return normalizeEmailSettings(JSON.parse(raw));
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return defaultEmailSettings;
    throw error;
  }
}

export async function writeEmailSettings(settings: EmailSettings) {
  const filePath = emailSettingsFilePath();
  const directory = path.dirname(filePath);
  const tempPath = `${filePath}.${Date.now()}.tmp`;

  await fs.mkdir(directory, { recursive: true });
  await fs.writeFile(tempPath, `${JSON.stringify(normalizeEmailSettings(settings), null, 2)}\n`, "utf8");
  await fs.rename(tempPath, filePath);
}

export function toAdminEmailSettings(settings: EmailSettings): EmailSettingsForAdmin {
  return {
    enabled: settings.enabled,
    smtpHost: settings.smtpHost,
    smtpPort: settings.smtpPort,
    smtpSecure: settings.smtpSecure,
    smtpUser: settings.smtpUser,
    fromEmail: settings.fromEmail,
    fromName: settings.fromName,
    recipientEmail: settings.recipientEmail,
    baseUrl: settings.baseUrl,
    savedAt: settings.savedAt,
    hasSmtpPassword: Boolean(settings.smtpPasswordEncrypted),
  };
}

export function isEmailSettingsReady(settings: EmailSettings) {
  return Boolean(
    settings.enabled &&
      settings.smtpHost &&
      settings.smtpPort &&
      settings.smtpUser &&
      settings.smtpPasswordEncrypted &&
      settings.fromEmail &&
      settings.recipientEmail,
  );
}
