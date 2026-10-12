import type { Metadata } from "next";
import Link from "next/link";
import { categories } from "@/data/catalogue";
import { ProductImage } from "@/components/product-image";

export const metadata: Metadata = { title: "Our story", description: "The ideas and visual language behind NOORE — Where Haya Blooms." };

export default function AboutPage() {
  return <section className="about-page page-gutter">
    <div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><span>Our story</span></div>
    <div className="about-heading"><span className="eyebrow">NOORE · Where Haya Blooms</span><h1>A quieter kind<br /><em>of bloom.</em></h1><p>NOORE brings hijabs and abayas together through soft colour, botanical linework and the idea of haya.</p></div>
    <div className="about-image"><ProductImage image={categories[0].image} category="hijabs" /></div>
    <div className="about-note"><span className="eyebrow">The visual language</span><p>Our floral mark, rich burgundy and warm blush set the tone. The collections are designed to leave room for each wearer’s own expression.</p><Link className="underlined-link" href="/shop">Explore the collections <span>↗</span></Link></div>
  </section>;
}
