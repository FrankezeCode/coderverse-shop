# Product images by price stage

Images are picked up automatically from each folder. Run `npm run generate:images` after adding or removing files (also runs before `dev` and `build`).

## Folders

| Folder | Price   | Product  |
|--------|---------|----------|
| `34/`  | $34.00  | Auralis  |
| `42/`  | $42.00  | Veloura  |
| `65/`  | $65.00  | Lumèra   |
| `120/` | $120.00 | Solenne  |

## Filenames

Use any names ending in `.jpg`, `.jpeg`, `.png`, or `.webp` (e.g. `1.jpg`, `2.jpg`). Files are sorted numerically by name.

## Current inventory

Regenerated list lives in `lib/generated/product-images.ts`.
