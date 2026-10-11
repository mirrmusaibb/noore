import Link from "next/link";
import { Mail } from "lucide-react";

export default function ContactPage() {
  return <section className="collection-page page-gutter"><div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><span>Contact</span></div><div className="simple-page-heading"><Mail size={22} strokeWidth={1.3} /><span className="eyebrow">We’d love to hear from you</span><h1>Contact<br /><em>NOORE.</em></h1><p>Contact details have not been supplied for this draft. No email address, phone number or social account is invented here.</p></div><div className="policy-panel"><h2>Contact information to add</h2><ul><li>Customer support email</li><li>Business phone or WhatsApp, if approved</li><li>Instagram and other social links</li><li>Business address, if required</li></ul><span className="placeholder-note">Placeholder only — no message can be sent from this preview.</span></div></section>;
}
