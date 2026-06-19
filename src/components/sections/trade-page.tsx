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
import type { Trade } from "@/lib/trades";

const steps = [
  {
    no: "1",
    title: "Erstgespräch",
    text: "Wir klären Leistungen, Einsatzgebiet und welche Anfragen die Website bringen soll. Kostenlos und ohne Fachjargon.",
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

export function TradePage({ trade }: { trade: Trade }) {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${site.url}/handwerker/${trade.slug}#service`,
    name: trade.metaTitle,
    serviceType: `Webdesign für ${trade.audience}`,
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
    url: `${site.url}/handwerker/${trade.slug}`,
    description: trade.metaDescription,
  };

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Start", path: "/" },
          { name: "Webdesign für Handwerker", path: "/handwerker" },
          { name: trade.name, path: `/handwerker/${trade.slug}` },
        ]}
      />
      <FaqJsonLd items={trade.faq} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <PageHero eyebrow={trade.eyebrow} title={trade.h1} subtitle={trade.promise}>
        <Button href="/kontakt" size="lg" withArrow>
          Erstgespräch anfragen
        </Button>
        <Button href="/handwerker" size="lg" variant="secondary">
          Alle Handwerker-Leistungen
        </Button>
      </PageHero>

      {/* Einstieg */}
      <Section aria-label={`Warum eine gute Website für ${trade.audience} zählt`}>
        <Container>
          <div className="max-w-3xl">
            <SectionHeading title={`Online zeigen, was Sie als ${trade.audience} können.`} />
            <div className="mt-8 space-y-5 leading-relaxed text-ink/75">
              <p className="text-pretty text-lg text-ink/90">{trade.intro}</p>
              <p className="text-pretty">{trade.pain}</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Leistungen */}
      <Section aria-label="Leistungen darstellen" className="border-t border-ink/10">
        <Container>
          <SectionHeading
            eyebrow="Leistungen"
            title="Diese Leistungen lassen sich klar darstellen."
            intro="Jede Leistung bekommt ihren Platz, damit Kunden schnell finden, was sie suchen."
          />
          <div className="mt-12 grid gap-px overflow-hidden border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
            {trade.services.map((service) => (
              <div key={service} className="flex items-start gap-3 bg-paper p-6 text-sm leading-relaxed text-ink/80 sm:p-7">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {service}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Was eine gute Website enthält */}
      <Section aria-label="Aufbau einer guten Website" className="border-t border-ink/10">
        <Container>
          <SectionHeading
            title={`Was eine gute Website für ${trade.audience} enthält.`}
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {trade.goodSite.map((item, i) => (
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

      {/* Region */}
      <Section aria-label="Einsatzgebiet" className="border-t border-ink/10">
        <Container>
          <SectionHeading
            eyebrow="Region"
            title="Regional gefunden werden in ganz Sachsen."
            intro="Für viele Orte gibt es eigene Seiten mit regionalem Bezug. So sehen Kunden direkt, dass Sie in ihrer Nähe arbeiten."
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
          <SectionHeading eyebrow="Ablauf" title="So entsteht Ihre Website." />
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
      <Section aria-label={`Häufige Fragen zu Webseiten für ${trade.audience}`} className="border-t border-ink/10">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeading size="compact" title={`Fragen zu Webseiten für ${trade.name}.`} />
              <div className="mt-8 text-sm text-ink/70">
                <p>
                  Zurück zur Übersicht:
                  {" "}
                  <Link href="/handwerker" className="font-semibold text-ink underline underline-offset-4 hover:text-accent">
                    Webdesign für Handwerker
                  </Link>
                </p>
              </div>
            </div>
            <div className="lg:col-span-8">
              <Accordion items={trade.faq} />
            </div>
          </div>
        </Container>
      </Section>

      <CtaBand
        title={`Website für ${trade.audience} planen?`}
        subtitle="Im kostenlosen Erstgespräch schauen wir auf Ihre aktuelle Sichtbarkeit und klären, wie eine klare Website mehr Anfragen aus Ihrer Region bringt."
      />
    </>
  );
}
