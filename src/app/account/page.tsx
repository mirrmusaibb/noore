import Link from "next/link";
import { ArrowUpRight, UserRound } from "lucide-react";

export default function AccountPage() {
  return <section className="account-page page-gutter">
    <div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><span>Account preview</span></div>
    <div className="account-hero"><div className="account-mark"><UserRound size={22} strokeWidth={1.3} /></div><span className="eyebrow">NOORE · Customer space</span><h1>A place for<br /><em>your NOORE.</em></h1><p>Sign-in and account creation will connect to the selected commerce platform. This preview does not collect passwords or personal account details.</p><div className="account-actions"><Link className="button button-primary" href="/account/sign-in">Sign-in preview <ArrowUpRight size={16} /></Link><Link className="underlined-link" href="/account/create">Create account preview <span>↗</span></Link></div></div>
    <div className="account-links"><Link href="/account/profile"><span className="eyebrow">Profile</span><strong>Your details, when ready</strong><span>→</span></Link><Link href="/account/addresses"><span className="eyebrow">Addresses</span><strong>Saved address space</strong><span>→</span></Link><Link href="/orders"><span className="eyebrow">Orders</span><strong>Sample order experience</strong><span>→</span></Link><Link href="/tracking"><span className="eyebrow">Tracking</span><strong>Carrier connection pending</strong><span>→</span></Link></div>
    <p className="catalogue-disclaimer account-disclaimer"><span>Prototype boundary</span><span>No authentication, account records or customer details are connected.</span></p>
  </section>;
}
