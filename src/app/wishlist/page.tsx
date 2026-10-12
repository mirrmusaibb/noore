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
    <div className="simple-page-heading"><Heart size={19} strokeWidth={1.4} /><span className="eyebrow">Saved for later</span><h1>A little list<br /><em>for you.</em></h1><p>Your wishlist is saved in this browser.</p></div>
    {!hydrated ? <p className="loading-note">Loading your wishlist…</p> : saved.length ? <ProductGrid products={saved} quickAdd /> : <div className="empty-state"><h2>Nothing saved yet.</h2><p>Use the heart on a piece to keep it close.</p><Link className="button button-primary" href="/shop">Explore the collections</Link></div>}
  </section>;
}
