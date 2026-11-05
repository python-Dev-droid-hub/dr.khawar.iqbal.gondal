import { doctor } from "@/data/doctor";

export type Stat = {
  id: string;
  value: string;
  label: string;
  icon: "surgeries" | "experience" | "satisfaction" | "rating" | "discharge";
};

export const heroTrustItems: Stat[] = [
  {
    id: "ht1",
    value: "1000+ Surgeries",
    label: "",
    icon: "surgeries",
  },
  {
    id: "ht2",
    value: `${doctor.experienceYears}+ Years Experience`,
    label: "",
    icon: "experience",
  },
  {
    id: "ht3",
    value: "Same-Day Discharge",
    label: "",
    icon: "discharge",
  },
];

export const bannerStats: Stat[] = [
  {
    id: "bs1",
    value: "1000+",
    label: "Successful Surgeries",
    icon: "surgeries",
  },
  {
    id: "bs2",
    value: `${doctor.experienceYears}+`,
    label: "Years of Experience",
    icon: "experience",
  },
  {
    id: "bs3",
    value: `${doctor.patientSatisfaction}%`,
    label: "Patient Satisfaction",
    icon: "satisfaction",
  },
  {
    id: "bs4",
    value: "5.0",
    label: "Rated by Patients",
    icon: "rating",
  },
];
