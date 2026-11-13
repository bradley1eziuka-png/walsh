// SEO helpers: per-page head tags (title, description, canonical, Open Graph,
// Twitter) and LocalBusiness structured data, all driven by site.config.json.
import { DEFAULT_CONTENT } from "@/config/defaults";
import { siteConfig } from "@/config";
import { BUSINESS_NAME, BUSINESS_PHONE, BUSINESS_PHONE_2, SITE_URL } from "./site-config";
import { IMAGES, ogImagePath } from "./site-images";
import { SERVICE_LIST } from "./services-data";

const { business, seo } = siteConfig;

function absolute(pathOrUrl: string) {
  if (!pathOrUrl) return "";
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  return SITE_URL ? `${SITE_URL}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}` : pathOrUrl;
}

// Appends the brand to a page title only while the result stays within roughly
// what Google displays (~65 characters), falling back to a shorter brand.
export function withBrand(title: string) {
  for (const brand of [BUSINESS_NAME, "Walsh Painting"]) {
    const full = `${title} | ${brand}`;
    if (full.length <= 66) return full;
  }
  return title;
}

export const HOME_TITLE = seo.title || withBrand("Painting Contractors in Michigan City, IN");

// "(219) 741-0481" -> "+1-219-741-0481"
function e164Dashed(display: string) {
  const d = display.replace(/\D/g, "").slice(-10);
  return `+1-${d.slice(0, 3)}-${d.slice(3, 6)}-${d.slice(6)}`;
}
export const HOME_DESCRIPTION = seo.description || DEFAULT_CONTENT.seo.description;

export type JsonLd = Record<string, unknown>;

const BUSINESS_ID = SITE_URL ? `${SITE_URL}/#business` : undefined;

export function canonicalUrl(path: string) {
  if (!SITE_URL) return "";
  return `${SITE_URL}${path === "/" ? "/" : path}`;
}

// BreadcrumbList for inner pages: Home > [parent >] page.
export function breadcrumbJsonLd(crumbs: { name: string; path: string }[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...crumbs].map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      ...(SITE_URL && { item: canonicalUrl(c.path) }),
    })),
  };
}

// FAQPage markup. Only pass FAQs that are visible on the page.
export function faqJsonLd(faqs: readonly { q: string; a: string }[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

const STATE_NAMES: Record<string, string> = { IN: "Indiana", MI: "Michigan" };
function areaServedJsonLd() {
  return business.serviceAreas.map((label) => {
    const [city, st] = label.split(",").map((x) => x.trim());
    const state = st ? STATE_NAMES[st] : undefined;
    return {
      "@type": "City",
      name: city,
      ...(state && { containedInPlace: { "@type": "State", name: state } }),
    };
  });
}

// A single service, offered by the business, for the areas it confirmed.
export function serviceJsonLd(service: {
  title: string;
  seoDescription: string;
  path: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.seoDescription,
    serviceType: service.title,
    ...(SITE_URL && { url: canonicalUrl(service.path) }),
    provider: BUSINESS_ID
      ? { "@type": "HousePainter", "@id": BUSINESS_ID, name: BUSINESS_NAME }
      : { "@type": "HousePainter", name: BUSINESS_NAME },
    areaServed: areaServedJsonLd(),
  };
}

export function pageHead({
  title,
  description,
  path,
  image,
  jsonLd = [],
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  jsonLd?: JsonLd[];
}) {
  const ogImage = absolute(seo.ogImage || ogImagePath(image || IMAGES.hero));
  const url = canonicalUrl(path);
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: ogImage },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: BUSINESS_NAME },
      { property: "og:locale", content: seo.locale },
      ...(url ? [{ property: "og:url", content: url }] : []),
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
    ],
    links: url ? [{ rel: "canonical", href: url }] : [],
    scripts: jsonLd.map((data) => ({
      type: "application/ld+json",
      children: JSON.stringify(data),
    })),
  };
}

// schema.org HousePainter (a LocalBusiness subtype). Only fields the client
// actually provided are emitted — nothing is invented.
export function localBusinessJsonLd() {
  const a = business.address;
  // The street address is included only when business.showStreetAddress is true.
  const street = business.showStreetAddress ? a.street : "";
  const hasAddress = Boolean(street || a.city || a.state || (business.showStreetAddress && a.zip));
  const sameAs = Object.values(business.social).filter(Boolean);
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "HousePainter",
    ...(BUSINESS_ID && { "@id": BUSINESS_ID }),
    name: BUSINESS_NAME,
    legalName: business.legalName,
    ...(business.yearsInBusiness && {
      description: `Painting and power washing company with ${business.yearsInBusiness} years of experience serving Michigan City, Indiana and nearby Lake Michigan communities.`,
    }),
    telephone: e164Dashed(BUSINESS_PHONE),
    image: absolute(ogImagePath(IMAGES.hero)),
    ...(SITE_URL && { url: SITE_URL }),
    ...(business.email && { email: business.email }),
    ...(BUSINESS_PHONE_2 && {
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer service",
          telephone: e164Dashed(BUSINESS_PHONE_2),
          availableLanguage: "English",
        },
      ],
    }),
    ...(hasAddress && {
      address: {
        "@type": "PostalAddress",
        ...(street && { streetAddress: street }),
        ...(a.city && { addressLocality: a.city }),
        ...(a.state && { addressRegion: a.state }),
        ...(business.showStreetAddress && a.zip && { postalCode: a.zip }),
        addressCountry: "US",
      },
    }),
    ...(business.serviceAreas.length > 0 && { areaServed: areaServedJsonLd() }),
    ...(SERVICE_LIST.length > 0 && {
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Painting and power washing services",
        itemListElement: SERVICE_LIST.map((svc) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: svc.title, description: svc.seoDescription },
        })),
      },
    }),
    ...(sameAs.length > 0 && { sameAs }),
  };
  return JSON.stringify(data);
}
