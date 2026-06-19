import Link from "next/link";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { ProofSection } from "@/components/sections/references-section";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";
import { FaqJsonLd } from "@/components/seo/faq-jsonld";
import { ArrowRight, Check, MapPin } from "@/components/ui/icons";
import type { IndustryPage as IndustryPageData } from "@/lib/industry-pages";
import { serializeJsonLd } from "@/lib/json-ld";
import { site } from "@/lib/site";

export function IndustryPage({ page }: { page: IndustryPageData }) {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${site.url}/${page.slug}#service`,
    name: page.metaTitle,
    serviceType: `Webdesign für ${page.audience}`,
    provider: {
      "@type": "ProfessionalService",
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      email: site.contact.email,
      telephone: site.contact.phone,
    },
    areaServed: { "@type": "Country", name: "Deutschland" },
    audience: {
      "@type": "BusinessAudience",
      audienceType: page.audience,
    },
    url: `${site.url}/${page.slug}`,
    description: page.metaDescription,
  };

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Start", path: "/" },
          { name: "Webdesign", path: "/webdesign" },
          { name: page.metaTitle, path: `/${page.slug}` },
        ]}
      />
      <FaqJsonLd items={page.faq} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(serviceJsonLd),
        }}
      />

      <PageHero title={page.h1} subtitle={page.hero}>
        <Button href="/kontakt" size="lg" withArrow>
          Website-Projekt anfragen
        </Button>
        <Button href="/webdesign" size="lg" variant="secondary">
          Webdesign-Leistung ansehen
        </Button>
      </PageHero>

      <Section aria-label={`Herausforderungen für ${page.name}`}>
        <Container>
          <SectionHeading title={page.problemTitle} />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {page.problems.map((problem, index) => (
              <Reveal key={problem.title} delay={index * 0.06}>
                <article className="border-t-2 border-ink pt-5">
                  <h3 className="text-lg font-semibold">{problem.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">{problem.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section aria-label="Leistungsumfang" className="border-t border-ink/10">
        <Container>
          <SectionHeading
            title={page.solutionTitle}
            intro={page.solutionIntro}
          />
          <div className="mt-12 grid gap-px overflow-hidden border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
            {page.features.map((feature) => (
              <article key={feature.title} className="bg-paper p-6 sm:p-7">
                <h3 className="text-base font-semibold">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{feature.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section aria-label="Typische Website-Inhalte" className="border-t border-ink/10">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                size="compact"
                title={page.contentTitle}
                intro={page.contentIntro}
              />
            </div>
            <div className="lg:col-span-7">
              <ul className="grid gap-4 sm:grid-cols-2">
                {page.websiteContents.map((item) => (
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

      <ProofSection />

      <Section aria-label="Ablauf der Zusammenarbeit" className="border-t border-ink/10">
        <Container>
          <SectionHeading
            title={page.processTitle}
            intro={page.processIntro}
          />
          <ol className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {page.process.map((step) => (
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
            <div className="lg:col-span-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <SectionHeading size="compact" title={page.remoteTitle} />
              </div>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <p className="text-pretty text-lg leading-relaxed text-ink/80">
                {page.personalText}
              </p>
              <div className="mt-7 flex flex-wrap gap-4">
                <Button href="/ueber-mich" variant="secondary" withArrow>
                  Ansprechpartner kennenlernen
                </Button>
                <Button href="/kontakt" variant="secondary">
                  Unverbindlich Kontakt aufnehmen
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section aria-label={`Zielgruppen innerhalb ${page.name}`} className="border-t border-ink/10">
        <Container>
          <SectionHeading title={page.targetGroupsTitle} />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {page.targetGroups.map((group) => (
              <li key={group} className="border-t border-ink/15 pt-4 text-sm text-ink/80">
                {group}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section aria-label="Verwandte Leistungen" className="border-t border-ink/10">
        <Container>
          <SectionHeading
            title={page.relatedTitle}
            intro={page.relatedIntro}
          />
          <div className="mt-10 grid gap-px overflow-hidden border border-ink/10 bg-ink/10 md:grid-cols-3">
            {page.relatedLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group bg-paper p-6 transition-colors hover:bg-white sm:p-7"
              >
                <h3 className="flex items-center justify-between gap-3 text-base font-semibold">
                  {item.label}
                  <ArrowRight className="h-4 w-4 shrink-0 text-accent transition-transform duration-300 ease-out group-hover:translate-x-1" />
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{item.text}</p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section aria-label={`Häufige Fragen zu ${page.metaTitle}`} className="border-t border-ink/10">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeading size="compact" title={`Fragen zu Webdesign für ${page.name}.`} />
              <p className="mt-7 text-sm leading-relaxed text-ink/70">
                Sie möchten ein konkretes Projekt besprechen?{" "}
                <Link
                  href="/kontakt"
                  className="font-semibold text-ink underline underline-offset-4 hover:text-accent"
                >
                  Schreiben Sie direkt eine Anfrage.
                </Link>
              </p>
            </div>
            <div className="lg:col-span-8">
              <Accordion items={page.faq} />
            </div>
          </div>
        </Container>
      </Section>

      <CtaBand title={page.ctaTitle} subtitle={page.ctaSubtitle} />
    </>
  );
}
