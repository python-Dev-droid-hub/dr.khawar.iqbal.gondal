import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Accordion from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import Reveal from "@/components/motion/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { faqs } from "@/data/faqs";

export default function FAQSection() {
  return (
    <section className="section-padding bg-cream-dark/35">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            description="Quick answers about laparoscopic surgery, recovery, and booking."
            align="left"
            className="mb-8 max-w-2xl md:mb-10"
          />
        </Reveal>

        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1.45fr)_minmax(280px,0.78fr)] lg:gap-8 xl:gap-10">
          {/* Left — accordion */}
          <Reveal>
            <GlassCard className="px-5 py-1 md:px-8">
              <Accordion items={faqs} />
            </GlassCard>
          </Reveal>

          {/* Right — compact sticky CTA (no stretched empty space) */}
          <Reveal delay={0.08}>
            <aside className="lg:sticky lg:top-28">
              <div className="overflow-hidden rounded-card border border-teal-950/5 bg-gradient-to-br from-[#F3E8D2] via-cream to-gold/25 shadow-soft">
                <div className="p-6 md:p-7">
                  <h3 className="font-serif text-2xl leading-snug text-heading md:text-[1.75rem]">
                    Still have questions?
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    Message the clinic or book a consultation. We are happy to
                    help you understand your options before surgery.
                  </p>
                  <Button href="/contact" variant="gold" className="mt-5 w-full sm:w-auto">
                    Contact Us
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Button>
                </div>

                <div className="relative aspect-[5/3] w-full">
                  <Image
                    src="/images/stethoscope.jpg"
                    alt="Stethoscope representing medical consultation"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 340px"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-teal-950/30 via-transparent to-transparent"
                    aria-hidden
                  />
                </div>
              </div>
            </aside>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
