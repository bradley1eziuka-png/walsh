import { Paintbrush } from "lucide-react";

import { cn } from "@/lib/utils";
import { BUSINESS_NAME, LOGO } from "@/lib/site-config";

// Business logo mark. The Walsh power-washing mascot is cropped from the
// supplied logo (the full logo's small text and badges aren't legible at
// header size). With no logo set in site.config.json → branding.logo, a
// paintbrush mark is shown.
export function Logo({ className }: { className?: string }) {
  if (LOGO.src) {
    return (
      <img
        src={LOGO.src}
        alt={LOGO.alt || `${BUSINESS_NAME} logo`}
        className={cn("h-11 w-auto max-w-[9rem] shrink-0 object-contain", className)}
      />
    );
  }
  return (
    <span
      className={cn(
        "flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent text-primary shadow-sm",
        className,
      )}
    >
      <Paintbrush className="size-5" />
    </span>
  );
}

// Text half of the brand lockup: "WALSH" over "Painting & Powerwashing".
export function BrandLockup({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <span className={cn("flex min-w-0 flex-col leading-none", className)}>
      <span
        className={cn(
          "font-display text-xl font-extrabold uppercase tracking-tight transition-colors",
          light ? "text-white" : "text-primary",
        )}
      >
        Walsh
      </span>
      <span
        className={cn(
          "mt-1 whitespace-nowrap font-display text-[0.7rem] font-bold tracking-wide transition-colors min-[380px]:text-xs",
          light ? "text-white/85" : "text-brand-text",
        )}
      >
        Painting &amp; Powerwashing
      </span>
    </span>
  );
}
