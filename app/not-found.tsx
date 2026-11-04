import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { doctor } from "@/data/doctor";

export default function NotFound() {
  return (
    <section className="dark-section flex min-h-[80vh] items-center py-28 md:py-36">
      <Container className="relative text-center">
        <Image
          src="/images/logo-on-dark.png"
          alt="Dr. Khawar Laparoscopy & Surgical Centre"
          width={926}
          height={343}
          className="mx-auto mb-6 h-14 w-auto max-w-[260px] object-contain"
        />
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-light">
          Page not found
        </p>
        <h1 className="mt-4 font-serif text-5xl text-cream md:text-7xl">404</h1>
        <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-cream/75 md:text-lg">
          This page may have moved or never existed. Return home or book a
          consultation with {doctor.shortName}.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button href="/" variant="gold">
            <Home className="h-4 w-4" aria-hidden />
            Back to Home
          </Button>
          <Button href="/book" variant="outline" onDark>
            Book Appointment
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
        </div>
        <p className="mt-10 text-sm text-cream/50">
          Or visit{" "}
          <Link href="/contact" className="text-gold-light underline-offset-2 hover:underline">
            Contact
          </Link>{" "}
          for clinic phone numbers.
        </p>
      </Container>
    </section>
  );
}
