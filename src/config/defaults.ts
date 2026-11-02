// ───────────────────────────────────────────────────────────────────────────
// Default copy for the site. Any field can be overridden per client in
// site.config.json → content. Do not add business facts, licenses, years in
// business, ratings, or reviews here.
// ───────────────────────────────────────────────────────────────────────────

export const DEFAULT_CONTENT = {
  hero: {
    eyebrow: "22 Years in Business · Michigan City, IN",
    headline: "Professional Painting & Power Washing in Michigan City",
    tagline: "Painting & Power Washing Specialists",
    subheadline:
      "With 22 years of experience, Walsh Painting & Powerwashing provides professional exterior painting, power washing, and deck services throughout Michigan City and the surrounding Lake Michigan communities.",
  },
  about: {
    eyebrow: "About Walsh",
    title: "22 Years of Painting & Power Washing Experience",
    body: "At Walsh Painting & Powerwashing, we believe quality work starts with proper preparation and attention to detail. For 22 years, we've helped homeowners maintain and improve their properties through professional painting, power washing, and deck services.\n\nOur team takes pride in doing the job carefully, protecting surrounding surfaces, and cleaning up when the work is finished. From refreshing a home's exterior to cleaning a weathered deck, we focus on delivering dependable service and results homeowners can appreciate.",
    badgeTitle: "22 Years",
    badgeText: "serving homeowners",
  },
  faqs: [
    {
      q: "How do I request an estimate?",
      a: "Use the estimate form on this site or call (219) 741-0481. Tell us what you'd like painted or cleaned and where the property is, and we'll follow up to talk through the details.",
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
      a: "Yes. Exterior painting and power washing are our main focus, but we also paint interiors. Let us know what you have in mind when you request an estimate.",
    },
    {
      q: "What if repairs are needed before painting?",
      a: "When repairs are needed before painting, we can coordinate with experienced carpenters to help prepare your property for the job.",
    },
  ],
  footerBlurb:
    "Painting and power washing for homeowners in Michigan City, Indiana and the surrounding Lake Michigan communities. 22 years of careful preparation and dependable service.",
  finalCta: {
    title: "Ready for a Fresh, Clean Look?",
    body: "Tell us about your house, deck, or driveway and we'll follow up to talk through the details. Estimates are easy to request.",
  },
  seo: {
    description:
      "Walsh Painting & Powerwashing: 22 years of exterior painting, power washing, and deck services in Michigan City, IN, Chesterton, Valparaiso, Ogden Dunes, and Lakeside, MI. Request an estimate.",
  },
} as const;

export const DEFAULT_IMAGES = {
  hero: "/images/hero.jpg",
  interior: "/images/interior.jpg",
  exterior: "/images/exterior.jpg",
  powerWashing: "/images/power-washing.jpg",
  deck: "/images/gallery-exterior.jpg",
  galleryLivingRoom: "/images/gallery-living-room.jpg",
  galleryExterior: "/images/gallery-exterior.jpg",
  galleryKitchen: "/images/gallery-kitchen.jpg",
  galleryTrim: "/images/gallery-trim.jpg",
  trust: "/images/trust.jpg",
} as const;
