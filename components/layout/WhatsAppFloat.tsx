"use client";

import { doctor } from "@/data/doctor";
import { whatsappLink } from "@/lib/utils";

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.79 14.24c-.24.68-1.42 1.3-1.97 1.38-.5.08-1.14.11-1.84-.12-.42-.13-.97-.32-1.67-.62-2.94-1.27-4.85-4.23-5-4.42-.14-.19-1.18-1.57-1.18-3 0-1.42.74-2.12 1.01-2.41.26-.28.58-.35.77-.35h.55c.18 0 .42-.07.66.5.24.58.82 2 .89 2.14.07.14.12.31.02.5-.1.19-.14.31-.28.48-.14.17-.3.37-.42.5-.14.14-.28.29-.12.57.16.28.7 1.15 1.5 1.86 1.03.92 1.9 1.2 2.17 1.34.28.14.44.12.6-.07.17-.19.7-.81.89-1.09.19-.28.37-.23.63-.14.26.09 1.66.78 1.95.93.28.14.47.21.54.33.07.12.07.68-.17 1.36z" />
    </svg>
  );
}

export default function WhatsAppFloat() {
  const href = whatsappLink(
    doctor.whatsapp,
    `Assalamu Alaikum, I would like to book a consultation with ${doctor.name}.`,
  );

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="whatsapp-float fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
    >
      <WhatsAppGlyph className="h-7 w-7" />
    </a>
  );
}
