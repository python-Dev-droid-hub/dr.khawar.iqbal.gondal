import { Check, Minus } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { laparoscopicComparison } from "@/data/comparison";

export default function WhyLaparoscopic() {
  return (
    <section className="section-padding bg-cream-dark/35">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Why Laparoscopic"
            title="Laparoscopic vs Open Surgery"
            description="When clinically suitable, keyhole surgery can mean smaller scars and a quicker return to daily life."
            align="center"
            className="mb-12"
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="-mx-4 overflow-x-auto px-4 md:mx-0 md:px-0">
            <div className="min-w-[36rem] overflow-hidden rounded-card border border-teal-950/5 bg-white/80 shadow-soft md:min-w-0">
              <table className="w-full text-left text-sm md:text-base">
                <thead>
                  <tr className="border-b border-teal-950/10">
                    <th className="px-4 py-4 align-top font-medium text-muted sm:px-5 md:px-7">
                      Factor
                    </th>
                    <th className="bg-gold/15 px-4 py-4 align-top font-serif text-base text-heading sm:px-5 sm:text-lg md:px-7">
                      Laparoscopic
                    </th>
                    <th className="px-4 py-4 align-top font-serif text-base text-heading sm:px-5 sm:text-lg md:px-7">
                      Open surgery
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {laparoscopicComparison.map((row) => (
                    <tr
                      key={row.id}
                      className="border-b border-teal-950/10 last:border-b-0"
                    >
                      <td className="break-words px-4 py-4 align-top font-medium text-teal-950 sm:px-5 md:px-7">
                        {row.factor}
                      </td>
                      <td className="break-words bg-gold/10 px-4 py-4 align-top text-teal-950 sm:px-5 md:px-7">
                        <span className="inline-flex items-start gap-2">
                          <Check
                            className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark"
                            aria-hidden
                          />
                          {row.laparoscopic}
                        </span>
                      </td>
                      <td className="break-words px-4 py-4 align-top text-muted sm:px-5 md:px-7">
                        <span className="inline-flex items-start gap-2">
                          <Minus
                            className="mt-0.5 h-4 w-4 shrink-0 text-teal-800/40"
                            aria-hidden
                          />
                          {row.open}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-muted">
            *Stay length depends on the procedure and your medical suitability.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
