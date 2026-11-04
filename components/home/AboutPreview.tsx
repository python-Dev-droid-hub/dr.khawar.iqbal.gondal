"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { aboutQualifications } from "@/data/credentials";
import { doctor } from "@/data/doctor";

function ExperienceCounter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState(reduceMotion ? value : 0);

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      setCount(value);
      return;
    }

    let frame = 0;
    const duration = 1200;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduceMotion, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}+
    </span>
  );
}

export default function AboutPreview() {
  return (
    <section id="about-preview" className="section-padding pt-10 md:pt-12">
      {/* Mobile: side-by-side like mockup; stacked detail below. Desktop: classic 2-col */}
      <Container>
        <div className="grid grid-cols-[0.85fr_1.15fr] items-center gap-3 sm:gap-6 md:gap-8 lg:hidden">
          <Reveal>
            <div className="relative mx-auto w-full max-w-[160px] min-[400px]:max-w-[180px] sm:max-w-[220px]">
              <div
                className="absolute -inset-x-2 -bottom-3 top-8 rounded-[1.5rem] bg-gold-gradient opacity-90 shadow-gold sm:-inset-x-3 sm:top-10"
                aria-hidden
              />
              <div className="relative overflow-hidden rounded-t-[999px] rounded-b-[1.25rem] border-[4px] border-cream bg-cream shadow-soft sm:border-[5px]">
                <div className="relative aspect-[3/4]">
                  <div className="absolute inset-x-2 bottom-0 top-8 sm:inset-x-3 sm:top-10">
                    <Image
                      src={doctor.aboutPortrait.src}
                      alt={doctor.aboutPortrait.alt}
                      fill
                      className="object-contain object-bottom"
                      sizes="180px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <SectionHeading
              eyebrow="About the Surgeon"
              title={`About ${doctor.name}`}
              description={doctor.aboutExtended[0]}
              align="left"
              className="[&_h2]:text-xl [&_h2]:leading-snug min-[400px]:[&_h2]:text-2xl sm:[&_h2]:text-3xl [&_p]:mt-2 [&_p]:line-clamp-4 [&_p]:text-sm sm:[&_p]:line-clamp-none sm:[&_p]:text-base"
            />
          </Reveal>
        </div>

        <div className="mt-6 lg:hidden">
          <p className="text-sm leading-relaxed text-muted sm:text-base">
            {doctor.aboutExtended[1]}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {aboutQualifications.map((item) => (
              <Badge key={item} variant="cream">
                {item}
              </Badge>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap items-end gap-4 sm:gap-8">
            <div>
              <p className="font-serif text-4xl text-heading sm:text-5xl">
                <ExperienceCounter value={doctor.experienceYears} />
              </p>
              <p className="mt-1 text-sm text-muted">Years of experience</p>
            </div>
            <p className="font-hand text-2xl text-teal-800 sm:text-3xl md:text-4xl">
              {doctor.signature}
            </p>
          </div>
          <Button href="/about" variant="outline" className="mt-6 sm:mt-8">
            Read Full Profile
          </Button>
        </div>

        <div className="hidden items-center gap-16 lg:grid lg:grid-cols-2">
          <Reveal>
            <div className="relative mx-auto w-full max-w-md lg:mx-0">
              <div
                className="absolute -inset-x-6 -bottom-4 top-10 rounded-[2rem] bg-gold-gradient opacity-90 shadow-gold"
                aria-hidden
              />
              <div className="relative overflow-hidden rounded-t-[999px] rounded-b-[1.75rem] border-[6px] border-cream bg-cream shadow-soft">
                <div className="relative aspect-[3/4]">
                  <div className="absolute inset-x-4 bottom-0 top-12">
                    <Image
                      src={doctor.aboutPortrait.src}
                      alt={doctor.aboutPortrait.alt}
                      fill
                      className="object-contain object-bottom"
                      sizes="420px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <SectionHeading
              eyebrow="About the Surgeon"
              title={`About ${doctor.name}`}
              description={doctor.aboutExtended[0]}
              align="left"
            />
            <p className="mt-4 text-base leading-relaxed text-muted">
              {doctor.aboutExtended[1]}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {aboutQualifications.map((item) => (
                <Badge key={item} variant="cream">
                  {item}
                </Badge>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap items-end gap-8">
              <div>
                <p className="font-serif text-5xl text-heading">
                  <ExperienceCounter value={doctor.experienceYears} />
                </p>
                <p className="mt-1 text-sm text-muted">Years of experience</p>
              </div>
              <p className="font-hand text-4xl text-teal-800">
                {doctor.signature}
              </p>
            </div>
            <Button href="/about" variant="outline" className="mt-8">
              Read Full Profile
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
