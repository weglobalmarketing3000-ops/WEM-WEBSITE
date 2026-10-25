import fs from 'node:fs/promises';
import { execFileSync } from 'node:child_process';

const expectedDeployment = process.argv[2] || '';
const domains = ['https://www.weglobalmarketing.com', 'https://weglobalmarketing.com'];
const targets = [
  ['tiktok-shop-shipping-protection-insurance-evidence', '2026-10-25'],
  ['tiktok-shop-bfcm-virtual-bundles-inventory-returns', '2026-10-24'],
  ['tiktok-shop-bfcm-better-price-rewards-margin-returns-fees', '2026-10-23'],
  ['tiktok-shop-smart-promotion-performance-cost-growth', '2026-10-22'],
  ['tiktok-shop-order-to-appeal-evidence-ledger', '2026-10-21'],
  ['tiktok-shop-return-inspection-photo-evidence', '2026-10-20'],
  ['tiktok-shop-chargeback-seven-day-evidence-pack', '2026-10-19'],
  ['tiktok-shop-return-rejection-evidence-isrr-risk', '2026-10-18'],
  ['tiktok-shop-aftersales-automation-approval-rules', '2026-10-17'],
  ['tiktok-shop-bfcm-2026-holiday-returns-liability', '2026-10-16'],
];
const redirects = [
  ['tiktok-shop-bfcm-virtual-bundles-offer-inventory-returns', targets[1][0]],
  ['tiktok-shop-smart-promotion-performance-cost', targets[3][0]],
  ['tiktok-shop-return-inspection-six-photo-evidence', targets[5][0]],
  ['tiktok-shop-bfcm-2026-holiday-return-window-liability', targets[9][0]],
];
const get = async (base, route, redirect = 'follow') => {
  const separator = route.includes('?') ? '&' : '?';
  const response = await fetch(`${base}${route}${separator}v=${Date.now()}`, {
    redirect,
    headers: { 'cache-control': 'no-cache', pragma: 'no-cache' },
  });
  return {
    status: response.status,
    url: response.url,
    location: response.headers.get('location'),
    cache: response.headers.get('cache-control'),
    text: await response.text(),
  };
};

const inspect = JSON.parse(execFileSync('npx', ['vercel', 'inspect', domains[0], '--format=json'], { encoding: 'utf8' }));
const pages = await Promise.all(targets.flatMap(([slug]) => [
  get(domains[0], `/blog/${slug}`),
  get(domains[0], `/blog/${slug}?lang=zh`),
]));
const [list, sitemap, llms] = await Promise.all([
  get(domains[0], '/BlogList.compiled.js'),
  get(domains[0], '/sitemap.xml'),
  get(domains[0], '/llms.txt'),
]);
const entries = [...list.text.matchAll(/(?:\{|,)"?slug"?:"([a-z0-9-]+)"/g)].map((match) => match[1]);

const images = [];
for (const page of pages.slice(0, 6)) {
  const sources = [...new Set([...page.text.matchAll(/<img[^>]+src="([^"]+)"/g)].map((match) => match[1]))];
  for (const source of sources) {
    const response = await get(domains[0], source.startsWith('http') ? new URL(source).pathname : source);
    images.push([source, response.status]);
  }
}

const redirectResults = [];
for (const domain of domains) {
  for (const [oldSlug, destinationSlug] of redirects) {
    for (const language of ['', '?lang=zh']) {
      const apex = new URL(domain).host === 'weglobalmarketing.com';
      const response = await get(domain, `/blog/${oldSlug}${language}`, apex ? 'follow' : 'manual');
      const location = response.location ? new URL(response.location, domain) : null;
      const final = new URL(response.url);
      redirectResults.push(apex
        ? response.status === 200 && final.pathname === `/blog/${destinationSlug}` && (!language || final.searchParams.get('lang') === 'zh')
        : response.status === 308 && location?.pathname === `/blog/${destinationSlug}` && (!language || location.searchParams.get('lang') === 'zh'));
    }
  }
}

const dates = targets.every(([, date], index) => {
  const match = pages[index * 2].text.match(/<script type="application\/ld\+json">([^]*?)<\/script>/);
  return match && JSON.parse(match[1])['@graph']
    .filter((node) => node['@type'] === 'BlogPosting')
    .every((node) => node.datePublished === date);
});
const q429 = pages[0].text;
const q428 = pages[2].text;
const q427 = pages[4].text;
const checks = [
  ['custom domain deployment', !expectedDeployment || inspect.id === expectedDeployment],
  ['deployment READY', inspect.readyState === 'READY'],
  ['q4-29 through q4-20 order', targets.every(([slug], index) => entries[index] === slug)],
  ['all bilingual routes 200', pages.every((page) => page.status === 200)],
  ['all BlogPosting dates', dates],
  ['q4-29 through q4-27 images 200', images.length >= 18 && images.every(([, status]) => status === 200)],
  ['q4-29 localized body visuals', q429.includes('evidence-chain-en-v1.svg') && q429.includes('claim-closeout-en-v1.svg') && q429.includes('evidence-chain-zh-v1.svg') && q429.includes('claim-closeout-zh-v1.svg')],
  ['q4-29 current meta and CTA', q429.includes('在 TikTok Shop 包裹丢失、破损或 DNR 前') && !q429.includes('Better Price Rewards 先把毛利') && q429.includes('Turn shipping protection into a readable evidence and claim system.') && q429.includes('把物流保障变成有证据、可读回的案件系统。')],
  ['q4-29 complete citations', ['1043867350730510', '3569596666382098', '2334828973737741'].every((id) => q429.includes(id))],
  ['q4-28 localized body visuals', q428.includes('fact-chain-en-v1.svg') && q428.includes('offer-return-chain-en-v1.svg') && q428.includes('fact-chain-zh-v1.svg') && q428.includes('offer-return-chain-zh-v1.svg')],
  ['q4-27 continuity', q427.includes('expiry-review-en-v2.svg') && q427.includes('expiry-review-zh-v2.svg')],
  ['q4-29 CTA/footer', q429.includes('READY TO TALK') && q429.includes('<footer class="footer">')],
  ['q4-29 sitemap EN/ZH', sitemap.text.includes(`<loc>${domains[0]}/blog/${targets[0][0]}</loc><lastmod>2026-10-25</lastmod>`) && sitemap.text.includes(`<loc>${domains[0]}/blog/${targets[0][0]}?lang=zh</loc><lastmod>2026-10-25</lastmod>`) ],
  ['q4-29 llms', llms.text.includes(`${domains[0]}/blog/${targets[0][0]}`)],
  ['article no-store', pages[0].cache?.includes('no-store')],
  ['legacy redirects both domains', redirectResults.every(Boolean)],
];
const report = {
  verifiedAt: new Date().toISOString(),
  deploymentId: inspect.id,
  readyState: inspect.readyState,
  ranks: Object.fromEntries(targets.map(([slug]) => [slug, entries.indexOf(slug) + 1])),
  imageRequests: images.length,
  redirectChecks: redirectResults.length,
  checks,
  passed: checks.every(([, passed]) => passed),
};
await fs.writeFile('outputs/2026-10-25-q4-29-verifier.json', `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify(report, null, 2));
if (!report.passed) process.exitCode = 1;
