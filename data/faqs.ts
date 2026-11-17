export type FAQ = {
  id: string;
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  {
    id: "faq-1",
    question: "Where and when can I consult Dr. Khawar Iqbal Gondal?",
    answer:
      "I see patients Monday through Friday at Shifa Hospital on Jail Road, Gujrat, and on weekends at Tarar Hospital in Mandi Bahauddin starting Saturday at 4 PM and Sunday at 10 AM.",
  },
  {
    id: "faq-2",
    question: "How can I book an appointment for a surgical checkup?",
    answer:
      "You can book your visit easily by calling or messaging +92 326 6493614 or +92 371 6528331 to confirm your consultation slot in either Gujrat or Mandi Bahauddin.",
  },
  {
    id: "faq-3",
    question: "What surgical experience does Dr. Khawar Iqbal Gondal have?",
    answer:
      "I have practiced surgery since 2002 with over 24 years of experience, 1,000+ successful operations, and service as Consultant Surgeon at Aziz Bhatti Shaheed Hospital since 2012.",
  },
  {
    id: "faq-4",
    question: "Is keyhole (laparoscopic) surgery better than open surgery?",
    answer:
      "Whenever your condition allows, I recommend tiny-cut keyhole surgery because it causes much less pain, leaves barely visible marks, and helps you return home and heal faster.",
  },
  {
    id: "faq-5",
    question:
      "Can I visit you just for a second opinion before deciding on surgery?",
    answer:
      "Yes, I welcome patients seeking an honest second opinion. I will review your medical reports carefully, examine you thoroughly, and explain whether surgery is truly needed in simple words.",
  },
  {
    id: "faq-6",
    question: "What should I bring to my first surgical consultation?",
    answer:
      "Please bring your previous prescriptions, blood test reports, ultrasound or scan films, and a list of any daily medicines you take so I can evaluate your condition accurately.",
  },
];
