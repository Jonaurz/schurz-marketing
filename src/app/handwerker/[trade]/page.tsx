import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TradePage } from "@/components/sections/trade-page";
import { getTrade, trades } from "@/lib/trades";

type PageProps = {
  params: Promise<{ trade: string }>;
};

export function generateStaticParams() {
  return trades.map((trade) => ({ trade: trade.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { trade: slug } = await params;
  const trade = getTrade(slug);

  if (!trade) {
    return {};
  }

  return {
    title: trade.metaTitle,
    description: trade.metaDescription,
    alternates: { canonical: `/handwerker/${trade.slug}` },
    openGraph: {
      title: `${trade.metaTitle} · Schurz Marketing`,
      description: trade.metaDescription,
      url: `/handwerker/${trade.slug}`,
      images: [
        {
          url: "/images/schurz-marketing-webdesign.png",
          width: 1448,
          height: 1086,
          alt: trade.metaTitle,
        },
      ],
    },
  };
}

export default async function TradeRoutePage({ params }: PageProps) {
  const { trade: slug } = await params;
  const trade = getTrade(slug);

  if (!trade) {
    notFound();
  }

  return <TradePage trade={trade} />;
}
