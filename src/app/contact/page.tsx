import Link from "next/link";
import { Mail } from "lucide-react";

export default function ContactPage() {
  return <section className="collection-page page-gutter"><div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><span>Contact</span></div><div className="simple-page-heading"><Mail size={22} strokeWidth={1.3} /><span className="eyebrow">NOORE · Customer care</span><h1>We’re here<br /><em>to listen.</em></h1><p>Customer care details will be published here before orders are accepted.</p></div><div className="policy-panel"><h2>Until then</h2><p>Explore the collections and save pieces to your wishlist on this device.</p><Link className="underlined-link" href="/shop">Browse the edit <span>↗</span></Link></div></section>;
}
