import {
  Anchor,
  Award,
  BadgeCheck,
  Briefcase,
  Facebook,
  Fish,
  GraduationCap,
  Globe,
  Heart,
  Instagram,
  Package,
  ShieldCheck,
  Ship,
  Star,
  Users,
  Utensils,
  Waves,
  Youtube,
  type LucideIcon,
} from "lucide-react";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "/our-story" },
  { label: "Products", href: "/products" },
  { label: "Quality", href: "/quality" },
  { label: "Recipes", href: "/recipes" },
  { label: "Contact", href: "/contact" },
] as const;

export const products = [
  {
    name: "Nethili Dry Fish",
    slug: "nethili-anchovy",
    image: "/assets/images/products/nethili.webp",
    description:
      "Premium quality anchovies, cleaned and sun-dried to perfection.",
    longDescription:
      "Our Nethili (Anchovy) is sun-dried to perfection, retaining its natural umami flavor and nutritional richness. Packed with calcium and protein, it's a beloved staple in coastal households.",
    weight: "250g",
  },
  {
    name: "Karuvadu Dry Fish",
    slug: "karuvadu-dried-fish",
    image: "/assets/images/products/karuvadu.webp",
    description:
      "Traditional sun-dried fish with rich taste and coastal aroma.",
    longDescription:
      "Our Karuvadu is carefully selected and traditionally sun-dried to preserve its authentic taste and texture. A versatile ingredient for curries, stir-fries, and more.",
    weight: "500g",
  },
  {
    name: "Vanjiram Dry Fish",
    slug: "vanjiram-kingfish",
    image: "/assets/images/products/vanjiram.webp",
    description:
      "Sliced and sun-dried seer fish, rich in flavor and traditionally prepared.",
    longDescription:
      "Our Vanjiram (King Fish) is premium quality, carefully selected and dried to retain its rich, meaty texture. A delicacy among seafood enthusiasts.",
    weight: "300g",
  },
  {
    name: "Fish Pickles",
    slug: "fish-pickle",
    image: "/assets/images/products/fish-pickle-pack-front.webp",
    description:
      "Traditional recipes with natural spices and authentic taste.",
    longDescription:
      "Our Fish Pickle is a burst of coastal flavor, made with traditional spices and authentic recipes. The perfect accompaniment to any meal.",
    weight: "200g",
  },
  {
    name: "Other Dry Fish",
    slug: "other-dry-fish",
    image: "/assets/images/products/dry-prawn-cropped.png",
    description:
      "Explore our wide variety of premium dry fish selections.",
    longDescription:
      "We offer a wide variety of premium dry fish selections, each carefully selected and traditionally processed to bring you the authentic taste of the coast.",
    weight: "250g",
  },
];

export const qualityHighlights = [
  {
    icon: ShieldCheck,
    title: "Authentic",
    copy: "Traditional recipes and coastal heritage in every bite.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    copy: "Carefully selected fish and hygienic processing for the best quality.",
  },
  {
    icon: BadgeCheck,
    title: "Trusted",
    copy: "Preserved with care and delivered with trust.",
  },
  {
    icon: Waves,
    title: "Naturally Preserved",
    copy: "No artificial colors or preservatives. Just natural goodness.",
  },
] as const;

export const heroTrustBadges = [
  { label: "Authentic", icon: ShieldCheck },
  { label: "Traditional", icon: Anchor },
  { label: "Premium Quality", icon: Award },
  { label: "Hygienic", icon: Package },
  { label: "Trusted", icon: BadgeCheck },
] as const;

export const audiences = [
  {
    icon: Users,
    title: "Families",
    copy: "Bringing traditional taste to your family meals.",
  },
  {
    icon: Fish,
    title: "Seafood Lovers",
    copy: "For those who love authentic seafood flavors.",
  },
  {
    icon: Utensils,
    title: "South Indian Households",
    copy: "A staple for every South Indian kitchen.",
  },
  {
    icon: Globe,
    title: "NRI Customers",
    copy: "Bringing the taste of home to your doorstep.",
  },
  {
    icon: Briefcase,
    title: "Working Professionals",
    copy: "Quick, healthy and tasty meal solutions.",
  },
] as const;

export const recipes = [
  {
    title: "Nethili Fry",
    image: "/assets/images/recipes/nethili-fry.webp",
  },
  {
    title: "Karuvadu Kulambu",
    image: "/assets/images/recipes/karuvadu-kulambu.webp",
  },
  {
    title: "Fish Pickle",
    image: "/assets/images/recipes/fish-pickle.webp",
  },
] as const;

export const gallery = [
  { title: "Dry Fish Selection", image: "/assets/images/products/nethili.webp" },
  { title: "Coastal Sourcing", image: "/assets/images/hero/hero-dry-fish-products.png" },
  { title: "Traditional Recipes", image: "/assets/images/recipes/fish-pickle.webp" },
  { title: "Fresh Packing", image: "/assets/images/products/karuvadu.webp" },
] as const;

export const testimonials = [
  {
    rating: 5,
    name: "Lakshmi Menon",
    location: "Kochi, Kerala",
    text: "The taste of Karuvadu reminded me of my grandmother's cooking. Absolutely authentic and fresh. Deepam has become a permanent part of my kitchen.",
  },
  {
    rating: 5,
    name: "Rajesh Kumar",
    location: "Chennai, Tamil Nadu",
    text: "Best quality dry fish I've found online. The Nethili was clean, well-packed, and full of flavor. Highly recommend for anyone who loves coastal food.",
  },
  {
    rating: 5,
    name: "Priya Iyer",
    location: "Bangalore, Karnataka",
    text: "The Fish Pickle is absolutely addictive! My family loves it with everything. Great to see a brand that truly cares about quality.",
  },
];

export const footerLinks: Record<string, { label: string; href: string }[]> = {
  "Quick Links": [
    { label: "Home", href: "/" },
    { label: "Our Story", href: "/our-story" },
    { label: "Products", href: "/products" },
    { label: "Quality", href: "/quality" },
    { label: "Recipes", href: "/recipes" },
    { label: "Contact", href: "/contact" },
  ],
  "Customer Service": [
    { label: "Shipping & Delivery", href: "#" },
    { label: "Returns & Refunds", href: "#" },
    { label: "FAQs", href: "#" },
    { label: "Terms & Conditions", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
  Products: [
    { label: "Nethili Dry Fish", href: "/products/nethili-anchovy" },
    { label: "Karuvadu Dry Fish", href: "/products/karuvadu-dried-fish" },
    { label: "Vanjiram Dry Fish", href: "/products/vanjiram-kingfish" },
    { label: "Fish Pickles", href: "/products/fish-pickle" },
    { label: "Other Dry Fish", href: "/products/other-dry-fish" },
  ],
};

export const productProcess = [
  {
    title: "Fresh Sourcing",
    description:
      "We source only the freshest catch directly from trusted coastal fishermen who share our commitment to quality.",
  },
  {
    title: "Traditional Processing",
    description:
      "Using time-honored techniques passed down through generations, we clean, salt, and prepare the fish with care.",
  },
  {
    title: "Natural Drying",
    description:
      "Our fish is sun-dried under controlled conditions to preserve nutritional value and enhance natural flavor.",
  },
  {
    title: "Quality Check",
    description:
      "Every batch undergoes rigorous quality testing to ensure it meets our strict standards of purity and taste.",
  },
  {
    title: "Secure Packaging",
    description:
      "Packed hygienically to retain freshness during transit, ensuring the product reaches you in perfect condition.",
  },
];
