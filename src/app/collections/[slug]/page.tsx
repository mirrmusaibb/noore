import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { catalogueCounts, categories, products } from "@/data/catalogue";
import { CollectionExplorer, type CollectionFilters } from "@/components/collection-explorer";
import { ProductImage } from "@/components/product-image";

type Params = { slug: string };
type Props = { params: Promise<Params>; searchParams: Promise<Record<string, string | string[] | undefined>> };

export function generateStaticParams() {
  return categories.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((item) => item.slug === slug);
  return category ? { title: `${category.title} sample collection`, description: `${category.description} Browse clearly labelled NOORE sample data.`, alternates: { canonical: `/collections/${category.slug}` } } : {};
}

function first(value: string | string[] | undefined) { return Array.isArray(value) ? value[0] : value; }

export default async function CategoryPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const query = await searchParams;
  const category = categories.find((item) => item.slug === slug);
  if (!category) notFound();
  const items = products.filter((product) => product.category === category.slug);
  const count = catalogueCounts[category.slug];
  const requestedSort = first(query.sort);
  const initialFilters: Partial<CollectionFilters> = {
    sort: ["featured", "price-low", "price-high", "newest"].includes(requestedSort ?? "") ? requestedSort as CollectionFilters["sort"] : "featured",
    colour: first(query.colour) ?? "all",
    size: first(query.size) ?? "all",
    availability: first(query.availability) ?? "all",
    maxPrice: Math.max(500, Math.min(3000, Number(first(query.maxPrice)) || 3000)),
  };
  return <section className="collection-page page-gutter">
    <div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><Link href="/shop">Shop</Link><span>/</span><span>{category.title}</span></div>
    <div className="category-collection-hero"><div className="collection-intro"><span className="eyebrow">NOORE · Collection {String(categories.indexOf(category) + 1).padStart(2, "0")}</span><h1>{category.title}<br /><em>for your own way.</em></h1><p>{category.description}</p><span className="collection-product-count">{count} fictional sample styles</span></div><div className="category-collection-image"><ProductImage image={category.image} category={category.slug} /></div></div>
    <div className="catalogue-disclaimer"><span>Sample catalogue</span><p>Prices, colourways and availability are illustrative. Product visuals are abstract artwork placeholders only.</p></div>
    <CollectionExplorer products={items} initialFilters={initialFilters} />
  </section>;
}
