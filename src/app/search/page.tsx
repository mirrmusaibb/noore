import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/data/catalogue";
import { ProductGrid } from "@/components/product-grid";

export const metadata: Metadata = { title: "Search NOORE", description: "Search NOORE collections and pieces." };
type Props = { searchParams: Promise<{ q?: string }> };

export default async function SearchPage({ searchParams }: Props) {
  const { q = "" } = await searchParams;
  const query = q.trim();
  const normalized = query.toLowerCase();
  const matches = normalized ? products.filter((item) => [item.name, item.description, item.category, item.sku].join(" ").toLowerCase().includes(normalized)) : [];
  return <section className="collection-page page-gutter">
    <div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><span>Search</span></div>
    <div className="search-page-heading"><span className="eyebrow">Search NOORE</span><h1>{query ? <>Results for <em>“{query}”</em></> : <>Find your <em>piece.</em></>}</h1><p>{query ? `${matches.length} ${matches.length === 1 ? "piece" : "pieces"} found.` : "Enter a style name or collection in the search field above."}</p></div>
    {query ? <ProductGrid products={matches} /> : <div className="empty-state"><span className="eyebrow">Explore the edit</span><h2>Hijabs and abayas.</h2><p>Search across both NOORE collections.</p><Link className="button button-outline" href="/shop">Browse all pieces</Link></div>}
  </section>;
}
