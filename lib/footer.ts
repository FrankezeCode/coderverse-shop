export const FOOTER = {
  brand: {
    name: "CODERVERSE",
    tagline:
      "Fragrance designed to bring confidence, joy, and beautiful everyday moments.",
    emotionalLine: "Designed to make confidence feel beautiful.",
  },
  explore: {
    title: "Explore",
    links: [
      { label: "Shop Fragrances", href: "#arsenal" },
      { label: "New Arrivals", href: "#arsenal" },
      { label: "Best Sellers", href: "#arsenal" },
      { label: "Gift Collection", href: "#arsenal" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About Us", href: "#top" },
      { label: "Contact", href: "#contact" },
      { label: "Shipping & Returns", href: "#contact" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
  newsletter: {
    title: "Join Our Newsletter",
    description:
      "Be the first to discover new fragrances, exclusive drops, and uplifting moments from our world.",
    placeholder: "Enter your email",
    button: "Join Now",
    subtext: "Stay connected. Discover more.",
  },
  idea: {
    title: "Have an Idea? Let's Bring It to Life",
    description:
      "From digital experiences to creative products, we love building meaningful ideas with passionate people.",
    primaryCta: "Share Your Vision",
    secondaryCta: "Let's Build Together",
    href: "https://coderverse.shop/technology",
  },
  poweredBy: {
    label: "Powered by Coderverse Technology",
    description:
      "Building digital experiences, creative products, and future-focused solutions.",
    href: "https://coderverse.shop/technology",
    logo: "/brand/coderverse-technology.png",
  },
  copyright: `© ${new Date().getFullYear()} Coderverse. All rights reserved.`,
} as const;

export function newsletterWhatsAppUrl(): string {
  const number =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "2348000000000";
  const text = encodeURIComponent(
    "Hi, I'd like to join your newsletter and hear about new fragrances."
  );
  return `https://wa.me/${number}?text=${text}`;
}

export function shareIdeaWhatsAppUrl(): string {
  const number =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "2348000000000";
  const text = encodeURIComponent(
    "Hi, I have an idea I'd love to bring to life with Coderverse."
  );
  return `https://wa.me/${number}?text=${text}`;
}
