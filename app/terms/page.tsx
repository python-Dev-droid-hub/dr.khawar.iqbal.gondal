import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHero from "@/components/shared/PageHero";

import { pageBanners } from "@/data/pageBanners";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Terms & Conditions",
  description:
    "Website terms for using Dr. Khawar Iqbal Gondal’s surgical practice site and appointment requests.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        description="General terms for using this website and booking enquiries."
        image={pageBanners.legal}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Terms" },
        ]}
      />
      <section className="section-padding">
        <Container className="max-w-3xl space-y-4 text-muted">
          <p>
            Website content is for general information and does not replace an
            in-person consultation, diagnosis, or treatment plan.
          </p>
          <p>
            Appointment requests submitted online or via WhatsApp are subject to
            confirmation by the clinic based on schedule and clinical
            suitability.
          </p>
        </Container>
      </section>
    </>
  );
}
