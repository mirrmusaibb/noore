"use client";

import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

const INTRO_KEY = "noore-brand-intro-seen-v1";

export function BrandIntro() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    try {
      const timer = window.setTimeout(() => window.sessionStorage.setItem(INTRO_KEY, "1"), 2400);
      return () => window.clearTimeout(timer);
    } catch {
      return;
    }
  }, []);

  const enter = () => {
    try { window.sessionStorage.setItem(INTRO_KEY, "1"); } catch { /* Session storage is optional. */ }
    document.documentElement.classList.add("noore-intro-seen");
    setVisible(false);
  };

  if (!visible) return null;

  return <section className="brand-intro" aria-label="NOORE, Where Haya Blooms">
    <svg className="intro-botanical intro-botanical-left" viewBox="0 0 280 360" aria-hidden="true">
      <path d="M24 338C93 252 103 188 163 110c30-39 65-64 104-78" />
      <path d="M72 279c-43-3-63-31-67-68 40 4 66 25 67 68Zm39-61c-5-43 16-69 53-84 1 41-15 69-53 84Zm31-51c-37-20-47-54-34-93 30 25 41 56 34 93Zm-64 99c14-40 45-55 86-47-18 35-47 52-86 47Z" />
      <path d="M72 279 4 211m107 7 31-51m21-49 38-38m-99 136-27 49" />
      <path className="intro-flower" d="M199 71c-22-19-17-42 1-57 15 18 16 38-1 57Zm3 0c18-23 41-20 57-3-17 17-37 20-57 3Zm-2 2c22 17 20 40 4 57-18-16-22-36-4-57Zm-3-1c-17 22-40 20-57 3 15-18 35-22 57-3Z" />
      <circle cx="198" cy="72" r="5" />
    </svg>
    <svg className="intro-botanical intro-botanical-right" viewBox="0 0 310 390" aria-hidden="true">
      <path d="M20 370c81-99 107-177 155-248 34-49 70-85 127-108" />
      <path d="M68 310c-40-13-52-45-47-83 38 13 59 41 47 83Zm48-74c4-42 31-62 70-67-8 40-31 64-70 67Zm34-57c-30-29-30-64-7-97 22 32 24 64 7 97Zm-69 96c24-34 58-40 96-21-27 29-59 39-96 21Z" />
      <path d="M68 310 21 227m95 9 30-57m40-68 58-41m-163 163-34 40" />
      <path className="intro-flower" d="M231 73c-24-16-22-40-6-58 18 15 22 35 6 58Zm3 0c15-25 39-26 57-11-14 19-34 26-57 11Zm-1 3c25 15 26 39 11 57-19-14-26-34-11-57Zm-4-1c-15 25-39 26-57 11 14-19 34-26 57-11Z" />
      <circle cx="231" cy="75" r="5" />
    </svg>
    <div className="intro-frame" aria-hidden="true"><span /><span /><span /><span /></div>
    <div className="brand-intro-content">
      <span className="intro-kicker">A study in grace and bloom</span>
      <Image className="intro-logo" src="/images/noore-logo-dark.webp" alt="NOORE — Where Haya Blooms" width={1063} height={590} priority sizes="(max-width: 640px) 90vw, 78vw" />
      <a className="intro-enter" href="#brand-statement" onClick={enter}>Discover NOORE <ArrowDown size={15} strokeWidth={1.5} /></a>
    </div>
    <span className="intro-index" aria-hidden="true">01 <i /> 02</span>
  </section>;
}
