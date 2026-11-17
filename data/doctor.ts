/** Career start year used to calculate years of experience site-wide. */
export const CAREER_START_YEAR = 2002;

export const doctor = {
  name: "Dr. Khawar Iqbal Gondal",
  shortName: "Dr. Khawar",
  title: "Laparoscopic & General Surgeon",
  credentials: "MBBS, FCPS (Surgery)",
  careerStartYear: CAREER_START_YEAR,
  experienceYears: new Date().getFullYear() - CAREER_START_YEAR,
  surgeriesCompleted: 1000,
  patientSatisfaction: 100,
  rating: 5.0,
  location: "Gujrat & Mandi Bahauddin, Pakistan",
  whatsapp: "+923266493614",
  whatsappDisplay: "+92 326 6493614",
  email: "appointments@drkhawar.pk",
  tagline: "24+ Years of Surgical Precision. Patient-First Recovery.",
  subtitle:
    "Consultant Surgeon Dr. Khawar Iqbal Gondal delivers trusted general and laparoscopic care with over 1,000 successful procedures across Gujrat and Mandi Bahauddin.",
  bio: "Dr. Khawar Iqbal Gondal is a laparoscopic and general surgeon serving patients across Gujrat and Mandi Bahauddin. He specializes in minimally invasive techniques that reduce hospital stay, minimize scarring, and support faster recovery — with clear communication at every step of care.",
  aboutExtended: [
    "I have been helping patients through surgery since 2002. Over the past 24 years, I have performed more than 1,000 successful operations, focusing on safe, careful treatment and a calm, reassuring experience for every patient. Before joining Aziz Bhatti Shaheed Hospital as a Consultant Surgeon in 2012, I served in senior surgical roles at two of Pakistan’s leading hospitals—Services Hospital and Mayo Hospital.",
    "Today, I see patients at Shifa Hospital (Jail Road, Gujrat) on weekdays and Tarar Hospital (Mandi Bahauddin) on weekends. Whether you are visiting me for a second opinion or preparing for surgery, I take the time to examine you thoroughly, explain your options in simple words, and guide you closely until you make a full recovery.",
  ],
  specialties: [
    "Laparoscopic Surgery",
    "General Surgery",
    "Gallbladder Surgery",
    "Hernia Repair",
    "Digestive Tract Surgery",
  ],
  portrait: {
    src: "/images/doctor-cutout.png",
    alt: "Dr. Khawar Iqbal Gondal, Laparoscopic and General Surgeon, in white coat with arms crossed",
  },
  aboutPortrait: {
    src: "/images/doctor-about-frame.jpg",
    alt: "Dr. Khawar Iqbal Gondal, Laparoscopic and General Surgeon",
  },
  hero: {
    organ: {
      src: "/images/organ.png",
      alt: "3D anatomical illustration of the digestive system",
    },
    laparoscope: {
      src: "/images/laparoscope.png",
      alt: "Laparoscopic surgical instrument",
    },
    medicalScene: {
      src: "/images/laparoscopic-digestive.png",
      alt: "Laparoscopic view of the digestive system during minimally invasive surgery",
    },
  },
  signature: "Dr. Khawar Iqbal Gondal",
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
} as const;

export type Doctor = typeof doctor;
