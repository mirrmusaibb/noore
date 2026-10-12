import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { StorefrontProvider } from "@/components/storefront-provider";
import { SiteShell } from "@/components/site-shell";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nooreweb.vercel.app";
const description = "Discover NOORE: Where Haya Blooms. Explore considered hijab and abaya collections in a botanical, editorial setting.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "NOORE — Where Haya Blooms", template: "%s | NOORE" },
  description,
  alternates: { canonical: "/" },
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: "NOORE — Where Haya Blooms",
    description,
    siteName: "NOORE",
    type: "website",
    images: [{ url: "/images/noore-logo-dark.webp", width: 1063, height: 590, alt: "NOORE — Where Haya Blooms" }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><head><Script id="noore-intro-session" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: `try { if (window.sessionStorage.getItem("noore-brand-intro-seen-v1") === "1") document.documentElement.classList.add("noore-intro-seen"); } catch {}` }} /></head><body><StorefrontProvider><SiteShell>{children}</SiteShell></StorefrontProvider></body></html>;
}
