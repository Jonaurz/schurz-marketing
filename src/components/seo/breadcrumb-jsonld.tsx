import { site } from "@/lib/site";
import { JsonLd } from "@/components/seo/json-ld";

/** BreadcrumbList-JSON-LD. Pfade relativ zur Domain angeben (z. B. "/handwerker"). */
export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };

  return <JsonLd data={jsonLd} />;
}
