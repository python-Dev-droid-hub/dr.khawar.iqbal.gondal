import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ServiceIcon from "@/components/ui/ServiceIcon";
import { servicePath, type Service } from "@/data/services";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  service: Service;
  className?: string;
};

export default function ServiceCard({ service, className }: ServiceCardProps) {
  const isFeatured = service.slug === "laparoscopic-surgery";

  return (
    <Link
      href={servicePath(service.slug)}
      className={cn(
        "group relative flex h-full min-h-[220px] flex-col overflow-hidden rounded-card p-4 shadow-soft transition duration-300 hover:-translate-y-1 sm:min-h-[240px] sm:p-5 md:min-h-[280px] md:p-6",
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
          src={service.image}
          alt=""
          width={520}
          height={520}
          // Decorative: title/tagline adjacent; empty alt avoids duplicate announcement
          className={cn(
            "absolute object-contain transition duration-500 group-hover:scale-105",
            isFeatured
              ? "-right-10 top-0 h-[88%] w-auto max-w-[68%] opacity-35 sm:-right-8 sm:max-w-[78%] sm:opacity-45 group-hover:opacity-60"
              : "-right-10 bottom-0 top-10 m-auto h-[70%] w-auto max-w-[58%] opacity-45 sm:-right-6 sm:top-8 sm:h-[78%] sm:max-w-[72%] sm:opacity-75 md:opacity-85 group-hover:opacity-100",
          )}
          sizes="(max-width: 640px) 50vw, (max-width: 768px) 60vw, 320px"
        />
        {/* Soft fade so copy stays readable over art on mobile */}
        <div
          className={cn(
            "absolute inset-y-0 left-0 w-[72%] sm:w-[55%] md:w-[48%]",
            isFeatured
              ? "bg-gradient-to-r from-[rgb(1_24_57)] via-[rgb(1_24_57/0.85)] to-transparent"
              : "bg-gradient-to-r from-cream-dark/95 via-cream-dark/80 to-transparent",
          )}
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
            "mt-4 max-w-[70%] font-serif sm:max-w-[65%] md:max-w-[58%]",
            isFeatured
              ? "text-xl text-cream sm:text-2xl md:text-[1.65rem]"
              : "text-lg text-heading sm:text-xl md:text-[1.35rem]",
          )}
        >
          {service.title}
        </h3>
        <p
          className={cn(
            "mt-2 max-w-[68%] line-clamp-3 text-sm leading-relaxed sm:max-w-[62%] md:max-w-[55%]",
            isFeatured ? "text-cream/80" : "text-teal-950/70",
          )}
        >
          {service.tagline}
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
