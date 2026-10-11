import type { MetadataRoute } from "next";
import { categories, products } from "@/data/catalogue";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  return [
    "", "/shop", "/about", "/contact", "/shipping", "/returns", "/privacy", "/terms",
    ...categories.map((category) => `/collections/${category.slug}`),
    ...products.map((product) => `/products/${product.slug}`),
  ].map((path) => ({ url: `${base}${path}`, lastModified: new Date("2026-10-11") }));
}
