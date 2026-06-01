import fs from 'fs';
import prettier from 'prettier';

const content = fs.readFileSync('dist/assets/Home-CzfvMoEv.js', 'utf8');
const formatted = await prettier.format(content, { parser: 'babel' });
fs.writeFileSync('dist/assets/Home-formatted.js', formatted);
