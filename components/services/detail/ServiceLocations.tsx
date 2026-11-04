import { Clock3, MapPin, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal, { Stagger, StaggerItem } from "@/components/services/detail/StaticReveal";
import ServiceSection from "@/components/services/detail/ServiceSection";
import { hospitals } from "@/data/hospitals";

export default function ServiceLocations() {
  return (
    <ServiceSection id="locations" tone="cream" compact>
      <Reveal>
        <SectionHeading
          eyebrow="Locations"
          title="Consultation hospitals"
          align="left"
          className="mb-8 max-w-3xl"
        />
      </Reveal>

      <Stagger className="grid gap-4 md:grid-cols-2">
        {hospitals.map((hospital) => (
          <StaggerItem key={hospital.id}>
            <article className="rounded-card border border-teal-950/8 bg-white/80 p-5 shadow-soft md:p-6">
              <h3 className="font-serif text-2xl text-heading">{hospital.name}</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-muted">
                <li className="flex gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {hospital.address.includes(hospital.city)
                    ? hospital.address
                    : `${hospital.address}, ${hospital.city}`}
                </li>
                <li className="flex gap-2.5">
                  <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {hospital.scheduleDetail}
                </li>
                {hospital.phones.map((entry) => (
                  <li key={entry.phoneHref} className="flex gap-2.5">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <a
                      href={entry.phoneHref}
                      className="font-medium text-heading hover:text-gold-dark"
                    >
                      {entry.phone}
                    </a>
                  </li>
                ))}
              </ul>
              <Button
                href={hospital.mapsUrl}
                variant="outline"
                size="sm"
                className="mt-5"
                target="_blank"
                rel="noopener noreferrer"
              >
                Directions
              </Button>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </ServiceSection>
  );
}
