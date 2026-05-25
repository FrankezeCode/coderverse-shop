export interface SoftwareProduct {
  id: string;
  name: string;
  tag: string;
  description: string;
  image: string;
}

export const softwareProducts: SoftwareProduct[] = [
  {
    id: "betterdev",
    name: "BetterDev",
    tag: "COMMUNITY · ENGINEERING",
    description:
      "A curated network for engineers to build real connections through small, offline meetups focused on growth—not generic networking events.",
    image: "/products/software/betterdev.JPG",
  },
  {
    id: "aquarius",
    name: "Aquarius",
    tag: "DEFI · RISK INTELLIGENCE",
    description:
      "Real-time, protocol-aware risk intelligence for DeFi—AI agents that detect and act on risk before losses occur.",
    image: "/products/software/aquarius.JPG",
  },
  {
    id: "colorflow",
    name: "Colorflow",
    tag: "DESIGN SYSTEMS",
    description:
      "Generate and explore color palettes from a single base—analogous, complementary, and triadic schemes for product teams.",
    image: "/products/software/colorflow.JPG",
  },
  {
    id: "eatopia",
    name: "Eatopia",
    tag: "COMMERCE · GROCERY",
    description:
      "Fresh grocery e-commerce—search, categories, and a storefront built for trust, savings, and everyday shopping.",
    image: "/products/software/eatopia.JPG",
  },
];
