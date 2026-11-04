import { Award, Building2, ShieldCheck, Users } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { memberships, type Membership } from "@/data/about";
import { cn } from "@/lib/utils";

const iconMap = {
  shield: ShieldCheck,
  award: Award,
  users: Users,
  hospital: Building2,
} as const;

export default function ProfessionalMemberships() {
  return (
    <section className="section-padding relative overflow-hidden bg-cream-dark/30">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-10 h-64 w-64 rounded-full bg-gold/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-teal-950/5 blur-3xl"
      />

      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="Memberships"
            title="Professional Memberships"
            description="Registration and ongoing professional engagement that support safe surgical practice."
            align="center"
            className="mb-12"
          />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {memberships.map((item, index) => (
            <Reveal key={item.id} delay={0.05 * index}>
              <MembershipCard item={item} index={index} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function MembershipCard({
  item,
  index,
}: {
  item: Membership;
  index: number;
}) {
  const Icon = iconMap[item.icon];

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-card border border-teal-950/5 bg-white/85 p-6 shadow-soft transition duration-300",
        "hover:-translate-y-1 hover:border-gold/30 hover:shadow-[0_16px_36px_rgba(11,46,51,0.08)]",
      )}
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold/30 via-gold to-gold/30 opacity-80 transition group-hover:opacity-100"
      />

      <div className="flex items-start justify-between gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold/12 text-gold-dark ring-1 ring-gold/20 transition group-hover:bg-gold/18">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <span className="font-serif text-sm font-semibold tracking-[0.14em] text-gold-dark/80">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <p className="mt-5 inline-flex w-fit rounded-full bg-heading/[0.04] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-heading/70">
        {item.shortLabel}
      </p>

      <h3 className="mt-3 font-serif text-xl leading-snug text-heading md:text-[1.35rem]">
        {item.name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{item.detail}</p>
    </article>
  );
}
