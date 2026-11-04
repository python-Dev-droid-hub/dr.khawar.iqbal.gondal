"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import Reveal from "@/components/motion/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils";

export default function TestimonialsCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const total = testimonials.length;

  const prev = () => setActive((value) => (value - 1 + total) % total);
  const next = () => setActive((value) => (value + 1) % total);

  useEffect(() => {
    if (paused || reduceMotion) return;
    const id = window.setInterval(() => {
      setActive((value) => (value + 1) % total);
    }, 5200);
    return () => window.clearInterval(id);
  }, [paused, reduceMotion, total]);

  const prevIndex = (active - 1 + total) % total;
  const nextIndex = (active + 1) % total;

  return (
    <section id="testimonials" className="section-padding bg-cream-dark/30">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials"
            title="What Our Patients Say"
            description="Words from patients treated in Gujrat and Mandi Bahauddin."
            align="center"
            className="mb-12"
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div
            className="relative mx-auto max-w-5xl"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="grid items-center gap-4 lg:grid-cols-[0.7fr_1.4fr_0.7fr]">
              <SideCard
                className="hidden lg:block"
                quote={testimonials[prevIndex].quote}
                name={testimonials[prevIndex].name}
                faded
              />

              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={testimonials[active].id}
                    initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
                    transition={{ duration: 0.35 }}
                  >
                    <GlassCard interactive className="border-gold/35 px-5 py-8 text-center shadow-soft sm:px-6 sm:py-10 md:px-10 md:py-12">
                      <div className="mx-auto mb-5 h-16 w-16 overflow-hidden rounded-full border-2 border-gold/40">
                        <Image
                          src={testimonials[active].avatar.src}
                          alt={testimonials[active].avatar.alt}
                          width={64}
                          height={64}
                          className="h-full w-full object-cover"
                          sizes="64px"
                        />
                      </div>
                      <div
                        className="mb-4 flex justify-center gap-1"
                        aria-label={`${testimonials[active].rating} star rating`}
                      >
                        {Array.from({
                          length: testimonials[active].rating,
                        }).map((_, index) => (
                          <Star
                            key={index}
                            className="h-4 w-4 fill-gold text-gold"
                            aria-hidden
                          />
                        ))}
                      </div>
                      <blockquote className="font-serif text-lg leading-relaxed text-heading sm:text-xl lg:text-2xl">
                        “{testimonials[active].quote}”
                      </blockquote>
                      <p className="mt-6 text-sm font-semibold text-teal-950">
                        {testimonials[active].name}
                      </p>
                      <p className="text-sm text-muted">
                        {testimonials[active].location}
                      </p>
                    </GlassCard>
                  </motion.div>
                </AnimatePresence>
              </div>

              <SideCard
                className="hidden lg:block"
                quote={testimonials[nextIndex].quote}
                name={testimonials[nextIndex].name}
                faded
              />
            </div>

            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-teal-950/15 text-teal-950 transition hover:bg-cream-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    aria-label={`Show testimonial ${index + 1}`}
                    onClick={() => setActive(index)}
                    className={cn(
                      "h-2.5 rounded-full transition-all",
                      index === active
                        ? "w-8 bg-gold"
                        : "w-2.5 bg-teal-950/20 hover:bg-teal-950/40",
                    )}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-teal-950/15 text-teal-950 transition hover:bg-cream-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function SideCard({
  quote,
  name,
  faded,
  className,
}: {
  quote: string;
  name: string;
  faded?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-card border border-teal-950/5 bg-white/50 p-5",
        faded && "scale-95 opacity-45",
        className,
      )}
    >
      <p className="line-clamp-4 font-serif text-base text-heading">“{quote}”</p>
      <p className="mt-4 text-xs font-semibold text-muted">{name}</p>
    </div>
  );
}
