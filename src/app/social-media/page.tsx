import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Accordion } from "@/components/ui/accordion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tag } from "@/components/ui/tag";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Social-Media-Betreuung",
  description:
    "Strategie, Beratung, Social-Media-Videos, Content und laufende Betreuung für Unternehmen, Selbstständige und Marken. Damit Sie sichtbar bleiben, ohne dass es Ihre Zeit kostet.",
  alternates: { canonical: "/social-media" },
  openGraph: {
    title: "Social-Media-Betreuung · Schurz Marketing",
    description:
      "Strategie, Videos, Content und Betreuung. Social Media aus einer Hand für Marken mit Qualitätsanspruch.",
    url: "/social-media",
    images: [
      {
        url: "/images/schurz-marketing-social-media.png",
        width: 1448,
        height: 1086,
        alt: "Beispiel für einen von Schurz Marketing betreuten Social-Media-Auftritt",
      },
    ],
  },
};

const channels = ["Instagram", "TikTok", "LinkedIn", "Facebook", "YouTube"];

const modules = [
  {
    title: "Strategie und Beratung",
    text: "Welche Kanäle, welche Inhalte, welche Ziele? Die Strategie wird klar auf Ihr Unternehmen ausgerichtet, statt nach Bauchgefühl zu posten.",
  },
  {
    title: "Social-Media-Videos",
    text: "Reels und Kurzvideos, die Aufmerksamkeit verdienen. Nah an Ihrem Unternehmen, ohne gestelltes Werbe-Getue, aber mit Konzept und sauberem Schnitt.",
  },
  {
    title: "Content und Posts",
    text: "Grafiken, Beiträge und Texte im einheitlichen Look Ihrer Marke, damit jeder Beitrag sofort als Ihrer erkennbar ist.",
  },
  {
    title: "Posting und Community",
    text: "Regelmäßiges Posten, Redaktionsplanung und der Umgang mit Kommentaren und Nachrichten. Ihre Kanäle bleiben aktiv und betreut.",
  },
];

const contentTypes = [
  {
    title: "Einblicke hinter die Kulissen",
    text: "Wie bei Ihnen gearbeitet wird, schafft Nähe und Vertrauen. Menschen folgen Menschen, nicht anonymen Logos.",
  },
  {
    title: "Projekte und Ergebnisse",
    text: "Fertige Arbeiten, Vorher-Nachher und zufriedene Kunden machen Ihre Qualität greifbar.",
  },
  {
    title: "Team und Persönlichkeit",
    text: "Wer hinter der Marke steht und wofür sie steht. Genau das unterscheidet Sie von austauschbaren Wettbewerbern.",
  },
  {
    title: "Wissen und Tipps",
    text: "Fachliche Einordnung positioniert Sie als Experten und bleibt im Kopf.",
  },
];

const steps = [
  {
    no: "1",
    title: "Analyse und Ziele",
    text: "Wo stehen Sie, wen wollen Sie erreichen, was soll Social Media bewirken? Eine ehrliche Bestandsaufnahme bildet die Grundlage.",
  },
  {
    no: "2",
    title: "Strategie und Themenplan",
    text: "Kanäle, Themen und ein realistischer Plan, abgestimmt auf Ihre Zielgruppe. Sie wissen, was wann erscheint.",
  },
  {
    no: "3",
    title: "Produktion",
    text: "Videos, Grafiken und Texte entstehen hochwertig und einheitlich. Sie geben Einblicke, der Rest wird übernommen.",
  },
  {
    no: "4",
    title: "Betreuung und Optimierung",
    text: "Laufendes Posten, Community-Management und regelmäßige Auswertung. Was funktioniert, wird ausgebaut.",
  },
];

const faqs = [
  {
    q: "Muss jemand selbst vor die Kamera?",
    a: "Nein, nicht zwingend. Vieles funktioniert auch ohne. Wenn Sie oder Ihr Team vor die Kamera möchten, wird daraus mit Konzept das Beste herausgeholt.",
  },
  {
    q: "Welche Kanäle werden betreut?",
    a: "Vor allem dort, wo Ihre Zielgruppe ist: etwa Instagram, Facebook, LinkedIn, TikTok oder YouTube. Welche Kanäle wirklich sinnvoll sind, klärt die Strategie.",
  },
  {
    q: "Wie oft wird veröffentlicht?",
    a: "Das richtet sich nach Zielen und Kapazität. Wichtiger als möglichst viel ist ein verlässlicher Rhythmus, den wir gemeinsam festlegen.",
  },
  {
    q: "Wie viel Aufwand entsteht bei mir?",
    a: "So wenig wie möglich. Strategie, Produktion und Betreuung werden übernommen. Von Ihnen kommen Input, Einblicke und Freigaben.",
  },
  {
    q: "Sehe ich die Inhalte vor der Veröffentlichung?",
    a: "Ja. Geplante Inhalte werden Ihnen zur Freigabe vorgelegt. Sie behalten jederzeit die Kontrolle über Ihren Außenauftritt.",
  },
  {
    q: "Ist auch nur eine Beratung möglich?",
    a: "Ja. Wenn Sie selbst umsetzen möchten, bekommt Ihr Team strategische Beratung und das nötige Rüstzeug an die Hand.",
  },
];

export default function SocialMediaPage() {
  return (
    <>
      <PageHero
        title="Social Media, das zu Ihnen passt. Ohne Ihre Zeit zu fressen."
        subtitle="Strategie, Videos, Content und laufende Betreuung aus einer Hand. Ihre Marke bleibt sichtbar und erreicht die richtigen Menschen."
      >
        <Button href="/kontakt" size="lg" withArrow>
          Erstgespräch anfragen
        </Button>
      </PageHero>

      {/* Beispielauftritt */}
      <Section spacing="tight" aria-label="Beispiel eines Social-Media-Auftritts">
        <Container>
          <Reveal>
            <figure className="relative">
              <Image
                src="/images/schurz-marketing-social-media.png"
                alt="Beispiel für einen von Schurz Marketing betreuten Social-Media-Auftritt"
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
      <Section aria-label="Warum Social Media zählt" className="border-t border-ink/10">
        <Container>
          <div className="max-w-3xl">
            <SectionHeading title="Sichtbarkeit passiert nicht nebenbei." />
            <div className="mt-8 space-y-5 leading-relaxed text-ink/75">
              <p className="text-pretty text-lg text-ink/90">
                In Ihrem Unternehmen steckt jeden Tag genug guter Stoff für Social
                Media: Projekte, Menschen, Ergebnisse, Wissen. Was meist fehlt, ist
                nicht das Material, sondern die Zeit und ein System.
              </p>
              <p className="text-pretty">
                Deshalb bleibt Social Media in vielen Unternehmen liegen oder passiert
                nur, wenn gerade Luft ist. Die Folge: Wettbewerber wirken aktiver und
                moderner, obwohl Ihre Arbeit mindestens genauso stark ist.
              </p>
              <p className="text-pretty">
                Mit einem klaren Plan und fester Betreuung dreht sich das. Ihre Marke
                wird sichtbar und erreicht genau die Kunden, die zu Ihnen passen, ohne
                dass es Ihren Arbeitsalltag belastet.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {channels.map((channel) => (
                  <Tag key={channel}>{channel}</Tag>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Leistungsbausteine */}
      <Section aria-label="Leistungen Social Media" className="border-t border-ink/10">
        <Container>
          <SectionHeading
            eyebrow="Leistungsbausteine"
            title="Alles, was Ihr Social Media braucht. In einer Hand."
          />
          <div className="mt-12 grid gap-px overflow-hidden border border-ink/10 bg-ink/10 sm:grid-cols-2">
            {modules.map((module) => (
              <article key={module.title} className="bg-paper p-6 sm:p-8">
                <h3 className="text-lg font-semibold">{module.title}</h3>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-ink/70">
                  {module.text}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* Welche Inhalte wirken */}
      <Section aria-label="Welche Inhalte wirken" className="border-t border-ink/10">
        <Container>
          <SectionHeading
            title="Sie haben mehr zu zeigen, als Sie denken."
            intro="Aus Ihrem Alltag entsteht Content, der echt wirkt und im Gedächtnis bleibt."
          />
          <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {contentTypes.map((type, i) => (
              <Reveal key={type.title} delay={i * 0.05}>
                <div className="border-t-2 border-ink pt-5">
                  <h3 className="text-base font-semibold">{type.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{type.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Ablauf */}
      <Section aria-label="Ablauf" className="border-t border-ink/10">
        <Container>
          <SectionHeading
            eyebrow="Ablauf"
            title="Von der Idee zur laufenden Betreuung."
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
      <Section aria-label="Häufige Fragen zu Social Media" className="border-t border-ink/10">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeading
                size="compact"
                title="Antworten rund um Social Media."
              />
            </div>
            <div className="lg:col-span-8">
              <Accordion items={faqs} />
            </div>
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Lassen Sie uns Ihr Social Media aufbauen."
        subtitle="Im kostenlosen Erstgespräch klären wir, welche Kanäle und Inhalte für Ihr Unternehmen sinnvoll sind. Ehrlich und ohne Verkaufsdruck."
      />
    </>
  );
}
