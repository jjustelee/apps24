const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/features/tools/copy.ts');
let content = fs.readFileSync(filePath, 'utf-8');

// 1. Fix double keys in each locale block
// This is non-trivial with regex because of nested objects.
// Let's use a simpler approach: process line by line or use a smarter regex.

const locales = ["en", "ko", "fr", "ja", "zh", "zh-TW", "pt", "es", "de", "ar"];

for (const loc of locales) {
    const locMatch = loc === "zh-TW" ? `"zh-TW"` : loc;
    const blockRegex = new RegExp(`(${locMatch}:\\s*\\{[\\s\\S]*?tools:\\s*\\{)([\\s\\S]*?)(\\},[\\s\\S]*?common:)`);
    
    content = content.replace(blockRegex, (match, p1, p2, p3) => {
        const lines = p2.split('\n');
        const seenKeys = new Set();
        const newLines = [];
        
        // Reverse iterate or just keep the last one found for these specific keys
        // Actually, the last one found in my previous injection was the GOOD one with full translation.
        const reversedLines = [...lines].reverse();
        for (const line of reversedLines) {
            const keyMatch = line.match(/^\s*(\w+):/);
            if (keyMatch) {
                const key = keyMatch[1];
                if (seenKeys.has(key)) {
                    continue; // Skip earlier (which were injected at top) duplicates
                }
                seenKeys.add(key);
            }
            newLines.push(line);
        }
        return p1 + newLines.reverse().join('\n') + p3;
    });
}

// 2. Fix the double customColor in CommonText
// This was already fixed by my previous replace_file_content but let's be sure.

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Cleaned up duplicate keys in copy.ts');
