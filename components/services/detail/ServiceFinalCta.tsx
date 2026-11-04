import { MessageCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/services/detail/StaticReveal";
import type { Service } from "@/data/services";
import { doctor } from "@/data/doctor";
import { whatsappLink } from "@/lib/utils";

type ServiceFinalCtaProps = {
  service: Service;
};

export default function ServiceFinalCta({ service }: ServiceFinalCtaProps) {
  return (
    <section className="dark-section section-padding">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-light">
              Next step
            </p>
            <h2 className="mt-3 font-serif text-3xl text-cream md:text-4xl">
              Discuss {service.title} with {doctor.shortName}
            </h2>
            <p className="mx-auto mt-4 max-w-[70ch] text-base leading-[1.7] text-cream/75">
              Book a consultation in Gujrat or Mandi Bahauddin for a personalised
              assessment and clear next steps.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button href="/book" variant="gold">
                Book Consultation
              </Button>
              <Button
                href={whatsappLink(
                  doctor.whatsapp,
                  `Assalamu Alaikum, I would like to discuss ${service.title}.`,
                )}
                variant="outline"
                onDark
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                WhatsApp Us
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
