import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";

const collectionLinks = [
  ["Hijabs", "/collections/hijabs"],
  ["Abayas", "/collections/abayas"],
  ["Shop all", "/shop"],
] as const;

export function SiteFooter() {
  return <footer className="site-footer">
    <div className="footer-signoff"><span className="eyebrow">NOORE</span><p>Where Haya Blooms.</p><Link className="footer-back-top" href="/#brand-statement">Return to the beginning <ArrowUpRight size={15} /></Link></div>
    <div className="footer-main">
      <div className="footer-brand"><Link className="brand-lockup" href="/" aria-label="NOORE — Where Haya Blooms"><BrandMark variant="dark" /></Link><p>Quietly considered. Naturally in bloom.</p></div>
      <div className="footer-column"><h3>Collections</h3>{collectionLinks.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div>
      <div className="footer-column"><h3>NOORE</h3><Link href="/about">Our story</Link><Link href="/contact">Contact</Link><Link href="/wishlist">Wishlist</Link></div>
      <div className="footer-column"><h3>Information</h3><Link href="/shipping">Shipping</Link><Link href="/returns">Returns</Link><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} NOORE</span><span>Where Haya Blooms</span></div>
  </footer>;
}
