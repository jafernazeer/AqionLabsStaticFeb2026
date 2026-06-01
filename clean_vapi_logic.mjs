import fs from 'fs';

function removeVapiLogic(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  const startMarker = "const [callStatus, setCallStatus]";
  // We'll search for the end of toggleCall
  const endMarker = "setCallStatus('inactive');\n      setActiveAgentId(null);\n    }\n  };";

  const startIndex = content.indexOf(startMarker);
  const endIndex = content.indexOf(endMarker);

  if (startIndex !== -1 && endIndex !== -1) {
    console.log('Found vapi logic in', filePath);
    content = content.substring(0, startIndex) + content.substring(endIndex + endMarker.length);
  } else {
    console.log('Skipped', filePath, startIndex, endIndex);
  }

  // Remove `Vapi` type if it exists in imports. Already handled.
  fs.writeFileSync(filePath, content);
}

removeVapiLogic('pages/Home.tsx');
removeVapiLogic('pages/AqionVox.tsx');
