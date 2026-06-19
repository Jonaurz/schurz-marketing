import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "AGB",
  description: "Allgemeine Geschäftsbedingungen von Schurz Marketing.",
  alternates: { canonical: "/agb" },
  robots: { index: true, follow: true },
};

type AgbBlock = {
  type: "intro" | "part" | "section" | "clause" | "paragraph";
  text: string;
};

const agbBlocks: AgbBlock[] = [
  {
    "type": "intro",
    "text": "Allgemeine Geschäftsbedingungen von Finanz- und Wirtschaftsberatung Enrico Sturm Wilhelm-Kaulisch-Straße 25 01844 Neustadt in Sachsen im Folgenden: Auftragnehmer -"
  },
  {
    "type": "part",
    "text": "Teil 1 - Allgemeine Bestimmungen"
  },
  {
    "type": "section",
    "text": "1.1 Allgemeines"
  },
  {
    "type": "clause",
    "text": "1.1.1 Der Auftragnehmer bietet dem Kunden verschiedene Agenturleistungen an. Der spezifische Leistungsumfang ist Gegenstand von Individualvereinbarungen zwischen dem Auftragnehmer und dem Kunden."
  },
  {
    "type": "clause",
    "text": "1.1.2 Der Auftragnehmer schließt keine Verträge mit Verbrauchern bzw. Privatpersonen. Das Angebot des Auftragnehmers richtet sich ausschließlich an Unternehmer, juristische Personen des öffentlichen Rechts oder öffentlich-rechtliche Sondervermögen."
  },
  {
    "type": "clause",
    "text": "1.1.3 Der Auftragnehmer ist berechtigt, in eigenem Namen und auf eigene Rechnung die erforderlichen Leistungen an Subunternehmer zu vergeben, die ihrerseits ebenfalls Subunternehmer einsetzen dürfen. Der Auftragnehmer bleibt hierbei, vorbehaltlich abweichender Vereinbarungen, alleiniger Vertragspartner des Kunden. Der Einsatz von Subunternehmern erfolgt nicht, sofern für den Auftragnehmer ersichtlich ist, dass deren Einsatz berechtigten Interessen des Kunden zuwiderläuft."
  },
  {
    "type": "clause",
    "text": "1.1.4 Soweit neben diesen AGB weitere Vertragsdokumente in Text- oder Schriftform Vertragsbestandteil geworden sind, gehen die Regelungen dieser weiteren Vertragsdokumente im Widerspruchsfall den vorliegenden AGB vor."
  },
  {
    "type": "clause",
    "text": "1.1.5 Von diesen Geschäftsbedingungen abweichende AGB, die durch den Kunden verwendet werden, erkennt der Auftragnehmer, vorbehaltlich einer ausdrücklichen Zustimmung, nicht an."
  },
  {
    "type": "clause",
    "text": "1.1.6 Angebote des Auftragnehmers sind, sofern im Angebot nichts Abweichendes angegeben ist, 14 Kalendertage ab Angebotsdatum gültig."
  },
  {
    "type": "clause",
    "text": "1.1.7 Der Vertrag kommt zustande, wenn der Kunde das Angebot des Auftragnehmers in Textform, schriftlich oder durch schlüssiges Verhalten annimmt. Als schlüssiges Verhalten gilt insbesondere die Zahlung einer vereinbarten Anzahlung, die Freigabe eines Projektstarts oder die Übermittlung projektbezogener Zugangsdaten und Inhalte nach Angebotserhalt."
  },
  {
    "type": "clause",
    "text": "1.1.8 Mündliche Nebenabreden bestehen nicht, sofern sie nicht ausdrücklich in Textform bestätigt wurden. Änderungen und Ergänzungen des Vertrags bedürfen mindestens der Textform, soweit nicht gesetzlich eine strengere Form vorgeschrieben ist."
  },
  {
    "type": "section",
    "text": "1.2 Mitwirkungspflichten des Kunden"
  },
  {
    "type": "clause",
    "text": "1.2.1 Sofern der Kunde dem Auftragnehmer Texte, Bilder oder sonstige Inhalte zur Erfüllung der in Auftrag gegebenen Leistungen zur Verfügung stellt, hat er dafür zu sorgen, dass diese Inhalte nicht gegen die Rechte Dritter, zum Beispiel Urheberrechte, Markenrechte, Persönlichkeitsrechte oder sonstige Rechtsnormen verstoßen. Es wird in diesem Zusammenhang darauf hingewiesen, dass der Auftragnehmer von Rechts wegen nicht berechtigt ist, Rechtsberatungsleistungen gegenüber dem Kunden zu erbringen. Der Auftragnehmer ist vor allem nicht verpflichtet und rechtlich nicht in der Lage, das Geschäftsmodell des Kunden und/oder die vom Kunden selbst erstellten oder erworbenen Werke, Layouts, Grafiken, Texte, Bilder, Videos, Logos oder sonstigen Inhalte auf ihre Vereinbarkeit mit dem geltenden Recht zu prüfen. Der Auftragnehmer wird insbesondere keine Markenrecherchen oder sonstige Schutzrechtskollisionsprüfungen in Bezug auf die vom Kunden zur Verfügung gestellten Werke vornehmen. Soweit der Kunde bestimmte Weisungen bezüglich des herzustellenden Werks erteilt, haftet er hierfür selbst."
  },
  {
    "type": "clause",
    "text": "1.2.2 Der Kunde ist verpflichtet, die von ihm zum Zwecke der Auftragserfüllung zur Verfügung zu stellenden Informationen, Daten, Werke, Zugangsdaten und Unterlagen vollständig, korrekt und rechtzeitig mitzuteilen. Hierzu zählen insbesondere Daten für Impressum und Datenschutzinformationen, Texte, Bilder, Logos, Zugangsdaten zu Webseiten, Hosting, Domains, Social-Media-Konten, Werbekonten, Analyse-Tools, CRM-Systemen, Newsletter-Systemen und sonstigen für die Leistungserbringung erforderlichen Systemen. Der Kunde hat ferner dafür Sorge zu tragen, dass die von ihm erteilten Weisungen mit dem geltenden Recht in Einklang stehen."
  },
  {
    "type": "clause",
    "text": "1.2.3 Der Kunde ist, vorbehaltlich abweichender Individualvereinbarungen, für die Beschaffung des Materials zur Erbringung der Agenturleistungen, zum Beispiel Grafiken, Videos, Fotos, Texte, Logos, Zugangsdaten und sonstige Inhalte, selbst verantwortlich und stellt diese dem Auftragnehmer rechtzeitig zur Verfügung. Stellt der Kunde diese nicht zur Verfügung und macht er auch keine weitergehenden Vorgaben, so kann der Auftragnehmer nach eigener Wahl unter Beachtung der urheberrechtlichen Kennzeichnungsvorgaben Bildmaterial gängiger Anbieter, zum Beispiel Stockfoto-Dienstleister, verwenden oder die entsprechenden Teile der Webseite mit einem Platzhalter versehen."
  },
  {
    "type": "clause",
    "text": "1.2.4 Sofern für einzelne Auftragsbestandteile der Abschluss eines Auftragsverarbeitungsvertrags nach Art. 28 DSGVO erforderlich ist, verpflichten sich beide Vertragsparteien, einen solchen Vertrag vor Beginn der jeweiligen Leistungserbringung abzuschließen. Der Kunde bleibt, soweit gesetzlich vorgesehen, Verantwortlicher im Sinne der Datenschutz-Grundverordnung. Der Auftragnehmer schuldet keine rechtliche Prüfung der datenschutzrechtlichen Zulässigkeit der vom Kunden gewünschten Verarbeitungsvorgänge, Tools, Trackingmaßnahmen, Formulare, Newsletter-Funktionen oder sonstigen Funktionen."
  },
  {
    "type": "clause",
    "text": "1.2.5 Für Verzögerungen und Verspätungen bei der Umsetzung von Projekten, die durch verspätete, unvollständige oder fehlerhafte Mitwirkung bzw. Zuarbeit des Kunden entstehen, ist der Auftragnehmer gegenüber dem Kunden in keinerlei Hinsicht verantwortlich. Vereinbarte Fristen beginnen erst, wenn der Kunde alle zur Leistungserbringung erforderlichen Informationen, Inhalte, Zugangsdaten, Freigaben und gegebenenfalls vereinbarte Anzahlungen vollständig erbracht hat."
  },
  {
    "type": "clause",
    "text": "1.2.6 Kommt der Kunde seinen Mitwirkungspflichten aus dieser Ziffer nicht nach, kann der Auftragnehmer dem Kunden den hierdurch entstehenden Zusatzaufwand, zum Beispiel Kosten für Stockfotos, Zeitaufwand für Recherche, zusätzliche Abstimmung, erneute Einarbeitung oder Wartezeiten, in Rechnung stellen."
  },
  {
    "type": "clause",
    "text": "1.2.7 Der Kunde ist verpflichtet, dem Auftragnehmer Änderungen an bereitgestellten Informationen, rechtlichen Angaben, Unternehmensdaten, Angeboten, Preisen, Öffnungszeiten, Kontaktdaten, Ansprechpartnern und sonstigen projektbezogenen Informationen unverzüglich mitzuteilen. Unterbleibt eine solche Mitteilung, haftet der Auftragnehmer nicht für hieraus entstehende Fehler oder Nachteile."
  },
  {
    "type": "clause",
    "text": "1.2.8 Der Kunde ist verpflichtet, Arbeitsergebnisse, Entwürfe, Webseiten, Texte, Designs, Anzeigen, Beiträge, Kampagnen, Druckdaten und sonstige Ergebnisse vor Freigabe sorgfältig zu prüfen. Mit Freigabe bestätigt der Kunde die sachliche, inhaltliche und tatsächliche Richtigkeit sowie die grundsätzliche Verwendbarkeit der freigegebenen Inhalte, soweit keine offensichtlichen technischen Mängel vorliegen."
  },
  {
    "type": "section",
    "text": "1.3 Einsatz von Künstlicher Intelligenz (KI)"
  },
  {
    "type": "clause",
    "text": "1.3.1 Der Auftragnehmer ist berechtigt, im Rahmen der Leistungserbringung Technologien der Künstlichen Intelligenz (KI-Tools) zur Erstellung, Bearbeitung oder Unterstützung von Inhalten, zum Beispiel Text, Bild, Ton, Video, Konzepte, Entwürfe, Strukturvorschläge, Code oder Analysen, einzusetzen. Sofern nicht anders vereinbart, werden alle von einer KI generierten Inhalte nach deren Erstellung von einer natürlichen Person geprüft und bei Bedarf angepasst. Der Einsatz von KI-Tools erfolgt nicht, sofern für den Auftragnehmer ersichtlich ist, dass deren Einsatz berechtigten Interessen des Kunden zuwiderläuft. Will der Kunde, dass KI-Technologien für bestimmte Projekte oder Teile davon nicht eingesetzt werden, so hat er dies dem Auftragnehmer in Textform eigenständig mitzuteilen."
  },
  {
    "type": "clause",
    "text": "1.3.2 Der Auftragnehmer wird bei dem Einsatz von KI-Tools mit der im Verkehr erforderlichen Sorgfalt vorgehen. Der Auftragnehmer sichert jedoch nicht zu, dass KI-gestützt erstellte Inhalte in jedem Einzelfall vollständig fehlerfrei, einzigartig, frei von Ähnlichkeiten zu bestehenden Inhalten oder rechtlich uneingeschränkt nutzbar sind, sofern dies nicht ausdrücklich individualvertraglich zugesichert wurde. Der Auftragnehmer ist nicht zur Durchführung von Markenrecherchen, Plagiatsprüfungen, urheberrechtlichen Prüfungen oder sonstigen Rechtsprüfungen verpflichtet."
  },
  {
    "type": "clause",
    "text": "1.3.3 Sofern an Inhalten, die ganz oder teilweise mit Hilfe von KI erstellt wurden, ausschließliche Nutzungsrechte übertragen werden sollen, wird der Auftragnehmer im Rahmen des rechtlich und tatsächlich Möglichen dafür Sorge tragen, dass eine solche Nutzungsrechteübertragung möglich ist, zum Beispiel indem KI-generierte Werke bearbeitet, kombiniert, individualisiert oder abgewandelt werden. Eine Garantie für das Entstehen urheberrechtlicher Schutzfähigkeit wird nicht übernommen, sofern dies nicht ausdrücklich individualvertraglich vereinbart wurde."
  },
  {
    "type": "clause",
    "text": "1.3.4 Eine separate Kennzeichnung von KI-generierten Inhalten ist nur geschuldet, wenn und soweit die Kennzeichnung des Inhaltes gesetzlich vorgeschrieben ist oder sofern dies individualvertraglich vereinbart wurde. Der Kunde ist verpflichtet, den Auftragnehmer darauf hinzuweisen, wenn für seine Branche, seine Plattformen, seine Werbekanäle oder seine Veröffentlichungen besondere Kennzeichnungspflichten bestehen."
  },
  {
    "type": "clause",
    "text": "1.3.5 Der Kunde darf KI-gestützte Entwürfe, Vorschläge oder Zwischenergebnisse nur verwenden, veröffentlichen oder an Dritte weitergeben, wenn diese vom Auftragnehmer ausdrücklich zur Nutzung freigegeben wurden oder der jeweilige Leistungsstand als final übergeben wurde."
  },
  {
    "type": "part",
    "text": "Teil 2 - Onlineauftritte und Technik"
  },
  {
    "type": "section",
    "text": "2.1 Webseiten- und Shoperstellung (agil)"
  },
  {
    "type": "clause",
    "text": "2.1.1 Sofern keine abweichenden Individualvereinbarungen getroffen wurden, erfolgt die Erstellung von neuen oder die Erweiterung bestehender Webseiten, Shops oder Web- und Shopkomponenten auf Grundlage agiler Methoden. Die übrigen Regelungen dieser AGB bleiben unberührt."
  },
  {
    "type": "clause",
    "text": "2.1.2 Gegenstand von Webseiten-Erstellungsverträgen zwischen dem Auftragnehmer und dem Kunden ist grundsätzlich die Entwicklung neuer Webseiten oder die Erweiterung bestehender Webseiten, zum Beispiel das Einbinden neuer Schnittstellen oder die Programmierung neuer Online-Anwendungen, unter Beachtung der technischen und/oder gestalterischen Vorgaben des Kunden. Zwischen den Parteien geschlossene Webseiten-Erstellungsverträge sind Werkverträge im Sinne von §§ 631 ff. BGB."
  },
  {
    "type": "clause",
    "text": "2.1.3 Die im Einzelnen vereinbarten Leistungen ergeben sich aus dem zwischen dem Auftragnehmer und dem Kunden individuell abgeschlossenen Vertrag. Hierzu stellt der Kunde beim Auftragnehmer zunächst eine Anfrage mit einer möglichst genauen Beschreibung der von ihm gewünschten Webseiten-Inhalte. Gestalterische Inhalte wie Bilder, Layouts, Logos, Schriften und vergleichbare Inhalte sind, vorbehaltlich abweichender Vereinbarungen, vom Kunden festzulegen und zur Verfügung zu stellen. Diese Anfrage stellt eine Aufforderung zur Abgabe eines Angebots durch den Auftragnehmer dar. Der Auftragnehmer wird die in der Anfrage beschriebenen Vorstellungen des Kunden nach bestem Wissen und Gewissen auf Vollständigkeit, Eignung mit Ausnahme der rechtlichen Eignung, insbesondere hinsichtlich der Rechte von Dritten, Eindeutigkeit, Realisierbarkeit und Widerspruchsfreiheit prüfen und auf Grundlage der aus der Kundenanfrage hervorgehenden Wünsche ein Angebot erstellen. Erst durch die Annahme des Angebots durch den Kunden kommt ein Vertrag zwischen dem Auftragnehmer und dem Kunden zustande."
  },
  {
    "type": "clause",
    "text": "2.1.4 Der Kunde kann jederzeit Kundenwünsche einbringen, soweit diese durch den ursprünglich vereinbarten Leistungsumfang gedeckt sind. Derartige Anpassungen werden Bestandteil des ursprünglichen Vertrags, wenn beide Vertragsparteien in Textform, zum Beispiel per E-Mail, zustimmen. Im Übrigen ist der Auftragnehmer nur zur Herstellung der im Vertrag aufgelisteten Funktionen, Positionen bzw. zur Erbringung der vereinbarten Dienstleistung verpflichtet. Darüberhinausgehende Leistungen müssen gesondert vereinbart und vergütet werden."
  },
  {
    "type": "clause",
    "text": "2.1.5 Nicht im Angebot enthaltene Änderungswünsche, zusätzliche Unterseiten, zusätzliche Funktionen, zusätzliche Formulare, neue Schnittstellen, Designwechsel, nachträgliche Strukturänderungen, zusätzliche Abstimmungstermine, zusätzliche Recherchen, neue Inhaltswünsche oder Änderungen nach bereits erteilter Freigabe stellen Zusatzleistungen dar und werden gesondert nach Aufwand oder auf Grundlage eines gesonderten Angebots vergütet."
  },
  {
    "type": "clause",
    "text": "2.1.6 Soweit nicht anders vereinbart, sind bei Webseitenprojekten zwei Korrekturschleifen enthalten. Korrekturschleifen beziehen sich auf Anpassungen innerhalb des vereinbarten Leistungsumfangs. Konzeptionelle Neuausrichtungen, neue Seitenstrukturen, neue Funktionen, neue Designs oder neue Inhalte, die nicht Bestandteil des ursprünglichen Leistungsumfangs waren, gelten nicht als Korrektur, sondern als Zusatzleistung."
  },
  {
    "type": "clause",
    "text": "2.1.7 Sobald die Webseite fertiggestellt wurde, wird der Auftragnehmer den Kunden zur Abnahme der Webseite auffordern."
  },
  {
    "type": "clause",
    "text": "2.1.8 Voraussetzung für die Tätigkeit des Auftragnehmers ist, dass sämtliche vom Kunden zu stellenden und für die Umsetzung des Projekts erforderlichen Daten, zum Beispiel Texte, Vorlagen, Grafiken, Schriften, Zugangsdaten, rechtliche Angaben und/oder Systemumgebungen, dem Auftragnehmer rechtzeitig und in geeigneter Form zur Verfügung gestellt werden. Für Verzögerungen und Verspätungen bei der Umsetzung von Projekten, die durch verspätete, unvollständige oder fehlerhafte Mit- bzw. Zuarbeit des Kunden entstehen, ist der Auftragnehmer gegenüber dem Kunden in keinerlei Hinsicht verantwortlich."
  },
  {
    "type": "clause",
    "text": "2.1.9 Die Prüfung oder Beschaffung von Rechten, die Beschaffung und/oder Einbindung von Plugins und/oder Tools, zum Beispiel Statistik-Tools, Cookie-Tools, Newsletter-Tools, Buchungstools, CRM-Systeme, Zahlungsanbieter oder Zertifikate, zum Beispiel SSL/TLS, sind vom Auftragnehmer nur dann geschuldet, soweit dies individualvertraglich ausdrücklich vereinbart ist. Ein Anspruch auf die Herausgabe von Grafiken, Quellcodes, Entwicklungsdokumentationen, Handbüchern, Projektdateien, Templates, Skripten, Automationen und sonstiger Zusatzdokumentation besteht, vorbehaltlich abweichender ausdrücklicher Individualvereinbarungen, nicht."
  },
  {
    "type": "clause",
    "text": "2.1.10 Soweit nicht anders vereinbart, sind die erstellten Webseiten für die Browser Chrome, Safari, Firefox und Edge in ihrer jeweils aktuellen Fassung optimiert, jeweils die letzten zwei Versionen des Browsers. Eine Optimierung für veraltete Browser, Sondergeräte, ungewöhnliche Bildschirmgrößen, besondere Unternehmenssysteme, Spezialsoftware oder individuelle technische Umgebungen des Kunden ist nur geschuldet, wenn dies ausdrücklich vereinbart wurde."
  },
  {
    "type": "clause",
    "text": "2.1.11 Suchmaschinenoptimierung, Local SEO, GEO-Optimierung, technische SEO, Performance-Optimierung, Conversion-Optimierung, Barrierefreiheit, Tracking-Konzeption, rechtliche Prüfung, Cookie-Consent-Konfiguration und die Erstellung rechtlicher Pflichttexte werden nur geschuldet, wenn sie ausdrücklich vereinbart wurden."
  },
  {
    "type": "clause",
    "text": "2.1.12 Der Auftragnehmer schuldet bei Webseiten keine bestimmte Anzahl an Besuchern, Anfragen, Leads, Verkäufen, Buchungen, Bewerbungen, Rankings oder sonstigen wirtschaftlichen Erfolgen, sofern dies nicht ausdrücklich individualvertraglich zugesichert wurde."
  },
  {
    "type": "clause",
    "text": "2.1.13 Der Auftragnehmer ist nicht berechtigt und nicht verpflichtet, den Kunden zu wettbewerbs-, verbraucher-, kennzeichnungs-, datenschutz-, urheber-, marken- oder sonstigen rechtlichen Fragen im Sinne des Rechtsdienstleistungsgesetzes zu beraten. Es obliegt daher dem Kunden, sich über die für seine Webseite, seinen Shop, seine Angebote, seine Branche und seine Inhalte geltenden rechtlichen Bestimmungen zu informieren und diese gegebenenfalls durch einen spezialisierten Rechtsanwalt prüfen zu lassen."
  },
  {
    "type": "clause",
    "text": "2.1.14 Nach Fertigstellung der Webseiten und/oder einzelner Teile hiervon kann der Auftragnehmer dem Kunden Wartungs- und Pflegeleistungen in Bezug auf die Webseiten anbieten. Jedoch ist weder der Auftragnehmer zu einem solchen Angebot verpflichtet, noch muss der Kunde die weitergehenden Leistungsangebote des Auftragnehmers in Anspruch nehmen. Entsprechende Vereinbarungen sind ausschließlich Gegenstand von Individualvereinbarungen. Werden keine zusätzlichen Wartungs- und Pflegeleistungen zwischen den Parteien vereinbart, ist nach Abnahme allein der Kunde für die technische Instandhaltung, Sicherheit, Aktualität und rechtliche Aktualität der Webseiten verantwortlich. Der Auftragnehmer haftet gegenüber dem Kunden nicht für eventuelle Sicherheitslücken, die durch die Verwendung veralteter Software von Dritten zu rechtswidrigen Zwecken ausgenutzt werden, insbesondere Hacking, Schadsoftware oder Datenverlust."
  },
  {
    "type": "clause",
    "text": "2.1.15 Eine Einweisung, Schulung oder Dokumentation zur Bedienung der Webseite, des CMS, des Shopsystems oder einzelner Tools ist nur geschuldet, wenn dies ausdrücklich vereinbart wurde."
  },
  {
    "type": "section",
    "text": "2.2 Webseiten- und Shoperstellung (Lasten- und Pflichtenheft)"
  },
  {
    "type": "clause",
    "text": "2.2.1 Sofern zwischen den Vertragsparteien die Erstellung von neuen oder die Erweiterung bestehender Webseiten, Shops oder Web- und Shopkomponenten auf Grundlage eines Lasten- und Pflichtenhefts vereinbart wurde, erfolgt die Auftragsabwicklung nach Maßgabe der vorliegenden Ziffer."
  },
  {
    "type": "clause",
    "text": "2.2.2 Gegenstand von Webseiten-Erstellungsverträgen zwischen dem Auftragnehmer und dem Kunden ist grundsätzlich die Entwicklung neuer Webseiten oder die Erweiterung bestehender Webseiten, zum Beispiel das Einbinden neuer Schnittstellen oder die Programmierung neuer Online-Anwendungen, unter Beachtung der technischen und/oder gestalterischen Vorgaben des Kunden. Zwischen den Parteien geschlossene Webseiten-Erstellungsverträge sind Werkverträge im Sinne von §§ 631 ff. BGB."
  },
  {
    "type": "clause",
    "text": "2.2.3 Maßgeblich für den Umfang der vom Auftragnehmer zu erbringenden Leistungen sind zum einen individualvertragliche Vereinbarungen zwischen den Parteien und zum anderen ein vom Kunden erstelltes, ausführliches Lastenheft sowie das darauf aufbauende Pflichtenheft. Der Auftragnehmer wird die im Lastenheft beschriebenen Vorstellungen des Kunden nach bestem Wissen und Gewissen auf Vollständigkeit, Eignung mit Ausnahme der rechtlichen Eignung, insbesondere hinsichtlich der Rechte von Dritten, Eindeutigkeit, Realisierbarkeit und Widerspruchsfreiheit prüfen. Sollte der Auftragnehmer erkennen, dass sich die im Lastenheft enthaltenen Vorgaben nicht für die Erstellung einer Webseite eignen, wird der Auftragnehmer den Kunden unverzüglich darauf hinweisen und einen entsprechenden Vorschlag für eine Ergänzung und/oder Anpassung des Lastenhefts unterbreiten. Der Kunde hat zu eventuellen Vorschlägen des Auftragnehmers hinsichtlich des Lastenhefts innerhalb eines angemessenen Zeitraums schriftlich oder in Textform Stellung zu nehmen und schließlich die Inhalte des Lastenhefts gegenüber dem Auftragnehmer verbindlich schriftlich oder in Textform zu bestätigen. Besteht zwischen den Parteien hinsichtlich des Lastenhefts Einigkeit, werden dessen Inhalte Vertragsbestandteil."
  },
  {
    "type": "clause",
    "text": "2.2.4 Auf Grundlage des Lastenhefts erstellt der Auftragnehmer ein Pflichtenheft, das primär die fachlich-technische und/oder gestalterische Umsetzung der im Lastenheft enthaltenen Vorgaben beschreibt. Nach Fertigstellung legt der Auftragnehmer dem Kunden das Pflichtenheft zur Abnahme vor. Der Kunde ist berechtigt, das vom Auftragnehmer erstellte Pflichtenheft zurückzuweisen und Änderungs- bzw. Anpassungswünsche mitzuteilen. Der Auftragnehmer verpflichtet sich, unter Berücksichtigung der Wünsche des Kunden, maximal zwei Alternativvorschläge vorzulegen. Ist der Kunde mit dem letzten Vorschlag des Auftragnehmers endgültig nicht einverstanden, kann der Kunde oder der Auftragnehmer das Vertragsverhältnis, sofern gesetzlich möglich, außerordentlich kündigen bzw. vom Vertrag zurücktreten. Die im Zusammenhang mit dem Lasten- und/oder Pflichtenheft entstandenen Honorare und/oder Aufwendungen des Auftragnehmers sind vom Kunden in diesem Fall angemessen zu vergüten bzw. zu ersetzen."
  },
  {
    "type": "clause",
    "text": "2.2.5 Wird das Pflichtenheft vom Kunden abgenommen, gelten die dort beschriebenen Leistungen als zwischen den Parteien endgültig vereinbart. Jegliche Abweichung von den Inhalten des durch den Kunden abgenommenen Pflichtenhefts bedarf einer ausdrücklichen Individualvereinbarung zwischen den Parteien. Der Auftragnehmer erbringt keine über die im vom Kunden abgenommenen Pflichtenheft beschriebenen Leistungen hinausgehenden Leistungen. Ebenso erbringt der Auftragnehmer grundsätzlich keine Minderleistungen im Verhältnis zu den im vom Kunden abgenommenen Pflichtenheft beschriebenen Leistungen. Nach Abnahme des Pflichtenhefts durch den Kunden entwickelt und programmiert der Auftragnehmer die Webseiten unter Beachtung der vereinbarten Vorgaben."
  },
  {
    "type": "clause",
    "text": "2.2.6 Der Auftragnehmer stellt dem Kunden neben dem Pflichtenheft einen Zeit- und Arbeitsplan zur Verfügung. Die Inhalte und Vorgaben dieses Zeit- und Arbeitsplans werden Vertragsbestandteil, sofern der Kunde nicht unverzüglich widerspricht. Vereinbarte Fristen setzen voraus, dass der Kunde sämtliche erforderlichen Mitwirkungshandlungen, Freigaben, Zugangsdaten, Inhalte und vereinbarten Zahlungen rechtzeitig erbracht hat. Verzögerungen aus dem Verantwortungsbereich des Kunden verlängern vereinbarte Fristen angemessen."
  },
  {
    "type": "clause",
    "text": "2.2.7 Voraussetzung für die Tätigkeit des Auftragnehmers ist, dass sämtliche vom Kunden zu stellenden und für die Umsetzung des Projekts erforderlichen Daten, zum Beispiel Texte, Vorlagen, Grafiken, rechtliche Angaben, Zugangsdaten, Inhalte und/oder Systemumgebungen, dem Auftragnehmer rechtzeitig und in geeigneter Form zur Verfügung gestellt werden. Für Verzögerungen und Verspätungen bei der Umsetzung von Projekten, die durch verspätete, unvollständige oder fehlerhafte Mit- bzw. Zuarbeit des Kunden entstehen, ist der Auftragnehmer gegenüber dem Kunden in keinerlei Hinsicht verantwortlich."
  },
  {
    "type": "clause",
    "text": "2.2.8 Sobald die Webseite fertiggestellt wurde, wird der Auftragnehmer den Kunden zur Abnahme der Webseite auffordern. Bei Bedarf kann vor der Abnahme eine Testphase vereinbart werden. Stellt der Kunde vor der Abnahme oder im Laufe einer vereinbarten Testphase Fehler fest, wird er diese gegenüber dem Auftragnehmer schriftlich oder in Textform anzeigen. Der Auftragnehmer wird sich bemühen, die Fehler fachgerecht zu korrigieren. Zu diesem Zweck darf der Auftragnehmer vorübergehende Workarounds bereitstellen."
  },
  {
    "type": "clause",
    "text": "2.2.9 Die Prüfung oder Beschaffung von Rechten, die Beschaffung und/oder Einbindung von Plugins und/oder Tools, zum Beispiel Statistik, Cookie-Tools, Tracking, Newsletter, CRM, Zahlungsanbieter oder Zertifikate, zum Beispiel SSL/TLS, sind vom Auftragnehmer nur dann geschuldet, soweit dies individualvertraglich ausdrücklich vereinbart ist. Ein Anspruch auf die Herausgabe von Grafiken, Quellcodes, Entwicklungsdokumentationen, Handbüchern, Projektdateien, Templates, Skripten, Automationen und sonstiger Zusatzdokumentation besteht, vorbehaltlich abweichender ausdrücklicher Individualvereinbarungen, nicht."
  },
  {
    "type": "clause",
    "text": "2.2.10 Soweit nicht anders vereinbart, sind die erstellten Webseiten für die Browser Chrome, Safari, Firefox und Edge in ihrer jeweils aktuellen Fassung optimiert, jeweils die letzten zwei Versionen des Browsers. Suchmaschinenoptimierung wird nur geschuldet, wenn sie ausdrücklich vereinbart wurde."
  },
  {
    "type": "clause",
    "text": "2.2.11 Der Auftragnehmer ist nicht berechtigt und nicht verpflichtet, den Kunden zu wettbewerbs-, verbraucher-, kennzeichnungs-, datenschutz-, urheber-, marken- oder sonstigen rechtlichen Fragen im Sinne des Rechtsdienstleistungsgesetzes zu beraten. Es obliegt daher dem Kunden, sich über die für seinen Shop, seine Webseite, seine Angebote und seine Branche geltenden rechtlichen Bestimmungen zu informieren und diese gegebenenfalls durch einen spezialisierten Rechtsanwalt prüfen zu lassen."
  },
  {
    "type": "clause",
    "text": "2.2.12 Nach Fertigstellung der Webseiten und/oder einzelner Teile hiervon kann der Auftragnehmer dem Kunden Wartungs- und Pflegeleistungen in Bezug auf die Webseiten anbieten. Jedoch ist weder der Auftragnehmer zu einem solchen Angebot verpflichtet, noch muss der Kunde die weitergehenden Leistungsangebote des Auftragnehmers in Anspruch nehmen. Entsprechende Vereinbarungen sind ausschließlich Gegenstand von Individualvereinbarungen. Werden keine zusätzlichen Wartungs- und Pflegeleistungen zwischen den Parteien vereinbart, ist nach Abnahme allein der Kunde für die technische Instandhaltung, Sicherheit, Aktualität und rechtliche Aktualität der Webseiten verantwortlich. Der Auftragnehmer haftet gegenüber dem Kunden nicht für eventuelle Sicherheitslücken, die durch die Verwendung veralteter Software von Dritten zu rechtswidrigen Zwecken ausgenutzt werden, insbesondere Hacking, Schadsoftware oder Datenverlust."
  },
  {
    "type": "section",
    "text": "2.3 Wartung und Betreuung von Webseiten / Shops"
  },
  {
    "type": "clause",
    "text": "2.3.1 Nach Fertigstellung der Webseiten und/oder einzelner Teile hiervon kann der Auftragnehmer dem Kunden Wartungs- und Betreuungsleistungen in Bezug auf die Webseiten anbieten. Der Auftragnehmer kann auch die Wartung von Drittwebseiten anbieten. Jedoch ist weder der Auftragnehmer zu einem solchen Angebot verpflichtet, noch muss der Kunde die weitergehenden Leistungsangebote des Auftragnehmers in Anspruch nehmen. Entsprechende Vereinbarungen sind ausschließlich Gegenstand von Individualabsprachen."
  },
  {
    "type": "clause",
    "text": "2.3.2 Inhalt der Wartungsverträge ist, sofern nicht anders vereinbart, die Beseitigung von Funktionsstörungen sowie die anlassbezogene Aktualisierung der Webseite für gängige Webbrowser in ihrer jeweils aktuellen Version. Weitergehende Leistungen, wie regelmäßige Wartungen, Sicherheitsupdates, Backups, Wiederherstellungen, Malware-Bereinigungen, Performance-Optimierungen, Inhaltsänderungen, rechtliche Aktualisierungen oder technische Weiterentwicklungen, können individualvertraglich vereinbart werden."
  },
  {
    "type": "clause",
    "text": "2.3.3 Der Auftragnehmer haftet nicht für Funktionsstörungen und Inkompatibilitäten, die durch eigenmächtige Änderungen des Kunden, Änderungen durch Dritte, veraltete Software, Plugins, Themes, Serverumgebungen, Drittanbieter-Tools oder sonstige Fehler verursacht wurden, die nicht im Verantwortungsbereich des Auftragnehmers liegen. Die Vorschriften unter „Haftung/Freistellung“ bleiben hiervon unberührt."
  },
  {
    "type": "clause",
    "text": "2.3.4 Die Wartung umfasst, vorbehaltlich abweichender Vereinbarungen, nur die technische, nicht jedoch die inhaltliche oder rechtliche Aktualisierung der Webseite. Der Auftragnehmer schuldet vorbehaltlich abweichender Individualvereinbarungen insbesondere nicht die Aktualisierung des Impressums, der Datenschutzerklärung, der Cookie-Hinweise, der AGB, der Widerrufsbelehrung, der Preisangaben, der Leistungsbeschreibungen oder sonstiger rechtlicher Pflichtinformationen."
  },
  {
    "type": "clause",
    "text": "2.3.5 Der Kunde bleibt verpflichtet, eigene Sicherungskopien seiner Inhalte, Daten und Systeme vorzuhalten, sofern nicht ausdrücklich eine Backup-Leistung durch den Auftragnehmer vereinbart wurde."
  },
  {
    "type": "clause",
    "text": "2.3.6 Reaktionszeiten, feste Bearbeitungszeiten, Notfall-Support, telefonische Erreichbarkeit, Wochenend- oder Feiertagssupport sind nur geschuldet, wenn diese ausdrücklich vereinbart wurden."
  },
  {
    "type": "section",
    "text": "2.4 Webhosting"
  },
  {
    "type": "clause",
    "text": "2.4.1 Der Auftragnehmer bietet dem Kunden auch das Hosten der von ihm erstellten Webseiten / Shops an. Der Auftragnehmer wird zur Erfüllung seiner Leistungen die Server von Drittunternehmen einsetzen. Über die eingesetzten Server und Drittunternehmen wird der Auftragnehmer den Kunden vor Vertragsschluss informieren. Der spezifische Leistungsumfang, insbesondere Domainverwaltung, Speicherplatz, E-Mail-Hosting, Zertifikate, Backups, Serverstandort, Support und technische Leistungen, ist Gegenstand individueller Vereinbarungen zwischen den Parteien."
  },
  {
    "type": "clause",
    "text": "2.4.2 Die Verfügbarkeit der vom Auftragnehmer zum Zwecke des Hostings verwendeten Server liegt bei mindestens 99 Prozent im Jahresmittel. Hiervon ausgenommen sind diejenigen Zeiten, innerhalb derer die Server aufgrund durch vom Auftragnehmer nicht beeinflussbarer Ereignisse nicht erreichbar sind, insbesondere höhere Gewalt, Handlungen Dritter, technische Probleme außerhalb des Einflussbereichs des Auftragnehmers, Wartungsarbeiten, Angriffe auf die Serverinfrastruktur, Störungen von Netzbetreibern oder Störungen eingesetzter Drittanbieter."
  },
  {
    "type": "clause",
    "text": "2.4.3 Es obliegt dem Kunden, regelmäßige Sicherungskopien seiner gehosteten Daten zu erstellen. Ist der Kunde hierzu nicht in der Lage, hat er den Auftragnehmer oder andere hierzu fachlich geeignete Dritte mit der Sicherung zu beauftragen. Für eventuelle Datenverluste, die aufgrund mangelnder Datensicherung entstehen, haftet der Kunde selbst, sofern keine ausdrückliche Backup-Leistung vereinbart wurde."
  },
  {
    "type": "clause",
    "text": "2.4.4 Auf dem zur Verfügung gestellten Speicherplatz dürfen keine Inhalte gespeichert werden, die beleidigend, extremistisch, gewaltverherrlichend oder gewaltverharmlosend, volksverhetzend, rechtsextremistisch, diskriminierend, verfassungsfeindlich, jugendgefährdend oder pornografisch sind, gegen Rechte Dritter, zum Beispiel Marken- und Urheberrechte, oder sonstiges geltendes Recht oder die guten Sitten verstoßen oder Schadcode bzw. Schadsoftware enthalten."
  },
  {
    "type": "clause",
    "text": "2.4.5 Sofern der Auftragnehmer Kenntnis darüber erlangt, dass im Rahmen des Hostings unzulässige Inhalte im Sinne dieser AGB auf dem bereitgestellten Speicherplatz hinterlegt sein könnten, wird er die betreffenden Inhalte kursorisch prüfen. Sollte die kursorische Prüfung ergeben, dass ein unzulässiger Inhalt nicht ausgeschlossen werden kann, kann der Auftragnehmer diesen nach eigenem Ermessen vorläufig sperren oder andere, der Gefährdungslage angemessene Maßnahmen bis hin zur Löschung des Inhalts treffen. Der Auftragnehmer wird den Kunden zur Stellungnahme auffordern und ihm hierfür eine angemessene Frist einräumen, soweit dem keine rechtlichen oder tatsächlichen Gründe entgegenstehen."
  },
  {
    "type": "clause",
    "text": "2.4.6 Sobald die Stellungnahme des Kunden vorliegt oder wenn der Kunde innerhalb der eingeräumten Frist keine Stellungnahme abgegeben hat, wird der Auftragnehmer eine endgültige Entscheidung darüber treffen, wie mit dem betroffenen Inhalt umzugehen ist. Hierbei kommen insbesondere folgende Maßnahmen in Betracht: Verwarnung, unbefristete Sperrung oder endgültige Löschung des Inhalts, vorübergehende Sperrung des Kunden, teilweise Sperrung, ordentliche oder außerordentliche Kündigung des Vertrags, Strafanzeige oder Anzeige bei zuständigen Behörden, soweit dies rechtlich geboten oder zulässig ist."
  },
  {
    "type": "clause",
    "text": "2.4.7 Der Auftragnehmer wird den Kunden über die Bewertung, deren Ergebnis und die beschlossenen Maßnahmen informieren, soweit dem keine rechtlichen Gründe entgegenstehen."
  },
  {
    "type": "clause",
    "text": "2.4.8 Der Auftragnehmer wird die gespeicherten Inhalte nicht proaktiv prüfen und, vorbehaltlich abweichender Angaben, auch keine automatisierten Prüfungen der abgelegten Inhalte vornehmen. Er wird jedoch tätig, sobald er selbst derartige Inhalte erkennt oder von Dritten über solche Inhalte in Kenntnis gesetzt wird. Sofern der Kunde Kenntnis von derartigen Inhalten erlangt, kann er sich jederzeit an den Auftragnehmer wenden."
  },
  {
    "type": "clause",
    "text": "2.4.9 Bei Zahlungsverzug des Kunden ist der Auftragnehmer berechtigt, Hosting-, Wartungs-, Support-oder sonstige laufende Leistungen nach vorheriger Ankündigung vorübergehend auszusetzen oder zu sperren, sofern der Kunde trotz Mahnung nicht zahlt. Die Zahlungspflicht des Kunden bleibt hiervon unberührt."
  },
  {
    "type": "clause",
    "text": "2.4.10 Domains, Lizenzen, Drittanbieter-Accounts und Hostingverträge können je nach Vereinbarung entweder im Namen des Kunden oder im Namen des Auftragnehmers geführt werden. Soweit Domains, Lizenzen oder Accounts im Namen des Auftragnehmers geführt werden, erfolgt eine Übertragung an den Kunden nur nach vollständiger Bezahlung aller offenen Forderungen und nur, sofern eine Übertragung technisch, rechtlich und nach den Bedingungen des jeweiligen Drittanbieters möglich ist."
  },
  {
    "type": "section",
    "text": "2.5 Drittanbieter, Plugins, Tools und Lizenzen"
  },
  {
    "type": "clause",
    "text": "2.5.1 Kosten für Drittanbieter, Plugins, Themes, Stockmedien, Schriftlizenzen, Schnittstellen, Trackingtools, Cookie-Consent-Tools, Newsletterdienste, CRM-Systeme, Zahlungsanbieter, Hostingdienste, Domains, Werbebudgets, KI-Tools oder sonstige externe Dienste sind nicht in der Vergütung des Auftragnehmers enthalten, sofern sie nicht ausdrücklich im Angebot enthalten sind."
  },
  {
    "type": "clause",
    "text": "2.5.2 Der Auftragnehmer haftet nicht für Änderungen der Preise, Funktionen, Verfügbarkeiten, Nutzungsbedingungen, Schnittstellen, API-Regeln, Richtlinien oder technischen Voraussetzungen von Drittanbietern."
  },
  {
    "type": "clause",
    "text": "2.5.3 Sofern der Kunde dem Auftragnehmer den Einsatz bestimmter Drittanbieter, Plugins, Tools oder Plattformen vorgibt, trägt der Kunde die Verantwortung dafür, dass deren Nutzung für seine Zwecke rechtlich und tatsächlich zulässig ist."
  },
  {
    "type": "clause",
    "text": "2.5.4 Der Auftragnehmer schuldet keine dauerhafte Funktionsfähigkeit von Drittanbieter-Schnittstellen, Plugins, Themes, externen Plattformen oder APIs, sofern die Störung auf Änderungen oder Ausfälle außerhalb des Verantwortungsbereichs des Auftragnehmers zurückzuführen ist."
  },
  {
    "type": "section",
    "text": "2.6 Barrierefreiheit"
  },
  {
    "type": "clause",
    "text": "2.6.1 Die Umsetzung bestimmter Anforderungen an Barrierefreiheit, insbesondere nach dem Barrierefreiheitsstärkungsgesetz, der Barrierefreie-Informationstechnik-Verordnung, WCAG-Richtlinien oder sonstigen gesetzlichen, technischen oder branchenspezifischen Vorgaben, ist nur geschuldet, wenn dies ausdrücklich individualvertraglich vereinbart wurde."
  },
  {
    "type": "clause",
    "text": "2.6.2 Soweit Barrierefreiheit nicht ausdrücklich vereinbart wurde, schuldet der Auftragnehmer keine rechtliche Prüfung, Zertifizierung, vollständige technische Barrierefreiheitsprüfung oder Dokumentation der Barrierefreiheit."
  },
  {
    "type": "clause",
    "text": "2.6.3 Der Kunde ist selbst dafür verantwortlich zu prüfen, ob und in welchem Umfang seine Webseite, sein Shop, seine App, seine digitalen Dienstleistungen oder seine sonstigen Angebote gesetzlichen Anforderungen an Barrierefreiheit unterliegen."
  },
  {
    "type": "clause",
    "text": "2.6.4 Werden barrierefreie Umsetzungen vereinbart, richtet sich der konkrete Umfang ausschließlich nach der individualvertraglichen Vereinbarung. Nachträgliche Anforderungen, Prüfungen, Anpassungen, Dokumentationen oder Zertifizierungen sind gesondert zu vergüten."
  },
  {
    "type": "part",
    "text": "Teil 3 - Erstellung und Gestaltung von Content"
  },
  {
    "type": "section",
    "text": "3.1 Gestaltung von Printprodukten"
  },
  {
    "type": "clause",
    "text": "3.1.1 Gegenstand von Designverträgen im Printbereich zwischen dem Auftragnehmer und dem Kunden ist grundsätzlich die Entwicklung von Printprodukten nach den gestalterischen Vorgaben des Kunden, zum Beispiel Banner, Postgrafiken, Plakate, Schilder, Flyer, Roll-Ups, KFZ- oder Schaufenster-Beklebungen, Textilien oder Logo-Entwürfe. Zwischen den Parteien geschlossene Designverträge sind Werkverträge im Sinne von § 631 ff. BGB."
  },
  {
    "type": "clause",
    "text": "3.1.2 Die im Einzelnen vereinbarten Leistungen ergeben sich aus dem zwischen dem Auftragnehmer und dem Kunden individuell geschlossenen Vertrag. Hierzu stellt der Kunde beim Auftragnehmer zunächst eine Anfrage mit einer möglichst genauen Beschreibung der von ihm gewünschten Leistungen. Diese Anfrage stellt eine Aufforderung zur Abgabe eines Angebots durch den Auftragnehmer dar. Der Auftragnehmer wird die in der Anfrage beschriebenen Vorstellungen des Kunden nach bestem Wissen und Gewissen auf Vollständigkeit, Eignung mit Ausnahme der rechtlichen Eignung, insbesondere in Bezug auf die Rechte von Dritten, Eindeutigkeit, Realisierbarkeit und Widerspruchsfreiheit prüfen und auf Grundlage der aus der Kundenanfrage hervorgehenden Wünsche ein Angebot erstellen. Erst durch die Annahme des Angebots durch den Kunden kommt ein Vertrag zwischen Auftragnehmer und Kunden zustande."
  },
  {
    "type": "clause",
    "text": "3.1.3 Nach Abschluss des Vertrags werden die Anforderungen des Kunden bei Bedarf in einem weiteren Briefing besprochen und die Vorgaben konkretisiert. Zu diesem Zeitpunkt können Kundenwünsche eingebracht werden, sofern diese durch den ursprünglich vereinbarten Leistungsumfang gedeckt sind. Sofern erforderlich, besteht die Möglichkeit eines Rebriefings vor Fertigung des Leistungsgegenstands. Anpassungen werden Bestandteil des ursprünglichen Vertrags, wenn beide Vertragsparteien in Textform, zum Beispiel per E-Mail, zustimmen. Im Übrigen ist der Auftragnehmer nur zur Herstellung der im Vertrag aufgelisteten Positionen verpflichtet. Darüberhinausgehende Leistungen müssen gesondert vereinbart und vergütet werden."
  },
  {
    "type": "clause",
    "text": "3.1.4 Soweit nichts anderes vereinbart, steht dem Kunden das Recht auf zwei Korrekturschleifen zu. Reklamationen hinsichtlich der künstlerischen Gestaltung sind nach Durchführung der vereinbarten Korrekturschleifen grundsätzlich ausgeschlossen. Wünscht der Kunde darüber hinaus weitere Änderungen, so hat er die Mehrkosten zu tragen."
  },
  {
    "type": "clause",
    "text": "3.1.5 Voraussetzung für die Tätigkeit des Auftragnehmers ist, dass der Kunde sämtliche für die Umsetzung des Projekts erforderlichen Daten, Texte, Vorlagen, Grafiken und sonstigen Inhalte dem Auftragnehmer vor Auftragsbeginn vollständig und in geeigneter Form zur Verfügung stellt. Für Verzögerungen und Verspätungen bei der Umsetzung von Projekten, die durch verspätete oder unvollständige Mit- bzw. Zuarbeit des Kunden entstehen, ist der Auftragnehmer gegenüber dem Kunden in keinerlei Hinsicht verantwortlich. Kommt der Kunde dieser Verpflichtung nicht nach, kann der Auftragnehmer dem Kunden den hierdurch entstehenden Zeitaufwand in Rechnung stellen."
  },
  {
    "type": "clause",
    "text": "3.1.6 Soweit vertraglich nicht anders vereinbart und vom Vertragszweck nicht anders zu erwarten, schuldet der Auftragnehmer bei der Erstellung von Printprodukten neben den vertraglich vereinbarten Leistungsgegenständen nur die Übergabe einer gängigen Druckdatei, zum Beispiel PDF, JPG oder PNG. Der Kunde hat keinen Anspruch auf Herausgabe einer bearbeitbaren Datei, zum Beispiel offene Dateien aus Grafikprogrammen, sofern dies nicht ausdrücklich vereinbart wurde."
  },
  {
    "type": "section",
    "text": "3.2 Abwicklung von Printaufträgen"
  },
  {
    "type": "clause",
    "text": "3.2.1 Der Auftragnehmer bietet dem Kunden die Abwicklung von Aufträgen zur Erstellung von Printprodukten, zum Beispiel Flyer, Broschüren, Plakate, Kataloge und ähnliche Produkte, an. Der Auftragnehmer übernimmt sämtliche hierfür vereinbarten Handlungen, zum Beispiel die Kommunikation mit dem jeweiligen Druckdienstleister. Je nach Vereinbarung bietet der Auftragnehmer die Leistungen als Direktgeschäft oder als Vermittlungsgeschäft an."
  },
  {
    "type": "clause",
    "text": "3.2.2 Vereinbaren die Parteien ein Direktgeschäft, druckt der Auftragnehmer die in Auftrag gegebenen Printprodukte selbst oder beauftragt in eigenem Namen und auf eigene Rechnung einen Druckdienstleister. Vertragspartner des Kunden ist in diesem Fall ausschließlich der Auftragnehmer. Zwischen dem Kunden und dem Druckdienstleister entsteht keine Vertragsbeziehung. Der Auftragnehmer stellt dem Kunden die Printprodukte direkt in Rechnung. Der Kunde nimmt die Printprodukte gegenüber dem Auftragnehmer ab."
  },
  {
    "type": "clause",
    "text": "3.2.3 Vereinbaren die Parteien ein Vermittlungsgeschäft, schließt der Auftragnehmer den Vertrag für die Erstellung der Printprodukte mit dem Druckdienstleister im Namen und auf Rechnung des Kunden ab oder vermittelt einen solchen Vertrag. Der Auftragnehmer tritt gegenüber dem Druckdienstleister als reiner Vermittler auf. Die Vertragsbeziehung entsteht allein zwischen dem Kunden und dem Druckdienstleister. Der Auftragnehmer ist an diesem Vertrag nicht beteiligt. Der Auftragnehmer informiert den Kunden über alle wesentlichen Schritte und stimmt sich hinsichtlich der Details zum Vertragsinhalt und Vertragsabschluss, insbesondere zu Art, Preisen und Mengen, mit dem Kunden ab und ist an dessen Weisungen gebunden. Es gelten die jeweiligen Preis- und/oder Geschäftsbedingungen des Druckdienstleisters. Der Kunde bezahlt die Leistungen direkt gegenüber dem Druckdienstleister. Die Abnahme der Printprodukte erfolgt gegenüber dem Druckdienstleister. Es obliegt dem Kunden, die fertiggestellten Printprodukte auf ihre Mangelfreiheit hin zu überprüfen. Der Auftragnehmer haftet nicht für die vertragsgemäße Erzeugung der Printprodukte durch den Druckdienstleister, speziell nicht für deren Inhalt, Bestand, Güte und/oder Beschaffenheit. Der Auftragnehmer stellt im Streitfall dem Kunden, soweit rechtlich zulässig, alle notwendigen Informationen zur Verfügung. Eine darüberhinausgehende Unterstützung der Geltendmachung von Mängelgewährleistungs- oder sonstigen Ansprüchen ist seitens des Auftragnehmers nicht geschuldet. Die Vorschriften unter „Haftung/Freistellung“ bleiben hiervon unberührt."
  },
  {
    "type": "clause",
    "text": "3.2.4 Der Kunde ist verpflichtet, die zu übermittelnden Druckdaten vor Übermittlung an den Druckdienstleister sorgfältig auf inhaltliche und technische Richtigkeit und Vollständigkeit zu prüfen. Vorbehaltlich abweichender Vereinbarungen überprüft der Auftragnehmer die Druckdaten nicht auf inhaltliche oder technische Richtigkeit. Der Druck der in Auftrag gegebenen Printerzeugnisse erfolgt erst dann, wenn der Kunde die finale Druckfreigabe erteilt hat."
  },
  {
    "type": "clause",
    "text": "3.2.5 Sofern ein bestimmtes Übermittlungsformat erforderlich ist, zum Beispiel PDF oder InDesign, wird der Kunde die Druckdaten in diesem Format übermitteln."
  },
  {
    "type": "section",
    "text": "3.3 Erstellung von Texten / Copywriting"
  },
  {
    "type": "clause",
    "text": "3.3.1 Der Auftragnehmer erstellt für den Kunden unter anderem Texte, zum Beispiel Pressemeldungen, Beiträge für Webseiten, Werbetexte, SEO-Texte, Social-Media-Texte, Anzeigen-Texte, Skripte oder sonstige redaktionelle und werbliche Inhalte. Die Inhalte dieser Texte werden individualvertraglich festgelegt."
  },
  {
    "type": "clause",
    "text": "3.3.2 Sobald die vereinbarten Texte fertiggestellt wurden, wird der Auftragnehmer diese dem Kunden zur Freigabe und Abnahme übermitteln. Soweit nicht anders vereinbart, steht dem Kunden das Recht auf zwei Korrekturschleifen zu. Reklamationen hinsichtlich der stilistischen Gestaltung oder die Einbindung neuer Informationen in den Text sind nach der zweiten Änderungsschleife grundsätzlich ausgeschlossen. Wünscht der Kunde darüber hinaus weitere Änderungen, so hat er die Mehrkosten zu tragen."
  },
  {
    "type": "clause",
    "text": "3.3.3 Sofern der Auftragnehmer mit der Veröffentlichung beauftragt wurde, erfolgt die Veröffentlichung der Texte vorbehaltlich abweichender Vereinbarungen erst nach Freigabe durch den Kunden. Die Freigabe stellt zugleich die Abnahme der Texte dar. Bei Pressemeldungen wird nach erfolgter Freigabe ferner ein Distributionsdatum festgelegt, an dem diese an die Medien übermittelt werden sollen. Sofern der Kunde die Texte selbst veröffentlicht oder veröffentlichen soll, hat er die Texte vorab abzunehmen. Sofern der Kunde die Texte vor Abnahme veröffentlicht, gilt die Veröffentlichung als Abnahme."
  },
  {
    "type": "clause",
    "text": "3.3.4 Für Fehler, die nach der Freigabe oder Abnahme entdeckt werden, haftet der Auftragnehmer ausschließlich nach Maßgabe der Vorschriften unter der Überschrift „Haftung/Freistellung“."
  },
  {
    "type": "clause",
    "text": "3.3.5 Der Kunde ist verpflichtet, Texte vor Veröffentlichung auf sachliche Richtigkeit, rechtliche Zulässigkeit, branchenspezifische Vorgaben, Preisangaben, Leistungsversprechen und sonstige tatsächliche Angaben zu prüfen. Der Auftragnehmer schuldet keine rechtliche, steuerliche, medizinische, finanzielle, wettbewerbsrechtliche oder branchenspezifische Prüfung der Texte."
  },
  {
    "type": "section",
    "text": "3.4 Gestaltung und Konzeption von Grafiken und Logos (Designs)"
  },
  {
    "type": "clause",
    "text": "3.4.1 Der Auftragnehmer übernimmt nach Vereinbarung mit dem Kunden die Konzeption und Gestaltung von Grafiken und/oder Logos."
  },
  {
    "type": "clause",
    "text": "3.4.2 Hierzu stellt der Kunde beim Auftragnehmer zunächst eine Anfrage mit einer möglichst genauen Beschreibung der von ihm gewünschten Designs. Diese Anfrage stellt eine Aufforderung zur Abgabe eines Angebots durch den Auftragnehmer dar. Der Auftragnehmer wird die in der Anfrage beschriebenen Vorstellungen des Kunden nach bestem Wissen und Gewissen auf Vollständigkeit, Eignung mit Ausnahme der rechtlichen Eignung, insbesondere hinsichtlich der Rechte von Dritten, Eindeutigkeit, Realisierbarkeit und Widerspruchsfreiheit prüfen und auf Grundlage der aus der Kundenanfrage hervorgehenden Wünsche ein Angebot erstellen. Erst durch die Annahme des Angebots durch den Kunden kommt ein Vertrag zwischen dem Auftragnehmer und dem Kunden zustande."
  },
  {
    "type": "clause",
    "text": "3.4.3 Voraussetzung für die Tätigkeit des Auftragnehmers ist, dass der Kunde sämtliche für die Umsetzung des Projekts erforderlichen Daten, zum Beispiel Farbdefinitionen, Logos, Markenangaben, Vorlagen, Stilvorgaben und Inhalte, dem Auftragnehmer vor Auftragsbeginn vollständig in geeigneter Form zur Verfügung stellt. Kommt der Kunde dieser Verpflichtung nicht nach, kann der Auftragnehmer dem Kunden den hierdurch entstehenden Zeitaufwand in Rechnung stellen."
  },
  {
    "type": "clause",
    "text": "3.4.4 Soweit nichts anderes vereinbart, steht dem Kunden, die einzelnen Designs betreffend, das Recht auf je zwei Korrekturschleifen zu. Nach der Durchführung dieser Korrekturschleifen werden Anpassungswünsche und Reklamationen, insbesondere hinsichtlich der künstlerischen Gestaltung, nicht mehr berücksichtigt. Wünscht der Kunde nach Durchführung der vereinbarten Korrekturschleifen weitere Änderungen, kann der Auftragnehmer dem Kunden diese gegen ein zusätzlich zu vereinbarendes Entgelt erstellen."
  },
  {
    "type": "clause",
    "text": "3.4.5 Sobald das vereinbarte Design fertiggestellt wurde, wird der Auftragnehmer den Kunden zur Abnahme des Werks auffordern. Die Designs werden dem Kunden in einem gängigen Dateiformat zugesandt."
  },
  {
    "type": "clause",
    "text": "3.4.6 Der Auftragnehmer räumt dem Kunden die für den jeweiligen Zweck erforderlichen Nutzungsrechte an den Designs ein. Vorbehaltlich abweichender Regelungen wird bei der Erstellung von Logos ein zeitlich, örtlich und inhaltlich unbeschränktes, ausschließliches Nutzungsrecht eingeräumt. Einzelne grafische Elemente der Logos dürfen jedoch für die Erstellung anderer Werke verwendet werden, solange hierdurch keine Verwechslungsgefahr zum erstellten Logo entsteht. Bei allen übrigen Designs wird vorbehaltlich abweichender Individualvereinbarungen ein einfaches Nutzungsrecht eingeräumt. Eine Übertragung der Nutzungsrechte durch den Kunden an Dritte bedarf einer individualvertraglichen Vereinbarung mit dem Auftragnehmer. Die innerhalb der Korrekturschleife präsentierten Entwürfe dürfen ohne ausdrückliche Einwilligung vom Auftragnehmer durch den Kunden weder im Original noch verändert genutzt, vervielfältigt oder an Dritte weitergegeben werden."
  },
  {
    "type": "clause",
    "text": "3.4.7 Die Nutzungsrechte gehen erst nach vollständiger Bezahlung der Vergütung auf den Kunden über."
  },
  {
    "type": "clause",
    "text": "3.4.8 Der Auftragnehmer schuldet keine Prüfung, ob ein Design, Logo, Name, Claim, Symbol, eine Farbgestaltung oder sonstige Gestaltung markenrechtlich, urheberrechtlich oder wettbewerbsrechtlich frei verwendbar ist. Eine solche Prüfung ist vom Kunden selbst oder durch entsprechend qualifizierte Dritte vorzunehmen."
  },
  {
    "type": "section",
    "text": "3.5 Social-Media-Betreuung und Content-Veröffentlichung"
  },
  {
    "type": "clause",
    "text": "3.5.1 Der Auftragnehmer bietet dem Kunden Dienstleistungen im Bereich Social Media an. Hierzu können insbesondere Strategie, Redaktionsplanung, Beitragserstellung, Bild- und Videobearbeitung, Texterstellung, Veröffentlichung, Community-nahe Unterstützung, Auswertung und Beratung gehören. Der konkrete Leistungsumfang ergibt sich aus der jeweiligen Individualvereinbarung."
  },
  {
    "type": "clause",
    "text": "3.5.2 Der Kunde ist verpflichtet, dem Auftragnehmer alle für die Leistungserbringung erforderlichen Zugänge, Rollen, Freigaben, Informationen, Bildmaterialien, Videomaterialien, Markenrichtlinien, rechtlichen Pflichtangaben und sonstigen Inhalte rechtzeitig zur Verfügung zu stellen."
  },
  {
    "type": "clause",
    "text": "3.5.3 Veröffentlichungen erfolgen nur nach Freigabe durch den Kunden, sofern nicht ausdrücklich eine Veröffentlichung nach Redaktionsplan, Rahmenfreigabe oder sonstiger Vorabfreigabe vereinbart wurde. Bei vereinbarter Rahmenfreigabe gilt der Auftragnehmer als berechtigt, Inhalte im vereinbarten Rahmen ohne erneute Einzelabstimmung zu veröffentlichen."
  },
  {
    "type": "clause",
    "text": "3.5.4 Der Kunde bleibt für die rechtliche Zulässigkeit der veröffentlichten Inhalte, Aussagen, Werbeversprechen, Preisangaben, Gewinnspiele, Bildrechte, Musikrechte, Persönlichkeitsrechte, Kennzeichnungen, Impressumsangaben und sonstigen Pflichtinformationen verantwortlich. Der Auftragnehmer schuldet keine rechtliche Prüfung."
  },
  {
    "type": "clause",
    "text": "3.5.5 Der Auftragnehmer schuldet keine bestimmte Reichweite, Interaktionsrate, Followerzahl, Leads, Verkäufe, Buchungen, Bewerbungen oder sonstigen wirtschaftlichen Erfolge, sofern dies nicht ausdrücklich zugesichert wurde."
  },
  {
    "type": "clause",
    "text": "3.5.6 Der Auftragnehmer haftet nicht für Einschränkungen, Sperrungen, Reichweitenverluste, Kontolöschungen, Ablehnungen, Shadowbans, Richtlinienänderungen, technische Störungen oder sonstige Maßnahmen von Plattformen wie Meta, Instagram, Facebook, TikTok, LinkedIn, YouTube, Google oder sonstigen Drittplattformen, soweit diese nicht vom Auftragnehmer schuldhaft verursacht wurden."
  },
  {
    "type": "clause",
    "text": "3.5.7 Änderungen an Redaktionsplänen, kurzfristige Veröffentlichungswünsche, zusätzliche Beiträge, zusätzliche Korrekturen, weitere Abstimmungsschleifen oder Änderungen nach Freigabe stellen Zusatzleistungen dar, sofern sie nicht ausdrücklich im vereinbarten Leistungsumfang enthalten sind."
  },
  {
    "type": "part",
    "text": "Teil 4 - Marketing"
  },
  {
    "type": "section",
    "text": "4.1 SEO-Marketing"
  },
  {
    "type": "clause",
    "text": "4.1.1 Der Auftragnehmer bietet dem Kunden Dienstleistungen im Bereich SEO-Marketing an. Im Rahmen der Leistungserbringung schuldet der Auftragnehmer ausschließlich die Durchführung von Maßnahmen, die nach eigener Erfahrung des Auftragnehmers das Suchmaschinen-Ranking positiv beeinflussen können oder vom Kunden ausdrücklich angeordnet werden. Hierbei handelt es sich um eine Dienstleistung im Sinne von §§ 611 ff. BGB. Ein bestimmtes Ergebnis, zum Beispiel ein bestimmtes Ranking in der Suchmaschinen-Trefferliste, eine bestimmte Besucherzahl, eine bestimmte Anzahl von Anfragen, Leads oder Verkäufen, wird im Rahmen der SEO-Dienstleistungen dagegen nur dann geschuldet, wenn dieses ausdrücklich zugesichert wurde."
  },
  {
    "type": "clause",
    "text": "4.1.2 Der Auftragnehmer haftet nicht für Änderungen von Suchmaschinenalgorithmen, Indexierungsentscheidungen, Ranking-Schwankungen, manuelle Maßnahmen von Suchmaschinenbetreibern, technische Störungen externer Dienste oder sonstige Umstände, die außerhalb des Einflussbereichs des Auftragnehmers liegen."
  },
  {
    "type": "clause",
    "text": "4.1.3 Local SEO, GEO-Optimierung, strukturierte Daten, Google-Unternehmensprofil-Optimierung, Content-Erstellung, Backlink-Aufbau, technische SEO-Analysen oder laufendes SEO-Monitoring sind nur geschuldet, soweit sie ausdrücklich vereinbart wurden."
  },
  {
    "type": "section",
    "text": "4.2 SEA-Kampagnen"
  },
  {
    "type": "clause",
    "text": "4.2.1 Der Auftragnehmer bietet dem Kunden Dienstleistungen im Bereich von SEA-Kampagnen an. Im Rahmen der Leistungserbringung schuldet der Auftragnehmer ausschließlich die Unterbreitung von Vorschlägen bezüglich werbewirksamer Keywords und nach Freigabe des Kunden die Durchführung der Maßnahme, insbesondere die Schaltung von Werbeanzeigen. Hierbei handelt es sich um Dienstleistungen im Sinne von §§ 611 ff. BGB. Ein bestimmtes Ergebnis, zum Beispiel Verkaufszahlen, Leads, Umsatz, Reichweite oder Klickpreise, wird im Rahmen von SEA-Dienstleistungen nicht geschuldet, es sei denn, dies wurde ausdrücklich zugesichert."
  },
  {
    "type": "clause",
    "text": "4.2.2 Den Auftragnehmer trifft nicht die Verpflichtung, die Rechtmäßigkeit von Keywords zu überprüfen. Der Auftragnehmer unterbreitet dem Kunden Vorschläge bezüglich der Buchung von Keywords. Die rechtliche Prüfung, insbesondere auf Markenrechte Dritter, Wettbewerbsrecht und sonstige rechtliche Vorgaben, sowie die Freigabe der Keywords obliegt dem Kunden vor Durchführung der Kampagne."
  },
  {
    "type": "clause",
    "text": "4.2.3 Das für die vorliegend beschriebenen Leistungen vereinbarte Honorar beinhaltet nicht die Kosten für die Schaltung kostenpflichtiger Werbeanzeigen. Vorbehaltlich abweichender Vereinbarungen sind diese Kosten vom Kunden zu tragen."
  },
  {
    "type": "clause",
    "text": "4.2.4 Der Kunde ist dafür verantwortlich, dass Werbekonten, Zahlungsmittel, Abrechnungsdaten und Plattformzugänge ordnungsgemäß eingerichtet und funktionsfähig sind, sofern dies nicht ausdrücklich vom Auftragnehmer übernommen wurde."
  },
  {
    "type": "section",
    "text": "4.3 Schaltung von Werbeanzeigen"
  },
  {
    "type": "clause",
    "text": "4.3.1 Der Auftragnehmer unterstützt den Kunden bei Anzeigenschaltungen in Social-Media-Portalen, Suchmaschinen und sonstigen Medien."
  },
  {
    "type": "clause",
    "text": "4.3.2 Der Auftragnehmer berät den Kunden dahingehend, wie dieser seine Anzeigen so ausgestaltet, dass diese eine möglichst hohe Sichtbarkeit aufweisen. Bestimmte Ergebnisse, zum Beispiel Verkaufszahlen, Leads, Bewerbungen, Reichweiten, Klickpreise oder Umsätze, sind hierbei nicht geschuldet."
  },
  {
    "type": "clause",
    "text": "4.3.3 Der Auftragnehmer unterstützt den Kunden auch bei der Konzeptionierung der Texte und Bilder für die Anzeigen. Die Auswahl der Inhalte für die Anzeigen, insbesondere Bilder, Texte, Videos, Impressen, Pflichtangaben, Preise, Aussagen, Zielgruppen und Angebote, obliegt jedoch allein dem Kunden. Der Auftragnehmer wird diese Inhalte, aber auch die Anzeigen insgesamt, nicht auf ihre inhaltliche oder rechtliche Richtigkeit prüfen. Insoweit wird ausdrücklich darauf hingewiesen, dass der Auftragnehmer nicht berechtigt ist, den Kunden rechtlich zu beraten. Sollte der Auftragnehmer in Einzelfällen dennoch feststellen, dass die vom Kunden bereitgestellten Inhalte und/oder die Anzeigen offensichtlich gegen geltendes Recht verstoßen könnten, kann der Auftragnehmer das Einstellen solcher Inhalte bzw. Erstellen der Anzeigen verweigern."
  },
  {
    "type": "clause",
    "text": "4.3.4 Alle Inhalte müssen vom Kunden abgenommen werden und werden hiernach vom Auftragnehmer in die jeweiligen Werbekanäle hochgeladen, wobei der Auftragnehmer nur das technische Hochladen der Inhalte schuldet und auch nur hierfür verantwortlich ist. Die Regelungen unter „Haftung/ Freistellung“ bleiben unberührt."
  },
  {
    "type": "clause",
    "text": "4.3.5 Das für die vorliegend beschriebenen Leistungen vereinbarte Honorar beinhaltet nicht die Kosten für die Schaltung kostenpflichtiger Werbeanzeigen. Vorbehaltlich abweichender Vereinbarungen sind diese Kosten vom Kunden zu tragen."
  },
  {
    "type": "clause",
    "text": "4.3.6 Der Auftragnehmer haftet nicht für die Ablehnung, Einschränkung, Sperrung, Verteuerung oder sonstige Beeinträchtigung von Anzeigen durch Plattformbetreiber, sofern diese nicht schuldhaft durch den Auftragnehmer verursacht wurde."
  },
  {
    "type": "part",
    "text": "Teil 5 - Sonstige Bestimmungen"
  },
  {
    "type": "section",
    "text": "5.1 Preise und Vergütung"
  },
  {
    "type": "clause",
    "text": "5.1.1 Die Vergütung für die Leistungen des Auftragnehmers ist Gegenstand einer individualvertraglichen Vereinbarung zwischen den Parteien und richtet sich grundsätzlich nach dem Angebot."
  },
  {
    "type": "clause",
    "text": "5.1.2 Sofern nicht anders vereinbart, sind Rechnungen innerhalb von 14 Kalendertagen nach Rechnungsstellung ohne Abzug fällig."
  },
  {
    "type": "clause",
    "text": "5.1.3 Der Auftragnehmer ist berechtigt, bei Projektleistungen eine angemessene Anzahlung zu verlangen. Sofern nicht anders vereinbart, beträgt die Anzahlung bei Webdesign-, Design-, Content-oder sonstigen Projektleistungen 50 Prozent der vereinbarten Vergütung. Der Projektstart erfolgt erst nach Eingang der vereinbarten Anzahlung und vollständiger Bereitstellung der erforderlichen Mitwirkungshandlungen durch den Kunden."
  },
  {
    "type": "clause",
    "text": "5.1.4 Die Restvergütung wird, sofern nicht anders vereinbart, mit Fertigstellung, Abnahme, Teilabnahme oder Übergabe des vereinbarten Leistungsstands fällig."
  },
  {
    "type": "clause",
    "text": "5.1.5 Bei Zahlungsverzug ist der Auftragnehmer berechtigt, die weitere Leistungserbringung bis zum Ausgleich offener Forderungen auszusetzen. Hierdurch entstehende Verzögerungen gehen nicht zu Lasten des Auftragnehmers."
  },
  {
    "type": "clause",
    "text": "5.1.6 Der Auftragnehmer ist berechtigt, Teilrechnungen nach Projektfortschritt, abgeschlossenen Leistungsabschnitten oder monatlich bei laufenden Leistungen zu stellen, sofern dies vereinbart wurde oder sich aus der Art der Leistung ergibt."
  },
  {
    "type": "clause",
    "text": "5.1.7 Alle Preise verstehen sich, sofern nicht anders angegeben, zuzüglich der jeweils geltenden gesetzlichen Umsatzsteuer, sofern diese anfällt."
  },
  {
    "type": "section",
    "text": "5.2 Laufende Leistungen, Vertragslaufzeit und Kündigung"
  },
  {
    "type": "clause",
    "text": "5.2.1 Laufende Leistungen, insbesondere Wartung, Betreuung, Hosting, SEO, Social Media, Anzeigenbetreuung, Content-Betreuung oder sonstige monatliche Dienstleistungen, werden monatlich abgerechnet, sofern nichts anderes vereinbart ist."
  },
  {
    "type": "clause",
    "text": "5.2.2 Sofern keine Mindestlaufzeit vereinbart wurde, können laufende Leistungen mit einer Frist von 14 Tagen zum Monatsende in Textform gekündigt werden."
  },
  {
    "type": "clause",
    "text": "5.2.3 Wurde eine Mindestlaufzeit vereinbart, ist eine ordentliche Kündigung erstmals zum Ablauf der Mindestlaufzeit möglich. Nach Ablauf der Mindestlaufzeit verlängert sich der Vertrag jeweils um einen weiteren Monat, sofern er nicht mit einer Frist von 14 Tagen zum Monatsende gekündigt wird, soweit individualvertraglich nichts anderes vereinbart wurde."
  },
  {
    "type": "clause",
    "text": "5.2.4 Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt. Ein wichtiger Grund liegt insbesondere vor, wenn der Kunde trotz Mahnung mit Zahlungen in Verzug bleibt, gegen wesentliche Vertragspflichten verstößt, rechtswidrige Inhalte bereitstellt oder die weitere Zusammenarbeit für den Auftragnehmer unzumutbar ist."
  },
  {
    "type": "clause",
    "text": "5.2.5 Bereits erbrachte Leistungen sind im Fall einer Kündigung zu vergüten. Dies gilt auch für begonnene, aber aufgrund der Kündigung nicht vollständig abgeschlossene Leistungen, soweit diese verwertbar oder auftragsbezogen erbracht wurden."
  },
  {
    "type": "section",
    "text": "5.3 Abnahme"
  },
  {
    "type": "clause",
    "text": "5.3.1 Soweit eine Werkleistung vereinbart wurde, wird der Auftragnehmer den Kunden zur Abnahme auffordern. Die Abnahmefrist im Sinne des § 640 Abs. 2 S. 1 BGB wird auf 2 Wochen ab Abnahmeaufforderung festgelegt, sofern im Einzelfall aufgrund besonderer Umstände nicht eine abweichende Abnahmefrist erforderlich ist, die der Auftragnehmer dem Kunden in diesem Fall gesondert mitteilen wird. Sofern sich der Kunde innerhalb dieser Frist nicht äußert oder die Abnahme nicht wegen eines wesentlichen Mangels verweigert, gilt das Werk als abgenommen."
  },
  {
    "type": "clause",
    "text": "5.3.2 Eine Nutzung, Veröffentlichung, Liveschaltung, Weitergabe an Dritte oder produktive Verwendung des Arbeitsergebnisses durch den Kunden gilt ebenfalls als Abnahme, sofern der Kunde nicht ausdrücklich und nachvollziehbar wegen eines wesentlichen Mangels widerspricht."
  },
  {
    "type": "clause",
    "text": "5.3.3 Unwesentliche Mängel berechtigen nicht zur Verweigerung der Abnahme. Offene Restarbeiten oder unwesentliche Korrekturen können nach Abnahme im Rahmen der vereinbarten Korrekturschleifen oder Gewährleistung bearbeitet werden."
  },
  {
    "type": "section",
    "text": "5.4 Mängelgewährleistung"
  },
  {
    "type": "clause",
    "text": "5.4.1 Ein unwesentlicher Mangel begründet keine Mängelansprüche. Die Wahl der Art der Nacherfüllung liegt beim Auftragnehmer."
  },
  {
    "type": "clause",
    "text": "5.4.2 Die Verjährungsfrist für Mängel und sonstige Ansprüche beträgt ein Jahr. Diese Verjährungsverkürzung gilt nicht für Ansprüche, die aus Vorsatz, grober Fahrlässigkeit oder aus der Verletzung von Leib, Leben oder Gesundheit durch den Auftragnehmer resultieren."
  },
  {
    "type": "clause",
    "text": "5.4.3 Die Verjährung beginnt nicht erneut, sofern im Rahmen der Mängelhaftung eine Nacherfüllung erfolgt. Im Übrigen bleibt die gesetzliche Mängelgewährleistung unberührt."
  },
  {
    "type": "clause",
    "text": "5.4.4 Mängelansprüche bestehen nicht für Fehler, die durch nachträgliche Änderungen des Kunden, Eingriffe Dritter, veraltete Software, fehlende Updates, externe Plattformen, Drittanbieter-Tools, unsachgemäße Nutzung oder nicht vom Auftragnehmer zu vertretende technische Umstände verursacht wurden."
  },
  {
    "type": "section",
    "text": "5.5 Rechteeinräumung, Eigenwerbung und Erwähnungsrecht"
  },
  {
    "type": "clause",
    "text": "5.5.1 Der Auftragnehmer räumt dem Kunden nach vollständiger Bezahlung des Auftrags durch den Kunden an den entsprechenden Arbeitsergebnissen grundsätzlich ein einfaches, nicht übertragbares Nutzungsrecht ein. Weitergehende Rechte können individualvertraglich vereinbart werden."
  },
  {
    "type": "clause",
    "text": "5.5.2 Sofern nichts Abweichendes vereinbart wurde, erteilt der Kunde dem Auftragnehmer ausdrücklich die Erlaubnis, das Projekt zum Zwecke der Eigenwerbung, insbesondere als Referenz oder Portfolioeintrag, in angemessener Weise öffentlich darzustellen. Insbesondere ist der Auftragnehmer dazu berechtigt, mit der Geschäftsbeziehung zu dem Kunden zu werben und auf allen erstellten Werbemitteln und bei allen Werbemaßnahmen auf sich als Urheber oder Dienstleister hinzuweisen, ohne dass dem Kunden dafür ein Entgeltanspruch zusteht."
  },
  {
    "type": "clause",
    "text": "5.5.3 Ferner ist der Auftragnehmer berechtigt, den eigenen Namen mit Verlinkung in angemessener Weise im Footer und/oder im Impressum der vom Auftragnehmer erstellten Webseite(n) zu platzieren, ohne dass dem Kunden hierfür ein Entgeltanspruch zusteht. Eine Entfernung oder ein Verzicht auf diese Nennung kann individualvertraglich vereinbart werden."
  },
  {
    "type": "clause",
    "text": "5.5.4 Interne Arbeitsdateien, Vorlagen, Templates, Automationen, Skripte, Quellcodes, Konzepte, Projektstrukturen, Prozesse, Checklisten, Prompts, Systeme und sonstige interne Arbeitsmittel des Auftragnehmers bleiben Eigentum des Auftragnehmers, sofern nicht ausdrücklich etwas anderes vereinbart wurde."
  },
  {
    "type": "clause",
    "text": "5.5.5 Der Kunde erhält nur die ausdrücklich vereinbarten finalen Arbeitsergebnisse. Ein Anspruch auf Herausgabe offener Dateien, editierbarer Dateien, Rohdaten, Zwischenstände, Quellcodes, Projektdateien, Automationen, Templates oder sonstiger interner Arbeitsmittel besteht nicht, sofern dies nicht ausdrücklich vereinbart wurde."
  },
  {
    "type": "section",
    "text": "5.6 Vertraulichkeit"
  },
  {
    "type": "clause",
    "text": "5.6.1 Der Auftragnehmer wird alle ihm zur Kenntnis gelangenden Geschäftsvorgänge, insbesondere, aber nicht ausschließlich, Druckunterlagen, Layouts, Storyboards, Zahlenmaterial, Zeichnungen, Tonbänder, Bilder, Videos, DVDs, CD-ROMs, Speicherkarten, Passwörter, interaktive Produkte und solche anderen Unterlagen, welche Filme und/oder Hörspiele und/oder sonstige urheberrechtlich geschützte Materialien des Kunden oder mit ihm verbundener Unternehmen enthalten, streng vertraulich behandeln."
  },
  {
    "type": "clause",
    "text": "5.6.2 Der Auftragnehmer verpflichtet sich, die Geheimhaltungspflicht sämtlichen Angestellten und/oder Dritten, beispielsweise Lieferanten, Grafikern, Programmierern, Filmproduzenten, Tonstudios, Subunternehmern oder sonstigen Erfüllungsgehilfen, die Zugang zu den vorbezeichneten Geschäftsvorgängen haben, aufzuerlegen."
  },
  {
    "type": "clause",
    "text": "5.6.3 Die Geheimhaltungspflicht gilt zeitlich unbegrenzt über die Dauer dieses Vertrages hinaus."
  },
  {
    "type": "clause",
    "text": "5.6.4 Von der Geheimhaltungspflicht ausgenommen sind Informationen, die bereits öffentlich bekannt sind, ohne Verstoß gegen diese Vereinbarung öffentlich bekannt werden, dem Auftragnehmer bereits vor Offenlegung bekannt waren oder aufgrund gesetzlicher, behördlicher oder gerichtlicher Verpflichtung offengelegt werden müssen."
  },
  {
    "type": "section",
    "text": "5.7 Datenschutz"
  },
  {
    "type": "clause",
    "text": "5.7.1 Der Kunde bleibt für die datenschutzrechtliche Zulässigkeit der von ihm gewünschten Funktionen, Tools, Formulare, Trackingmaßnahmen, Newsletterfunktionen, Analysemaßnahmen, Werbemaßnahmen, Cookie-Setzungen und sonstigen Verarbeitungsvorgänge verantwortlich, sofern er datenschutzrechtlich Verantwortlicher ist."
  },
  {
    "type": "clause",
    "text": "5.7.2 Der Auftragnehmer schuldet keine rechtliche Prüfung der datenschutzrechtlichen Zulässigkeit der vom Kunden gewünschten Maßnahmen. Dies gilt insbesondere für den Einsatz von Google Analytics, Meta Pixel, TikTok Pixel, LinkedIn Insight Tag, Newsletter-Tools, CRM-Systemen, Karten-Tools, eingebetteten Medien, Kontaktformularen, Bewerbungsformularen, Tracking-Skripten und sonstigen Drittanbieter-Diensten."
  },
  {
    "type": "clause",
    "text": "5.7.3 Sofern der Auftragnehmer personenbezogene Daten im Auftrag des Kunden verarbeitet, schließen die Parteien vor Beginn der Verarbeitung einen Vertrag zur Auftragsverarbeitung, soweit dies gesetzlich erforderlich ist."
  },
  {
    "type": "clause",
    "text": "5.7.4 Der Kunde ist verpflichtet, dem Auftragnehmer nur solche personenbezogenen Daten bereitzustellen, deren Verarbeitung für die beauftragte Leistung erforderlich und rechtlich zulässig ist."
  },
  {
    "type": "clause",
    "text": "5.7.5 Der Auftragnehmer ist berechtigt, geeignete technische und organisatorische Maßnahmen zu treffen, um die Sicherheit der Verarbeitung zu unterstützen. Ein bestimmtes Sicherheitsniveau ist nur geschuldet, soweit dies gesetzlich erforderlich oder individualvertraglich vereinbart wurde."
  },
  {
    "type": "section",
    "text": "5.8 Kommunikation, Erreichbarkeit und Reaktionszeiten"
  },
  {
    "type": "clause",
    "text": "5.8.1 Die Kommunikation zwischen den Parteien erfolgt, sofern nicht anders vereinbart, per E-Mail, Telefon, Videokonferenz, Projektmanagementsystem oder sonstigen vereinbarten Kommunikationswegen."
  },
  {
    "type": "clause",
    "text": "5.8.2 Der Auftragnehmer schuldet keine ständige Erreichbarkeit. Feste Reaktionszeiten, Bereitschaftsdienste, Notfall-Support, Abend-, Wochenend- oder Feiertagsarbeit sind nur geschuldet, wenn dies ausdrücklich vereinbart wurde."
  },
  {
    "type": "clause",
    "text": "5.8.3 Verzögerungen, die dadurch entstehen, dass der Kunde auf Rückfragen, Freigaben oder Abstimmungen nicht rechtzeitig reagiert, gehen nicht zu Lasten des Auftragnehmers."
  },
  {
    "type": "section",
    "text": "5.9 Haftung/Freistellung"
  },
  {
    "type": "clause",
    "text": "5.9.1 Der Auftragnehmer haftet aus jedem Rechtsgrund uneingeschränkt bei Vorsatz oder grober Fahrlässigkeit, bei vorsätzlicher oder fahrlässiger Verletzung des Lebens, des Körpers oder der Gesundheit, aufgrund eines Garantieversprechens, soweit diesbezüglich nichts anderes geregelt ist, oder aufgrund zwingender Haftung, wie etwa nach dem Produkthaftungsgesetz."
  },
  {
    "type": "clause",
    "text": "5.9.2 Verletzt der Auftragnehmer fahrlässig eine wesentliche Vertragspflicht, ist die Haftung auf den vertragstypischen, vorhersehbaren Schaden begrenzt, sofern nicht gemäß vorstehendem Satz unbeschränkt gehaftet wird. Wesentliche Vertragspflichten sind Pflichten, die der Vertrag dem Auftragnehmer nach seinem Inhalt zur Erreichung des Vertragszwecks auferlegt, deren Erfüllung die ordnungsgemäße Durchführung des Vertrags überhaupt erst ermöglicht und auf deren Einhaltung der Kunde regelmäßig vertrauen darf."
  },
  {
    "type": "clause",
    "text": "5.9.3 Im Übrigen ist eine Haftung des Auftragnehmers ausgeschlossen. Vorstehende Haftungsregelungen gelten auch im Hinblick auf die Haftung des Auftragnehmers für seine Erfüllungsgehilfen und gesetzlichen Vertreter."
  },
  {
    "type": "clause",
    "text": "5.9.4 Der Auftragnehmer haftet nicht für Inhalte, Materialien, Weisungen, Vorgaben, Freigaben oder Daten, die vom Kunden bereitgestellt oder freigegeben wurden, sofern der Auftragnehmer den daraus entstehenden Schaden nicht schuldhaft verursacht hat."
  },
  {
    "type": "clause",
    "text": "5.9.5 Der Auftragnehmer haftet nicht für entgangenen Gewinn, ausgebliebene Einsparungen, mittelbare Schäden, Folgeschäden, Reputationsschäden, Umsatzverluste, Datenverluste aufgrund unzureichender Sicherung durch den Kunden oder sonstige wirtschaftliche Nachteile, soweit gesetzlich zulässig."
  },
  {
    "type": "clause",
    "text": "5.9.6 Der Kunde stellt den Auftragnehmer von jeglichen Ansprüchen Dritter frei, die gegen den Auftragnehmer aufgrund von Verstößen des Kunden gegen diese AGB, gegen geltendes Recht, gegen Rechte Dritter oder aufgrund vom Kunden bereitgestellter, freigegebener oder angewiesener Inhalte geltend gemacht werden. Dies umfasst auch angemessene Kosten der Rechtsverteidigung."
  },
  {
    "type": "section",
    "text": "5.10 Schlussbestimmungen"
  },
  {
    "type": "clause",
    "text": "5.10.1 Die zwischen dem Auftragnehmer und den Kunden geschlossenen Verträge unterliegen dem materiellen Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts."
  },
  {
    "type": "clause",
    "text": "5.10.2 Sofern der Kunde Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist oder keinen allgemeinen Gerichtsstand in Deutschland hat, vereinbaren die Parteien den Sitz des Auftragnehmers als Gerichtsstand für sämtliche Streitigkeiten aus diesem Vertragsverhältnis. Ausschließliche Gerichtsstände bleiben hiervon unberührt."
  },
  {
    "type": "clause",
    "text": "5.10.3 Der Auftragnehmer ist berechtigt, diese AGB aus sachlich gerechtfertigten Gründen, zum Beispiel Änderungen in der Rechtsprechung, Gesetzeslage, Marktgegebenheiten oder der Geschäfts- oder Unternehmensstrategie, und unter Einhaltung einer angemessenen Frist zu ändern. Bestandskunden werden hierüber spätestens zwei Wochen vor Inkrafttreten der Änderung per E-Mail benachrichtigt. Sofern der Bestandskunde nicht innerhalb der in der Änderungsmitteilung gesetzten Frist widerspricht, gilt seine Zustimmung zur Änderung als erteilt. Widerspricht er, treten die Änderungen nicht in Kraft. Der Auftragnehmer ist in diesem Fall berechtigt, den Vertrag zum Zeitpunkt des Inkrafttretens der Änderung außerordentlich zu kündigen. Die Benachrichtigung über die beabsichtigte Änderung dieser AGB wird auf die Frist und die Folgen des Widerspruchs oder seines Ausbleibens hinweisen."
  },
  {
    "type": "clause",
    "text": "5.10.4 Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. Anstelle der unwirksamen Bestimmung gelten die gesetzlichen Vorschriften."
  }
];

function ClauseText({ text }: { text: string }) {
  const match = text.match(/^(\d+(?:\.\d+){2})\s+(.*)$/);

  if (!match) return <>{text}</>;

  return (
    <>
      <strong>{match[1]}</strong> {match[2]}
    </>
  );
}

export default function AgbPage() {
  return (
    <>
      <PageHero
        eyebrow="Rechtliches"
        title="AGB"
        subtitle="Allgemeine Geschäftsbedingungen für Agenturleistungen, Webdesign, Social Media und Marketing."
      />

      <Section spacing="tight" aria-label="Allgemeine Geschäftsbedingungen">
        <Container>
          <div className="legal mx-auto max-w-4xl">
            {agbBlocks.map((block, index) => {
              if (block.type === "part") {
                return <h2 key={index}>{block.text}</h2>;
              }

              if (block.type === "section") {
                return <h3 key={index}>{block.text}</h3>;
              }

              if (block.type === "clause") {
                return (
                  <p key={index}>
                    <ClauseText text={block.text} />
                  </p>
                );
              }

              return <p key={index}>{block.text}</p>;
            })}
          </div>
        </Container>
      </Section>
    </>
  );
}
