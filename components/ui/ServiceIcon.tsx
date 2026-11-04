import {
  Activity,
  CircleDot,
  Hospital,
  Scissors,
  Stethoscope,
  Syringe,
} from "lucide-react";
import type { Service } from "@/data/services";
import { cn } from "@/lib/utils";

const iconMap = {
  laparoscopic: Scissors,
  gallbladder: CircleDot,
  hernia: Activity,
  appendix: Syringe,
  digestive: Stethoscope,
  general: Hospital,
} as const;

type ServiceIconProps = {
  name: Service["icon"];
  className?: string;
};

export default function ServiceIcon({ name, className }: ServiceIconProps) {
  const Icon = iconMap[name];
  return <Icon className={cn("h-5 w-5 text-gold", className)} aria-hidden />;
}
