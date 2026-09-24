import fs from 'node:fs/promises';
import path from 'node:path';
import vm from 'node:vm';
import crypto from 'node:crypto';
import {execFileSync} from 'node:child_process';
import {pathToFileURL} from 'node:url';

const repo=path.resolve(import.meta.dirname,'..');
const base=path.join(repo,'outputs/patches/2026-09-23-growth-autopilot-comparison');
const out=path.join(repo,'outputs/patches/2026-09-21-training45-scoped-local');
const data=JSON.parse(await fs.readFile(path.join(repo,'content/training45-jewelry.json'),'utf8'));
const slug=data.slug;
const prior='tiktok-shop-growth-autopilot-vs-gmv-max-pro';
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const strip=s=>s.replace(/<[^>]*>/g,' ').replace(/\s+/g,' ').trim();
const sha=s=>crypto.createHash('sha256').update(s).digest('hex');
const src=(name)=>data.sources.find(s=>s.name===name).url;
const blog=path.join(out,'blog');

await fs.access(path.join(base,'blog',prior+'.html'));
await fs.mkdir(path.join(blog,'thumbs'),{recursive:true});
await fs.mkdir(path.join(blog,'optimized'),{recursive:true});

function diagram(kind,zh){
  const labels=kind==='gate'
    ?zh?['权限','证据','买家事实','交付','学习']:['PERMISSION','EVIDENCE','BUYER TRUTH','DELIVERY','LEARNING']
    :zh?['确认商品','核对材料','发布内容','核实订单','修复缺口']:['IDENTIFY','DOCUMENT','PUBLISH','READ BACK','REPAIR'];
  const title=kind==='gate'?(zh?'珠宝 SKU 放行门槛':'JEWELRY SKU RELEASE GATE'):(zh?'珠宝经营闭环':'JEWELRY OPERATING LOOP');
  const step=215;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="650" viewBox="0 0 1200 650"><rect width="1200" height="650" rx="34" fill="#f7f5ff"/><text x="65" y="105" font-family="Arial,sans-serif" font-weight="800" font-size="42" fill="#1d1a3b">${esc(title)}</text><path d="M140 345 C340 190 480 490 660 335 S925 210 1070 340" fill="none" stroke="#aaa2f4" stroke-width="22" stroke-linecap="round" opacity=".34"/>${labels.map((label,i)=>`<g><circle cx="${145+i*step}" cy="340" r="55" fill="${i===4?'#ed168c':'#3159c8'}"/><text x="${145+i*step}" y="351" text-anchor="middle" font-family="Arial,sans-serif" font-size="29" font-weight="800" fill="#fff">${i+1}</text><rect x="${55+i*step}" y="430" width="180" height="74" rx="17" fill="#fff" stroke="#dad7ec"/><text x="${145+i*step}" y="475" text-anchor="middle" font-family="Arial,sans-serif" font-size="${zh?22:18}" font-weight="800" fill="#1d1a3b">${esc(label)}</text></g>`).join('')}<text x="65" y="584" font-family="Arial,sans-serif" font-size="19" fill="#67627b">WE MARKETING · ORIGINAL OPERATING FRAMEWORK</text></svg>`;
}
const para=s=>`<p>${esc(s)}</p>`;
function body(zh){
  const suffix=zh?'Zh':'En';
  let html=`<h2>${zh?'直接回答':'The direct answer'}</h2>${data['intro'+suffix].map(para).join('')}`;
  data.sections.forEach((section,i)=>{
    html+=`<section class="wem-topic-card"><h2>${esc(section['title'+suffix])}</h2>${section[zh?'zh':'en'].map(para).join('')}`;
    if(i===1)html+=`<figure><img src="/blog/${slug}-release-gate-${zh?'zh-':''}v1.svg" alt="${zh?'珠宝商品放行门槛':'Jewelry SKU release gate'}"><figcaption>${zh?'五栏证据由具体商品和负责人连接。':'Five evidence fields connect to one exact item and owner.'}</figcaption></figure>`;
    if(i===5)html+=`<figure><img src="/blog/${slug}-operating-loop-${zh?'zh-':''}v1.svg" alt="${zh?'珠宝经营闭环':'Jewelry operating loop'}"><figcaption>${zh?'核实实际交付，再把异常送回商品事实。':'Read back delivery, then route exceptions to product truth.'}</figcaption></figure>`;
    html+='</section>';
  });
  html+=`<section class="wem-example-card"><h2>${zh?'假设的运营案例':'A hypothetical operating example'}</h2>${para(data['example'+suffix])}</section>`;
  html+=`<section class="wem-action-card"><h2>${zh?'今天最小可执行动作':'The smallest useful action today'}</h2>${para(data['action'+suffix])}</section>`;
  html+=`<section class="wem-source-notes"><h2>${zh?'来源说明':'Source notes'}</h2><p>${zh?'这套 WEM 原创珠宝品类运营框架依据 2026 年 9 月 21 日重新核对的 TikTok Shop 美国站 Seller University 完整官方材料：':'This original WEM jewelry operating framework draws on complete current TikTok Shop U.S. Seller University material revalidated September 21, 2026: '}${data.sources.map(s=>`<a href="${s.url}">${esc(s.name)}</a>`).join(zh?'、':', ')}${zh?'。':'. '}${zh?'平台的珠宝文件、上架、视频和拍卖规则是事实边界；五栏放行系统与跨团队复盘是 WEM 的运营判断。类目准入、可用功能、文件与售后规则可能变化，执行前核对当前美国站 Seller Center，并在需要时咨询合格法律或合规专业人士。':'The official documents establish jewelry evidence, listing, video and auction boundaries; the five-field release system and cross-team learning loop are WEM operating judgments. Category access, features, documents and aftersales rules can change. Verify the current U.S. Seller Center and qualified legal or compliance guidance where needed before execution.'}</p></section>`;
  html+=`<h2>${zh?'常见问题':'Frequently asked questions'}</h2>${data[zh?'faqZh':'faqEn'].map(([q,a])=>`<h3>${esc(q)}</h3>${para(a)}`).join('')}`;
  return html;
}
const enBody=body(false),zhBody=body(true);
const enWords=strip(enBody).split(/\s+/).length;
const zhChars=(strip(zhBody).match(/[\u3400-\u9fff]/g)||[]).length;
if(enWords<1300||zhChars<1800)throw new Error(`Body too short: ${enWords} English words, ${zhChars} Chinese Han characters`);
if(/[—]/.test(enBody+zhBody))throw new Error('Em dash found');
const faq=(items)=>items.map(([name,text])=>({'@type':'Question',name,acceptedAnswer:{'@type':'Answer',text}}));
const pageUrl='https://www.weglobalmarketing.com/blog/'+slug;
const imageUrl=pageUrl.replace('/blog/'+slug,'/blog/hero-'+slug+'-v1.png');
const schema={'@context':'https://schema.org','@graph':[
  ...[['en-US','titleEn','excerptEn',pageUrl],['zh-CN','titleZh','excerptZh',pageUrl+'?lang=zh']].map(([lang,title,description,url])=>({'@type':'BlogPosting',headline:data[title],description:data[description],inLanguage:lang,datePublished:data.date,dateModified:data.date,mainEntityOfPage:url,image:imageUrl,author:{'@type':'Organization',name:'WE Marketing'},publisher:{'@type':'Organization',name:'WE Marketing'},citation:data.sources.map(s=>s.url)})),
  {'@type':'FAQPage',inLanguage:'en-US',mainEntity:faq(data.faqEn)},
  {'@type':'FAQPage',inLanguage:'zh-CN',mainEntity:faq(data.faqZh)}
]};
let html=await fs.readFile(path.join(base,'blog',prior+'.html'),'utf8');
html=html.replaceAll(prior,slug)
  .replace(/\/blog\/growth-autopilot-editorial-v1\.js\?v=[^"']+/, '/blog/wem-editorial-enhance.js?v=20260924-training45-fix-01')
  .replace(/<title>[^<]*<\/title>/,`<title>${esc(data.titleEn)} | WE Marketing</title>`)
  .replace(/<meta name="description" content="[^"]*">/,`<meta name="description" content="${esc(data.excerptEn)}">`)
  .replace(/<meta property="og:title" content="[^"]*">/,`<meta property="og:title" content="${esc(data.titleEn)}">`)
  .replace(/<meta property="og:description" content="[^"]*">/,`<meta property="og:description" content="${esc(data.excerptEn)}">`)
  .replace(/<meta property="article:published_time" content="[^"]*">/,`<meta property="article:published_time" content="${data.date}">`)
  .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/,`<script type="application/ld+json">${JSON.stringify(schema)}</script>`);
html=html.replace(/<article lang="en">[\s\S]*?<\/article>/,`<article lang="en"><p>${data.categoryEn}</p><h1>${esc(data.titleEn)}</h1><p>WE Marketing Team · Sep 21, 2026 · 15 min read</p><img class="hero" src="/blog/hero-${slug}-v1.png" alt="WE Marketing editorial cover for ${esc(data.titleEn)}">${enBody}</article>`);
html=html.replace(/<article lang="zh-CN">[\s\S]*?<\/article>/,`<article lang="zh-CN"><p>${data.categoryZh}</p><h1>${esc(data.titleZh)}</h1><p>WE Marketing Team · 2026 年 9 月 21 日 · 15 分钟阅读</p><img class="hero" src="/blog/hero-${slug}-v1.png" alt="WE Marketing 珠宝经营系列封面">${zhBody}</article>`);
await fs.writeFile(path.join(blog,slug+'.html'),html);
for(const [kind,name] of [['gate','release-gate'],['loop','operating-loop']])for(const zh of [false,true])await fs.writeFile(path.join(blog,`${slug}-${name}-${zh?'zh-':''}v1.svg`),diagram(kind,zh));

const raw=await fs.readFile(path.join(repo,'outputs/2026-09-21-training45-jewelry-raw-scene-v1.png'));
const logo=await fs.readFile(path.join(repo,'ui_kits/website/assets/we-logo.png'));
const cover=`<svg xmlns="http://www.w3.org/2000/svg" width="1774" height="887" viewBox="0 0 1774 887"><defs><linearGradient id="veil" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#fffdfa"/><stop offset=".48" stop-color="#fffdfa" stop-opacity=".98"/><stop offset=".68" stop-color="#fffdfa" stop-opacity=".08"/><stop offset="1" stop-color="#fffdfa" stop-opacity="0"/></linearGradient></defs><rect width="1774" height="887" rx="40" fill="#fffdfa"/><image href="data:image/png;base64,${raw.toString('base64')}" width="1774" height="887" preserveAspectRatio="xMidYMid slice"/><rect width="1774" height="887" rx="40" fill="url(#veil)"/><g transform="translate(95 84)"><rect width="600" height="52" rx="26" fill="#e8edff"/><text x="25" y="35" font-family="Arial,sans-serif" font-size="22" font-weight="800" fill="#2455be">${data.categoryEn}</text><text x="0" y="172" font-family="Arial,sans-serif" font-size="76" font-weight="900" fill="#17152b">JEWELRY IS</text><text x="0" y="274" font-family="Arial,sans-serif" font-size="76" font-weight="900" fill="#2455be">MORE THAN</text><text x="0" y="376" font-family="Arial,sans-serif" font-size="76" font-weight="900" fill="#17152b">A LISTING</text><rect y="429" width="108" height="7" rx="4" fill="#2455be"/><text y="488" font-family="Arial,sans-serif" font-size="24" font-weight="700" fill="#4c4960">Permission. Proof. Delivery.</text></g><image href="data:image/png;base64,${logo.toString('base64')}" x="95" y="735" width="138" height="94" preserveAspectRatio="xMidYMid meet"/></svg>`;
await fs.writeFile(path.join(blog,'hero-'+slug+'-v1.svg'),cover);
const chrome='/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
execFileSync(chrome,['--headless=new','--hide-scrollbars','--disable-gpu','--no-sandbox','--force-device-scale-factor=1','--window-size=1774,887',`--screenshot=${path.join(blog,'hero-'+slug+'-v1.png')}`,pathToFileURL(path.join(blog,'hero-'+slug+'-v1.svg')).href],{stdio:'ignore'});
execFileSync('sips',['-s','format','jpeg','-s','formatOptions','90','-z','800','1600',path.join(blog,'hero-'+slug+'-v1.png'),'--out',path.join(blog,'optimized','hero-'+slug+'-v1.jpg')],{stdio:'ignore'});
execFileSync('sips',['-Z','880',path.join(blog,'hero-'+slug+'-v1.png'),'--out',path.join(blog,'thumbs','hero-'+slug+'-v1.png')],{stdio:'ignore'});
execFileSync('sips',['-s','format','jpeg','-s','formatOptions','86',path.join(blog,'thumbs','hero-'+slug+'-v1.png'),'--out',path.join(blog,'thumbs','hero-'+slug+'-v1.jpg')],{stdio:'ignore'});

let list=await fs.readFile(path.join(base,'BlogList.jsx'),'utf8');
if(list.includes(`slug:'${slug}'`))throw new Error('Duplicate target in BlogList');
const row=`{slug:'${slug}',tags:['tiktok-shop','shop-operations','product-strategy'],cat:{en:'${data.categoryEn}',zh:'${data.categoryZh}'},title:{en:'${data.titleEn.replaceAll("'","\\'")}',zh:'${data.titleZh}'},excerpt:{en:'${data.excerptEn.replaceAll("'","\\'")}',zh:'${data.excerptZh}'},date:{en:'Sep 21, 2026',zh:'2026 年 9 月 21 日'},read:{en:'15 min read',zh:'15 分钟阅读'},image:'hero-${slug}-v1.png'},`;
const nextSameDate=`{slug:"tiktok-shop-growth-autopilot-beta-guide"`;
if(!list.includes(nextSameDate))throw new Error('Expected September 21 foundation entry missing');
list=list.replace(nextSameDate,`${row}${nextSameDate}`);
await fs.writeFile(path.join(out,'BlogList.jsx'),list);
const babelCode=await fs.readFile(path.join(repo,'.cache/babel-standalone-7.29.0.min.js'),'utf8');
const sandbox={};vm.createContext(sandbox);vm.runInContext(babelCode,sandbox);
const compiled=sandbox.Babel.transform(list,{presets:[['react',{runtime:'classic'}]],comments:false,compact:true,minified:true,sourceType:'script'}).code;
await fs.writeFile(path.join(out,'BlogList.compiled.js'),compiled+'\n');
const listVersion=sha(compiled).slice(0,12);
let index=await fs.readFile(path.join(base,'blog.html'),'utf8');
index=index.replace(/BlogList\.compiled\.js\?v=[^"']+/, `BlogList.compiled.js?v=${listVersion}`);
await fs.writeFile(path.join(out,'blog.html'),index);
let sitemap=await fs.readFile(path.join(base,'sitemap.xml'),'utf8');
sitemap=sitemap.replace('</urlset>',`<url><loc>${pageUrl}</loc><lastmod>${data.date}</lastmod></url><url><loc>${pageUrl}?lang=zh</loc><lastmod>${data.date}</lastmod></url></urlset>`);
await fs.writeFile(path.join(out,'sitemap.xml'),sitemap);
let llms=await fs.readFile(path.join(base,'llms.txt'),'utf8');
llms+=`\n- ${data.titleEn}: ${pageUrl}\n  - Chinese: ${pageUrl}?lang=zh\n`;
await fs.writeFile(path.join(out,'llms.txt'),llms);
let enhancer=await fs.readFile(path.join(repo,'outputs/patches/2026-09-20-training44-scoped-local','blog','wem-editorial-enhance.js'),'utf8');
enhancer=enhancer.replace('  const relatedGuides = {',`  const relatedGuides = {\n    '${slug}': [${data.related.map(s=>`'${s}'`).join(', ')}],`);
enhancer=enhancer.replace('  const guideNames = {',`  const guideNames = {\n    '${slug}': '${data.titleEn.replaceAll("'","\\'")}',`);
enhancer=enhancer.replace('const coverAlreadyIncludesCopy = new Set([',`const coverAlreadyIncludesCopy = new Set([\n    '${slug}',`);
await fs.writeFile(path.join(blog,'wem-editorial-enhance.js'),enhancer);
const files=[
  'BlogList.jsx','BlogList.compiled.js','blog.html','sitemap.xml','llms.txt',
  `blog/${slug}.html`,`blog/hero-${slug}-v1.svg`,`blog/hero-${slug}-v1.png`,
  `blog/optimized/hero-${slug}-v1.jpg`,`blog/thumbs/hero-${slug}-v1.png`,`blog/thumbs/hero-${slug}-v1.jpg`,
  `blog/${slug}-release-gate-v1.svg`,`blog/${slug}-release-gate-zh-v1.svg`,
  `blog/${slug}-operating-loop-v1.svg`,`blog/${slug}-operating-loop-zh-v1.svg`,
  'blog/wem-editorial-enhance.js'
];
const fingerprint=sha((await Promise.all(files.map(async f=>`${f} ${sha(await fs.readFile(path.join(out,f)))}`))).join('\n'));
const report={status:'local_only_not_published',id:data.id,date:data.date,slug,files,enWords,zhChars,fingerprint,coverSha:sha(await fs.readFile(path.join(blog,'hero-'+slug+'-v1.png'))),thumbSha:sha(await fs.readFile(path.join(blog,'thumbs','hero-'+slug+'-v1.jpg')))};
await fs.writeFile(path.join(repo,'outputs/2026-09-21-training45-build-report.json'),JSON.stringify(report,null,2));
console.log(JSON.stringify(report,null,2));
