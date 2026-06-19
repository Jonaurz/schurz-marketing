export type TradeSlug =
  | "garten-und-landschaftsbau"
  | "bauunternehmen"
  | "zaunbau"
  | "maler"
  | "elektriker"
  | "fliesenleger";

export type Trade = {
  slug: TradeSlug;
  /** Kurzname für Navigation und Karten. */
  name: string;
  /** Wen es anspricht, z. B. "Garten- und Landschaftsbauer". */
  audience: string;
  /** Eyebrow über der H1. */
  eyebrow: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  promise: string;
  intro: string;
  pain: string;
  /** Leistungen, die sich auf der Website klar darstellen lassen. */
  services: string[];
  /** Was eine gute Website für dieses Gewerk enthält. */
  goodSite: { title: string; text: string }[];
  faq: { q: string; a: string }[];
  /** Kurzer Teaser für die Gewerke-Übersicht auf /handwerker. */
  cardText: string;
};

export const trades: Trade[] = [
  {
    slug: "garten-und-landschaftsbau",
    name: "Garten- und Landschaftsbau",
    audience: "Garten- und Landschaftsbauer",
    eyebrow: "Webseiten für GaLaBau",
    metaTitle: "Webseiten für Garten- und Landschaftsbau",
    metaDescription:
      "Webseiten für Garten- und Landschaftsbauer in Sachsen. Projektgalerie, Leistungen, Einsatzgebiet und Anfrageformular, die zusammen mehr regionale Anfragen bringen.",
    h1: "Webseiten für Garten- und Landschaftsbau in Sachsen.",
    promise:
      "Eine Website, die Pflasterarbeiten, Terrassen, Zäune und Gärten mit echten Projektbildern zeigt und Anfragen aus Ihrer Region einfacher macht.",
    intro:
      "Im Garten- und Landschaftsbau entscheidet der erste Eindruck oft über das Bild. Kunden wollen sehen, was Sie schon gebaut haben, bevor sie anfragen. Genau dafür ist eine Website mit Projektgalerie, klaren Leistungen und einem einfachen Anfrageweg da.",
    pain:
      "Viele GaLaBau-Betriebe haben starke Projekte, zeigen online aber kaum Bilder. Kunden können die Qualität dann nicht einschätzen und fragen bei der Konkurrenz an.",
    services: [
      "Pflasterarbeiten und Wege",
      "Terrassen und Außenanlagen",
      "Zäune und Sichtschutz",
      "Naturgärten und Bepflanzung",
      "Teich- und Wasseranlagen",
      "Pflege von Grünflächen",
    ],
    goodSite: [
      {
        title: "Projektgalerie nach Leistung",
        text: "Bilder werden nach Pflaster, Terrasse, Garten und Zaun sortiert, damit Kunden schnell das Passende sehen.",
      },
      {
        title: "Klares Einsatzgebiet",
        text: "Die Orte, in denen Sie arbeiten, stehen sichtbar auf der Seite. Das hilft bei regionalen Suchanfragen.",
      },
      {
        title: "Einfaches Anfrageformular",
        text: "Kunden beschreiben ihr Vorhaben in wenigen Feldern, auf Wunsch mit Foto. Das spart Rückfragen.",
      },
    ],
    faq: [
      {
        q: "Brauche ich für eine GaLaBau-Website viele Projektbilder?",
        a: "Ein paar gute Bilder reichen für den Start. Die Galerie lässt sich später jederzeit erweitern. Wichtiger als die Menge ist, dass die Bilder die Leistungen klar zeigen.",
      },
      {
        q: "Kann ich die Galerie selbst pflegen?",
        a: "Ja, auf Wunsch wird die Seite so eingerichtet, dass Sie Bilder und Projekte selbst ergänzen können. Alternativ übernehme ich die Pflege.",
      },
      {
        q: "Hilft die Website bei Suchen wie „Gartenbau Sächsische Schweiz“?",
        a: "Mit klarer Struktur, regionalen Inhalten und sauberer Technik kann Google Ihre regionale Relevanz besser einordnen. Das ist eine wichtige Grundlage für lokale Sichtbarkeit.",
      },
    ],
    cardText:
      "Pflaster, Terrassen, Zäune und Gärten mit Projektgalerie und Einsatzgebiet.",
  },
  {
    slug: "bauunternehmen",
    name: "Bauunternehmen",
    audience: "Bauunternehmen",
    eyebrow: "Webseiten für Bauunternehmen",
    metaTitle: "Webseiten für Bauunternehmen",
    metaDescription:
      "Webseiten für Bauunternehmen in Sachsen. Leistungsbereiche, Referenzprojekte und klare Kontaktwege für Hochbau, Tiefbau, Sanierung und Außenanlagen.",
    h1: "Webseiten für Bauunternehmen in Sachsen.",
    promise:
      "Eine Website, die Ihre Leistungsbereiche sauber trennt, Referenzprojekte seriös zeigt und sowohl Kunden als auch Fachkräfte anspricht.",
    intro:
      "Bauunternehmen bieten oft sehr unterschiedliche Leistungen an, von Hochbau über Tiefbau bis Sanierung. Eine gute Website ordnet das klar, damit Kunden direkt finden, was sie suchen, und gleichzeitig ein seriöser Gesamteindruck entsteht.",
    pain:
      "Viele Bauunternehmen wirken online unübersichtlich. Leistungsbereiche und Referenzen sind nicht klar getrennt, dadurch geht Vertrauen verloren.",
    services: [
      "Hochbau und Rohbau",
      "Tiefbau und Erdarbeiten",
      "Sanierung und Modernisierung",
      "Außenanlagen und Pflaster",
      "Abbruch und Entkernung",
      "Schlüsselfertiges Bauen",
    ],
    goodSite: [
      {
        title: "Leistungsbereiche getrennt",
        text: "Jeder Bereich bekommt einen eigenen, klaren Abschnitt, statt alles in einen Text zu packen.",
      },
      {
        title: "Referenzprojekte mit Umfang",
        text: "Projekte werden mit Ort, Art und Umfang beschrieben, damit Kunden die Erfahrung einschätzen können.",
      },
      {
        title: "Platz für Stellenangebote",
        text: "Beim Fachkräftemangel hilft ein Karrierebereich, neue Mitarbeiter direkt über die Website zu erreichen.",
      },
    ],
    faq: [
      {
        q: "Sollten alle Leistungsbereiche auf eine Seite?",
        a: "Oft ist es sinnvoll, Hauptbereiche getrennt darzustellen. So finden Kunden schneller das Richtige und Google ordnet die Themen besser ein.",
      },
      {
        q: "Können wir auch offene Stellen über die Website besetzen?",
        a: "Ja. Ein einfacher Karrierebereich mit Stellen und einem kurzen Bewerbungsformular lässt sich gut integrieren.",
      },
      {
        q: "Wie zeigen wir Referenzen, ohne zu viel zu verraten?",
        a: "Auch ohne sensible Details wirken Projekte stark, wenn Art, Region und Umfang klar genannt werden. Die Auswahl stimmen wir gemeinsam ab.",
      },
    ],
    cardText:
      "Hochbau, Tiefbau, Sanierung und Außenanlagen klar getrennt und seriös dargestellt.",
  },
  {
    slug: "zaunbau",
    name: "Zaunbau",
    audience: "Zaunbauer",
    eyebrow: "Webseiten für Zaunbauer",
    metaTitle: "Webseiten für Zaunbauer",
    metaDescription:
      "Webseiten für Zaunbauer in Sachsen. Galerie nach Zaunart, Materialübersicht und ein Anfrageformular mit Maßangaben für mehr passende Anfragen.",
    h1: "Webseiten für Zaunbauer in Sachsen.",
    promise:
      "Eine Website, die Ihre Zäune nach Art und Material zeigt und Kunden ein Anfrageformular bietet, das gleich die wichtigsten Angaben abfragt.",
    intro:
      "Zaunbau ist visuell und sehr konkret. Kunden wissen oft schon ungefähr, was sie wollen, brauchen aber Beispiele und eine einfache Möglichkeit, ihr Vorhaben zu beschreiben. Eine klare Website nimmt ihnen genau das ab.",
    pain:
      "Zaun-Anfragen brauchen Beispiele und Maßangaben. Ohne Galerie und klare Materialien bleiben Anfragen unklar oder aus.",
    services: [
      "Doppelstabmattenzäune",
      "Sichtschutz und Lärmschutz",
      "Gabionen",
      "Tore und Antriebe",
      "Holzzäune",
      "Metall- und Schmuckzäune",
    ],
    goodSite: [
      {
        title: "Galerie nach Zaunart",
        text: "Kunden sehen Beispiele zu Doppelstab, Sichtschutz, Gabionen und Toren und erkennen sofort den Stil.",
      },
      {
        title: "Material- und Stilübersicht",
        text: "Eine kurze Übersicht zu Materialien und Pflege hilft Kunden, sich vorab zu orientieren.",
      },
      {
        title: "Anfrage mit Maßangaben",
        text: "Das Formular fragt Länge, Höhe und Ort ab, damit Sie schneller ein passendes Angebot machen können.",
      },
    ],
    faq: [
      {
        q: "Lohnt sich eine eigene Website nur für Zaunbau?",
        a: "Ja, gerade weil die Suche sehr konkret ist. Wer „Zaunbauer“ plus Ort sucht, soll Sie mit Beispielen und klaren Leistungen finden.",
      },
      {
        q: "Können Kunden über die Website direkt anfragen?",
        a: "Ja. Das Anfrageformular wird so aufgebaut, dass die wichtigsten Angaben gleich mitkommen. Das reduziert Rückfragen.",
      },
      {
        q: "Kann ich neue Zaunarten später ergänzen?",
        a: "Ja, die Galerie und die Leistungen lassen sich jederzeit erweitern, auf Wunsch auch von Ihnen selbst.",
      },
    ],
    cardText:
      "Zaunarten und Materialien mit Galerie und Anfrageformular mit Maßangaben.",
  },
  {
    slug: "maler",
    name: "Maler",
    audience: "Maler und Stuckateure",
    eyebrow: "Webseiten für Malerbetriebe",
    metaTitle: "Webseiten für Malerbetriebe",
    metaDescription:
      "Webseiten für Maler und Stuckateure in Sachsen. Vorher-Nachher-Bilder, klare Leistungen für innen und außen und ein einfacher Anfrageweg.",
    h1: "Webseiten für Malerbetriebe in Sachsen.",
    promise:
      "Eine Website, die Ihre Arbeit mit Vorher-Nachher-Bildern zeigt und Leistungen für innen und außen klar trennt.",
    intro:
      "Malerarbeiten wirken am stärksten im direkten Vergleich. Vorher-Nachher-Bilder zeigen den Unterschied, den Ihre Arbeit macht. Dazu gehören klare Leistungen und ein Weg, schnell anzufragen.",
    pain:
      "Malerleistungen sind erklärungsbedürftig, und gerade Vorher-Nachher-Bilder fehlen oft. Dadurch bleibt der Mehrwert unsichtbar.",
    services: [
      "Innenanstrich und Wohnräume",
      "Fassaden und Außenanstrich",
      "Tapezieren und Wandgestaltung",
      "Lackierarbeiten",
      "Bodenbeschichtung",
      "Trockenbau und Stuck",
    ],
    goodSite: [
      {
        title: "Vorher-Nachher-Galerie",
        text: "Der direkte Vergleich zeigt den Effekt Ihrer Arbeit und schafft schnell Vertrauen.",
      },
      {
        title: "Leistungen innen und außen getrennt",
        text: "Kunden finden direkt, ob es um Wohnräume, Fassade oder Spezialarbeiten geht.",
      },
      {
        title: "Einsatzgebiet und Kontakt",
        text: "Region und Kontaktwege stehen klar sichtbar, damit aus Interesse eine Anfrage wird.",
      },
    ],
    faq: [
      {
        q: "Wir haben kaum Vorher-Nachher-Bilder. Geht das trotzdem?",
        a: "Ja. Für den Start reichen einige Beispiele. Künftige Projekte lassen sich Schritt für Schritt fotografieren und ergänzen.",
      },
      {
        q: "Sollten wir Innen- und Außenarbeiten getrennt zeigen?",
        a: "Meist ja. So finden Kunden schneller das passende Thema und die Seite wirkt aufgeräumter.",
      },
      {
        q: "Bringt eine Website lokal mehr Anfragen?",
        a: "Mit regionalen Inhalten und sauberer Struktur kann Sie Google bei lokalen Suchen besser einordnen. Das ist die Grundlage für mehr Anfragen aus der Nähe.",
      },
    ],
    cardText:
      "Innen, außen und Fassade mit Vorher-Nachher-Bildern und klaren Leistungen.",
  },
  {
    slug: "elektriker",
    name: "Elektriker",
    audience: "Elektrobetriebe",
    eyebrow: "Webseiten für Elektriker",
    metaTitle: "Webseiten für Elektriker",
    metaDescription:
      "Webseiten für Elektrobetriebe in Sachsen. Leistungen, Notdienst und Photovoltaik klar dargestellt, mit schnellen Kontaktwegen für mehr Anfragen.",
    h1: "Webseiten für Elektrobetriebe in Sachsen.",
    promise:
      "Eine Website, die Ihre Leistungen, Erreichbarkeit und Themen wie Photovoltaik klar zeigt und Kunden schnell zum Kontakt führt.",
    intro:
      "Bei Elektrobetrieben zählt oft Tempo. Kunden suchen eine konkrete Leistung oder schnelle Hilfe. Eine gute Website macht sofort klar, was Sie anbieten, wie schnell Sie erreichbar sind und wie man Sie erreicht.",
    pain:
      "Elektrobetriebe verlieren Anfragen, wenn Leistungen, Notdienst und Erreichbarkeit online nicht sofort sichtbar sind.",
    services: [
      "Elektroinstallation",
      "Smart Home und Gebäudetechnik",
      "Photovoltaik und Speicher",
      "E-Check und Prüfungen",
      "Beleuchtung",
      "Service und Notdienst",
    ],
    goodSite: [
      {
        title: "Erreichbarkeit prominent",
        text: "Telefon und Kontaktwege stehen sichtbar, damit dringende Anfragen sofort ankommen.",
      },
      {
        title: "Photovoltaik als eigenes Thema",
        text: "Gefragte Bereiche wie Photovoltaik und Speicher bekommen einen klaren, eigenen Abschnitt.",
      },
      {
        title: "Leistungen klar gegliedert",
        text: "Privat- und Gewerbekunden finden schnell, was zu ihnen passt.",
      },
    ],
    faq: [
      {
        q: "Sollte der Notdienst auf der Startseite stehen?",
        a: "Wenn Sie einen anbieten, ja. Eine sichtbare Erreichbarkeit sorgt dafür, dass dringende Anfragen nicht bei der Konkurrenz landen.",
      },
      {
        q: "Lohnt sich ein eigener Bereich für Photovoltaik?",
        a: "Häufig ja. Das Thema wird stark gesucht und verdient einen klaren Abschnitt mit Ablauf und Kontaktmöglichkeit.",
      },
      {
        q: "Können wir Privat- und Gewerbekunden trennen?",
        a: "Ja. Eine klare Gliederung hilft beiden Gruppen, schneller das passende Angebot zu finden.",
      },
    ],
    cardText:
      "Installation, Smart Home, Photovoltaik und Notdienst mit schnellen Kontaktwegen.",
  },
  {
    slug: "fliesenleger",
    name: "Fliesenleger",
    audience: "Fliesenlegerbetriebe",
    eyebrow: "Webseiten für Fliesenleger",
    metaTitle: "Webseiten für Fliesenleger",
    metaDescription:
      "Webseiten für Fliesenleger in Sachsen. Projektgalerie nach Raum, Materialberatung und ein einfacher Anfrageweg für mehr regionale Aufträge.",
    h1: "Webseiten für Fliesenleger in Sachsen.",
    promise:
      "Eine Website, die Ihre Fliesenarbeiten nach Raum zeigt und Kunden mit Materialberatung und einfachem Kontakt überzeugt.",
    intro:
      "Fliesenarbeiten leben von Bildern. Bad, Boden oder Terrasse, Kunden wollen sehen, wie Ihr Ergebnis aussieht. Eine Website mit klarer Galerie und kurzer Materialberatung macht den Unterschied sichtbar.",
    pain:
      "Fliesenarbeiten leben von Beispielen. Ohne Galerie wirkt ein Betrieb schnell austauschbar.",
    services: [
      "Bad und Dusche",
      "Bodenfliesen",
      "Terrasse und Balkon",
      "Naturstein",
      "Großformatige Fliesen",
      "Abdichtung und Untergrund",
    ],
    goodSite: [
      {
        title: "Galerie nach Raum",
        text: "Bilder werden nach Bad, Boden und Außenbereich sortiert, damit Kunden ihr Thema sofort finden.",
      },
      {
        title: "Kurze Materialberatung",
        text: "Ein paar klare Hinweise zu Formaten und Materialien helfen Kunden bei der Orientierung.",
      },
      {
        title: "Anfrage mit Raumangaben",
        text: "Das Formular fragt Raum und Fläche ab, damit Sie schneller einschätzen und anbieten können.",
      },
    ],
    faq: [
      {
        q: "Wie viele Projektbilder brauche ich?",
        a: "Für den Start reichen einige gute Beispiele pro Bereich. Die Galerie lässt sich später leicht erweitern.",
      },
      {
        q: "Sollten Bad und Boden getrennt gezeigt werden?",
        a: "Meist ja. Eine Sortierung nach Raum hilft Kunden, schnell das Passende zu sehen.",
      },
      {
        q: "Hilft die Website bei lokalen Suchen?",
        a: "Mit regionalen Inhalten und klarer Struktur kann Google Sie bei Suchen aus Ihrer Region besser einordnen.",
      },
    ],
    cardText:
      "Bad, Boden und Terrasse mit Galerie nach Raum und Materialberatung.",
  },
];

export function getTrade(slug: string) {
  return trades.find((trade) => trade.slug === slug);
}
