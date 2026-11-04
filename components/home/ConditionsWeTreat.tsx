import {
  CircleDot,
  Activity,
  Syringe,
  Waves,
  Split,
  Route,
  Flower2,
  Droplets,
} from "lucide-react";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import Reveal, { Stagger, StaggerItem } from "@/components/motion/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { conditions } from "@/data/conditions";
import type { Condition } from "@/data/conditions";

const iconMap: Record<
  Condition["icon"],
  React.ComponentType<{ className?: string }>
> = {
  gallstones: CircleDot,
  hernia: Activity,
  appendicitis: Syringe,
  piles: Waves,
  fissure: Split,
  fistula: Route,
  thyroid: Flower2,
  abscess: Droplets,
};

export default function ConditionsWeTreat() {
  return (
    <section className="section-padding bg-cream-dark/30">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Conditions"
            title="Conditions We Treat"
            description="Focused surgical care for common abdominal and general surgery conditions."
            align="center"
            className="mb-10 md:mb-12"
          />
        </Reveal>

        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {conditions.map((condition) => {
            const Icon = iconMap[condition.icon];
            return (
              <StaggerItem key={condition.id}>
                <GlassCard
                  interactive
                  className="group h-full p-5"
                >
                  <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gold/15 text-gold-dark transition group-hover:bg-gold/25">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-serif text-xl text-heading">
                    {condition.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {condition.summary}
                  </p>
                </GlassCard>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}
