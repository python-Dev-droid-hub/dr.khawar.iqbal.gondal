import SectionHeading from "@/components/ui/SectionHeading";
import Reveal, { Stagger, StaggerItem } from "@/components/services/detail/StaticReveal";
import DetailIcon from "@/components/services/detail/DetailIcon";
import ServiceSection from "@/components/services/detail/ServiceSection";
import { hasQuickFacts, type Service } from "@/data/services";

type ServiceProcedureStepsProps = {
  service: Service;
};

export default function ServiceProcedureSteps({
  service,
}: ServiceProcedureStepsProps) {
  if (!service.procedureSteps.length) return null;

  const facts = service.quickFacts;
  const anesthesiaItems = hasQuickFacts(facts)
    ? [
        facts.anesthesia && `Anesthesia: ${facts.anesthesia}`,
        facts.incisions && `Incisions: ${facts.incisions}`,
        facts.procedureTime && `Duration: ${facts.procedureTime}`,
      ].filter(Boolean) as string[]
    : [];

  return (
    <ServiceSection id="procedure" tone="tealTint">
      <Reveal>
        <SectionHeading
          eyebrow="Procedure"
          title="The Procedure Step by Step"
          align="left"
          className="mb-10 max-w-3xl"
        />
      </Reveal>

      <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
        <Stagger className="relative space-y-0">
          <div
            className="absolute bottom-4 left-[1.15rem] top-4 w-px bg-gold/35"
            aria-hidden
          />
          {service.procedureSteps.map((step, index) => (
            <StaggerItem key={step.title}>
              <article className="relative flex gap-4 pb-8 last:pb-0">
                <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-cream text-gold-dark shadow-soft">
                  <DetailIcon name="check" className="h-4 w-4" />
                </span>
                <div className="min-w-0 rounded-card border border-teal-950/8 bg-white/80 p-5 shadow-soft">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-dark">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-2 font-serif text-xl text-heading">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-[70ch] text-sm leading-[1.7] text-muted md:text-base">
                    {step.description}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        {anesthesiaItems.length ? (
          <Reveal delay={0.08}>
            <div className="h-fit rounded-card border border-teal-950/8 bg-white p-6 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
                Anesthesia, incisions, duration
              </p>
              <ul className="mt-4 space-y-3">
                {anesthesiaItems.map((item) => (
                  <li
                    key={item}
                    className="border-b border-teal-950/8 pb-3 text-sm leading-[1.7] text-muted last:border-0 last:pb-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ) : null}
      </div>
    </ServiceSection>
  );
}
