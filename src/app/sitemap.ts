import type { MetadataRoute } from "next";
import { industryPages } from "@/lib/industry-pages";
import { localSeoPages } from "@/lib/local-seo";
import { trades } from "@/lib/trades";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-06-20T00:00:00.000Z");
  const routes: { path: string; priority: number; changeFrequency: "monthly" | "yearly" }[] = [
    { path: "", priority: 1, changeFrequency: "monthly" },
    { path: "/webdesign", priority: 0.9, changeFrequency: "monthly" },
    { path: "/handwerker", priority: 0.9, changeFrequency: "monthly" },
    { path: "/sachsen", priority: 0.8, changeFrequency: "monthly" },
    { path: "/social-media", priority: 0.9, changeFrequency: "monthly" },
    { path: "/ueber-mich", priority: 0.7, changeFrequency: "yearly" },
    { path: "/kontakt", priority: 0.8, changeFrequency: "yearly" },
    { path: "/impressum", priority: 0.3, changeFrequency: "yearly" },
  ];

  const tradeRoutes = trades.map((trade) => ({
    path: `/handwerker/${trade.slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  const industryRoutes = industryPages.map((page) => ({
    path: `/${page.slug}`,
    priority: 0.85,
    changeFrequency: "monthly" as const,
  }));

  const localRoutes = localSeoPages.map((page) => ({
    path: page.href,
    priority: 0.75,
    changeFrequency: "monthly" as const,
  }));

  return [...routes, ...industryRoutes, ...tradeRoutes, ...localRoutes].map((route) => ({
    url: `${site.url}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
