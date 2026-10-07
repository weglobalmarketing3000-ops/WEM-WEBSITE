const fs = require('node:fs/promises');
const path = require('node:path');
const crypto = require('node:crypto');
const { chromium } = require('/Users/wendylin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');

const root = path.resolve(__dirname, '..');
const base = process.argv[2] || 'https://www.weglobalmarketing.com';
const mode = process.argv[3] || (base.includes('127.0.0.1') ? 'local' : 'public');
const target = process.argv[4] || 'q4-02';
const configs = {
  'q4-02': { patch: '2026-09-28-q4-02-bfcm-product-preflight', prefix: '2026-09-28-q4-02', slug: 'tiktok-shop-bfcm-two-week-product-preflight', date: '2026-09-28', enDate: 'Sep 28, 2026', zhDate: '2026 年 9 月 28 日', expectedFiles: 17, expectedImages: 3 },
  'q4-03': { patch: '2026-09-29-q4-03-creator-content-review', prefix: '2026-09-29-q4-03', slug: 'tiktok-shop-creator-content-review-before-scale', date: '2026-09-29', enDate: 'Sep 29, 2026', zhDate: '2026 年 9 月 29 日', expectedFiles: 17, expectedImages: 3 },
  'q4-04': { patch: '2026-09-30-q4-04-aigc-product-images', prefix: '2026-09-30-q4-04', slug: 'tiktok-shop-ai-product-images-real-sku', date: '2026-09-30', enDate: 'Sep 30, 2026', zhDate: '2026 年 9 月 30 日', expectedFiles: 15, expectedImages: 2, rank: 4 },
  'q4-05': { patch: '2026-10-01-q4-05-bfcm-pricing', prefix: '2026-10-01-q4-05', slug: 'tiktok-shop-bfcm-pricing-margin-waterfall', date: '2026-10-01', enDate: 'Oct 1, 2026', zhDate: '2026 年 10 月 1 日', expectedFiles: 21, expectedImages: 4, rank: 3 },
  'q4-06': { patch: '2026-10-02-q4-06-live-recovered', prefix: '2026-10-02-q4-06', slug: 'tiktok-shop-creator-commission-video-usage-rights', date: '2026-10-02', enDate: 'Oct 2, 2026', zhDate: '2026 年 10 月 2 日', expectedFiles: 13, expectedImages: 1, rank: 2 },
  'q4-07': { patch: '2026-10-03-q4-07-creator-agency-contract', prefix: '2026-10-03-q4-07', slug: 'tiktok-shop-creator-agency-contract-control', date: '2026-10-03', enDate: 'Oct 3, 2026', zhDate: '2026 年 10 月 3 日', expectedFiles: 19, expectedImages: 4, rank: 1 },
  'q4-08': { patch: '2026-10-04-q4-08-live-recovered', prefix: '2026-10-04-q4-08', slug: 'tiktok-shop-agency-app-offboarding-data-access', date: '2026-10-04', enDate: 'Oct 4, 2026', zhDate: '2026 年 10 月 4 日', expectedFiles: 16, expectedImages: 3, rank: 1 },
  'q4-09': { patch: '2026-10-05-q4-09-customer-data-marketing', prefix: '2026-10-05-q4-09', slug: 'tiktok-shop-customer-data-email-sms-marketing', date: '2026-10-05', enDate: 'Oct 5, 2026', zhDate: '2026 年 10 月 5 日', expectedFiles: 17, expectedImages: 3, rank: 1 },
  'q4-10': { patch: '2026-10-06-q4-10-originality-protection', prefix: '2026-10-06-q4-10', slug: 'tiktok-shop-originality-protection-image-evidence', date: '2026-10-06', enDate: 'Oct 6, 2026', zhDate: '2026 年 10 月 6 日', expectedFiles: 17, expectedImages: 3, rank: 1 },
  'q4-11': { patch: '2026-10-07-q4-11-authorization-decision', prefix: '2026-10-07-q4-11', slug: 'tiktok-shop-brand-cobranded-originality-protection-decision', date: '2026-10-07', enDate: 'Oct 7, 2026', zhDate: '2026 年 10 月 7 日', expectedFiles: 17, expectedImages: 3, rank: 1 },
  'q4-06-repair': { patch: '2026-10-03-q4-05-q4-06-regression-repair', prefix: '2026-10-03-q4-06-regression-repair', slug: 'tiktok-shop-creator-commission-video-usage-rights', date: '2026-10-02', enDate: 'Oct 2, 2026', zhDate: '2026 年 10 月 2 日', expectedFiles: 6, expectedImages: 1, rank: 2 },
};
if (!configs[target]) throw new Error(`Unknown target: ${target}`);
const config = configs[target];
const sharedHashFiles = ['BlogList.compiled.js', 'BlogList.jsx', 'blog.html', 'llms.txt', 'sitemap.xml'];
if (['q4-04', 'q4-05', 'q4-07'].includes(target)) config.hashExclude = sharedHashFiles;
const patchDir = path.join(root, 'outputs/patches', config.patch);
const out = path.join(root, `outputs/${config.prefix}-${mode}-qa`);
const slug = config.slug;
const productionBase = 'https://www.weglobalmarketing.com';
const articleUrl = `${productionBase}/blog/${slug}`;
const local = base.includes('127.0.0.1');
const hash = (buffer) => crypto.createHash('sha256').update(buffer).digest('hex');
const routeFor = (relative) => relative === 'blog.html' ? '/blog.html' : relative === `blog/${slug}.html` ? `/blog/${slug}${local ? '.html' : ''}` : `/${relative}`;

async function fetchBytes(route) {
  const url = `${base}${route}${route.includes('?') ? '&' : '?'}qa=${Date.now()}`;
  const response = await fetch(url, { headers: { 'cache-control': 'no-cache', pragma: 'no-cache' } });
  if (!response.ok) throw new Error(`${url} returned ${response.status}`);
  return Buffer.from(await response.arrayBuffer());
}
async function waitImage(locator) {
  await locator.scrollIntoViewIfNeeded();
  await locator.evaluate(async (image) => {
    if (image.complete && image.naturalWidth > 0) return;
    await new Promise((resolve, reject) => {
      const timer = setTimeout(() => reject(new Error(`image timeout: ${image.src}`)), 15000);
      image.addEventListener('load', () => { clearTimeout(timer); resolve(); }, { once: true });
      image.addEventListener('error', () => { clearTimeout(timer); reject(new Error(`image failed: ${image.src}`)); }, { once: true });
    });
  });
}

(async () => {
  await fs.mkdir(out, { recursive: true });
  const report = { status: `${mode}_qa_in_progress`, mode, base, files: {}, raw: {}, pages: [], index: [], checks: {} };
  const files = [];
  async function walk(directory) {
    for (const entry of await fs.readdir(directory, { withFileTypes: true })) {
      const absolute = path.join(directory, entry.name);
      if (entry.isDirectory()) await walk(absolute);
      else files.push(path.relative(patchDir, absolute));
    }
  }
  await walk(patchDir);
  for (const relative of files.sort()) {
    const localBytes = await fs.readFile(path.join(patchDir, relative));
    const remoteBytes = await fetchBytes(routeFor(relative));
    report.files[relative] = { bytes: remoteBytes.length, localSha256: hash(localBytes), remoteSha256: hash(remoteBytes), match: hash(localBytes) === hash(remoteBytes) };
  }

  const html = (await fetchBytes(`/blog/${slug}${local ? '.html' : ''}`)).toString();
  const graph = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
  report.raw = {
    bytes: html.length,
    canonical: html.match(/<link rel="canonical" href="([^"]+)/)?.[1],
    alternates: Object.fromEntries([...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map((match) => [match[1], match[2]])),
    posts: graph.filter((node) => node['@type'] === 'BlogPosting').map((post) => ({ language: post.inLanguage, date: post.datePublished, page: post.mainEntityOfPage, image: post.image })),
    faqs: graph.filter((node) => node['@type'] === 'FAQPage').map((faq) => ({ language: faq.inLanguage, count: faq.mainEntity.length })),
  };

  const browser = await chromium.launch({ headless: true, executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
  try {
    for (const viewport of [{ name: 'desktop', width: 1280, height: 900 }, { name: 'mobile', width: 390, height: 844 }]) {
      for (const lang of ['en', 'zh-CN']) {
        const context = await browser.newContext({ viewport: { width: viewport.width, height: viewport.height } });
        const page = await context.newPage();
        const errors = [];
        page.on('pageerror', (error) => errors.push(`pageerror:${error.message}`));
        page.on('console', (message) => { if (message.type() === 'error') errors.push(`console:${message.text()}`); });
        page.on('response', (response) => { if (response.status() >= 400 && !response.url().endsWith('/favicon.ico')) errors.push(`${response.status()} ${response.url()}`); });
        const requested = `${base}/blog/${slug}${local ? '.html' : ''}${lang === 'zh-CN' ? '?lang=zh' : ''}`;
        const response = await page.goto(requested, { waitUntil: 'networkidle' });
        const article = page.locator(`article[lang="${lang}"]`);
        for (const image of await article.locator('img').all()) await waitImage(image);
        const data = await page.evaluate(({ lang }) => {
          const visible = (element) => Boolean(element && getComputedStyle(element).display !== 'none' && getComputedStyle(element).visibility !== 'hidden' && element.getBoundingClientRect().height > 0);
          const active = document.querySelector(`article[lang="${lang}"]`);
          const inactive = document.querySelector(`article[lang="${lang === 'en' ? 'zh-CN' : 'en'}"]`);
          const source = [...active.querySelectorAll('h2')].find((item) => /Source notes|来源说明/.test(item.innerText));
          const body = document.body.innerText;
          const h1 = active.querySelector('h1');
          const paragraph = active.querySelector('h2 + p');
          return {
            htmlLang: document.documentElement.lang, title: h1.innerText, documentTitle: document.title,
            description: document.querySelector('meta[name="description"]')?.content,
            active: visible(active), inactive: !visible(inactive),
            h1Style: { font: getComputedStyle(h1).fontFamily, size: getComputedStyle(h1).fontSize, weight: getComputedStyle(h1).fontWeight, color: getComputedStyle(h1).color },
            sourceStyle: source && { font: getComputedStyle(source).fontFamily, size: getComputedStyle(source).fontSize, weight: getComputedStyle(source).fontWeight, color: getComputedStyle(source).color },
            paragraphStyle: paragraph && { size: getComputedStyle(paragraph).fontSize, color: getComputedStyle(paragraph).color, line: getComputedStyle(paragraph).lineHeight },
            images: [...active.querySelectorAll('img')].map((image) => ({ width: image.naturalWidth, height: image.naturalHeight, src: image.currentSrc })),
            faq: [...active.querySelectorAll('.faq-item')].filter(visible).length,
            related: [...active.querySelectorAll('.related-grid a')].filter(visible).length,
            source: Boolean(source), cta: visible(document.querySelector('.cta')), footer: visible(document.querySelector('.footer')),
            booking: body.includes(lang === 'en' ? 'BOOK A DISCOVERY CALL' : '预约咨询'), ready: body.includes(lang === 'en' ? 'READY TO TALK' : '准备好和 WEM'),
            overflow: document.documentElement.scrollWidth > innerWidth, undefinedText: body.includes('undefined'), literalMarkdown: body.includes('**'),
            canonical: document.querySelector('link[rel="canonical"]')?.href,
          };
        }, { lang });
        await page.screenshot({ path: path.join(out, `article-${lang}-${viewport.name}.png`), fullPage: true });
        const switchLink = page.locator('.switch a:visible').first();
        if (local) {
          errors.length = 0;
          await page.goto(`${base}/blog/${slug}.html${lang === 'en' ? '?lang=zh' : ''}`, { waitUntil: 'networkidle' });
        } else {
          await Promise.all([
            page.waitForURL((url) => url.searchParams.get('lang') === (lang === 'en' ? 'zh' : null), { waitUntil: 'networkidle' }),
            switchLink.click(),
          ]);
        }
        const switched = await page.evaluate(() => ({ htmlLang: document.documentElement.lang, url: location.href, canonical: document.querySelector('link[rel="canonical"]')?.href }));
        report.pages.push({ viewport: viewport.name, lang, status: response?.status(), ...data, switched, errors });
        await context.close();
      }

      for (const lang of ['en', 'zh']) for (const cache of ['fresh', 'warm']) {
        const context = await browser.newContext({ viewport: { width: viewport.width, height: viewport.height } });
        const page = await context.newPage();
        const errors = [];
        page.on('pageerror', (error) => errors.push(error.message));
        const indexRoute = local ? '/blog.html' : '/blog';
        await page.goto(`${base}${indexRoute}${lang === 'zh' ? '?lang=zh' : ''}`, { waitUntil: 'networkidle' });
        const cards = page.locator('a[href*="blog/tiktok-shop-"]');
        for (let index = 0; index < Math.min(3, await cards.count()); index += 1) { const image = cards.nth(index).locator('img'); if (await image.count()) await waitImage(image); }
        const indexData = await page.evaluate(() => ({
          cards: [...document.querySelectorAll('a[href*="blog/tiktok-shop-"]')].slice(0, 4).map((card) => ({ href: card.getAttribute('href'), text: card.innerText, image: card.querySelector('img')?.naturalWidth || 0, imageSrc: card.querySelector('img')?.currentSrc || '' })),
          script: [...document.scripts].map((script) => script.src).find((source) => source.includes('BlogList.compiled')),
          overflow: document.documentElement.scrollWidth > innerWidth,
        }));
        await page.screenshot({ path: path.join(out, `index-${lang}-${viewport.name}-${cache}.png`), fullPage: false });
        report.index.push({ viewport: viewport.name, lang, cache, ...indexData, errors });
        await context.close();
      }
    }
  } finally { await browser.close(); }

  const sitemap = (await fetchBytes('/sitemap.xml')).toString();
  const llms = (await fetchBytes('/llms.txt')).toString();
  const hashExclude = new Set(config.hashExclude || []);
  const scopedHashEntries = Object.entries(report.files).filter(([relative]) => !hashExclude.has(relative));
  report.checks.hashes = Object.keys(report.files).length === config.expectedFiles && scopedHashEntries.every(([, file]) => file.match && file.bytes > 100);
  report.checks.schema = report.raw.bytes > 15000 && report.raw.canonical === articleUrl && report.raw.alternates['en-US'] === articleUrl && report.raw.alternates['zh-CN'] === `${articleUrl}?lang=zh` && report.raw.alternates['x-default'] === articleUrl && report.raw.posts.length === 2 && report.raw.posts.every((post) => post.date === config.date) && report.raw.faqs.length === 2 && report.raw.faqs.every((faq) => faq.count === 6);
  report.checks.render = report.pages.every((page) => page.status === 200 && page.active && page.inactive && page.title.length > 20 && page.description.length > 35 && page.images.length === config.expectedImages && page.images.every((image) => image.width > 0) && page.faq === 6 && page.related === 3 && page.source && page.cta && page.footer && page.booking && page.ready && page.h1Style.weight === '850' && page.h1Style.color === 'rgb(23, 23, 23)' && page.sourceStyle.weight === '800' && page.sourceStyle.color === 'rgb(23, 23, 23)' && page.paragraphStyle.color === 'rgb(55, 51, 47)' && page.paragraphStyle.size === (page.viewport === 'mobile' ? '16px' : '18px') && !page.overflow && !page.undefinedText && !page.literalMarkdown && page.errors.length === 0 && page.canonical === `${articleUrl}${page.lang === 'zh-CN' ? '?lang=zh' : ''}` && page.switched.htmlLang === (page.lang === 'en' ? 'zh-CN' : 'en') && page.switched.canonical === `${articleUrl}${page.lang === 'en' ? '?lang=zh' : ''}`);
  if (local) {
    const source = await fs.readFile(path.join(patchDir, 'BlogList.jsx'), 'utf8');
    const indexHtml = await fs.readFile(path.join(patchDir, 'blog.html'), 'utf8');
    report.checks.index = (source.includes(`slug:'${slug}'`) || source.includes(`slug:"${slug}"`)) && (source.includes(`en:'${config.enDate}'`) || source.includes(`en:"${config.enDate}"`)) && (source.includes(`zh:'${config.zhDate}'`) || source.includes(`zh:"${config.zhDate}"`)) && source.includes(`hero-${slug}-en-v1.png`) && source.includes(`hero-${slug}-zh-v1.png`) && /BlogList\.compiled\.js\?v=[a-f0-9]{12}/.test(indexHtml);
  } else {
    const rankIndex = (config.rank || 1) - 1;
    if (rankIndex < 3) {
      report.checks.index = report.index.every((entry) => entry.cards.length > rankIndex && entry.cards[rankIndex].href.split('?')[0].endsWith(slug) && entry.cards[rankIndex].text.includes(entry.lang === 'zh' ? config.zhDate : config.enDate) && entry.cards[rankIndex].image === 880 && entry.cards[rankIndex].imageSrc.includes(entry.lang === 'zh' ? '-zh-v1' : '-en-v1') && /BlogList\.compiled\.js\?v=[a-f0-9]{12}/.test(entry.script || '') && !entry.overflow && entry.errors.length === 0);
    } else {
      const currentList = (await fetchBytes('/BlogList.compiled.js')).toString();
      const listSource = currentList.slice(currentList.indexOf('const BLOG_POSTS=['), currentList.indexOf('const BLOG_TAGS='));
      const entryStarts = [...listSource.matchAll(/\{slug:"([a-z0-9-]+)"/g)];
      const rankedStart = entryStarts[rankIndex];
      const rankedEnd = entryStarts[rankIndex + 1]?.index ?? listSource.length;
      const rankedEntry = rankedStart ? listSource.slice(rankedStart.index, rankedEnd) : '';
      report.checks.index = rankedEntry.includes(`slug:"${slug}"`) && rankedEntry.includes(`date:{en:"${config.enDate}"`) && report.index.every((entry) => entry.cards.length === 3 && /BlogList\.compiled\.js\?v=[a-f0-9]{12}/.test(entry.script || '') && !entry.overflow && entry.errors.length === 0);
    }
  }
  report.checks.discovery = sitemap.includes(`<loc>${articleUrl}</loc><lastmod>${config.date}</lastmod>`) && sitemap.includes(`<loc>${articleUrl}?lang=zh</loc><lastmod>${config.date}</lastmod>`) && llms.includes(articleUrl);
  report.passed = Object.values(report.checks).every(Boolean);
  report.status = report.passed ? `${mode}_qa_complete` : `${mode}_qa_failed`;
  await fs.writeFile(path.join(out, 'report.json'), `${JSON.stringify(report, null, 2)}\n`);
  console.log(JSON.stringify({ status: report.status, checks: report.checks, report: path.join(out, 'report.json') }, null, 2));
  if (!report.passed) process.exitCode = 1;
})().catch((error) => { console.error(error); process.exitCode = 1; });
