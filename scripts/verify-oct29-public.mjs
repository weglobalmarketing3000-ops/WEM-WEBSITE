import fs from 'node:fs/promises';
import { execFileSync } from 'node:child_process';

const expectedDeployment = process.argv[2] || '';
const domains = ['https://www.weglobalmarketing.com', 'https://weglobalmarketing.com'];
const targets = [
  ['tiktok-shop-bfcm-2026-gift-search-product-page', '2026-10-29'],
  ['tiktok-shop-bfcm-2026-live-event-planning', '2026-10-28'],
  ['tiktok-shop-bfcm-2026-creator-content-runway', '2026-10-27'],
  ['tiktok-shop-order-cancellation-control', '2026-10-26'],
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
  ['tiktok-shop-bfcm-virtual-bundles-offer-inventory-returns', targets[5][0]],
  ['tiktok-shop-smart-promotion-performance-cost', targets[7][0]],
  ['tiktok-shop-return-inspection-six-photo-evidence', targets[9][0]],
  ['tiktok-shop-bfcm-2026-holiday-return-window-liability', targets[13][0]],
];

async function get(base, route, redirect = 'follow') {
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
}

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

const imageRequests = [];
for (const page of pages.slice(0, 12)) {
  const sources = [...new Set([...page.text.matchAll(/<img[^>]+src="([^"]+)"/g)].map((match) => match[1]))];
  for (const source of sources) {
    const route = source.startsWith('http') ? new URL(source).pathname : source;
    const response = await get(domains[0], route);
    imageRequests.push({ source, status: response.status });
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
      redirectResults.push({
        domain,
        oldSlug,
        language: language || 'en',
        passed: apex
          ? response.status === 200 && final.pathname === `/blog/${destinationSlug}` && (!language || final.searchParams.get('lang') === 'zh')
          : response.status === 308 && location?.pathname === `/blog/${destinationSlug}` && (!language || location.searchParams.get('lang') === 'zh'),
      });
    }
  }
}

const dates = targets.every(([, date], index) => {
  const match = pages[index * 2].text.match(/<script type="application\/ld\+json">([^]*?)<\/script>/);
  return match && JSON.parse(match[1])['@graph']
    .filter((node) => node['@type'] === 'BlogPosting')
    .every((node) => node.datePublished === date);
});
const giftSearch = pages[0].text;
const liveEvent = pages[2].text;
const creator = pages[4].text;
const q430 = pages[6].text;
const q429 = pages[8].text;
const q428 = pages[10].text;
const checks = [
  ['custom domain deployment', !expectedDeployment || inspect.id === expectedDeployment],
  ['deployment READY', inspect.readyState === 'READY'],
  ['gift search through q4-20 order', targets.every(([slug], index) => entries[index] === slug)],
  ['all bilingual routes 200', pages.every((page) => page.status === 200)],
  ['all BlogPosting dates', dates],
  ['current and continuity images 200', imageRequests.length >= 36 && imageRequests.every(({ status }) => status === 200)],
  ['gift-search localized body visuals', ['gift-search-en-v1.svg', 'gift-readiness-gate-en-v1.svg', 'gift-search-zh-v1.svg', 'gift-readiness-gate-zh-v1.svg'].every((asset) => giftSearch.includes(asset))],
  ['gift-search corrected covers', ['gift-search-product-page-en-v2.png', 'gift-search-product-page-zh-v2.png'].every((asset) => giftSearch.includes(asset)) && !giftSearch.includes('gift-search-product-page-en-v1.png') && !giftSearch.includes('gift-search-product-page-zh-v1.png')],
  ['gift-search CTA and footer', giftSearch.includes('Connect one credible gift idea to a product page') && giftSearch.includes('把一个可信的送礼理由接到用户找得到') && giftSearch.includes('READY TO TALK') && giftSearch.includes('<footer class="footer">')],
  ['gift-search complete current sources', giftSearch.includes('26854147802894') && giftSearch.includes('case-fashion-cold-start') && !giftSearch.includes('case-beauty-gmv-growth') && giftSearch.includes('Source review refreshed October 29, 2026')],
  ['live event continuity', ['live-plan-en-v1.svg', 'readiness-gate-en-v1.svg', 'live-plan-zh-v1.svg', 'readiness-gate-zh-v1.svg'].every((asset) => liveEvent.includes(asset)) && liveEvent.includes('case-wellness-affiliate-live')],
  ['creator continuity', creator.includes('runway-en-v1.svg') && creator.includes('release-gate-zh-v1.svg') && creator.includes('case-beauty-gmv-growth')],
  ['q4-30 continuity', q430.includes('state-gate-en-v1.svg') && q430.includes('owner-readback-zh-v1.svg') && q430.includes('3253210454181634')],
  ['q4-29 continuity', q429.includes('evidence-chain-en-v1.svg') && q429.includes('claim-closeout-zh-v1.svg')],
  ['q4-28 continuity', q428.includes('fact-chain-en-v1.svg') && q428.includes('offer-return-chain-zh-v1.svg')],
  ['sitemap EN/ZH current targets', targets.slice(0, 6).every(([slug, date]) => sitemap.text.includes(`<loc>${domains[0]}/blog/${slug}</loc><lastmod>${date}</lastmod>`) && sitemap.text.includes(`<loc>${domains[0]}/blog/${slug}?lang=zh</loc><lastmod>${date}</lastmod>`))],
  ['llms current targets', targets.slice(0, 6).every(([slug]) => llms.text.includes(`${domains[0]}/blog/${slug}`))],
  ['article no-store', pages[0].cache?.includes('no-store') && pages[2].cache?.includes('no-store')],
  ['legacy redirects both domains', redirectResults.every(({ passed }) => passed)],
];
const report = {
  verifiedAt: new Date().toISOString(),
  deploymentId: inspect.id,
  readyState: inspect.readyState,
  ranks: Object.fromEntries(targets.map(([slug]) => [slug, entries.indexOf(slug) + 1])),
  imageRequests,
  redirectResults,
  checks,
  passed: checks.every(([, passed]) => passed),
};
await fs.writeFile('outputs/2026-10-29-publication-continuity-verifier.json', `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify(report, null, 2));
if (!report.passed) process.exitCode = 1;
