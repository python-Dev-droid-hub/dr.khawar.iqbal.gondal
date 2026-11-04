import {
  getOverviewPlainText,
  servicePath,
  type Service,
} from "@/data/services";
import { doctor } from "@/data/doctor";
import { absoluteUrl } from "@/lib/site";

export function serviceBreadcrumbJsonLd(service: Service) {
  const path = servicePath(service.slug);

  return {
    "@type": "BreadcrumbList",
    "@id": absoluteUrl(`${path}#breadcrumb`),
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: absoluteUrl("/services"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: absoluteUrl(path),
      },
    ],
  };
}

export function serviceMedicalProcedureJsonLd(service: Service) {
  const path = servicePath(service.slug);
  const description = service.seo.description || service.tagline;
  const howPerformed = getOverviewPlainText(service).trim();
  const preparation = service.preparation.flatMap((group) => group.items);

  return {
    "@type": "MedicalProcedure",
    "@id": absoluteUrl(`${path}#procedure`),
    name: service.title,
    description,
    url: absoluteUrl(path),
    image: absoluteUrl(service.image),
    ...(howPerformed ? { howPerformed } : {}),
    ...(preparation.length ? { preparation: preparation.join(". ") } : {}),
    bodyLocation: "Abdomen",
    relevantSpecialty: "https://schema.org/Surgical",
    performer: {
      "@type": "Physician",
      "@id": absoluteUrl("/about#physician"),
      name: doctor.name,
      url: absoluteUrl("/about"),
    },
  };
}

export function serviceFaqJsonLd(service: Service) {
  if (!service.faqs.length) return null;

  const path = servicePath(service.slug);

  return {
    "@type": "FAQPage",
    "@id": absoluteUrl(`${path}#faqs`),
    mainEntity: service.faqs.map((faq, index) => ({
      "@type": "Question",
      "@id": absoluteUrl(`${path}#faq-${index + 1}`),
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/** Single @graph payload for rich-result / schema validators. */
export function servicePageJsonLd(service: Service) {
  const path = servicePath(service.slug);
  const graph: Array<Record<string, unknown>> = [
    {
      "@type": "WebPage",
      "@id": absoluteUrl(`${path}#webpage`),
      url: absoluteUrl(path),
      name: service.seo.title,
      description: service.seo.description,
      inLanguage: "en-PK",
      about: { "@id": absoluteUrl(`${path}#procedure`) },
    },
    serviceBreadcrumbJsonLd(service),
    serviceMedicalProcedureJsonLd(service),
  ];

  const faq = serviceFaqJsonLd(service);
  if (faq) graph.push(faq);

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
