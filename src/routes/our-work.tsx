import { createFileRoute } from "@tanstack/react-router";

import { SiteLayout } from "@/components/painting/site-layout";
import { PageHero } from "@/components/painting/page-hero";
import { Gallery } from "@/components/painting/gallery";
import { FinalCta } from "@/components/painting/final-cta";
import { BUSINESS_NAME } from "@/lib/site-config";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/our-work")({
  head: () =>
    pageHead({
      title: `Our Work | Painting & Power Washing | ${BUSINESS_NAME}`,
      description:
        "A look at the kind of painting, power washing, and deck work Walsh Painting & Powerwashing does in Michigan City, IN and nearby communities.",
      path: "/our-work",
    }),
  component: OurWorkPage,
});

function OurWorkPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our Work"
        title="Painting, Power Washing & Deck Work"
        description="Real project photos will appear here. Until then, call us and we'll talk through your project."
      />
      <Gallery standalone />
      <FinalCta />
    </SiteLayout>
  );
}
