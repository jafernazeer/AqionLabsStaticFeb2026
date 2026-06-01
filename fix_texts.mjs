import fs from 'fs';

let content = fs.readFileSync('components/LiveDemoSection.tsx', 'utf8');

content = content.replace(
  /Hear the AI that<br\/>\s*<em[^>]*>thinks in Arabic\.<\/em>/g,
  `Meet the AI that<br/>\n                        <em className="not-italic text-[#00e5a0]">thinks like your best employee.</em>`
);

content = content.replace(
  /Select a scenario below and hear how AqionVox handles real customer conversations —\s*across dialects, industries, and languages — with human-like clarity and sub-800ms response time\./g,
  `AqionVox learns your products, your processes, and your tone — then answers every call, message, and enquiry exactly as your best team member would 24/7, in Arabic, English and Hindi.</p>\n                    <p className="text-[17px] text-[#7a93b8] leading-[1.65] max-w-[560px] md:max-w-[800px] mb-12">\n                        Select a scenario to hear how AqionVox handles real customer conversations — across dialects, industries, and languages — with human-like clarity and sub-800ms response time.`
);

// 4. replace the integration bottom banner, and replace it with all the relevant UAE compliances.
content = content.replace(
    /\{"VAPI.ai Powered", "Deepgram STT", "ElevenLabs Voices", "AWS me-south-1 \(UAE\)", "GDPR & UAE Data Compliant", "Zero Hold Time"\}/g,
    `["TDRA Compliant", "UAE PDPL (Federal Decree-Law No. 45)", "DIFC Data Protection Law", "ADGM Data Protection", "UAE Data Residency", "Enterprise-Grade Security"]`
);

fs.writeFileSync('components/LiveDemoSection.tsx', content);
console.log('Fixed texts');
