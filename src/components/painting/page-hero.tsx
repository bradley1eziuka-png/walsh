import type { ReactNode } from "react";

// Compact navy hero for inner pages (About, Contact, legal, …). The fixed
// header sits on top of it, so the top padding clears the header height.
export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-primary">
      <div
        className="absolute inset-0 -z-10 bg-linear-to-br from-primary via-primary to-navy-soft"
        aria-hidden
      />
      <div className="mx-auto max-w-4xl px-6 pb-14 pt-32 text-center sm:pb-16 sm:pt-36">
        {eyebrow && (
          <p className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-balance text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
