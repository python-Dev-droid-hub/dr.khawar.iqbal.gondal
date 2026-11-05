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

/** Portrait photos of South Asian / Pakistani people (Unsplash). */
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
      src: "https://images.unsplash.com/photo-1615109398623-88346a601842?auto=format&fit=crop&w=200&q=80",
      alt: "Portrait of Ahmed Khan, patient from Gujrat",
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
      src: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=200&q=80",
      alt: "Portrait of Sana Malik, patient from Mandi Bahauddin",
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
      src: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?auto=format&fit=crop&w=200&q=80",
      alt: "Portrait of Imran Raza, patient from Gujrat",
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
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      alt: "Portrait of Fatima Noor, patient from Mandi Bahauddin",
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
      src: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=200&q=80",
      alt: "Portrait of Bilal Hussain, patient from Gujrat",
    },
  },
];
