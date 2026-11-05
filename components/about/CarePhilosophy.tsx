import { HeartHandshake, MessageCircle, Scissors } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { carePhilosophy } from "@/data/about";
import { cn } from "@/lib/utils";

const iconMap = {
  clarity: MessageCircle,
  minimally: Scissors,
  continuity: HeartHandshake,
} as const;

export default function CarePhilosophy() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-24 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-gold/8 blur-3xl"
      />

      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="Philosophy"
            title="My Philosophy of Care"
            description="A patient-first approach that values clarity, careful technique, and continuity."
            align="center"
            className="mb-10 md:mb-12"
          />
        </Reveal>

        <Reveal delay={0.08}>
          <figure className="dark-section relative overflow-hidden rounded-card px-6 py-12 text-center shadow-soft sm:px-10 md:px-16 md:py-16">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-gold/15 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-16 -left-8 h-56 w-56 rounded-full bg-cream/5 blur-3xl"
            />

            <div
              className="pointer-events-none absolute left-6 top-4 font-serif text-[7rem] leading-none text-gold/25 md:left-10 md:text-[9rem]"
              aria-hidden
            >
              “
            </div>

            <blockquote className="relative mx-auto max-w-3xl font-serif text-xl leading-relaxed text-cream sm:text-2xl md:text-[1.85rem] md:leading-snug">
              {carePhilosophy.quote}
            </blockquote>

            <div className="relative mx-auto mt-8 flex max-w-xs flex-col items-center">
              <span
                aria-hidden
                className="mb-4 h-px w-16 bg-gradient-to-r from-transparent via-gold/70 to-transparent"
              />
              <figcaption className="font-hand text-3xl text-gold-light md:text-4xl">
                {carePhilosophy.attribution}
              </figcaption>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-cream/45">
                Laparoscopic &amp; General Surgeon
              </p>
            </div>
          </figure>
        </Reveal>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 md:mt-8 md:gap-5 lg:grid-cols-3">
          {carePhilosophy.pillars.map((pillar, index) => {
            const Icon = iconMap[pillar.icon];

            return (
              <Reveal key={pillar.id} delay={0.06 * index}>
                <article
                  className={cn(
                    "group relative flex h-full flex-col overflow-hidden rounded-card border border-teal-950/5 bg-white/90 p-6 shadow-soft transition duration-300 md:p-7",
                    "hover:-translate-y-1 hover:border-gold/30 hover:shadow-[0_16px_36px_rgba(1,24,57,0.08)]",
                  )}
                >
                  <div
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold/20 via-gold to-gold/20 opacity-70 transition group-hover:opacity-100"
                  />

                  <div className="flex items-center justify-between gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gold/12 text-gold-dark ring-1 ring-gold/20">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="font-serif text-sm font-semibold tracking-[0.14em] text-gold-dark/75">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-5 font-serif text-xl leading-snug text-heading md:text-[1.35rem]">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {pillar.text}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
