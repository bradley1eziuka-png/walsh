// ───────────────────────────────────────────────────────────────────────────
// Default copy for the site. Any field can be overridden per client in
// site.config.json → content. Do not add business facts, licenses, years in
// business, ratings, or reviews here.
// ───────────────────────────────────────────────────────────────────────────

export const DEFAULT_CONTENT = {
  hero: {
    eyebrow: "23 Years in Business · Michigan City, IN",
    headline: "House Painting & Power Washing in Michigan City, IN",
    tagline: "Painting & Power Washing Specialists",
    subheadline:
      "Give your home's exterior a fresh look with house painting, power washing, and deck cleaning and staining. With 23 years of experience, we serve homeowners in Michigan City, Chesterton, Valparaiso, and nearby Lake Michigan communities, with thorough prep, careful workmanship, and a clean finish.",
  },
  about: {
    eyebrow: "About Walsh",
    title: "23 Years of Painting & Power Washing Experience",
    body: "At Walsh Painting & Powerwashing, we believe a good result starts with preparation. For 23 years, we've helped homeowners in Michigan City and nearby communities refresh their properties with exterior painting, power washing, and deck cleaning and staining.\n\nWe protect the surfaces around the work, take our time on the details, and clean up when the job is finished. From repainting a home's exterior to bringing a weathered deck back, we explain what the job involves so you know what to expect.",
    badgeTitle: "23 Years",
    badgeText: "serving homeowners",
  },
  faqs: [
    {
      q: "What painting and power washing services do you offer?",
      a: "Exterior house painting, residential power washing, deck cleaning, painting and staining, interior painting, and exterior preparation with coordinated repairs. Exterior painting, power washing, and deck work are our main focus.",
    },
    {
      q: "How do I get an estimate?",
      a: "Give us a call at (219) 741-0481. Tell us what you'd like painted or cleaned and where the property is, and we'll talk through the details.",
    },
    {
      q: "Which areas do you serve?",
      a: "We're based in Michigan City, Indiana, and serve Chesterton, Valparaiso, Ogden Dunes, Lakeside, Michigan, and the surrounding Lake Michigan beach communities. If you're nearby and don't see your town listed, give us a call.",
    },
    {
      q: "Can you power wash a house or deck without damaging it?",
      a: "Careful cleaning is a big part of what we do. We choose our method and pressure with the surface and the surrounding property in mind. Every surface is different, so we'll talk through your property's specifics before starting.",
    },
    {
      q: "Do you do interior painting too?",
      a: "Yes. Exterior painting and power washing are our main focus, but we also paint interiors. Let us know what you have in mind when you call.",
    },
    {
      q: "What if repairs are needed before painting?",
      a: "When repairs are needed before painting, we can coordinate with experienced carpenters to help prepare your property for the job.",
    },
  ],
  footerBlurb:
    "Painting and power washing for homeowners in Michigan City, Indiana and the surrounding Lake Michigan communities. 23 years of careful preparation and dependable service.",
  finalCta: {
    title: "Ready for a Fresh, Clean Look?",
    body: "Give us a call to talk about your house, deck, or driveway.",
  },
  seo: {
    description:
      "Michigan City painting contractor: house painting, power washing & deck staining. 23 years of experience. Call (219) 741-0481 for an estimate.",
  },
} as const;

export const DEFAULT_IMAGES = {
  hero: "/images/hero.webp",
  interior: "/images/interior.jpg",
  exterior: "/images/exterior.jpg",
  powerWashing: "/images/power-washing.jpg",
  deck: "/images/gallery-exterior.jpg",
  galleryLivingRoom: "/images/gallery-living-room.jpg",
  galleryExterior: "/images/gallery-exterior.jpg",
  galleryKitchen: "/images/gallery-kitchen.jpg",
  galleryTrim: "/images/gallery-trim.jpg",
  trust: "/images/trust.jpg",
  svcExterior: "/images/exterior-painting.webp",
  svcPowerWashing: "/images/power-washing.webp",
  svcDeck: "/images/deck-cleaning-staining.webp",
  svcInterior: "/images/interior-painting.webp",
  svcRepairs: "/images/exterior-prep-repairs.webp",
  aboutWalsh: "/images/about-walsh.webp",
} as const;
