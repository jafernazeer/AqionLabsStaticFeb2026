import fs from 'fs';

const path = 'components/LiveDemoSection.tsx';
let data = fs.readFileSync(path, 'utf8');

// replace \` with `
data = data.replace(/\\`/g, '`');
// replace \$ with $
data = data.replace(/\\\$/g, '$');

fs.writeFileSync(path, data);
console.log('Fixed syntax in LiveDemoSection.tsx');
