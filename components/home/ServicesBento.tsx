import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/services/ServiceCard";
import { services } from "@/data/services";

export default function ServicesBento() {
  const ordered = [
    ...(services.filter((s) => s.featured)),
    ...services.filter((s) => !s.featured),
  ].slice(0, 6);

  return (
    <section className="section-padding">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Surgical Services"
            title="Comprehensive Surgical Care"
            description="Minimally invasive and general surgery tailored to your condition and recovery goals."
            align="center"
            className="mb-12"
          />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
          {ordered.map((service, index) => (
            <Reveal key={service.id} delay={0.04 * index} className="h-full">
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
