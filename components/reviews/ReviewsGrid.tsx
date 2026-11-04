import Image from "next/image";
import { Star } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import { testimonials } from "@/data/testimonials";
import { doctor } from "@/data/doctor";

export default function ReviewsGrid() {
  return (
    <section className="section-padding">
      <Container>
        <Reveal>
          <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-dark">
                Patient reviews
              </p>
              <h2 className="mt-2 font-serif text-2xl text-heading sm:text-3xl md:text-4xl">
                What patients say
              </h2>
            </div>
            <p className="text-sm text-muted sm:text-right">
              <span className="font-semibold text-heading">
                {doctor.rating.toFixed(1)}
              </span>{" "}
              average · {testimonials.length}+ verified reviews
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((review, index) => (
            <Reveal key={review.id} delay={0.04 * index}>
              <GlassCard className="flex h-full flex-col border-teal-950/8 bg-white/80 p-5 shadow-soft md:p-6">
                <div
                  className="mb-4 flex gap-1"
                  aria-label={`${review.rating} star rating`}
                >
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-gold text-gold"
                      aria-hidden
                    />
                  ))}
                </div>
                <blockquote className="flex-1 font-serif text-lg leading-relaxed text-heading">
                  “{review.quote}”
                </blockquote>
                <div className="mt-6 flex items-center gap-3 border-t border-teal-950/8 pt-5">
                  <Image
                    src={review.avatar.src}
                    alt={review.avatar.alt}
                    width={44}
                    height={44}
                    className="h-11 w-11 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-heading">{review.name}</p>
                    <p className="text-sm text-muted">{review.location}</p>
                  </div>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
