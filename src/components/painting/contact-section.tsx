import { ArrowRight, Phone } from "lucide-react";

import {
  BUSINESS_EMAIL,
  BUSINESS_PHONE,
  BUSINESS_PHONE_2,
  BUSINESS_PHONE_2_TEL,
  BUSINESS_PHONE_TEL,
} from "@/lib/site-config";
import { SectionHeading } from "./section-heading";
import { ctaButton } from "./buttons";

// The homepage "Contact" section — a confident call block that points
// to the call card in the hero.
export function ContactSection() {
  return (
    <section id="contact" className="section-pad scroll-mt-24 bg-background">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Talk About Your Project"
          description="Give us a call to discuss your project. We serve Michigan City, Chesterton, Valparaiso, Ogden Dunes, Lakeside, MI, and nearby Lake Michigan communities."
        />

        <div className="mx-auto mt-10 max-w-lg rounded-2xl border border-border bg-secondary/50 p-8 shadow-[0_2px_20px_-14px_rgba(0,0,0,0.14)]">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground">
            Prefer to talk it through?
          </p>
          <a
            href={BUSINESS_PHONE_TEL}
            className="mt-3 flex items-center justify-center gap-3 font-display text-3xl font-semibold tracking-tight text-primary transition-colors hover:text-brand-text"
          >
            <Phone className="size-7 text-brand-text" />
            {BUSINESS_PHONE}
          </a>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Call us directly and we'll talk through your project. Open seven days a week.
          </p>
          {BUSINESS_PHONE_2 && (
            <p className="mt-3 text-sm text-muted-foreground">
              Alternate number:{" "}
              <a
                href={BUSINESS_PHONE_2_TEL}
                className="font-semibold text-primary hover:text-brand-text"
              >
                {BUSINESS_PHONE_2}
              </a>{" "}
              (same phone)
            </p>
          )}
          {BUSINESS_EMAIL && (
            <p className="mt-2 text-sm text-muted-foreground">
              Email:{" "}
              <a
                href={`mailto:${BUSINESS_EMAIL}`}
                className="font-semibold text-primary hover:text-brand-text"
              >
                {BUSINESS_EMAIL}
              </a>
            </p>
          )}
        </div>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href={BUSINESS_PHONE_TEL} className={ctaButton({ variant: "gold", size: "lg" })}>
            Call for an Estimate
            <ArrowRight className="size-4" />
          </a>
          <a href={BUSINESS_PHONE_TEL} className={ctaButton({ variant: "solid", size: "lg" })}>
            <Phone className="size-4" />
            Call {BUSINESS_PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}
