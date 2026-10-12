import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products, productBySlug } from "@/data/catalogue";
import { ProductDetail } from "@/components/product-detail";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return products.map((product) => ({ slug: product.slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = productBySlug(slug);
  return product ? {
    title: product.name,
    description: `${product.description} Discover the ${product.category} edit from NOORE.`,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: { title: `${product.name} | NOORE`, description: product.description },
  } : {};
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = productBySlug(slug);
  if (!product) notFound();
  return <ProductDetail product={product} />;
}
