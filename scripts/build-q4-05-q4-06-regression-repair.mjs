import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import vm from 'node:vm';

const root = path.resolve(import.meta.dirname, '..');
const base = path.join(root, 'outputs/patches/2026-10-03-q4-07-creator-agency-contract');
const out = path.join(root, 'outputs/patches/2026-10-03-q4-05-q4-06-regression-repair');
const q405 = 'tiktok-shop-bfcm-pricing-margin-waterfall';
const q406 = 'tiktok-shop-creator-commission-video-usage-rights';
const q406Url = `https://www.weglobalmarketing.com/blog/${q406}`;
const source = 'https://seller-us.tiktok.com/university/essay?knowledge_id=1331308753078058&lang=en';
const hash = (value) => crypto.createHash('sha256').update(value).digest('hex');

await fs.rm(out, { recursive: true, force: true });
await fs.mkdir(path.join(out, 'blog'), { recursive: true });

const q405Row = `{slug:"${q405}",tags:["tiktok-shop","campaign-growth","shop-operations"],cat:{en:"TIKTOK SHOP U.S. · BFCM PRICING",zh:"TIKTOK SHOP 美国站 · BFCM 定价"},title:{en:"TikTok Shop BFCM Pricing: Protect Margin When Campaign Prices and Promotions Do Not Stack",zh:"TikTok Shop BFCM 定价：活动价不叠加时，怎么守住毛利"},excerpt:{en:"Read the campaign range, estimated checkout price and seller cost floor before BFCM traffic scales.",zh:"BFCM 放量前，先对清活动价格范围、预计结账价和卖家成本底线。"},date:{en:"Oct 1, 2026",zh:"2026 年 10 月 1 日"},read:{en:"15 min read",zh:"15 分钟阅读"},image:{en:"hero-tiktok-shop-bfcm-pricing-margin-waterfall-en-v1.png",zh:"hero-tiktok-shop-bfcm-pricing-margin-waterfall-zh-v1.png"}}`;
let list = await fs.readFile(path.join(base, 'BlogList.jsx'), 'utf8');
if (list.includes(`slug:"${q405}"`) || list.includes(`slug:'${q405}'`)) throw new Error('q4-05 row is already present');
const q404Marker = `,{slug:"tiktok-shop-ai-product-images-real-sku"`;
if (!list.includes(q404Marker)) throw new Error('q4-04 insertion marker missing');
list = list.replace(q404Marker, `,${q405Row}${q404Marker}`);
await fs.writeFile(path.join(out, 'BlogList.jsx'), list);

const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(await fs.readFile(path.join(root, '.cache/babel-standalone-7.29.0.min.js'), 'utf8'), sandbox);
const compiled = sandbox.Babel.transform(list, { presets: [['react', { runtime: 'classic' }]], compact: true, minified: true, sourceType: 'script' }).code + '\n';
await fs.writeFile(path.join(out, 'BlogList.compiled.js'), compiled);
const index = await fs.readFile(path.join(base, 'blog.html'), 'utf8');
await fs.writeFile(path.join(out, 'blog.html'), index.replace(/BlogList\.compiled\.js\?v=[^"']+/, `BlogList.compiled.js?v=${hash(compiled).slice(0, 12)}`));

let sitemap = await fs.readFile(path.join(base, 'sitemap.xml'), 'utf8');
if (sitemap.includes(`/blog/${q405}</loc>`)) throw new Error('q4-05 sitemap entry is already present');
sitemap = sitemap.replace('</urlset>', `<url><loc>https://www.weglobalmarketing.com/blog/${q405}</loc><lastmod>2026-10-01</lastmod></url><url><loc>https://www.weglobalmarketing.com/blog/${q405}?lang=zh</loc><lastmod>2026-10-01</lastmod></url></urlset>`);
await fs.writeFile(path.join(out, 'sitemap.xml'), sitemap);

let llms = await fs.readFile(path.join(base, 'llms.txt'), 'utf8');
if (llms.includes(`/blog/${q405}`)) throw new Error('q4-05 llms entry is already present');
llms += `\n- TikTok Shop BFCM Pricing: Protect Margin When Campaign Prices and Promotions Do Not Stack: https://www.weglobalmarketing.com/blog/${q405}\n  - 中文：https://www.weglobalmarketing.com/blog/${q405}?lang=zh\n`;
await fs.writeFile(path.join(out, 'llms.txt'), llms);

let article = await fs.readFile(path.join(root, 'outputs/patches/2026-10-02-q4-06-live-recovered/blog', `${q406}.html`), 'utf8');
const articleSegment = (language) => article.match(new RegExp(`<article lang="${language}">([\\s\\S]*?)<\\/article>`))?.[1] || '';
const faqs = (language) => [...articleSegment(language).matchAll(/<div class="faq-item"><h3>(.*?)<\/h3><p>(.*?)<\/p><\/div>/g)].map((match) => ({
  '@type': 'Question',
  name: match[1],
  acceptedAnswer: { '@type': 'Answer', text: match[2] },
}));
const enFaq = faqs('en');
const zhFaq = faqs('zh-CN');
if (enFaq.length !== 6 || zhFaq.length !== 6) throw new Error(`q4-06 FAQ extraction failed: ${enFaq.length}/${zhFaq.length}`);
const graph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting', '@id': `${q406Url}#article`, headline: 'TikTok Shop Creator Commission Does Not Buy Video Usage Rights',
      description: 'Separate TikTok Shop creator service compensation from organic reposting, paid-media and cross-channel video usage rights.', inLanguage: 'en-US',
      author: { '@type': 'Organization', '@id': 'https://www.weglobalmarketing.com/#editorial-team', name: 'WE Marketing Team' },
      publisher: { '@type': 'Organization', '@id': 'https://www.weglobalmarketing.com/#organization', name: 'WE Marketing', alternateName: 'WEM' },
      image: { '@type': 'ImageObject', url: `${q406Url.replace(`/blog/${q406}`, '')}/blog/hero-${q406}-en-v1.png`, width: 1792, height: 896, caption: 'WE Marketing TikTok Shop creator commission and video usage rights' },
      datePublished: '2026-10-02', dateModified: '2026-10-03', mainEntityOfPage: { '@type': 'WebPage', '@id': q406Url },
      citation: [source], keywords: ['TikTok Shop creator commission', 'creator video usage rights', 'creator content license', 'paid media rights'],
    },
    {
      '@type': 'BlogPosting', '@id': `${q406Url}?lang=zh#article`, headline: 'TikTok Shop 达人佣金不等于视频使用权：品牌还要单独谈什么',
      description: '把 TikTok Shop 达人服务报酬与自然转载、付费投放及跨渠道视频使用权分开管理。', inLanguage: 'zh-CN',
      translationOfWork: { '@id': `${q406Url}#article` }, author: { '@id': 'https://www.weglobalmarketing.com/#editorial-team' }, publisher: { '@id': 'https://www.weglobalmarketing.com/#organization' },
      image: { '@type': 'ImageObject', url: `${q406Url.replace(`/blog/${q406}`, '')}/blog/hero-${q406}-zh-v1.png`, width: 1792, height: 896, caption: 'WE Marketing TikTok Shop 达人佣金与视频使用权' },
      datePublished: '2026-10-02', dateModified: '2026-10-03', mainEntityOfPage: { '@type': 'WebPage', '@id': `${q406Url}?lang=zh` }, citation: [source],
      keywords: ['TikTok Shop 达人佣金', '达人视频使用权', '达人内容授权', '付费投放授权'],
    },
    { '@type': 'FAQPage', '@id': `${q406Url}#faq`, inLanguage: 'en-US', mainEntity: enFaq },
    { '@type': 'FAQPage', '@id': `${q406Url}?lang=zh#faq`, inLanguage: 'zh-CN', mainEntity: zhFaq },
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.weglobalmarketing.com/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.weglobalmarketing.com/blog' },
      { '@type': 'ListItem', position: 3, name: 'Creator Commission and Video Usage Rights', item: q406Url },
    ] },
  ],
};
article = article
  .replace('<meta name="description" content="A SKU-level audit for TikTok Shop AI product images.">', '<meta name="description" content="Separate TikTok Shop creator compensation from organic reposting, paid-media and cross-channel video usage rights.">')
  .replace('Turn AI image production into a SKU-truth system.', 'Turn creator rights into a controlled, reusable content system.')
  .replace('把 AI 商品图生产变成一套 SKU 事实系统。', '把达人内容使用权变成可控、可复核的内容系统。')
  .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, `<script type="application/ld+json">${JSON.stringify(graph)}</script>`);
for (const stale of ['Discount Architecture', '折扣架构', 'AI product images', 'AI image production', 'AI 商品图', 'SKU 事实', 'promotion stacking', 'Promotion Simulator']) {
  if (article.includes(stale)) throw new Error(`stale q4-05/q4-04 metadata remains: ${stale}`);
}
await fs.writeFile(path.join(out, 'blog', `${q406}.html`), article);

console.log(JSON.stringify({ out, files: 6, indexVersion: hash(compiled).slice(0, 12) }, null, 2));
