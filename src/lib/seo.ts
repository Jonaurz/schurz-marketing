import type { Metadata } from "next";
import { site } from "@/lib/site";

const defaultImage = {
  url: "/images/schurz-marketing-webdesign.png",
  width: 1448,
  height: 1086,
  alt: "Von Schurz Marketing gestaltete Website auf Laptop und Smartphone",
};

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: {
    url: string;
    width: number;
    height: number;
    alt: string;
  };
  robots?: Metadata["robots"];
};

export function createPageMetadata({
  title,
  description,
  path,
  image = defaultImage,
  robots,
}: PageMetadataInput): Metadata {
  const socialTitle = `${title} | ${site.name}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    robots,
    openGraph: {
      type: "website",
      locale: "de_DE",
      siteName: site.name,
      title: socialTitle,
      description,
      url: path,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [image.url],
    },
  };
}
