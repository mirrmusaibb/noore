import type { Product } from "@/types/commerce";
import { ProductCard } from "@/components/product-card";

export function ProductGrid({ products, quickAdd = false }: { products: Product[]; quickAdd?: boolean }) {
  if (products.length === 0) return <div className="empty-state">
    <span className="eyebrow">A quieter view</span>
    <h2>No pieces match.</h2>
    <p>Adjust the price range to explore more of the collection.</p>
  </div>;
  return <div className="product-grid">{products.map((product) => <ProductCard key={product.id} product={product} quickAdd={quickAdd} />)}</div>;
}
