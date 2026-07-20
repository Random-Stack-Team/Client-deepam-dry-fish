import type { MetadataRoute } from "next";

const routes = [
  "",
  "/our-story",
  "/products",
  "/products/nethili-anchovy",
  "/products/masi-dry-fish",
  "/products/vanjiram-kingfish",
  "/products/fish-pickle",
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
