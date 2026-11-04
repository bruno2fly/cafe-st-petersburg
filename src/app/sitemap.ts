import type { MetadataRoute } from "next";
import { siteData } from "@/lib/site-data";
import { getUpcomingEvents } from "@/lib/events-data";

// Rebuilt every 12 hours, so past events drop out automatically.
export const revalidate = 43200;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteData.siteUrl;
  const pages: { path: string; freq: "weekly" | "monthly" | "yearly"; priority: number }[] = [
    { path: "/", freq: "weekly", priority: 1.0 },
    { path: "/menu", freq: "monthly", priority: 0.9 },
    { path: "/events", freq: "weekly", priority: 0.8 },
    { path: "/tasting", freq: "monthly", priority: 0.7 },
    { path: "/our-story", freq: "yearly", priority: 0.6 },
    { path: "/catering", freq: "monthly", priority: 0.7 },
    { path: "/banquet", freq: "monthly", priority: 0.7 },
    { path: "/brunch", freq: "monthly", priority: 0.7 },
  ];
  const now = new Date();
  return [
    ...pages.map((p) => ({
      url: `${base}${p.path === "/" ? "/" : p.path}`,
      lastModified: now,
      changeFrequency: p.freq,
      priority: p.priority,
    })),
    ...getUpcomingEvents().map((e) => ({
      url: `${base}/events/${e.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: e.featured ? 0.8 : 0.5,
    })),
  ];
}
