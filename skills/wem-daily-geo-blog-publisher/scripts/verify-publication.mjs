#!/usr/bin/env node

const args = process.argv.slice(2);
const value = (flag) => args[args.indexOf(flag) + 1];
const date = value('--date');
const slug = value('--slug');
const rank = Number(value('--rank') || 1);
if (!/^\d{4}-\d{2}-\d{2}$/.test(date || '') || !/^[a-z0-9-]+$/.test(slug || '') || !Number.isInteger(rank) || rank < 1) {
  console.error('Usage: verify-publication.mjs --date YYYY-MM-DD --slug target-slug [--rank N]');
  process.exit(2);
}

const base = 'https://www.weglobalmarketing.com';
const enDate = new Intl.DateTimeFormat('en-US', {
  timeZone: 'America/Los_Angeles', month: 'short', day: 'numeric', year: 'numeric'
}).format(new Date(`${date}T12:00:00-07:00`));
const expectedCard = `slug:"${slug}"`;
const expectedDate = `date:{en:"${enDate}"`;
const get = async (path) => {
  const response = await fetch(`${base}${path}`);
  if (!response.ok) throw new Error(`${path} returned HTTP ${response.status}`);
  return response.text();
};

try {
  const [indexJs, enPage, zhPage, sitemap] = await Promise.all([
    get('/BlogList.compiled.js'),
    get(`/blog/${slug}`),
    get(`/blog/${slug}?lang=zh`),
    get('/sitemap.xml'),
  ]);
  const listSource = indexJs.slice(indexJs.indexOf('const BLOG_POSTS=['), indexJs.indexOf('const BLOG_TAGS='));
  const entryStarts = [...listSource.matchAll(/\{slug:"([a-z0-9-]+)"/g)];
  const rankedEntry = entryStarts[rank - 1];
  const rankedEntryEnd = entryStarts[rank]?.index ?? listSource.length;
  const entry = rankedEntry ? listSource.slice(rankedEntry.index, rankedEntryEnd) : '';
  const requirements = [
    [`blog-card rank ${rank} slug`, entry.includes(expectedCard)],
    [`blog-card rank ${rank} visible EN date`, entry.includes(expectedDate)],
    ['English BlogPosting datePublished', new RegExp(`"datePublished"\\s*:\\s*"${date}"`).test(enPage)],
    ['Chinese BlogPosting datePublished', new RegExp(`"datePublished"\\s*:\\s*"${date}"`).test(zhPage)],
    ['sitemap URL and lastmod', new RegExp(`<loc>${base}/blog/${slug}</loc><lastmod>${date}</lastmod>`).test(sitemap)],
  ];
  const failures = requirements.filter(([, pass]) => !pass).map(([name]) => name);
  console.log(JSON.stringify({ date, slug, rank, checks: requirements, passed: failures.length === 0 }, null, 2));
  if (failures.length) process.exit(1);
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
