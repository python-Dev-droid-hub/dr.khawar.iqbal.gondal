"use client";

import { useRef } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ClipboardPlus,
  HeartPulse,
  Microscope,
  Stethoscope,
  Syringe,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { journeySteps } from "@/data/journey";
import type { JourneyStep } from "@/data/journey";

const iconMap: Record<
  JourneyStep["icon"],
  React.ComponentType<{ className?: string }>
> = {
  consult: Stethoscope,
  diagnosis: Microscope,
  surgery: Syringe,
  recovery: HeartPulse,
  followup: ClipboardPlus,
};

export default function SurgeryJourney() {
  const trackRef = useRef<HTMLDivElement>(null);
  const inView = useInView(trackRef, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 80%", "end 45%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });
  const lineScale = useTransform(progress, [0, 1], [0, 1]);

  return (
    <section id="journey" className="section-padding scroll-mt-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Your Path to Care"
            title="Your Surgery Journey"
            description="A clear, supported process from first consultation through recovery and follow-up."
            align="center"
            className="mb-14"
          />
        </Reveal>

        <div ref={trackRef} className="relative">
          <div
            className="absolute bottom-4 left-7 top-4 w-px bg-gold/20 md:hidden"
            aria-hidden
          />
          <div
            className="absolute left-0 right-0 top-7 hidden h-px bg-gold/20 md:block"
            aria-hidden
          />

          <motion.div
            aria-hidden
            className="absolute bottom-4 left-7 top-4 w-px origin-top bg-gold md:hidden"
            style={reduceMotion ? undefined : { scaleY: lineScale }}
            initial={false}
            animate={
              reduceMotion ? { scaleY: inView ? 1 : 0 } : undefined
            }
            transition={{ duration: 0.8 }}
          />
          <motion.div
            aria-hidden
            className="absolute left-0 right-0 top-7 hidden h-px origin-left bg-gold md:block"
            style={reduceMotion ? undefined : { scaleX: lineScale }}
            initial={false}
            animate={
              reduceMotion ? { scaleX: inView ? 1 : 0 } : undefined
            }
            transition={{ duration: 0.8 }}
          />

          <ol className="relative grid gap-10 md:grid-cols-5 md:gap-4">
            {journeySteps.map((step, index) => {
              const Icon = iconMap[step.icon];
              const lines = step.description.split("\n");
              return (
                <Reveal key={step.id} delay={0.06 * index}>
                  <li className="relative flex gap-5 md:flex-col md:gap-0">
                    <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-gold bg-cream shadow-soft md:mx-auto md:mb-5">
                      <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-teal-950 text-[11px] font-semibold text-cream">
                        {step.step}
                      </span>
                      <Icon className="h-5 w-5 text-gold-dark" />
                    </div>
                    <div className="md:text-center">
                      <h3 className="font-serif text-xl text-heading">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {lines[0]}
                        <br />
                        {lines[1]}
                      </p>
                    </div>
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
