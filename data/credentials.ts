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

export const aboutSpecialties = [
  "Laparoscopic Surgery",
  "General Surgery",
] as const;

export type AboutAppointment = {
  role: string;
  place: string;
  note?: string;
};

export const aboutAppointments: AboutAppointment[] = [
  {
    role: "Consultant Surgeon",
    place: "Aziz Bhatti Shaheed Hospital",
    note: "Since 2012",
  },
  {
    role: "Ex-Senior Registrar, Surgery",
    place: "Mayo Hospital",
  },
  {
    role: "Ex-Registrar, Surgery",
    place: "Services Hospital",
  },
];

/** Short specialty pills only — hospital roles use `aboutAppointments`. */
export const aboutQualifications = aboutSpecialties;
