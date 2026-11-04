import SectionHeading from "@/components/ui/SectionHeading";
import Reveal, { Stagger, StaggerItem } from "@/components/services/detail/StaticReveal";
import DetailIcon from "@/components/services/detail/DetailIcon";
import ServiceSection from "@/components/services/detail/ServiceSection";
import type { Service } from "@/data/services";

type ServiceDiagnosisProps = {
  service: Service;
};

export default function ServiceDiagnosis({ service }: ServiceDiagnosisProps) {
  if (!service.diagnosis.length) return null;

  return (
    <ServiceSection id="diagnosis" tone="cream">
      <Reveal>
        <SectionHeading
          eyebrow="Diagnosis"
          title="How we diagnose"
          description="A structured work-up helps confirm the problem and plan safe treatment."
          align="left"
          className="mb-10 max-w-3xl"
        />
      </Reveal>

      <Stagger className="grid gap-4 sm:grid-cols-2">
        {service.diagnosis.map((step, index) => (
          <StaggerItem key={step.title}>
            <article className="h-full rounded-card border border-teal-950/8 bg-white/80 p-5 shadow-soft md:p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gold/15 text-gold-dark">
                  <DetailIcon name="stethoscope" />
                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-dark">
                  Step {index + 1}
                </p>
              </div>
              <h3 className="mt-4 font-serif text-xl text-heading">{step.title}</h3>
              <p className="mt-2 text-sm leading-[1.7] text-muted md:text-base">
                {step.description}
              </p>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </ServiceSection>
  );
}
