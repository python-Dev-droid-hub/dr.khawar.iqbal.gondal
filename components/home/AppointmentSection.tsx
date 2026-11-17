import { ArrowRight, Clock3, FileText, PhoneCall } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import Reveal from "@/components/motion/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import AppointmentRequestForm from "@/components/forms/AppointmentRequestForm";
import { doctor } from "@/data/doctor";
import { whatsappLink } from "@/lib/utils";

const tips = [
  {
    icon: FileText,
    text: "Carry any past lab tests, ultrasounds, or prescriptions so I can review your full health picture.",
  },
  {
    icon: Clock3,
    text: "I consult Monday to Friday in Gujrat and Saturday to Sunday in Mandi Bahauddin.",
  },
  {
    icon: PhoneCall,
    text: "Experiencing severe or sudden pain? Please call my hospital desk right away for urgent help.",
  },
] as const;

export default function AppointmentSection() {
  return (
    <section id="appointment" className="section-padding bg-cream-dark/30">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Book an Appointment"
            title="Schedule Your Surgical Consultation With Me"
            description="Share your details below, and my team will confirm your preferred appointment time at Shifa Hospital (Gujrat) or Tarar Hospital (Mandi Bahauddin)."
            align="left"
            className="mb-8 max-w-3xl md:mb-10"
          />
        </Reveal>

        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)] lg:gap-8">
          <Reveal>
            <aside className="overflow-hidden rounded-card border border-teal-950/5 bg-gradient-to-br from-[#F3E8D2] via-cream to-gold/20 shadow-soft">
              <div className="p-6 md:p-7">
                <h3 className="font-serif text-xl text-heading md:text-2xl">
                  Helpful Tips Before Your Visit
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  A few quick reminders so I can give you the best care during
                  our checkup.
                </p>

                <ul className="mt-6 space-y-4">
                  {tips.map((tip) => (
                    <li key={tip.text} className="flex gap-3">
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
                        <tip.icon className="h-4 w-4" aria-hidden />
                      </span>
                      <span className="text-sm leading-relaxed text-muted">
                        {tip.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 border-t border-teal-950/10 pt-5">
                  <p className="text-sm text-muted">Need a faster reply?</p>
                  <Button
                    href={whatsappLink(
                      doctor.whatsapp,
                      `Assalamu Alaikum, I would like to book a consultation with ${doctor.name}.`,
                    )}
                    variant="outline"
                    className="mt-3 w-full"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp the clinic
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Button>
                </div>
              </div>
            </aside>
          </Reveal>

          <Reveal delay={0.08}>
            <GlassCard className="border-teal-950/8 bg-white/80 p-5 shadow-soft md:p-6">
              <AppointmentRequestForm idPrefix="home-appointment" />
            </GlassCard>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
