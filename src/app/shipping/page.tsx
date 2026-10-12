import Link from "next/link";

export default function ShippingPage() {
  return <section className="collection-page page-gutter"><div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><span>Shipping</span></div><div className="simple-page-heading"><span className="eyebrow">NOORE · Delivery</span><h1>Getting it<br /><em>to you.</em></h1><p>Delivery options and charges will be confirmed here before orders are accepted.</p></div><div className="policy-panel"><h2>Delivery information</h2><p>No delivery time, service area or shipping charge is promised on this page. The checkout will show confirmed details once delivery service is connected.</p><Link className="underlined-link" href="/contact">Customer care <span>↗</span></Link></div></section>;
}
