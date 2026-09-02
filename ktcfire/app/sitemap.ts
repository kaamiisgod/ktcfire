import type { MetadataRoute } from "next";
import { site } from "@/lib/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/services",
    "/portfolio",
    "/about",
    "/team",
    ...(site.inquiriesOpen ? ["/inquiry"] : []),
    "/privacy",
  ];
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1 : route === "/inquiry" ? 0.9 : 0.7,
  }));
}
