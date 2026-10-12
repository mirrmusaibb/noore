import Link from "next/link";
import { PackageCheck } from "lucide-react";

export default function OrdersPage() {
  return <section className="collection-page page-gutter">
    <div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><Link href="/account">Account</Link><span>/</span><span>Orders</span></div>
    <div className="simple-page-heading"><PackageCheck size={22} strokeWidth={1.3} /><span className="eyebrow">NOORE · Order history</span><h1>Your orders,<br /><em>in one place.</em></h1><p>Order history will appear here after secure account access and ordering are available.</p></div>
    <div className="empty-state"><h2>No orders to show.</h2><p>No order has been placed through this website.</p><Link className="button button-primary" href="/shop">Explore the collections</Link></div>
  </section>;
}
