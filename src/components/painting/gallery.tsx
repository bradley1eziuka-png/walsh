import { IMAGES, imgProps } from "@/lib/site-images";
import { SectionHeading } from "./section-heading";

const GALLERY = [
  {
    src: IMAGES.svcExterior,
    alt: "Blue craftsman-style home with freshly painted siding, white trim and a landscaped entry",
    label: "Home Exteriors",
  },
  {
    src: IMAGES.svcPowerWashing,
    alt: "Worker power washing mildew from the siding of a home",
    label: "Power Washing",
  },
  {
    src: IMAGES.svcDeck,
    alt: "Wood deck being cleaned with a surface cleaner before staining",
    label: "Deck Cleaning & Staining",
  },
  {
    src: IMAGES.svcInterior,
    alt: "Freshly painted living room with fireplace and bright windows",
    label: "Interior Painting",
  },
  {
    src: IMAGES.svcRepairs,
    alt: "Home exterior with windows masked and repaired siding prepped for painting",
    label: "Exterior Prep & Repairs",
  },
];

export function Gallery({ standalone = false }: { standalone?: boolean }) {
  return (
    <section
      id="our-work"
      className={
        standalone ? "section-pad bg-background" : "section-pad scroll-mt-24 bg-background"
      }
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Our Work"
          title="Careful Work, Inside and Out"
          description="Painting, power washing, and deck work for homes in Michigan City and nearby communities."
        />

        <div className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
          {GALLERY.map((item) => (
            <figure
              key={item.label}
              className="group relative break-inside-avoid overflow-hidden rounded-2xl border border-border shadow-[0_2px_20px_-14px_rgba(0,0,0,0.18)]"
            >
              <img
                {...imgProps(item.src, "(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw")}
                alt={item.alt}
                loading="lazy"
                className="h-auto w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-primary/80 via-primary/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center gap-2 p-5 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                <span className="h-px w-6 bg-accent" />
                <span className="text-sm font-semibold tracking-wide">{item.label}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-10 text-center text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground/70">
          Illustrative images, not photos of Walsh projects
        </p>
        {!standalone && (
          <p className="mt-4 text-center">
            <a href="/our-work" className="text-sm font-semibold text-brand-text hover:underline">
              More about our work
            </a>
          </p>
        )}
      </div>
    </section>
  );
}
