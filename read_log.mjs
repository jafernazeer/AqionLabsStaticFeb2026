import fs from 'fs';

const logPath = '/.gemini/antigravity/brain/e1d2feb7-32d0-4f39-9a14-68698380df12/.system_generated/logs/transcript.jsonl';
if (fs.existsSync(logPath)) {
    const lines = fs.readFileSync(logPath, 'utf8').split('\n');
    console.log(`Found log file, lines: ${lines.length}`);
} else {
    console.log('Log file not found');
}
