import Link from "next/link";

export default function AccountAddressesPage() {
  return <section className="collection-page page-gutter"><div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><Link href="/account">Account</Link><span>/</span><span>Addresses</span></div><div className="simple-page-heading"><span className="eyebrow">NOORE · Addresses</span><h1>A delivery place<br /><em>for later.</em></h1><p>Address management is available after secure account access is connected.</p></div><div className="policy-panel"><p>This page does not request or store addresses.</p><Link className="underlined-link" href="/account">Back to account <span>↗</span></Link></div></section>;
}
