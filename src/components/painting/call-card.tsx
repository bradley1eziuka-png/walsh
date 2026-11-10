import { Check, Phone } from "lucide-react";

import {
  BUSINESS_PHONE,
  BUSINESS_PHONE_2,
  BUSINESS_PHONE_2_TEL,
  BUSINESS_PHONE_TEL,
} from "@/lib/site-config";
import { ctaButton } from "./buttons";

const POINTS = [
  "22 Years in Business",
  "Serving Michigan City & Surrounding Areas",
  "Open Seven Days a Week",
];

// White call-to-action card shown in the hero. Estimates are handled by
// phone, so this replaces the old online estimate form.
export function CallCard({ className }: { className?: string }) {
  return (
    <div
      className={
        "rounded-3xl border border-border bg-white p-7 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.5)] sm:p-8" +
        (className ? ` ${className}` : "")
      }
    >
      <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-text">
        <Phone className="size-3.5" />
        Call Us
      </span>
      <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-primary">
        Call for an Estimate
      </h2>
      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
        Ready to refresh your home, deck, or driveway? Give us a call to discuss your painting or
        power washing project.
      </p>

      <a
        href={BUSINESS_PHONE_TEL}
        className={ctaButton({ variant: "gold", size: "lg" }) + " mt-6 w-full"}
      >
        <Phone className="size-4" />
        Call {BUSINESS_PHONE}
      </a>
      {BUSINESS_PHONE_2 && (
        <p className="mt-4 text-center text-sm text-muted-foreground">
          Also available at{" "}
          <a
            href={BUSINESS_PHONE_2_TEL}
            className="font-semibold text-primary transition-colors hover:text-brand-text"
          >
            {BUSINESS_PHONE_2}
          </a>
        </p>
      )}

      <ul className="mt-6 space-y-2.5 border-t border-border pt-6">
        {POINTS.map((point) => (
          <li key={point} className="flex items-center gap-2.5 text-sm font-semibold text-primary">
            <Check className="size-4 shrink-0 text-brand-text" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
