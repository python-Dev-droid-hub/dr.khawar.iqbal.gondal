import {
  Activity,
  HeartPulse,
  Hospital,
  Scissors,
  Shield,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  laparoscopic: Scissors,
  proctology: Shield,
  headNeck: Stethoscope,
  breast: HeartPulse,
  abdominal: Activity,
  general: Hospital,
};

type ServiceIconProps = {
  name: string;
  className?: string;
};

export default function ServiceIcon({ name, className }: ServiceIconProps) {
  const Icon = iconMap[name] ?? Scissors;
  return <Icon className={cn("h-5 w-5 text-gold", className)} aria-hidden />;
}
