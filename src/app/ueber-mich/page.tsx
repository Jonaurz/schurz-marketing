import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Check } from "@/components/ui/icons";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Jonas Schurz",
  description:
    "Jonas Schurz ist dein persönlicher Ansprechpartner für Webdesign, Social Media und digitale Sichtbarkeit aus Neustadt in Sachsen.",
  path: "/ueber-mich",
  image: {
    url: "/images/portrae.png",
    width: 1086,
    height: 1448,
    alt: "Porträt von Jonas Schurz, Gründer von Schurz Marketing",
  },
});

const proof = [
  "10 Jahre Erfahrung im Online-Marketing und in digitalen Auftritten",
  "Ein fester Ansprechpartner für Strategie, Website und Content",
  "Klare Beratung ohne unnötige Maßnahmen",
];

const principles = [
  {
    label: "Ehrliche Einordnung",
    text: "Du hörst, was wirklich sinnvoll ist. Auch dann, wenn weniger Maßnahmen die bessere Entscheidung sind.",
  },
  {
    label: "Qualität mit Bodenhaftung",
    text: "Der Auftritt soll hochwertig wirken und gleichzeitig zu deinem Unternehmen und echten Entscheidern passen.",
  },
  {
    label: "Direkte Zusammenarbeit",
    text: "Kurze Wege, klare Rückmeldungen und ein Ansprechpartner, der das Projekt ganzheitlich im Blick behält.",
  },
];

export default function UeberMichPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Start", path: "/" },
          { name: "Über mich", path: "/ueber-mich" },
        ]}
      />
      <PageHero
        title="Jonas Schurz. Dein Ansprechpartner für digitale Auftritte."
        subtitle="Seit 10 Jahren beschäftige ich mich damit, wie Unternehmen online wahrgenommen werden. Daraus entstehen Websites und Social-Media-Auftritte, die hochwertig wirken und verständlich verkaufen."
      >
        <Button href="/kontakt" size="lg" withArrow>
          Erstgespräch anfragen
        </Button>
      </PageHero>

      <Section aria-label="Jonas Schurz Profil">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
            <figure className="relative aspect-[4/5] overflow-hidden border border-ink/10 bg-white lg:col-span-5">
              <Image
                src="/images/portrae.png"
                alt="Porträt von Jonas Schurz, Gründer von Schurz Marketing"
                fill
                priority
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover object-center"
              />
            </figure>

            <div className="lg:col-span-7">
              <SectionHeading
                title="Direkt. Strategisch. Aus einer Hand."
                intro="Keine anonyme Agenturabwicklung. Du arbeitest direkt mit dem Menschen, der Strategie, Struktur, Design und Social Media zusammen denkt."
              />
              <ul className="mt-8 space-y-4">
                {proof.map((item) => (
                  <li key={item} className="flex gap-3 text-ink/85">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
                {principles.map((item) => (
                  <div key={item.label} className="grid gap-2 py-5 sm:grid-cols-[0.45fr_1fr] sm:gap-4">
                    <h3 className="text-sm font-semibold">{item.label}</h3>
                    <p className="text-sm leading-relaxed text-ink/70">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section aria-label="Was Kunden davon haben" className="border-t border-ink/10">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-balance text-3xl sm:text-4xl">
              Erfahrung ist erst dann wertvoll, wenn sie Entscheidungen leichter macht.
            </h2>
            <p className="mt-5 max-w-[60ch] text-pretty text-lg leading-relaxed text-ink/70">
              Du bekommst keine Show um der Show willen, sondern einen Auftritt, der
              erklärt, überzeugt und zum nächsten Schritt führt.
            </p>
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Passt die Richtung zu deinem Unternehmen?"
        subtitle="Ein erstes Gespräch zeigt schnell, wo der digitale Auftritt bremst und welcher nächste Schritt sinnvoll ist."
      />
    </>
  );
}
