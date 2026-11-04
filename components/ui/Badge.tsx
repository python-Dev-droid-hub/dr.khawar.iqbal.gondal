import { cn } from "@/lib/utils";

type BadgeVariant = "gold" | "teal" | "cream" | "outline";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
  variant?: BadgeVariant;
};

const variants: Record<BadgeVariant, string> = {
  gold: "border-transparent bg-gold/15 text-gold-dark",
  teal: "border-transparent bg-teal-950 text-cream",
  cream: "border-transparent bg-cream-dark text-teal-950",
  outline: "border-teal-800/20 bg-transparent text-teal-950",
};

export default function Badge({
  children,
  className,
  variant = "gold",
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-pill border px-3.5 py-1.5 text-xs font-semibold tracking-wide",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
