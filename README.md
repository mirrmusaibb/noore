# NOORE — Where Haya Blooms

A responsive Next.js storefront for NOORE, focused on two collections: hijabs and abayas. The design uses the official NOORE marks, a rich burgundy and warm ivory palette, and original botanical artwork in place of product photography.

## Run locally

Requirements: Node.js 20.9 or later and npm.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Available checks:

```bash
npm run lint
npm run typecheck
npm run build
```

Set `NEXT_PUBLIC_SITE_URL` to the production host when building if it differs from the NOORE domain. No service secrets are needed for the current frontend.

## Routes

- `/` — editorial homepage and hijab spotlight
- `/shop` — both collections
- `/collections/hijabs` and `/collections/abayas` — collection pages with price filtering and sorting
- `/products/[slug]` — product artwork, details, wishlist and local bag actions
- `/search?q=...` — local search across the catalogue
- `/cart`, `/wishlist`, `/checkout` — browser-persisted bag and wishlist; checkout does not accept orders
- `/account/*`, `/orders`, `/tracking` — account and order pages without a connected customer backend
- `/about`, `/contact`, `/shipping`, `/returns`, `/privacy`, `/terms` — brand and business information
- `/sitemap.xml`, `/robots.txt` — generated SEO routes

## Structure

- `src/data/catalogue.ts` — centralized catalogue with 10 hijabs and 10 abayas
- `src/types/commerce.ts` — product, image, variant and cart types
- `src/components/storefront-provider.tsx` — local cart and wishlist state
- `src/components/` — responsive navigation, artwork, product cards, collection controls, carousels and cart drawer
- `src/app/` — App Router pages, metadata and responsive design system
- `public/images/` — official NOORE logo treatments

## Catalogue and commerce

Product visuals are original vector artwork, not product photos or model imagery. Product names and prices in the centralized catalogue are proposed content and must be confirmed against NOORE's approved catalogue before orders open.

Bag and wishlist changes persist in the browser. A real payment provider, delivery service, customer accounts, order management, inventory and reviewed business policies are not connected. The checkout page is intentionally non-submitting until those services are configured.

## Before orders open

Replace proposed catalogue details with approved names, prices, images, variants and verified product information. Supply NOORE's confirmed brand story, support details, social links, shipping information, return policy, privacy notice and terms. Connect and verify a commerce backend and payment provider before accepting customer orders.
