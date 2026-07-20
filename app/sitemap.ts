import type { MetadataRoute } from "next";

const routes = [
  "",
  "/our-story",
  "/products",
  "/products/nethili-dry-fish",
  "/products/karuvadu-dry-fish",
  "/products/vanjiram-dry-fish",
  "/products/fish-pickles",
  "/products/other-dry-fish",
  "/quality",
  "/recipes",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://deepamdryfish.com${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
