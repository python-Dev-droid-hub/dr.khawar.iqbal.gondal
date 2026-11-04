import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ServiceIcon from "@/components/ui/ServiceIcon";
import type { Service } from "@/data/services";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  service: Service;
  className?: string;
};

export default function ServiceCard({ service, className }: ServiceCardProps) {
  const isFeatured = Boolean(service.featured);

  return (
    <Link
      href={`/services/${service.slug}`}
      className={cn(
        "group relative flex h-full min-h-[240px] flex-col overflow-hidden rounded-card p-5 shadow-soft transition duration-300 hover:-translate-y-1 md:min-h-[280px] md:p-6",
        isFeatured
          ? "dark-section hover:shadow-[0_18px_40px_rgba(201,161,91,0.22)]"
          : "interactive-card border border-teal-950/5 bg-cream-dark/50 hover:border-gold/35 hover:bg-white",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <Image
          src={service.image.src}
          alt=""
          width={520}
          height={520}
          className={cn(
            "absolute object-contain transition duration-500 group-hover:scale-105",
            isFeatured
              ? "-right-8 top-0 h-[92%] w-auto max-w-[78%] opacity-45 group-hover:opacity-60"
              : "-right-6 bottom-0 top-8 m-auto h-[78%] w-auto max-w-[72%] opacity-85 group-hover:opacity-100",
          )}
          sizes="(max-width: 768px) 70vw, 320px"
        />
      </div>

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-start justify-between gap-3">
          <span
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center",
              isFeatured
                ? "rounded-full bg-gold/20 text-gold-light"
                : "rounded-xl bg-gold/10",
            )}
          >
            <ServiceIcon
              name={service.icon}
              className={cn("h-5 w-5", isFeatured && "text-gold-light")}
            />
          </span>
          <span
            className={cn(
              "flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition",
              isFeatured
                ? "border border-cream/20 text-gold-light group-hover:bg-gold-gradient group-hover:text-teal-950"
                : "border border-teal-950/10 text-gold group-hover:bg-gold-gradient group-hover:text-teal-950",
            )}
          >
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>

        <h3
          className={cn(
            "mt-4 max-w-[58%] font-serif",
            isFeatured
              ? "text-2xl text-cream md:text-[1.65rem]"
              : "text-xl text-heading md:text-[1.35rem]",
          )}
        >
          {service.title}
        </h3>
        <p
          className={cn(
            "mt-2 max-w-[55%] line-clamp-3 text-sm leading-relaxed",
            isFeatured ? "text-cream/75" : "text-muted",
          )}
        >
          {service.summary}
        </p>

        <span
          className={cn(
            "mt-auto inline-flex items-center gap-1 pt-6 text-sm font-semibold",
            isFeatured
              ? "text-gold-light"
              : "text-teal-900/70 transition group-hover:text-teal-950",
          )}
        >
          Learn more
          <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
