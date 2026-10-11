"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import type { Product } from "@/types/commerce";
import { categoryLabel } from "@/data/catalogue";
import { formatPrice } from "@/lib/format";
import { ProductImage } from "@/components/product-image";
import { useStorefront } from "@/components/storefront-provider";

export function ProductCard({ product, quickAdd = false }: { product: Product; quickAdd?: boolean }) {
  const { wishlist, toggleWishlist, addToCart } = useStorefront();
  const saved = wishlist.includes(product.id);
  const availableVariant = product.variants.find((item) => item.available);
  return (
    <article className="product-card">
      <div className="product-card-media">
        <Link href={`/products/${product.slug}`} aria-label={`View ${product.name}`}>
          <ProductImage image={product.images[0]} category={product.category} />
        </Link>
        <button
          className={`icon-button wishlist-toggle ${saved ? "is-saved" : ""}`}
          type="button"
          aria-label={saved ? `Remove ${product.name} from wishlist` : `Save ${product.name} to wishlist`}
          aria-pressed={saved}
          onClick={() => toggleWishlist(product.id)}
        ><Heart size={17} strokeWidth={1.5} fill={saved ? "currentColor" : "none"} /></button>
        <span className="sample-chip">{product.stockStatus === "out-of-stock" ? "Sold out · sample" : "Sample"}</span>
      </div>
      <div className="product-card-copy">
        <div className="product-card-topline"><span>{categoryLabel(product.category)}</span>{product.newArrival && <span>New</span>}</div>
        <Link className="product-name" href={`/products/${product.slug}`}>{product.name}</Link>
        <span className="product-price">{formatPrice(product.price)} <span className="price-note">sample</span></span>
        {quickAdd && <button className="quick-add-button" type="button" disabled={!availableVariant} onClick={() => availableVariant && addToCart(product.id, availableVariant.id)}>{availableVariant ? "Add sample to bag" : "Unavailable"}</button>}
      </div>
    </article>
  );
}
