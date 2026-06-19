import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Marquee } from "@/components/ui/marquee";
import { Accordion } from "@/components/ui/accordion";
import { StatCounter } from "@/components/ui/stat-counter";
import { SectionHeading } from "@/components/ui/section-heading";
import { CtaBand } from "@/components/sections/cta-band";
import { HomeHero } from "@/components/sections/home-hero";
import { ProofSection } from "@/components/sections/references-section";
import { FaqJsonLd } from "@/components/seo/faq-jsonld";
import { cn } from "@/lib/cn";
import { ArrowRight, Check } from "@/components/ui/icons";

/* Inhalte (Referenzen/Kundenstimmen) liegen im data-Volume und werden zur
   Laufzeit gelesen; bis zu 60 s zwischengespeichert. */
export const revalidate = 60;

const industries = [
  "Dienstleister",
  "Praxen & Gesundheit",
  "Kanzleien & Beratung",
  "Handwerk & Bau",
  "Garten- & Landschaftsbau",
  "Gastronomie & Hotellerie",
  "Immobilien",
  "Coaches & Kreative",
  "Lokale Unternehmen",
];

const audiences = [
  "Dienstleister",
  "Praxen & Gesundheit",
  "Kanzleien & Beratung",
  "Coaches & Kreative",
  "Handwerk & Bau",
  "Gastronomie & Hotellerie",
  "Immobilien",
  "Lokale Unternehmen",
];

const stats = [
  { value: 10, suffix: "", label: "Jahre Erfahrung im Online-Marketing" },
  { value: 100, suffix: " %", label: "DSGVO-konform und barrierefrei" },
  { value: 1, suffix: "", label: "fester Ansprechpartner für alles" },
  { value: 0, suffix: " €", label: "kostet das Erstgespräch" },
];

const problems = [
  {
    title: "Die Website wirkt veraltet",
    text: "Der erste Eindruck entscheidet in Sekunden. Wirkt der Auftritt billig, wird unbewusst auch die Leistung dahinter abgewertet.",
  },
  {
    title: "Sie tauchen bei Google kaum auf",
    text: "Wer nach Ihrem Angebot sucht, landet bei der Konkurrenz. Jeder Tag ohne Sichtbarkeit kostet Anfragen, die woanders landen.",
  },
  {
    title: "Social Media bleibt liegen",
    text: "Für Instagram, Facebook und Co. fehlt die Zeit. Währenddessen bauen sichtbarere Wettbewerber Vertrauen bei Ihren Kunden auf.",
  },
  {
    title: "Es kommen Klicks, aber keine Anfragen",
    text: "Besucher sind da, springen aber wieder ab. Ohne klare Führung zur Kontaktaufnahme passiert mit dem Interesse nichts.",
  },
];

const serviceBlocks = [
  {
    title: "Webdesign",
    href: "/webdesign",
    image: "/images/schurz-marketing-webdesign.png",
    imageAlt: "Website-Projekt von Schurz Marketing auf Laptop und Smartphone",
    text: "Websites, die Ihre Leistungen klar zeigen und es Kunden leicht machen, eine Anfrage zu stellen. Aufgebaut so, dass Besucher schnell sehen, was Sie anbieten, wo Sie arbeiten und wie sie Sie erreichen.",
    points: [
      "Klare Struktur statt reiner Optik",
      "Technisch sauber, schnell, gut auffindbar",
      "DSGVO-konform und barrierefrei",
      "Auf Anfragen ausgelegt, nicht auf Effekte",
    ],
  },
  {
    title: "Social-Media-Betreuung",
    href: "/social-media",
    image: "/images/schurz-marketing-social-media.png",
    imageAlt: "Social-Media-Auftritt, betreut von Schurz Marketing",
    text: "Von der Strategie über Videos und Content bis zur laufenden Betreuung. Ihre Marke bleibt präsent, ohne dass es Ihre Zeit kostet.",
    points: [
      "Strategie und Beratung",
      "Social-Media-Videos und Reels",
      "Content und Posts",
      "Posting und Community-Management",
    ],
  },
];

const pillars = [
  {
    title: "Persönlich und aus einer Hand",
    text: "Sie haben einen festen Ansprechpartner. Ohne Agentur-Pingpong und ohne wechselnde Zuständigkeiten.",
  },
  {
    title: "Klar statt nur hübsch",
    text: "Jede Entscheidung folgt einem Ziel: mehr Vertrauen, mehr Sichtbarkeit, mehr passende Anfragen.",
  },
  {
    title: "DSGVO-konform und barrierefrei",
    text: "Datenschutz und Barrierefreiheit werden von Anfang an mitgedacht, statt kurz vor Launch ergänzt.",
  },
  {
    title: "Hochwertig im Detail",
    text: "Klares Design, saubere Technik, durchdachte Texte. Wertigkeit, die man sieht und spürt.",
  },
];

const steps = [
  {
    no: "1",
    title: "Erstgespräch",
    text: "Wir klären Ihre Ziele, Ihre Zielgruppe und worauf es ankommt. Kostenlos und unverbindlich.",
  },
  {
    no: "2",
    title: "Strategie und Konzept",
    text: "Sie erhalten ein klares Konzept: Struktur, Inhalte und Look, abgestimmt auf Ihr Unternehmen.",
  },
  {
    no: "3",
    title: "Umsetzung",
    text: "Design, Technik und Texte entstehen aus einer Hand, in enger Abstimmung mit Ihnen.",
  },
  {
    no: "4",
    title: "Launch und Betreuung",
    text: "Der Auftritt geht live. Auf Wunsch bleibt danach dauerhaft Unterstützung an Bord.",
  },
];

const faqs = [
  {
    q: "Was kostet eine Website oder die Betreuung?",
    a: "Das hängt von Umfang und Zielen ab. Ein professioneller Auftritt ist eine Investition, sinnvoll ab dem mittleren vierstelligen Bereich. Den genauen Rahmen klären wir im kostenlosen Erstgespräch, transparent und ohne Verpflichtung.",
  },
  {
    q: "Wie lange dauert ein Projekt?",
    a: "Je nach Umfang meist einige Wochen. Nach dem Erstgespräch erhalten Sie einen realistischen Zeitplan ohne leere Versprechen.",
  },
  {
    q: "Sind die Websites wirklich DSGVO-konform und barrierefrei?",
    a: "Ja. Datenschutz und Barrierefreiheit sind fester Bestandteil der Umsetzung. Welche gesetzlichen Detailpflichten für Ihr Unternehmen gelten, klären wir im Projekt.",
  },
  {
    q: "Schon eine Website vorhanden. Lohnt sich ein Relaunch?",
    a: "Oft ja. Wenn Ihre Seite veraltet ist, kaum Anfragen bringt oder rechtliche Vorgaben nicht erfüllt, holen wir gemeinsam das Beste heraus.",
  },
  {
    q: "Übernehmen Sie auch die laufende Social-Media-Betreuung?",
    a: "Ja. Von der Strategie über Videos und Content bis zum laufenden Posting, so viel oder so wenig, wie Sie möchten.",
  },
  {
    q: "Für welche Branchen arbeiten Sie?",
    a: "Wir arbeiten deutschlandweit für viele Branchen, von Dienstleistern über Praxen, Kanzleien und Gastronomie bis zu Handwerk und Bau. Für Handwerksbetriebe und für regionale Unternehmen in Sachsen gibt es zusätzlich eigene Seiten mit passenden Inhalten.",
  },
];

export default function Home() {
  return (
    <>
      <FaqJsonLd items={faqs} />
      <HomeHero />

      {/* Problem: dem Besucher klar machen, was ihm online entgeht */}
      <Section aria-label="Ausgangslage" className="border-t border-ink/10">
        <Container>
          <SectionHeading
            title="Die meisten Kunden schauen Sie sich erst online an."
            intro="Wer heute eine Leistung sucht, vergleicht zuerst im Internet. Wirkt Ihre Website veraltet, unübersichtlich oder ist sie auf dem Handy schwer zu bedienen, entscheiden sich viele für den nächsten Anbieter. Das Ärgerliche ist: Sie merken es nicht einmal, weil diese Anfragen nie bei Ihnen ankommen."
          />
          <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {problems.map((problem, i) => (
              <Reveal key={problem.title} delay={i * 0.05}>
                <article className="border-t-2 border-ink pt-5">
                  <h3 className="text-lg font-semibold">{problem.title}</h3>
                  <p className="mt-2 max-w-[50ch] text-sm leading-relaxed text-ink/70">
                    {problem.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <p className="mt-12 max-w-[60ch] text-pretty text-lg text-ink/80">
              Daran lässt sich etwas ändern, ohne großen Aufwand für Sie. Mit einer
              Website, die Ihre Arbeit zeigt und Besucher Schritt für Schritt zur
              Anfrage führt.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* Lösung: Leistungen */}
      <Section id="leistungen" aria-label="Leistungen" className="border-t border-ink/10">
        <Container>
          <SectionHeading
            title="Womit ich Ihnen helfe."
            intro="Zwei Leistungen, einzeln oder zusammen, mit dem gleichen Ziel: dass aus Besuchern Anfragen werden."
          />
          <div className="mt-14 space-y-20">
            {serviceBlocks.map((service, i) => {
              const isFirst = i === 0;
              return (
                <Reveal key={service.title} delay={0.05}>
                  <article className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
                    <div className={cn("lg:col-span-6", !isFirst && "lg:order-2")}>
                      <figure className="relative">
                        <Image
                          src={service.image}
                          alt={service.imageAlt}
                          width={1448}
                          height={1086}
                          sizes="(min-width: 1024px) 36rem, 100vw"
                          className="h-auto w-full"
                        />
                      </figure>
                    </div>
                    <div className={cn("lg:col-span-6", !isFirst && "lg:order-1")}>
                      <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                        {service.title}
                      </h3>
                      <p className="mt-4 max-w-[52ch] text-pretty leading-relaxed text-ink/70">
                        {service.text}
                      </p>
                      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                        {service.points.map((point) => (
                          <li key={point} className="flex items-start gap-3 text-sm text-ink/80">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                            {point}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={service.href}
                        className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink underline underline-offset-8 transition-colors hover:text-accent"
                      >
                        Mehr zu {service.title}
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Beweis: Referenzen + Kundenstimmen */}
      <ProofSection />

      {/* Kennzahlen */}
      <Section spacing="tight" aria-label="Kennzahlen" className="border-t border-ink/10">
        <Container>
          <dl className="grid grid-cols-2 gap-y-10 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col border-l border-ink/15 pl-5">
                <dt className="order-2 mt-2 text-sm leading-snug text-ink/70">{stat.label}</dt>
                <dd className="order-1 text-4xl font-bold tracking-tight sm:text-5xl">
                  <StatCounter value={stat.value} suffix={stat.suffix} />
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      {/* Branchen-Laufband */}
      <div className="border-y border-ink/10 py-5">
        <Marquee items={industries} />
      </div>

      {/* Für wen wir arbeiten */}
      <Section aria-label="Für wen wir arbeiten">
        <Container>
          <SectionHeading
            title="Für wen wir arbeiten."
            intro="Schurz Marketing arbeitet deutschlandweit für unterschiedliche Unternehmen und Dienstleister. Entscheidend ist nicht die Branche, sondern ein Auftritt, der Ihre Leistung klar zeigt und Anfragen bringt."
          />
          <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 border-t border-ink/15 pt-4 text-sm text-ink/80"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <Reveal>
              <Link
                href="/handwerker"
                className="group block h-full border border-ink/10 p-6 transition-colors hover:border-ink sm:p-7"
              >
                <p className="text-xs font-semibold uppercase tracking-label text-accent">
                  Schwerpunktthema
                </p>
                <h3 className="mt-3 flex items-center justify-between gap-2 text-lg font-semibold">
                  Webseiten für Handwerker und Bau
                  <ArrowRight className="h-4 w-4 shrink-0 text-accent transition-transform duration-300 ease-out group-hover:translate-x-1" />
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  Eigene Seiten für Handwerk, Gewerke und Bauunternehmen, mit Projektbildern,
                  Leistungen und Einsatzgebiet.
                </p>
              </Link>
            </Reveal>
            <Reveal delay={0.06}>
              <Link
                href="/sachsen"
                className="group block h-full border border-ink/10 p-6 transition-colors hover:border-ink sm:p-7"
              >
                <p className="text-xs font-semibold uppercase tracking-label text-accent">
                  Regional
                </p>
                <h3 className="mt-3 flex items-center justify-between gap-2 text-lg font-semibold">
                  Regionale Unternehmen in Sachsen
                  <ArrowRight className="h-4 w-4 shrink-0 text-accent transition-transform duration-300 ease-out group-hover:translate-x-1" />
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  Für Betriebe in Dresden, Pirna, Leipzig, Chemnitz und der ganzen Region
                  gibt es eigene Seiten mit lokalem Bezug.
                </p>
              </Link>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Warum Schurz Marketing */}
      <Section aria-label="Warum Schurz Marketing" className="border-t border-ink/10">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeading
                size="compact"
                title="Was die Zusammenarbeit ausmacht."
                intro="Kein Agentur-Pingpong und keine leeren Versprechen. Sie wissen von Anfang an, mit wem Sie arbeiten und woran Sie sind."
              />
            </div>
            <ul className="grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:col-span-8">
              {pillars.map((pillar, i) => (
                <li key={pillar.title}>
                  <Reveal delay={i * 0.05}>
                    <h3 className="text-base font-semibold">{pillar.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/70">{pillar.text}</p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* Ablauf */}
      <Section aria-label="Ablauf" className="border-t border-ink/10">
        <Container>
          <SectionHeading title="So läuft die Zusammenarbeit ab." />
          <ol className="mt-12 grid gap-px overflow-hidden border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <li key={step.no} className="bg-paper p-6 sm:p-7">
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
                title="Gut zu wissen, bevor wir sprechen."
                intro="Wenn Ihre Frage fehlt, stellen Sie sie einfach im Erstgespräch."
              />
            </div>
            <div className="lg:col-span-8">
              <Accordion items={faqs} />
            </div>
          </div>
        </Container>
      </Section>

      {/* Über mich (ganz am Ende, kurz vor dem Abschluss) */}
      <Section aria-label="Über mich" className="border-t border-ink/10">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <Reveal className="lg:col-span-4">
              <figure className="relative aspect-[4/5] overflow-hidden border border-ink/10 bg-white">
                <Image
                  src="/images/portrae.png"
                  alt="Jonas Schurz, Gründer von Schurz Marketing"
                  fill
                  sizes="(min-width: 1024px) 28vw, 100vw"
                  className="object-cover object-center"
                />
              </figure>
            </Reveal>
            <div className="lg:col-span-7 lg:col-start-6">
              <SectionHeading
                title="Hinter Schurz Marketing steht ein Mensch, kein Callcenter."
                intro="Jonas Schurz arbeitet seit 10 Jahren im Online-Marketing. Sie arbeiten direkt mit dem Menschen zusammen, der Strategie, Website und Social Media im Blick behält."
              />
              <p className="mt-4 max-w-[60ch] text-pretty leading-relaxed text-ink/70">
                Verlässlich, ehrlich und auf Augenhöhe. Kein Fachjargon, keine
                leeren Versprechen.
              </p>
              <div className="mt-8">
                <Button href="/ueber-mich" variant="secondary" withArrow>
                  Mehr über mich
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
