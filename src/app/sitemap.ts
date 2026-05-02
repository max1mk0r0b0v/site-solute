import type { MetadataRoute } from "next";

import { navItems, siteConfig } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return navItems.map((item) => ({
    url: new URL(item.href, siteConfig.url).toString(),
    lastModified: new Date(),
    changeFrequency: item.href === "/" ? "weekly" : "monthly",
    priority: item.href === "/" ? 1 : 0.7,
  }));
}
