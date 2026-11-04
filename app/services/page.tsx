import type { Metadata } from "next";
import { services } from "@/data/services";
import Container from "@/components/ui/Container";
import PageHero from "@/components/shared/PageHero";
import Reveal from "@/components/motion/Reveal";
import ServiceCard from "@/components/services/ServiceCard";
import FinalCTA from "@/components/home/FinalCTA";
import { pageBanners } from "@/data/pageBanners";
import JsonLd from "@/components/seo/JsonLd";
import { createPageMetadata } from "@/lib/site";
import { webPageJsonLd } from "@/lib/structured-data";

const pageTitle = "Surgical Services in Gujrat & Mandi Bahauddin";
const pageDescription =
  "Laparoscopic gallbladder surgery, hernia repair, appendix surgery, and general surgery with Dr. Khawar Iqbal Gondal in Gujrat and Mandi Bahauddin.";

export const metadata: Metadata = createPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/services",
  keywords: [
    "gallbladder surgery Mandi Bahauddin",
    "hernia surgery Gujrat",
    "laparoscopic surgery Pakistan",
  ],
});

export default function ServicesPage() {
  const ordered = [
    ...services.filter((s) => s.slug === "laparoscopic-surgery"),
    ...services.filter((s) => s.slug !== "laparoscopic-surgery"),
  ];

  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          path: "/services",
          title: pageTitle,
          description: pageDescription,
          crumbs: [
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ],
        })}
      />
      <PageHero
        eyebrow="Services"
        title="Surgical services"
        description="Evidence-based laparoscopic and general surgery designed for safety, clarity, and faster recovery."
        image={pageBanners.services}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />

      <section className="section-padding">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ordered.map((service, index) => (
              <Reveal key={service.slug} delay={0.04 * index} className="h-full">
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
