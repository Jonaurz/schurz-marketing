import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TradePage } from "@/components/sections/trade-page";
import { getTrade, trades } from "@/lib/trades";
import { createPageMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ trade: string }>;
};

/* Inhalte (Referenzen/Kundenstimmen) liegen im data-Volume und werden
   zur Laufzeit gelesen; bis zu 60 s zwischengespeichert. */
export const revalidate = 60;

export function generateStaticParams() {
  return trades.map((trade) => ({ trade: trade.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { trade: slug } = await params;
  const trade = getTrade(slug);

  if (!trade) {
    return {};
  }

  return createPageMetadata({
    title: trade.metaTitle,
    description: trade.metaDescription,
    path: `/handwerker/${trade.slug}`,
    image: {
      url: "/images/schurz-marketing-webdesign.png",
      width: 1448,
      height: 1086,
      alt: trade.metaTitle,
    },
  });
}

export default async function TradeRoutePage({ params }: PageProps) {
  const { trade: slug } = await params;
  const trade = getTrade(slug);

  if (!trade) {
    notFound();
  }

  return <TradePage trade={trade} />;
}
