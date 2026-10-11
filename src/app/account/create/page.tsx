import Link from "next/link";
import { UserRoundPlus } from "lucide-react";

export default function CreateAccountPreviewPage() {
  return <section className="account-page page-gutter"><div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><Link href="/account">Account</Link><span>/</span><span>Create account preview</span></div><div className="account-form-card"><UserRoundPlus size={22} strokeWidth={1.3} /><span className="eyebrow">A future customer space</span><h1>Create an<br /><em>account.</em></h1><p>Account creation is not available until a secure commerce identity provider is connected. This preview does not collect customer details.</p><button className="button button-primary" type="button" disabled>Account creation unavailable</button><Link className="underlined-link" href="/account">Return to account preview <span>↗</span></Link></div></section>;
}
