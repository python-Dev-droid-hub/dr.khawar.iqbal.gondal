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

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Ahmed Khan",
    location: "Gujrat",
    quote:
      "Excellent doctor — professional, clear, and caring throughout my gallbladder surgery. Recovery was smoother than I expected.",
    rating: 5,
    serviceSlugs: ["laparoscopic-surgery"],
    avatar: {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      alt: "Portrait of Ahmed Khan",
    },
  },
  {
    id: "t2",
    name: "Sana Malik",
    location: "Mandi Bahauddin",
    quote:
      "Dr. Khawar explained every step of my hernia repair. The laparoscopic approach meant I was back on my feet quickly.",
    rating: 5,
    serviceSlugs: ["laparoscopic-surgery", "abdominal-gi-surgery"],
    avatar: {
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      alt: "Portrait of Sana Malik",
    },
  },
  {
    id: "t3",
    name: "Imran Raza",
    location: "Gujrat",
    quote:
      "From consultation to follow-up, the care felt organized and reassuring. Highly recommended for laparoscopic surgery.",
    rating: 5,
    serviceSlugs: ["laparoscopic-surgery"],
    avatar: {
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
      alt: "Portrait of Imran Raza",
    },
  },
  {
    id: "t4",
    name: "Fatima Noor",
    location: "Mandi Bahauddin",
    quote:
      "Kind bedside manner and excellent surgical skill. Appointments were easy to arrange at Tarar Hospital on the weekend.",
    rating: 5,
    avatar: {
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
      alt: "Portrait of Fatima Noor",
    },
  },
  {
    id: "t5",
    name: "Bilal Hussain",
    location: "Gujrat",
    quote:
      "I was anxious about surgery, but Dr. Khawar answered every question clearly. Same-day discharge after my procedure was a relief.",
    rating: 5,
    avatar: {
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      alt: "Portrait of Bilal Hussain",
    },
  },
];
