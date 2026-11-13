# Walsh Painting & Powerwashing website

TanStack Start + React + Tailwind v4. Almost all business content lives in `src/config/site.config.json`
(name, phones, email, service areas, services enabled, SEO, form). Page copy defaults are in
`src/config/defaults.ts`, services in `src/lib/services-data.ts`, service-area pages in `src/lib/areas-data.ts`.

```bash
npm install
npm run dev        # preview
npm run build      # production build (writes sitemap.xml/robots.txt first if a site URL is set)
npm run typecheck && npm run lint
npm run check      # pre-launch checklist: flags demo form, leftover template strings
```

## Before launch

- **Estimates are by phone.** There are no online forms; every estimate CTA is a `tel:` link to (219) 741-0481.
- **BBB credentials are TEMPORARILY HIDDEN** (`business.bbb.verified` is `false`) because the BBB listing is
  under the former business name. The text and profile URL are preserved in `site.config.json`. Once BBB
  updates the listing, re-verify it, then set `verified` to `true` to restore the hero, Why Choose Us,
  About, and footer mentions. Only claim what the live profile shows. No BBB logo/seal without permission.
- **Domain**: set `seo.siteUrl` (or the `SITE_URL` / `VITE_SITE_URL` env var) to enable canonical tags,
  OG URLs, sitemap.xml, and the robots.txt Sitemap line.
- **Street address**: `business.showStreetAddress` is `false`. Set `true` only if the owner wants
  430 Hayes Avenue shown publicly.
- **Photos**: images in `public/images` (except `walsh-mascot*.png`, `power-washing.jpg`) are generic
  placeholders; replace via `branding.images` with real Walsh project photos.
