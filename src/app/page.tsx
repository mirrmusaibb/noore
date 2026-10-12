import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { categories, products } from "@/data/catalogue";
import { ProductImage } from "@/components/product-image";
import { CollectionCarousel } from "@/components/collection-carousel";
import { ProductCarousel } from "@/components/product-carousel";

export const metadata: Metadata = {
  title: { absolute: "NOORE — Where Haya Blooms" },
  description: "Explore NOORE: considered hijab and abaya collections framed by botanical detail and quiet, editorial design.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const hijabs = products.filter((product) => product.category === "hijabs");
  const hijabCollection = categories.find((category) => category.slug === "hijabs")!;
  const abayaCollection = categories.find((category) => category.slug === "abayas")!;
  const selected = products.filter((product) => product.featured).slice(0, 8);
  return <>
    <section className="brand-statement page-gutter" id="brand-statement">
      <div className="brand-statement-copy">
        <span className="eyebrow"><i className="eyebrow-line" /> NOORE · A considered collection</span>
        <h1>Where Haya<br /><em>Blooms.</em></h1>
        <p>An edit of hijabs and abayas, gathered around a quieter expression of personal style.</p>
        <Link className="button button-primary" href="/shop">Explore the collections <ArrowUpRight size={16} /></Link>
        <span className="brand-statement-note">Hijabs <i /> Abayas</span>
      </div>
      <div className="brand-statement-art"><ProductImage image={hijabCollection.image} category="hijabs" className="statement-image" /><span className="statement-caption">A study in bloom <i /> NOORE</span></div>
      <span className="statement-vertical" aria-hidden="true">WHERE HAYA BLOOMS</span>
    </section>

    <section className="collection-spotlight page-gutter" aria-labelledby="hijab-edit-heading">
      <div className="spotlight-heading">
        <div><span className="eyebrow">01 · The collection</span><h2 id="hijab-edit-heading">The hijab <em>edit.</em></h2><p>Considered colour, softened by botanical linework.</p></div>
        <Link className="underlined-link" href="/collections/hijabs">Explore hijabs <span>↗</span></Link>
      </div>
      <ProductCarousel products={hijabs} label="Hijab collection" />
    </section>

    <section className="collections-section page-gutter" aria-labelledby="collections-heading">
      <div className="section-heading">
        <div><span className="eyebrow">Two considered collections</span><h2 id="collections-heading">Find your <em>own way.</em></h2></div>
        <p>Two collections, each with its own rhythm and botanical study.</p>
      </div>
      <CollectionCarousel collections={categories} />
    </section>

    <section className="selected-section page-gutter" aria-labelledby="selected-heading">
      <div className="section-heading">
        <div><span className="eyebrow">A little of each</span><h2 id="selected-heading">Selected <em>pieces.</em></h2></div>
        <Link className="underlined-link" href="/shop">View all pieces <span>↗</span></Link>
      </div>
      <ProductCarousel products={selected} label="Selected pieces" />
    </section>

    <section className="story-editorial page-gutter" aria-labelledby="story-heading">
      <div className="story-editorial-art"><ProductImage image={abayaCollection.image} category="abayas" /><svg className="story-flower-mark" viewBox="0 0 80 80" aria-hidden="true"><path d="M40 12c4 11 7 14 18 18-11 4-14 7-18 18-4-11-7-14-18-18 11-4 14-7 18-18Z" /><path d="M40 27c3 7 6 10 13 13-7 3-10 6-13 13-3-7-6-10-13-13 7-3 10-6 13-13Z" /></svg></div>
      <div className="story-editorial-copy"><span className="eyebrow">The idea behind NOORE</span><h2 id="story-heading">Modesty, with<br /><em>room to bloom.</em></h2><p>A visual language shaped by our name and floral mark: soft lines, considered tones and space for your own sense of style.</p><Link className="underlined-link" href="/about">A little about NOORE <span>↗</span></Link></div>
    </section>

    <section className="brand-closing page-gutter" aria-labelledby="closing-heading">
      <svg className="closing-botanical" viewBox="0 0 320 380" aria-hidden="true"><path d="M35 360C125 260 146 162 272 26M85 300c-50-4-73-37-75-80 47 7 74 33 75 80Zm43-71c-7-50 18-82 61-98 3 48-16 80-61 98Zm-20 31c21-44 58-60 105-48-26 38-61 55-105 48Zm61-101c-42-23-54-62-38-107 35 28 48 64 38 107Z" /><path d="M85 300 10 220m118 9 18-70m-38 101 47-79" /></svg>
      <span className="eyebrow">A quieter kind of statement</span>
      <h2 id="closing-heading">Where Haya <em>Blooms.</em></h2>
      <Link className="button button-light" href="/shop">Enter the collection <ArrowUpRight size={16} /></Link>
    </section>
  </>;
}
