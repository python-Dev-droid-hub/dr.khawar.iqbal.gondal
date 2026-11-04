import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal, { Stagger, StaggerItem } from "@/components/services/detail/StaticReveal";
import ServiceSection from "@/components/services/detail/ServiceSection";
import type { Service } from "@/data/services";
import { testimonials } from "@/data/testimonials";

type ServiceTestimonialsProps = {
  service: Service;
};

export default function ServiceTestimonials({
  service,
}: ServiceTestimonialsProps) {
  const related = testimonials
    .filter((item) => item.serviceSlugs?.includes(service.slug))
    .slice(0, 3);

  if (!related.length) return null;

  return (
    <ServiceSection id="experiences" tone="cream">
      <Reveal>
        <SectionHeading
          eyebrow="Patient voice"
          title="Patient Experiences"
          align="left"
          className="mb-10 max-w-3xl"
        />
      </Reveal>

      <Stagger className="grid gap-4 md:grid-cols-3">
        {related.map((item) => (
          <StaggerItem key={item.id}>
            <article className="flex h-full flex-col rounded-card border border-teal-950/8 bg-white/80 p-5 shadow-soft md:p-6">
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={item.avatar.src}
                    alt={item.avatar.alt}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <p className="font-semibold text-heading">{item.name}</p>
                  <p className="text-xs text-muted">{item.location}</p>
                </div>
              </div>
              <p className="mt-4 flex-1 text-sm leading-[1.7] text-muted">
                “{item.quote}”
              </p>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </ServiceSection>
  );
}
