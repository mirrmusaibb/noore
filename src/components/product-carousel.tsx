"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Product } from "@/types/commerce";
import { ProductCard } from "@/components/product-card";

export function ProductCarousel({ products, label = "Featured pieces" }: { products: Product[]; label?: string }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const move = (direction: -1 | 1) => trackRef.current?.scrollBy({ left: direction * (trackRef.current.clientWidth * 0.72), behavior: "smooth" });
  const handleKey = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    move(event.key === "ArrowLeft" ? -1 : 1);
  };

  return <div className="editorial-carousel-wrap product-carousel-wrap">
    <div className="carousel-controls" aria-label={`${label} carousel controls`}>
      <button className="carousel-control" type="button" aria-label={`Previous ${label.toLowerCase()}`} onClick={() => move(-1)}><ArrowLeft size={17} /></button>
      <button className="carousel-control" type="button" aria-label={`Next ${label.toLowerCase()}`} onClick={() => move(1)}><ArrowRight size={17} /></button>
    </div>
    <div className="product-carousel" ref={trackRef} role="region" aria-label={label} tabIndex={0} onKeyDown={handleKey}>
      {products.map((product) => <div className="product-carousel-slide" key={product.id}><ProductCard product={product} /></div>)}
    </div>
    <p className="carousel-hint">Swipe to explore <span aria-hidden="true">→</span></p>
  </div>;
}
