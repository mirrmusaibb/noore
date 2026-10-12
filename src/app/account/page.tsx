import Link from "next/link";
import { ArrowUpRight, UserRound } from "lucide-react";

export default function AccountPage() {
  return <section className="account-page page-gutter">
    <div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><span>Account</span></div>
    <div className="account-hero"><div className="account-mark"><UserRound size={22} strokeWidth={1.3} /></div><span className="eyebrow">NOORE · Customer space</span><h1>Your place<br /><em>with NOORE.</em></h1><p>Secure account sign-in is not available through this site, and no personal account details are requested here.</p><div className="account-actions"><Link className="button button-primary" href="/wishlist">View your wishlist <ArrowUpRight size={16} /></Link><Link className="underlined-link" href="/shop">Explore the collections <span>↗</span></Link></div></div>
    <div className="account-links"><Link href="/orders"><span className="eyebrow">Orders</span><strong>Order history</strong><span>→</span></Link><Link href="/tracking"><span className="eyebrow">Tracking</span><strong>Delivery updates</strong><span>→</span></Link></div>
  </section>;
}
