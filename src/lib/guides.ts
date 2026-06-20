/**
 * Redaktionsplan für spätere Ratgeberseiten.
 *
 * Die Einträge sind bewusst noch nicht als öffentliche Routen umgesetzt.
 * Erst veröffentlichen, wenn ein vollständiger, fachlich geprüfter Artikel
 * mit eigenen Beispielen und sinnvollen internen Links vorliegt.
 */
export const plannedGuides = [
  {
    slug: "was-kostet-eine-website-fuer-handwerker",
    title: "Was kostet eine Website für Handwerker?",
    primaryTopic: "Kosten, Umfang und sinnvolle Bestandteile einer Handwerker-Website",
    linksTo: ["/handwerker", "/webdesign", "/kontakt"],
  },
  {
    slug: "was-gehoert-auf-eine-gute-handwerker-webseite",
    title: "Was gehört auf eine gute Handwerker-Webseite?",
    primaryTopic: "Leistungen, Projektbilder, Einsatzgebiet, Vertrauen und Kontaktwege",
    linksTo: ["/handwerker", "/kontakt"],
  },
  {
    slug: "website-erstellen-lassen-oder-baukasten",
    title: "Website erstellen lassen oder Baukasten nutzen?",
    primaryTopic: "Unterschiede bei Zeit, Qualität, Pflege und Auffindbarkeit",
    linksTo: ["/webdesign", "/kontakt"],
  },
  {
    slug: "warum-handwerker-webseiten-keine-anfragen-bringen",
    title: "Warum viele Handwerker-Webseiten keine Anfragen bringen",
    primaryTopic: "Typische Inhalts-, Technik- und Kontaktfehler",
    linksTo: ["/handwerker", "/webdesign", "/kontakt"],
  },
  {
    slug: "social-media-fuer-handwerker",
    title: "Social Media für Handwerker: Was wirklich sinnvoll ist",
    primaryTopic: "Projektbilder, Einblicke, Recruiting und realistischer Aufwand",
    linksTo: ["/social-media", "/handwerker", "/kontakt"],
  },
  {
    slug: "webdesign-dresden-worauf-unternehmen-achten-sollten",
    title: "Webdesign Dresden: Worauf Unternehmen achten sollten",
    primaryTopic: "Lokaler Wettbewerb, Zielgruppen, Inhalte und Anfragewege",
    linksTo: ["/webdesign/dresden", "/webdesign", "/kontakt"],
  },
  {
    slug: "google-unternehmensprofil-fuer-handwerker",
    title: "Google Unternehmensprofil für Handwerker optimieren",
    primaryTopic: "Kategorien, Leistungen, Bilder, Bewertungen und aktuelle Daten",
    linksTo: ["/handwerker", "/sachsen", "/kontakt"],
  },
  {
    slug: "projektbilder-auf-webseiten-richtig-nutzen",
    title: "Projektbilder auf Webseiten richtig nutzen",
    primaryTopic: "Auswahl, Einordnung, Alt-Texte, Dateigröße und Freigaben",
    linksTo: ["/webdesign", "/handwerker", "/kontakt"],
  },
  {
    slug: "website-relaunch-fuer-kleine-unternehmen",
    title: "Website-Relaunch für kleine Unternehmen",
    primaryTopic: "Bestand prüfen, URLs erhalten, Inhalte überarbeiten und neu veröffentlichen",
    linksTo: ["/webdesign", "/webdesign-dienstleister", "/kontakt"],
  },
  {
    slug: "lokale-seo-fuer-dienstleister-in-sachsen",
    title: "Lokale SEO für Dienstleister in Sachsen",
    primaryTopic: "Standortsignale, Leistungsseiten, interne Links und Google-Unternehmensprofil",
    linksTo: ["/sachsen", "/webdesign-dienstleister", "/kontakt"],
  },
] as const;
