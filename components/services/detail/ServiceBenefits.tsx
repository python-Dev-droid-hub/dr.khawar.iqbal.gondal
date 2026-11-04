import SectionHeading from "@/components/ui/SectionHeading";
import Reveal, { Stagger, StaggerItem } from "@/components/services/detail/StaticReveal";
import ServiceSection from "@/components/services/detail/ServiceSection";
import type { Service } from "@/data/services";

type ServiceBenefitsProps = {
  service: Service;
};

export default function ServiceBenefits({ service }: ServiceBenefitsProps) {
  if (!service.benefits.length) return null;

  return (
    <ServiceSection id="benefits" tone="white">
      <Reveal>
        <SectionHeading
          eyebrow="Benefits"
          title="Benefits of this approach"
          description="What patients can reasonably expect when this pathway is clinically suitable."
          align="left"
          className="mb-10 max-w-3xl"
        />
      </Reveal>

      <Stagger className="divide-y divide-teal-950/10 border-y border-teal-950/10">
        {service.benefits.map((item, index) => (
          <StaggerItem key={item.title}>
            <article className="grid gap-3 py-6 sm:grid-cols-[4.5rem_minmax(0,1fr)] sm:gap-6 sm:py-7 md:grid-cols-[5.5rem_minmax(0,1fr)]">
              <span
                className="font-serif text-3xl leading-none text-gold-dark/80 md:text-4xl"
                aria-hidden
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <h3 className="font-serif text-xl leading-snug text-heading md:text-2xl">
                  {item.title}
                </h3>
                {item.description ? (
                  <p className="mt-2 max-w-[65ch] text-sm leading-[1.7] text-muted md:text-base">
                    {item.description}
                  </p>
                ) : null}
              </div>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </ServiceSection>
  );
}
