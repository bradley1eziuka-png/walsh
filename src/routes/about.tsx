import { createFileRoute } from "@tanstack/react-router";

import { SiteLayout } from "@/components/painting/site-layout";
import { PageHero } from "@/components/painting/page-hero";
import { Trust } from "@/components/painting/trust";
import { WhyChooseUs } from "@/components/painting/why-choose-us";
import { FinalCta } from "@/components/painting/final-cta";
import { BUSINESS_NAME } from "@/lib/site-config";
import { breadcrumbJsonLd, pageHead, withBrand } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead({
      title: withBrand("About Us | 23 Years of Painting in Michigan City, IN"),
      description:
        "Walsh Painting & Powerwashing has 23 years of experience painting and power washing homes in Michigan City, IN and nearby Lake Michigan communities.",
      path: "/about",
      jsonLd: [breadcrumbJsonLd([{ name: "About", path: "/about" }])],
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
      <section className="bg-background pb-16">
        <p className="mx-auto max-w-3xl px-6 text-center text-base leading-relaxed text-muted-foreground sm:text-lg">
          Learn more about our{" "}
          <a
            href="/services/exterior-painting"
            className="font-semibold text-brand-text hover:underline"
          >
            exterior house painting
          </a>
          ,{" "}
          <a
            href="/services/power-washing"
            className="font-semibold text-brand-text hover:underline"
          >
            pressure washing
          </a>
          , and{" "}
          <a
            href="/services/deck-services"
            className="font-semibold text-brand-text hover:underline"
          >
            deck staining
          </a>{" "}
          services, see the{" "}
          <a href="/service-areas" className="font-semibold text-brand-text hover:underline">
            communities we serve
          </a>
          , or{" "}
          <a href="/contact" className="font-semibold text-brand-text hover:underline">
            contact us
          </a>{" "}
          to talk through your project.
        </p>
      </section>
      <WhyChooseUs />
      <FinalCta />
    </SiteLayout>
  );
}
