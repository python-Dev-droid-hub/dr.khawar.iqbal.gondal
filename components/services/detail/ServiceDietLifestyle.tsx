import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/services/detail/StaticReveal";
import ServiceSection from "@/components/services/detail/ServiceSection";
import type { Service } from "@/data/services";

type ServiceDietLifestyleProps = {
  service: Service;
};

export default function ServiceDietLifestyle({
  service,
}: ServiceDietLifestyleProps) {
  const { favor, avoid, lifestyle } = service.diet;
  if (!favor.length && !avoid.length && !lifestyle.length) return null;

  return (
    <ServiceSection id="diet-lifestyle" tone="white">
      <Reveal>
        <SectionHeading
          eyebrow="Lifestyle"
          title="Diet and Lifestyle"
          align="left"
          className="mb-10 max-w-3xl"
        />
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2">
        {favor.length ? (
          <Reveal>
            <div className="h-full rounded-card border border-teal-950/8 bg-cream/80 p-6 shadow-soft">
              <h3 className="font-serif text-xl text-heading">Foods to favor</h3>
              <ul className="mt-4 space-y-2">
                {favor.map((item) => (
                  <li key={item} className="text-sm leading-[1.7] text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ) : null}
        {avoid.length ? (
          <Reveal delay={0.06}>
            <div className="h-full rounded-card border border-teal-950/8 bg-cream/80 p-6 shadow-soft">
              <h3 className="font-serif text-xl text-heading">Foods to avoid</h3>
              <ul className="mt-4 space-y-2">
                {avoid.map((item) => (
                  <li key={item} className="text-sm leading-[1.7] text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ) : null}
      </div>

      {lifestyle.length ? (
        <Reveal delay={0.1}>
          <div className="mt-6 rounded-card border border-teal-950/8 bg-white/80 p-6 shadow-soft">
            <h3 className="font-serif text-xl text-heading">Long-term tips</h3>
            <ul className="mt-4 space-y-2">
              {lifestyle.map((item) => (
                <li
                  key={item}
                  className="text-sm leading-[1.7] text-muted md:text-base"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ) : null}
    </ServiceSection>
  );
}
