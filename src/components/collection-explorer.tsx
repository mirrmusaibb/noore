"use client";

import { useEffect, useMemo, useState } from "react";
import type { Product } from "@/types/commerce";
import { ProductGrid } from "@/components/product-grid";

type SortMode = "featured" | "price-low" | "price-high" | "newest";
const MAX_SAMPLE_PRICE = 3000;
export type CollectionFilters = {
  sort: SortMode;
  colour: string;
  size: string;
  availability: string;
  maxPrice: number;
};

export function CollectionExplorer({ products, initialFilters }: { products: Product[]; initialFilters?: Partial<CollectionFilters> }) {
  const [sort, setSort] = useState<SortMode>(initialFilters?.sort ?? "featured");
  const [colour, setColour] = useState(initialFilters?.colour ?? "all");
  const [size, setSize] = useState(initialFilters?.size ?? "all");
  const [availability, setAvailability] = useState(initialFilters?.availability ?? "all");
  const [maxPrice, setMaxPrice] = useState(initialFilters?.maxPrice ?? MAX_SAMPLE_PRICE);
  const [visibleCount, setVisibleCount] = useState(12);

  const colours = Array.from(new Set(products.flatMap((item) => item.colours)));
  const sizes = Array.from(new Set(products.flatMap((item) => item.sizes)));
  const filtered = useMemo(() => {
    const result = products.filter((product) => {
      const matchesColour = colour === "all" || product.colours.includes(colour);
      const matchesSize = size === "all" || product.sizes.includes(size);
      const matchesAvailability = availability === "all" || (availability === "available" ? product.stockStatus === "in-stock" : product.stockStatus === "out-of-stock");
      return matchesColour && matchesSize && matchesAvailability && product.price <= maxPrice;
    });
    if (sort === "price-low") result.sort((a, b) => a.price - b.price);
    if (sort === "price-high") result.sort((a, b) => b.price - a.price);
    if (sort === "newest") result.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
    if (sort === "featured") result.sort((a, b) => Number(b.featured) - Number(a.featured));
    return result;
  }, [products, colour, size, availability, maxPrice, sort]);

  useEffect(() => {
    const params = new URLSearchParams();
    if (sort !== "featured") params.set("sort", sort);
    if (colour !== "all") params.set("colour", colour);
    if (size !== "all") params.set("size", size);
    if (availability !== "all") params.set("availability", availability);
    if (maxPrice !== MAX_SAMPLE_PRICE) params.set("maxPrice", String(maxPrice));
    const next = `${window.location.pathname}${params.size ? `?${params.toString()}` : ""}`;
    window.history.replaceState(null, "", next);
  }, [sort, colour, size, availability, maxPrice]);

  const clearFilters = () => {
    setSort("featured"); setColour("all"); setSize("all"); setAvailability("all"); setMaxPrice(MAX_SAMPLE_PRICE); setVisibleCount(12);
  };
  return <>
    <div className="collection-toolbar">
      <p className="result-count"><strong>{filtered.length}</strong> sample {filtered.length === 1 ? "style" : "styles"}</p>
      <div className="filter-controls" aria-label="Collection filters">
        <label>Colour<select value={colour} onChange={(event) => setColour(event.target.value)}><option value="all">All colours</option>{colours.map((item) => <option key={item} value={item}>{item}</option>)}</select></label>
        {sizes.length > 1 && <label>Size<select value={size} onChange={(event) => setSize(event.target.value)}><option value="all">All sizes</option>{sizes.map((item) => <option key={item} value={item}>{item}</option>)}</select></label>}
        <label>Availability<select value={availability} onChange={(event) => setAvailability(event.target.value)}><option value="all">All</option><option value="available">Available sample options</option><option value="out-of-stock">Sold out sample</option></select></label>
        <label className="price-filter">Up to {new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(maxPrice)}<input type="range" min="500" max={MAX_SAMPLE_PRICE} step="100" value={maxPrice} onChange={(event) => setMaxPrice(Number(event.target.value))} aria-label="Maximum sample price" /></label>
        <label>Sort<select value={sort} onChange={(event) => setSort(event.target.value as SortMode)}><option value="featured">Featured</option><option value="price-low">Price: low to high</option><option value="price-high">Price: high to low</option><option value="newest">Newest sample</option></select></label>
      </div>
    </div>
    {(colour !== "all" || size !== "all" || availability !== "all" || maxPrice !== MAX_SAMPLE_PRICE || sort !== "featured") && <div className="active-filters"><span>Filters applied</span><button className="text-button" onClick={clearFilters} type="button">Clear filters</button></div>}
    <ProductGrid products={filtered.slice(0, visibleCount)} />
    {visibleCount < filtered.length && <div className="load-more"><button className="button button-outline" onClick={() => setVisibleCount((current) => current + 12)}>Load more styles</button></div>}
  </>;
}
