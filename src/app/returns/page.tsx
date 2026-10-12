import Link from "next/link";
import { RotateCcw } from "lucide-react";

export default function ReturnsPage() {
  return <section className="collection-page page-gutter"><div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><span>Returns</span></div><div className="simple-page-heading"><RotateCcw size={22} strokeWidth={1.3} /><span className="eyebrow">NOORE · Returns</span><h1>Returns &amp;<br /><em>exchanges.</em></h1><p>The approved return and exchange policy will be published here before orders are accepted.</p></div><div className="policy-panel"><h2>Before placing an order</h2><p>No return eligibility, time limit or refund promise is made on this page. The final policy will explain those terms clearly.</p><Link className="underlined-link" href="/contact">Customer care <span>↗</span></Link></div></section>;
}
