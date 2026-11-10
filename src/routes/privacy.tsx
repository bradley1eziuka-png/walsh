import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/painting/legal-page";
import {
  BUSINESS_EMAIL,
  BUSINESS_LEGAL_NAME,
  BUSINESS_NAME,
  BUSINESS_PHONE,
} from "@/lib/site-config";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () =>
    pageHead({
      title: `Privacy Policy | ${BUSINESS_NAME}`,
      description: `How ${BUSINESS_NAME} handles information in connection with this website.`,
      path: "/privacy",
    }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="November 2026">
      <p>
        This policy explains what information {BUSINESS_NAME} ({BUSINESS_LEGAL_NAME}, "we," "us")
        collects through this website and how we use it. We are a small, locally operated painting
        and power washing business in Michigan City, Indiana.
      </p>

      <h2>Information you give us</h2>
      <p>
        This website does not have an online estimate or contact form, and it does not collect
        personal information through the site itself. Estimates are handled by phone.
      </p>
      <p>
        If you call or email us, we receive whatever information you choose to share in that
        communication, such as your name, phone number, email address, and project details.
      </p>

      <h2>How we use it</h2>
      <p>
        We use that information to respond to you, provide an estimate, schedule and perform work,
        and follow up about your project. We do not sell your personal information.
      </p>

      <h2>Cookies, analytics, and fonts</h2>
      <p>
        This website does not use advertising cookies or tracking pixels. The site loads its text
        font from Google Fonts, which means your browser requests that font from Google's servers
        and Google may receive your IP address as part of that request.
      </p>

      <h2>Links to other sites</h2>
      <p>The site may link to other websites. Those sites have their own privacy practices.</p>

      <h2>How long we keep information</h2>
      <p>
        We keep records of calls, emails, and jobs for as long as we reasonably need them to respond
        to you, perform work, and keep business records.
      </p>

      <h2>Your choices</h2>
      <p>
        You can ask us to update or delete information you sent us by contacting us using the
        details below. We may need to keep certain records as part of running our business.
      </p>

      <h2>Children</h2>
      <p>This website is intended for adults and is not directed to children.</p>

      <h2>Changes</h2>
      <p>We may update this policy and will post the new version here with a new date.</p>

      <h2>Contact</h2>
      <p>
        {BUSINESS_NAME}, Michigan City, Indiana. Phone: {BUSINESS_PHONE}.
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
