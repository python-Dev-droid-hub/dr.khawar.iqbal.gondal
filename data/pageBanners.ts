export type PageBannerImage = {
  src: string;
  alt: string;
};

/**
 * Pictorial banners for inner pages (not homepage).
 * Optimized WebP sources (~110–170KB) for faster LCP.
 */
export const pageBanners = {
  about: {
    src: "/images/banners/event-certification.webp",
    alt: "Professional certification and surgical training recognition",
  },
  services: {
    src: "/images/banners/event-award.webp",
    alt: "Surgical training award ceremony",
  },
  contact: {
    src: "/images/banners/event-handshake.webp",
    alt: "Professional meeting and handshake at a medical conference",
  },
  book: {
    src: "/images/banners/event-handshake.webp",
    alt: "Consultation and professional connection",
  },
  blog: {
    src: "/images/banners/event-certification.webp",
    alt: "Medical education and certification event",
  },
  faq: {
    src: "/images/banners/event-group.webp",
    alt: "Medical colleagues at a professional gathering",
  },
  reviews: {
    src: "/images/banners/event-group.webp",
    alt: "Professional medical community gathering",
  },
  legal: {
    src: "/images/banners/event-award.webp",
    alt: "Formal professional medical event",
  },
  default: {
    src: "/images/banners/event-group.webp",
    alt: "Professional medical community gathering",
  },
} as const satisfies Record<string, PageBannerImage>;
