import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import DetailIcon from "@/components/services/detail/DetailIcon";
import { hasQuickFacts, type Service } from "@/data/services";
import { doctor } from "@/data/doctor";
import { whatsappLink } from "@/lib/utils";

type ServiceDetailHeroProps = {
  service: Service;
};

export default function ServiceDetailHero({ service }: ServiceDetailHeroProps) {
  const facts = service.quickFacts;
  const showChips = hasQuickFacts(facts);

  const chips = showChips
    ? [
        {
          label: "Procedure time",
          value: facts.procedureTime,
          icon: "clock",
        },
        {
          label: "Hospital stay",
          value: facts.hospitalStay,
          icon: "bed",
        },
        {
          label: "Return to work",
          value: facts.returnToWork,
          icon: "briefcase",
        },
      ].filter((chip) => chip.value)
    : [];

  return (
    <section className="relative overflow-hidden bg-teal-hero pt-24 text-cream md:pt-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgb(var(--gold) / 0.2), transparent 40%), radial-gradient(circle at 80% 10%, rgb(var(--teal-800) / 0.9), transparent 45%)",
        }}
      />

      <Container className="relative grid min-w-0 items-center gap-8 overflow-x-clip pb-10 pt-4 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:pb-12 lg:pt-6">
        <div>
          <nav aria-label="Breadcrumb" className="text-xs text-cream/65">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link href="/" className="transition hover:text-gold-light">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/services" className="transition hover:text-gold-light">
                  Services
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-cream/90">{service.shortTitle}</li>
            </ol>
          </nav>

          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-gold-light">
            Service
          </p>
          <h1 className="mt-3 max-w-xl font-serif text-3xl leading-tight text-cream sm:text-4xl md:text-5xl">
            {service.title}
          </h1>
          <p className="mt-4 max-w-[70ch] text-base leading-[1.7] text-cream/75 md:text-lg">
            {service.tagline}
          </p>

          {chips.length ? (
            <div className="mt-6 flex flex-wrap gap-2.5">
              {chips.map((chip) => (
                <span
                  key={chip.label}
                  className="inline-flex items-center gap-2 rounded-pill border border-white/15 bg-white/10 px-3.5 py-2 text-sm text-cream"
                >
                  <DetailIcon name={chip.icon} className="h-4 w-4 text-gold-light" />
                  <span className="text-cream/70">{chip.label}:</span>
                  <span className="font-medium">{chip.value}</span>
                </span>
              ))}
            </div>
          ) : null}

          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="/book" variant="gold">
              Book Consultation
            </Button>
            <Button
              href={whatsappLink(
                doctor.whatsapp,
                `Assalamu Alaikum, I would like to ask about ${service.title}.`,
              )}
              variant="outline"
              onDark
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              WhatsApp Us
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-square">
            <Image
              src={service.image}
              alt={`${service.title} illustration`}
              fill
              priority
              className="object-contain drop-shadow-[0_24px_48px_rgba(0,0,0,0.35)]"
              sizes="(max-width: 1024px) 80vw, 420px"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
