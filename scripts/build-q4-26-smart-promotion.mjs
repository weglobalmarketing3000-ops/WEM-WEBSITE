import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import vm from 'node:vm';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const sharp = require('/Users/wendylin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');
const root = path.resolve(import.meta.dirname, '..');
const base = path.join(root, 'outputs/2026-10-22-current-live-baseline/ui_kits/website');
const out = path.join(root, 'outputs/patches/2026-10-22-q4-26-smart-promotion');
const slug = 'tiktok-shop-smart-promotion-performance-cost';
const date = '2026-10-22';
const url = `https://www.weglobalmarketing.com/blog/${slug}`;
const enTitle = 'TikTok Shop Smart Promotion: Read Performance and Cost Before You Call It Growth';
const zhTitle = 'TikTok Shop Smart Promotion 怎么看：先读效果和成本，再判断是不是增长';
const enDescription = 'Use a baseline, attribution-overlap check, settlement-cost readback and contribution review to evaluate TikTok Shop Smart Promotion.';
const zhDescription = '用基线、归因重叠、结算成本读回和贡献利润复核，判断 TikTok Shop Smart Promotion 是否带来真实增长。';
const sources = {
  faq: 'https://seller-us.tiktok.com/university/essay?knowledge_id=4827354015483691&lang=en',
  performance: 'https://seller-us.tiktok.com/university/essay?knowledge_id=386652959082253&lang=en',
  spending: 'https://seller-us.tiktok.com/university/essay?knowledge_id=1898073370461966&lang=en',
};
const sha = (value) => crypto.createHash('sha256').update(value).digest('hex');
const esc = (value) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

await fs.rm(out, { recursive: true, force: true });
for (const dir of ['assets', 'blog', 'blog/optimized', 'blog/thumbs', 'blog/q4-26-smart-promotion']) await fs.mkdir(path.join(out, dir), { recursive: true });
for (const file of ['assets/we-logo.png']) await fs.copyFile(path.join(base, file), path.join(out, file));

const sceneData = (await fs.readFile(path.join(root, 'outputs/2026-10-22-q4-26-raw-scene-v1.png'))).toString('base64');
const logoData = (await fs.readFile(path.join(out, 'assets/we-logo.png'))).toString('base64');
function coverSvg(zh = false) {
  const lines = zh ? ['先读成本', '再看增长'] : ['READ GROWTH', 'AFTER COST'];
  const subtitle = zh ? '先定基线，再拆重叠，最后看贡献' : 'BASELINE. OVERLAP. SETTLEMENT. CONTRIBUTION.';
  return `<svg width="1792" height="896" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bg" x2="1"><stop stop-color="#fffdf8"/><stop offset="1" stop-color="#ece7ff"/></linearGradient><filter id="shadow" x="-20%" y="-20%" width="150%" height="160%"><feDropShadow dx="0" dy="20" stdDeviation="22" flood-color="#5b4aa0" flood-opacity=".18"/></filter></defs><rect width="1792" height="896" fill="url(#bg)"/><path d="M1080 0h712v896H920c190-250 260-620 160-896z" fill="#f1edff"/><rect x="82" y="76" width="522" height="52" rx="26" fill="#e7edff"/><circle cx="110" cy="102" r="9" fill="#245bd7"/><text x="133" y="111" font-family="Arial,PingFang SC,sans-serif" font-size="21" font-weight="800" fill="#1746b8">${zh ? 'TIKTOK SHOP 美国站 / SMART PROMOTION' : 'TIKTOK SHOP U.S. / SMART PROMOTION'}</text><text x="82" y="285" font-family="Arial Narrow,Arial,PingFang SC,sans-serif" font-size="88" font-weight="900" fill="#17151a">${esc(lines[0])}</text><text x="82" y="390" font-family="Arial Narrow,Arial,PingFang SC,sans-serif" font-size="88" font-weight="900" fill="#245bd7">${esc(lines[1])}</text><rect x="84" y="458" width="90" height="6" rx="3" fill="#ed168c"/><text x="82" y="525" font-family="Arial,PingFang SC,sans-serif" font-size="22" font-weight="700" fill="#37332f">${esc(subtitle)}</text><image href="data:image/png;base64,${logoData}" x="78" y="692" width="150" height="110" preserveAspectRatio="xMidYMid meet"/><image href="data:image/png;base64,${sceneData}" x="790" y="80" width="930" height="750" preserveAspectRatio="xMidYMid meet" filter="url(#shadow)"/></svg>`;
}
for (const [lang, zh] of [['en', false], ['zh', true]]) {
  const name = `hero-${slug}-${lang}-v1.png`;
  const png = await sharp(Buffer.from(coverSvg(zh))).png().toBuffer();
  await fs.writeFile(path.join(out, 'blog', name), png);
  await sharp(png).resize(1280, 640, { fit: 'cover' }).jpeg({ quality: 90, chromaSubsampling: '4:4:4' }).toFile(path.join(out, 'blog/optimized', name.replace('.png', '.jpg')));
  await sharp(png).resize(880, 440, { fit: 'cover' }).jpeg({ quality: 88, chromaSubsampling: '4:4:4' }).toFile(path.join(out, 'blog/thumbs', name.replace('.png', '.jpg')));
}

function frameworkSvg(zh = false) {
  const title = zh ? '判断增长的四步复核' : 'Four readbacks before you call it growth';
  const cards = zh ? [
    ['01 基线', '先记录未参加时的订单、GMV、退款与原有流量成本。'],
    ['02 重叠', '把 Smart Promotion、达人与广告的归因标记当作不同视角，不直接相加。'],
    ['03 结算', '订单页优惠是消费者权益，实际卖家成本以结算明细为准。'],
    ['04 贡献', '从增量毛利中扣除商品、履约、退货与推广成本，再决定是否扩量。'],
  ] : [
    ['01 BASELINE', 'Record orders, GMV, refunds and existing traffic costs before participation.'],
    ['02 OVERLAP', 'Treat Smart Promotion, creator and ad attribution as different views, not additive sales.'],
    ['03 SETTLEMENT', 'The order discount is a buyer benefit. Read actual seller cost in settlement detail.'],
    ['04 CONTRIBUTION', 'Subtract product, fulfillment, return and promotion costs from incremental gross profit.'],
  ];
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1400" height="700" viewBox="0 0 1400 700"><rect width="1400" height="700" rx="34" fill="#fff"/><text x="64" y="84" font-family="Arial,PingFang SC" font-size="40" font-weight="800" fill="#171717">${esc(title)}</text><rect x="64" y="112" width="150" height="6" rx="3" fill="#ed168c"/>${cards.map(([head, body], i) => { const x = 64 + (i % 2) * 650; const y = 160 + Math.floor(i / 2) * 235; return `<g><rect x="${x}" y="${y}" width="610" height="195" rx="24" fill="${i % 2 ? '#fbf9ff' : '#f1eeff'}" stroke="#d8d1ef"/><circle cx="${x + 55}" cy="${y + 54}" r="28" fill="${i % 2 ? '#ed168c' : '#245bd7'}"/><text x="${x + 98}" y="${y + 62}" font-family="Arial,PingFang SC" font-size="24" font-weight="800" fill="#171717">${esc(head)}</text><foreignObject x="${x + 34}" y="${y + 98}" width="540" height="78"><div xmlns="http://www.w3.org/1999/xhtml" style="font:18px Arial,'PingFang SC';line-height:1.45;color:#514b57">${esc(body)}</div></foreignObject></g>`; }).join('')}<text x="1336" y="665" text-anchor="end" font-family="Arial" font-size="16" font-weight="700" fill="#1746b8">WE MARKETING</text></svg>`;
}
function costSvg(zh = false) {
  const title = zh ? '三个数字，三个不同问题' : 'Three numbers, three different questions';
  const rows = zh ? [
    ['订单页优惠', '买家得到了什么？', '消费者权益，不等同于卖家实际成本'],
    ['结算费用', '卖家实际支付多少？', '以 Settlement Details / Report 的费用行为准'],
    ['贡献利润', '这笔增量是否值得？', '增量收入减商品、履约、退货与推广成本'],
  ] : [
    ['ORDER DISCOUNT', 'What did the buyer receive?', 'A consumer benefit, not the seller actual cost'],
    ['SETTLEMENT FEE', 'What did the seller pay?', 'Read the fee line in Settlement Details or Report'],
    ['CONTRIBUTION', 'Was the increment worth it?', 'Incremental revenue less product, fulfillment, returns and promotion'],
  ];
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1400" height="650" viewBox="0 0 1400 650"><rect width="1400" height="650" rx="34" fill="#f3f0ff"/><text x="64" y="84" font-family="Arial,PingFang SC" font-size="40" font-weight="800" fill="#171717">${esc(title)}</text><rect x="64" y="112" width="150" height="6" rx="3" fill="#245bd7"/>${rows.map(([a,b,c], i) => `<g transform="translate(64 ${160 + i * 140})"><rect width="1272" height="110" rx="22" fill="#fff" stroke="#d8d1ef"/><rect width="240" height="110" rx="22" fill="${i === 1 ? '#245bd7' : i === 2 ? '#ed168c' : '#6f5bd4'}"/><text x="120" y="65" text-anchor="middle" font-family="Arial,PingFang SC" font-size="20" font-weight="800" fill="#fff">${esc(a)}</text><text x="280" y="48" font-family="Arial,PingFang SC" font-size="21" font-weight="800" fill="#171717">${esc(b)}</text><text x="280" y="80" font-family="Arial,PingFang SC" font-size="17" fill="#514b57">${esc(c)}</text></g>`).join('')}</svg>`;
}
await fs.writeFile(path.join(out, 'blog/q4-26-smart-promotion/framework-en-v1.svg'), frameworkSvg(false));
await fs.writeFile(path.join(out, 'blog/q4-26-smart-promotion/framework-zh-v1.svg'), frameworkSvg(true));
await fs.writeFile(path.join(out, 'blog/q4-26-smart-promotion/cost-readback-en-v1.svg'), costSvg(false));
await fs.writeFile(path.join(out, 'blog/q4-26-smart-promotion/cost-readback-zh-v1.svg'), costSvg(true));

const faqEn = [
  ['Does an attributed Smart Promotion order prove incrementality?', 'No. Attribution says the program received credit under its rules. Incrementality requires a baseline and a comparison that accounts for existing creator, ad, organic and seasonal demand.'],
  ['Can one order appear in creator, ad and Smart Promotion reporting?', 'Yes. Current official guidance says the same order can be attributed to creators, ads and Smart Promotion. That overlap does not automatically mean the seller paid twice, but it does mean the counts should not be added together as unique orders.'],
  ['Is the discount shown on the order page the seller cost?', 'No. Official guidance distinguishes the consumer discount from the seller actual cost. Read the applicable fee line in Settlement Details or the Settlement Report.'],
  ['How quickly does program performance update?', 'The current performance guide says data is updated on a T+2 basis. Use the live dashboard because timing and interface details can change.'],
  ['Which rate should a team put in its model?', 'Use the rate and terms currently displayed for that shop, period and program, then reconcile them to settlement. Do not hard-code a rate from an older article or campaign example.'],
  ['What is the smallest useful test?', 'Choose a stable SKU group, capture a pre-period baseline, run for a defined window, export performance and settlement records, then compare incremental contribution after costs.'],
];
const faqZh = [
  ['Smart Promotion 归因订单能直接证明增量吗？', '不能。归因表示该计划按照规则获得了 Credit；要判断增量，仍需建立基线，并考虑原有达人、广告、自然流量和季节需求。'],
  ['同一订单会同时出现在达人、广告和 Smart Promotion 报表吗？', '会。当前官方说明同一订单可能同时归因给达人、广告和 Smart Promotion。这不自动代表卖家重复付费，但这些订单数不能直接相加当作独立订单。'],
  ['订单页显示的优惠就是卖家成本吗？', '不是。官方说明把消费者优惠与卖家实际成本分开。卖家应读取 Settlement Details 或 Settlement Report 中适用的费用行。'],
  ['计划效果多久更新一次？', '当前 Performance and Costs 指南写明数据按 T+2 更新。更新时间和界面可能变化，执行时仍要核对实时 Dashboard。'],
  ['模型里应该使用哪一个费率？', '使用当前店铺、周期和计划页面实际显示的费率与条款，再用结算记录回读。不要把旧文章或历史活动示例中的费率写死。'],
  ['最小可用测试是什么？', '选择一组相对稳定的 SKU，保存参与前基线，运行固定周期，导出效果和结算记录，再比较扣除成本后的增量贡献。'],
];
const faq = (items, zh = false) => `<section class="faq"><h2>${zh ? '常见问题' : 'Frequently asked questions'}</h2>${items.map(([q,a]) => `<div class="faq-item"><h3>${q}</h3><p>${a}</p></div>`).join('')}</section>`;

const EN = `<p class="eyebrow">TIKTOK SHOP U.S. · SMART PROMOTION</p><h1>${enTitle}</h1><img class="hero" src="/blog/hero-${slug}-en-v1.png" alt="${enTitle}"><p class="byline">WE Marketing Team · Oct 22, 2026 · 17 min read</p>
<p><strong>Direct answer:</strong> do not call Smart Promotion growth because the dashboard shows attributed orders or a large discount value. First establish what the business would likely have produced without the program. Then separate overlapping attribution from unique demand, read the seller's actual fee from settlement, and calculate contribution after product, fulfillment, return and promotion costs. Scale only when the incremental result survives all four checks.</p>
<p>Smart Promotion can be useful because it packages consumer benefits and platform distribution into a simpler operating motion. But convenience does not remove the measurement problem. A seller still needs to distinguish a buyer benefit from a seller expense, reported attribution from incrementality, and top-line GMV from economically useful growth.</p>
<h2>1. Define the decision before opening the dashboard</h2><p>Write the decision in one sentence: continue, expand, narrow or stop a defined Smart Promotion test for a defined SKU group and period. Name the owner, the review date and the minimum evidence required. Without that decision frame, teams tend to collect every visible metric and then select the most flattering one.</p><p>Use a stable comparison window when possible. Record product availability, list price, major discounts, creator activity, ad spend, organic traffic, seasonality and fulfillment constraints. If any of these changed during the test, note the change instead of pretending the periods are perfectly comparable.</p>
<h2>2. Establish a business baseline</h2><p>A baseline is not last week's GMV alone. At minimum, capture paid and unpaid orders, net revenue, refunds or cancellations, gross margin before promotion, creator commission, ad cost, shipping subsidy or fulfillment cost, and any inventory constraint. Use the same definitions for the before and test periods.</p><p>If the test overlaps a launch, holiday or viral post, build a range rather than a false point estimate. A conservative baseline, expected baseline and high baseline make the uncertainty visible. The question is not whether the program participated in revenue. The question is how much revenue and contribution would probably not have occurred without it.</p>
<img src="/blog/q4-26-smart-promotion/framework-en-v1.svg" alt="Four-step Smart Promotion growth review">
<h2>3. Read dashboard performance as program reporting</h2><p>The current official Performance and Costs guide describes dashboard views for program performance, discounts, benefits and fee history. It also says the data is updated on a T+2 basis. Use those views to understand what the program reports, but preserve the export date and reporting window because recent days may still be incomplete.</p><p>Check orders, GMV, buyer benefit, program fee and any available segmentation by item or period. Look for abrupt changes around enrollment, rate changes, stockouts or other promotions. A headline total is not enough. A SKU that was already selling strongly may absorb most attributed orders while a weaker SKU produces the actual incremental lift.</p>
<h2>4. Do not add overlapping attribution</h2><p>The current Smart Promotion FAQ explains that one order may be attributed to a creator, an ad and Smart Promotion at the same time. These systems answer different attribution questions. The overlap does not automatically mean the seller paid for the same thing twice, but it does mean the reported order counts cannot be added as if they were unique customers or unique demand.</p><p>Create an overlap table at order-safe aggregate level. Compare total shop orders with Smart Promotion-attributed orders, creator-attributed orders and ad-attributed orders. If order-level export is authorized and available, use a controlled identifier to measure intersections. If it is not, mark overlap as unknown and use conservative ranges.</p>
<h2>5. Separate the buyer discount from seller cost</h2><p>The order page may show a discount or benefit received by the shopper. Official guidance explicitly says that consumer discount is not the seller's actual cost. Read the applicable Smart Promotion fee in Settlement Details or the Settlement Report. Retain the settlement period, fee line, order-safe reference and reconciliation result.</p><p>This distinction matters because a large buyer benefit can make the program look expensive when the platform funded part of it, or make it look free when a seller fee appears later in settlement. The accounting record resolves the question. A dashboard estimate is useful for pacing; settlement is the readback for what the seller actually paid.</p>
<img src="/blog/q4-26-smart-promotion/cost-readback-en-v1.svg" alt="Smart Promotion order discount, settlement fee and contribution hierarchy">
<h2>6. Use the live rate and terms, not a remembered number</h2><p>Program rates and campaign terms can change. Current official materials include examples and current fee descriptions, but a team should use the rate displayed for its shop and period, then reconcile it to settlement. Record the source page, retrieval time and effective period in the model.</p><p>Do not use a rate from a screenshot, old article or another shop as a permanent assumption. If the displayed term and settlement line disagree, pause the scale decision and investigate the difference. A verified rate change is an input to the model, not an unexpected variance to hide inside blended margin.</p>
<h2>7. Calculate incremental contribution</h2><p>Start with estimated incremental net revenue, not attributed GMV. Subtract cost of goods, creator commission, ad cost, Smart Promotion fee, incremental fulfillment, expected returns and other variable costs caused by the extra orders. Keep fixed overhead separate unless the test actually changes it.</p><p>A useful operating equation is: incremental contribution equals incremental net revenue minus incremental product, channel, fulfillment, return and program costs. Express the result in dollars, per order and as a percentage of incremental net revenue. This prevents a high-volume, low-quality test from hiding behind GMV.</p>
<h2>8. Check quality, not only quantity</h2><p>Growth that creates stockouts, late dispatch, poor product fit or unusually high returns can destroy contribution later. Compare cancellation, refund, return, complaint and fulfillment outcomes with the baseline. If recent cohorts have not matured, state that the quality result is provisional.</p><p>Segment new and returning buyers when a reliable view exists. A first order can be strategically valuable, but only if the acquisition cost and expected repeat behavior are explicit assumptions. Do not convert an unknown lifetime value into guaranteed future profit.</p>
<h2>9. Use stop, hold and scale gates</h2><p>Scale when incremental contribution is positive under a conservative baseline, settlement reconciles, service quality remains inside the operating threshold and inventory can support the next step. Hold when the data is immature, overlap is unknown or a material rate or settlement discrepancy remains open. Stop or narrow when contribution is negative, the gain depends on a single nonrepeatable spike, or operations cannot fulfill the demand safely.</p><p>Document the reason and next review date. “Promising” is not a terminal state. A hold needs an owner and missing evidence; a scale decision needs a budget, SKU scope and monitoring threshold.</p>
<h2>10. Run a small reproducible test</h2><p>Choose a small set of SKUs with stable inventory and known unit economics. Save a pre-period snapshot, document other traffic sources, enroll for a fixed window, and export the dashboard and settlement data after the reporting lag. Reconcile orders and costs, calculate contribution, then ask a second operator to reproduce the result from the saved inputs.</p><p>If the second operator cannot reach the same conclusion, improve the definitions before increasing spend. The goal is not a perfect causal experiment. It is a decision record strong enough to distinguish a plausible increment from attractive but ambiguous reporting.</p>
<h2>Source notes</h2><p>This original WEM operating framework draws on complete current TikTok Shop U.S. Seller University materials revalidated October 22, 2026: <a href="${sources.faq}">Smart Promotion FAQ</a>, <a href="${sources.performance}">How to View Program Performance and Costs</a>, and <a href="${sources.spending}">Seller Spending Insights</a>. The baseline, overlap and contribution review is WEM operational design. Program eligibility, rates, terms, interface paths and reporting timing can change. Verify the live U.S. Seller Center and settlement record before acting.</p>
<h2>Related WEM guides</h2><section class="related-grid"><a href="/blog/tiktok-shop-attribution-performance-analytics"><strong>Attribution and performance analytics</strong><span>Separate channel reporting from a decision-ready measurement system.</span></a><a href="/blog/tiktok-shop-discount-architecture"><strong>Discount architecture</strong><span>Protect contribution while coordinating buyer-facing incentives.</span></a><a href="/blog/tiktok-shop-weekly-operating-review"><strong>Weekly operating review</strong><span>Turn metrics, exceptions and owners into one decision cadence.</span></a></section>${faq(faqEn)}`;

const ZH = `<p class="eyebrow">TIKTOK SHOP 美国站 · SMART PROMOTION</p><h1>${zhTitle}</h1><img class="hero" src="/blog/hero-${slug}-zh-v1.png" alt="${zhTitle}"><p class="byline">WE Marketing Team · 2026 年 10 月 22 日 · 17 分钟阅读</p>
<p><strong>直接结论：</strong>不要因为 Dashboard 显示了归因订单或很大的优惠金额，就把 Smart Promotion 定义为增长。先建立“如果不参加，大概率会发生什么”的业务基线，再拆分归因重叠，读取 Settlement 中卖家实际支付的费用，最后从增量收入中扣除商品、履约、退货和推广成本。只有结果通过这四道复核，才适合扩大。</p><p>Smart Promotion 的价值在于把消费者权益和平台分发组织成更简单的运营动作，但简单不等于不需要测量。团队仍需区分消费者拿到的优惠与卖家承担的成本、报表归因与真实增量、GMV 与有经济价值的增长。</p>
<h2>1. 打开报表前，先写清楚要做什么决定</h2><p>用一句话定义决定：对指定 SKU 和指定周期的 Smart Promotion 测试，是继续、扩大、缩小还是停止。写清负责人、复盘日期和最低证据要求。否则团队很容易收集所有可见数字，再挑一个最好看的结果。</p><p>尽量选择稳定比较期，同时记录库存、标价、其他折扣、达人活动、广告消耗、自然流量、季节因素和履约能力。测试期间发生变化，就把变化写进假设，不要假装两个周期完全可比。</p>
<h2>2. 建立业务基线</h2><p>基线不能只有上周 GMV。至少保存付费与非付费订单、净收入、取消和退款、推广前毛利、达人佣金、广告成本、运费补贴或履约成本，以及库存限制。参与前和测试期必须使用同一口径。</p><p>如果测试碰上上新、节日或爆款内容，用保守、预期和较高三档基线，不要制造一个虚假的精确值。真正的问题不是计划有没有参与收入，而是如果没有它，有多少收入和贡献大概率不会发生。</p>
<img src="/blog/q4-26-smart-promotion/framework-zh-v1.svg" alt="Smart Promotion 四步增长复核">
<h2>3. 把 Dashboard 当作计划报表读取</h2><p>当前官方 Performance and Costs 指南说明，Dashboard 提供计划效果、优惠、权益和费用历史等视图，并写明数据按 T+2 更新。用这些视图理解计划报表，但要保存导出时间和统计窗口，因为最近两天可能还不完整。</p><p>检查订单、GMV、买家权益、计划费用，以及可用的商品或周期拆分。重点观察加入计划、费率变化、缺货或其他促销附近的突变。头部总数不够；原本就热卖的 SKU 可能吸收大部分归因，而真正增量来自另一个商品。</p>
<h2>4. 归因重叠不能直接相加</h2><p>当前 Smart Promotion FAQ 说明，同一订单可能同时归因给达人、广告和 Smart Promotion。不同系统回答的是不同归因问题。重叠不自动代表卖家为同一件事重复付费，但这些订单数绝不能相加后当作独立客户或独立需求。</p><p>先做店铺总订单、Smart Promotion 归因、达人归因和广告归因的重叠表。如果已获授权且有订单级导出，可以使用受控标识计算交集；如果没有，就把重叠写成 Unknown，并使用保守范围，不要用猜测填零。</p>
<h2>5. 把买家优惠和卖家成本分开</h2><p>订单页可能显示买家获得的优惠或权益。官方指南明确说明，消费者优惠不是卖家实际成本。卖家实际支付多少，应读取 Settlement Details 或 Settlement Report 中适用的 Smart Promotion 费用行，并保留结算周期、订单安全标识、费用项目和核对结果。</p><p>这一区分很关键。平台可能承担部分买家权益，让一个很大的折扣看起来比真实卖家成本更高；也可能在后续结算中出现费用，让计划看起来暂时免费。Dashboard 估算适合日常 Pacing，Settlement 才是卖家实际支付的终端读回。</p>
<img src="/blog/q4-26-smart-promotion/cost-readback-zh-v1.svg" alt="Smart Promotion 订单优惠、结算费用和贡献利润层级">
<h2>6. 使用实时费率与条款</h2><p>计划费率和活动条款会变化。官方材料会给出当前描述和示例，但团队应使用自己店铺、当前周期、当前计划页面实际显示的费率，再与结算明细核对。模型里同时记录来源页面、读取时间和生效周期。</p><p>不要把旧截图、旧文章或其他店铺的费率写成永久参数。如果页面条款与结算费用不一致，暂停扩量并调查差异。已验证的费率变化应该成为模型输入，而不是被藏进综合毛利里的“异常”。</p>
<h2>7. 计算增量贡献，而不是只看 GMV</h2><p>从估算的增量净收入开始，不要直接使用归因 GMV。依次扣除商品成本、达人佣金、广告成本、Smart Promotion 费用、增量履约、预期退货和其他由新增订单引起的可变成本。除非测试确实改变固定开支，否则固定成本单独呈现。</p><p>一个实用公式是：增量贡献 = 增量净收入 - 增量商品成本 - 渠道成本 - 履约成本 - 退货成本 - 计划费用。用金额、每单和占增量净收入比例三种方式呈现，防止高销量低质量的测试躲在 GMV 后面。</p>
<h2>8. 同时检查订单质量</h2><p>如果新增订单引发缺货、迟发、商品不匹配或异常退货，后续会吞掉贡献。把取消、退款、退货、投诉和履约结果与基线比较；如果最近一批订单尚未成熟，就明确标记为 Provisional，不能提前写成已验证。</p><p>如果有可靠视图，再区分新客与老客。首单可以有战略价值，但获客成本和预期复购必须作为明确假设，不能把未知 LTV 自动变成未来保证利润。</p>
<h2>9. 建立停止、暂停与扩量关卡</h2><p>在保守基线下增量贡献仍为正、结算已核对、服务质量在阈值内、库存也能支撑下一步时，才扩大。数据尚未成熟、归因重叠未知或费率与结算存在重大差异时，保持 Hold。贡献为负、结果依赖不可复制的单次爆发，或运营无法安全履约时，应停止或缩小范围。</p><p>每个决定都写明原因和下一次复盘时间。“看起来不错”不是终态；Hold 必须有负责人和缺失证据，Scale 必须有预算、SKU 范围和监控阈值。</p>
<h2>10. 从一个可复现的小测试开始</h2><p>选择少量库存稳定、单位经济明确的 SKU。保存参与前快照，记录其他流量来源，运行固定窗口，等待报表延迟后导出 Dashboard 和 Settlement 数据。核对订单与成本，计算贡献，再让第二名运营人员用同一输入独立复算。</p><p>如果第二名运营人员无法得到同一结论，先修正口径，再增加投入。目标不是制造一个完美的因果实验，而是建立足够强的决策记录，把可信增量和好看但含糊的报表区分开。</p>
<h2>来源说明</h2><p>这套 WEM 原创运营框架基于 2026 年 10 月 22 日完整读取并复核的 TikTok Shop 美国站 Seller University 材料：<a href="${sources.faq}">Smart Promotion FAQ</a>、<a href="${sources.performance}">How to View Program Performance and Costs</a>，以及 <a href="${sources.spending}">Seller Spending Insights</a>。基线、重叠和贡献复核为 WEM 运营设计。计划资格、费率、条款、界面路径和报表时效都可能变化，行动前必须核对当前美国站 Seller Center 和结算记录。</p>
<h2>相关 WEM 指南</h2><section class="related-grid"><a href="/blog/tiktok-shop-attribution-performance-analytics?lang=zh"><strong>归因与效果分析</strong><span>把渠道报表转化为可决策的测量系统。</span></a><a href="/blog/tiktok-shop-discount-architecture?lang=zh"><strong>折扣架构</strong><span>在协调消费者优惠时保护贡献利润。</span></a><a href="/blog/tiktok-shop-weekly-operating-review?lang=zh"><strong>每周运营复盘</strong><span>把指标、例外和负责人放进同一个决策节奏。</span></a></section>${faq(faqZh, true)}`;

const graph = { '@context': 'https://schema.org', '@graph': [[enTitle,enDescription,'en-US',url,`hero-${slug}-en-v1.png`,faqEn],[zhTitle,zhDescription,'zh-CN',`${url}?lang=zh`,`hero-${slug}-zh-v1.png`,faqZh]].flatMap(([headline,description,inLanguage,page,image,items]) => [
  { '@type':'BlogPosting', '@id':`${page}#article`, headline, description, inLanguage, datePublished:date, dateModified:date, mainEntityOfPage:{'@id':page}, image:{'@type':'ImageObject',url:`https://www.weglobalmarketing.com/blog/${image}`}, author:{'@type':'Organization',name:'WE Marketing Team'}, publisher:{'@type':'Organization',name:'WE Marketing'}, citation:Object.values(sources) },
  { '@type':'FAQPage', '@id':`${page}#faq`, inLanguage, mainEntity:items.map(([name,text]) => ({'@type':'Question',name,acceptedAnswer:{'@type':'Answer',text}})) },
]) };
const prior = await fs.readFile(path.join(base, 'blog/tiktok-shop-order-to-appeal-evidence-ledger.html'), 'utf8');
const style = prior.match(/<style>[^]*?<\/style>/)[0];
const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><script>document.documentElement.dataset.lang=new URLSearchParams(location.search).get('lang')==='zh'?'zh':'en';document.documentElement.lang=document.documentElement.dataset.lang==='zh'?'zh-CN':'en'</script><title>${enTitle} | WE Marketing</title><meta name="description" content="${enDescription}"><link rel="canonical" href="${url}"><link rel="alternate" hreflang="en-US" href="${url}"><link rel="alternate" hreflang="zh-CN" href="${url}?lang=zh"><link rel="alternate" hreflang="x-default" href="${url}"><script type="application/ld+json">${JSON.stringify(graph)}</script>${style}<script>if(new URLSearchParams(location.search).get('lang')==='zh'){document.title=${JSON.stringify(`${zhTitle} | WE Marketing`)};document.querySelector('meta[name=description]').content=${JSON.stringify(zhDescription)};document.querySelector('link[rel=canonical]').href='${url}?lang=zh'}</script></head><body><nav class="nav"><a class="logo" href="/"><img src="/assets/we-logo.png" alt="WE Marketing"></a><span class="spacer"></span><a href="/">OUR SERVICES</a><a href="/showcase">OUR WORK</a><a href="/blog">BLOG</a><span class="switch"><a class="en" href="/blog/${slug}">EN</a><a class="zh" href="/blog/${slug}?lang=zh">中文</a></span></nav><main class="wrap"><div class="tools"><a class="en" href="/blog">← BLOG</a><a class="zh" href="/blog?lang=zh">← 博客</a></div><article lang="en">${EN}</article><article lang="zh-CN">${ZH}</article></main><section class="cta"><h2 class="en">READY TO TALK<br>TO WEM?</h2><h2 class="zh">准备好和 WEM<br>一起把计划落地吗？</h2><p class="en">Turn promotion reporting into a decision-ready growth system.</p><p class="zh">把推广报表变成可决策的增长系统。</p><a class="en" href="https://scheduler.zoom.us/wendylin001">BOOK A DISCOVERY CALL</a><a class="zh" href="https://scheduler.zoom.us/wendylin001">预约咨询</a></section><footer class="footer"><img src="/assets/we-logo.png" alt="WE Marketing"><p class="en">WE Marketing connects strategy, creator operations, paid growth and TikTok Shop execution.</p><p class="zh">WE Marketing 帮助品牌连接策略、达人运营、付费增长与 TikTok Shop 执行。</p><p>© 2026 WE Marketing. All rights reserved.</p></footer></body></html>`;
await fs.writeFile(path.join(out, 'blog', `${slug}.html`), html);

let list = await fs.readFile(path.join(base, 'BlogList.jsx'), 'utf8');
const row = { slug, tags:['tiktok-shop','growth','analytics'], cat:{en:'TIKTOK SHOP U.S. · SMART PROMOTION',zh:'TIKTOK SHOP 美国站 · SMART PROMOTION'}, title:{en:enTitle,zh:zhTitle}, excerpt:{en:'Read the baseline, overlap, settlement cost and contribution before scaling.',zh:'扩量前先读基线、重叠、结算成本与贡献利润。'}, date:{en:'Oct 22, 2026',zh:'2026 年 10 月 22 日'}, read:{en:'17 min read',zh:'17 分钟阅读'}, image:{en:`hero-${slug}-en-v1.png`,zh:`hero-${slug}-zh-v1.png`} };
list = list.replace('const BLOG_POSTS = [', `const BLOG_POSTS = [${JSON.stringify(row).replace(/"([A-Za-z_$][\w$]*)":/g, '$1:')},`);
await fs.writeFile(path.join(out, 'BlogList.jsx'), list);
const sandbox = {}; vm.createContext(sandbox); vm.runInContext(await fs.readFile(path.join(root, '.cache/babel-standalone-7.29.0.min.js'), 'utf8'), sandbox);
const compiled = sandbox.Babel.transform(list, { presets:[['react',{runtime:'classic'}]], compact:true, minified:true, sourceType:'script' }).code + '\n';
await fs.writeFile(path.join(out, 'BlogList.compiled.js'), compiled);
const version = sha(compiled).slice(0,12);
await fs.writeFile(path.join(out, 'blog.html'), (await fs.readFile(path.join(base, 'blog.html'),'utf8')).replace(/BlogList\.compiled\.js\?v=[^"']+/, `BlogList.compiled.js?v=${version}`));
await fs.writeFile(path.join(out, 'sitemap.xml'), (await fs.readFile(path.join(base, 'sitemap.xml'),'utf8')).replace('</urlset>', `<url><loc>${url}</loc><lastmod>${date}</lastmod></url><url><loc>${url}?lang=zh</loc><lastmod>${date}</lastmod></url></urlset>`));
await fs.writeFile(path.join(out, 'llms.txt'), (await fs.readFile(path.join(base, 'llms.txt'),'utf8')).trimEnd() + `\n- ${enTitle}: ${url}\n  - 中文：${url}?lang=zh\n`);
const enWords = EN.replace(/<[^>]+>/g,' ').trim().split(/\s+/).length;
const zhChars = ZH.replace(/<[^>]+>/g,'').replace(/\s/g,'').length;
const files = (await fs.readdir(out,{recursive:true,withFileTypes:true})).filter((entry) => entry.isFile());
if (EN.includes('—') || ZH.includes('—')) throw new Error('em dash found');
if (enWords < 1300 || zhChars < 1800 || files.length !== 17) throw new Error(`gate failed words=${enWords} zh=${zhChars} files=${files.length}`);
console.log(JSON.stringify({slug,enWords,zhChars,files:files.length,version,out},null,2));
