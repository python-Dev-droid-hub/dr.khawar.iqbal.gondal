import { ArrowRight, Clock3, MapPin, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import GlassCard from "@/components/ui/GlassCard";
import Reveal from "@/components/motion/Reveal";
import { hospitals } from "@/data/hospitals";

export default function ConsultationCard() {
  return (
    <section
      id="locations"
      className="relative z-20 scroll-mt-28 lg:-mt-14"
    >
      {/* Mobile: cream panel above doctor; desktop: glass card above hero bg */}
      <div className="relative -mt-3 rounded-t-[1.75rem] bg-cream px-4 pb-2 pt-16 shadow-[0_-12px_40px_rgba(11,46,51,0.12)] sm:-mt-4 sm:rounded-t-[2.25rem] sm:px-6 sm:pt-20 md:pt-16 lg:mt-0 lg:rounded-none lg:bg-transparent lg:px-12 lg:pt-0 lg:shadow-none">
        <div className="relative z-20 mx-auto w-full max-w-[1440px]">
          <Reveal>
            <div className="space-y-4 lg:hidden">
              <div className="px-1">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">
                  Quick Consultation
                </p>
                <h2 className="mt-2 font-serif text-[1.65rem] leading-tight text-heading sm:text-3xl">
                  Our Consultation Locations
                </h2>
              </div>

              <div className="relative z-20 grid gap-3 sm:grid-cols-2 sm:gap-4">
                {hospitals.map((hospital) => (
                  <article
                    key={hospital.id}
                    className="rounded-card border border-teal-950/5 bg-white p-4 shadow-soft sm:p-5"
                  >
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/12 text-gold-dark">
                      <MapPin className="h-4 w-4" aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-serif text-lg text-heading sm:text-xl">
                        {hospital.name}
                      </h3>
                      <p className="text-sm text-muted">{hospital.city}</p>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2.5 text-sm text-muted">
                    <li className="flex items-start gap-2.5">
                      <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      <span>{hospital.schedule}</span>
                    </li>
                    {hospital.phones.map((entry) => (
                      <li key={entry.phoneHref} className="flex items-start gap-2.5">
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
                    variant="dark"
                    size="sm"
                    className="mt-5 w-full"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Directions
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Button>
                </article>
              ))}
            </div>
          </div>

          {/* Desktop: combined glass card */}
          <GlassCard
            interactive
            className="hidden overflow-hidden p-2 shadow-soft md:p-3 lg:block"
          >
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
                      {hospital.phones.map((entry) => (
                        <li key={entry.phoneHref} className="flex items-start gap-3">
                          <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                          <a
                            href={entry.phoneHref}
                            className="font-medium text-teal-950 hover:text-gold-dark"
                          >
                            {entry.phone}
                          </a>
                        </li>
                      ))}
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
      </div>
    </section>
  );
}
