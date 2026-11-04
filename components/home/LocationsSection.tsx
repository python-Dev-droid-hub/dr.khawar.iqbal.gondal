import { Clock3, MapPin, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { doctor } from "@/data/doctor";
import { hospitals } from "@/data/hospitals";
import { whatsappLink } from "@/lib/utils";

export default function LocationsSection() {
  return (
    <section className="section-padding">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Locations"
            title="Where to find us"
            description="Consultation clinics in Gujrat and Mandi Bahauddin with clear timings and directions."
            align="center"
            className="mb-12"
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          {hospitals.map((hospital, index) => (
            <Reveal key={hospital.id} delay={0.06 * index}>
              <article className="overflow-hidden rounded-card border border-teal-950/5 bg-white/80 shadow-soft">
                <div className="relative aspect-[16/10] bg-cream-dark">
                  <iframe
                    title={`Map of ${hospital.name}`}
                    src={hospital.mapsEmbed}
                    className="absolute inset-0 h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="p-6 md:p-7">
                  <h3 className="font-serif text-2xl text-heading">
                    {hospital.name}
                  </h3>
                  <ul className="mt-4 space-y-3 text-sm text-muted">
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
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button
                      href={whatsappLink(
                        doctor.whatsapp,
                        `Assalamu Alaikum, I would like an appointment at ${hospital.name}.`,
                      )}
                      variant="gold"
                      size="sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhatsApp
                    </Button>
                    <Button
                      href={hospital.mapsUrl}
                      variant="outline"
                      size="sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Directions
                    </Button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
