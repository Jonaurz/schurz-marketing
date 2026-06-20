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
import { JsonLd } from "@/components/seo/json-ld";
import { ProofSection } from "@/components/sections/references-section";
import { Check, ArrowRight, MapPin } from "@/components/ui/icons";
import { site } from "@/lib/site";
import { localCities } from "@/lib/local-seo";
import { trades, type Trade } from "@/lib/trades";

const defaultSteps = [
  {
    no: "1",
    title: "Erstgespräch",
    text: "Im Erstgespräch kläre ich Leistungen, Einsatzgebiet und welche Anfragen die Website bringen soll. Direkt und ohne Fachjargon.",
  },
  {
    no: "2",
    title: "Ziele klären",
    text: "Zielgruppen, gewünschte Projekte und wichtige Kontaktwege werden gemeinsam priorisiert.",
  },
  {
    no: "3",
    title: "Struktur und Inhalte",
    text: "Aus Leistungen, Projekten und Einsatzgebieten entsteht eine klare Seitenstruktur mit verständlichen Texten.",
  },
  {
    no: "4",
    title: "Design und Umsetzung",
    text: "Die Website wird gestaltet, technisch gebaut, mobil optimiert und auf wichtigen Geräten geprüft.",
  },
  {
    no: "5",
    title: "Korrekturen",
    text: "In abgestimmten Runden werden Texte, Bilder und Details gemeinsam verfeinert.",
  },
  {
    no: "6",
    title: "Veröffentlichung",
    text: "Nach Freigabe geht die Seite live. Auf Wunsch bleiben Pflege und Weiterentwicklung in einer Hand.",
  },
];

export function TradePage({ trade }: { trade: Trade }) {
  const defaultFaq = [
    {
      q: `Was kostet eine Website für ${trade.audience}?`,
      a: "Der Preis richtet sich nach Seitenumfang, Funktionen und vorhandenem Material. Nach einem unverbindlichen Erstgespräch erhältst du einen transparenten Projektumfang.",
    },
    {
      q: "Wie lange dauert die Umsetzung?",
      a: "Je nach Umfang dauert ein Website-Projekt meist einige Wochen. Inhalte, Korrekturen und Veröffentlichung werden zu Beginn realistisch geplant.",
    },
    {
      q: "Kann eine bestehende Website überarbeitet werden?",
      a: "Ja. Zuerst prüfe ich, welche Inhalte und technischen Grundlagen erhalten bleiben können. Danach folgt ein gezielter Relaunch oder ein Neuaufbau.",
    },
    {
      q: "Ist die Zusammenarbeit deutschlandweit möglich?",
      a: "Ja. Ich arbeite von Neustadt in Sachsen aus per Telefon, E-Mail, Video-Call und digitaler Abstimmung mit Betrieben in ganz Deutschland.",
    },
  ];
  const faqItems = [...trade.faq, ...(trade.extraFaq ?? defaultFaq)];
  const steps = trade.process ?? defaultSteps;
  const relatedTrades = trade.relatedTradeSlugs
    ? trade.relatedTradeSlugs
        .map((slug) => trades.find((item) => item.slug === slug))
        .filter((item): item is Trade => Boolean(item))
    : trades.filter((item) => item.slug !== trade.slug).slice(0, 3);

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
    areaServed: { "@type": "Country", name: "Deutschland" },
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
      <FaqJsonLd items={faqItems} />
      <JsonLd data={serviceJsonLd} />

      <PageHero
        title={trade.h1}
        subtitle={`${trade.promise} ${
          trade.heroSuffix ?? "Persönlich aus Neustadt in Sachsen und deutschlandweit umgesetzt."
        }`}
      >
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
            <SectionHeading title={`Online zeigen, was du als ${trade.audience} kannst.`} />
            <div className="mt-8 space-y-5 leading-relaxed text-ink/75">
              <p className="text-pretty text-lg text-ink/90">{trade.intro}</p>
              <p className="text-pretty">{trade.pain}</p>
              <p className="text-pretty">
                {trade.detailIntro ??
                  "Ich plane den Auftritt so, dass Leistungen, Vertrauen und Kontaktaufnahme zusammenpassen. Dazu gehören eine saubere mobile Darstellung, verständliche Texte und eine klare SEO-Grundlage."}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Leistungen */}
      <Section aria-label="Leistungen darstellen" className="border-t border-ink/10">
        <Container>
          <SectionHeading
            title={trade.serviceSectionTitle ?? "Leistungen verständlich voneinander trennen."}
            intro={
              trade.serviceSectionIntro ??
              "Jede Leistung bekommt ihren Platz, damit Kunden schnell finden, was sie suchen."
            }
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
            title={
              trade.goodSiteTitle ?? `Was eine gute Website für ${trade.audience} enthält.`
            }
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

      {/* Beweis: Referenzen + Kundenstimmen */}
      <ProofSection />

      {/* Region */}
      <Section aria-label="Einsatzgebiet" className="border-t border-ink/10">
        <Container>
          <SectionHeading
            title={trade.regionTitle ?? "Regionale Sichtbarkeit dort, wo dein Betrieb arbeitet."}
            intro={
              trade.regionIntro ??
              "Für Orte rund um Neustadt in Sachsen gibt es eigene Seiten mit regionalem Bezug. Weitere Einsatzgebiete werden nur dann aufgenommen, wenn sie wirklich zu deinem Betrieb passen."
            }
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

      {/* Ablauf */}
      <Section aria-label="Ablauf" className="border-t border-ink/10">
        <Container>
          <SectionHeading
            title={trade.processTitle ?? "So entsteht deine Website."}
            intro={trade.processIntro}
          />
          <ol className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
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

      <Section aria-label="Deutschlandweite Zusammenarbeit" className="border-t border-ink/10">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                size="compact"
                title={trade.remoteTitle ?? "Deutschlandweit, aber persönlich."}
                intro={
                  trade.remoteIntro ??
                  "Der Standort in Neustadt in Sachsen ist der bodenständige Ausgangspunkt. Die Zusammenarbeit ist nicht auf die Region begrenzt."
                }
              />
            </div>
            <div className="lg:col-span-7">
              <p className="text-pretty text-lg leading-relaxed text-ink/80">
                {trade.remoteText ??
                  "Abstimmungen laufen per Telefon, E-Mail, Video-Call und klaren digitalen Zwischenständen. Du sprichst direkt mit Jonas Schurz und haben einen festen Ansprechpartner für Struktur, Texte, Design, Umsetzung und optionale Pflege."}
              </p>
              <div className="mt-7 flex flex-wrap gap-4">
                <Button href="/ueber-mich" variant="secondary" withArrow>
                  Ansprechpartner kennenlernen
                </Button>
                <Button href="/social-media" variant="secondary">
                  Social Media ergänzen
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section aria-label="Verwandte Gewerke" className="border-t border-ink/10">
        <Container>
          <SectionHeading
            title={trade.relatedTitle ?? "Weitere Branchen und Leistungen."}
            intro={
              trade.relatedIntro ??
              "Verwandte Seiten zeigen, wie sich Inhalte und Anfragewege an andere Betriebe anpassen lassen."
            }
          />
          <div className="mt-10 grid gap-px overflow-hidden border border-ink/10 bg-ink/10 md:grid-cols-3">
            {relatedTrades.map((item) => (
              <Link
                key={item.slug}
                href={`/handwerker/${item.slug}`}
                className="group bg-paper p-6 transition-colors hover:bg-white sm:p-7"
              >
                <h3 className="flex items-center justify-between gap-3 text-base font-semibold">
                  {item.name}
                  <ArrowRight className="h-4 w-4 shrink-0 text-accent transition-transform duration-300 ease-out group-hover:translate-x-1" />
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{item.cardText}</p>
              </Link>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <Link
              href="/webdesign"
              className="font-semibold text-ink underline underline-offset-4 hover:text-accent"
            >
              Webdesign im Überblick
            </Link>
            <Link
              href="/webdesign-dienstleister"
              className="font-semibold text-ink underline underline-offset-4 hover:text-accent"
            >
              Webdesign für Dienstleister
            </Link>
            <Link
              href="/webdesign-reinigungsfirmen"
              className="font-semibold text-ink underline underline-offset-4 hover:text-accent"
            >
              Webdesign für Reinigungsfirmen
            </Link>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section aria-label={`Häufige Fragen zu Webseiten für ${trade.audience}`} className="border-t border-ink/10">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeading size="compact" title={`Fragen zu Webdesign für ${trade.name}.`} />
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
              <Accordion items={faqItems} />
            </div>
          </div>
        </Container>
      </Section>

      <CtaBand
        title={`Website für ${trade.audience} planen?`}
        subtitle={
          trade.ctaSubtitle ??
          "Im unverbindlichen Erstgespräch schaue ich auf deine aktuelle Sichtbarkeit und kläre, wie eine klare Website mehr passende Anfragen bringt."
        }
      />
    </>
  );
}
