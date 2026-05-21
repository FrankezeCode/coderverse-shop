/** Price tiers — folder names match `public/products/{id}/` */
export const PRICE_STAGES = [
  {
    id: "34",
    label: "$34",
    folder: "34",
    productId: "auralis",
  },
  {
    id: "42",
    label: "$42",
    folder: "42",
    productId: "veloura",
  },
  {
    id: "65",
    label: "$65",
    folder: "65",
    productId: "lumera",
  },
  {
    id: "120",
    label: "$120",
    folder: "120",
    productId: "solenne",
  },
] as const;

export type PriceStageId = (typeof PRICE_STAGES)[number]["id"];

export function productImagePath(stageFolder: string, filename: string): string {
  return `/products/${stageFolder}/${filename}`;
}

/** @deprecated Use imagesForStage() from lib/generated/product-images.ts */
export function stageImagePaths(stageFolder: string, ext = "jpg"): string[] {
  return ["1", "2", "3", "4", "5"].map((slot) =>
    productImagePath(stageFolder, `${slot}.${ext}`)
  );
}
