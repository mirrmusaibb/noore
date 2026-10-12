export type ProductCategory = "hijabs" | "abayas";

export interface ProductImage {
  id: string;
  alt: string;
  composition: "drape" | "bloom" | "fold";
  palette: string;
}

export interface ProductVariant {
  id: string;
  available: boolean;
}

export interface Product {
  id: string;
  slug: string;
  sku: string;
  name: string;
  category: ProductCategory;
  description: string;
  price: number;
  images: ProductImage[];
  variants: ProductVariant[];
  featured: boolean;
  createdAt: string;
}

export interface CartItem {
  productId: string;
  variantId: string;
  quantity: number;
}

export interface CommerceAdapter {
  getProducts(): Promise<Product[]>;
  createCheckoutSession(items: CartItem[]): Promise<{ url: string }>;
}
