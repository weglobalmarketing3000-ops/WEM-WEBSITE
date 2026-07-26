import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const sourcePath = path.join(root, 'blog-ideas/2026-07-26-tiktok-shop-beauty-cold-start.md');
const source = fs.readFileSync(sourcePath, 'utf8');

const cleanInline = (text) => text
  .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1 ($2)')
  .replace(/\*\*([^*]+)\*\*/g, '$1')
  .replace(/`([^`]+)`/g, '$1')
  .replace(/\s+/g, ' ')
  .trim();

const splitLanguage = (heading, nextHeading) => {
  const start = source.indexOf(`# ${heading}`);
  if (start < 0) throw new Error(`Missing heading: ${heading}`);
  const from = start + heading.length + 2;
  const end = nextHeading ? source.indexOf(`# ${nextHeading}`, from) : source.length;
  return source.slice(from, end < 0 ? source.length : end).trim();
};

const parseTable = (lines, start) => {
  const headers = lines[start].split('|').slice(1, -1).map(cleanInline);
  const rows = [];
  let i = start + 2;
  while (i < lines.length && /^\|/.test(lines[i])) {
    rows.push(lines[i].split('|').slice(1, -1).map(cleanInline));
    i += 1;
  }
  return [{ kind: 'table', headers, rows }, i];
};

const parseBlocks = (text) => {
  const lines = text.split('\n');
  const blocks = [];
  for (let i = 0; i < lines.length;) {
    const line = lines[i].trim();
    if (!line) { i += 1; continue; }
    if (/^### /.test(line)) {
      blocks.push({ kind: 'h3', text: cleanInline(line.slice(4)) });
      i += 1;
      continue;
    }
    if (/^> /.test(line)) {
      blocks.push({ kind: 'callout', text: cleanInline(line.slice(2)) });
      i += 1;
      continue;
    }
    if (/^\|/.test(line) && i + 1 < lines.length && /^\|[-| :]+\|?$/.test(lines[i + 1].trim())) {
      const [table, next] = parseTable(lines.map(x => x.trim()), i);
      blocks.push(table);
      i = next;
      continue;
    }
    if (/^- /.test(line)) {
      const items = [];
      while (i < lines.length && /^- /.test(lines[i].trim())) {
        items.push(cleanInline(lines[i].trim().slice(2)));
        i += 1;
      }
      blocks.push({ kind: 'list', items });
      continue;
    }
    if (/^\d+\. /.test(line)) {
      const items = [];
      while (i < lines.length && /^\d+\. /.test(lines[i].trim())) {
        items.push(cleanInline(lines[i].trim().replace(/^\d+\. /, '')));
        i += 1;
      }
      blocks.push({ kind: 'list', items, ordered: true });
      continue;
    }
    const para = [line];
    i += 1;
    while (
      i < lines.length &&
      lines[i].trim() &&
      !/^(### |## |> |- |\|)/.test(lines[i].trim()) &&
      !/^\d+\. /.test(lines[i].trim())
    ) {
      para.push(lines[i].trim());
      i += 1;
    }
    blocks.push({ kind: 'p', text: cleanInline(para.join(' ')) });
  }
  return blocks;
};

const parseArticle = (text, faqHeading, lang) => {
  const faqMarker = `## ${faqHeading}`;
  const faqAt = text.indexOf(faqMarker);
  const bodyText = faqAt >= 0 ? text.slice(0, faqAt) : text;
  const faqText = faqAt >= 0 ? text.slice(faqAt + faqMarker.length) : '';
  const parts = bodyText.split(/^## /m).filter(Boolean);
  const intro = parts.shift()?.trim() || '';
  const sections = [];
  if (intro) {
    sections.push({
      id: lang === 'en' ? 'direct-answer' : 'zh-direct-answer',
      eyebrow: lang === 'en' ? 'THE REAL CORRECTION' : '核心纠正',
      h: lang === 'en'
        ? 'A Beauty cold start should establish a credible proof path'
        : '美妆冷启动要先建立可信的产品证明路径',
      body: parseBlocks(intro),
    });
  }
  parts.forEach((part, index) => {
    const [headingLine, ...rest] = part.split('\n');
    const h = cleanInline(headingLine);
    if (!h || h === faqHeading) return;
    const idBase = h.toLowerCase().replace(/[^\p{Letter}\p{Number}]+/gu, '-').replace(/^-|-$/g, '').slice(0, 54);
    sections.push({
      id: `${lang === 'zh' ? 'zh-' : ''}${idBase || `section-${index + 1}`}`,
      h,
      body: parseBlocks(rest.join('\n').trim()),
    });
  });
  const faqs = [];
  const faqParts = faqText.split(/^### /m).filter(Boolean);
  faqParts.forEach(part => {
    const [q, ...rest] = part.split('\n');
    const answer = cleanInline(rest.join(' ').replace(/\s*---\s*$/, ''));
    if (q.trim() && answer) faqs.push({ q: cleanInline(q), a: answer });
  });
  return { sections, faqs };
};

const enText = splitLanguage(
  'TikTok Shop Beauty Cold Start: Build a 0-to-1 Hero Product System',
  'TikTok Shop 美妆冷启动：从 Hero SKU 到可重复增长的 0-1 系统',
);
const zhText = splitLanguage('TikTok Shop 美妆冷启动：从 Hero SKU 到可重复增长的 0-1 系统');
const en = parseArticle(enText, 'Frequently asked questions', 'en');
const zh = parseArticle(zhText, '常见问题', 'zh');

en.sections[0].body.push({
  kind: 'infographic',
  src: 'tiktok-shop-beauty-zero-to-one-loop.svg',
  alt: 'WE Marketing TikTok Shop Beauty zero-to-one cold-start loop connecting Hero SKU selection, creator fit, product proof, claims, listing conversion, GMV Max, customer feedback, and the next decision',
  caption: 'WE Marketing Beauty cold-start framework: product proof, trust, conversion, and operations should lead to one clear scale, repair, or stop decision.',
});
zh.sections[0].body.push({
  kind: 'infographic',
  src: 'tiktok-shop-beauty-zero-to-one-loop-zh.svg',
  alt: 'WE Marketing TikTok Shop 美妆冷启动 0-1 闭环，连接 Hero SKU、达人匹配、产品证明、claim、商品页、GMV Max、用户反馈和下一步决定',
  caption: 'WE Marketing 美妆冷启动框架：产品证明、信任、转化和运营最终要支持 Scale、Repair 或 Stop。',
});

const findSection = (sections, phrase) => sections.find(s => s.h.toLowerCase().includes(phrase.toLowerCase()));
const enWem = findSection(en.sections, 'How WE Marketing supports');
if (enWem) enWem.body.push({ kind: 'cta', label: 'Talk with WE Marketing about a Beauty cold start →', href: 'https://zus03h0enw04.sg.larksuite.com/scheduler/03970278dd9a7925' });
const zhWem = findSection(zh.sections, 'WE Marketing 怎么帮助');
if (zhWem) zhWem.body.push({ kind: 'cta', label: '和 WE Marketing 讨论美妆品牌美国站冷启动 →', href: 'https://zus03h0enw04.sg.larksuite.com/scheduler/03970278dd9a7925' });

const toJs = value => JSON.stringify(value, null, 2)
  .replace(/"kind": "p"/g, 'kind: "p"')
  .replace(/"kind": "h3"/g, 'kind: "h3"')
  .replace(/"kind": "callout"/g, 'kind: "callout"')
  .replace(/"kind": "list"/g, 'kind: "list"')
  .replace(/"kind": "table"/g, 'kind: "table"')
  .replace(/"kind": "infographic"/g, 'kind: "infographic"')
  .replace(/"kind": "cta"/g, 'kind: "cta"')
  .replace(/"([A-Za-z_][A-Za-z0-9_]*)":/g, '$1:');

const jsx = `const LABELS = {
  en: { back: 'Blog', toc: 'On this page', faq: 'Frequently asked questions', related: 'Related guides' },
  zh: { back: '博客', toc: '本文目录', faq: '常见问题', related: '相关文章' },
};

const POSTS = {
  en: {
    meta: {
      title: 'TikTok Shop Beauty Cold Start: Build a 0-to-1 Hero Product System',
      desc: 'Build a TikTok Shop Beauty cold start across Hero SKUs, creator demonstrations, claims, product pages, offers, affiliate activation, GMV Max, inventory, and customer feedback.',
      cat: 'TIKTOK SHOP U.S. · BEAUTY',
      author: 'WE Marketing Team',
      date: 'Jul 26, 2026',
      read: '16 min read',
      heroImage: 'hero-tiktok-shop-beauty-cold-start.png',
      heroAlt: 'Unbranded Beauty Hero SKU and creator demonstration arranged as a TikTok Shop zero-to-one cold-start system',
    },
    sections: ${toJs(en.sections)},
    faqs: ${toJs(en.faqs)},
    related: [
      { label: 'TikTok Shop Beauty Brand Agency Guide', href: 'tiktok-shop-beauty-brand-agency-guide.html' },
      { label: 'TikTok Shop Fashion Cold Start', href: 'tiktok-shop-fashion-cold-start.html' },
      { label: 'TikTok Shop Creator Affiliate Management', href: 'tiktok-shop-creator-affiliate-management.html' },
    ],
  },
  zh: {
    meta: {
      title: 'TikTok Shop 美妆冷启动：从 Hero SKU 到可重复增长的 0-1 系统',
      desc: '面向美妆品牌的 TikTok Shop 美国站冷启动方法：Hero SKU、达人演示、claim、商品页、Offer、Affiliate、GMV Max、库存和用户反馈。',
      cat: 'TIKTOK SHOP 美国站 · 美妆冷启动',
      author: 'WE Marketing Team',
      date: '2026 年 7 月 26 日',
      read: '16 分钟阅读',
      heroImage: 'hero-tiktok-shop-beauty-cold-start.png',
      heroAlt: '无品牌 Beauty Hero SKU 和达人演示组成的 TikTok Shop 0-1 冷启动系统',
    },
    sections: ${toJs(zh.sections)},
    faqs: ${toJs(zh.faqs)},
    related: [
      { label: 'TikTok Shop Beauty 品牌 Agency 指南', href: 'tiktok-shop-beauty-brand-agency-guide.html?lang=zh' },
      { label: 'TikTok Shop 服装冷启动', href: 'tiktok-shop-fashion-cold-start.html?lang=zh' },
      { label: 'TikTok Shop 达人联盟管理', href: 'tiktok-shop-creator-affiliate-management.html?lang=zh' },
    ],
  },
};

function App() {
  const [lang, setLang] = React.useState(() => {
    const urlLang = new URLSearchParams(window.location.search).get('lang');
    if (urlLang === 'zh' || urlLang === 'en') return urlLang;
    const saved = localStorage.getItem('we-lang');
    return saved === 'zh' || saved === 'en' ? saved : 'en';
  });
  const post = POSTS[lang];
  React.useEffect(() => {
    localStorage.setItem('we-lang', lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.title = \`\${post.meta.title} | WE Marketing\`;
  }, [lang, post]);
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
  return <div data-screen-label="WE Blog · Beauty Cold Start">
    <CursorStars />
    <NavBar lang={lang} onLang={setLang} basePath="../" />
    <BlogPost {...post} labels={LABELS[lang]} />
    <CtaFooter lang={lang} />
    <Footer lang={lang} basePath="../" />
  </div>;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
`;

const jsxPath = path.join(root, 'ui_kits/website/blog_posts/tiktok-shop-beauty-cold-start.jsx');
fs.writeFileSync(jsxPath, jsx);

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const blocksHtml = blocks => blocks.map(b => {
  if (b.kind === 'p') return `<p>${esc(b.text)}</p>`;
  if (b.kind === 'h3') return `<h3>${esc(b.text)}</h3>`;
  if (b.kind === 'callout') return `<blockquote>${esc(b.text)}</blockquote>`;
  if (b.kind === 'list') return `<${b.ordered ? 'ol' : 'ul'}>${b.items.map(x => `<li>${esc(x)}</li>`).join('')}</${b.ordered ? 'ol' : 'ul'}>`;
  if (b.kind === 'table') return `<table><thead><tr>${b.headers.map(x => `<th>${esc(x)}</th>`).join('')}</tr></thead><tbody>${b.rows.map(r => `<tr>${r.map(x => `<td>${esc(x)}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
  if (b.kind === 'infographic') return `<figure><img src="/blog/${esc(b.src)}" alt="${esc(b.alt)}" width="1400" height="760"><figcaption>${esc(b.caption)}</figcaption></figure>`;
  return '';
}).join('\n');

const faqJson = en.faqs.map(x => ({
  '@type': 'Question',
  name: x.q,
  acceptedAnswer: { '@type': 'Answer', text: x.a },
}));
const staticBody = en.sections.map(s => `<section><h2>${esc(s.h)}</h2>${blocksHtml(s.body)}</section>`).join('\n');
const html = `<!DOCTYPE html>
<html lang="en">
<head>
<script src="/analytics.js"></script>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>TikTok Shop Beauty Cold Start: A 0-to-1 Launch System | WE Marketing</title>
<meta name="description" content="Build a TikTok Shop Beauty cold start across Hero SKUs, creator demonstrations, claims, product pages, offers, affiliate activation, GMV Max, inventory, and customer feedback.">
<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
<link rel="canonical" href="https://www.weglobalmarketing.com/blog/tiktok-shop-beauty-cold-start">
<link rel="alternate" hreflang="en-US" href="https://www.weglobalmarketing.com/blog/tiktok-shop-beauty-cold-start">
<link rel="alternate" hreflang="zh-CN" href="https://www.weglobalmarketing.com/blog/tiktok-shop-beauty-cold-start?lang=zh">
<link rel="alternate" hreflang="x-default" href="https://www.weglobalmarketing.com/blog/tiktok-shop-beauty-cold-start">
<meta property="og:title" content="TikTok Shop Beauty Cold Start: Build a 0-to-1 Hero Product System">
<meta property="og:description" content="Connect Hero SKUs, creator demonstrations, claims, product pages, offers, GMV Max, inventory, customer feedback, and weekly decisions.">
<meta property="og:image" content="https://www.weglobalmarketing.com/blog/hero-tiktok-shop-beauty-cold-start.png">
<meta property="og:image:width" content="1672"><meta property="og:image:height" content="941">
<meta property="og:image:alt" content="Unbranded Beauty Hero SKU and creator demonstration arranged for a TikTok Shop zero-to-one cold-start test">
<meta property="og:type" content="article">
<meta property="og:url" content="https://www.weglobalmarketing.com/blog/tiktok-shop-beauty-cold-start">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="TikTok Shop Beauty Cold Start: 0 to 1">
<meta name="twitter:description" content="Build a repeatable Beauty Hero SKU, creator proof, claims, conversion, and operations system.">
<meta name="twitter:image" content="https://www.weglobalmarketing.com/blog/hero-tiktok-shop-beauty-cold-start.png">
<link rel="stylesheet" href="../colors_and_type.css?v=20260718-editorial-flow2">
<script src="/lucide-lite.js?v=20260528-lite"></script>
<script src="/vendor/react.production.min.js?v=18.3.1"></script>
<script src="/vendor/react-dom.production.min.js?v=18.3.1"></script>
<script type="application/ld+json">${JSON.stringify({
  '@context': 'https://schema.org', '@type': 'BlogPosting',
  headline: 'TikTok Shop Beauty Cold Start: Build a 0-to-1 Hero Product System',
  description: 'A practical TikTok Shop Beauty cold-start system connecting Hero SKUs, creator demonstrations, claims, product-page clarity, affiliate activation, GMV Max, inventory, customer feedback, and weekly decisions.',
  inLanguage: ['en-US', 'zh-CN'],
  author: { '@type': 'Organization', '@id': 'https://www.weglobalmarketing.com/#editorial-team', name: 'WE Marketing Team', url: 'https://www.weglobalmarketing.com/about' },
  publisher: { '@type': 'Organization', '@id': 'https://www.weglobalmarketing.com/#organization', name: 'WE Marketing', alternateName: 'WEM', url: 'https://www.weglobalmarketing.com/' },
  image: { '@type': 'ImageObject', url: 'https://www.weglobalmarketing.com/blog/hero-tiktok-shop-beauty-cold-start.png', width: 1672, height: 941 },
  datePublished: '2026-07-26', dateModified: '2026-07-26',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.weglobalmarketing.com/blog/tiktok-shop-beauty-cold-start' },
  citation: [
    'https://ads.tiktok.com/business/library/Beauty_cold_start_EN.pdf',
    'https://seller-us.tiktok.com/university/essay?default_language=en&knowledge_id=1789325403522858',
    'https://ads.tiktok.com/help/article/about-product-gmv-max?lang=en',
    'https://ads.tiktok.com/help/article/best-practices-for-product-gmv-max',
    'https://ads.tiktok.com/help/article/about-affiliate-creatives-for-tiktok-shop-ads',
  ],
  keywords: ['TikTok Shop beauty cold start', 'TikTok Shop beauty brand launch', 'TikTok Shop beauty creators', 'TikTok Shop beauty GMV Max', 'TikTok Shop beauty product claims', 'TikTok Shop beauty Hero SKU'],
})}</script>
<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqJson })}</script>
<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.weglobalmarketing.com/' },
  { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.weglobalmarketing.com/blog' },
  { '@type': 'ListItem', position: 3, name: 'TikTok Shop Beauty Cold Start', item: 'https://www.weglobalmarketing.com/blog/tiktok-shop-beauty-cold-start' },
] })}</script>
<style>html,body{margin:0;padding:0;font-family:var(--font-sans);color:#fff;background:#000;overflow-x:hidden;max-width:100%}</style>
</head>
<body>
<div id="root"></div>
<article id="seo-static-fallback" style="max-width:920px;margin:0 auto;padding:64px 24px;color:#fff;background:#000;font-family:Arial,sans-serif;line-height:1.68">
  <p>WE Marketing · TikTok Shop U.S. · Beauty</p>
  <h1>TikTok Shop Beauty Cold Start: Build a 0-to-1 Hero Product System</h1>
  <p>By the WE Marketing Team · Published July 26, 2026</p>
  <img src="/blog/hero-tiktok-shop-beauty-cold-start.png" alt="Unbranded Beauty Hero SKU and creator demonstration arranged for a TikTok Shop zero-to-one cold-start test" width="1672" height="941" style="width:100%;height:auto">
  ${staticBody}
  <section><h2>Frequently asked questions</h2>${en.faqs.map(x => `<h3>${esc(x.q)}</h3><p>${esc(x.a)}</p>`).join('')}</section>
</article>
<script>if(window.React&&window.ReactDOM){document.getElementById('seo-static-fallback').style.display='none'}</script>
<script src="../CursorStars.compiled.js?v=20260612-rbp-all3"></script>
<script src="../NavBar.compiled.js?v=20260623-mobile-menu"></script>
<script src="../BlogPost.editorial.compiled.js?v=20260719-2"></script>
<script src="../CtaFooter.compiled.js?v=20260623-mobile-layout"></script>
<script src="../Footer.compiled.js?v=20260623-mobile-layout"></script>
<script src="../blog_posts/tiktok-shop-beauty-cold-start.compiled.js?v=20260726-beauty-01"></script>
</body></html>`;
fs.writeFileSync(path.join(root, 'ui_kits/website/blog/tiktok-shop-beauty-cold-start.html'), html);

console.log(JSON.stringify({
  jsxPath,
  sections: { en: en.sections.length, zh: zh.sections.length },
  faqs: { en: en.faqs.length, zh: zh.faqs.length },
}, null, 2));
