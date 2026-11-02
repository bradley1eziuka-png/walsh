// ───────────────────────────────────────────────────────────────────────────
// Service-area content. Each area has its own copy so the pages are useful and
// distinct rather than one paragraph with the town name swapped. Only
// generally true geography is stated; there are no invented projects, reviews,
// or customer relationships.
// ───────────────────────────────────────────────────────────────────────────

export interface AreaConfig {
  slug: string;
  name: string; // "Chesterton"
  label: string; // "Chesterton, IN"
  seoTitle: string;
  seoDescription: string;
  headline: string;
  intro: string;
  paragraphs: string[];
  considerations: { title: string; text: string }[];
  homeBase?: boolean;
}

export const AREAS: AreaConfig[] = [
  {
    slug: "michigan-city",
    name: "Michigan City",
    label: "Michigan City, IN",
    homeBase: true,
    seoTitle: "Painting Contractor in Michigan City, IN | Power Washing & Deck Staining",
    seoDescription:
      "Painting contractor in Michigan City, IN. Exterior painting, house painting, power washing, and deck staining from Walsh Painting & Powerwashing, based here for 22 years.",
    headline: "Painting & Power Washing in Michigan City, Indiana",
    intro:
      "Michigan City is home base for Walsh Painting & Powerwashing. For 22 years we've painted and cleaned homes here, and most of our customers are in Northwest Indiana.",
    paragraphs: [
      "Living on the lakeshore is great, but Lake Michigan weather is hard on a home's exterior. Wind-driven moisture, sun, and freeze-and-thaw winters wear on paint, siding, and decks. If you're looking for a painting contractor in Michigan City, we handle exterior painting, house painting, deck painting and staining, and professional power washing.",
      "Many homeowners start with a good cleaning. Power washing siding, a deck, or a driveway can make a property look noticeably fresher, and it's also the right first step before painting or staining. We clean with the surface in mind, protect the surrounding property, and clean up when we're finished.",
    ],
    considerations: [
      {
        title: "Lakeshore exposure",
        text: "Homes near the water see more wind and moisture. We'll talk through how that affects prep and timing.",
      },
      {
        title: "Decks and outdoor stairs",
        text: "Deck power washing, staining, and painting are among our regular services.",
      },
      {
        title: "Repairs first",
        text: "If boards or trim need fixing, we can coordinate with carpenters before the finish goes on.",
      },
    ],
  },
  {
    slug: "chesterton",
    name: "Chesterton",
    label: "Chesterton, IN",
    seoTitle: "Painting Contractor & Power Washing in Chesterton, IN",
    seoDescription:
      "Painting contractor and power washing in Chesterton, IN, a short drive from Michigan City. Exterior painting, deck staining, and house washing from Walsh Painting & Powerwashing.",
    headline: "Painting Contractor & Power Washing in Chesterton, IN",
    intro:
      "Chesterton is a short drive west of our Michigan City base, and we regularly serve homeowners here.",
    paragraphs: [
      "Chesterton sits close to the Indiana Dunes and Lake Michigan, so homes here deal with the same lake-region weather we're used to in Michigan City: humid summers, wind, and cold winters. If you need a painting contractor in Chesterton, IN, we offer exterior painting, interior painting, and deck work.",
      "If your siding has gone green or gray, or your driveway or deck has built up a season's worth of grime, power washing in Chesterton is a quick way to freshen things up. We choose our method based on the surface so we can clean it properly without causing unnecessary damage to the surrounding property.",
    ],
    considerations: [
      {
        title: "Shade and moisture",
        text: "Tree-lined lots can hold moisture against siding and decks. Cleaning before painting helps the new finish go on right.",
      },
      {
        title: "Painting after cleaning",
        text: "We can handle both the washing and the painting or staining, so you only schedule one company.",
      },
      {
        title: "Estimates by request",
        text: "Send the form or call and we'll follow up about your Chesterton project.",
      },
    ],
  },
  {
    slug: "valparaiso",
    name: "Valparaiso",
    label: "Valparaiso, IN",
    seoTitle: "Painting Contractor & Power Washing in Valparaiso, IN",
    seoDescription:
      "Painting contractor and power washing in Valparaiso, IN. Exterior painting, house washing, and deck staining from Walsh Painting & Powerwashing in Michigan City.",
    headline: "Painting Contractor & Power Washing in Valparaiso, IN",
    intro:
      "We travel from Michigan City to serve homeowners in Valparaiso and the surrounding part of Porter County.",
    paragraphs: [
      "Valparaiso is the Porter County seat and a bit inland from the lakeshore, but the weather swings are similar: hot, humid summers and hard freezes in winter. Both are tough on exterior paint and wood. We provide painting contractor services in Valparaiso, IN, including exterior and house painting, power washing, and deck staining.",
      "Because we're coming from Michigan City, we like to talk through your project and schedule before we show up. Tell us what you'd like done and we'll plan the visit around the details, including any repairs that should happen before painting.",
    ],
    considerations: [
      {
        title: "Planning the trip",
        text: "We'll go over scope and timing up front so a visit from Michigan City makes sense for the job.",
      },
      {
        title: "Whole-exterior projects",
        text: "Washing, prep, and painting can be combined into one coordinated job.",
      },
      {
        title: "Deck refreshes",
        text: "Weathered decks can be cleaned and then stained or painted.",
      },
    ],
  },
  {
    slug: "ogden-dunes",
    name: "Ogden Dunes",
    label: "Ogden Dunes, IN",
    seoTitle: "Painting & Power Washing in Ogden Dunes, IN",
    seoDescription:
      "Exterior painting, power washing, and deck staining in Ogden Dunes, IN, on the Lake Michigan shore. Walsh Painting & Powerwashing serves the beach communities of Northwest Indiana.",
    headline: "Painting & Power Washing in Ogden Dunes, IN",
    intro:
      "Ogden Dunes is one of the Lake Michigan beach communities we serve, a bit west of our Michigan City base.",
    paragraphs: [
      "Homes in a lakeshore dune community face wind, blowing sand, and constant moisture. Over time that wears on paint, siding, and deck boards. We offer exterior painting, power washing, and deck cleaning, staining, and painting for Ogden Dunes homeowners.",
      "Decks and outdoor living areas tend to take the most punishment near the beach. Deck power washing removes buildup, and a fresh coat of stain or paint helps the surface look its best again. If something needs repair first, we can coordinate with carpenters.",
    ],
    considerations: [
      {
        title: "Sand and wind",
        text: "Exposure near the dunes is a reason to be careful about preparation, and we'll talk through it with you.",
      },
      {
        title: "Decks first",
        text: "Cleaning, staining, and painting decks is one of our core services.",
      },
      {
        title: "Gentle on surroundings",
        text: "We protect nearby plants and surfaces and clean up when we're finished.",
      },
    ],
  },
  {
    slug: "lakeside-michigan",
    name: "Lakeside, Michigan",
    label: "Lakeside, MI",
    seoTitle: "Painting & Power Washing in Lakeside, Michigan",
    seoDescription:
      "Painting and power washing in Lakeside, Michigan, just across the state line from Michigan City. Exterior painting and deck services from Walsh Painting & Powerwashing.",
    headline: "Painting & Power Washing in Lakeside, Michigan",
    intro:
      "Our work doesn't stop at the state line. We also serve Lakeside, Michigan, and nearby Southwest Michigan beach communities.",
    paragraphs: [
      "Lakeside is part of the Lake Michigan shoreline in Berrien County, Michigan, not far north of Michigan City. We provide exterior painting, power washing, and deck services to homeowners there and in neighboring lake communities.",
      "Some lakeside properties are used seasonally. If that's your situation, tell us when you'll be around and when you'd like the work finished, and we'll plan around it. Call or send the form and we'll follow up about getting your job scheduled.",
    ],
    considerations: [
      {
        title: "Across the state line",
        text: "We serve nearby Southwest Michigan as well as Northwest Indiana.",
      },
      {
        title: "Seasonal homes",
        text: "Tell us your timing so painting and washing fit your schedule.",
      },
      {
        title: "Lake weather",
        text: "Moisture and sun are hard on exteriors. Proper preparation helps new paint last.",
      },
    ],
  },
];

export function getArea(slug: string) {
  return AREAS.find((a) => a.slug === slug);
}
