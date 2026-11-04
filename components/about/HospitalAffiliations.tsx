import { Clock3, MapPin, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { hospitals } from "@/data/hospitals";

export default function HospitalAffiliations() {
  return (
    <section className="section-padding">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Affiliations"
            title="Hospital Affiliations"
            description="Consultation and operative care across two trusted hospitals."
            align="center"
            className="mb-12"
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {hospitals.map((hospital, index) => (
            <Reveal key={hospital.id} delay={0.06 * index}>
              <article className="flex h-full flex-col rounded-card border border-teal-950/5 bg-white/80 p-5 shadow-soft sm:p-7">
                <h3 className="font-serif text-xl text-heading sm:text-2xl md:text-3xl">
                  {hospital.name}
                </h3>
                <ul className="mt-5 flex-1 space-y-3 text-sm text-muted">
                  <li className="flex gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    {hospital.address}, {hospital.city}
                  </li>
                  <li className="flex gap-3">
                    <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    {hospital.scheduleDetail}
                  </li>
                  <li className="flex gap-3">
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
                  variant="outline"
                  size="sm"
                  className="mt-6 self-start"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions
                </Button>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
