import {
  overviewWordCount,
  serviceOverviews,
  type OverviewSection,
} from "@/data/serviceOverviews";

export type { OverviewSection };
export { overviewWordCount };

export type ServiceQuickFacts = {
  procedureTime: string;
  hospitalStay: string;
  returnToWork: string;
  anesthesia: string;
  incisions: string;
};

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  icon: string;
  image: string;
  quickFacts: ServiceQuickFacts;
  /** Long overview (~1000 words) with subheadings for the detail page. */
  overviewSections: OverviewSection[];
  symptoms: { title: string; description?: string; icon: string }[];
  urgentNote: string;
  causes: string[];
  riskFactors: string[];
  diagnosis: { title: string; description: string }[];
  surgeryNeededWhen: string[];
  nonSurgicalOptions: string[];
  procedureSteps: { title: string; description: string }[];
  comparison: { label: string; laparoscopic: string; open: string }[];
  benefits: { title: string; description: string; icon: string }[];
  risks: { title: string; description: string }[];
  notCandidateFor: string[];
  preparation: { title: string; items: string[] }[];
  dayOfSurgery: { title: string; description: string }[];
  recovery: {
    period: string;
    summary: string;
    activity: string;
    diet: string;
    care: string;
  }[];
  dos: string[];
  donts: string[];
  warningSigns: string[];
  diet: { favor: string[]; avoid: string[]; lifestyle: string[] };
  costFactors: string[];
  whyChoose: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  related: string[];
  seo: { title: string; description: string; keywords: string[] };
};

const emptyQuickFacts = (): ServiceQuickFacts => ({
  procedureTime: "",
  hospitalStay: "",
  returnToWork: "",
  anesthesia: "",
  incisions: "",
});

const emptyDiet = (): Service["diet"] => ({
  favor: [],
  avoid: [],
  lifestyle: [],
});

/** Shared empty content shell — fill per service over time. */
function baseService(
  partial: Pick<
    Service,
    "slug" | "title" | "shortTitle" | "tagline" | "icon" | "image" | "seo"
  > &
    Partial<Service>,
): Service {
  return {
    quickFacts: emptyQuickFacts(),
    overviewSections: [],
    symptoms: [],
    urgentNote: "",
    causes: [],
    riskFactors: [],
    diagnosis: [],
    surgeryNeededWhen: [],
    nonSurgicalOptions: [],
    procedureSteps: [],
    comparison: [],
    benefits: [],
    risks: [],
    notCandidateFor: [],
    preparation: [],
    dayOfSurgery: [],
    recovery: [],
    dos: [],
    donts: [],
    warningSigns: [],
    diet: emptyDiet(),
    costFactors: [],
    whyChoose: [],
    faqs: [],
    related: [],
    ...partial,
  };
}

export const services: Service[] = [
  baseService({
    slug: "laparoscopic-surgery",
    title: "Laparoscopic Surgery",
    shortTitle: "Laparoscopic",
    tagline:
      "Keyhole procedures for gallbladder, appendix, hysterectomy, and diagnostic laparoscopy with faster recovery.",
    icon: "laparoscopic",
    image: "/images/services/laparoscopic.png",
    overviewSections: serviceOverviews["laparoscopic-surgery"],
    benefits: [
      {
        title: "Smaller incisions and minimal scarring",
        description: "",
        icon: "scalpel",
      },
      {
        title: "Shorter hospital stay for many procedures",
        description: "",
        icon: "bed",
      },
      {
        title: "Faster recovery and earlier mobilization",
        description: "",
        icon: "activity",
      },
      {
        title: "Lower risk of wound complications",
        description: "",
        icon: "shield",
      },
    ],
    related: [
      "abdominal-gi-surgery",
      "general-day-care-surgery",
      "perineal-proctology",
    ],
    seo: {
      title: "Laparoscopic Surgery in Gujrat & Mandi Bahauddin",
      description:
        "Keyhole procedures for gallbladder, appendix, hysterectomy, and diagnostic laparoscopy with faster recovery. Consult Dr. Khawar Iqbal Gondal in Gujrat or Mandi Bahauddin.",
      keywords: [
        "Laparoscopic Surgery",
        "Laparoscopic Gujrat",
        "Laparoscopic Mandi Bahauddin",
        "Lap Cholecystectomy",
        "Lap Appendectomy",
        "Diagnostic Laparoscopy",
      ],
    },
  }),
  {
    slug: "gallbladder-surgery",
    title: "Gallbladder Surgery (Laparoscopic Cholecystectomy)",
    shortTitle: "Gallbladder Surgery",
    tagline:
      "Keyhole removal of the gallbladder for symptomatic gallstones, with clear counselling and follow-up in Gujrat and Mandi Bahauddin.",
    icon: "laparoscopic",
    image: "/images/services/laparoscopic.png",
    quickFacts: {
      procedureTime: "Typically 45–90 minutes", // [VERIFY WITH DOCTOR]
      hospitalStay: "Usually same day or 1 night", // [VERIFY WITH DOCTOR]
      returnToWork: "Often 1–2 weeks for desk work", // [VERIFY WITH DOCTOR]
      anesthesia: "General anaesthesia (you are fully asleep)",
      incisions: "Usually 3–4 small keyhole cuts", // [VERIFY WITH DOCTOR]
    },
    overviewSections: serviceOverviews["gallbladder-surgery"],
    symptoms: [
      {
        title: "Pain under the right ribs",
        description:
          "A steady or cramping ache in the upper right abdomen, sometimes spreading to the back or right shoulder tip.",
        icon: "alert",
      },
      {
        title: "Pain after fatty meals",
        description:
          "Discomfort that starts after rich, oily, or heavy food and may last from minutes to a few hours.",
        icon: "utensils",
      },
      {
        title: "Nausea or vomiting",
        description:
          "Feeling sick with or without vomiting during a pain attack, sometimes with bloating.",
        icon: "thermometer",
      },
      {
        title: "Indigestion and fullness",
        description:
          "A heavy or gassy feeling in the upper abdomen that does not settle with simple remedies.",
        icon: "activity",
      },
      {
        title: "Fever with abdominal pain",
        description:
          "Raised temperature with right-upper pain may suggest inflammation or infection and needs prompt review.",
        icon: "thermometer",
      },
      {
        title: "Jaundice (yellow eyes or skin)",
        description:
          "Yellowing can mean a stone has affected the bile duct and needs urgent assessment.",
        icon: "eye",
      },
      {
        title: "Dark urine or pale stools",
        description:
          "These changes, especially with jaundice or severe pain, should not be ignored.",
        icon: "droplet",
      },
      {
        title: "Repeated night attacks",
        description:
          "Episodes that wake you from sleep or keep returning over weeks often lead patients to seek surgical advice.",
        icon: "clock",
      },
    ],
    urgentNote:
      "Seek urgent care for severe constant pain, fever with chills, persistent vomiting, jaundice, confusion, or pain that does not settle with rest. These can signal infection, blockage, or inflammation that needs same-day assessment.",
    causes: [
      "Gallstones forming from cholesterol or bile pigments in the gallbladder",
      "Temporary blockage of the gallbladder outlet by a stone during a meal",
      "Inflammation of the gallbladder wall (cholecystitis)",
      "Sludge (thick bile) that can behave like small stones in some patients",
      "Bile duct irritation when a stone passes or lodges nearby",
    ],
    riskFactors: [
      "Female sex and middle age (gallstones are more common in these groups)",
      "Overweight or rapid weight loss",
      "Family history of gallstones",
      "Pregnancy or multiple pregnancies",
      "High-fat diet and long periods of fasting",
      "Certain blood or liver conditions that change bile composition",
    ],
    diagnosis: [
      {
        title: "Clinical examination",
        description:
          "We listen to your history, check the abdomen, and look for signs of inflammation, jaundice, or other causes of upper abdominal pain.",
      },
      {
        title: "Abdominal ultrasound",
        description:
          "Ultrasound is usually the first test to see stones in the gallbladder and to assess wall thickness or fluid around the organ.",
      },
      {
        title: "Blood tests",
        description:
          "Blood work can show infection, liver enzyme changes, or jaundice that may mean a stone has affected the bile duct.",
      },
      {
        title: "Further imaging when needed",
        description:
          "If the bile duct may be involved, CT, MRCP (special MRI of the bile ducts), or related tests may be advised before surgery.",
      },
    ],
    surgeryNeededWhen: [
      "Repeated biliary colic (pain attacks clearly linked to gallstones)",
      "Acute cholecystitis (inflamed gallbladder) after medical stabilisation",
      "Gallstones with pancreatitis (pancreas inflammation) once the acute phase settles",
      "Gallbladder polyps or other findings where removal is advised after counselling",
      "Complications such as infection or concern for bile duct involvement after specialist review",
    ],
    nonSurgicalOptions: [
      "Watchful waiting for silent stones found by chance with no symptoms",
      "Short-term pain relief and dietary guidance during mild attacks",
      "Antibiotics and hospital care for selected acute inflammation before planned surgery",
      "Medicines that dissolve stones are rarely suitable and work slowly in only a few cases",
      "Endoscopic bile-duct procedures (ERCP) when a stone is in the duct — this treats the duct, not the gallbladder itself",
    ],
    procedureSteps: [
      {
        title: "Consent and final checks",
        description:
          "On the day of surgery we confirm your identity, allergies, fasting status, and the operation plan. You can ask last questions about pain control, scars, and recovery. Consent is signed only after you understand the benefits, alternatives, and possible risks, including conversion to open surgery if keyhole access is unsafe.",
      },
      {
        title: "Anaesthesia",
        description:
          "An anaesthetist gives general anaesthesia so you are fully asleep and comfortable. Monitoring of heart rate, breathing, and blood pressure continues throughout. A breathing tube is usually placed for safety during keyhole abdominal surgery and removed as you wake in the recovery area.",
      },
      {
        title: "Small cuts and camera view",
        description:
          "Usually three or four small cuts are made on the abdomen. Carbon dioxide gas gently lifts the abdominal wall so instruments and a camera can move safely. The magnified view helps identify the gallbladder, liver edge, and the important ducts that must be protected.", // [VERIFY WITH DOCTOR] incision count
      },
      {
        title: "Separating the gallbladder safely",
        description:
          "The gallbladder is carefully freed from the liver bed. The cystic duct and cystic artery (the tube and vessel that supply the gallbladder) are identified and secured before the organ is detached. Clear anatomy is the priority; if the view is unclear, the plan may change for safety.",
      },
      {
        title: "Removal and wound closure",
        description:
          "The gallbladder is placed in a retrieval bag and removed through one of the small cuts. The gas is released, and the small wounds are closed with stitches or adhesive strips. A dressing is applied, and you are transferred to the recovery room for close observation.",
      },
      {
        title: "Recovery room and discharge plan",
        description:
          "As you wake, the team checks pain, nausea, breathing, and wound sites. Most patients sit up and take sips of water when ready. Before going home or to the ward, you receive written advice on diet, medicines, wound care, and when to return for follow-up at Gujrat or Mandi Bahauddin.", // [VERIFY WITH DOCTOR] same-day discharge criteria
      },
    ],
    comparison: [
      {
        label: "Incision size",
        laparoscopic: "Several small keyhole cuts",
        open: "One larger cut under the right ribs",
      },
      {
        label: "Hospital stay",
        laparoscopic: "Often shorter when recovery is smooth", // [VERIFY WITH DOCTOR]
        open: "Usually longer because of a bigger wound",
      },
      {
        label: "Early pain",
        laparoscopic: "Often less wound pain for many patients",
        open: "Typically more discomfort from the larger cut",
      },
      {
        label: "Return to light activity",
        laparoscopic: "Often earlier for suitable cases", // [VERIFY WITH DOCTOR]
        open: "Usually slower while the wound heals",
      },
      {
        label: "Scarring",
        laparoscopic: "Small scars that usually fade over time",
        open: "A longer scar under the ribcage",
      },
      {
        label: "When chosen",
        laparoscopic: "Preferred for most elective stone cases when safe",
        open: "Used if keyhole surgery is unsafe or anatomy is difficult",
      },
    ],
    benefits: [
      {
        title: "Treats the source of stone attacks",
        description:
          "Removing the gallbladder usually stops repeated biliary colic caused by stones forming and lodging in that organ.",
        icon: "check",
      },
      {
        title: "Smaller wounds for most patients",
        description:
          "Keyhole cuts typically mean less tissue trauma than a large open incision when the laparoscopic approach is suitable.",
        icon: "scalpel",
      },
      {
        title: "Earlier mobilisation",
        description:
          "Many patients walk the same day and resume light daily tasks sooner than after open gallbladder surgery.", // [VERIFY WITH DOCTOR]
        icon: "activity",
      },
      {
        title: "Shorter stay for uncomplicated cases",
        description:
          "When recovery is smooth, hospital stay is often brief, which helps patients travelling from nearby towns.", // [VERIFY WITH DOCTOR]
        icon: "bed",
      },
      {
        title: "Clear camera-guided dissection",
        description:
          "A magnified view supports careful identification of the duct and artery before the gallbladder is removed.",
        icon: "eye",
      },
      {
        title: "Structured follow-up nearby",
        description:
          "Review can be planned at Shifa Hospital, Jail Road Gujrat, or Tarar Hospital, Mandi Bahauddin, for convenience.",
        icon: "hospital",
      },
    ],
    risks: [
      {
        title: "Bleeding",
        description:
          "Bleeding can occur from the liver bed or small vessels. We reduce this by careful dissection, securing vessels before division, and checking the field before closure. Significant bleeding is uncommon but may need further treatment.",
      },
      {
        title: "Infection",
        description:
          "Wound or deep infection can happen after any operation. Risk is lowered with sterile technique, appropriate antibiotics when indicated, and clear wound-care advice. Report fever, spreading redness, or discharge early.",
      },
      {
        title: "Bile leak",
        description:
          "A small amount of bile can leak from the liver bed or a duct. Most minor leaks settle with observation or additional procedures. Careful identification of anatomy before clipping the cystic duct helps reduce this risk.",
      },
      {
        title: "Injury to nearby structures",
        description:
          "The bile duct, intestine, or blood vessels lie close to the gallbladder. Injury is uncommon but serious. We reduce risk by staying in clear tissue planes, converting to open surgery if the view is unsafe, and asking for further imaging when duct stones are suspected.",
      },
      {
        title: "Conversion to open surgery",
        description:
          "If inflammation, scarring, or unclear anatomy makes keyhole surgery unsafe, the operation may be completed through a larger cut. This is a safety decision, not a failure, and will be explained afterward.",
      },
      {
        title: "Anaesthesia and general surgical risks",
        description:
          "Anaesthesia carries its own risks, discussed by the anaesthetist. Clots in the legs, chest infection, or shoulder-tip pain from residual gas can occur; early walking and breathing exercises usually help.",
      },
    ],
    notCandidateFor: [
      "Patients who cannot safely receive general anaesthesia after medical review",
      "Uncontrolled medical conditions that make elective surgery unsafe until stabilised",
      "Some late pregnancies where timing must be planned with obstetric advice",
      "Selected cases with extensive previous upper abdominal surgery or unclear anatomy — approach is decided individually",
      "Patients who decline surgery after understanding benefits and alternatives",
    ],
    preparation: [
      {
        title: "Tests and reports",
        items: [
          "Bring ultrasound and any CT/MRI or blood reports",
          "Share a list of current medicines and allergies",
          "Complete any pre-anaesthesia checks advised by the hospital",
        ],
      },
      {
        title: "Fasting and medicines",
        items: [
          "Follow fasting instructions for food and drink exactly", // [VERIFY WITH DOCTOR] exact fasting hours
          "Ask which blood-thinning or diabetes medicines to pause",
          "Take only the medicines your team says are allowed with a sip of water",
        ],
      },
      {
        title: "What to bring",
        items: [
          "CNIC, hospital file, and emergency contact numbers",
          "Comfortable clothes and basic toiletries if an overnight stay is planned",
          "A family member who can accompany you home after discharge",
        ],
      },
      {
        title: "Home planning",
        items: [
          "Arrange help for shopping and heavier chores for the first week", // [VERIFY WITH DOCTOR]
          "Prepare simple low-fat meals for the first few days",
          "Plan transport to Shifa Hospital Gujrat or Tarar Hospital Mandi Bahauddin for follow-up",
        ],
      },
    ],
    dayOfSurgery: [
      {
        title: "Arrival",
        description:
          "You check in at the hospital, complete paperwork, and change into a gown. The nursing team confirms fasting status and prepares the operative site.",
      },
      {
        title: "Anaesthesia",
        description:
          "In the operating theatre the anaesthetist starts monitoring and puts you to sleep with general anaesthesia before surgery begins.",
      },
      {
        title: "Surgery",
        description:
          "The gallbladder is removed by the keyhole method when safe. If conditions require it, the approach may be converted to open surgery for your protection.",
      },
      {
        title: "Recovery room",
        description:
          "You wake under observation while pain, nausea, oxygen levels, and wounds are checked. Family updates are shared once you are stable.",
      },
      {
        title: "Discharge or ward stay",
        description:
          "When drinking fluids, walking short distances, and pain control are acceptable, same-day discharge or a short ward stay is planned with written advice.", // [VERIFY WITH DOCTOR]
      },
    ],
    recovery: [
      {
        period: "Day 1",
        summary:
          "Rest, short walks, and light fluids or soft food as advised. Mild shoulder or wound discomfort is common.",
        activity:
          "Walk a little every few hours. Avoid lifting more than a light bag.", // [VERIFY WITH DOCTOR]
        diet: "Clear fluids progressing to soft, low-fat food if tolerated.",
        care: "Keep dressings clean and dry. Take prescribed pain medicine as directed.",
      },
      {
        period: "Week 1",
        summary:
          "Energy usually returns gradually. Many people manage light home activity with paced rest.",
        activity:
          "Increase walking. Avoid heavy lifting, strenuous exercise, and driving until you feel safe and are off strong painkillers.", // [VERIFY WITH DOCTOR]
        diet: "Small low-fat meals; note any foods that cause loose stools or bloating.",
        care: "Watch wounds for redness or discharge. Attend the planned clinic review if scheduled.",
      },
      {
        period: "Weeks 2–4",
        summary:
          "Most desk-based work is often possible in this window if recovery is uncomplicated.", // [VERIFY WITH DOCTOR]
        activity:
          "Return to routine walking. Ask before restarting gym, farming, or heavy labour.",
        diet: "Gradually reintroduce a wider diet; keep very oily meals limited at first.",
        care: "Scars may itch as they heal. Use sunscreen on scars once healed if exposed.",
      },
      {
        period: "Weeks 4–6",
        summary:
          "Many patients feel close to normal routine, though healing continues under the surface.", // [VERIFY WITH DOCTOR]
        activity:
          "Discuss return to full physical work or sport at follow-up if you still have limits.",
        diet: "A balanced diet is usually fine; lasting fat intolerance is uncommon but worth mentioning if present.",
        care: "Final wound check as advised. Contact the clinic if new pain, fever, or jaundice appears.",
      },
    ],
    dos: [
      "Walk regularly to reduce clot risk and ease shoulder gas pain",
      "Take pain relief and other medicines exactly as prescribed",
      "Keep wounds clean and follow dressing instructions",
      "Eat smaller, lower-fat meals in the first days",
      "Attend follow-up at Gujrat or Mandi Bahauddin as planned",
    ],
    donts: [
      "Do not lift heavy weights or do intense exercise until cleared", // [VERIFY WITH DOCTOR]
      "Do not drive while taking strong painkillers or if you cannot brake comfortably",
      "Do not ignore fever, jaundice, or worsening abdominal pain",
      "Do not soak wounds in a pool or tub until your team says it is safe",
      "Do not resume blood thinners until the surgeon confirms the timing",
    ],
    warningSigns: [
      "Fever, chills, or feeling very unwell",
      "Increasing abdominal pain not eased by prescribed medicine",
      "Yellow eyes or skin, dark urine, or pale stools",
      "Persistent vomiting or inability to keep fluids down",
      "Wound redness, swelling, foul discharge, or opening of the cut",
      "Shortness of breath, chest pain, or calf swelling",
    ],
    diet: {
      favor: [
        "Soft foods such as yoghurt, khichdi, boiled vegetables, and lean protein",
        "Small, frequent meals rather than one large heavy meal",
        "Adequate water through the day unless advised otherwise",
        "Fruit and fibre once you tolerate them, to support regular bowels",
      ],
      avoid: [
        "Very oily, deep-fried, and spicy restaurant meals in the first days",
        "Large portions of ghee-rich or creamy dishes while digestion settles",
        "Skipping meals then eating a very fatty feast",
        "Alcohol until your surgeon and overall health plan allow it",
      ],
      lifestyle: [
        "Return to a balanced long-term diet; a gallbladder is not required for normal living",
        "Maintain a healthy weight with walking and gradual activity",
        "Note personal food triggers and share them at follow-up if they persist",
        "Use clinic visits at Shifa Hospital Gujrat or Tarar Hospital Mandi Bahauddin for ongoing questions",
      ],
    },
    costFactors: [
      "Choice of hospital and room type (general ward, semi-private, or private)",
      "Anaesthesia and operating theatre charges",
      "Pre-operative blood tests, ultrasound, and any extra imaging",
      "Complexity of the case (inflammation, previous surgery, or bile-duct issues)",
      "Length of stay and medicines used during admission",
      "Whether additional procedures such as ERCP are required",
      "Travel and attendant costs for families coming from nearby towns",
    ],
    whyChoose: [
      {
        title: "Clear explanation before you decide",
        description:
          "You hear why surgery is advised, what alternatives exist, and what recovery usually looks like — without pressure or exaggerated promises.",
      },
      {
        title: "Safety-first operative judgement",
        description:
          "Keyhole surgery is preferred when suitable; conversion to open surgery is used when it is the safer path for you.",
      },
      {
        title: "Follow-up in two cities",
        description:
          "Review can be arranged at Shifa Hospital, Jail Road Gujrat, or Tarar Hospital, Mandi Bahauddin, which helps patients travelling from nearby areas.",
      },
      {
        title: "Practical Pakistan-focused care",
        description:
          "Counselling covers work leave, diet at home, and how hospital and room choices affect cost, so families can plan realistically.",
      },
    ],
    faqs: [
      {
        question: "How much pain should I expect after gallbladder surgery?",
        answer:
          "Most patients describe wound discomfort and sometimes shoulder-tip pain from the gas used in keyhole surgery. Pain is usually manageable with prescribed medicine and short walks. It is not realistic to promise a painless recovery. If pain worsens suddenly, or comes with fever or vomiting, contact the clinic or hospital promptly rather than waiting for a routine visit.",
      },
      {
        question: "Will I have large scars?",
        answer:
          "Laparoscopic cholecystectomy usually leaves a few small scars on the abdomen that fade over months. An open operation leaves a longer scar under the right ribs and is used when keyhole surgery is not safe. Scar appearance varies with skin type and healing. We discuss expected scar locations during consent so you know what is typical for your planned approach.",
      },
      {
        question: "What can I eat after surgery?",
        answer:
          "Many patients start with fluids and soft, low-fat foods, then widen the diet over days to weeks. Very oily meals may cause loose stools or bloating at first. You do not need a permanent special diet forever, but gradual reintroduction helps. Personal advice is given at discharge and can be reviewed at Shifa Hospital Gujrat or Tarar Hospital Mandi Bahauddin.",
      },
      {
        question: "How much work leave will I need?",
        answer:
          "Desk work is often possible within about one to two weeks if recovery is smooth, while heavy labour usually needs longer. Exact timing depends on your job, pain control, and whether the operation stayed laparoscopic. We provide a realistic range rather than a guarantee. Bring your work requirements to the consultation so leave planning can be tailored.", // [VERIFY WITH DOCTOR]
      },
      {
        question: "When can I drive again?",
        answer:
          "Drive only when you can wear a seatbelt comfortably, make an emergency stop without hesitation, and are no longer taking strong painkillers that slow reaction time. For many people this is after several days to a couple of weeks, but it varies. If unsure, wait and ask at follow-up. Safety on the road matters more than returning a day earlier.", // [VERIFY WITH DOCTOR]
      },
      {
        question: "How much does gallbladder surgery cost?",
        answer:
          "There is no single fixed price on this website because cost depends on the hospital, room type, anaesthesia, tests, length of stay, and case complexity. Patients travelling from nearby towns should also budget for attendant stay and follow-up visits. After assessing your reports we can discuss an estimate for Shifa Hospital Gujrat or Tarar Hospital Mandi Bahauddin. Ask for a written breakdown before admission when possible.",
      },
      {
        question: "Is laparoscopic gallbladder surgery safe?",
        answer:
          "For suitable patients it is a commonly performed operation with a good safety record, but no surgery is risk-free. Possible problems include bleeding, infection, bile leak, injury to nearby structures, and anaesthesia-related events. We reduce risk with careful technique, imaging when needed, and converting to open surgery if the view is unsafe. A calm discussion of your personal risk is part of consent.",
      },
      {
        question: "What if laparoscopy has to be converted to open surgery?",
        answer:
          "Conversion means the surgeon completes the operation through a larger incision because inflammation, bleeding, or unclear anatomy makes keyhole surgery unsafe. It is a protective decision. Recovery and hospital stay are usually longer than after an uncomplicated laparoscopic case. You will be informed afterward, and the aftercare plan will be adjusted for the larger wound.",
      },
      {
        question: "Can gallstones come back after the gallbladder is removed?",
        answer:
          "Stones cannot reform inside a gallbladder that has been removed. Rarely, stones can still form in the bile ducts later, which is a different problem. Most patients have lasting relief from gallbladder stone attacks after cholecystectomy. New upper abdominal symptoms should still be assessed rather than assumed to be the same disease returning.",
      },
      {
        question: "Do I need the gallbladder to digest food?",
        answer:
          "The gallbladder stores bile; it does not produce it. After removal, bile still flows from the liver into the intestine. Digestion usually continues normally, though some people notice temporary sensitivity to very fatty meals. We guide you on diet in the early weeks and review lingering symptoms at clinic follow-up in Gujrat or Mandi Bahauddin.",
      },
    ],
    related: [
      "laparoscopic-surgery",
      "abdominal-gi-surgery",
      "general-day-care-surgery",
    ],
    seo: {
      title:
        "Gallbladder Surgery (Laparoscopic Cholecystectomy) in Gujrat & Mandi Bahauddin",
      description:
        "Laparoscopic gallbladder removal for gallstones with clear counselling and follow-up at Shifa Hospital Gujrat and Tarar Hospital Mandi Bahauddin. Consult Dr. Khawar Iqbal Gondal.",
      keywords: [
        "gallbladder surgery Gujrat",
        "laparoscopic cholecystectomy Mandi Bahauddin",
        "gallstones surgery Pakistan",
        "keyhole gallbladder removal Gujrat",
        "Dr Khawar Iqbal Gondal gallbladder",
      ],
    },
  },
  baseService({
    slug: "perineal-proctology",
    title: "Perineal & Proctology",
    shortTitle: "Proctology",
    tagline:
      "Care for piles, fissure, fistula, pilonidal sinus, and rectal prolapse — including laser options where suitable.",
    icon: "proctology",
    image: "/images/services/digestive.png",
    overviewSections: serviceOverviews["perineal-proctology"],
    benefits: [
      {
        title: "Assessment of piles, fissure, and fistula",
        description: "",
        icon: "check",
      },
      {
        title: "Laser options when clinically appropriate",
        description: "",
        icon: "check",
      },
      {
        title: "Focus on comfort and continence",
        description: "",
        icon: "check",
      },
      {
        title: "Practical wound-care guidance",
        description: "",
        icon: "check",
      },
    ],
    related: [
      "abdominal-gi-surgery",
      "general-day-care-surgery",
      "laparoscopic-surgery",
    ],
    seo: {
      title: "Perineal & Proctology Surgery in Gujrat & Mandi Bahauddin",
      description:
        "Care for piles, fissure, fistula, pilonidal sinus, and rectal prolapse. Consult Dr. Khawar Iqbal Gondal in Gujrat or Mandi Bahauddin.",
      keywords: [
        "Proctology Gujrat",
        "Piles laser treatment",
        "Anal fistula Mandi Bahauddin",
      ],
    },
  }),
  baseService({
    slug: "head-neck-surgery",
    title: "Head & Neck Surgery",
    shortTitle: "Head & Neck",
    tagline:
      "Thyroid, parathyroid, salivary gland, neck cysts, and lymph node biopsy with careful operative planning.",
    icon: "headNeck",
    image: "/images/services/general.png",
    overviewSections: serviceOverviews["head-neck-surgery"],
    benefits: [
      {
        title: "Thyroid and parathyroid evaluation",
        description: "",
        icon: "check",
      },
      {
        title: "Salivary gland and neck mass surgery",
        description: "",
        icon: "check",
      },
      {
        title: "Coordinated imaging and pathology",
        description: "",
        icon: "check",
      },
      {
        title: "Structured post-op follow-up",
        description: "",
        icon: "check",
      },
    ],
    related: ["breast-endocrine", "general-day-care-surgery", "laparoscopic-surgery"],
    seo: {
      title: "Head & Neck Surgery in Gujrat & Mandi Bahauddin",
      description:
        "Thyroid, parathyroid, salivary gland, and neck surgery with careful planning. Consult Dr. Khawar Iqbal Gondal.",
      keywords: [
        "Thyroid surgery Gujrat",
        "Neck surgery Mandi Bahauddin",
        "Parathyroid surgery",
      ],
    },
  }),
  baseService({
    slug: "breast-endocrine",
    title: "Breast & Endocrine",
    shortTitle: "Breast & Endocrine",
    tagline:
      "Fibroadenoma, abscess, breast cancer surgery, gynecomastia, mastectomy, conservation, and thyroid swelling.",
    icon: "breast",
    image: "/images/services/general.png",
    overviewSections: serviceOverviews["breast-endocrine"],
    benefits: [
      {
        title: "Evaluation of breast lumps and abscesses",
        description: "",
        icon: "check",
      },
      {
        title: "Cancer surgery and conservation options",
        description: "",
        icon: "check",
      },
      {
        title: "Gynecomastia and day-care procedures",
        description: "",
        icon: "check",
      },
      {
        title: "Thyroid swelling assessment",
        description: "",
        icon: "check",
      },
    ],
    related: ["head-neck-surgery", "general-day-care-surgery", "laparoscopic-surgery"],
    seo: {
      title: "Breast & Endocrine Surgery in Gujrat & Mandi Bahauddin",
      description:
        "Breast and endocrine surgical care including fibroadenoma, abscess, cancer surgery, and thyroid swelling.",
      keywords: [
        "Breast surgery Gujrat",
        "Gynecomastia Mandi Bahauddin",
        "Thyroid swelling",
      ],
    },
  }),
  baseService({
    slug: "abdominal-gi-surgery",
    title: "Abdominal & GI Surgery",
    shortTitle: "Abdominal & GI",
    tagline:
      "Hernia repair, gastric, bowel, anorectal, and selected liver and pancreatic surgical care.",
    icon: "abdominal",
    image: "/images/services/hernia.png",
    overviewSections: serviceOverviews["abdominal-gi-surgery"],
    benefits: [
      {
        title: "Hernia and gastric surgical options",
        description: "",
        icon: "check",
      },
      {
        title: "Bowel surgery with careful planning",
        description: "",
        icon: "check",
      },
      {
        title: "Anorectal operative care",
        description: "",
        icon: "check",
      },
      {
        title: "Selected hepatopancreatic procedures",
        description: "",
        icon: "check",
      },
    ],
    related: [
      "laparoscopic-surgery",
      "perineal-proctology",
      "general-day-care-surgery",
    ],
    seo: {
      title: "Abdominal & GI Surgery in Gujrat & Mandi Bahauddin",
      description:
        "Hernia repair and selected gastric, bowel, anorectal, liver, and pancreatic surgical care with Dr. Khawar Iqbal Gondal.",
      keywords: [
        "Hernia surgery Gujrat",
        "GI surgery Mandi Bahauddin",
        "Bowel surgery",
      ],
    },
  }),
  baseService({
    slug: "general-day-care-surgery",
    title: "General & Day Care Surgery",
    shortTitle: "General & Day Care",
    tagline:
      "Day-care procedures for cysts, corn, abscess, circumcision, ingrown nail, varicose veins, and diabetic foot.",
    icon: "general",
    image: "/images/services/general.png",
    overviewSections: serviceOverviews["general-day-care-surgery"],
    benefits: [
      {
        title: "Day-care options when appropriate",
        description: "",
        icon: "check",
      },
      {
        title: "Cyst, corn, and abscess care",
        description: "",
        icon: "check",
      },
      {
        title: "Circumcision and nail procedures",
        description: "",
        icon: "check",
      },
      {
        title: "Varicose veins and diabetic foot support",
        description: "",
        icon: "check",
      },
    ],
    related: [
      "laparoscopic-surgery",
      "perineal-proctology",
      "abdominal-gi-surgery",
    ],
    seo: {
      title: "General & Day Care Surgery in Gujrat & Mandi Bahauddin",
      description:
        "Day-care procedures for cysts, corn, abscess, circumcision, ingrown nail, varicose veins, and diabetic foot.",
      keywords: [
        "Day care surgery Gujrat",
        "Abscess drainage Mandi Bahauddin",
        "Varicose veins",
      ],
    },
  }),
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

/** Root-level detail URL: example.com/[slug] */
export function servicePath(slug: string) {
  return `/${slug}`;
}

export function isServiceSlug(slug: string) {
  return services.some((service) => service.slug === slug);
}

export function getRelatedServices(service: Service, limit = 3) {
  const picked: Service[] = [];

  for (const slug of service.related) {
    const match = getServiceBySlug(slug);
    if (match && match.slug !== service.slug) picked.push(match);
  }

  if (picked.length >= limit) return picked.slice(0, limit);

  const fallback = services.filter(
    (item) =>
      item.slug !== service.slug &&
      !picked.some((existing) => existing.slug === item.slug),
  );

  return [...picked, ...fallback].slice(0, limit);
}

export type ServiceNavItem = {
  id: string;
  label: string;
};

/** Sticky in-page nav — only includes sections that have data. */
export function getServiceNavItems(service: Service): ServiceNavItem[] {
  const items: ServiceNavItem[] = [];

  if (service.overviewSections.length) {
    items.push({ id: "overview", label: "Overview" });
  }
  if (service.symptoms.length) items.push({ id: "symptoms", label: "Symptoms" });
  if (service.procedureSteps.length) {
    items.push({ id: "procedure", label: "Procedure" });
  }
  if (service.benefits.length) items.push({ id: "benefits", label: "Benefits" });
  if (service.recovery.length) items.push({ id: "recovery", label: "Recovery" });
  if (service.faqs.length) items.push({ id: "faqs", label: "FAQs" });

  return items;
}

export function hasQuickFacts(facts: ServiceQuickFacts) {
  return Boolean(
    facts.procedureTime ||
      facts.hospitalStay ||
      facts.returnToWork ||
      facts.anesthesia ||
      facts.incisions,
  );
}

export function getOverviewPlainText(service: Service) {
  return service.overviewSections
    .flatMap((section) => [section.heading, ...section.paragraphs])
    .join(" ");
}
