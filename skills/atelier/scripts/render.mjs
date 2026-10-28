#!/usr/bin/env node
// Renderiza HTML em PNG com o Chromium (Playwright).
// Uso:
//   node render.mjs pagina.html [outra.html ...] [--out pasta]            -> desktop (1440) + mobile (390), página inteira
//   node render.mjs slide-*.html --social [--size 1080x1350] [--out pasta] -> PNG 2x (2160x2700) + carrossel.zip
// Requer: npm i -D playwright && npx playwright install chromium
import { chromium } from 'playwright';
import { mkdirSync, existsSync } from 'node:fs';
import { resolve, basename, join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { execFileSync } from 'node:child_process';

const args = process.argv.slice(2);
const flag = (n) => args.includes(n);
const opt = (n, d) => { const i = args.indexOf(n); return i >= 0 ? args[i + 1] : d; };
const files = args.filter((a, i) => !a.startsWith('--') && !['--out', '--size'].includes(args[i - 1]));
if (!files.length) { console.error('Informe ao menos um arquivo .html'); process.exit(1); }

const out = resolve(opt('--out', 'render'));
mkdirSync(out, { recursive: true });
const social = flag('--social');
const [w, h] = opt('--size', '1080x1350').split('x').map(Number);

const browser = await chromium.launch();
const made = [];
for (const f of files.sort()) {
  const url = pathToFileURL(resolve(f)).href;
  const name = basename(f).replace(/\.html?$/i, '');
  const shots = social
    ? [{ tag: '2x', vp: { width: w, height: h }, scale: 2, full: false }]
    : [{ tag: 'desktop', vp: { width: 1440, height: 900 }, scale: 1, full: true },
       { tag: 'mobile', vp: { width: 390, height: 844 }, scale: 2, full: true }];
  for (const s of shots) {
    const page = await browser.newPage({ viewport: s.vp, deviceScaleFactor: s.scale });
    await page.goto(url, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
    const p = join(out, `${name}-${s.tag}.png`);
    await page.screenshot({ path: p, fullPage: s.full });
    made.push(p);
    console.log(`${overflow ? '⚠ overflow horizontal' : '✓'} ${p}`);
    await page.close();
  }
}
await browser.close();

if (social && made.length > 1) {
  const zip = join(out, 'carrossel.zip');
  try {
    if (process.platform === 'win32') {
      execFileSync('powershell', ['-NoProfile', '-Command',
        `Compress-Archive -Force -Path ${made.map((m) => `'${m}'`).join(',')} -DestinationPath '${zip}'`]);
    } else {
      execFileSync('zip', ['-j', '-q', zip, ...made]);
    }
    console.log(`✓ ${zip}`);
  } catch { console.log('zip não gerado (zip/PowerShell indisponível); os PNGs estão na pasta.'); }
}
if (!existsSync(out)) process.exit(1);
