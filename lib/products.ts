export type ProductVariant = "default" | "crimson";

export interface Product {
  id: string;
  name: string;
  tag: string;
  description: string;
  price: string;
  image: string;
  variant?: ProductVariant;
}

export const products: Product[] = [
  {
    id: "hex-code-matte-lip",
    name: "HEX_CODE MATTE LIP",
    tag: "OBJ.LIPSTICK // SHADE: FATAL_ERR",
    description:
      "High-density crimson pigment engineered for single-stroke execution. The formula binds at a molecular level for 24-hour non-volatile wear.",
    price: "$34.00",
    image:
      "https://images.unsplash.com/photo-1586495777744-4413d210d961?w=800&q=80",
  },
  {
    id: "algorithm-edp",
    name: "ALGORITHM EDP",
    tag: "[SYSTEM] EAU_DE_PARFUM",
    description:
      "A complex olfactory structure. Top notes of bergamot compile into a deep, sensual baseline of dark amber and midnight jasmine. Sillage optimized.",
    price: "$120.00",
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80",
  },
  {
    id: "syntax-illuminator",
    name: "SYNTAX ILLUMINATOR",
    tag: "OBJ.HIGHLIGHT // MODE: RADIANCE",
    description:
      "Micro-fine light-reflecting particles suspended in a weightless gel matrix. Grants targeted structural definition and high-wattage radiance.",
    price: "$42.00",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdd403348?w=800&q=80",
    variant: "crimson",
  },
  {
    id: "root-access-serum",
    name: "ROOT ACCESS SERUM",
    tag: "SUDO CHMOD 777 SERUM",
    description:
      "Bypass the dermal firewall. Concentrated hyaluronic acid and peptide complex penetrate deepest layers for total cellular reboot and hydration.",
    price: "$65.00",
    image:
      "https://images.unsplash.com/photo-1620916564550-8b108f1470d2?w=800&q=80",
  },
];
