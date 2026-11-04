import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { aboutAppointments, aboutSpecialties } from "@/data/credentials";
import { doctor } from "@/data/doctor";

export default function AboutProfile() {
  return (
    <section className="section-padding">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative mx-auto w-full max-w-[min(100%,28rem)] px-1 lg:mx-0 lg:px-0">
            <div
              className="absolute -inset-x-2 -bottom-4 top-10 rounded-[2rem] bg-gold-gradient opacity-90 shadow-gold sm:-inset-x-4 md:-inset-x-6"
              aria-hidden
            />
            <div className="relative overflow-hidden rounded-t-[999px] rounded-b-[1.75rem] border-[6px] border-cream bg-cream shadow-soft">
              <div className="relative aspect-[3/4]">
                <div className="absolute inset-x-3 bottom-0 top-10 md:inset-x-4 md:top-12">
                  <Image
                    src={doctor.aboutPortrait.src}
                    alt={doctor.aboutPortrait.alt}
                    title={doctor.aboutPortrait.alt}
                    fill
                    priority
                    className="object-contain object-bottom"
                    sizes="(max-width: 1024px) 90vw, 420px"
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <SectionHeading
            eyebrow={doctor.credentials}
            title={doctor.name}
            description={doctor.title}
            align="left"
          />
          <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
            {doctor.aboutExtended[0]}
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {doctor.aboutExtended[1]}
          </p>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {aboutSpecialties.map((item) => (
              <Badge key={item} variant="cream" className="px-3 py-1 text-[11px]">
                {item}
              </Badge>
            ))}
          </div>

          <ul className="mt-3 space-y-1">
            {aboutAppointments.map((item) => (
              <li
                key={`${item.role}-${item.place}`}
                className="text-sm leading-snug text-heading md:text-[15px]"
              >
                <span className="font-semibold">{item.role}</span>
                <span className="text-muted"> — {item.place}</span>
                {item.note ? (
                  <span className="text-gold-dark"> · {item.note}</span>
                ) : null}
              </li>
            ))}
          </ul>

          <p className="mt-6 font-hand text-2xl text-teal-800 md:text-3xl">
            {doctor.signature}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/book" variant="gold">
              Book Consultation
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
            <Button href="/contact" variant="outline">
              Contact Clinic
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
