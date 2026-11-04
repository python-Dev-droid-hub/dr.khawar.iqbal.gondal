import SectionHeading from "@/components/ui/SectionHeading";
import Reveal, { Stagger, StaggerItem } from "@/components/services/detail/StaticReveal";
import ServiceSection from "@/components/services/detail/ServiceSection";
import { hasQuickFacts, type Service } from "@/data/services";

type ServiceOverviewProps = {
  service: Service;
};

export default function ServiceOverview({ service }: ServiceOverviewProps) {
  if (!service.overviewSections.length) return null;

  const facts = service.quickFacts;
  const factRows = hasQuickFacts(facts)
    ? [
        { label: "Anesthesia", value: facts.anesthesia },
        { label: "Incisions", value: facts.incisions },
        { label: "Duration", value: facts.procedureTime },
        { label: "Hospital stay", value: facts.hospitalStay },
        { label: "Return to work", value: facts.returnToWork },
      ].filter((row) => row.value)
    : [];

  return (
    <ServiceSection id="overview" tone="cream">
      <Reveal>
        <SectionHeading
          eyebrow="Overview"
          title={`What is ${service.title}?`}
          align="left"
          className="mb-8 max-w-3xl"
        />
      </Reveal>

      <div
        className={
          factRows.length
            ? "grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start lg:gap-10"
            : "min-w-0"
        }
      >
        <Stagger className="min-w-0 space-y-8">
          {service.overviewSections.map((section) => (
            <StaggerItem key={section.heading}>
              <article className={factRows.length ? "max-w-[70ch]" : "max-w-4xl"}>
                <h3 className="font-serif text-xl text-heading md:text-2xl">
                  {section.heading}
                </h3>
                <div className="mt-3 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 40)}
                      className="text-base leading-[1.7] text-muted md:text-lg"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        {factRows.length ? (
          <Reveal delay={0.08}>
            <div className="h-fit rounded-card border border-teal-950/8 bg-white p-6 shadow-soft md:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
                Quick Facts
              </p>
              <ul className="mt-5 space-y-4">
                {factRows.map((fact) => (
                  <li
                    key={fact.label}
                    className="flex items-start justify-between gap-4 border-b border-teal-950/8 pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-sm text-muted">{fact.label}</span>
                    <span className="text-right text-sm font-semibold text-heading">
                      {fact.value}
                    </span>
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
