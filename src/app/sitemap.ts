import type { MetadataRoute } from "next";
import { localSeoPages } from "@/lib/local-seo";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: { path: string; priority: number; changeFrequency: "monthly" | "yearly" }[] = [
    { path: "", priority: 1, changeFrequency: "monthly" },
    { path: "/webdesign", priority: 0.9, changeFrequency: "monthly" },
    { path: "/handwerker", priority: 0.9, changeFrequency: "monthly" },
    { path: "/social-media", priority: 0.9, changeFrequency: "monthly" },
    { path: "/ueber-mich", priority: 0.7, changeFrequency: "yearly" },
    { path: "/kontakt", priority: 0.8, changeFrequency: "yearly" },
  ];

  const localRoutes = localSeoPages.map((page) => ({
    path: page.href,
    priority: 0.75,
    changeFrequency: "monthly" as const,
  }));

  return [...routes, ...localRoutes].map((route) => ({
    url: `${site.url}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
