import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
  as?: "h1" | "h2" | "h3";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className,
  as: TitleTag = "h2",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "max-w-2xl",
        centered && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <div
          className={cn(
            "mb-4 flex items-center gap-3",
            centered ? "justify-center" : "justify-start",
          )}
        >
          <span
            className={cn(
              "hidden h-px w-8 sm:block",
              light ? "bg-gold-light/70" : "bg-gold/70",
              !centered && "sm:w-10",
            )}
            aria-hidden
          />
          <p
            className={cn(
              "text-xs font-semibold uppercase tracking-[0.22em]",
              light ? "text-gold-light" : "text-gold-dark",
            )}
          >
            {eyebrow}
          </p>
          <span
            className={cn(
              "hidden h-px w-8 sm:block",
              light ? "bg-gold-light/70" : "bg-gold/70",
              !centered && "sm:w-10",
            )}
            aria-hidden
          />
        </div>
      ) : null}

      <TitleTag
        className={cn(
          "text-3xl leading-tight md:text-4xl lg:text-[2.75rem]",
          light ? "text-cream" : "text-heading",
        )}
      >
        {title}
      </TitleTag>

      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed md:text-lg",
            light ? "text-cream/75" : "text-muted",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
