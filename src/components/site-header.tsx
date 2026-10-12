"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Search, ShoppingBag, Menu, X, Heart } from "lucide-react";
import { useStorefront } from "@/components/storefront-provider";
import { BrandMark } from "@/components/brand-mark";

const links = [
  { href: "/collections/hijabs", label: "Hijabs" },
  { href: "/collections/abayas", label: "Abayas" },
  { href: "/shop", label: "All pieces" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const { cartCount, openCart } = useStorefront();
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!mobileOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [mobileOpen]);

  const submitSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    setSearchOpen(false);
    setMobileOpen(false);
  };

  return <header className="site-header">
    <div className="header-main">
      <Link className="brand-lockup" href="/" aria-label="NOORE — Where Haya Blooms"><BrandMark variant="dark" priority /></Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {links.map((link) => <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined}>{link.label}</Link>)}
      </nav>
      <div className="header-actions">
        <button className="header-icon" aria-label="Search NOORE" aria-expanded={searchOpen} onClick={() => setSearchOpen((open) => !open)}><Search size={19} strokeWidth={1.5} /></button>
        <Link className="header-icon wishlist-action" href="/wishlist" aria-label="Wishlist"><Heart size={19} strokeWidth={1.5} /></Link>
        <button className="header-icon bag-action" type="button" onClick={openCart} aria-label={`Shopping bag, ${cartCount} items`}><ShoppingBag size={19} strokeWidth={1.5} /><span className="bag-count">{cartCount}</span></button>
        <button className="header-icon mobile-menu-trigger" type="button" onClick={() => setMobileOpen((open) => !open)} aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen}>{mobileOpen ? <X size={21} /> : <Menu size={21} />}</button>
      </div>
    </div>
    {searchOpen && <div className="search-row"><form className="search-form" onSubmit={submitSearch} role="search">
      <Search size={18} aria-hidden="true" /><label className="sr-only" htmlFor="site-search">Search pieces and collections</label>
      <input autoFocus id="site-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search pieces and collections…" />
      <button className="text-button" type="submit">Search</button>
      <button className="icon-button" type="button" aria-label="Close search" onClick={() => setSearchOpen(false)}><X size={18} /></button>
    </form></div>}
    {mobileOpen && <div className="mobile-menu">
      <form className="mobile-search" onSubmit={submitSearch} role="search"><Search size={17} aria-hidden="true" /><input aria-label="Search pieces and collections" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search NOORE" /><button aria-label="Submit search"><span className="sr-only">Search</span><Search size={17} /></button></form>
      <nav aria-label="Mobile navigation">{links.map((link) => <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} aria-current={pathname === link.href ? "page" : undefined}>{link.label}<span aria-hidden="true">↗</span></Link>)}<Link href="/wishlist" onClick={() => setMobileOpen(false)}>Wishlist<span aria-hidden="true">↗</span></Link></nav>
    </div>}
  </header>;
}
