import Link from "next/link";
import { LockKeyhole } from "lucide-react";

export default function SignInPreviewPage() {
  return <section className="account-page page-gutter"><div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><Link href="/account">Account</Link><span>/</span><span>Sign-in preview</span></div><div className="account-form-card"><LockKeyhole size={22} strokeWidth={1.3} /><span className="eyebrow">Secure access comes later</span><h1>Sign in to<br /><em>your account.</em></h1><p>Customer authentication is not connected in this frontend draft. No password or personal information is requested here.</p><button className="button button-primary" type="button" disabled>Sign-in unavailable in preview</button><p className="fine-print">The production storefront should use the chosen commerce platform’s account service.</p><Link className="underlined-link" href="/account/create">Need an account? View the creation preview <span>↗</span></Link></div></section>;
}
