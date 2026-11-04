import { MessageCircle, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/services/detail/StaticReveal";
import ServiceSection from "@/components/services/detail/ServiceSection";
import type { Service } from "@/data/services";
import { doctor } from "@/data/doctor";
import { hospitals } from "@/data/hospitals";
import { whatsappLink } from "@/lib/utils";

type ServiceWarningSignsProps = {
  service: Service;
};

export default function ServiceWarningSigns({
  service,
}: ServiceWarningSignsProps) {
  if (!service.warningSigns.length) return null;

  const primaryPhone = hospitals[0];

  return (
    <ServiceSection id="warning-signs" tone="cream">
      <Reveal>
        <div className="rounded-card border border-gold/40 bg-gradient-to-br from-cream to-gold/10 p-6 shadow-soft md:p-8">
          <SectionHeading
            eyebrow="After surgery"
            title="Warning Signs After Surgery"
            description="Call us immediately if any of the following develop."
            align="left"
            className="mb-6 max-w-3xl"
          />

          <ul className="space-y-3">
            {service.warningSigns.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm leading-[1.7] text-heading md:text-base"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-dark" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button href={primaryPhone.phoneHref} variant="dark">
              <Phone className="h-4 w-4" aria-hidden />
              Call clinic
            </Button>
            <Button
              href={whatsappLink(
                doctor.whatsapp,
                `Assalamu Alaikum, I need urgent advice after ${service.title}.`,
              )}
              variant="gold"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              WhatsApp
            </Button>
          </div>
        </div>
      </Reveal>
    </ServiceSection>
  );
}
