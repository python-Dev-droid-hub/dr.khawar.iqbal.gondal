import { doctor } from "@/data/doctor";
import { faqs } from "@/data/faqs";
import { hospitals } from "@/data/hospitals";
import { serviceAreas } from "@/data/serviceAreas";
import { servicePath, services } from "@/data/services";
import { absoluteUrl, siteConfig } from "@/lib/site";

const ORGANIZATION_ID = absoluteUrl("/#organization");
const WEBSITE_ID = absoluteUrl("/#website");
const PHYSICIAN_ID = absoluteUrl("/about#physician");

function areaServedJsonLd() {
  return serviceAreas.map((area) => ({
    "@type": "City",
    name: area.name,
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: area.region,
      containedInPlace: {
        "@type": "Country",
        name: "Pakistan",
      },
    },
  }));
}

function socialSameAs() {
  return [
    doctor.social.facebook,
    doctor.social.instagram,
    doctor.social.linkedin,
  ].filter(Boolean);
}

/** MedicalOrganization + practice identity for the whole site. */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "@id": ORGANIZATION_ID,
    name: `${doctor.name} — Laparoscopy & Surgical Centre`,
    alternateName: doctor.shortName,
    url: siteConfig.url,
    logo: absoluteUrl("/images/logo-on-dark.png"),
    image: absoluteUrl(doctor.portrait.src),
    description: siteConfig.description,
    email: doctor.email,
    telephone: doctor.whatsappDisplay,
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Gujrat",
        addressRegion: "Punjab",
        addressCountry: "PK",
      },
    },
    areaServed: areaServedJsonLd(),
    medicalSpecialty: [
      "Surgical",
      "Laparoscopic Surgery",
      "General Surgery",
    ],
    founder: { "@id": PHYSICIAN_ID },
    employee: { "@id": PHYSICIAN_ID },
    sameAs: socialSameAs(),
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: doctor.whatsappDisplay,
        contactType: "appointments",
        areaServed: "PK",
        availableLanguage: ["English", "Urdu"],
      },
    ],
  };
}

export function physicianJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": PHYSICIAN_ID,
    name: doctor.name,
    url: absoluteUrl("/about"),
    image: absoluteUrl(doctor.portrait.src),
    description: doctor.bio,
    medicalSpecialty: [
      "Surgical",
      "Laparoscopic Surgery",
      "General Surgery",
    ],
    email: doctor.email,
    telephone: doctor.whatsappDisplay,
    address: hospitals.map((hospital) => ({
      "@type": "PostalAddress",
      streetAddress: hospital.address,
      addressLocality: hospital.city,
      addressRegion: "Punjab",
      addressCountry: "PK",
    })),
    worksFor: hospitals.map((hospital) => ({
      "@type": "MedicalClinic",
      "@id": absoluteUrl(`/contact#${hospital.id}`),
      name: hospital.name,
      url: absoluteUrl("/contact"),
    })),
    memberOf: { "@id": ORGANIZATION_ID },
    areaServed: areaServedJsonLd(),
    sameAs: socialSameAs(),
  };
}

/** Local clinic schemas with service areas (Local Areas schema). */
export function medicalClinicJsonLd() {
  return hospitals.map((hospital) => ({
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": absoluteUrl(`/contact#${hospital.id}`),
    name: hospital.name,
    description: `${doctor.title} consultations at ${hospital.name}, ${hospital.city}.`,
    url: absoluteUrl("/contact"),
    telephone: hospital.phone,
    image: absoluteUrl("/opengraph-image"),
    address: {
      "@type": "PostalAddress",
      streetAddress: hospital.address,
      addressLocality: hospital.city,
      addressRegion: "Punjab",
      addressCountry: "PK",
    },
    openingHours: hospital.schedule,
    medicalSpecialty: "Surgical",
    parentOrganization: { "@id": ORGANIZATION_ID },
    employee: { "@id": PHYSICIAN_ID },
    areaServed: areaServedJsonLd(),
    availableService: services.map((service) => ({
      "@type": "MedicalProcedure",
      name: service.title,
      url: absoluteUrl(servicePath(service.slug)),
    })),
    hasMap: hospital.mapsUrl,
  }));
}

export function faqPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": absoluteUrl("/faq#faq"),
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: `${doctor.name} | ${doctor.title}`,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en-PK",
    publisher: { "@id": ORGANIZATION_ID },
    about: { "@id": PHYSICIAN_ID },
  };
}

/** Social profile / sameAs graph (Social schema). */
export function socialProfileJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": absoluteUrl("/about#profile"),
    name: doctor.name,
    url: absoluteUrl("/about"),
    mainEntity: {
      "@type": "Person",
      "@id": PHYSICIAN_ID,
      name: doctor.name,
      jobTitle: doctor.title,
      url: absoluteUrl("/about"),
      sameAs: socialSameAs(),
      image: absoluteUrl(doctor.portrait.src),
      worksFor: { "@id": ORGANIZATION_ID },
    },
  };
}

export type BreadcrumbCrumb = {
  name: string;
  path?: string;
};

export function breadcrumbJsonLd(
  crumbs: BreadcrumbCrumb[],
  idPath: string,
) {
  return {
    "@type": "BreadcrumbList",
    "@id": absoluteUrl(`${idPath}#breadcrumb`),
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      ...(crumb.path
        ? { item: absoluteUrl(crumb.path) }
        : {}),
    })),
  };
}

export function webPageJsonLd({
  path,
  title,
  description,
  crumbs,
}: {
  path: string;
  title: string;
  description: string;
  crumbs?: BreadcrumbCrumb[];
}) {
  const graph: Array<Record<string, unknown>> = [
    {
      "@type": "WebPage",
      "@id": absoluteUrl(`${path}#webpage`),
      url: absoluteUrl(path),
      name: title,
      description,
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": PHYSICIAN_ID },
      inLanguage: "en-PK",
      publisher: { "@id": ORGANIZATION_ID },
    },
  ];

  if (crumbs?.length) {
    graph.push(breadcrumbJsonLd(crumbs, path === "/" ? "" : path));
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
