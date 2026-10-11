"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { products } from "@/data/catalogue";
import { ProductGrid } from "@/components/product-grid";
import { useStorefront } from "@/components/storefront-provider";

export default function WishlistPage() {
  const { wishlist, hydrated } = useStorefront();
  const saved = products.filter((product) => wishlist.includes(product.id));
  return <section className="collection-page page-gutter">
    <div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><span>Wishlist</span></div>
    <div className="simple-page-heading"><Heart size={19} strokeWidth={1.4} /><span className="eyebrow">Your saved sample styles</span><h1>A little list<br /><em>for later.</em></h1><p>Your wishlist is stored in this browser for this preview.</p></div>
    {!hydrated ? <p className="loading-note">Loading your local wishlist…</p> : saved.length ? <ProductGrid products={saved} quickAdd /> : <div className="empty-state"><h2>Nothing saved yet.</h2><p>Use the heart on a sample style to keep it close.</p><Link className="button button-primary" href="/shop">Explore styles</Link></div>}
  </section>;
}
