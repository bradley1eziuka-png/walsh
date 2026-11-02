// SEO helpers: per-page head tags (title, description, canonical, Open Graph,
// Twitter) and LocalBusiness structured data, all driven by site.config.json.
import { DEFAULT_CONTENT } from "@/config/defaults";
import { siteConfig } from "@/config";
import { BUSINESS_NAME, BUSINESS_PHONE, BUSINESS_PHONE_2, SITE_URL } from "./site-config";
import { IMAGES } from "./site-images";

const { business, seo } = siteConfig;

function absolute(pathOrUrl: string) {
  if (!pathOrUrl) return "";
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  return SITE_URL ? `${SITE_URL}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}` : pathOrUrl;
}

export const HOME_TITLE =
  seo.title || `Painting & Power Washing in Michigan City, IN | ${BUSINESS_NAME}`;

// "(219) 741-0481" -> "+1-219-741-0481"
function e164Dashed(display: string) {
  const d = display.replace(/\D/g, "").slice(-10);
  return `+1-${d.slice(0, 3)}-${d.slice(3, 6)}-${d.slice(6)}`;
}
export const HOME_DESCRIPTION = seo.description || DEFAULT_CONTENT.seo.description;

export function pageHead({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}) {
  const ogImage = absolute(seo.ogImage || image || IMAGES.hero);
  const url = SITE_URL ? `${SITE_URL}${path === "/" ? "" : path}` : "";
  return {
    meta: [
      { title },
      { name: "description", content: description },
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
    name: BUSINESS_NAME,
    legalName: business.legalName,
    ...(business.yearsInBusiness && {
      description: `Painting and power washing company with ${business.yearsInBusiness} years of experience serving Michigan City, Indiana and nearby Lake Michigan communities.`,
    }),
    telephone: e164Dashed(BUSINESS_PHONE),
    image: absolute(IMAGES.hero),
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
    ...(business.serviceAreas.length > 0 && {
      areaServed: business.serviceAreas.map((name) => ({ "@type": "Place", name })),
    }),
    ...(sameAs.length > 0 && { sameAs }),
  };
  return JSON.stringify(data);
}
