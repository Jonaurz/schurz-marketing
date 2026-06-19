export type IndustryPage = {
  slug: "webdesign-dienstleister" | "webdesign-reinigungsfirmen";
  name: string;
  audience: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  hero: string;
  problemTitle: string;
  problems: { title: string; text: string }[];
  solutionTitle: string;
  solutionIntro: string;
  features: { title: string; text: string }[];
  contentTitle: string;
  contentIntro: string;
  websiteContents: string[];
  processTitle: string;
  processIntro: string;
  process: { no: string; title: string; text: string }[];
  remoteTitle: string;
  targetGroupsTitle: string;
  targetGroups: string[];
  personalText: string;
  faq: { q: string; a: string }[];
  relatedTitle: string;
  relatedIntro: string;
  relatedLinks: { href: string; label: string; text: string }[];
  ctaTitle: string;
  ctaSubtitle: string;
};

export const industryPages: IndustryPage[] = [
  {
    slug: "webdesign-dienstleister",
    name: "Dienstleister",
    audience: "Dienstleistungsunternehmen und Selbstständige",
    metaTitle: "Webdesign für Dienstleister",
    metaDescription:
      "Webdesign für Dienstleister: klare Positionierung, verständliche Angebote und einfache Kontaktwege. Persönlich aus Neustadt, deutschlandweit.",
    h1: "Webdesign für Dienstleister mit klarer Positionierung.",
    hero:
      "Beratung, Expertise und individuelle Leistungen lassen sich nicht in einem Produktfoto erklären. Eine gute Website bringt Ihr Angebot auf den Punkt, zeigt den passenden nächsten Schritt und schafft Vertrauen, bevor das erste Gespräch beginnt. Schurz Marketing sitzt in Neustadt in Sachsen und arbeitet deutschlandweit.",
    problemTitle: "Gute Leistung überzeugt erst, wenn Interessenten sie verstehen.",
    problems: [
      {
        title: "Das Angebot bleibt zu allgemein",
        text: "Wenn Besucher nicht schnell erkennen, für wen eine Leistung gedacht ist und welches Problem sie löst, vergleichen sie nur über den Preis.",
      },
      {
        title: "Expertise ist online kaum sichtbar",
        text: "Erfahrung, Arbeitsweise und Spezialisierung gehen in austauschbaren Texten unter. Dadurch fehlt ein klarer Grund für die Anfrage.",
      },
      {
        title: "Der Anfrageweg ist unnötig kompliziert",
        text: "Zu viele Optionen, unklare Pakete oder versteckte Kontaktwege bremsen Interessenten genau in dem Moment, in dem sie handeln möchten.",
      },
    ],
    solutionTitle: "Ein Auftritt, der Positionierung und Anfrageweg zusammenführt.",
    solutionIntro:
      "Bei Dienstleistungen entsteht Vertrauen über Klarheit. Deshalb beginnt das Projekt nicht mit Farben, sondern mit Zielgruppe, Angebot und dem Grund, warum ein Interessent gerade Sie ansprechen sollte.",
    features: [
      {
        title: "Positionierung und Seitenstruktur",
        text: "Zielgruppen, Leistungen und Nutzen werden geordnet, damit Besucher schnell verstehen, was Sie besonders gut können.",
      },
      {
        title: "Professionelles Webdesign",
        text: "Ein ruhiger, hochwertiger Auftritt vermittelt Kompetenz und funktioniert sauber auf Smartphone, Tablet und Desktop.",
      },
      {
        title: "Texte mit klarer Aussage",
        text: "Angebote werden verständlich beschrieben, ohne leere Werbeformeln und ohne unnötigen Fachjargon.",
      },
      {
        title: "Durchdachte Kontaktwege",
        text: "Erstgespräch, Projektanfrage oder Rückruf werden so eingebunden, dass Interessenten den passenden nächsten Schritt finden.",
      },
      {
        title: "SEO-Grundlage",
        text: "Seitentitel, Metadaten, interne Links und Leistungsseiten helfen Suchmaschinen, Themen und Zielgruppen sauber einzuordnen.",
      },
      {
        title: "Pflege und Weiterentwicklung",
        text: "Neue Leistungen, Inhalte oder Schwerpunkte lassen sich später ergänzen. Auf Wunsch bleibt die technische Pflege in einer Hand.",
      },
    ],
    contentTitle: "Typische Inhalte einer Website für Dienstleister.",
    contentIntro:
      "Die Website führt vom Problem des Interessenten über Ihre Arbeitsweise zum passenden Gespräch. Leistungen werden nicht nur aufgezählt, sondern verständlich eingeordnet.",
    websiteContents: [
      "Klare Positionierung und Nutzenversprechen",
      "Leistungsseiten für einzelne Angebote",
      "Ablauf der Beratung oder Zusammenarbeit",
      "Expertise, Arbeitsweise und persönliche Vorstellung",
      "Antworten auf typische Fragen und Einwände",
      "Erstgespräch, Anfrageformular und direkte Kontaktwege",
      "Referenzen oder echte Projektbeispiele, wenn vorhanden",
      "Optionale Verknüpfung mit Social Media",
    ],
    processTitle: "Vom fachlichen Angebot zur klaren Dienstleister-Website.",
    processIntro:
      "Im Mittelpunkt stehen Positionierung und Entscheidungsweg. Design und Technik folgen erst, wenn das Angebot verständlich geordnet ist.",
    process: [
      {
        no: "1",
        title: "Positionierung schärfen",
        text: "Im Erstgespräch kläre ich, welche Kunden Sie erreichen möchten, welches Problem Sie lösen und wodurch sich Ihre Arbeitsweise unterscheidet.",
      },
      {
        no: "2",
        title: "Angebote ordnen",
        text: "Beratung, Pakete, Einzelleistungen und mögliche Einstiegsthemen bekommen eine nachvollziehbare Reihenfolge.",
      },
      {
        no: "3",
        title: "Vertrauen belegen",
        text: "Expertise, Vorgehen, Qualifikationen und vorhandene Projektbeispiele werden dort eingebaut, wo Interessenten noch Fragen haben.",
      },
      {
        no: "4",
        title: "Texte und Design entwickeln",
        text: "Aus dem fachlichen Input entstehen verständliche Texte und ein Auftritt, der Kompetenz zeigt, ohne steif oder übertrieben zu wirken.",
      },
      {
        no: "5",
        title: "Anfrageweg festlegen",
        text: "Erstgespräch, Projektanfrage oder Rückruf werden passend zur Leistung und zum üblichen Vertriebsprozess eingebunden.",
      },
      {
        no: "6",
        title: "Veröffentlichen und ausbauen",
        text: "Nach der Prüfung geht die Seite online. Neue Angebote, Fachthemen oder Referenzen lassen sich später gezielt ergänzen.",
      },
    ],
    remoteTitle: "Direkte Beratung, auch ohne Termin vor Ort.",
    targetGroupsTitle: "Für beratende, kreative und spezialisierte Dienstleistungen.",
    targetGroups: [
      "Berater und Agenturen",
      "Coaches und Trainer",
      "Kanzleien und Sachverständige",
      "Immobilien- und Finanzdienstleister",
      "Gesundheitsnahe Dienstleistungen",
      "IT- und technische Dienstleister",
      "Kreative und Solo-Selbstständige",
      "Lokale Serviceunternehmen",
    ],
    personalText:
      "Abstimmungen funktionieren per Telefon, E-Mail und Video-Call. Sie sprechen direkt mit Jonas Schurz und haben einen festen Ansprechpartner für Struktur, Texte, Design und Umsetzung. Der Standort in Neustadt in Sachsen bleibt dabei der bodenständige Ausgangspunkt, die Zusammenarbeit ist in ganz Deutschland möglich.",
    faq: [
      {
        q: "Was kostet eine Website für Dienstleister?",
        a: "Das hängt von Seitenumfang, Funktionen und dem vorhandenen Material ab. Ein professioneller Auftritt ist meist ab dem mittleren vierstelligen Bereich sinnvoll. Nach dem Erstgespräch erhalten Sie einen transparenten Rahmen.",
      },
      {
        q: "Wie lange dauert die Umsetzung?",
        a: "Je nach Umfang dauert ein Projekt meist einige Wochen. Zu Beginn werden Inhalte, Zuständigkeiten und Korrekturschritte klar geplant.",
      },
      {
        q: "Muss ich die Texte selbst schreiben?",
        a: "Nein. Positionierung, Struktur und Texte werden gemeinsam erarbeitet. Ihr fachlicher Input wird in verständliche und seriöse Inhalte übersetzt.",
      },
      {
        q: "Kann meine bestehende Website überarbeitet werden?",
        a: "Ja. Zuerst wird geprüft, ob ein gezielter Relaunch sinnvoll ist oder ein Neuaufbau langfristig die bessere Grundlage bietet.",
      },
      {
        q: "Ist Suchmaschinenoptimierung enthalten?",
        a: "Eine saubere technische und inhaltliche SEO-Grundlage ist Teil der Umsetzung. Weiterführende Optimierung kann anschließend fortlaufend erfolgen.",
      },
      {
        q: "Kann ich Inhalte später selbst pflegen?",
        a: "Ja. Auf Wunsch erhalten Sie eine pflegbare Lösung und eine Einweisung. Alternativ kann Schurz Marketing Änderungen und Wartung übernehmen.",
      },
      {
        q: "Arbeiten Sie auch außerhalb von Sachsen?",
        a: "Ja. Schurz Marketing sitzt in Neustadt in Sachsen und arbeitet per Telefon, E-Mail, Video-Call und digitaler Abstimmung deutschlandweit.",
      },
    ],
    relatedTitle: "Weitere Wege zu einem stimmigen Auftritt.",
    relatedIntro:
      "Die allgemeine Webdesign-Leistung und Social Media ergänzen die Positionierung. Branchen mit anderen Anfragewegen sind separat beschrieben.",
    relatedLinks: [
      {
        href: "/webdesign",
        label: "Webdesign",
        text: "Leistungsumfang, Technik, SEO-Grundlage und Ablauf im Überblick.",
      },
      {
        href: "/social-media",
        label: "Social Media",
        text: "Strategie und laufende Inhalte als Ergänzung zum eigenen Auftritt.",
      },
      {
        href: "/handwerker",
        label: "Webdesign für Handwerker",
        text: "Klare Leistungen, Projektbilder und schnelle Kontaktwege für Betriebe.",
      },
    ],
    ctaTitle: "Über Ihre neue Dienstleister-Website sprechen?",
    ctaSubtitle:
      "Im unverbindlichen Erstgespräch kläre ich Positionierung, Inhalte und den sinnvollen Umfang für Ihren neuen Auftritt.",
  },
  {
    slug: "webdesign-reinigungsfirmen",
    name: "Reinigungsfirmen",
    audience: "Reinigungsfirmen und Gebäudedienstleister",
    metaTitle: "Webdesign für Reinigungsfirmen",
    metaDescription:
      "Webdesign für Reinigungsfirmen: Leistungen, Einsatzgebiete und Angebotsanfragen klar darstellen. Aus Neustadt, deutschlandweit persönlich.",
    h1: "Webdesign für Reinigungsfirmen.",
    hero:
      "Privatkunden, Hausverwaltungen und Unternehmen möchten schnell wissen, welche Reinigungsleistungen Sie anbieten, wo Sie arbeiten und wie sie ein Angebot erhalten. Eine klare Website bündelt genau diese Informationen und vermittelt Zuverlässigkeit. Schurz Marketing sitzt in Neustadt in Sachsen und arbeitet deutschlandweit.",
    problemTitle: "Bei Reinigungsleistungen entscheiden Klarheit und Vertrauen.",
    problems: [
      {
        title: "Leistungsarten sind nicht sauber getrennt",
        text: "Unterhaltsreinigung, Glasreinigung und Sonderleistungen stehen ungeordnet nebeneinander. Interessenten müssen selbst herausfinden, ob ihr Bedarf abgedeckt ist.",
      },
      {
        title: "Einsatzgebiete bleiben unklar",
        text: "Wenn Orte und Regionen fehlen, wissen potenzielle Kunden nicht, ob eine Anfrage überhaupt sinnvoll ist.",
      },
      {
        title: "Angebotsanfragen liefern zu wenig Informationen",
        text: "Ein allgemeines Kontaktformular führt zu Rückfragen. Objektart, Fläche, Rhythmus und gewünschte Leistung sollten direkt abgefragt werden.",
      },
    ],
    solutionTitle: "Leistungen, Einsatzgebiet und Angebotsanfrage klar verbinden.",
    solutionIntro:
      "Bei Reinigungsfirmen zählt weniger eine lange Selbstdarstellung als eine schnelle Einordnung: Welche Objekte werden betreut, welche Leistungen sind möglich und welche Angaben werden für ein Angebot gebraucht?",
    features: [
      {
        title: "Struktur nach Leistungsarten",
        text: "Wiederkehrende Reinigung, Glas, Büro, Treppenhaus und Sonderleistungen werden verständlich voneinander getrennt.",
      },
      {
        title: "Seriöses, modernes Webdesign",
        text: "Der Auftritt wirkt sauber, verlässlich und professionell, ohne austauschbare Werbesprache oder überladene Effekte.",
      },
      {
        title: "Anfrageformular mit relevanten Angaben",
        text: "Objekt, Fläche, Standort und gewünschter Rhythmus können direkt erfasst werden. Das erleichtert die erste Einschätzung.",
      },
      {
        title: "Einsatzgebiete und Erreichbarkeit",
        text: "Regionen, Kontaktzeiten und schnelle Wege per Telefon oder Formular stehen dort, wo Interessenten sie erwarten.",
      },
      {
        title: "Auffindbarkeit für konkrete Leistungen",
        text: "Eigene Inhalte für wichtige Leistungen schaffen eine saubere Grundlage für lokale und überregionale Suchanfragen.",
      },
      {
        title: "Optionale Pflege und Social Media",
        text: "Neue Leistungen, Einsatzorte und Einblicke aus dem Arbeitsalltag können laufend ergänzt und auf Social Media weitergeführt werden.",
      },
    ],
    contentTitle: "Typische Inhalte einer Website für Reinigungsfirmen.",
    contentIntro:
      "Leistungsarten, Objektgrößen und Einsatzorte werden so geordnet, dass private und gewerbliche Interessenten ohne Umwege zur richtigen Anfrage kommen.",
    websiteContents: [
      "Unterhalts- und Büroreinigung",
      "Gebäude- und Treppenhausreinigung",
      "Glas- und Fensterreinigung",
      "Grund-, Bau- und Sonderreinigung",
      "Einsatzgebiete und betreute Objektarten",
      "Anfrageformular für Fläche, Rhythmus und Standort",
      "Qualitätsablauf und feste Ansprechpartner",
      "Telefonnummer und schnelle Kontaktaufnahme",
    ],
    processTitle: "Von Leistungen und Kapazitäten zur brauchbaren Angebotsanfrage.",
    processIntro:
      "Die Website soll im Alltag Zeit sparen. Deshalb orientiert sich der Aufbau an den Angaben, die Sie für eine erste Einschätzung wirklich benötigen.",
    process: [
      {
        no: "1",
        title: "Leistungen abgrenzen",
        text: "Ich erfasse, welche Reinigungsarten, Objektarten und Zusatzleistungen tatsächlich angeboten werden und welche Kunden dazu passen.",
      },
      {
        no: "2",
        title: "Einsatzgebiet festlegen",
        text: "Orte, Anfahrtsradius und betreubare Regionen werden realistisch beschrieben, damit Anfragen aus passenden Gebieten kommen.",
      },
      {
        no: "3",
        title: "Angebotsdaten bestimmen",
        text: "Objektart, Fläche, Rhythmus, gewünschter Start und Besonderheiten fließen in ein branchengerechtes Anfrageformular ein.",
      },
      {
        no: "4",
        title: "Zuverlässigkeit zeigen",
        text: "Qualitätsablauf, Ansprechpartner, Reaktionswege und vorhandene Nachweise werden sachlich und nachvollziehbar dargestellt.",
      },
      {
        no: "5",
        title: "Mobil umsetzen",
        text: "Die Seite wird für schnelle Nutzung auf dem Smartphone gebaut, weil viele Anfragen direkt aus dem Arbeitsalltag entstehen.",
      },
      {
        no: "6",
        title: "Starten und aktuell halten",
        text: "Nach dem Start können neue Einsatzorte, Leistungen und freie Kapazitäten ergänzt werden, ohne die ganze Seite neu aufzubauen.",
      },
    ],
    remoteTitle: "Kurze Abstimmungen für einen klaren Leistungsauftritt.",
    targetGroupsTitle: "Für spezialisierte und breit aufgestellte Reinigungsbetriebe.",
    targetGroups: [
      "Gebäudereinigungen",
      "Büro- und Praxisreinigungen",
      "Glas- und Fensterreinigungen",
      "Treppenhausreinigungen",
      "Hausmeister- und Gebäudeservices",
      "Baureinigungen",
      "Industriereinigungen",
      "Kleine regionale Reinigungsteams",
    ],
    personalText:
      "Die Zusammenarbeit läuft unkompliziert per Telefon, E-Mail und Video-Call. Sie haben mit Jonas Schurz einen festen Ansprechpartner, der Inhalte, Seitenstruktur und Umsetzung zusammenhält. Der Sitz in Neustadt in Sachsen steht für kurze, persönliche Wege, auch wenn Ihr Reinigungsunternehmen an einem anderen Ort in Deutschland arbeitet.",
    faq: [
      {
        q: "Was kostet eine Website für eine Reinigungsfirma?",
        a: "Der Preis richtet sich nach Leistungsumfang, Einsatzgebieten, Formularen und vorhandenen Inhalten. Nach einem unverbindlichen Erstgespräch erhalten Sie einen klaren Projektumfang.",
      },
      {
        q: "Wie schnell kann die Website online sein?",
        a: "Je nach Umfang dauert die Umsetzung meist einige Wochen. Wenn Leistungen, Einsatzorte und Bilder früh vorliegen, lässt sich der Ablauf gut planen.",
      },
      {
        q: "Welche Informationen braucht das Anfrageformular?",
        a: "Sinnvoll sind Objektart, Ort, ungefähre Fläche, gewünschte Leistung und Reinigungsrhythmus. Die genaue Auswahl wird an Ihren Betrieb angepasst.",
      },
      {
        q: "Hilft die Website bei lokalen Suchanfragen?",
        a: "Klare Leistungsseiten, Einsatzgebiete, Metadaten und saubere Technik schaffen eine gute Grundlage, damit Suchmaschinen Ihr Angebot regional einordnen können.",
      },
      {
        q: "Kann eine vorhandene Website modernisiert werden?",
        a: "Ja. Bestehende Inhalte und Technik werden geprüft. Danach wird entschieden, ob eine Überarbeitung genügt oder ein Neuaufbau sinnvoller ist.",
      },
      {
        q: "Können neue Einsatzorte später ergänzt werden?",
        a: "Ja. Die Seitenstruktur kann so angelegt werden, dass weitere Orte, Leistungen und Objektarten später sauber ergänzt werden können.",
      },
      {
        q: "Ist die Zusammenarbeit deutschlandweit möglich?",
        a: "Ja. Schurz Marketing arbeitet von Neustadt in Sachsen aus per Telefon, E-Mail, Video-Call und digitaler Abstimmung mit Reinigungsfirmen in ganz Deutschland.",
      },
    ],
    relatedTitle: "Ergänzende Leistungen für Reinigungsbetriebe.",
    relatedIntro:
      "Allgemeines Webdesign, branchenübergreifende Betriebsseiten und laufende Social-Media-Inhalte greifen unterschiedliche Aufgaben auf.",
    relatedLinks: [
      {
        href: "/webdesign",
        label: "Webdesign",
        text: "Mehr zu Gestaltung, Technik, Barrierefreiheit und SEO-Grundlage.",
      },
      {
        href: "/handwerker",
        label: "Webdesign für Handwerker",
        text: "Weitere Branchenlösungen für Betriebe mit regionalem Einsatzgebiet.",
      },
      {
        href: "/social-media",
        label: "Social Media",
        text: "Einblicke, Team und Leistungen regelmäßig sichtbar machen.",
      },
    ],
    ctaTitle: "Website-Projekt für Ihre Reinigungsfirma anfragen?",
    ctaSubtitle:
      "Im Erstgespräch kläre ich, welche Leistungen, Einsatzgebiete und Anfragefelder Ihr neuer Auftritt wirklich braucht.",
  },
];

export function getIndustryPage(slug: string) {
  return industryPages.find((page) => page.slug === slug);
}
