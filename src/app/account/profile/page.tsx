import Link from "next/link";

export default function AccountProfilePage() {
  return <section className="collection-page page-gutter"><div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><Link href="/account">Account</Link><span>/</span><span>Profile</span></div><div className="simple-page-heading"><span className="eyebrow">NOORE · Profile</span><h1>Your details,<br /><em>in one place.</em></h1><p>Profile settings are available after secure account access is connected.</p></div><div className="policy-panel"><p>This page does not request or store personal profile details.</p><Link className="underlined-link" href="/account">Back to account <span>↗</span></Link></div></section>;
}
