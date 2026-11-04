import type { Metadata } from "next";
import AboutPreview from "@/components/home/AboutPreview";
import AppointmentSection from "@/components/home/AppointmentSection";
import ConditionsWeTreat from "@/components/home/ConditionsWeTreat";
import ConsultationCard from "@/components/home/ConsultationCard";
import FAQSection from "@/components/home/FAQSection";
import FinalCTA from "@/components/home/FinalCTA";
import Hero from "@/components/home/Hero";
import LocationsSection from "@/components/home/LocationsSection";
import PatientEducation from "@/components/home/PatientEducation";
import PatientSuccessStories from "@/components/home/PatientSuccessStories";
import ServicesBento from "@/components/home/ServicesBento";
import StatsBand from "@/components/home/StatsBand";
import SurgeryJourney from "@/components/home/SurgeryJourney";
import TechnologyFacilities from "@/components/home/TechnologyFacilities";
import TestimonialsCarousel from "@/components/home/TestimonialsCarousel";
import TrustStrip from "@/components/home/TrustStrip";
import WhyLaparoscopic from "@/components/home/WhyLaparoscopic";
import JsonLd from "@/components/seo/JsonLd";
import { createPageMetadata } from "@/lib/site";
import { faqPageJsonLd, webPageJsonLd } from "@/lib/structured-data";

const pageTitle = "Laparoscopic Surgeon in Gujrat & Mandi Bahauddin";
const pageDescription =
  "Book Dr. Khawar Iqbal Gondal, laparoscopic surgeon in Gujrat and Mandi Bahauddin, for gallbladder surgery, hernia repair, and minimally invasive care.";

export const metadata: Metadata = createPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/",
  keywords: [
    "laparoscopic surgeon Gujrat",
    "gallbladder surgery Mandi Bahauddin",
    "appendix surgery Gujrat",
  ],
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          path: "/",
          title: pageTitle,
          description: pageDescription,
        })}
      />
      <JsonLd data={faqPageJsonLd()} />
      <Hero />
      <ConsultationCard />
      <TrustStrip />
      <AboutPreview />
      <ConditionsWeTreat />
      <ServicesBento />
      <WhyLaparoscopic />
      <SurgeryJourney />
      <TechnologyFacilities />
      <StatsBand />
      <PatientSuccessStories />
      <TestimonialsCarousel />
      <PatientEducation />
      <FAQSection />
      <LocationsSection />
      <AppointmentSection />
      <FinalCTA />
    </>
  );
}
