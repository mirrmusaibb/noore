import type { Product, ProductCategory, ProductImage } from "@/types/commerce";

type ArtworkSeed = {
  sequence: number;
  name: string;
  price: number;
  tone: string;
  palette: string;
  composition: ProductImage["composition"];
  featured?: boolean;
};

const palettes = {
  rose: "#9b5367",
  olive: "#69705a",
  ink: "#403c49",
  blush: "#c78f98",
  cocoa: "#80675b",
  blue: "#657b91",
  sand: "#b39c83",
  berry: "#783148",
  ivory: "#d8cbbd",
  forest: "#455b4b",
  plum: "#6e5364",
  sienna: "#a15f4a",
  stone: "#968c82",
  moss: "#777a61",
  wine: "#64283d",
  lilac: "#9a8799",
  copper: "#a96e58",
  pearl: "#d5c7b7",
  fig: "#71434d",
  slate: "#67717c",
} as const;

const concepts: Record<ProductCategory, ArtworkSeed[]> = {
  hijabs: [
    { sequence: 11, name: "The Noor Hijab", price: 1290, tone: "muted rose", palette: palettes.rose, composition: "drape", featured: true },
    { sequence: 12, name: "The Gulnar Hijab", price: 1190, tone: "soft olive", palette: palettes.olive, composition: "bloom" },
    { sequence: 13, name: "The Aab Hijab", price: 990, tone: "deep ink", palette: palettes.ink, composition: "fold" },
    { sequence: 14, name: "The Haya Hijab", price: 1490, tone: "warm blush", palette: palettes.blush, composition: "drape", featured: true },
    { sequence: 15, name: "The Zoya Hijab", price: 1090, tone: "soft cocoa", palette: palettes.cocoa, composition: "fold", featured: true },
    { sequence: 16, name: "The Safa Hijab", price: 1390, tone: "blue slate", palette: palettes.blue, composition: "bloom", featured: true },
    { sequence: 17, name: "The Inaya Hijab", price: 1190, tone: "warm sand", palette: palettes.sand, composition: "drape" },
    { sequence: 18, name: "The Mahnoor Hijab", price: 1590, tone: "deep berry", palette: palettes.berry, composition: "bloom" },
    { sequence: 19, name: "The Saba Hijab", price: 990, tone: "soft ivory", palette: palettes.ivory, composition: "fold" },
    { sequence: 20, name: "The Ruh Hijab", price: 1290, tone: "deep forest", palette: palettes.forest, composition: "drape" },
  ],
  abayas: [
    { sequence: 1, name: "The Layl Abaya", price: 4990, tone: "deep plum", palette: palettes.plum, composition: "drape", featured: true },
    { sequence: 2, name: "The Amani Abaya", price: 5290, tone: "warm sienna", palette: palettes.sienna, composition: "fold" },
    { sequence: 3, name: "The Safiya Abaya", price: 4590, tone: "soft stone", palette: palettes.stone, composition: "bloom" },
    { sequence: 4, name: "The Nura Abaya", price: 4890, tone: "quiet moss", palette: palettes.moss, composition: "drape" },
    { sequence: 5, name: "The Yasmin Abaya", price: 5590, tone: "deep wine", palette: palettes.wine, composition: "bloom", featured: true },
    { sequence: 6, name: "The Amara Abaya", price: 5790, tone: "soft lilac", palette: palettes.lilac, composition: "fold" },
    { sequence: 7, name: "The Zahra Abaya", price: 4990, tone: "warm copper", palette: palettes.copper, composition: "drape" },
    { sequence: 8, name: "The Farah Abaya", price: 5390, tone: "quiet pearl", palette: palettes.pearl, composition: "bloom" },
    { sequence: 9, name: "The Liyana Abaya", price: 4690, tone: "soft fig", palette: palettes.fig, composition: "fold" },
    { sequence: 10, name: "The Miral Abaya", price: 5990, tone: "slate blue", palette: palettes.slate, composition: "drape", featured: true },
  ],
};

const categoryDetails: Record<ProductCategory, { title: string; description: string; palette: string; composition: ProductImage["composition"] }> = {
  hijabs: { title: "Hijabs", description: "A considered palette for everyday expression.", palette: palettes.rose, composition: "bloom" },
  abayas: { title: "Abayas", description: "A measured silhouette, drawn in quiet tones.", palette: palettes.wine, composition: "drape" },
};

function artwork(id: string, category: ProductCategory, tone: string, palette: string, composition: ProductImage["composition"]): ProductImage {
  return {
    id,
    alt: `Original ${tone} artwork for the ${category.slice(0, -1)} collection`,
    composition,
    palette,
  };
}

export const products: Product[] = (Object.keys(concepts) as ProductCategory[]).flatMap((category) =>
  concepts[category].map((item, index) => {
    const prefix = category === "hijabs" ? "hijab" : "abaya";
    const sequence = item.sequence;
    const id = `${prefix}-${String(sequence).padStart(3, "0")}`;
    const secondComposition: ProductImage["composition"] = item.composition === "drape" ? "bloom" : "drape";
    return {
      id,
      slug: id,
      sku: `NO-${prefix.slice(0, 2).toUpperCase()}-${String(sequence).padStart(3, "0")}`,
      name: item.name,
      category,
      description: `A ${item.tone} study for the NOORE ${category.slice(0, -1)} edit, drawn with soft botanical detail.`,
      price: item.price,
      images: [
        artwork(`${id}-one`, category, item.tone, item.palette, item.composition),
        artwork(`${id}-two`, category, item.tone, item.palette, secondComposition),
      ],
      variants: [{ id: `${id}-standard`, available: true }],
      featured: Boolean(item.featured),
      createdAt: new Date(Date.UTC(2026, 8, 30 - index)).toISOString(),
    };
  }),
);

export const categories: Array<{ slug: ProductCategory; title: string; description: string; image: ProductImage }> = (
  Object.entries(categoryDetails) as [ProductCategory, (typeof categoryDetails)[ProductCategory]][]
).map(([slug, item]) => ({
  slug,
  title: item.title,
  description: item.description,
  image: artwork(`${slug}-collection`, slug, "deep botanical", item.palette, item.composition),
}));

export const productBySlug = (slug: string) => products.find((item) => item.slug === slug);
export const categoryLabel = (category: ProductCategory) => categoryDetails[category].title;

export const catalogueCounts = {
  total: products.length,
  abayas: products.filter((product) => product.category === "abayas").length,
  hijabs: products.filter((product) => product.category === "hijabs").length,
};
