import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { aboutAchievements } from "@/data/about";

export default function AboutAchievements() {
  return (
    <section className="section-padding bg-cream-dark/35">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Achievements"
            title="Experience that patients can feel"
            description="Numbers that reflect years of operative practice and consistent patient trust."
            align="center"
            className="mb-12"
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="dark-section rounded-card px-5 py-10 shadow-soft sm:px-6 md:px-10 md:py-12">
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              {aboutAchievements.map((stat) => (
                <div key={stat.id} className="text-center">
                  <p className="font-serif text-3xl text-cream sm:text-4xl md:text-5xl">
                    <AnimatedCounter
                      value={stat.value}
                      decimals={stat.decimals ?? 0}
                      suffix={stat.suffix ?? ""}
                    />
                  </p>
                  <p className="mt-2 text-sm text-cream/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
