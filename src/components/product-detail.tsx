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
  const firstAvailable = product.variants.find((variant) => variant.available) ?? product.variants[0];
  const [variantId, setVariantId] = useState(firstAvailable?.id ?? "");
  const [imageIndex, setImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [openPanel, setOpenPanel] = useState("description");
  const variant = product.variants.find((item) => item.id === variantId);
  const saved = wishlist.includes(product.id);
  const related = useMemo(() => products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 4), [product]);

  return <div className="product-detail-page">
    <div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><Link href={`/collections/${product.category}`}>{categoryLabel(product.category)}</Link><span>/</span><span>{product.name}</span></div>
    <div className="product-detail-grid">
      <div className="gallery-column">
        <div className="detail-main-image"><ProductImage image={product.images[imageIndex]} category={product.category} className="detail-image" /><span className="sample-image-label">Artwork placeholder · illustrative colour</span></div>
        {product.images.length > 1 && <div className="gallery-thumbnails" aria-label="Hijab artwork studies">{product.images.map((image, index) => <button type="button" key={image.id} aria-label={`Show artwork study ${index + 1}`} aria-pressed={imageIndex === index} onClick={() => setImageIndex(index)}><ProductImage image={image} category={product.category} /></button>)}</div>}
      </div>
      <section className="product-detail-copy">
        <span className="eyebrow">{categoryLabel(product.category)} · Development sample</span>
        <h1>{product.name}</h1>
        <p className="detail-price">{formatPrice(product.price)} <span>sample price</span></p>
        <p className="sample-callout">This is fictional catalogue data. The visuals are abstract artwork placeholders and do not show a model or a real product.</p>
        <div className="product-stock"><span className={product.stockStatus === "in-stock" ? "stock-dot" : "stock-dot is-off"} />{product.stockStatus === "in-stock" ? "Sample option availability shown" : "Sample item shown as unavailable"}</div>
        <fieldset className="variant-picker"><legend>Sample colour</legend><div className="selected-colour"><span className="colour-swatch" style={{ backgroundColor: colourHex(product.colours[0]) }} />{variant?.colour ?? product.colours[0]}</div><p className="fine-print">One size · Sample variant</p></fieldset>
        <div className="detail-actions"><div className="quantity-control"><button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} aria-label="Decrease quantity"><Minus size={15} /></button><span>{quantity}</span><button type="button" onClick={() => setQuantity((value) => Math.min(10, value + 1))} aria-label="Increase quantity"><Plus size={15} /></button></div><button className="button button-primary add-button" type="button" disabled={!variant?.available} onClick={() => variant && addToCart(product.id, variant.id, quantity)}>{variant?.available ? "Add sample to bag" : "Unavailable"}</button><button className={`icon-button detail-wishlist ${saved ? "is-saved" : ""}`} type="button" aria-label={saved ? "Remove from wishlist" : "Save to wishlist"} aria-pressed={saved} onClick={() => toggleWishlist(product.id)}><Heart size={18} fill={saved ? "currentColor" : "none"} /></button></div>
        <p className="checkout-note">Checkout is a visual preview. No order or payment is created.</p>
        <div className="accordion-list">{[
          ["description", "Description", product.description],
          ["details", "Details", "Material, dimensions and care information have not been supplied by NOORE."],
          ["delivery", "Delivery & returns", "Shipping arrangements and the return policy are still to be confirmed by the business."],
          ["reviews", "Reviews", "No customer reviews have been collected for this sample catalogue."],
        ].map(([id, title, body]) => <div className="accordion-item" key={id}><button type="button" aria-expanded={openPanel === id} onClick={() => setOpenPanel(openPanel === id ? "" : id)}><span>{title}</span><span aria-hidden="true">{openPanel === id ? "−" : "+"}</span></button>{openPanel === id && <p>{body}</p>}</div>)}</div>
      </section>
    </div>
    <section className="related-products section-block"><div className="section-heading"><div><span className="eyebrow">Continue exploring</span><h2>More in {categoryLabel(product.category).toLowerCase()}</h2></div><Link className="underlined-link" href={`/collections/${product.category}`}>View collection <span>↗</span></Link></div><ProductGrid products={related} /></section>
  </div>;
}

function colourHex(colour: string) {
  const map: Record<string, string> = { Rose: "#b7848a", Olive: "#686b4c", Ink: "#26242a", Blush: "#ddbab7", Cocoa: "#785f51", Blue: "#556c8a", Sand: "#c8b79f", Berry: "#783344", Ivory: "#ede5d8", Forest: "#34463b", Midnight: "#272936", Burgundy: "#68283c", Stone: "#9c948c", Black: "#292727", Moss: "#68725a", Plum: "#645160" };
  return map[colour] ?? "#827468";
}
