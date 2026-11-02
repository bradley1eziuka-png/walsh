import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { SiteLayout } from "@/components/painting/site-layout";
import { PageHero } from "@/components/painting/page-hero";
import { FinalCta } from "@/components/painting/final-cta";
import { AREAS } from "@/lib/areas-data";
import { BUSINESS_NAME } from "@/lib/site-config";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/service-areas/")({
  head: () =>
    pageHead({
      title: `Service Areas: Michigan City, Chesterton, Valparaiso & More | ${BUSINESS_NAME}`,
      description:
        "Painting and power washing in Michigan City, Chesterton, Valparaiso, Ogden Dunes, and Lakeside, Michigan, plus nearby Lake Michigan beach communities.",
      path: "/service-areas",
    }),
  component: ServiceAreasPage,
});

function ServiceAreasPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Service Areas"
        title="Serving Michigan City & Lake Michigan's Beach Communities"
        description="Professional painting and power washing throughout Northwest Indiana and nearby Southwest Michigan."
      />
      <section className="section-pad bg-background">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-muted-foreground">
            Serving Michigan City, Chesterton, Valparaiso, and Lake Michigan's surrounding beach
            communities. Don't see your town? Call us. If you're nearby, we may be able to help.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {AREAS.map((area) => (
              <a
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="group flex flex-col rounded-2xl border border-border bg-card p-7 shadow-[0_2px_20px_-14px_rgba(0,0,0,0.14)] transition-all hover:-translate-y-1 hover:border-accent/40"
              >
                <h2 className="font-display text-xl font-semibold text-primary">{area.label}</h2>
                {area.homeBase && (
                  <span className="mt-2 w-fit rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-brand-text">
                    Home base
                  </span>
                )}
                <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {area.intro}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-text transition-all group-hover:gap-2.5">
                  Painting &amp; power washing in {area.name}
                  <ArrowRight className="size-4" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <FinalCta />
    </SiteLayout>
  );
}
