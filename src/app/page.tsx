import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { categories, products } from "@/data/catalogue";
import { ProductImage } from "@/components/product-image";
import { ProductGrid } from "@/components/product-grid";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function HomePage() {
  const featured = products.filter((product) => product.featured).slice(0, 4);
  return <>
    <section className="hero-section page-gutter">
      <div className="hero-copy">
        <span className="eyebrow"><i className="eyebrow-line" /> A hijab wardrobe, in bloom</span>
        <h1>Where Haya<br /><em>Blooms.</em></h1>
        <p>Meet NOORE’s hijab edit: a considered palette of colours for everyday expression. Every item, price and availability flag is sample data.</p>
        <div className="hero-actions"><Link className="button button-primary" href="/shop">Browse hijabs <ArrowUpRight size={16} /></Link><Link className="underlined-link" href="/about">A little about NOORE <span>↗</span></Link></div>
        <div className="hero-footnote"><span>10 sample styles</span><span>Hijabs only</span></div>
      </div>
      <div className="hero-image-wrap"><ProductImage image={products[4].images[0]} category="hijabs" className="hero-image" /><div className="hero-image-caption"><span>Abstract artwork only</span><span>Hijab edit</span></div></div>
    </section>

    <section className="hijab-collection-section page-gutter section-block">
      <div className="hijab-collection-image"><ProductImage image={categories[0].image} category="hijabs" /></div>
      <div className="hijab-collection-copy"><span className="eyebrow">The NOORE collection</span><h2>One edit.<br /><em>Ten sample hijabs.</em></h2><p>A focused first collection, with colour stories chosen to make everyday styling feel like your own.</p><Link className="button button-primary" href="/collections/hijabs">Explore the hijab edit <ArrowUpRight size={16} /></Link><span className="fine-print">Artwork placeholders only · no model imagery.</span></div>
    </section>

    <section className="featured-section page-gutter section-block">
      <div className="section-heading"><div><span className="eyebrow">A few first notes</span><h2>Selected <em>hijabs.</em></h2></div><Link className="underlined-link" href="/shop">View all 10 sample styles <span>↗</span></Link></div>
      <ProductGrid products={featured} />
    </section>

    <section className="story-section page-gutter">
      <div className="story-image"><ProductImage image={products[0].images[1]} category="hijabs" /><span className="story-image-note">Botanical artwork study · no model imagery</span></div>
      <div className="story-copy"><span className="eyebrow">An idea, taking shape</span><h2>Modesty, with<br /><em>room to bloom.</em></h2><p>NOORE is currently a hijab-only marketplace. This first storefront draft gives the collection a place to grow while its product and business details are confirmed.</p><p>The only product extension planned for the future is abayas.</p><Link className="underlined-link" href="/about">Discover the idea <span>↗</span></Link></div>
    </section>

    <section className="customer-info page-gutter section-block"><div className="info-heading"><span className="eyebrow">Before you browse</span><h2>A first collection,<br /><em>still taking shape.</em></h2></div><div className="info-list"><div><span>01</span><div><h3>Illustrative hijab catalogue</h3><p>Product names, prices, colour options and stock indicators are fictional development data.</p></div></div><div><span>02</span><div><h3>Artwork placeholders only</h3><p>The visuals are original abstract vector studies. No real product photos, people or AI generated models are used.</p></div></div><div><span>03</span><div><h3>Policies to be confirmed</h3><p>Shipping, returns and customer care details will be added when supplied by the business.</p></div></div></div></section>
  </>;
}
