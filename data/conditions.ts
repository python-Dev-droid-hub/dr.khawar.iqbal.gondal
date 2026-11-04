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
    summary: "Painful stones treated with laparoscopic gallbladder removal.",
    icon: "gallstones",
  },
  {
    id: "hernia",
    name: "Hernia",
    summary: "Groin and abdominal wall repairs with durable mesh options.",
    icon: "hernia",
  },
  {
    id: "appendicitis",
    name: "Appendicitis",
    summary: "Prompt keyhole appendectomy for acute abdominal pain.",
    icon: "appendicitis",
  },
  {
    id: "piles",
    name: "Piles",
    summary: "Surgical care for symptomatic haemorrhoids when needed.",
    icon: "piles",
  },
  {
    id: "fissure",
    name: "Fissure",
    summary: "Relief for painful anal fissures after failed medical therapy.",
    icon: "fissure",
  },
  {
    id: "fistula",
    name: "Fistula",
    summary: "Careful fistula surgery focused on healing and continence.",
    icon: "fistula",
  },
  {
    id: "thyroid",
    name: "Thyroid",
    summary: "Evaluation and surgery for selected thyroid swellings.",
    icon: "thyroid",
  },
  {
    id: "abscess",
    name: "Abscess",
    summary: "Drainage and care for infected collections and cysts.",
    icon: "abscess",
  },
];
