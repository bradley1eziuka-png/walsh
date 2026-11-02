import type { ReactNode } from "react";

import { SiteLayout } from "./site-layout";
import { PageHero } from "./page-hero";

// Shared shell for Privacy Policy / Terms.
export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <SiteLayout>
      <PageHero title={title} description={`Last updated: ${updated}`} />
      <section className="section-pad bg-background">
        <div className="mx-auto max-w-3xl space-y-5 px-6 text-base leading-relaxed text-muted-foreground [&_a]:font-semibold [&_a]:text-brand-text [&_a]:underline [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-primary [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-6">
          {children}
        </div>
      </section>
    </SiteLayout>
  );
}
