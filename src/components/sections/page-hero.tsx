import { Container } from "../ui/container";
import { Reveal } from "../ui/reveal";

/**
 * Einheitlicher Seitenkopf für Unterseiten: linksbündig, Headline,
 * optionale Einleitung und CTAs. Das eyebrow-Prop wird nur gerendert,
 * wenn es gesetzt ist; auf den meisten Seiten bleibt es leer.
 */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="border-b border-ink/10 pt-16 lg:pt-[4.5rem]">
      <Container>
        <Reveal immediate>
          <div className="max-w-4xl py-14 sm:py-16 lg:py-20">
            {eyebrow && (
              <p className="text-xs font-semibold uppercase tracking-label text-accent">
                {eyebrow}
              </p>
            )}
            <h1 className={`text-balance text-[2.1875rem] leading-[1.04] sm:text-5xl lg:text-6xl ${eyebrow ? "mt-4" : ""}`}>
              {title}
            </h1>
            {subtitle && (
              <p className="mt-6 max-w-[60ch] text-pretty text-lg leading-relaxed text-ink/70">
                {subtitle}
              </p>
            )}
            {children && <div className="mt-9 flex flex-wrap gap-4">{children}</div>}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
