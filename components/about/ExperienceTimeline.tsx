import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { experienceTimeline } from "@/data/about";

export default function ExperienceTimeline() {
  return (
    <section className="section-padding">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Appointments"
            title="Clinical Experience"
            description="Hospital roles that shaped a steady path from registrar training to consultant surgical practice."
            align="center"
            className="mb-12"
          />
        </Reveal>

        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
          {experienceTimeline.map((item, index) => (
            <Reveal key={item.id} delay={0.06 * index}>
              <article className="relative flex h-full flex-col overflow-hidden rounded-card border border-teal-950/8 bg-white p-6 shadow-soft">
                <div
                  className="absolute inset-x-0 top-0 h-1 bg-gold-gradient"
                  aria-hidden
                />
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
                  {item.year}
                </p>
                <h3 className="mt-3 font-serif text-xl text-heading sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-teal-800">
                  {item.place}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
