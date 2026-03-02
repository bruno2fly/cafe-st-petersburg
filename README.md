# Cafe St. Petersburg Website

A restaurant website for **Cafe St. Petersburg** — an authentic Eastern European restaurant in Newton Centre, MA.

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Project Structure

- `src/app/` — App Router pages
- `src/components/` — Reusable components (Header, Footer, FAQAccordion, ImagePlaceholder)
- `src/lib/site-data.ts` — Single source of truth for business data, nav links, featured dishes, events, testimonials, FAQs

## Customization

Update `src/lib/site-data.ts` to change business info, hours, menu items, events, and more. Replace `ImagePlaceholder` components with real images by adding files to `public/images/` and using the Next.js `Image` component.
