import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { SiteLayout } from "@/components/painting/site-layout";
import { PageHero } from "@/components/painting/page-hero";
import { EstimateFormCard } from "@/components/painting/estimate-form";
import { siteConfig } from "@/config";
import {
  BUSINESS_EMAIL,
  BUSINESS_NAME,
  BUSINESS_PHONE,
  BUSINESS_PHONE_2,
  BUSINESS_PHONE_2_TEL,
  BUSINESS_PHONE_TEL,
} from "@/lib/site-config";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead({
      title: `Contact & Request an Estimate | ${BUSINESS_NAME}`,
      description:
        "Request a painting or power washing estimate in Michigan City, IN. Call (219) 741-0481 or send the form. Serving Northwest Indiana and nearby Southwest Michigan.",
      path: "/contact",
    }),
  component: ContactPage,
});

function ContactPage() {
  const { address, serviceAreas, hoursNote, showStreetAddress } = siteConfig.business;
  const place = [
    showStreetAddress ? address.street : "",
    [address.city, address.state].filter(Boolean).join(", "),
    showStreetAddress ? address.zip : "",
  ]
    .filter(Boolean)
    .join(showStreetAddress && address.street ? ", " : " ");
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        title="Request an Estimate"
        description="Call us or send the form. We'll follow up to talk through your project."
      />
      <section className="section-pad bg-background">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-secondary/50 p-7">
              <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                <Phone className="size-4 text-brand-text" /> Call
              </p>
              <a
                href={BUSINESS_PHONE_TEL}
                className="mt-2 block font-display text-3xl font-semibold text-primary hover:text-brand-text"
              >
                {BUSINESS_PHONE}
              </a>
              {BUSINESS_PHONE_2 && (
                <p className="mt-2 text-sm text-muted-foreground">
                  Alternate number (same phone):{" "}
                  <a
                    href={BUSINESS_PHONE_2_TEL}
                    className="font-semibold text-primary hover:text-brand-text"
                  >
                    {BUSINESS_PHONE_2}
                  </a>
                </p>
              )}
            </div>
            <ul className="space-y-4 text-base text-foreground">
              {BUSINESS_EMAIL && (
                <li className="flex items-start gap-3">
                  <Mail className="mt-1 size-5 shrink-0 text-brand-text" />
                  <a href={`mailto:${BUSINESS_EMAIL}`} className="break-all hover:text-brand-text">
                    {BUSINESS_EMAIL}
                  </a>
                </li>
              )}
              {place && (
                <li className="flex items-start gap-3">
                  <MapPin className="mt-1 size-5 shrink-0 text-brand-text" />
                  {place}
                </li>
              )}
              {hoursNote && (
                <li className="flex items-start gap-3">
                  <Clock className="mt-1 size-5 shrink-0 text-brand-text" />
                  {hoursNote}
                </li>
              )}
            </ul>
            <div>
              <h2 className="font-display text-lg font-semibold text-primary">Where we work</h2>
              <p className="mt-2 text-muted-foreground">
                {serviceAreas.join(", ")}, and surrounding Lake Michigan beach communities.{" "}
                <a href="/service-areas" className="font-semibold text-brand-text hover:underline">
                  See service areas
                </a>
                .
              </p>
            </div>
          </div>
          <EstimateFormCard id="estimate" />
        </div>
      </section>
    </SiteLayout>
  );
}
