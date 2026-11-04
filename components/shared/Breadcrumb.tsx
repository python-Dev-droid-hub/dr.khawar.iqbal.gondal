import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  className?: string;
  light?: boolean;
};

export default function Breadcrumb({
  items,
  className,
  light = false,
}: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn(className)}>
      <ol className="flex min-w-0 flex-wrap items-center gap-x-1 gap-y-1 text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.label}-${index}`} className="inline-flex min-w-0 items-center">
              {index > 0 ? (
                <ChevronRight
                  className={cn(
                    "mx-1.5 h-3.5 w-3.5 shrink-0",
                    light ? "text-cream/45" : "text-muted",
                  )}
                  aria-hidden
                />
              ) : null}

              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className={cn(
                    "shrink-0 transition",
                    light
                      ? "text-cream/75 hover:text-gold-light"
                      : "text-muted hover:text-heading",
                  )}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={cn(
                    "min-w-0 truncate font-medium",
                    light ? "text-gold-light" : "text-heading",
                    isLast && "max-w-[14rem] sm:max-w-[20rem] md:max-w-none",
                  )}
                  aria-current={isLast ? "page" : undefined}
                  title={item.label}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
