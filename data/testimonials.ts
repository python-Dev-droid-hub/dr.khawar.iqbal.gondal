export type Testimonial = {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
  /** Service detail pages filter testimonials by these slugs. */
  serviceSlugs?: string[];
  avatar: {
    src: string;
    alt: string;
  };
};

/** Patient portraits provided for Pakistani review faces. */
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Muhammad Tariq",
    location: "Gujrat",
    quote:
      "Dr. Khawar Iqbal Gondal removed my gallstones safely at Shifa Hospital Gujrat. Very calm doctor, small cuts, and fast recovery.",
    rating: 5,
    serviceSlugs: ["laparoscopic-surgery", "gallbladder-surgery"],
    avatar: {
      src: "/images/reviews/ahmed-pk.jpg",
      alt: "Portrait of Muhammad Tariq, patient from Gujrat",
    },
  },
  {
    id: "t2",
    name: "Shahid Mehmood",
    location: "Mandi Bahauddin",
    quote:
      "Best surgeon in Mandi Bahauddin. Dr. Khawar explained my hernia surgery clearly at Tarar Hospital and guided my smooth recovery.",
    rating: 5,
    serviceSlugs: ["laparoscopic-surgery", "abdominal-gi-surgery"],
    avatar: {
      src: "/images/reviews/imran-pk.jpg",
      alt: "Portrait of Shahid Mehmood, patient from Mandi Bahauddin",
    },
  },
  {
    id: "t3",
    name: "Ayesha Bibi",
    location: "Gujrat",
    quote:
      "When my son had sudden appendix pain, Dr. Khawar operated quickly at Shifa Hospital. Caring doctor with great follow-up.",
    rating: 5,
    serviceSlugs: ["laparoscopic-surgery", "abdominal-gi-surgery"],
    avatar: {
      src: "/images/reviews/ayesha-pk.jpg",
      alt: "Portrait of Ayesha Bibi, patient from Gujrat",
    },
  },
  {
    id: "t4",
    name: "Usman Ali",
    location: "Mandi Bahauddin",
    quote:
      "After months of pain, Dr. Khawar treated my piles gently at Tarar Hospital. Honest advice and complete relief without fear.",
    rating: 5,
    serviceSlugs: ["perineal-proctology"],
    avatar: {
      src: "/images/reviews/ahmed-pk.jpg",
      alt: "Portrait of Usman Ali, patient from Mandi Bahauddin",
    },
  },
  {
    id: "t5",
    name: "Rubina Kausar",
    location: "Gujrat",
    quote:
      "Visited Dr. Khawar for a thyroid second opinion in Gujrat. He listened patiently, explained everything simply, and gave honest guidance.",
    rating: 5,
    serviceSlugs: ["head-neck-surgery", "breast-endocrine"],
    avatar: {
      src: "/images/reviews/sana-pk.jpg",
      alt: "Portrait of Rubina Kausar, patient from Gujrat",
    },
  },
];
