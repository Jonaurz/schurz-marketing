import type { Metadata } from "next";
import { IndustryPage } from "@/components/sections/industry-page";
import { getIndustryPage } from "@/lib/industry-pages";
import { createPageMetadata } from "@/lib/seo";

const page = getIndustryPage("webdesign-reinigungsfirmen")!;

export const revalidate = 60;

export const metadata: Metadata = createPageMetadata({
  title: page.metaTitle,
  description: page.metaDescription,
  path: `/${page.slug}`,
  image: {
    url: "/images/schurz-marketing-webdesign.png",
    width: 1448,
    height: 1086,
    alt: "Webdesign für Reinigungsfirmen von Schurz Marketing",
  },
});

export default function WebdesignReinigungsfirmenPage() {
  return <IndustryPage page={page} />;
}
