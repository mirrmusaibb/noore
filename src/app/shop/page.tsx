import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/data/catalogue";
import { CollectionExplorer, type CollectionFilters } from "@/components/collection-explorer";

export const metadata: Metadata = {
  title: "Shop hijab samples",
  description: "Browse NOORE’s hijab-only sample catalogue.",
  alternates: { canonical: "/shop" },
};

function first(value: string | string[] | undefined) { return Array.isArray(value) ? value[0] : value; }

export default async function ShopPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const query = await searchParams;
  const requestedSort = first(query.sort);
  const initialFilters: Partial<CollectionFilters> = {
    sort: ["featured", "price-low", "price-high", "newest"].includes(requestedSort ?? "") ? requestedSort as CollectionFilters["sort"] : "featured",
    colour: first(query.colour) ?? "all",
    size: first(query.size) ?? "all",
    availability: first(query.availability) ?? "all",
    maxPrice: Math.max(500, Math.min(3000, Number(first(query.maxPrice)) || 3000)),
  };
  return <section className="collection-page page-gutter">
    <div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><span>Shop hijabs</span></div>
    <div className="collection-intro"><span className="eyebrow">NOORE · Hijab collection</span><h1>A first look at<br /><em>the hijab edit.</em></h1><p>Ten fictional hijab styles in a considered palette. Prices and availability are illustrative development data.</p></div>
    <div className="catalogue-disclaimer"><span>Preview catalogue</span><p>Product visuals are abstract artwork placeholders only. No real photos or model imagery are used.</p></div>
    <CollectionExplorer products={products} initialFilters={initialFilters} />
  </section>;
}
