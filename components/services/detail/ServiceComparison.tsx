import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/services/detail/StaticReveal";
import ServiceSection from "@/components/services/detail/ServiceSection";
import type { Service } from "@/data/services";

type ServiceComparisonProps = {
  service: Service;
};

export default function ServiceComparison({ service }: ServiceComparisonProps) {
  if (!service.comparison.length) return null;

  return (
    <ServiceSection id="comparison" tone="cream">
      <Reveal>
        <SectionHeading
          eyebrow="Comparison"
          title="Laparoscopic vs Open Surgery"
          description="A clear side-by-side view of typical differences when both options are clinically possible."
          align="left"
          className="mb-10 max-w-3xl"
        />
      </Reveal>

      <Reveal delay={0.06}>
        <div className="overflow-x-auto rounded-card border border-teal-950/8 bg-white/80 shadow-soft">
          <table className="min-w-full text-left text-sm md:text-base">
            <thead>
              <tr className="border-b border-teal-950/10">
                <th className="px-4 py-4 font-serif text-lg text-heading md:px-6">
                  Feature
                </th>
                <th className="bg-gold/15 px-4 py-4 font-serif text-lg text-heading md:px-6">
                  Laparoscopic
                </th>
                <th className="px-4 py-4 font-serif text-lg text-heading md:px-6">
                  Open
                </th>
              </tr>
            </thead>
            <tbody>
              {service.comparison.map((row) => (
                <tr
                  key={row.label}
                  className="border-b border-teal-950/8 last:border-0"
                >
                  <td className="px-4 py-4 font-medium text-heading md:px-6">
                    {row.label}
                  </td>
                  <td className="bg-gold/10 px-4 py-4 leading-[1.7] text-muted md:px-6">
                    {row.laparoscopic}
                  </td>
                  <td className="px-4 py-4 leading-[1.7] text-muted md:px-6">
                    {row.open}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </ServiceSection>
  );
}
