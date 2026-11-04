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
import { doctor } from "@/data/doctor";
import { pageBanners } from "@/data/pageBanners";
import JsonLd from "@/components/seo/JsonLd";
import { createPageMetadata } from "@/lib/site";
import { webPageJsonLd } from "@/lib/structured-data";

const pageTitle = "About Dr. Khawar Iqbal Gondal — Laparoscopic Surgeon in Gujrat";
const pageDescription =
  "Meet Dr. Khawar Iqbal Gondal, FCPS laparoscopic and general surgeon, ex-Senior Registrar at Mayo Hospital, and Consultant Surgeon at Aziz Bhatti Shaheed Hospital since 2012.";

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
