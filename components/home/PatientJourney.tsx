import { journeySteps } from "@/data/journey";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function PatientJourney() {
  return (
    <section id="journey" className="section-padding scroll-mt-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Your Path to Care"
            title="The Surgery Journey"
            description="A clear, supported process from first consultation through recovery and follow-up."
            align="center"
            className="mb-14"
          />
        </Reveal>

        <div className="relative">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gold/40 lg:block" />
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {journeySteps.map((step, index) => (
              <Reveal key={step.id} delay={0.06 * index}>
                <li className="relative text-center lg:text-left">
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold bg-cream font-serif text-lg text-heading shadow-soft lg:mx-0">
                    {step.step}
                  </div>
                  <h3 className="font-serif text-xl text-heading">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
