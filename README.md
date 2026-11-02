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
- **Form delivery**: set `form.provider` to `formspree` + `formspreeId` (create a free form at formspree.io
  pointed at paintdows@yahoo.com), or `ghl-webhook` + `webhookUrl`. Until then the form runs in demo mode
  and never reports success.
- **SMS**: nothing sends texts today. Texting needs an external service (e.g. GoHighLevel/Twilio) with
  carrier A2P 10DLC registration. The form already captures an optional, unchecked SMS consent value
  (`sms_consent`) for that workflow.
- **Domain**: set `seo.siteUrl` (or the `SITE_URL` / `VITE_SITE_URL` env var) to enable canonical tags,
  OG URLs, sitemap.xml, and the robots.txt Sitemap line.
- **Street address**: `business.showStreetAddress` is `false`. Set `true` only if the owner wants
  430 Hayes Avenue shown publicly (footer, contact page, structured data).
- **Photos**: images in `public/images` (except `walsh-mascot*.png`, `power-washing.jpg`) are generic
  placeholders; replace via `branding.images` in the config with real Walsh project photos.
- **BBB**: the supplied logo shows a BBB badge; it is intentionally cropped out until verified.
