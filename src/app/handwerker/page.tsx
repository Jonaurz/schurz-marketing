import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Accordion } from "@/components/ui/accordion";
import { SectionHeading } from "@/components/ui/section-heading";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { ProofSection } from "@/components/sections/references-section";
import { FaqJsonLd } from "@/components/seo/faq-jsonld";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";
import { Check, ArrowRight, MapPin } from "@/components/ui/icons";
import { site } from "@/lib/site";
import { serializeJsonLd } from "@/lib/json-ld";
import { localCities } from "@/lib/local-seo";
import { trades } from "@/lib/trades";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Webdesign für Handwerker",
  description:
    "Webdesign für Handwerker: klare Leistungen, Projektbilder und einfache Kontaktwege. Persönlich aus Neustadt in Sachsen, deutschlandweit.",
  alternates: { canonical: "/handwerker" },
  openGraph: {
    title: "Webdesign für Handwerker · Schurz Marketing",
    description:
      "Webseiten für Handwerksbetriebe, klar aufgebaut, gut auffindbar und auf Anfragen ausgelegt. Deutschlandweit mit persönlichem Ansprechpartner.",
    url: "/handwerker",
    images: [
      {
        url: "/images/schurz-marketing-webdesign.png",
        width: 1448,
        height: 1086,
        alt: "Webseite für einen Handwerksbetrieb auf Laptop und Smartphone",
      },
    ],
  },
};

const leistungen = [
  {
    title: "Website-Konzept und Struktur",
    text: "Leistungen, Zielgruppen, Einsatzgebiet und Kontaktwege werden geordnet, bevor Design und Technik umgesetzt werden.",
  },
  {
    title: "Modernes, mobiles Webdesign",
    text: "Der Auftritt wirkt auf Smartphone, Tablet und Desktop professionell und macht wichtige Informationen schnell erreichbar.",
  },
  {
    title: "Texte und klare Leistungsseiten",
    text: "Fachliche Leistungen werden so beschrieben, dass Kunden sie verstehen und Suchmaschinen die Themen sauber einordnen können.",
  },
  {
    title: "Lokale und überregionale SEO",
    text: "Seitentitel, Metadaten, interne Links und Einsatzgebiete schaffen eine saubere Grundlage für passende Suchanfragen.",
  },
  {
    title: "Kontakt und Angebotsanfragen",
    text: "Telefon, Formular und optionale Rückrufwege werden so eingebunden, dass Kunden ohne Umwege anfragen können.",
  },
  {
    title: "Vertrauenselemente",
    text: "Echte Projektbilder, Arbeitsweise, Qualifikationen und vorhandene Referenzen werden glaubwürdig in den Aufbau integriert.",
  },
  {
    title: "Social Media als Ergänzung",
    text: "Auf Wunsch werden Website und Social-Media-Auftritt aufeinander abgestimmt, damit Projekte mehrfach sichtbar werden.",
  },
  {
    title: "Pflege und Weiterentwicklung",
    text: "Neue Leistungen, Projekte und Einsatzorte können ergänzt werden. Die technische Pflege kann dauerhaft übernommen werden.",
  },
];

const typicalContents = [
  "Leistungen und Spezialisierungen",
  "Einsatzgebiet und erreichbare Orte",
  "Projektbeispiele mit echten Bildern",
  "Telefonnummer und Kontaktformular",
  "Ablauf vom Erstkontakt bis zum Auftrag",
  "Antworten auf häufige Kundenfragen",
  "Team, Qualifikationen und Arbeitsweise",
  "Google-Unternehmensprofil und lokale Signale",
];

const benefits = [
  "Passende Anfragen für Dacharbeiten, Pflasterarbeiten, Zaunbau, Gartenbau, Elektro- oder Malerarbeiten.",
  "Besser eingeordnet werden, wenn Kunden nach einem konkreten Gewerk und einem Ort oder Einsatzgebiet suchen.",
  "Projektbilder und Leistungen so zeigen, dass Interessenten schneller Vertrauen fassen.",
  "Kontaktaufnahme per Telefon, Formular oder WhatsApp so einfach wie möglich machen.",
];

const relatedIndustryLinks = [
  {
    href: "/handwerker/bauunternehmen",
    title: "Webdesign für Bauunternehmen",
    text: "Leistungsbereiche, Referenzprojekte und größere Projektanfragen seriös darstellen.",
  },
  {
    href: "/webdesign-reinigungsfirmen",
    title: "Webdesign für Reinigungsfirmen",
    text: "Leistungsarten, Einsatzgebiete und schnelle Angebotsanfragen verbinden.",
  },
  {
    href: "/webdesign-dienstleister",
    title: "Webdesign für Dienstleister",
    text: "Positionierung, Expertise und klare Angebotsstrukturen für beratende Leistungen.",
  },
];

const steps = [
  {
    no: "1",
    title: "Erstgespräch",
    text: "Ich kläre mit Ihnen Gewerk, Einsatzgebiet und welche Anfragen die Website bringen soll. Kostenlos und ohne Fachjargon.",
  },
  {
    no: "2",
    title: "Struktur planen",
    text: "Aus Ihren Leistungen, Projekten und Orten entsteht eine klare Seitenstruktur mit den richtigen Suchbegriffen.",
  },
  {
    no: "3",
    title: "Umsetzen",
    text: "Design, Technik und Texte entstehen aus einer Hand und werden auf allen Geräten sauber getestet.",
  },
  {
    no: "4",
    title: "Online und Pflege",
    text: "Nach Freigabe geht die Seite live. Auf Wunsch übernehme ich Pflege, lokale SEO und das Google-Profil.",
  },
];

const faqs = [
  {
    q: "Bauen Sie Webseiten speziell für Handwerker?",
    a: "Ja. Die Seiten sind so aufgebaut, dass Kunden Leistungen, Projekte, Einsatzgebiet und Kontaktwege schnell verstehen. Inhalte und Anfrageformulare werden an das jeweilige Gewerk angepasst.",
  },
  {
    q: "Kann ich die Website später selbst pflegen?",
    a: "Ja. Auf Wunsch erhalten Sie eine pflegbare Lösung und eine Einweisung. Alternativ übernimmt Schurz Marketing Änderungen, Updates und technische Pflege.",
  },
  {
    q: "Was kostet eine Website für meinen Betrieb?",
    a: "Das hängt vom Umfang ab. Den genauen Rahmen kläre ich transparent im kostenlosen Erstgespräch, ohne Verpflichtung.",
  },
  {
    q: "Kümmern Sie sich auch um Google und die lokale Sichtbarkeit?",
    a: "Ja. Eine saubere SEO-Grundlage gehört zur Umsetzung. Dazu zählen klare Leistungsseiten, Metadaten, interne Links und auf Wunsch die Einbindung oder Optimierung des Google-Unternehmensprofils.",
  },
  {
    q: "Ich habe wenig Zeit. Wie aufwendig ist das für mich?",
    a: "So wenig wie möglich. Von Ihnen kommen Infos, Bilder und Freigaben. Aufbau, Technik und Texte übernehme ich.",
  },
  {
    q: "Können Sie eine bestehende Handwerker-Website überarbeiten?",
    a: "Ja. Zuerst wird geprüft, welche Inhalte und technischen Grundlagen weiterverwendet werden können. Danach folgt entweder ein gezielter Relaunch oder ein sauberer Neuaufbau.",
  },
  {
    q: "Arbeiten Sie deutschlandweit?",
    a: "Ja. Schurz Marketing sitzt in Neustadt in Sachsen und arbeitet per Telefon, E-Mail, Video-Call und digitaler Abstimmung mit Handwerksbetrieben in ganz Deutschland.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${site.url}/handwerker#service`,
  name: "Webdesign für Handwerker",
  serviceType: "Webdesign für Handwerksbetriebe",
  provider: {
    "@type": "ProfessionalService",
    "@id": `${site.url}/#organization`,
    name: site.name,
    url: site.url,
    email: site.contact.email,
    telephone: site.contact.phone,
  },
  areaServed: { "@type": "Country", name: "Deutschland" },
  url: `${site.url}/handwerker`,
  description:
    "Webdesign für Handwerksbetriebe in Deutschland, mit klaren Leistungen, Projektbildern, SEO-Grundlage und einfachen Kontaktwegen.",
};

export default function HandwerkerPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Start", path: "/" },
          { name: "Webdesign für Handwerker", path: "/handwerker" },
        ]}
      />
      <FaqJsonLd items={faqs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(serviceJsonLd) }}
      />

      <PageHero
        title="Webdesign für Handwerker, das Vertrauen schafft."
        subtitle="Klare Leistungen, echte Projektbilder, gute mobile Bedienung und einfache Kontaktwege. Persönlich aus Neustadt in Sachsen und deutschlandweit umgesetzt."
      >
        <Button href="/kontakt" size="lg" withArrow>
          Erstgespräch anfragen
        </Button>
        <Button href="/webdesign" size="lg" variant="secondary">
          Webdesign-Leistung ansehen
        </Button>
      </PageHero>

      {/* Problem */}
      <Section aria-label="Ausgangslage">
        <Container>
          <div className="max-w-3xl">
            <SectionHeading title="Was passiert, wenn die Empfehlungen weniger werden?" />
            <div className="mt-8 space-y-5 leading-relaxed text-ink/75">
              <p className="text-pretty text-lg text-ink/90">
                Viele Handwerksbetriebe sind über Empfehlungen gut ausgelastet und haben
                online kaum etwas. Das funktioniert, solange die Mundpropaganda läuft.
                Sobald aber ein neuer Bereich wachsen soll oder Aufträge ausbleiben,
                fehlt der Ort, an dem neue Kunden sehen, was Sie können.
              </p>
              <p className="text-pretty">
                Wer heute einen Betrieb sucht, schaut zuerst online und vergleicht. Ist
                dort nichts oder nur eine veraltete Seite zu finden, landet die Anfrage
                beim nächsten, der sauber auftritt.
              </p>
              <p className="text-pretty">
                Eine gute Website muss dafür nicht kompliziert sein. Sie muss erklären,
                was Sie machen, Vertrauen schaffen und es leicht machen, Sie zu
                erreichen. Leistungen, Projekte, Einsatzgebiet und Kontakt gehören auf
                den ersten Blick verständlich dargestellt.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section aria-label="Typische Inhalte einer Handwerker-Website" className="border-t border-ink/10">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                size="compact"
                title="Was auf einer guten Handwerker-Website nicht fehlen sollte."
                intro="Der genaue Aufbau hängt vom Gewerk ab. Diese Inhalte sorgen meist dafür, dass Kunden Angebot und Betrieb schnell einschätzen können."
              />
            </div>
            <div className="lg:col-span-7">
              <ul className="grid gap-4 sm:grid-cols-2">
                {typicalContents.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-ink/80">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Lösung: Leistungen */}
      <Section aria-label="Leistungen für Handwerker" className="border-t border-ink/10">
        <Container>
          <SectionHeading
            title="Alles für den Auftritt, in einer Hand."
            intro="Jede Leistung lässt sich einzeln oder kombiniert nutzen. Was sinnvoll ist, hängt von Ihrem Betrieb und Ihren Zielen ab."
          />
          <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {leistungen.map((item, i) => (
              <Reveal key={item.title} delay={(i % 2) * 0.05}>
                <article className="border-t-2 border-ink pt-5">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 max-w-[52ch] text-sm leading-relaxed text-ink/70">
                    {item.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Beweis: Referenzen + Kundenstimmen */}
      <ProofSection />

      {/* Gewerke (für wen) */}
      <Section aria-label="Gewerke" className="border-t border-ink/10">
        <Container>
          <SectionHeading
            title="Eigene Seiten für Ihr Gewerk."
            intro="Gerade dort, wo Projektbilder, Leistungen und das Einsatzgebiet zusammenspielen, bringt eine klare Website schnell mehr Anfragen. Für diese Gewerke gibt es eigene Seiten:"
          />
          <div className="mt-12 grid gap-px overflow-hidden border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
            {trades.map((trade) => (
              <Link
                key={trade.slug}
                href={`/handwerker/${trade.slug}`}
                className="group bg-paper p-6 transition-colors hover:bg-white sm:p-7"
              >
                <h3 className="flex items-center justify-between gap-2 text-base font-semibold">
                  {trade.name}
                  <ArrowRight className="h-4 w-4 shrink-0 text-accent transition-transform duration-300 ease-out group-hover:translate-x-1" />
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{trade.cardText}</p>
              </Link>
            ))}
          </div>
          <p className="mt-8 max-w-[70ch] text-sm leading-relaxed text-ink/70">
            Ihr Gewerk ist nicht dabei, zum Beispiel Dachdecker, Sanitär, Heizung oder
            Tischler? Kein Problem. Der Aufbau ist derselbe: klar zeigen, was Sie
            anbieten, wo Sie arbeiten und warum Kunden Ihnen vertrauen können.
          </p>
        </Container>
      </Section>

      {/* Nutzen */}
      <Section aria-label="Nutzen für Handwerker" className="border-t border-ink/10">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                size="compact"
                title="Was Sie davon haben."
                intro="Nicht nur ein schöner Auftritt, sondern mehr passende Anfragen aus Ihrer Region."
              />
            </div>
            <div className="lg:col-span-7">
              <ul className="grid gap-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-sm leading-relaxed text-ink/80">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Region */}
      <Section aria-label="Einsatzgebiet" className="border-t border-ink/10">
        <Container>
          <SectionHeading
            title="Deutschlandweit, aber persönlich."
            intro="Die Zusammenarbeit funktioniert per Telefon, E-Mail, Video-Call und digitaler Abstimmung. Sitz und persönlicher Ausgangspunkt ist Neustadt in Sachsen. Für Orte in Sachsen gibt es zusätzlich regionale Seiten."
          />
          <div className="mt-10 grid gap-px overflow-hidden border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {localCities.map((city) => (
              <Link
                key={city.slug}
                href={`/webdesign/${city.slug}`}
                className="group flex items-center justify-between gap-3 bg-paper p-5 transition-colors hover:bg-white"
              >
                <span className="flex items-center gap-2 text-sm font-medium text-ink">
                  <MapPin className="h-4 w-4 shrink-0 text-accent" />
                  {city.name}
                </span>
                <ArrowRight className="h-4 w-4 shrink-0 text-accent transition-transform duration-300 ease-out group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section aria-label="Verwandte Zielgruppen" className="border-t border-ink/10">
        <Container>
          <SectionHeading
            title="Verwandte Branchen und Leistungen."
            intro="Weitere Zielgruppenseiten vertiefen typische Inhalte und Anfragewege."
          />
          <div className="mt-10 grid gap-px overflow-hidden border border-ink/10 bg-ink/10 md:grid-cols-3">
            {relatedIndustryLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group bg-paper p-6 transition-colors hover:bg-white sm:p-7"
              >
                <h3 className="flex items-center justify-between gap-3 text-base font-semibold">
                  {item.title}
                  <ArrowRight className="h-4 w-4 shrink-0 text-accent transition-transform duration-300 ease-out group-hover:translate-x-1" />
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{item.text}</p>
              </Link>
            ))}
          </div>
          <p className="mt-7 text-sm leading-relaxed text-ink/70">
            Ergänzend möglich:{" "}
            <Link
              href="/social-media"
              className="font-semibold text-ink underline underline-offset-4 hover:text-accent"
            >
              Social-Media-Betreuung
            </Link>{" "}
            für Projekte, Einblicke und laufende Sichtbarkeit.
          </p>
        </Container>
      </Section>

      {/* Ablauf */}
      <Section aria-label="Ablauf" className="border-t border-ink/10">
        <Container>
          <SectionHeading title="So entsteht Ihre Handwerker-Website." />
          <ol className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <li key={step.no}>
                <span aria-hidden="true" className="text-sm font-semibold text-accent">
                  {step.no}
                </span>
                <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{step.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* FAQ */}
      <Section aria-label="Häufige Fragen zu Webseiten für Handwerker" className="border-t border-ink/10">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeading size="compact" title="Häufige Fragen von Handwerksbetrieben." />
            </div>
            <div className="lg:col-span-8">
              <Accordion items={faqs} />
            </div>
          </div>
        </Container>
      </Section>

      {/* Ansprechpartner / Über mich (am Ende) */}
      <Section aria-label="Ansprechpartner" className="border-t border-ink/10">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <Reveal className="lg:col-span-4">
              <figure className="relative aspect-[4/5] overflow-hidden border border-ink/10 bg-white">
                <Image
                  src="/images/portrae.png"
                  alt="Jonas Schurz, Ansprechpartner für Webseiten für Handwerker"
                  fill
                  sizes="(min-width: 1024px) 28vw, 100vw"
                  className="object-cover object-center"
                />
              </figure>
            </Reveal>
            <div className="lg:col-span-7 lg:col-start-6">
              <SectionHeading
                title="Ein fester Ansprechpartner statt anonymer Agentur."
                intro="Sie sprechen direkt mit Jonas Schurz in Neustadt in Sachsen. Kurze digitale Wege, klare Absprachen und eine ehrliche Einschätzung, was sich für Ihren Betrieb wirklich lohnt."
              />
              <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm text-ink/75">
                {site.contact.phoneHref ? (
                  <a href={`tel:${site.contact.phoneHref}`} className="font-medium text-ink underline underline-offset-4 hover:text-accent">
                    {site.contact.phone}
                  </a>
                ) : null}
                <a href={`mailto:${site.contact.email}`} className="font-medium text-ink underline underline-offset-4 hover:text-accent">
                  {site.contact.email}
                </a>
              </div>
              <p className="mt-6 max-w-[60ch] text-sm leading-relaxed text-ink/60">
                Referenzen aus Handwerk und Bau werden laufend ergänzt. Gerne zeige ich
                im Erstgespräch passende Beispiele.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Webseite für Ihren Handwerksbetrieb planen?"
        subtitle="Im kostenlosen Erstgespräch schaue ich auf Ihre aktuelle Sichtbarkeit und kläre, wie eine klare Website mehr passende Anfragen bringen kann."
      />
    </>
  );
}
