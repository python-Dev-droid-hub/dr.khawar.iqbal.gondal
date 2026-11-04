export type Credential = {
  id: string;
  label: string;
  detail: string;
};

export const trustCredentials: Credential[] = [
  {
    id: "c1",
    label: "FCPS (Surgery)",
    detail: "Board-certified surgical training",
  },
  {
    id: "c2",
    label: "1000+ Procedures",
    detail: "Proven operative experience",
  },
  {
    id: "c3",
    label: "Dual Hospital Practice",
    detail: "Gujrat & Mandi Bahauddin",
  },
  {
    id: "c4",
    label: "Minimally Invasive Focus",
    detail: "Laparoscopic-first approach",
  },
];

export const aboutQualifications = [
  "Laparoscopic Surgery",
  "General Surgery",
  "Advanced Endoscopy",
] as const;
