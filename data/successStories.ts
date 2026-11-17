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
    title: "Back to Teaching in Seven Days",
    condition: "Gallbladder Stones",
    summary:
      "A schoolteacher from Gujrat suffered from repeated upper stomach pain. After checking his ultrasound, I removed his gallbladder using tiny-cut keyhole surgery.",
    outcome:
      "Went home the same day and returned to teaching comfortably within one week",
  },
  {
    id: "s2",
    title: "Hernia Fixed Without Long Time Off",
    condition: "Groin Hernia",
    summary:
      "A shopkeeper in Mandi Bahauddin put off treatment until lifting caused daily pain. I planned a strong mesh hernia repair around his work hours.",
    outcome:
      "Smooth healing with simple movement guidance and zero pain at his follow-up visit.",
  },
  {
    id: "s3",
    title: "Fast Relief from Appendix Pain",
    condition: "Sudden Appendicitis",
    summary:
      "When evening stomach pain and fever struck, I examined the patient immediately and performed an urgent keyhole appendix removal that same night.",
    outcome:
      "Brief hospital stay with easy home dressing steps for a worry-free recovery.",
  },
];
