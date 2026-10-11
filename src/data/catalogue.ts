import type { Product, ProductCategory, ProductImage, ProductVariant } from "@/types/commerce";

const paletteByColour: Record<string, string> = {
  Rose: "#b7848a", Olive: "#686b4c", Ink: "#35323a", Blush: "#d8a9ad", Cocoa: "#785f51",
  Blue: "#556c8a", Sand: "#c8b79f", Berry: "#783344", Ivory: "#d8cfc2", Forest: "#34463b",
};

const artwork = (id: string, colour: string, composition: ProductImage["composition"]): ProductImage => ({
  id,
  alt: `Abstract ${colour.toLowerCase()} hijab artwork placeholder`,
  composition,
  palette: paletteByColour[colour] ?? "#782f45",
});

const samples: Array<{
  sequence: number;
  name: string;
  price: number;
  colour: string;
  description: string;
  featured?: boolean;
  newArrival?: boolean;
  soldOut?: boolean;
}> = [
  { sequence: 11, name: "The Noor Modal Hijab", price: 1290, colour: "Rose", description: "A fictional hijab colour concept in muted rose, shown with abstract artwork placeholders.", featured: true },
  { sequence: 12, name: "The Gulnar Hijab", price: 1190, colour: "Olive", description: "An illustrative sample shade in olive for a calm, tonal styling direction.", newArrival: true },
  { sequence: 13, name: "The Aab Hijab", price: 990, colour: "Ink", description: "A fictional sample in a deep ink colour, presented as a simple wardrobe accent." },
  { sequence: 14, name: "The Haya Hijab", price: 1490, colour: "Blush", description: "A sample colour story in soft blush with a clean, minimal visual direction.", featured: true },
  { sequence: 15, name: "The Zoya Hijab", price: 1090, colour: "Cocoa", description: "A warm cocoa-toned sample catalogue concept.", featured: true },
  { sequence: 16, name: "The Safa Hijab", price: 1390, colour: "Blue", description: "A fictional sample shade in deep blue, styled with a composed editorial mood.", newArrival: true, featured: true },
  { sequence: 17, name: "The Inaya Hijab", price: 1190, colour: "Sand", description: "A soft sand colour direction for this fictional catalogue sample." },
  { sequence: 18, name: "The Mahnoor Hijab", price: 1590, colour: "Berry", description: "A rich berry sample colour shown as part of the development catalogue." },
  { sequence: 19, name: "The Saba Hijab", price: 990, colour: "Ivory", description: "A light ivory shade in this illustrative sample collection." },
  { sequence: 20, name: "The Ruh Hijab", price: 1290, colour: "Forest", description: "A deep forest-green sample styling direction.", newArrival: true, soldOut: true },
];

const buildVariant = (id: string, colour: string, soldOut = false): ProductVariant => ({
  id: `${id}-one-size`,
  label: colour,
  size: "One size",
  colour,
  available: !soldOut,
});

export const products: Product[] = samples.map((sample, index) => {
  const id = `hijab-${String(sample.sequence).padStart(3, "0")}`;
  const image = artwork(`${id}-drape`, sample.colour, "drape");
  const secondImage = artwork(`${id}-bloom`, sample.colour, "bloom");
  return {
    id,
    slug: id,
    sku: `DEV-HI-${String(sample.sequence).padStart(3, "0")}`,
    name: sample.name,
    category: "hijabs",
    description: sample.description,
    price: sample.price,
    images: [image, secondImage],
    variants: [buildVariant(id, sample.colour, sample.soldOut)],
    sizes: ["One size"],
    colours: [sample.colour],
    stockStatus: sample.soldOut ? "out-of-stock" : "in-stock",
    featured: Boolean(sample.featured),
    newArrival: Boolean(sample.newArrival),
    createdAt: new Date(Date.UTC(2026, 8, 30 - index)).toISOString(),
    sampleData: true,
  };
});

export const categories: Array<{ slug: ProductCategory; title: string; description: string; image: ProductImage }> = [
  { slug: "hijabs", title: "Hijabs", description: "A considered palette of colour stories for everyday expression.", image: artwork("hijab-collection-bloom", "Berry", "bloom") },
];

export const productBySlug = (slug: string) => products.find((item) => item.slug === slug);
export const categoryLabel = (category: ProductCategory) => category[0].toUpperCase() + category.slice(1);

export const catalogueCounts = {
  total: products.length,
  hijabs: products.length,
};
