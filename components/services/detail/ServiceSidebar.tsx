import { MessageCircle, Phone } from "lucide-react";
import AppointmentRequestForm from "@/components/forms/AppointmentRequestForm";
import Button from "@/components/ui/Button";
import { hasQuickFacts, type Service } from "@/data/services";
import { doctor } from "@/data/doctor";
import { hospitals } from "@/data/hospitals";
import { cn, whatsappLink } from "@/lib/utils";

type ServiceSidebarProps = {
  service: Service;
};

function SolidCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-card border border-teal-950/8 bg-white p-5 shadow-soft",
        className,
      )}
    >
      {children}
    </div>
  );
}

export default function ServiceSidebar({ service }: ServiceSidebarProps) {
  const facts = service.quickFacts;
  const showFacts = hasQuickFacts(facts);

  return (
    <aside className="hidden w-full lg:sticky lg:top-28 lg:block lg:self-start">
      <div className="space-y-4">
        <SolidCard className="md:p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
            Book an Appointment
          </p>
          <p className="mt-2 font-serif text-2xl text-heading">
            {service.shortTitle}
          </p>
          <div className="mt-5 min-w-0">
            <AppointmentRequestForm
              idPrefix={`service-${service.slug}`}
              submitLabel="Submit"
              showIntro={false}
            />
          </div>
        </SolidCard>

        <SolidCard className="space-y-3">
          <Button href={hospitals[0].phoneHref} variant="dark" className="w-full">
            <Phone className="h-4 w-4" aria-hidden />
            Call
          </Button>
          <Button
            href={whatsappLink(
              doctor.whatsapp,
              `Assalamu Alaikum, I would like an appointment about ${service.title}.`,
            )}
            variant="gold"
            className="w-full"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            WhatsApp
          </Button>
        </SolidCard>

        <SolidCard>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
            Consultation timings
          </p>
          <ul className="mt-4 space-y-4">
            {hospitals.map((hospital) => (
              <li key={hospital.id}>
                <p className="font-semibold text-heading">{hospital.name}</p>
                <p className="mt-1 text-sm text-muted">{hospital.scheduleDetail}</p>
              </li>
            ))}
          </ul>
        </SolidCard>

        {showFacts ? (
          <SolidCard>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
              Quick Facts
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                { label: "Procedure time", value: facts.procedureTime },
                { label: "Hospital stay", value: facts.hospitalStay },
                { label: "Return to work", value: facts.returnToWork },
              ]
                .filter((fact) => fact.value)
                .map((fact) => (
                  <li
                    key={fact.label}
                    className="flex justify-between gap-3 border-b border-teal-950/8 pb-2 last:border-0"
                  >
                    <span className="text-muted">{fact.label}</span>
                    <span className="text-right font-semibold text-heading">
                      {fact.value}
                    </span>
                  </li>
                ))}
            </ul>
          </SolidCard>
        ) : null}
      </div>
    </aside>
  );
}
