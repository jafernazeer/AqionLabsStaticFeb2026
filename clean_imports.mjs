import fs from 'fs';

function cleanFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove imports for VAPI_ASSISTANT_ID, VAPI_PUBLIC_KEY_ARABIC, VAPI_ASSISTANT_ID_ARABIC
  content = content.replace(/import\s*\{\s*VAPI_PUBLIC_KEY,\s*VAPI_ASSISTANT_ID,\s*VAPI_PUBLIC_KEY_ARABIC,\s*VAPI_ASSISTANT_ID_ARABIC\s*\}\s*from\s*'[^']+';\n*/g, '');
  
  // Remove Loader2 and PhoneOff from lucide-react import
  content = content.replace(/,\s*Loader2,\s*PhoneOff/g, '');
  content = content.replace(/,\s*PhoneOff,\s*Loader2/g, '');
  content = content.replace(/Loader2,\s*PhoneOff\s*,?/g, '');
  content = content.replace(/Loader2\s*,?/g, '');
  content = content.replace(/PhoneOff\s*,?/g, '');
  
  // Also maybe Vapi import?
  content = content.replace(/import Vapi from '@vapi-ai\/web';\n*/g, '');

  fs.writeFileSync(filePath, content);
}

cleanFile('pages/Home.tsx');
cleanFile('pages/AqionVox.tsx');
console.log('Cleaned up unused imports');
