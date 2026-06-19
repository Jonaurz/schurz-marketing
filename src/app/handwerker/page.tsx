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
import { FaqJsonLd } from "@/components/seo/faq-jsonld";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";
import { Check, ArrowRight, MapPin } from "@/components/ui/icons";
import { site } from "@/lib/site";
import { localCities } from "@/lib/local-seo";
import { trades } from "@/lib/trades";

export const metadata: Metadata = {
  title: "Webdesign für Handwerker",
  description:
    "Webseiten für Handwerker, Bau, Garten- und Landschaftsbau und regionale Dienstleister in Sachsen. WordPress, lokale SEO, Google-Unternehmensprofil und Website-Wartung aus einer Hand.",
  alternates: { canonical: "/handwerker" },
  openGraph: {
    title: "Webdesign für Handwerker · Schurz Marketing",
    description:
      "Webseiten für Handwerk, Bau und regionale Dienstleister in Sachsen. Klar aufgebaut, gut auffindbar und auf Anfragen ausgelegt.",
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
    title: "Webseiten-Erstellung",
    text: "Eine klare Website, die Ihre Leistungen, Projektbilder und Ihr Einsatzgebiet zeigt. Für Betriebe, die online mehr Anfragen wollen.",
  },
  {
    title: "WordPress-Webseiten",
    text: "Pflegbare Websites, die Sie später selbst anpassen können. Für Betriebe, die unabhängig bleiben möchten.",
  },
  {
    title: "Landingpages",
    text: "Einzelne Seiten für ein konkretes Angebot oder eine Region. Sinnvoll für gezielte Aktionen und Anzeigen.",
  },
  {
    title: "Lokale SEO",
    text: "Damit Google versteht, welche Leistung Sie in welcher Region anbieten. Für mehr Sichtbarkeit bei Suchen wie „Zaunbauer Pirna“.",
  },
  {
    title: "Google-Unternehmensprofil",
    text: "Einrichtung und Optimierung Ihres Profils bei Google. Für mehr Sichtbarkeit in der lokalen Suche und auf der Karte.",
  },
  {
    title: "Website-Wartung",
    text: "Updates, Sicherung und kleine Änderungen im laufenden Betrieb. Für Betriebe, die sich nicht selbst kümmern wollen.",
  },
  {
    title: "Texte für Handwerker",
    text: "Verständliche Texte für Leistungen, Referenzen und Projektseiten. Ohne Fachjargon, nah an Ihren Kunden.",
  },
  {
    title: "Anfrageformulare",
    text: "Formulare, die genau die Infos abfragen, die Sie für ein Angebot brauchen. Für weniger Rückfragen.",
  },
];

const benefits = [
  "Mehr Anfragen für Dacharbeiten, Pflasterarbeiten, Zaunbau, Gartenbau, Elektro- oder Malerarbeiten aus Ihrer Region.",
  "Besser gefunden werden, wenn Kunden nach „Dachdecker Dresden“, „Zaunbauer Pirna“ oder „Gartenbau Sächsische Schweiz“ suchen.",
  "Projektbilder und Leistungen so zeigen, dass Interessenten schneller Vertrauen fassen.",
  "Kontaktaufnahme per Telefon, Formular oder WhatsApp so einfach wie möglich machen.",
];

const steps = [
  {
    no: "1",
    title: "Erstgespräch",
    text: "Wir klären Gewerk, Einsatzgebiet und welche Anfragen die Website bringen soll. Kostenlos und ohne Fachjargon.",
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
    a: "Ja. Schwerpunkt sind Webseiten für Handwerk, Bau, Garten- und Landschaftsbau und regionale Dienstleister in Sachsen. Die Seiten sind so aufgebaut, dass Kunden schnell Ihre Leistungen, Projekte und Ihr Einsatzgebiet sehen.",
  },
  {
    q: "Arbeiten Sie mit WordPress?",
    a: "Ja, wenn es passt. WordPress hat den Vorteil, dass Sie Inhalte später selbst anpassen können. Welche Lösung für Ihren Betrieb sinnvoll ist, klären wir vorab.",
  },
  {
    q: "Was kostet eine Website für meinen Betrieb?",
    a: "Das hängt vom Umfang ab. Den genauen Rahmen klären wir transparent im kostenlosen Erstgespräch, ohne Verpflichtung.",
  },
  {
    q: "Kümmern Sie sich auch um Google und die lokale Sichtbarkeit?",
    a: "Ja. Dazu gehören lokale SEO und auf Wunsch die Einrichtung oder Optimierung Ihres Google-Unternehmensprofils, damit Sie bei Suchen aus Ihrer Region besser gefunden werden.",
  },
  {
    q: "Ich habe wenig Zeit. Wie aufwendig ist das für mich?",
    a: "So wenig wie möglich. Von Ihnen kommen Infos, Bilder und Freigaben. Aufbau, Technik und Texte übernehme ich.",
  },
  {
    q: "Für welche Orte arbeiten Sie?",
    a: "Vor allem für Betriebe in Dresden, der Sächsischen Schweiz, Pirna, Sebnitz, Neustadt in Sachsen, Bautzen, der Oberlausitz, Meißen, Chemnitz, Leipzig und ganz Sachsen.",
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
  areaServed: site.serviceArea.map((area) => ({
    "@type": "AdministrativeArea",
    name: area,
  })),
  url: `${site.url}/handwerker`,
  description:
    "Webseiten für Handwerk, Bau und regionale Dienstleister in Sachsen, inklusive WordPress, lokaler SEO, Google-Unternehmensprofil und Website-Wartung.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <PageHero
        eyebrow="Für Handwerk, Bau & regionale Dienstleister"
        title="Webdesign für Handwerker, Bau und regionale Dienstleister in Sachsen."
        subtitle="Webseiten, die Ihre Leistungen klar zeigen, Vertrauen schaffen und mehr Anfragen aus Ihrer Region bringen. WordPress, lokale SEO, Google-Unternehmensprofil und Wartung aus einer Hand."
      >
        <Button href="/kontakt" size="lg" withArrow>
          Erstgespräch anfragen
        </Button>
        <Button href="/kontakt" size="lg" variant="secondary">
          Kostenlose Website-Einschätzung
        </Button>
      </PageHero>

      {/* Einstieg */}
      <Section aria-label="Warum eine gute Website für Handwerker zählt">
        <Container>
          <div className="max-w-3xl">
            <SectionHeading title="Gute Arbeit reicht nicht, wenn sie online niemand sieht." />
            <div className="mt-8 space-y-5 leading-relaxed text-ink/75">
              <p className="text-pretty text-lg text-ink/90">
                Viele Handwerksbetriebe haben volle Auftragsbücher über Empfehlung,
                aber online kaum etwas. Sobald Empfehlungen wegfallen oder ein neuer
                Bereich wachsen soll, fehlt der Ort, an dem Kunden sehen, was Sie
                können und wie sie Sie erreichen.
              </p>
              <p className="text-pretty">
                Eine gute Website muss nicht kompliziert sein. Sie muss erklären,
                Vertrauen schaffen und Anfragen ermöglichen. Leistungen, Referenzen,
                Einsatzgebiet und Kontakt sollten auf den ersten Blick verständlich sein.
              </p>
              <p className="text-pretty">
                Genau darauf ist diese Arbeit ausgelegt: Webseiten für Handwerk, Bau und
                regionale Dienstleister, die in Sachsen besser gefunden werden.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Gewerke */}
      <Section aria-label="Gewerke" className="border-t border-ink/10">
        <Container>
          <SectionHeading
            eyebrow="Gewerke"
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

      {/* Leistungen */}
      <Section aria-label="Leistungen für Handwerker" className="border-t border-ink/10">
        <Container>
          <SectionHeading
            eyebrow="Leistungen"
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
            eyebrow="Region"
            title="Im Einsatz in ganz Sachsen."
            intro="Für viele Orte gibt es eigene Seiten mit regionalem Bezug. Von dort sehen Kunden direkt, dass Sie in ihrer Nähe arbeiten."
          />
          <ul className="mt-10 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {localCities.map((city) => (
              <li key={city.slug}>
                <Link
                  href={`/webdesign/${city.slug}`}
                  className="group inline-flex items-center gap-2 text-sm font-medium text-ink/80 transition-colors hover:text-accent"
                >
                  <MapPin className="h-4 w-4 shrink-0 text-accent" />
                  Webdesign {city.name}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Ablauf */}
      <Section aria-label="Ablauf" className="border-t border-ink/10">
        <Container>
          <SectionHeading eyebrow="Ablauf" title="So entsteht Ihre Handwerker-Website." />
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

      {/* Ansprechpartner / Vertrauen */}
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
                intro="Sie sprechen direkt mit Jonas Schurz. Kurze Wege, klare Absprachen und ehrliche Einschätzung, was sich für Ihren Betrieb wirklich lohnt."
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

      <CtaBand
        title="Webseite für Ihren Handwerksbetrieb planen?"
        subtitle="Im kostenlosen Erstgespräch schauen wir auf Ihre aktuelle Sichtbarkeit und klären, wie eine klare Website mehr Anfragen aus Ihrer Region bringt."
      />
    </>
  );
}
