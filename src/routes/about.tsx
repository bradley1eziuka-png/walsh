import { createFileRoute } from "@tanstack/react-router";

import { SiteLayout } from "@/components/painting/site-layout";
import { PageHero } from "@/components/painting/page-hero";
import { Trust } from "@/components/painting/trust";
import { WhyChooseUs } from "@/components/painting/why-choose-us";
import { FinalCta } from "@/components/painting/final-cta";
import { BUSINESS_NAME } from "@/lib/site-config";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead({
      title: `About ${BUSINESS_NAME} | Michigan City Painting Contractor`,
      description:
        "Walsh Painting & Powerwashing has 22 years of experience painting and power washing homes in Michigan City, IN and nearby Lake Michigan communities.",
      path: "/about",
    }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About Us"
        title="Locally Operated Painting & Power Washing"
        description="Painting and power washing for homeowners in Michigan City, Indiana and nearby Lake Michigan communities."
      />
      <Trust />
      <WhyChooseUs />
      <FinalCta />
    </SiteLayout>
  );
}
