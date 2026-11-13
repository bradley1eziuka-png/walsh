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
  // Keyword-focused on-page H1 (the card/nav label stays `title`).
  h1: string;
  eyebrow: string;
  shortDescription: string;
  // Used in the <title> and meta description (keyword-focused).
  seoTitle: string;
  seoDescription: string;
  includes: string[];
  explanation: { title: string; body: string };
  // Extra paragraphs shown under the explanation (unique per service).
  details: string[];
  // Links to related services, with descriptive anchor text.
  related: { key: ServiceKey; label: string; text: string }[];
  benefits: ServiceBenefit[];
  process: ServiceStep[];
  gallery: GalleryItem[];
  faqs: ServiceFaq[];
  heroImage: string;
  heroAlt: string;
}

const BASE_SERVICES = {
  exterior: {
    slug: "exterior-painting",
    path: "/services/exterior-painting",
    title: "Exterior Painting",
    h1: "Exterior House Painting in Michigan City, IN",
    eyebrow: "Exterior Painting",
    shortDescription:
      "Residential exterior painting from Michigan City painters with 23 years of experience, built on proper preparation and careful workmanship.",
    seoTitle: "Exterior House Painting in Michigan City, IN",
    seoDescription:
      "Exterior house painting in Michigan City, IN from Walsh Painting & Powerwashing. 23 years of careful prep and clean work. Call (219) 741-0481 for an estimate.",
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
    details: [
      "Most homeowners call us when paint is fading, chalking, or peeling, when siding looks tired even after a wash, or when they want a fresh look before selling or after moving in. We start by talking through the surfaces you'd like painted, including any deck you'd like to match.",
      "Lake weather is hard on a home's exterior, with moisture, summer sun, and freeze-and-thaw winters, so cleaning and preparation are not steps to rush. We can power wash the exterior first, and when boards or trim need repair, we coordinate with experienced carpenters so the paint goes onto sound surfaces.",
    ],
    related: [
      {
        key: "powerWashing",
        label: "House washing before you paint",
        text: "A clean surface is the best starting point for new paint.",
      },
      {
        key: "repairs",
        label: "Exterior prep and coordinated repairs",
        text: "How we get a property ready when boards or trim need work.",
      },
      {
        key: "deck",
        label: "Deck staining and painting",
        text: "Refresh the deck to go with the house.",
      },
    ],
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
    process: [
      {
        number: "01",
        title: "Call and Describe the House",
        description: "Tell us about the home, which surfaces you'd like painted, and your timing.",
      },
      {
        number: "02",
        title: "Prepare the Surfaces",
        description:
          "Cleaning and surface prep come first, with repairs coordinated when they're needed.",
      },
      {
        number: "03",
        title: "Paint With Care",
        description:
          "We protect surrounding surfaces while we work and clean up when the job is finished.",
      },
    ],
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
      {
        q: "Which exterior surfaces can you paint?",
        a: "Tell us which exterior surfaces you'd like painted when you call and we'll go through them with you. We also paint decks.",
      },
      {
        q: "Which towns do you paint in?",
        a: "We're based in Michigan City and serve Chesterton, Valparaiso, Ogden Dunes, Lakeside, Michigan, and nearby Lake Michigan communities.",
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
    h1: "Pressure Washing & Power Washing in Michigan City, IN",
    eyebrow: "Professional Power Washing",
    shortDescription:
      "House washing, driveway pressure washing, and deck cleaning for Michigan City homeowners, done with the surface and the surrounding property in mind.",
    seoTitle: "Pressure Washing in Michigan City, IN",
    seoDescription:
      "Pressure washing and power washing in Michigan City, IN: house washing, driveways, decks, and siding. 23 years of experience. Call (219) 741-0481.",
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
    details: [
      "Over a season, siding collects dirt and green growth, driveways darken, and decks turn gray. Residential pressure washing clears that buildup and can make a home look noticeably fresher, sometimes without any painting at all.",
      "We wash houses, driveways, decks, and other exterior surfaces. Siding, wood, and concrete each respond differently, so we choose the method and pressure for the surface in front of us. If you plan to paint or stain afterward, washing is also the first step, so the new finish goes onto a clean surface.",
    ],
    related: [
      {
        key: "exterior",
        label: "Exterior house painting",
        text: "Washing is the first step before a fresh coat of paint.",
      },
      {
        key: "deck",
        label: "Deck cleaning, staining & painting",
        text: "Bring a weathered deck back after a good washing.",
      },
      {
        key: "repairs",
        label: "Exterior prep and coordinated repairs",
        text: "Surface prep and repairs ahead of painting.",
      },
    ],
    benefits: [
      {
        title: "Method Matched to the Surface",
        description:
          "Siding, wood decks, and concrete each call for a different approach. We clean with the surface in mind.",
      },
      {
        title: "Care for Surrounding Property",
        description:
          "We take care with the surrounding property, and we clean up when the job is done.",
      },
      {
        title: "Ready for Paint or Stain",
        description:
          "Power washing is also the first step before painting or staining, so the finish goes onto a clean surface.",
      },
    ],
    process: [
      {
        number: "01",
        title: "Tell Us What Needs Washing",
        description: "Describe the house, deck, or driveway and anything you're concerned about.",
      },
      {
        number: "02",
        title: "Match the Method to the Surface",
        description: "We talk through the surfaces and plan an approach that fits each one.",
      },
      {
        number: "03",
        title: "Wash and Clean Up",
        description: "We work with the surrounding property in mind and tidy up when we're done.",
      },
    ],
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
        q: "Is power washing the same as pressure washing?",
        a: "The two terms are used interchangeably. Both mean cleaning a surface with pressurized water, and what matters is choosing the right pressure and technique for the surface.",
      },
      {
        q: "What can you power wash?",
        a: "Houses, decks, driveways, and other exterior surfaces. If you have something else in mind, ask when you call.",
      },
      {
        q: "Can power washing damage my siding or deck?",
        a: "The wrong pressure or technique can harm a surface, which is why we choose our method based on what we're cleaning and talk through your property before we begin.",
      },
      {
        q: "Should I power wash before painting or staining?",
        a: "Cleaning the surface first is a common and important step before painting or staining, and we offer both services.",
      },
      {
        q: "Do you pressure wash driveways?",
        a: "Yes. Driveway power washing is one of the surfaces we clean, along with houses and decks.",
      },
    ],
    heroImage: IMAGES.svcPowerWashing,
    heroAlt: "Worker power washing mildew from the siding of a home",
  },

  deck: {
    slug: "deck-services",
    path: "/services/deck-services",
    title: "Deck Cleaning, Painting & Staining",
    h1: "Deck Staining, Cleaning & Painting in Michigan City, IN",
    eyebrow: "Deck Services",
    shortDescription:
      "Deck cleaning, power washing, staining, and painting to bring a weathered Michigan City deck back to life.",
    seoTitle: "Deck Staining in Michigan City, IN",
    seoDescription:
      "Deck staining, deck cleaning, and deck painting in Michigan City, IN. Power washing and surface prep from Walsh Painting & Powerwashing. Call (219) 741-0481.",
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
    details: [
      "A deck takes more punishment than almost any other part of the house: direct sun, rain, snow, foot traffic, and in our area, lake air. A gray, rough, or peeling surface is a sign the finish has worn down.",
      "We can handle the whole sequence: deck power washing to remove buildup, surface preparation, then stain or paint. Stain lets the wood show through, while paint gives a more solid color. Which one fits depends on the condition of the wood and the look you want, and we'll talk it through when you call.",
    ],
    related: [
      {
        key: "powerWashing",
        label: "Power washing",
        text: "Deck cleaning starts with the right pressure and technique.",
      },
      {
        key: "repairs",
        label: "Coordinated deck and exterior repairs",
        text: "Fix boards or railings first, then finish.",
      },
      {
        key: "exterior",
        label: "Exterior house painting",
        text: "Refresh the house along with the deck.",
      },
    ],
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
    process: [
      {
        number: "01",
        title: "Describe the Deck",
        description:
          "Tell us about its size, its condition, and whether you're leaning toward stain or paint.",
      },
      {
        number: "02",
        title: "Clean and Prepare",
        description:
          "Power washing and surface prep come first, with repairs coordinated if boards or railings need work.",
      },
      {
        number: "03",
        title: "Stain or Paint, Then Tidy Up",
        description:
          "The finish goes onto a prepared surface, and we clean up when the job is finished.",
      },
    ],
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
        q: "Do I need to clean the deck before staining?",
        a: "Cleaning and preparing the surface is the first step, and deck power washing is one of the services we offer.",
      },
      {
        q: "What if my deck needs repairs?",
        a: "When repairs are needed, we can coordinate with experienced carpenters before the finish is applied.",
      },
      {
        q: "Can you paint the house and the deck?",
        a: "Yes. We paint exteriors and decks, so you can talk through both projects in one call.",
      },
    ],
    heroImage: IMAGES.svcDeck,
    heroAlt: "Wood deck being cleaned with a surface cleaner before staining",
  },

  interior: {
    slug: "interior-painting",
    path: "/services/interior-painting",
    title: "Interior Painting",
    h1: "Interior Painters in Michigan City, IN",
    eyebrow: "Interior Painting",
    shortDescription:
      "Interior painting for Michigan City homeowners, done carefully with attention to preparation and a tidy finish.",
    seoTitle: "Interior Painters in Michigan City, IN",
    seoDescription:
      "Interior house painting in Michigan City, IN and Northwest Indiana from Walsh Painting & Powerwashing. Careful prep and a tidy finish. Call for an estimate.",
    includes: ["Interior painting", "Careful preparation", "Tidy cleanup"],
    explanation: {
      title: "A Fresh Look Inside",
      body: "Alongside our exterior work, we also paint interiors. The same priorities apply indoors: prepare the surfaces properly, protect what's around us, do careful work, and clean up when we're done. Tell us what you'd like painted and we'll talk through the details.",
    },
    details: [
      "A fresh coat of interior paint is one of the quickest ways to change how a room feels. Whether you're updating a single room or several, we start by talking through what you'd like painted and what condition the walls and trim are in.",
      "Exterior painting and power washing are our main focus, but we also paint interiors with the same habits: prepare the surfaces, protect the surrounding areas, work carefully, and clean up when we're finished.",
    ],
    related: [
      {
        key: "exterior",
        label: "Exterior house painting",
        text: "Our main focus, from preparation to finish.",
      },
      {
        key: "repairs",
        label: "Exterior prep and coordinated repairs",
        text: "How we handle repairs ahead of painting.",
      },
    ],
    benefits: [
      {
        title: "Careful Preparation",
        description: "Good prep helps the finish look right and hold up.",
      },
      {
        title: "Protected Surroundings",
        description: "We take care to protect the surrounding areas while we work.",
      },
      {
        title: "Clean Finish",
        description: "We clean up when the job is finished.",
      },
    ],
    process: [
      {
        number: "01",
        title: "Tell Us About the Rooms",
        description: "Describe what you'd like painted and when you'd like it done.",
      },
      {
        number: "02",
        title: "Prepare and Protect",
        description: "We prepare the surfaces and take care to protect the surrounding areas.",
      },
      {
        number: "03",
        title: "Paint and Clean Up",
        description: "Careful work, followed by a tidy finish when the job is complete.",
      },
    ],
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
      {
        q: "How do you protect my home while you paint?",
        a: "Protecting the surrounding areas is part of how we work, and we'll talk through your rooms and what needs covering before we start.",
      },
      {
        q: "What rooms can you paint?",
        a: "Tell us which rooms or areas you have in mind when you call and we'll talk through the details.",
      },
    ],
    heroImage: IMAGES.svcInterior,
    heroAlt: "Freshly painted living room with fireplace and bright windows",
  },

  repairs: {
    slug: "exterior-preparation-repairs",
    path: "/services/exterior-preparation-repairs",
    title: "Exterior Prep & Coordinated Repairs",
    h1: "Exterior Painting Preparation & Coordinated Repairs in Michigan City",
    eyebrow: "Preparation & Repairs",
    shortDescription:
      "Surface preparation and coordinated repairs before painting, so your Michigan City home or deck is ready for painting.",
    seoTitle: "Exterior Painting Prep in Michigan City, IN",
    seoDescription:
      "Exterior painting preparation and coordinated carpentry repairs in Michigan City, IN from Walsh Painting & Powerwashing. Call for an estimate.",
    includes: [
      "Exterior surface preparation",
      "Cleaning before painting",
      "Coordination with carpenters for house or deck repairs",
    ],
    explanation: {
      title: "Fix It First, Then Finish It",
      body: "Paint and stain look their best on sound surfaces. If your house or deck needs repairs first, we work with carpenters who can handle them, and we coordinate the work so the property is ready for painting. Repairs are performed by the carpenters we work with, not a large in-house carpentry department, so we'll talk through the scope of your project up front.",
    },
    details: [
      "Many paint problems start under the paint. Peeling, bare spots, and soft or damaged boards show up again quickly if they aren't dealt with first, which is why preparation matters as much as the finish itself.",
      "Preparation depends on the surface, and generally starts with cleaning. When boards, trim, or deck parts need repair, we coordinate the work with experienced carpenters so the property is ready for painting. Because the repairs are done by carpenters we work with, we'll go over the scope with you up front.",
    ],
    related: [
      {
        key: "exterior",
        label: "Exterior house painting",
        text: "The finish that follows good preparation.",
      },
      {
        key: "powerWashing",
        label: "Power washing",
        text: "Cleaning is the first step of surface prep.",
      },
      {
        key: "deck",
        label: "Deck cleaning, painting & staining",
        text: "Deck repairs and refinishing.",
      },
    ],
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
    process: [
      {
        number: "01",
        title: "Describe the Condition",
        description:
          "Tell us what you're seeing on the house or deck: peeling paint, soft boards, damaged trim.",
      },
      {
        number: "02",
        title: "Plan the Prep and Repairs",
        description:
          "We talk through the preparation and any carpentry that should happen before painting.",
      },
      {
        number: "03",
        title: "Prepare, Repair, Finish",
        description:
          "Surfaces are prepared and repairs coordinated so the finish goes onto a sound surface.",
      },
    ],
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
      {
        q: "Who does the repairs?",
        a: "Repairs are performed by the carpenters we work with, and we coordinate the work so painting follows smoothly.",
      },
      {
        q: "Can I ask about the scope before work starts?",
        a: "Absolutely. We'll go over the preparation and any repairs when you call, so you can ask about the scope before work begins.",
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
