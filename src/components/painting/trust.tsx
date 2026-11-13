import { ArrowRight } from "lucide-react";

import { BBB, BUSINESS_PHONE_TEL, COPY, YEARS } from "@/lib/site-config";
import { IMAGES, imgProps } from "@/lib/site-images";
import { SectionHeading } from "./section-heading";
import { ctaButton } from "./buttons";

export function Trust() {
  return (
    <section className="section-pad bg-background">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-border shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)]">
            <img
              {...imgProps(IMAGES.aboutWalsh, "(min-width: 1024px) 560px, 100vw")}
              alt="Well-kept home with freshly painted siding and trim near Lake Michigan"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -right-3 hidden rounded-2xl bg-primary px-6 py-5 shadow-xl sm:block">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              {COPY.about.badgeTitle}
            </p>
            <p className="mt-1 text-sm text-white/80">{COPY.about.badgeText}</p>
          </div>
        </div>

        <div>
          <SectionHeading align="left" eyebrow={COPY.about.eyebrow} title={COPY.about.title} />
          {COPY.about.body.split("\n\n").map((para) => (
            <p
              key={para}
              className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              {para}
            </p>
          ))}
          {BBB && (
            <div className="mt-5">
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                Along with {YEARS} years of experience, we're{" "}
                <a
                  href={BBB.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-brand-text underline underline-offset-4"
                >
                  5-Star Rated with the Better Business Bureau
                </a>
                .
              </p>
            </div>
          )}
          <div className="mt-8">
            <a href={BUSINESS_PHONE_TEL} className={ctaButton({ variant: "solid", size: "md" })}>
              Call for an Estimate
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
