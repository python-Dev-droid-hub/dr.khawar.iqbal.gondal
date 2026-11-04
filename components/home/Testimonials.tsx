"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import Reveal from "@/components/motion/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const total = testimonials.length;

  const prev = () => setActive((value) => (value - 1 + total) % total);
  const next = () => setActive((value) => (value + 1) % total);

  return (
    <section className="section-padding">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Patient Stories"
            title="What Our Patients Say"
            description="Real experiences from patients treated in Gujrat and Mandi Bahauddin."
            align="center"
            className="mb-12"
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="relative mx-auto max-w-3xl">
            <GlassCard className="px-6 py-10 text-center md:px-12 md:py-12">
              <div className="mx-auto mb-6 h-16 w-16 overflow-hidden rounded-full border-2 border-gold/40">
                <Image
                  src={testimonials[active].avatar.src}
                  alt={testimonials[active].avatar.alt}
                  width={64}
                  height={64}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mb-4 flex justify-center gap-1" aria-label="5 star rating">
                {Array.from({ length: testimonials[active].rating }).map(
                  (_, index) => (
                    <Star
                      key={index}
                      className="h-4 w-4 fill-gold text-gold"
                      aria-hidden
                    />
                  ),
                )}
              </div>
              <blockquote className="font-serif text-xl leading-relaxed text-heading md:text-2xl">
                “{testimonials[active].quote}”
              </blockquote>
              <p className="mt-6 text-sm font-semibold text-teal-950">
                {testimonials[active].name}
              </p>
              <p className="text-sm text-muted">
                {testimonials[active].location}
              </p>
            </GlassCard>

            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-teal-950/15 text-teal-950 transition hover:bg-cream-dark"
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
                className="flex h-11 w-11 items-center justify-center rounded-full border border-teal-950/15 text-teal-950 transition hover:bg-cream-dark"
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
