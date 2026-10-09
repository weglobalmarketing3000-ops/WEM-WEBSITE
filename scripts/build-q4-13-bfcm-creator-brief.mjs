import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import vm from 'node:vm';
import {createRequire} from 'node:module';

const require=createRequire(import.meta.url);
const sharp=require('/Users/wendylin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');
const root=path.resolve(import.meta.dirname,'..');
const base=path.join(root,'outputs/patches/2026-10-08-q4-12-shop-tab-eligibility');
const out=path.join(root,'outputs/patches/2026-10-09-q4-13-bfcm-creator-brief');
const slug='tiktok-shop-bfcm-creator-brief-creators-can-follow';
const date='2026-10-09';
const url=`https://www.weglobalmarketing.com/blog/${slug}`;
const sources={
  policy:'https://seller-us.tiktok.com/university/essay?knowledge_id=6837891779151617&lang=en',
  seller:'https://seller-us.tiktok.com/university/essay?content_id=8146792370325290&knowledge_id=26854147802894&lang=en',
  creator:'https://seller-us.tiktok.com/university/essay?knowledge_id=5468405153498900&lang=en'
};
const enTitle='A TikTok Shop BFCM Creator Brief That Creators Can Actually Follow';
const zhTitle='一份达人真正能执行的 TikTok Shop BFCM Brief：商品事实、价格与禁区';
const enDescription='Build a one-page TikTok Shop BFCM creator brief that keeps product truth, price, proof, demonstrations and no-go zones aligned.';
const zhDescription='用一页 TikTok Shop BFCM 达人 Brief 对齐商品事实、价格、证据、演示动作与内容禁区。';
const sha=v=>crypto.createHash('sha256').update(v).digest('hex');

await fs.rm(out,{recursive:true,force:true});
for(const d of ['assets','blog','blog/optimized','blog/thumbs','blog/q4-13-creator-brief']) await fs.mkdir(path.join(out,d),{recursive:true});
await fs.copyFile(path.join(root,'assets/we-logo.png'),path.join(out,'assets/we-logo.png'));
const logo=(await fs.readFile(path.join(out,'assets/we-logo.png'))).toString('base64');
const scenePath=path.join(root,'outputs/2026-10-09-q4-13-source/raw-scene-not-for-review.png');

function overlay(zh){
  const lines=zh?['一份达人真正能执行的','BFCM BRIEF']:['A BFCM BRIEF','CREATORS CAN USE'];
  return Buffer.from(`<svg width="1792" height="896" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="fade" x1="0" x2="1"><stop offset="0" stop-color="#fffdf8"/><stop offset=".47" stop-color="#fffdf8" stop-opacity=".98"/><stop offset=".66" stop-color="#fffdf8" stop-opacity="0"/></linearGradient></defs><rect width="1792" height="896" fill="url(#fade)"/><rect x="82" y="76" width="650" height="52" rx="26" fill="#e8efff"/><text x="110" y="111" font-family="Arial,PingFang SC" font-size="21" font-weight="800" fill="#1746b8">${zh?'TIKTOK SHOP 美国站 · BFCM 达人运营':'TIKTOK SHOP U.S. · BFCM CREATOR OPS'}</text>${lines.map((t,i)=>`<text x="82" y="${zh?275+i*98:270+i*92}" font-family="Arial Narrow,Arial,PingFang SC" font-size="${zh?(i?78:60):(i?72:76)}" font-weight="900" fill="${i?'#245bd7':'#17151a'}">${t}</text>`).join('')}<rect x="84" y="480" width="92" height="7" rx="4" fill="#ed168c"/><text x="82" y="550" font-family="Arial,PingFang SC" font-size="24" fill="#4f4a55">${zh?'商品事实 · 价格 · 证据 · 禁区':'FACTS · PRICE · PROOF · NO-GO ZONES'}</text><image href="data:image/png;base64,${logo}" x="82" y="700" width="145" height="105"/></svg>`);
}

function bodyVisual(zh,type){
  if(type==='anatomy'){
    const title=zh?'一页 Brief 的五个执行区':'Five execution zones in one creator brief';
    const rows=zh?[
      ['01 商品事实','准确 SKU、Variant、数量、材质、配件与使用边界'],
      ['02 价格与 Offer','当前售价、活动价、优惠条件、开始与结束时间'],
      ['03 演示与 Claim','必须展示的动作、允许说法与对应证据'],
      ['04 素材与交付','Format、时长、Deadline、链接、版本与回传方式'],
      ['05 禁区与升级','不能说/不能拍的内容，以及遇到 Unknown 找谁']
    ]:[
      ['01 PRODUCT TRUTH','Exact SKU, variant, quantity, material, inclusions and limits'],
      ['02 PRICE &amp; OFFER','Current price, promotion conditions, start and end time'],
      ['03 DEMO &amp; CLAIMS','Required actions, permitted wording and supporting proof'],
      ['04 ASSETS &amp; DELIVERY','Format, duration, deadline, links, version and readback'],
      ['05 NO-GO &amp; ESCALATION','What not to say or show, and who resolves an unknown']
    ];
    return `<svg width="1600" height="880" xmlns="http://www.w3.org/2000/svg"><rect width="1600" height="880" rx="42" fill="#f5f2ff"/><text x="72" y="105" font-family="Arial,PingFang SC" font-size="43" font-weight="850" fill="#17141d">${title}</text><g transform="translate(70 165)">${rows.map((r,i)=>`<g transform="translate(0 ${i*130})"><rect width="1460" height="105" rx="24" fill="#fff"/><rect width="16" height="105" rx="8" fill="${i===4?'#ed168c':'#245bd7'}"/><text x="55" y="48" font-family="Arial,PingFang SC" font-size="23" font-weight="850" fill="#1746b8">${r[0]}</text><text x="435" y="67" font-family="Arial,PingFang SC" font-size="${zh?23:21}" fill="#37332f">${r[1]}</text></g>`).join('')}</g></svg>`;
  }
  const title=zh?'把 Creator 的问题路由到正确 Owner':'Route creator questions to the right owner';
  const cols=zh?[
    ['READY','信息已核验','达人按当前版本执行'],
    ['HOLD','事实或价格将变化','暂停拍摄，等待新版本'],
    ['ASK','出现 Brief 之外的问题','发截图和原话给指定 Owner'],
    ['STOP','触及禁区或无法证明','停止发布并升级审核']
  ]:[
    ['READY','Facts are verified','Creator executes the current version'],
    ['HOLD','A fact or price will change','Pause production for a new version'],
    ['ASK','The question is outside the brief','Send screenshot and exact wording to owner'],
    ['STOP','No-go zone or proof is missing','Do not publish; escalate review']
  ];
  return `<svg width="1600" height="760" xmlns="http://www.w3.org/2000/svg"><rect width="1600" height="760" rx="42" fill="#f5f2ff"/><text x="72" y="105" font-family="Arial,PingFang SC" font-size="43" font-weight="850" fill="#17141d">${title}</text><g transform="translate(55 190)">${cols.map((r,i)=>`<g transform="translate(${i*375} 0)"><rect width="345" height="450" rx="30" fill="#fff"/><rect width="345" height="16" rx="8" fill="${i===3?'#ed168c':'#245bd7'}"/><text x="30" y="92" font-family="Arial" font-size="28" font-weight="900" fill="#1746b8">${r[0]}</text><text x="30" y="175" font-family="Arial,PingFang SC" font-size="23" font-weight="800" fill="#17141d">${r[1]}</text><line x1="30" y1="220" x2="315" y2="220" stroke="#ddd7eb" stroke-width="3"/><text x="30" y="285" font-family="Arial,PingFang SC" font-size="${zh?21:17}" fill="#4f4a55">${r[2]}</text></g>`).join('')}</g></svg>`;
}

for(const [lang,zh] of [['en',false],['zh',true]]){
  const name=`hero-${slug}-${lang}-v1`;
  await sharp(scenePath).resize(1792,896,{fit:'cover'}).composite([{input:overlay(zh)}]).png().toFile(path.join(out,'blog',`${name}.png`));
  await sharp(path.join(out,'blog',`${name}.png`)).resize({width:1600}).jpeg({quality:90}).toFile(path.join(out,'blog/optimized',`${name}.jpg`));
  await sharp(path.join(out,'blog',`${name}.png`)).resize({width:880}).jpeg({quality:88}).toFile(path.join(out,'blog/thumbs',`${name}.jpg`));
  for(const type of ['anatomy','routing']) await sharp(Buffer.from(bodyVisual(zh,type))).png().toFile(path.join(out,'blog/q4-13-creator-brief',`${type}-${lang}-v1.png`));
}

const faqEn=[
  ['Should a BFCM creator brief contain a complete word-for-word script?','Usually no. Give creators the verified product facts, required demonstrations, approved claims, evidence links, offer conditions and no-go zones. A rigid script can hide confusion instead of resolving it.'],
  ['Can the brief say a product has the lowest price on TikTok Shop?','Only when the brand has current, supportable evidence and the exact claim is allowed. The current Content Policy identifies unsupported lowest, cheapest and best-price claims as misleading examples.'],
  ['What should happen when the campaign price changes after the brief is sent?','Issue a new version with an effective timestamp, withdraw the old price card and require readback before the creator records or posts. Never rely on an untracked chat correction.'],
  ['Does an approved product listing make every creator claim safe?','No. The current policy applies to spoken statements, on-screen text, titles, demonstrations, images and other content elements. Each claim still needs to match the product and reliable evidence.'],
  ['How should a creator handle a buyer question that is not in the brief?','Do not improvise. Save the buyer wording, send it to the named product or policy owner, and add the verified answer to the next controlled brief version.'],
  ['What is the smallest useful action today?','Choose one BFCM priority SKU and replace its long briefing deck with a one-page execution sheet: facts, offer, required demo, proof, no-go zones, owner and version.']
];
const faqZh=[
  ['BFCM 达人 Brief 要不要提供完整逐字稿？','通常不需要。应给达人经过核验的商品事实、必拍演示、允许的 Claim、证据链接、Offer 条件与禁区。过度僵硬的逐字稿反而可能掩盖真实疑问。'],
  ['Brief 可以写“TikTok Shop 全网最低价”吗？','只有品牌拥有当前、可验证的证据，而且该具体表达被允许时才能使用。当前 Content Policy 把缺乏证据的最低、最便宜、最佳价格表达列为误导示例。'],
  ['Brief 发出后活动价变了怎么办？','发布带生效时间的新版本，撤回旧价格卡，并要求达人在拍摄或发布前回读确认。不要依赖没有版本记录的聊天纠正。'],
  ['商品 Listing 已通过，达人说什么都安全吗？','不是。当前政策覆盖口播、字幕、Title、演示、图片等全部内容元素。每个 Claim 仍要匹配真实商品与可靠证据。'],
  ['买家提出 Brief 里没有的问题，达人应该怎么办？','不要临场猜测。保存买家原话，发给指定商品或政策 Owner，再把已核验答案写入下一版 Brief。'],
  ['今天最小可执行动作是什么？','选一个 BFCM Priority SKU，把冗长培训材料压缩成一页执行表：商品事实、Offer、必拍演示、证据、禁区、Owner 与版本号。']
];
const faqHtml=(items,zh)=>`<section class="faq"><h2>${zh?'常见问题':'Common questions'}</h2>${items.map(([q,a])=>`<div class="faq-item"><h3>${q}</h3><p>${a}</p></div>`).join('')}</section>`;
const P=a=>a.join('');

const EN=P([
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

const ZH=P([
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

const graph={'@context':'https://schema.org','@graph':[
  {'@type':'BlogPosting','@id':`${url}#article`,headline:enTitle,description:enDescription,inLanguage:'en-US',author:{'@type':'Organization','@id':'https://www.weglobalmarketing.com/#editorial-team',name:'WE Marketing Team'},publisher:{'@type':'Organization','@id':'https://www.weglobalmarketing.com/#organization',name:'WE Marketing',alternateName:'WEM'},image:{'@type':'ImageObject',url:`${url.replace(`/blog/${slug}`,'')}/blog/hero-${slug}-en-v1.png`,width:1792,height:896,caption:'WE Marketing TikTok Shop BFCM creator brief system'},datePublished:date,dateModified:date,mainEntityOfPage:{'@type':'WebPage','@id':url},citation:Object.values(sources),keywords:['TikTok Shop BFCM creator brief','TikTok Shop creator content policy','BFCM creator campaign']},
  {'@type':'BlogPosting','@id':`${url}?lang=zh#article`,headline:zhTitle,description:zhDescription,inLanguage:'zh-CN',translationOfWork:{'@id':`${url}#article`},author:{'@id':'https://www.weglobalmarketing.com/#editorial-team'},publisher:{'@id':'https://www.weglobalmarketing.com/#organization'},image:{'@type':'ImageObject',url:`${url.replace(`/blog/${slug}`,'')}/blog/hero-${slug}-zh-v1.png`,width:1792,height:896,caption:'WE Marketing TikTok Shop BFCM 达人 Brief 系统'},datePublished:date,dateModified:date,mainEntityOfPage:{'@type':'WebPage','@id':`${url}?lang=zh`},citation:Object.values(sources)},
  ...[[faqEn,'en-US',`${url}#faq`],[faqZh,'zh-CN',`${url}?lang=zh#faq`]].map(([items,lang,id])=>({'@type':'FAQPage','@id':id,inLanguage:lang,mainEntity:items.map(([name,text])=>({'@type':'Question',name,acceptedAnswer:{'@type':'Answer',text}}))})),
  {'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:'https://www.weglobalmarketing.com/'},{'@type':'ListItem',position:2,name:'Blog',item:'https://www.weglobalmarketing.com/blog'},{'@type':'ListItem',position:3,name:enTitle,item:url}]}
]};

const oldHtml=await fs.readFile(path.join(base,'blog/tiktok-shop-shop-tab-eligibility-three-gate-audit.html'),'utf8');
const style=oldHtml.match(/<style>[\s\S]*?<\/style>/)[0];
const html=`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><script>document.documentElement.dataset.lang=new URLSearchParams(location.search).get('lang')==='zh'?'zh':'en';document.documentElement.lang=document.documentElement.dataset.lang==='zh'?'zh-CN':'en'</script><title>${enTitle} | WE Marketing</title><meta name="description" content="${enDescription}"><link rel="canonical" href="${url}"><link rel="alternate" hreflang="en-US" href="${url}"><link rel="alternate" hreflang="zh-CN" href="${url}?lang=zh"><link rel="alternate" hreflang="x-default" href="${url}"><script type="application/ld+json">${JSON.stringify(graph)}</script>${style}</head><body><nav class="nav"><a class="logo" href="/"><img src="/assets/we-logo.png" alt="WE Marketing"></a><a href="/services">SERVICES</a><a href="/about">ABOUT</a><a href="/blog">BLOG</a><span class="spacer"></span><div class="switch"><a class="zh" href="?lang=zh">中文</a><a class="en" href="?">EN</a></div></nav><main class="wrap"><div class="tools"><a class="en" href="/blog">← BLOG</a><a class="zh" href="/blog?lang=zh">← 博客</a></div><article lang="en">${EN}</article><article lang="zh-CN">${ZH}</article></main><section class="cta"><h2 class="en">READY TO TALK<br>TO WEM?</h2><h2 class="zh">准备好和 WEM<br>一起把计划落地吗？</h2><p class="en">Turn one BFCM creator brief into controlled, evidence-backed execution.</p><p class="zh">把一份 BFCM 达人 Brief 变成受控、有证据的执行。</p><a class="en" href="https://scheduler.zoom.us/wendylin001">BOOK A DISCOVERY CALL</a><a class="zh" href="https://scheduler.zoom.us/wendylin001">预约咨询</a></section><footer class="footer"><img src="/assets/we-logo.png" alt="WE Marketing"><p class="en">WE Marketing connects strategy, creator operations, paid growth and TikTok Shop execution.</p><p class="zh">WE Marketing 帮助品牌连接策略、达人运营、付费增长与 TikTok Shop 执行。</p><p>© 2026 WE Marketing. All rights reserved.</p></footer><script>if(document.documentElement.dataset.lang==='zh'){document.title=${JSON.stringify(zhTitle+' | WE Marketing')};document.querySelector('meta[name=description]').content=${JSON.stringify(zhDescription)};document.querySelector('link[rel=canonical]').href='${url}?lang=zh'}</script></body></html>`;
await fs.writeFile(path.join(out,'blog',`${slug}.html`),html);

let list=await fs.readFile(path.join(base,'BlogList.jsx'),'utf8');
const row={slug,tags:['tiktok-shop','content-ugc','campaigns-growth'],cat:{en:'TIKTOK SHOP U.S. · BFCM CREATOR OPS',zh:'TIKTOK SHOP 美国站 · BFCM 达人运营'},title:{en:enTitle,zh:zhTitle},excerpt:{en:'Turn product truth, price, proof and no-go zones into one creator-ready execution brief.',zh:'把商品事实、价格、证据与禁区整理成达人能直接执行的一页 Brief。'},date:{en:'Oct 9, 2026',zh:'2026 年 10 月 9 日'},read:{en:'13 min read',zh:'13 分钟阅读'},image:{en:`hero-${slug}-en-v1.png`,zh:`hero-${slug}-zh-v1.png`}};
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

const sourceFiles={policy:'content-policy.html',seller:'bfcm-guide.html',creator:'bfcm-creator-guide.html'};
const reports={};
for(const [key,name] of Object.entries(sourceFiles)){const b=await fs.readFile(path.join(root,'outputs/2026-10-09-q4-13-source',name));reports[key]={url:sources[key],httpStatus:200,bytes:b.length,sha256:sha(b)};}
await fs.writeFile(path.join(root,'outputs/2026-10-09-q4-13-source-revalidation.json'),`${JSON.stringify({status:'source_revalidated',date,sources:reports,facts:['The current Content Policy applies to creator LIVEs, videos, images, titles, spoken statements, on-screen text, backgrounds and demonstrations.','Promoted content must be accurate, compliant and consistent with the product and reliable evidence.','The 2026 BFCM seller guide requires accurate, compliant and in-stock product listings for campaign participation.','The current BFCM creator guide connects participation to current eligibility, content and product quality, compliance, CHR and PPS signals.','Campaign status, prices, dates, thresholds and interfaces are volatile and require current account readback.']},null,2)}\n`);
console.log(JSON.stringify({out,version,enWords:EN.replace(/<[^>]+>/g,' ').trim().split(/\s+/).length,zhChars:ZH.replace(/<[^>]+>/g,'').replace(/\s/g,'').length}));
