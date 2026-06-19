import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Accordion } from "@/components/ui/accordion";
import { SectionHeading } from "@/components/ui/section-heading";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { FaqJsonLd } from "@/components/seo/faq-jsonld";
import { Check } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Webdesign",
  description:
    "Hochwertige Websites für Unternehmen, Dienstleister und Handwerksbetriebe in Sachsen, die nicht nur gut aussehen, sondern Anfragen bringen: schnell, auffindbar, DSGVO-konform und barrierefrei.",
  alternates: { canonical: "/webdesign" },
  openGraph: {
    title: "Webdesign · Schurz Marketing",
    description:
      "Websites, die Ihre Leistungen klar zeigen und Anfragen bringen. DSGVO-konform und barrierefrei.",
    url: "/webdesign",
    images: [
      {
        url: "/images/schurz-marketing-webdesign.png",
        width: 1448,
        height: 1086,
        alt: "Beispiel einer von Schurz Marketing gestalteten Website",
      },
    ],
  },
};

const features = [
  {
    title: "Design mit Substanz",
    text: "Eine hochwertige Optik, die zu Ihrer Marke passt und Besucher gezielt führt. Jedes Element hat eine Aufgabe.",
  },
  {
    title: "Technik, die trägt",
    text: "Schnelle Ladezeiten, sauberer Aufbau und ein Auftritt, der auf jedem Gerät stabil läuft.",
  },
  {
    title: "Gefunden werden",
    text: "Klar strukturiert für Suchmaschinen, damit passende Kunden Sie finden und nicht die Konkurrenz.",
  },
  {
    title: "DSGVO-konform",
    text: "Rechtssicher umgesetzt. Datenschutz, Cookies und Formulare werden von Anfang an sauber gelöst.",
  },
  {
    title: "Barrierefrei",
    text: "Klare Struktur, starke Kontraste, bedienbar per Tastatur und Screenreader. Von Beginn an mitgedacht.",
  },
  {
    title: "Pflegbar und erweiterbar",
    text: "Inhalte lassen sich anpassen, der Auftritt wächst mit Ihrem Unternehmen mit.",
  },
];

const handwerkLeistungen = [
  "WordPress-Webseiten zum selbst pflegen",
  "Lokale SEO für Ihre Region",
  "Google-Unternehmensprofil einrichten",
  "Website-Wartung und technische Pflege",
  "Landingpages für einzelne Angebote",
  "Verständliche Texte für Ihre Leistungen",
];

const looksGood = [
  "Design, das zu Ihrem Qualitätsanspruch passt",
  "Klare Struktur statt Effekt-Überladung",
  "Konsistent auf Smartphone, Tablet und Desktop",
  "Typografie und Bildsprache mit Wertigkeit",
];

const worksWell = [
  "Schnelle Ladezeiten, die niemanden warten lassen",
  "Klare Wege zur Kontaktaufnahme",
  "Suchmaschinenfreundlich aufgebaut",
  "Stabil, wartbar und sicher",
];

const steps = [
  {
    no: "1",
    title: "Erstgespräch und Ziele",
    text: "Wir klären, was Ihre Website leisten soll. Ohne Fachjargon und ohne Verpflichtung.",
  },
  {
    no: "2",
    title: "Konzept und Struktur",
    text: "Aufbau, Inhalte und Look werden geplant, bevor gebaut wird. Sie sehen vorab, wie Besucher zur Anfrage geführt werden.",
  },
  {
    no: "3",
    title: "Design und Umsetzung",
    text: "Design und Technik entstehen aus einer Hand, mit Zwischenständen, die Sie jederzeit kommentieren können.",
  },
  {
    no: "4",
    title: "Launch und Betreuung",
    text: "Der Auftritt geht live, inklusive Einweisung. Auf Wunsch bleibt die Seite dauerhaft betreut.",
  },
];

const faqs = [
  {
    q: "Kann ich die Website später selbst pflegen?",
    a: "Ja. Ihr Auftritt wird auf Wunsch so eingerichtet, dass Inhalte selbst angepasst werden können. Eine kurze Einweisung zeigt die wichtigsten Handgriffe. Alternativ bleibt die Pflege dauerhaft betreut.",
  },
  {
    q: "Was kostet eine professionelle Website?",
    a: "Das hängt von Umfang und Zielen ab. Ein professioneller Auftritt ist sinnvoll ab dem mittleren vierstelligen Bereich. Den genauen Rahmen klären wir transparent im kostenlosen Erstgespräch.",
  },
  {
    q: "Bekomme ich auch Hilfe bei Texten und Inhalten?",
    a: "Ja. Struktur und Texte werden gemeinsam erarbeitet, damit Ihre Leistung verständlich und überzeugend rüberkommt. Sie müssen nicht vor einem leeren Blatt sitzen.",
  },
  {
    q: "Sind die Websites wirklich DSGVO-konform und barrierefrei?",
    a: "Ja, beides ist fester Bestandteil und wird von Anfang an eingeplant. Welche Detailpflichten für Ihr Unternehmen gelten, prüfen wir im Projekt.",
  },
  {
    q: "Können Sie meine bestehende Website überarbeiten?",
    a: "In vielen Fällen ja. Wir prüfen gemeinsam, was sich lohnt: ein gezielter Relaunch oder ein Neuaufbau.",
  },
  {
    q: "Wie lange dauert ein Projekt?",
    a: "Je nach Umfang meist einige Wochen. Nach dem Erstgespräch erhalten Sie einen realistischen Zeitplan mit klaren Schritten.",
  },
];

export default function WebdesignPage() {
  return (
    <>
      <FaqJsonLd items={faqs} />
      <PageHero
        title="Websites, die Ihre Leistung zeigen. Und Anfragen bringen."
        subtitle="Ihr Auftritt zeigt die Qualität Ihrer Arbeit und arbeitet zuverlässig: schnell, auffindbar, DSGVO-konform und barrierefrei."
      >
        <Button href="/kontakt" size="lg" withArrow>
          Erstgespräch anfragen
        </Button>
      </PageHero>

      {/* Beispielauftritt */}
      <Section spacing="tight" aria-label="Beispiel einer Website">
        <Container>
          <Reveal>
            <figure className="relative">
              <Image
                src="/images/schurz-marketing-webdesign.png"
                alt="Beispiel einer von Schurz Marketing gestalteten Website auf Laptop und Smartphone"
                width={1448}
                height={1086}
                priority
                sizes="(min-width: 1024px) 64rem, 100vw"
                className="h-auto w-full"
              />
            </figure>
          </Reveal>
        </Container>
      </Section>

      {/* Ausgangslage */}
      <Section aria-label="Warum die Website zählt" className="border-t border-ink/10">
        <Container>
          <div className="max-w-3xl">
            <SectionHeading
              title="Ihre Website ist der erste Eindruck. Oft lange, bevor jemand anruft."
            />
            <div className="mt-8 space-y-5 leading-relaxed text-ink/75">
              <p className="text-pretty text-lg text-ink/90">
                Wer heute eine Dienstleistung oder ein Produkt sucht, schaut zuerst
                online. Innerhalb weniger Sekunden entscheidet sich, ob Ihr Unternehmen
                seriös und kompetent wirkt, oder ob der nächste Anbieter interessanter
                erscheint.
              </p>
              <p className="text-pretty">
                Genau hier verschenken viele gute Unternehmen Potenzial: Die Arbeit ist
                erstklassig, doch der Auftritt im Netz wird ihr nicht gerecht. Veraltete
                Optik, unklare Struktur oder eine schlechte Darstellung auf dem Handy
                kosten Vertrauen, Anfragen und am Ende Umsatz.
              </p>
              <p className="text-pretty">
                Eine professionelle Website dreht das um. Sie macht Ihre Qualität
                sichtbar, beantwortet die wichtigsten Fragen Ihrer Kunden und führt sie
                ruhig zum nächsten Schritt: der Anfrage.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Was Sie bekommen */}
      <Section aria-label="Leistungsumfang Webdesign" className="border-t border-ink/10">
        <Container>
          <SectionHeading
            eyebrow="Leistungsumfang"
            title="Mehr als eine schöne Website."
          />
          <div className="mt-12 grid gap-px overflow-hidden border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="bg-paper p-6 sm:p-7">
                <h3 className="text-base font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{feature.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Schwerpunkt Handwerk */}
      <Section aria-label="Schwerpunkt Handwerk und regionale Betriebe" className="border-t border-ink/10">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-6">
              <SectionHeading
                size="compact"
                eyebrow="Schwerpunkt"
                title="Besonders stark für Handwerk, Bau und regionale Dienstleister."
                intro="Für Handwerksbetriebe zählen Projektbilder, Leistungen, Einsatzgebiet und ein einfaches Anfrageformular. Bei Praxen, Kanzleien und Beratern stehen Vertrauen, klare Angebote und eine einfache Kontaktaufnahme im Vordergrund."
              />
              <div className="mt-8">
                <Button href="/handwerker" variant="secondary" withArrow>
                  Webdesign für Handwerker ansehen
                </Button>
              </div>
            </div>
            <div className="lg:col-span-6">
              <p className="text-sm font-semibold uppercase tracking-label text-ink/70">
                Das gehört oft dazu
              </p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {handwerkLeistungen.map((item) => (
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

      {/* Schön UND funktional */}
      <Section aria-label="Design und Funktion" className="border-t border-ink/10">
        <Container>
          <SectionHeading
            title="Schön. Und funktional. Beides."
            intro="Das eine ohne das andere reicht nicht. Erst beides zusammen macht aus einer Website ein Werkzeug, das Anfragen bringt."
          />
          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            <Reveal>
              <div>
                <h3 className="border-t-2 border-ink pt-5 text-xl font-bold">
                  Sieht hochwertig aus
                </h3>
                <ul className="mt-6 space-y-3">
                  {looksGood.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-ink/80">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div>
                <h3 className="border-t-2 border-ink pt-5 text-xl font-bold">
                  Und funktioniert
                </h3>
                <ul className="mt-6 space-y-3">
                  {worksWell.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-ink/80">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Ablauf */}
      <Section aria-label="Ablauf" className="border-t border-ink/10">
        <Container>
          <SectionHeading
            eyebrow="Ablauf"
            title="Ein klarer Weg. Ohne böse Überraschungen."
          />
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
      <Section aria-label="Häufige Fragen zum Webdesign" className="border-t border-ink/10">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeading
                size="compact"
                title="Antworten rund um Ihre Website."
              />
            </div>
            <div className="lg:col-span-8">
              <Accordion items={faqs} />
            </div>
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Zeigen wir online, was Sie wirklich können."
        subtitle="Im kostenlosen Erstgespräch schauen wir uns Ihre aktuelle Situation an und klären, wie Ihre Website zum Aushängeschild wird."
      />
    </>
  );
}
