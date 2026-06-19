import type { Metadata } from "next";
import { IndustryPage } from "@/components/sections/industry-page";
import { getIndustryPage } from "@/lib/industry-pages";

const page = getIndustryPage("webdesign-reinigungsfirmen")!;

export const revalidate = 60;

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: { canonical: `/${page.slug}` },
  openGraph: {
    title: `${page.metaTitle} | Schurz Marketing`,
    description: page.metaDescription,
    url: `/${page.slug}`,
    images: [
      {
        url: "/images/schurz-marketing-webdesign.png",
        width: 1448,
        height: 1086,
        alt: "Webdesign für Reinigungsfirmen von Schurz Marketing",
      },
    ],
  },
};

export default function WebdesignReinigungsfirmenPage() {
  return <IndustryPage page={page} />;
}
