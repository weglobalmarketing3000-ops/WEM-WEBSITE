import fs from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const accepted = path.join(root, 'outputs/2026-10-29-gift-search-production-readback-final');
const current = path.join(root, 'outputs/2026-10-30-gift-search-current-origin/changed');
const expected = path.join(root, 'outputs/patches/2026-10-30-gift-search-final-expected');
const repair = path.join(root, 'outputs/patches/2026-10-30-gift-search-continuity-repair');
const slug = 'tiktok-shop-bfcm-2026-gift-search-product-page';

await fs.rm(expected, {recursive: true, force: true});
await fs.rm(repair, {recursive: true, force: true});
await fs.cp(accepted, expected, {recursive: true});

const currentFiles = [
  'blog.html',
  `blog/hero-${slug}-en-v2.png`,
  `blog/hero-${slug}-zh-v2.png`,
  `blog/optimized/hero-${slug}-en-v2.jpg`,
  `blog/optimized/hero-${slug}-zh-v2.jpg`,
  `blog/thumbs/hero-${slug}-en-v2.jpg`,
  `blog/thumbs/hero-${slug}-zh-v2.jpg`,
];
for (const relative of currentFiles) {
  const destination = path.join(expected, relative);
  await fs.mkdir(path.dirname(destination), {recursive: true});
  await fs.copyFile(path.join(current, relative), destination);
}

const repairFiles = [
  `blog/${slug}.html`,
  `blog/${slug}/gift-readiness-gate-en-v1.svg`,
  `blog/${slug}/gift-readiness-gate-zh-v1.svg`,
  'vercel.json',
];
for (const relative of repairFiles) {
  const destination = path.join(repair, relative);
  await fs.mkdir(path.dirname(destination), {recursive: true});
  await fs.copyFile(path.join(expected, relative), destination);
}

async function countFiles(directory) {
  let count = 0;
  for (const entry of await fs.readdir(directory, {withFileTypes: true})) {
    if (entry.isDirectory()) count += await countFiles(path.join(directory, entry.name));
    else count += 1;
  }
  return count;
}

console.log(JSON.stringify({
  expected,
  expectedFiles: await countFiles(expected),
  repair,
  repairFiles: await countFiles(repair),
}, null, 2));
