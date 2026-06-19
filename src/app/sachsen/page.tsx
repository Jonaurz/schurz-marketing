import type { Metadata } from "next";
import Link from "next/link";
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

export const metadata: Metadata = {
  title: "Webdesign für regionale Unternehmen in Sachsen",
  description:
    "Webdesign und Social Media für regionale Unternehmen, Dienstleister und Betriebe in Sachsen. Eigene Seiten für Dresden, Pirna, Sebnitz, Bautzen, Leipzig, Chemnitz, Meißen und mehr.",
  alternates: { canonical: "/sachsen" },
  openGraph: {
    title: "Webdesign für regionale Unternehmen in Sachsen · Schurz Marketing",
    description:
      "Regional sichtbar werden in Sachsen: Webseiten und Social Media für Unternehmen und Dienstleister, mit eigenen Seiten für die wichtigsten Orte.",
    url: "/sachsen",
    images: [
      {
        url: "/images/schurz-marketing-webdesign.png",
        width: 1448,
        height: 1086,
        alt: "Von Schurz Marketing gestaltete Website auf Laptop und Smartphone",
      },
    ],
  },
};

const audiences = [
  "Dienstleister und lokale Betriebe",
  "Praxen und Gesundheit",
  "Kanzleien und Beratung",
  "Handwerk, Bau und Gewerke",
  "Gastronomie und Hotellerie",
  "Vereine und Einrichtungen",
];

const localBenefits = [
  {
    title: "In der Region gefunden werden",
    text: "Inhalte und Struktur werden so aufgebaut, dass Google Ihre regionale Relevanz besser einordnen kann.",
  },
  {
    title: "Vertrauen vor Ort",
    text: "Kunden aus Ihrer Nähe sehen schnell, was Sie anbieten, für wen Sie arbeiten und wie der nächste Schritt aussieht.",
  },
  {
    title: "Klares Einsatzgebiet",
    text: "Die Orte, in denen Sie tätig sind, werden sinnvoll eingebunden, ohne die Seite mit Ortsnamen zu überladen.",
  },
];

const steps = [
  {
    no: "1",
    title: "Erstgespräch",
    text: "Wir klären Angebot, Zielgruppe, Region und welche Anfragen die Website bringen soll. Kostenlos und unverbindlich.",
  },
  {
    no: "2",
    title: "Struktur planen",
    text: "Aus Ihren Leistungen und Orten entsteht eine klare Seitenstruktur mit den richtigen Suchbegriffen.",
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
    q: "Arbeiten Sie nur in Sachsen?",
    a: "Nein. Schurz Marketing arbeitet deutschlandweit. In Sachsen liegt ein regionaler Schwerpunkt mit eigenen Seiten für die wichtigsten Orte, weil regionale Sichtbarkeit hier besonders gefragt ist.",
  },
  {
    q: "Für welche Unternehmen lohnt sich eine regionale Website?",
    a: "Für alle, deren Kunden aus der Umgebung kommen, von Dienstleistern über Praxen und Kanzleien bis zu Handwerk und Gastronomie. Wichtig ist, dass Leistung, Region und Kontakt klar zusammenpassen.",
  },
  {
    q: "Hilft das bei Google-Suchen aus meiner Region?",
    a: "Mit klarer Struktur, regionalen Inhalten und sauberer Technik kann Google Ihre regionale Relevanz besser einordnen. Auf Wunsch kommt das Google-Unternehmensprofil dazu.",
  },
  {
    q: "Gibt es eine Seite speziell für mein Gewerk?",
    a: "Für Handwerk und Bau gibt es eigene Gewerke-Seiten. Den Überblick finden Sie unter Webdesign für Handwerker.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${site.url}/sachsen#service`,
  name: "Webdesign für regionale Unternehmen in Sachsen",
  serviceType: "Webdesign und Social Media",
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
  url: `${site.url}/sachsen`,
  description:
    "Webdesign und Social Media für regionale Unternehmen und Dienstleister in Sachsen, mit eigenen Seiten für die wichtigsten Orte.",
};

export default function SachsenPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Start", path: "/" },
          { name: "Regional in Sachsen", path: "/sachsen" },
        ]}
      />
      <FaqJsonLd items={faqs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <PageHero
        eyebrow="Regional in Sachsen"
        title="Webdesign für regionale Unternehmen in Sachsen."
        subtitle="Schurz Marketing arbeitet deutschlandweit, mit einem klaren Schwerpunkt in Sachsen. Für Unternehmen, Dienstleister und Betriebe, die in ihrer Region besser gefunden werden und mehr Anfragen bekommen wollen."
      >
        <Button href="/kontakt" size="lg" withArrow>
          Erstgespräch anfragen
        </Button>
        <Button href="/webdesign" size="lg" variant="secondary">
          Leistung ansehen
        </Button>
      </PageHero>

      {/* Einstieg */}
      <Section aria-label="Warum regionale Sichtbarkeit zählt">
        <Container>
          <div className="max-w-3xl">
            <SectionHeading title="Online gefunden werden, wo Ihre Kunden suchen." />
            <div className="mt-8 space-y-5 leading-relaxed text-ink/75">
              <p className="text-pretty text-lg text-ink/90">
                Viele Unternehmen leben von Kunden aus der Umgebung. Wer regional gefunden
                werden will, braucht einen Auftritt, der klar zeigt, was angeboten wird,
                wo gearbeitet wird und wie man Kontakt aufnimmt.
              </p>
              <p className="text-pretty">
                Für die wichtigsten Orte in Sachsen gibt es eigene Seiten mit echtem
                lokalem Bezug, statt einer langen Liste mit Ortsnamen. So passt jede Seite
                zu den Menschen, die sie erreichen soll.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Für wen */}
      <Section aria-label="Für wen" className="border-t border-ink/10">
        <Container>
          <SectionHeading
            eyebrow="Für wen"
            title="Für Unternehmen und Dienstleister aus der Region."
            intro="Nicht nur eine Branche. Entscheidend ist, dass Ihre Kunden aus der Umgebung kommen und Sie online klar finden sollen."
          />
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map((item) => (
              <li key={item} className="flex items-start gap-3 border-t border-ink/15 pt-4 text-sm text-ink/80">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Nutzen */}
      <Section aria-label="Regionaler Nutzen" className="border-t border-ink/10">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            {localBenefits.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <div className="border-t-2 border-ink pt-5">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Orte */}
      <Section aria-label="Orte und Regionen" className="border-t border-ink/10">
        <Container>
          <SectionHeading
            eyebrow="Orte"
            title="Eigene Seiten für Ihre Region."
            intro="Von Dresden über die Sächsische Schweiz bis Leipzig. Jede Seite erklärt, für wen Schurz Marketing dort relevant ist."
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
          <p className="mt-8 max-w-[70ch] text-sm leading-relaxed text-ink/70">
            Sie suchen eine Seite speziell für Ihr Gewerk? Den Überblick finden Sie unter{" "}
            <Link href="/handwerker" className="font-semibold text-ink underline underline-offset-4 hover:text-accent">
              Webdesign für Handwerker
            </Link>
            .
          </p>
        </Container>
      </Section>

      {/* Ablauf */}
      <Section aria-label="Ablauf" className="border-t border-ink/10">
        <Container>
          <SectionHeading eyebrow="Ablauf" title="So entsteht Ihr regionaler Auftritt." />
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
      <Section aria-label="Häufige Fragen zur regionalen Sichtbarkeit" className="border-t border-ink/10">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeading size="compact" title="Fragen zu regionaler Sichtbarkeit." />
            </div>
            <div className="lg:col-span-8">
              <Accordion items={faqs} />
            </div>
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Regional sichtbar werden in Ihrer Stadt?"
        subtitle="Im kostenlosen Erstgespräch schauen wir auf Ihre aktuelle Sichtbarkeit und klären, wie eine klare Website mehr Anfragen aus Ihrer Region bringt."
      />
    </>
  );
}
