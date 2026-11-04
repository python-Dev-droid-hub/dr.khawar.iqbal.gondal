import { MonitorSmartphone, ShieldCheck, Theater } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { facilities } from "@/data/facilities";
import type { Facility } from "@/data/facilities";

const iconMap: Record<
  Facility["icon"],
  React.ComponentType<{ className?: string }>
> = {
  hd: MonitorSmartphone,
  theatre: Theater,
  sterile: ShieldCheck,
};

export default function TechnologyFacilities() {
  return (
    <section className="dark-section section-padding">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Facilities"
            title="Modern Technology & Care"
            description="Hospital-based surgery with equipment and protocols built around patient safety."
            align="center"
            light
            className="mb-10 md:mb-12"
          />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility, index) => {
            const Icon = iconMap[facility.icon];
            return (
              <Reveal key={facility.id} delay={0.06 * index}>
                <article className="interactive-card h-full rounded-card border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-7">
                  <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/15 text-gold-light">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="font-serif text-2xl text-cream">
                    {facility.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/70">
                    {facility.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
