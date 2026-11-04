export type OverviewSection = {
  heading: string;
  paragraphs: string[];
};

/**
 * Long-form overview copy (~1000 words) with subheadings for each service detail page.
 * Tone: calm, conservative, plain English; Pakistan clinic context.
 */
export const serviceOverviews: Record<string, OverviewSection[]> = {
  "laparoscopic-surgery": [
    {
      heading: "What laparoscopic surgery means",
      paragraphs: [
        "Laparoscopic surgery is a keyhole approach that uses a few small cuts instead of one large incision across the abdomen. A thin camera called a laparoscope and specialised instruments pass through these ports so the surgeon can see a magnified view of the abdomen or pelvis on a high-definition screen. Carbon dioxide gas is introduced carefully to lift the abdominal wall and create a working space. When anatomy is clear and the case is suitable, this method usually involves less cutting of muscle and soft tissue than traditional open surgery, which is why many patients report less wound pain and a more comfortable early recovery period.",
        "Not every operation can or should be done laparoscopically. Dense scarring from earlier surgery, severe acute inflammation, uncontrolled bleeding, obesity that limits instrument reach, or unclear anatomy may make an open incision safer. That decision is individual and is explained before you sign consent. Our aim is honest counselling so you understand the intended plan and the real possibility of converting to open surgery if the view inside is not safe enough to continue with keyhole instruments alone. Conversion is framed as a safety step that protects organs, not as a failure of the surgeon or the hospital.",
      ],
    },

    {
      heading: "Conditions commonly treated this way",
      paragraphs: [
        "In everyday practice, laparoscopy is often used for gallbladder removal, appendix surgery, selected hernia repairs, diagnostic look-inside procedures when the cause of pain is uncertain, and some pelvic operations when appropriately referred. Each condition needs its own work-up with examination, ultrasound or other imaging, and blood tests when indicated. We do not rush to operate on every abnormality seen on a scan. Silent findings or mild symptoms may be watched with clear safety advice and a written plan for when to return if pain, fever, vomiting, or jaundice appear.",
        "Patients from Gujrat, Mandi Bahauddin, and nearby towns often arrive after weeks of pain, indigestion, or repeated emergency visits. A structured assessment helps separate urgent cases from elective ones. If surgery is advised, we discuss timing, fasting rules, which medicines to pause, and what recovery typically looks like for your type of work. Desk jobs usually differ from farming, driving long distances, teaching on your feet all day, or heavy lifting, so leave planning should match real life rather than a single brochure promise that ignores occupation and family support at home.",
      ],
    },

    {
      heading: "How we decide if keyhole surgery is suitable",
      paragraphs: [
        "Suitability depends on your diagnosis, previous operations, body habitus, heart and lung fitness for anaesthesia, and how inflamed or scarred the area is likely to be. Imaging helps, but the final judgement also happens in the operating room when tissues are seen directly. If laparoscopy starts and conditions are unsafe, converting to a larger cut protects vital structures. Aftercare is then adjusted for the bigger wound, including longer activity limits and sometimes a slightly longer hospital stay.",
        "We also discuss non-surgical options when they are reasonable: medicines, watchful waiting, lifestyle changes, physiotherapy for selected abdominal wall problems, or referral for endoscopy elsewhere. Surgery should solve a clear problem, not simply respond to anxiety about a report. You should leave the consultation knowing why an operation is suggested now, what could wait a few weeks, and what warning symptoms mean you should seek urgent care even if surgery is scheduled for a later date. Second opinions are welcome when the decision feels heavy; bringing previous scans and discharge notes saves time and avoids repeating tests without reason.",
      ],
    },

    {
      heading: "What to expect before and after the operation",
      paragraphs: [
        "Before surgery you will usually need fasting instructions, a review of diabetes or blood-thinning medicines, and confirmation that you are fit for anaesthesia. Bring prior reports so tests are not repeated without reason. On the day, general anaesthesia is typical for abdominal laparoscopy. After waking, mild shoulder discomfort from residual gas and soreness at the small cuts are common. These usually settle with prescribed pain relief, deep breathing exercises, and short walks rather than prolonged bed rest, which can increase clot risk and chest stiffness.",
        "Most suitable patients mobilise the same day and go home when drinking, walking short distances, and pain control are acceptable — exact stay varies by procedure and your health. Follow-up can be arranged at Shifa Hospital on Jail Road in Gujrat or Tarar Hospital in Mandi Bahauddin. Cost depends on the hospital, room type, anaesthesia, tests, consumables, and complexity. We provide an estimate after assessing your case rather than advertising a fixed package that ignores clinical differences between a simple elective case and an inflamed emergency one.",
      ],
    },

    {
      heading: "Safety, limits, and shared decisions",
      paragraphs: [
        "Laparoscopy is widely used and, for the right patient, often supports earlier mobilisation than open surgery, but no operation is risk-free. Possible problems include bleeding, infection, injury to nearby organs, bile leak after gallbladder work, anaesthesia-related events, blood clots in the legs or lungs, and conversion to open surgery. We reduce risk with careful technique, imaging when ducts or bowel may be involved, antibiotic use when indicated, and stopping keyhole work if the view is poor. You should seek urgent help for fever, worsening pain, jaundice, persistent vomiting, calf swelling, breathlessness, or wound redness and discharge after discharge.",
        "Choosing surgery is a shared decision between you, your family, and the surgical team. If you travel from a nearby town, plan an attendant for the first day home and a realistic leave period from work or studies. Clear written advice on diet, activity, bathing, and warning signs is part of responsible care. It is not a guarantee of a perfect outcome, but it is a practical roadmap so families know what “usual” looks like and when “usual” has become something that needs a phone call or an emergency visit rather than waiting for the next scheduled appointment.",
      ],
    },

    {
      heading: "Living with the decision and preparing your household",
      paragraphs: [
        "Once you and your surgeon agree on a laparoscopic plan, household preparation reduces stress on the day of admission. Arrange who will escort you, who will collect medicines, and who can stay nearby for the first night if you live far from Gujrat or Mandi Bahauddin. Pack comfortable loose clothing, previous scans on a USB or paper, a current medicine list, and fasting confirmation. Tell the team about any herbal remedies or blood-thinning painkillers bought over the counter, because these can affect bleeding risk even when they feel harmless.",
        "After discharge, keep expectations realistic for the first fortnight. Energy often returns in waves rather than in a straight line. Short walks, hydration, and wound checks matter more than trying to prove you are fine by returning to heavy work early. If questions arise between visits, note them and use the clinic contact rather than relying only on social media advice that may not match your operation or your health background.",
      ],
    },
  ],

  "gallbladder-surgery": [
    {
      heading: "Understanding the gallbladder and gallstones",
      paragraphs: [
        "The gallbladder is a small sac under the liver that stores bile, a digestive fluid that helps break down fats in food. Gallstones form when bile components harden into stones inside the gallbladder — a condition called cholelithiasis. Many people have silent stones found by chance on an ultrasound and never need an operation. Others develop biliary colic: repeated pain under the right ribs, sometimes spreading to the back or shoulder blade, often after fatty or heavy meals. Inflammation of the gallbladder wall is called cholecystitis and may bring fever, constant pain, and tenderness that makes deep breathing uncomfortable.",
        "Stones can also pass into or irritate the main bile duct, or contribute to pancreatitis (inflammation of the pancreas). Those situations need prompt assessment because timing of surgery and additional procedures may change. Laparoscopic cholecystectomy means removing the gallbladder through keyhole cuts using a camera. You can live a normal life without a gallbladder; bile still flows from the liver into the intestine. Some people notice temporary sensitivity to very rich meals in the early weeks, which we discuss honestly rather than promising an unchanged diet overnight or a completely pain-free recovery for every person.",
      ],
    },

    {
      heading: "When surgery is usually considered",
      paragraphs: [
        "Surgery is commonly discussed for repeated pain attacks clearly linked to stones, after an episode of gallbladder inflammation once you are medically stabilised, or when stones have contributed to pancreatitis and the acute phase has settled. Jaundice (yellow eyes or skin), dark urine, pale stools, or fever with severe pain are warning signs that need urgent review. Sometimes a stone in the bile duct needs endoscopic treatment before or around the time of gallbladder removal, and that sequence is explained so families understand why two steps may be safer than one rushed operation.",
        "Not every stone on ultrasound means you must operate immediately. We weigh your symptom pattern, examination findings, blood tests, and imaging. Medicines that dissolve stones help only a small minority of patients and work slowly. Dietary changes may reduce triggers but do not reliably clear established symptomatic stones. If watchful waiting is reasonable, you leave with written advice on diet and on when pain, fever, or jaundice should bring you back the same day. Pregnant patients and people with multiple medical problems receive tailored counselling because timing and anaesthesia risk differ from a fit elective adult.",
      ],
    },

    {
      heading: "How the keyhole operation is planned and performed",
      paragraphs: [
        "When laparoscopy is suitable, three or four small cuts are typical. Under general anaesthesia the abdomen is gently inflated, and the camera shows the liver edge and gallbladder. The cystic duct and cystic artery — the tube and vessel that supply the gallbladder — are identified and secured before the organ is detached from the liver bed. Critical view of safety principles guide dissection so bile ducts are protected. The gallbladder is placed in a retrieval bag and removed. Wounds are closed with stitches or adhesive strips and covered with light dressings.",
        "If scarring, bleeding, or unclear anatomy makes keyhole surgery unsafe, the operation may be completed through a larger open cut under the right ribs. That conversion protects bile ducts and nearby structures. Procedure time is often about forty-five to ninety minutes for straightforward cases, though inflamed or complex cases take longer. Many patients go home the same day or after one night when recovery is smooth; exact stay depends on pain control, drinking safely, walking short distances, and any need for further tests if duct stones were suspected.",
      ],
    },

    {
      heading: "Recovery, activity, and diet in the first weeks",
      paragraphs: [
        "Early recovery focuses on short walks, wound care, and a softer low-fat diet that widens as you tolerate food. Shoulder-tip pain from residual gas usually fades over a few days. Desk work often resumes within about one to two weeks if healing is uncomplicated; heavy labour and intense exercise need longer and should be cleared at follow-up. Driving is wise only when you can wear a seatbelt comfortably and are not taking strong painkillers that slow reaction time. Bathing advice and when stitches or strips can get wet are written clearly so families do not guess.",
        "Contact the clinic for fever, worsening abdominal pain, jaundice, persistent vomiting, or wound redness and discharge. Most people gradually return to a normal balanced diet; lasting severe fat intolerance is uncommon but worth mentioning if it persists beyond the early weeks. We avoid promising a painless recovery. Discomfort is expected and usually manageable with the medicines and pacing we prescribe. Sleeping slightly propped up for a night or two can help if shoulder gas pain is bothersome, and gentle walking several times a day is better than long bed rest.",
      ],
    },

    {
      heading: "Follow-up in Gujrat and Mandi Bahauddin, and what affects cost",
      paragraphs: [
        "Follow-up visits can be planned at Shifa Hospital on Jail Road in Gujrat or at Tarar Hospital in Mandi Bahauddin. That flexibility helps families travelling from nearby towns who need wound checks and practical questions answered without repeated long journeys when weekday or weekend schedules are tight. Bring your discharge summary, medicine list, and ultrasound reports to those visits so advice stays consistent between hospitals and between the operating team and the clinic review.",
        "Cost is not one fixed number on a website. It depends on hospital and room type, anaesthesia, pre-operative tests, length of stay, consumables, and whether bile-duct procedures are required. After reviewing your case we can discuss a realistic estimate. The goal is safe relief from stone-related attacks with clear counselling — not marketing claims of being painless, risk-free, scar-free, or automatically the best choice for every person with a gallstone incidentally noted on a scan during a health check.",
      ],
    },

    {
      heading: "Living without a gallbladder and long-term outlook",
      paragraphs: [
        "Most people adapt well after gallbladder removal. Bile continues to flow from the liver into the intestine, so digestion of everyday meals remains possible. In the early weeks a gradual return from low-fat soft food to a normal balanced diet is safer than jumping straight into fried street food. Temporary loose stools after rich meals can occur and usually settle; persistent severe problems deserve a review rather than endless self-restriction that harms nutrition.",
        "Long-term outlook after uncomplicated laparoscopic cholecystectomy is generally good when stones were the main source of pain. New pain patterns after surgery should still be assessed, because other conditions such as ulcer disease, reflux, or retained duct stones can mimic gallbladder attacks. Keep your operation notes and histology report; they help any future clinician understand what was removed and whether the bile ducts looked normal at the time of surgery.",
      ],
    },
  ],

  "perineal-proctology": [
    {
      heading: "What perineal and proctology care covers",
      paragraphs: [
        "Perineal and proctology care focuses on common problems around the anus and lower rectum that affect comfort, hygiene, sitting, and quality of life. These include piles (haemorrhoids), anal fissure (a small tear in the lining), fistula-in-ano (an abnormal track from the anal canal to the skin), pilonidal sinus disease near the tailbone, and selected cases of rectal prolapse. Symptoms may include bleeding on wiping, pain on passing stool, swelling, itching, discharge, soiling, or a lump that comes down and may go back with gentle pressure.",
        "Many people delay seeking help because of embarrassment. A calm private examination and a plain-language explanation usually reduce anxiety quickly. Treatment is matched to the exact diagnosis and how severe it is. Options range from creams and dietary fibre to office procedures, laser techniques where suitable, or formal surgery. We avoid one-size-fits-all packages and do not promise that every case can be cured in a single painless session. Chronic constipation, diarrhoea, and straining are addressed as part of care because they fuel recurrence even after a successful procedure.",
      ],
    },

    {
      heading: "How we assess bleeding, pain, and discharge",
      paragraphs: [
        "Assessment starts with your story: when bleeding happens, whether pain is sharp during stool or a dull ache afterward, constipation or diarrhoea, previous creams or procedures, pregnancy history when relevant, and any weight loss or change in bowel habit that might need wider investigation. Bright red bleeding is often from piles or fissure, but persistent, mixed, or atypical bleeding should not be ignored, especially over age forty or with a family history of bowel disease. Examination is done with dignity; proctoscopy or further tests are added when needed.",
        "Patients from Gujrat, Mandi Bahauddin, and nearby areas often arrive after long trials of home remedies and pharmacy creams. If an abscess, spreading infection, or complex fistula is suspected, we plan drainage or imaging carefully. You will be told what the examination involves and why each step matters so consent remains informed and unhurried. When symptoms suggest a problem higher in the bowel, we discuss referral for colonoscopy rather than treating only what is visible at the anus.",
      ],
    },

    {
      heading: "Treatment choices, including laser when appropriate",
      paragraphs: [
        "Early piles and fissures often improve with stool softeners, fluids, fibre-rich food, warm sitz baths, and topical care. Persistent symptomatic piles may need rubber-band methods or operative treatment; laser approaches can suit selected grades, while conventional excision remains appropriate in others. Fistula surgery aims to control infection and protect continence — complex tracks may need staged care with setons or planned second procedures. Pilonidal disease may be managed with hygiene, abscess drainage, or definitive surgery, sometimes with laser assistance in selected patients after counselling about recurrence risk.",
        "No method suits everyone. Pain after anorectal procedures varies with the disease and technique. Sitting cushions, hygiene, and keeping stools soft are part of recovery. When surgery is near the sphincter muscles, continence risk is discussed openly before consent. If laser is offered, we explain likely benefits and limits without advertising guaranteed results, zero downtime, or permanent cure for every grade of disease. Your occupation, ability to rest, and access to clean bathroom facilities at home also influence which option is practical in the first weeks.",
      ],
    },

    {
      heading: "Aftercare you can follow at home",
      paragraphs: [
        "Aftercare usually includes warm sitz baths, gentle cleaning after each bowel movement, soft stools with fibre and prescribed softeners, and graded return to sitting and walking. Avoid constipation; straining can reopen discomfort and delay healing. Warning signs include fever, heavy bleeding, inability to pass urine, rapidly worsening pain, or spreading redness. Most day-care patients go home with written instructions and a clear plan for dressing or wound checks. Children and elderly patients may need extra help with hygiene and medicine timing.",
        "Return to work depends on your job and the procedure. Desk work may resume sooner than jobs that require long sitting on hard surfaces, motorcycle travel, or heavy lifting. We give a practical range rather than a single guaranteed date, because healing speed differs between people and between diagnoses. Sexual activity and intense exercise are usually delayed until wounds are comfortable and your surgeon has cleared you at review. Keeping a simple stool diary for a few days can help us adjust softeners if constipation or diarrhoea continues.",
      ],
    },

    {
      heading: "Local follow-up and costs",
      paragraphs: [
        "Follow-up can be arranged at Shifa Hospital on Jail Road in Gujrat or Tarar Hospital in Mandi Bahauddin so travelling patients can continue care closer to home when weekday or weekend slots allow. Visits review healing, answer hygiene questions, adjust softeners, and confirm when normal activity can expand. Bring a list of medicines and any previous operation notes if you have had anorectal surgery elsewhere.",
        "Cost depends on the procedure type, anaesthesia, whether day-care or overnight stay is needed, consumables such as laser fibres when used, and hospital room choice. We discuss estimates after examination rather than quoting a single package price online. The priority is accurate diagnosis, proportionate treatment, and practical recovery advice — delivered in simple English, with medical terms explained the first time they appear, and without marketing language that denies pain or pretends every fistula or advanced pile set heals in one visit.",
      ],
    },

    {
      heading: "Preventing recurrence and protecting continence",
      paragraphs: [
        "Long-term comfort after piles, fissure, fistula, or pilonidal treatment depends as much on daily habits as on the operation itself. Soft, formed stools reduce straining. Adequate water, fibre from fruit, vegetables, and whole grains, and avoiding long periods of sitting on the toilet all help. People who travel long distances by motorcycle or who sit for hours at a desk should build short standing breaks into the day once wounds allow.",
        "Continence means control of stool and gas. Any surgery near the sphincter is planned with that function in mind. If you notice new soiling, urgency, or difficulty holding wind after a procedure, report it early so assessment and physiotherapy advice can start promptly. Recurrence of fistula or pilonidal disease can still happen despite careful surgery; honest counselling includes that possibility and a plan for what to do if symptoms return months later.",
        "Hygiene after bowel movements should be gentle. Soft water cleaning or unscented wipes used carefully are better than harsh scrubbing. Barrier creams may soothe irritated skin around the anus when discharge has been a problem. Avoid sharing unverified online remedies that promise overnight cure; many delay proper care for abscess or fistula and make later surgery more complex.",
      ],
    },
  ],

  "head-neck-surgery": [
    {
      heading: "Scope of head and neck surgical care",
      paragraphs: [
        "Head and neck surgery in this practice focuses on selected conditions of the thyroid and parathyroid glands, salivary glands such as the parotid and submandibular glands, congenital or acquired neck cysts, soft-tissue lumps, and lymph node biopsy when a tissue diagnosis is required. People may notice a neck swelling, pressure when swallowing, voice change, discomfort on turning the head, or abnormal blood tests related to thyroid hormones or calcium. Some lumps grow slowly over months; others appear after an infection or are found on a scan done for another reason.",
        "Not every neck lump needs immediate removal. Many are investigated first with ultrasound, fine-needle aspiration cytology (FNAC), and blood work. Surgery is considered when there is suspicion of cancer, compressive symptoms, confirmed hormone-related disease that needs an operation, recurrent infection in a cyst, cosmetic concern after counselling, or a diagnosis that remains unclear after needle tests. We explain findings calmly and avoid alarming language that outruns the evidence on the report in front of us.",
      ],
    },

    {
      heading: "Planning with imaging and medical partners",
      paragraphs: [
        "Safe neck surgery depends on understanding anatomy around the airway, major blood vessels, and nerves that affect voice and shoulder movement. Ultrasound is often the first imaging step; CT or MRI may be added for deeper or complex lesions. Thyroid plans use hormone levels and, when needed, additional scans. Parathyroid surgery is timed when blood tests confirm overactivity and localisation studies have been reviewed so the search for an overactive gland is focused rather than exploratory without preparation.",
        "Patients travelling from nearby Punjab towns should bring a complete set of reports to the first visit, including previous FNAC slides or reports if available. We coordinate with pathology and, when needed, medical colleagues for hormone control before elective surgery. Anaesthesia assessment matters because neck operations require careful airway planning and monitoring. If you take blood thinners, diabetes medicines, or thyroid tablets, bring the list so adjustments can be planned safely before the admission day.",
      ],
    },

    {
      heading: "What the operation and early recovery involve",
      paragraphs: [
        "Most procedures use general anaesthesia. Incision length depends on the disease; many are placed in natural skin creases to keep scars as discreet as possible. Drains are used selectively and removed when output is low. After thyroid or parathyroid surgery you may need calcium monitoring and temporary voice rest. Wound care, bathing advice, and when to resume driving, lifting, or speaking for long periods at work are written down before discharge so family members share the same instructions.",
        "Hospital stay varies with the procedure and your medical background. Temporary voice fatigue, tightness, or numbness near the scar can occur and usually improve over weeks. Lasting voice change is uncommon but is a recognised risk near the nerves to the voice box, so it is discussed during consent rather than hidden. Soft foods may be easier for a few days if swallowing feels tight. Sleeping with the head slightly elevated can reduce swelling in the first nights at home.",
      ],
    },

    {
      heading: "Risks explained in plain language",
      paragraphs: [
        "General risks include bleeding, infection, and anaesthesia-related events. Specific risks depend on the operation and may include voice change, low calcium after thyroid or parathyroid surgery, salivary leak after salivary gland surgery, facial weakness after selected parotid operations, or the need for further treatment if pathology shows unexpected findings. We reduce risk with meticulous dissection, nerve awareness, careful haemostasis, and post-operative monitoring protocols suited to the procedure performed.",
        "You should seek urgent care for breathing difficulty, rapidly expanding neck swelling, high fever, wound discharge with odour, or tingling and muscle cramps that may suggest low calcium after certain endocrine operations. Early contact is safer than waiting for a routine appointment when these signs appear. Keep emergency numbers and your discharge summary accessible, especially if you live outside Gujrat or Mandi Bahauddin and may need to present to a local emergency desk first.",
      ],
    },

    {
      heading: "Follow-up in Gujrat and Mandi Bahauddin",
      paragraphs: [
        "Post-operative visits can be scheduled at Shifa Hospital, Jail Road Gujrat, or Tarar Hospital, Mandi Bahauddin. We review wounds, discuss histology, and adjust thyroid or calcium medicines when those apply. Long-distance patients can often combine travel with a single efficient review visit when reports are ready. If oncology or endocrinology input is needed after pathology, that pathway is explained so you are not left guessing about the next appointment.",
        "Fees reflect hospital choice, room type, consumables, anaesthesia, frozen section if used, and operative complexity. Estimates are shared after assessment. Our approach emphasises careful diagnosis, nerve-aware technique, and clear aftercare — without claims of zero risk, invisible scars for every neck contour, or guaranteed cosmetic results for every body type and every disease stage. Questions about work leave, school return, and voice use for teachers or call-centre staff are welcome during counselling.",
      ],
    },

    {
      heading: "Voice, calcium, and returning to work or school",
      paragraphs: [
        "Voice use after thyroid or parathyroid surgery deserves a paced return. Teachers, call-centre staff, lawyers, and others who speak for long hours should plan lighter voice days in the first week and avoid whispering, which can strain the larynx more than soft normal speech. If hoarseness persists beyond the expected early period, tell the clinic so voice assessment can be arranged rather than waiting months in silence.",
        "Calcium symptoms after endocrine neck surgery can include tingling around the mouth or in the fingertips, muscle cramps, or a sense of tightness. Keep prescribed calcium or vitamin D medicines as directed and do not stop them abruptly because you feel better for a day. Blood tests at follow-up guide whether doses can be reduced. School and office return is often possible within one to two weeks for straightforward cases, but heavy gym work and contact sports wait until wound healing and medical clearance are confirmed.",
        "Scar care is simple: keep the wound clean and dry as advised, protect new scars from strong sun once healed, and avoid picking crusts. Silicone gels or tapes are sometimes discussed later for scar quality; they are optional aids, not magic, and results vary with skin type and healing biology.",
      ],
    },
  ],

  "breast-endocrine": [
    {
      heading: "Breast and selected endocrine surgical problems",
      paragraphs: [
        "This service covers common breast conditions such as fibroadenoma, breast abscess, evaluation of breast lumps, cancer surgery when indicated, breast conservation or mastectomy as appropriate, and gynecomastia (male breast enlargement that can cause discomfort or distress). Selected thyroid swellings that need surgical opinion are also assessed. Many patients first notice a lump, pain, nipple discharge, skin change, or a painful red swollen breast with fever. Some findings appear on screening ultrasound or mammography without symptoms.",
        "Breast symptoms need careful sorting because infection, benign lumps, and cancer follow different pathways. We use history, clinical examination, ultrasound or mammography as age-appropriate, and biopsy when required. Early assessment matters. A lump alone does not automatically mean cancer, and concerning signs should not be delayed because of fear, stigma, or waiting for a “convenient” month. Bringing a female attendant is welcome whenever that helps you feel comfortable during examination and discussion.",
      ],
    },

    {
      heading: "How we decide between observation, medicines, and surgery",
      paragraphs: [
        "Abscesses often need drainage plus antibiotics; delaying care can let infection spread into deeper tissues. Fibroadenomas may be observed or excised depending on size, growth, imaging features, and your preference after counselling. Cancer surgery is planned with staging information and a clear discussion of breast conservation versus mastectomy when both are oncologically reasonable. Reconstruction is not assumed; referral pathways are discussed when relevant to your goals and local availability.",
        "Gynecomastia surgery is considered when enlargement persists, causes significant distress, or after medical causes have been reviewed. Thyroid swellings may need surgery for compression, suspicious nodules, or confirmed disease — always after imaging and needle cytology when indicated. Shared decision-making is central. We present options and likely recovery rather than pushing a single commercial package. If watchful waiting is chosen, follow-up intervals and red-flag symptoms are written down so delay does not become neglect.",
      ],
    },

    {
      heading: "Surgery day and the first week at home",
      paragraphs: [
        "Procedures range from day-care excision under local or general anaesthesia to longer cancer operations with axillary assessment. Drain care, if a drain is used, is taught before you leave, including how to empty, measure, and record output. Arm exercises may be advised after axillary procedures to reduce stiffness. Supportive garments can help after certain breast operations. Pathology results guide whether oncology colleagues need to be involved next, and timelines for those results are explained honestly.",
        "Most patients need help at home for shopping and heavier chores after larger operations. Driving, lifting children, and return to work depend on the procedure and which side was operated. Written instructions cover dressing changes, showering, and warning signs such as fever, expanding bruise, heavy soakage of dressings, sudden breathlessness, or calf pain. Keep a notebook of questions that arise at home so the first follow-up visit is productive rather than rushed.",
      ],
    },

    {
      heading: "Emotional support and clear communication",
      paragraphs: [
        "Breast and thyroid symptoms carry understandable anxiety for patients and families. We set aside time to explain reports in everyday words, including what is known and what is still waiting on biopsy or imaging. Family members are welcome when you wish them present. Questions about scars, sensation changes, bra fit, intimacy, and follow-up schedules are expected and encouraged. Silence is never required; asking twice is better than going home confused.",
        "We do not use language that guarantees cure or denies the possibility of further treatment such as chemotherapy, radiotherapy, or hormone tablets when those may be advised after multidisciplinary review. Honest timelines for results and next steps reduce the stress of waiting. If referral to oncology or endocrinology is needed, we help you understand why that step matters for complete care and what documents to carry so the next team does not start from zero.",
      ],
    },

    {
      heading: "Local follow-up and practical costs",
      paragraphs: [
        "Follow-up is available at Shifa Hospital in Gujrat and Tarar Hospital in Mandi Bahauddin, which helps patients travelling from surrounding towns. Visits cover wound checks, discussion of reports, drain removal when applicable, and coordination with medical or oncology teams when care continues beyond surgery. Travelling families can often align a single trip with report collection and stitch review when scheduling allows.",
        "Cost varies with procedure extent, hospital room, anaesthesia, implants if used, frozen section, drains, and length of stay. We outline likely ranges after clinical assessment rather than advertising a fixed package that ignores stage and technique. Care is framed around accurate diagnosis, proportionate surgery, and respectful counselling — not guarantees of perfect cosmesis, zero complications, or a one-visit cure for every body and every disease stage.",
      ],
    },

    {
      heading: "Family involvement, work leave, and next steps after pathology",
      paragraphs: [
        "Family involvement often helps with transport, childcare, and emotional support after breast or thyroid surgery. Decide in advance who will hear the pathology discussion with you, because result visits can be emotionally heavy. Write down questions about further treatment, fertility concerns when relevant, and timelines for oncology appointments so nothing important is forgotten in the moment.",
        "Work leave should match the physical demands of your job. Desk roles after a small excision differ from factory work, nursing shifts, or farming after mastectomy or axillary surgery. Arm stiffness, drain inconvenience, and fatigue are real in the first weeks. Employers usually respond better to a clear written range of expected absence than to an uncertain guess.",
        "When pathology confirms cancer or a condition needing hormone adjustment, the surgical chapter is one part of a longer plan. We help you understand why medical oncology, radiotherapy, or endocrinology may be next, what documents to carry, and how local follow-up at Shifa Hospital or Tarar Hospital can sit alongside specialist visits elsewhere. Clear handovers reduce duplicated tests and conflicting advice.",
        "Practical costs and travel planning should be revisited once the full pathway is clearer. A day-care excision differs from cancer surgery with drains and later oncology visits. Ask for an updated estimate when the operative plan changes, and keep receipts and reports organised in one folder so every specialist sees the same timeline. Calm, stepwise communication is part of good breast and endocrine care in our Gujrat and Mandi Bahauddin clinics, and questions are always welcome between scheduled visits when something feels unclear.",
      ],
    },
  ],

  "abdominal-gi-surgery": [
    {
      heading: "Abdominal and gastrointestinal surgery explained",
      paragraphs: [
        "Abdominal and GI surgery addresses problems of the abdominal wall and digestive organs that may need an operation. Common examples include hernia repair in the groin or abdominal wall, selected gastric procedures, surgery on the small or large bowel, anorectal operations linked to the wider GI service, and carefully chosen liver or pancreatic procedures when indicated and when safe perioperative support is available. The abdomen is a large cavity; different organs need different preparation, imaging, and recovery plans.",
        "Symptoms can include a reducible or painful bulge, vomiting from obstruction, rectal bleeding, change in bowel habit, jaundice, or unexplained weight loss. Not every symptom needs surgery. Many need medicines, dietary advice, or endoscopy in partnership with other specialists. Our role is to identify when an operation is likely to help, when delay is safer, and when urgent exploration is required the same day. Bringing previous discharge summaries, CT reports, and endoscopy notes to the first visit shortens the path to a clear plan.",
      ],
    },

    {
      heading: "Hernias: when repair is discussed",
      paragraphs: [
        "Hernias often present as a swelling that increases on coughing, standing, or straining and may ache at the end of the day. Repair is discussed when the hernia is symptomatic, enlarging, or at risk of incarceration — when tissue becomes trapped and blood supply can be threatened. Mesh reinforcement is used in many adult repairs; the exact technique depends on hernia type, size, previous surgery, and infection risk. Lifestyle factors such as chronic cough, constipation, and heavy lifting are addressed because they contribute to recurrence.",
        "Emergency features include sudden severe pain, redness over the swelling, persistent vomiting, or a bulge that will not reduce. Those signs need same-day assessment. Elective repair allows better planning of anaesthesia and home support. We talk through laparoscopic versus open options when both are reasonable, including the chance of conversion if the inside view is unsafe. Activity limits after mesh repair are written clearly so patients do not return to heavy labour too early and put the repair at risk.",
      ],
    },

    {
      heading: "Bowel and more complex abdominal operations",
      paragraphs: [
        "Bowel surgery is planned after imaging and, when time allows, after improving nutrition and medical conditions such as anaemia or diabetes. A stoma (an opening of bowel on the abdominal wall) is sometimes required temporarily or permanently; if that is likely, it is explained before consent so the decision is not a shock in recovery. Enhanced recovery principles — early walking, breathing exercises, and careful fluid management — support safer convalescence when the clinical situation allows.",
        "Selected liver and pancreatic operations are major undertakings. They need thorough counselling about benefits, alternatives, possible drains, ICU needs, and longer hospital stays. Not every referral proceeds to surgery; sometimes the safest recommendation is medical care or referral to a higher-volume centre for a specific complex procedure. Honesty about local capability and when to refer is part of ethical surgical practice, not a weakness of the clinic.",
      ],
    },

    {
      heading: "Preparation, hospital course, and warning signs",
      paragraphs: [
        "Preparation may include blood tests, imaging review, bowel preparation in selected cases, nutritional drinks, and adjustment of blood thinners. After surgery, early mobilisation reduces clot risk. Diet advances from fluids to soft food as bowel function returns. Complex cases need closer monitoring and longer stays than a straightforward elective hernia repair. Pain plans balance comfort with breathing and walking so chest infections and clots are less likely.",
        "Patients from Gujrat, Mandi Bahauddin, and nearby districts should plan an attendant and realistic leave from work. Seek urgent help for fever, wound breakdown, persistent vomiting, increasing abdominal distension, breathlessness, black stools, or inability to pass stool or wind when that was expected to resume. Early review prevents small setbacks from becoming emergencies. Keep a medicine list and allergy notes with you when travelling between home and hospital.",
      ],
    },

    {
      heading: "Follow-up and transparent costing",
      paragraphs: [
        "Clinic review can be arranged at Shifa Hospital, Jail Road Gujrat, or Tarar Hospital, Mandi Bahauddin. Histology results, further oncology or medical referral, stoma care teaching when relevant, and hernia precautions such as avoiding premature heavy lifting are covered in follow-up. Travelling families can often align visits with report collection dates so one journey covers several needs.",
        "Cost depends heavily on urgency, hospital room, mesh or stapling devices, possible ICU care, transfusions, and length of stay. Elective hernia repair differs sharply from emergency bowel surgery. We provide estimates after assessment and avoid fixed online prices that ignore clinical reality. Safety and clear communication remain the priority over speed, social media claims, or marketing language that promises a painless abdominal recovery for every procedure type.",
      ],
    },

    {
      heading: "Nutrition, mobility, and protecting a new repair",
      paragraphs: [
        "After abdominal wall or bowel surgery, nutrition and mobility work together. Protein-rich meals within what your surgeon allows, steady hydration, and short walks support wound healing and reduce clot risk. Avoid heavy lifting and sudden straining until cleared, especially after mesh hernia repair. Chronic cough and constipation should be treated, because both raise pressure on a fresh repair.",
        "If a stoma was created, education before discharge covers bag changes, skin protection, and when to seek help for high output, blockage, or skin breakdown. Family members who will assist should attend the teaching session. Travelling patients should leave with spare supplies and a contact plan rather than discovering shortages at home in a distant town.",
        "Sexual activity, driving, and sports resume on a graded schedule that depends on the operation. Ask specifically rather than copying a neighbour’s timeline. Follow-up at Gujrat or Mandi Bahauddin is the place to review wounds, histology, and any need for further medical or oncology care so the whole pathway stays coordinated.",
        "Cost conversations should match urgency. An elective hernia repair booked weeks ahead differs from emergency obstruction surgery that may need intensive care. We discuss realistic ranges after assessment and update families if unexpected findings change the plan in theatre. Transparent talk about money, leave from work, and attendant needs is part of respectful abdominal and GI surgical care for patients across Gujrat, Mandi Bahauddin, and nearby towns, and we revisit those details whenever the clinical plan changes.",
      ],
    },
  ],

  "general-day-care-surgery": [
    {
      heading: "What general and day-care surgery includes",
      paragraphs: [
        "General and day-care surgery covers common soft-tissue and minor operative problems that often do not need a long hospital admission. Typical examples are sebaceous cyst excision, corn removal, abscess drainage, circumcision, ingrown toenail procedures, selected varicose vein care, and surgical support for diabetic foot problems in coordination with medical treatment. These conditions can cause pain, recurrent infection, difficulty walking, school absence, or social embarrassment that affects work and confidence.",
        "Day-care means you may go home the same day when anaesthesia recovery, pain control, and home support are adequate. Not every patient qualifies. Poorly controlled diabetes, significant heart or lung disease, obstructive sleep concerns, living alone without a responsible adult attendant, or long travel without a plan for overnight stay nearby may require observation. Suitability is decided after examination and a brief medical review, not assumed from a price list or a friend’s experience with a different problem.",
      ],
    },

    {
      heading: "Infection, diabetes, and circulation: why assessment matters",
      paragraphs: [
        "Abscesses need timely drainage; antibiotics alone are often insufficient once pus has collected. Infected cysts may be drained first and excised later when inflammation settles, which reduces recurrence risk compared with operating in a hot field. Ingrown nails and corns are checked for deeper infection or poor blood flow, especially in people with diabetes or a smoking history. Ignoring a small foot wound in diabetes can lead to deeper bone infection if circulation and sugar control are poor.",
        "Diabetic foot problems deserve particular caution. We assess blood sugar control, pulses, wound depth, and signs of spreading infection. Surgery may include drainage or removal of dead tissue, but saving a limb also depends on medical care, pressure offloading, and footwear advice. Varicose vein decisions use symptoms plus duplex findings when available; stockings and elevation remain important even when a procedure is planned. We do not promise that every vein treatment ends all aching or cosmetic concern in one session.",
      ],
    },

    {
      heading: "The day-care pathway from consent to home",
      paragraphs: [
        "After consent and fasting instructions when sedation or general anaesthesia is used, the procedure is performed under local, regional, or general anaesthesia as appropriate. You recover in a monitored area, receive wound-care teaching, and leave with written advice, dressing supplies guidance, and emergency contacts. Elevation and limited walking are common after foot and ankle procedures. Arrange transport home in advance; driving yourself after sedation is unsafe.",
        "Most people manage at home with simple pain relief and scheduled dressing changes. Children after circumcision need clear hygiene instructions for carers, including how to clean and what swelling is expected versus concerning. Adult circumcision and nail surgery have different activity limits; we spell those out so work leave is planned realistically rather than guessed. Keep the first dressing dry unless told otherwise, and avoid soaking the wound in dirty water or swimming pools until cleared.",
      ],
    },

    {
      heading: "Warning signs after minor surgery",
      paragraphs: [
        "Contact us or seek urgent care for spreading redness, fever, heavy bleeding, pus with foul odour, severe escalating pain, or a toe or foot that becomes cold, pale, or numb — especially important for diabetic patients. Early review of a small problem is better than late treatment of a deep infection. Do not wait for a weekend appointment if these signs appear midweek; use the emergency contacts on your discharge sheet.",
        "Keep the first follow-up even if the wound “looks fine.” Some issues are easier to prevent with a quick dressing change and advice than to fix after days of home improvisation with tape and cotton from the market. Bring a list of medicines and your sugar readings if you have diabetes. Note when pain medicines were last taken so the clinic can advise safely on the next dose.",
      ],
    },

    {
      heading: "Follow-up locally and what affects cost",
      paragraphs: [
        "Dressing changes and stitch removal can be planned at Shifa Hospital Gujrat or Tarar Hospital Mandi Bahauddin. Patients from surrounding towns often prefer slots that match travel and school or work hours. We coordinate with physicians when sugar control or antibiotics need adjustment after drainage of infection. Bring previous culture reports if antibiotics were started elsewhere so therapy can be refined rather than duplicated blindly.",
        "Cost usually reflects anaesthesia type, hospital charges, dressings, consumables, and whether overnight stay becomes necessary. Complex diabetic foot care costs more than a simple cyst excision. After seeing the problem we discuss a realistic estimate. The emphasis is safe, proportionate day-care surgery with clear aftercare — not promises of painless healing for every wound type, instant return to sports, or a single package price that ignores diabetes, infection depth, and home support.",
      ],
    },

    {
      heading: "Home setup, school or work return, and preventing repeat infection",
      paragraphs: [
        "A simple home setup makes day-care recovery smoother. Prepare a clean area for dressing changes, keep prescribed antibiotics and pain relief where an adult can supervise doses, and elevate the limb after foot procedures using pillows. Children need distraction and clear rules about not picking at stitches. Adults with desk jobs may return sooner than those who stand in wet markets or walk long distances on unfinished wounds.",
        "Preventing repeat infection means finishing antibiotic courses when prescribed, controlling blood sugar, stopping smoking if possible, and wearing sensible footwear after nail or corn procedures. Recurrence of cysts or ingrown nails can still happen; early review of a new swelling is better than waiting until another abscess forms. For varicose vein and diabetic foot pathways, ongoing medical review remains essential even after a successful minor procedure.",
        "If you are unsure whether a wound change is normal, send a clear description or attend the clinic rather than applying multiple overlapping home pastes. Conflicting treatments can irritate skin and hide infection. Local follow-up at Shifa Hospital or Tarar Hospital keeps advice consistent and allows stitch removal or dressing upgrades without unnecessary delay.",
        "Bring previous culture reports, sugar charts, and a list of allergies to every visit so antibiotic choices stay safer. Day-care surgery is convenient, but convenience never replaces careful assessment of infection depth, circulation, and home support. When those pieces are in place, most patients recover at home with clear written steps and a known place to return if healing stalls.",
      ],
    },
  ],
};

export function overviewWordCount(sections: OverviewSection[]) {
  const text = sections
    .flatMap((section) => [section.heading, ...section.paragraphs])
    .join(" ");
  return text.trim() ? text.trim().split(/\s+/).length : 0;
}
