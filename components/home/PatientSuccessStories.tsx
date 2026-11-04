import { CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { successStories } from "@/data/successStories";

export default function PatientSuccessStories() {
  return (
    <section className="section-padding bg-cream-dark/40">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Outcomes"
            title="Patient Success Stories"
            description="Short case summaries that reflect common journeys through consultation, surgery, and recovery."
            align="center"
            className="mb-12 md:mb-14"
          />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {successStories.map((story, index) => (
            <Reveal key={story.id} delay={0.06 * index}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-card border border-teal-950/8 bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-gold/35 hover:shadow-[0_14px_36px_rgba(201,161,91,0.16)] sm:p-6 md:p-7">
                <div
                  className="absolute inset-y-0 left-0 w-1 bg-gold-gradient opacity-80 transition group-hover:opacity-100"
                  aria-hidden
                />

                <div className="flex items-start justify-between gap-3 pl-2">
                  <span className="inline-flex items-center rounded-pill border border-teal-950/10 bg-cream px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-teal-900">
                    {story.condition}
                  </span>
                  <span className="font-serif text-2xl tabular-nums text-gold/50 transition group-hover:text-gold-dark">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-5 pl-2 font-serif text-xl leading-snug text-heading md:text-2xl">
                  {story.title}
                </h3>

                <p className="mt-3 flex-1 pl-2 text-sm leading-relaxed text-muted">
                  {story.summary}
                </p>

                <div className="mt-6 rounded-2xl border border-gold/20 bg-gold/8 p-4 pl-3 sm:p-4">
                  <p className="flex items-start gap-2.5 text-sm leading-relaxed text-teal-950">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark"
                      aria-hidden
                    />
                    <span>
                      <span className="mb-0.5 block text-[10px] font-semibold uppercase tracking-[0.16em] text-gold-dark">
                        Outcome
                      </span>
                      {story.outcome}
                    </span>
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
