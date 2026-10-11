import type { Metadata } from "next";
import Link from "next/link";
import { categories } from "@/data/catalogue";
import { ProductImage } from "@/components/product-image";

export const metadata: Metadata = { title: "Our story", description: "NOORE’s first collection is focused on hijabs, with abayas planned as the only future category extension." };

export default function AboutPage() {
  return <section className="about-page page-gutter"><div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><span>Our story</span></div><div className="about-heading"><span className="eyebrow">NOORE · Where Haya Blooms</span><h1>A thoughtful idea,<br /><em>still becoming.</em></h1><p>NOORE is currently a hijab-only marketplace. This first storefront draft is a place to explore the feeling of the brand while its products and practical details take shape. Abayas are the only category planned for a future extension.</p></div><div className="about-image"><ProductImage image={categories[0].image} category="hijabs" /><span>Original abstract artwork · no model imagery</span></div><div className="about-note"><span className="eyebrow">A note on what’s here</span><p>The people, dates, materials and history behind NOORE have not been supplied for this draft, so we have not invented them. The products and copy shown are fictional hijab development samples.</p><Link className="underlined-link" href="/shop">Browse sample hijabs <span>↗</span></Link></div></section>;
}
