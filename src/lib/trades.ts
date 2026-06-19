export type TradeSlug =
  | "garten-und-landschaftsbau"
  | "bauunternehmen"
  | "zaunbau"
  | "maler"
  | "elektriker"
  | "fliesenleger"
  | "dachdecker"
  | "sanitaer-shk";

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
    metaTitle: "Webdesign für Garten- und Landschaftsbau",
    metaDescription:
      "Webdesign für Garten- und Landschaftsbau mit Projektgalerie, Leistungen und Anfrageformular. Aus Neustadt, deutschlandweit persönlich.",
    h1: "Webdesign für Garten- und Landschaftsbau mit starken Projektbildern.",
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
    metaTitle: "Webdesign für Bauunternehmen",
    metaDescription:
      "Webdesign für Bauunternehmen: Leistungsbereiche, Referenzprojekte und klare Projektanfragen. Aus Neustadt in Sachsen, deutschlandweit.",
    h1: "Webdesign für Bauunternehmen, das Erfahrung sichtbar macht.",
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
    metaTitle: "Webdesign für Zaunbauer",
    metaDescription:
      "Webdesign für Zaunbauer mit Galerie nach Zaunart, Materialübersicht und Anfrageformular. Persönlich aus Neustadt, deutschlandweit.",
    h1: "Webdesign für Zaunbauer, das Material und Ergebnisse sichtbar macht.",
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
    metaTitle: "Webdesign für Malerbetriebe",
    metaDescription:
      "Webdesign für Malerbetriebe mit Vorher-Nachher-Bildern, klaren Leistungen und einfachem Anfrageweg. Aus Neustadt, deutschlandweit.",
    h1: "Webdesign für Malerbetriebe, das Ergebnisse sichtbar macht.",
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
    metaTitle: "Webdesign für Elektriker",
    metaDescription:
      "Webdesign für Elektriker mit klaren Leistungen, Photovoltaik, Wartung und schnellen Kontaktwegen. Aus Neustadt, deutschlandweit.",
    h1: "Webdesign für Elektriker mit klaren Leistungen und Kontaktwegen.",
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
    metaTitle: "Webdesign für Fliesenleger",
    metaDescription:
      "Webdesign für Fliesenleger mit Projektgalerie nach Raum, Materialberatung und einfachem Anfrageweg. Aus Neustadt, deutschlandweit.",
    h1: "Webdesign für Fliesenleger, das Räume und Materialien wirken lässt.",
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
  {
    slug: "dachdecker",
    name: "Dachdecker",
    audience: "Dachdeckerbetriebe",
    eyebrow: "Webdesign für Dachdecker",
    metaTitle: "Webdesign für Dachdecker",
    metaDescription:
      "Webdesign für Dachdecker mit Sanierung, Reparatur, Projektbildern und schnellen Kontaktwegen. Aus Neustadt, deutschlandweit persönlich.",
    h1: "Webdesign für Dachdecker, das Vertrauen schon vor dem Termin aufbaut.",
    promise:
      "Eine Website, die Dachsanierung, Reparaturen und weitere Leistungen verständlich trennt, echte Arbeiten zeigt und dringende Anfragen schnell zum richtigen Kontakt führt.",
    intro:
      "Bei Arbeiten am Dach geht es um hohe Investitionen, Sicherheit und eine verlässliche Einschätzung. Kunden möchten sehen, welche Dächer und Leistungen Sie abdecken, wie Sie arbeiten und in welchem Gebiet Sie erreichbar sind.",
    pain:
      "Wenn Sanierung, Reparatur und mögliche Soforthilfe online nicht klar getrennt sind, entstehen unpassende Anfragen oder Interessenten suchen direkt weiter.",
    services: [
      "Dachsanierung und Neueindeckung",
      "Dachreparaturen",
      "Flachdach und Abdichtung",
      "Dachfenster",
      "Dachentwässerung",
      "Wartung und Prüfung",
    ],
    goodSite: [
      {
        title: "Leistungen nach Anlass",
        text: "Sanierung, Reparatur, Wartung und optionale dringende Hilfe werden klar getrennt, damit Kunden schnell richtig anfragen.",
      },
      {
        title: "Projektbilder mit Einordnung",
        text: "Bilder zeigen Dachart, Ausgangslage und Ergebnis, ohne sensible Kundendaten oder erfundene Projektdetails.",
      },
      {
        title: "Einsatzgebiet und Erreichbarkeit",
        text: "Orte, Kontaktzeiten und Telefonnummer stehen sichtbar. Das schafft Sicherheit bei dringenden Anliegen.",
      },
    ],
    faq: [
      {
        q: "Sollte ein Dachdecker-Notdienst auf die Website?",
        a: "Nur wenn Sie diesen wirklich anbieten. Dann sollten Erreichbarkeit, Zeiten und Einsatzgebiet klar genannt werden, damit keine falschen Erwartungen entstehen.",
      },
      {
        q: "Welche Projektbilder sind für Dachdecker sinnvoll?",
        a: "Gut funktionieren Übersichten, Details und Vorher-Nachher-Aufnahmen von Sanierungen, Abdichtungen und Dachfenstern. Schon wenige sauber beschriebene Beispiele helfen.",
      },
      {
        q: "Kann die Website verschiedene Einsatzgebiete abdecken?",
        a: "Ja. Orte und Regionen werden sinnvoll gebündelt. Wichtig sind echte Einsatzgebiete und eigenständige Inhalte statt vieler nahezu gleicher Ortsseiten.",
      },
    ],
    cardText:
      "Sanierung, Reparatur, Dachfenster und Wartung mit Projektbildern und schnellen Kontaktwegen.",
  },
  {
    slug: "sanitaer-shk",
    name: "Sanitär und SHK",
    audience: "Sanitär- und SHK-Betriebe",
    eyebrow: "Webdesign für Sanitär und SHK",
    metaTitle: "Webdesign für Sanitär- und SHK-Betriebe",
    metaDescription:
      "Webdesign für Sanitär und SHK mit Bad, Heizung, Wartung und klaren Kontaktwegen. Persönlich aus Neustadt, deutschlandweit.",
    h1: "Webdesign für Sanitär- und SHK-Betriebe mit klaren Kontaktwegen.",
    promise:
      "Eine Website, die Bad, Heizung, Wartung und weitere Leistungen sauber trennt, hochwertige Projekte zeigt und Kunden schnell zur passenden Anfrage führt.",
    intro:
      "Sanitär- und SHK-Betriebe verbinden planbare Projekte mit dringenden Servicefällen. Eine gute Website muss beides verständlich abbilden, ohne dass Badmodernisierung, Heizungsbau und Wartung in einem langen Leistungstext verschwinden.",
    pain:
      "Wenn Kunden nicht erkennen, ob es um Bad, Heizung, Wartung oder einen akuten Fall geht, landen Anfragen beim falschen Ansprechpartner oder bleiben ganz aus.",
    services: [
      "Badplanung und Badsanierung",
      "Heizungsmodernisierung",
      "Wärmepumpen und erneuerbare Systeme",
      "Wartung und Kundendienst",
      "Sanitärinstallation",
      "Optionaler Störungs- oder Notdienst",
    ],
    goodSite: [
      {
        title: "Bad und Heizung getrennt",
        text: "Planbare Projekte bekommen andere Inhalte und Kontaktwege als Wartung oder dringende Störungen.",
      },
      {
        title: "Projektablauf verständlich",
        text: "Von Beratung und Planung bis zur Umsetzung sehen Kunden, wie ein Bad- oder Heizungsprojekt abläuft.",
      },
      {
        title: "Schneller Servicekontakt",
        text: "Telefon, Formular und benötigte Angaben sind gut sichtbar, damit der Betrieb Fälle schneller einordnen kann.",
      },
    ],
    faq: [
      {
        q: "Sollten Bad und Heizung eigene Seiten bekommen?",
        a: "Meist ja. Die Suchintention, Fragen und Projektabläufe unterscheiden sich deutlich. Eigene Leistungsseiten schaffen mehr Klarheit.",
      },
      {
        q: "Wie wird ein Notdienst dargestellt?",
        a: "Nur wenn er tatsächlich angeboten wird. Dann werden Zeiten, Gebiet und Kontakt klar genannt, ohne eine Verfügbarkeit zu versprechen, die der Betrieb nicht leisten kann.",
      },
      {
        q: "Kann die Website auch bei Wartungsanfragen helfen?",
        a: "Ja. Ein passendes Formular kann Gerät, Anliegen, Standort und Erreichbarkeit abfragen. Das erleichtert die erste Einordnung.",
      },
    ],
    cardText:
      "Bad, Heizung, Wartung und optionaler Störungsdienst mit klar getrennten Anfragewegen.",
  },
];

export function getTrade(slug: string) {
  return trades.find((trade) => trade.slug === slug);
}
