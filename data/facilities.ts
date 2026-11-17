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
      "I use clear, high-definition camera guidance to perform delicate keyhole operations with high precision.",
    icon: "hd",
  },
  {
    id: "theatre",
    title: "Modern Operation Theatre",
    description:
      "I operate in fully equipped hospital theatres designed for both planned and urgent surgical care.",
    icon: "theatre",
  },
  {
    id: "sterile",
    title: "Sterile Care",
    description:
      "I enforce strict cleanliness protocols to protect you safely before, during, and after your surgery.",
    icon: "sterile",
  },
];
