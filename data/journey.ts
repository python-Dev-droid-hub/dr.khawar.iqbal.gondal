export type JourneyStep = {
  id: string;
  step: number;
  title: string;
  description: string;
  icon: "consult" | "diagnosis" | "surgery" | "followup";
};

export const journeySteps: JourneyStep[] = [
  {
    id: "j1",
    step: 1,
    title: "Consultation",
    description:
      "I listen carefully to your symptoms and health history, then explain your options in simple words.",
    icon: "consult",
  },
  {
    id: "j2",
    step: 2,
    title: "Diagnosis",
    description:
      "I review your checkup and test reports with you to confirm the safest treatment plan.",
    icon: "diagnosis",
  },
  {
    id: "j3",
    step: 3,
    title: "Surgery",
    description:
      "I give you clear home rest, diet, and dressing instructions so you heal smoothly and confidently.",
    icon: "surgery",
  },
  {
    id: "j4",
    step: 4,
    title: "Follow-up",
    description:
      "I check your healing progress personally and remain available whenever you need ongoing medical advice.",
    icon: "followup",
  },
];
