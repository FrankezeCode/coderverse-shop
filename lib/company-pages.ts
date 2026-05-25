export type CompanySection = {
  heading?: string;
  paragraphs: string[];
  bullets?: string[];
};

export type CompanyPageContent = {
  title: string;
  description: string;
  sections: CompanySection[];
};

export const aboutPage: CompanyPageContent = {
  title: "About Us",
  description:
    "Learn about Coderverse — software, digital commerce, and experiences that matter.",
  sections: [
    {
      paragraphs: [
        "Coderverse Technology builds software and real-world experiences that matter. We design and ship digital products for modern businesses—from developer tools and design platforms to commerce experiences customers love.",
      ],
    },
    {
      heading: "What we do",
      paragraphs: [
        "Our work spans custom software development, product design, and digital commerce. Whether you are exploring fragrances, software products, or future collections, we focus on clarity, craft, and outcomes that last.",
      ],
      bullets: [
        "Software products such as BetterDev, Aquarius, Colorflow, and Eatopia",
        "Curated fragrance collections with a seamless WhatsApp purchase flow",
        "Partnerships for ideas, products, and long-term digital growth",
      ],
    },
    {
      heading: "Our approach",
      paragraphs: [
        "We believe technology should feel human: useful, honest, and built with care. Every product we release is an invitation to work with a team that listens, ships, and stands behind what we build.",
      ],
    },
  ],
};

export const contactPage: CompanyPageContent = {
  title: "Contact",
  description: "Get in touch with Coderverse for orders, software, and partnerships.",
  sections: [
    {
      paragraphs: [
        "We would love to hear from you. Reach out for product questions, orders, software inquiries, or ideas you want to bring to life.",
      ],
    },
    {
      heading: "WhatsApp",
      paragraphs: [
        "The fastest way to reach us is on WhatsApp. We typically respond during business hours and will follow up on orders, fragrances, and software products.",
      ],
    },
    {
      heading: "Ideas & partnerships",
      paragraphs: [
        "Building something new? Visit our technology site or use the idea section on the shop homepage to share your vision with the team.",
      ],
    },
  ],
};

export const shippingReturnsPage: CompanyPageContent = {
  title: "Shipping & Returns",
  description: "Shipping, delivery, and returns information for Coderverse Shop.",
  sections: [
    {
      paragraphs: [
        "Below is an overview of how we handle orders placed through Coderverse Shop. Software and service inquiries may follow separate agreements discussed at purchase.",
      ],
    },
    {
      heading: "Fragrance orders",
      paragraphs: [
        "When you order a fragrance via WhatsApp, our team confirms availability, pricing, and delivery details with you directly before payment and dispatch.",
      ],
      bullets: [
        "Processing begins after order confirmation on WhatsApp",
        "Delivery timelines depend on your location and carrier availability",
        "You will receive updates from our team at key stages of fulfilment",
      ],
    },
    {
      heading: "Returns & exchanges",
      paragraphs: [
        "If your order arrives damaged, incorrect, or not as described, contact us within 7 days of delivery with your order details and photos where applicable. We will work with you on a replacement, exchange, or refund where appropriate.",
      ],
      bullets: [
        "Unopened items in original packaging are easier to process for exchange",
        "Opened fragrance products may be eligible only where required by law or at our discretion",
        "Refunds, when approved, are processed via the original payment method where possible",
      ],
    },
    {
      heading: "Software & digital products",
      paragraphs: [
        "Software licenses, subscriptions, and custom development are handled per product terms agreed at purchase. Contact us before buying if you need specific licensing or support details.",
      ],
    },
  ],
};

export const privacyPage: CompanyPageContent = {
  title: "Privacy Policy",
  description: "How Coderverse collects, uses, and protects your information.",
  sections: [
    {
      paragraphs: [
        "Coderverse respects your privacy. This policy describes how we handle information when you use our shop, newsletter, WhatsApp, and related services.",
        "Last updated: May 2026.",
      ],
    },
    {
      heading: "Information we collect",
      paragraphs: [
        "We may collect information you provide directly, including:",
      ],
      bullets: [
        "Email address when you join our newsletter",
        "Name, phone number, and messages sent via WhatsApp",
        "Order and delivery details shared during purchase conversations",
        "Basic usage data through standard website technologies (see below)",
      ],
    },
    {
      heading: "How we use your information",
      paragraphs: [
        "We use your information to fulfil orders, respond to inquiries, send updates you have requested, and improve our products and services. We do not sell your personal data to third parties.",
      ],
    },
    {
      heading: "WhatsApp & third parties",
      paragraphs: [
        "Messaging and payments may involve third-party services (such as WhatsApp and payment providers). Their use of data is governed by their own policies. We share only what is needed to complete your request or order.",
      ],
    },
    {
      heading: "Data retention & security",
      paragraphs: [
        "We retain information only as long as needed for the purposes above or as required by law. We apply reasonable measures to protect data, though no online service can guarantee absolute security.",
      ],
    },
    {
      heading: "Your choices",
      paragraphs: [
        "You may unsubscribe from marketing emails at any time, stop messaging us on WhatsApp, or request access, correction, or deletion of your data by contacting us.",
      ],
    },
    {
      heading: "Contact",
      paragraphs: [
        "Questions about this policy? Reach us through our Contact page or WhatsApp from the shop footer.",
      ],
    },
  ],
};
