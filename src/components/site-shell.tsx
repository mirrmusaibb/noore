"use client";

import { usePathname } from "next/navigation";
import { BrandIntro } from "@/components/brand-intro";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CartDrawer } from "@/components/cart-drawer";
import { FeedbackToast } from "@/components/feedback-toast";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    {pathname === "/" && <BrandIntro />}
    <SiteHeader />
    <main id="main-content">{children}</main>
    <SiteFooter />
    <CartDrawer />
    <FeedbackToast />
  </>;
}
