import type { Metadata, Viewport } from "next";
import { Caveat, Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import JsonLd from "@/components/seo/JsonLd";
import { doctor } from "@/data/doctor";
import { siteConfig } from "@/lib/site";
import {
  medicalClinicJsonLd,
  organizationJsonLd,
  physicianJsonLd,
  socialProfileJsonLd,
  websiteJsonLd,
} from "@/lib/structured-data";
import "./globals.css";

const GTM_ID = "GTM-W9C9FPL4";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#011839",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${doctor.name} | Laparoscopic Surgeon in Gujrat & Mandi Bahauddin`,
    template: `%s | ${doctor.name}`,
  },
  description: siteConfig.description,
  applicationName: doctor.name,
  authors: [{ name: doctor.name, url: siteConfig.url }],
  creator: doctor.name,
  category: "healthcare",
  keywords: [
    "laparoscopic surgeon in Gujrat",
    "gallbladder surgery Mandi Bahauddin",
    "hernia surgery Gujrat",
    "minimally invasive surgery Pakistan",
    doctor.name,
  ],
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: `${doctor.name} | ${doctor.title}`,
    title: `${doctor.name} | Laparoscopic Surgeon in Gujrat`,
    description: siteConfig.description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${doctor.name} — ${doctor.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: siteConfig.twitterHandle,
    creator: siteConfig.twitterHandle,
    title: `${doctor.name} | Laparoscopic Surgeon in Gujrat`,
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "hVWBy_fcXH0n_6KY0bNHrseL6yjURs0f_8smEG4lQzc",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "48x48" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-PK">
      <body
        className={`${inter.variable} ${playfair.variable} ${caveat.variable} font-sans`}
      >
        <Script id="gtm-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `}</Script>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-pill focus:bg-gold-gradient focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-teal-950"
        >
          Skip to main content
        </a>
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <JsonLd data={physicianJsonLd()} />
        <JsonLd data={medicalClinicJsonLd()} />
        <JsonLd data={socialProfileJsonLd()} />
        <Navbar />
        <main id="main-content" className="min-h-screen overflow-x-clip">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
