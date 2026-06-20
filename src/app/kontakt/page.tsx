import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { PageHero } from "@/components/sections/page-hero";
import { ContactForm } from "@/components/sections/contact-form";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";
import { Check } from "@/components/ui/icons";
import { createCsrfToken } from "@/lib/csrf";
import { createPageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

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
        title="Erzähl mir von deinem Projekt."
        subtitle="Ob Webdesign, Social Media oder beides: Die Anfrage fragt nur ab, was für den nächsten Schritt nötig ist. Nach dem Absenden bestätigst du deine E-Mail-Adresse per Link."
      />

      <Section spacing="tight" aria-label="Kontaktformular">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <aside className="lg:col-span-4">
              <h2 className="text-2xl font-semibold text-ink">
                So geht es nach deiner Anfrage weiter.
              </h2>
              <ul className="mt-6 space-y-4">
                {[
                  "Die Anfrage ist unverbindlich und enthält nur die wichtigsten Angaben.",
                  "Du bekommst eine kurze persönliche Rückmeldung statt einer automatischen Verkaufsstrecke.",
                  "Im Erstgespräch schauen wir gemeinsam auf deine aktuelle Website, deine Ziele und den sinnvollen nächsten Schritt.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-ink/75">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 space-y-2 text-sm">
                <a
                  href={`tel:${site.contact.phoneHref}`}
                  className="block font-semibold text-ink underline underline-offset-4 hover:text-accent"
                >
                  {site.contact.phone}
                </a>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="block font-semibold text-ink underline underline-offset-4 hover:text-accent"
                >
                  {site.contact.email}
                </a>
              </div>
            </aside>
            <Reveal className="lg:col-span-8">
              <ContactForm csrfToken={csrfToken} />
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
