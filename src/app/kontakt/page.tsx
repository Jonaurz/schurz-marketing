import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { PageHero } from "@/components/sections/page-hero";
import { ContactForm } from "@/components/sections/contact-form";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";
import { createCsrfToken } from "@/lib/csrf";
import { createPageMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";

export const metadata: Metadata = createPageMetadata({
  title: "Kontakt",
  description:
    "Kostenloses Erstgespräch zu Webdesign und Social Media anfragen. Persönlich, unverbindlich und direkt mit Jonas Schurz.",
  path: "/kontakt",
});

export default function KontaktPage() {
  const csrfToken = createCsrfToken("contact");

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Start", path: "/" },
          { name: "Kontakt", path: "/kontakt" },
        ]}
      />
      <PageHero
        title="Erzähl mir von deinem Projekt"
        subtitle="Ob Webdesign, Social Media oder beides: Die Anfrage fragt nur ab, was für den nächsten Schritt nötig ist. Ein paar Angaben, abschicken, fertig."
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
