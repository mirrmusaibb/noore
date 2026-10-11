import Link from "next/link";

export default function AccountAddressesPreviewPage() {
  return <section className="collection-page page-gutter"><div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><Link href="/account">Account</Link><span>/</span><span>Addresses</span></div><div className="simple-page-heading"><span className="eyebrow">Saved addresses · preview</span><h1>A delivery place<br /><em>for later.</em></h1><p>No address information is collected or saved here.</p></div><div className="policy-panel"><h2>Address book not connected</h2><p>Customers will manage addresses in their secure account after a commerce backend is selected.</p><Link className="underlined-link" href="/account">Back to account <span>↗</span></Link></div></section>;
}
