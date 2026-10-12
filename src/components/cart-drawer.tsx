"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { Minus, Plus, ShoppingBag, X } from "lucide-react";
import { products } from "@/data/catalogue";
import { formatPrice } from "@/lib/format";
import { ProductImage } from "@/components/product-image";
import { useStorefront } from "@/components/storefront-provider";

export function CartDrawer() {
  const { cart, cartOpen, closeCart, setQuantity, removeFromCart, subtotal } = useStorefront();
  const dialogRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!cartOpen) return;
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    closeButtonRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") { event.preventDefault(); closeCart(); return; }
      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>('button:not(:disabled), a[href], input:not(:disabled), select:not(:disabled), [tabindex="0"]'));
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => { document.removeEventListener("keydown", onKeyDown); previousFocus?.focus(); };
  }, [cartOpen, closeCart]);
  if (!cartOpen) return null;
  return <div className="drawer-backdrop" onClick={closeCart}>
    <section className="cart-drawer" ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="cart-drawer-title" onClick={(event) => event.stopPropagation()}>
      <div className="drawer-head"><div><span className="eyebrow">Your selection</span><h2 id="cart-drawer-title">Your bag <span>({cart.reduce((total, item) => total + item.quantity, 0)})</span></h2></div><button className="icon-button" ref={closeButtonRef} onClick={closeCart} aria-label="Close bag"><X size={21} /></button></div>
      {cart.length === 0 ? <div className="drawer-empty"><ShoppingBag size={27} strokeWidth={1.3} /><h3>Your bag is waiting.</h3><p>Choose a piece to begin.</p><Link className="button button-primary" href="/shop" onClick={closeCart}>Explore the collections</Link></div> : <>
        <div className="drawer-lines">{cart.map((line) => {
          const product = products.find((item) => item.id === line.productId);
          const variant = product?.variants.find((item) => item.id === line.variantId);
          if (!product || !variant) return null;
          return <div className="cart-line" key={`${line.productId}:${line.variantId}`}>
            <Link href={`/products/${product.slug}`} onClick={closeCart}><ProductImage image={product.images[0]} category={product.category} /></Link>
            <div className="cart-line-copy"><Link className="product-name" href={`/products/${product.slug}`} onClick={closeCart}>{product.name}</Link><span>{line.quantity} × {formatPrice(product.price)}</span><strong>{formatPrice(product.price * line.quantity)} <small>line total</small></strong>
              <div className="quantity-stepper"><button type="button" aria-label={`Decrease ${product.name} quantity`} onClick={() => setQuantity(product.id, variant.id, line.quantity - 1)}><Minus size={13} /></button><span>{line.quantity}</span><button type="button" aria-label={`Increase ${product.name} quantity`} onClick={() => setQuantity(product.id, variant.id, line.quantity + 1)}><Plus size={13} /></button><button className="remove-line" type="button" onClick={() => removeFromCart(product.id, variant.id)}>Remove</button></div>
            </div>
          </div>;
        })}</div>
        <div className="drawer-total"><span>Subtotal</span><strong>{formatPrice(subtotal)}</strong></div>
        <p className="fine-print">Delivery and taxes are not included here.</p>
        <Link className="button button-primary drawer-checkout" href="/checkout" onClick={closeCart}>Continue to checkout</Link>
        <button className="button-link" type="button" onClick={closeCart}>Continue browsing</button>
      </>}
    </section>
  </div>;
}
