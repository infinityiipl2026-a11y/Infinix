# Infinix — Product Showcase Website

A modern, minimal, image-focused showcase site for **Infinix**, a home-objects
studio (candles, diffusers, and light objects). Built with Next.js 14 (App
Router), React, TypeScript, and Tailwind CSS. Display-only — there is no
cart, checkout, or payment flow anywhere in the app.

## Design direction

Inspired by the calm, editorial feel of studio brands like Otherland, but
built into its own identity:

- **Palette** — warm bone background (`#EDE8E0`), near-black ink
  (`#14181A`), a muted clay/taupe accent (`#A28A68`), and a deep moss green
  used sparingly.
- **Type** — Fraunces (a warm, characterful serif) for display headlines,
  Inter for body copy, and JetBrains Mono for eyebrows, labels, prices, and
  navigation — a small nod to the brand's name and a numeric, systematic
  counterpoint to the serif.
- **Signature element** — a single continuous "infinity loop" line (see
  `components/InfinityDivider.tsx`) used as a section divider instead of a
  generic rule, drawing itself in once as it scrolls into view.
- **Imagery treatment** — every photograph passes through `ImageFrame.tsx`,
  which applies a consistent warm, desaturated overlay so the visual world
  feels like one collection.

## Pages

- `/` — Home: hero, brand statement, featured pieces, studio teaser,
  collections, closing CTA.
- `/about` — Studio story, philosophy, four-step process, studio gallery.
- `/shop` — Full catalogue with category filtering (`?category=Candles`, etc).
- `/shop/[slug]` — Product detail: gallery, description, spec sheet, related
  pieces. Statically generated for every product.
- `/contact` — Studio info and an enquiry form (client-side only — wire it
  up to an API route or form service for production use).

## Placeholder imagery

Product photography uses seeded placeholder images
(`https://picsum.photos/seed/...`) via `lib/image.ts`, so the site runs out
of the box with no image assets required. Swap `imageUrl()` calls for real
product photography when ready — the aspect ratios used throughout
(`aspect-[4/5]`, `aspect-square`, etc.) are the ones to preserve.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. Google Fonts (Fraunces, Inter, JetBrains Mono)
are fetched at build time via `next/font/google`, so an internet connection
is required for `npm run build` / `npm run dev`.

## Editing products

All product data lives in `lib/products.ts` — add, remove, or edit entries
there and the shop grid, filters, static product pages, and sitemap all
update automatically.

## SEO

Per-page metadata, Open Graph tags, `app/sitemap.ts`, and `app/robots.ts`
are already wired up. Update `metadataBase` in `app/layout.tsx` to your real
domain before deploying.
