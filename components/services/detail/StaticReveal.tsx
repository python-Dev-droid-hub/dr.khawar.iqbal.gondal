import { cn } from "@/lib/utils";

/**
 * No-op stand-ins for Reveal/Stagger on long service pages.
 * Framer whileInView on 40+ blocks + sticky backdrop-blur was causing scroll stutter.
 */

type BoxProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
};

export default function Reveal({ children, className }: BoxProps) {
  return <div className={cn(className)}>{children}</div>;
}

export function Stagger({ children, className }: BoxProps) {
  return <div className={cn(className)}>{children}</div>;
}

export function StaggerItem({ children, className }: BoxProps) {
  return <div className={cn(className)}>{children}</div>;
}
