"use client";

import Link from "next/link";
import { useRef } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import type { ProductCategory, ProductImage } from "@/types/commerce";
import { ProductImage as Artwork } from "@/components/product-image";

type Collection = { slug: ProductCategory; title: string; description: string; image: ProductImage };

export function CollectionCarousel({ collections }: { collections: Collection[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const move = (direction: -1 | 1) => trackRef.current?.scrollBy({ left: direction * (trackRef.current.clientWidth * 0.72), behavior: "smooth" });
  const handleKey = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    move(event.key === "ArrowLeft" ? -1 : 1);
  };

  return <div className="editorial-carousel-wrap">
    <div className="carousel-controls" aria-label="Collection carousel controls">
      <button className="carousel-control" type="button" aria-label="Previous collections" onClick={() => move(-1)}><ArrowLeft size={17} /></button>
      <button className="carousel-control" type="button" aria-label="Next collections" onClick={() => move(1)}><ArrowRight size={17} /></button>
    </div>
    <div className="collection-carousel" ref={trackRef} role="region" aria-label="Shop by collection" tabIndex={0} onKeyDown={handleKey}>
      {collections.map((collection, index) => <article className={`collection-tile collection-tile-${collection.slug}`} key={collection.slug}>
        <Link href={`/collections/${collection.slug}`} className="collection-tile-link" aria-label={`Explore ${collection.title}`}>
          <Artwork image={collection.image} category={collection.slug} className="collection-tile-art" />
          <span className="collection-tile-index">0{index + 1}</span>
          <div className="collection-tile-copy"><span className="eyebrow">The collection</span><h3>{collection.title}</h3><p>{collection.description}</p><span className="collection-tile-cta">Explore <ArrowUpRight size={15} /></span></div>
        </Link>
      </article>)}
    </div>
    <p className="carousel-hint">Swipe to explore <span aria-hidden="true">→</span></p>
  </div>;
}
