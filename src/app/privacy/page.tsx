import Link from "next/link";

export default function PrivacyPage() {
  return <section className="collection-page page-gutter"><div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><span>Privacy</span></div><div className="simple-page-heading"><span className="eyebrow">NOORE · Privacy</span><h1>Your privacy<br /><em>matters.</em></h1><p>This website does not send account, wishlist or bag details to a NOORE server.</p></div><div className="policy-panel"><h2>What this site stores</h2><p>Your bag and wishlist can be saved in this browser so they remain available on this device. No account, payment or address details are requested on this site.</p><p>A complete privacy notice will be published before any customer information is collected or processed.</p><Link className="underlined-link" href="/contact">Customer care <span>↗</span></Link></div></section>;
}
