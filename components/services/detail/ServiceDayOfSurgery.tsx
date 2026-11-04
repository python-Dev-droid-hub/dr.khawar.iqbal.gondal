import SectionHeading from "@/components/ui/SectionHeading";
import Reveal, { Stagger, StaggerItem } from "@/components/services/detail/StaticReveal";
import DetailIcon from "@/components/services/detail/DetailIcon";
import ServiceSection from "@/components/services/detail/ServiceSection";
import type { Service } from "@/data/services";

type ServiceDayOfSurgeryProps = {
  service: Service;
};

export default function ServiceDayOfSurgery({
  service,
}: ServiceDayOfSurgeryProps) {
  if (!service.dayOfSurgery.length) return null;

  return (
    <ServiceSection id="day-of-surgery" tone="white">
      <Reveal>
        <SectionHeading
          eyebrow="Hospital day"
          title="Day of Surgery"
          align="left"
          className="mb-10 max-w-3xl"
        />
      </Reveal>

      <Stagger className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {service.dayOfSurgery.map((step, index) => (
          <StaggerItem key={step.title}>
            <article className="h-full rounded-card border border-teal-950/8 bg-cream/70 p-5 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-dark">
                {String(index + 1).padStart(2, "0")}
              </p>
              <span className="mt-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
                <DetailIcon name="hospital" className="h-4 w-4" />
              </span>
              <h3 className="mt-3 font-serif text-lg text-heading">{step.title}</h3>
              <p className="mt-2 text-sm leading-[1.7] text-muted">
                {step.description}
              </p>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </ServiceSection>
  );
}
