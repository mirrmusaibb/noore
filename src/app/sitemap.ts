import type { MetadataRoute } from "next";
import { categories, products } from "@/data/catalogue";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nooreweb.vercel.app";
  const lastModified = new Date();
  return [
    "", "/shop", "/about",
    ...categories.map((category) => `/collections/${category.slug}`),
    ...products.map((product) => `/products/${product.slug}`),
  ].map((path) => ({ url: `${base}${path}`, lastModified }));
}
