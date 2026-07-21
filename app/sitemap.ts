import type { MetadataRoute } from "next";

const siteUrl = "https://deepamdryfish.com";

const routes = [
  { path: "", priority: 1, changeFrequency: "weekly" as const },
  { path: "/our-story", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/products", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/products/nethili-anchovy", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/products/karuvadu-dried-fish", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/products/vanjiram-kingfish", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/products/fish-pickle", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/products/other-dry-fish", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/quality", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/recipes", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
