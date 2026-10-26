import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/sections/page-hero";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Impressum",
  description:
    "Impressum von Schurz Marketing mit Anbieterkennzeichnung, Kontaktmöglichkeiten und den gesetzlich erforderlichen Angaben gemäß § 5 DDG.",
  path: "/impressum",
  robots: { index: true, follow: true },
});

export default function ImpressumPage() {
  return (
    <>
      <PageHero eyebrow="Rechtliches" title="Impressum" />

      <Section spacing="tight" aria-label="Impressum">
        <Container>
          <div className="legal mx-auto max-w-3xl">
            <p>
              Jonas Schurz Marketing
              <br />
              Jonas Schurz
              <br />
              Goldgruben 6
              <br />
              01855 Sebnitz
            </p>

            <h2>Kontakt</h2>
            <p>
              Telefon: 0152 0426 3490
              <br />
              E-Mail: <a href="mailto:kontakt@schurz-marketing.de">kontakt@schurz-marketing.de</a>
            </p>

            <h2>Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle</h2>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor
              einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
