export type SuccessStory = {
  id: string;
  title: string;
  condition: string;
  summary: string;
  outcome: string;
};

export const successStories: SuccessStory[] = [
  {
    id: "s1",
    title: "Back to work in a week",
    condition: "Gallbladder stones",
    summary:
      "A Gujrat teacher with recurring biliary pain underwent laparoscopic cholecystectomy after ultrasound confirmation.",
    outcome: "Same-day discharge and return to classroom duties within seven days.",
  },
  {
    id: "s2",
    title: "Hernia repaired without long leave",
    condition: "Inguinal hernia",
    summary:
      "A Mandi Bahauddin shopkeeper delayed care until lifting became painful. Mesh repair was planned around his schedule.",
    outcome: "Comfortable recovery with guided activity and no recurrence at follow-up.",
  },
  {
    id: "s3",
    title: "Swift relief from appendicitis",
    condition: "Acute appendicitis",
    summary:
      "Evening abdominal pain and fever led to urgent evaluation and laparoscopic appendectomy the same night.",
    outcome: "Short hospital stay and a clear wound-care plan for home recovery.",
  },
];
