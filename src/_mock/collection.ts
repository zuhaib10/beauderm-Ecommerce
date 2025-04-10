export const mockProductsCollection = [
  {
    id: "gid://shopify/Product/001",
    handle: "mock-product-1",
    availableForSale: true,
    featured: true,
    title: "Mock T-Shirt",
    description: "A comfy cotton T-shirt.",
    descriptionHtml: "<p>A comfy <strong>cotton</strong> T-shirt.</p>",
    options: [{ id: "opt1", name: "Size", values: ["S", "M", "L", "XL"] }],
    priceRange: {
      maxVariantPrice: { amount: "29.99", currencyCode: "USD" },
      minVariantPrice: { amount: "19.99", currencyCode: "USD" },
    },
    compareAtPriceRange: {
      maxVariantPrice: { amount: "39.99", currencyCode: "USD" },
    },
    variants: [
      {
        id: "gid://shopify/ProductVariant/101",
        title: "Size M",
        sku: "TSHIRT-M",
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "M" }],
        price: { amount: "24.99", currencyCode: "USD" },
        compareAtPrice: { amount: "34.99", currencyCode: "USD" },
      },
    ],
    featuredImage: {
      url: "https://www.weightgaincapsules-dubai-uae.com/images/Health-Tone-Weight-Gain.jpg",
      altText: "T-Shirt image",
      width: 600,
      height: 600,
    },
    images: {
      edges: [
        {
          node: {
            url: "https://www.weightgaincapsules-dubai-uae.com/images/Health-Tone-Weight-Gain.jpg",
            altText: "T-Shirt Image",
            width: 600,
            height: 600,
          },
        },
      ],
    },
    seo: {
      title: "T-Shirt SEO",
      description: "SEO description for T-shirt",
    },
    tags: ["tshirt", "clothing"],
    updatedAt: new Date().toISOString(),
    vendor: "Mock Brand",
    collections: [],
  },
  {
    id: "gid://shopify/Product/002",
    handle: "mock-product-2",
    availableForSale: true,
    featured: true,
    title: "Mock Hoodie",
    description: "A cozy hoodie for winter.",
    descriptionHtml: "<p>A cozy hoodie for <em>winter</em>.</p>",
    options: [{ id: "opt2", name: "Size", values: ["M", "L"] }],
    priceRange: {
      maxVariantPrice: { amount: "59.99", currencyCode: "USD" },
      minVariantPrice: { amount: "49.99", currencyCode: "USD" },
    },
    compareAtPriceRange: {
      maxVariantPrice: { amount: "69.99", currencyCode: "USD" },
    },
    variants: [
      {
        id: "gid://shopify/ProductVariant/102",
        title: "Size L",
        sku: "HOODIE-L",
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "L" }],
        price: { amount: "59.99", currencyCode: "USD" },
      },
    ],
    featuredImage: {
      url: "https://www.weightgaincapsules-dubai-uae.com/images/Fast-Weight-Gain-Capsules.jpg",
      altText: "Hoodie image",
      width: 600,
      height: 600,
    },
    images: {
      edges: [
        {
          node: {
            url: "https://www.weightgaincapsules-dubai-uae.com/images/Fast-Weight-Gain-Capsules.jpg",
            altText: "Hoodie Image",
            width: 600,
            height: 600,
          },
        },
      ],
    },
    seo: {
      title: "Hoodie SEO",
      description: "SEO description for hoodie",
    },
    tags: ["hoodie", "sweatshirt"],
    updatedAt: new Date().toISOString(),
    vendor: "Mock Apparel",
    collections: [],
  },
  {
    id: "gid://shopify/Product/003",
    handle: "mock-product-3",
    availableForSale: false,
    featured: true,
    title: "Mock Cap",
    description: "A stylish baseball cap.",
    descriptionHtml: "<p>A <strong>stylish</strong> baseball cap.</p>",
    options: [{ id: "opt3", name: "Color", values: ["Black", "White"] }],
    priceRange: {
      maxVariantPrice: { amount: "14.99", currencyCode: "USD" },
      minVariantPrice: { amount: "14.99", currencyCode: "USD" },
    },
    compareAtPriceRange: {
      maxVariantPrice: { amount: "19.99", currencyCode: "USD" },
    },
    variants: [
      {
        id: "gid://shopify/ProductVariant/103",
        title: "Black",
        sku: "CAP-BLACK",
        availableForSale: false,
        selectedOptions: [{ name: "Color", value: "Black" }],
        price: { amount: "14.99", currencyCode: "USD" },
      },
    ],
    featuredImage: {
      url: "https://www.weightgaincapsules-dubai-uae.com/images/Extra-Effective-Health-Tone.jpg",
      altText: "Cap image",
      width: 600,
      height: 600,
    },
    images: {
      edges: [
        {
          node: {
            url: "https://www.weightgaincapsules-dubai-uae.com/images/Extra-Effective-Health-Tone.jpg",
            altText: "Cap Image",
            width: 600,
            height: 600,
          },
        },
      ],
    },
    seo: {
      title: "Cap SEO",
      description: "SEO description for cap",
    },
    tags: ["cap", "hat"],
    updatedAt: new Date().toISOString(),
    vendor: "HeadGear Inc",
    collections: [],
  },
  {
    id: "gid://shopify/Product/004",
    handle: "mock-product-4",
    availableForSale: true,
    title: "Mock Sneakers",
    description: "Comfortable running sneakers.",
    descriptionHtml: "<p>Comfortable <strong>running sneakers</strong>.</p>",
    options: [{ id: "opt4", name: "Size", values: ["8", "9", "10", "11"] }],
    priceRange: {
      maxVariantPrice: { amount: "89.99", currencyCode: "USD" },
      minVariantPrice: { amount: "69.99", currencyCode: "USD" },
    },
    compareAtPriceRange: {
      maxVariantPrice: { amount: "99.99", currencyCode: "USD" },
    },
    variants: [
      {
        id: "gid://shopify/ProductVariant/104",
        title: "Size 10",
        sku: "SNEAKERS-10",
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "10" }],
        price: { amount: "79.99", currencyCode: "USD" },
        compareAtPrice: { amount: "89.99", currencyCode: "USD" },
      },
    ],
    featuredImage: {
      url: "https://via.placeholder.com/600x600?text=Product+4",
      altText: "Sneakers image",
      width: 600,
      height: 600,
    },
    images: {
      edges: [
        {
          node: {
            url: "https://via.placeholder.com/600x600?text=Product+4",
            altText: "Sneakers Image",
            width: 600,
            height: 600,
          },
        },
      ],
    },
    seo: {
      title: "Sneakers SEO",
      description: "SEO description for sneakers",
    },
    tags: ["shoes", "sneakers", "running"],
    updatedAt: new Date().toISOString(),
    vendor: "FootWorks",
    collections: [],
  },
  {
    id: "gid://shopify/Product/005",
    handle: "mock-product-5",
    availableForSale: true,
    title: "Mock Backpack",
    description: "Durable and stylish backpack.",
    descriptionHtml: "<p>Durable and <em>stylish</em> backpack.</p>",
    options: [{ id: "opt5", name: "Color", values: ["Navy", "Grey"] }],
    priceRange: {
      maxVariantPrice: { amount: "49.99", currencyCode: "USD" },
      minVariantPrice: { amount: "39.99", currencyCode: "USD" },
    },
    compareAtPriceRange: {
      maxVariantPrice: { amount: "59.99", currencyCode: "USD" },
    },
    variants: [
      {
        id: "gid://shopify/ProductVariant/105",
        title: "Grey",
        sku: "BAG-GREY",
        availableForSale: true,
        selectedOptions: [{ name: "Color", value: "Grey" }],
        price: { amount: "49.99", currencyCode: "USD" },
        compareAtPrice: { amount: "59.99", currencyCode: "USD" },
      },
    ],
    featuredImage: {
      url: "https://via.placeholder.com/600x600?text=Product+5",
      altText: "Backpack image",
      width: 600,
      height: 600,
    },
    images: {
      edges: [
        {
          node: {
            url: "https://via.placeholder.com/600x600?text=Product+5",
            altText: "Backpack Image",
            width: 600,
            height: 600,
          },
        },
      ],
    },
    seo: {
      title: "Backpack SEO",
      description: "SEO description for backpack",
    },
    tags: ["bag", "backpack"],
    updatedAt: new Date().toISOString(),
    vendor: "Urban Packs",
    collections: [],
  },
];

export const mockProductsCollections = [
  {
    title: "T-Shirts",
    handle: "tshirts",
    image: {
      url: mockProductsCollection.find((p) => p.tags.includes("tshirt"))
        ?.featuredImage?.url,
    },
    products: {
      edges: mockProductsCollection
        .filter((p) => p.tags.includes("tshirt"))
        .map((p) => ({ node: p })),
    },
  },
  {
    title: "Hoodies",
    handle: "hoodies",
    image: {
      url: mockProductsCollection.find((p) => p.tags.includes("hoodie"))
        ?.featuredImage?.url,
    },
    products: {
      edges: mockProductsCollection
        .filter((p) => p.tags.includes("hoodie"))
        .map((p) => ({ node: p })),
    },
  },
  {
    title: "Caps & Hats",
    handle: "caps",
    image: {
      url: mockProductsCollection.find((p) => p.tags.includes("cap"))
        ?.featuredImage?.url,
    },
    products: {
      edges: mockProductsCollection
        .filter((p) => p.tags.includes("cap"))
        .map((p) => ({ node: p })),
    },
  },
  {
    title: "Shoes",
    handle: "sneakers",
    image: {
      url: mockProductsCollection.find((p) => p.tags.includes("sneakers"))
        ?.featuredImage?.url,
    },
    products: {
      edges: mockProductsCollection
        .filter((p) => p.tags.includes("sneakers"))
        .map((p) => ({ node: p })),
    },
  },
  {
    title: "Backpacks",
    handle: "bags",
    image: {
      url: mockProductsCollection.find((p) => p.tags.includes("backpack"))
        ?.featuredImage?.url,
    },
    products: {
      edges: mockProductsCollection
        .filter((p) => p.tags.includes("backpack"))
        .map((p) => ({ node: p })),
    },
  },
];
