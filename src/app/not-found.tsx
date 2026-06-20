import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Seite nicht gefunden",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="pt-16 lg:pt-[4.5rem]">
      <Container>
        <div className="mx-auto max-w-3xl py-24 sm:py-32">
          <p className="text-sm font-semibold text-accent">Fehler 404</p>
          <h1 className="mt-4 text-balance text-4xl sm:text-5xl">
            Diese Seite gibt es nicht mehr oder die Adresse ist falsch.
          </h1>
          <p className="mt-6 max-w-[58ch] text-pretty text-lg leading-relaxed text-ink/70">
            Über die Startseite findest du alle Leistungen, Branchen und regionalen
            Seiten. Wenn du ein konkretes Projekt besprechen möchtest, kannst du direkt
            Kontakt aufnehmen.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="/" size="lg" withArrow>
              Zur Startseite
            </Button>
            <Button href="/kontakt" size="lg" variant="secondary">
              Kontakt aufnehmen
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
