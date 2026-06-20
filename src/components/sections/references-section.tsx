import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { getPublicContent } from "@/lib/content";

/**
 * Beweis-Block (Referenzen + Kundenstimmen) als wiederverwendbare
 * Verkaufs-Sektion. Steht im Seitenaufbau direkt nach den Leistungen.
 * Rendert nichts, wenn keine veröffentlichten Inhalte vorhanden sind.
 */
export async function ProofSection({
  title = "Projekte, die ein Problem gelöst haben.",
  intro = "Bei jedem Projekt zählt nicht nur das Ergebnis, sondern die Ausgangslage und der Weg dorthin.",
}: {
  title?: string;
  intro?: string;
} = {}) {
  const { references, testimonials } = await getPublicContent();

  if (references.length === 0 && testimonials.length === 0) return null;

  return (
    <>
      {references.length > 0 ? (
        <Section id="referenzen" aria-label="Referenzen" className="border-t border-ink/10">
          <Container>
            <SectionHeading title={title} intro={intro} />
            <div className="mt-12 space-y-14">
              {references.map((reference) => (
                <Reveal key={reference.id}>
                  <article className="grid gap-8 border-t border-ink/10 pt-10 lg:grid-cols-12 lg:gap-12">
                    <div className="lg:col-span-5">
                      {reference.imageUrl ? (
                        <figure className="relative aspect-[16/10] overflow-hidden">
                          <Image
                            src={reference.imageUrl}
                            alt={reference.imageAlt || reference.title}
                            fill
                            sizes="(min-width: 1024px) 40vw, 100vw"
                            className="object-cover"
                          />
                        </figure>
                      ) : null}
                      <p className="mt-3 text-xs font-semibold uppercase tracking-label text-ink/70">
                        {[reference.sector, reference.region].filter(Boolean).join(" · ")}
                      </p>
                      {reference.mobileImageUrl ? (
                        <figure className="relative mt-5 aspect-[9/16] max-w-48 overflow-hidden border border-ink/10">
                          <Image
                            src={reference.mobileImageUrl}
                            alt={reference.mobileImageAlt || `${reference.title} in der Mobilansicht`}
                            fill
                            sizes="12rem"
                            className="object-cover"
                          />
                        </figure>
                      ) : null}
                    </div>
                    <div className="lg:col-span-7">
                      <h3 className="max-w-3xl text-balance text-xl font-bold tracking-tight sm:text-2xl">
                        {reference.title}
                      </h3>
                      <div className="mt-6 grid gap-6 md:grid-cols-3">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-label text-ink/70">
                            Ausgangslage
                          </p>
                          <p className="mt-2 text-sm leading-relaxed text-ink/70">
                            {reference.problem}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-label text-ink/70">
                            Folge
                          </p>
                          <p className="mt-2 text-sm leading-relaxed text-ink/70">
                            {reference.consequence}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-label text-accent">
                            Lösung
                          </p>
                          <p className="mt-2 text-sm leading-relaxed text-ink/80">
                            {reference.solution}
                          </p>
                        </div>
                      </div>
                      {reference.goal || reference.result || reference.services ? (
                        <dl className="mt-8 grid gap-5 border-t border-ink/10 pt-6 sm:grid-cols-3">
                          {reference.goal ? (
                            <div>
                              <dt className="text-xs font-semibold uppercase tracking-label text-ink/70">
                                Ziel
                              </dt>
                              <dd className="mt-2 text-sm leading-relaxed text-ink/75">
                                {reference.goal}
                              </dd>
                            </div>
                          ) : null}
                          {reference.result ? (
                            <div>
                              <dt className="text-xs font-semibold uppercase tracking-label text-ink/70">
                                Ergebnis
                              </dt>
                              <dd className="mt-2 text-sm leading-relaxed text-ink/75">
                                {reference.result}
                              </dd>
                            </div>
                          ) : null}
                          {reference.services ? (
                            <div>
                              <dt className="text-xs font-semibold uppercase tracking-label text-ink/70">
                                Leistungen
                              </dt>
                              <dd className="mt-2 text-sm leading-relaxed text-ink/75">
                                {reference.services}
                              </dd>
                            </div>
                          ) : null}
                        </dl>
                      ) : null}
                      <Link
                        href="/kontakt"
                        className="mt-8 inline-flex text-sm font-semibold text-ink underline underline-offset-8 transition-colors hover:text-accent"
                      >
                        Ähnliche Webseite anfragen
                      </Link>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      {testimonials.length > 0 ? (
        <Section aria-label="Kundenstimmen" className="border-t border-ink/10">
          <Container>
            <SectionHeading title="Was Kunden über die Zusammenarbeit sagen." />
            <div className="mt-12 grid gap-10 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <Reveal key={testimonial.id} delay={index * 0.05}>
                  <figure className="flex h-full flex-col">
                    <blockquote className="text-pretty text-lg font-semibold leading-snug">
                      &bdquo;{testimonial.quote}&ldquo;
                    </blockquote>
                    {testimonial.result ? (
                      <p className="mt-4 text-sm leading-relaxed text-ink/70">
                        {testimonial.result}
                      </p>
                    ) : null}
                    <figcaption className="mt-auto pt-6 text-sm text-ink/70">
                      {testimonial.author ? (
                        <span className="font-medium text-ink">{testimonial.author}</span>
                      ) : null}
                      {testimonial.role || testimonial.company ? (
                        <span>
                          {testimonial.author ? ", " : ""}
                          {[testimonial.role, testimonial.company].filter(Boolean).join(", ")}
                        </span>
                      ) : null}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}
    </>
  );
}
