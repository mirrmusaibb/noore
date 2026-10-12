"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { CartItem } from "@/types/commerce";
import { products } from "@/data/catalogue";

type StorefrontContextValue = {
  cart: CartItem[];
  wishlist: string[];
  cartCount: number;
  subtotal: number;
  hydrated: boolean;
  cartOpen: boolean;
  notice: string;
  addToCart: (productId: string, variantId: string, quantity?: number) => void;
  setQuantity: (productId: string, variantId: string, quantity: number) => void;
  removeFromCart: (productId: string, variantId: string) => void;
  toggleWishlist: (productId: string) => void;
  openCart: () => void;
  closeCart: () => void;
  announce: (message: string) => void;
};

const StorefrontContext = createContext<StorefrontContextValue | null>(null);
const CART_KEY = "noore-cart-v1";
const LEGACY_CART_KEY = "noore-preview-cart-v1";
const WISHLIST_KEY = "noore-preview-wishlist-v1";
const knownProducts = new Set(products.map((product) => product.id));

function readLocal<T>(key: string, fallback: T): T {
  try {
    const value = localStorage.getItem(key);
    return value ? (JSON.parse(value) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function StorefrontProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [notice, setNotice] = useState("");

  // Hydrate browser-only local storage after mount to keep the server HTML deterministic.
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    const storedCart = readLocal<CartItem[]>(CART_KEY, readLocal<CartItem[]>(LEGACY_CART_KEY, []));
    const storedWishlist = readLocal<string[]>(WISHLIST_KEY, []);
    const productById = new Map(products.map((item) => [item.id, item]));
    setCart(storedCart.flatMap((item) => {
      const product = productById.get(item.productId);
      const variant = product?.variants[0];
      if (!product || !variant || item.quantity < 1) return [];
      return [{ ...item, variantId: variant.id }];
    }));
    setWishlist(storedWishlist.filter((id) => knownProducts.has(id)));
    setHydrated(true);
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
      localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
    } catch { /* Browser storage is optional. */ }
  }, [cart, wishlist, hydrated]);

  useEffect(() => {
    if (!notice) return;
    const timeout = window.setTimeout(() => setNotice(""), 2800);
    return () => window.clearTimeout(timeout);
  }, [notice]);

  const announce = useCallback((message: string) => setNotice(message), []);
  const addToCart = useCallback((productId: string, variantId: string, quantity = 1) => {
    const product = products.find((item) => item.id === productId);
    const variant = product?.variants.find((item) => item.id === variantId);
    if (!product || !variant || !variant.available || quantity < 1) {
      setNotice("This piece is unavailable.");
      return;
    }
    setCart((current) => {
      const existing = current.find((item) => item.productId === productId && item.variantId === variantId);
      if (existing) {
        return current.map((item) => item === existing ? { ...item, quantity: Math.min(10, item.quantity + quantity) } : item);
      }
      return [...current, { productId, variantId, quantity: Math.min(10, quantity) }];
    });
    setNotice("Added to your bag.");
  }, []);
  const setQuantity = useCallback((productId: string, variantId: string, quantity: number) => {
    if (quantity < 1) {
      setCart((current) => current.filter((item) => !(item.productId === productId && item.variantId === variantId)));
      return;
    }
    setCart((current) => current.map((item) => item.productId === productId && item.variantId === variantId
      ? { ...item, quantity: Math.min(10, Math.floor(quantity)) }
      : item));
  }, []);
  const removeFromCart = useCallback((productId: string, variantId: string) => {
    setCart((current) => current.filter((item) => !(item.productId === productId && item.variantId === variantId)));
    setNotice("Removed from your bag.");
  }, []);
  const toggleWishlist = useCallback((productId: string) => {
    const saved = wishlist.includes(productId);
    setWishlist((current) => {
      return saved ? current.filter((id) => id !== productId) : [...current, productId];
    });
    setNotice(saved ? "Removed from your wishlist." : "Saved to your wishlist.");
  }, [wishlist]);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cart.reduce((total, item) => {
    const product = products.find((entry) => entry.id === item.productId);
    return total + (product?.price ?? 0) * item.quantity;
  }, 0);
  const value = useMemo(() => ({
    cart, wishlist, cartCount, subtotal, hydrated, cartOpen, notice,
    addToCart, setQuantity, removeFromCart, toggleWishlist,
    openCart: () => setCartOpen(true), closeCart: () => setCartOpen(false), announce,
  }), [cart, wishlist, cartCount, subtotal, hydrated, cartOpen, notice, addToCart, setQuantity, removeFromCart, toggleWishlist, announce]);

  return <StorefrontContext.Provider value={value}>{children}</StorefrontContext.Provider>;
}

export function useStorefront() {
  const context = useContext(StorefrontContext);
  if (!context) throw new Error("useStorefront must be used within StorefrontProvider");
  return context;
}
