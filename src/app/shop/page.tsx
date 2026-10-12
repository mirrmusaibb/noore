import type { Metadata } from "next";
import Link from "next/link";
import { categories, products } from "@/data/catalogue";
import { CollectionExplorer, type CollectionFilters } from "@/components/collection-explorer";

export const metadata: Metadata = {
  title: "Shop the collections",
  description: "Explore the NOORE collections of hijabs and abayas.",
  alternates: { canonical: "/shop" },
};

function first(value: string | string[] | undefined) { return Array.isArray(value) ? value[0] : value; }

export default async function ShopPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const query = await searchParams;
  const requestedSort = first(query.sort);
  const initialFilters: Partial<CollectionFilters> = {
    sort: ["featured", "price-low", "price-high", "name"].includes(requestedSort ?? "") ? requestedSort as CollectionFilters["sort"] : "featured",
    maxPrice: Math.max(500, Math.min(6000, Number(first(query.maxPrice)) || 6000)),
  };
  return <section className="collection-page page-gutter">
    <div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><span>All pieces</span></div>
    <div className="shop-page-intro"><span className="eyebrow">NOORE · Where Haya Blooms</span><h1>The NOORE <em>edit.</em></h1><p>Two collections, considered in colour and framed by botanical detail.</p></div>
    <nav className="collection-tabs" aria-label="Browse collections"><Link className="is-current" href="/shop" aria-current="page">All pieces <span>{products.length}</span></Link>{categories.map((category) => <Link href={`/collections/${category.slug}`} key={category.slug}>{category.title}</Link>)}</nav>
    <CollectionExplorer products={products} initialFilters={initialFilters} />
  </section>;
}
