import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocalServicePage } from "@/components/sections/local-service-page";
import { getLocalSeoPage, localCities } from "@/lib/local-seo";

type PageProps = {
  params: Promise<{ city: string }>;
};

export function generateStaticParams() {
  return localCities.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = await params;
  const page = getLocalSeoPage("webdesign", city);

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: page.href },
    openGraph: {
      title: `${page.title} · Schurz Marketing`,
      description: page.description,
      url: page.href,
      images: [
        {
          url: page.service.image.src,
          width: 1448,
          height: 1086,
          alt: page.service.image.alt,
        },
      ],
    },
  };
}

export default async function WebdesignCityPage({ params }: PageProps) {
  const { city } = await params;
  const page = getLocalSeoPage("webdesign", city);

  if (!page) {
    notFound();
  }

  return <LocalServicePage page={page} />;
}
