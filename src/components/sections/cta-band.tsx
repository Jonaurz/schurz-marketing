import { Container } from "../ui/container";
import { Section } from "../ui/section";
import { Button } from "../ui/button";
import { Reveal } from "../ui/reveal";

/**
 * Abschluss-CTA als dunkler Farbblock: der eine bewusste Themenwechsel
 * der Seite, einmal pro Seite, direkt vor dem Footer.
 */
export function CtaBand({
  title = "Sprich mit mir über deinen Auftritt.",
  subtitle = "Im kostenlosen Erstgespräch kläre ich, wo du stehst und was sich für dich lohnt. Unverbindlich und ohne Verkaufsdruck.",
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}) {
  return (
    <Section spacing="none" aria-label="Kontaktaufnahme" className="bg-ink text-paper">
      <Container>
        <Reveal>
          <div className="grid gap-10 py-20 sm:py-24 lg:grid-cols-12 lg:items-center lg:py-28">
            <div className="lg:col-span-8">
              <h2 className="text-balance text-3xl text-paper sm:text-4xl md:text-[2.75rem]">
                {title}
              </h2>
              <p className="mt-4 max-w-[60ch] text-pretty leading-relaxed text-paper/70 sm:text-lg">
                {subtitle}
              </p>
            </div>
            <div className="lg:col-span-4 lg:justify-self-end">
              <Button href="/kontakt" size="lg" variant="inverted" withArrow>
                Erstgespräch anfragen
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
