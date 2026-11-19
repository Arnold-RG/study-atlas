// Dependency-free browser-site source checks, not an iOS/Android device certification.
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {resolve} from 'node:path';
const req=['index.html','web/assets/styles.css','web/assets/app.js','web/assets/curriculum.js','web/assets/info.js','web/assets/markdown.js'];
for(const f of req) assert(existsSync(resolve(f)), 'Missing required file: '+f);
const html=readFileSync('index.html','utf8');
const css=readFileSync('web/assets/styles.css','utf8');
for(const [re,label] of [
[/<meta[^>]+name="viewport"/i,'viewport'],
[/<main(?:\s|>)/i,'main landmark'],
[/data-theme/i,'light/night theme'],
[/<script\s+src="web\/assets\/app\.js"/i,'application script']
]) assert(re.test(html),'Missing '+label);
for(const [re,label] of [
[/@media\s*\(max-width:/i,'mobile breakpoints'],
[/prefers-reduced-motion/i,'reduced-motion support'],
[/\.cover\s*\{/i,'cover layout'],
[/\.spine\s*\{/i,'curriculum navigation']
]) assert(re.test(css),'Missing '+label);
console.log('PASS Study Atlas source-level web compatibility checks on '+process.platform);
