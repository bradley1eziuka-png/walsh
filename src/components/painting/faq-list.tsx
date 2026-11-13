import { ChevronDown } from "lucide-react";

// FAQ list built on native <details>, styled to match the previous accordion.
// Unlike a JS accordion, every answer is present in the page HTML while
// collapsed, so the FAQPage structured data matches content crawlers can read.
// `name` makes the group exclusive (one open at a time) in modern browsers.
export function FaqList({
  items,
  group,
}: {
  items: readonly { q: string; a: string }[];
  group: string;
}) {
  return (
    <div className="mt-12 space-y-4">
      {items.map((faq) => (
        <details
          key={faq.q}
          name={group}
          className="group rounded-xl border border-border bg-card px-6 shadow-[0_2px_16px_-12px_rgba(0,0,0,0.14)]"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left font-display text-base font-semibold tracking-tight text-primary marker:hidden [&::-webkit-details-marker]:hidden">
            {faq.q}
            <ChevronDown className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
          </summary>
          <p className="pb-5 text-[0.95rem] leading-relaxed text-muted-foreground">{faq.a}</p>
        </details>
      ))}
    </div>
  );
}
