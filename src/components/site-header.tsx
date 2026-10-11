"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Search, ShoppingBag, Menu, X, UserRound, Heart } from "lucide-react";
import { useStorefront } from "@/components/storefront-provider";
import { BrandMark } from "@/components/brand-mark";

const links = [
  { href: "/shop", label: "Shop hijabs" },
  { href: "/about", label: "Our story" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const { cartCount, openCart } = useStorefront();
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery] = useState("");
  const submitSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    setSearchOpen(false);
    setMobileOpen(false);
  };

  return <>
    <div className="announcement"><span>A first look at NOORE</span><span className="announcement-divider">·</span><span>Sample catalogue preview</span></div>
    <header className="site-header">
      <div className="header-main">
        <Link className="brand-lockup" href="/" aria-label="NOORE — Where Haya Blooms">
          <BrandMark priority />
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined}>{link.label}</Link>)}
        </nav>
        <div className="header-actions">
          <button className="header-icon" aria-label="Search hijabs" aria-expanded={searchOpen} onClick={() => setSearchOpen((open) => !open)}><Search size={19} strokeWidth={1.5} /></button>
          <Link className="header-icon account-action" href="/account" aria-label="Account preview"><UserRound size={19} strokeWidth={1.5} /></Link>
          <Link className="header-icon wishlist-action" href="/wishlist" aria-label="Wishlist"><Heart size={19} strokeWidth={1.5} /></Link>
          <button className="header-icon bag-action" type="button" onClick={openCart} aria-label={`Shopping bag, ${cartCount} items`}><ShoppingBag size={19} strokeWidth={1.5} /><span className="bag-count">{cartCount}</span></button>
          <button className="header-icon mobile-menu-trigger" type="button" onClick={() => setMobileOpen((open) => !open)} aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen}>{mobileOpen ? <X size={21} /> : <Menu size={21} />}</button>
        </div>
      </div>
      {searchOpen && <div className="search-row"><form className="search-form" onSubmit={submitSearch} role="search">
        <Search size={18} aria-hidden="true" /><label className="sr-only" htmlFor="site-search">Search hijabs</label>
        <input autoFocus id="site-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search hijabs and colours…" />
        <button className="text-button" type="submit">Search</button>
        <button className="icon-button" type="button" aria-label="Close search" onClick={() => setSearchOpen(false)}><X size={18} /></button>
      </form></div>}
      {mobileOpen && <div className="mobile-menu">
        <form className="mobile-search" onSubmit={submitSearch} role="search"><Search size={17} /><input aria-label="Search hijabs" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search hijabs and colours" /><button aria-label="Submit search"><span className="sr-only">Search</span><Search size={17} /></button></form>
        <nav aria-label="Mobile navigation">{links.map((link) => <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>{link.label}<span>↗</span></Link>)}<Link href="/account" onClick={() => setMobileOpen(false)}>Account preview<span>↗</span></Link><Link href="/wishlist" onClick={() => setMobileOpen(false)}>Wishlist<span>↗</span></Link></nav>
      </div>}
    </header>
  </>;
}
