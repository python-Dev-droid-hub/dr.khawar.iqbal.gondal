export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  date: string;
  readTime: string;
  /** Root service slug for internal linking + schema about */
  relatedServiceSlug?: string;
  image: {
    src: string;
    alt: string;
    /** HTML title attribute / schema image name */
    title: string;
  };
};

export const posts: BlogPost[] = [
  {
    id: "b1",
    slug: "life-after-gallbladder-removal",
    title: "Life After Gallbladder Removal: What to Expect",
    excerpt:
      "Most patients return to normal eating within weeks. Here is a practical guide to diet, activity, and warning signs after laparoscopic cholecystectomy.",
    content: [
      "Laparoscopic gallbladder removal is one of the most common abdominal operations worldwide. Understanding the recovery timeline helps patients plan work, meals, and follow-up with confidence.",
      "In the first few days, focus on rest, hydration, and light walking. Many people resume desk work within a week. Fatty or heavily spiced meals may cause temporary discomfort — introduce richer foods gradually as advised.",
      "Contact your surgeon if you develop fever, worsening abdominal pain, persistent vomiting, yellowing of the eyes, or increasing wound redness. Routine follow-up confirms healing and answers remaining questions.",
    ],
    category: "Recovery",
    date: "2026-09-12",
    readTime: "5 min read",
    relatedServiceSlug: "gallbladder-surgery",
    image: {
      src: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80",
      alt: "Patient recovering after gallbladder surgery with healthy meal planning",
      title: "Life after gallbladder removal — recovery meal planning",
    },
  },
  {
    id: "b2",
    slug: "when-to-worry-about-a-hernia",
    title: "When to Worry About a Hernia",
    excerpt:
      "A soft bulge in the groin or abdomen is not always urgent — but some symptoms need same-day surgical review.",
    content: [
      "Hernias occur when tissue pushes through a weak spot in the abdominal wall. Early hernias may cause only a mild ache or visible bulge that appears when standing or coughing.",
      "Seek urgent care if the bulge becomes firm, severely painful, or associated with nausea, vomiting, or inability to pass stool or gas. These can signal a trapped hernia requiring emergency treatment.",
      "Elective repair is often recommended once a hernia is diagnosed, because waiting can increase complexity. A consultation clarifies whether laparoscopic or open repair suits your case.",
    ],
    category: "Awareness",
    date: "2026-08-03",
    readTime: "4 min read",
    relatedServiceSlug: "abdominal-gi-surgery",
    image: {
      src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
      alt: "Doctor reviewing hernia symptoms with a patient in clinic",
      title: "When to worry about a hernia — surgical consultation",
    },
  },
  {
    id: "b3",
    slug: "benefits-of-minimally-invasive-surgery",
    title: "Benefits of Minimally Invasive Surgery",
    excerpt:
      "Smaller incisions can mean less pain and a quicker return home — when the clinical situation allows a laparoscopic approach.",
    content: [
      "Minimally invasive surgery uses specialized instruments and a high-definition camera inserted through small ports. Surgeons see magnified anatomy while limiting trauma to surrounding tissue.",
      "Benefits for suitable candidates often include reduced postoperative pain, lower wound infection rates, shorter hospital stays, and earlier mobilization. Not every condition is ideal for laparoscopy — open surgery remains the safer choice in some scenarios.",
      "Discuss your imaging, medical history, and goals with your surgeon so the approach matches both safety and recovery priorities.",
    ],
    category: "Education",
    date: "2026-06-21",
    readTime: "6 min read",
    relatedServiceSlug: "laparoscopic-surgery",
    image: {
      src: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=1200&q=80",
      alt: "Surgical team performing minimally invasive laparoscopic procedure",
      title: "Benefits of minimally invasive laparoscopic surgery",
    },
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 2) {
  return posts.filter((post) => post.slug !== slug).slice(0, limit);
}
