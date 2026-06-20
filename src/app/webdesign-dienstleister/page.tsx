import type { Metadata } from "next";
import { IndustryPage } from "@/components/sections/industry-page";
import { getIndustryPage } from "@/lib/industry-pages";
import { createPageMetadata } from "@/lib/seo";

const page = getIndustryPage("webdesign-dienstleister")!;

export const revalidate = 60;

export const metadata: Metadata = createPageMetadata({
  title: page.metaTitle,
  description: page.metaDescription,
  path: `/${page.slug}`,
  image: {
    url: "/images/schurz-marketing-webdesign.png",
    width: 1448,
    height: 1086,
    alt: "Webdesign für Dienstleister von Schurz Marketing",
  },
});

export default function WebdesignDienstleisterPage() {
  return <IndustryPage page={page} />;
}
