import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { SiteLayout } from "@/components/painting/site-layout";
import { PageHero } from "@/components/painting/page-hero";
import { FinalCta } from "@/components/painting/final-cta";
import { AREAS } from "@/lib/areas-data";
import { BUSINESS_NAME } from "@/lib/site-config";
import { SERVICE_LIST } from "@/lib/services-data";
import { breadcrumbJsonLd, pageHead, withBrand } from "@/lib/seo";

export const Route = createFileRoute("/service-areas/")({
  head: () =>
    pageHead({
      title: withBrand(`Painting & Power Washing in Northwest Indiana`),
      description:
        "Painting contractors and power washing in Michigan City, Chesterton, Valparaiso, and Ogden Dunes, IN, plus Lakeside, MI. See the communities we serve.",
      path: "/service-areas",
      jsonLd: [breadcrumbJsonLd([{ name: "Service Areas", path: "/service-areas" }])],
    }),
  component: ServiceAreasPage,
});

function ServiceAreasPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Service Areas"
        title="Painting & Power Washing in Northwest Indiana"
        description="Based in Michigan City, serving homeowners across Northwest Indiana and nearby Southwest Michigan."
      />
      <section className="section-pad bg-background">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-muted-foreground">
            We're based in Michigan City and serve homeowners in Chesterton, Valparaiso, Ogden
            Dunes, and Lakeside, Michigan, along with nearby Lake Michigan communities. Choose your
            town below to see what we offer there. Don't see yours? Call us. If you're nearby, we
            may be able to help.
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
          <div className="mx-auto mt-16 max-w-3xl text-center">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-primary sm:text-3xl">
              The Same Services in Every Community
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Wherever you live, the work is the same: thorough preparation, careful painting or
              washing, and a clean job site. Lakeshore homes deal with wind, moisture, and sun, and
              inland homes see the same hard freezes, so we plan each job around your property.
            </p>
            <ul className="mt-8 grid gap-3 text-left sm:grid-cols-2">
              {SERVICE_LIST.map((s) => (
                <li key={s.slug}>
                  <a
                    href={s.path}
                    className="block rounded-xl border border-border bg-card px-5 py-4 font-semibold text-primary transition-colors hover:border-accent/50 hover:text-brand-text"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <FinalCta />
    </SiteLayout>
  );
}
