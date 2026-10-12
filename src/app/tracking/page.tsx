import Link from "next/link";
import { PackageSearch } from "lucide-react";

export default function TrackingPage() {
  return <section className="collection-page page-gutter"><div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><Link href="/account">Account</Link><span>/</span><span>Tracking</span></div><div className="simple-page-heading"><PackageSearch size={22} strokeWidth={1.3} /><span className="eyebrow">NOORE · Delivery updates</span><h1>Follow the<br /><em>journey.</em></h1><p>Delivery updates are shared after an order is placed and a carrier reference is available.</p></div><div className="policy-panel"><h2>No tracking details yet</h2><p>This page does not look up or store order references.</p><Link className="underlined-link" href="/shop">Explore the collections <span>↗</span></Link></div></section>;
}
