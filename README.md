# Rodam Treats

A responsive Next.js 14 + Tailwind CSS recreation of the Rodam Treats Nigerian snack storefront. It is a one-page marketing and ordering experience with WhatsApp CTAs, product cards, Lagos delivery messaging, testimonials, and responsive layouts.

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Deploy to Vercel

Import the GitHub repository into Vercel. No environment variables are required for this static recreation. Replace the placeholder WhatsApp number `234XXXXXXXXXX` in `app/page.tsx` with the business number before production use.

The product photography is referenced from the public image URLs exposed by the original site so the push script remains lightweight and Colab-friendly.
