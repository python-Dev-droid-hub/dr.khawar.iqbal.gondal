import type { Metadata } from "next";
import { doctor } from "@/data/doctor";

export const siteConfig = {
  name: doctor.name,
  title: doctor.title,
  description:
    "Laparoscopic surgeon in Gujrat and Mandi Bahauddin offering gallbladder surgery, hernia repair, and minimally invasive general surgery.",
  url: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000",
  locale: "en_PK",
  twitterHandle: "@drkhawar",
} as const;

type PageMetaInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  noIndex?: boolean;
};

export function absoluteUrl(path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalized === "/" ? "" : normalized}`;
}

export function createPageMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  noIndex = false,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  const ogImage = absoluteUrl("/opengraph-image");

  return {
    title,
    description,
    keywords: [
      "laparoscopic surgeon in Gujrat",
      "gallbladder surgery Mandi Bahauddin",
      "hernia surgery Gujrat",
      "minimally invasive surgery Pakistan",
      doctor.name,
      ...keywords,
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      siteName: `${doctor.name} | ${doctor.title}`,
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${doctor.name} — ${doctor.title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
