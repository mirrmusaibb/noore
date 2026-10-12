import Link from "next/link";
import { UserRoundPlus } from "lucide-react";

export default function CreateAccountPage() {
  return <section className="account-page page-gutter"><div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><Link href="/account">Account</Link><span>/</span><span>Create account</span></div><div className="account-form-card"><UserRoundPlus size={22} strokeWidth={1.3} /><span className="eyebrow">NOORE · Account</span><h1>A space<br /><em>of your own.</em></h1><p>Account creation is not available through this site. No personal information is collected here.</p><Link className="underlined-link" href="/account">Return to your account <span>↗</span></Link></div></section>;
}
