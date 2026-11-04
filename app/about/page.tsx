import type { Metadata } from "next";
import AboutAchievements from "@/components/about/AboutAchievements";
import AboutProfile from "@/components/about/AboutProfile";
import CarePhilosophy from "@/components/about/CarePhilosophy";
import EducationTimeline from "@/components/about/EducationTimeline";
import HospitalAffiliations from "@/components/about/HospitalAffiliations";
import ProfessionalMemberships from "@/components/about/ProfessionalMemberships";
import FinalCTA from "@/components/home/FinalCTA";
import PageHero from "@/components/shared/PageHero";
import { doctor } from "@/data/doctor";
import { pageBanners } from "@/data/pageBanners";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "About Dr. Khawar Iqbal Gondal — Laparoscopic Surgeon in Gujrat",
  description:
    "Meet Dr. Khawar Iqbal Gondal, FCPS laparoscopic and general surgeon serving Gujrat and Mandi Bahauddin with patient-first minimally invasive care.",
  path: "/about",
  keywords: ["best laparoscopic surgeon Gujrat", "Dr Khawar Iqbal Gondal surgeon"],
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the Surgeon"
        title={`Meet ${doctor.name}`}
        description="Laparoscopic and general surgery with a calm, patient-first approach across Gujrat and Mandi Bahauddin."
        image={pageBanners.about}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
      />
      <AboutProfile />
      <EducationTimeline />
      <HospitalAffiliations />
      <ProfessionalMemberships />
      <CarePhilosophy />
      <AboutAchievements />
      <FinalCTA />
    </>
  );
}
