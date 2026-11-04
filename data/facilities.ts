export type Facility = {
  id: string;
  title: string;
  description: string;
  icon: "hd" | "theatre" | "sterile";
};

export const facilities: Facility[] = [
  {
    id: "hd",
    title: "HD Laparoscopy",
    description:
      "High-definition camera guidance for precise visualisation during keyhole procedures.",
    icon: "hd",
  },
  {
    id: "theatre",
    title: "Modern Operation Theatre",
    description:
      "Hospital theatres equipped for elective and urgent general surgical care.",
    icon: "theatre",
  },
  {
    id: "sterile",
    title: "Sterile Care",
    description:
      "Strict aseptic protocols to protect patients before, during, and after surgery.",
    icon: "sterile",
  },
];
