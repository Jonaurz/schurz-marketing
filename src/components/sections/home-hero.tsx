import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Container } from "../ui/container";
import { Reveal } from "../ui/reveal";

export function HomeHero() {
  return (
    <section className="border-b border-ink/10 pt-16 lg:pt-[4.5rem]">
      <Container>
        <div className="grid items-center gap-12 py-14 sm:py-16 lg:grid-cols-12 lg:gap-10 lg:py-20">
          <div className="lg:col-span-6">
            <Reveal immediate>
              <h1 className="text-balance text-4xl leading-[1.04] sm:text-5xl lg:text-[3.6rem]">
                Webdesign und Social Media für Unternehmen, die online besser gefunden werden wollen.
              </h1>
            </Reveal>
            <Reveal immediate delay={0.08}>
              <p className="mt-6 max-w-[52ch] text-pretty text-lg leading-relaxed text-ink/70">
                Schurz Marketing erstellt klare Webseiten und Social-Media-Inhalte für
                Unternehmen, Dienstleister, Selbstständige und Handwerksbetriebe in
                Sachsen und deutschlandweit.
              </p>
            </Reveal>
            <Reveal immediate delay={0.16}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Button href="/kontakt" size="lg" withArrow>
                  Kostenloses Erstgespräch anfragen
                </Button>
                <Link
                  href="#leistungen"
                  className="text-sm font-medium text-ink/70 underline underline-offset-8 transition-colors duration-300 ease-out hover:text-ink"
                >
                  Leistungen ansehen
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal immediate>
              <figure className="relative">
                <Image
                  src="/images/hero-marketing-ergebnisse.webp"
                  alt="Website-Projekt von Schurz Marketing auf Laptop und Smartphone"
                  width={1448}
                  height={1086}
                  priority
                  fetchPriority="high"
                  sizes="(min-width: 1024px) 38rem, 100vw"
                  className="h-auto w-full"
                />
              </figure>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
