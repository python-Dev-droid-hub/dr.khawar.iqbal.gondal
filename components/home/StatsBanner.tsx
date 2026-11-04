import { Award, HeartPulse, Star, Trophy } from "lucide-react";
import { bannerStats } from "@/data/stats";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";

const icons = {
  surgeries: Trophy,
  experience: Award,
  satisfaction: HeartPulse,
  rating: Star,
  discharge: Award,
} as const;

export default function StatsBanner() {
  return (
    <section className="bg-teal-hero py-16 md:py-20">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {bannerStats.map((stat, index) => {
            const Icon = icons[stat.icon];
            return (
              <Reveal key={stat.id} delay={0.05 * index}>
                <div className="text-center">
                  <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold-light">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <p className="font-serif text-3xl text-cream md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-cream/70">{stat.label}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
