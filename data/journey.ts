export type JourneyStep = {
  id: string;
  step: number;
  title: string;
  description: string;
  icon: "consult" | "diagnosis" | "surgery" | "recovery" | "followup";
};

export const journeySteps: JourneyStep[] = [
  {
    id: "j1",
    step: 1,
    title: "Consultation",
    description:
      "Share your symptoms and history.\nWe outline next steps clearly.",
    icon: "consult",
  },
  {
    id: "j2",
    step: 2,
    title: "Diagnosis",
    description:
      "Review exams and imaging together.\nConfirm the safest treatment path.",
    icon: "diagnosis",
  },
  {
    id: "j3",
    step: 3,
    title: "Surgery",
    description:
      "Precise laparoscopic or open care.\nSafety and comfort come first.",
    icon: "surgery",
  },
  {
    id: "j4",
    step: 4,
    title: "Recovery",
    description:
      "Follow a simple activity plan.\nWound care guidance included.",
    icon: "recovery",
  },
  {
    id: "j5",
    step: 5,
    title: "Follow-up",
    description:
      "Post-op review when you need it.\nLong-term guidance stays available.",
    icon: "followup",
  },
];
