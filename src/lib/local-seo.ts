export type LocalServiceId = "webdesign" | "social-media";
export type CitySlug =
  | "neustadt-in-sachsen"
  | "dresden"
  | "chemnitz"
  | "pirna"
  | "sebnitz"
  | "bautzen"
  | "leipzig"
  | "meissen";

export type LocalCity = {
  slug: CitySlug;
  name: string;
  region: string;
  area: string;
  nearby: string[];
  /** Stadtspezifischer Einstieg ins Problem. */
  localContext: string;
  /** Stadtspezifischer Bedarf. */
  localNeed: string;
  /** Was die Stadt/den Markt besonders macht (Fließtext). */
  scene: string;
  /** Drei stadtspezifische Punkte. */
  highlights: { title: string; text: string }[];
  /** Stadtspezifische FAQ, ergänzt die Leistungs-FAQ. */
  localFaq: { q: string; a: string }[];
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
  metaPromise: string;
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
      "Neustadt in Sachsen liegt am Rand der Sächsischen Schweiz, ländlich und überschaubar. Viele Betriebe leben hier von Stammkunden und Empfehlungen aus den umliegenden Orten.",
    localNeed:
      "Gerade abseits der großen Städte zahlt ein professioneller Auftritt darauf ein, schnell Vertrauen aufzubauen und über Neustadt hinaus gefunden zu werden.",
    scene:
      "Neustadt ist geprägt von Handwerk, kleinen Dienstleistern und Pendlern Richtung Dresden. Der Online-Wettbewerb ist geringer als in der Großstadt, was eine klare Website zu einem echten Vorsprung macht: Wer hier sauber auftritt, fällt auf.",
    highlights: [
      {
        title: "Umland",
        text: "Sebnitz, Stolpen, Hohnstein, Bischofswerda und Pirna gehören zum typischen Einzugsgebiet.",
      },
      {
        title: "Weniger Wettbewerb online",
        text: "Viele Betriebe der Region sind im Netz kaum sichtbar. Eine gute Seite verschafft schnell einen Vorsprung.",
      },
      {
        title: "Vertrauen zählt",
        text: "In einer kleineren Stadt entscheidet Persönlichkeit. Echte Bilder und ein klarer Ansprechpartner wirken stärker als Hochglanz.",
      },
    ],
    localFaq: [
      {
        q: "Lohnt sich eine Website auch in einer kleineren Stadt wie Neustadt?",
        a: "Gerade dort. Weil viele Betriebe in der Region online kaum auftauchen, fällt ein klarer Auftritt schnell auf und bringt Anfragen aus Neustadt und den Nachbarorten.",
      },
    ],
  },
  {
    slug: "dresden",
    name: "Dresden",
    region: "Dresden und Umgebung",
    area: "Dresden, Radebeul, Freital, Pirna, Coswig und Heidenau",
    nearby: ["Radebeul", "Freital", "Pirna", "Coswig", "Heidenau"],
    localContext:
      "Dresden ist die Landeshauptstadt und ein dichter Markt. Von der quirligen Neustadt über Striesen und Blasewitz bis Pieschen und Prohlis vergleichen Kunden online sehr genau, bevor sie sich melden.",
    localNeed:
      "Zwischen vielen Anbietern in der Stadt entscheidet ein klarer, schneller Auftritt darüber, wer die Anfrage bekommt. Nicht der lauteste, sondern der verständlichste.",
    scene:
      "Dresden lebt von einer Mischung aus Kultur und Tourismus rund um Frauenkirche, Zwinger und Semperoper, einem starken Mittelstand und der Technologiebranche im Dresdner Norden, dem sogenannten Silicon Saxony. Entsprechend unterschiedlich sind die Kunden, vom Stadtteil-Handwerker bis zur spezialisierten Praxis in Blasewitz.",
    highlights: [
      {
        title: "Stadtteile und Umland",
        text: "Neustadt, Striesen, Blasewitz, Loschwitz, Pieschen und Prohlis sowie Radebeul, Freital, Pirna, Coswig und Heidenau im Umland.",
      },
      {
        title: "Starker Wettbewerb",
        text: "In vielen Branchen gibt es in Dresden viele Anbieter. Wer klar zeigt, was er macht, hebt sich schneller ab.",
      },
      {
        title: "Mobil zuerst",
        text: "Viele Dresdner suchen unterwegs am Handy. Eine schnelle, mobil saubere Seite ist hier Pflicht.",
      },
    ],
    localFaq: [
      {
        q: "Arbeiten Sie für Betriebe in den Dresdner Stadtteilen?",
        a: "Ja. Ob Neustadt, Striesen, Blasewitz oder das Umland wie Radebeul und Freital, die Seite wird so aufgebaut, dass Kunden aus Ihrem Stadtteil und der Region Sie finden.",
      },
    ],
  },
  {
    slug: "chemnitz",
    name: "Chemnitz",
    region: "Chemnitz und Mittelsachsen",
    area: "Chemnitz, Zwickau, Mittweida, Limbach-Oberfrohna, Freiberg und Annaberg-Buchholz",
    nearby: ["Zwickau", "Mittweida", "Limbach-Oberfrohna", "Freiberg", "Annaberg-Buchholz"],
    localContext:
      "Chemnitz ist eine Industrie- und Mittelstandsstadt mit Maschinenbau, Zulieferern und vielen spezialisierten Dienstleistern. Kunden hier sind sachlich und vergleichen vor allem Kompetenz.",
    localNeed:
      "Ein Auftritt, der Kompetenz nüchtern zeigt und Anfragen aus der Region einfach macht, passt zu Chemnitz besser als laute Werbung.",
    scene:
      "Chemnitz, früher Karl-Marx-Stadt und bekannt durch den Nischel, ist Kulturhauptstadt Europas 2025 und stark vom produzierenden Mittelstand und der Technischen Universität geprägt. Vom Handwerksbetrieb bis zum Ingenieurbüro zählt hier ein seriöser, klarer Auftritt.",
    highlights: [
      {
        title: "Umland und Mittelsachsen",
        text: "Zwickau, Mittweida, Limbach-Oberfrohna, Freiberg und Annaberg-Buchholz gehören zum Einzugsgebiet.",
      },
      {
        title: "Mittelstand und Industrie",
        text: "Viele Kunden kommen aus Produktion, Handwerk und technischen Dienstleistungen. Sachlichkeit schlägt Effekt.",
      },
      {
        title: "Kulturhauptstadt 2025",
        text: "Die Aufmerksamkeit für Chemnitz ist gerade hoch. Ein guter Zeitpunkt, online sichtbar zu sein.",
      },
    ],
    localFaq: [
      {
        q: "Passt mein Auftritt zum eher sachlichen Chemnitzer Markt?",
        a: "Genau darauf wird geachtet: Ihre Kompetenz wird klar und ohne übertriebene Werbung gezeigt, damit Kunden aus Chemnitz und Mittelsachsen schnell Vertrauen fassen.",
      },
    ],
  },
  {
    slug: "pirna",
    name: "Pirna",
    region: "Sächsische Schweiz und Elbland",
    area: "Pirna, Heidenau, Königstein, Bad Schandau, Sebnitz und Dresden",
    nearby: ["Heidenau", "Königstein", "Bad Schandau", "Dohna", "Sebnitz"],
    localContext:
      "Pirna gilt als Tor zur Sächsischen Schweiz. Die malerische Altstadt, der Tourismus und die Nähe zu Dresden prägen die Stadt und damit auch das Suchverhalten der Kunden.",
    localNeed:
      "Zwischen Einheimischen, Pendlern und Gästen entscheidet ein klarer Auftritt, ob Sie als ortsansässiger Anbieter wahrgenommen werden.",
    scene:
      "Pirna lebt von Tourismus rund um die Altstadt mit dem berühmten Canaletto-Blick, vom Handwerk und von Pendlern nach Dresden. Viele Betriebe bedienen sowohl Stammkunden vor Ort als auch Gäste der Sächsischen Schweiz.",
    highlights: [
      {
        title: "Umland",
        text: "Heidenau, Königstein, Bad Schandau, Dohna und Sebnitz sowie Dresden gehören zum Einzugsgebiet.",
      },
      {
        title: "Tourismus und Region",
        text: "Wer Gäste der Sächsischen Schweiz erreichen will, profitiert von einer Seite, die Leistungen und Einsatzgebiet klar zeigt.",
      },
      {
        title: "Nähe zu Dresden",
        text: "Viele Kunden vergleichen Pirna mit Dresdner Anbietern. Ein klarer lokaler Bezug macht den Unterschied.",
      },
    ],
    localFaq: [
      {
        q: "Erreiche ich mit der Website auch Gäste der Sächsischen Schweiz?",
        a: "Ja. Die Seite kann so aufgebaut werden, dass neben Stammkunden aus Pirna auch Besucher der Region sehen, was Sie anbieten und wie sie Sie erreichen.",
      },
    ],
  },
  {
    slug: "sebnitz",
    name: "Sebnitz",
    region: "Sächsische Schweiz",
    area: "Sebnitz, Neustadt in Sachsen, Stolpen, Hohnstein, Bad Schandau und Sohland",
    nearby: ["Neustadt in Sachsen", "Stolpen", "Hohnstein", "Bad Schandau", "Sohland"],
    localContext:
      "Sebnitz liegt mitten in der Sächsischen Schweiz nahe der tschechischen Grenze. Als Stadt der Kunstblume und durch den Tourismus im Nationalpark ist der Markt klein, aber besonders.",
    localNeed:
      "Hier zählen regionale Nähe und Stammkundschaft. Eine klare Website hilft, über Sebnitz hinaus in der ganzen Sächsischen Schweiz gefunden zu werden.",
    scene:
      "Sebnitz ist bekannt für die Seidene Kunstblume und liegt direkt am Nationalpark Sächsische Schweiz, nahe Hinterhermsdorf und dem Kirnitzschtal. Betriebe leben von Einheimischen, Tagesgästen und der Nähe zu Tschechien.",
    highlights: [
      {
        title: "Umland",
        text: "Neustadt in Sachsen, Stolpen, Hohnstein, Bad Schandau und Sohland liegen im Einzugsgebiet.",
      },
      {
        title: "Tourismus im Nationalpark",
        text: "Gäste der Sächsischen Schweiz suchen unterwegs. Eine mobil saubere Seite mit klarem Angebot hilft direkt.",
      },
      {
        title: "Grenznähe",
        text: "Die Nähe zu Tschechien und die kleineren Orte ringsum erweitern den möglichen Kundenkreis.",
      },
    ],
    localFaq: [
      {
        q: "Ist der Markt in Sebnitz nicht zu klein für eine eigene Website?",
        a: "Eine gute Seite erreicht nicht nur Sebnitz, sondern die ganze Sächsische Schweiz und Tagesgäste der Region. Gerade weil viele Betriebe online wenig zeigen, lohnt sich ein klarer Auftritt.",
      },
    ],
  },
  {
    slug: "bautzen",
    name: "Bautzen",
    region: "Oberlausitz",
    area: "Bautzen, Bischofswerda, Kamenz, Hoyerswerda, Görlitz und Löbau",
    nearby: ["Bischofswerda", "Kamenz", "Hoyerswerda", "Görlitz", "Löbau"],
    localContext:
      "Bautzen ist das Zentrum der Oberlausitz, zweisprachig deutsch-sorbisch und geprägt von einer historischen Altstadt mit ihren Türmen. Der Markt reicht weit ins Umland.",
    localNeed:
      "Wer in Bautzen und der Oberlausitz gefunden werden will, braucht einen Auftritt, der die ganze Region klar bedient.",
    scene:
      "Bautzen ist bekannt für seine Türme, die sorbische Kultur und den Bautz'ner Senf. Wirtschaftlich prägen Mittelstand, Handwerk und Dienstleister die Stadt zwischen Dresden und Görlitz.",
    highlights: [
      {
        title: "Oberlausitz",
        text: "Bischofswerda, Kamenz, Hoyerswerda, Görlitz und Löbau gehören zum Einzugsgebiet.",
      },
      {
        title: "Zweisprachige Region",
        text: "In Teilen der Oberlausitz spielt das Sorbische eine Rolle. Regionale Nähe schafft hier besonders Vertrauen.",
      },
      {
        title: "Weite Wege",
        text: "Das Einzugsgebiet ist groß. Ein klares Einsatzgebiet auf der Seite hilft Kunden, sich richtig einzuordnen.",
      },
    ],
    localFaq: [
      {
        q: "Deckt die Website auch die weitere Oberlausitz ab?",
        a: "Ja. Die Seite wird so aufgebaut, dass neben Bautzen auch Orte wie Bischofswerda, Kamenz, Hoyerswerda und Görlitz als Einsatzgebiet sichtbar werden.",
      },
    ],
  },
  {
    slug: "leipzig",
    name: "Leipzig",
    region: "Leipzig und Umgebung",
    area: "Leipzig, Markkleeberg, Schkeuditz, Taucha, Markranstädt und Borna",
    nearby: ["Markkleeberg", "Schkeuditz", "Taucha", "Markranstädt", "Borna"],
    localContext:
      "Leipzig wächst schnell, mit vielen jungen Unternehmen, einer lebendigen Kreativszene und entsprechend hohem Wettbewerb. Kunden hier vergleichen online genau und erwarten einen modernen Auftritt.",
    localNeed:
      "Wer in Leipzig auffallen will, braucht eine Seite, die klar positioniert, schnell verstanden wird und Anfragen gezielt einsammelt.",
    scene:
      "Leipzig ist Messe- und Buchstadt, bekannt für Musik mit Bach und Gewandhaus und für die Kreativszene rund um Plagwitz und die Baumwollspinnerei. Der schnelle Zuzug sorgt für viele neue Betriebe, aber auch für starke Konkurrenz.",
    highlights: [
      {
        title: "Stadtteile und Umland",
        text: "Plagwitz, Connewitz, Gohlis und das Zentrum sowie Markkleeberg, Schkeuditz, Taucha und Borna im Umland.",
      },
      {
        title: "Hoher Wettbewerb",
        text: "In Leipzig ist fast jede Branche gut besetzt. Eine klare Positionierung ist entscheidend, um aufzufallen.",
      },
      {
        title: "Anspruch an Design",
        text: "Das Publikum ist online affin und erwartet einen modernen, schnellen Auftritt.",
      },
    ],
    localFaq: [
      {
        q: "Wie hebe ich mich im umkämpften Leipziger Markt ab?",
        a: "Mit einer klaren Positionierung statt Bauchladen. Die Seite zeigt fokussiert, was Sie am besten können und für wen, damit passende Kunden in Leipzig schneller bei Ihnen landen.",
      },
    ],
  },
  {
    slug: "meissen",
    name: "Meißen",
    region: "Meißen und Elbland",
    area: "Meißen, Radebeul, Coswig, Riesa, Großenhain und Nossen",
    nearby: ["Radebeul", "Coswig", "Riesa", "Großenhain", "Nossen"],
    localContext:
      "Meißen ist von Tradition geprägt. Porzellan, Albrechtsburg, Dom und der sächsische Weinbau ziehen Besucher an, und viele Betriebe verbinden Handwerk mit treuer Stammkundschaft.",
    localNeed:
      "Eine klare Website hilft, neben den Stammkunden auch neue Anfragen aus Meißen und dem Elbland zu gewinnen.",
    scene:
      "Meißen ist weltbekannt für das Meissener Porzellan, die Albrechtsburg als ältestes Schloss Deutschlands und den Weinbau an der Sächsischen Weinstraße. Tourismus, Handwerk und kleinere Betriebe bestimmen den Markt im Elbland.",
    highlights: [
      {
        title: "Elbland",
        text: "Radebeul, Coswig, Riesa, Großenhain und Nossen sowie Dresden liegen im Einzugsgebiet.",
      },
      {
        title: "Tradition und Tourismus",
        text: "Gäste und die Weinregion bringen Laufkundschaft. Eine Seite, die Qualität zeigt, zahlt sich aus.",
      },
      {
        title: "Handwerk und Weinbau",
        text: "Viele Betriebe leben von Können und Wiedererkennung. Echte Bilder wirken hier besonders.",
      },
    ],
    localFaq: [
      {
        q: "Passt ein moderner Auftritt zum traditionsreichen Meißen?",
        a: "Gerade die Verbindung aus Tradition und einem klaren, modernen Auftritt wirkt stark. Die Seite zeigt Ihr Können seriös und macht es Kunden aus Meißen und dem Elbland leicht, Sie zu finden.",
      },
    ],
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
    metaPromise:
      "Moderne Websites für klare Leistungen, lokale Sichtbarkeit und einfache Anfragen. Persönlich und direkt.",
    intro:
      "Eine gute Website ist mehr als eine digitale Visitenkarte. Sie erklärt Ihr Angebot, nimmt Einwände vorweg und führt Besucher Schritt für Schritt zur Kontaktaufnahme.",
    pain:
      "Viele Unternehmen leisten starke Arbeit, wirken online aber kleiner, unklarer oder austauschbarer als sie wirklich sind. Das kostet Sichtbarkeit, Vertrauen und Anfragen.",
    localBenefit:
      "Mit lokal ausgerichteter Struktur, klaren Inhalten und sauberer Technik entsteht ein Auftritt, den Google bei Suchanfragen in Ihrer Region besser einordnen kann.",
    features: [
      {
        title: "Klarer Aufbau",
        text: "Struktur, Navigation und Inhalte werden auf Ihre Zielgruppe ausgerichtet, damit Besucher schnell verstehen, warum Sie die richtige Wahl sind.",
      },
      {
        title: "Hochwertiges Design",
        text: "Ein ruhiger, professioneller Look, der zu Ihrem Anspruch passt und auf Smartphone, Tablet und Desktop sauber funktioniert.",
      },
      {
        title: "Lokale SEO-Grundlage",
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
        text: "Ich spreche mit Ihnen über Angebot, Zielgruppe, Region und die Anfragen, die Ihre Website bringen soll.",
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
      "Im kostenlosen Erstgespräch schaue ich auf Ihre aktuelle Sichtbarkeit und kläre, wie eine professionelle Website mehr passende Anfragen bringen kann.",
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
    metaPromise:
      "Strategie, Content, Videos und laufende Betreuung für regionale Sichtbarkeit und planbare Beiträge.",
    intro:
      "Social Media funktioniert dann, wenn Inhalte regelmäßig erscheinen, zur Marke passen und echte Einblicke geben. Genau da setzt eine klare Betreuung an.",
    pain:
      "Oft gibt es genug Material aus Projekten, Team, Alltag und Ergebnissen, aber keinen Plan und keine Zeit für konsequente Umsetzung.",
    localBenefit:
      "Mit regional relevanten Themen, einheitlicher Gestaltung und planbarem Posting entsteht Sichtbarkeit bei Menschen, die Ihr Unternehmen in der Nähe wahrnehmen sollen.",
    features: [
      {
        title: "Strategie und Themen",
        text: "Ich kläre mit Ihnen Kanäle, Zielgruppen und Themen, damit Inhalte nicht zufällig entstehen, sondern auf Ihre Ziele einzahlen.",
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
        text: "Ich schaue auf bestehende Kanäle, Ziele, Zielgruppen und den regionalen Wettbewerb.",
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
      "Im kostenlosen Erstgespräch kläre ich, welche Kanäle, Inhalte und Abläufe für Ihr Unternehmen sinnvoll sind.",
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
    description: `${service.label} in ${city.name}: ${service.metaPromise}`,
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
