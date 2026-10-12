import Link from "next/link";

export default function TermsPage() {
  return <section className="collection-page page-gutter"><div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><span>Terms</span></div><div className="simple-page-heading"><span className="eyebrow">NOORE · Terms</span><h1>Terms of<br /><em>service.</em></h1><p>NOORE’s approved terms will be published here before orders are accepted.</p></div><div className="policy-panel"><h2>Order information</h2><p>No order or payment is created through this website. Product, payment, delivery and returns terms will be provided before online ordering begins.</p><Link className="underlined-link" href="/shop">Return to the collections <span>↗</span></Link></div></section>;
}
