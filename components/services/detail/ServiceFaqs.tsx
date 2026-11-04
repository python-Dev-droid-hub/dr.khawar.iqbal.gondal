import Accordion from "@/components/ui/Accordion";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/services/detail/StaticReveal";
import ServiceSection from "@/components/services/detail/ServiceSection";
import type { Service } from "@/data/services";

type ServiceFaqsProps = {
  service: Service;
};

export default function ServiceFaqs({ service }: ServiceFaqsProps) {
  if (!service.faqs.length) return null;

  const items = service.faqs.map((faq, index) => ({
    id: `faq-${index + 1}`,
    question: faq.question,
    answer: faq.answer,
  }));

  return (
    <ServiceSection id="faqs" tone="white">
      <Reveal>
        <SectionHeading
          eyebrow="FAQs"
          title="Frequently asked questions"
          align="left"
          className="mb-8 max-w-3xl"
        />
      </Reveal>

      <Reveal delay={0.05}>
        <div className="rounded-card border border-teal-950/8 bg-cream/60 px-5 shadow-soft md:px-7">
          <Accordion items={items} />
        </div>
      </Reveal>
    </ServiceSection>
  );
}
