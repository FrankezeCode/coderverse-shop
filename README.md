# CODERVERSE Shop

One-page WhatsApp commerce storefront — tech-noir aesthetic, animated particle background, product grid with per-item buy CTAs.

## Setup

```bash
npm install
cp .env.example .env.local
# Edit NEXT_PUBLIC_WHATSAPP_NUMBER with your WhatsApp number (international format)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

Deploy to [Vercel](https://vercel.com). Set `NEXT_PUBLIC_WHATSAPP_NUMBER` in project environment variables.

## Product images (by price stage)

Add photos under `public/products/`:

| Folder | Price   |
|--------|---------|
| `34/`  | $34.00  |
| `42/`  | $42.00  |
| `65/`  | $65.00  |
| `120/` | $120.00 |

Name files `01.jpg` … `05.jpg` in each folder (5 per tier = 20 total). Cards rotate through available images; until you upload, Unsplash placeholders are used.

See `public/products/README.md` for details.

## Customize products

Edit `lib/products.ts` — names, copy, and prices. Image paths are tied to price stage folders in `lib/price-stages.ts`.
