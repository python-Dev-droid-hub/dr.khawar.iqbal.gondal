import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3, MapPin, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SocialIcon from "@/components/ui/SocialIcon";
import { doctor } from "@/data/doctor";
import { hospitals } from "@/data/hospitals";
import {
  footerPatientResources,
  footerQuickLinks,
  legalLinks,
} from "@/data/navigation";
import { services } from "@/data/services";

function GoldDivider({ className = "" }: { className?: string }) {
  return (
    <div
      className={`h-px w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent ${className}`}
      aria-hidden
    />
  );
}

function HeartbeatLine({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none absolute inset-x-0 opacity-[0.12] ${className}`}
      viewBox="0 0 1200 80"
      fill="none"
      aria-hidden
      preserveAspectRatio="none"
    >
      <path
        d="M0 40 H180 L210 40 L230 18 L250 62 L275 40 H420 L445 40 L465 10 L490 70 L515 40 H700 L725 40 L745 22 L770 58 L795 40 H1200"
        stroke="rgb(var(--gold))"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="dark-section relative min-h-[500px] text-cream">
      <HeartbeatLine className="top-24 h-20" />
      <HeartbeatLine className="bottom-36 h-16" />

      <div className="relative">
        <Container className="pb-10 pt-16 md:pt-20">
          <div className="grid gap-10 lg:grid-cols-[1.25fr_0.9fr] lg:items-start">
            <div>
              <Link
                href="/"
                className="inline-flex items-center"
                aria-label={`${doctor.name} — home`}
              >
                <Image
                  src="/images/logo-on-dark.png"
                  alt="Dr. Khawar Laparoscopy & Surgical Centre"
                  width={926}
                  height={343}
                  className="h-14 w-auto max-w-[280px] object-contain md:h-16 md:max-w-[340px]"
                  sizes="340px"
                />
              </Link>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-cream/70 md:text-base">
                Minimally invasive laparoscopic and general surgery with a focus
                on precision, safety, and faster recovery for patients across
                Gujrat and Mandi Bahauddin.
              </p>
              <div className="mt-6 flex gap-3">
                <a
                  href={doctor.social.facebook}
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-cream/80 transition hover:border-gold hover:text-gold"
                >
                  <SocialIcon network="facebook" />
                </a>
                <a
                  href={doctor.social.instagram}
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-cream/80 transition hover:border-gold hover:text-gold"
                >
                  <SocialIcon network="instagram" />
                </a>
                <a
                  href={doctor.social.linkedin}
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-cream/80 transition hover:border-gold hover:text-gold"
                >
                  <SocialIcon network="linkedin" />
                </a>
              </div>
            </div>

            <aside className="rounded-card bg-gold-gradient p-6 text-teal-950 shadow-gold md:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-900/70">
                Ready when you are
              </p>
              <h2 className="mt-2 font-serif text-2xl md:text-3xl">
                Book a Consultation
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-teal-950/75">
                Weekday clinics in Gujrat and weekend hours in Mandi Bahauddin.
              </p>
              <Button href="/book" variant="dark" className="mt-6">
                Book Appointment
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
            </aside>
          </div>

          <GoldDivider className="my-12" />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="font-serif text-xl text-cream">Quick Links</h3>
              <ul className="mt-5 space-y-3">
                {footerQuickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-cream/70 transition hover:text-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-xl text-cream">Our Services</h3>
              <ul className="mt-5 space-y-3">
                {services.slice(0, 6).map((service) => (
                  <li key={service.id}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-sm text-cream/70 transition hover:text-gold"
                    >
                      {service.shortTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-xl text-cream">Patient Resources</h3>
              <ul className="mt-5 space-y-3">
                {footerPatientResources.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-cream/70 transition hover:text-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-xl text-cream">Contact Info</h3>
              <ul className="mt-5 space-y-4 text-sm text-cream/70">
                {hospitals.map((hospital) => (
                  <li key={hospital.id} className="flex gap-3">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <span>
                      <span className="block text-cream">{hospital.name}</span>
                      <a
                        href={hospital.phoneHref}
                        className="transition hover:text-gold"
                      >
                        {hospital.phone}
                      </a>
                    </span>
                  </li>
                ))}
                <li>
                  <a
                    href={`mailto:${doctor.email}`}
                    className="transition hover:text-gold"
                  >
                    {doctor.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <GoldDivider className="my-12" />

          <div>
            <h3 className="font-serif text-xl text-cream">Hospital Locations</h3>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {hospitals.map((hospital) => (
                <article
                  key={hospital.id}
                  className="rounded-card border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                >
                  <h4 className="font-serif text-lg text-cream">
                    {hospital.name}
                  </h4>
                  <ul className="mt-4 space-y-3 text-sm text-cream/70">
                    <li className="flex gap-3">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      <span>
                        {hospital.address}, {hospital.city}
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      <span>{hospital.scheduleDetail}</span>
                    </li>
                    <li className="flex gap-3">
                      <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      <a
                        href={hospital.phoneHref}
                        className="transition hover:text-gold"
                      >
                        {hospital.phone}
                      </a>
                    </li>
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </Container>

        <GoldDivider />

        <Container className="flex flex-col gap-3 py-6 text-xs text-cream/55 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {doctor.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}
