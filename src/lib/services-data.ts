// ───────────────────────────────────────────────────────────────────────────
// Service content for Walsh Painting & Powerwashing.
//
// Every service page is generated from this single source of truth so all
// pages share one voice, layout, and visual system. Copy only describes
// services Walsh actually provides; it makes no license, insurance, rating,
// or "damage-free" claims.
//
// To hide a service, remove its key from site.config.json → services.enabled.
// Its page then returns 404 and it disappears from the nav, footer, homepage,
// and form dropdown.
// ───────────────────────────────────────────────────────────────────────────

import { siteConfig, type ServiceKey } from "@/config";
import { IMAGES } from "./site-images";

export type ServiceStep = { number: string; title: string; description: string };
export type ServiceBenefit = { title: string; description: string };
export type ServiceFaq = { q: string; a: string };
export type GalleryItem = { src: string; alt: string; label: string };

export interface ServiceConfig {
  slug: string;
  path: string;
  title: string;
  eyebrow: string;
  shortDescription: string;
  // Used in the <title> and meta description (keyword-focused).
  seoTitle: string;
  seoDescription: string;
  includes: string[];
  explanation: { title: string; body: string };
  benefits: ServiceBenefit[];
  process: ServiceStep[];
  gallery: GalleryItem[];
  faqs: ServiceFaq[];
  heroImage: string;
  heroAlt: string;
}

const SHARED_PROCESS: ServiceStep[] = [
  {
    number: "01",
    title: "Give Us a Call",
    description: "Tell us about the property and what you'd like done.",
  },
  {
    number: "02",
    title: "Talk Through the Details",
    description:
      "We'll go over the surfaces, the prep involved, and your timing so you know what to expect.",
  },
  {
    number: "03",
    title: "Careful Work, Clean Finish",
    description:
      "We protect surrounding surfaces while we work and clean up when the job is finished.",
  },
];

const BASE_SERVICES = {
  exterior: {
    slug: "exterior-painting",
    path: "/services/exterior-painting",
    title: "Exterior Painting",
    eyebrow: "Exterior Painting",
    shortDescription:
      "Residential exterior painting built on proper preparation, careful workmanship, and respect for your property.",
    seoTitle: "Exterior Painting in Michigan City, IN",
    seoDescription:
      "Exterior house painting in Michigan City, IN, from Walsh Painting & Powerwashing. 23 years of careful prep and workmanship. Serving Northwest Indiana. Call for an estimate.",
    includes: [
      "Residential exterior painting",
      "House painting",
      "Exterior surface preparation",
      "Deck painting",
      "Painting after necessary surface repairs",
    ],
    explanation: {
      title: "Preparation Is Where a Good Paint Job Starts",
      body: "A fresh exterior coat only looks good, and lasts, when the surface underneath is ready for it. We clean and prepare the surfaces first, then paint with care for your home and everything around it. Lake Michigan weather is hard on exteriors, with wind, moisture, sun, and freezing winters, so preparation matters. If repairs are needed before painting, we can coordinate with experienced carpenters to help get the property ready.",
    },
    benefits: [
      {
        title: "Thorough Preparation",
        description:
          "Cleaning and surface prep come first, so the new paint has a sound surface to work with.",
      },
      {
        title: "Careful Workmanship",
        description:
          "Clean lines and even coverage, done with attention to the details homeowners notice.",
      },
      {
        title: "Respect for Your Property",
        description:
          "We protect surrounding surfaces while we work and clean up when the job is done.",
      },
    ],
    process: SHARED_PROCESS,
    gallery: [
      {
        src: IMAGES.svcExterior,
        alt: "Blue craftsman-style home with freshly painted siding, white trim and a landscaped entry",
        label: "Home Exterior",
      },
      {
        src: IMAGES.svcRepairs,
        alt: "Home exterior with windows masked and repaired siding prepped for painting",
        label: "Prep & Repairs",
      },
      {
        src: IMAGES.svcPowerWashing,
        alt: "Painter power washing vinyl siding before painting",
        label: "Prep Cleaning",
      },
    ],
    faqs: [
      {
        q: "Do you clean the house before painting?",
        a: "Yes. Surface preparation, including cleaning, is part of how we approach exterior painting, and we can power wash the surfaces first.",
      },
      {
        q: "What if my house needs repairs before painting?",
        a: "When repairs are needed before painting, we can coordinate with experienced carpenters to help prepare your property for the job.",
      },
      {
        q: "When is the best time to paint an exterior?",
        a: "Weather and temperature matter for exterior finishes. Call us and we'll talk about timing for your project.",
      },
    ],
    heroImage: IMAGES.svcExterior,
    heroAlt:
      "Blue craftsman-style home with freshly painted siding, white trim and a landscaped entry",
  },

  powerWashing: {
    slug: "power-washing",
    path: "/services/power-washing",
    title: "Power Washing",
    eyebrow: "Professional Power Washing",
    shortDescription:
      "Professional power washing for houses, decks, driveways, and exterior surfaces, done with the surface and surrounding property in mind.",
    seoTitle: "Power Washing & Pressure Washing in Michigan City, IN",
    seoDescription:
      "Power washing and pressure washing in Michigan City, IN: houses, decks, driveways, and exterior surfaces. 23 years of experience. Call for an estimate from Walsh Painting & Powerwashing.",
    includes: [
      "House power washing",
      "Deck power washing",
      "Driveway power washing",
      "Exterior surface cleaning",
      "Surface preparation before painting",
    ],
    explanation: {
      title: "Cleaning Done Properly",
      body: "Power washing can freshen up a property quickly, but the wrong pressure or technique can harm the surface you're trying to clean. Our team knows how to clean surfaces properly without unnecessarily damaging the surrounding property. We choose our approach based on the surface in front of us, whether that's siding, a deck, or a driveway. Because every surface and situation is different, we'll talk through your property before we begin.",
    },
    benefits: [
      {
        title: "Method Matched to the Surface",
        description:
          "Siding, wood decks, and concrete each call for a different approach. We clean with the surface in mind.",
      },
      {
        title: "Care for Surrounding Property",
        description:
          "We work to avoid unnecessary damage to plants, windows, and nearby surfaces, and we clean up after.",
      },
      {
        title: "Ready for Paint or Stain",
        description:
          "Power washing is also the first step before painting or staining, so the finish goes onto a clean surface.",
      },
    ],
    process: SHARED_PROCESS,
    gallery: [
      {
        src: IMAGES.svcPowerWashing,
        alt: "Worker power washing mildew from the siding of a home",
        label: "House Washing",
      },
      {
        src: IMAGES.svcDeck,
        alt: "Wood deck being cleaned with a surface cleaner",
        label: "Deck Cleaning",
      },
    ],
    faqs: [
      {
        q: "What can you power wash?",
        a: "Houses, decks, driveways, and other exterior surfaces. If you have something else in mind, ask when you call.",
      },
      {
        q: "Will power washing damage my property?",
        a: "Our team knows how to clean surfaces properly without unnecessarily damaging the surrounding property. We choose our approach based on the surface, and we'll talk through any concerns beforehand.",
      },
      {
        q: "Can you wash the house before painting it?",
        a: "Yes. Cleaning the surface before painting is a common first step, and we offer both services.",
      },
    ],
    heroImage: IMAGES.svcPowerWashing,
    heroAlt: "Worker power washing mildew from the siding of a home",
  },

  deck: {
    slug: "deck-services",
    path: "/services/deck-services",
    title: "Deck Cleaning, Painting & Staining",
    eyebrow: "Deck Services",
    shortDescription:
      "Deck power washing, staining, painting, and preparation to bring a weathered deck back to life.",
    seoTitle: "Deck Staining & Deck Power Washing in Michigan City, IN",
    seoDescription:
      "Deck staining, deck painting, and deck power washing in Michigan City, IN and nearby Lake Michigan communities. Call for an estimate from Walsh Painting & Powerwashing.",
    includes: [
      "Deck power washing",
      "Deck staining",
      "Deck painting",
      "Deck surface preparation",
      "Coordination of necessary deck repairs",
    ],
    explanation: {
      title: "From Weathered to Refreshed",
      body: "Sun, rain, snow, and lake air take a toll on decks. A good refresh starts with cleaning and preparing the surface, then applying stain or paint. We handle deck power washing, staining, and painting, and if boards or railings need repair first, we can coordinate with experienced carpenters to help prepare the deck for the job.",
    },
    benefits: [
      {
        title: "Clean Start",
        description:
          "Deck power washing removes built-up grime so stain or paint can be applied to a prepared surface.",
      },
      {
        title: "Stain or Paint",
        description:
          "Choose a stain that shows the wood, or a paint finish. We'll talk through which suits your deck.",
      },
      {
        title: "Repairs Coordinated",
        description:
          "If something needs fixing before the finish goes on, we can coordinate with carpenters.",
      },
    ],
    process: SHARED_PROCESS,
    gallery: [
      {
        src: IMAGES.svcDeck,
        alt: "Wood deck being cleaned with a surface cleaner before staining",
        label: "Deck Cleaning",
      },
      {
        src: IMAGES.svcPowerWashing,
        alt: "Worker power washing the siding of a home",
        label: "Surface Cleaning",
      },
    ],
    faqs: [
      {
        q: "Do you stain decks?",
        a: "Yes. Deck staining is one of our services, along with deck power washing and deck painting.",
      },
      {
        q: "Should I stain or paint my deck?",
        a: "It depends on the condition of the wood and the look you want. We're happy to talk through the options when you call.",
      },
      {
        q: "What if my deck needs repairs?",
        a: "When repairs are needed, we can coordinate with experienced carpenters before the finish is applied.",
      },
    ],
    heroImage: IMAGES.svcDeck,
    heroAlt: "Wood deck being cleaned with a surface cleaner before staining",
  },

  interior: {
    slug: "interior-painting",
    path: "/services/interior-painting",
    title: "Interior Painting",
    eyebrow: "Interior Painting",
    shortDescription:
      "Interior painting for homeowners, done carefully, with attention to preparation and a tidy finish.",
    seoTitle: "Interior Painting in Michigan City, IN",
    seoDescription:
      "Interior house painting in Michigan City, IN and Northwest Indiana from Walsh Painting & Powerwashing. Careful prep and clean work. Call for an estimate.",
    includes: ["Interior painting", "Careful preparation", "Tidy, protected work areas"],
    explanation: {
      title: "A Fresh Look Inside",
      body: "Alongside our exterior work, we also paint interiors. The same priorities apply indoors: prepare the surfaces properly, protect what's around us, do careful work, and clean up when we're done. Tell us what you'd like painted and we'll talk through the details.",
    },
    benefits: [
      {
        title: "Careful Preparation",
        description: "Good prep helps the finish look right and hold up.",
      },
      {
        title: "Protected Surroundings",
        description: "We protect your floors and belongings while we work.",
      },
      {
        title: "Clean Finish",
        description: "We clean up when the job is finished.",
      },
    ],
    process: SHARED_PROCESS,
    gallery: [
      {
        src: IMAGES.svcInterior,
        alt: "Freshly painted living room with fireplace and bright windows",
        label: "Living Space",
      },
    ],
    faqs: [
      {
        q: "Do you paint interiors as well as exteriors?",
        a: "Yes. Exterior painting and power washing are our main focus, but we also take on interior painting.",
      },
      {
        q: "Do I need to move my furniture?",
        a: "Clearing the area helps. We'll talk through what's needed before we start.",
      },
    ],
    heroImage: IMAGES.svcInterior,
    heroAlt: "Freshly painted living room with fireplace and bright windows",
  },

  repairs: {
    slug: "exterior-preparation-repairs",
    path: "/services/exterior-preparation-repairs",
    title: "Exterior Prep & Coordinated Repairs",
    eyebrow: "Preparation & Repairs",
    shortDescription:
      "When repairs are needed before painting, we can coordinate with experienced carpenters to help prepare your property for the job.",
    seoTitle: "Home & Deck Repairs Before Painting in Michigan City, IN",
    seoDescription:
      "Surface preparation and coordinated carpentry repairs before painting in Michigan City, IN. Walsh Painting & Powerwashing works with experienced carpenters. Call for an estimate.",
    includes: [
      "Exterior surface preparation",
      "Cleaning before painting",
      "Coordination with carpenters for house or deck repairs",
    ],
    explanation: {
      title: "Fix It First, Then Finish It",
      body: "Paint and stain look their best on sound surfaces. If your house or deck needs repairs first, we work with carpenters who can handle them, and we coordinate the work so the property is ready for painting. Repairs are performed by the carpenters we work with, not a large in-house carpentry department, so we'll talk through the scope of your project up front.",
    },
    benefits: [
      {
        title: "One Point of Contact",
        description: "We help coordinate repairs and painting so you're not juggling it alone.",
      },
      {
        title: "Experienced Carpenters",
        description: "We work with carpenters who can repair decks and houses when needed.",
      },
      {
        title: "Ready for Paint",
        description: "Surfaces are cleaned and prepared before the finish goes on.",
      },
    ],
    process: SHARED_PROCESS,
    gallery: [
      {
        src: IMAGES.svcRepairs,
        alt: "Home exterior with windows masked and repaired siding prepped for painting",
        label: "Prep & Repairs",
      },
      {
        src: IMAGES.svcExterior,
        alt: "Finished home exterior with fresh paint",
        label: "Finished Exterior",
      },
    ],
    faqs: [
      {
        q: "Do you have carpenters on staff?",
        a: "We work with experienced carpenters who can repair decks or houses when necessary before painting. We coordinate the work with you.",
      },
      {
        q: "How do I know if repairs are needed?",
        a: "Describe the condition of your house or deck when you call, and we'll talk through what to expect.",
      },
    ],
    heroImage: IMAGES.svcRepairs,
    heroAlt: "Home exterior with windows masked and repaired siding prepped for painting",
  },
} satisfies Record<string, ServiceConfig>;

// Apply title/description overrides from site.config.json.
export const SERVICES = Object.fromEntries(
  Object.entries(BASE_SERVICES).map(([key, base]) => {
    const o = siteConfig.services.overrides[key as ServiceKey] ?? {};
    return [
      key,
      {
        ...base,
        ...(o.title ? { title: o.title } : {}),
        ...(o.shortDescription ? { shortDescription: o.shortDescription } : {}),
      },
    ];
  }),
) as Record<ServiceKey, ServiceConfig>;

export function isServiceEnabled(key: ServiceKey) {
  return siteConfig.services.enabled.includes(key);
}

// Ordered list for the header dropdown, footer links, and the home services grid.
export const SERVICE_LIST: ServiceConfig[] = siteConfig.services.enabled.map((k) => SERVICES[k]);
