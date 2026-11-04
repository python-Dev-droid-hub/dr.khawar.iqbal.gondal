import { ArrowRight, Clock3, MapPin, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import GlassCard from "@/components/ui/GlassCard";
import Reveal from "@/components/motion/Reveal";
import { hospitals } from "@/data/hospitals";

export default function ConsultationCard() {
  return (
    <section
      id="locations"
      className="relative z-10 -mt-12 scroll-mt-28 px-6 lg:-mt-14 lg:px-12"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <Reveal>
          <GlassCard interactive className="overflow-hidden p-2 shadow-soft md:p-3">
            <div className="grid gap-0 lg:grid-cols-[0.7fr_1.3fr]">
              <div className="flex flex-col justify-center border-b border-teal-950/10 p-6 md:p-8 lg:border-b-0 lg:border-r">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">
                  Quick Consultation
                </p>
                <h2 className="mt-3 font-serif text-3xl text-heading md:text-4xl">
                  Our Consultation Locations
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Choose the clinic closest to you — weekday care in Gujrat and
                  weekend hours in Mandi Bahauddin.
                </p>
              </div>

              <div className="grid md:grid-cols-2">
                {hospitals.map((hospital, index) => (
                  <div
                    key={hospital.id}
                    className={
                      index === 0
                        ? "border-b border-teal-950/10 p-6 md:border-b-0 md:border-r md:p-8"
                        : "p-6 md:p-8"
                    }
                  >
                    <h3 className="font-serif text-xl text-heading sm:text-2xl">
                      {hospital.name}
                      <span className="font-sans text-base font-normal text-muted">
                        {", "}
                        {hospital.address}
                      </span>
                    </h3>

                    <ul className="mt-5 space-y-3 text-sm text-muted">
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
                      <li className="flex items-start gap-3 md:hidden">
                        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                        <span>{hospital.city}</span>
                      </li>
                    </ul>

                    <Button
                      href={hospital.mapsUrl}
                      variant="dark"
                      size="sm"
                      className="mt-6"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Directions
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
