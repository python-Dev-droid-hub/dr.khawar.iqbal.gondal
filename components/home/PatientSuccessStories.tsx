import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import { successStories } from "@/data/successStories";

export default function PatientSuccessStories() {
  return (
    <section className="section-padding">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Outcomes"
            title="Patient Success Stories"
            description="Short case summaries that reflect common journeys through consultation, surgery, and recovery."
            align="center"
            className="mb-12"
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {successStories.map((story, index) => (
            <Reveal key={story.id} delay={0.06 * index}>
              <article className="interactive-card flex h-full flex-col rounded-card border border-teal-950/5 bg-white/80 p-5 shadow-soft sm:p-6 md:p-7">
                <Badge variant="gold">{story.condition}</Badge>
                <h3 className="mt-4 font-serif text-2xl text-heading">
                  {story.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {story.summary}
                </p>
                <p className="mt-5 border-t border-teal-950/10 pt-4 text-sm font-medium text-teal-950">
                  {story.outcome}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
