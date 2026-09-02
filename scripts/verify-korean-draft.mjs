import fs from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve('ui_kits/website');
const ledgerPath = path.resolve('localization/ko/ledger.tsv');
const lines = (await fs.readFile(ledgerPath, 'utf8')).trim().split('\n');
const header = lines.shift().split('\t');
const rows = lines.map((line) => Object.fromEntries(line.split('\t').map((value, index) => [header[index], value])));
const failures = [];
const summary = { total: rows.length, complete: 0, incomplete: 0, missing: 0 };

for (const row of rows) {
  const target = path.join(root, row.ko_file);
  let html = '';
  try {
    html = await fs.readFile(target, 'utf8');
  } catch {
    summary.missing += 1;
    if (row.translation === 'complete') failures.push(`${row.route}: marked complete but missing ${row.ko_file}`);
    continue;
  }
  if (row.translation === 'complete') summary.complete += 1;
  else summary.incomplete += 1;
  const checks = [
    ['lang', /<html[^>]+lang=["']ko-KR["']/i],
    ['canonical', /<link[^>]+rel=["']canonical["'][^>]+href=["']https:\/\/www\.weglobalmarketing\.com\/ko\//i],
    ['hreflang-ko', /hreflang=["']ko-KR["']/i],
    ['title', /<title>[^<가-힣]*[가-힣][^<]*<\/title>/i],
    ['description', /<meta[^>]+name=["']description["'][^>]+content=["'][^"']*[가-힣]/i],
    ['h1', /<h1[^>]*>[\s\S]*?[가-힣][\s\S]*?<\/h1>/i],
    ['language-switcher', /한국어/],
  ];
  for (const [name, pattern] of checks) if (!pattern.test(html)) failures.push(`${row.route}: ${name} check failed`);
  if (row.type === 'blog' && !/"inLanguage"\s*:\s*"ko-KR"/.test(html)) failures.push(`${row.route}: Korean BlogPosting schema missing`);
}

console.log(JSON.stringify({ summary, failures: failures.slice(0, 200), failureCount: failures.length }, null, 2));
if (failures.length) process.exitCode = 1;
