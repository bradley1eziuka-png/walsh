import { Phone } from "lucide-react";
import type { ReactNode } from "react";

import { BUSINESS_PHONE, BUSINESS_PHONE_TEL } from "@/lib/site-config";
import { ctaButton } from "./buttons";
import { Header } from "./header";
import { Footer } from "./footer";

// Shared chrome (sticky header + footer) used by the homepage and every
// inner page. On mobile a fixed bottom bar keeps Call and Estimate one tap away.
export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-x-hidden pb-[4.5rem] lg:pb-0">
      <Header />
      <main>{children}</main>
      <Footer />
      <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-border bg-background/95 p-3 shadow-[0_-8px_24px_-12px_rgba(0,0,0,0.25)] backdrop-blur lg:hidden">
        <a
          href={BUSINESS_PHONE_TEL}
          className={ctaButton({ variant: "solid", size: "md" }) + " flex-1"}
          aria-label={`Call ${BUSINESS_PHONE}`}
        >
          <Phone className="size-4" />
          Call Now
        </a>
        <a href="/#estimate" className={ctaButton({ variant: "gold", size: "md" }) + " flex-1"}>
          Request Estimate
        </a>
      </div>
    </div>
  );
}
