import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/services/detail/StaticReveal";
import ServiceSection from "@/components/services/detail/ServiceSection";
import type { Service } from "@/data/services";

type ServiceSurgeryDecisionProps = {
  service: Service;
};

export default function ServiceSurgeryDecision({
  service,
}: ServiceSurgeryDecisionProps) {
  if (!service.surgeryNeededWhen.length && !service.nonSurgicalOptions.length) {
    return null;
  }

  return (
    <ServiceSection id="surgery-decision" tone="white">
      <Reveal>
        <SectionHeading
          eyebrow="Decision"
          title="When Is Surgery Needed?"
          align="left"
          className="mb-10 max-w-3xl"
        />
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2">
        {service.surgeryNeededWhen.length ? (
          <Reveal>
            <div className="h-full rounded-card border border-teal-950/8 bg-cream p-6 shadow-soft">
              <h3 className="font-serif text-2xl text-heading">
                Surgery is recommended when
              </h3>
              <ul className="mt-5 space-y-3">
                {service.surgeryNeededWhen.map((item) => (
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
        {service.nonSurgicalOptions.length ? (
          <Reveal delay={0.08}>
            <div className="h-full rounded-card border border-teal-950/8 bg-cream p-6 shadow-soft">
              <h3 className="font-serif text-2xl text-heading">
                Non-surgical options we may try first
              </h3>
              <ul className="mt-5 space-y-3">
                {service.nonSurgicalOptions.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-[1.7] text-muted md:text-base"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-800" />
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
