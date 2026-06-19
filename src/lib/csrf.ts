import "server-only";

import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";

const tokenLifetimeMs = 1000 * 60 * 60 * 2;

function getSecret() {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error("ADMIN_SESSION_SECRET muss gesetzt sein, um CSRF-Tokens zu signieren.");
  }

  return secret;
}

function signToken(payload: string, purpose: string) {
  return createHmac("sha256", getSecret()).update(`${purpose}:${payload}`).digest("base64url");
}

function safeCompare(left: string, right: string) {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);

  if (leftBuffer.length !== rightBuffer.length) return false;
  return timingSafeEqual(leftBuffer, rightBuffer);
}

export function createCsrfToken(purpose: string) {
  const timestamp = Date.now().toString(36);
  const nonce = randomBytes(24).toString("base64url");
  const payload = `${timestamp}.${nonce}`;
  const signature = signToken(payload, purpose);

  return `${payload}.${signature}`;
}

export function verifyCsrfToken(token: string, purpose: string) {
  const parts = token.split(".");
  if (parts.length !== 3) return false;

  const [timestamp, nonce, signature] = parts;
  if (!timestamp || !nonce || !signature) return false;

  const createdAt = Number.parseInt(timestamp, 36);
  if (!Number.isFinite(createdAt)) return false;
  if (Date.now() - createdAt > tokenLifetimeMs) return false;

  return safeCompare(signature, signToken(`${timestamp}.${nonce}`, purpose));
}
