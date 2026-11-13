import { COPY } from "@/lib/site-config";
import { FaqList } from "./faq-list";
import { SectionHeading } from "./section-heading";

export function Faq() {
  return (
    <section className="section-pad scroll-mt-24 bg-secondary/40">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading
          eyebrow="Questions & Answers"
          title="Frequently Asked Questions"
          description="Straightforward answers to help you feel ready to start your painting project."
        />

        <FaqList items={COPY.faqs} group="home-faq" />
      </div>
    </section>
  );
}
