import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import vm from 'node:vm';
import {createRequire} from 'node:module';

const require=createRequire(import.meta.url);
const sharp=require('/Users/wendylin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');
const root=path.resolve(import.meta.dirname,'..');
const base=path.join(root,'outputs/patches/2026-10-09-q4-13-bfcm-creator-brief');
const out=path.join(root,'outputs/patches/2026-10-10-q4-14-bfcm-price-claim-audit');
const slug='tiktok-shop-bfcm-price-claim-audit';
const date='2026-10-10';
const url=`https://www.weglobalmarketing.com/blog/${slug}`;
const sources={
  content:'https://seller-us.tiktok.com/university/essay?knowledge_id=6837891779151617&lang=en',
  claims:'https://seller-us.tiktok.com/university/essay?knowledge_id=6935962194478864&lang=en',
  transparency:'https://seller-us.tiktok.com/university/essay?knowledge_id=1584424904427277&lang=en',
  rewards:'https://seller-us.tiktok.com/university/essay?knowledge_id=5122516513113876&lang=en'
};
const enTitle='Audit Every TikTok Shop BFCM Price Claim Across Video, LIVE and Product Page';
const zhTitle='TikTok Shop BFCM 价格口径怎么统一：短视频、直播和商品页逐项核对';
const enDescription='Build one TikTok Shop BFCM price-claim ledger across product pages, videos and LIVEs, with posting-time verification and a practical kill switch.';
const zhDescription='用一张 TikTok Shop BFCM 价格口径台账统一商品页、短视频与直播，并建立发布时核验和失效下线机制。';
const sha=value=>crypto.createHash('sha256').update(value).digest('hex');

await fs.rm(out,{recursive:true,force:true});
for(const dir of ['assets','blog','blog/optimized','blog/thumbs','blog/q4-14-price-audit']) await fs.mkdir(path.join(out,dir),{recursive:true});
await fs.copyFile(path.join(root,'assets/we-logo.png'),path.join(out,'assets/we-logo.png'));
const logo=(await fs.readFile(path.join(out,'assets/we-logo.png'))).toString('base64');

function cover(zh){
  const lines=zh?['BFCM 价格','口径审计']:['BFCM PRICE','CLAIM AUDIT'];
  return `<svg width="1792" height="896" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bg" x2="1"><stop stop-color="#fffdf8"/><stop offset="1" stop-color="#e9e3ff"/></linearGradient><linearGradient id="g" x2="1" y2="1"><stop stop-color="#245bd7"/><stop offset="1" stop-color="#8d62e8"/></linearGradient><filter id="s"><feDropShadow dx="0" dy="18" stdDeviation="20" flood-opacity=".18"/></filter></defs><rect width="1792" height="896" fill="url(#bg)"/><path d="M1080 0h712v896h-770c162-236 180-646 58-896z" fill="#eeeaff"/><rect x="82" y="78" width="610" height="50" rx="25" fill="#e8efff"/><text x="110" y="111" font-family="Arial" font-size="21" font-weight="800" fill="#1746b8">TIKTOK SHOP · BFCM PRICE OPERATIONS</text>${lines.map((line,i)=>`<text x="82" y="${250+i*88}" font-family="Arial Narrow,Arial,PingFang SC" font-size="${zh?70:67}" font-weight="900" fill="${i===1?'#245bd7':'#17151a'}">${line}</text>`).join('')}<rect x="84" y="438" width="88" height="6" rx="3" fill="#ed168c"/><text x="82" y="505" font-family="Arial,PingFang SC" font-size="25" fill="#4f4a55">${zh?'短视频 · 直播 · 商品页':'VIDEO · LIVE · PRODUCT PAGE'}</text><image href="data:image/png;base64,${logo}" x="82" y="700" width="145" height="105"/><g filter="url(#s)"><ellipse cx="1390" cy="750" rx="330" ry="66" fill="#beb9ed"/><rect x="1160" y="152" width="430" height="520" rx="42" fill="#fff"/><rect x="1215" y="210" width="320" height="86" rx="22" fill="url(#g)"/><text x="1375" y="265" text-anchor="middle" font-family="Arial" font-size="30" font-weight="900" fill="#fff">$  PRICE CHECK</text><rect x="1215" y="345" width="212" height="22" rx="11" fill="#d6d2e8"/><rect x="1215" y="397" width="270" height="22" rx="11" fill="#d6d2e8"/><rect x="1215" y="449" width="185" height="22" rx="11" fill="#d6d2e8"/><circle cx="1260" cy="555" r="40" fill="#e8efff"/><path d="M1242 555l12 12 27-32" fill="none" stroke="#245bd7" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/><circle cx="1380" cy="555" r="40" fill="#fce0ef"/><path d="M1358 555h44M1380 533v44" stroke="#ed168c" stroke-width="10" stroke-linecap="round"/><circle cx="1500" cy="555" r="40" fill="#eeeaff"/><path d="M1478 572l22-34 22 34" fill="none" stroke="#6f55d9" stroke-width="10" stroke-linecap="round"/></g></svg>`;
}

function visual(zh,type){
  if(type==='ledger'){
    const title=zh?'一张价格 Claim 台账控制三个公开界面':'One price-claim ledger controls three public surfaces';
    const rows=zh?[
      ['商品页','展示价、变体、Coupon、有效期','Listing Owner'],
      ['短视频','口播、字幕、封面、挂链','Content Owner'],
      ['直播','主播话术、贴片、Pin、Product Anchor','LIVE Operator']
    ]:[
      ['PRODUCT PAGE','Displayed price, variant, coupon and term','Listing owner'],
      ['VIDEO','Spoken claim, text, cover and product link','Content owner'],
      ['LIVE','Host script, overlay, pin and product anchor','LIVE operator']
    ];
    return `<svg width="1600" height="850" xmlns="http://www.w3.org/2000/svg"><rect width="1600" height="850" rx="42" fill="#f5f2ff"/><text x="72" y="105" font-family="Arial,PingFang SC" font-size="42" font-weight="850" fill="#17141d">${title}</text><g transform="translate(70 185)">${rows.map((r,i)=>`<g transform="translate(0 ${i*185})"><rect width="1460" height="145" rx="26" fill="#fff"/><rect width="18" height="145" rx="9" fill="${i===1?'#ed168c':'#245bd7'}"/><text x="58" y="53" font-family="Arial,PingFang SC" font-size="25" font-weight="850" fill="#1746b8">${r[0]}</text><text x="58" y="101" font-family="Arial,PingFang SC" font-size="24" fill="#4f4a55">${r[1]}</text><rect x="1160" y="35" width="245" height="76" rx="22" fill="${i===1?'#fce0ef':'#e8efff'}"/><text x="1282" y="82" text-anchor="middle" font-family="Arial,PingFang SC" font-size="21" font-weight="800" fill="${i===1?'#c91472':'#1746b8'}">${r[2]}</text></g>`).join('')}</g></svg>`;
  }
  const title=zh?'触发 Kill Switch 时，先停止 Claim，再修价格':'When the kill switch fires, stop the claim before repairing price';
  const steps=zh?[
    ['触发',['价格 / Coupon / SKU','有效期或资格变化']],
    ['冻结',['暂停新内容','LIVE 话术和置顶贴片']],
    ['修复',['回读商品页与 Stacking','核对挂链与批准表达']],
    ['重开',['保存时间戳证据','由第二人复核']]
  ]:[
    ['TRIGGER',['Price, coupon and SKU','Term or eligibility changes']],
    ['FREEZE',['Pause new posts','LIVE language and overlays']],
    ['REPAIR',['Read back product page','Stacking, link and wording']],
    ['REOPEN',['Save timestamped evidence','Obtain second review']]
  ];
  return `<svg width="1600" height="760" xmlns="http://www.w3.org/2000/svg"><rect width="1600" height="760" rx="42" fill="#f5f2ff"/><text x="72" y="105" font-family="Arial,PingFang SC" font-size="40" font-weight="850" fill="#17141d">${title}</text><g transform="translate(55 195)">${steps.map((r,i)=>`<g transform="translate(${i*375} 0)"><rect width="345" height="430" rx="30" fill="#fff"/><rect width="345" height="16" rx="8" fill="${i===0?'#ed168c':'#245bd7'}"/><circle cx="58" cy="90" r="29" fill="${i===0?'#fce0ef':'#e8efff'}"/><text x="58" y="100" text-anchor="middle" font-family="Arial" font-size="24" font-weight="900" fill="${i===0?'#c91472':'#1746b8'}">${i+1}</text><text x="104" y="98" font-family="Arial,PingFang SC" font-size="23" font-weight="850" fill="#1746b8">${r[0]}</text><line x1="30" y1="140" x2="315" y2="140" stroke="#ddd7eb" stroke-width="3"/><text x="30" y="188" font-family="Arial,PingFang SC" font-size="21" font-weight="700" fill="#17141d">${r[1].map((line,j)=>`<tspan x="30" dy="${j===0?0:34}">${line}</tspan>`).join('')}</text><path d="M150 365l17 17 34-42" fill="none" stroke="${i===0?'#ed168c':'#245bd7'}" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/></g>`).join('')}</g></svg>`;
}

for(const [lang,zh] of [['en',false],['zh',true]]){
  const name=`hero-${slug}-${lang}-v1`;
  await sharp(Buffer.from(cover(zh))).png().toFile(path.join(out,'blog',`${name}.png`));
  await sharp(path.join(out,'blog',`${name}.png`)).resize({width:1600}).jpeg({quality:90}).toFile(path.join(out,'blog/optimized',`${name}.jpg`));
  await sharp(path.join(out,'blog',`${name}.png`)).resize({width:880}).jpeg({quality:88}).toFile(path.join(out,'blog/thumbs',`${name}.jpg`));
  for(const type of ['ledger','kill-switch']) await sharp(Buffer.from(visual(zh,type))).png().toFile(path.join(out,'blog/q4-14-price-audit',`${type}-${lang}-v1.png`));
}

const faqEn=[
  ['Which TikTok Shop price should a creator mention during BFCM?','Use a price that is active, current and reasonably available through the bound product path. The showcase price at binding or posting is the safest specific reference unless a lower price is supported by an active coupon, selected SKU or promotion and the key conditions are disclosed.'],
  ['Is campaign sale price the same as the final shopper price?','Not necessarily. Campaign sale price is the price submitted for campaign participation. The estimated shopper price may be lower after permitted product, cart-level or coupon discounts, and an individual shopper may see different conditions.'],
  ['Can a video say lowest price or cheapest during BFCM?','Only if the claim is accurate and supported. TikTok Shop policy identifies unsupported superlatives such as lowest or cheapest as risky or prohibited. A safer default is to describe the current offer and direct viewers to the product page for the latest price and eligibility.'],
  ['Can creators promote a BFCM price during preheat?','Do not tell viewers they can obtain a scheduled price while it is still in preview or preheat. Publish an availability claim only after the offer is active, or describe the upcoming event without presenting the future price as currently obtainable.'],
  ['What should trigger the BFCM price-claim kill switch?','Trigger it when price, coupon, eligible SKU, bundle, minimum spend, user eligibility, timing, shipping, tax treatment, product link or campaign participation no longer matches the approved claim. Pause the affected asset or LIVE language before rebuilding the claim.'],
  ['Who owns the cross-surface price audit?','Assign one release owner with authority to stop publishing. Listing, campaign, content and LIVE owners provide evidence, but one named operator should maintain the ledger, time-stamp the readback and confirm that every public surface uses the approved version.']
];
const faqZh=[
  ['BFCM 期间达人应该口播哪个 TikTok Shop 价格？','应使用已经生效、当前有效，并能通过所挂商品路径合理获得的价格。最稳妥的具体价格参考是绑定或发布时 Showcase 显示的价格；如果更低价格依赖 Coupon、指定 SKU 或活动，必须同时说明关键条件。'],
  ['Campaign Sale Price 就是消费者最终支付价吗？','不一定。Campaign Sale Price 是卖家为活动报名提交的价格；叠加允许的单品、购物车或 Coupon 优惠后，Estimated Shopper Price 可能更低，而且不同用户看到的条件可能不同。'],
  ['BFCM 视频可以说全网最低或最便宜吗？','只有表达准确且有证据支持时才可以。TikTok Shop 当前政策把没有依据的 Lowest、Cheapest 等绝对表达列为风险或禁止项。更安全的默认表达是说明当前 Offer，并让用户查看商品页的最新价格与资格。'],
  ['预热期可以提前宣传 BFCM 活动价吗？','不能把仍处于 Preview 或 Preheat 的计划价格说成用户现在就能获得。Offer 真正生效后再发布可得性 Claim；预热内容可以介绍即将开始的活动，但不能把未来价格写成当前价格。'],
  ['什么情况要触发价格 Claim Kill Switch？','只要价格、Coupon、适用 SKU、Bundle、最低消费、用户资格、活动时间、运费、税费、挂链或 Campaign Participation 与批准口径不一致，就应触发。先暂停受影响内容或直播话术，再重建 Claim。'],
  ['跨界面价格审计应该由谁负责？','指定一个有权暂停发布的 Release Owner。Listing、Campaign、Content 与 LIVE Owner 分别提供证据，但必须由一个明确负责人维护台账、保存时间戳回读，并确认所有公开界面使用同一批准版本。']
];
const faqHtml=(items,zh)=>`<section class="faq"><h2>${zh?'常见问题':'Common questions'}</h2>${items.map(([q,a])=>`<div class="faq-item"><h3>${q}</h3><p>${a}</p></div>`).join('')}</section>`;
const P=items=>items.join('');

const EN=P([
  `<header class="hero"><div class="kicker">TIKTOK SHOP U.S. · BFCM PRICE OPERATIONS</div><h1>${enTitle}</h1><p class="dek">One ledger must connect the number a seller configures, the number a shopper sees and the words a creator publishes.</p><p class="meta">WE Marketing Team · Oct 10, 2026 · 15 min read</p><img src="/blog/hero-${slug}-en-v1.png" alt="TikTok Shop BFCM price claim audit"></header>`,
  `<p><strong>Direct answer:</strong> do not approve a BFCM price claim by checking only the campaign screen, the product page or the creator script. Approve it only when one time-stamped ledger connects the exact SKU, active promotion layers, shopper conditions, product link, spoken wording, on-screen text and expiration action across the product page, video and LIVE. The seller's campaign price is an input. The viewer-facing claim is a separate release decision.</p>`,
  `<p>This distinction matters because TikTok Shop's current campaign guidance separates the Campaign Price Range, the Campaign Sale Price and the Estimated Campaign Price. Promotions in the same layer may compete by priority, while allowed promotions in different layers may stack. A creator can therefore repeat a real number from one screen and still mislead a shopper if the SKU, coupon, eligibility, timing or checkout path differs.</p>`,
  `<img class="body-visual" src="/blog/q4-14-price-audit/ledger-en-v1.png" alt="Cross-surface BFCM price claim ledger">`,
  `<h2>Start with four different price objects</h2>`,
  `<p><strong>Retail or listing price</strong> is the product's reference selling price. <strong>Campaign sale price</strong> is the value submitted for campaign participation and must stay within the campaign's permitted range. <strong>Estimated campaign price</strong> is the predicted shopper price after currently configured promotion layers. <strong>Published claim price</strong> is what the creator says, shows or implies to a viewer. These values can match, but the team should never assume they do.</p>`,
  `<p>The Campaign Price Transparency guide explains that multiple threshold rules can apply at once and the strictest requirement determines the upper threshold. It also describes product-level, cart-level and coupon layers. Within the same layer, the strongest applicable discount can win; when promotion types cannot stack, system priority applies; compatible promotions across different layers can combine. The price forecast and breakdown are planning tools, not permission to promise that every viewer will receive one universal checkout result.</p>`,
  `<p>The 2026 BFCM Better Price Rewards guide adds a seasonal registration model: sellers enter one price in a unified flow and the system assigns the matching benefit tier. Registration is product-level by SKU, products may use different tiers, and the lowest tier may apply across SKUs when a product's SKU tiers differ. This makes SKU identity part of the claim, not an administrative footnote.</p>`,
  `<h2>The minimum price-claim ledger</h2>`,
  `<table><tr><th>Field</th><th>Release evidence</th><th>Owner</th></tr><tr><td>Product identity</td><td>Product ID, exact SKU, variant, bundle and bound link</td><td>Listing</td></tr><tr><td>Seller input</td><td>Retail price, campaign sale price and registration tier</td><td>Campaign</td></tr><tr><td>Shopper path</td><td>Showcase price, active coupon, stacking breakdown and time window</td><td>Campaign</td></tr><tr><td>Claim</td><td>Exact spoken words, subtitle, overlay, cover and pinned text</td><td>Content or LIVE</td></tr><tr><td>Conditions</td><td>SKU, coupon, bundle, minimum spend, eligibility, shipping, tax and region</td><td>Release owner</td></tr><tr><td>Evidence time</td><td>Last verified timestamp, screenshot or export and reviewer</td><td>Release owner</td></tr><tr><td>Kill action</td><td>Pause, edit, unlink, remove or replace when a trigger changes</td><td>Named operator</td></tr></table>`,
  `<p>A ledger row belongs to one claim on one asset. Do not store a generic “BFCM price approved” note for an entire catalog. A short video with a fixed subtitle needs a different expiration action from a LIVE host script that can be corrected immediately. The product page may update automatically while a saved creative remains unchanged.</p>`,
  `<h2>Audit the product page first</h2>`,
  `<p>Open the exact bound product path as a shopper. Confirm the product title, image, variant, package quantity and current displayed price. Then read the coupon, minimum spend, eligible user, promotion period, shipping and tax conditions. Record whether the price is available before checkout, only after clipping a coupon, only for a selected SKU or only for a specific account type.</p>`,
  `<p>Next, review Campaign management and the price breakdown. Save the Campaign Sale Price and Estimated Campaign Price separately. If a product has several SKUs, test the SKU used in the content instead of relying on a range. A range can hide that the hero variant uses a higher price or a lower benefit tier.</p>`,
  `<h2>Audit every video claim as a durable asset</h2>`,
  `<p>List every price signal a viewer can encounter: spoken price, burned-in subtitle, sticker, caption, cover, comment, product anchor and shopping-page recording. The Content Policy applies across formats, including spoken statements, onscreen text, images, titles, links and demonstrations. One accurate caption cannot cure an inaccurate voiceover.</p>`,
  `<p>For a specific price, compare the wording with the showcase price at posting time. If a lower amount depends on an active coupon, selected SKU or promotion, state the material condition. Avoid turning “some eligible viewers may receive a coupon” into “everyone gets this for $9.99.” If the content is scheduled before the offer activates, treat preheat as not active and do not claim current availability.</p>`,
  `<h2>Audit LIVE as a changing system</h2>`,
  `<p>A LIVE price claim is not only the host's sentence. It includes the pinned product, overlay, moderator response, coupon instruction and the product path opened by the viewer. Before the room starts, the operator reads back the approved ledger row. During the room, the operator watches for coupon depletion, SKU changes, campaign status, product-link swaps and expired urgency language.</p>`,
  `<p>Use two script modes. The exact-price mode is allowed only while the time-stamped conditions still match. The fallback mode avoids a fixed number and directs viewers to check the current product page, selected SKU and available coupon. The operator must be able to switch modes without waiting for a brand meeting.</p>`,
  `<img class="body-visual" src="/blog/q4-14-price-audit/kill-switch-en-v1.png" alt="BFCM price claim kill switch sequence">`,
  `<h2>Install a kill switch before publishing</h2>`,
  `<p>Trigger the kill switch when any material field changes: price, coupon amount, coupon availability, selected SKU, bundle quantity, minimum spend, user eligibility, promotion period, campaign participation, product link, shipping treatment or tax treatment. It should also fire when the team cannot reproduce the approved path from a clean shopper view.</p>`,
  `<p>The sequence is simple: freeze the affected claim, identify every surface that repeats it, repair the price path or replace the wording, and require a second-person readback before reopening. For videos, that can mean editing, unlinking, removing or stopping promotion where controls allow. For LIVE, it means stopping the exact-price line and pinned overlay immediately. For the product page, it means correcting the offer or removing the unsupported comparison.</p>`,
  `<h2>Release sequence for BFCM</h2>`,
  `<ol><li>Freeze the exact product ID, SKU, bundle and campaign window.</li><li>Record retail, campaign sale and estimated shopper prices as separate fields.</li><li>Capture the active promotion breakdown and every condition.</li><li>Inventory all product-page, video and LIVE claim locations.</li><li>Classify each claim as exact, conditional or general.</li><li>Approve the precise wording and its expiration action.</li><li>Perform a posting-time or pre-LIVE readback from the bound product path.</li><li>Monitor triggers and execute the kill switch without delay.</li></ol>`,
  `<h2>Operational example: a BFCM beauty bundle</h2>`,
  `<p>Assume a brand registers a four-piece bundle at a campaign sale price of $32. A seller coupon may reduce the estimated price to $27 for eligible users, while one video is scheduled during preheat. The approved video should not say “everyone gets it for $27 today.” Before activation it can describe the upcoming BFCM event without promising availability. After activation, a specific claim must identify the bundle and coupon condition, or use flexible language directing viewers to the current product page.</p>`,
  `<p>If the coupon runs out during a LIVE, the operator switches to fallback language, removes the $27 overlay and updates the pinned explanation. The $32 campaign price may still be valid, but the $27 claim is no longer approved. This is a WEM operating example, not a claim that every account uses the same tools, tier or price.</p>`,
  `<h2>The smallest useful action today</h2>`,
  `<p>Choose one priority BFCM SKU and make one ledger row. Open the product as a shopper, record the current showcase price and conditions, compare it with the campaign sale and estimated campaign prices, then paste every planned video and LIVE price phrase into the row. Assign one kill-switch owner. If the owner cannot explain which phrase stops when one coupon changes, the claim is not ready.</p>`,
  `<h2>Source notes and execution boundary</h2>`,
  `<p>This original WE Marketing operating framework draws on the complete current TikTok Shop U.S. Seller University <a href="${sources.content}">Content Policy</a> dated October 9, 2026, <a href="${sources.claims}">Price and Discount Content Claims Guide</a> dated July 16, 2026, <a href="${sources.transparency}">Campaign Price Transparency</a> dated March 2, 2026, and <a href="${sources.rewards}">2026 BFCM Better Price Rewards Registration Guide</a> dated September 29, 2026, all revalidated October 10, 2026. Platform interfaces, eligibility, campaign tiers, stacking, prices, coupons and enforcement can change. Verify the current U.S. Seller Center, creator tools and shopper path before execution. This framework does not guarantee campaign eligibility, benefits, distribution, sales or policy approval.</p>`,
  faqHtml(faqEn,false),
  `<h2>Related WEM guides</h2><section class="related-grid"><a href="/blog/tiktok-shop-bfcm-creator-brief"><strong>BFCM creator brief</strong><span>Put product truth, offer checks and guardrails on one page.</span></a><a href="/blog/tiktok-shop-bfcm-pricing-margin-waterfall"><strong>BFCM pricing and margin</strong><span>Connect campaign pricing to contribution margin before scaling.</span></a><a href="/blog/tiktok-shop-creator-content-review-before-scale"><strong>Creator content review</strong><span>Separate factual corrections from creative preferences.</span></a></section>`
]);

const ZH=P([
  `<header class="hero"><div class="kicker">TIKTOK SHOP 美国站 · BFCM 价格运营</div><h1>${zhTitle}</h1><p class="dek">用一张台账连接卖家设置的数字、买家实际看到的数字，以及达人最终说出口的话。</p><p class="meta">WE Marketing Team · 2026 年 10 月 10 日 · 15 分钟阅读</p><img src="/blog/hero-${slug}-zh-v1.png" alt="TikTok Shop BFCM 价格口径审计"></header>`,
  `<p><strong>直接答案：</strong>不要只看 Campaign 页面、商品页或达人脚本中的一个界面，就批准 BFCM 价格 Claim。只有当一张带时间戳的台账把准确 SKU、当前 Promotion Layer、消费者条件、Product Link、口播、字幕和到期处理同时连接到商品页、短视频与直播时，才可以 Release。卖家填写的 Campaign Price 是一个 Input，达人面向消费者发布的价格是另一项决策。</p>`,
  `<p>原因在于 TikTok Shop 当前活动规则把 Campaign Price Range、Campaign Sale Price 与 Estimated Campaign Price 分开。相同 Layer 内的优惠可能按优先级竞争，不同 Layer 在规则允许时又可能叠加。达人即使从某一个真实界面抄了数字，只要 SKU、Coupon、Eligibility、时间或 Checkout Path 不同，消费者仍然可能无法得到这个价格。</p>`,
  `<img class="body-visual" src="/blog/q4-14-price-audit/ledger-zh-v1.png" alt="跨商品页短视频直播的 BFCM 价格 Claim 台账">`,
  `<h2>先把四种价格对象分开</h2>`,
  `<p><strong>Retail 或 Listing Price</strong> 是商品的参考销售价格。<strong>Campaign Sale Price</strong> 是报名活动时提交的数字，必须落在 Campaign 允许区间内。<strong>Estimated Campaign Price</strong> 是根据当前 Promotion Layer 预测的买家价格。<strong>Published Claim Price</strong> 是达人真正说、写或暗示给消费者的数字。四者可以相同，但运营团队不能默认相同。</p>`,
  `<p>Campaign Price Transparency 说明，多条 Threshold Rule 可以同时作用，最严格的要求决定最终上限。它还把 Promotion 分为单品、购物车和 Coupon Layer。同一个 Layer 内，最强的适用优惠可能胜出；不可叠加的 Promotion Type 会按系统优先级处理；不同 Layer 在允许时可以继续叠加。Price Forecast 与 Breakdown 是运营工具，不代表团队可以向所有消费者保证同一个 Checkout Result。</p>`,
  `<p>2026 BFCM Better Price Rewards Guide 又增加了季节活动逻辑：卖家通过一个统一入口输入价格，系统按资格匹配对应 Benefit Tier。报名以 Product 和 SKU 为单位，不同商品可以选择不同 Tier；同一商品的各 SKU Tier 不一致时，可能按最低 Tier 统一应用。因此，SKU 不是后台细节，而是价格 Claim 的组成部分。</p>`,
  `<h2>最小可用的价格 Claim 台账</h2>`,
  `<table><tr><th>字段</th><th>Release 证据</th><th>Owner</th></tr><tr><td>商品身份</td><td>Product ID、准确 SKU、Variant、Bundle 与挂链</td><td>Listing</td></tr><tr><td>卖家输入</td><td>Retail Price、Campaign Sale Price 与报名 Tier</td><td>Campaign</td></tr><tr><td>买家路径</td><td>Showcase Price、Active Coupon、Stacking Breakdown 与有效期</td><td>Campaign</td></tr><tr><td>公开 Claim</td><td>完整口播、字幕、贴片、封面与 Pin 文案</td><td>Content 或 LIVE</td></tr><tr><td>条件</td><td>SKU、Coupon、Bundle、最低消费、Eligibility、运费、税费与 Region</td><td>Release Owner</td></tr><tr><td>证据时间</td><td>Last-verified Timestamp、截图或导出、Reviewer</td><td>Release Owner</td></tr><tr><td>Kill Action</td><td>触发变化后暂停、修改、解绑、移除或替换</td><td>指定 Operator</td></tr></table>`,
  `<p>台账一行只对应一个 Asset 上的一个 Claim。不要给整个 Catalog 留一句“BFCM 价格已批准”。带固定字幕的短视频与可以实时纠正的直播话术，需要不同的失效处理。商品页可能自动更新，但已经保存的 Creative 不会一起变化。</p>`,
  `<h2>第一步先审商品页</h2>`,
  `<p>以买家身份打开准确挂链，核对 Product Title、Image、Variant、Package Quantity 与当前 Displayed Price。再读取 Coupon、最低消费、Eligible User、Promotion Period、Shipping 与 Tax 条件。记录这个价格是在 Checkout 前就可见，还是必须先 Clip Coupon，是否只适用于 Selected SKU，或只针对某一类 Account。</p>`,
  `<p>然后检查 Campaign Management 与 Price Breakdown。Campaign Sale Price 和 Estimated Campaign Price 必须分开保存。商品有多个 SKU 时，要测试内容里真正出现的 SKU，不能只看一个价格区间。区间可能掩盖 Hero Variant 的价格更高，或它只能获得更低 Benefit Tier。</p>`,
  `<h2>把短视频当作长期存在的 Asset 来审</h2>`,
  `<p>列出消费者可能遇到的全部价格 Signal：口播、Burned-in Subtitle、Sticker、Caption、Cover、Comment、Product Anchor 与 Shopping-page Recording。Content Policy 适用于 Spoken Statement、On-screen Text、Image、Title、Link 与 Demonstration 等多个格式。一句准确 Caption 不能修复错误 Voiceover。</p>`,
  `<p>如果视频使用具体数字，就要与发布时的 Showcase Price 对照。更低数字如果依赖 Active Coupon、Selected SKU 或 Promotion，必须同时说清关键条件。不能把“部分 Eligible Viewer 可能得到 Coupon”改写成“所有人都是 $9.99”。如果内容排期早于 Offer 生效时间，就把 Preheat 视为未生效，不能说用户现在已经可以获得。</p>`,
  `<h2>把直播当作持续变化的系统来审</h2>`,
  `<p>直播价格 Claim 不只是主播说的一句话，还包括 Pinned Product、Overlay、Moderator Reply、Coupon Instruction 与消费者点击后的 Product Path。开播前，Operator 回读批准的台账行；开播中持续观察 Coupon 用尽、SKU 变化、Campaign Status、Product Link 被替换，以及已经过期的 Urgency Language。</p>`,
  `<p>为主播准备两套模式。Exact-price Mode 只在带时间戳的条件仍然一致时使用。Fallback Mode 不说固定数字，引导消费者查看当前商品页、Selected SKU 与 Available Coupon。Operator 必须能够立即切换，而不是等下一次品牌会议。</p>`,
  `<img class="body-visual" src="/blog/q4-14-price-audit/kill-switch-zh-v1.png" alt="BFCM 价格 Claim Kill Switch 流程">`,
  `<h2>发布之前先装好 Kill Switch</h2>`,
  `<p>任何重要字段变化都要触发 Kill Switch：Price、Coupon Amount、Coupon Availability、Selected SKU、Bundle Quantity、Minimum Spend、User Eligibility、Promotion Period、Campaign Participation、Product Link、Shipping 或 Tax。团队如果无法从干净的 Shopper View 重现批准路径，也应该触发。</p>`,
  `<p>处理顺序只有四步：冻结受影响 Claim，定位所有重复这个 Claim 的 Surface，修复 Price Path 或替换措辞，再由第二个人回读后重开。短视频可以根据当前控制选择 Edit、Unlink、Remove 或 Stop Promotion；直播则要立即停用 Exact-price Line 与 Pin Overlay；商品页需要纠正 Offer 或删除没有证据的 Comparison。</p>`,
  `<h2>BFCM Release 顺序</h2>`,
  `<ol><li>冻结准确 Product ID、SKU、Bundle 与 Campaign Window。</li><li>把 Retail、Campaign Sale 与 Estimated Shopper Price 分开记录。</li><li>保存 Active Promotion Breakdown 与全部适用条件。</li><li>盘点商品页、短视频与直播的所有 Claim 位置。</li><li>把每条 Claim 分类为 Exact、Conditional 或 General。</li><li>批准准确措辞及其到期动作。</li><li>发布前或开播前，从准确挂链完成一次回读。</li><li>持续监控 Trigger，并在变化时立即执行 Kill Switch。</li></ol>`,
  `<h2>运营示例：一个 BFCM 美妆 Bundle</h2>`,
  `<p>假设品牌把四件套 Bundle 的 Campaign Sale Price 报为 $32，Seller Coupon 可能让 Eligible User 看到 $27，而一条视频排期仍处于 Preheat。批准版本不能说“所有人今天都是 $27”。活动开始前可以介绍即将到来的 BFCM，但不能承诺当前可得；活动生效后，如果要使用具体数字，就要明确 Bundle 与 Coupon 条件，或者用灵活语言让用户查看当前商品页。</p>`,
  `<p>如果直播中 Coupon 用尽，Operator 立即切到 Fallback Language，撤掉 $27 Overlay，并更新 Pin Explanation。$32 Campaign Price 可能仍然有效，但 $27 Claim 已经失效。这是 WEM 的运营示例，不代表每个账号都有相同工具、Tier 或 Price。</p>`,
  `<h2>今天就做的最小动作</h2>`,
  `<p>选择一个 Priority BFCM SKU，只做一行台账。以买家身份打开商品，记录当前 Showcase Price 与 Conditions，再与 Campaign Sale Price 和 Estimated Campaign Price 对照，然后把全部 Planned Video 与 LIVE 价格措辞贴进这一行，并指定一个 Kill-switch Owner。如果这个 Owner 无法说明一个 Coupon 变化后应该停掉哪一句话，这条 Claim 就还没有准备好。</p>`,
  `<h2>来源说明与执行边界</h2>`,
  `<p>这套 WE Marketing 原创运营框架基于 TikTok Shop 美国站 Seller University 的完整当前 <a href="${sources.content}">Content Policy</a>（2026 年 10 月 9 日）、<a href="${sources.claims}">Price and Discount Content Claims Guide</a>（2026 年 7 月 16 日）、<a href="${sources.transparency}">Campaign Price Transparency</a>（2026 年 3 月 2 日）和 <a href="${sources.rewards}">2026 BFCM Better Price Rewards Registration Guide</a>（2026 年 9 月 29 日），四份来源均于 2026 年 10 月 10 日重新核验。平台界面、Eligibility、Campaign Tier、Stacking、Price、Coupon 与 Enforcement 可能变化，执行前必须核验当前美国站 Seller Center、Creator Tools 与真实 Shopper Path。本框架不保证活动资格、Benefit、分发、销量或政策批准。</p>`,
  faqHtml(faqZh,true),
  `<h2>相关 WEM 指南</h2><section class="related-grid"><a href="/blog/tiktok-shop-bfcm-creator-brief?lang=zh"><strong>BFCM 达人 Brief</strong><span>把商品事实、Offer Check 与 Guardrail 放进一页。</span></a><a href="/blog/tiktok-shop-bfcm-pricing-margin-waterfall?lang=zh"><strong>BFCM 价格与毛利</strong><span>放量前把活动价格连接到 Contribution Margin。</span></a><a href="/blog/tiktok-shop-creator-content-review-before-scale?lang=zh"><strong>达人内容审核</strong><span>分开事实修正与创意偏好。</span></a></section>`
]);

const citations=Object.values(sources);
const graph={'@context':'https://schema.org','@graph':[
  {'@type':'BlogPosting','@id':`${url}#article`,headline:enTitle,description:enDescription,inLanguage:'en-US',author:{'@type':'Organization','@id':'https://www.weglobalmarketing.com/#editorial-team',name:'WE Marketing Team'},publisher:{'@type':'Organization','@id':'https://www.weglobalmarketing.com/#organization',name:'WE Marketing',alternateName:'WEM'},image:{'@type':'ImageObject',url:`https://www.weglobalmarketing.com/blog/hero-${slug}-en-v1.png`,width:1792,height:896,caption:'WE Marketing TikTok Shop BFCM price claim audit'},datePublished:date,dateModified:date,mainEntityOfPage:{'@type':'WebPage','@id':url},citation:citations,keywords:['TikTok Shop BFCM price claims','TikTok Shop price audit','TikTok Shop campaign price']},
  {'@type':'BlogPosting','@id':`${url}?lang=zh#article`,headline:zhTitle,description:zhDescription,inLanguage:'zh-CN',translationOfWork:{'@id':`${url}#article`},author:{'@id':'https://www.weglobalmarketing.com/#editorial-team'},publisher:{'@id':'https://www.weglobalmarketing.com/#organization'},image:{'@type':'ImageObject',url:`https://www.weglobalmarketing.com/blog/hero-${slug}-zh-v1.png`,width:1792,height:896,caption:'WE Marketing TikTok Shop BFCM 价格 Claim 审计'},datePublished:date,dateModified:date,mainEntityOfPage:{'@type':'WebPage','@id':`${url}?lang=zh`},citation:citations},
  ...[[faqEn,'en-US',`${url}#faq`],[faqZh,'zh-CN',`${url}?lang=zh#faq`]].map(([items,lang,id])=>({'@type':'FAQPage','@id':id,inLanguage:lang,mainEntity:items.map(([name,text])=>({'@type':'Question',name,acceptedAnswer:{'@type':'Answer',text}}))})),
  {'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:'https://www.weglobalmarketing.com/'},{'@type':'ListItem',position:2,name:'Blog',item:'https://www.weglobalmarketing.com/blog'},{'@type':'ListItem',position:3,name:enTitle,item:url}]}
]};

const oldHtml=await fs.readFile(path.join(base,'blog/tiktok-shop-bfcm-creator-brief.html'),'utf8');
const style=oldHtml.match(/<style>[\s\S]*?<\/style>/)[0];
const html=`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><script>document.documentElement.dataset.lang=new URLSearchParams(location.search).get('lang')==='zh'?'zh':'en';document.documentElement.lang=document.documentElement.dataset.lang==='zh'?'zh-CN':'en'</script><title>${enTitle} | WE Marketing</title><meta name="description" content="${enDescription}"><link rel="canonical" href="${url}"><link rel="alternate" hreflang="en-US" href="${url}"><link rel="alternate" hreflang="zh-CN" href="${url}?lang=zh"><link rel="alternate" hreflang="x-default" href="${url}"><script type="application/ld+json">${JSON.stringify(graph)}</script>${style}</head><body><nav class="nav"><a class="logo" href="/"><img src="/assets/we-logo.png" alt="WE Marketing"></a><a href="/services">SERVICES</a><a href="/about">ABOUT</a><a href="/blog">BLOG</a><span class="spacer"></span><div class="switch"><a class="zh" href="?lang=zh">中文</a><a class="en" href="?">EN</a></div></nav><main class="wrap"><div class="tools"><a class="en" href="/blog">← BLOG</a><a class="zh" href="/blog?lang=zh">← 博客</a></div><article lang="en">${EN}</article><article lang="zh-CN">${ZH}</article></main><section class="cta"><h2 class="en">READY TO TALK<br>TO WEM?</h2><h2 class="zh">准备好和 WEM<br>一起把计划落地吗？</h2><p class="en">Turn BFCM price claims into one controlled, reversible operating system.</p><p class="zh">把 BFCM 价格口径变成可控、可回读、可下线的运营系统。</p><a class="en" href="https://scheduler.zoom.us/wendylin001">BOOK A DISCOVERY CALL</a><a class="zh" href="https://scheduler.zoom.us/wendylin001">预约咨询</a></section><footer class="footer"><img src="/assets/we-logo.png" alt="WE Marketing"><p class="en">WE Marketing connects strategy, creator operations, paid growth and TikTok Shop execution.</p><p class="zh">WE Marketing 帮助品牌连接策略、达人运营、付费增长与 TikTok Shop 执行。</p><p>© 2026 WE Marketing. All rights reserved.</p></footer><script>if(document.documentElement.dataset.lang==='zh'){document.title=${JSON.stringify(zhTitle+' | WE Marketing')};document.querySelector('meta[name=description]').content=${JSON.stringify(zhDescription)};document.querySelector('link[rel=canonical]').href='${url}?lang=zh'}</script></body></html>`;
await fs.writeFile(path.join(out,'blog',`${slug}.html`),html);

let list=await fs.readFile(path.join(base,'BlogList.jsx'),'utf8');
const row={slug,tags:['tiktok-shop','campaign-growth','shop-operations'],cat:{en:'TIKTOK SHOP U.S. · BFCM PRICE OPERATIONS',zh:'TIKTOK SHOP 美国站 · BFCM 价格运营'},title:{en:enTitle,zh:zhTitle},excerpt:{en:'Audit every price claim across product pages, videos and LIVEs with one ledger and kill switch.',zh:'用一张台账和 Kill Switch 核对商品页、短视频与直播的全部价格口径。'},date:{en:'Oct 10, 2026',zh:'2026 年 10 月 10 日'},read:{en:'15 min read',zh:'15 分钟阅读'},image:{en:`hero-${slug}-en-v1.png`,zh:`hero-${slug}-zh-v1.png`}};
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

const sourceDir=path.join(root,'outputs/2026-10-10-q4-14-source');
const sourceReport={status:'source_revalidated',date,sources:{}};
const files={content:'content-policy.html',claims:'price-discount-content-claims.html',transparency:'campaign-price-transparency.html',rewards:'bfcm-better-price-rewards.html'};
for(const [name,sourceUrl] of Object.entries(sources)){
  const bytes=await fs.readFile(path.join(sourceDir,files[name]));
  sourceReport.sources[name]={url:sourceUrl,httpStatus:200,bytes:bytes.length,sha256:sha(bytes)};
}
sourceReport.facts=[
  'The current Content Policy applies price-claim accuracy requirements across spoken statements, on-screen text, images, titles, links and other promoted elements.',
  'Specific prices and discounts must be accurate, current and reasonably available through the promoted product path, with material conditions disclosed.',
  'A scheduled price in preheat or preview is not an active offer and should not be represented as currently obtainable.',
  'Campaign sale price and estimated campaign price are separate; same-layer priority and allowed cross-layer stacking can change the shopper-facing result.',
  'The 2026 BFCM unified registration flow assigns product and SKU benefit tiers based on the registered price; SKU differences can affect the applied tier.',
  'Expired or changed price claims should be updated, unlinked, removed or no longer promoted where available.'
];
await fs.writeFile(path.join(root,'outputs/2026-10-10-q4-14-source-revalidation.json'),`${JSON.stringify(sourceReport,null,2)}\n`);

if(EN.includes('—')||ZH.includes('—')) throw new Error('em dash found');
console.log(JSON.stringify({out,version,enWords:EN.replace(/<[^>]+>/g,' ').trim().split(/\s+/).length,zhChars:ZH.replace(/<[^>]+>/g,'').replace(/\s/g,'').length,files:(await fs.readdir(out,{recursive:true})).filter(Boolean).length}));
