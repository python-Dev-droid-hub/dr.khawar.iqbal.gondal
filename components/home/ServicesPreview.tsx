import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceIcon from "@/components/ui/ServiceIcon";
import Button from "@/components/ui/Button";

export default function ServicesPreview() {
  const featured = services.find((service) => service.featured) ?? services[0];
  const others = services.filter((service) => service.id !== featured.id);

  return (
    <section className="section-padding bg-cream-dark/40">
      <Container>
        <Reveal>
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Surgical Services"
              title="Comprehensive Surgical Care"
              description="Minimally invasive and general surgery tailored to your condition, lifestyle, and recovery goals."
            />
            <Button href="/services" variant="outline" className="shrink-0">
              View All Services
            </Button>
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <Link
              href={`/services/${featured.slug}`}
              className="group relative block h-full min-h-[360px] overflow-hidden rounded-card shadow-soft"
            >
              <Image
                src={featured.image.src}
                alt={featured.image.alt}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-950 via-teal-950/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 md:p-8">
                <span className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-full bg-gold/20 text-gold-light">
                  <ServiceIcon name={featured.icon} className="h-5 w-5 text-gold-light" />
                </span>
                <h3 className="font-serif text-3xl text-cream">
                  {featured.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-cream/75">
                  {featured.summary}
                </p>
              </div>
            </Link>
          </Reveal>

          <div className="grid gap-4">
            {others.map((service, index) => (
              <Reveal key={service.id} delay={0.05 * index}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex items-center gap-4 rounded-card border border-teal-950/5 bg-white/70 p-5 shadow-soft backdrop-blur-sm transition hover:border-gold/40 hover:bg-white"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold/10">
                    <ServiceIcon name={service.icon} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-serif text-xl text-heading">
                      {service.shortTitle}
                    </span>
                    <span className="mt-1 line-clamp-2 text-sm text-muted">
                      {service.summary}
                    </span>
                  </span>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-gold transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
