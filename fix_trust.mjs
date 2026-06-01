import fs from 'fs';

let content = fs.readFileSync('components/LiveDemoSection.tsx', 'utf8');

content = content.replace(
    /\[\s*"VAPI\.ai Powered"\s*,\s*"Deepgram STT"\s*,\s*"ElevenLabs Voices"\s*,\s*"AWS me-south-1 \(UAE\)"\s*,\s*"GDPR & UAE Data Compliant"\s*,\s*"Zero Hold Time"\s*\]/g,
    `["TDRA Compliant", "UAE PDPL (Federal Decree-Law No. 45)", "DIFC Data Protection Law", "ADGM Data Protection", "UAE Data Residency", "Enterprise-Grade Security"]`
);

fs.writeFileSync('components/LiveDemoSection.tsx', content);
console.log('Fixed trust strip');
