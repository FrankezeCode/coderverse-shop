import { imagesForStage, type PriceStageFolder } from "./generated/product-images";
import type { PriceStageId } from "./price-stages";

export interface Product {
  id: string;
  name: string;
  tag: string;
  description: string;
  price: string;
  priceStage: PriceStageId;
  images: string[];
}

function stageImages(stage: PriceStageFolder): string[] {
  return imagesForStage(stage);
}

export const products: Product[] = [
  {
    id: "lumera",
    name: "Lumèra",
    tag: "CALM · COMFORTING",
    description:
      "A comforting scent that gently lifts your mood, calms your mind, and brings quiet confidence to every moment.",
    price: "$65.00",
    priceStage: "65",
    images: stageImages("65"),
  },
  {
    id: "auralis",
    name: "Auralis",
    tag: "RADIANT · ELEGANT",
    description:
      "Soft, radiant, and effortlessly elegant — designed for everyday confidence and beautiful presence.",
    price: "$34.00",
    priceStage: "34",
    images: stageImages("34"),
  },
  {
    id: "veloura",
    name: "Veloura",
    tag: "WARM · GRACEFUL",
    description:
      "A warm refined fragrance that feels comforting, graceful, and quietly unforgettable.",
    price: "$42.00",
    priceStage: "42",
    images: stageImages("42"),
  },
  {
    id: "solenne",
    name: "Solenne",
    tag: "LUMINOUS · UPLIFTING",
    description:
      "A luminous fragrance created to inspire joy, softness, and the kind of confidence that feels natural and effortless.",
    price: "$120.00",
    priceStage: "120",
    images: stageImages("120"),
  },
];
