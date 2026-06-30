import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.dimeapps.com",
      lastModified: new Date("2025-06-01"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.dimeapps.com/apps/cddg",
      lastModified: new Date("2025-06-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
