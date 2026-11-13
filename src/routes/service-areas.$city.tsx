import { createFileRoute, notFound } from "@tanstack/react-router";
import { Check } from "lucide-react";

import { SiteLayout } from "@/components/painting/site-layout";
import { PageHero } from "@/components/painting/page-hero";
import { FinalCta } from "@/components/painting/final-cta";
import { SectionHeading } from "@/components/painting/section-heading";
import { AREAS, getArea } from "@/lib/areas-data";
import { SERVICE_LIST } from "@/lib/services-data";
import { BUSINESS_NAME } from "@/lib/site-config";
import { breadcrumbJsonLd, pageHead, withBrand } from "@/lib/seo";

export const Route = createFileRoute("/service-areas/$city")({
  beforeLoad: ({ params }) => {
    if (!getArea(params.city)) throw notFound();
  },
  head: ({ params }) => {
    const area = getArea(params.city);
    return pageHead({
      title: withBrand(`${area?.seoTitle ?? "Service Area"}`),
      description: area?.seoDescription ?? "",
      path: `/service-areas/${params.city}`,
      jsonLd: [
        breadcrumbJsonLd([
          { name: "Service Areas", path: "/service-areas" },
          { name: area?.name ?? "", path: `/service-areas/${params.city}` },
        ]),
      ],
    });
  },
  component: AreaPage,
});

function AreaPage() {
  const { city } = Route.useParams();
  const area = getArea(city)!;
  const others = AREAS.filter((a) => a.slug !== area.slug);
  return (
    <SiteLayout>
      <PageHero eyebrow={area.label} title={area.headline} description={area.intro} />
      <section className="section-pad bg-background">
        <div className="mx-auto max-w-3xl space-y-5 px-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {area.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>
      <section className="section-pad bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow={area.name} title={`What to Know in ${area.name}`} />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {area.considerations.map((c) => (
              <div key={c.title} className="rounded-2xl border border-border bg-card p-7">
                <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-accent">
                  <Check className="size-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-primary">{c.title}</h3>
                <p className="mt-2 text-[0.92rem] leading-relaxed text-muted-foreground">
                  {c.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad bg-background">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading eyebrow="Services" title={`Services Available in ${area.name}`} />
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
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
          <p className="mt-10 text-center text-sm text-muted-foreground">
            Also serving:{" "}
            {others.map((o, i) => (
              <span key={o.slug}>
                <a
                  href={`/service-areas/${o.slug}`}
                  className="font-semibold text-brand-text hover:underline"
                >
                  {o.label}
                </a>
                {i < others.length - 1 ? ", " : ""}
              </span>
            ))}
          </p>
        </div>
      </section>
      <FinalCta />
    </SiteLayout>
  );
}
