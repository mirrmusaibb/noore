import Link from "next/link";

export default function PrivacyPage() {
  return <section className="collection-page page-gutter"><div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><span>Privacy</span></div><div className="simple-page-heading"><span className="eyebrow">Privacy · draft placeholder</span><h1>Your privacy<br /><em>matters.</em></h1><p>A production privacy notice has not been supplied. This page must be reviewed and completed before launch.</p></div><div className="policy-panel"><h2>Details required from NOORE</h2><ul><li>Business identity and contact details</li><li>Customer data collected and purposes</li><li>Processors, commerce provider and retention terms</li><li>Cookie, analytics and marketing choices</li><li>Customer rights and how to contact the business</li></ul><Link className="underlined-link" href="/contact">Contact placeholder <span>↗</span></Link></div></section>;
}
