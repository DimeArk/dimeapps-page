import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.dimeapps.com",
      lastModified: new Date("2026-07-01"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.dimeapps.com/apps/cddg",
      lastModified: new Date("2026-07-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://www.dimeapps.com/apps/scoobs-live",
      lastModified: new Date("2026-07-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://www.dimeapps.com/privacy",
      lastModified: new Date("2026-11-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://www.dimeapps.com/billing",
      lastModified: new Date("2026-11-01"),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: "https://www.dimeapps.com/apps/vizalyze",
      lastModified: new Date("2026-07-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
