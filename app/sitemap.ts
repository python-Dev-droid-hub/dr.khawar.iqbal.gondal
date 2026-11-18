import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

/** Sitemap limited to pages with updated SEO metadata. */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/reviews", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
  ].map((route) => ({
    url: absoluteUrl(route.path || "/"),
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
