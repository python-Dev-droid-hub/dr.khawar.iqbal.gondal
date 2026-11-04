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
  /** Open Graph type — use "article" for blog posts */
  type?: "website" | "article";
  image?: string;
  imageAlt?: string;
  publishedTime?: string;
  modifiedTime?: string;
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
  type = "website",
  image,
  imageAlt,
  publishedTime,
  modifiedTime,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  const ogImage = image
    ? image.startsWith("http")
      ? image
      : absoluteUrl(image)
    : absoluteUrl("/opengraph-image");
  const ogAlt = imageAlt || `${doctor.name} — ${doctor.title}`;

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
    authors: [{ name: doctor.name, url: absoluteUrl("/about") }],
    creator: doctor.name,
    publisher: doctor.name,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type,
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
          alt: ogAlt,
        },
      ],
      ...(type === "article"
        ? {
            publishedTime,
            modifiedTime: modifiedTime || publishedTime,
            authors: [doctor.name],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
      title,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
