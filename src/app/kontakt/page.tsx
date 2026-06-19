import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { PageHero } from "@/components/sections/page-hero";
import { ContactForm } from "@/components/sections/contact-form";
import { createCsrfToken } from "@/lib/csrf";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kostenloses Erstgespräch anfragen. Webdesign und Social-Media-Betreuung für Unternehmen, Selbstständige und Marken. Unverbindlich, ehrlich und ohne Verkaufsdruck.",
  alternates: { canonical: "/kontakt" },
  openGraph: {
    title: "Kontakt · Schurz Marketing",
    description: "Kostenloses Erstgespräch anfragen. Unverbindlich und auf Augenhöhe.",
    url: "/kontakt",
    images: [
      {
        url: "/images/schurz-marketing-webdesign.png",
        width: 1448,
        height: 1086,
        alt: "Schurz Marketing, Webdesign und Social-Media-Betreuung",
      },
    ],
  },
};

export default function KontaktPage() {
  const csrfToken = createCsrfToken("contact");

  return (
    <>
      <PageHero
        title="Erzählen Sie mir von Ihrem Projekt."
        subtitle="Ob Webdesign, Social Media oder beides: Die Anfrage fragt nur ab, was für den nächsten Schritt nötig ist. Nach dem Absenden bestätigen Sie Ihre E-Mail-Adresse per Link."
      />

      <Section spacing="tight" aria-label="Kontaktformular">
        <Container>
          <Reveal>
            <ContactForm csrfToken={csrfToken} />
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
