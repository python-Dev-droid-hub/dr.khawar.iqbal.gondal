import type { Metadata } from "next";
import { Clock3, MapPin, Phone } from "lucide-react";
import { doctor } from "@/data/doctor";
import { hospitals } from "@/data/hospitals";
import ContactForm from "@/components/forms/ContactForm";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import PageHero from "@/components/shared/PageHero";
import Reveal from "@/components/motion/Reveal";
import { whatsappLink } from "@/lib/utils";

import { pageBanners } from "@/data/pageBanners";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Laparoscopic Surgeon in Gujrat & Mandi Bahauddin",
  description: `Contact ${doctor.name} at Shifa Hospital Gujrat or Tarar Hospital Mandi Bahauddin for appointments and surgical consultations.`,
  path: "/contact",
  keywords: [
    "surgeon contact Gujrat",
    "Tarar Hospital Mandi Bahauddin appointment",
  ],
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        description="Reach the clinic by phone, WhatsApp, or the appointment form below."
        image={pageBanners.contact}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />

      <section className="section-padding">
        <Container className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <GlassCard className="p-5 sm:p-7 md:p-9">
              <h2 className="font-serif text-2xl text-heading sm:text-3xl">
                Request an appointment
              </h2>
              <p className="mt-3 text-sm text-muted">
                Submit the form and we will confirm by phone or WhatsApp.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </GlassCard>
          </Reveal>

          <div className="space-y-6">
            {hospitals.map((hospital, index) => (
              <Reveal key={hospital.id} delay={0.06 * index}>
                <article className="rounded-card border border-teal-950/5 bg-white/80 p-5 shadow-soft sm:p-7">
                  <h3 className="font-serif text-2xl text-heading">
                    {hospital.name}
                  </h3>
                  <ul className="mt-5 space-y-3 text-sm text-muted">
                    <li className="flex gap-3">
                      <MapPin className="mt-0.5 h-4 w-4 text-gold" />
                      {hospital.address}, {hospital.city}
                    </li>
                    <li className="flex gap-3">
                      <Clock3 className="mt-0.5 h-4 w-4 text-gold" />
                      {hospital.scheduleDetail}
                    </li>
                    <li className="flex gap-3">
                      <Phone className="mt-0.5 h-4 w-4 text-gold" />
                      <a href={hospital.phoneHref} className="hover:text-teal-950">
                        {hospital.phone}
                      </a>
                    </li>
                  </ul>
                </article>
              </Reveal>
            ))}

            <Reveal delay={0.12}>
              <a
                href={whatsappLink(doctor.whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-card bg-teal-hero p-5 text-cream shadow-soft transition hover:brightness-110 sm:p-7"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-light">
                  WhatsApp
                </p>
                <p className="mt-2 font-serif text-2xl">{doctor.whatsappDisplay}</p>
                <p className="mt-2 text-sm text-cream/70">
                  Preferred for quick appointment requests.
                </p>
              </a>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
