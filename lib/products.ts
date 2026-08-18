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
  /**
   * TODO: replace with the real price for this SKU. The old site stored
   * prices in its database (not in this repo), so every price below is a
   * placeholder — swap these for the actual figures before launch.
   */
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
    description:
      "A soothing bar built around aloe vera, formulated for daily use without stripping the skin.",
    details: [
      { label: "Variant", value: "Aloe Vera" },
      { label: "Size", value: "TODO: add size (e.g. 100 g)" },
      { label: "Ingredients", value: "TODO: add full ingredient list" },
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
    description:
      "Activated charcoal formulated to lift away oil and impurities for a deep, refreshing cleanse.",
    details: [
      { label: "Variant", value: "Charcoal" },
      { label: "Size", value: "TODO: add size (e.g. 100 g)" },
      { label: "Ingredients", value: "TODO: add full ingredient list" },
    ],
    image: "/images/products/charcoal-soap.webp",
  },
  {
    slug: "lavender-soap",
    name: "Lavender Soap",
    category: "Soap",
    price: 60,
    tagline: "Calming lavender, every wash.",
    description:
      "A softly fragranced bar built around lavender, for a calm, unwinding wash.",
    details: [
      { label: "Variant", value: "Lavender" },
      { label: "Size", value: "TODO: add size (e.g. 100 g)" },
      { label: "Ingredients", value: "TODO: add full ingredient list" },
    ],
    image: "/images/products/lavender-soap.webp",
  },
  {
    slug: "saffron-soap",
    name: "Saffron Soap",
    category: "Soap",
    price: 70,
    tagline: "A brightening saffron bar.",
    description:
      "Saffron-infused for a brightening, everyday glow-focused wash.",
    details: [
      { label: "Variant", value: "Saffron" },
      { label: "Size", value: "TODO: add size (e.g. 100 g)" },
      { label: "Ingredients", value: "TODO: add full ingredient list" },
    ],
    image: "/images/products/saffron-soap.webp",
  },
  {
    slug: "sandalwood-soap",
    name: "Sandalwood Soap",
    category: "Soap",
    price: 65,
    tagline: "Warm, woody sandalwood.",
    description:
      "A classic sandalwood bar with a warm, grounding scent for daily use.",
    details: [
      { label: "Variant", value: "Sandalwood" },
      { label: "Size", value: "TODO: add size (e.g. 100 g)" },
      { label: "Ingredients", value: "TODO: add full ingredient list" },
    ],
    image: "/images/products/sandalwood-soap.webp",
  },
  {
    slug: "ubtan-soap",
    name: "Ubtan Soap",
    category: "Soap",
    price: 70,
    tagline: "A traditional ubtan blend.",
    description:
      "A traditional ubtan-inspired bar for gentle, everyday exfoliation.",
    details: [
      { label: "Variant", value: "Ubtan" },
      { label: "Size", value: "TODO: add size (e.g. 100 g)" },
      { label: "Ingredients", value: "TODO: add full ingredient list" },
    ],
    image: "/images/products/ubtan-soap.webp",
  },

  // ---- Hand Wash ----
  {
    slug: "bubble-gum-hand-wash",
    name: "Bubble Gum Hand Wash",
    category: "Hand Wash",
    price: 85,
    tagline: "A playful, fruity hand wash.",
    description:
      "A gentle liquid hand wash in a fun bubble gum scent, for everyday hand hygiene.",
    details: [
      { label: "Variant", value: "Bubble Gum" },
      { label: "Size", value: "TODO: add size (e.g. 250 ml)" },
      { label: "Ingredients", value: "TODO: add full ingredient list" },
    ],
    image: "/images/products/bubble-gum-hand-wash.webp",
    featured: true,
  },
  {
    slug: "green-apple-hand-wash",
    name: "Green Apple Hand Wash",
    category: "Hand Wash",
    price: 85,
    tagline: "Crisp green apple, every wash.",
    description:
      "A refreshing green apple liquid hand wash for daily use at the sink.",
    details: [
      { label: "Variant", value: "Green Apple" },
      { label: "Size", value: "TODO: add size (e.g. 250 ml)" },
      { label: "Ingredients", value: "TODO: add full ingredient list" },
    ],
    image: "/images/products/green-apple-hand-wash.webp",
  },
  {
    slug: "lavender-hand-wash",
    name: "Lavender Hand Wash",
    category: "Hand Wash",
    price: 85,
    tagline: "A calming lavender wash.",
    description:
      "A gentle, calming lavender hand wash for everyday hygiene.",
    details: [
      { label: "Variant", value: "Lavender" },
      { label: "Size", value: "TODO: add size (e.g. 250 ml)" },
      { label: "Ingredients", value: "TODO: add full ingredient list" },
    ],
    image: "/images/products/lavender-hand-wash.webp",
  },
  {
    slug: "strawberry-hand-wash",
    name: "Strawberry Hand Wash",
    category: "Hand Wash",
    price: 85,
    tagline: "Sweet strawberry, everyday clean.",
    description:
      "A fruity strawberry liquid hand wash, gentle enough for frequent use.",
    details: [
      { label: "Variant", value: "Strawberry" },
      { label: "Size", value: "TODO: add size (e.g. 250 ml)" },
      { label: "Ingredients", value: "TODO: add full ingredient list" },
    ],
    image: "/images/products/strawberry-hand-wash.webp",
  },

  // ---- Sanitizer ----
  {
    slug: "aqua-sanitizer",
    name: "Aqua Sanitizer",
    category: "Sanitizer",
    price: 75,
    tagline: "A light, aqua-scented sanitizer.",
    description:
      "A quick-drying hand sanitizer in a light aqua scent, for on-the-go use.",
    details: [
      { label: "Variant", value: "Aqua" },
      { label: "Size", value: "TODO: add size (e.g. 100 ml)" },
      { label: "Alcohol content", value: "TODO: add alcohol %" },
    ],
    image: "/images/products/aqua-sanitizer.webp",
    featured: true,
  },
  {
    slug: "hand-rub-sanitizer",
    name: "Hand Rub Sanitizer",
    category: "Sanitizer",
    price: 75,
    tagline: "An unscented, everyday hand rub.",
    description:
      "A no-frills hand rub sanitizer built for frequent, everyday use.",
    details: [
      { label: "Variant", value: "Hand Rub" },
      { label: "Size", value: "TODO: add size (e.g. 100 ml)" },
      { label: "Alcohol content", value: "TODO: add alcohol %" },
    ],
    image: "/images/products/hand-rub-sanitizer.webp",
  },
  {
    slug: "lime-sanitizer",
    name: "Lime Sanitizer",
    category: "Sanitizer",
    price: 75,
    tagline: "A sharp, citrus lime sanitizer.",
    description:
      "A citrus lime hand sanitizer, quick-drying and pocket-friendly.",
    details: [
      { label: "Variant", value: "Lime" },
      { label: "Size", value: "TODO: add size (e.g. 100 ml)" },
      { label: "Alcohol content", value: "TODO: add alcohol %" },
    ],
    image: "/images/products/lime-sanitizer.webp",
  },
  {
    slug: "orange-sanitizer",
    name: "Orange Sanitizer",
    category: "Sanitizer",
    price: 75,
    tagline: "Bright orange, quick clean.",
    description:
      "A bright orange-scented hand sanitizer for quick, on-the-go cleaning.",
    details: [
      { label: "Variant", value: "Orange" },
      { label: "Size", value: "TODO: add size (e.g. 100 ml)" },
      { label: "Alcohol content", value: "TODO: add alcohol %" },
    ],
    image: "/images/products/orange-sanitizer.webp",
  },
  {
    slug: "strawberry-sanitizer",
    name: "Strawberry Sanitizer",
    category: "Sanitizer",
    price: 75,
    tagline: "Sweet strawberry sanitizer.",
    description:
      "A strawberry-scented hand sanitizer, light enough for frequent reapplication.",
    details: [
      { label: "Variant", value: "Strawberry" },
      { label: "Size", value: "TODO: add size (e.g. 100 ml)" },
      { label: "Alcohol content", value: "TODO: add alcohol %" },
    ],
    image: "/images/products/strawberry-sanitizer.webp",
  },

  // ---- Disinfectant Spray ----
  {
    slug: "citrus-lime-disinfectant-spray",
    name: "Citrus Lime Disinfectant Spray",
    category: "Disinfectant Spray",
    price: 150,
    tagline: "A fresh citrus surface spray.",
    description:
      "A citrus lime disinfectant spray for surfaces and everyday household cleaning.",
    details: [
      { label: "Variant", value: "Citrus Lime" },
      { label: "Size", value: "TODO: add size (e.g. 500 ml)" },
      { label: "Use", value: "Surfaces & household cleaning" },
    ],
    image: "/images/products/citrus-lime-disinfectant-spray.webp",
  },
  {
    slug: "lavender-disinfectant-spray",
    name: "Lavender Disinfectant Spray",
    category: "Disinfectant Spray",
    price: 150,
    tagline: "A calming lavender surface spray.",
    description:
      "A lavender-scented disinfectant spray for surfaces and everyday household cleaning.",
    details: [
      { label: "Variant", value: "Lavender" },
      { label: "Size", value: "TODO: add size (e.g. 500 ml)" },
      { label: "Use", value: "Surfaces & household cleaning" },
    ],
    image: "/images/products/lavender-disinfectant-spray.webp",
  },

  // ---- Body Mist ----
  {
    slug: "masculin-body-mist",
    name: "Infinix Masculin Body Mist",
    category: "Body Mist",
    price: 180,
    tagline: "A sharp, everyday masculine mist.",
    description:
      "A confident, everyday fragrance mist designed for a lasting fresh finish.",
    details: [
      { label: "Variant", value: "Masculin" },
      { label: "Size", value: "TODO: add size (e.g. 100 ml)" },
      { label: "Notes", value: "TODO: add fragrance notes" },
    ],
    image: "/images/products/masculin-body-mist.webp",
    featured: true,
  },
  {
    slug: "lavender-body-mist",
    name: "Lavender Body Mist",
    category: "Body Mist",
    price: 180,
    tagline: "A soft, calming everyday mist.",
    description:
      "A light lavender body mist for a calm, everyday fresh finish.",
    details: [
      { label: "Variant", value: "Lavender" },
      { label: "Size", value: "TODO: add size (e.g. 100 ml)" },
      { label: "Notes", value: "TODO: add fragrance notes" },
    ],
    image: "/images/products/lavender-body-mist.webp",
  },

  // ---- No Gas Deodorant ----
  {
    slug: "cool-web-deodorant",
    name: "Cool Web No Gas Deodorant",
    category: "No Gas Deodorant",
    price: 140,
    tagline: "A cool, all-day no-gas deodorant.",
    description:
      "A no-gas deodorant formulated for long-lasting, all-day freshness.",
    details: [
      { label: "Variant", value: "Cool Web" },
      { label: "Size", value: "TODO: add size (e.g. 150 ml)" },
      { label: "Format", value: "No gas" },
    ],
    image: "/images/products/cool-web-deodorant.webp",
  },
  {
    slug: "super-hero-deodorant",
    name: "Super Hero No Gas Deodorant",
    category: "No Gas Deodorant",
    price: 140,
    tagline: "Bold, long-lasting freshness.",
    description:
      "A bold no-gas deodorant built for long-lasting, all-day freshness.",
    details: [
      { label: "Variant", value: "Super Hero" },
      { label: "Size", value: "TODO: add size (e.g. 150 ml)" },
      { label: "Format", value: "No gas" },
    ],
    image: "/images/products/super-hero-deodorant.webp",
  },

  // ---- Talcum ----
  {
    slug: "lavender-talcum",
    name: "Lavender Talcum Powder",
    category: "Talcum",
    price: 90,
    tagline: "A calming lavender powder.",
    description:
      "A soft, lavender-scented talcum powder for everyday freshness.",
    details: [
      { label: "Variant", value: "Lavender" },
      { label: "Size", value: "TODO: add size (e.g. 100 g)" },
      { label: "Ingredients", value: "TODO: add full ingredient list" },
    ],
    image: "/images/products/lavender-talcum.webp",
  },
  {
    slug: "masculin-talcum",
    name: "Masculin Talcum Powder",
    category: "Talcum",
    price: 90,
    tagline: "A sharp, everyday masculine powder.",
    description:
      "A confident, everyday talcum powder with a masculine scent profile.",
    details: [
      { label: "Variant", value: "Masculin" },
      { label: "Size", value: "TODO: add size (e.g. 100 g)" },
      { label: "Ingredients", value: "TODO: add full ingredient list" },
    ],
    image: "/images/products/masculin-talcum.webp",
  },
  {
    slug: "pleasure-talcum",
    name: "Pleasure Talcum Powder",
    category: "Talcum",
    price: 90,
    tagline: "A soft, floral everyday powder.",
    description: "A softly floral talcum powder for everyday freshness.",
    details: [
      { label: "Variant", value: "Pleasure" },
      { label: "Size", value: "TODO: add size (e.g. 100 g)" },
      { label: "Ingredients", value: "TODO: add full ingredient list" },
    ],
    image: "/images/products/pleasure-talcum.webp",
  },
  {
    slug: "sandalwood-talcum",
    name: "Sandalwood Talcum Powder",
    category: "Talcum",
    price: 90,
    tagline: "Warm, woody sandalwood powder.",
    description:
      "A classic sandalwood talcum powder with a warm, grounding scent.",
    details: [
      { label: "Variant", value: "Sandalwood" },
      { label: "Size", value: "TODO: add size (e.g. 100 g)" },
      { label: "Ingredients", value: "TODO: add full ingredient list" },
    ],
    image: "/images/products/sandalwood-talcum.webp",
  },

  // ---- Gel ----
  {
    slug: "aloe-vera-gel",
    name: "Aloe Vera Gel",
    category: "Gel",
    price: 120,
    tagline: "A soothing, everyday gel.",
    description:
      "A pure, soothing aloe vera gel for everyday skin and hair care.",
    details: [
      { label: "Variant", value: "Aloe Vera" },
      { label: "Size", value: "TODO: add size (e.g. 200 g)" },
      { label: "Ingredients", value: "TODO: add full ingredient list" },
    ],
    image: "/images/products/aloe-vera-gel.webp",
    featured: true,
  },
  {
    slug: "cucumber-gel",
    name: "Cucumber Gel",
    category: "Gel",
    price: 120,
    tagline: "A cooling cucumber gel.",
    description: "A light, cooling cucumber gel for everyday use.",
    details: [
      { label: "Variant", value: "Cucumber" },
      { label: "Size", value: "TODO: add size (e.g. 200 g)" },
      { label: "Ingredients", value: "TODO: add full ingredient list" },
    ],
    image: "/images/products/cucumber-gel.webp",
  },
  {
    slug: "jaswand-gel",
    name: "Jaswand (Hibiscus) Gel",
    category: "Gel",
    price: 120,
    tagline: "A floral hibiscus gel.",
    description: "A hibiscus (jaswand) gel for everyday skin and hair care.",
    details: [
      { label: "Variant", value: "Jaswand (Hibiscus)" },
      { label: "Size", value: "TODO: add size (e.g. 200 g)" },
      { label: "Ingredients", value: "TODO: add full ingredient list" },
    ],
    image: "/images/products/jaswand-gel.webp",
  },
  {
    slug: "orange-gel",
    name: "Orange Gel",
    category: "Gel",
    price: 120,
    tagline: "A citrus-fresh gel.",
    description: "A bright, citrus orange gel for everyday use.",
    details: [
      { label: "Variant", value: "Orange" },
      { label: "Size", value: "TODO: add size (e.g. 200 g)" },
      { label: "Ingredients", value: "TODO: add full ingredient list" },
    ],
    image: "/images/products/orange-gel.webp",
  },
  {
    slug: "seaweed-gel",
    name: "Seaweed Gel",
    category: "Gel",
    price: 130,
    tagline: "A mineral-rich seaweed gel.",
    description:
      "A mineral-rich seaweed gel formulated for everyday skin care.",
    details: [
      { label: "Variant", value: "Seaweed" },
      { label: "Size", value: "TODO: add size (e.g. 200 g)" },
      { label: "Ingredients", value: "TODO: add full ingredient list" },
    ],
    image: "/images/products/seaweed-gel.webp",
  },

  // ---- Wipes ----
  {
    slug: "makeup-remover-wipes",
    name: "Makeup Remover Wipes",
    category: "Wipes",
    price: 95,
    tagline: "Gentle, everyday makeup removal.",
    description:
      "Soft wipes formulated to remove makeup gently, without harsh rubbing.",
    details: [
      { label: "Variant", value: "Makeup Remover" },
      { label: "Count", value: "TODO: add wipe count (e.g. 25 wipes)" },
      { label: "Ingredients", value: "TODO: add full ingredient list" },
    ],
    image: "/images/products/makeup-remover-wipes.webp",
  },
  {
    slug: "nail-polish-remover-wipes",
    name: "Nail Polish Remover Wipes",
    category: "Wipes",
    price: 95,
    tagline: "Quick, mess-free polish removal.",
    description:
      "Pre-soaked wipes for quick, mess-free nail polish removal on the go.",
    details: [
      { label: "Variant", value: "Nail Polish Remover" },
      { label: "Count", value: "TODO: add wipe count (e.g. 25 wipes)" },
      { label: "Ingredients", value: "TODO: add full ingredient list" },
    ],
    image: "/images/products/nail-polish-remover-wipes.webp",
  },

  // ---- Gift Sets ----
  {
    slug: "lavender-hygiene-kit",
    name: "Lavender Hygiene Kit",
    category: "Gift Sets",
    price: 350,
    tagline: "A lavender hygiene set, gift-ready.",
    description:
      "A coordinated lavender hygiene kit, bundling everyday essentials in one gift-ready pack.",
    details: [
      { label: "Variant", value: "Lavender" },
      { label: "Contents", value: "TODO: list what's included in the kit" },
      { label: "Set", value: "Sold as a kit" },
    ],
    image: "/images/products/lavender-hygiene-kit.webp",
    featured: true,
  },
  {
    slug: "lavender-value-pack",
    name: "Lavender Value Pack",
    category: "Gift Sets",
    price: 320,
    tagline: "Lavender favourites, bundled.",
    description:
      "A value pack bundling Infinix's lavender-scented essentials together.",
    details: [
      { label: "Variant", value: "Lavender" },
      { label: "Contents", value: "TODO: list what's included in the pack" },
      { label: "Set", value: "Sold as a pack" },
    ],
    image: "/images/products/lavender-value-pack.webp",
  },
  {
    slug: "lime-hygiene-kit",
    name: "Lime Hygiene Kit",
    category: "Gift Sets",
    price: 350,
    tagline: "A lime hygiene set, gift-ready.",
    description:
      "A coordinated lime hygiene kit, bundling everyday essentials in one gift-ready pack.",
    details: [
      { label: "Variant", value: "Lime" },
      { label: "Contents", value: "TODO: list what's included in the kit" },
      { label: "Set", value: "Sold as a kit" },
    ],
    image: "/images/products/lime-hygiene-kit.webp",
  },
  {
    slug: "masculin-value-pack",
    name: "Masculin Value Pack",
    category: "Gift Sets",
    price: 320,
    tagline: "Masculin favourites, bundled.",
    description:
      "A value pack bundling Infinix's Masculin-scented essentials together.",
    details: [
      { label: "Variant", value: "Masculin" },
      { label: "Contents", value: "TODO: list what's included in the pack" },
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
