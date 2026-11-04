export type FAQ = {
  id: string;
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  {
    id: "faq-1",
    question: "What is laparoscopic surgery?",
    answer:
      "Laparoscopic (keyhole) surgery uses small incisions and a camera to operate inside the abdomen. Compared with open surgery, it typically means less pain, smaller scars, and a faster return to normal activity for many patients.",
  },
  {
    id: "faq-2",
    question: "How long is recovery after gallbladder surgery?",
    answer:
      "Most patients go home the same day or within 24 hours after laparoscopic cholecystectomy. Light activity often resumes within a few days, with a gradual return to full routine over one to two weeks, depending on your healing and the nature of your work.",
  },
  {
    id: "faq-3",
    question: "When should I see a surgeon for a hernia?",
    answer:
      "Book a consultation if you notice a bulge, discomfort, or pain in the groin or abdomen — especially if symptoms worsen with standing, coughing, or lifting. Early evaluation helps prevent complications such as incarceration.",
  },
  {
    id: "faq-4",
    question: "Do you offer same-day discharge?",
    answer:
      "Yes, for selected laparoscopic procedures and medically suitable patients. Dr. Khawar will confirm whether same-day discharge is appropriate after reviewing your health history, procedure type, and recovery support at home.",
  },
  {
    id: "faq-5",
    question: "How do I book an appointment?",
    answer:
      "You can book online through the Book Appointment page, call either hospital number, or message on WhatsApp at +92 326 6493614. Share your preferred location (Gujrat or Mandi Bahauddin) and a brief note about your concern.",
  },
  {
    id: "faq-6",
    question: "What should I bring to my first consultation?",
    answer:
      "Please bring previous reports, ultrasound or CT scans, a current medication list, and any referral notes. Wearing loose, comfortable clothing helps if a physical examination is needed.",
  },
];
