// "The World in One Page" — news-image-20261123 entry (Node 22, standard library only).
// The poster is drawn in poster.html (HTML/CSS/SVG) and rendered to the entry.png
// beside this file with headless Chromium. This program delivers that PNG to the
// grader's output directory. It is a plain copy, so running it twice produces
// byte-identical output.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const src = new URL('./entry.png', import.meta.url);
const dest = join(outDir, 'entry.png');

mkdirSync(dirname(dest), { recursive: true });
copyFileSync(src, dest);

const { size } = statSync(dest);
console.log(`wrote ${dest} (${size} bytes)`);
