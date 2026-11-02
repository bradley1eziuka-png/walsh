import { IMAGES } from "@/lib/site-images";
import { SectionHeading } from "./section-heading";

const GALLERY = [
  {
    src: IMAGES.exterior,
    alt: "Residential home exterior with clean siding and trim",
    label: "Home Exteriors",
  },
  {
    src: IMAGES.powerWashing,
    alt: "Walsh power washing mascot cleaning house siding",
    label: "Power Washing",
  },
  {
    src: IMAGES.galleryExterior,
    alt: "Home exterior with painted siding and trim",
    label: "Siding & Trim",
  },
  {
    src: IMAGES.galleryTrim,
    alt: "Close-up of crisp painted trim",
    label: "Trim Detail",
  },
  {
    src: IMAGES.interior,
    alt: "Freshly painted living room",
    label: "Interior Painting",
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
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
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
