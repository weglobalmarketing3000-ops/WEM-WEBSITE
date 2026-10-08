import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import vm from 'node:vm';
import {createRequire} from 'node:module';

const require=createRequire(import.meta.url);
const sharp=require('/Users/wendylin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');
const root=path.resolve(import.meta.dirname,'..');
const base=path.join(root,'outputs/patches/2026-10-07-q4-11-authorization-decision');
const out=path.join(root,'outputs/patches/2026-10-08-q4-12-shop-tab-eligibility');
const slug='tiktok-shop-shop-tab-eligibility-three-gate-audit';
const date='2026-10-08';
const url=`https://www.weglobalmarketing.com/blog/${slug}`;
const source='https://seller-us.tiktok.com/university/essay?knowledge_id=3688464537175863&lang=en';
const enTitle='Allowed to Sell Does Not Mean Eligible for TikTok Shop Tab Recommendation';
const zhTitle='能卖不等于能被 TikTok Shop Tab 推荐：商品和内容还差哪一步';
const enDescription='Use a three-gate audit to separate permission to sell, Shop Tab recommendation eligibility and readiness to scale on TikTok Shop.';
const zhDescription='用销售、推荐、放量三道门，区分 TikTok Shop 商品可售、Shop Tab 推荐资格与真正可放量状态。';
const sha=value=>crypto.createHash('sha256').update(value).digest('hex');

await fs.rm(out,{recursive:true,force:true});
for(const dir of ['assets','blog','blog/optimized','blog/thumbs','blog/q4-12-shop-tab']) await fs.mkdir(path.join(out,dir),{recursive:true});
await fs.copyFile(path.join(root,'assets/we-logo.png'),path.join(out,'assets/we-logo.png'));
const logo=(await fs.readFile(path.join(out,'assets/we-logo.png'))).toString('base64');

function cover(zh){
  const lines=zh?['能卖','不等于能推荐']:['SELLABLE IS NOT','RECOMMENDABLE'];
  return `<svg width="1792" height="896" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bg" x2="1"><stop stop-color="#fffdf8"/><stop offset="1" stop-color="#e9e3ff"/></linearGradient><linearGradient id="g" x2="1" y2="1"><stop stop-color="#245bd7"/><stop offset="1" stop-color="#8d62e8"/></linearGradient><filter id="s"><feDropShadow dx="0" dy="18" stdDeviation="20" flood-opacity=".18"/></filter></defs><rect width="1792" height="896" fill="url(#bg)"/><path d="M1080 0h712v896h-770c162-236 180-646 58-896z" fill="#eeeaff"/><rect x="82" y="78" width="650" height="50" rx="25" fill="#e8efff"/><text x="110" y="111" font-family="Arial" font-size="21" font-weight="800" fill="#1746b8">TIKTOK SHOP · SHOP TAB ELIGIBILITY</text>${lines.map((line,i)=>`<text x="82" y="${250+i*88}" font-family="Arial Narrow,Arial,PingFang SC" font-size="${zh?76:(i===1?58:66)}" font-weight="900" fill="${i===1?'#245bd7':'#17151a'}">${line}</text>`).join('')}<rect x="84" y="438" width="88" height="6" rx="3" fill="#ed168c"/><text x="82" y="505" font-family="Arial,PingFang SC" font-size="25" fill="#4f4a55">${zh?'销售 · 推荐 · 放量':'SALE · RECOMMEND · SCALE'}</text><image href="data:image/png;base64,${logo}" x="82" y="700" width="145" height="105"/><g filter="url(#s)"><ellipse cx="1390" cy="748" rx="320" ry="68" fill="#beb9ed"/><rect x="1140" y="145" width="460" height="535" rx="44" fill="#fff"/><rect x="1210" y="225" width="320" height="270" rx="30" fill="url(#g)"/><rect x="1260" y="280" width="220" height="145" rx="20" fill="#fff"/><path d="M1310 365h120M1370 305v120" stroke="#ed168c" stroke-width="18" stroke-linecap="round"/><circle cx="1250" cy="565" r="45" fill="#e8efff"/><path d="M1229 565l15 15 30-36" fill="none" stroke="#245bd7" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/><circle cx="1390" cy="565" r="45" fill="#fce0ef"/><path d="M1390 535l10 20 23 3-17 16 4 23-20-11-20 11 4-23-17-16 23-3z" fill="#ed168c"/><circle cx="1530" cy="565" r="45" fill="#eeeaff"/><path d="M1508 580l22-30 22 30" fill="none" stroke="#6f55d9" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/></g></svg>`;
}

function visual(zh,type){
  if(type==='gates'){
    const title=zh?'同一个 SKU，要过三道不同的门':'One SKU, three different gates';
    const rows=zh?[
      ['销售门','能否合法上架与销售','商品、品牌、Listing 与基础政策'],
      ['推荐门','是否适合进入 Shop Tab 推荐','商品页面和推广内容均符合展示资格'],
      ['放量门','是否值得增加流量与库存','转化、履约、利润与风险已有证据']
    ]:[
      ['SALE GATE','May it be listed and sold?','Product, brand, listing and baseline policy'],
      ['RECOMMENDATION GATE','Is it suitable for Shop Tab?','Listing and promotional content meet eligibility'],
      ['SCALE GATE','Should the brand add traffic and inventory?','Conversion, fulfillment, margin and risk evidence']
    ];
    return `<svg width="1600" height="820" xmlns="http://www.w3.org/2000/svg"><rect width="1600" height="820" rx="42" fill="#f5f2ff"/><text x="72" y="105" font-family="Arial,PingFang SC" font-size="42" font-weight="850" fill="#17141d">${title}</text><g transform="translate(70 185)">${rows.map((r,i)=>`<g transform="translate(0 ${i*182})"><rect width="1460" height="148" rx="28" fill="#fff"/><circle cx="78" cy="74" r="42" fill="${i===1?'#ed168c':'#245bd7'}"/><text x="78" y="88" text-anchor="middle" font-family="Arial" font-size="31" font-weight="900" fill="#fff">${i+1}</text><text x="150" y="58" font-family="Arial,PingFang SC" font-size="25" font-weight="850" fill="#1746b8">${r[0]}</text><text x="150" y="105" font-family="Arial,PingFang SC" font-size="25" font-weight="800" fill="#17141d">${r[1]}</text><text x="870" y="86" font-family="Arial,PingFang SC" font-size="22" fill="#4f4a55">${r[2]}</text></g>`).join('')}</g></svg>`;
  }
  const title=zh?'审核结果决定下一步，不决定一切':'Route the next action from the audit result';
  const cols=zh?[
    ['可售 + 可推荐','保持素材与页面一致','进入小规模测试'],
    ['可售但不适合推荐','保留合规销售','重做页面或推广内容'],
    ['销售门未通过','停止发布与推广','修正商品、权利或 Listing'],
    ['三门都通过','逐步增加预算与库存','继续监控回读和履约']
  ]:[
    ['SELL + RECOMMEND','Keep listing and content aligned','Start a bounded test'],
    ['SELL, NOT RECOMMEND','Keep compliant sale available','Rework listing or promotion'],
    ['SALE GATE FAILS','Stop listing and promotion','Repair product, rights or listing'],
    ['ALL THREE PASS','Increase traffic and stock gradually','Keep monitoring readback and fulfillment']
  ];
  return `<svg width="1600" height="760" xmlns="http://www.w3.org/2000/svg"><rect width="1600" height="760" rx="42" fill="#f5f2ff"/><text x="72" y="105" font-family="Arial,PingFang SC" font-size="43" font-weight="850" fill="#17141d">${title}</text><g transform="translate(55 190)">${cols.map((r,i)=>`<g transform="translate(${i*375} 0)"><rect width="345" height="455" rx="30" fill="#fff"/><rect width="345" height="16" rx="8" fill="${i===1?'#ed168c':'#245bd7'}"/><text x="30" y="90" font-family="Arial,PingFang SC" font-size="23" font-weight="850" fill="#1746b8">${r[0]}</text><text x="30" y="175" font-family="Arial,PingFang SC" font-size="22" font-weight="800" fill="#17141d">${r[1]}</text><line x1="30" y1="220" x2="315" y2="220" stroke="#ddd7eb" stroke-width="3"/><text x="30" y="290" font-family="Arial,PingFang SC" font-size="${zh?21:17}" fill="#4f4a55">${r[2]}</text></g>`).join('')}</g></svg>`;
}

for(const [lang,zh] of [['en',false],['zh',true]]){
  const name=`hero-${slug}-${lang}-v1`;
  await sharp(Buffer.from(cover(zh))).png().toFile(path.join(out,'blog',`${name}.png`));
  await sharp(path.join(out,'blog',`${name}.png`)).resize({width:1600}).jpeg({quality:90}).toFile(path.join(out,'blog/optimized',`${name}.jpg`));
  await sharp(path.join(out,'blog',`${name}.png`)).resize({width:880}).jpeg({quality:88}).toFile(path.join(out,'blog/thumbs',`${name}.jpg`));
  for(const type of ['gates','routing']) await sharp(Buffer.from(visual(zh,type))).png().toFile(path.join(out,'blog/q4-12-shop-tab',`${type}-${lang}-v1.png`));
}

const faqEn=[
  ['If a product is allowed for sale, is it automatically eligible for Shop Tab recommendation?','No. The current TikTok Shop U.S. guide says some products may be allowed for sale but not suitable for homepage placement. Recommendation eligibility is a separate gate.'],
  ['Can shoppers still find an item that is not recommended on Shop Tab?','The official guide explains that products not eligible for Shop Tab recommendation may still appear in search. Availability in search does not prove homepage recommendation eligibility.'],
  ['Does Shop Tab eligibility apply only to the product listing?','No. The guide covers product listings and promotional content, including LIVE covers and videos. Operators should review the product page and every asset used to promote it.'],
  ['Are political products eligible for TikTok Shop promotions?','The current guide says paid political advertising is not allowed and political products are not eligible for TikTok Shop promotions such as Today’s Deals and New Customer Deals.'],
  ['Does passing the recommendation gate guarantee traffic or sales?','No. Eligibility means the item is suitable to be considered for recommendation. It does not guarantee placement, impressions, conversion or sales.'],
  ['What is the smallest useful audit to run today?','Choose one priority SKU and review its listing, main image, videos and LIVE cover against the sale and recommendation gates. Record the exact issue, owner and next check date before adding traffic.']
];
const faqZh=[
  ['商品可以销售，就一定能进入 Shop Tab 推荐吗？','不一定。当前 TikTok Shop 美国站指南明确说明，有些商品可以销售，但不适合出现在首页。推荐资格是一道独立的门。'],
  ['不能被 Shop Tab 推荐的商品，买家还能搜到吗？','官方指南说明，不符合 Shop Tab 推荐资格的商品仍可能出现在搜索结果里。能被搜索到，不代表具备首页推荐资格。'],
  ['Shop Tab 资格只检查商品 Listing 吗？','不是。指南同时覆盖商品 Listing 与推广内容，包括 LIVE Cover 和 Video。运营要一起检查商品页和用于推广它的全部素材。'],
  ['政治类商品可以参加 TikTok Shop 促销吗？','当前指南说明，平台不允许付费政治广告，政治类商品也不符合 Today’s Deals、New Customer Deals 等 TikTok Shop 促销资格。'],
  ['通过推荐门，就能保证流量或销量吗？','不能。通过只表示商品和内容适合被纳入推荐考虑，不保证一定获得展示、流量、转化或销量。'],
  ['今天最小可执行的审核是什么？','选一个优先 SKU，同时检查 Listing、主图、Video 和 LIVE Cover。分别记录销售门与推荐门的问题、Owner 和下一次回读日期，再决定是否加流量。']
];
const faqHtml=(items,zh)=>`<section class="faq"><h2>${zh?'常见问题':'Common questions'}</h2>${items.map(([q,a])=>`<div class="faq-item"><h3>${q}</h3><p>${a}</p></div>`).join('')}</section>`;
const P=items=>items.join('');

const EN=P([
  `<p class="eyebrow">TIKTOK SHOP U.S. · SHOP TAB ELIGIBILITY</p><h1>${enTitle}</h1><img class="hero" src="/blog/hero-${slug}-en-v1.png" alt="${enTitle}"><p class="byline">WE Marketing Team · Oct 8, 2026 · 14 min read</p>`,
  `<p><strong>Direct answer:</strong> no. A product can clear the basic conditions to be listed and sold without being suitable for recommendation on the TikTok Shop Tab. The current TikTok Shop U.S. eligibility guide separates homepage recommendation from ordinary sale. It also evaluates promotional content, including videos and LIVE covers, not only the product record. Treat sale, recommendation and scale as three different gates.</p>`,
  `<p>The distinction matters because each gate answers a different question. The sale gate asks whether the product, seller, brand relationship and listing may operate on TikTok Shop. The recommendation gate asks whether the product page and the content used to promote it are suitable for a broad customer-facing surface. The scale gate is a WE Marketing operating decision: even when the first two gates pass, does the brand have enough conversion, margin, inventory and fulfillment evidence to add traffic responsibly?</p>`,
  `<p>Passing one gate is not evidence that the next gate passed. A searchable listing is not proof of homepage eligibility. Recommendation eligibility is not a promise of placement, impressions or sales. Platform permission is not proof that the SKU can absorb more creator volume, paid traffic or inventory. A clean audit keeps those conclusions separate.</p>`,
  `<figure><img src="/blog/q4-12-shop-tab/gates-en-v1.png" alt="TikTok Shop sale, recommendation and scale gates"><figcaption>Use a separate owner and evidence record for every gate.</figcaption></figure>`,
  `<h2>Gate 1: may the product be listed and sold?</h2>`,
  `<p>Begin with the product itself. Confirm that the item, category, seller permissions, brand relationship, claims, images, title, description, variants and required qualifications comply with the applicable TikTok Shop rules. If a product requires brand authorization, category qualification, safety evidence or another approval, a recommendation review cannot replace it. A weak sale file should stop the release before the team discusses homepage visibility.</p>`,
  `<p>The sale gate also requires product truth. The exact item shipped must match the listing. Packaging, quantity, size, material, included accessories, color and variant names should be consistent across the product page, creator brief and fulfillment record. If the content promises something the SKU does not deliver, the risk is not solved by changing a thumbnail. Repair the offer and listing first.</p>`,
  `<p>Record the result as more than a green check. Save the seller entity, SKU, listing ID, category, brand route, qualification status, current screenshots, reviewer, review date and next expiry. A product is ready to move to the recommendation gate only when those fields describe the actual item that will be promoted.</p>`,
  `<h2>Gate 2: is the product and its promotion suitable for Shop Tab?</h2>`,
  `<p>TikTok Shop describes the Shop Tab as a customer-facing landing page where product recommendations can actively promote items. Its current U.S. guide says listings and promotional content must comply with Shop Tab eligibility as well as the Product Listing Policy and Content Policy to be visible or recommended on the homepage. Noncompliant content may be removed from the Shop Tab or excluded from recommendation even when the underlying product can still be sold.</p>`,
  `<p>The review surface is broader than the product detail page. Include the main image, supporting images, title and description, then inspect every video, LIVE cover, text overlay and promotional scene that could represent the SKU. A clean listing paired with an unsuitable LIVE cover is not a clean recommendation package. The same is true when a compliant product is promoted through vulgar, sexually suggestive, graphic or distressing creative.</p>`,
  `<p>The guide identifies crude, vulgar and disturbing content as ineligible. Its examples include explicit language, obscene gestures, graphic violence, sexual content, offensive or shock humor, profanity, hidden sexual meaning, bathroom jokes, insulting jokes, harmful stereotypes, exposure of intimate parts, suggestive poses, bodily fluids, decay, threatening uses of blood or weapons and gruesome animal imagery. These examples should become a preflight checklist, not a reason to invent broader prohibitions than the source states.</p>`,
  `<p>Sensitive events require a separate review. The guide lists natural disasters, health emergencies, civil unrest, terrorism and mass violence, and explains that products exploiting or endorsing tragedy may be removed or limited. The question is not only whether a product mentions an event. Review the commercial framing, creative treatment and timing. Do not use fear, suffering or an unfolding emergency as a conversion hook.</p>`,
  `<p>Political content has another boundary. Paid political advertising is not allowed. The guide also says political products are not eligible for TikTok Shop promotions such as Today’s Deals and New Customer Deals. Keep this promotion restriction separate from any broader question about whether a particular product may remain available for sale.</p>`,
  `<h2>Search visibility is not Shop Tab recommendation</h2>`,
  `<p>Teams often infer too much from a successful search test. The official eligibility guide explains that some products not eligible for Shop Tab recommendation may still appear in search. Therefore, a product being discoverable by exact title, shop name or keyword proves only that the route returned the listing at that moment. It does not prove that the homepage may recommend it to a broad audience.</p>`,
  `<p>Keep separate readbacks for listing availability, search discovery, Shop Tab eligibility and actual recommendation delivery. The first three are product or platform states. The fourth is an observed distribution outcome. If a seller sees low Shop Tab traffic, do not claim an eligibility problem without evidence. Check current notices, content status and account interfaces, then compare impressions before and after a controlled repair.</p>`,
  `<h2>Run the recommendation package audit</h2>`,
  `<p>Create one audit row per SKU and one asset row for every promotional item. For the SKU row, record the listing URL, category, title, main image, claims and policy status. For each asset, record the asset ID, format, creator, linked SKU, first-use date, current version and reviewer. The reviewer should see the actual rendered asset, not only a filename or script.</p>`,
  `<p>Check four layers in order. First, product truth: does every statement match the item? Second, visual suitability: does the page or creative contain any crude, vulgar, sexual, graphic, distressing or exploitative element identified by the current guide? Third, context: does the creative use a sensitive event or political promotion in a restricted way? Fourth, route consistency: do the listing, video and LIVE cover present the same product, offer and claim?</p>`,
  `<p>When one asset fails, isolate the failure. Do not automatically delist a compliant product because one thumbnail is unsuitable, and do not leave an unsuitable asset live because the product itself is allowed. Hold or replace the specific promotional asset while confirming whether the listing may remain available. If the sale gate itself fails, stop both sale and promotion until the underlying issue is resolved.</p>`,
  `<figure><img src="/blog/q4-12-shop-tab/routing-en-v1.png" alt="TikTok Shop audit result routing"><figcaption>The audit result determines the next controlled action.</figcaption></figure>`,
  `<h2>Gate 3: is the SKU ready to scale?</h2>`,
  `<p>The scale gate is not a TikTok Shop permission and should never be presented as one. It is the brand's operating decision after compliance and recommendation suitability are stable. A SKU may be fully eligible but still be a poor candidate for additional spend because its product page does not convert, inventory is thin, contribution margin is negative, creators cannot explain it or fulfillment creates cancellations and complaints.</p>`,
  `<p>Define a bounded test before increasing traffic. Freeze the SKU, price, core offer, product page and fulfillment promise. Choose one traffic source and one creative question. Record impressions, product-page views, add-to-cart, checkout, orders, cancellations, returns, contribution margin and recurring buyer objections. The purpose is to learn whether the buyer path holds, not to manufacture a positive result by changing every variable.</p>`,
  `<p>Scale only after the team can name what worked and what remains constrained. Increase traffic or inventory in steps, with a stop condition for policy notices, fulfillment deterioration, rising return reasons, margin loss or content mismatch. Recommendation suitability can change when an asset changes, so a scale plan must preserve version control and repeat the gate review for new creative.</p>`,
  `<h2>A weekly three-gate ledger</h2>`,
  `<table><tr><th>Gate</th><th>Question</th><th>Minimum evidence</th><th>Owner</th></tr><tr><td>Sale</td><td>May this exact SKU be listed and sold?</td><td>Product truth, category, brand route, qualifications and current listing readback</td><td>Catalog or compliance owner</td></tr><tr><td>Recommendation</td><td>Are the listing and promotional assets suitable for Shop Tab?</td><td>Rendered asset review, current notice status and versioned approval</td><td>Content and shop operations</td></tr><tr><td>Scale</td><td>Can the buyer path, margin and fulfillment absorb more demand?</td><td>Bounded test, unit economics, inventory and service signals</td><td>Growth and operations</td></tr></table>`,
  `<p>Review the ledger whenever the SKU, claim, image, video, LIVE cover, price, bundle or sensitive context changes. Preserve the last approved version and the current rendered version so the team can see what actually changed. A submitted edit is not an accepted readback. A green status from last week does not cover a new creative today.</p>`,
  `<h2>What enforcement can look like</h2>`,
  `<p>The official guide says enforcement may include Account Health Rating points, listing removal, loss of selling privileges, removal from promotional surfaces and refunds to affected customers. The exact action depends on the issue and current platform decision. Operators should read the specific notice and use the corresponding appeal path when an appeal is available, rather than assuming every restriction has the same remedy.</p>`,
  `<p>Keep a case file with the notice, listing and asset versions, timestamps, source evidence, action taken and terminal readback. Do not label an appeal as successful when it has only been submitted. Do not label a product as restored until the relevant listing or promotional surface can be verified in the current account and, where appropriate, through an anonymous public check.</p>`,
  `<h2>The smallest useful action today</h2>`,
  `<p>Pick one priority SKU. Write three lines: <strong>sale gate, recommendation gate, scale gate.</strong> Under the recommendation line, attach the current listing, main image, top video and LIVE cover. Mark each line Pass, Hold or Unknown, cite the evidence and assign one owner. If anything is Unknown, resolve it before increasing traffic. This twenty-minute audit is more useful than treating “active listing” as proof that the whole growth system is ready.</p>`,
  `<h2>Source notes and execution boundary</h2>`,
  `<p>This original WE Marketing operating framework draws on the complete current TikTok Shop U.S. Seller University guide <a href="${source}">Shop Tab Eligibility</a>, published September 24, 2026 and revalidated October 8, 2026. The source also directs sellers to the current Product Listing Policy and Content Policy. The three-gate structure, ledger and scale decision are WEM operating methods. Platform interfaces, eligibility, recommendation logic and enforcement can change. Verify the current U.S. Seller Center and the brand's own inventory, fulfillment and economics before execution. Eligibility does not guarantee recommendation, traffic or sales.</p>`,
  faqHtml(faqEn,false),
  `<h2>Related WEM guides</h2><section class="related-grid"><a href="/blog/tiktok-shop-brand-cobranded-originality-protection-decision"><strong>Brand rights decision system</strong><span>Separate brand, licensed IP and image rights before release.</span></a><a href="/blog/tiktok-shop-search-shop-tab-content-discovery"><strong>Search, Shop Tab and content discovery</strong><span>Diagnose which discovery route is actually working.</span></a><a href="/blog/signs-your-brand-is-ready-for-tiktok-shop"><strong>Is your brand ready?</strong><span>Check product, operations and growth readiness.</span></a></section>`
]);

const ZH=P([
  `<p class="eyebrow">TIKTOK SHOP 美国站 · 商城展示资格</p><h1>${zhTitle}</h1><img class="hero" src="/blog/hero-${slug}-zh-v1.png" alt="${zhTitle}"><p class="byline">WE Marketing Team · 2026 年 10 月 8 日 · 14 分钟阅读</p>`,
  `<p><strong>直接答案：</strong>不一定。一个商品满足基础上架和销售条件，不代表它适合进入 TikTok Shop Tab 推荐。当前 TikTok Shop 美国站指南把首页推荐资格与普通销售分开，而且审核的不只是商品 Listing，还包括 Video、LIVE Cover 等推广内容。运营应把销售、推荐、放量当成三道不同的门。</p>`,
  `<p>三道门分别回答不同问题。销售门问的是商品、卖家、品牌关系与 Listing 能不能在 TikTok Shop 上运行；推荐门问的是商品页面和用于推广它的内容，是否适合进入面向大量消费者的 Shop Tab；放量门是 WE Marketing 的运营判断：前两道门通过后，这个 SKU 的转化、利润、库存与履约证据，是否足以支持增加流量。</p>`,
  `<p>通过一道门，不能证明下一道也通过。能被搜索到，不等于适合首页推荐；具备推荐资格，也不等于平台保证展示、流量或销量；平台允许销售，更不等于这个 SKU 能承受更多达人内容、广告预算和库存。审核表必须把这些结论拆开。</p>`,
  `<figure><img src="/blog/q4-12-shop-tab/gates-zh-v1.png" alt="TikTok Shop 销售、推荐和放量三道门"><figcaption>每一道门都要有独立 Owner 与证据。</figcaption></figure>`,
  `<h2>第一道门：这个商品能否上架和销售</h2>`,
  `<p>先看商品本身。确认商品、品类、卖家权限、品牌关系、Claim、图片、Title、Description、Variant 与所需 Qualification 符合当前规则。如果商品需要品牌授权、类目资格、安全证明或其他批准，推荐审核不能替代它。销售档案不完整时，团队应该先停止 Release，而不是继续讨论首页流量。</p>`,
  `<p>销售门还要检查 Product Truth。实际发出的商品必须和 Listing 一致，包括包装、数量、尺寸、材质、配件、颜色与 Variant Name。商品页、Creator Brief 和履约记录也要使用同一事实。如果内容承诺了 SKU 无法交付的东西，换一张 Thumbnail 解决不了问题，应先修正 Offer 与 Listing。</p>`,
  `<p>审核结果不能只有一个绿色勾。要保存 Seller Entity、SKU、Listing ID、Category、Brand Route、Qualification Status、当前截图、Reviewer、Review Date 与下一次 Expiry。只有这些字段都对应即将推广的真实商品，才能进入推荐门。</p>`,
  `<h2>第二道门：商品和推广内容是否适合 Shop Tab</h2>`,
  `<p>TikTok Shop 把 Shop Tab 描述为面向消费者的 Landing Page，里面的商品推荐会主动推广商品。当前美国站指南说明，商品 Listing 与推广内容都要符合 Shop Tab Eligibility、Product Listing Policy 和 Content Policy，才能出现在首页或进入推荐。即使商品本身仍可销售，不合规内容也可能被移出 Shop Tab 或排除在推荐之外。</p>`,
  `<p>审核范围不只是一张商品详情页。除了主图、辅图、Title 和 Description，还要检查每一个 Video、LIVE Cover、Text Overlay 与推广 Scene。Listing 很干净，但 LIVE Cover 不适合，也不能算完整推荐包通过；商品本身合规，却用低俗、性暗示、血腥或令人不适的创意推广，同样有问题。</p>`,
  `<p>指南把粗俗、低俗与令人不适的内容列为不符合资格，并举出明确例子：露骨语言、下流手势、血腥暴力、色情内容、冒犯或 Shock Humor、Profanity、隐藏性含义、厕所笑话、侮辱性笑话、有害刻板印象、私密部位暴露、性暗示动作、体液、腐败、威胁场景中的血液或武器，以及令人不适的动物画面。运营应把这些例子做成提交前 Checklist，同时不要把来源没有写的内容扩大成新的禁令。</p>`,
  `<p>敏感事件需要单独审核。指南列出自然灾害、公共卫生紧急事件、社会动荡、恐怖主义与大规模暴力，并说明利用或支持悲剧的商品推广可能被移除或限制。问题不只是商品有没有提到事件，还要看商业表达、创意处理与时间点。不要把恐惧、伤痛或正在发生的紧急事件当成 Conversion Hook。</p>`,
  `<p>政治内容还有另一条边界。平台不允许 Paid Political Advertising，指南也说明政治类商品不符合 Today’s Deals、New Customer Deals 等 TikTok Shop Promotion 的资格。这个促销限制应与某个具体商品是否仍可销售的问题分开判断。</p>`,
  `<h2>搜索可见不等于 Shop Tab 推荐</h2>`,
  `<p>团队经常从一次成功搜索中推导过多结论。官方资格指南说明，有些不符合 Shop Tab 推荐资格的商品仍可能出现在 Search。按准确 Title、Shop Name 或 Keyword 找到 Listing，只能证明当时该搜索路径返回了商品，不能证明首页适合向更广泛买家推荐它。</p>`,
  `<p>分别保存 Listing Availability、Search Discovery、Shop Tab Eligibility 与 Actual Recommendation Delivery 的回读。前三个属于商品或平台状态，第四个是实际分发结果。如果 Shop Tab Traffic 低，不要在没有证据时直接归因于资格问题。先看当前 Notice、Content Status 和 Account Interface，再用受控修改比较前后 Impression。</p>`,
  `<h2>审核完整的推荐包</h2>`,
  `<p>每个 SKU 建一行，每个推广 Asset 也单独建一行。SKU 行保存 Listing URL、Category、Title、Main Image、Claim 和 Policy Status；Asset 行保存 Asset ID、Format、Creator、Linked SKU、First-use Date、Current Version 与 Reviewer。Reviewer 必须看到真实渲染结果，不能只看文件名或 Script。</p>`,
  `<p>按四层顺序检查。第一层是 Product Truth，所有表达是否匹配真实商品；第二层是 Visual Suitability，页面或创意是否出现当前指南列出的粗俗、性暗示、血腥、令人不适或利用悲剧的元素；第三层是 Context，是否以受限制方式使用敏感事件或政治促销；第四层是 Route Consistency，Listing、Video 与 LIVE Cover 是否呈现同一个商品、Offer 与 Claim。</p>`,
  `<p>如果一个 Asset 失败，要隔离具体失败点。不要因为一张不合适的 Thumbnail 就自动下架本来合规的商品，也不要因为商品可以卖，就让不适合的推广素材继续上线。先 Hold 或替换具体 Asset，同时确认 Listing 是否可以保留；如果销售门本身失败，则商品和推广都要停止，直到根本问题解决。</p>`,
  `<figure><img src="/blog/q4-12-shop-tab/routing-zh-v1.png" alt="TikTok Shop 三道门审核结果路由"><figcaption>审核结果只决定下一步受控动作，不替代其他状态。</figcaption></figure>`,
  `<h2>第三道门：这个 SKU 是否真的可以放量</h2>`,
  `<p>放量门不是 TikTok Shop 平台许可，不能把它写成平台规则。它是合规与推荐适配稳定之后，品牌自己做出的运营决定。一个 SKU 可能完全符合资格，却仍不适合增加预算，因为 Product Page 不转化、库存太薄、Contribution Margin 为负、达人解释不清，或者履约造成 Cancellation 与 Complaint。</p>`,
  `<p>加流量前先定义一个有边界的 Test。冻结 SKU、Price、Core Offer、Product Page 与 Fulfillment Promise，只选一个 Traffic Source 和一个 Creative Question。记录 Impression、Product-page View、Add-to-cart、Checkout、Order、Cancellation、Return、Contribution Margin 与重复出现的 Buyer Objection。测试目的，是判断 Buyer Path 是否成立，而不是同时修改所有变量来制造一个好结果。</p>`,
  `<p>只有团队能说清楚什么有效、什么仍是 Constraint 时，才逐步增加流量或库存。为 Policy Notice、履约恶化、Return Reason 上升、Margin Loss 与 Content Mismatch 设置停止条件。Asset 一变化，推荐适配也可能变化，所以放量计划必须有 Version Control，并对新 Creative 重跑推荐门。</p>`,
  `<h2>每周维护一张三门 Ledger</h2>`,
  `<table><tr><th>关卡</th><th>核心问题</th><th>最小证据</th><th>Owner</th></tr><tr><td>销售门</td><td>这个准确 SKU 能否上架销售</td><td>商品事实、类目、品牌路径、资格与当前 Listing 回读</td><td>Catalog 或 Compliance</td></tr><tr><td>推荐门</td><td>Listing 与推广素材是否适合 Shop Tab</td><td>真实渲染审核、当前 Notice 状态与 Versioned Approval</td><td>Content 与 Shop Operations</td></tr><tr><td>放量门</td><td>Buyer Path、利润与履约能否承受更多需求</td><td>受控测试、Unit Economics、库存与服务信号</td><td>Growth 与 Operations</td></tr></table>`,
  `<p>SKU、Claim、Image、Video、LIVE Cover、Price、Bundle 或敏感语境每次变化，都要重新检查 Ledger。保留上一个批准版本和当前真实渲染版本，团队才能看清到底改了什么。Submitted Edit 不等于 Accepted Readback，上周的绿色状态也不能覆盖今天的新 Creative。</p>`,
  `<h2>平台措施可能是什么</h2>`,
  `<p>官方指南说明，平台措施可能包括 Account Health Rating Points、Listing Removal、撤销 Selling Privileges、移出 Promotional Surface，以及向受影响买家退款。实际动作取决于具体问题与当前平台决定。运营要阅读准确 Notice，在可以申诉时走对应 Appeal 路径，不能假设所有限制都有同一种处理方式。</p>`,
  `<p>Case File 应保存 Notice、Listing 与 Asset Version、Timestamp、Source Evidence、采取的 Action 与 Terminal Readback。Appeal 只是提交时，不能写成申诉成功；只有相关 Listing 或 Promotional Surface 在当前账号里得到确认，而且适合时也通过匿名公开检查，才能写成恢复。</p>`,
  `<h2>今天就做的最小动作</h2>`,
  `<p>选一个 Priority SKU，写三行：<strong>销售门、推荐门、放量门。</strong>在推荐门下面附上当前 Listing、Main Image、最重要的 Video 与 LIVE Cover。每行标记 Pass、Hold 或 Unknown，连接证据并指定一个 Owner。只要还有 Unknown，就先解决它，再增加流量。这个二十分钟审核，比把 Active Listing 当成整个增长系统已经就绪更有价值。</p>`,
  `<h2>来源说明与执行边界</h2>`,
  `<p>这套 WE Marketing 原创运营框架基于 TikTok Shop 美国站 Seller University 的完整当前指南 <a href="${source}">Shop Tab Eligibility</a>。该页面发布于 2026 年 9 月 24 日，并于 2026 年 10 月 8 日重新核验；来源同时要求遵守当前 Product Listing Policy 与 Content Policy。三门结构、Ledger 与放量判断属于 WEM 运营方法。平台界面、资格、推荐逻辑与措施可能变化，执行前应核验当前美国站 Seller Center，以及品牌自己的库存、履约与 Economics。符合资格不保证推荐、流量或销量。</p>`,
  faqHtml(faqZh,true),
  `<h2>相关 WEM 指南</h2><section class="related-grid"><a href="/blog/tiktok-shop-brand-cobranded-originality-protection-decision?lang=zh"><strong>品牌权利决策系统</strong><span>发布前区分品牌、许可 IP 与图片权利。</span></a><a href="/blog/tiktok-shop-search-shop-tab-content-discovery?lang=zh"><strong>Search、Shop Tab 与内容发现</strong><span>判断真正起作用的是哪条发现路径。</span></a><a href="/blog/signs-your-brand-is-ready-for-tiktok-shop?lang=zh"><strong>品牌是否准备好进入 TikTok Shop</strong><span>检查商品、运营与增长准备度。</span></a></section>`
]);

const graph={'@context':'https://schema.org','@graph':[
  {'@type':'BlogPosting','@id':`${url}#article`,headline:enTitle,description:enDescription,inLanguage:'en-US',author:{'@type':'Organization','@id':'https://www.weglobalmarketing.com/#editorial-team',name:'WE Marketing Team'},publisher:{'@type':'Organization','@id':'https://www.weglobalmarketing.com/#organization',name:'WE Marketing',alternateName:'WEM'},image:{'@type':'ImageObject',url:`https://www.weglobalmarketing.com/blog/hero-${slug}-en-v1.png`,width:1792,height:896,caption:'WE Marketing TikTok Shop recommendation eligibility audit'},datePublished:date,dateModified:date,mainEntityOfPage:{'@type':'WebPage','@id':url},citation:[source],keywords:['TikTok Shop Tab eligibility','TikTok Shop recommendation','TikTok Shop product eligibility']},
  {'@type':'BlogPosting','@id':`${url}?lang=zh#article`,headline:zhTitle,description:zhDescription,inLanguage:'zh-CN',translationOfWork:{'@id':`${url}#article`},author:{'@id':'https://www.weglobalmarketing.com/#editorial-team'},publisher:{'@id':'https://www.weglobalmarketing.com/#organization'},image:{'@type':'ImageObject',url:`https://www.weglobalmarketing.com/blog/hero-${slug}-zh-v1.png`,width:1792,height:896,caption:'WE Marketing TikTok Shop 推荐资格三门审核'},datePublished:date,dateModified:date,mainEntityOfPage:{'@type':'WebPage','@id':`${url}?lang=zh`},citation:[source]},
  ...[[faqEn,'en-US',`${url}#faq`],[faqZh,'zh-CN',`${url}?lang=zh#faq`]].map(([items,lang,id])=>({'@type':'FAQPage','@id':id,inLanguage:lang,mainEntity:items.map(([name,text])=>({'@type':'Question',name,acceptedAnswer:{'@type':'Answer',text}}))})),
  {'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:'https://www.weglobalmarketing.com/'},{'@type':'ListItem',position:2,name:'Blog',item:'https://www.weglobalmarketing.com/blog'},{'@type':'ListItem',position:3,name:enTitle,item:url}]}
]};

const oldHtml=await fs.readFile(path.join(base,'blog/tiktok-shop-brand-cobranded-originality-protection-decision.html'),'utf8');
const style=oldHtml.match(/<style>[\s\S]*?<\/style>/)[0];
const html=`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><script>document.documentElement.dataset.lang=new URLSearchParams(location.search).get('lang')==='zh'?'zh':'en';document.documentElement.lang=document.documentElement.dataset.lang==='zh'?'zh-CN':'en'</script><title>${enTitle} | WE Marketing</title><meta name="description" content="${enDescription}"><link rel="canonical" href="${url}"><link rel="alternate" hreflang="en-US" href="${url}"><link rel="alternate" hreflang="zh-CN" href="${url}?lang=zh"><link rel="alternate" hreflang="x-default" href="${url}"><script type="application/ld+json">${JSON.stringify(graph)}</script>${style}</head><body><nav class="nav"><a class="logo" href="/"><img src="/assets/we-logo.png" alt="WE Marketing"></a><a href="/services">SERVICES</a><a href="/about">ABOUT</a><a href="/blog">BLOG</a><span class="spacer"></span><div class="switch"><a class="zh" href="?lang=zh">中文</a><a class="en" href="?">EN</a></div></nav><main class="wrap"><div class="tools"><a class="en" href="/blog">← BLOG</a><a class="zh" href="/blog?lang=zh">← 博客</a></div><article lang="en">${EN}</article><article lang="zh-CN">${ZH}</article></main><section class="cta"><h2 class="en">READY TO TALK<br>TO WEM?</h2><h2 class="zh">准备好和 WEM<br>一起把计划落地吗？</h2><p class="en">Turn product eligibility into a controlled recommendation and scale decision.</p><p class="zh">把商品资格变成可控的推荐与放量决策。</p><a class="en" href="https://scheduler.zoom.us/wendylin001">BOOK A DISCOVERY CALL</a><a class="zh" href="https://scheduler.zoom.us/wendylin001">预约咨询</a></section><footer class="footer"><img src="/assets/we-logo.png" alt="WE Marketing"><p class="en">WE Marketing connects strategy, creator operations, paid growth and TikTok Shop execution.</p><p class="zh">WE Marketing 帮助品牌连接策略、达人运营、付费增长与 TikTok Shop 执行。</p><p>© 2026 WE Marketing. All rights reserved.</p></footer><script>if(document.documentElement.dataset.lang==='zh'){document.title=${JSON.stringify(zhTitle+' | WE Marketing')};document.querySelector('meta[name=description]').content=${JSON.stringify(zhDescription)};document.querySelector('link[rel=canonical]').href='${url}?lang=zh'}</script></body></html>`;
await fs.writeFile(path.join(out,'blog',`${slug}.html`),html);

let list=await fs.readFile(path.join(base,'BlogList.jsx'),'utf8');
const row={slug,tags:['tiktok-shop','shop-operations','shop-tab'],cat:{en:'TIKTOK SHOP U.S. · SHOP TAB ELIGIBILITY',zh:'TIKTOK SHOP 美国站 · 商城展示资格'},title:{en:enTitle,zh:zhTitle},excerpt:{en:'Separate permission to sell, Shop Tab recommendation eligibility and readiness to scale.',zh:'把商品可售、Shop Tab 推荐资格与真正可放量状态分开判断。'},date:{en:'Oct 8, 2026',zh:'2026 年 10 月 8 日'},read:{en:'14 min read',zh:'14 分钟阅读'},image:{en:`hero-${slug}-en-v1.png`,zh:`hero-${slug}-zh-v1.png`}};
list=list.replace('const BLOG_POSTS = [',`const BLOG_POSTS = [${JSON.stringify(row).replace(/"([A-Za-z_$][\w$]*)":/g,'$1:')},`);
await fs.writeFile(path.join(out,'BlogList.jsx'),list);
const sandbox={};vm.createContext(sandbox);vm.runInContext(await fs.readFile(path.join(root,'.cache/babel-standalone-7.29.0.min.js'),'utf8'),sandbox);
const compiled=sandbox.Babel.transform(list,{presets:[['react',{runtime:'classic'}]],compact:true,minified:true,sourceType:'script'}).code+'\n';
await fs.writeFile(path.join(out,'BlogList.compiled.js'),compiled);
const version=sha(compiled).slice(0,12);
const index=await fs.readFile(path.join(base,'blog.html'),'utf8');
await fs.writeFile(path.join(out,'blog.html'),index.replace(/BlogList\.compiled\.js\?v=[^"']+/,`BlogList.compiled.js?v=${version}`));
let sitemap=await fs.readFile(path.join(base,'sitemap.xml'),'utf8');
await fs.writeFile(path.join(out,'sitemap.xml'),sitemap.replace('</urlset>',`<url><loc>${url}</loc><lastmod>${date}</lastmod></url><url><loc>${url}?lang=zh</loc><lastmod>${date}</lastmod></url></urlset>`));
await fs.writeFile(path.join(out,'llms.txt'),(await fs.readFile(path.join(base,'llms.txt'),'utf8'))+`\n- ${enTitle}: ${url}\n  - 中文：${url}?lang=zh\n`);

const sourceFile=path.join(root,'outputs/2026-10-08-q4-12-source/shop-tab-eligibility.html');
const bytes=await fs.readFile(sourceFile);
const sourceReport={status:'source_revalidated',date,source:{url:source,httpStatus:200,bytes:bytes.length,sha256:sha(bytes)},facts:[
  'Shop Tab is a customer-facing landing page where recommendations actively promote products.',
  'Some products may be allowed for sale but not suitable for homepage placement.',
  'Listings and promotional content, including LIVE covers and videos, are subject to Shop Tab eligibility.',
  'Products excluded from Shop Tab recommendation may still appear in search.',
  'Enforcement may include AHR points, listing removal, loss of selling privileges, removal from promotional surfaces and refunds.'
]};
await fs.writeFile(path.join(root,'outputs/2026-10-08-q4-12-source-revalidation.json'),`${JSON.stringify(sourceReport,null,2)}\n`);
console.log(JSON.stringify({out,version,enWords:EN.replace(/<[^>]+>/g,' ').trim().split(/\s+/).length,zhChars:ZH.replace(/<[^>]+>/g,'').replace(/\s/g,'').length}));
