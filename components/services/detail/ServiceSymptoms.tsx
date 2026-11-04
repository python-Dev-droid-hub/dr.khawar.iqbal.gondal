import SectionHeading from "@/components/ui/SectionHeading";
import Reveal, { Stagger, StaggerItem } from "@/components/services/detail/StaticReveal";
import DetailIcon from "@/components/services/detail/DetailIcon";
import ServiceSection from "@/components/services/detail/ServiceSection";
import type { Service } from "@/data/services";

type ServiceSymptomsProps = {
  service: Service;
};

export default function ServiceSymptoms({ service }: ServiceSymptomsProps) {
  if (!service.symptoms.length) return null;

  return (
    <ServiceSection id="symptoms" tone="white">
      <Reveal>
        <SectionHeading
          eyebrow="Symptoms"
          title="Symptoms and Signs"
          description="Common presentations that may lead patients to seek surgical review."
          align="left"
          className="mb-10 max-w-3xl"
        />
      </Reveal>

      <Stagger className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {service.symptoms.map((item) => (
          <StaggerItem key={item.title}>
            <article className="h-full rounded-card border border-teal-950/8 bg-cream/80 p-5 shadow-soft">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gold/15 text-gold-dark">
                <DetailIcon name={item.icon} />
              </span>
              <h3 className="mt-4 font-serif text-xl text-heading">{item.title}</h3>
              {item.description ? (
                <p className="mt-2 text-sm leading-[1.7] text-muted">
                  {item.description}
                </p>
              ) : null}
            </article>
          </StaggerItem>
        ))}
      </Stagger>

      {service.urgentNote ? (
        <Reveal delay={0.08}>
          <div className="mt-8 rounded-card border border-gold/35 bg-gold/10 p-5 md:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
              When to see a surgeon urgently
            </p>
            <p className="mt-3 max-w-[70ch] text-base leading-[1.7] text-heading">
              {service.urgentNote}
            </p>
          </div>
        </Reveal>
      ) : null}
    </ServiceSection>
  );
}
