import fs from 'fs';

function removeLines(filePath, startMarker, endMarker) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  
  let result = [];
  let skipping = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes(startMarker)) {
      skipping = true;
    }
    
    if (!skipping) {
      result.push(line);
    }
    
    if (skipping && line.includes(endMarker)) {
      // Check if next lines are '  };\n'
      if (lines[i] === '    }' && lines[i+1] === '  };') {
         skipping = false;
         i++; // skip '  };\n'
      }
    }
  }
  
  fs.writeFileSync(filePath, result.join('\n'));
}

removeLines('pages/Home.tsx', "const [callStatus, setCallStatus] = useState<'inactive' | 'loading' | 'active'>('inactive');", "setActiveAgentId(null);");
removeLines('pages/AqionVox.tsx', "const [callStatus, setCallStatus] = useState<'inactive' | 'loading' | 'active'>('inactive');", "setActiveAgentId(null);");
console.log('Done');
