"use client";

import Link from "next/link";
import { Minus, Plus, ShoppingBag, X } from "lucide-react";
import { products } from "@/data/catalogue";
import { formatPrice } from "@/lib/format";
import { ProductImage } from "@/components/product-image";
import { useStorefront } from "@/components/storefront-provider";

export default function CartPage() {
  const { cart, hydrated, setQuantity, removeFromCart, subtotal } = useStorefront();
  return <section className="cart-page page-gutter">
    <div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><span>Your bag</span></div>
    <div className="simple-page-heading"><span className="eyebrow">Your selection</span><h1>Your <em>bag.</em></h1></div>
    {!hydrated ? <p className="loading-note">Loading your bag…</p> : cart.length === 0 ? <div className="empty-state"><ShoppingBag size={28} strokeWidth={1.3} /><h2>Your bag is waiting.</h2><p>Choose a piece to begin.</p><Link className="button button-primary" href="/shop">Explore the collections</Link></div> : <div className="full-cart-grid">
      <div className="full-cart-lines">{cart.map((line) => {
        const product = products.find((item) => item.id === line.productId);
        const variant = product?.variants.find((item) => item.id === line.variantId);
        if (!product || !variant) return null;
        return <article className="full-cart-line" key={`${line.productId}:${line.variantId}`}>
          <Link href={`/products/${product.slug}`}><ProductImage image={product.images[0]} category={product.category} /></Link>
          <div className="full-cart-copy"><span className="eyebrow">{product.category}</span><Link className="product-name" href={`/products/${product.slug}`}>{product.name}</Link><span>{line.quantity} × {formatPrice(product.price)}</span><strong>{formatPrice(product.price * line.quantity)} <small>line total</small></strong><div className="quantity-stepper"><button type="button" aria-label={`Decrease ${product.name} quantity`} onClick={() => setQuantity(product.id, variant.id, line.quantity - 1)}><Minus size={13} /></button><span>{line.quantity}</span><button type="button" aria-label={`Increase ${product.name} quantity`} onClick={() => setQuantity(product.id, variant.id, line.quantity + 1)}><Plus size={13} /></button></div></div>
          <button className="icon-button" type="button" onClick={() => removeFromCart(product.id, variant.id)} aria-label={`Remove ${product.name}`}><X size={18} /></button>
        </article>;
      })}</div>
      <aside className="order-summary"><span className="eyebrow">At a glance</span><h2>Order summary</h2><div className="summary-row"><span>Subtotal</span><strong>{formatPrice(subtotal)}</strong></div><p>Delivery and taxes are not included here. Your bag is saved in this browser.</p><Link className="button button-primary button-full" href="/checkout">Continue to checkout</Link><Link className="underlined-link" href="/shop">Continue browsing <span>↗</span></Link></aside>
    </div>}
  </section>;
}
