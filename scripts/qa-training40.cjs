const { chromium } = require('playwright');

const base = process.env.QA_BASE || 'https://www.weglobalmarketing.com';
const current = 'tiktok-shop-listing-discovery-strategy';
const previous = 'tiktok-shop-search-shop-tab-content-discovery';
const outputDir = process.env.QA_OUTPUT || 'outputs/2026-09-17-training40-production-qa';
const isLocal = /^http:\/\/(?:127\.0\.0\.1|localhost)/.test(base);

async function pageReport(page, slug, lang, viewportName) {
  const suffix = lang === 'zh-CN' ? '?lang=zh' : '';
  await page.goto(`${base}/blog/${slug}${isLocal ? '.html' : ''}${suffix}`, { waitUntil: 'networkidle' });
  return page.evaluate(({ lang, viewportName, slug }) => {
    const visible = (element) => {
      if (!element) return false;
      const style = getComputedStyle(element);
      const rect = element.getBoundingClientRect();
      return style.display !== 'none' && style.visibility !== 'hidden' && rect.height > 0;
    };
    const active = document.querySelector(`article[lang="${lang}"]`);
    const inactive = document.querySelector(`article[lang="${lang === 'en' ? 'zh-CN' : 'en'}"]`);
    const heading = active?.querySelector('h1');
    const hero = active?.querySelector('.hero');
    const sourceLabel = lang === 'en' ? 'Source notes' : '来源说明';
    const source = [...(active?.querySelectorAll('h2') || [])].find((item) => item.textContent.trim() === sourceLabel);
    const faqItems = [...document.querySelectorAll('.wem-faq-item')].filter(visible);
    const relatedHeading = [...document.querySelectorAll('h2')].find((item) =>
      ['Related guides', '相关文章'].includes(item.textContent.trim()) && visible(item)
    );
    const relatedSection = relatedHeading?.parentElement;
    const related = relatedSection ? [...relatedSection.querySelectorAll('a')].filter(visible).map((item) => item.textContent.trim()) : [];
    const bodyText = document.body.innerText;
    const h1Rect = heading?.getBoundingClientRect();
    const heroRect = hero?.getBoundingClientRect();
    return {
      slug,
      lang,
      viewportName,
      viewport: [innerWidth, innerHeight],
      activeVisible: visible(active),
      inactiveHidden: !visible(inactive),
      title: heading?.textContent.trim(),
      h1: {
        x: h1Rect?.x,
        right: h1Rect?.right,
        width: h1Rect?.width,
        fontFamily: heading && getComputedStyle(heading).fontFamily,
        fontSize: heading && getComputedStyle(heading).fontSize,
        fontWeight: heading && getComputedStyle(heading).fontWeight,
        lineHeight: heading && getComputedStyle(heading).lineHeight,
        color: heading && getComputedStyle(heading).color,
      },
      body: {
        fontFamily: active && getComputedStyle(active).fontFamily,
        color: active && getComputedStyle(active).color,
      },
      source: {
        exists: Boolean(source),
        fontFamily: source && getComputedStyle(source).fontFamily,
        fontSize: source && getComputedStyle(source).fontSize,
        fontWeight: source && getComputedStyle(source).fontWeight,
        color: source && getComputedStyle(source).color,
      },
      hero: {
        x: heroRect?.x,
        right: heroRect?.right,
        width: heroRect?.width,
        naturalWidth: hero?.naturalWidth,
      },
      faqVisible: faqItems.length,
      related,
      cta: bodyText.includes(lang === 'en' ? 'READY TO SCALE' : '想把美国'),
      contactAction: bodyText.includes(lang === 'en' ? 'BOOK A DISCOVERY CALL' : '预约咨询'),
      footer: bodyText.includes(lang === 'en' ? 'All rights reserved' : '版权所有'),
      brokenImages: [...document.images].filter((image) => image.complete && image.naturalWidth === 0).map((image) => image.src),
      undefinedText: bodyText.includes('undefined'),
      overflow: document.documentElement.scrollWidth > innerWidth,
      scrollWidth: document.documentElement.scrollWidth,
    };
  }, { lang, viewportName, slug });
}

async function indexReport(page, cacheState) {
  await page.goto(`${base}/${isLocal ? 'blog.html' : 'blog'}`, { waitUntil: 'networkidle' });
  const firstCard = page.locator('a[href*="/blog/tiktok-shop-"]').first();
  await firstCard.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  return page.evaluate((cacheState) => {
    const cards = [...document.querySelectorAll('a[href*="/blog/tiktok-shop-"]')].slice(0, 3).map((card) => ({
      href: card.getAttribute('href'),
      text: card.innerText.trim(),
      images: [...card.querySelectorAll('img')].map((image) => ({ src: image.currentSrc || image.src, naturalWidth: image.naturalWidth })),
    }));
    return {
      cacheState,
      viewport: [innerWidth, innerHeight],
      cards,
      script: [...document.scripts].map((item) => item.src).find((src) => src.includes('BlogList.compiled')),
      brokenImages: [...document.images].filter((image) => image.complete && image.naturalWidth === 0).map((image) => image.src),
      overflow: document.documentElement.scrollWidth > innerWidth,
      scrollWidth: document.documentElement.scrollWidth,
    };
  }, cacheState);
}

(async () => {
  const browser = await chromium.launch({
    headless: true,
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  });
  const reports = { index: [], articles: [] };
  for (const viewport of [
    { name: 'desktop', width: 1280, height: 720 },
    { name: 'mobile', width: 390, height: 844 },
  ]) {
    const context = await browser.newContext({ viewport: { width: viewport.width, height: viewport.height } });
    const page = await context.newPage();
    reports.index.push(await indexReport(page, 'fresh'));
    if (viewport.name === 'desktop') await page.screenshot({ path: `${outputDir}/blog-first-card-desktop.png`, fullPage: false });
    reports.index.push(await indexReport(page, 'warm'));
    for (const slug of [current, previous]) {
      for (const lang of ['en', 'zh-CN']) {
        reports.articles.push(await pageReport(page, slug, lang, viewport.name));
        await page.screenshot({
          path: `${outputDir}/${slug}-${lang}-${viewport.name}.png`,
          fullPage: false,
        });
      }
    }
    await context.close();
  }
  await browser.close();

  const expected = [current, previous, 'tiktok-shop-creator-live-brand-system'];
  const indexPassed = reports.index.every((report) =>
    !report.overflow && report.brokenImages.length === 0 &&
    report.script?.includes('291c6c5c2a78') &&
    expected.every((slug, index) => report.cards[index]?.href.endsWith(slug) && report.cards[index]?.images[0]?.naturalWidth > 0)
  );
  const articlePassed = reports.articles.every((report) =>
    report.activeVisible && report.inactiveHidden && report.source.exists &&
    report.faqVisible === 6 && report.related.length === 3 && report.cta &&
    report.contactAction && report.footer && report.brokenImages.length === 0 &&
    !report.undefinedText && !report.overflow && report.hero.naturalWidth > 0
  );
  const desktopCurrent = reports.articles.find((report) => report.slug === current && report.lang === 'en' && report.viewportName === 'desktop');
  const desktopPrevious = reports.articles.find((report) => report.slug === previous && report.lang === 'en' && report.viewportName === 'desktop');
  const styleParity = JSON.stringify({ h1: desktopCurrent.h1, body: desktopCurrent.body, source: desktopCurrent.source }) ===
    JSON.stringify({ h1: desktopPrevious.h1, body: desktopPrevious.body, source: desktopPrevious.source });
  reports.checks = { indexPassed, articlePassed, styleParity };
  reports.passed = indexPassed && articlePassed && styleParity;
  console.log(JSON.stringify(reports, null, 2));
  if (!reports.passed) process.exitCode = 1;
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
