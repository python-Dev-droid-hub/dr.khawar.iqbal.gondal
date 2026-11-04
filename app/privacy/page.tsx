import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHero from "@/components/shared/PageHero";

import { pageBanners } from "@/data/pageBanners";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "How appointment enquiries and contact details are handled for Dr. Khawar Iqbal Gondal’s surgical practice.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How consultation enquiries and contact details are handled."
        image={pageBanners.legal}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy" },
        ]}
      />
      <section className="section-padding">
        <Container className="max-w-3xl space-y-4 text-muted">
          <p>
            Contact forms and WhatsApp messages are used only to respond to
            appointment requests and clinical enquiries. We do not sell personal
            information to third parties.
          </p>
          <p>
            Hospital records are managed under each facility’s clinical
            policies. For privacy questions, contact the clinic by phone or
            WhatsApp.
          </p>
        </Container>
      </section>
    </>
  );
}
