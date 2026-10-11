import Link from "next/link";

export default function AccountProfilePreviewPage() {
  return <section className="collection-page page-gutter"><div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><Link href="/account">Account</Link><span>/</span><span>Profile</span></div><div className="simple-page-heading"><span className="eyebrow">Customer profile · preview</span><h1>Your details,<br /><em>when ready.</em></h1><p>No profile information is stored in this frontend draft.</p></div><div className="policy-panel"><h2>Account service not connected</h2><p>Profile name, email and preferences will be supplied and managed through a secure commerce account integration.</p><Link className="underlined-link" href="/account">Back to account <span>↗</span></Link></div></section>;
}
