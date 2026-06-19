import { Archivo } from "next/font/google";

/**
 * Eine einzige variable Schrift für die gesamte Seite: Archivo.
 * Headlines nutzen die breite Achse (font-stretch in globals.css),
 * Fließtext die normale Breite. Eine Datei statt zwei Familien
 * bedeutet weniger Bytes und schnelleres Rendering.
 *
 * Selbst gehostet über next/font (keine Laufzeit-Anfrage an Google,
 * DSGVO-konform).
 */
export const sans = Archivo({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  axes: ["wdth"],
});

/** Alias, damit bestehende --font-display-Verweise weiter funktionieren. */
export const display = sans;
