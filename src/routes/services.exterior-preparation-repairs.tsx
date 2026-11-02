import { createFileRoute, notFound } from "@tanstack/react-router";

import { SiteLayout } from "@/components/painting/site-layout";
import { ServicePage } from "@/components/painting/service-page";
import { isServiceEnabled, SERVICES } from "@/lib/services-data";
import { BUSINESS_NAME } from "@/lib/site-config";
import { pageHead } from "@/lib/seo";

const service = SERVICES.repairs;

export const Route = createFileRoute("/services/exterior-preparation-repairs")({
  // Services removed from site.config.json → services.enabled return a 404.
  beforeLoad: () => {
    if (!isServiceEnabled("repairs")) throw notFound();
  },
  head: () =>
    pageHead({
      title: `${service.seoTitle} | ${BUSINESS_NAME}`,
      description: service.seoDescription,
      path: service.path,
      image: service.heroImage,
    }),
  component: PrepRepairsPage,
});

function PrepRepairsPage() {
  return (
    <SiteLayout>
      <ServicePage service={service} />
    </SiteLayout>
  );
}
