import { randomBytes, scryptSync } from "node:crypto";

const password = process.argv[2];

if (!password || password.length < 14) {
  console.error("Bitte ein Passwort mit mindestens 14 Zeichen übergeben.");
  console.error("Beispiel: npm run admin:password -- \"SehrSicheresPasswort123!\"");
  process.exit(1);
}

const salt = randomBytes(16).toString("base64url");
const hash = scryptSync(password, salt, 64, {
  N: 16384,
  r: 8,
  p: 1,
  maxmem: 64 * 1024 * 1024,
}).toString("base64url");

console.log(`ADMIN_PASSWORD_HASH=scrypt:16384:8:1:${salt}:${hash}`);
console.log(`ADMIN_SESSION_SECRET=${randomBytes(48).toString("base64url")}`);
