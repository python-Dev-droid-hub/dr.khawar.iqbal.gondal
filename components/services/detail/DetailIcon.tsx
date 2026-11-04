import {
  Activity,
  AlertTriangle,
  Bandage,
  BedDouble,
  Briefcase,
  Check,
  Clock3,
  Droplets,
  Eye,
  FileText,
  HeartPulse,
  Hospital,
  ListChecks,
  Pill,
  Scan,
  ShieldCheck,
  Stethoscope,
  Syringe,
  Thermometer,
  UserRound,
  Utensils,
  X,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  clock: Clock3,
  bed: BedDouble,
  briefcase: Briefcase,
  syringe: Syringe,
  scalpel: Activity,
  scan: Scan,
  heart: HeartPulse,
  alert: AlertTriangle,
  check: Check,
  x: X,
  pill: Pill,
  utensils: Utensils,
  activity: Activity,
  stethoscope: Stethoscope,
  hospital: Hospital,
  file: FileText,
  user: UserRound,
  shield: ShieldCheck,
  droplet: Droplets,
  eye: Eye,
  thermometer: Thermometer,
  bandage: Bandage,
  list: ListChecks,
};

type DetailIconProps = {
  name?: string;
  className?: string;
};

export default function DetailIcon({
  name = "check",
  className,
}: DetailIconProps) {
  const Icon = iconMap[name] ?? Check;
  return <Icon className={cn("h-5 w-5", className)} aria-hidden />;
}
