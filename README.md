# NOORE storefront draft

A Next.js App Router frontend draft for NOORE, focused exclusively on hijabs. Abayas are the only product category planned for a future extension. The catalogue and all commerce interactions in this project are explicitly illustrative; this is not a live store.

## Run locally

Requirements: Node.js 20.9 or later and npm.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Available project checks:

```bash
npm run lint
npm run typecheck
npm run build
```

Copy `.env.example` to `.env.local` only if you need to set `NEXT_PUBLIC_SITE_URL` for canonical URLs and sitemap output. There are no required secrets or external service keys in this draft.

## Routes

- `/` — editorial homepage
- `/shop` — all 10 sample hijab styles
- `/collections/hijabs` — the current collection with filters and sorting
- `/products/[slug]` — sample product detail, abstract artwork studies, variant selection and related styles
- `/search?q=...` — local sample catalogue search
- `/cart`, `/wishlist`, `/checkout` — browser-persisted bag and wishlist, plus a non-submitting checkout preview
- `/account`, `/account/sign-in`, `/account/create`, `/account/profile`, `/account/addresses` — account experience previews without authentication or personal-data collection
- `/orders`, `/orders/demo-order`, `/tracking`, `/returns` — labelled order, tracking and return interface previews
- `/about`, `/contact`, `/shipping`, `/privacy`, `/terms` — brand and policy information, with missing business copy called out
- `/sitemap.xml`, `/robots.txt` — generated routes; crawling is disabled for this preview

## Structure

- `src/data/catalogue.ts` — the only sample catalogue source. It contains exactly 10 fictional hijab products. Product and variant IDs are stable within the sample set.
- `src/types/commerce.ts` — frontend product, image, variant, cart and commerce-adapter contracts.
- `src/components/storefront-provider.tsx` — one local cart and wishlist state layer. It persists non-sensitive preview state in browser local storage.
- `src/components/` — shared header, footer, brand marks, gallery, product cards, collection controls, cart drawer, newsletter feedback and visual shell.
- `src/app/` — App Router pages and metadata.
- `src/app/globals.css` — design tokens and responsive layouts.
- `.env.example` — public site URL placeholder only; no secret values.

## Sample content and imagery

All 10 product names, descriptions, SKUs, INR prices, dates, colour labels, variants and availability flags are fictional sample data. The sample prices and availability are not verified business information. Each product card and product page identifies sample data.

Product visuals are original abstract SVG artwork placeholders rendered in the interface. They use textile drape shapes and botanical line art in the NOORE palette. No product photography, people imagery, or AI generated models are used. Replace the artwork studies with approved NOORE product assets only when the real catalogue is ready.

The supplied official NOORE logo appears in the light blush and dark burgundy treatments in the header and footer. Their cropped, lossless web assets are `public/images/noore-logo-light.webp` and `public/images/noore-logo-dark.webp`; the original supplied images remain the source artwork. The storefront uses a minimal marketplace layout with the brand's blush and rich burgundy palette.

## Prototype boundary

**Working frontend interactions:** local catalogue search, category filtering, price/colour/size/availability controls, sorting, load-more, product detail routes, artwork study switching, variant selection, local bag, quantity changes, removal, subtotal, bag count, browser-persisted wishlist and newsletter preview feedback.

**Preview-only or not connected:** all products/prices/stock; checkout form validation; account, sign-in and account creation; sample order record; shipment tracking; return request; newsletter subscription; reviews; contact and policies. No payment credentials are collected, no orders or returns are created, no tracking events are fabricated as live, and no customer account data is persisted. Cart totals are local display values; a trusted backend must recalculate prices and availability.

## Integration points for production

Replace `src/data/catalogue.ts` with a server-side catalogue adapter that supplies product, variant, price and inventory data. Keep cart operations behind a commerce adapter and let the server validate stock and totals. Add the chosen platform's secure customer authentication and account/order APIs. Create payment sessions through trusted server-side operations, validate asynchronous payment events, and only then confirm an order. Connect a carrier for serviceability, shipping costs, shipment tracking and return eligibility. Reviews and newsletter signup also need approved persistence providers.

No real payment, authentication, database, shipment, order-management, review or mailing-list service is installed.

## Information NOORE must provide before production

- Brand font files or licensing guidance if applicable. The supplied official logo artwork is currently used with its original blush and burgundy background treatments.
- Final product photos, approved product names, descriptions, prices, comparison prices, SKU/variant identifiers, sizes, colour names, stock and any verified materials/care details.
- Business name and legal identity, customer-support contacts, approved social links and any required business address.
- Shipping carrier, service areas, shipping prices/taxes, dispatch estimates, delivery wording and issue-resolution process.
- Approved returns, exchange and refund policy, eligibility rules and support workflow.
- Privacy notice, terms and any other reviewed policies.
- Commerce platform, payment provider, customer-account setup and authorized integration credentials supplied through secure environment configuration.
- Newsletter provider, consent wording, and customer review policy if those features are enabled.

The website should not be launched until these business details, policies and real backend behavior are reviewed and connected.
