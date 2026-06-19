/**
 * Zentrale Inhalts- und Kontakt-Konfiguration.
 * Hier kannst du die echten Daten eintragen.
 * Diese Werte werden über die ganze Seite (Header, Footer, Kontakt, SEO) verwendet.
 */

export const site = {
  name: "Schurz Marketing",
  founder: "Jonas Schurz",
  /** Spätere Live-Domain. */
  domain: "schurz-marketing.de",
  url: "https://schurz-marketing.de",
  tagline: "Webdesign & Social Media für Unternehmen und Dienstleister",

  /** Schwerpunktregion. */
  region: "Sachsen",
  /** Wichtigste Orte im Einsatzgebiet (für Texte und Schema). */
  serviceArea: [
    "Dresden",
    "Sebnitz",
    "Pirna",
    "Neustadt in Sachsen",
    "Sächsische Schweiz",
    "Bautzen",
    "Oberlausitz",
    "Meißen",
    "Chemnitz",
    "Leipzig",
  ],

  /** Kontaktdaten. Leere optionale Felder werden im Frontend ausgeblendet. */
  contact: {
    email: "kontakt@schurz-marketing.de",
    phone: "0152 0426 3490",
    phoneHref: "+4915204263490", // klickbares tel:
    whatsapp: "", // z. B. "4915123456789" für https://wa.me/...
    city: "Deutschlandweit",
  },

  /** Optionale Social-Media-Profile (leer lassen, wenn nicht vorhanden). */
  social: {
    instagram: "", // z. B. "https://instagram.com/..."
    linkedin: "",
    tiktok: "",
  },
} as const;

/** Hauptnavigation. */
export const navItems = [
  { label: "Start", href: "/" },
  { label: "Webdesign", href: "/webdesign" },
  { label: "Social Media", href: "/social-media" },
  { label: "Handwerker", href: "/handwerker" },
  { label: "Über mich", href: "/ueber-mich" },
  { label: "Kontakt", href: "/kontakt" },
] as const;

/** Die beiden Kern-Leistungen (für Startseite, Footer, Verlinkungen). */
export const services = [
  {
    id: "webdesign",
    href: "/webdesign",
    title: "Webdesign",
    short:
      "Websites, die Ihre Leistungen klar zeigen und es Kunden leicht machen, eine Anfrage zu stellen. Schnell, gut auffindbar, DSGVO-konform und barrierefrei.",
  },
  {
    id: "social-media",
    href: "/social-media",
    title: "Social-Media-Betreuung",
    short:
      "Strategie, Content und laufende Betreuung, damit Ihre Marke sichtbar bleibt, ohne dass es Ihre Zeit kostet.",
  },
] as const;

export type NavItem = (typeof navItems)[number];
export type Service = (typeof services)[number];
