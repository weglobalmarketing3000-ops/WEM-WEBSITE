const fs = require('node:fs/promises');
const path = require('node:path');
const crypto = require('node:crypto');
const { chromium } = require('/Users/wendylin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');

const root = path.resolve(__dirname, '..');
const base = 'https://www.weglobalmarketing.com';
const patchDir = path.join(root, 'outputs/patches/2026-09-24-training46-consumer-electronics');
const out = path.join(root, 'outputs/2026-09-24-training46-public-qa');
const current = 'tiktok-shop-consumer-electronics-operating-system';
const comparison = 'tiktok-shop-growth-autopilot-vs-gmv-max-pro';
const roi = 'tiktok-shop-growth-autopilot-roi-protection';
const jewelry = 'tiktok-shop-jewelry-category-operating-system';
const foundation = 'tiktok-shop-growth-autopilot-beta-guide';
const expected = [current, comparison, roi, jewelry];
const historySlugs = [current, comparison, roi, jewelry, foundation];
const expectedDates = ['Sep 24, 2026', 'Sep 23, 2026', 'Sep 22, 2026', 'Sep 21, 2026'];
const hash = (buffer) => crypto.createHash('sha256').update(buffer).digest('hex');

async function fetchBytes(route) {
  const response = await fetch(`${base}${route}${route.includes('?') ? '&' : '?'}qa=${Date.now()}`, { headers: { 'cache-control': 'no-cache' } });
  if (!response.ok) throw new Error(`${route} returned ${response.status}`);
  return Buffer.from(await response.arrayBuffer());
}

async function waitImage(locator) {
  await locator.scrollIntoViewIfNeeded();
  await locator.evaluate(async (image) => {
    if (image.complete && image.naturalWidth > 0) return;
    await new Promise((resolve, reject) => {
      const timer = setTimeout(() => reject(new Error(`image timeout: ${image.src}`)), 10000);
      image.addEventListener('load', () => { clearTimeout(timer); resolve(); }, { once: true });
      image.addEventListener('error', () => { clearTimeout(timer); reject(new Error(`image failed: ${image.src}`)); }, { once: true });
    });
  });
}

(async () => {
  await fs.mkdir(out, { recursive: true });
  const report = { status: 'public_qa_in_progress', files: {}, raw: {}, pages: [], index: [], history: {}, checks: {} };

  const patchFiles = [];
  async function walk(directory) {
    for (const entry of await fs.readdir(directory, { withFileTypes: true })) {
      const absolute = path.join(directory, entry.name);
      if (entry.isDirectory()) await walk(absolute);
      else patchFiles.push(path.relative(patchDir, absolute));
    }
  }
  await walk(patchDir);
  for (const relative of patchFiles.sort()) {
    const route = relative === 'blog.html' ? '/blog' : relative === `blog/${current}.html` ? `/blog/${current}` : `/${relative}`;
    const [local, remote] = await Promise.all([fs.readFile(path.join(patchDir, relative)), fetchBytes(route)]);
    report.files[relative] = { bytes: remote.length, match: hash(local) === hash(remote) };
  }

  const html = (await fetchBytes(`/blog/${current}`)).toString();
  const graph = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];
  const posts = graph.filter((node) => node['@type'] === 'BlogPosting');
  const faqs = graph.filter((node) => node['@type'] === 'FAQPage');
  report.raw = {
    bytes: html.length,
    canonical: html.match(/<link rel="canonical" href="([^"]+)/)?.[1],
    alternates: Object.fromEntries([...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map((match) => [match[1], match[2]])),
    posts: posts.map((post) => ({ language: post.inLanguage, date: post.datePublished, page: post.mainEntityOfPage })),
    faqs: faqs.map((faq) => ({ language: faq.inLanguage, count: faq.mainEntity.length })),
  };

  for (const slug of historySlugs) {
    const pageHtml = (await fetchBytes(`/blog/${slug}`)).toString();
    report.history[slug] = { bytes: pageHtml.length, hasEnglish: pageHtml.includes('<article lang="en"'), hasChinese: pageHtml.includes('<article lang="zh-CN"') };
  }

  const browser = await chromium.launch({ headless: true, executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
  try {
    for (const viewport of [{ name: 'desktop', width: 1280, height: 900 }, { name: 'mobile', width: 390, height: 844 }]) {
      for (const lang of ['en', 'zh-CN']) {
        const context = await browser.newContext({ viewport: { width: viewport.width, height: viewport.height } });
        const page = await context.newPage();
        const errors = [];
        page.on('pageerror', (error) => errors.push(error.message));
        page.on('response', (response) => { if (response.status() >= 400 && !response.url().endsWith('/favicon.ico')) errors.push(`${response.status()} ${response.url()}`); });
        await page.goto(`${base}/blog/${current}${lang === 'zh-CN' ? '?lang=zh' : ''}`, { waitUntil: 'networkidle' });
        const article = page.locator(`article[lang="${lang}"]`);
        for (const image of await article.locator('img').all()) await waitImage(image);
        const result = await page.evaluate(({ lang, current, comparison, roi }) => {
          const visible = (element) => Boolean(element && getComputedStyle(element).display !== 'none' && getComputedStyle(element).visibility !== 'hidden' && element.getBoundingClientRect().height > 0);
          const active = document.querySelector(`article[lang="${lang}"]`);
          const inactive = document.querySelector(`article[lang="${lang === 'en' ? 'zh-CN' : 'en'}"]`);
          const h1 = active?.querySelector('h1');
          const source = [...(active?.querySelectorAll('h2') || [])].find((item) => /Source notes|来源说明/.test(item.innerText));
          const paragraph = active?.querySelector('.wem-topic-card p');
          const body = document.body.innerText;
          return {
            htmlLang: document.documentElement.lang,
            documentTitle: document.title,
            description: document.querySelector('meta[name="description"]')?.content,
            active: visible(active), inactive: !visible(inactive), title: h1?.innerText,
            h1Style: h1 && { font: getComputedStyle(h1).fontFamily, size: getComputedStyle(h1).fontSize, weight: getComputedStyle(h1).fontWeight, color: getComputedStyle(h1).color },
            sourceStyle: source && { font: getComputedStyle(source).fontFamily, size: getComputedStyle(source).fontSize, weight: getComputedStyle(source).fontWeight, color: getComputedStyle(source).color },
            paragraphStyle: paragraph && { font: getComputedStyle(paragraph).fontFamily, size: getComputedStyle(paragraph).fontSize, weight: getComputedStyle(paragraph).fontWeight, color: getComputedStyle(paragraph).color, line: getComputedStyle(paragraph).lineHeight },
            images: [...(active?.querySelectorAll('img') || [])].map((image) => image.naturalWidth), heroCopy: active?.querySelectorAll('.wem-hero-copy').length || 0,
            faq: [...document.querySelectorAll('.wem-faq-item')].filter(visible).length,
            related: [...document.querySelectorAll('.wem-related a')].filter(visible).length,
            cta: body.includes(lang === 'en' ? 'READY TO SCALE' : '想把美国'),
            booking: body.includes(lang === 'en' ? 'BOOK A DISCOVERY CALL' : '预约咨询'),
            footer: body.includes(lang === 'en' ? 'All rights reserved' : '版权所有'),
            source: Boolean(source), overflow: document.documentElement.scrollWidth > innerWidth,
            undefinedText: body.includes('undefined'), literalMarkdown: body.includes('**'),
            canonical: document.querySelector('link[rel=canonical]')?.href,
            links: { current: [...active.querySelectorAll('a')].some((a) => a.href.includes(current)), comparison: [...active.querySelectorAll('a')].some((a) => a.href.includes(comparison)), roi: [...active.querySelectorAll('a')].some((a) => a.href.includes(roi)) },
          };
        }, { lang, current, comparison, roi });
        await page.screenshot({ path: path.join(out, `${current}-${lang}-${viewport.name}.png`), fullPage: true });
        const switchLink = page.locator('.wem-lang-switch a:visible').first();
        await switchLink.click();
        const expectedCanonical = `${base}/blog/${current}${lang === 'en' ? '?lang=zh' : ''}`;
        await page.waitForFunction((value) => document.querySelector('link[rel=canonical]')?.href === value, expectedCanonical);
        const switched = await page.evaluate(() => ({ htmlLang: document.documentElement.lang, url: location.href, canonical: document.querySelector('link[rel=canonical]')?.href }));
        report.pages.push({ viewport: viewport.name, lang, ...result, switched, errors });
        await context.close();
      }

      for (const lang of ['en', 'zh']) for (const cache of ['fresh', 'warm']) {
        const context = await browser.newContext({ viewport: { width: viewport.width, height: viewport.height } });
        const page = await context.newPage();
        const errors = [];
        page.on('pageerror', (error) => errors.push(error.message));
        await page.goto(`${base}/blog${lang === 'zh' ? '?lang=zh' : ''}`, { waitUntil: 'networkidle' });
        const cards = page.locator('a[href*="/blog/tiktok-shop-"]');
        for (let index = 0; index < 3; index += 1) await waitImage(cards.nth(index).locator('img'));
        const indexResult = await page.evaluate(() => ({
          cards: [...document.querySelectorAll('a[href*="/blog/tiktok-shop-"]')].slice(0, 3).map((card) => ({ href: card.getAttribute('href'), text: card.innerText, image: card.querySelector('img')?.naturalWidth || 0 })),
          script: [...document.scripts].map((script) => script.src).find((source) => source.includes('BlogList.compiled')),
          overflow: document.documentElement.scrollWidth > innerWidth,
        }));
        await page.screenshot({ path: path.join(out, `index-${lang}-${viewport.name}-${cache}.png`), fullPage: false });
        report.index.push({ viewport: viewport.name, lang, cache, ...indexResult, errors });
        await context.close();
      }
    }
  } finally {
    await browser.close();
  }

  const articleUrl = `${base}/blog/${current}`;
  report.checks.hashes = Object.values(report.files).every((file) => file.match && file.bytes > 100);
  report.checks.schema = report.raw.bytes > 10000 && report.raw.canonical === articleUrl && report.raw.alternates['en-US'] === articleUrl && report.raw.alternates['zh-CN'] === `${articleUrl}?lang=zh` && report.raw.alternates['x-default'] === articleUrl && report.raw.posts.length === 2 && report.raw.posts.every((post) => post.date === '2026-09-24') && report.raw.faqs.length === 2 && report.raw.faqs.every((faq) => faq.count === 6);
  report.checks.render = report.pages.every((page) => page.active && page.inactive && page.title.length > 20 && page.documentTitle.includes(page.lang === 'zh-CN' ? '3C 品牌做 TikTok Shop' : 'TikTok Shop for Consumer Electronics') && page.description.length > (page.lang === 'zh-CN' ? 35 : 80) && page.images.length >= 3 && page.images.every((width) => width > 0) && page.heroCopy === 0 && page.faq === 6 && page.related === 3 && page.cta && page.booking && page.footer && page.source && page.h1Style?.weight === '850' && page.h1Style?.color === 'rgb(23, 23, 23)' && page.sourceStyle?.weight === '800' && page.sourceStyle?.color === 'rgb(23, 23, 23)' && page.paragraphStyle?.color === 'rgb(55, 51, 47)' && page.paragraphStyle?.size === (page.viewport === 'mobile' ? '16px' : '18px') && !page.overflow && !page.undefinedText && !page.literalMarkdown && page.errors.length === 0 && page.canonical === `${articleUrl}${page.lang === 'zh-CN' ? '?lang=zh' : ''}` && page.switched.htmlLang === (page.lang === 'en' ? 'zh-CN' : 'en') && page.switched.canonical === `${articleUrl}${page.lang === 'en' ? '?lang=zh' : ''}`);
  report.checks.index = report.index.every((entry) => entry.cards.length === 3 && entry.cards.every((card, index) => card.href.split('?')[0].endsWith(expected[index]) && card.image === 880 && card.text.includes(entry.lang === 'zh' ? expectedDates[index].replace('Sep 24, 2026', '2026 年 9 月 24 日').replace('Sep 23, 2026', '2026 年 9 月 23 日').replace('Sep 22, 2026', '2026 年 9 月 22 日').replace('Sep 21, 2026', '2026 年 9 月 21 日') : expectedDates[index])) && /BlogList\.compiled\.js\?v=[a-f0-9]{12}/.test(entry.script || '') && !entry.overflow && entry.errors.length === 0);
  report.checks.history = Object.values(report.history).every((page) => page.bytes > 10000 && page.hasEnglish && page.hasChinese);
  const sitemap = (await fetchBytes('/sitemap.xml')).toString();
  const llms = (await fetchBytes('/llms.txt')).toString();
  report.checks.discovery = sitemap.includes(`<loc>${articleUrl}</loc><lastmod>2026-09-24</lastmod>`) && sitemap.includes(`<loc>${articleUrl}?lang=zh</loc><lastmod>2026-09-24</lastmod>`) && llms.includes(articleUrl);
  report.passed = Object.values(report.checks).every(Boolean);
  report.status = report.passed ? 'public_qa_complete' : 'public_qa_failed';
  await fs.writeFile(path.join(out, 'report.json'), `${JSON.stringify(report, null, 2)}\n`);
  console.log(JSON.stringify({ status: report.status, checks: report.checks, report: path.join(out, 'report.json') }, null, 2));
  if (!report.passed) process.exitCode = 1;
})().catch((error) => { console.error(error); process.exitCode = 1; });
