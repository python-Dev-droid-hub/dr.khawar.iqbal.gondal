import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import JsonLd from "@/components/seo/JsonLd";
import {
  ServiceBenefits,
  ServiceCauses,
  ServiceComparison,
  ServiceCost,
  ServiceDayOfSurgery,
  ServiceDetailHero,
  ServiceDietLifestyle,
  ServiceDisclaimer,
  ServiceFaqs,
  ServiceFinalCta,
  ServiceLocations,
  ServiceMobileBar,
  ServiceOverview,
  ServicePreparation,
  ServiceProcedureSteps,
  ServiceRecovery,
  ServiceRisks,
  ServiceSidebar,
  ServiceSurgeryDecision,
  ServiceSymptoms,
  ServiceTestimonials,
  ServiceWarningSigns,
  ServiceWhyChoose,
  ServiceDiagnosis,
} from "@/components/services/detail";
import { getServiceBySlug, servicePath, services } from "@/data/services";
import { createPageMetadata } from "@/lib/site";
import { servicePageJsonLd } from "@/lib/service-json-ld";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return { title: "Service" };

  return createPageMetadata({
    title: service.seo.title,
    description: service.seo.description,
    path: servicePath(service.slug),
    keywords: service.seo.keywords,
  });
}

export default function ServiceDetailPage({ params }: PageProps) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  return (
    <>
      <JsonLd data={servicePageJsonLd(service)} />

      <ServiceDetailHero service={service} />

      <div className="pb-24 lg:pb-0">
        <Container className="grid gap-8 py-8 sm:gap-10 sm:py-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,340px)] lg:items-start lg:gap-12 lg:py-12 xl:grid-cols-[minmax(0,1fr)_360px]">
          <div className="min-w-0 overflow-x-clip rounded-card border border-teal-950/8 bg-cream shadow-soft">
            <ServiceOverview service={service} />
            <ServiceSymptoms service={service} />
            <ServiceCauses service={service} />
            <ServiceDiagnosis service={service} />
            <ServiceSurgeryDecision service={service} />
            <ServiceProcedureSteps service={service} />
            <ServiceComparison service={service} />
            <ServiceBenefits service={service} />
            <ServiceRisks service={service} />
            <ServicePreparation service={service} />
            <ServiceDayOfSurgery service={service} />
            <ServiceRecovery service={service} />
            <ServiceWarningSigns service={service} />
            <ServiceDietLifestyle service={service} />
            <ServiceCost service={service} />
            <ServiceWhyChoose service={service} />
            <ServiceTestimonials service={service} />
            <ServiceFaqs service={service} />
            <ServiceLocations />
            <div className="bg-cream px-5 pb-10 pt-2 sm:px-6 md:px-8">
              <ServiceDisclaimer />
            </div>
          </div>

          <ServiceSidebar service={service} />
        </Container>

        <ServiceFinalCta service={service} />
      </div>

      <ServiceMobileBar service={service} />
    </>
  );
}
