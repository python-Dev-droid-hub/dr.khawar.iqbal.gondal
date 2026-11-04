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

export const metadata: Metadata = createPageMetadata({
  title: "Patient Reviews — Dr. Khawar Iqbal Gondal",
  description: `Read patient reviews and success stories for ${doctor.name}, laparoscopic surgeon in Gujrat and Mandi Bahauddin.`,
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
      <JsonLd data={reviewsJsonLd()} />
      <PageHero
        eyebrow="Reviews"
        title="Patient reviews & outcomes"
        description="Real feedback from patients across Gujrat and Mandi Bahauddin — from consultation through recovery."
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
