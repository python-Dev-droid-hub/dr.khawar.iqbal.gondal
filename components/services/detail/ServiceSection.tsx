import { cn } from "@/lib/utils";

type ServiceSectionProps = {
  id?: string;
  tone?: "cream" | "white" | "tealTint" | "dark";
  className?: string;
  children: React.ReactNode;
  compact?: boolean;
};

const tones: Record<NonNullable<ServiceSectionProps["tone"]>, string> = {
  cream: "bg-cream",
  white: "bg-white/80",
  tealTint: "bg-teal-950/[0.04]",
  dark: "dark-section text-cream",
};

export default function ServiceSection({
  id,
  tone = "cream",
  className,
  children,
  compact = false,
}: ServiceSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-36 min-w-0 overflow-x-hidden px-4 sm:px-6 md:px-8",
        tones[tone],
        compact ? "py-10 md:py-12" : "py-12 md:py-16 lg:py-20",
        className,
      )}
    >
      {children}
    </section>
  );
}
