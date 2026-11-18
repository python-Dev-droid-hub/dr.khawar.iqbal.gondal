import type { Metadata } from "next";
import AboutAchievements from "@/components/about/AboutAchievements";
import AboutProfile from "@/components/about/AboutProfile";
import CarePhilosophy from "@/components/about/CarePhilosophy";
import EducationTimeline from "@/components/about/EducationTimeline";
import ExperienceTimeline from "@/components/about/ExperienceTimeline";
import HospitalAffiliations from "@/components/about/HospitalAffiliations";
import ProfessionalMemberships from "@/components/about/ProfessionalMemberships";
import FinalCTA from "@/components/home/FinalCTA";
import PageHero from "@/components/shared/PageHero";
import { pageBanners } from "@/data/pageBanners";
import JsonLd from "@/components/seo/JsonLd";
import { createPageMetadata } from "@/lib/site";
import { webPageJsonLd } from "@/lib/structured-data";

const pageTitle =
  "Meet Dr. Khawar Iqbal Gondal – Experienced Laparoscopic & General Surgeon in Gujrat";
const pageDescription =
  "Dr. Khawar Iqbal Gondal, an experienced laparoscopic and general surgeon in Gujrat and Mandi Bahauddin. With over 24 years of surgical experience, he provides expert surgical consultations, advanced minimally invasive procedures, and personalized patient care. Book your appointment today for trusted surgical guidance.";

export const metadata: Metadata = createPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/about",
  keywords: ["best laparoscopic surgeon Gujrat", "Dr Khawar Iqbal Gondal surgeon"],
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          path: "/about",
          title: pageTitle,
          description: pageDescription,
          crumbs: [
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ],
        })}
      />
      <PageHero
        eyebrow="My Surgical Background"
        title="Meet Dr. Khawar Iqbal Gondal"
        description="Since 2002, I have helped families across Gujrat and Mandi Bahauddin heal safely—combining careful surgical skill with honest advice and personal follow-up."
        image={pageBanners.about}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
      />
      <AboutProfile />
      <ExperienceTimeline />
      <EducationTimeline />
      <HospitalAffiliations />
      <ProfessionalMemberships />
      <CarePhilosophy />
      <AboutAchievements />
      <FinalCTA />
    </>
  );
}
