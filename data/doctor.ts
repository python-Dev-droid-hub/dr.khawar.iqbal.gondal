export const doctor = {
  name: "Dr. Khawar Iqbal Gondal",
  shortName: "Dr. Khawar",
  title: "Laparoscopic & General Surgeon",
  credentials: "MBBS, FCPS (Surgery)",
  experienceYears: 15,
  surgeriesCompleted: 1000,
  patientSatisfaction: 98,
  rating: 5.0,
  location: "Gujrat & Mandi Bahauddin, Pakistan",
  whatsapp: "+923266493614",
  whatsappDisplay: "+92 326 6493614",
  email: "appointments@drkhawar.pk",
  tagline: "Precision Surgery. Faster Recovery.",
  subtitle:
    "Minimally invasive laparoscopic care with advanced techniques and compassionate care.",
  bio: "Dr. Khawar Iqbal Gondal is a laparoscopic and general surgeon serving patients across Gujrat and Mandi Bahauddin. He specializes in minimally invasive techniques that reduce hospital stay, minimize scarring, and support faster recovery — with clear communication at every step of care.",
  aboutExtended: [
    "With over 15 years of surgical experience and more than 1,000 successful procedures, Dr. Khawar combines precise technique with a calm, patient-first approach. He previously served as Registrar in Surgery at Services Hospital and Senior Registrar in Surgery at Mayo Hospital, and has worked as Consultant Surgeon at Aziz Bhatti Shaheed Hospital since 2012.",
    "Patients are seen at Shifa Hospital (Gujrat) and Tarar Hospital (Mandi Bahauddin), with flexible weekday and weekend consultation hours. Whether you need a second opinion or are preparing for surgery, you can expect thorough evaluation, honest guidance, and attentive follow-up.",
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
    alt: "Dr. Khawar Iqbal Gondal, Laparoscopic and General Surgeon, in white coat and sunglasses",
  },
  aboutPortrait: {
    src: "/images/doctor-about.png",
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
