import Image from "next/image";
import { faqs } from "@/data/faqs";
import Accordion from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import Reveal from "@/components/motion/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function FAQPreview() {
  return (
    <section className="section-padding bg-cream-dark/35">
      <Container className="grid gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <SectionHeading
            eyebrow="Common Questions"
            title="Frequently Asked Questions"
            description="Quick answers about laparoscopic surgery, recovery, and booking."
            className="mb-8"
          />
          <Accordion items={faqs.slice(0, 4)} />
          <Button href="/faq" variant="outline" className="mt-8">
            View All FAQs
          </Button>
        </Reveal>

        <Reveal delay={0.1}>
          <GlassCard className="relative overflow-hidden p-8 md:p-10">
            <div className="relative z-10">
              <h3 className="font-serif text-3xl text-heading">
                Still Have Questions?
              </h3>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted md:text-base">
                Message the clinic or book a consultation. We are happy to help
                you understand your options before surgery.
              </p>
              <Button href="/contact" variant="gold" className="mt-8">
                Contact Us
              </Button>
            </div>
            <div className="pointer-events-none absolute -bottom-6 -right-4 h-48 w-48 opacity-90 md:h-56 md:w-56">
              <Image
                src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=600&q=80"
                alt="Stethoscope representing medical consultation"
                fill
                className="object-cover rounded-tl-[2rem]"
                sizes="224px"
              />
            </div>
          </GlassCard>
        </Reveal>
      </Container>
    </section>
  );
}
