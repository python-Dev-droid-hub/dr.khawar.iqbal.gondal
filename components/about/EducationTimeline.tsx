import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { educationTimeline } from "@/data/about";

export default function EducationTimeline() {
  return (
    <section className="section-padding bg-cream-dark/35">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Training"
            title="Education & Qualifications"
            description="A progressive path from medical school through fellowship and advanced laparoscopic training."
            align="center"
            className="mb-12"
          />
        </Reveal>

        <div className="relative mx-auto max-w-3xl">
          <div
            className="absolute bottom-2 left-4 top-2 w-px bg-gold/30 md:left-1/2 md:-translate-x-px"
            aria-hidden
          />

          <ol className="space-y-8 pl-10 md:pl-0">
            {educationTimeline.map((item, index) => {
              const left = index % 2 === 0;
              return (
                <Reveal key={item.id} delay={0.05 * index}>
                  <li className="relative grid gap-4 md:grid-cols-2 md:gap-10">
                    <div
                      className={
                        left
                          ? "md:col-start-1 md:text-right"
                          : "md:col-start-2"
                      }
                    >
                      <article className="rounded-card border border-teal-950/5 bg-white/80 p-5 shadow-soft sm:p-6">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
                          {item.year}
                        </p>
                        <h3 className="mt-2 font-serif text-xl text-heading sm:text-2xl">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-teal-800">
                          {item.place}
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-muted">
                          {item.description}
                        </p>
                      </article>
                    </div>
                    <span
                      className="absolute left-4 top-8 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-cream bg-gold shadow-gold md:left-1/2"
                      aria-hidden
                    />
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
