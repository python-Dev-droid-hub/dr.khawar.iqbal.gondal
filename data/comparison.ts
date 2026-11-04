export type ComparisonRow = {
  id: string;
  factor: string;
  laparoscopic: string;
  open: string;
};

export const laparoscopicComparison: ComparisonRow[] = [
  {
    id: "scar",
    factor: "Scar size",
    laparoscopic: "Tiny keyhole scars",
    open: "Longer incision scar",
  },
  {
    id: "pain",
    factor: "Post-op pain",
    laparoscopic: "Usually less pain",
    open: "Often more discomfort",
  },
  {
    id: "stay",
    factor: "Hospital stay",
    laparoscopic: "Same day or 1 night*",
    open: "Often longer stay",
  },
  {
    id: "recovery",
    factor: "Recovery time",
    laparoscopic: "Faster return to routine",
    open: "Slower mobilization",
  },
  {
    id: "infection",
    factor: "Infection risk",
    laparoscopic: "Lower wound risk",
    open: "Higher wound exposure",
  },
];
