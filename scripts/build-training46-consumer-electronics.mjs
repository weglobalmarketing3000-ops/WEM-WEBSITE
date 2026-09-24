import fs from 'node:fs/promises';
import path from 'node:path';
import vm from 'node:vm';
import crypto from 'node:crypto';
import {execFileSync} from 'node:child_process';
import {pathToFileURL} from 'node:url';

const repo=path.resolve(import.meta.dirname,'..');
const base=path.join(repo,'outputs/patches/2026-09-21-training45-scoped-local');
const out=path.join(repo,'outputs/patches/2026-09-24-training46-consumer-electronics');
const data=JSON.parse(await fs.readFile(path.join(repo,'content/training46-consumer-electronics.json'),'utf8'));
const slug=data.slug;
const prior='tiktok-shop-jewelry-category-operating-system';
const rawPath='/Users/wendylin/.codex/generated_images/019fff9a-e2e3-7c92-809f-57be9f4c2b9b/exec-289cce7f-5271-456d-a5d3-2fd8c84d6883.png';
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const strip=s=>s.replace(/<[^>]*>/g,' ').replace(/\s+/g,' ').trim();
const sha=b=>crypto.createHash('sha256').update(b).digest('hex');
const blog=path.join(out,'blog');

await fs.access(path.join(base,'blog',prior+'.html'));
await fs.access(rawPath);
await fs.mkdir(path.join(blog,'thumbs'),{recursive:true});
await fs.mkdir(path.join(blog,'optimized'),{recursive:true});
await fs.copyFile(rawPath,path.join(repo,'outputs/2026-09-24-training46-consumer-electronics-raw-scene-v1.png'));

function diagram(kind,zh){
  const rows=kind==='truth'
    ?(zh?['准确型号','规格与兼容','演示条件','包装内容','售后负责人']:['EXACT MODEL','SPEC + FIT','DEMO CONDITIONS','BOX CONTENTS','SUPPORT OWNER'])
    :(zh?['权限','商品事实','可重复演示','履约','售后反馈','修复再放大']:['PERMISSION','PRODUCT TRUTH','REPEATABLE DEMO','DELIVERY','SUPPORT SIGNAL','REPAIR + SCALE']);
  const title=kind==='truth'?(zh?'3C 商品事实控制表':'ELECTRONICS PRODUCT-TRUTH CONTROL'):(zh?'3C 信任经营闭环':'CONSUMER-ELECTRONICS TRUST LOOP');
  const count=rows.length, gap=kind==='truth'?208:174;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="650" viewBox="0 0 1200 650"><rect width="1200" height="650" rx="34" fill="#f7f5ff"/><text x="64" y="104" font-family="Arial,sans-serif" font-weight="800" font-size="42" fill="#1d1a3b">${esc(title)}</text><path d="M120 340 C300 190 455 490 625 335 S915 215 1080 340" fill="none" stroke="#aaa2f4" stroke-width="22" stroke-linecap="round" opacity=".34"/>${rows.map((label,i)=>{const x=80+i*gap;return `<g><circle cx="${x+62}" cy="338" r="52" fill="${i===count-1?'#ed168c':'#3159c8'}"/><text x="${x+62}" y="350" text-anchor="middle" font-family="Arial,sans-serif" font-size="27" font-weight="800" fill="#fff">${i+1}</text><rect x="${x}" y="425" width="${kind==='truth'?165:145}" height="78" rx="17" fill="#fff" stroke="#dad7ec"/><text x="${x+(kind==='truth'?82:72)}" y="471" text-anchor="middle" font-family="Arial,sans-serif" font-size="${zh?21:15}" font-weight="800" fill="#1d1a3b">${esc(label)}</text></g>`}).join('')}<text x="64" y="585" font-family="Arial,sans-serif" font-size="19" fill="#67627b">WE MARKETING · ORIGINAL OPERATING FRAMEWORK</text></svg>`;
}
const para=s=>`<p>${esc(s)}</p>`;
function body(zh){
  const suffix=zh?'Zh':'En';
  let html=`<h2>${zh?'直接回答':'The direct answer'}</h2>${data['intro'+suffix].map(para).join('')}`;
  data.sections.forEach((section,i)=>{
    html+=`<section class="wem-topic-card"><h2>${esc(section['title'+suffix])}</h2>${section[zh?'zh':'en'].map(para).join('')}`;
    if(i===2)html+=`<figure><img src="/blog/${slug}-product-truth-${zh?'zh-':''}v1.svg" alt="${zh?'3C 商品事实控制表':'Consumer-electronics product-truth control'}"><figcaption>${zh?'用一份型号级事实连接商品页、演示、包装与售后。':'One model-level truth connects listing, demonstration, packing and support.'}</figcaption></figure>`;
    if(i===6)html+=`<figure><img src="/blog/${slug}-trust-loop-${zh?'zh-':''}v1.svg" alt="${zh?'3C 信任经营闭环':'Consumer-electronics trust loop'}"><figcaption>${zh?'先读回实际体验，再决定修复或扩大。':'Read back the received experience before repair or scale.'}</figcaption></figure>`;
    html+='</section>';
  });
  html+=`<section class="wem-example-card"><h2>${zh?'假设的运营案例':'A hypothetical operating example'}</h2>${para(data['example'+suffix])}</section>`;
  html+=`<section class="wem-action-card"><h2>${zh?'今天最小可执行动作':'The smallest useful action today'}</h2>${para(data['action'+suffix])}</section>`;
  html+=`<section class="wem-source-notes"><h2>${zh?'来源说明':'Source notes'}</h2><p>${zh?'这套 WEM 原创 3C 品类经营框架依据 2026 年 9 月 24 日重新核对的 TikTok Shop 美国站 Seller University 完整官方材料：':'This original WEM consumer-electronics operating framework draws on complete current TikTok Shop U.S. Seller University material revalidated September 24, 2026: '}${data.sources.map(s=>`<a href="${s.url}">${esc(s.name)}</a>`).join(zh?'、':', ')}${zh?'。平台资料界定当前类目、电子产品、3C 上架、电池与商品页事实边界；型号级事实控制、可重复演示与跨团队信任闭环是 WEM 的运营判断。类目准入、文件、属性、运输和售后规则可能变化，执行前核对当前美国站 Seller Center，并在需要时咨询合格的法律、安全或合规专业人士。':'. The official material establishes current category, electronics, 3C listing, battery and product-page boundaries; the model-level truth control, reproducible demonstration and cross-team trust loop are WEM operating judgments. Category access, documents, attributes, shipping and aftersales rules can change. Verify the current U.S. Seller Center and qualified legal, safety or compliance guidance where needed before execution.'}</p></section>`;
  html+=`<h2>${zh?'常见问题':'Frequently asked questions'}</h2>${data[zh?'faqZh':'faqEn'].map(([q,a])=>`<h3>${esc(q)}</h3>${para(a)}`).join('')}`;
  return html;
}
const enBody=body(false),zhBody=body(true);
const enWords=strip(enBody).split(/\s+/).length;
const zhChars=(strip(zhBody).match(/[\u3400-\u9fff]/g)||[]).length;
if(enWords<1300||zhChars<1800)throw new Error(`Body too short: ${enWords} English words, ${zhChars} Chinese Han characters`);
if(/[—]/.test(enBody+zhBody))throw new Error('Em dash found');
const faq=items=>items.map(([name,text])=>({'@type':'Question',name,acceptedAnswer:{'@type':'Answer',text}}));
const pageUrl='https://www.weglobalmarketing.com/blog/'+slug;
const imageUrl='https://www.weglobalmarketing.com/blog/hero-'+slug+'-v1.png';
const schema={'@context':'https://schema.org','@graph':[
  ...[['en-US','titleEn','excerptEn',pageUrl],['zh-CN','titleZh','excerptZh',pageUrl+'?lang=zh']].map(([lang,title,description,url])=>({'@type':'BlogPosting',headline:data[title],description:data[description],inLanguage:lang,datePublished:data.date,dateModified:data.date,mainEntityOfPage:url,image:imageUrl,author:{'@type':'Organization',name:'WE Marketing'},publisher:{'@type':'Organization',name:'WE Marketing'},citation:data.sources.map(s=>s.url)})),
  {'@type':'FAQPage',inLanguage:'en-US',mainEntity:faq(data.faqEn)},
  {'@type':'FAQPage',inLanguage:'zh-CN',mainEntity:faq(data.faqZh)}
]};
let html=await fs.readFile(path.join(base,'blog',prior+'.html'),'utf8');
html=html.replaceAll(prior,slug)
  .replace(/\/blog\/wem-editorial-enhance\.js\?v=[^"']+/, '/blog/wem-editorial-enhance.js?v=20260924-training46-01')
  .replace(/<title>[^<]*<\/title>/,`<title>${esc(data.titleEn)} | WE Marketing</title>`)
  .replace(/<meta name="description" content="[^"]*">/,`<meta name="description" content="${esc(data.excerptEn)}">`)
  .replace(/<meta property="og:title" content="[^"]*">/,`<meta property="og:title" content="${esc(data.titleEn)}">`)
  .replace(/<meta property="og:description" content="[^"]*">/,`<meta property="og:description" content="${esc(data.excerptEn)}">`)
  .replace(/<meta property="article:published_time" content="[^"]*">/,`<meta property="article:published_time" content="${data.date}">`)
  .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/,`<script type="application/ld+json">${JSON.stringify(schema)}</script>`);
html=html.replace(/<article lang="en">[\s\S]*?<\/article>/,`<article lang="en"><p>${data.categoryEn}</p><h1>${esc(data.titleEn)}</h1><p>WE Marketing Team · Sep 24, 2026 · 15 min read</p><img class="hero" src="/blog/hero-${slug}-v1.png" alt="WE Marketing editorial cover for ${esc(data.titleEn)}">${enBody}</article>`);
html=html.replace(/<article lang="zh-CN">[\s\S]*?<\/article>/,`<article lang="zh-CN"><p>${data.categoryZh}</p><h1>${esc(data.titleZh)}</h1><p>WE Marketing Team · 2026 年 9 月 24 日 · 15 分钟阅读</p><img class="hero" src="/blog/hero-${slug}-v1.png" alt="WE Marketing 3C 品类经营系列封面">${zhBody}</article>`);
html=html.replace('.wem-topic-card p,.wem-example-card p{margin:0 0 14px}', '.wem-topic-card p,.wem-example-card p{margin:0 0 14px;color:#37332f!important;font-size:18px;line-height:1.78}');
html=html.replace('</head>','<style id="wem-training46-parity">.wrap h1{font-family:Inter,"Helvetica Neue",-apple-system,system-ui,sans-serif!important;font-weight:850!important}.wem-topic-card p,.wem-example-card p{color:#37332f!important}@media(max-width:760px){.wrap h1,article[lang=zh-CN] h1{font-size:39px!important;line-height:1.02!important}.wem-topic-card p,.wem-example-card p,.wem-source-notes p{font-size:16px!important;line-height:1.65!important}}</style></head>');
html=html.replace(/<script>if\(new URLSearchParams\(location\.search\)\.get\('lang'\)==='zh'\)\{[\s\S]*?<\/script><\/body>/,`<script>if(new URLSearchParams(location.search).get('lang')==='zh'){document.title=${JSON.stringify(data.titleZh+' | WE Marketing')};document.querySelector('meta[name="description"]').content=${JSON.stringify(data.excerptZh)};document.querySelector('meta[property="og:title"]').content=${JSON.stringify(data.titleZh)};document.querySelector('meta[property="og:description"]').content=${JSON.stringify(data.excerptZh)};document.querySelector('link[rel="canonical"]').href=${JSON.stringify(pageUrl+'?lang=zh')};}</script></body>`);
await fs.writeFile(path.join(blog,slug+'.html'),html);
for(const [kind,name] of [['truth','product-truth'],['loop','trust-loop']])for(const zh of [false,true])await fs.writeFile(path.join(blog,`${slug}-${name}-${zh?'zh-':''}v1.svg`),diagram(kind,zh));

const raw=await fs.readFile(rawPath);
const logo=await fs.readFile(path.join(repo,'ui_kits/website/assets/we-logo.png'));
const cover=`<svg xmlns="http://www.w3.org/2000/svg" width="1774" height="887" viewBox="0 0 1774 887"><defs><linearGradient id="veil" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#fffdfa"/><stop offset=".48" stop-color="#fffdfa" stop-opacity=".98"/><stop offset=".68" stop-color="#fffdfa" stop-opacity=".08"/><stop offset="1" stop-color="#fffdfa" stop-opacity="0"/></linearGradient></defs><rect width="1774" height="887" rx="40" fill="#fffdfa"/><image href="data:image/png;base64,${raw.toString('base64')}" width="1774" height="887" preserveAspectRatio="xMidYMid slice"/><rect width="1774" height="887" rx="40" fill="url(#veil)"/><g transform="translate(95 82)"><rect width="620" height="52" rx="26" fill="#e8edff"/><text x="25" y="35" font-family="Arial,sans-serif" font-size="21" font-weight="800" fill="#2455be">${data.categoryEn}</text><text x="0" y="172" font-family="Arial,sans-serif" font-size="68" font-weight="900" fill="#17152b">SHOW THE</text><text x="0" y="262" font-family="Arial,sans-serif" font-size="68" font-weight="900" fill="#2455be">PRODUCT TRUTH</text><text x="0" y="352" font-family="Arial,sans-serif" font-size="68" font-weight="900" fill="#17152b">THEN SCALE</text><rect y="407" width="108" height="7" rx="4" fill="#2455be"/><text y="466" font-family="Arial,sans-serif" font-size="24" font-weight="700" fill="#4c4960">Demonstration. Trust. Service.</text></g><image href="data:image/png;base64,${logo.toString('base64')}" x="95" y="735" width="138" height="94" preserveAspectRatio="xMidYMid meet"/></svg>`;
await fs.writeFile(path.join(blog,'hero-'+slug+'-v1.svg'),cover);
const chrome='/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
execFileSync(chrome,['--headless=new','--hide-scrollbars','--disable-gpu','--no-sandbox','--force-device-scale-factor=1','--window-size=1774,887',`--screenshot=${path.join(blog,'hero-'+slug+'-v1.png')}`,pathToFileURL(path.join(blog,'hero-'+slug+'-v1.svg')).href],{stdio:'ignore'});
execFileSync('sips',['-s','format','jpeg','-s','formatOptions','90','-z','800','1600',path.join(blog,'hero-'+slug+'-v1.png'),'--out',path.join(blog,'optimized','hero-'+slug+'-v1.jpg')],{stdio:'ignore'});
execFileSync('sips',['-Z','880',path.join(blog,'hero-'+slug+'-v1.png'),'--out',path.join(blog,'thumbs','hero-'+slug+'-v1.png')],{stdio:'ignore'});
execFileSync('sips',['-s','format','jpeg','-s','formatOptions','86',path.join(blog,'thumbs','hero-'+slug+'-v1.png'),'--out',path.join(blog,'thumbs','hero-'+slug+'-v1.jpg')],{stdio:'ignore'});

let list=await fs.readFile(path.join(base,'BlogList.jsx'),'utf8');
if(list.includes(`slug:'${slug}'`))throw new Error('Duplicate target in BlogList');
const row=`{slug:'${slug}',tags:['tiktok-shop','shop-operations','product-strategy'],cat:{en:'${data.categoryEn}',zh:'${data.categoryZh}'},title:{en:'${data.titleEn.replaceAll("'","\\'")}',zh:'${data.titleZh}'},excerpt:{en:'${data.excerptEn.replaceAll("'","\\'")}',zh:'${data.excerptZh}'},date:{en:'Sep 24, 2026',zh:'2026 年 9 月 24 日'},read:{en:'15 min read',zh:'15 分钟阅读'},image:'hero-${slug}-v1.png'},`;
const anchor='const BLOG_POSTS = [';
if(!list.includes(anchor))throw new Error('Blog list anchor missing');
list=list.replace(anchor,anchor+row);
await fs.writeFile(path.join(out,'BlogList.jsx'),list);
const babelCode=await fs.readFile(path.join(repo,'.cache/babel-standalone-7.29.0.min.js'),'utf8');
const sandbox={};vm.createContext(sandbox);vm.runInContext(babelCode,sandbox);
const compiled=sandbox.Babel.transform(list,{presets:[['react',{runtime:'classic'}]],comments:false,compact:true,minified:true,sourceType:'script'}).code;
await fs.writeFile(path.join(out,'BlogList.compiled.js'),compiled+'\n');
const listVersion=sha(Buffer.from(compiled)).slice(0,12);
let index=await fs.readFile(path.join(base,'blog.html'),'utf8');
index=index.replace(/BlogList\.compiled\.js\?v=[^"']+/,`BlogList.compiled.js?v=${listVersion}`);
await fs.writeFile(path.join(out,'blog.html'),index);
let sitemap=await fs.readFile(path.join(base,'sitemap.xml'),'utf8');
sitemap=sitemap.replace('</urlset>',`<url><loc>${pageUrl}</loc><lastmod>${data.date}</lastmod></url><url><loc>${pageUrl}?lang=zh</loc><lastmod>${data.date}</lastmod></url></urlset>`);
await fs.writeFile(path.join(out,'sitemap.xml'),sitemap);
let llms=await fs.readFile(path.join(base,'llms.txt'),'utf8');
llms+=`\n- ${data.titleEn}: ${pageUrl}\n  - Chinese: ${pageUrl}?lang=zh\n`;
await fs.writeFile(path.join(out,'llms.txt'),llms);
let enhancer=await fs.readFile(path.join(base,'blog','wem-editorial-enhance.js'),'utf8');
enhancer=enhancer.replace('  const relatedGuides = {',`  const relatedGuides = {\n    '${slug}': [${data.related.map(s=>`'${s}'`).join(', ')}],`);
enhancer=enhancer.replace('  const guideNames = {',`  const guideNames = {\n    '${slug}': '${data.titleEn.replaceAll("'","\\'")}',`);
enhancer=enhancer.replace('const coverAlreadyIncludesCopy = new Set([',`const coverAlreadyIncludesCopy = new Set([\n    '${slug}',`);
await fs.writeFile(path.join(blog,'wem-editorial-enhance.js'),enhancer);
const files=['BlogList.jsx','BlogList.compiled.js','blog.html','sitemap.xml','llms.txt',`blog/${slug}.html`,`blog/hero-${slug}-v1.svg`,`blog/hero-${slug}-v1.png`,`blog/optimized/hero-${slug}-v1.jpg`,`blog/thumbs/hero-${slug}-v1.png`,`blog/thumbs/hero-${slug}-v1.jpg`,`blog/${slug}-product-truth-v1.svg`,`blog/${slug}-product-truth-zh-v1.svg`,`blog/${slug}-trust-loop-v1.svg`,`blog/${slug}-trust-loop-zh-v1.svg`,'blog/wem-editorial-enhance.js'];
const fingerprint=sha(Buffer.from((await Promise.all(files.map(async f=>`${f} ${sha(await fs.readFile(path.join(out,f)))}`))).join('\n')));
const report={status:'local_only_not_published',id:data.id,date:data.date,slug,files,enWords,zhChars,fingerprint,coverSha:sha(await fs.readFile(path.join(blog,'hero-'+slug+'-v1.png'))),thumbSha:sha(await fs.readFile(path.join(blog,'thumbs','hero-'+slug+'-v1.jpg')))};
await fs.writeFile(path.join(repo,'outputs/2026-09-24-training46-build-report.json'),JSON.stringify(report,null,2));
console.log(JSON.stringify(report,null,2));
