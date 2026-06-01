import fs from 'fs';

let content = fs.readFileSync('components/LiveDemoSection.tsx', 'utf8');

const scenariosStr = content.match(/const scenarios = \[[\s\S]*?\];\n\nconst agentVariants/)[0];

const block0 = `    linesHi: [
      { spk: "agent", isAr: false, text: "नमस्ते، अक़ियोनवॉक्स में आपका स्वागत है। आज मैं आपकी कैसे मदद कर सकता हूँ?", t: 600 },
      { spk: "customer", isAr: false, text: "नमस्ते, मैं अल-फ़ायद क्लिनिक से उमर हूँ। मुझे आपकी अपॉइंटमेंट बुकिंग प्रणाली के बारे में जानना है।", t: 2800 },
      { spk: "agent", isAr: false, text: "आपका स्वागत है उमर! हमारी प्रणाली कॉल का उत्तर दे सकती है और 24/7 स्वचालित रूप से अपॉइंटमेंट बुक कर सकती है।", t: 4400 },
      { spk: "customer", isAr: false, text: "इसका मूल्य क्या है? और क्या यह हमारी क्लिनिक प्रणाली के साथ जुड़ता है?", t: 7200 },
      { spk: "agent", isAr: false, text: "हमारा प्रो पैकेज 2999 AED प्रति माह से शुरू होता है और अधिकांश प्रणालियों के साथ जुड़ता है। क्या मैं आपके लिए डेमो बुक करूँ?", t: 9200 },
      { spk: "customer", isAr: false, text: "हाँ, कृपया कल सुबह के लिए मेरे लिए एक डेमो बुक करें।", t: 12000 },
      { spk: "agent", isAr: false, text: "बिल्कुल! मैंने मंगलवार सुबह 10 बजे के लिए आपका डेमो बुक कर दिया है। आपको व्हाट्सएप पर पुष्टि मिल जाएगी ✅", t: 13800 },
    ]`;

const block1 = `    linesHi: [
      { spk: "agent", isAr: false, text: "शुभ दोपहर, अक़ियोनवॉक्स से जेम्स। क्या मेरी बात सारा अल-रशीद से हो रही है?", t: 600 },
      { spk: "customer", isAr: false, text: "हाँ, यह मैं हूँ - मुझे लगता है कि मैंने एक कॉल मिस कर दिया?", t: 2600 },
      { spk: "agent", isAr: false, text: "यह सही है सारा। आपने व्हाट्सएप के लिए हमारे एआई प्लेटफॉर्म के बारे में संपर्क किया था। हम बिना किसी हाथ के काम के लीड को योग्य बनाते हैं।", t: 4200 },
      { spk: "customer", isAr: false, text: "यह बहुत अच्छा लगता है। हमें रोज़ाना सैकड़ों संदेश मिलते हैं - इसे प्रबंधित करना असंभव होता जा रहा है।", t: 7400 },
      { spk: "agent", isAr: false, text: "हम बिल्कुल यही हल करते हैं। हमारा एआई स्वचालित रूप से सब कुछ संभालता है। मैं अभी आपको व्हाट्सएप पर एक केस स्टडी भेजूंगा।", t: 9600 },
      { spk: "customer", isAr: false, text: "हाँ, ऐसा करें। क्या हम गुरुवार दोपहर एक डेमो निर्धारित कर सकते हैं?", t: 12800 },
      { spk: "agent", isAr: false, text: "गुरुवार दोपहर 2 बजे की पुष्टि हो गई है। मीटिंग का लिंक अब आपके व्हाट्सएप पर है। मुझे इसका इंतजार रहेगा! 📅", t: 14600 },
    ]`;

const block2 = `    linesHi: [
      { spk: "agent", isAr: false, text: "नमस्ते! अक़ियोनवॉक्स ग्राहक सेवा, राज बोल रहा हूँ। मैं आज आपकी कैसे मदद कर सकता हूँ?", t: 600 },
      { spk: "customer", isAr: false, text: "नमस्ते राज, मैं एमिरेट्स फाइनेंस से हूँ। हमें ग्राहक सेवा के लिए एक एआई प्रणाली चाहिए।", t: 2800 },
      { spk: "agent", isAr: false, text: "आपका स्वागत है! हम वित्तीय सेवाओं के लिए अनुकूलित सुविधाओं और डेटा रेजिडेंसी के साथ काम करते हैं।", t: 5000 },
      { spk: "customer", isAr: false, text: "डेटा रेजिडेंसी हमारे लिए महत्वपूर्ण है। क्या यह हिंदी भी संभाल सकता है?", t: 8200 },
      { spk: "agent", isAr: false, text: "बिल्कुल! एआई एक ही कॉल में हिंदी, अरबी और अंग्रेजी के बीच आसानी से बदल जाता है।", t: 10000 },
      { spk: "customer", isAr: false, text: "प्रभावशाली। हमें अपनी आईटी टीम को शामिल करना होगा।", t: 13000 },
      { spk: "agent", isAr: false, text: "बेशक! बुधवार सुबह 10 बजे - मैं एक पूर्ण तकनीकी डेमो निर्धारित करूंगा। पुष्टि अभी भेज रहा हूँ! ✅", t: 15000 },
    ]`;

const block3 = `    linesHi: [
      { spk: "agent", isAr: false, text: "हैलो अदेज़े, शुभ दोपहर! मैं अक़ियोनवॉक्स से अमारा बोल रही हूँ।", t: 600 },
      { spk: "customer", isAr: false, text: "अरे हाँ! मैं दुबई में रेस्तरां की एक श्रृंखला चलाती हूँ। हमें आरक्षण के लिए बहुत कॉल आते हैं।", t: 3000 },
      { spk: "agent", isAr: false, text: "मैं पूरी तरह समझती हूँ! हमारा एआई स्वचालित रूप से सभी आरक्षण कॉल को संभालता है और टेबल बुक करता है।", t: 5400 },
      { spk: "customer", isAr: false, text: "वाह यह हमारा बहुत समय बचाएगा! आप इसे कितनी जल्दी सेट कर सकते हैं?", t: 8600 },
      { spk: "agent", isAr: false, text: "हम आपको 48 घंटों के भीतर चालू कर सकते हैं! मैं आपके व्हाट्सएप पर अभी एक विस्तृत प्रस्ताव भेज रही हूँ।", t: 10600 },
      { spk: "customer", isAr: false, text: "यह बहुत अच्छा है, धन्यवाद अमारा!", t: 13800 },
      { spk: "agent", isAr: false, text: "मुझे खुशी हुई! प्रस्ताव आपके पास आ रहा है। आपका दिन शुभ हो! 🌟", t: 15200 },
    ]`;

const block4 = `    linesHi: [
      { spk: "agent", isAr: false, text: "स्वागत है! अक़ियोनवॉक्स से मरियम बोल रही हूँ। मैं आपकी कैसे मदद कर सकती हूँ?", t: 600 },
      { spk: "customer", isAr: false, text: "नमस्ते मरियम। मैं सेवा मंत्रालय से हसन हूँ। हमें एक समाधान चाहिए।", t: 2800 },
      { spk: "agent", isAr: false, text: "नमस्ते हसन! हमारे पास सरकारी संस्थाओं के लिए एक व्यापक समाधान है।", t: 5000 },
      { spk: "customer", isAr: false, text: "हमें खरीद प्रक्रियाओं पर चर्चा करने के लिए एक आधिकारिक बैठक की आवश्यकता होगी।", t: 8400 },
      { spk: "agent", isAr: false, text: "बेशक! हम नियमों के अनुपालन के साथ एक औपचारिक प्रस्ताव तैयार करेंगे।", t: 10200 },
      { spk: "customer", isAr: false, text: "शानदार, कृपया हमसे औपचारिक रूप से संपर्क करें।", t: 13000 },
      { spk: "agent", isAr: false, text: "मैंने इस रविवार सुबह 10 बजे आपके लिए बैठक बुक कर दी है। आपको ईमेल और व्हाट्सएप के माध्यम से पुष्टि मिल जाएगी ✅", t: 14600 },
    ]`;

let newScenariosStr = scenariosStr;
newScenariosStr = newScenariosStr.replace(/linesAr: \[\s*\{ spk: "agent", isAr: true, text: "مرحبا(.+)\]\n/s, (match) => match + ",\n" + block0 + "\n");
newScenariosStr = newScenariosStr.replace(/linesAr: \[\s*\{ spk: "agent", isAr: true, text: "مساء الخير(.+)\]\n/s, (match) => match + ",\n" + block1 + "\n");
newScenariosStr = newScenariosStr.replace(/linesAr: \[\s*\{ spk: "agent", isAr: true, text: "مرحباً! خدمة عملاء(.+)\]\n/s, (match) => match + ",\n" + block2 + "\n");
newScenariosStr = newScenariosStr.replace(/linesAr: \[\s*\{ spk: "agent", isAr: true, text: "مرحباً، طاب(.+)\]\n/s, (match) => match + ",\n" + block3 + "\n");
newScenariosStr = newScenariosStr.replace(/linesAr: \[\s*\{ spk: "agent", isAr: true, text: "هلا وغلا، معاج(.+)\]\n/s, (match) => match + ",\n" + block4 + "\n");

content = content.replace(scenariosStr, newScenariosStr);

fs.writeFileSync('components/LiveDemoSection.tsx', content);
console.log("Successfully patched lines.");
