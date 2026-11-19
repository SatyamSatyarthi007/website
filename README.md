# Atelier Vauclaire — Haute Horlogerie & High Jewellery

A production-ready luxury brand website engineered with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS**. Designed with an editorial, understated aesthetic inspired by heritage Swiss watchmakers and Place Vendôme fine jewellery houses.

---

## Brand Architecture & Collections

- **Brand Name:** VAUCLAIRE (`Atelier Vauclaire · Genève · Paris · New York`)
- **Visual Direction:** Editorial luxury palette comprising deep obsidian charcoal (`#09090b`), warm ivory (`#faf7f2`), travertine beige (`#dfcaa9`), and muted champagne gold (`#c5a880`).
- **Typography:** Refined serif display headlines (*Cinzel*) paired with precision modern sans-serif body copy (*Plus Jakarta Sans*).
- **Product Lines:**
  1. **High Jewellery Rings:** Singular solitaire diamonds, unheated Ceylon sapphires, and Colombian emeralds in 950 platinum and fairmined gold.
  2. **Bespoke Watches:** Openworked 60-second flying tourbillons, vitreous Grand Feu enamel chronographs, and astronomical meteorite moonphases.
  3. **Bespoke Leather Watch Straps:** Hand-cut French Barénia calfskin, certified Louisiana alligator belly, and Tuscan nubuck with traditional double-needle saddler's saddle stitching.

---

## Key Features & User Experience

- **Cinematic Editorial Home (`/`):** Full-bleed chiaroscuro still life hero photography, concise brand manifesto, primary CTA ("Explore the Collection"), three category showcase cards, atelier regulation teaser, and private salon booking invitation.
- **Interactive Collections Gallery (`/collections`):**
  - Instant category filtering (*All Collections*, *High Jewellery Rings*, *Bespoke Watches*, *Bespoke Leather Straps*).
  - Live search across gemstones, calibers, and leather types.
  - Sorting by featured editions and indicative bespoke tiers.
  - **Dossier & Macro Zoom Lightbox:** Click-to-zoom optical inspection under simulated 10x magnification, full horological/gemological specifications table, and direct link sharing.
  - **Configurable External Checkout:** "Buy Now" links to external payment or concierge invoice URLs without simulating false on-site payments.
- **Atelier Storytelling (`/about`):** Authentic focus on craftsmanship, material purity (RJC-certified diamonds, unheated corundum, CITES-certified leather), and a 4-stage bespoke commission workflow (*Aesthetic Dialogue*, *Rare Sourcing*, *Artisanal Execution*, *Archival Provenance*). Zero invented false historical claims.
- **Private Concierge & Contact (`/contact`):** Private consultation booking form with instant client-side validation, inquiry routing, and direct salon addresses (*Genève, Paris, New York*).
- **SEO & Performance:** Automated `sitemap.xml`, `robots.txt`, OpenGraph cards, Twitter preview metadata, and full reduced-motion accessibility.
- **Zero-Dependency Icons:** Bespoke SVG icon set with 1.25px luxury hairline strokes, avoiding fragile external icon packages.

---

## Project Structure

```
├── public/
│   └── images/
│       ├── brand/
│       │   ├── hero-montage.jpg           # Hero still life photography
│       │   └── atelier-craftsmanship.jpg  # Watchmaker workbench photography
│       └── products/
│           ├── rings/                     # High jewellery ring macro photography
│           ├── watches/                   # Haute horlogerie timepieces
│           └── straps/                    # Hand-stitched leather watch straps
├── src/
│   ├── app/
│   │   ├── layout.tsx                     # Root layout, Google fonts, metadata
│   │   ├── globals.css                    # Design tokens & glassmorphic materials
│   │   ├── page.tsx                       # Home page
│   │   ├── collections/page.tsx           # Gallery, filters, search & lightbox
│   │   ├── about/page.tsx                 # Atelier storytelling & craftsmanship
│   │   ├── contact/page.tsx               # Concierge inquiry & booking form
│   │   ├── sitemap.ts                     # Dynamic SEO sitemap
│   │   └── robots.ts                      # SEO robots.txt
│   ├── components/
│   │   ├── Navbar.tsx                     # Translucent glass header & mobile drawer
│   │   ├── Footer.tsx                     # Editorial footer & salon addresses
│   │   ├── ProductCard.tsx                # Product card with hover inspect trigger
│   │   ├── ProductLightbox.tsx            # Fullscreen modal with interactive zoom
│   │   └── Icons.tsx                      # Zero-dependency bespoke luxury SVG icons
│   ├── data/
│   │   └── catalog.ts                     # Centralized product catalog & specs
│   └── lib/
│       └── config.ts                      # Centralized brand settings & URLs
```

---

## Local Setup & Development

### 1. Prerequisites
- Node.js `v18.18+` or `v20+` or `v22+`
- npm `v9+` or `v10+`

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
```
This produces an optimized static export/production bundle. Run `npm start` to test the production build locally.

---

## Customization Guide

### 1. Editing Brand Details, Addresses & Social Links
Open [`src/lib/config.ts`](file:///c:/Users/satyam/Documents/freelance/src/lib/config.ts):
```typescript
export const BRAND_CONFIG = {
  name: "VAUCLAIRE",
  fullName: "Atelier Vauclaire",
  tagline: "Fine Jewellery & Bespoke Horology",
  url: "https://your-custom-domain.com",
  concierge: {
    email: "concierge@yourbrand.com",
    phone: "+41 22 ...",
    addresses: [...],
  },
  social: {
    instagram: "https://instagram.com/...",
  },
};
```

### 2. Adding or Editing Products
Open [`src/data/catalog.ts`](file:///c:/Users/satyam/Documents/freelance/src/data/catalog.ts). Every product is defined with strict TypeScript typing:
```typescript
{
  id: "unique-product-slug",
  name: "Creation Name",
  category: "rings" | "watches" | "straps",
  categoryLabel: "High Jewellery Rings",
  editionBadge: "Unique Commission",
  shortDescription: "Editorial summary...",
  fullDescription: "Detailed technical and gemological dossier...",
  indicativePrice: "$48,000 USD · Indicative Bespoke Tier",
  numericPrice: 48000,
  image: "/images/products/rings/your-image.jpg",
  materials: ["18k Gold", "Natural Emerald"],
  specs: [
    { label: "Center Gem", value: "4.50 ct Colombian Emerald" },
    { label: "Metal", value: "Solid 950 Platinum" }
  ],
  checkoutUrl: "https://checkout.stripe.com/c/pay/your-live-link",
  featured: true
}
```

### 3. Replacing Product Photos
Place your high-resolution product photography into:
- Rings: `public/images/products/rings/`
- Watches: `public/images/products/watches/`
- Straps: `public/images/products/straps/`
- Brand Visuals: `public/images/brand/`

Format recommendations:
- High quality JPEG or WebP
- Recommended aspect ratio: `4:3` for products, `16:9` for hero banners
- Dimensions: `1600 × 1200 px` or larger

### 4. Configuring Checkout URLs
By design, luxury bespoke creations avoid generic on-site shopping carts. Each piece supports a direct `checkoutUrl` in `src/data/catalog.ts`. You can link to:
- **Stripe Payment Links:** Create a pre-configured Payment Link in your Stripe Dashboard.
- **Shopify Buy Button:** Paste a direct product checkout permalink (`https://store.myshopify.com/cart/variant_id:1`).
- **Atelier Concierge Invoicing:** Link to your private client payment portal or wire instruction dossier.

### 5. Connecting the Contact Form
In [`src/app/contact/page.tsx`](file:///c:/Users/satyam/Documents/freelance/src/app/contact/page.tsx), the contact form validates inputs and displays a development confirmation. To connect a live backend service:
- **Formspree:** Set the form action to `https://formspree.io/f/your_form_id` and POST `formData`.
- **Resend / Next.js Server Action:** Create an API route in `src/app/api/contact/route.ts` that sends transactional emails via the `resend` SDK.

---

## Pre-Launch Checklist

1. [ ] **Domain Registration:** Purchase your custom domain (e.g. `atelier-vauclaire.com`).
2. [ ] **Hosting:** Deploy to [Vercel](https://vercel.com) or [Netlify](https://netlify.com) by connecting your Git repository. Next.js will build automatically.
3. [ ] **Update Production URL:** Update `url` in `src/lib/config.ts` so the canonical URLs, OpenGraph metadata, and `sitemap.xml` reference your live domain.
4. [ ] **Checkout Links:** Replace the placeholder Stripe checkout URLs in `src/data/catalog.ts` with your live payment links.
5. [ ] **Contact Form Endpoint:** Connect your live email delivery service in `src/app/contact/page.tsx`.
6. [ ] **DNS Records:** Point your domain's `A` and `CNAME` records to your hosting provider and enable automated SSL/TLS.
