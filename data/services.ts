export type Service = {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  description: string;
  benefits: string[];
  icon:
    | "laparoscopic"
    | "gallbladder"
    | "hernia"
    | "appendix"
    | "digestive"
    | "general";
  featured?: boolean;
  image: {
    src: string;
    alt: string;
  };
};

export const services: Service[] = [
  {
    id: "laparoscopic",
    slug: "laparoscopic-surgery",
    title: "Laparoscopic Surgery",
    shortTitle: "Laparoscopic",
    summary:
      "Keyhole techniques for precise treatment with less pain, smaller scars, and faster recovery.",
    description:
      "Laparoscopic surgery uses small incisions and a camera-guided approach to treat abdominal conditions with minimal tissue trauma. Most patients experience less postoperative pain, reduced infection risk, and a quicker return to normal activity compared with open surgery.",
    benefits: [
      "Smaller incisions and minimal scarring",
      "Shorter hospital stay for many procedures",
      "Faster recovery and earlier mobilization",
      "Lower risk of wound complications",
    ],
    icon: "laparoscopic",
    featured: true,
    image: {
      src: "/images/services/laparoscopic.png",
      alt: "3D anatomical illustration of the digestive system for laparoscopic surgery",
    },
  },
  {
    id: "gallbladder",
    slug: "gallbladder-surgery",
    title: "Gallbladder Surgery",
    shortTitle: "Gallbladder",
    summary:
      "Laparoscopic cholecystectomy for gallstones and gallbladder disease with same-day discharge in suitable cases.",
    description:
      "Gallbladder removal through laparoscopy is one of the most common and effective treatments for symptomatic gallstones. Dr. Khawar evaluates symptoms carefully and guides patients through preparation, surgery, and aftercare so recovery stays predictable and comfortable.",
    benefits: [
      "Relief from biliary colic and related pain",
      "Minimally invasive removal of the gallbladder",
      "Same-day discharge when clinically appropriate",
      "Clear dietary and recovery guidance",
    ],
    icon: "gallbladder",
    image: {
      src: "/images/services/gallbladder.png",
      alt: "3D anatomical illustration of the gallbladder and bile ducts",
    },
  },
  {
    id: "hernia",
    slug: "hernia-repair",
    title: "Hernia Repair",
    shortTitle: "Hernia",
    summary:
      "Inguinal, umbilical, and ventral hernia repair with mesh techniques tailored to each patient.",
    description:
      "Hernias do not resolve on their own and can worsen over time. Dr. Khawar offers laparoscopic and open repair options based on hernia type, size, and patient lifestyle — aiming for durable repair and a safe return to work and activity.",
    benefits: [
      "Assessment of inguinal, umbilical, and ventral hernias",
      "Mesh reinforcement when indicated",
      "Laparoscopic options for suitable candidates",
      "Structured post-op activity plan",
    ],
    icon: "hernia",
    image: {
      src: "/images/services/hernia.png",
      alt: "3D anatomical illustration of an abdominal hernia",
    },
  },
  {
    id: "appendix",
    slug: "appendix-surgery",
    title: "Appendix Surgery",
    shortTitle: "Appendix",
    summary:
      "Prompt laparoscopic appendectomy for appendicitis with careful monitoring and recovery support.",
    description:
      "Acute appendicitis requires timely surgical care. Laparoscopic appendectomy allows precise removal of the appendix through small ports, often with less postoperative discomfort and a shorter recovery than traditional open surgery.",
    benefits: [
      "Urgent evaluation for suspected appendicitis",
      "Minimally invasive appendectomy",
      "Reduced wound pain for many patients",
      "Follow-up to ensure smooth recovery",
    ],
    icon: "appendix",
    image: {
      src: "/images/services/appendix.png",
      alt: "3D anatomical illustration of the appendix and surrounding intestine",
    },
  },
  {
    id: "digestive",
    slug: "digestive-tract-surgery",
    title: "Digestive Tract Surgery",
    shortTitle: "Digestive Tract",
    summary:
      "Surgical management of selected gastrointestinal conditions with a focus on safety and function.",
    description:
      "From diagnostic evaluation to operative care, Dr. Khawar manages selected digestive tract conditions that require surgical intervention. Treatment plans prioritize safety, symptom relief, and preserving digestive function whenever possible.",
    benefits: [
      "Thorough clinical and imaging review",
      "Individually planned surgical approach",
      "Coordination with hospital teams",
      "Ongoing follow-up after discharge",
    ],
    icon: "digestive",
    image: {
      src: "/images/services/digestive.png",
      alt: "3D anatomical illustration of the digestive tract",
    },
  },
  {
    id: "general",
    slug: "general-surgery",
    title: "General Surgery",
    shortTitle: "General",
    summary:
      "Broad surgical care for lumps, cysts, abscesses, and other conditions requiring operative treatment.",
    description:
      "Beyond laparoscopic specialties, Dr. Khawar provides general surgical care for common conditions such as soft-tissue swellings, infected cysts, and selected emergency presentations. Each plan starts with a clear diagnosis and an honest discussion of options.",
    benefits: [
      "Evaluation of lumps, cysts, and abscesses",
      "Day-care procedures when appropriate",
      "Emergency surgical assessment when needed",
      "Practical aftercare instructions",
    ],
    icon: "general",
    image: {
      src: "/images/services/general.png",
      alt: "3D anatomical illustration of soft-tissue conditions treated in general surgery",
    },
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
