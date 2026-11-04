export type Condition = {
  id: string;
  name: string;
  summary: string;
  icon:
    | "gallstones"
    | "hernia"
    | "appendicitis"
    | "piles"
    | "fissure"
    | "fistula"
    | "thyroid"
    | "abscess";
};

export const conditions: Condition[] = [
  {
    id: "gallstones",
    name: "Gallstones",
    summary: "Treated with laparoscopic cholecystectomy when indicated.",
    icon: "gallstones",
  },
  {
    id: "hernia",
    name: "Hernia",
    summary: "Abdominal wall and groin repairs with durable techniques.",
    icon: "hernia",
  },
  {
    id: "appendicitis",
    name: "Appendicitis",
    summary: "Prompt laparoscopic appendectomy for acute abdominal pain.",
    icon: "appendicitis",
  },
  {
    id: "piles",
    name: "Piles",
    summary: "Laser and open options for symptomatic haemorrhoids.",
    icon: "piles",
  },
  {
    id: "fissure",
    name: "Anal Fissure",
    summary: "Relief for painful fissures after failed medical therapy.",
    icon: "fissure",
  },
  {
    id: "fistula",
    name: "Fistula-in-Ano",
    summary: "Careful fistula surgery focused on healing and continence.",
    icon: "fistula",
  },
  {
    id: "thyroid",
    name: "Thyroid",
    summary: "Surgery for selected thyroid swellings and neck disease.",
    icon: "thyroid",
  },
  {
    id: "abscess",
    name: "Abscess & Cysts",
    summary: "Drainage and excision for infected collections and cysts.",
    icon: "abscess",
  },
];
