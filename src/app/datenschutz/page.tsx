import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/sections/page-hero";
import { privacyHtml } from "./privacy-html";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung von Schurz Marketing. Informationen zur Verarbeitung personenbezogener Daten nach DSGVO.",
  alternates: { canonical: "/datenschutz" },
  robots: { index: true, follow: true },
};

export default function DatenschutzPage() {
  return (
    <>
      <PageHero eyebrow="Rechtliches" title="Datenschutzerklärung" />

      <Section spacing="tight" aria-label="Datenschutzerklärung">
        <Container>
          <div className="max-w-3xl">
            <div
              className="legal mt-10"
              dangerouslySetInnerHTML={{ __html: privacyHtml }}
            />
          </div>
        </Container>
      </Section>
    </>
  );
}
