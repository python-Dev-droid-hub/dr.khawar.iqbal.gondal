import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal, { Stagger, StaggerItem } from "@/components/services/detail/StaticReveal";
import DetailIcon from "@/components/services/detail/DetailIcon";
import ServiceSection from "@/components/services/detail/ServiceSection";
import type { Service } from "@/data/services";
import { doctor } from "@/data/doctor";
import { hospitals } from "@/data/hospitals";

type ServiceWhyChooseProps = {
  service: Service;
};

export default function ServiceWhyChoose({ service }: ServiceWhyChooseProps) {
  if (!service.whyChoose.length) return null;

  return (
    <ServiceSection id="why-choose" tone="dark">
      <Reveal>
        <SectionHeading
          eyebrow="Why choose us"
          title={`Why Choose ${doctor.name} for This Procedure`}
          align="left"
          light
          className="mb-10 max-w-3xl"
        />
      </Reveal>

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <div className="flex items-center gap-5 rounded-card border border-white/10 bg-white/5 p-5">
            <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-gold/40">
              <Image
                src={doctor.aboutPortrait.src}
                alt={doctor.aboutPortrait.alt}
                fill
                className="object-cover object-top"
                sizes="96px"
              />
            </div>
            <div>
              <p className="font-serif text-2xl text-cream">{doctor.name}</p>
              <p className="mt-1 text-sm text-cream/70">{doctor.credentials}</p>
              <p className="mt-3 text-sm text-gold-light">
                {doctor.experienceYears}+ years ·{" "}
                {hospitals.map((h) => h.city).join(" & ")}
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-[70ch] text-sm leading-[1.7] text-cream/75 md:text-base">
            {doctor.bio}
          </p>
        </Reveal>

        <Stagger className="grid gap-4 sm:grid-cols-2">
          {service.whyChoose.map((point) => (
            <StaggerItem key={point.title}>
              <article className="h-full rounded-card border border-white/10 bg-white/5 p-5">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gold/20 text-gold-light">
                  <DetailIcon name="shield" className="h-4 w-4" />
                </span>
                <h3 className="mt-3 font-serif text-lg text-cream">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-[1.7] text-cream/70">
                  {point.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </ServiceSection>
  );
}
