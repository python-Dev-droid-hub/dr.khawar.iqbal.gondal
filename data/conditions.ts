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
    summary:
      "I remove painful gallstones safely using tiny-cut keyhole surgery so you heal much faster.",
    icon: "gallstones",
  },
  {
    id: "hernia",
    name: "Hernia",
    summary:
      "I repair groin and stomach hernias using strong, modern methods that prevent future return.",
    icon: "hernia",
  },
  {
    id: "appendicitis",
    name: "Appendicitis",
    summary:
      "I perform quick, safe keyhole appendix removal to relieve sudden lower stomach pain fast.",
    icon: "appendicitis",
  },
  {
    id: "piles",
    name: "Piles",
    summary:
      "I offer gentle laser and standard treatments to give lasting relief from painful piles.",
    icon: "piles",
  },
  {
    id: "fissure",
    name: "Anal Fissure",
    summary:
      "I provide gentle treatment to heal painful anal tears when medicines no longer help.",
    icon: "fissure",
  },
  {
    id: "fistula",
    name: "Fistula-in-Ano",
    summary:
      "I perform careful fistula surgery focused on complete healing while protecting your normal comfort.",
    icon: "fistula",
  },
  {
    id: "thyroid",
    name: "Thyroid",
    summary:
      "I provide safe, precise surgery for neck swellings and thyroid lumps with careful follow-up.",
    icon: "thyroid",
  },
  {
    id: "abscess",
    name: "Abscess & Cysts",
    summary:
      "I safely drain painful skin infections and remove lumps cleanly to stop them returning.",
    icon: "abscess",
  },
];
