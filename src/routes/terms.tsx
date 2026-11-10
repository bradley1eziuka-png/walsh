import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/painting/legal-page";
import {
  BUSINESS_EMAIL,
  BUSINESS_LEGAL_NAME,
  BUSINESS_NAME,
  BUSINESS_PHONE,
} from "@/lib/site-config";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  head: () =>
    pageHead({
      title: `Terms of Use | ${BUSINESS_NAME}`,
      description: `Terms for using the ${BUSINESS_NAME} website.`,
      path: "/terms",
    }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalPage title="Terms of Use" updated="November 2026">
      <p>
        These terms apply to your use of this website, operated by {BUSINESS_NAME} (
        {BUSINESS_LEGAL_NAME}). By using the site you agree to them.
      </p>

      <h2>Information on this site</h2>
      <p>
        The site describes our painting, power washing, and related services in general terms. It is
        provided for information only and is not an offer or a binding quote. The scope, price, and
        schedule of any job are agreed with you directly before work begins.
      </p>

      <h2>Estimates</h2>
      <p>
        Estimates are provided by phone. Contacting us does not create a contract or guarantee that
        we can take on a project or serve your location.
      </p>

      <h2>Images</h2>
      <p>
        Some images on this site are illustrative and may not show work completed by us. Results
        vary with the condition of the property and the surface involved.
      </p>

      <h2>Use of the site</h2>
      <p>
        Please do not misuse the site, attempt to disrupt it, or submit false or harmful content.
        Content on the site belongs to us or is used with permission, and you may not copy it for
        commercial use without our consent.
      </p>

      <h2>No warranties; limitation of liability</h2>
      <p>
        The site is provided "as is." To the extent permitted by law, we are not liable for damages
        arising from your use of the website. This does not limit any separate written agreement for
        work performed.
      </p>

      <h2>Governing law</h2>
      <p>These terms are governed by the laws of the State of Indiana.</p>

      <h2>Contact</h2>
      <p>
        Phone: {BUSINESS_PHONE}.
        {BUSINESS_EMAIL && (
          <>
            {" "}
            Email: <a href={`mailto:${BUSINESS_EMAIL}`}>{BUSINESS_EMAIL}</a>.
          </>
        )}
      </p>
    </LegalPage>
  );
}
