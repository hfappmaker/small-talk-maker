import { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://small-talk-maker.vercel.app";

  // Define all routes
  const routes = [
    "",
    "/about",
    "/privacy",
    "/terms",
    "/contact",
  ];

  // Generate sitemap entries for all locales and routes
  const sitemap: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of routes) {
      sitemap.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "daily" : "weekly",
        priority: route === "" ? 1.0 : 0.8,
      });
    }
  }

  return sitemap;
}
