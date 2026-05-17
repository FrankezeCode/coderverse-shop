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

## Customize products

Edit `lib/products.ts` — names, copy, prices, and image URLs.
