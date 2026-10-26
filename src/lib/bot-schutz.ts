import "server-only";

import { headers } from "next/headers";

// Felder, die im Formular versteckt sind. Menschen sehen sie nicht und lassen
// sie leer, automatisierte Skripte fuellen erfahrungsgemaess jedes Feld aus.
export const honeypotFelder = ["website_url", "firmenname"] as const;

// Menschen brauchen laenger, um ein Formular auszufuellen. Alles darunter
// stammt praktisch immer aus einem Skript.
const mindestdauerMs = 4000;

// Obergrenze je IP-Adresse und Stunde.
const maxProFenster = 5;
const fensterMs = 1000 * 60 * 60;

const verlauf = new Map<string, number[]>();

function aufraeumen(jetzt: number) {
  for (const [schluessel, zeitpunkte] of verlauf) {
    const frisch = zeitpunkte.filter((zeitpunkt) => jetzt - zeitpunkt < fensterMs);
    if (frisch.length === 0) verlauf.delete(schluessel);
    else verlauf.set(schluessel, frisch);
  }
}

export async function ermittleClientIp() {
  const headerStore = await headers();
  const weitergeleitet = headerStore.get("x-forwarded-for");
  if (weitergeleitet) {
    const erste = weitergeleitet.split(",")[0]?.trim();
    if (erste) return erste;
  }

  return headerStore.get("x-real-ip")?.trim() || "unbekannt";
}

export function honeypotGefuellt(formData: FormData) {
  return honeypotFelder.some((feld) => String(formData.get(feld) ?? "").trim() !== "");
}

export function zuSchnellAbgeschickt(alterMs: number | null) {
  if (alterMs === null) return false;
  return alterMs < mindestdauerMs;
}

export function rateLimitUeberschritten(ip: string) {
  // Ohne erkennbare IP wuerden alle Besucher auf einen Zaehler laufen und sich
  // gegenseitig aussperren. Dann lieber nicht begrenzen: Botfalle und Tempo
  // greifen weiterhin.
  if (ip === "unbekannt") return false;

  const jetzt = Date.now();

  if (verlauf.size > 5000) aufraeumen(jetzt);

  const zeitpunkte = (verlauf.get(ip) ?? []).filter((zeitpunkt) => jetzt - zeitpunkt < fensterMs);
  zeitpunkte.push(jetzt);
  verlauf.set(ip, zeitpunkte);

  return zeitpunkte.length > maxProFenster;
}
