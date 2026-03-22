import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://barbash.in",
      lastModified: new Date("2026-03-22"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://barbash.in/wrapped",
      lastModified: new Date("2025-12-31"),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: "https://barbash.in/pull-ups",
      lastModified: new Date("2025-06-01"),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: "https://barbash.in/hampstead",
      lastModified: new Date("2026-03-01"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
