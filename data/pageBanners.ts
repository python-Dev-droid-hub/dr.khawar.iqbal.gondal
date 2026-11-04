export type PageBannerImage = {
  src: string;
  alt: string;
  /** Optional HTML title for SEO / tooltip */
  title?: string;
};

/**
 * Pictorial banners for inner pages (not homepage).
 * Optimized WebP sources (~110–170KB) for faster LCP.
 */
export const pageBanners = {
  about: {
    src: "/images/banners/event-certification.webp",
    alt: "Professional certification and surgical training recognition",
    title: "About Dr. Khawar — surgical training and certification",
  },
  services: {
    src: "/images/banners/event-award.webp",
    alt: "Surgical training award ceremony",
    title: "Surgical services — training and clinical excellence",
  },
  contact: {
    src: "/images/banners/event-handshake.webp",
    alt: "Professional meeting and handshake at a medical conference",
    title: "Contact Dr. Khawar — appointments in Gujrat and Mandi Bahauddin",
  },
  book: {
    src: "/images/banners/event-handshake.webp",
    alt: "Consultation and professional connection",
    title: "Book a surgical consultation",
  },
  blog: {
    src: "/images/banners/event-certification.webp",
    alt: "Medical education and certification event",
    title: "Patient education blog — surgery and recovery guides",
  },
  faq: {
    src: "/images/banners/event-group.webp",
    alt: "Medical colleagues at a professional gathering",
    title: "Frequently asked questions about laparoscopic surgery",
  },
  reviews: {
    src: "/images/banners/event-group.webp",
    alt: "Professional medical community gathering",
    title: "Patient reviews and surgical outcomes",
  },
  legal: {
    src: "/images/banners/event-award.webp",
    alt: "Formal professional medical event",
    title: "Legal and privacy information",
  },
  default: {
    src: "/images/banners/event-group.webp",
    alt: "Professional medical community gathering",
    title: "Dr. Khawar Iqbal Gondal — laparoscopic surgeon",
  },
} as const satisfies Record<string, PageBannerImage>;
