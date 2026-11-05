import { doctor } from "@/data/doctor";

export type TimelineItem = {
  id: string;
  year: string;
  title: string;
  place: string;
  description: string;
};

export type Membership = {
  id: string;
  name: string;
  detail: string;
  shortLabel: string;
  icon: "shield" | "award" | "users" | "hospital";
};

export type AchievementStat = {
  id: string;
  value: number;
  suffix?: string;
  decimals?: number;
  label: string;
};

export const educationTimeline: TimelineItem[] = [
  {
    id: "edu-1",
    year: "MBBS",
    title: "Bachelor of Medicine & Surgery",
    place: "Medical College, Pakistan",
    description:
      "Foundational medical training with early interest in operative care and acute surgical presentation.",
  },
  {
    id: "edu-2",
    year: "FCPS",
    title: "Fellowship in Surgery",
    place: "College of Physicians and Surgeons Pakistan",
    description:
      "Specialist surgical training focused on general surgery, perioperative decision-making, and patient safety.",
  },
  {
    id: "edu-3",
    year: "Advanced",
    title: "Laparoscopic Skill Development",
    place: "Hands-on workshops & supervised practice",
    description:
      "Continued training in minimally invasive techniques for gallbladder, hernia, appendix, and selected GI procedures.",
  },
];

export const experienceTimeline: TimelineItem[] = [
  {
    id: "exp-0",
    year: "Since 2002",
    title: "Surgical career begins",
    place: "Pakistan",
    description:
      "Clinical and surgical practice starting in 2002 — the foundation of more than two decades of operative experience.",
  },
  {
    id: "exp-1",
    year: "Registrar",
    title: "Ex-Registrar, Surgery",
    place: "Services Hospital",
    description:
      "Surgical registrar experience with exposure to elective and emergency operative care in a high-volume teaching hospital setting.",
  },
  {
    id: "exp-2",
    year: "Senior Registrar",
    title: "Ex-Senior Registrar, Surgery",
    place: "Mayo Hospital",
    description:
      "Senior registrar role focused on complex general surgery cases, perioperative decision-making, and supervised operative leadership.",
  },
  {
    id: "exp-3",
    year: "Since 2012",
    title: "Consultant Surgeon",
    place: "Aziz Bhatti Shaheed Hospital",
    description:
      "Serving as consultant surgeon since 2012, providing laparoscopic and general surgical care with a patient-first approach.",
  },
];

export const memberships: Membership[] = [
  {
    id: "m1",
    name: "Pakistan Medical & Dental Council",
    detail: "Registered medical practitioner with active license to practice.",
    shortLabel: "PMDC",
    icon: "shield",
  },
  {
    id: "m2",
    name: "College of Physicians and Surgeons Pakistan",
    detail: "FCPS Surgery fellowship pathway and specialist credentialing.",
    shortLabel: "CPSP",
    icon: "award",
  },
  {
    id: "m3",
    name: "Surgical Society Engagement",
    detail: "Ongoing learning in general and laparoscopic surgery techniques.",
    shortLabel: "CME",
    icon: "users",
  },
  {
    id: "m4",
    name: "Hospital Clinical Teams",
    detail: "Collaborative care with theatre, ward, and perioperative colleagues.",
    shortLabel: "Teams",
    icon: "hospital",
  },
];

export const carePhilosophy = {
  quote:
    "Surgery should feel clear, calm, and carefully chosen — never rushed. I explain options in plain language, prefer the least invasive safe approach, and stay available through recovery so patients never feel alone in the process.",
  attribution: "Dr. Khawar Iqbal Gondal",
  pillars: [
    {
      id: "p1",
      title: "Clarity first",
      text: "Honest discussion of risks, benefits, and alternatives before any operation.",
      icon: "clarity" as const,
    },
    {
      id: "p2",
      title: "Minimally invasive when suitable",
      text: "Laparoscopic techniques to reduce pain, scarring, and recovery time.",
      icon: "minimally" as const,
    },
    {
      id: "p3",
      title: "Continuity of care",
      text: "Support from consultation through follow-up at both hospital clinics.",
      icon: "continuity" as const,
    },
  ],
} as const;

export const aboutAchievements: AchievementStat[] = [
  { id: "a1", value: 1000, suffix: "+", label: "Successful surgeries" },
  {
    id: "a2",
    value: doctor.experienceYears,
    suffix: "+",
    label: "Years of experience",
  },
  {
    id: "a3",
    value: doctor.patientSatisfaction,
    suffix: "%",
    label: "Patient satisfaction",
  },
  { id: "a4", value: 5, decimals: 1, label: "Patient rating" },
];
