const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/features/tools/copy.ts');
let content = fs.readFileSync(filePath, 'utf-8');

const locales = ["en", "ko", "fr", "ja", "zh", "zh-TW", "pt", "es", "de", "ar"];

for (const loc of locales) {
    const locMatch = loc === "zh-TW" ? `"zh-TW"` : loc;
    // Find the tools block
    // regex: locale: { ... tools: { (CONTENT) }
    const regex = new RegExp(`(${locMatch}:\\s*\\{[\\s\\S]*?tools:\\s*\\{)([\\s\\S]*?)(\\s*\\},[\\s\\S]*?common:)`);
    
    content = content.replace(regex, (match, prefix, toolsContent, suffix) => {
        const lines = toolsContent.split('\n');
        const seen = new Set();
        const keptLines = [];
        
        // We want to keep the NEWER versions which are usually at the bottom or top depending on how I injected.
        // Based on view_file:
        // 194: base64encoder (SHORT)
        // 196: base64encoder (LONG/FULL)
        // So we want to keep the LAST occurrence.
        
        const reversed = [...lines].reverse();
        for (const line of reversed) {
            const m = line.match(/^\s*(\w+):/);
            if (m) {
                const key = m[1];
                if (seen.has(key)) continue;
                seen.add(key);
            }
            keptLines.push(line);
        }
        
        return prefix + keptLines.reverse().join('\n') + suffix;
    });
}

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Fixed duplicates in copy.ts');
