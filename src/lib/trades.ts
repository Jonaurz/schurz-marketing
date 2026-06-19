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
  heroSuffix?: string;
  intro: string;
  pain: string;
  detailIntro?: string;
  serviceSectionTitle?: string;
  serviceSectionIntro?: string;
  goodSiteTitle?: string;
  processTitle?: string;
  processIntro?: string;
  process?: { no: string; title: string; text: string }[];
  regionTitle?: string;
  regionIntro?: string;
  remoteTitle?: string;
  remoteIntro?: string;
  remoteText?: string;
  relatedTitle?: string;
  relatedIntro?: string;
  relatedTradeSlugs?: TradeSlug[];
  /** Leistungen, die sich auf der Website klar darstellen lassen. */
  services: string[];
  /** Was eine gute Website für dieses Gewerk enthält. */
  goodSite: { title: string; text: string }[];
  faq: { q: string; a: string }[];
  extraFaq?: { q: string; a: string }[];
  ctaSubtitle?: string;
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
      "Eine Website, die Leistungsbereiche und Projektarten sauber trennt, Referenzen mit belastbaren Angaben zeigt und größere Bauanfragen besser vorqualifiziert.",
    heroSuffix:
      "Von Neustadt in Sachsen aus begleite ich Bauunternehmen mit klaren Unterlagen und festen Abstimmungen deutschlandweit.",
    intro:
      "Bei Bauprojekten prüfen Auftraggeber genauer als bei einer spontanen Dienstleistungsanfrage. Sie möchten wissen, welche Projektgrößen, Gewerke und Rollen ein Unternehmen abdeckt, bevor Unterlagen verschickt oder Gespräche geführt werden.",
    pain:
      "Wenn Hochbau, Tiefbau, Sanierung und Außenanlagen nur in einer Liste stehen, bleibt offen, wo echte Erfahrung liegt. Unklare Referenzen und fehlende Projektangaben erschweren die Vorauswahl.",
    detailIntro:
      "Die Seite wird deshalb wie eine belastbare Unternehmensvorstellung aufgebaut: mit klaren Leistungsfeldern, nachvollziehbaren Projekttypen, einem seriösen Anfrageweg und auf Wunsch einem eigenen Bereich für Fachkräfte.",
    serviceSectionTitle: "Leistungsfelder und Projektarten eindeutig zuordnen.",
    serviceSectionIntro:
      "Auftraggeber sollen schnell erkennen, ob Ihr Unternehmen fachlich, regional und von der Projektgröße her zum Vorhaben passt.",
    goodSiteTitle: "Was Auftraggeber auf einer Bauunternehmen-Website prüfen.",
    processTitle: "So entsteht ein Auftritt für größere Projektentscheidungen.",
    processIntro:
      "Der Aufbau orientiert sich an der Vorauswahl von Auftraggebern, Planern und potenziellen Fachkräften, nicht an einer allgemeinen Handwerker-Vorlage.",
    process: [
      {
        no: "1",
        title: "Projektprofil festlegen",
        text: "Ich kläre, welche Auftraggeber, Projektarten, Größenordnungen und Regionen für Ihr Unternehmen tatsächlich relevant sind.",
      },
      {
        no: "2",
        title: "Leistungsfelder trennen",
        text: "Hochbau, Tiefbau, Sanierung und weitere Bereiche erhalten eine Struktur, die Zuständigkeiten und Schwerpunkte klar erkennen lässt.",
      },
      {
        no: "3",
        title: "Referenzen aufbereiten",
        text: "Vorhandene Projekte werden nach Bauart, eigener Leistung, Region und sinnvollem Umfang beschrieben, ohne vertrauliche Angaben offenzulegen.",
      },
      {
        no: "4",
        title: "Projektanfragen vorqualifizieren",
        text: "Das Formular fragt etwa Projektart, Ort, Zeitraum und vorhandene Unterlagen ab, damit Anfragen intern schneller zugeordnet werden können.",
      },
      {
        no: "5",
        title: "Karriere mitdenken",
        text: "Wenn Personalgewinnung wichtig ist, werden Stellen, Arbeitsbereiche und ein kurzer Bewerbungsweg in die Seitenstruktur integriert.",
      },
      {
        no: "6",
        title: "Prüfen und veröffentlichen",
        text: "Vor dem Start werden mobile Darstellung, Inhalte, Kontaktwege und Metadaten geprüft. Spätere Projekte lassen sich gezielt ergänzen.",
      },
    ],
    regionTitle: "Für Bauprojekte in den tatsächlichen Zielregionen sichtbar werden.",
    regionIntro:
      "Regionale Seiten sind sinnvoll, wenn Ihr Unternehmen dort regelmäßig Projekte übernimmt. Entscheidend sind echte Leistungsgebiete und passende Projektreferenzen – nicht eine möglichst lange Liste austauschbarer Ortsnamen.",
    remoteTitle: "Digitale Abstimmung für ein erklärungsbedürftiges Angebot.",
    remoteIntro:
      "Für die Konzeption muss niemand regelmäßig nach Neustadt in Sachsen kommen. Entscheidend sind belastbare Unterlagen und feste Abstimmungen.",
    remoteText:
      "Leistungsübersichten, Projektlisten, Bildmaterial und Korrekturen lassen sich strukturiert digital abstimmen. Sie sprechen direkt mit Jonas Schurz. Dadurch bleibt der Weg kurz, auch wenn Ihr Bauunternehmen und Ihre Projekte in anderen Regionen Deutschlands liegen.",
    relatedTitle: "Passende Seiten für Bau, Ausbau und Projektkommunikation.",
    relatedIntro:
      "Weitere Gewerke setzen andere Schwerpunkte. Die Webdesign-Übersicht und Social Media ergänzen den Unternehmensauftritt auf übergeordneter Ebene.",
    relatedTradeSlugs: ["dachdecker", "sanitaer-shk", "garten-und-landschaftsbau"],
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
        q: "Können offene Stellen über die Website besetzt werden?",
        a: "Ja. Ein einfacher Karrierebereich mit Stellen und einem kurzen Bewerbungsformular lässt sich gut integrieren.",
      },
      {
        q: "Wie lassen sich Referenzen zeigen, ohne zu viel zu verraten?",
        a: "Auch ohne sensible Details wirken Projekte stark, wenn Bauart, Region, eigene Leistung und ein sinnvoller Umfang genannt werden. Die Auswahl stimme ich mit Ihnen ab.",
      },
    ],
    extraFaq: [
      {
        q: "Was kostet eine Website für ein Bauunternehmen?",
        a: "Der Aufwand hängt vor allem von Leistungsbereichen, Referenzaufbereitung, Karrierebereich und Anfragefunktionen ab. Nach Sichtung des Materials erhalten Sie einen klar abgegrenzten Projektumfang.",
      },
      {
        q: "Welche Unterlagen werden für die Website gebraucht?",
        a: "Hilfreich sind eine aktuelle Leistungsübersicht, Projektlisten, freigegebene Bilder, Einsatzgebiete und vorhandene Unternehmensunterlagen. Ich ordne das Material und benenne früh, was noch fehlt.",
      },
      {
        q: "Kann eine bestehende Bauunternehmen-Website weiterverwendet werden?",
        a: "Ja, wenn Technik, Inhalte und URL-Struktur eine tragfähige Grundlage bieten. Andernfalls ist ein Neuaufbau oft übersichtlicher und langfristig leichter zu pflegen.",
      },
      {
        q: "Ist die Zusammenarbeit deutschlandweit möglich?",
        a: "Ja. Unterlagen, Korrekturen und Freigaben werden digital abgestimmt. Persönlicher Ansprechpartner bleibt Jonas Schurz in Neustadt in Sachsen.",
      },
    ],
    ctaSubtitle:
      "Im Erstgespräch kläre ich, welche Leistungsfelder, Referenzen und Projektangaben Ihre Website für passende Anfragen braucht.",
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
    heroSuffix:
      "Projektbilder und Texte stimme ich persönlich aus Neustadt in Sachsen mit Malerbetrieben in ganz Deutschland ab.",
    intro:
      "Malerarbeiten wirken am stärksten im direkten Vergleich. Vorher-Nachher-Bilder zeigen den Unterschied, den Ihre Arbeit macht. Dazu gehören klare Leistungen und ein Weg, schnell anzufragen.",
    pain:
      "Malerleistungen sind erklärungsbedürftig, und gerade Vorher-Nachher-Bilder fehlen oft. Dadurch bleibt der Mehrwert unsichtbar.",
    detailIntro:
      "Für Malerbetriebe plane ich die Seite deshalb von den sichtbaren Ergebnissen aus. Räume, Fassaden, Oberflächen und besondere Techniken erhalten jeweils den Kontext, den Kunden für eine Anfrage brauchen.",
    serviceSectionTitle: "Innen, außen und Spezialarbeiten bildlich ordnen.",
    serviceSectionIntro:
      "Interessenten sollen erkennen, welche Arbeiten Sie übernehmen und welche gestalterische Qualität sie erwarten können.",
    goodSiteTitle: "Was eine Maler-Website visuell leisten sollte.",
    processTitle: "So wird aus Projektmaterial ein überzeugender Maler-Auftritt.",
    processIntro:
      "Bildauswahl und Leistungsstruktur entstehen gemeinsam, damit die Seite nicht wie eine lose Galerie wirkt.",
    process: [
      {
        no: "1",
        title: "Leistungsschwerpunkte wählen",
        text: "Ich kläre, ob Wohnräume, Fassaden, Gewerbeobjekte oder besondere Oberflächen im Mittelpunkt stehen sollen.",
      },
      {
        no: "2",
        title: "Bildmaterial sichten",
        text: "Vorhandene Aufnahmen werden nach Aussagekraft sortiert. Fehlende Motive lassen sich bei kommenden Projekten gezielt ergänzen.",
      },
      {
        no: "3",
        title: "Projekte einordnen",
        text: "Bilder erhalten kurze Angaben zu Ausgangslage, ausgeführter Arbeit und Ergebnis, statt ohne Erklärung nebeneinanderzustehen.",
      },
      {
        no: "4",
        title: "Innen und außen trennen",
        text: "Wohnräume, Fassaden und Spezialarbeiten bekommen jeweils passende Inhalte, Beispiele und Suchbegriffe.",
      },
      {
        no: "5",
        title: "Anfrage vereinfachen",
        text: "Raumart, Fläche, Ort und gewünschter Zeitraum können im Formular direkt mitgegeben werden.",
      },
      {
        no: "6",
        title: "Galerie weiterführen",
        text: "Nach dem Start lassen sich neue Vorher-Nachher-Beispiele ergänzen, ohne den Seitenaufbau jedes Mal neu zu planen.",
      },
    ],
    regionTitle: "Malerleistungen dort zeigen, wo Kunden Projekte vergeben.",
    regionIntro:
      "Für Malerbetriebe zählen ein glaubwürdiges Einsatzgebiet und Beispiele aus der erreichbaren Umgebung. Ortsbezüge werden nur dort aufgebaut, wo Innenräume, Fassaden oder Gewerbeobjekte tatsächlich übernommen werden.",
    remoteTitle: "Bildauswahl und Texte lassen sich direkt abstimmen.",
    remoteIntro:
      "Für die Website zählt gutes Projektmaterial, nicht die Entfernung zum Büro in Neustadt in Sachsen.",
    remoteText:
      "Sie senden vorhandene Bilder und Leistungsinformationen digital. Ich strukturiere das Material, bereite Texte vor und stimme Auswahl sowie Korrekturen direkt mit Ihnen ab. So kann ich Malerbetriebe in ganz Deutschland persönlich begleiten.",
    relatedTitle: "Weitere Seiten für Ausbau und sichtbare Projektergebnisse.",
    relatedIntro:
      "Fliesenleger, Gartenbau und andere Gewerke arbeiten ebenfalls stark mit Bildern, brauchen aber jeweils andere Leistungs- und Anfrageinformationen.",
    relatedTradeSlugs: ["fliesenleger", "garten-und-landschaftsbau", "dachdecker"],
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
        q: "Es gibt kaum Vorher-Nachher-Bilder. Geht das trotzdem?",
        a: "Ja. Für den Start reichen einige Beispiele. Künftige Projekte lassen sich Schritt für Schritt fotografieren und ergänzen.",
      },
      {
        q: "Sollten Innen- und Außenarbeiten getrennt gezeigt werden?",
        a: "Meist ja. So finden Kunden schneller das passende Thema und die Seite wirkt aufgeräumter.",
      },
      {
        q: "Bringt eine Website lokal mehr Anfragen?",
        a: "Mit regionalen Inhalten und sauberer Struktur kann Sie Google bei lokalen Suchen besser einordnen. Das ist die Grundlage für mehr Anfragen aus der Nähe.",
      },
    ],
    extraFaq: [
      {
        q: "Was kostet eine Website für einen Malerbetrieb?",
        a: "Der Aufwand hängt von Leistungsumfang, Zahl der Projektbereiche und Aufbereitung der Bilder ab. Nach der Materialsichtung kann ich den Umfang klar eingrenzen.",
      },
      {
        q: "Müssen professionelle Fotos vorhanden sein?",
        a: "Nein. Saubere, helle Aufnahmen aus ähnlichen Perspektiven reichen häufig aus. Ich zeige, welche Motive für künftige Projekte besonders hilfreich sind.",
      },
      {
        q: "Kann die bestehende Galerie übernommen werden?",
        a: "Ja, wenn Bildqualität und Nutzungsrechte passen. Die Auswahl wird neu sortiert und mit kurzen, verständlichen Projektangaben ergänzt.",
      },
      {
        q: "Ist die Zusammenarbeit außerhalb von Sachsen möglich?",
        a: "Ja. Bilder, Texte und Korrekturen lassen sich vollständig digital abstimmen. Ansprechpartner bleibt Jonas Schurz in Neustadt in Sachsen.",
      },
    ],
    ctaSubtitle:
      "Im Erstgespräch schaue ich auf Leistungen und vorhandene Bilder und kläre, wie Ihre Arbeit online am besten sichtbar wird.",
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
        q: "Können Privat- und Gewerbekunden getrennt werden?",
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
    heroSuffix:
      "Leistungen, Erreichbarkeit und Projektmaterial bereite ich aus Neustadt in Sachsen für Dachdeckerbetriebe bundesweit auf.",
    intro:
      "Bei Arbeiten am Dach geht es um hohe Investitionen, Sicherheit und eine verlässliche Einschätzung. Kunden möchten sehen, welche Dächer und Leistungen Sie abdecken, wie Sie arbeiten und in welchem Gebiet Sie erreichbar sind.",
    pain:
      "Wenn Sanierung, Reparatur und mögliche Soforthilfe online nicht klar getrennt sind, entstehen unpassende Anfragen oder Interessenten suchen direkt weiter.",
    detailIntro:
      "Eine Dachdecker-Website muss deshalb zwischen planbaren Projekten, Wartung und dringenden Schäden unterscheiden. Erreichbarkeit darf klar sein, ohne einen Notdienst zu versprechen, den der Betrieb nicht anbietet.",
    serviceSectionTitle: "Sanierung, Reparatur und Wartung nach Anlass trennen.",
    serviceSectionIntro:
      "Kunden sollen schon vor dem Anruf erkennen, ob ihr Dachtyp und ihr Anliegen zum Leistungsspektrum passen.",
    goodSiteTitle: "Was Eigentümer vor einer Dachanfrage wissen möchten.",
    processTitle: "So entsteht eine Dachdecker-Website mit klaren Fällen.",
    processIntro:
      "Der Aufbau folgt den unterschiedlichen Situationen von Eigentümern: geplante Sanierung, festgestellter Schaden oder regelmäßige Wartung.",
    process: [
      {
        no: "1",
        title: "Anfragearten trennen",
        text: "Ich kläre, welche Leistungen planbar sind, welche Schäden kurzfristig angenommen werden und ob es feste Erreichbarkeitszeiten gibt.",
      },
      {
        no: "2",
        title: "Dachtypen zuordnen",
        text: "Steildach, Flachdach, Abdichtung, Dachfenster und Entwässerung werden so gegliedert, dass Kunden ihr Thema wiederfinden.",
      },
      {
        no: "3",
        title: "Projekte dokumentieren",
        text: "Bilder zeigen Ausgangslage, ausgeführte Arbeit und Ergebnis. Sensible Angaben bleiben außen vor.",
      },
      {
        no: "4",
        title: "Erreichbarkeit definieren",
        text: "Telefon, Formular, Zeiten und Einsatzgebiet werden klar genannt, ohne falsche Erwartungen an einen Notdienst zu wecken.",
      },
      {
        no: "5",
        title: "Anfrageangaben festlegen",
        text: "Dachart, Schaden, Ort und vorhandene Fotos können direkt mitgeschickt werden, damit die erste Einschätzung leichter fällt.",
      },
      {
        no: "6",
        title: "Wartung und Projekte ergänzen",
        text: "Neue Referenzen und Wartungsangebote lassen sich nach dem Start gezielt in die passende Rubrik aufnehmen.",
      },
    ],
    regionTitle: "Im realistischen Fahrgebiet für Dacharbeiten gefunden werden.",
    regionIntro:
      "Bei Sanierungen und Reparaturen ist das erreichbare Einsatzgebiet ein wichtiges Auswahlkriterium. Regionale Inhalte nennen deshalb nur Orte, Dachleistungen und Kontaktmöglichkeiten, die der Betrieb verlässlich abdecken kann.",
    remoteTitle: "Fachliche Abstimmung mit Bildern und klaren Angaben.",
    remoteIntro:
      "Dachprojekte lassen sich auch über größere Entfernung strukturiert für die Website aufbereiten.",
    remoteText:
      "Leistungslisten, Einsatzgebiete und freigegebene Projektbilder werden digital abgestimmt. Ich formuliere daraus einen verständlichen Auftritt und bleibe der direkte Ansprechpartner, unabhängig vom Standort Ihres Dachdeckerbetriebs.",
    relatedTitle: "Weitere Seiten für Bau, Gebäudehülle und Ausbau.",
    relatedIntro:
      "Bauunternehmen, Maler und SHK-Betriebe haben teilweise ähnliche Kunden, benötigen online aber andere Belege und Anfragewege.",
    relatedTradeSlugs: ["bauunternehmen", "sanitaer-shk", "elektriker"],
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
    extraFaq: [
      {
        q: "Was kostet eine Website für einen Dachdeckerbetrieb?",
        a: "Entscheidend sind Zahl der Leistungsbereiche, Projektgalerie und gewünschte Anfragefunktionen. Nach Sichtung der vorhandenen Inhalte erhalten Sie einen klaren Umfang.",
      },
      {
        q: "Können Kunden Fotos eines Schadens mitsenden?",
        a: "Ja. Ein passendes Formular kann Bildmaterial und Angaben zu Dachart, Ort und Dringlichkeit aufnehmen. Das ersetzt keine Prüfung vor Ort, erleichtert aber die Einordnung.",
      },
      {
        q: "Wie wird ein bestehender Notdienst korrekt dargestellt?",
        a: "Zeiten, Gebiet und Kontaktweg werden nur so genannt, wie sie tatsächlich angeboten werden. Pauschale Verfügbarkeitsversprechen vermeide ich.",
      },
      {
        q: "Kann die Website deutschlandweit umgesetzt werden?",
        a: "Ja. Die Zusammenarbeit läuft digital mit festen Abstimmungen. Der persönliche Ansprechpartner sitzt in Neustadt in Sachsen.",
      },
    ],
    ctaSubtitle:
      "Im Erstgespräch kläre ich, wie Sanierung, Reparatur, Wartung und Erreichbarkeit auf Ihrer Website sinnvoll getrennt werden.",
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
    heroSuffix:
      "Die fachlichen Inhalte entwickle ich persönlich aus Neustadt in Sachsen mit SHK-Betrieben in ganz Deutschland.",
    intro:
      "Sanitär- und SHK-Betriebe verbinden planbare Projekte mit dringenden Servicefällen. Eine gute Website muss beides verständlich abbilden, ohne dass Badmodernisierung, Heizungsbau und Wartung in einem langen Leistungstext verschwinden.",
    pain:
      "Wenn Kunden nicht erkennen, ob es um Bad, Heizung, Wartung oder einen akuten Fall geht, landen Anfragen beim falschen Ansprechpartner oder bleiben ganz aus.",
    detailIntro:
      "Für SHK-Betriebe trenne ich deshalb beratungsintensive Projekte von Service und Wartung. Ein Interessent für eine Badsanierung braucht andere Informationen als jemand mit einer Heizungsstörung.",
    serviceSectionTitle: "Bad, Heizung und Kundendienst getrennt führen.",
    serviceSectionIntro:
      "Jeder Bereich erhält den passenden Ablauf, die richtigen Vertrauenssignale und einen eigenen Weg zur Kontaktaufnahme.",
    goodSiteTitle: "Was eine SHK-Website für Projekt und Service leisten muss.",
    processTitle: "So werden Projektgeschäft und Kundendienst gemeinsam abgebildet.",
    processIntro:
      "Die Seitenstruktur trennt langfristige Entscheidungen von schnellen Serviceanliegen, ohne den Betrieb in zwei Auftritte zu zerlegen.",
    process: [
      {
        no: "1",
        title: "Geschäftsbereiche gewichten",
        text: "Ich kläre, welchen Anteil Bad, Heizung, erneuerbare Systeme, Wartung und Kundendienst im Betrieb tatsächlich haben.",
      },
      {
        no: "2",
        title: "Kundensituationen trennen",
        text: "Planer, Modernisierer und Servicekunden werden zu unterschiedlichen Informationen und Kontaktwegen geführt.",
      },
      {
        no: "3",
        title: "Projektabläufe erklären",
        text: "Beratung, Planung, Angebot und Umsetzung werden für Bad- und Heizungsprojekte nachvollziehbar beschrieben.",
      },
      {
        no: "4",
        title: "Serviceangaben erfassen",
        text: "Gerät, Anliegen, Standort und Erreichbarkeit können im Formular so abgefragt werden, dass der Fall intern schneller zugeordnet wird.",
      },
      {
        no: "5",
        title: "Technik verständlich formulieren",
        text: "Wärmepumpe, Heizsysteme und Wartung werden fachlich korrekt, aber ohne unnötige Herstellersprache erklärt.",
      },
      {
        no: "6",
        title: "Angebote aktuell halten",
        text: "Neue Systeme, Förderthemen oder Wartungsangebote können später ergänzt werden, ohne bestehende Projektseiten zu verwässern.",
      },
    ],
    regionTitle: "Projektgeschäft und Kundendienst regional passend ausspielen.",
    regionIntro:
      "Badsanierungen, Heizungsprojekte und Wartung haben oft unterschiedliche Einzugsgebiete. Regionale Seiten werden deshalb nach realen Leistungen und Kapazitäten aufgebaut, statt jeden Ort mit demselben Text zu versehen.",
    remoteTitle: "Klare Abstimmung für technische und beratungsintensive Leistungen.",
    remoteIntro:
      "Auch komplexe SHK-Angebote lassen sich mit festen Unterlagen und direkten Gesprächen deutschlandweit strukturieren.",
    remoteText:
      "Sie liefern fachliche Informationen, vorhandene Projektbilder und die tatsächlichen Serviceabläufe. Ich überführe das in verständliche Inhalte und stimme jeden Schritt direkt mit Ihnen ab.",
    relatedTitle: "Weitere Seiten für Gebäudetechnik und Ausbau.",
    relatedIntro:
      "Elektriker, Dachdecker und Bauunternehmen sprechen teilweise dieselben Bauherren an, setzen aber andere fachliche Schwerpunkte.",
    relatedTradeSlugs: ["elektriker", "dachdecker", "fliesenleger"],
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
    extraFaq: [
      {
        q: "Was kostet eine Website für einen SHK-Betrieb?",
        a: "Der Umfang hängt davon ab, wie viele Bereiche getrennt dargestellt werden und ob Projekt-, Wartungs- oder Serviceformulare benötigt werden.",
      },
      {
        q: "Sollten Wärmepumpen eine eigene Leistungsseite erhalten?",
        a: "Wenn das Thema ein echter Schwerpunkt ist, meist ja. Beratung, Voraussetzungen und Ablauf unterscheiden sich deutlich von allgemeinem Heizungsservice.",
      },
      {
        q: "Kann die vorhandene Website nur teilweise überarbeitet werden?",
        a: "Ja, sofern Technik und Grundstruktur tragfähig sind. Ich prüfe, ob neue Leistungsseiten und Kontaktwege sauber ergänzt werden können.",
      },
      {
        q: "Arbeiten Sie mit SHK-Betrieben in ganz Deutschland?",
        a: "Ja. Fachliche Unterlagen, Korrekturen und Freigaben lassen sich digital abstimmen. Ansprechpartner bleibt Jonas Schurz.",
      },
    ],
    ctaSubtitle:
      "Im Erstgespräch kläre ich, wie Bad, Heizung, Wartung und Service auf Ihrer Website verständlich getrennt werden.",
    cardText:
      "Bad, Heizung, Wartung und optionaler Störungsdienst mit klar getrennten Anfragewegen.",
  },
];

export function getTrade(slug: string) {
  return trades.find((trade) => trade.slug === slug);
}
