import { Award, Building2, Scissors, ShieldCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import { trustCredentials } from "@/data/credentials";

const icons = [Award, Scissors, Building2, ShieldCheck] as const;

export default function TrustStrip() {
  return (
    <section className="section-padding pb-10 md:pb-14">
      <Container>
        <Reveal>
          <p className="text-center text-sm font-medium uppercase tracking-[0.18em] text-muted md:text-base md:normal-case md:tracking-normal">
            Trusted by patients across{" "}
            <span className="font-semibold text-teal-950">
              Gujrat & Mandi Bahauddin
            </span>
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustCredentials.map((item, index) => {
            const Icon = icons[index] ?? Award;
            return (
              <Reveal key={item.id} delay={0.06 * index}>
                <div className="interactive-card flex h-full items-start gap-4 rounded-card border border-teal-950/5 bg-white/70 p-5 shadow-soft backdrop-blur-sm">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gold/15 text-gold-dark">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block font-serif text-lg text-heading">
                      {item.label}
                    </span>
                    <span className="mt-1 block text-sm text-muted">
                      {item.detail}
                    </span>
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
