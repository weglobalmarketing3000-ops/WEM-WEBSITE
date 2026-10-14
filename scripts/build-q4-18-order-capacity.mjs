import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import vm from 'node:vm';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const sharp = require('/Users/wendylin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');
const root = path.resolve(import.meta.dirname, '..');
const base = path.resolve(process.env.WEM_Q4_18_BASE || path.join(root, 'outputs/patches/2026-10-13-q4-17-qualifying-dispatch'));
const out = path.join(root, 'outputs/patches/2026-10-14-q4-18-order-capacity');
const sourceDir = path.join(root, 'outputs/2026-10-14-q4-18-source');
const scene = path.join(root, 'outputs/2026-10-14-q4-18-visuals/order-capacity-raw-scene-v1.png');
const slug = 'tiktok-shop-order-capacity-q4-demand-spike';
const date = '2026-10-14';
const url = `https://www.weglobalmarketing.com/blog/${slug}`;
const enTitle = 'Set TikTok Shop Order Capacity Before a Q4 Demand Spike Sets It for You';
const zhTitle = 'Q4 爆单前先设 TikTok Shop 订单产能，不要等平台替你限单';
const enDescription = 'Set a defensible TikTok Shop daily order capacity, define surge triggers and protect dispatch quality before a Q4 demand spike.';
const zhDescription = '在 Q4 需求高峰前设定可验证的 TikTok Shop 每日订单产能、预警触发线与履约保护动作。';
const sources = [
  'https://seller-us.tiktok.com/university/essay?knowledge_id=5941246229022506',
  'https://seller-us.tiktok.com/university/essay?identity=1&knowledge_id=3995852763301633&role=1',
  'https://seller-us.tiktok.com/university/essay?knowledge_id=7082627485452050',
  'https://seller-us.tiktok.com/university/essay?knowledge_id=26854147802894'
];
const sha = value => crypto.createHash('sha256').update(value).digest('hex');

await fs.rm(out, { recursive: true, force: true });
for (const dir of ['assets', 'blog', 'blog/optimized', 'blog/thumbs', 'blog/q4-18-capacity']) await fs.mkdir(path.join(out, dir), { recursive: true });
await fs.copyFile(path.join(base, 'assets/we-logo.png'), path.join(out, 'assets/we-logo.png'));
const logo = (await fs.readFile(path.join(out, 'assets/we-logo.png'))).toString('base64');

function esc(value) { return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;'); }

async function makeCover(lang) {
  const zh = lang === 'zh';
  const title = zh ? ['Q4 爆单前', '先设订单', '处理产能'] : ['SET ORDER', 'CAPACITY', 'BEFORE THE SPIKE'];
  const subtitle = zh ? '产能 · 触发 · 控制' : 'CAPACITY · TRIGGERS · CONTROL';
  const overlay = Buffer.from(`<svg width="1792" height="896" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="fade" x1="0" x2="1"><stop stop-color="#fffdf8" offset="0"/><stop stop-color="#fffdf8" stop-opacity=".97" offset=".42"/><stop stop-color="#fffdf8" stop-opacity="0" offset=".68"/></linearGradient></defs>
    <rect width="1792" height="896" fill="url(#fade)"/>
    <rect x="84" y="72" width="515" height="50" rx="25" fill="#e7efff"/><text x="112" y="106" font-family="Arial,PingFang SC" font-size="21" font-weight="800" fill="#1f55c7">TIKTOK SHOP U.S. · Q4 OPERATIONS</text>
    ${title.map((line, i) => `<text x="84" y="${240 + i * 90}" font-family="Arial Narrow,Arial,PingFang SC" font-size="${zh ? 74 : (i === 2 ? 61 : 72)}" font-weight="900" fill="${i === 1 ? '#245bd7' : '#17151a'}">${esc(line)}</text>`).join('')}
    <rect x="86" y="530" width="92" height="7" rx="3.5" fill="#ed168c"/><text x="84" y="592" font-family="Arial,PingFang SC" font-size="24" fill="#4f4a55">${subtitle}</text>
    <image href="data:image/png;base64,${logo}" x="82" y="700" width="145" height="105"/>
  </svg>`);
  const hero = `hero-${slug}-${lang}-v1`;
  const backdrop = await sharp(scene).resize(1792, 896, { fit: 'cover' }).png().toBuffer();
  await sharp(backdrop).composite([{ input: overlay }]).png().toFile(path.join(out, 'blog', `${hero}.png`));
  await sharp(path.join(out, 'blog', `${hero}.png`)).resize({ width: 1200 }).jpeg({ quality: 87 }).toFile(path.join(out, 'blog/optimized', `${hero}.jpg`));
  await sharp(path.join(out, 'blog', `${hero}.png`)).resize({ width: 880 }).jpeg({ quality: 83 }).toFile(path.join(out, 'blog/thumbs', `${hero}.jpg`));
}

function diagram(lang, type) {
  const zh = lang === 'zh';
  if (type === 'model') {
    const title = zh ? '用已验证产能，而不是营销预测来设上限' : 'Set the limit from proven throughput, not the forecast';
    const rows = zh ? [
      ['1', '需求预测', '了解高峰压力，但不直接等于可接单量'],
      ['2', '已验证吞吐', '过去稳定班次真实完成的拣、包、贴标与交接'],
      ['3', '瓶颈约束', '人员、工位、库存、承运商中最小的一项'],
      ['4', '恢复缓冲', '为补件、错单、系统异常与承运商延误留空间'],
      ['5', '每日订单产能', '可连续兑现承诺的安全接单上限']
    ] : [
      ['1', 'Demand forecast', 'Shows pressure, but is not a safe order limit'],
      ['2', 'Proven throughput', 'Stable pick, pack, label and handoff output'],
      ['3', 'Bottleneck constraint', 'The lowest limit across labor, stations, stock and carrier'],
      ['4', 'Recovery buffer', 'Space for errors, exceptions and carrier delay'],
      ['5', 'Daily order capacity', 'The safe ceiling the team can repeat']
    ];
    return `<svg width="1600" height="900" xmlns="http://www.w3.org/2000/svg"><rect width="1600" height="900" rx="42" fill="#f5f2ff"/><text x="70" y="100" font-family="Arial,PingFang SC" font-size="42" font-weight="850" fill="#17141d">${title}</text><g transform="translate(70 160)">${rows.map((r,i)=>`<g transform="translate(0 ${i*132})"><rect width="1460" height="108" rx="24" fill="#fff"/><circle cx="60" cy="54" r="34" fill="${i===2?'#ed168c':'#245bd7'}"/><text x="60" y="65" text-anchor="middle" font-family="Arial" font-size="28" font-weight="900" fill="#fff">${r[0]}</text><text x="125" y="48" font-family="Arial,PingFang SC" font-size="27" font-weight="850" fill="#1746b8">${r[1]}</text><text x="125" y="83" font-family="Arial,PingFang SC" font-size="22" fill="#4f4a55">${r[2]}</text></g>`).join('')}</g></svg>`;
  }
  const title = zh ? '四级触发线：从观察到事故控制' : 'Four trigger levels: from watch to incident control';
  const cols = zh ? [
    ['正常', '<75%', '照常接单', '持续记录'], ['观察', '75-90%', '加密回读', '确认排班'], ['受限', '90-100%', '限制活动', '保护高优先级 SKU'], ['事故', '>100%', '保护承诺', '升级并恢复'], ['复盘', '收班后', '核对原因与 Owner', '设置新上限']
  ] : [
    ['Normal', '<75%', 'Accept orders', 'Keep the ledger'], ['Watch', '75-90%', 'Tighten readback', 'Confirm labor'], ['Constrained', '90-100%', 'Limit promotions', 'Protect priority SKUs'], ['Incident', '>100%', 'Protect promises', 'Escalate and recover'], ['Review', 'After close', 'Set cause and owner', 'Approve next ceiling']
  ];
  return `<svg width="1600" height="760" xmlns="http://www.w3.org/2000/svg"><rect width="1600" height="760" rx="42" fill="#f5f2ff"/><text x="70" y="105" font-family="Arial,PingFang SC" font-size="42" font-weight="850" fill="#17141d">${esc(title)}</text><g transform="translate(45 190)">${cols.map((r,i)=>`<g transform="translate(${i*302} 0)"><rect width="275" height="410" rx="28" fill="#fff"/><rect width="275" height="14" rx="7" fill="${i===4?'#ed168c':'#245bd7'}"/><circle cx="50" cy="77" r="27" fill="#ece8ff"/><text x="50" y="87" text-anchor="middle" font-family="Arial" font-size="23" font-weight="900" fill="#245bd7">${i+1}</text><text x="28" y="145" font-family="Arial,PingFang SC" font-size="25" font-weight="850" fill="#1746b8">${esc(r[0])}</text><text x="28" y="210" font-family="Arial,PingFang SC" font-size="24" font-weight="800" fill="#ed168c">${esc(r[1])}</text><text x="28" y="265" font-family="Arial,PingFang SC" font-size="20" fill="#4f4a55">${esc(r[2])}</text><text x="28" y="300" font-family="Arial,PingFang SC" font-size="20" fill="#4f4a55">${esc(r[3])}</text></g>`).join('')}</g></svg>`;
}

for (const lang of ['en', 'zh']) {
  await makeCover(lang);
  for (const type of ['model', 'triggers']) await sharp(Buffer.from(diagram(lang, type))).png().toFile(path.join(out, 'blog/q4-18-capacity', `${type}-${lang}-v1.png`));
}

const faqEn = [
  ['What is TikTok Shop Order Handling Capacity?', 'It is the estimated maximum number of orders a shop can efficiently dispatch in one day. TikTok says eligible excess volume can receive adjusted delivery and dispatch timing.'],
  ['When does a capacity change take effect?', 'The current Seller University guide says changes take effect the next day, so a same-day demand spike is too late for a preventive setting change.'],
  ['Should capacity equal the sales forecast?', 'No. Base capacity on repeatable warehouse throughput, the narrowest constraint and a recovery buffer. Forecasts describe demand, not execution ability.'],
  ['What happens when orders exceed the set capacity?', 'TikTok says eligible orders above capacity may receive automatic timing extensions. Orders above three times capacity may trigger surge protection that paces incoming orders.'],
  ['Was the new Logistics and Fulfillment Score live on October 14, 2026?', 'No. The official page described September 21 through October 14 as a preview-only trial and scheduled the official launch for October 15.'],
  ['What is the first action for a seller preparing for Q4?', 'Measure one stable day from paid order to carrier handoff, find the smallest reliable bottleneck and set a conservative next-day capacity before increasing promotion.']
];
const faqZh = [
  ['什么是 TikTok Shop Order Handling Capacity？', '它是店铺一天内能够高效完成发货的预计最大订单量。TikTok 说明，符合条件的超量订单可能获得自动调整的预计送达与发货时限。'],
  ['修改产能什么时候生效？', '当前 Seller University 指南说明修改在次日生效，所以等到当天爆单后再改，已经太晚。'],
  ['每日产能应该等于销售预测吗？', '不应该。产能应基于可重复的仓库吞吐、最窄瓶颈与恢复缓冲；预测描述需求，不代表执行能力。'],
  ['订单超过设置产能会怎样？', 'TikTok 说明，符合条件的超量订单可能自动延长时限；当订单超过产能三倍时，Surge Protection 可能调节新订单进入速度。'],
  ['新版 Logistics and Fulfillment Score 在 2026 年 10 月 14 日已经正式上线吗？', '没有。官方页面把 9 月 21 日至 10 月 14 日定义为仅预览的试运行，并计划在 10 月 15 日正式上线。'],
  ['Q4 前卖家现在最该做什么？', '用一个稳定工作日测量从付款到承运商交接的真实吞吐，找出最小瓶颈，保留恢复缓冲，并在加大促销前设置次日可执行产能。']
];
const faqHtml = (items, zh) => `<section class="faq"><h2>${zh ? '常见问题' : 'Frequently asked questions'}</h2>${items.map(([q,a])=>`<div class="faq-item"><h3>${q}</h3><p>${a}</p></div>`).join('')}</section>`;

const EN = [
  `<p class="eyebrow">TIKTOK SHOP U.S. · Q4 OPERATIONS</p><h1>${enTitle}</h1><img class="hero" src="/blog/hero-${slug}-en-v1.png" alt="${enTitle}"><p class="byline">WE Marketing Team · Oct 14, 2026 · 17 min read</p>`,
  `<p><strong>Direct answer:</strong> set TikTok Shop Order Handling Capacity to the maximum daily order volume your operation can repeatedly pick, pack, label and hand to the correct carrier without borrowing from tomorrow. Do it before the promotion starts. TikTok's current guide says capacity changes take effect the next day, so a same-day reaction cannot protect the first surge.</p>`,
  `<p>The number should not be a sales target. It is a fulfillment promise backed by observed throughput. A forecast may say 2,000 orders are possible, but if the smallest stable constraint can finish only 900 orders with a recovery buffer, 900 is the defensible ceiling until evidence changes. Capacity protects customer promises, warehouse control and the next day's ability to recover.</p>`,
  `<blockquote><p><strong>Operating rule:</strong> demand can be aspirational. Capacity must be proven. Set the ceiling from the narrowest real constraint and change it only after a full native readback.</p></blockquote>`,
  `<h2>What the official capacity setting does</h2><p>TikTok Shop describes daily order handling capacity as the estimated maximum number of orders a shop can efficiently dispatch in a day. The feature is intended to help sellers manage large volume. When eligible order volume exceeds the configured capacity, estimated delivery timing and dispatch requirements may be extended automatically. The setting is an operating control, not a guarantee that every downstream exception disappears.</p>`,
  `<p>The same guidance states that changes take effect on the next day. That detail determines the planning sequence. The team must set capacity before a campaign, LIVE, creator drop or seasonal event can create the spike. If orders already arrived, changing the number may support tomorrow, but today's queue still needs an incident plan with owners, cutoffs and customer-promise review.</p>`,
  `<h2>Build capacity from four constraints</h2><p>Start with stable paid orders and follow them to carrier handoff. Measure the slowest dependable output across inventory availability, picking labor, packing stations, label generation and carrier collection. Do not average away the bottleneck. If packing completes 1,200 parcels but the last reliable carrier pickup accepts 850, the operating capacity is constrained near 850, not 1,200.</p>`,
  `<p>Then subtract a recovery buffer. The buffer absorbs wrong-item checks, damaged packaging, address issues, label failures, inventory discrepancies, shift changes and missed pickups. A team running at exactly 100 percent of theoretical output has no room to repair exceptions. The safer capacity is repeatable under ordinary variance, not achievable once during an unusually clean shift.</p>`,
  `<figure><img src="/blog/q4-18-capacity/model-en-v1.png" alt="Five-part TikTok Shop daily order capacity model"><figcaption>Forecast demand is an input. Proven throughput, the narrowest constraint and a recovery buffer determine the safe ceiling.</figcaption></figure>`,
  `<h2>Separate orders, units and complexity</h2><p>One order is not always one unit or one touch. A single-SKU parcel may require seconds, while a multi-item order can require bin travel, substitutions, protective packing and a larger label workflow. Capacity should be tested against the real mix. Record orders per hour, units per order, multi-line share, exception share and completed carrier handoffs.</p>`,
  `<p>If the product mix changes during Q4, recalculate before assuming yesterday's output still applies. Bundles, fragile items, regulated categories and gift packaging can consume additional time. A promotion focused on the easiest hero SKU may raise order capacity; a promotion mixing long-tail variants may lower it. Keep the capacity decision linked to assortment and warehouse route.</p>`,
  `<h2>Use trigger levels instead of one red line</h2><p>A single limit tells the team when it is already full. A trigger ladder creates time to act. Below 75 percent of proven capacity, run normally and maintain the ledger. From 75 to 90 percent, confirm inventory, labor, supplies and carrier slots. From 90 to 100 percent, reduce optional demand pressure and protect the highest-confidence SKUs. Above 100 percent, treat the queue as an incident.</p>`,
  `<p>These percentages are a WEM operating framework, not TikTok policy thresholds. They should be calibrated to the seller's variation and recovery speed. The point is ownership. Every level needs a named decision maker, allowed actions, evidence source and next readback time. Without those fields, a dashboard color is decoration rather than control.</p>`,
  `<figure><img src="/blog/q4-18-capacity/triggers-en-v1.png" alt="Four order-capacity trigger levels and a review step"><figcaption>Trigger levels convert utilization into predefined owners and actions before the queue becomes an incident.</figcaption></figure>`,
  `<h2>Know what happens above capacity</h2><p>TikTok's current Order Handling Capacity guide says eligible orders that exceed the daily setting can receive automatic estimated-delivery and Dispatch SLA extensions. The guide also says that when orders exceed three times the configured capacity, surge protection may pace incoming orders. Those mechanisms help manage pressure, but they are not a reason to set an unrealistically low or high number.</p>`,
  `<p>A low setting can unnecessarily restrict growth and distort planning. A high setting can leave the team with promises it cannot execute. The correct number is the smallest defensible ceiling that still reflects the operation's current capability. Preserve the date, input data, approver and reason for every change so performance can be compared with the decision that created it.</p>`,
  `<h2>Protect the fulfillment promise, not just the order count</h2><p>The current U.S. Fulfillment Policy says sellers using Order Handling Capacity can receive one additional business day of custom handling time for orders above daily capacity. Eligibility and exact behavior must be verified in the current Seller Center and order record. The seller still owns accurate preparation, timely handoff and the buyer experience.</p>`,
  `<p>Capacity control therefore needs promise control. Review the actual estimated delivery date, custom handling time, dispatch requirement, carrier route and later tracking movement for affected orders. Do not assume an extension occurred merely because the queue exceeded an internal limit. Close the loop on native order readback.</p>`,
  `<h2>Keep the October 14 score boundary accurate</h2><p>On this article's publication date, TikTok's new Logistics and Fulfillment Score version was not yet officially launched. The official page described September 21 through October 14, 2026 as a trial run in which the new score was available for preview only and current benefits remained based on the old version. It scheduled official launch for October 15, with phased rollout and eligibility conditions.</p>`,
  `<p>That timing matters. This playbook does not claim October 15 score benefits were live on October 14. Sellers should verify the current score version, eligibility, metrics and benefits in their own account before acting. Capacity is still useful as an operational control, but no future score threshold should be treated as current evidence one day early.</p>`,
  `<h2>Run a daily Q4 capacity cadence</h2><ol><li><strong>Morning baseline.</strong> Read paid orders, backlog, inventory holds, labor plan, packing stations, supplies and carrier appointments.</li><li><strong>Midday forecast.</strong> Compare order velocity with the proven hourly curve and trigger ladder.</li><li><strong>Pre-cutoff gate.</strong> Confirm the physical batch, label success and carrier handoff capacity.</li><li><strong>Exception split.</strong> Separate inventory, labor, system, package and carrier constraints.</li><li><strong>Next-day decision.</strong> Approve any capacity change early enough for the next-day effective time.</li><li><strong>Close on readback.</strong> Record completed handoffs, native order timing and unresolved owners.</li></ol>`,
  `<h2>A hypothetical operating example</h2><p>This is a planning example, not a client result. A warehouse has shown repeatable output of 960 orders per day. Packing stations can handle 1,100, inventory can support 1,400, but the reliable carrier handoff slot is 900. The team keeps a 10 percent recovery buffer, so it sets daily capacity at 810 before a creator campaign.</p>`,
  `<p>At noon, paid orders reach 620 and velocity is accelerating. The team enters the watch level, adds a packing shift and confirms the carrier slot. At 760, it pauses a low-confidence bundle and protects the hero SKU. At close, 804 orders are handed off with six exceptions assigned to named owners. The next-day setting changes only after those six orders and the confirmed carrier capacity are read back.</p>`,
  `<h2>The smallest useful next action</h2><p>Take one recent stable operating day. Write down paid orders, completed packages, successful labels, parcels handed to the carrier and unresolved exceptions. The smallest reliable number, minus a recovery buffer, is the first capacity candidate. Record the calculation and approver, then set it before the next demand event rather than during it.</p>`,
  `<h2>Source notes and execution boundary</h2><p>This original WE Marketing capacity-control framework draws on current TikTok Shop U.S. Seller University materials for <a href="${sources[0]}">Order Handling Capacity</a>, the <a href="${sources[1]}">Fulfillment Policy</a>, the <a href="${sources[2]}">Logistics and Fulfillment Score</a> and the <a href="${sources[3]}">BFCM Seller Guide</a>, revalidated October 14, 2026. Official materials define current platform behavior and seller duties. WEM adds the bottleneck model, recovery buffer, trigger ladder and decision ledger. Features, eligibility, thresholds, interfaces and policy wording can change. Verify the current U.S. Seller Center, order record and carrier plan before execution.</p>`,
  faqHtml(faqEn, false),
  `<h2>Related WEM guides</h2><section class="related-grid"><a href="/blog/tiktok-shop-qualifying-dispatch-event"><strong>Qualifying dispatch events</strong><span>Separate platform events from physical carrier handoff.</span></a><a href="/blog/tiktok-shop-collection-warehouse-handoff"><strong>Collection warehouse handoff SOP</strong><span>Control cutoff, scan, count and carrier exceptions.</span></a><a href="/blog/tiktok-shop-peak-season-shipping-margin"><strong>Peak-season shipping margin</strong><span>Put real shipping cost into SKU economics.</span></a></section>`
].join('');

const ZH = [
  `<p class="eyebrow">TIKTOK SHOP 美国站 · Q4 运营</p><h1>${zhTitle}</h1><img class="hero" src="/blog/hero-${slug}-zh-v1.png" alt="${zhTitle}"><p class="byline">WE Marketing Team · 2026 年 10 月 14 日 · 17 分钟阅读</p>`,
  `<p><strong>直接答案：</strong>TikTok Shop Order Handling Capacity 应设为团队每天能够稳定完成拣货、打包、贴标并交给正确承运商的最大订单量，而且必须在促销开始前完成设置。TikTok 当前指南说明，产能修改在次日生效，所以等到当天爆单后再改，无法保护第一波订单。</p><p>这个数字不是销售目标，而是由真实吞吐支持的履约承诺。预测可以显示可能出现 2,000 单，但如果最窄且稳定的约束只能完成 900 单，扣除恢复缓冲后的安全上限才是可辩护产能。容量管理保护的不只是今日订单，还包括买家承诺、仓库秩序与第二天恢复能力。</p>`,
  `<blockquote><p><strong>运营规则：</strong>需求可以进取，产能必须有证据。用最窄的真实约束设上限，只在完成原生回读后修改。</p></blockquote>`,
  `<h2>官方产能设置解决什么问题</h2><p>TikTok Shop 把每日 Order Handling Capacity 定义为店铺一天内能够高效发出的预计最大订单量，用来帮助卖家管理大批量订单。当符合条件的订单量超过设置产能时，平台可能自动调整预计送达时间与 Dispatch SLA。它是运营控制，不代表后续每一种异常都会自动消失。</p><p>同一指南明确写到，修改在次日生效。这决定了正确顺序：团队要在 Campaign、LIVE、Creator Drop 或季节活动带来高峰之前完成设置。如果订单已经进入，当天队列仍需要事故处理方案，包括准确 Owner、Cutoff、买家承诺检查和下一次回读。</p>`,
  `<h2>从四类真实约束计算产能</h2><p>先选择稳定的已付款订单，从支付一路测到 Carrier Handoff。比较库存可用量、拣货人员、打包工位、面单生成和承运商收件能力，找出最小且可重复的输出。不要用平均数掩盖瓶颈。即使打包能完成 1,200 件，如果稳定 Pickup 只能接收 850 件，运营产能就接近 850，而不是 1,200。</p><p>然后扣除恢复缓冲，用来吸收错品核对、包装损坏、地址异常、面单失败、库存差异、交班与 Missed Pickup。如果团队长期按理论产能 100% 运转，就没有空间修复任何异常。安全产能应在普通波动下可以重复，而不是某个异常顺利班次创造的一次性纪录。</p>`,
  `<figure><img src="/blog/q4-18-capacity/model-zh-v1.png" alt="TikTok Shop 每日订单产能五步模型"><figcaption>需求预测只是输入，已验证吞吐、最窄约束与恢复缓冲才决定安全上限。</figcaption></figure>`,
  `<h2>分开订单数、件数与复杂度</h2><p>一个 Order 不一定只包含一件商品或一次操作。单 SKU 包裹可能很快完成，多商品订单却需要更多拣货路径、替换确认、防护包装与面单处理。产能测试必须反映真实 Mix，并记录每小时订单数、每单件数、多行订单比例、异常比例与最终 Carrier Handoff 数量。</p><p>如果 Q4 商品组合发生变化，就要重新计算，不能默认昨天吞吐仍然有效。Bundle、Fragile Item、特殊品类与 Gift Packaging 都会消耗额外时间。主推简单 Hero SKU 可能提高产能，混合大量长尾 Variation 可能降低产能。每次 Capacity Decision 都应连接到具体 Assortment 与 Warehouse Route。</p>`,
  `<h2>不要只设一条红线，要设触发阶梯</h2><p>单一上限只能告诉团队已经满了，触发阶梯才能提前行动。低于已验证产能 75% 时正常运行并持续记录；75% 至 90% 进入观察，确认库存、人员、耗材与承运商时段；90% 至 100% 进入受限，减少非必要需求压力，保护高置信 SKU；超过 100% 则按事故处理。</p><p>这些百分比是 WEM 运营框架，不是 TikTok 官方政策门槛，应按店铺波动与恢复速度校准。关键不是颜色，而是责任。每一级都必须有明确决策人、允许动作、证据来源与下一次回读时间，否则 Dashboard 只是装饰，无法控制队列。</p>`,
  `<figure><img src="/blog/q4-18-capacity/triggers-zh-v1.png" alt="订单产能四级触发线与复盘步骤"><figcaption>触发阶梯把利用率转换成预先定义的 Owner 与动作，避免队列直接进入事故。</figcaption></figure>`,
  `<h2>理解超过产能后的平台行为</h2><p>TikTok 当前 Order Handling Capacity 指南说明，符合条件且超过每日设置产能的订单，可能自动获得预计送达与 Dispatch SLA 调整。指南也写到，当订单超过所设产能三倍时，Surge Protection 可能调节新订单进入速度。这些机制可以帮助管理压力，但不能成为故意把产能设得过低或过高的理由。</p><p>设置过低会不必要地限制增长并扭曲计划；设置过高则会留下无法兑现的承诺。正确数字是能够反映当前能力的最小可辩护上限。每次修改都要保存日期、输入数据、批准人和理由，才能把最终表现与当时决策对应起来。</p>`,
  `<h2>保护履约承诺，而不只是订单数量</h2><p>当前美国站 Fulfillment Policy 说明，使用 Order Handling Capacity 的卖家，对于超过每日产能的订单，Custom Handling Time 可以增加一个工作日。是否符合条件以及准确表现，必须以当前 Seller Center 与单笔订单原生记录为准。卖家仍负责准确备货、及时交接与买家体验。</p><p>因此，产能控制必须连接 Promise Control。逐单查看实际 Estimated Delivery Date、Custom Handling Time、Dispatch Requirement、Carrier Route 与后续 Tracking Movement。不要因为队列超过内部上限，就假设平台已经给出延期。只有原生回读才能关闭这个判断。</p>`,
  `<h2>准确处理 10 月 14 日的 Score 时间边界</h2><p>在本文发布日期，TikTok 新版 Logistics and Fulfillment Score 尚未正式上线。官方页面把 2026 年 9 月 21 日至 10 月 14 日定义为 Trial Run，新版分数仅供预览，现有权益仍按旧版计算；官方计划在 10 月 15 日正式上线，并注明会分阶段推出且需要符合资格。</p><p>这个日期边界很重要。本文不会把 10 月 15 日的 Score Benefits 写成 10 月 14 日已经生效。卖家执行前应在自己的账号核对当前 Score Version、资格、指标与权益。Capacity 仍然是有效运营控制，但任何未来门槛都不能提前一天被当成当前事实。</p>`,
  `<h2>每天运行一套 Q4 产能节奏</h2><ol><li><strong>早班基线。</strong>回读 Paid Orders、Backlog、库存冻结、人员、工位、耗材与 Carrier Appointment。</li><li><strong>午间预测。</strong>把订单速度与已验证小时曲线和触发阶梯比较。</li><li><strong>截单前关口。</strong>确认实体批次、面单成功率与承运商接收能力。</li><li><strong>异常拆分。</strong>分开库存、人员、系统、包裹与承运商约束。</li><li><strong>次日决策。</strong>尽早批准修改，满足次日生效时间。</li><li><strong>只按回读关闭。</strong>记录完成交接、原生订单时限与未解决 Owner。</li></ol>`,
  `<h2>一个假设运营案例</h2><p>以下是计划示例，不是客户结果。某仓库已证明每天可重复完成 960 单；Packing Station 能处理 1,100 单，库存支持 1,400 单，但稳定 Carrier Handoff 只有 900 单。团队保留 10% 恢复缓冲，因此在 Creator Campaign 前把每日产能设为 810 单。</p><p>中午 Paid Orders 达到 620 且速度继续上升，团队进入观察级，增加打包班次并再次确认 Carrier Slot。达到 760 单时，暂停一个低置信 Bundle，保护 Hero SKU。收班时 804 单完成交接，六个异常都有准确 Owner。只有在这六单与次日承运商能力完成回读后，团队才修改下一天设置。</p>`,
  `<h2>现在就做的最小动作</h2><p>选择最近一个稳定工作日，写下 Paid Orders、完成包裹、成功面单、实际交给承运商的包裹与未解决异常。最小的可靠数字扣除恢复缓冲，就是第一个 Capacity Candidate。保存计算过程与批准人，并在下一次需求活动前完成设置，不要等爆单后再补救。</p>`,
  `<h2>来源说明与执行边界</h2><p>这套 WE Marketing 产能控制框架基于当前 TikTok Shop 美国站 Seller University 的 <a href="${sources[0]}">Order Handling Capacity</a>、<a href="${sources[1]}">Fulfillment Policy</a>、<a href="${sources[2]}">Logistics and Fulfillment Score</a> 与 <a href="${sources[3]}">BFCM Seller Guide</a>，并于 2026 年 10 月 14 日重新核验。官方资料定义平台行为与卖家责任；WEM 增加瓶颈模型、恢复缓冲、触发阶梯与决策账。功能、资格、阈值、界面和政策文字都可能变化，执行前应核对当前美国站 Seller Center、订单记录与承运商计划。</p>`,
  faqHtml(faqZh, true),
  `<h2>相关 WEM 指南</h2><section class="related-grid"><a href="/blog/tiktok-shop-qualifying-dispatch-event?lang=zh"><strong>Qualifying Dispatch Event</strong><span>分开平台事件与实体承运商交接。</span></a><a href="/blog/tiktok-shop-collection-warehouse-handoff?lang=zh"><strong>Collection 仓库交接 SOP</strong><span>控制截单、扫描、数量与承运商异常。</span></a><a href="/blog/tiktok-shop-peak-season-shipping-margin?lang=zh"><strong>旺季物流贡献利润</strong><span>把真实物流成本放回 SKU 经济模型。</span></a></section>`
].join('');

const graph = {'@context':'https://schema.org','@graph':[
  {'@type':'BlogPosting','@id':`${url}#article`,headline:enTitle,description:enDescription,inLanguage:'en-US',author:{'@type':'Organization','@id':'https://www.weglobalmarketing.com/#editorial-team',name:'WE Marketing Team'},publisher:{'@type':'Organization','@id':'https://www.weglobalmarketing.com/#organization',name:'WE Marketing',alternateName:'WEM'},image:{'@type':'ImageObject',url:`https://www.weglobalmarketing.com/blog/hero-${slug}-en-v1.png`,width:1792,height:896},datePublished:date,dateModified:date,mainEntityOfPage:{'@type':'WebPage','@id':url},citation:sources,keywords:['TikTok Shop order handling capacity','Q4 fulfillment','surge protection','daily order capacity']},
  {'@type':'BlogPosting','@id':`${url}?lang=zh#article`,headline:zhTitle,description:zhDescription,inLanguage:'zh-CN',translationOfWork:{'@id':`${url}#article`},author:{'@id':'https://www.weglobalmarketing.com/#editorial-team'},publisher:{'@id':'https://www.weglobalmarketing.com/#organization'},image:{'@type':'ImageObject',url:`https://www.weglobalmarketing.com/blog/hero-${slug}-zh-v1.png`,width:1792,height:896},datePublished:date,dateModified:date,mainEntityOfPage:{'@type':'WebPage','@id':`${url}?lang=zh`},citation:sources},
  ...[[faqEn,'en-US',`${url}#faq`],[faqZh,'zh-CN',`${url}?lang=zh#faq`]].map(([items,lang,id])=>({'@type':'FAQPage','@id':id,inLanguage:lang,mainEntity:items.map(([name,text])=>({'@type':'Question',name,acceptedAnswer:{'@type':'Answer',text}}))})),
  {'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:'https://www.weglobalmarketing.com/'},{'@type':'ListItem',position:2,name:'Blog',item:'https://www.weglobalmarketing.com/blog'},{'@type':'ListItem',position:3,name:enTitle,item:url}]}
]};

const oldHtml = await fs.readFile(path.join(base, 'blog/tiktok-shop-qualifying-dispatch-event.html'), 'utf8');
const style = oldHtml.match(/<style>[\s\S]*?<\/style>/)[0];
const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><script>document.documentElement.dataset.lang=new URLSearchParams(location.search).get('lang')==='zh'?'zh':'en';document.documentElement.lang=document.documentElement.dataset.lang==='zh'?'zh-CN':'en'</script><title>${enTitle} | WE Marketing</title><meta name="description" content="${enDescription}"><link rel="canonical" href="${url}"><link rel="alternate" hreflang="en-US" href="${url}"><link rel="alternate" hreflang="zh-CN" href="${url}?lang=zh"><link rel="alternate" hreflang="x-default" href="${url}"><script type="application/ld+json">${JSON.stringify(graph)}</script>${style}</head><body><nav class="nav"><a class="logo" href="/"><img src="/assets/we-logo.png" alt="WE Marketing"></a><span class="spacer"></span><a href="/">OUR SERVICES</a><a href="/showcase">OUR WORK</a><a href="/blog">BLOG</a><span class="switch"><a class="en" href="${url}">EN</a><a class="zh" href="${url}?lang=zh">中文</a></span></nav><main class="wrap"><div class="tools"><a class="en" href="/blog">← BLOG</a><a class="zh" href="/blog?lang=zh">← 博客</a></div><article lang="en">${EN}</article><article lang="zh-CN">${ZH}</article></main><section class="cta"><h2 class="en">READY TO TALK<br>TO WEM?</h2><h2 class="zh">准备好和 WEM<br>一起把计划落地吗？</h2><p class="en">Turn Q4 demand into a capacity plan the warehouse can actually keep.</p><p class="zh">把 Q4 需求转成仓库真正能够兑现的产能计划。</p><a class="en" href="https://scheduler.zoom.us/wendylin001">BOOK A DISCOVERY CALL</a><a class="zh" href="https://scheduler.zoom.us/wendylin001">预约咨询</a></section><footer class="footer"><img src="/assets/we-logo.png" alt="WE Marketing"><p class="en">WE Marketing connects strategy, creator operations, paid growth and TikTok Shop execution.</p><p class="zh">WE Marketing 帮助品牌连接策略、达人运营、付费增长与 TikTok Shop 执行。</p><p>© 2026 WE Marketing. All rights reserved.</p></footer><script>if(document.documentElement.dataset.lang==='zh'){document.title=${JSON.stringify(zhTitle+' | WE Marketing')};document.querySelector('meta[name=description]').content=${JSON.stringify(zhDescription)};document.querySelector('link[rel=canonical]').href='${url}?lang=zh'}</script></body></html>`;
await fs.writeFile(path.join(out, 'blog', `${slug}.html`), html);

let list = await fs.readFile(path.join(base, 'BlogList.jsx'), 'utf8');
const row = {slug,tags:['tiktok-shop','shop-operations'],cat:{en:'TIKTOK SHOP U.S. · Q4 OPERATIONS',zh:'TIKTOK SHOP 美国站 · Q4 运营'},title:{en:enTitle,zh:zhTitle},excerpt:{en:'Set a defensible daily order ceiling before Q4 demand outruns fulfillment.',zh:'在 Q4 需求超过履约能力前，先设定有证据的每日订单上限。'},date:{en:'Oct 14, 2026',zh:'2026 年 10 月 14 日'},read:{en:'17 min read',zh:'17 分钟阅读'},image:{en:`hero-${slug}-en-v1.png`,zh:`hero-${slug}-zh-v1.png`}};
list = list.replace('const BLOG_POSTS = [', `const BLOG_POSTS = [${JSON.stringify(row).replace(/"([A-Za-z_$][\w$]*)":/g,'$1:')},`);
await fs.writeFile(path.join(out, 'BlogList.jsx'), list);
const sandbox = {}; vm.createContext(sandbox); vm.runInContext(await fs.readFile(path.join(root, '.cache/babel-standalone-7.29.0.min.js'),'utf8'), sandbox);
const compiled = sandbox.Babel.transform(list,{presets:[['react',{runtime:'classic'}]],compact:true,minified:true,sourceType:'script'}).code+'\n';
await fs.writeFile(path.join(out, 'BlogList.compiled.js'), compiled);
const version = sha(compiled).slice(0,12);
const index = await fs.readFile(path.join(base,'blog.html'),'utf8');
await fs.writeFile(path.join(out,'blog.html'),index.replace(/BlogList\.compiled\.js\?v=[^"']+/,`BlogList.compiled.js?v=${version}`));
let sitemap = await fs.readFile(path.join(base,'sitemap.xml'),'utf8');
await fs.writeFile(path.join(out,'sitemap.xml'),sitemap.replace('</urlset>',`<url><loc>${url}</loc><lastmod>${date}</lastmod></url><url><loc>${url}?lang=zh</loc><lastmod>${date}</lastmod></url></urlset>`));
await fs.writeFile(path.join(out,'llms.txt'),(await fs.readFile(path.join(base,'llms.txt'),'utf8'))+`\n- ${enTitle}: ${url}\n  - 中文：${url}?lang=zh\n`);

const sourceFiles = ['order-handling-capacity.html','fulfillment-policy.html','logistics-fulfillment-score.html','bfcm-guide.html'];
const sourceReport = {status:'source_revalidated',date,sources:[]};
for (const file of sourceFiles) { const bytes=await fs.readFile(path.join(sourceDir,file)); sourceReport.sources.push({file,bytes:bytes.length,sha256:sha(bytes)}); }
sourceReport.facts = ['Daily order handling capacity is the estimated maximum order volume a shop can efficiently dispatch in one day.','Capacity-setting changes take effect the next day.','Eligible excess volume may receive automatic timing extensions, while volume above three times capacity may trigger surge protection.','The new Logistics and Fulfillment Score was preview-only through October 14, 2026 and scheduled to launch October 15.','WEM adds a bottleneck model, recovery buffer, trigger ladder and daily capacity cadence.'];
await fs.writeFile(path.join(sourceDir,'metadata.json'),`${JSON.stringify(sourceReport,null,2)}\n`);
console.log(JSON.stringify({out,version,files:(await fs.readdir(out,{recursive:true})).length,enWords:EN.replace(/<[^>]+>/g,' ').trim().split(/\s+/).length,zhChars:ZH.replace(/<[^>]+>/g,'').replace(/\s/g,'').length},null,2));
