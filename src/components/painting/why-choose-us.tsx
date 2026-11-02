import { Award, Droplets, Home, MapPin, Paintbrush } from "lucide-react";

import { SectionHeading } from "./section-heading";

const REASONS = [
  {
    icon: Award,
    title: "22 Years of Experience",
    description: "An established local business with more than two decades of experience.",
  },
  {
    icon: Paintbrush,
    title: "Experienced Painting Crews",
    description: "Professional painting with attention to preparation and workmanship.",
  },
  {
    icon: Droplets,
    title: "Careful Power Washing",
    description: "Cleaning methods selected with the surface and surrounding property in mind.",
  },
  {
    icon: Home,
    title: "Respect for Your Property",
    description: "We protect surrounding surfaces and clean up after the job.",
  },
  {
    icon: MapPin,
    title: "Local Service",
    description: "Serving Michigan City and surrounding Lake Michigan communities.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="section-pad scroll-mt-24 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why Homeowners Choose Walsh"
          description="Proper preparation, careful work, and respect for your property."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
          {REASONS.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-[0_2px_20px_-14px_rgba(0,0,0,0.14)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_20px_45px_-22px_rgba(0,0,0,0.25)]"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary text-accent shadow-sm transition-colors group-hover:bg-accent group-hover:text-cta-foreground">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-primary">
                  {reason.title}
                </h3>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
