import { execSync } from 'child_process';
execSync('git checkout pages/Home.tsx pages/AqionVox.tsx');
console.log('Restored');
