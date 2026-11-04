import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/services/detail/StaticReveal";
import ServiceSection from "@/components/services/detail/ServiceSection";
import type { Service } from "@/data/services";

type ServiceRisksProps = {
  service: Service;
};

export default function ServiceRisks({ service }: ServiceRisksProps) {
  if (!service.risks.length && !service.notCandidateFor.length) return null;

  return (
    <ServiceSection id="risks" tone="tealTint">
      <Reveal>
        <SectionHeading
          eyebrow="Safety"
          title="Risks and Safety"
          description="An honest overview of possible complications and how they are discussed before surgery."
          align="left"
          className="mb-10 max-w-3xl"
        />
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-2">
        {service.risks.length ? (
          <Reveal>
            <div className="h-full rounded-card border border-teal-950/8 bg-white/80 p-6 shadow-soft">
              <h3 className="font-serif text-xl text-heading">
                Possible complications
              </h3>
              <ul className="mt-4 space-y-4">
                {service.risks.map((item) => (
                  <li key={item.title}>
                    <p className="font-semibold text-heading">{item.title}</p>
                    <p className="mt-1 text-sm leading-[1.7] text-muted">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ) : null}

        {service.notCandidateFor.length ? (
          <Reveal delay={0.08}>
            <div className="h-full rounded-card border border-gold/30 bg-gold/10 p-6 shadow-soft">
              <h3 className="font-serif text-xl text-heading">
                Who may not be a candidate
              </h3>
              <ul className="mt-4 space-y-3">
                {service.notCandidateFor.map((item) => (
                  <li key={item} className="text-sm leading-[1.7] text-muted">
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
