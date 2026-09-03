import fs from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve('ui_kits/website');
const sitemap = await fs.readFile(path.join(root, 'sitemap.xml'), 'utf8');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);

function sourceFor(url) {
  const pathname = new URL(url).pathname;
  return pathname === '/' ? 'index.html' : `${pathname.replace(/^\//, '')}.html`;
}

function koFor(url) {
  const pathname = new URL(url).pathname;
  return pathname === '/' ? 'ko/index.html' : `ko${pathname}.html`;
}

const rows = [
  ['route', 'source_file', 'ko_file', 'type', 'translation', 'metadata', 'schema', 'links', 'desktop', 'mobile', 'language_review', 'notes'],
  ...urls.map((url) => [
    url,
    sourceFor(url),
    koFor(url),
    new URL(url).pathname.startsWith('/blog/') ? 'blog' : 'core',
    'incomplete',
    'pending',
    'pending',
    'pending',
    'pending',
    'pending',
    'pending',
    '',
  ]),
];

await fs.mkdir('localization/ko', { recursive: true });
await fs.writeFile('localization/ko/ledger.tsv', rows.map((row) => row.join('\t')).join('\n') + '\n');
console.log(JSON.stringify({
  routes: urls.length,
  core: rows.filter((row) => row[3] === 'core').length,
  blog: rows.filter((row) => row[3] === 'blog').length,
  ledger: 'localization/ko/ledger.tsv',
}, null, 2));
