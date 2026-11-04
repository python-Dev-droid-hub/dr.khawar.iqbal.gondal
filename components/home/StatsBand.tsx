import { Award, HeartPulse, Star, Trophy } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";

const stats = [
  {
    id: "surgeries",
    value: 1000,
    suffix: "+",
    label: "Surgeries",
    icon: Trophy,
  },
  {
    id: "years",
    value: 15,
    suffix: "+",
    label: "Years",
    icon: Award,
  },
  {
    id: "satisfaction",
    value: 98,
    suffix: "%",
    label: "Satisfaction",
    icon: HeartPulse,
  },
  {
    id: "rating",
    value: 5.0,
    suffix: "",
    decimals: 1,
    label: "Rating",
    icon: Star,
  },
] as const;

export default function StatsBand() {
  return (
    <section className="section-padding pt-10 md:pt-14">
      <Container>
        <Reveal>
          <div className="dark-section rounded-card px-5 py-10 shadow-soft sm:px-6 md:px-10 md:py-12">
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.id} className="text-center">
                    <span className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-gold/15 text-gold-light">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <p className="font-serif text-3xl text-cream sm:text-4xl md:text-5xl">
                      <AnimatedCounter
                        value={stat.value}
                        decimals={"decimals" in stat ? stat.decimals : 0}
                        suffix={stat.suffix}
                      />
                    </p>
                    <p className="mt-2 text-sm text-cream/70">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
