export type ProductCategory = "hijabs";
export type StockStatus = "in-stock" | "out-of-stock";

export interface ProductImage {
  id: string;
  alt: string;
  composition: "drape" | "bloom";
  palette: string;
}

export interface ProductVariant {
  id: string;
  label: string;
  size?: string;
  colour: string;
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
  compareAtPrice?: number;
  images: ProductImage[];
  variants: ProductVariant[];
  sizes: string[];
  colours: string[];
  stockStatus: StockStatus;
  featured: boolean;
  newArrival: boolean;
  createdAt: string;
  sampleData: true;
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
