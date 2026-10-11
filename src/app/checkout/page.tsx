"use client";

import Link from "next/link";
import { useState } from "react";
import { products } from "@/data/catalogue";
import { formatPrice } from "@/lib/format";
import { useStorefront } from "@/components/storefront-provider";

export default function CheckoutPage() {
  const { cart, subtotal } = useStorefront();
  const [message, setMessage] = useState("");
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("Preview only. Your details were not sent and no order or payment was created.");
  };
  return <section className="checkout-page page-gutter">
    <div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><Link href="/cart">Your bag</Link><span>/</span><span>Checkout preview</span></div>
    <div className="checkout-header"><div><span className="eyebrow">Frontend preview · no payment connection</span><h1>Checkout <em>preview.</em></h1><p>Explore the address and order layout. Nothing is submitted or saved.</p></div><span className="checkout-step">01 <span>—</span> 03</span></div>
    <div className="checkout-grid">
      <form className="checkout-form" onSubmit={submit}>
        <fieldset><legend><span>01</span> Contact</legend><label>Email address<input type="email" autoComplete="email" placeholder="you@example.com" required /></label><label>Phone number <span className="optional">optional</span><input type="tel" autoComplete="tel" placeholder="For delivery coordination" /></label></fieldset>
        <fieldset><legend><span>02</span> Delivery address</legend><label>Full name<input type="text" autoComplete="name" required /></label><label>Address line<input type="text" autoComplete="address-line1" required /></label><label>Apartment, suite or landmark <span className="optional">optional</span><input type="text" autoComplete="address-line2" /></label><div className="form-row"><label>City / town<input type="text" autoComplete="address-level2" required /></label><label>State / union territory<input type="text" autoComplete="address-level1" required /></label></div><div className="form-row"><label>PIN code<input type="text" inputMode="numeric" autoComplete="postal-code" pattern="[0-9]{6}" maxLength={6} placeholder="6 digits" required /></label><label>Country<input type="text" value="India" readOnly /></label></div><p className="fine-print">India address fields are shown for the intended market. Serviceability needs a future carrier check.</p></fieldset>
        <fieldset><legend><span>03</span> Delivery &amp; payment</legend><div className="disabled-choice"><span className="radio-mark" /><div><strong>Options will appear here</strong><p>Shipping rates and payment methods need a connected provider.</p></div></div></fieldset>
        <p className="preview-note"><strong>Nothing is being purchased.</strong> This preview does not send your details, create an order or collect payment information.</p>
        <button className="button button-primary" type="submit" disabled={cart.length === 0}>{cart.length === 0 ? "Add a sample style first" : "Preview form validation"}</button>
        {message && <p className="form-message" role="status">{message}</p>}
      </form>
      <aside className="checkout-summary"><span className="eyebrow">Sample items</span><h2>Your bag <span>({cart.reduce((total, item) => total + item.quantity, 0)})</span></h2>{cart.length ? <div className="checkout-lines">{cart.map((line) => { const product = products.find((item) => item.id === line.productId); if (!product) return null; return <div key={`${line.productId}:${line.variantId}`} className="checkout-line"><span>{line.quantity} × {product.name}</span><strong>{formatPrice(product.price * line.quantity)}</strong></div>; })}</div> : <p>Your bag is empty. <Link href="/shop">Explore styles</Link></p>}<div className="summary-row"><span>Sample subtotal</span><strong>{formatPrice(subtotal)}</strong></div><p>Shipping and tax are not calculated. The final amount would come from a real checkout service.</p></aside>
    </div>
  </section>;
}
