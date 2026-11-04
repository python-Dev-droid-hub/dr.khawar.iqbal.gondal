import type { Metadata } from "next";
import { faqs } from "@/data/faqs";
import Accordion from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import PageHero from "@/components/shared/PageHero";
import Reveal from "@/components/motion/Reveal";
import JsonLd from "@/components/seo/JsonLd";
import { pageBanners } from "@/data/pageBanners";
import { createPageMetadata } from "@/lib/site";
import { faqPageJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = createPageMetadata({
  title: "FAQ — Laparoscopic Surgery in Gujrat & Mandi Bahauddin",
  description:
    "FAQs on laparoscopic surgery, gallbladder recovery, hernia care, same-day discharge, and booking with Dr. Khawar Iqbal Gondal.",
  path: "/faq",
  keywords: ["laparoscopic surgery FAQ", "gallbladder recovery questions"],
});

export default function FAQPage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd()} />
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="Clear guidance before you book a consultation or prepare for surgery."
        image={pageBanners.faq}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "FAQ" },
        ]}
      />

      <section className="section-padding">
        <Container className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
          <Reveal>
            <GlassCard className="px-4 py-2 sm:px-6 md:px-8">
              <Accordion items={faqs} />
            </GlassCard>
          </Reveal>
          <Reveal delay={0.1}>
            <aside className="rounded-card bg-teal-hero p-6 text-cream shadow-soft sm:p-8">
              <h2 className="font-serif text-2xl text-cream">
                Need a personal answer?
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-cream/75">
                Every case is different. Book a consultation or message on
                WhatsApp for advice tailored to your symptoms and reports.
              </p>
              <Button href="/book" variant="gold" className="mt-8">
                Book Appointment
              </Button>
            </aside>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
