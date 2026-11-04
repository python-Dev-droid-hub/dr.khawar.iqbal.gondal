"use client";

import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";

export default function FinalCTA() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-padding pt-8 md:pt-12">
      <Container>
        <Reveal>
          <div className="dark-section relative overflow-hidden rounded-card px-5 py-12 text-center shadow-soft sm:px-6 md:px-12 md:py-16">
            <motion.svg
              className="pointer-events-none absolute inset-x-0 top-1/2 h-24 w-full -translate-y-1/2 opacity-30"
              viewBox="0 0 1200 120"
              fill="none"
              aria-hidden
              preserveAspectRatio="none"
            >
              <motion.path
                d="M0 60 H220 L250 60 L280 20 L310 100 L345 60 H520 L550 60 L580 28 L620 95 L660 60 H820 L850 60 L885 18 L925 102 L965 60 H1200"
                stroke="rgb(var(--gold))"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0.35 }}
                whileInView={
                  reduceMotion
                    ? { pathLength: 1, opacity: 0.45 }
                    : { pathLength: 1, opacity: 0.55 }
                }
                viewport={{ once: true }}
                transition={
                  reduceMotion
                    ? { duration: 0 }
                    : { duration: 2.4, ease: "easeInOut", repeat: Infinity, repeatType: "loop", repeatDelay: 1.2 }
                }
              />
            </motion.svg>

            <div className="relative z-10 mx-auto max-w-2xl">
              <h2 className="font-serif text-2xl text-cream sm:text-3xl md:text-4xl lg:text-5xl">
                Take the first step toward better health
              </h2>
              <p className="mt-4 text-sm text-cream/75 md:text-base">
                Book your consultation today and take a calm, informed step
                toward recovery.
              </p>
              <Button href="/book" variant="gold" className="mt-8">
                Book Consultation
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
