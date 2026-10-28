#!/usr/bin/env node
// Confere uma página renderizada: contraste WCAG AA de cada texto visível e cores usadas.
// Uso: node check.mjs pagina.html [--palette "#111827,#0869f5,#ffffff"] [--width 1440]
// Sai com código 1 se houver texto abaixo de AA.
import { chromium } from 'playwright';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const args = process.argv.slice(2);
const opt = (n, d) => { const i = args.indexOf(n); return i >= 0 ? args[i + 1] : d; };
const file = args.find((a, i) => !a.startsWith('--') && !['--palette', '--width'].includes(args[i - 1]));
if (!file) { console.error('Informe o arquivo .html'); process.exit(1); }
const palette = (opt('--palette', '') || '').split(',').map((s) => s.trim().toLowerCase()).filter(Boolean);

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: Number(opt('--width', 1440)), height: 900 } });
await page.goto(pathToFileURL(resolve(file)).href, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);

const result = await page.evaluate(() => {
  const parse = (c) => { const m = c.match(/rgba?\(([^)]+)\)/); if (!m) return null; const [r, g, b, a = 1] = m[1].split(/[ ,/]+/).filter(Boolean).map(Number); return { r, g, b, a }; };
  const hex = ({ r, g, b }) => '#' + [r, g, b].map((v) => Math.round(v).toString(16).padStart(2, '0')).join('');
  const lum = ({ r, g, b }) => { const f = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; }; return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b); };
  const ratio = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };
  const bgOf = (el) => { for (let e = el; e; e = e.parentElement) { const c = parse(getComputedStyle(e).backgroundColor); if (c && c.a > 0.5) return c; } return { r: 255, g: 255, b: 255, a: 1 }; };
  const colors = new Set(); const fails = [];
  for (const el of document.querySelectorAll('body *')) {
    const cs = getComputedStyle(el);
    [cs.color, cs.backgroundColor, cs.borderTopColor].forEach((c) => { const p = parse(c); if (p && p.a > 0) colors.add(hex(p)); });
    const own = [...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim());
    const r = el.getBoundingClientRect();
    if (!own || !r.width || cs.visibility === 'hidden' || Number(cs.opacity) === 0) continue;
    const fg = parse(cs.color), bg = bgOf(el); const size = parseFloat(cs.fontSize); const bold = Number(cs.fontWeight) >= 700;
    const large = size >= 24 || (bold && size >= 18.66); const need = large ? 3 : 4.5; const got = ratio(fg, bg);
    if (got < need) fails.push({ texto: el.textContent.trim().slice(0, 40), cor: hex(fg), fundo: hex(bg), contraste: got.toFixed(2), minimo: need });
  }
  return { colors: [...colors], fails };
});
await browser.close();

if (result.fails.length) { console.log(`✗ ${result.fails.length} texto(s) abaixo de AA:`); console.table(result.fails); }
else console.log('✓ Contraste AA ok em todos os textos visíveis');
console.log(`Cores em uso (${result.colors.length}): ${result.colors.join(' ')}`);
if (palette.length) {
  const off = result.colors.filter((c) => !palette.includes(c));
  console.log(off.length ? `⚠ Fora da paleta: ${off.join(' ')}` : '✓ Todas as cores estão na paleta');
}
process.exit(result.fails.length ? 1 : 0);
