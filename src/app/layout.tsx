import type { Metadata } from "next";
import "./globals.css";
import { StorefrontProvider } from "@/components/storefront-provider";
import { SiteShell } from "@/components/site-shell";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "NOORE — Where Haya Blooms", template: "%s | NOORE" },
  description: "A first look at NOORE’s hijab-only collection in development. Browse clearly labelled sample hijab styles.",
  openGraph: {
    title: "NOORE — Where Haya Blooms",
    description: "A first look at NOORE’s hijab-only collection in development.",
    siteName: "NOORE",
    type: "website",
  },
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><StorefrontProvider><SiteShell>{children}</SiteShell></StorefrontProvider></body></html>;
}
