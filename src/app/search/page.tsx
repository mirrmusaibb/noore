import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/data/catalogue";
import { ProductGrid } from "@/components/product-grid";

export const metadata: Metadata = { title: "Search the sample catalogue", description: "Search sample NOORE styles." };
type Props = { searchParams: Promise<{ q?: string }> };

export default async function SearchPage({ searchParams }: Props) {
  const { q = "" } = await searchParams;
  const query = q.trim();
  const normalized = query.toLowerCase();
  const matches = normalized ? products.filter((item) => [item.name, item.description, item.category, item.sku, ...item.colours].join(" ").toLowerCase().includes(normalized)) : [];
  return <section className="collection-page page-gutter">
    <div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><span>Search</span></div>
    <div className="search-page-heading"><span className="eyebrow">Search NOORE</span><h1>{query ? <>Results for <em>“{query}”</em></> : <>Find a <em>sample style.</em></>}</h1><p>{query ? `${matches.length} sample ${matches.length === 1 ? "style" : "styles"} found.` : "Enter a product, colour or category in the search field above."}</p></div>
    {query ? <ProductGrid products={matches} /> : <div className="empty-state"><span className="eyebrow">Try a search</span><h2>Rose, olive, blue…</h2><p>Search hijab names and sample colour labels.</p><Link className="button button-outline" href="/shop">Browse hijabs</Link></div>}
  </section>;
}
