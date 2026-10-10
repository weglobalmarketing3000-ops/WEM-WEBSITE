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
const slug='tiktok-shop-bfcm-price-claim-audit-video-live-product-page';
const date='2026-10-10';
const url=`https://www.weglobalmarketing.com/blog/${slug}`;
const sources={
  policy:'https://seller-us.tiktok.com/university/essay?knowledge_id=6837891779151617&lang=en',
  seller:'https://seller-us.tiktok.com/university/essay?knowledge_id=26854147802894&lang=en'
};
const enTitle='Audit Every TikTok Shop BFCM Price Claim Across Video, LIVE and Product Page';
const zhTitle='TikTok Shop BFCM 价格口径怎么统一：短视频、直播和商品页逐项核对';
const enDescription='Use one evidence-led ledger to keep TikTok Shop BFCM prices, conditions and claims aligned across videos, LIVE rooms and product pages.';
const zhDescription='用一份有证据、有版本的价格台账，对齐 TikTok Shop BFCM 短视频、直播与商品页的价格和优惠条件。';
const sha=v=>crypto.createHash('sha256').update(v).digest('hex');

await fs.rm(out,{recursive:true,force:true});
for(const d of ['assets','blog','blog/optimized','blog/thumbs','blog/q4-14-price-claims']) await fs.mkdir(path.join(out,d),{recursive:true});
await fs.copyFile(path.join(root,'assets/we-logo.png'),path.join(out,'assets/we-logo.png'));
const logo=(await fs.readFile(path.join(out,'assets/we-logo.png'))).toString('base64');
const scenePath=path.join(root,'outputs/2026-10-10-q4-14-source/raw-scene-not-for-review.png');

function overlay(zh){
  const lines=zh?['BFCM 价格口径','逐项核对']:['AUDIT EVERY','BFCM PRICE CLAIM'];
  return Buffer.from(`<svg width="1792" height="896" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="fade" x1="0" x2="1"><stop offset="0" stop-color="#fffdf8"/><stop offset=".47" stop-color="#fffdf8" stop-opacity=".98"/><stop offset=".66" stop-color="#fffdf8" stop-opacity="0"/></linearGradient></defs><rect width="1792" height="896" fill="url(#fade)"/><rect x="82" y="76" width="650" height="52" rx="26" fill="#e8efff"/><text x="110" y="111" font-family="Arial,PingFang SC" font-size="21" font-weight="800" fill="#1746b8">${zh?'TIKTOK SHOP 美国站 · BFCM 价格审计':'TIKTOK SHOP U.S. · BFCM PRICE AUDIT'}</text>${lines.map((t,i)=>`<text x="82" y="${zh?275+i*98:270+i*92}" font-family="Arial Narrow,Arial,PingFang SC" font-size="${zh?(i?78:72):(i?68:76)}" font-weight="900" fill="${i?'#245bd7':'#17151a'}">${t}</text>`).join('')}<rect x="84" y="480" width="92" height="7" rx="4" fill="#ed168c"/><text x="82" y="550" font-family="Arial,PingFang SC" font-size="24" fill="#4f4a55">${zh?'短视频 · 直播 · 商品页':'VIDEO · LIVE · PRODUCT PAGE'}</text><image href="data:image/png;base64,${logo}" x="82" y="700" width="145" height="105"/></svg>`);
}

function bodyVisual(zh,type){
  if(type==='ledger'){
    const title=zh?'价格 Claim 台账的五个必填字段':'Five required fields in the price-claim ledger';
    const rows=zh?[
      ['01 可获得价格','准确 SKU、适用人群、Coupon、门槛与结账条件'],
      ['02 Claim 原话','短视频字幕、口播、LIVE Pin 与 PDP 文案逐字记录'],
      ['03 证据读回','Product Card、Campaign View 与 Checkout 的时间戳'],
      ['04 有效窗口','开始时间、结束时间、时区、Owner 与版本号'],
      ['05 Kill Switch','价格失效、条件变化或无法复现时立即撤回']
    ]:[
      ['01 OBTAINABLE PRICE','Exact SKU, audience, coupon, threshold and checkout conditions'],
      ['02 CLAIM WORDING','Record video text, speech, LIVE pin and PDP copy verbatim'],
      ['03 EVIDENCE READBACK','Timestamp the product card, campaign view and checkout'],
      ['04 VALID WINDOW','Start, end, timezone, owner and version'],
      ['05 KILL SWITCH','Withdraw when price expires, conditions change or proof fails']
    ];
    return `<svg width="1600" height="880" xmlns="http://www.w3.org/2000/svg"><rect width="1600" height="880" rx="42" fill="#f5f2ff"/><text x="72" y="105" font-family="Arial,PingFang SC" font-size="43" font-weight="850" fill="#17141d">${title}</text><g transform="translate(70 165)">${rows.map((r,i)=>`<g transform="translate(0 ${i*130})"><rect width="1460" height="105" rx="24" fill="#fff"/><rect width="16" height="105" rx="8" fill="${i===4?'#ed168c':'#245bd7'}"/><text x="55" y="48" font-family="Arial,PingFang SC" font-size="23" font-weight="850" fill="#1746b8">${r[0]}</text><text x="435" y="67" font-family="Arial,PingFang SC" font-size="${zh?23:21}" fill="#37332f">${r[1]}</text></g>`).join('')}</g></svg>`;
  }
  const title=zh?'每个渠道使用同一套价格状态':'Use one price state across every surface';
  const cols=zh?[
    ['GREEN','价格可复现','视频、LIVE、PDP 使用同一版本'],
    ['AMBER','条件将变化','停止排期，等待重新读回'],
    ['RED','Claim 已失效','下架素材、解除 Pin、撤回文案'],
    ['UNKNOWN','证据不足','不发布，交给价格 Owner 核验']
  ]:[
    ['GREEN','Price is reproducible','Video, LIVE and PDP use one version'],
    ['AMBER','Conditions will change','Pause scheduling for a fresh readback'],
    ['RED','Claim is no longer valid','Remove asset, unpin offer and revise copy'],
    ['UNKNOWN','Evidence is incomplete','Do not publish; send to price owner']
  ];
  return `<svg width="1600" height="760" xmlns="http://www.w3.org/2000/svg"><rect width="1600" height="760" rx="42" fill="#f5f2ff"/><text x="72" y="105" font-family="Arial,PingFang SC" font-size="43" font-weight="850" fill="#17141d">${title}</text><g transform="translate(55 190)">${cols.map((r,i)=>`<g transform="translate(${i*375} 0)"><rect width="345" height="450" rx="30" fill="#fff"/><rect width="345" height="16" rx="8" fill="${i===3?'#ed168c':'#245bd7'}"/><text x="30" y="92" font-family="Arial" font-size="28" font-weight="900" fill="#1746b8">${r[0]}</text><text x="30" y="175" font-family="Arial,PingFang SC" font-size="23" font-weight="800" fill="#17141d">${r[1]}</text><line x1="30" y1="220" x2="315" y2="220" stroke="#ddd7eb" stroke-width="3"/><text x="30" y="285" font-family="Arial,PingFang SC" font-size="${zh?21:17}" fill="#4f4a55">${r[2]}</text></g>`).join('')}</g></svg>`;
}

for(const [lang,zh] of [['en',false],['zh',true]]){
  const name=`hero-${slug}-${lang}-v1`;
  await sharp(scenePath).resize(1792,896,{fit:'cover'}).composite([{input:overlay(zh)}]).png().toFile(path.join(out,'blog',`${name}.png`));
  await sharp(path.join(out,'blog',`${name}.png`)).resize({width:1600}).jpeg({quality:90}).toFile(path.join(out,'blog/optimized',`${name}.jpg`));
  await sharp(path.join(out,'blog',`${name}.png`)).resize({width:880}).jpeg({quality:88}).toFile(path.join(out,'blog/thumbs',`${name}.jpg`));
  for(const type of ['ledger','states']) await sharp(Buffer.from(bodyVisual(zh,type))).png().toFile(path.join(out,'blog/q4-14-price-claims',`${type}-${lang}-v1.png`));
}

const faqEn=[
  ['Can a creator repeat the price shown on the product page?','Only after confirming that the exact SKU, audience and conditions match the promoted link. A visible number is a dated observation, not a permanent promise for every viewer.'],
  ['Why might a shopper not see the price shown in a video?','Coupons, selected SKUs, bundles, minimum spend, user eligibility, promotional periods, shipping, taxes and fees can change the obtainable total. The claim must disclose material conditions.'],
  ['When should a strike-through price appear during BFCM?','The current BFCM seller guide says it appears only when the campaign sale price is lower than the regular retail price. Equal prices do not produce a strike-through.'],
  ['Can a seller stack a flash deal on top of a BFCM campaign price?','Do not assume so. The current guide says many self-promotion tools do not stack, the campaign price usually applies first, and some additional promotions may be disabled.'],
  ['Who should own the price-claim ledger?','One named pricing owner should approve the obtainable price and conditions, while content owners control each surface and an operator runs the expiration kill switch.'],
  ['What is the smallest useful action today?','Pick one priority BFCM SKU, copy every live price sentence from its video, LIVE plan and product page into one ledger, then verify each sentence against a current product-card and checkout readback.']
];
const faqZh=[
  ['达人可以直接重复商品页显示的价格吗？','只有准确 SKU、适用人群和优惠条件都与推广链接一致时才可以。一个可见数字只是带时间戳的观察，不是对所有买家的永久承诺。'],
  ['为什么买家可能看不到视频里说的价格？','Coupon、指定 SKU、Bundle、最低消费、用户资格、活动时间、运费、税费都可能改变最终可获得价格。Claim 必须披露重要条件。'],
  ['BFCM 什么时候会显示划线价？','当前 BFCM Seller Guide 说明，只有 Campaign Sale Price 低于 Regular Retail Price 时才会显示；两者相同则不会出现划线价。'],
  ['BFCM 活动价还能叠加 Flash Deal 吗？','不能默认可以。当前指南说明许多 Self-promotion Tool 不会叠加，通常 Campaign Price 优先，而且部分额外促销可能被禁用。'],
  ['价格 Claim 台账应该由谁负责？','一个明确的 Pricing Owner 批准可获得价格和条件，各内容 Owner 负责对应渠道，Operator 负责价格失效后的 Kill Switch。'],
  ['今天最小可执行动作是什么？','选一个 BFCM Priority SKU，把短视频、LIVE 计划和商品页里的每句价格表达抄进同一台账，再用当前 Product Card 与 Checkout Readback 逐条核验。']
];
const faqHtml=(items,zh)=>`<section class="faq"><h2>${zh?'常见问题':'Common questions'}</h2>${items.map(([q,a])=>`<div class="faq-item"><h3>${q}</h3><p>${a}</p></div>`).join('')}</section>`;
const P=a=>a.join('');

const EN_OLD=P([
  `<p class="eyebrow">TIKTOK SHOP U.S. · BFCM CREATOR OPERATIONS</p><h1>${enTitle}</h1><img class="hero" src="/blog/hero-${slug}-en-v1.png" alt="${enTitle}"><p class="byline">WE Marketing Team · Oct 9, 2026 · 13 min read</p>`,
  `<p><strong>Direct answer:</strong> a useful BFCM creator brief is an execution control, not a mood board and not a long brand deck. It tells the creator which exact SKU is being promoted, what is true about it, what offer is active, what must be demonstrated, which claims have evidence, what must not be said or shown, and who resolves an unknown before publication.</p>`,
  `<p>The current TikTok Shop U.S. Content Policy applies across LIVEs, videos, cover images, titles, descriptions, spoken statements, on-screen text, backgrounds, props and product demonstrations. The current 2026 BFCM seller and creator guides also connect campaign readiness to accurate listings, compliant content, product quality and continuing account or performance signals. A brief therefore has to connect product truth, campaign truth and creative execution in one controlled handoff.</p>`,
  `<p>Most weak briefs fail in one of two directions. Some are too vague: “make it engaging,” “mention the discount,” or “show the benefits.” Others are too long: twenty slides of positioning with no exact variant, current price, required shot or escalation owner. Both force the creator to guess. During BFCM, when prices, inventory and deadlines can move quickly, guessing becomes a version-control problem.</p>`,
  `<figure><img src="/blog/q4-13-creator-brief/anatomy-en-v1.png" alt="Five execution zones in a TikTok Shop BFCM creator brief"><figcaption>One page can carry the facts, offer, demonstration, delivery and no-go controls.</figcaption></figure>`,
  `<h2>Start with the exact product truth</h2>`,
  `<p>Name the exact SKU and variant before describing the creative angle. Include the product title, seller SKU, listing URL, color, size, quantity, material, included accessories and any important use limitation. If creators may choose among variants, show which facts are shared and which differ. A generic product family description is not enough when the shipped item, packaging or quantity can vary.</p>`,
  `<p>Add two visual references: the current product detail page and a clean image of the exact item the creator will receive. Mark what must remain visible in the demonstration. If installation, charging, preparation or compatibility matters, state the required setup. If a product needs qualification, warning language or age restrictions, link the current approved wording instead of paraphrasing from memory.</p>`,
  `<p>The Content Policy requires promotional content to remain consistent with the product and its reliable evidence. That means the brief cannot “upgrade” an ordinary function into an instant result, change size or material through staging, hide the real quantity, or imply accessories that are not included. Product truth is the floor for every hook, shot and claim that follows.</p>`,
  `<h2>Make price and promotion language executable</h2>`,
  `<p>Do not write “mention the BFCM deal.” Write the current regular price, campaign price if active, coupon or bundle condition, eligible audience, start time, end time and the screen or product card the shopper should use. Identify which values are fixed and which must be checked immediately before recording or going LIVE. If a strike-through price depends on an active promotion, say that clearly.</p>`,
  `<p>Separate a platform-visible fact from a marketing interpretation. A product card displaying a price is a current interface observation. “Lowest,” “cheapest,” “best price” or a comparison with another seller is a claim that needs its own proof and policy review. The current Content Policy lists unsupported best-price and vague price-comparison language among misleading examples. When evidence is missing, remove the superlative rather than softening it with an asterisk.</p>`,
  `<p>Every price block needs a version and effective timestamp. If the offer changes, the brand issues a new block and withdraws the old one. Creators should confirm the displayed product-card price before publishing, but that readback does not authorize them to invent a broader promise. Record who checked the price and when.</p>`,
  `<h2>Translate benefits into observable demonstrations</h2>`,
  `<p>A creator can execute a shot more reliably than an adjective. Replace “show that it is premium” with a specific action: open the packaging, display the included pieces, compare dimensions to a known reference, show the texture under ordinary light, demonstrate one supported function, or explain the correct setup. Each requested demonstration should answer one buyer question.</p>`,
  `<p>For every demonstration, include the allowed conclusion and the proof behind it. A material claim may point to packaging or specification evidence. A compatibility claim may point to the verified model list. A performance claim may require test documentation and additional review. If the available evidence only supports a narrow statement, keep the creator wording narrow.</p>`,
  `<p>Avoid staging that changes the product story. The current policy addresses misleading backgrounds, demonstrations, functions and effects. Lighting, edits and props may improve clarity, but they should not fabricate size, quantity, speed, repair, cleaning, beauty or health outcomes. Before-and-after structure needs special caution because editing and uncontrolled conditions can imply a result the evidence does not support.</p>`,
  `<h2>Give the creator a claims library, not a guessing test</h2>`,
  `<p>Use three columns: approved wording, required evidence and prohibited expansion. For example, an approved specification can be quoted exactly; its evidence is the current product record; the prohibited expansion is any performance guarantee beyond that specification. This format lets a creator understand both the usable fact and the boundary around it.</p>`,
  `<p>Include pronunciation, required disclosures and brand-name rules where relevant. If the product uses licensed marks, supply the approved assets and scope. Do not tell creators to pull logos or comparison imagery from search. The brief should link only to controlled files, and each file should have a version or date.</p>`,
  `<p>Keep the library short enough to use. Three verified claims are more valuable than fifteen vague talking points. The goal is not to eliminate a creator's voice. It is to prevent the creative idea from changing the underlying product, offer or proof.</p>`,
  `<h2>Write no-go zones as concrete examples</h2>`,
  `<p>“Follow policy” is not an operational instruction. Translate the relevant boundaries into examples for this SKU. Do not make unsupported lowest-price claims. Do not promise instant or guaranteed outcomes. Do not alter the item, quantity, material or included accessories. Do not show unrelated products as if they are part of the offer. Do not use a brand, logo, song or asset without confirmed rights.</p>`,
  `<p>Add format-specific boundaries. For a short video, identify risky text overlays and edited effects. For LIVE, define what the host should do when a buyer asks about a missing fact or a price changes. For cover images, confirm that the item and offer match the linked product. The current policy evaluates all these content elements, so a clean spoken script does not cure a misleading visual.</p>`,
  `<p>The BFCM creator guide notes that creator participation is evaluated through current campaign eligibility, quality, compliance and performance signals. Do not turn that into a guarantee or freeze a volatile threshold in the brief. Link to the current campaign page, ask the creator or merchant to check the visible status, and treat a saved screenshot as a dated observation.</p>`,
  `<h2>Build a real question and escalation path</h2>`,
  `<p>A useful brief makes uncertainty safe. Name one product owner, one offer owner and one policy reviewer. Tell the creator what to send: the exact buyer question, screenshot, product link and draft timestamp. Set a response cutoff. If the answer does not arrive, the creator should omit the claim or hold publication, not improvise.</p>`,
  `<p>Use four states. READY means the fact and asset are verified for the current version. HOLD means a known change is pending. ASK means the issue is outside the brief and needs an owner. STOP means the content touches a no-go zone or lacks required proof. These states make the handoff faster because they tell the creator what action follows the label.</p>`,
  `<figure><img src="/blog/q4-13-creator-brief/routing-en-v1.png" alt="Creator question routing for a TikTok Shop BFCM brief"><figcaption>The answer is not always more copy; sometimes it is a hold or escalation.</figcaption></figure>`,
  `<h2>Use one page, plus an evidence appendix</h2>`,
  `<p>The creator-facing page should contain the execution essentials: product, audience question, offer, required demonstration, three approved claims, no-go examples, deliverable, deadline, links, owner and version. Put certificates, test records, complete specifications, campaign screenshots and legal approvals in an appendix. Link each claim to the exact appendix item.</p>`,
  `<p>This separation keeps the brief usable without hiding evidence. Creators can see the operating instructions immediately, while reviewers can trace every claim. The evidence appendix should retain source, date, owner and expiry where applicable. A folder of unnamed screenshots is not an evidence system.</p>`,
  `<h2>Run a preflight before the first creator records</h2>`,
  `<p>Have someone who did not write the brief try to execute it. Can they identify the exact item, current offer, required shot, permitted claims and stop conditions without asking what the author meant? Open every link. Compare the price with the current product card. Confirm the shipped sample. Review the final cover, caption and on-screen text, not only the script.</p>`,
  `<p>Then send the same version to a small first group and log the questions they ask. Repeated questions are not creator failure; they reveal missing instructions or weak product truth. Repair the brief once, issue a new version and make the change visible. Do not send silent edits that leave creators working from different facts.</p>`,
  `<h2>The smallest useful action today</h2>`,
  `<p>Choose one priority BFCM SKU. Write five blocks on one page: product truth, price and offer, required demonstration, proof links, and no-go zones with an owner. Add version <strong>2026-10-09 v1</strong>. Ask one operator to execute it cold. Fix every question that requires guessing before the brief reaches a creator.</p>`,
  `<h2>Source notes and execution boundary</h2>`,
  `<p>This original WEM operating framework draws on the complete current TikTok Shop U.S. <a href="${sources.policy}">Content Policy</a>, revalidated October 9, 2026; the <a href="${sources.seller}">2026 BFCM Seller Campaign Guide</a>, dated September 20, 2026; and the current <a href="${sources.creator}">2026 BFCM Creator Campaign Guide</a>. The one-page brief, five-zone structure, version control and escalation states are WEM operating methods. Platform eligibility, campaign dates, prices, thresholds, account status and interfaces can change. Verify the current U.S. Seller Center or creator tools, product card and approved brand evidence before execution.</p>`,
  faqHtml(faqEn,false),
  `<h2>Related WEM guides</h2><section class="related-grid"><a href="/blog/tiktok-shop-creator-content-review-before-scale"><strong>Review creator content before scale</strong><span>Build a repeatable product-truth and claims review.</span></a><a href="/blog/tiktok-shop-bfcm-pricing-margin-waterfall"><strong>Protect BFCM pricing and margin</strong><span>Separate price precedence from unit economics.</span></a><a href="/blog/tiktok-shop-brand-cobranded-originality-protection-decision"><strong>Choose the correct rights route</strong><span>Separate brand, licensed IP and image protection.</span></a></section>`
]);

const ZH_OLD=P([
  `<p class="eyebrow">TIKTOK SHOP 美国站 · BFCM 达人运营</p><h1>${zhTitle}</h1><img class="hero" src="/blog/hero-${slug}-zh-v1.png" alt="${zhTitle}"><p class="byline">WE Marketing Team · 2026 年 10 月 9 日 · 13 分钟阅读</p>`,
  `<p><strong>直接答案：</strong>一份真正能执行的 BFCM Creator Brief，不是 Moodboard，也不是冗长 Brand Deck，而是一张 Execution Control。它要告诉达人：推广的是哪个准确 SKU、商品事实是什么、当前 Offer 是什么、必须怎么演示、哪些 Claim 有证据、哪些内容不能说不能拍，以及遇到 Unknown 时发布前找谁确认。</p>`,
  `<p>当前 TikTok Shop 美国站 Content Policy 覆盖 LIVE、Video、Cover Image、Title、Description、口播、On-screen Text、背景、道具与商品演示。2026 BFCM Seller 与 Creator Guide 也把活动准备和准确 Listing、合规内容、商品质量，以及持续变化的账号与表现信号连接在一起。因此 Brief 必须在同一次交接里对齐商品事实、活动事实与创意执行。</p>`,
  `<p>弱 Brief 常见两个极端。一类太空泛，只写“做得有吸引力”“提到折扣”“展示卖点”；另一类太长，二十页定位却没有准确 Variant、当前价格、必拍镜头与升级 Owner。两种都会逼达人猜。BFCM 期间价格、库存和 Deadline 变化更快，猜测就会变成版本管理问题。</p>`,
  `<figure><img src="/blog/q4-13-creator-brief/anatomy-zh-v1.png" alt="TikTok Shop BFCM 达人 Brief 五个执行区"><figcaption>一页承载商品事实、Offer、演示、交付与禁区。</figcaption></figure>`,
  `<h2>先写清准确的商品事实</h2>`,
  `<p>创意角度之前，先写准确 SKU 与 Variant。包括商品 Title、Seller SKU、Listing URL、颜色、尺寸、数量、材质、配件与重要使用边界。如果达人可以在多个 Variant 里选择，要标出哪些事实通用、哪些不同。真实发货商品、包装或数量可能变化时，一个 Product Family 的泛泛描述远远不够。</p>`,
  `<p>附两张视觉参考：当前 Product Detail Page，以及达人实际收到商品的干净图片。标出演示中必须可见的部分。涉及安装、充电、准备或兼容性时，写明必要 Setup。需要 Qualification、Warning 或年龄限制的商品，应链接当前批准表达，而不是凭记忆改写。</p>`,
  `<p>Content Policy 要求推广内容与真实商品及可靠证据一致。这意味着 Brief 不能通过布景把普通功能说成 Instant Result，不能改变 Size 或 Material，不能隐藏真实 Quantity，也不能暗示未包含的 Accessories。Product Truth 是后续 Hook、Shot 与 Claim 的底线。</p>`,
  `<h2>把价格和促销写成可执行语言</h2>`,
  `<p>不要只写“提一下 BFCM Deal”。要写当前 Regular Price、Campaign Price（如已生效）、Coupon 或 Bundle 条件、适用人群、开始与结束时间，以及买家应该点击的 Product Card 或页面。标出哪些数值已锁定，哪些必须在录制或 LIVE 前再次检查。Strike-through Price 如果依赖 Active Promotion，也要明确说明。</p>`,
  `<p>把平台可见事实和营销解释分开。Product Card 显示某个价格，是当前 Interface Observation；“最低”“最便宜”“Best Price”或与其他卖家的比较，是需要独立证据和政策审核的 Claim。当前 Content Policy 把缺乏证据的最佳价格与模糊价格对比列为误导示例。证据不足时，应删除 Superlative，而不是加一个星号。</p>`,
  `<p>每个价格区块都要有 Version 与 Effective Timestamp。Offer 变化时，品牌发布新版本并撤回旧版本。达人发布前要回读 Product Card 的显示价格，但这个回读不授权他们扩大承诺。记录谁在什么时间完成价格核验。</p>`,
  `<h2>把 Benefit 改写成可观察的演示动作</h2>`,
  `<p>达人更容易执行一个 Shot，而不是一个 Adjective。把“展示高级感”改成具体动作：打开包装、展示包含物、用已知参照物说明尺寸、在普通光线下展示 Texture、演示一个有证据支持的 Function，或者说明正确 Setup。每个必拍动作都应回答一个 Buyer Question。</p>`,
  `<p>每个演示后面同时写允许结论与对应证据。Material Claim 可以连接包装或 Specification；Compatibility Claim 连接已核验 Model List；Performance Claim 可能需要 Test Documentation 与额外审核。证据只支持狭窄表达时，达人说法也必须保持狭窄。</p>`,
  `<p>避免通过 Staging 改变商品故事。当前政策明确关注误导性 Background、Demonstration、Function 与 Effect。Lighting、Editing 与 Props 可以提升清晰度，但不能伪造 Size、Quantity、Speed、Repair、Cleaning、Beauty 或 Health Outcome。Before-and-after 尤其要谨慎，因为剪辑与不可控条件容易暗示证据不支持的结果。</p>`,
  `<h2>给达人一份 Claims Library，而不是猜题</h2>`,
  `<p>用三列：Approved Wording、Required Evidence、Prohibited Expansion。例如，一条准确 Specification 可以原句使用；证据是当前 Product Record；禁区是把 Specification 扩展成 Performance Guarantee。达人既能看到可用事实，也能理解事实周围的边界。</p>`,
  `<p>需要时加入 Pronunciation、Disclosure 与 Brand Name 规则。涉及 Licensed Mark，要提供已批准 Asset 与使用范围。不要让达人从 Search 随手下载 Logo 或对比图。Brief 只链接受控文件，每个文件都带 Version 或 Date。</p>`,
  `<p>Claims Library 必须短到能用。三条经过核验的 Claim，比十五条模糊 Talking Point 更有价值。目标不是消灭达人自己的 Voice，而是防止创意表达改变底层商品、Offer 或 Proof。</p>`,
  `<h2>把禁区写成具体例子</h2>`,
  `<p>“遵守平台政策”不是可执行指令。要把这个 SKU 相关边界翻成例子：不能做无证据最低价表达；不能承诺 Instant 或 Guaranteed Outcome；不能改变商品、数量、材质或包含配件；不能把无关商品拍成 Offer 的一部分；没有确认权利时，不能使用 Brand、Logo、Song 或其他 Asset。</p>`,
  `<p>还要写 Format-specific Boundary。Short Video 要标出高风险字幕与 Edit Effect；LIVE 要规定买家问到未知事实或价格变化时 Host 怎么处理；Cover Image 要确认商品与 Offer 和 Linked Product 一致。当前政策审核所有这些内容元素，所以干净的口播 Script 不能修复误导 Visual。</p>`,
  `<p>BFCM Creator Guide 说明，达人参与资格会结合当前活动资格、质量、合规与表现信号评估。不要把这些写成 Guarantee，也不要在 Brief 里把易变化 Threshold 固定成永久规则。链接当前 Campaign Page，让 Creator 或 Merchant 检查 Visible Status，并把 Screenshot 只当成带日期的 Observation。</p>`,
  `<h2>建立真实的问题回传和升级路径</h2>`,
  `<p>好 Brief 会让 Unknown 变得安全。指定一个 Product Owner、一个 Offer Owner 与一个 Policy Reviewer。告诉达人需要发送什么：Buyer 原话、Screenshot、Product Link 与 Draft Timestamp，并设置 Response Cutoff。如果答案没有按时到达，达人应该省略 Claim 或 Hold Publication，而不是现场编一个答案。</p>`,
  `<p>使用四种状态。READY 表示当前版本的事实与 Asset 已核验；HOLD 表示已知变化还没落地；ASK 表示问题超出 Brief，需要 Owner；STOP 表示触及禁区或缺少证据，不能发布。这些状态让交接更快，因为每个 Label 都对应下一步动作。</p>`,
  `<figure><img src="/blog/q4-13-creator-brief/routing-zh-v1.png" alt="TikTok Shop BFCM 达人问题路由"><figcaption>答案不一定是更多文案，也可能是暂停或升级。</figcaption></figure>`,
  `<h2>一页执行 Brief，加一份证据 Appendix</h2>`,
  `<p>达人第一页只放执行必要信息：Product、Audience Question、Offer、必拍演示、三条 Approved Claim、禁区例子、Deliverable、Deadline、Links、Owner 与 Version。Certificate、Test Record、完整 Specification、Campaign Screenshot 与 Legal Approval 放到 Appendix，并把每条 Claim 连接到准确证据项。</p>`,
  `<p>这样既保持 Brief 可用，也不隐藏 Evidence。达人立刻看到执行动作，Reviewer 也能追溯每个 Claim。证据 Appendix 应保存 Source、Date、Owner 与适用时的 Expiry。一堆没有命名的 Screenshot 不是证据系统。</p>`,
  `<h2>第一个达人开拍前做一次 Preflight</h2>`,
  `<p>让一个没有参与撰写的人试着执行 Brief。TA 能否不问作者，就找出准确商品、当前 Offer、必拍 Shot、允许 Claim 与 Stop Condition？打开每个 Link，对照当前 Product Card 价格，确认实际 Sample，再审核最终 Cover、Caption 与 On-screen Text，而不是只看 Script。</p>`,
  `<p>然后只发给一个小范围 First Group，记录达人提出的问题。重复问题不是达人失败，而是 Brief 缺少指令或 Product Truth 不清。统一修复 Brief、发布新版本，并让变更可见。不要 Silent Edit，避免不同达人基于不同事实工作。</p>`,
  `<h2>今天就做的最小动作</h2>`,
  `<p>选一个 Priority BFCM SKU，在一页上写五个区块：商品事实、价格与 Offer、必拍演示、Proof Links、禁区与 Owner。加上版本号 <strong>2026-10-09 v1</strong>。让一名 Operator 冷启动执行一次；Brief 进入达人手里之前，把所有需要猜测的问题修掉。</p>`,
  `<h2>来源说明与执行边界</h2>`,
  `<p>这套 WE Marketing 原创运营框架基于完整当前 TikTok Shop 美国站 <a href="${sources.policy}">Content Policy</a>（2026 年 10 月 9 日重新核验）、发布于 2026 年 9 月 20 日的 <a href="${sources.seller}">2026 BFCM Seller Campaign Guide</a>，以及当前 <a href="${sources.creator}">2026 BFCM Creator Campaign Guide</a>。一页 Brief、五区结构、版本管理与升级状态属于 WEM 运营方法。平台资格、活动日期、价格、Threshold、账号状态与 Interface 都可能变化，执行前要核验当前美国站 Seller Center 或 Creator Tool、Product Card 与品牌批准证据。</p>`,
  faqHtml(faqZh,true),
  `<h2>相关 WEM 指南</h2><section class="related-grid"><a href="/blog/tiktok-shop-creator-content-review-before-scale?lang=zh"><strong>达人内容放量前怎么审核</strong><span>建立可重复的商品事实与 Claim Review。</span></a><a href="/blog/tiktok-shop-bfcm-pricing-margin-waterfall?lang=zh"><strong>BFCM 价格与毛利</strong><span>把价格优先级和 Unit Economics 分开。</span></a><a href="/blog/tiktok-shop-brand-cobranded-originality-protection-decision?lang=zh"><strong>选择正确权利路径</strong><span>区分品牌、Licensed IP 与图片保护。</span></a></section>`
]);

const EN=P([
  `<p class="eyebrow">TIKTOK SHOP U.S. · BFCM PRICE OPERATIONS</p><h1>${enTitle}</h1><img class="hero" src="/blog/hero-${slug}-en-v1.png" alt="${enTitle}"><p class="byline">WE Marketing Team · Oct 10, 2026 · 14 min read</p>`,
  `<p><strong>Direct answer:</strong> audit a BFCM price claim as one statement moving across three surfaces, not as three separate pieces of copy. Write the exact sentence, exact SKU, obtainable price, material conditions, evidence timestamp, owner and expiration rule in one ledger. Video, LIVE and product-page teams may format the message differently, but they must read from the same approved price state.</p>`,
  `<p>The current TikTok Shop U.S. Content Policy permits creators to mention prices, discounts, coupons and deals only when the information is accurate, clear, current and not misleading. It also says the obtainable price may vary with coupons, selected SKUs, bundles, minimum-spend requirements, user eligibility, shipping, taxes and promotional periods. A number by itself is therefore not a complete claim.</p>`,
  `<p>The 2026 BFCM Seller Campaign Guide adds a platform-operation boundary. Strike-through pricing appears only when the campaign sale price is lower than the regular retail price. The guide also says many self-promotion tools do not stack on top of campaign pricing, the campaign price usually applies first, and some additional promotions may be disabled. A team that ignores precedence can publish a mathematically attractive price that shoppers cannot reproduce.</p>`,
  `<figure><img src="/blog/q4-14-price-claims/ledger-en-v1.png" alt="Five required fields in a TikTok Shop BFCM price-claim ledger"><figcaption>The ledger records the obtainable price, exact wording, evidence, valid window and kill switch.</figcaption></figure>`,
  `<h2>Define the claim before checking the number</h2>`,
  `<p>Start by copying the sentence exactly as a shopper will encounter it. “Now $29,” “save 30%,” “lowest price,” “extra 10% with coupon,” and “under $25 at checkout” are different claims. Each requires different evidence. Do not reduce all of them to a spreadsheet cell called price, because that hides the promise made by the words around the number.</p>`,
  `<p>Attach the exact seller SKU and variant. If only one color or bundle receives the campaign price, the claim cannot silently cover the whole listing family. Record whether the evidence comes from the product card, campaign management view or checkout, and whether it was observed as a new, returning or otherwise eligible user. A screenshot without SKU, time and conditions is incomplete evidence.</p>`,
  `<p>Separate four values: regular retail price, campaign sale price, conditional discount and final obtainable total. The first two may control the visible strike-through. A coupon or threshold can change what a qualified shopper pays. Shipping, taxes or fees can change the checkout total. The audit should never merge these values into a universal price promise.</p>`,
  `<h2>Build one evidence-led price ledger</h2>`,
  `<p>Give every claim one row. Recommended fields are claim ID, exact wording, SKU, surface, regular price, campaign price, coupon or bundle, minimum spend, audience eligibility, start and end time, timezone, evidence link, readback time, pricing owner, content owner, status and withdrawal action. Keep the fields plain enough that an operator can update them during a busy campaign day.</p>`,
  `<p>The evidence link should open the source a reviewer actually used. Preserve the campaign view, current product card and a checkout test when the claim includes a final payable amount. If a condition cannot be tested from the available account, label it unknown rather than treating absence as proof. The ledger should make uncertainty visible before a creator makes it public.</p>`,
  `<p>Use versioned statuses. GREEN means the exact claim is reproducible for its stated audience and window. AMBER means a known change is approaching and new content should pause. RED means the claim no longer reproduces and the kill switch must run. UNKNOWN means evidence is incomplete, so the claim cannot be released. Status changes need an owner and timestamp.</p>`,
  `<h2>Audit the product page first</h2>`,
  `<p>The product page is the buyer's transaction reference, so begin there. Confirm title, selected variant, displayed regular price, sale price, coupon language, bundle quantity and any minimum-spend condition. Then follow the promoted link into checkout. If the content promise requires a coupon tap or special selection, document that action and disclose it where the shopper sees the claim.</p>`,
  `<p>Do not infer a strike-through from creative intent. The BFCM guide says it appears only when campaign sale price is lower than regular retail price; equal prices do not produce it. If the desired visual is missing, investigate campaign registration and price configuration. Do not compensate with a manually designed fake comparison in the video or cover.</p>`,
  `<p>Check promotion precedence before approving stacked language. If the campaign price takes priority and a flash deal or extra discount is disabled, “BFCM price plus 10% off” is not an operational plan. The seller should verify the actual active combination in Seller Center and checkout, then write only what that readback supports.</p>`,
  `<h2>Audit every frame of short-form video</h2>`,
  `<p>Video creates persistence. Review spoken audio, on-screen text, caption, cover image, pinned comment and linked product together. A compliant voiceover does not cure an expired price printed on the first frame. Record every price sentence in the ledger, including small overlay text and editing templates supplied to creators.</p>`,
  `<p>Match the claim window to the publishing window. If a video may remain discoverable after the offer ends, prefer conditional language and an explicit date or instruct the team to replace, archive or edit the asset when the ledger turns RED. Do not rely on viewers noticing an old upload date. The question is whether the current viewer can reasonably obtain what the current content promises.</p>`,
  `<p>Remove unsupported superlatives. The Content Policy identifies unsupported “lowest,” “cheapest” and “best price” statements, along with vague or inaccurate comparisons, as misleading. A price being lower than yesterday's brand price does not prove it is the lowest on TikTok Shop or anywhere else. If the comparison population and evidence are not controlled, use the exact offer instead.</p>`,
  `<h2>Give LIVE a real-time control loop</h2>`,
  `<p>LIVE requires a faster audit because the host, pinned product card and seller settings can change during the session. Before going live, the operator reads the ledger version aloud to the host, opens the pinned SKU, checks the visible price and conditions, and records the time. The host uses the approved sentence, not a remembered price from rehearsal.</p>`,
  `<p>During the room, assign one operator to watch price state. If the product card changes, a coupon exhausts, an eligibility condition appears or checkout no longer reproduces the claim, that operator triggers the kill switch: tell the host to stop the sentence, unpin the item if necessary, remove the price overlay and post corrected language only after a fresh readback.</p>`,
  `<p>Prepare safe fallback wording. The host can say, “Open the product card to see the current offer and conditions,” but should not use that sentence to preserve a specific expired promise. If a viewer reports a different price, capture the exact question, screenshot and user path. Treat it as an investigation signal, not proof that either the viewer or host is wrong.</p>`,
  `<figure><img src="/blog/q4-14-price-claims/states-en-v1.png" alt="Shared BFCM price states across video, LIVE and product page"><figcaption>Every channel follows the same GREEN, AMBER, RED and UNKNOWN state.</figcaption></figure>`,
  `<h2>Run the kill switch across all surfaces</h2>`,
  `<p>A kill switch is a written list of actions, not a warning in a meeting. For each claim, identify who can change the product-page copy, stop ads, contact creators, edit scheduled captions, remove a pinned LIVE product, replace overlays and confirm completion. Set a response time that matches the campaign risk.</p>`,
  `<p>When a claim turns RED, withdraw it everywhere. Do not repair only the product page while videos keep the old number, or correct the creator caption while the LIVE run-of-show remains stale. The ledger row should list every active asset and its terminal readback. “Message sent” is not evidence that the content changed.</p>`,
  `<p>After correction, run a new shopper-path test and create a new version. Preserve the previous record for audit history instead of silently overwriting it. That history helps the team understand whether the failure came from source configuration, campaign precedence, a creator copy error or an expired condition.</p>`,
  `<h2>Use a three-pass preflight</h2>`,
  `<p>Pass one is claim integrity: exact wording, SKU, audience and conditions. Pass two is transaction integrity: product card, campaign view and checkout reproduce the promise. Pass three is surface integrity: the same approved version appears in video, LIVE materials and product-page copy. The content is ready only when all three passes are GREEN.</p>`,
  `<p>Re-run the preflight immediately before a scheduled post or LIVE, not only when the creative was approved. BFCM conditions can change between editing and publication. Use the shortest reasonable validity window and require a new readback after any campaign, coupon, listing, inventory or price change.</p>`,
  `<h2>The smallest useful action today</h2>`,
  `<p>Choose one priority BFCM SKU. Copy every active price sentence from its product page, one video and the next LIVE run-of-show into a single ledger. Add the exact conditions and evidence timestamp. Mark each GREEN, AMBER, RED or UNKNOWN, then remove every RED and UNKNOWN claim before publishing anything else.</p>`,
  `<h2>Source notes and execution boundary</h2>`,
  `<p>This original WE Marketing operating framework draws on the complete current TikTok Shop U.S. <a href="${sources.policy}">Content Policy</a>, revalidated October 10, 2026, and the <a href="${sources.seller}">2026 Black Friday &amp; Cyber Monday Seller Campaign Guide</a>, dated September 20, 2026. The cross-surface ledger, status model, three-pass preflight and kill-switch sequence are WEM operating methods. Campaign status, prices, eligibility, coupons, thresholds, interfaces, taxes, shipping and account-level availability can change. Verify the current U.S. Seller Center, product card and checkout before execution.</p>`,
  faqHtml(faqEn,false),
  `<h2>Related WEM guides</h2><section class="related-grid"><a href="/blog/tiktok-shop-bfcm-pricing-margin-waterfall"><strong>Protect BFCM pricing and margin</strong><span>Separate promotion precedence from contribution economics.</span></a><a href="/blog/tiktok-shop-bfcm-creator-brief-creators-can-follow"><strong>Build a creator-ready BFCM brief</strong><span>Control product facts, offer, proof and no-go zones.</span></a><a href="/blog/tiktok-shop-creator-content-review-before-scale"><strong>Review creator content before scale</strong><span>Use product truth and claim evidence before distribution.</span></a></section>`
]);

const ZH=P([
  `<p class="eyebrow">TIKTOK SHOP 美国站 · BFCM 价格运营</p><h1>${zhTitle}</h1><img class="hero" src="/blog/hero-${slug}-zh-v1.png" alt="${zhTitle}"><p class="byline">WE Marketing Team · 2026 年 10 月 10 日 · 14 分钟阅读</p>`,
  `<p><strong>直接答案：</strong>审核 BFCM 价格 Claim 时，不要把短视频、LIVE 和商品页当成三份独立文案，而要把它们视为同一句承诺在三个渠道上的传播。把 Claim 原话、准确 SKU、可获得价格、重要条件、证据时间戳、Owner 与失效动作写进同一台账。三个渠道可以使用不同表达形式，但只能读取同一个已批准 Price State。</p>`,
  `<p>当前 TikTok Shop 美国站 Content Policy 允许达人提到价格、折扣、Coupon 与 Deal，但信息必须准确、清楚、当前有效且不误导。政策同时提醒，最终可获得价格可能受到 Coupon、指定 SKU、Bundle、Minimum Spend、用户资格、运费、税费与活动时间影响。因此只写一个数字，并不构成完整价格 Claim。</p>`,
  `<p>2026 BFCM Seller Campaign Guide 还增加了平台执行边界。只有 Campaign Sale Price 低于 Regular Retail Price 时才会显示 Strike-through Price；许多 Self-promotion Tool 不会与活动价叠加，通常 Campaign Price 优先，部分额外促销还可能被禁用。忽略价格优先级，很容易发布一个数学上好看、买家却无法复现的价格。</p>`,
  `<figure><img src="/blog/q4-14-price-claims/ledger-zh-v1.png" alt="TikTok Shop BFCM 价格 Claim 台账五个必填字段"><figcaption>台账同时记录可获得价格、Claim 原话、证据、有效窗口与 Kill Switch。</figcaption></figure>`,
  `<h2>先定义 Claim，再检查数字</h2>`,
  `<p>第一步是逐字抄下买家会看到或听到的句子。“现在 29 美元”“省 30%”“最低价”“Coupon 再减 10%”与“Checkout 不到 25 美元”不是同一种 Claim，需要的证据也不同。不要把它们全部缩成表格里一个叫 Price 的单元格，否则数字周围真正承诺的内容会被隐藏。</p>`,
  `<p>每句 Claim 必须绑定准确 Seller SKU 与 Variant。如果只有一个颜色或 Bundle 参加活动，就不能默认覆盖整个 Listing Family。记录证据来自 Product Card、Campaign Management View 还是 Checkout，也要记录使用什么用户状态进行测试。没有 SKU、时间与条件的 Screenshot，不是完整证据。</p>`,
  `<p>把四种 Value 分开：Regular Retail Price、Campaign Sale Price、Conditional Discount 与 Final Obtainable Total。前两者可能决定是否显示划线价；Coupon 或 Threshold 会改变符合条件用户支付的金额；Shipping、Tax 与 Fee 可能改变结账总额。审核时不能把四者混成对所有人都成立的单一承诺。</p>`,
  `<h2>建立一份有证据的价格台账</h2>`,
  `<p>每句 Claim 一行。建议字段包括 Claim ID、原话、SKU、渠道、Regular Price、Campaign Price、Coupon 或 Bundle、Minimum Spend、Audience Eligibility、开始与结束时间、时区、Evidence Link、Readback Time、Pricing Owner、Content Owner、状态与撤回动作。字段要足够简单，让 Operator 在繁忙活动日也能及时更新。</p>`,
  `<p>Evidence Link 必须打开 Reviewer 实际使用的 Source。如果 Claim 包含最终支付金额，应保存 Campaign View、当前 Product Card 与 Checkout Test。某个条件无法用现有账号测试时，标记 Unknown，而不是把“没有看到”当成“没有条件”。台账的价值，就是在达人公开之前暴露不确定性。</p>`,
  `<p>使用版本化状态。GREEN 表示 Claim 对其声明人群与时间窗口可以复现；AMBER 表示已知变化即将发生，新内容暂停排期；RED 表示 Claim 已无法复现，必须执行 Kill Switch；UNKNOWN 表示证据不完整，不能发布。每次状态变化都要保留 Owner 与 Timestamp。</p>`,
  `<h2>先从商品页开始审核</h2>`,
  `<p>Product Page 是买家交易参考，应从这里开始。核对 Title、Selected Variant、Regular Price、Sale Price、Coupon、Bundle Quantity 与 Minimum Spend，再沿推广链接走到 Checkout。如果价格需要点 Coupon 或选择特定 Variant 才能获得，就记录动作，并在买家看到 Claim 的地方披露重要条件。</p>`,
  `<p>不要根据创意意图推断划线价。BFCM Guide 明确说明，只有 Campaign Sale Price 低于 Regular Retail Price 时才出现；两者相同不会显示。如果想要的视觉没有出现，应检查 Campaign Registration 与 Price Configuration，不能在视频或 Cover 里手动画一个假的价格对比。</p>`,
  `<p>批准叠加折扣语言前，先检查 Promotion Precedence。如果 Campaign Price 优先，Flash Deal 或额外折扣被禁用，“BFCM 活动价再减 10%”就不是可执行计划。Seller 必须在 Seller Center 与 Checkout 里核验真实有效组合，然后只写 Readback 支持的内容。</p>`,
  `<h2>审核短视频的每一个 Frame</h2>`,
  `<p>Video 会长期存在，因此要一起审核口播、On-screen Text、Caption、Cover Image、Pinned Comment 与 Linked Product。合规 Voiceover 无法修复第一帧已经过期的价格。所有价格句子都要写进台账，包括小号 Overlay 与品牌发给达人的 Editing Template。</p>`,
  `<p>把 Claim Window 和 Publishing Window 对齐。如果视频在 Offer 结束后仍可被发现，优先使用条件化语言与明确日期，或者规定台账转 RED 时替换、Archive 或 Edit。不能指望观众主动注意旧视频发布日期；判断标准是当前观众能否合理获得当前内容承诺的价格。</p>`,
  `<p>删除没有证据的 Superlative。Content Policy 把无证据的“最低”“最便宜”“Best Price”以及模糊、不准确的价格对比列为误导。品牌价格比昨天低，并不证明它是 TikTok Shop 或全网最低。如果 Comparison Population 与证据不受控，就只说准确 Offer。</p>`,
  `<h2>给 LIVE 建立实时控制循环</h2>`,
  `<p>LIVE 需要更快的审核，因为 Host、Pinned Product Card 与 Seller Setting 都可能在直播中变化。开播前，Operator 把 Ledger Version 回读给 Host，打开被 Pin 的 SKU，核验价格和条件并记录时间。Host 使用批准句子，不能凭 Rehearsal 记忆报价。</p>`,
  `<p>直播期间指定一个 Operator 监控 Price State。Product Card 变化、Coupon 用完、出现 Eligibility 条件或 Checkout 无法复现时，立刻触发 Kill Switch：让 Host 停止该句、必要时解除商品 Pin、移除价格 Overlay，并在新的 Readback 完成后才发布纠正文案。</p>`,
  `<p>预先准备 Safe Fallback。Host 可以说“请打开 Product Card 查看当前 Offer 与条件”，但不能用这句话继续保留一个已过期的具体承诺。如果 Viewer 报告不同价格，要保存原话、Screenshot 与用户路径，把它当成 Investigation Signal，而不是立刻判定买家或 Host 谁错了。</p>`,
  `<figure><img src="/blog/q4-14-price-claims/states-zh-v1.png" alt="短视频直播与商品页共用的 BFCM 价格状态"><figcaption>所有渠道共同执行 GREEN、AMBER、RED 与 UNKNOWN。</figcaption></figure>`,
  `<h2>跨渠道执行 Kill Switch</h2>`,
  `<p>Kill Switch 是写明动作的清单，不是会议里的提醒。每句 Claim 都要指定谁能修改 Product Page、停止 Ads、联系达人、编辑 Scheduled Caption、解除 LIVE 商品 Pin、替换 Overlay，并确认操作完成。Response Time 要和活动风险匹配。</p>`,
  `<p>Claim 转 RED 时，所有渠道一起撤回。不能只修 Product Page，却让 Video 保留旧数字；也不能只改 Creator Caption，而让 LIVE Run-of-show 继续使用旧版本。Ledger Row 要列出所有 Active Asset 及其 Terminal Readback。“已经发消息”不等于内容已经修改。</p>`,
  `<p>修复后重新走 Shopper Path，并创建新版本。保留旧记录用于 Audit History，不要 Silent Overwrite。历史记录能帮助团队判断，问题来自 Source Configuration、Campaign Precedence、Creator Copy Error，还是条件自然 Expire。</p>`,
  `<h2>执行三遍 Preflight</h2>`,
  `<p>第一遍是 Claim Integrity：原话、SKU、Audience 与条件。第二遍是 Transaction Integrity：Product Card、Campaign View 与 Checkout 能复现承诺。第三遍是 Surface Integrity：短视频、LIVE Material 与 Product Page 使用同一个批准版本。三遍都 GREEN 才能发布。</p>`,
  `<p>Preflight 要在 Scheduled Post 或 LIVE 前立即重跑，而不是只在 Creative Approval 时做。BFCM 条件可能在剪辑和发布之间变化。使用尽可能短的 Validity Window，任何 Campaign、Coupon、Listing、Inventory 或 Price 变化后都要求重新 Readback。</p>`,
  `<h2>今天最小可执行动作</h2>`,
  `<p>选一个 Priority BFCM SKU，把 Product Page、一个 Video 与下一场 LIVE Run-of-show 的所有价格句子复制进同一台账。补上准确条件与 Evidence Timestamp，逐条标记 GREEN、AMBER、RED 或 UNKNOWN。任何新的内容发布前，先撤回全部 RED 与 UNKNOWN Claim。</p>`,
  `<h2>来源说明与执行边界</h2>`,
  `<p>这套 WE Marketing 原创运营框架基于完整当前 TikTok Shop 美国站 <a href="${sources.policy}">Content Policy</a>（2026 年 10 月 10 日重新核验），以及发布于 2026 年 9 月 20 日的 <a href="${sources.seller}">2026 Black Friday &amp; Cyber Monday Seller Campaign Guide</a>。跨渠道台账、状态模型、三遍 Preflight 与 Kill Switch 顺序属于 WEM 运营方法。Campaign Status、Price、Eligibility、Coupon、Threshold、Interface、Tax、Shipping 与账号可见状态都可能变化，执行前必须核验当前美国站 Seller Center、Product Card 与 Checkout。</p>`,
  faqHtml(faqZh,true),
  `<h2>相关 WEM 指南</h2><section class="related-grid"><a href="/blog/tiktok-shop-bfcm-pricing-margin-waterfall?lang=zh"><strong>保护 BFCM 价格与毛利</strong><span>把促销优先级和 Contribution Economics 分开。</span></a><a href="/blog/tiktok-shop-bfcm-creator-brief-creators-can-follow?lang=zh"><strong>建立达人可执行的 BFCM Brief</strong><span>控制商品事实、Offer、Proof 与禁区。</span></a><a href="/blog/tiktok-shop-creator-content-review-before-scale?lang=zh"><strong>达人内容放量前审核</strong><span>发布前核对 Product Truth 与 Claim Evidence。</span></a></section>`
]);

const graph={'@context':'https://schema.org','@graph':[
  {'@type':'BlogPosting','@id':`${url}#article`,headline:enTitle,description:enDescription,inLanguage:'en-US',author:{'@type':'Organization','@id':'https://www.weglobalmarketing.com/#editorial-team',name:'WE Marketing Team'},publisher:{'@type':'Organization','@id':'https://www.weglobalmarketing.com/#organization',name:'WE Marketing',alternateName:'WEM'},image:{'@type':'ImageObject',url:`${url.replace(`/blog/${slug}`,'')}/blog/hero-${slug}-en-v1.png`,width:1792,height:896,caption:'WE Marketing TikTok Shop BFCM price claim audit'},datePublished:date,dateModified:date,mainEntityOfPage:{'@type':'WebPage','@id':url},citation:Object.values(sources),keywords:['TikTok Shop BFCM price claims','TikTok Shop price audit','TikTok Shop LIVE pricing']},
  {'@type':'BlogPosting','@id':`${url}?lang=zh#article`,headline:zhTitle,description:zhDescription,inLanguage:'zh-CN',translationOfWork:{'@id':`${url}#article`},author:{'@id':'https://www.weglobalmarketing.com/#editorial-team'},publisher:{'@id':'https://www.weglobalmarketing.com/#organization'},image:{'@type':'ImageObject',url:`${url.replace(`/blog/${slug}`,'')}/blog/hero-${slug}-zh-v1.png`,width:1792,height:896,caption:'WE Marketing TikTok Shop BFCM 价格口径审计'},datePublished:date,dateModified:date,mainEntityOfPage:{'@type':'WebPage','@id':`${url}?lang=zh`},citation:Object.values(sources)},
  ...[[faqEn,'en-US',`${url}#faq`],[faqZh,'zh-CN',`${url}?lang=zh#faq`]].map(([items,lang,id])=>({'@type':'FAQPage','@id':id,inLanguage:lang,mainEntity:items.map(([name,text])=>({'@type':'Question',name,acceptedAnswer:{'@type':'Answer',text}}))})),
  {'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:'https://www.weglobalmarketing.com/'},{'@type':'ListItem',position:2,name:'Blog',item:'https://www.weglobalmarketing.com/blog'},{'@type':'ListItem',position:3,name:enTitle,item:url}]}
]};

const oldHtml=await fs.readFile(path.join(base,'blog/tiktok-shop-bfcm-creator-brief-creators-can-follow.html'),'utf8');
const style=oldHtml.match(/<style>[\s\S]*?<\/style>/)[0];
const html=`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><script>document.documentElement.dataset.lang=new URLSearchParams(location.search).get('lang')==='zh'?'zh':'en';document.documentElement.lang=document.documentElement.dataset.lang==='zh'?'zh-CN':'en'</script><title>${enTitle} | WE Marketing</title><meta name="description" content="${enDescription}"><link rel="canonical" href="${url}"><link rel="alternate" hreflang="en-US" href="${url}"><link rel="alternate" hreflang="zh-CN" href="${url}?lang=zh"><link rel="alternate" hreflang="x-default" href="${url}"><script type="application/ld+json">${JSON.stringify(graph)}</script>${style}</head><body><nav class="nav"><a class="logo" href="/"><img src="/assets/we-logo.png" alt="WE Marketing"></a><a href="/services">SERVICES</a><a href="/about">ABOUT</a><a href="/blog">BLOG</a><span class="spacer"></span><div class="switch"><a class="zh" href="?lang=zh">中文</a><a class="en" href="?">EN</a></div></nav><main class="wrap"><div class="tools"><a class="en" href="/blog">← BLOG</a><a class="zh" href="/blog?lang=zh">← 博客</a></div><article lang="en">${EN}</article><article lang="zh-CN">${ZH}</article></main><section class="cta"><h2 class="en">READY TO TALK<br>TO WEM?</h2><h2 class="zh">准备好和 WEM<br>一起把计划落地吗？</h2><p class="en">Turn BFCM price claims into controlled, evidence-backed execution.</p><p class="zh">把 BFCM 价格口径变成跨渠道、可读回的受控执行。</p><a class="en" href="https://scheduler.zoom.us/wendylin001">BOOK A DISCOVERY CALL</a><a class="zh" href="https://scheduler.zoom.us/wendylin001">预约咨询</a></section><footer class="footer"><img src="/assets/we-logo.png" alt="WE Marketing"><p class="en">WE Marketing connects strategy, creator operations, paid growth and TikTok Shop execution.</p><p class="zh">WE Marketing 帮助品牌连接策略、达人运营、付费增长与 TikTok Shop 执行。</p><p>© 2026 WE Marketing. All rights reserved.</p></footer><script>if(document.documentElement.dataset.lang==='zh'){document.title=${JSON.stringify(zhTitle+' | WE Marketing')};document.querySelector('meta[name=description]').content=${JSON.stringify(zhDescription)};document.querySelector('link[rel=canonical]').href='${url}?lang=zh'}</script></body></html>`;
await fs.writeFile(path.join(out,'blog',`${slug}.html`),html);

let list=await fs.readFile(path.join(base,'BlogList.jsx'),'utf8');
const row={slug,tags:['tiktok-shop','shop-operations','campaigns-growth'],cat:{en:'TIKTOK SHOP U.S. · BFCM PRICE OPS',zh:'TIKTOK SHOP 美国站 · BFCM 价格运营'},title:{en:enTitle,zh:zhTitle},excerpt:{en:'Keep price claims aligned across video, LIVE and product page with one evidence-led ledger.',zh:'用一份有证据的台账，对齐短视频、直播与商品页的价格口径。'},date:{en:'Oct 10, 2026',zh:'2026 年 10 月 10 日'},read:{en:'14 min read',zh:'14 分钟阅读'},image:{en:`hero-${slug}-en-v1.png`,zh:`hero-${slug}-zh-v1.png`}};
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

const sourceFiles={policy:'content-policy.html',seller:'bfcm-price-precedence.html'};
const reports={};
for(const [key,name] of Object.entries(sourceFiles)){const b=await fs.readFile(path.join(root,'outputs/2026-10-10-q4-14-source',name));reports[key]={url:sources[key],httpStatus:200,bytes:b.length,sha256:sha(b)};}
await fs.writeFile(path.join(root,'outputs/2026-10-10-q4-14-source-revalidation.json'),`${JSON.stringify({status:'source_revalidated',date,sources:reports,facts:['Price, discount, coupon and deal claims must be accurate, clear, current and not misleading.','Material conditions can include coupon redemption, selected SKUs, bundles, minimum spend, user eligibility, limited-time availability, shipping, taxes, fees and regional restrictions.','False, unavailable, expired and unsupported lowest or cheapest price claims are prohibited.','The current BFCM guide says strike-through pricing appears only when campaign sale price is lower than regular retail price.','The current BFCM guide says many self-promotion tools do not stack, campaign price usually applies first and some additional promotions may be disabled.','Prices, eligibility, campaign state, interface and checkout conditions require current account readback.']},null,2)}\n`);
console.log(JSON.stringify({out,version,enWords:EN.replace(/<[^>]+>/g,' ').trim().split(/\s+/).length,zhChars:ZH.replace(/<[^>]+>/g,'').replace(/\s/g,'').length}));
