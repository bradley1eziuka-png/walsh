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
      description: `How ${BUSINESS_NAME} handles information submitted through this website.`,
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
      <p>When you submit the estimate request form, you may provide:</p>
      <ul>
        <li>Your name and phone number (required)</li>
        <li>Your email address (optional)</li>
        <li>The service you need, your project location, and project details</li>
        <li>Whether you agree to receive text messages (optional; see below)</li>
      </ul>
      <p>
        If you call or email us, we receive whatever information you share with us in that
        communication.
      </p>

      <h2>How we use it</h2>
      <p>
        We use this information to respond to your request, provide an estimate, schedule and
        perform work, and follow up about your project. We do not sell your personal information.
      </p>

      <h2>How form submissions are delivered</h2>
      <p>
        Form submissions are sent from your browser to a third-party form-handling service, which
        forwards them to our business inbox. That service processes the submission on our behalf and
        under its own privacy policy.
      </p>

      <h2>Text messages</h2>
      <p>
        Checking the optional text-message box means you agree that we may text you at the number
        you provided about your estimate request. Message and data rates may apply. Consent is not
        required to request an estimate or to hire us, and the box is never pre-checked. To stop
        receiving texts, reply STOP or tell us directly. We do not share your phone number with
        third parties for their marketing.
      </p>

      <h2>Cookies, analytics, and fonts</h2>
      <p>
        This website does not use advertising cookies or tracking pixels. The site loads its text
        font from Google Fonts, which means your browser requests that font from Google's servers
        and Google may receive your IP address as part of that request.
      </p>

      <h2>How long we keep information</h2>
      <p>
        We keep estimate requests and related communications for as long as we reasonably need them
        to respond to you, perform work, and keep business records.
      </p>

      <h2>Your choices</h2>
      <p>
        You can ask us to update or delete the information you sent us by contacting us using the
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
