import { imagesForStage, type PriceStageFolder } from "./generated/product-images";
import type { PriceStageId } from "./price-stages";

export type ProductVariant = "default" | "crimson";

export interface Product {
  id: string;
  name: string;
  tag: string;
  description: string;
  price: string;
  priceStage: PriceStageId;
  images: string[];
  variant?: ProductVariant;
}

function stageImages(stage: PriceStageFolder): string[] {
  return imagesForStage(stage);
}

export const products: Product[] = [
  {
    id: "hex-code-matte-lip",
    name: "HEX_CODE MATTE LIP",
    tag: "OBJ.LIPSTICK // SHADE: FATAL_ERR",
    description:
      "Simple, modern, and effortlessly elegant — a clean fragrance that feels soft, fresh, and naturally beautiful.",
    price: "$34.00",
    priceStage: "34",
    images: stageImages("34"),
  },
  {
    id: "algorithm-edp",
    name: "ALGORITHM EDP",
    tag: "[SYSTEM] EAU_DE_PARFUM",
    description:
      "A deep, magnetic fragrance crafted for moments when confidence speaks before words do.",
    price: "$120.00",
    priceStage: "120",
    images: stageImages("120"),
  },
  {
    id: "syntax-illuminator",
    name: "SYNTAX ILLUMINATOR",
    tag: "OBJ.HIGHLIGHT // MODE: RADIANCE",
    description:
      "A comforting scent that gently lifts your mood, calms your mind, and brings quiet confidence to every moment.",
    price: "$42.00",
    priceStage: "42",
    images: stageImages("42"),
    variant: "crimson",
  },
  {
    id: "root-access-serum",
    name: "ROOT ACCESS SERUM",
    tag: "SUDO CHMOD 777 SERUM",
    description:
      "Simple, modern, and effortlessly elegant — a clean fragrance that feels soft, fresh, and naturally beautiful.",
    price: "$65.00",
    priceStage: "65",
    images: stageImages("65"),
  },
];
