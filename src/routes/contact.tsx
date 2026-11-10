import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { SiteLayout } from "@/components/painting/site-layout";
import { PageHero } from "@/components/painting/page-hero";
import { ctaButton } from "@/components/painting/buttons";
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
      title: `Contact | Call for a Painting or Power Washing Estimate | ${BUSINESS_NAME}`,
      description:
        "Call (219) 741-0481 to discuss painting or power washing in Michigan City, IN. Open seven days a week. Serving Northwest Indiana and nearby Southwest Michigan.",
      path: "/contact",
    }),
  component: ContactPage,
});

function ContactPage() {
  const { address, hoursNote, showStreetAddress } = siteConfig.business;
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
        title="Let's Talk About Your Project"
        description="Looking for professional painting or power washing in Michigan City or the surrounding area? Give us a call to discuss your project."
      />
      <section className="section-pad bg-background">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-3xl border border-border bg-white p-8 text-center shadow-[0_30px_70px_-40px_rgba(0,0,0,0.4)] sm:p-10">
            <p className="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              <Phone className="size-4 text-brand-text" /> Call for an estimate
            </p>
            <a
              href={BUSINESS_PHONE_TEL}
              className="mt-3 block font-display text-4xl font-semibold tracking-tight text-primary hover:text-brand-text sm:text-5xl"
            >
              {BUSINESS_PHONE}
            </a>
            <a
              href={BUSINESS_PHONE_TEL}
              className={ctaButton({ variant: "gold", size: "lg" }) + " mt-6 w-full sm:w-auto"}
            >
              <Phone className="size-4" />
              Call for an Estimate
            </a>
            {BUSINESS_PHONE_2 && (
              <p className="mt-5 text-sm text-muted-foreground">
                Alternate number:{" "}
                <a
                  href={BUSINESS_PHONE_2_TEL}
                  className="font-semibold text-primary hover:text-brand-text"
                >
                  {BUSINESS_PHONE_2}
                </a>
              </p>
            )}
          </div>

          <ul className="mt-10 space-y-5 text-base text-foreground">
            {BUSINESS_EMAIL && (
              <li className="flex items-start gap-3">
                <Mail className="mt-1 size-5 shrink-0 text-brand-text" />
                <span>
                  Email:{" "}
                  <a
                    href={`mailto:${BUSINESS_EMAIL}`}
                    className="break-all font-semibold hover:text-brand-text"
                  >
                    {BUSINESS_EMAIL}
                  </a>
                </span>
              </li>
            )}
            <li className="flex items-start gap-3">
              <Clock className="mt-1 size-5 shrink-0 text-brand-text" />
              <span>{hoursNote || "Call to reach us."}</span>
            </li>
            {place && (
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 size-5 shrink-0 text-brand-text" />
                {place}
              </li>
            )}
          </ul>

          <div className="mt-10">
            <h2 className="font-display text-lg font-semibold text-primary">Service areas</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              Michigan City, Chesterton, Valparaiso, Ogden Dunes, Lakeside, and nearby communities.{" "}
              <a href="/service-areas" className="font-semibold text-brand-text hover:underline">
                See service areas
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
