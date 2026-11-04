import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "gold" | "outline" | "dark";
type Size = "sm" | "md" | "lg";

type CommonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
  size?: Size;
  /** Use lighter outline/text for dark backgrounds */
  onDark?: boolean;
};

type ButtonAsButton = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color"> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
  "aria-label"?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-3.5 text-base",
};

function variantClasses(variant: Variant, onDark?: boolean) {
  switch (variant) {
    case "gold":
      return "bg-gold-gradient text-teal-950 shadow-gold hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(201,161,91,0.45)] hover:brightness-105";
    case "dark":
      return onDark
        ? "bg-cream text-teal-950 hover:-translate-y-0.5 hover:bg-cream-dark hover:shadow-[0_10px_24px_rgba(247,245,240,0.25)]"
        : "bg-teal-950 text-cream hover:-translate-y-0.5 hover:bg-teal-900 hover:shadow-[0_12px_28px_rgba(201,161,91,0.28)]";
    case "outline":
    default:
      return onDark
        ? "border border-cream/40 bg-transparent text-cream hover:-translate-y-0.5 hover:border-gold/60 hover:bg-white/10 hover:shadow-[0_10px_24px_rgba(201,161,91,0.2)]"
        : "border border-teal-800/30 bg-transparent text-teal-950 hover:-translate-y-0.5 hover:border-gold/50 hover:bg-teal-950/5 hover:shadow-[0_10px_24px_rgba(201,161,91,0.18)]";
  }
}

export default function Button(props: ButtonProps) {
  if ("href" in props && props.href) {
    const {
      children,
      className,
      variant = "gold",
      size = "md",
      onDark = false,
      href,
      target,
      rel,
      onClick,
      "aria-label": ariaLabel,
    } = props;

    return (
      <Link
        href={href}
        className={cn(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-pill font-semibold transition duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:pointer-events-none disabled:opacity-50",
          sizeClasses[size],
          variantClasses(variant, onDark),
          className,
        )}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }

  const {
    children,
    className,
    variant = "gold",
    size = "md",
    onDark = false,
    type = "button",
    ...domProps
  } = props as ButtonAsButton;

  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-pill font-semibold transition duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:pointer-events-none disabled:opacity-50",
        sizeClasses[size],
        variantClasses(variant, onDark),
        className,
      )}
      {...domProps}
    >
      {children}
    </button>
  );
}
