import { execFileSync } from 'node:child_process';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const scripts = [
    'core-utils.js',
    'llm.js',
    'language-utils.js',
    'magical-titles.js',
    'lucide-icons.js',
    'three-renderer.js',
    'app.js'
];

for (const script of scripts) {
    execFileSync(process.execPath, ['--check', resolve(root, script)], { stdio: 'inherit' });
}

const html = await readFile(resolve(root, 'index.html'), 'utf8');
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
if (duplicates.length) throw new Error(`Duplicate HTML ids: ${[...new Set(duplicates)].join(', ')}`);
console.log(`Checked ${scripts.length} scripts and ${ids.length} unique HTML ids.`);
