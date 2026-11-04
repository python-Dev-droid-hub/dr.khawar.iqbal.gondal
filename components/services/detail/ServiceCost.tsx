import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/services/detail/StaticReveal";
import ServiceSection from "@/components/services/detail/ServiceSection";
import type { Service } from "@/data/services";

type ServiceCostProps = {
  service: Service;
};

export default function ServiceCost({ service }: ServiceCostProps) {
  if (!service.costFactors.length) return null;

  return (
    <ServiceSection id="cost" tone="tealTint">
      <Reveal>
        <SectionHeading
          eyebrow="Fees"
          title="Cost and Insurance Factors"
          description="We do not publish fixed prices here. Several clinical and hospital factors shape the estimate."
          align="left"
          className="mb-10 max-w-3xl"
        />
      </Reveal>

      <Reveal delay={0.05}>
        <ul className="grid gap-3 sm:grid-cols-2">
          {service.costFactors.map((factor) => (
            <li
              key={factor}
              className="rounded-card border border-teal-950/8 bg-white/80 px-5 py-4 text-sm leading-[1.7] text-muted shadow-soft md:text-base"
            >
              {factor}
            </li>
          ))}
        </ul>
      </Reveal>

      <div className="mt-8">
        <Button href="/book" variant="gold">
          Request a cost estimate
        </Button>
      </div>
    </ServiceSection>
  );
}
