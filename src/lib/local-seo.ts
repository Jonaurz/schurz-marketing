export type LocalServiceId = "webdesign" | "social-media";
export type CitySlug = "neustadt-in-sachsen" | "dresden" | "chemnitz";

export type LocalCity = {
  slug: CitySlug;
  name: string;
  region: string;
  area: string;
  nearby: string[];
  localContext: string;
  localNeed: string;
};

export type LocalService = {
  id: LocalServiceId;
  basePath: string;
  overviewHref: string;
  label: string;
  shortLabel: string;
  titleWord: string;
  image: {
    src: string;
    alt: string;
  };
  promise: string;
  intro: string;
  pain: string;
  localBenefit: string;
  features: { title: string; text: string }[];
  deliverables: string[];
  process: { no: string; title: string; text: string }[];
  faq: { q: string; a: string }[];
  ctaTitle: string;
  ctaSubtitle: string;
};

export type LocalSeoPage = {
  service: LocalService;
  city: LocalCity;
  href: string;
  title: string;
  description: string;
  h1: string;
  relatedHref: string;
  relatedLabel: string;
};

export const localCities: LocalCity[] = [
  {
    slug: "neustadt-in-sachsen",
    name: "Neustadt in Sachsen",
    region: "Sächsische Schweiz und Oberlausitz",
    area: "Neustadt in Sachsen, Sebnitz, Stolpen, Hohnstein, Bischofswerda und Pirna",
    nearby: ["Sebnitz", "Stolpen", "Hohnstein", "Bischofswerda", "Pirna"],
    localContext:
      "In und um Neustadt in Sachsen suchen Kunden oft gezielt nach erreichbaren Dienstleistern, Praxen, Handwerksbetrieben und lokalen Angeboten.",
    localNeed:
      "Gerade abseits der großen Städte zahlt ein professioneller Auftritt darauf ein, schnell Vertrauen aufzubauen und bei regionalen Suchanfragen sichtbar zu sein.",
  },
  {
    slug: "dresden",
    name: "Dresden",
    region: "Dresden und Umgebung",
    area: "Dresden, Radebeul, Freital, Pirna, Coswig und Heidenau",
    nearby: ["Radebeul", "Freital", "Pirna", "Coswig", "Heidenau"],
    localContext:
      "Dresden ist ein dichter Markt mit vielen Anbietern, starken Stadtteilen und Kunden, die online sehr bewusst vergleichen.",
    localNeed:
      "Wer in Dresden gefunden werden will, braucht einen Auftritt, der klar positioniert, schnell verstanden wird und die eigene Qualität sichtbar macht.",
  },
  {
    slug: "chemnitz",
    name: "Chemnitz",
    region: "Chemnitz und Mittelsachsen",
    area: "Chemnitz, Zwickau, Mittweida, Limbach-Oberfrohna, Freiberg und Annaberg-Buchholz",
    nearby: ["Zwickau", "Mittweida", "Limbach-Oberfrohna", "Freiberg", "Annaberg-Buchholz"],
    localContext:
      "Chemnitz verbindet Industrie, Mittelstand, Handwerk, Kultur und viele spezialisierte Dienstleister mit regionalem Wettbewerb.",
    localNeed:
      "Für Unternehmen in Chemnitz lohnt sich ein Auftritt, der Kompetenz sachlich zeigt und Anfragen aus der Region einfacher macht.",
  },
];

export const localServices: LocalService[] = [
  {
    id: "webdesign",
    basePath: "/webdesign",
    overviewHref: "/webdesign",
    label: "Webdesign",
    shortLabel: "Webdesign",
    titleWord: "Website",
    image: {
      src: "/images/schurz-marketing-webdesign.png",
      alt: "Von Schurz Marketing gestaltete Website auf Laptop und Smartphone",
    },
    promise:
      "Professionelle Websites, die hochwertig aussehen, schnell laden, Vertrauen schaffen und aus regionalen Besuchern echte Anfragen machen.",
    intro:
      "Eine gute Website ist mehr als eine digitale Visitenkarte. Sie erklärt Ihr Angebot, nimmt Einwände vorweg und führt Besucher Schritt für Schritt zur Kontaktaufnahme.",
    pain:
      "Viele Unternehmen leisten starke Arbeit, wirken online aber kleiner, unklarer oder austauschbarer als sie wirklich sind. Das kostet Sichtbarkeit, Vertrauen und Anfragen.",
    localBenefit:
      "Mit lokal ausgerichteter Struktur, klaren Inhalten und sauberer technischer Basis entsteht ein Auftritt, den Google bei Suchanfragen in Ihrer Region besser einordnen kann.",
    features: [
      {
        title: "Strategischer Aufbau",
        text: "Struktur, Navigation und Inhalte werden auf Ihre Zielgruppe ausgerichtet, damit Besucher schnell verstehen, warum Sie die richtige Wahl sind.",
      },
      {
        title: "Hochwertiges Design",
        text: "Ein ruhiger, professioneller Look, der zu Ihrem Anspruch passt und auf Smartphone, Tablet und Desktop sauber funktioniert.",
      },
      {
        title: "Lokale Suchmaschinenbasis",
        text: "Seitentitel, Meta-Daten, interne Verlinkung und Inhalte werden so aufgebaut, dass Google Ihre regionale Relevanz besser versteht.",
      },
      {
        title: "DSGVO und Barrierefreiheit",
        text: "Datenschutz, klare Kontraste, Tastaturbedienung und saubere Formulare werden von Beginn an mitgedacht.",
      },
    ],
    deliverables: [
      "Konzept, Struktur und Nutzerführung",
      "Responsives Webdesign und Umsetzung",
      "SEO-Grundlage für relevante Suchbegriffe",
      "Kontaktwege, Formulare und klare Handlungsaufforderungen",
      "Launch-Begleitung und auf Wunsch laufende Pflege",
    ],
    process: [
      {
        no: "1",
        title: "Ziele klären",
        text: "Wir sprechen über Angebot, Zielgruppe, Region und die Anfragen, die Ihre Website bringen soll.",
      },
      {
        no: "2",
        title: "Struktur planen",
        text: "Aus Ihren Leistungen entsteht eine klare Seitenstruktur mit Suchbegriffen, Prioritäten und Kontaktwegen.",
      },
      {
        no: "3",
        title: "Design umsetzen",
        text: "Die Website wird gestaltet, technisch gebaut und auf allen Geräten sauber getestet.",
      },
      {
        no: "4",
        title: "Online gehen",
        text: "Nach Freigabe geht die Seite live. Auf Wunsch bleiben Pflege, Ausbau und Optimierung in einer Hand.",
      },
    ],
    faq: [
      {
        q: "Kann eine neue Website wirklich bei lokalen Google-Suchen helfen?",
        a: "Ja, wenn Inhalte, Technik und Struktur sauber aufgebaut sind. SEO braucht Zeit, aber eine klare regionale Seite ist eine wichtige Grundlage.",
      },
      {
        q: "Muss ich die Texte selbst schreiben?",
        a: "Nein. Die Inhalte werden gemeinsam entwickelt, damit Ihr Angebot fachlich richtig und für Kunden verständlich beschrieben wird.",
      },
      {
        q: "Wird die Website auch mobil optimiert?",
        a: "Ja. Mobile Darstellung, Ladezeit und Bedienbarkeit sind fester Bestandteil der Umsetzung.",
      },
    ],
    ctaTitle: "Ihre Website soll regional mehr leisten?",
    ctaSubtitle:
      "Im kostenlosen Erstgespräch schauen wir auf Ihre aktuelle Sichtbarkeit und klären, wie eine professionelle Website mehr passende Anfragen bringt.",
  },
  {
    id: "social-media",
    basePath: "/social-media",
    overviewHref: "/social-media",
    label: "Social-Media-Betreuung",
    shortLabel: "Social Media",
    titleWord: "Social Media",
    image: {
      src: "/images/schurz-marketing-social-media.png",
      alt: "Beispiel für einen von Schurz Marketing betreuten Social-Media-Auftritt",
    },
    promise:
      "Strategie, Content, Videos und laufende Betreuung, damit Ihre Marke in der Region sichtbar bleibt, ohne Ihren Arbeitsalltag zu blockieren.",
    intro:
      "Social Media funktioniert dann, wenn Inhalte regelmäßig erscheinen, zur Marke passen und echte Einblicke geben. Genau da setzt eine klare Betreuung an.",
    pain:
      "Oft gibt es genug Material aus Projekten, Team, Alltag und Ergebnissen, aber keinen Plan und keine Zeit für konsequente Umsetzung.",
    localBenefit:
      "Mit regional relevanten Themen, einheitlicher Gestaltung und planbarem Posting entsteht Sichtbarkeit bei Menschen, die Ihr Unternehmen in der Nähe wahrnehmen sollen.",
    features: [
      {
        title: "Strategie und Themen",
        text: "Wir klären Kanäle, Zielgruppen und Themen, damit Inhalte nicht zufällig entstehen, sondern auf Ihre Ziele einzahlen.",
      },
      {
        title: "Reels, Videos und Posts",
        text: "Aus Ihrem Alltag entstehen professionelle Inhalte, die nahbar wirken und trotzdem hochwertig umgesetzt sind.",
      },
      {
        title: "Redaktionsplanung",
        text: "Sie wissen, was wann erscheint. Freigaben bleiben einfach, der laufende Aufwand bleibt überschaubar.",
      },
      {
        title: "Laufende Betreuung",
        text: "Posting, Auswertung und Optimierung sorgen dafür, dass Social Media nicht wieder im Tagesgeschäft liegen bleibt.",
      },
    ],
    deliverables: [
      "Social-Media-Strategie und Kanalempfehlung",
      "Themenplan für regionale Sichtbarkeit",
      "Grafiken, Texte, Reels und Kurzvideos",
      "Posting-Planung und Freigabeprozess",
      "Auswertung und laufende Optimierung",
    ],
    process: [
      {
        no: "1",
        title: "Ausgangslage verstehen",
        text: "Wir schauen auf bestehende Kanäle, Ziele, Zielgruppen und den regionalen Wettbewerb.",
      },
      {
        no: "2",
        title: "Plan entwickeln",
        text: "Aus Leistungen, Alltag und Projekten entsteht ein realistischer Themen- und Postingplan.",
      },
      {
        no: "3",
        title: "Inhalte produzieren",
        text: "Texte, Grafiken und Videos werden einheitlich vorbereitet und zur Freigabe bereitgestellt.",
      },
      {
        no: "4",
        title: "Betreuung verbessern",
        text: "Regelmäßiges Posting und Auswertung zeigen, welche Inhalte funktionieren und wo nachgeschärft wird.",
      },
    ],
    faq: [
      {
        q: "Welche Plattformen sind sinnvoll?",
        a: "Das hängt von Zielgruppe und Angebot ab. Häufig geht es um Instagram, Facebook, LinkedIn, TikTok oder YouTube, aber nicht jeder Kanal ist automatisch sinnvoll.",
      },
      {
        q: "Wie viel Zeit brauche ich selbst?",
        a: "So wenig wie möglich. Von Ihnen kommen Input, Einblicke und Freigaben. Strategie, Produktion und Betreuung werden übernommen.",
      },
      {
        q: "Kann Social Media auch lokal Kunden bringen?",
        a: "Ja. Gerade regionale Einblicke, Projekte und Empfehlungen können Vertrauen aufbauen und dafür sorgen, dass Ihr Unternehmen in der Umgebung präsent bleibt.",
      },
    ],
    ctaTitle: "Ihr Social Media soll regelmäßig sichtbar werden?",
    ctaSubtitle:
      "Im kostenlosen Erstgespräch klären wir, welche Kanäle, Inhalte und Abläufe für Ihr Unternehmen sinnvoll sind.",
  },
];

export function getLocalCity(slug: string) {
  return localCities.find((city) => city.slug === slug);
}

export function getLocalService(id: LocalServiceId) {
  return localServices.find((service) => service.id === id);
}

export function getLocalSeoPage(serviceId: LocalServiceId, citySlug: string): LocalSeoPage | undefined {
  const service = getLocalService(serviceId);
  const city = getLocalCity(citySlug);

  if (!service || !city) {
    return undefined;
  }

  const href = `${service.basePath}/${city.slug}`;
  const relatedServiceId: LocalServiceId = service.id === "webdesign" ? "social-media" : "webdesign";
  const relatedService = getLocalService(relatedServiceId);

  return {
    service,
    city,
    href,
    title: `${service.shortLabel} ${city.name}`,
    description: `${service.label} in ${city.name}: ${service.promise}`,
    h1:
      service.id === "webdesign"
        ? `Webdesign in ${city.name}, das Vertrauen schafft und Anfragen bringt.`
        : `Social Media in ${city.name}, das sichtbar macht, was Sie leisten.`,
    relatedHref: relatedService ? `${relatedService.basePath}/${city.slug}` : service.overviewHref,
    relatedLabel: relatedService ? `${relatedService.shortLabel} in ${city.name}` : "Weitere Leistung",
  };
}

export const localSeoPages = localServices.flatMap((service) =>
  localCities.map((city) => getLocalSeoPage(service.id, city.slug)),
).filter((page): page is LocalSeoPage => Boolean(page));
