import { Check, Minus } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { laparoscopicComparison } from "@/data/comparison";

export default function WhyLaparoscopic() {
  return (
    <section className="section-padding relative overflow-hidden bg-cream-dark/40">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-16 h-80 w-80 rounded-full bg-gold/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 bottom-8 h-64 w-64 rounded-full bg-teal-800/10 blur-3xl"
      />

      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="Why Laparoscopic"
            title="Laparoscopic vs Open Surgery"
            description="When clinically suitable, keyhole surgery can mean smaller scars and a quicker return to daily life."
            align="center"
            className="mb-10 md:mb-14"
          />
        </Reveal>

        {/* Mobile */}
        <div className="space-y-3 md:hidden">
          {laparoscopicComparison.map((row, index) => (
            <Reveal key={row.id} delay={0.04 * index}>
              <article className="overflow-hidden rounded-card border border-teal-950/8 bg-white shadow-soft">
                <div className="flex items-center justify-between gap-3 border-b border-teal-950/8 bg-cream px-4 py-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-dark">
                    {row.factor}
                  </p>
                  <span className="font-serif text-sm tabular-nums text-gold/45">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="grid grid-cols-2">
                  <div className="border-r border-teal-950/8 bg-gold/10 p-4">
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-gold-dark">
                      Laparoscopic
                    </p>
                    <p className="flex items-start gap-2 text-sm font-medium leading-snug text-heading">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark"
                        aria-hidden
                      />
                      {row.laparoscopic}
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
                      Open surgery
                    </p>
                    <p className="flex items-start gap-2 text-sm leading-snug text-muted">
                      <Minus
                        className="mt-0.5 h-4 w-4 shrink-0 text-teal-800/40"
                        aria-hidden
                      />
                      {row.open}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Desktop / tablet — two panels, row-aligned */}
        <Reveal delay={0.08}>
          <div className="relative mx-auto hidden max-w-5xl md:block">
            <div
              aria-hidden
              className="absolute left-1/2 top-9 z-20 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border border-gold/45 bg-cream font-serif text-sm font-semibold text-gold-dark shadow-soft"
            >
              vs
            </div>

            <div className="overflow-hidden rounded-card border border-teal-950/8 bg-white shadow-soft">
              <div className="grid grid-cols-2 border-b border-teal-950/10">
                <div className="relative border-r border-white/10 bg-teal-950 px-7 py-7 lg:px-9 lg:py-8">
                  <div
                    className="absolute inset-x-0 top-0 h-1 bg-gold-gradient"
                    aria-hidden
                  />
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-light">
                    Preferred when suitable
                  </p>
                  <h3 className="mt-2 font-serif text-2xl text-cream lg:text-[1.85rem]">
                    Laparoscopic
                  </h3>
                  <p className="mt-2 max-w-[20rem] text-sm leading-relaxed text-cream/65">
                    Minimally invasive keyhole technique focused on comfort and
                    recovery.
                  </p>
                </div>
                <div className="bg-cream px-7 py-7 lg:px-9 lg:py-8">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                    Traditional approach
                  </p>
                  <h3 className="mt-2 font-serif text-2xl text-heading lg:text-[1.85rem]">
                    Open surgery
                  </h3>
                  <p className="mt-2 max-w-[20rem] text-sm leading-relaxed text-muted">
                    Larger incision technique still used when clinically
                    required.
                  </p>
                </div>
              </div>

              {laparoscopicComparison.map((row, index) => (
                <div
                  key={row.id}
                  className={
                    index === laparoscopicComparison.length - 1
                      ? "grid grid-cols-2"
                      : "grid grid-cols-2 border-b border-teal-950/8"
                  }
                >
                  <div className="border-r border-teal-950/8 bg-gold/10 px-7 py-5 lg:px-9 lg:py-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gold-dark">
                      {row.factor}
                    </p>
                    <p className="mt-2 flex items-start gap-2.5 text-sm font-medium text-heading lg:text-base">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/25 text-gold-dark">
                        <Check className="h-3 w-3" aria-hidden />
                      </span>
                      {row.laparoscopic}
                    </p>
                  </div>
                  <div className="px-7 py-5 lg:px-9 lg:py-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                      {row.factor}
                    </p>
                    <p className="mt-2 flex items-start gap-2.5 text-sm text-muted lg:text-base">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-950/8 text-teal-800/40">
                        <Minus className="h-3 w-3" aria-hidden />
                      </span>
                      {row.open}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <p className="mt-5 text-center text-xs leading-relaxed text-muted md:mt-6">
          *Stay length depends on the procedure and your medical suitability.
          Final approach is chosen after clinical assessment.
        </p>
      </Container>
    </section>
  );
}
