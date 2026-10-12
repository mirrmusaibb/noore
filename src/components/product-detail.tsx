"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Heart, Minus, Plus } from "lucide-react";
import type { Product } from "@/types/commerce";
import { products, categoryLabel } from "@/data/catalogue";
import { formatPrice } from "@/lib/format";
import { ProductImage } from "@/components/product-image";
import { ProductGrid } from "@/components/product-grid";
import { useStorefront } from "@/components/storefront-provider";

export function ProductDetail({ product }: { product: Product }) {
  const { addToCart, wishlist, toggleWishlist } = useStorefront();
  const variant = product.variants[0];
  const [imageIndex, setImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const saved = wishlist.includes(product.id);
  const related = useMemo(() => products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 4), [product]);

  return <div className="product-detail-page">
    <div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><Link href={`/collections/${product.category}`}>{categoryLabel(product.category)}</Link><span>/</span><span>{product.name}</span></div>
    <div className="product-detail-grid">
      <div className="gallery-column">
        <div className="detail-main-image"><ProductImage image={product.images[imageIndex]} category={product.category} className="detail-image" /><span className="image-art-note">NOORE · {categoryLabel(product.category)}</span></div>
        {product.images.length > 1 && <div className="gallery-thumbnails" aria-label={`${product.name} artwork views`}>{product.images.map((image, index) => <button type="button" key={image.id} aria-label={`Show artwork view ${index + 1}`} aria-pressed={imageIndex === index} onClick={() => setImageIndex(index)}><ProductImage image={image} category={product.category} /></button>)}</div>}
      </div>
      <section className="product-detail-copy">
        <span className="eyebrow">{categoryLabel(product.category)}</span>
        <h1>{product.name}</h1>
        <p className="detail-price">{formatPrice(product.price)}</p>
        <p className="detail-description">{product.description}</p>
        <div className="detail-actions"><div className="quantity-control"><button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} aria-label="Decrease quantity"><Minus size={15} /></button><span>{quantity}</span><button type="button" onClick={() => setQuantity((value) => Math.min(10, value + 1))} aria-label="Increase quantity"><Plus size={15} /></button></div><button className="button button-primary add-button" type="button" onClick={() => addToCart(product.id, variant.id, quantity)}>Add to bag</button><button className={`icon-button detail-wishlist ${saved ? "is-saved" : ""}`} type="button" aria-label={saved ? "Remove from wishlist" : "Save to wishlist"} aria-pressed={saved} onClick={() => toggleWishlist(product.id)}><Heart size={18} fill={saved ? "currentColor" : "none"} /></button></div>
        <p className="checkout-note">Payment and delivery are confirmed before an order is placed.</p>
      </section>
    </div>
    <section className="related-products section-block"><div className="section-heading"><div><span className="eyebrow">Continue exploring</span><h2>More in <em>{categoryLabel(product.category).toLowerCase()}.</em></h2></div><Link className="underlined-link" href={`/collections/${product.category}`}>View collection <span>↗</span></Link></div><ProductGrid products={related} /></section>
  </div>;
}
