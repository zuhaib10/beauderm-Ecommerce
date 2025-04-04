import type {
  ShopifyProduct,
  Money,
  ProductOption,
  ProductVariant,
  Image,
  SEO,
} from "@/lib/shopify/types";

const mockMoney = (amount: string): Money => ({
  amount,
  currencyCode: "USD",
});

const mockImage = (id: number): Image => ({
  url: `https://picsum.photos/seed/${id}/600/600`,
  altText: `Product image ${id}`,
  width: 600,
  height: 600,
});

const mockVariant = (id: string, title: string): ProductVariant => ({
  id,
  title,
  availableForSale: true,
  selectedOptions: [
    { name: "Size", value: "M" },
    { name: "Color", value: "Black" },
  ],
  price: mockMoney("49.99"),
});

const mockProduct = (id: number): ShopifyProduct => ({
  id: `gid://shopify/Product/${id}`,
  handle: `product-${id}`,
  availableForSale: true,
  title: `Mock Product ${id}`,
  description: `This is the description for Mock Product ${id}.`,
  descriptionHtml: `<p>This is the description for <strong>Mock Product ${id}</strong>.</p>`,
  options: [
    { id: "1", name: "Size", values: ["S", "M", "L"] },
    { id: "2", name: "Color", values: ["Black", "White"] },
  ],
  priceRange: {
    minVariantPrice: mockMoney("49.99"),
    maxVariantPrice: mockMoney("69.99"),
  },
  compareAtPriceRange: {
    maxVariantPrice: mockMoney("89.99"),
  },
  variants: {
    edges: [
      { node: mockVariant(`variant-${id}-1`, `Mock Variant ${id}-1`) },
      { node: mockVariant(`variant-${id}-2`, `Mock Variant ${id}-2`) },
    ],
  },
  featuredImage: mockImage(id),
  images: {
    edges: [{ node: mockImage(id) }, { node: mockImage(id + 100) }],
  },
  seo: {
    title: `SEO Title for Product ${id}`,
    description: `SEO description for Product ${id}`,
  },
  tags: ["mock", "demo", "test"],
  updatedAt: new Date().toISOString(),
  vendor: "MockVendor",
  collections: [],
});

export const mockProducts: ShopifyProduct[] = [
  mockProduct(1),
  mockProduct(2),
  mockProduct(3),
];
