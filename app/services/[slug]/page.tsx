import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { getServiceBySlug, services } from "@/data/services";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import PageHero from "@/components/shared/PageHero";
import Reveal from "@/components/motion/Reveal";
import { pageBanners } from "@/data/pageBanners";
import { createPageMetadata } from "@/lib/site";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return { title: "Service" };

  const localFocus =
    service.id === "gallbladder"
      ? "Gallbladder surgery in Mandi Bahauddin and Gujrat"
      : `${service.title} with a laparoscopic surgeon in Gujrat`;

  return createPageMetadata({
    title: `${service.title} — ${localFocus}`,
    description: `${service.summary} Consult Dr. Khawar Iqbal Gondal in Gujrat or Mandi Bahauddin.`,
    path: `/services/${service.slug}`,
    keywords: [service.title, `${service.shortTitle} Gujrat`, `${service.shortTitle} Mandi Bahauddin`],
  });
}

export default function ServiceDetailPage({ params }: PageProps) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  return (
    <>
      <PageHero
        eyebrow="Service"
        title={service.title}
        description={service.summary}
        image={
          service.image.src.startsWith("http")
            ? service.image
            : pageBanners.services
        }
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.shortTitle },
        ]}
      />

      <section className="section-padding">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-card shadow-soft">
              <Image
                src={service.image.src}
                alt={service.image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-base leading-relaxed text-muted md:text-lg">
              {service.description}
            </p>
            <h2 className="mt-8 font-serif text-2xl text-heading">
              What patients can expect
            </h2>
            <ul className="mt-5 space-y-3">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-sm text-teal-950 md:text-base">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
                    <Check className="h-3.5 w-3.5" aria-hidden />
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/book">Book Appointment</Button>
              <Button href="/contact" variant="outline">
                Ask a Question
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
