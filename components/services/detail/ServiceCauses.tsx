import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/services/detail/StaticReveal";
import ServiceSection from "@/components/services/detail/ServiceSection";
import type { Service } from "@/data/services";

type ServiceCausesProps = {
  service: Service;
};

export default function ServiceCauses({ service }: ServiceCausesProps) {
  if (!service.causes.length && !service.riskFactors.length) return null;

  return (
    <ServiceSection id="causes" tone="tealTint">
      <Reveal>
        <SectionHeading
          eyebrow="Causes"
          title="Causes and Risk Factors"
          align="left"
          className="mb-10 max-w-3xl"
        />
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2">
        {service.causes.length ? (
          <Reveal>
            <div className="rounded-card border border-teal-950/8 bg-white/80 p-6 shadow-soft">
              <h3 className="font-serif text-2xl text-heading">Common causes</h3>
              <ul className="mt-5 space-y-3">
                {service.causes.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-[1.7] text-muted md:text-base"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ) : null}
        {service.riskFactors.length ? (
          <Reveal delay={0.08}>
            <div className="rounded-card border border-teal-950/8 bg-white/80 p-6 shadow-soft">
              <h3 className="font-serif text-2xl text-heading">Risk factors</h3>
              <ul className="mt-5 space-y-3">
                {service.riskFactors.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-[1.7] text-muted md:text-base"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
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
