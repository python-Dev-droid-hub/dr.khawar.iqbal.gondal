export type ComparisonRow = {
  id: string;
  factor: string;
  laparoscopic: string;
  open: string;
};

export const laparoscopicComparison: ComparisonRow[] = [
  {
    id: "scar",
    factor: "Cut & Scar Size",
    laparoscopic: "Tiny, barely visible marks",
    open: "One larger surgical scar",
  },
  {
    id: "pain",
    factor: "Pain After Surgery",
    laparoscopic: "Mild discomfort, easily managed",
    open: "More soreness during early healing",
  },
  {
    id: "stay",
    factor: "Time in Hospital",
    laparoscopic: "Home the same day or next morning",
    open: "Usually requires a few days in hospital",
  },
  {
    id: "recovery",
    factor: "Back to Normal Life",
    laparoscopic: "Walk and resume routine much sooner",
    open: "Needs longer rest before daily work",
  },
  {
    id: "healing",
    factor: "Wound Healing",
    laparoscopic: "Smaller cuts lower infection risk",
    open: "Larger wound needs extra dressing care",
  },
];
