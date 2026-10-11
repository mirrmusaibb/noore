import Link from "next/link";

export default function ShippingPage() {
  return <section className="collection-page page-gutter"><div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><span>Shipping information</span></div><div className="simple-page-heading"><span className="eyebrow">Delivery · details to be confirmed</span><h1>Getting it<br /><em>to you.</em></h1><p>Shipping prices, service areas and delivery estimates have not been approved for this storefront draft.</p></div><div className="policy-panel"><h2>Information still required</h2><ul><li>Shipping carrier and service levels</li><li>Fees, free-shipping conditions and tax treatment</li><li>Dispatch and estimated delivery language</li><li>Serviceability checks across India</li><li>Lost, delayed or damaged parcel process</li></ul><p>The live checkout should confirm serviceability and charges through the selected shipping provider.</p></div></section>;
}
