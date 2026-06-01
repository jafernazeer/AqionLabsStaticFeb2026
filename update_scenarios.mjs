import fs from 'fs';

const updatedContent = `
const scenarios = [
  {
    id: 0, label: "Clinic Booking", icon: "🏥",
    latency: 680, dialect: 97,
    outcome: { title: "Appointment Booked ✓", sub: "Clinic demo secured via Cal.com", steps: [
      { n:"1", t:"Missed call auto-logged by system" },
      { n:"2", t:"WhatsApp message sent within 12 seconds" },
      { n:"3", t:"AI agent answered follow-up call" },
      { n:"4", t:"Demo booked for tomorrow morning" },
      { n:"5", t:"WhatsApp confirmation sent with calendar link" },
    ]},
    linesEn: [
      { spk: "agent", isAr: false, text: "Hello, welcome to AqionVox. How can I help you today?", t: 600 },
      { spk: "customer", isAr: false, text: "Hi, I'm Omar from Al-Fayed Clinic. I'd like to know about your appointment booking system.", t: 2800 },
      { spk: "agent", isAr: false, text: "Welcome Omar! Our system can answer calls and book appointments automatically in English and Arabic 24/7.", t: 4400 },
      { spk: "customer", isAr: false, text: "How much does it cost? And does it integrate with our clinic system?", t: 7200 },
      { spk: "agent", isAr: false, text: "Our Professional package starts at 2999 AED per month and integrates with most clinic management systems. Shall I book a demo for you?", t: 9200 },
      { spk: "customer", isAr: false, text: "Yes, please book a demo for me tomorrow morning.", t: 12000 },
      { spk: "agent", isAr: false, text: "Perfect! I've booked you a demo for Tuesday at 10 AM. You will receive a confirmation on WhatsApp ✅", t: 13800 },
    ],
    linesAr: [
      { spk: "agent", isAr: true, text: "مرحبا، أهلاً وسهلاً في أقيون فوكس. كيف أقدر أساعدك اليوم؟", t: 600 },
      { spk: "customer", isAr: true, text: "هلا، أنا عمر من عيادة الفايد. أبي أعرف عن نظام حجز المواعيد", t: 2800 },
      { spk: "agent", isAr: true, text: "أهلاً يا عمر! حياك الله. نظامنا يرد على المكالمات ويحجز المواعيد تلقائياً بالعربي والإنجليزي ٢٤ ساعة", t: 4400 },
      { spk: "customer", isAr: true, text: "كم سعره؟ وهل يشتغل مع نظام العيادة؟", t: 7200 },
      { spk: "agent", isAr: true, text: "الباقة الاحترافية تبدأ من ٢٩٩٩ درهم بالشهر وتتكامل مع أغلب أنظمة إدارة العيادات. تبي أحجزلك موعد؟", t: 9200 },
      { spk: "customer", isAr: true, text: "إي، حجزلي موعد بكرة الصبح لو سمحتي", t: 12000 },
      { spk: "agent", isAr: true, text: "تمام! حجزت لك موعد يوم الثلاثاء الساعة عشر الصبح. بيوصلك تأكيد على الواتساب ✅", t: 13800 },
    ]
  },
  {
    id: 1, label: "Real Estate", icon: "🏢",
    latency: 720, dialect: 94,
    outcome: { title: "Lead Qualified & Demo Booked", sub: "Agent closed the qualifying call", steps: [
      { n:"1", t:"Outbound call placed to missed lead" },
      { n:"2", t:"Agent identified WhatsApp inquiry context from CRM history" },
      { n:"3", t:"Lead qualified as Warm — Real Estate Agency" },
      { n:"4", t:"Proposal sent via WhatsApp instantly" },
      { n:"5", t:"Demo booked for Thursday afternoon" },
    ]},
    linesEn: [
      { spk: "agent", isAr: false, text: "Good afternoon, James from AqionVox. Am I speaking with Sara Al-Rashid?", t: 600 },
      { spk: "customer", isAr: false, text: "Yes, that's me — I think I missed a call?", t: 2600 },
      { spk: "agent", isAr: false, text: "That's right Sara. You'd reached out about our AI platform for WhatsApp. We handle hundreds of enquiries automatically — qualifying leads and booking viewings without any manual effort.", t: 4200 },
      { spk: "customer", isAr: false, text: "That sounds brilliant. We get hundreds of messages daily from Bayut and Property Finder — it's becoming impossible to manage.", t: 7400 },
      { spk: "agent", isAr: false, text: "Exactly what we solve. Our AI qualifies by buying intent, books viewings, and follows up — all automatically. I'll send you a real estate case study on WhatsApp right now.", t: 9600 },
      { spk: "customer", isAr: false, text: "Yes, do that. Can we schedule a proper demo Thursday afternoon?", t: 12800 },
      { spk: "agent", isAr: false, text: "Thursday at 2 PM is confirmed. Meeting link on its way to your WhatsApp now. Look forward to it, Sara! 📅", t: 14600 },
    ],
    linesAr: [
      { spk: "agent", isAr: true, text: "مساء الخير، جيمس من أقيون فوكس. هل أحدث سارة الراشد؟", t: 600 },
      { spk: "customer", isAr: true, text: "نعم صحيح، أعتقد أني فوت مكالمة؟", t: 2600 },
      { spk: "agent", isAr: true, text: "صحيح سارة. تواصلتي معنا بخصوص منصة الذكاء الاصطناعي للواتساب. نحن ندير مئات الاستفسارات ونجدول المعاينات تلقائياً.", t: 4200 },
      { spk: "customer", isAr: true, text: "هذا رائع جداً. نحن نتلقى مئات الرسائل يومياً وأصبح من الصعب إدارتها.", t: 7400 },
      { spk: "agent", isAr: true, text: "بالضبط ما نحله. الذكاء الاصطناعي يؤهل العملاء ويحجز المعاينات. سأرسل لك دراسة حالة عقارية على الواتساب الآن.", t: 9600 },
      { spk: "customer", isAr: true, text: "ممتاز، هل يمكننا حجز عرض توضيحي يوم الخميس بعد الظهر؟", t: 12800 },
      { spk: "agent", isAr: true, text: "تم التأكيد يوم الخميس الساعة ٢ ظهراً. رابط الاجتماع في طريقه إليك عبر الواتساب! 📅", t: 14600 },
    ]
  },
  {
    id: 2, label: "Finance", icon: "🏦",
    latency: 695, dialect: 92,
    outcome: { title: "Technical Demo Booked", sub: "Finance compliance requirements addressed", steps: [
      { n:"1", t:"Inbound call answered in <1 second" },
      { n:"2", t:"UAE data residency compliance confirmed" },
      { n:"3", t:"IT team inclusion noted and accommodated" },
      { n:"4", t:"Pre-demo questionnaire sent via WhatsApp" },
      { n:"5", t:"Technical demo scheduled" },
    ]},
    linesEn: [
      { spk: "agent", isAr: false, text: "Hello! AqionVox customer service, Raj speaking. How may I assist you today?", t: 600 },
      { spk: "customer", isAr: false, text: "Hi Raj, I'm from Emirates Finance. We need an AI system for customer service — thousands of calls daily about loan applications.", t: 2800 },
      { spk: "agent", isAr: false, text: "Welcome! We can handle those routine inquiries very efficiently. For financial services, we have DIFC-compliant features with full call recording and UAE data residency.", t: 5000 },
      { spk: "customer", isAr: false, text: "Data residency is critical for us. Can it handle Arabic as well?", t: 8200 },
      { spk: "agent", isAr: false, text: "Absolutely! The AI switches seamlessly between Arabic and English in the same call. It understands Gulf dialects, Egyptian, and Levantine Arabic naturally.", t: 10000 },
      { spk: "customer", isAr: false, text: "Impressive. We'd need to involve our IT team for integration questions.", t: 13000 },
      { spk: "agent", isAr: false, text: "Of course! Wednesday March 5th at 10 AM — I'll set up a full technical demo with API documentation. Confirmation on its way! ✅", t: 15000 },
    ],
    linesAr: [
      { spk: "agent", isAr: true, text: "مرحباً! خدمة عملاء أقيون فوكس، كيف يمكنني مساعدتك اليوم؟", t: 600 },
      { spk: "customer", isAr: true, text: "أهلاً، أنا من شركة تمويل ونحتاج نظام ذكاء اصطناعي للرد على آلاف الاستفسارات يومياً.", t: 2800 },
      { spk: "agent", isAr: true, text: "حياك الله! يمكننا التعامل معها بكفاءة. للقطاع المالي لدينا ميزات متوافقة مع القوانين مع تسجيل مكالمات وحفظ البيانات محلياً بالإمارات.", t: 5000 },
      { spk: "customer", isAr: true, text: "تخزين البيانات محلياً أمر ضروري لنا. هل يدعم اللغة العربية؟", t: 8200 },
      { spk: "agent", isAr: true, text: "بالتأكيد! الذكاء الاصطناعي يتنقل بين العربية والإنجليزية بسلاسة، ويفهم اللهجات الخليجية والشامية.", t: 10000 },
      { spk: "customer", isAr: true, text: "مبهر. سنحتاج لإشراك فريق التقنية معنا.", t: 13000 },
      { spk: "agent", isAr: true, text: "بالتأكيد! سأحجز لك عرض تقني متكامل الأربعاء القادم الساعة ١٠ صباحاً. التأكيد في الطريق إليك! ✅", t: 15000 },
    ]
  },
  {
    id: 3, label: "Restaurant", icon: "🍽️",
    latency: 710, dialect: 93,
    outcome: { title: "Restaurant Chain Proposal Sent", sub: "Outbound nurturing call converted to demo", steps: [
      { n:"1", t:"Website visit auto-triggered outbound call" },
      { n:"2", t:"Agent identified chain restaurant use case" },
      { n:"3", t:"Reservation automation demo described live" },
      { n:"4", t:"48-hour setup timeline confirmed" },
      { n:"5", t:"Personalised proposal sent via WhatsApp" },
    ]},
    linesEn: [
      { spk: "agent", isAr: false, text: "Hello Adaeze, good afternoon! This is Amara calling from AqionVox. You visited our website about restaurant booking automation.", t: 600 },
      { spk: "customer", isAr: false, text: "Oh yes! I run a chain of restaurants in Dubai. We get so many reservation calls especially during peak hours and weekends.", t: 3000 },
      { spk: "agent", isAr: false, text: "I understand perfectly! Our AI handles all reservation calls automatically — checks table availability in real-time, books the slot, even handles special requests like birthday setups!", t: 5400 },
      { spk: "customer", isAr: false, text: "Wow that would save us so much time! How quickly can you set it up?", t: 8600 },
      { spk: "agent", isAr: false, text: "We can have you up and running within 48 hours! I'm sending a detailed proposal to your WhatsApp right now with a case study from a similar restaurant group.", t: 10600 },
      { spk: "customer", isAr: false, text: "That's great, thank you Amara!", t: 13800 },
      { spk: "agent", isAr: false, text: "My pleasure, Adaeze! The proposal's on its way. Have a wonderful day! 🌟", t: 15200 },
    ],
    linesAr: [
      { spk: "agent", isAr: true, text: "مرحباً، طاب مساؤك! معك أميرة من أقيون فوكس. لاحظت زيارتك لموقعنا بخصوص أتمتة المطاعم.", t: 600 },
      { spk: "customer", isAr: true, text: "أهلاً، نعم! أملك سلسلة مطاعم في دبي ونتلقى اتصالات كثيرة أوقات الذروة.", t: 3000 },
      { spk: "agent", isAr: true, text: "أفهمك تماماً! الذكاء الاصطناعي يتعامل مع الاتصالات ويتحقق من توفر الطاولات ويحجزها لتكون العملية سلسة.", t: 5400 },
      { spk: "customer", isAr: true, text: "هذا سيوفر علينا الكثير من الوقت! كم يستغرق الإعداد؟", t: 8600 },
      { spk: "agent", isAr: true, text: "يكون جاهزاً خلال 48 ساعة! سأرسل لك مقترح تفصيلي على الواتساب مع دراسة حالة لمطعم مشابه.", t: 10600 },
      { spk: "customer", isAr: true, text: "هذا رائع، شكراً لك!", t: 13800 },
      { spk: "agent", isAr: true, text: "على الرحب والسعة! المقترح في الطريق إليك. نتمنى لك يوماً سعيداً! 🌟", t: 15200 },
    ]
  },
  {
    id: 4, label: "Government", icon: "🏛️",
    latency: 650, dialect: 96,
    outcome: { title: "Government Procurement Meeting Set", sub: "Formal enterprise meeting arranged", steps: [
      { n:"1", t:"Inbound government inquiry answered instantly" },
      { n:"2", t:"1,000+ daily calls context captured and logged" },
      { n:"3", t:"Formal procurement requirement acknowledged" },
      { n:"4", t:"Official proposal with technical specs prepared" },
      { n:"5", t:"Sunday meeting confirmed — email + WhatsApp" },
    ]},
    linesEn: [
      { spk: "agent", isAr: false, text: "Welcome! Maryam from AqionVox speaking. How may I be of assistance?", t: 600 },
      { spk: "customer", isAr: false, text: "Hi Maryam. I'm Hassan from the Ministry of Services. We need a solution for our citizen services line, we receive over 1000 calls per day.", t: 2800 },
      { spk: "agent", isAr: false, text: "Hello Hassan! We have a comprehensive solution for government entities. Our system automatically answers repetitive inquiries and routes complex cases to human agents.", t: 5000 },
      { spk: "customer", isAr: false, text: "We'll need an official meeting to go over our procurement procedures.", t: 8400 },
      { spk: "agent", isAr: false, text: "Of course! We will prepare a formal proposal including technical specs, pricing, and compliance with government regulations.", t: 10200 },
      { spk: "customer", isAr: false, text: "Excellent, please reach out to us formally.", t: 13000 },
      { spk: "agent", isAr: false, text: "I've booked a meeting for you this Sunday at 10 AM. You will receive the official confirmation via email and WhatsApp ✅", t: 14600 },
    ],
    linesAr: [
      { spk: "agent", isAr: true, text: "هلا وغلا، معاج مريم من أقيون فوكس. شلون أقدر أساعدج؟", t: 600 },
      { spk: "customer", isAr: true, text: "هلا مريم. أنا حسن من وزارة الخدمات. نبي حل لخدمة المراجعين، نستقبل أكثر من ألف مكالمة باليوم", t: 2800 },
      { spk: "agent", isAr: true, text: "يا هلا حسن! عندنا حل متكامل للجهات الحكومية. النظام يرد على الاستفسارات المتكررة تلقائياً ويحول الحالات المعقدة للموظفين المختصين", t: 5000 },
      { spk: "customer", isAr: true, text: "احنا نحتاج اجتماع رسمي لأن عندنا إجراءات مشتريات حكومية", t: 8400 },
      { spk: "agent", isAr: true, text: "أكيد! بنحضر عرض رسمي يتضمن المواصفات التقنية والأسعار والامتثال للأنظمة الحكومية", t: 10200 },
      { spk: "customer", isAr: true, text: "ممتاز، تواصلوا معنا رسمياً", t: 13000 },
      { spk: "agent", isAr: true, text: "حجزت لك اجتماع يوم الأحد الساعة عشر الصبح. بيوصلك التأكيد الرسمي على الإيميل والواتساب ✅", t: 14600 },
    ]
  }
];

const agentVariants = {
  0: [
    { lang: 'ar', name: "Fatima", initials: "FA", role: "🇦🇪 Gulf Arabic", bg: "rgba(0,229,160,0.12)", color: "#00e5a0", gender: "Female" },
    { lang: 'en', name: "Emma", initials: "EM", role: "🇬🇧 British English", bg: "rgba(96,165,250,0.12)", color: "#60a5fa", gender: "Female" },
  ],
  1: [
    { lang: 'en', name: "James", initials: "JA", role: "🇬🇧 British English", bg: "rgba(96,165,250,0.12)", color: "#60a5fa", gender: "Male" },
    { lang: 'ar', name: "Ali", initials: "AL", role: "🇸🇦 Saudi Arabic", bg: "rgba(0,229,160,0.12)", color: "#00e5a0", gender: "Male" },
  ],
  2: [
    { lang: 'en', name: "Raj", initials: "RA", role: "🇮🇳 Indian English", bg: "rgba(167,139,250,0.12)", color: "#a78bfa", gender: "Male" },
    { lang: 'ar', name: "Tariq", initials: "TA", role: "🇦🇪 Gulf Arabic", bg: "rgba(0,229,160,0.12)", color: "#00e5a0", gender: "Male" },
  ],
  3: [
    { lang: 'en', name: "Amara", initials: "AM", role: "🇳🇬 Nigerian English", bg: "rgba(251,191,36,0.12)", color: "#fbbf24", gender: "Female" },
    { lang: 'ar', name: "Aisha", initials: "AI", role: "🇪🇬 Egyptian Arabic", bg: "rgba(0,229,160,0.12)", color: "#00e5a0", gender: "Female" },
  ],
  4: [
    { lang: 'ar', name: "Maryam", initials: "MA", role: "🇰🇼 Kuwaiti Arabic", bg: "rgba(0,229,160,0.12)", color: "#00e5a0", gender: "Female" },
    { lang: 'en', name: "Michael", initials: "MI", role: "🇺🇸 US English", bg: "rgba(96,165,250,0.12)", color: "#60a5fa", gender: "Male" },
  ],
};
`

let fileSource = fs.readFileSync('components/LiveDemoSection.tsx', 'utf8');
const startMarker = 'const scenarios = [';
const endMarker = 'type Message = {';
const startIndex = fileSource.indexOf(startMarker);
const endIndex = fileSource.indexOf(endMarker);

if (startIndex !== -1 && endIndex !== -1) {
  fileSource = fileSource.substring(0, startIndex) + updatedContent + fileSource.substring(endIndex);
  
  // Update sc.lines usage
  // We need to change `sc.lines.forEach` to `(ag.lang === 'ar' ? sc.linesAr : sc.linesEn).forEach`
  fileSource = fileSource.replace(/sc\.lines\.forEach/g, "(ag.lang === 'ar' ? sc.linesAr : sc.linesEn).forEach");
  fileSource = fileSource.replace(/sc\.lines\[i-1\]\.t/g, "(ag.lang === 'ar' ? sc.linesAr : sc.linesEn)[i-1].t");
  fileSource = fileSource.replace(/sc\.lines\[sc\.lines\.length - 1\]\.t/g, "(ag.lang === 'ar' ? sc.linesAr : sc.linesEn)[(ag.lang === 'ar' ? sc.linesAr : sc.linesEn).length - 1].t");
  
  fs.writeFileSync('components/LiveDemoSection.tsx', fileSource);
  console.log('Updated scenarios and agents');
} else {
  console.log('Could not find markers');
}
