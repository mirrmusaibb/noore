import Link from "next/link";

export default function NotFound() {
  return <section className="empty-state not-found"><span className="eyebrow">404 · Not found</span><h1>This page hasn’t<br /><em>come into bloom.</em></h1><p>The page may have moved, or it may not be part of the NOORE collection.</p><Link className="button button-primary" href="/">Return home</Link></section>;
}
