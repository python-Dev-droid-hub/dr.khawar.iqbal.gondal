import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import Breadcrumb, { type BreadcrumbItem } from "@/components/shared/Breadcrumb";
import { pageBanners, type PageBannerImage } from "@/data/pageBanners";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  /** Background photo — defaults to a clinical atmosphere image */
  image?: PageBannerImage;
  className?: string;
  children?: React.ReactNode;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  image = pageBanners.default,
  className,
  children,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden pb-16 pt-28 md:pb-24 md:pt-36",
        className,
      )}
    >
      {/* Pictorial background */}
      <div aria-hidden className="absolute inset-0">
        <Image
          src={image.src}
          alt=""
          fill
          priority
          quality={65}
          className="object-cover object-[center_28%]"
          sizes="100vw"
        />
        {/* Teal + depth overlays for readability */}
        <div className="absolute inset-0 bg-teal-950/72" />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-950/90 via-teal-950/65 to-teal-950/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-950/80 via-transparent to-teal-950/40" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(247,245,240,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(247,245,240,0.5) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse 75% 65% at 40% 45%, black 15%, transparent 70%)",
          }}
        />
        <div className="absolute -right-16 top-8 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
        <div className="absolute -left-20 bottom-8 h-56 w-56 rounded-full bg-gold/10 blur-3xl" />
      </div>

      <Container className="relative z-[1]">
        <Reveal>
          {breadcrumbs?.length ? (
            <div className="mb-7 max-w-full">
              <Breadcrumb
                items={breadcrumbs}
                light
                className="inline-flex max-w-full items-center rounded-full border border-white/20 bg-black/25 px-4 py-2 shadow-[0_8px_24px_rgba(0,0,0,0.18)] backdrop-blur-md"
              />
            </div>
          ) : null}

          {eyebrow ? (
            <div className="mb-4 flex items-center gap-3">
              <span
                className="hidden h-px w-8 bg-gold/70 sm:block"
                aria-hidden
              />
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-light">
                {eyebrow}
              </p>
              <span className="h-px w-8 bg-gold/70 sm:w-10" aria-hidden />
            </div>
          ) : null}

          <h1 className="max-w-3xl break-words-safe font-serif text-3xl leading-[1.12] text-cream sm:text-4xl md:text-5xl lg:text-[3.35rem]">
            {title}
          </h1>

          <span
            aria-hidden
            className="mt-5 block h-px w-16 bg-gradient-to-r from-gold via-gold-light to-transparent md:mt-6 md:w-20"
          />

          {description ? (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-cream/80 md:mt-6 md:text-lg">
              {description}
            </p>
          ) : null}

          {children ? <div className="mt-8">{children}</div> : null}
        </Reveal>
      </Container>

      {/* Soft curve into page content */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] leading-[0]"
      >
        <svg
          viewBox="0 0 1440 64"
          preserveAspectRatio="none"
          className="h-10 w-full text-cream md:h-14"
        >
          <path
            d="M0,64 L0,28 C240,56 480,0 720,18 C960,36 1200,58 1440,22 L1440,64 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
