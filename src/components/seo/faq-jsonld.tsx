import { serializeJsonLd } from "@/lib/json-ld";

/**
 * FAQPage-JSON-LD aus einer Frage/Antwort-Liste (gleiche Struktur wie die
 * sichtbaren FAQ-Akkordeons). Als Server-Komponente direkt in eine Seite
 * einsetzbar.
 */
export function FaqJsonLd({ items }: { items: { q: string; a: string }[] }) {
  if (!items.length) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
    />
  );
}
