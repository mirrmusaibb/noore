import type { Product } from "@/types/commerce";
import { ProductCard } from "@/components/product-card";

export function ProductGrid({ products, quickAdd = false }: { products: Product[]; quickAdd?: boolean }) {
  if (products.length === 0) return <div className="empty-state">
    <span className="eyebrow">Nothing here yet</span>
    <h2>No sample styles match.</h2>
    <p>Try changing a filter or clearing your search.</p>
  </div>;
  return <div className="product-grid">{products.map((product) =>
    <ProductCard key={product.id} product={product} quickAdd={quickAdd} />
  )}</div>;
}
