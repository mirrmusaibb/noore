import Link from "next/link";
import { LockKeyhole } from "lucide-react";

export default function SignInPage() {
  return <section className="account-page page-gutter"><div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><Link href="/account">Account</Link><span>/</span><span>Sign in</span></div><div className="account-form-card"><LockKeyhole size={22} strokeWidth={1.3} /><span className="eyebrow">NOORE · Account</span><h1>Sign in to<br /><em>your account.</em></h1><p>Secure sign-in is not available through this site. No password or personal information is requested here.</p><Link className="underlined-link" href="/account">Return to your account <span>↗</span></Link></div></section>;
}
