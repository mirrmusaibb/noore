"use client";

import Link from "next/link";
import { products } from "@/data/catalogue";
import { formatPrice } from "@/lib/format";
import { useStorefront } from "@/components/storefront-provider";

export default function CheckoutPage() {
  return <CheckoutContent />;
}

function CheckoutContent() {
  const { cart, subtotal } = useStorefront();
  return <section className="checkout-page page-gutter">
    <div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><Link href="/cart">Your bag</Link><span>/</span><span>Checkout</span></div>
    <div className="checkout-header"><div><span className="eyebrow">Order details</span><h1>Review your <em>selection.</em></h1><p>Check your pieces before continuing.</p></div><span className="checkout-step">01 <span>—</span> 02</span></div>
    <div className="checkout-grid">
      <section className="checkout-form checkout-availability"><span className="eyebrow">Secure checkout</span><h2>Orders are not open through this page.</h2><p>A payment partner and delivery service have not been connected, so we cannot accept an order or request personal details here.</p><p>Your bag remains saved in this browser. No payment or order has been created.</p><Link className="button button-outline" href="/cart">Return to your bag</Link></section>
      <aside className="checkout-summary"><span className="eyebrow">Your selection</span><h2>Your bag <span>({cart.reduce((total, item) => total + item.quantity, 0)})</span></h2>{cart.length ? <div className="checkout-lines">{cart.map((line) => { const product = products.find((item) => item.id === line.productId); if (!product) return null; return <div key={`${line.productId}:${line.variantId}`} className="checkout-line"><span>{line.quantity} × {product.name}</span><strong>{formatPrice(product.price * line.quantity)}</strong></div>; })}</div> : <p>Your bag is empty. <Link href="/shop">Explore the collections</Link></p>}<div className="summary-row"><span>Subtotal</span><strong>{formatPrice(subtotal)}</strong></div><p>Delivery and taxes are not included here.</p></aside>
    </div>
  </section>;
}
