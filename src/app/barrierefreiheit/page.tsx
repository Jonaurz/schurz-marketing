import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Barrierefreiheit",
  description:
    "Informationen zur Barrierefreiheit der Website von Schurz Marketing sowie Kontaktmöglichkeit für Feedback.",
  alternates: { canonical: "/barrierefreiheit" },
  robots: { index: false, follow: true },
};

export default function AccessibilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Barrierefreiheit"
        title="Informationen zur Zugänglichkeit dieser Website."
        subtitle="Schurz Marketing möchte diese Website so zugänglich wie möglich bereitstellen. Hinweise zu Barrieren können jederzeit gemeldet werden."
      />

      <Section spacing="tight" aria-label="Barrierefreiheitserklärung">
        <Container>
          <div className="legal mx-auto max-w-3xl">
            <p>
              <strong>Stand:</strong> 12. Juni 2026
            </p>

            <h2>Beschreibung der Dienstleistung</h2>
            <p>
              Schurz Marketing bietet Informationen und Kontaktmöglichkeiten zu
              Webdesign, Website-Erstellung und Social-Media-Betreuung. Über diese
              Website können Besucherinnen und Besucher die Leistungen ansehen,
              Referenzen lesen, Kontakt aufnehmen und eine Anfrage vorbereiten.
            </p>

            <h2>Stand der Barrierefreiheit</h2>
            <p>
              Diese Website orientiert sich an den Anforderungen der WCAG in den
              Konformitätsstufen A und AA sowie an den für Webinhalte einschlägigen
              Anforderungen der EN 301 549. Ziel ist, dass Inhalte ohne besondere
              Erschwernis auffindbar, zugänglich und nutzbar sind.
            </p>
            <p>
              Die Website nutzt semantische HTML-Strukturen, Skip-Link, Landmarks,
              sichtbare Formularbeschriftungen, aussagekräftige Alternativtexte,
              ausreichende Kontraste, sichtbare Fokuszustände, Tastaturbedienbarkeit,
              mobile Darstellung und reduzierte Bewegungsdarstellung für Nutzerinnen
              und Nutzer, die dies im System eingestellt haben.
            </p>

            <h2>Bekannte Einschränkungen</h2>
            <p>
              Die Inhalte werden regelmäßig geprüft und weiterentwickelt. Bei der
              letzten Prüfung wurden Kontrast, Listenstruktur, Dialog-Fokusführung und
              Formular-Fehlermeldungen überarbeitet. Sollten trotzdem einzelne Inhalte
              oder Funktionen nicht vollständig zugänglich sein, werden sie nach
              Bekanntwerden schnellstmöglich verbessert oder in einer geeigneten
              alternativen Form bereitgestellt.
            </p>

            <h2>Feedback und Kontakt</h2>
            <p>
              Wenn Ihnen eine Barriere auffällt oder Sie Informationen in einer anderen
              Form benötigen, melden Sie sich bitte per E-Mail an{" "}
              <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>.
            </p>
            <p>
              Bitte nennen Sie möglichst die betroffene Seite, das Problem und das Gerät
              beziehungsweise die eingesetzte Hilfstechnologie. So lässt sich die Stelle
              gezielt prüfen.
            </p>

            <h2>Prüfung und Weiterentwicklung</h2>
            <p>
              Neben automatischen Prüfungen werden Tastaturbedienung, Zoom-Verhalten,
              mobile Darstellung und Kontraste manuell kontrolliert. Änderungen an Design
              oder Inhalten werden auch auf Barrierefreiheit geprüft.
            </p>

            <h2>Zuständige Marktüberwachungsstelle</h2>
            <p>
              Zuständig für die Marktüberwachung nach dem Barrierefreiheitsstärkungsgesetz
              ist die Marktüberwachungsstelle der Länder für die Barrierefreiheit von
              Produkten und Dienstleistungen (MLBF AöR), Carl-Miller-Str. 6, 39112
              Magdeburg. Telefon: +49 391 289 230 23, E-Mail:{" "}
              <a href="mailto:kontakt@mlbf-barrierefrei.de">
                kontakt@mlbf-barrierefrei.de
              </a>
              . Weitere Informationen finden Sie unter{" "}
              <a href="https://mlbf-barrierefrei.de/" rel="noreferrer" target="_blank">
                mlbf-barrierefrei.de
              </a>
              .
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
