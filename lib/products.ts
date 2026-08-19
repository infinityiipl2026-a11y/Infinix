export type Category =
  | "Soap"
  | "Hand Wash"
  | "Sanitizer"
  | "Disinfectant Spray"
  | "Body Mist"
  | "No Gas Deodorant"
  | "Talcum"
  | "Gel"
  | "Wipes"
  | "Gift Sets";

export interface Product {
  slug: string;
  name: string;
  category: Category;
  price: number;
  tagline: string;
  description: string;
  details: { label: string; value: string }[];
  /** Path under /public to the real product photo. */
  image: string;
  featured?: boolean;
}

export const products: Product[] = [
  // ---- Soap ----
  {
    slug: "aloe-vera-soap",
    name: "Aloe Vera Soap",
    category: "Soap",
    price: 60,
    tagline: "A gentle, everyday bar.",
    description: "Natural aloe vera bathing soap.",
    details: [
      { label: "Variant", value: "Aloe Vera" },
      { label: "Size", value: "100 g" },
      { label: "Ingredients", value: "Aloe Vera Extract, Glycerin, Soap Base" },
    ],
    image: "/images/products/aloe-vera-soap.webp",
    featured: true,
  },
  {
    slug: "charcoal-soap",
    name: "Charcoal Soap",
    category: "Soap",
    price: 65,
    tagline: "A deep-cleansing charcoal bar.",
    description: "Deep cleansing charcoal soap.",
    details: [
      { label: "Variant", value: "Charcoal" },
      { label: "Size", value: "100 g" },
      { label: "Ingredients", value: "Activated Charcoal, Glycerin, Soap Base" },
    ],
    image: "/images/products/charcoal-soap.webp",
  },
  {
    slug: "lavender-soap",
    name: "Lavender Soap",
    category: "Soap",
    price: 60,
    tagline: "Calming lavender, every wash.",
    description: "Refreshing lavender soap.",
    details: [
      { label: "Variant", value: "Lavender" },
      { label: "Size", value: "100 g" },
      { label: "Ingredients", value: "Lavender Oil, Glycerin, Soap Base" },
    ],
    image: "/images/products/lavender-soap.webp",
  },
  {
    slug: "saffron-soap",
    name: "Saffron Soap",
    category: "Soap",
    price: 75,
    tagline: "A brightening saffron bar.",
    description: "Saffron enriched beauty soap.",
    details: [
      { label: "Variant", value: "Saffron" },
      { label: "Size", value: "100 g" },
      { label: "Ingredients", value: "Saffron Extract, Glycerin, Soap Base" },
    ],
    image: "/images/products/saffron-soap.webp",
  },
  {
    slug: "sandalwood-soap",
    name: "Sandalwood Soap",
    category: "Soap",
    price: 70,
    tagline: "Warm, woody sandalwood.",
    description: "Premium sandalwood bathing soap.",
    details: [
      { label: "Variant", value: "Sandalwood" },
      { label: "Size", value: "100 g" },
      { label: "Ingredients", value: "Sandalwood Oil, Glycerin, Soap Base" },
    ],
    image: "/images/products/sandalwood-soap.webp",
  },
  {
    slug: "ubtan-soap",
    name: "Ubtan Soap",
    category: "Soap",
    price: 70,
    tagline: "A traditional ubtan blend.",
    description: "Traditional ubtan skincare soap.",
    details: [
      { label: "Variant", value: "Ubtan" },
      { label: "Size", value: "100 g" },
      { label: "Ingredients", value: "Ubtan Extract, Glycerin, Soap Base" },
    ],
    image: "/images/products/ubtan-soap.webp",
  },

  // ---- Hand Wash ----
  {
    slug: "bubble-gum-hand-wash",
    name: "Bubble Gum Hand Wash",
    category: "Hand Wash",
    price: 120,
    tagline: "A playful, fruity hand wash.",
    description: "Bubble gum fragrance hand wash.",
    details: [
      { label: "Variant", value: "Bubble Gum" },
      { label: "Size", value: "250 ml" },
      { label: "Ingredients", value: "Moisturizer Base" },
    ],
    image: "/images/products/bubble-gum-hand-wash.webp",
    featured: true,
  },
  {
    slug: "green-apple-hand-wash",
    name: "Green Apple Hand Wash",
    category: "Hand Wash",
    price: 120,
    tagline: "Crisp green apple, every wash.",
    description: "Fresh green apple hand wash.",
    details: [
      { label: "Variant", value: "Green Apple" },
      { label: "Size", value: "250 ml" },
      { label: "Ingredients", value: "Moisturizer Base" },
    ],
    image: "/images/products/green-apple-hand-wash.webp",
  },
  {
    slug: "lavender-hand-wash",
    name: "Lavender Hand Wash",
    category: "Hand Wash",
    price: 120,
    tagline: "A calming lavender wash.",
    description: "Lavender moisturizing hand wash.",
    details: [
      { label: "Variant", value: "Lavender" },
      { label: "Size", value: "250 ml" },
      { label: "Ingredients", value: "Moisturizer Base" },
    ],
    image: "/images/products/lavender-hand-wash.webp",
  },
  {
    slug: "strawberry-hand-wash",
    name: "Strawberry Hand Wash",
    category: "Hand Wash",
    price: 120,
    tagline: "Sweet strawberry, everyday clean.",
    description: "Strawberry fragrance hand wash.",
    details: [
      { label: "Variant", value: "Strawberry" },
      { label: "Size", value: "250 ml" },
      { label: "Ingredients", value: "Moisturizer Base" },
    ],
    image: "/images/products/strawberry-hand-wash.webp",
  },

  // ---- Sanitizer ----
  {
    slug: "aqua-sanitizer",
    name: "Aqua Sanitizer",
    category: "Sanitizer",
    price: 99,
    tagline: "A light, aqua-scented sanitizer.",
    description: "Instant hand sanitizer.",
    details: [
      { label: "Variant", value: "Aqua" },
      { label: "Size", value: "100 ml" },
      { label: "Alcohol content", value: "70% Alcohol" },
    ],
    image: "/images/products/aqua-sanitizer.webp",
    featured: true,
  },
  {
    slug: "hand-rub-sanitizer",
    name: "Hand Rub Sanitizer",
    category: "Sanitizer",
    price: 99,
    tagline: "An unscented, everyday hand rub.",
    description: "Quick hand sanitization.",
    details: [
      { label: "Variant", value: "Hand Rub" },
      { label: "Size", value: "100 ml" },
      { label: "Alcohol content", value: "70% Alcohol" },
    ],
    image: "/images/products/hand-rub-sanitizer.webp",
  },
  {
    slug: "lime-sanitizer",
    name: "Lime Sanitizer",
    category: "Sanitizer",
    price: 99,
    tagline: "A sharp, citrus lime sanitizer.",
    description: "Refreshing lime sanitizer.",
    details: [
      { label: "Variant", value: "Lime" },
      { label: "Size", value: "100 ml" },
      { label: "Alcohol content", value: "70% Alcohol" },
    ],
    image: "/images/products/lime-sanitizer.webp",
  },
  {
    slug: "orange-sanitizer",
    name: "Orange Sanitizer",
    category: "Sanitizer",
    price: 99,
    tagline: "Bright orange, quick clean.",
    description: "Orange fragrance sanitizer.",
    details: [
      { label: "Variant", value: "Orange" },
      { label: "Size", value: "100 ml" },
      { label: "Alcohol content", value: "70% Alcohol" },
    ],
    image: "/images/products/orange-sanitizer.webp",
  },
  {
    slug: "strawberry-sanitizer",
    name: "Strawberry Sanitizer",
    category: "Sanitizer",
    price: 99,
    tagline: "Sweet strawberry sanitizer.",
    description: "Strawberry fragrance sanitizer.",
    details: [
      { label: "Variant", value: "Strawberry" },
      { label: "Size", value: "100 ml" },
      { label: "Alcohol content", value: "70% Alcohol" },
    ],
    image: "/images/products/strawberry-sanitizer.webp",
  },

  // ---- Disinfectant Spray ----
  {
    slug: "citrus-lime-disinfectant-spray",
    name: "Citrus Lime Disinfectant Spray",
    category: "Disinfectant Spray",
    price: 180,
    tagline: "A fresh citrus surface spray.",
    description: "Kills germs and leaves fresh citrus fragrance.",
    details: [
      { label: "Variant", value: "Citrus Lime" },
      { label: "Size", value: "250 ml" },
      { label: "Use", value: "Surfaces & household cleaning" },
    ],
    image: "/images/products/citrus-lime-disinfectant-spray.webp",
  },
  {
    slug: "lavender-disinfectant-spray",
    name: "Lavender Disinfectant Spray",
    category: "Disinfectant Spray",
    price: 180,
    tagline: "A calming lavender surface spray.",
    description: "Lavender disinfectant spray for home hygiene.",
    details: [
      { label: "Variant", value: "Lavender" },
      { label: "Size", value: "250 ml" },
      { label: "Use", value: "Surfaces & household cleaning" },
    ],
    image: "/images/products/lavender-disinfectant-spray.webp",
  },

  // ---- Body Mist ----
  {
    slug: "masculin-body-mist",
    name: "Infinix Masculin Body Mist",
    category: "Body Mist",
    price: 239,
    tagline: "A sharp, everyday masculine mist.",
    description: "Refreshing masculine fragrance body mist.",
    details: [
      { label: "Variant", value: "Masculin" },
      { label: "Size", value: "140 ml" },
      { label: "Ingredients", value: "Alcohol Denat, Water, Fragrance" },
    ],
    image: "/images/products/masculin-body-mist.webp",
    featured: true,
  },
  {
    slug: "lavender-body-mist",
    name: "Lavender Body Mist",
    category: "Body Mist",
    price: 239,
    tagline: "A soft, calming everyday mist.",
    description: "Long lasting lavender fragrance body mist.",
    details: [
      { label: "Variant", value: "Lavender" },
      { label: "Size", value: "140 ml" },
      { label: "Ingredients", value: "Alcohol Denat, Water, Fragrance" },
    ],
    image: "/images/products/lavender-body-mist.webp",
  },

  // ---- No Gas Deodorant ----
  {
    slug: "cool-web-deodorant",
    name: "Cool Web No Gas Deodorant",
    category: "No Gas Deodorant",
    price: 199,
    tagline: "A cool, all-day no-gas deodorant.",
    description: "Long lasting deodorant.",
    details: [
      { label: "Variant", value: "Cool Web" },
      { label: "Size", value: "140 ml" },
      { label: "Format", value: "No gas" },
    ],
    image: "/images/products/cool-web-deodorant.webp",
  },
  {
    slug: "super-hero-deodorant",
    name: "Super Hero No Gas Deodorant",
    category: "No Gas Deodorant",
    price: 199,
    tagline: "Bold, long-lasting freshness.",
    description: "Fresh sporty fragrance.",
    details: [
      { label: "Variant", value: "Super Hero" },
      { label: "Size", value: "140 ml" },
      { label: "Format", value: "No gas" },
    ],
    image: "/images/products/super-hero-deodorant.webp",
  },

  // ---- Talcum ----
  {
    slug: "lavender-talcum",
    name: "Lavender Talcum Powder",
    category: "Talcum",
    price: 120,
    tagline: "A calming lavender powder.",
    description: "Smooth lavender fragrance talcum powder.",
    details: [
      { label: "Variant", value: "Lavender" },
      { label: "Size", value: "300 g" },
      { label: "Ingredients", value: "Talc, Perfume" },
    ],
    image: "/images/products/lavender-talcum.webp",
  },
  {
    slug: "masculin-talcum",
    name: "Masculin Talcum Powder",
    category: "Talcum",
    price: 120,
    tagline: "A sharp, everyday masculine powder.",
    description: "Long lasting masculine fragrance powder.",
    details: [
      { label: "Variant", value: "Masculin" },
      { label: "Size", value: "300 g" },
      { label: "Ingredients", value: "Talc, Perfume" },
    ],
    image: "/images/products/masculin-talcum.webp",
  },
  {
    slug: "pleasure-talcum",
    name: "Pleasure Talcum Powder",
    category: "Talcum",
    price: 120,
    tagline: "A soft, floral everyday powder.",
    description: "Fresh pleasure fragrance talcum powder.",
    details: [
      { label: "Variant", value: "Pleasure" },
      { label: "Size", value: "300 g" },
      { label: "Ingredients", value: "Talc, Perfume" },
    ],
    image: "/images/products/pleasure-talcum.webp",
  },
  {
    slug: "sandalwood-talcum",
    name: "Sandalwood Talcum Powder",
    category: "Talcum",
    price: 120,
    tagline: "Warm, woody sandalwood powder.",
    description: "Classic sandalwood talcum powder.",
    details: [
      { label: "Variant", value: "Sandalwood" },
      { label: "Size", value: "300 g" },
      { label: "Ingredients", value: "Talc, Sandalwood Fragrance" },
    ],
    image: "/images/products/sandalwood-talcum.webp",
  },

  // ---- Gel ----
  {
    slug: "aloe-vera-gel",
    name: "Aloe Vera Gel",
    category: "Gel",
    price: 200,
    tagline: "A soothing, everyday gel.",
    description: "Pure aloe vera skin gel.",
    details: [
      { label: "Variant", value: "Aloe Vera" },
      { label: "Size", value: "150 g" },
      { label: "Ingredients", value: "Aloe Vera Extract" },
    ],
    image: "/images/products/aloe-vera-gel.webp",
    featured: true,
  },
  {
    slug: "cucumber-gel",
    name: "Cucumber Gel",
    category: "Gel",
    price: 200,
    tagline: "A cooling cucumber gel.",
    description: "Cooling cucumber skin gel.",
    details: [
      { label: "Variant", value: "Cucumber" },
      { label: "Size", value: "150 g" },
      { label: "Ingredients", value: "Cucumber Extract" },
    ],
    image: "/images/products/cucumber-gel.webp",
  },
  {
    slug: "jaswand-gel",
    name: "Jaswand (Hibiscus) Gel",
    category: "Gel",
    price: 200,
    tagline: "A floral hibiscus gel.",
    description: "Herbal jaswand skin gel.",
    details: [
      { label: "Variant", value: "Jaswand (Hibiscus)" },
      { label: "Size", value: "150 g" },
      { label: "Ingredients", value: "Jaswand Extract" },
    ],
    image: "/images/products/jaswand-gel.webp",
  },
  {
    slug: "orange-gel",
    name: "Orange Gel",
    category: "Gel",
    price: 200,
    tagline: "A citrus-fresh gel.",
    description: "Vitamin enriched orange gel.",
    details: [
      { label: "Variant", value: "Orange" },
      { label: "Size", value: "150 g" },
      { label: "Ingredients", value: "Orange Extract" },
    ],
    image: "/images/products/orange-gel.webp",
  },
  {
    slug: "seaweed-gel",
    name: "Seaweed Gel",
    category: "Gel",
    price: 200,
    tagline: "A mineral-rich seaweed gel.",
    description: "Nourishing seaweed skin gel.",
    details: [
      { label: "Variant", value: "Seaweed" },
      { label: "Size", value: "150 g" },
      { label: "Ingredients", value: "Seaweed Extract" },
    ],
    image: "/images/products/seaweed-gel.webp",
  },

  // ---- Wipes ----
  {
    slug: "makeup-remover-wipes",
    name: "Makeup Remover Wipes",
    category: "Wipes",
    price: 99,
    tagline: "Gentle, everyday makeup removal.",
    description: "Gentle makeup remover wipes.",
    details: [
      { label: "Variant", value: "Makeup Remover" },
      { label: "Count", value: "25 Wipes" },
      { label: "Ingredients", value: "Aloe Vera, Vitamin E" },
    ],
    image: "/images/products/makeup-remover-wipes.webp",
  },
  {
    slug: "nail-polish-remover-wipes",
    name: "Nail Polish Remover Wipes",
    category: "Wipes",
    price: 99,
    tagline: "Quick, mess-free polish removal.",
    description: "Quick nail polish removal wipes.",
    details: [
      { label: "Variant", value: "Nail Polish Remover" },
      { label: "Count", value: "25 Wipes" },
      { label: "Ingredients", value: "Moisturizing Formula" },
    ],
    image: "/images/products/nail-polish-remover-wipes.webp",
  },

  // ---- Gift Sets ----
  {
    slug: "lavender-hygiene-kit",
    name: "Lavender Hygiene Kit",
    category: "Gift Sets",
    price: 299,
    tagline: "A lavender hygiene set, gift-ready.",
    description: "Complete lavender hygiene care kit.",
    details: [
      { label: "Variant", value: "Lavender" },
      { label: "Contents", value: "Multiple Products" },
      { label: "Set", value: "Sold as a kit" },
    ],
    image: "/images/products/lavender-hygiene-kit.webp",
    featured: true,
  },
  {
    slug: "lavender-value-pack",
    name: "Lavender Value Pack",
    category: "Gift Sets",
    price: 399,
    tagline: "Lavender favourites, bundled.",
    description: "Special lavender value pack.",
    details: [
      { label: "Variant", value: "Lavender Value Pack" },
      { label: "Contents", value: "Multiple Products" },
      { label: "Set", value: "Sold as a pack" },
    ],
    image: "/images/products/lavender-value-pack.webp",
  },
  {
    slug: "lime-hygiene-kit",
    name: "Lime Hygiene Kit",
    category: "Gift Sets",
    price: 299,
    tagline: "A lime hygiene set, gift-ready.",
    description: "Refreshing lime hygiene kit.",
    details: [
      { label: "Variant", value: "Lime" },
      { label: "Contents", value: "Multiple Products" },
      { label: "Set", value: "Sold as a kit" },
    ],
    image: "/images/products/lime-hygiene-kit.webp",
  },
  {
    slug: "masculin-value-pack",
    name: "Masculin Value Pack",
    category: "Gift Sets",
    price: 399,
    tagline: "Masculin favourites, bundled.",
    description: "Masculin grooming value pack.",
    details: [
      { label: "Variant", value: "Masculin" },
      { label: "Contents", value: "Multiple Products" },
      { label: "Set", value: "Sold as a pack" },
    ],
    image: "/images/products/masculin-value-pack.webp",
  },
];

export const getProduct = (slug: string) =>
  products.find((p) => p.slug === slug);

export const categories: Category[] = [
  "Soap",
  "Hand Wash",
  "Sanitizer",
  "Disinfectant Spray",
  "Body Mist",
  "No Gas Deodorant",
  "Talcum",
  "Gel",
  "Wipes",
  "Gift Sets",
];

export interface CategoryGroup {
  slug: string;
  label: string;
  icon: string;
  categories: Category[];
}

/**
 * Broader "Shop by category" groupings for the homepage — each links to
 * the shop, pre-filtered to every real product Category folded into it.
 */
export const categoryGroups: CategoryGroup[] = [
  {
    slug: "household-hygiene",
    label: "Household & Hygiene",
    icon: "/images/categories/household.png",
    categories: ["Hand Wash", "Sanitizer", "Disinfectant Spray"],
  },
  {
    slug: "personal-care",
    label: "Personal Care",
    icon: "/images/categories/personal.png",
    categories: ["Soap", "Gel", "Wipes", "Gift Sets"],
  },
  {
    slug: "fragrance-grooming",
    label: "Fragrance & Grooming",
    icon: "/images/categories/fragrance.png",
    categories: ["Body Mist", "Talcum", "No Gas Deodorant"],
  },
];