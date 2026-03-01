import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://barbash.in",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://barbash.in/wrapped",
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: "https://barbash.in/pull-ups",
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: "https://barbash.in/hampstead",
      lastModified: new Date(),
      priority: 0.7,
    },
  ];
}
