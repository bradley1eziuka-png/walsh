import { ArrowRight, Check, Phone } from "lucide-react";

import {
  BUSINESS_PHONE,
  BUSINESS_PHONE_2,
  BUSINESS_PHONE_2_TEL,
  BUSINESS_PHONE_TEL,
  COPY,
} from "@/lib/site-config";
import { IMAGES } from "@/lib/site-images";
import { ctaButton } from "./buttons";
import { EstimateFormCard } from "./estimate-form";

const TRUST_POINTS = [
  "22 Years in Business",
  "Locally Operated",
  "Painting & Power Washing Specialists",
  "Serving Northwest Indiana",
];

// Two-column hero: business name + tagline + description + CTAs on the left,
// premium estimate form card on the right. Stacks vertically on mobile in
// the order: headline/description → CTAs → form.
export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex items-center overflow-hidden lg:min-h-screen"
    >
      <div className="absolute inset-0 -z-10">
        <img
          src={IMAGES.hero}
          alt="Residential home exterior with clean siding and trim"
          className="h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-linear-to-b from-primary/82 via-primary/68 to-primary/52" />
        <div className="absolute inset-0 bg-linear-to-r from-primary/82 via-primary/48 to-primary/22" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 pb-14 pt-28 sm:pb-16 sm:pt-32 lg:pb-16 lg:pt-32">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          {/* Left column ~55% */}
          <div className="max-w-xl">
            <p className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {COPY.hero.eyebrow}
            </p>

            <h1 className="font-display text-balance text-4xl font-extrabold leading-[1.08] tracking-tight text-white [word-break:break-word] sm:text-5xl lg:text-[3.1rem]">
              {COPY.hero.headline}
            </h1>

            <p className="mt-4 font-display text-xl font-medium tracking-tight text-accent sm:text-2xl">
              {COPY.hero.tagline}
            </p>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/85 sm:text-lg">
              {COPY.hero.subheadline}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#estimate" className={ctaButton({ variant: "gold", size: "lg" })}>
                Request an Estimate
                <ArrowRight className="size-4" />
              </a>
              <a
                href={BUSINESS_PHONE_TEL}
                className={ctaButton({ variant: "outlineLight", size: "lg" })}
              >
                <Phone className="size-4" />
                Call {BUSINESS_PHONE}
              </a>
            </div>

            {BUSINESS_PHONE_2 && (
              <p className="mt-4 text-sm font-medium text-white/75">
                Also reachable at{" "}
                <a
                  href={BUSINESS_PHONE_2_TEL}
                  className="font-semibold text-white underline-offset-4 transition-colors hover:text-accent hover:underline"
                >
                  {BUSINESS_PHONE_2}
                </a>
              </p>
            )}

            <ul className="mt-6 grid gap-2 text-sm font-semibold text-white sm:grid-cols-2">
              {TRUST_POINTS.map((point) => (
                <li key={point} className="flex items-center gap-2">
                  <Check className="size-4 shrink-0 text-accent" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Right column ~40% — premium estimate form card */}
          <div className="lg:pl-4">
            <EstimateFormCard id="estimate" />
          </div>
        </div>
      </div>
    </section>
  );
}
