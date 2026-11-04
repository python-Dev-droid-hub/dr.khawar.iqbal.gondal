import { Clock3, MapPin, Phone, ArrowRight } from "lucide-react";
import { hospitals } from "@/data/hospitals";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import Reveal from "@/components/motion/Reveal";

export default function LocationsBar() {
  return (
    <section className="relative z-10 -mt-24 md:-mt-28">
      <Container>
        <Reveal>
          <GlassCard className="grid gap-0 overflow-hidden p-2 md:grid-cols-2">
            {hospitals.map((hospital, index) => (
              <div
                key={hospital.id}
                className={
                  index === 0
                    ? "border-b border-teal-950/10 p-6 md:border-b-0 md:border-r md:p-8"
                    : "p-6 md:p-8"
                }
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
                  Consultation Location
                </p>
                <h3 className="mt-2 font-serif text-2xl text-heading">
                  {hospital.name}
                </h3>
                <p className="mt-1 text-sm text-muted">{hospital.city}</p>

                <ul className="mt-6 space-y-3 text-sm text-muted">
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <span>{hospital.address}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <span>{hospital.schedule}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <a
                      href={hospital.phoneHref}
                      className="font-medium text-teal-950 hover:text-gold-dark"
                    >
                      {hospital.phone}
                    </a>
                  </li>
                </ul>

                <Button
                  href={hospital.mapsUrl}
                  variant="dark"
                  className="mt-6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Button>
              </div>
            ))}
          </GlassCard>
        </Reveal>
      </Container>
    </section>
  );
}
