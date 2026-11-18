import type { Metadata } from "next";
import FinalCTA from "@/components/home/FinalCTA";
import PatientSuccessStories from "@/components/home/PatientSuccessStories";
import ReviewsGrid from "@/components/reviews/ReviewsGrid";
import PageHero from "@/components/shared/PageHero";
import JsonLd from "@/components/seo/JsonLd";
import { doctor } from "@/data/doctor";
import { testimonials } from "@/data/testimonials";
import { pageBanners } from "@/data/pageBanners";
import { createPageMetadata, absoluteUrl } from "@/lib/site";
import { webPageJsonLd } from "@/lib/structured-data";

const pageTitle =
  "Dr. Khawar Gondal Reviews | Patient Experiences & Trusted Surgical Care in Gujrat";
const pageDescription =
  "Explore patient reviews and experiences with Dr. Khawar Iqbal Gondal, an experienced general and laparoscopic surgeon in Gujrat. Learn about patient feedback, professional care, and surgical consultation services. Read reviews and connect with the clinic to book your appointment.";

export const metadata: Metadata = createPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/reviews",
  keywords: [
    "Dr Khawar reviews",
    "laparoscopic surgeon Gujrat reviews",
    "patient testimonials Mandi Bahauddin",
  ],
});

function reviewsJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: doctor.name,
    url: absoluteUrl("/reviews"),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: doctor.rating,
      reviewCount: testimonials.length,
      bestRating: 5,
      worstRating: 1,
    },
    review: testimonials.map((item) => ({
      "@type": "Review",
      reviewBody: item.quote,
      reviewRating: {
        "@type": "Rating",
        ratingValue: item.rating,
        bestRating: 5,
      },
      author: {
        "@type": "Person",
        name: item.name,
      },
    })),
  };
}

export default function ReviewsPage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          path: "/reviews",
          title: pageTitle,
          description: pageDescription,
          crumbs: [
            { name: "Home", path: "/" },
            { name: "Reviews", path: "/reviews" },
          ],
        })}
      />
      <JsonLd data={reviewsJsonLd()} />
      <PageHero
        eyebrow="Patient Experiences"
        title="What My Patients Say About Their Care?"
        description="Read honest stories from families across Gujrat and Mandi Bahauddin who trusted me with their surgical checkups, operations, and healing."
        image={pageBanners.reviews}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Reviews" },
        ]}
      />
      <ReviewsGrid />
      <PatientSuccessStories />
      <FinalCTA />
    </>
  );
}
