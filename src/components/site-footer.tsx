import Link from "next/link";
import { NewsletterForm } from "@/components/newsletter-form";
import { BrandMark } from "@/components/brand-mark";

export function SiteFooter() {
  return <>
    <section className="newsletter-section">
      <div className="newsletter-copy"><span className="eyebrow">Notes from NOORE</span><h2>A little more room<br />for what blooms.</h2><p>Join the list for a first look when the collection is ready.</p></div>
      <NewsletterForm />
    </section>
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand"><Link className="brand-lockup" href="/" aria-label="NOORE — Where Haya Blooms"><BrandMark variant="dark" /></Link><p>A first look at NOORE’s hijab collection in development.</p><span className="placeholder-note">Customer care details to be added before launch.</span></div>
        <div className="footer-column"><h3>Explore</h3><Link href="/shop">Shop hijabs</Link><Link href="/collections/hijabs">Hijab collection</Link></div>
        <div className="footer-column"><h3>NOORE</h3><Link href="/about">Our story</Link><Link href="/contact">Contact placeholder</Link><span className="footer-placeholder">Instagram · link to be supplied</span><Link href="/account">Account preview</Link><Link href="/orders">Order preview</Link></div>
        <div className="footer-column"><h3>Information</h3><Link href="/shipping">Shipping information</Link><Link href="/returns">Returns &amp; refunds</Link><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} NOORE · Frontend preview</span><span>Prices, products and inventory shown are sample data.</span></div>
    </footer>
  </>;
}
