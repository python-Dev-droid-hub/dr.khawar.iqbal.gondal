import type { Metadata } from "next";
import { doctor } from "@/data/doctor";
import AppointmentForm from "@/components/forms/AppointmentForm";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import PageHero from "@/components/shared/PageHero";
import Reveal from "@/components/motion/Reveal";

import { pageBanners } from "@/data/pageBanners";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Book Appointment — Laparoscopic Surgeon Gujrat",
  description: `Book a consultation with ${doctor.name} for gallbladder surgery, hernia repair, and laparoscopic care in Gujrat or Mandi Bahauddin.`,
  path: "/book",
  keywords: ["book laparoscopic surgeon Gujrat", "surgery appointment Mandi Bahauddin"],
});

export default function BookPage() {
  return (
    <>
      <PageHero
        eyebrow="Appointments"
        title="Book a consultation"
        description="Choose your preferred hospital and share a short note about your concern. Requests are sent via WhatsApp for a fast reply."
        image={pageBanners.book}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Book" },
        ]}
      />

      <section className="section-padding">
        <Container className="mx-auto max-w-3xl">
          <Reveal>
            <GlassCard className="border-teal-950/8 bg-white/75 p-6 shadow-soft md:p-8">
              <AppointmentForm />
            </GlassCard>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
