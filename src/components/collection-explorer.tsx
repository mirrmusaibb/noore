"use client";

import { useEffect, useMemo, useState } from "react";
import type { Product } from "@/types/commerce";
import { ProductGrid } from "@/components/product-grid";

export type SortMode = "featured" | "price-low" | "price-high" | "name";
const MAX_PRICE = 6000;
export type CollectionFilters = { sort: SortMode; maxPrice: number };

export function CollectionExplorer({ products, initialFilters }: { products: Product[]; initialFilters?: Partial<CollectionFilters> }) {
  const [sort, setSort] = useState<SortMode>(initialFilters?.sort ?? "featured");
  const [maxPrice, setMaxPrice] = useState(initialFilters?.maxPrice ?? MAX_PRICE);
  const filtered = useMemo(() => {
    const result = products.filter((product) => product.price <= maxPrice);
    if (sort === "price-low") result.sort((a, b) => a.price - b.price);
    if (sort === "price-high") result.sort((a, b) => b.price - a.price);
    if (sort === "name") result.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "featured") result.sort((a, b) => Number(b.featured) - Number(a.featured));
    return result;
  }, [products, maxPrice, sort]);

  useEffect(() => {
    const params = new URLSearchParams();
    if (sort !== "featured") params.set("sort", sort);
    if (maxPrice !== MAX_PRICE) params.set("maxPrice", String(maxPrice));
    const next = `${window.location.pathname}${params.size ? `?${params.toString()}` : ""}`;
    window.history.replaceState(null, "", next);
  }, [sort, maxPrice]);

  const clearFilters = () => { setSort("featured"); setMaxPrice(MAX_PRICE); };
  return <>
    <div className="collection-toolbar">
      <p className="result-count"><strong>{filtered.length}</strong> {filtered.length === 1 ? "piece" : "pieces"}</p>
      <div className="filter-controls" aria-label="Collection controls">
        <label className="price-filter">Under {new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(maxPrice)}<input type="range" min="500" max={MAX_PRICE} step="100" value={maxPrice} onChange={(event) => setMaxPrice(Number(event.target.value))} aria-label="Maximum price" /></label>
        <label>Sort<select value={sort} onChange={(event) => setSort(event.target.value as SortMode)}><option value="featured">Curated order</option><option value="price-low">Price: low to high</option><option value="price-high">Price: high to low</option><option value="name">Name: A to Z</option></select></label>
      </div>
    </div>
    {(maxPrice !== MAX_PRICE || sort !== "featured") && <div className="active-filters"><span>Refined view</span><button className="text-button" onClick={clearFilters} type="button">Clear</button></div>}
    <ProductGrid products={filtered} />
  </>;
}
