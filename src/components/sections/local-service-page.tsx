import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Accordion } from "@/components/ui/accordion";
import { SectionHeading } from "@/components/ui/section-heading";
import { CtaBand } from "@/components/sections/cta-band";
import { ProofSection } from "@/components/sections/references-section";
import { FaqJsonLd } from "@/components/seo/faq-jsonld";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";
import { Check, MapPin } from "@/components/ui/icons";
import { site } from "@/lib/site";
import type { LocalSeoPage } from "@/lib/local-seo";

export function LocalServicePage({ page }: { page: LocalSeoPage }) {
  const { service, city } = page;
  const faqItems = [...service.faq, ...city.localFaq];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${site.url}${page.href}#service`,
    name: `${service.label} ${city.name}`,
    serviceType: service.label,
    provider: {
      "@type": "ProfessionalService",
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      email: site.contact.email,
      telephone: site.contact.phone,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: city.area,
    },
    url: `${site.url}${page.href}`,
    description: page.description,
  };

  return (
    <>
      <Script
        id={`${service.id}-${city.slug}-jsonld`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Start", path: "/" },
          { name: service.label, path: service.overviewHref },
          { name: `${service.shortLabel} ${city.name}`, path: page.href },
        ]}
      />
      <FaqJsonLd items={faqItems} />

      {/* Hero */}
      <section className="border-b border-ink/10 pt-16 lg:pt-[4.5rem]">
        <Container>
          <Reveal immediate>
            <div className="grid gap-10 py-14 sm:py-16 lg:grid-cols-12 lg:items-center lg:py-20">
              <div className="lg:col-span-7">
                <h1 className="text-balance text-4xl leading-[1.04] sm:text-5xl lg:text-6xl">
                  {page.h1}
                </h1>
                <p className="mt-6 max-w-[62ch] text-pretty text-lg leading-relaxed text-ink/70">
                  {service.promise}
                </p>
                <div className="mt-9 flex flex-wrap gap-4">
                  <Button href="/kontakt" size="lg" withArrow>
                    Erstgespräch anfragen
                  </Button>
                  <Button href={service.overviewHref} size="lg" variant="secondary">
                    Leistung ansehen
                  </Button>
                </div>
              </div>
              <div className="lg:col-span-5">
                <figure className="relative">
                  <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    width={1448}
                    height={1086}
                    priority
                    sizes="(min-width: 1024px) 32rem, 100vw"
                    className="h-auto w-full"
                  />
                </figure>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Problem */}
      <Section aria-label={`Warum Sichtbarkeit in ${city.name} entscheidet`}>
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionHeading
                title={`Wer Sie in ${city.name} nicht findet, fragt jemand anderen an.`}
                intro={service.pain}
              />
              <div className="mt-8 space-y-5 leading-relaxed text-ink/75">
                <p className="text-pretty text-lg text-ink/90">{city.localContext}</p>
                <p className="text-pretty">{city.localNeed}</p>
              </div>
            </div>
            <aside className="lg:col-span-4 lg:col-start-9">
              <div className="border-y border-ink/10 py-6">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <h2 className="text-sm font-semibold uppercase tracking-label text-ink/70">
                      Einsatzgebiet
                    </h2>
                    <p className="mt-3 text-pretty text-sm leading-relaxed text-ink/75">
                      {city.area}
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      {/* Vor Ort: stadtspezifisch */}
      <Section aria-label={`Vor Ort in ${city.name}`} className="border-t border-ink/10">
        <Container>
          <div className="max-w-3xl">
            <SectionHeading title={`Vor Ort in ${city.name}.`} />
            <p className="mt-6 text-pretty text-lg leading-relaxed text-ink/80">
              {city.scene}
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {city.highlights.map((highlight, i) => (
              <Reveal key={highlight.title} delay={i * 0.06}>
                <div className="border-t-2 border-ink pt-5">
                  <h3 className="text-lg font-bold">{highlight.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">{highlight.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Lösung: Leistungsumfang */}
      <Section aria-label="Leistungsumfang" className="border-t border-ink/10">
        <Container>
          <SectionHeading
            title={`${service.label} mit klarem Fokus auf ${city.name}.`}
            intro={`${service.intro} ${service.localBenefit}`}
          />
          <div className="mt-12 grid gap-px overflow-hidden border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {service.features.map((feature) => (
              <article key={feature.title} className="bg-paper p-6 sm:p-7">
                <h3 className="text-base font-semibold">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{feature.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* Was enthalten ist */}
      <Section aria-label="Was enthalten ist" className="border-t border-ink/10">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                size="compact"
                title={`Was Sie für ${city.name} bekommen.`}
                intro="Der Umfang wird auf Ihr Unternehmen abgestimmt. Diese Bausteine bilden die Grundlage."
              />
            </div>
            <div className="lg:col-span-7">
              <ul className="grid gap-3 sm:grid-cols-2">
                {service.deliverables.map((item) => (
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

      {/* Beweis: Referenzen + Kundenstimmen */}
      <ProofSection />

      {/* Ablauf */}
      <Section aria-label="Ablauf" className="border-t border-ink/10">
        <Container>
          <SectionHeading title={`So entsteht ${service.titleWord} für ${city.name}.`} />
          <ol className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step) => (
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
      <Section aria-label="Häufige Fragen" className="border-t border-ink/10">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeading
                size="compact"
                title={`Fragen zu ${service.shortLabel} in ${city.name}.`}
              />
              <div className="mt-8 space-y-3 text-sm text-ink/70">
                <p>
                  Passt auch interessant:
                  {" "}
                  <Link href={page.relatedHref} className="font-semibold text-ink underline underline-offset-4 hover:text-accent">
                    {page.relatedLabel}
                  </Link>
                </p>
                <p>
                  Für Handwerksbetriebe:
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

      <CtaBand title={service.ctaTitle} subtitle={service.ctaSubtitle} />
    </>
  );
}
