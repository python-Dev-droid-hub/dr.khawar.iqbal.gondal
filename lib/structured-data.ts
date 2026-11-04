import { doctor } from "@/data/doctor";
import { faqs } from "@/data/faqs";
import { hospitals } from "@/data/hospitals";
import { services } from "@/data/services";
import { absoluteUrl, siteConfig } from "@/lib/site";

export function physicianJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": absoluteUrl("/about#physician"),
    name: doctor.name,
    url: absoluteUrl("/"),
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
      addressCountry: "PK",
    })),
    worksFor: hospitals.map((hospital) => ({
      "@type": "MedicalClinic",
      name: hospital.name,
      url: absoluteUrl("/#locations"),
    })),
    sameAs: [
      doctor.social.facebook,
      doctor.social.instagram,
      doctor.social.linkedin,
    ],
  };
}

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
      addressCountry: "PK",
    },
    openingHours: hospital.schedule,
    medicalSpecialty: "Surgical",
    employee: {
      "@type": "Physician",
      name: doctor.name,
      url: absoluteUrl("/about"),
    },
    availableService: services.map((service) => ({
      "@type": "MedicalProcedure",
      name: service.title,
      url: absoluteUrl(`/services/${service.slug}`),
    })),
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
    name: `${doctor.name} | ${doctor.title}`,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en-PK",
    publisher: {
      "@type": "Person",
      name: doctor.name,
    },
  };
}
