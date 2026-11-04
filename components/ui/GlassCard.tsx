import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article" | "aside" | "section";
  interactive?: boolean;
};

export default function GlassCard({
  children,
  className,
  as: Tag = "div",
  interactive = false,
}: GlassCardProps) {
  return (
    <Tag
      className={cn(
        "glass-card",
        interactive && "interactive-card",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
