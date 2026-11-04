"use client";

import { MessageCircle, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import type { Service } from "@/data/services";
import { doctor } from "@/data/doctor";
import { hospitals } from "@/data/hospitals";
import { whatsappLink } from "@/lib/utils";

type ServiceMobileBarProps = {
  service: Service;
};

export default function ServiceMobileBar({ service }: ServiceMobileBarProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-teal-950/10 bg-cream p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:hidden">
      <div className="mx-auto grid max-w-site grid-cols-3 gap-2">
        <Button
          href={hospitals[0].phoneHref}
          variant="outline"
          size="sm"
          className="w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        >
          <Phone className="h-4 w-4" aria-hidden />
          Call
        </Button>
        <Button
          href={whatsappLink(
            doctor.whatsapp,
            `Assalamu Alaikum, I would like an appointment about ${service.title}.`,
          )}
          variant="dark"
          size="sm"
          className="w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle className="h-4 w-4" aria-hidden />
          WhatsApp
        </Button>
        <Button
          href="/book"
          variant="gold"
          size="sm"
          className="w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        >
          Book
        </Button>
      </div>
    </div>
  );
}
