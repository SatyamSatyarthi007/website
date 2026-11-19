import { MetadataRoute } from "next";
import { BRAND_CONFIG } from "@/lib/config";
import { PRODUCTS } from "@/data/catalog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = BRAND_CONFIG.url;

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: "2026-10-29",
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/collections`,
      lastModified: "2026-10-29",
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: "2026-10-29",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: "2026-10-29",
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const productPages: MetadataRoute.Sitemap = PRODUCTS.map((product) => ({
    url: `${baseUrl}/collections#${product.id}`,
    lastModified: "2026-10-29",
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticPages, ...productPages];
}
