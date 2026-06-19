import "server-only";

import { createHmac, randomBytes, scrypt as scryptCallback, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

const cookieName = "sm_admin_session";
const sessionMaxAge = 60 * 60 * 8;
const scryptOptions = {
  N: 16384,
  r: 8,
  p: 1,
  maxmem: 64 * 1024 * 1024,
};

function scrypt(password: string, salt: string, keyLength: number, options = scryptOptions) {
  return new Promise<Buffer>((resolve, reject) => {
    scryptCallback(password, salt, keyLength, options, (error, derivedKey) => {
      if (error) reject(error);
      else resolve(derivedKey as Buffer);
    });
  });
}

function getSessionSecret() {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error("ADMIN_SESSION_SECRET muss in der Server-Umgebung gesetzt sein.");
  }
  return secret;
}

function getPasswordHash() {
  const hash = process.env.ADMIN_PASSWORD_HASH;
  if (!hash) {
    throw new Error("ADMIN_PASSWORD_HASH muss in der Server-Umgebung gesetzt sein.");
  }
  return hash;
}

function sign(value: string) {
  return createHmac("sha256", getSessionSecret()).update(value).digest("base64url");
}

function parseSession(value: string | undefined) {
  if (!value) return null;
  const [expiresAt, nonce, signature] = value.split(".");
  if (!expiresAt || !nonce || !signature) return null;

  const payload = `${expiresAt}.${nonce}`;
  const expected = sign(payload);
  const expectedBytes = Buffer.from(expected);
  const receivedBytes = Buffer.from(signature);

  if (expectedBytes.length !== receivedBytes.length) return null;
  if (!timingSafeEqual(expectedBytes, receivedBytes)) return null;
  if (Number(expiresAt) < Date.now()) return null;

  return { expiresAt: Number(expiresAt) };
}

export function isAdminConfigured() {
  return Boolean(
    process.env.ADMIN_PASSWORD_HASH &&
      process.env.ADMIN_SESSION_SECRET &&
      process.env.ADMIN_SESSION_SECRET.length >= 32,
  );
}

export async function createPasswordHash(password: string) {
  const salt = randomBytes(16).toString("base64url");
  const derivedKey = await scrypt(password, salt, 64);

  return `scrypt:16384:8:1:${salt}:${derivedKey.toString("base64url")}`;
}

export async function verifyPassword(password: string) {
  const passwordHash = getPasswordHash();
  const separator = passwordHash.includes(":") ? ":" : "$";
  const [algorithm, n, r, p, salt, storedHash] = passwordHash.split(separator);
  if (algorithm !== "scrypt" || !n || !r || !p || !salt || !storedHash) return false;

  const derivedKey = await scrypt(password, salt, Buffer.from(storedHash, "base64url").length, {
    N: Number(n),
    r: Number(r),
    p: Number(p),
    maxmem: 64 * 1024 * 1024,
  });

  const storedBytes = Buffer.from(storedHash, "base64url");
  if (derivedKey.length !== storedBytes.length) return false;

  return timingSafeEqual(derivedKey, storedBytes);
}

export async function getAdminSession() {
  if (!isAdminConfigured()) return null;
  const cookieStore = await cookies();
  return parseSession(cookieStore.get(cookieName)?.value);
}

export async function createAdminSession() {
  const expiresAt = Date.now() + sessionMaxAge * 1000;
  const nonce = randomBytes(18).toString("base64url");
  const payload = `${expiresAt}.${nonce}`;
  const cookieStore = await cookies();

  cookieStore.set(cookieName, `${payload}.${sign(payload)}`, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: sessionMaxAge,
  });
}

export async function clearAdminSession() {
  const cookieStore = await cookies();
  cookieStore.delete(cookieName);
}
