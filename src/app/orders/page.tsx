import Link from "next/link";
import { ArrowUpRight, PackageCheck } from "lucide-react";

export default function OrdersPage() {
  return <section className="collection-page page-gutter">
    <div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><Link href="/account">Account</Link><span>/</span><span>Orders</span></div>
    <div className="simple-page-heading"><span className="eyebrow">Order history · interface preview</span><h1>Orders, when<br /><em>they arrive.</em></h1><p>The row below is a visual demonstration only. It is not a real NOORE order.</p></div>
    <article className="order-card"><div className="order-card-top"><div><span className="eyebrow">Demonstration order</span><h2>NOORE-DEMO-1042</h2></div><span className="demo-status">Sample data</span></div><div className="order-card-info"><div><span>Placed</span><strong>14 September 2026 · sample date</strong></div><div><span>Items</span><strong>The Noor Modal Hijab × 1<br />The Haya Hijab × 1</strong></div><div><span>Payment</span><strong>Demo only · no payment</strong></div><div><span>Fulfilment</span><strong>No shipment · interface demo</strong></div><div><span>Total</span><strong>₹2,780 · illustrative</strong></div></div><div className="order-card-bottom"><span><PackageCheck size={16} />Tracking is not live</span><Link className="underlined-link" href="/orders/demo-order">View demo details <ArrowUpRight size={15} /></Link></div></article>
    <div className="policy-callout"><p>There are no customer orders in this sample storefront. A real order history will require account authentication and commerce order data.</p></div>
  </section>;
}
