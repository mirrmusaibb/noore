import Link from "next/link";

export default function TermsPage() {
  return <section className="collection-page page-gutter"><div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><span>Terms</span></div><div className="simple-page-heading"><span className="eyebrow">Terms · draft placeholder</span><h1>Terms of<br /><em>service.</em></h1><p>Approved terms have not been supplied. Sample products, prices, availability and checkout in this preview are illustrative only.</p></div><div className="policy-panel"><h2>Information required before launch</h2><ul><li>Seller identity and governing business details</li><li>Order acceptance, pricing and payment terms</li><li>Shipping, returns, exchanges and refunds</li><li>Customer service and dispute process</li><li>Applicable legal review</li></ul><Link className="underlined-link" href="/returns">Returns policy placeholder <span>↗</span></Link></div></section>;
}
