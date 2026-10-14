import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import vm from 'node:vm';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const sharp = require('/Users/wendylin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');
const root = path.resolve(import.meta.dirname, '..');
const base = path.join(root, 'outputs/2026-10-14-q4-18-live-baseline/ui_kits/website');
const out = path.join(root, 'outputs/patches/2026-10-14-q4-18-order-capacity');
const slug = 'tiktok-shop-order-capacity-q4-demand-spike';
const date = '2026-10-14';
const url = `https://www.weglobalmarketing.com/blog/${slug}`;
const enTitle = 'Set TikTok Shop Order Capacity Before a Q4 Demand Spike Sets It for You';
const zhTitle = 'Q4 爆单前先设 TikTok Shop 订单产能，不要等平台替你限单';
const enDescription = 'Turn observed warehouse throughput into a TikTok Shop daily order-capacity limit, trigger ladder and evidence-backed Q4 control.';
const zhDescription = '把仓库真实吞吐量变成 TikTok Shop 日订单产能、触发阶梯和有证据的 Q4 履约控制。';
const sources = {
  capacity: 'https://seller-us.tiktok.com/university/essay?course_type=1&from=search&identity=1&knowledge_id=5941246229022506&role=1',
  fulfillment: 'https://seller-us.tiktok.com/university/essay?identity=1&knowledge_id=3995852763301633&role=1',
  bfcm: 'https://seller-us.tiktok.com/university/essay?content_id=2786070166210347&course_type=1&from=new-and-updated&identity=1&knowledge_id=26854147802894&learning_id=26854147802894&module_id=latest_policies&role=seller',
  score: 'https://seller-us.tiktok.com/university/essay?knowledge_id=7082627485452050',
  practices: 'https://seller-us.tiktok.com/university/essay?course_type=1&knowledge_id=6179821974439723'
};
const sha = value => crypto.createHash('sha256').update(value).digest('hex');

await fs.rm(out, { recursive: true, force: true });
for (const directory of ['assets', 'blog', 'blog/optimized', 'blog/thumbs', 'blog/q4-18-capacity']) await fs.mkdir(path.join(out, directory), { recursive: true });
await fs.copyFile(path.join(base, 'assets/we-logo.png'), path.join(out, 'assets/we-logo.png'));
const logo = (await fs.readFile(path.join(out, 'assets/we-logo.png'))).toString('base64');

function cover(zh) {
  const lines = zh ? ['Q4 爆单前', '先设订单产能'] : ['SET ORDER', 'CAPACITY BEFORE', 'THE Q4 SPIKE'];
  const sizes = zh ? [74, 74] : [68, 68, 68];
  const ys = zh ? [250, 345] : [225, 305, 385];
  return `<svg width="1792" height="896" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bg" x2="1"><stop stop-color="#fffdf8"/><stop offset="1" stop-color="#e9e3ff"/></linearGradient></defs><rect width="1792" height="896" fill="url(#bg)"/><path d="M1070 0h722v896h-780c165-245 182-650 58-896z" fill="#eeeaff"/><rect x="82" y="78" width="540" height="50" rx="25" fill="#e8efff"/><text x="110" y="111" font-family="Arial" font-size="21" font-weight="800" fill="#1746b8">TIKTOK SHOP · FULFILLMENT CONTROL</text>${lines.map((line,i)=>`<text x="82" y="${ys[i]}" font-family="Arial Narrow,Arial,PingFang SC" font-size="${sizes[i]}" font-weight="900" fill="${i===1?'#245bd7':'#17151a'}">${line}</text>`).join('')}<rect x="84" y="470" width="88" height="6" rx="3" fill="#ed168c"/><text x="82" y="535" font-family="Arial,PingFang SC" font-size="25" fill="#4f4a55">${zh?'测算 · 设定 · 触发 · 回读':'MEASURE · SET · TRIGGER · READ BACK'}</text><image href="data:image/png;base64,${logo}" x="82" y="700" width="145" height="105"/></svg>`;
}

function capacityVisual(zh) {
  const title = zh ? '把每日上限建在可持续吞吐量上' : 'Build the daily limit from sustainable throughput';
  const rows = zh ? [
    ['可用工时','每班人员 × 有效拣配分钟','只算可稳定交付的时间'],
    ['平均处理时间','从拣货到可交接的中位数','按订单结构分组'],
    ['瓶颈工位','拣货、打包、面单或交接','用最慢环节设上限'],
    ['异常缓冲','返工、缺货、承运延迟','预留而不是透支'],
    ['承运窗口','最后一班取件与截单时间','上限必须能完成交接']
  ] : [
    ['AVAILABLE LABOR','People × productive pack minutes','Count repeatable time only'],
    ['MEDIAN TOUCH TIME','Pick through carrier-ready','Segment by order mix'],
    ['BOTTLENECK STATION','Pick, pack, label or handoff','Let the slowest step set the ceiling'],
    ['EXCEPTION BUFFER','Rework, stock gaps, carrier delay','Reserve capacity instead of borrowing'],
    ['CARRIER WINDOW','Last pickup and dock cutoff','The limit must still reach handoff']
  ];
  return `<svg width="1600" height="940" xmlns="http://www.w3.org/2000/svg"><rect width="1600" height="940" rx="42" fill="#f5f2ff"/><text x="70" y="105" font-family="Arial,PingFang SC" font-size="42" font-weight="850" fill="#17141d">${title}</text><g transform="translate(70 170)">${rows.map((r,i)=>`<g transform="translate(0 ${i*135})"><rect width="1460" height="108" rx="24" fill="#fff"/><rect width="16" height="108" rx="8" fill="${i===2?'#ed168c':'#245bd7'}"/><text x="55" y="43" font-family="Arial,PingFang SC" font-size="21" font-weight="850" fill="#1746b8">${r[0]}</text><text x="55" y="80" font-family="Arial,PingFang SC" font-size="20" fill="#4f4a55">${r[1]}</text><text x="1390" y="66" text-anchor="end" font-family="Arial,PingFang SC" font-size="21" font-weight="850" fill="${i===2?'#c91472':'#5f57a8'}">${r[2]}</text></g>`).join('')}</g></svg>`;
}

function triggerVisual(zh) {
  const title = zh ? '订单产能触发阶梯' : 'Order-capacity trigger ladder';
  const steps = zh ? [
    ['绿色','低于稳定上限','保持配置，核对积压'],
    ['黄色','接近上限','冻结非必要变更，确认班次'],
    ['橙色','超过设定上限','执行扩展路径，逐单核对期限'],
    ['红色','积压或取消风险上升','暂停增量流量，升级负责人']
  ] : [
    ['GREEN','Below sustainable limit','Hold configuration; check backlog'],
    ['YELLOW','Approaching limit','Freeze extra changes; confirm shifts'],
    ['ORANGE','Above configured limit','Use extension path; read order deadlines'],
    ['RED','Backlog or cancellation risk rising','Pause incremental demand; escalate owner']
  ];
  const wrap = (value, max) => {
    if (zh) return value.match(new RegExp(`.{1,${max}}`, 'g')) || [value];
    const lines = []; let line = '';
    for (const word of value.split(' ')) {
      if ((line + ' ' + word).trim().length > max) { lines.push(line); line = word; }
      else line = (line + ' ' + word).trim();
    }
    if (line) lines.push(line);
    return lines;
  };
  const textBlock = (value, y, size, color, max) => `<text x="170" y="${y}" text-anchor="middle" font-family="Arial,PingFang SC" font-size="${size}" fill="${color}">${wrap(value,max).map((line,j)=>`<tspan x="170" dy="${j?size*1.35:0}">${line}</tspan>`).join('')}</text>`;
  return `<svg width="1600" height="860" xmlns="http://www.w3.org/2000/svg"><rect width="1600" height="860" rx="42" fill="#f5f2ff"/><text x="70" y="105" font-family="Arial,PingFang SC" font-size="42" font-weight="850" fill="#17141d">${title}</text><g transform="translate(70 190)">${steps.map((s,i)=>`<g transform="translate(${i*375} 0)"><rect width="340" height="455" rx="32" fill="#fff"/><circle cx="170" cy="88" r="46" fill="${['#e6f3ff','#fff4d5','#fce6d8','#fce0ef'][i]}"/><text x="170" y="98" text-anchor="middle" font-family="Arial" font-size="28" font-weight="900" fill="${['#245bd7','#8e6a00','#c45b18','#c91472'][i]}">${i+1}</text><text x="170" y="180" text-anchor="middle" font-family="Arial,PingFang SC" font-size="24" font-weight="850" fill="#1746b8">${s[0]}</text>${textBlock(s[1],235,20,'#302c35',zh?11:23)}${textBlock(s[2],335,19,'#625b68',zh?12:25)}</g>`).join('')}</g><text x="800" y="760" text-anchor="middle" font-family="Arial,PingFang SC" font-size="25" font-weight="800" fill="#4f4a55">${zh?'阈值触发动作，但订单级期限与状态仍需逐笔回读':'Thresholds trigger action; order-level deadlines and status still require readback'}</text></svg>`;
}

const scene = await sharp(path.join(root, 'outputs/2026-10-14-q4-18-raw-scene-v1.png')).resize({ width: 850 }).png().toBuffer();
for (const [lang, zh] of [['en', false], ['zh', true]]) {
  const name = `hero-${slug}-${lang}-v1`;
  await sharp(Buffer.from(cover(zh))).composite([{ input: scene, left: 910, top: 145 }]).png().toFile(path.join(out, 'blog', `${name}.png`));
  await sharp(path.join(out, 'blog', `${name}.png`)).resize({ width: 1600 }).jpeg({ quality: 90 }).toFile(path.join(out, 'blog/optimized', `${name}.jpg`));
  await sharp(path.join(out, 'blog', `${name}.png`)).resize({ width: 880 }).jpeg({ quality: 88 }).toFile(path.join(out, 'blog/thumbs', `${name}.jpg`));
  await sharp(Buffer.from(capacityVisual(zh))).png().toFile(path.join(out, 'blog/q4-18-capacity', `capacity-model-${lang}-v1.png`));
  await sharp(Buffer.from(triggerVisual(zh))).png().toFile(path.join(out, 'blog/q4-18-capacity', `trigger-ladder-${lang}-v1.png`));
}

const faqEn = [
  ['What does TikTok Shop daily order capacity mean?', 'It is the estimated maximum number of orders the shop can handle efficiently each day. Set it from measured operational throughput, not from a sales target.'],
  ['Does the Order Handling Capacity tool stop all orders at the limit?', 'No. Current guidance describes deadline and EDT extensions for excess orders and surge pacing when volume exceeds the configured threshold. Confirm the live account behavior before relying on it.'],
  ['When does a capacity change take effect?', 'The current Order Handling Capacity guide says changes become effective the next day, so the setting should be reviewed before a known campaign or LIVE spike.'],
  ['Does an SLA extension mean the warehouse can ignore a backlog?', 'No. An extension changes the applicable deadline for eligible excess orders. The seller still needs accurate stock, preparation, handoff and order-level readback.'],
  ['Why connect capacity with BFCM eligibility?', 'The current BFCM guide includes fulfillment health and LDR among campaign eligibility controls. Capacity is an operating guardrail that helps prevent avoidable delays; it does not guarantee eligibility.'],
  ['What is the smallest useful action today?', 'Measure one recent normal shift, identify the bottleneck step, calculate a conservative daily ceiling, name the owner and record the trigger action before changing the setting.']
];
const faqZh = [
  ['TikTok Shop 日订单产能是什么意思？', '它是店铺每天能够高质量处理的预计最大订单量。这个数字应来自真实运营吞吐量，而不是销售目标。'],
  ['Order Handling Capacity 到达上限后会停止所有订单吗？', '不会。当前指引说明，超过设定产能的订单可能获得履约期限和 EDT 扩展；达到更高的 Surge 条件时可能进行订单节奏控制。使用前仍要核对账号实时行为。'],
  ['修改产能后什么时候生效？', '当前 Order Handling Capacity 指引说明，修改会在第二天生效，因此已知 Campaign 或 LIVE 放量前应提前复核。'],
  ['有 SLA Extension 就可以不管积压吗？', '不可以。扩展只改变合资格超量订单适用的期限，卖家仍要保证库存准确、完成备货与真实交接，并逐单回读状态。'],
  ['为什么订单产能要和 BFCM 资格一起看？', '当前 BFCM 指引把履约健康和 LDR 列入活动资格控制。产能是一项降低可避免延迟的运营护栏，但不会自动保证活动资格。'],
  ['今天最小可执行动作是什么？', '选择一个最近的正常班次，测量真实吞吐量，找到瓶颈工位，算出保守日上限，指定负责人，并在修改设置前写清触发动作。']
];
const faq = (items, zh) => `<section class="faq"><h2>${zh ? '常见问题' : 'Common questions'}</h2>${items.map(([q,a]) => `<div class="faq-item"><h3>${q}</h3><p>${a}</p></div>`).join('')}</section>`;

const EN = `
<header class="hero"><div class="kicker">TIKTOK SHOP U.S. · FULFILLMENT CONTROL</div><h1>${enTitle}</h1><p class="dek">Convert real warehouse throughput into a limit, trigger ladder and order-level readback.</p><p class="meta">WE Marketing Team · Oct 14, 2026 · 14 min read</p><img src="/blog/hero-${slug}-en-v1.png" alt="TikTok Shop order capacity control before a Q4 demand spike"></header>
<p><strong>Direct answer:</strong> set TikTok Shop order capacity from the number of orders the operation can repeatedly make carrier-ready within its real labor, inventory and pickup windows. Do not use a stretch sales target, the best day the warehouse ever had, or a campaign forecast as the setting. The current U.S. Order Handling Capacity guide says the tool is intended to hold an estimated daily maximum, provide fulfillment-deadline and estimated-delivery extensions for orders above that capacity, and pace a larger surge when order volume exceeds three times the set capacity. Those protections are not permission to overstate throughput. They work only when the number reflects the operation.</p>
<p>WEM’s practical model is a capacity sheet plus a trigger ladder. The sheet converts observed work into a conservative ceiling. The ladder names what changes as the backlog approaches that ceiling, exceeds it, or begins to create cancellation and dispatch risk. The platform setting is one control inside that system. Inventory truth, staffing, packaging, carrier handoff and order-level SLA readback remain separate controls.</p>
<img class="body-visual" src="/blog/q4-18-capacity/capacity-model-en-v1.png" alt="TikTok Shop sustainable daily order capacity model">
<h2>Measure carrier-ready output, not orders received</h2>
<p>A capacity number should describe finished operational output. Count an order only when the correct SKU has been picked, packed, labeled, checked and staged for the carrier within the applicable cutoff. Orders that entered the queue but remain blocked by stock, address, package, label or carrier issues are backlog, not throughput. Use at least several normal operating days and separate ordinary shifts from unusual overtime or emergency staffing.</p>
<p>Start with the bottleneck. If picking can support 900 orders, packing 620, label verification 760 and the final carrier window only 540, the sustainable ceiling cannot be 900. This is a hypothetical operating example, not a recommended TikTok Shop setting. The purpose is to let the slowest repeatable step control the initial limit. Then subtract an explicit exception buffer for rework, stock discrepancies, damaged goods, late inbound inventory and missed scans.</p>
<h2>Build one capacity row for each meaningful order mix</h2>
<p>One average can hide the work created by bundles, fragile items, oversize parcels, personalization or multi-item orders. Group orders only where touch time, packaging and handoff are genuinely similar. For each group, record median touch time, people assigned, productive minutes, error rate, carrier cutoff and the maximum units that can be made carrier-ready without borrowing from the next day.</p>
<p>Translate the groups into one daily ceiling only after accounting for the forecast mix. If a LIVE session is expected to sell a labor-heavy bundle, do not apply the single-item rate to every forecast order. Label unknown inputs as unknown and use a lower temporary limit until the first real readback. A precise-looking number built from invented inputs is weaker than a conservative range with named evidence.</p>
<h2>Set the tool before the demand event</h2>
<p>The current Order Handling Capacity guide says sellers can review and update the limit as needed, with changes effective the next day. That makes same-hour reaction unreliable. Before a BFCM push, creator drop or large LIVE session, confirm the setting, the fulfillment-deadline extension control and the visible account behavior in Seller Center. Record the previous value, new value, reason, owner and expected effective date.</p>
<p>Do not assume that entering a number completes the setup. The guide separates the daily capacity setting from the fulfillment-deadline extension setup. Confirm the live toggle and save a readback after the effective date. If the feature is absent, unavailable or behaves differently in the account, mark the state unknown and manage the queue with staffing, assortment, traffic and carrier controls rather than pretending the platform protection exists.</p>
<h2>Understand what happens above the limit</h2>
<p>Current guidance says orders beyond the daily capacity can receive an additional business day for the dispatch SLA and an adjusted estimated delivery time, subject to the platform’s evaluation. It also describes surge protection when order volume exceeds three times the set daily capacity. These are platform behaviors, not a promise that every operational problem disappears. The team still has to identify which orders received which deadlines.</p>
<p>Keep an order-level deadline board. Store the order ID, order type, Awaiting Shipment time, current dispatch deadline, capacity-trigger status, warehouse, assigned shift, carrier window and latest readback. Never extend every order in an internal spreadsheet merely because the daily total crossed the threshold. The current order record is the evidence.</p>
<img class="body-visual" src="/blog/q4-18-capacity/trigger-ladder-en-v1.png" alt="TikTok Shop order capacity trigger ladder">
<h2>Use a trigger ladder before the queue becomes a crisis</h2>
<p>The green state is normal operation below the sustainable limit. Confirm stock, staffing, pickup booking and backlog age. Yellow means demand is approaching the ceiling. Freeze nonessential assortment or packaging changes, confirm the next shift and move exception owners into the queue. Orange means the set limit has been exceeded. Verify whether the platform applied the expected deadline path, protect priority orders and review the next carrier handoff. Red means backlog age, seller-fault cancellation or dispatch risk is rising. Pause incremental demand, escalate the named operator and reduce the promise until terminal evidence shows the queue is recovering.</p>
<p>The thresholds should be written before the event. A team that decides every action after the dashboard turns red will usually add labor, traffic, discounting and product changes at the same time. That destroys the learning signal and can increase errors. Use one owner for the capacity setting, one for warehouse execution and one for demand controls, with a single decision timestamp.</p>
<h2>Connect capacity to BFCM eligibility without claiming a guarantee</h2>
<p>The current 2026 BFCM seller guide lists SPS, LDR, account health and compliant in-stock products among eligibility controls. It states an SPS threshold of 3.5 or higher and LDR below 20 percent for the guide’s eligibility checklist, while also explaining that campaign benefits may change when shop performance falls. Capacity discipline can reduce avoidable late dispatch and cancellation pressure. It does not guarantee registration, product approval, campaign benefits or traffic.</p>
<p>Read the live campaign page and the exact shop status. Treat a passing screenshot as evidence for that moment, not a promise for the whole event. If a shop has no SPS yet, follow the newer-shop conditions shown in the current guide. Keep the capacity decision separate from product registration, pricing and inventory allocation so a campaign change does not silently rewrite the warehouse promise.</p>
<h2>Use the Logistics and Fulfillment Score as a diagnosis surface</h2>
<p>On October 14, 2026, the current Logistics and Fulfillment Score guide says its new version is still in a preview-only trial through October 14 and is scheduled to launch October 15. It describes Dispatch Time, Transit Time, Seller Fault Cancellation Rate and a Free Shipping Coverage bonus as components of the new score, with category-based comparisons and phased access. Because the launch is scheduled for the next day, verify the current Seller Center version before making any decision from this article.</p>
<p>Do not reverse-engineer a capacity number from a single score. Use affected-order details to locate the operational cause. Slow dispatch may point to picking, packing, label, cutoff or scan delay. Slow transit may point to service or carrier selection. Seller-fault cancellation may point to inventory truth or an overcommitted promise. Fix the named constraint and then watch the relevant order cohort.</p>
<h2>Run a short daily capacity review</h2>
<table><tr><th>Evidence</th><th>Decision</th><th>Owner</th></tr><tr><td>Yesterday’s carrier-ready output and backlog age</td><td>Keep or lower sustainable ceiling</td><td>Warehouse lead</td></tr><tr><td>Today’s staffing, order mix and inventory exceptions</td><td>Adjust internal allocation</td><td>Operations lead</td></tr><tr><td>OHC setting, toggle and effective-date readback</td><td>Confirm platform control</td><td>Seller Center owner</td></tr><tr><td>Order-level dispatch deadlines</td><td>Prioritize exact packages</td><td>Fulfillment owner</td></tr><tr><td>LDR, cancellation and affected-order evidence</td><td>Repair named constraint</td><td>Performance owner</td></tr><tr><td>Traffic, campaign and LIVE plan</td><td>Hold, reduce or reopen demand</td><td>Growth owner</td></tr></table>
<p>Close the review with one decision: keep the setting, lower it, increase it with evidence, or stop incremental demand while a constraint is repaired. Record the decision, owner, effective time and next readback. Do not call the change successful because it was saved. Success means the live setting is confirmed and the order queue returns to a controlled state without hiding late orders.</p>
<h2>The smallest useful action today</h2>
<p>Select one recent normal warehouse shift. Count only orders that became carrier-ready before the actual handoff cutoff. Record productive labor minutes, median touch time, bottleneck station, exception percentage and unfinished backlog. Calculate a conservative daily ceiling, compare it with the current Seller Center setting, and write the yellow, orange and red actions before changing anything. If the required evidence is missing, label the setting unvalidated and start measuring rather than guessing.</p>
<h2>Source notes</h2>
<p>This original WE Marketing operating framework draws on complete current TikTok Shop U.S. Seller University guidance on the <a href="${sources.capacity}">Order Handling Capacity Tool</a>, <a href="${sources.fulfillment}">Fulfillment Policy</a>, <a href="${sources.bfcm}">2026 BFCM Seller Campaign Guide</a>, <a href="${sources.score}">Logistics and Fulfillment Score</a>, and <a href="${sources.practices}">Best Practices for Order Fulfillment</a>, revalidated October 14, 2026. Feature access, thresholds, score versions, launch timing, campaign requirements and order deadlines can change. Verify the current U.S. Seller Center and exact order records before execution.</p>
${faq(faqEn, false)}
<h2>Related WEM guides</h2><section class="related-grid"><a href="/blog/tiktok-shop-qualifying-dispatch-event"><strong>Qualifying dispatch evidence</strong><span>Separate labels, handoff and recognized events.</span></a><a href="/blog/tiktok-shop-collection-warehouse-handoff"><strong>CBT warehouse handoff SOP</strong><span>Control cutoff, scan, custody and exceptions.</span></a><a href="/blog/tiktok-shop-bfcm-two-week-product-preflight"><strong>BFCM product preflight</strong><span>Check stock, fulfillment and stop conditions before scale.</span></a></section>`;

const ZH = `
<header class="hero"><div class="kicker">TIKTOK SHOP 美国站 · 履约控制</div><h1>${zhTitle}</h1><p class="dek">把真实仓库吞吐量变成日上限、触发阶梯和订单级回读。</p><p class="meta">WE Marketing Team · 2026 年 10 月 14 日 · 14 分钟阅读</p><img src="/blog/hero-${slug}-zh-v1.png" alt="Q4 爆单前的 TikTok Shop 订单产能控制"></header>
<p><strong>直接答案：</strong>TikTok Shop 订单产能应该按照团队每天能稳定完成拣货、打包、面单核对并在真实承运窗口内交接的订单量来设，不能用销售目标、历史最好的一天或 Campaign Forecast 直接替代。当前美国站 Order Handling Capacity 指引说明，这个工具用于设置预计日最大处理量；超过设定产能的订单可能获得 Fulfillment Deadline 与 EDT 扩展；当订单量超过设定产能的三倍时，Surge Protection 可能对新增订单进行节奏控制。这些机制不是高估吞吐量的理由，数字必须反映真实运营能力。</p>
<p>WEM 的做法是把 Capacity Sheet 和 Trigger Ladder 放在一起。Capacity Sheet 用实际观察得到保守上限，Trigger Ladder 则提前写清队列接近上限、超过上限或开始产生取消与晚发风险时要改变什么。平台设置只是这套系统中的一项控制，库存事实、人员排班、包装、承运交接和订单级 SLA 回读仍要单独管理。</p>
<img class="body-visual" src="/blog/q4-18-capacity/capacity-model-zh-v1.png" alt="TikTok Shop 可持续日订单产能模型">
<h2>测量可交仓产出，不是收到多少订单</h2>
<p>产能数字描述的是完成的运营产出。只有正确 SKU 已拣货、打包、贴标、复核，并在适用 Cutoff 前进入可交承运状态，才能计入 Throughput。已经进入队列但仍被库存、地址、包装、面单或承运异常卡住的订单属于 Backlog，不是产出。至少观察几个正常运营日，并把普通班次与临时加班、紧急借人分开。</p>
<p>从瓶颈工位开始。如果拣货能处理 900 单、打包 620 单、面单复核 760 单，而最后承运窗口只能交接 540 单，可持续上限就不能写成 900。这个数字只是运营示例，不是 TikTok Shop 推荐值。方法的重点是让最慢且可重复的环节控制初始上限，再明确扣除返工、缺货、破损、入库延迟和漏扫所需的异常缓冲。</p>
<h2>按真正不同的订单结构建立产能行</h2>
<p>一个平均值会掩盖 Bundle、易碎品、大件、定制和多件订单带来的工作量。只有当 Touch Time、包装和交接方式真正接近时，才把订单放在同一组。每组记录中位处理时间、投入人数、有效分钟、错误率、承运 Cutoff，以及不会透支到第二天的最大可交仓数量。</p>
<p>确认预计订单结构后，再把各组换算成一个日上限。如果某场 LIVE 预计主推打包较慢的 Bundle，就不能把单件商品的处理速度套给全部订单。未知输入明确写 Unknown，在拿到第一次真实回读前使用更低的临时上限。依靠虚构输入算出的精确数字，不如有证据的保守区间。</p>
<h2>在需求事件之前设置工具</h2>
<p>当前 Order Handling Capacity 指引说明，卖家可以按需要复核和修改上限，但修改会在第二天生效，因此不能依赖同一小时内临时救火。BFCM 放量、达人集中发布或大型 LIVE 前，先确认当前设置、Fulfillment Deadline Extension 控制，以及账号在 Seller Center 的真实显示。记录旧值、新值、修改原因、负责人和预计生效日期。</p>
<p>输入一个数字不代表设置完成。官方指引把 Daily Capacity 与 Fulfillment Deadline Extension Setup 分开说明。检查实际 Toggle，并在生效日之后保存回读。如果功能未出现、不可用或账号行为不同，就把状态记为 Unknown，并通过排班、商品范围、流量和承运安排管理队列，不能假设平台保护已经存在。</p>
<h2>看清超过上限后发生什么</h2>
<p>当前指引说明，超过日订单产能的订单可能获得一个额外 Business Day 的 Dispatch SLA，并根据平台评估调整 EDT；当订单量超过设定日产能三倍时，还可能触发 Surge Protection。这是平台行为，不是所有运营问题自动消失的承诺。团队仍要确认哪些订单实际获得了哪一个 Deadline。</p>
<p>建立订单级 Deadline Board，记录 Order ID、Order Type、Awaiting Shipment 时间、当前 Dispatch Deadline、Capacity Trigger 状态、Warehouse、Assigned Shift、Carrier Window 与最近回读。不能因为日总量超过阈值，就在内部表格里把全部订单统一延期。准确订单记录才是证据。</p>
<img class="body-visual" src="/blog/q4-18-capacity/trigger-ladder-zh-v1.png" alt="TikTok Shop 订单产能触发阶梯">
<h2>在队列变成危机前启动触发阶梯</h2>
<p>绿色表示低于可持续上限，确认库存、排班、取件预约和 Backlog Age。黄色表示正在接近上限，冻结非必要的商品或包装变更，确认下一班人员并把异常负责人拉进队列。橙色表示超过设定上限，核对平台是否应用预期 Deadline Path，保护优先订单并复核下一次承运交接。红色表示积压时长、Seller-fault Cancellation 或晚发风险正在上升，暂停增量需求，升级给指定负责人，并降低承诺，直到终态证据表明队列正在恢复。</p>
<p>所有阈值应在活动前写清。等 Dashboard 变红后才决定动作，团队往往会同时增加人员、流量、折扣与商品变更，既增加错误，也失去判断哪个动作有效的学习信号。Capacity Setting、Warehouse Execution 与 Demand Control 分别指定负责人，但必须使用同一个 Decision Timestamp。</p>
<h2>把产能与 BFCM 资格连接起来，但不要承诺结果</h2>
<p>当前 2026 BFCM Seller Guide 把 SPS、LDR、Account Health 和合规且有库存的商品列入活动资格控制。指引的 Eligibility Checklist 写明 SPS 需要 3.5 或以上、LDR 低于 20%，同时说明店铺表现下降可能影响 Campaign Benefits。产能纪律可以降低可避免的晚发与取消压力，但不会保证注册成功、商品通过、活动权益或流量。</p>
<p>必须读取 Live Campaign Page 和准确店铺状态。一次通过截图只证明当时的状态，不是整个活动周期的承诺。没有 SPS 的新店要按照当前指引显示的新店条件检查。Capacity Decision 还应与商品注册、价格和库存分配分开，避免 Campaign Change 静默改写仓库承诺。</p>
<h2>把 Logistics and Fulfillment Score 当作诊断界面</h2>
<p>截至 2026 年 10 月 14 日，当前 Logistics and Fulfillment Score 指引说明，新版本仍处于持续到 10 月 14 日的 Preview-only Trial，并计划在 10 月 15 日正式上线。新版本包含 Dispatch Time、Transit Time、Seller Fault Cancellation Rate 与 Free Shipping Coverage Bonus，并采用同类目比较和分批开放。因为计划上线时间就在第二天，执行时必须先核对 Seller Center 当前版本，不能只靠本文做决定。</p>
<p>不要从一个分数反推产能。使用 Affected-order Details 找到运营原因。Dispatch Time 慢可能来自拣货、打包、面单、Cutoff 或扫描；Transit Time 慢可能来自 Service 或 Carrier Selection；Seller-fault Cancellation 可能来自库存事实或承诺过量。修复明确约束，再观察对应订单 Cohort。</p>
<h2>每天做一次短产能复盘</h2>
<table><tr><th>证据</th><th>决定</th><th>负责人</th></tr><tr><td>昨日可交仓产出与积压时长</td><td>保持或降低可持续上限</td><td>仓库负责人</td></tr><tr><td>今日排班、订单结构与库存异常</td><td>调整内部资源分配</td><td>运营负责人</td></tr><tr><td>OHC 设置、Toggle 与生效回读</td><td>确认平台控制</td><td>Seller Center 负责人</td></tr><tr><td>订单级 Dispatch Deadline</td><td>安排准确 Package 优先级</td><td>履约负责人</td></tr><tr><td>LDR、取消与受影响订单证据</td><td>修复明确约束</td><td>绩效负责人</td></tr><tr><td>流量、Campaign 与 LIVE 计划</td><td>保持、降低或重开需求</td><td>增长负责人</td></tr></table>
<p>复盘最后只做一个明确决定：保持设置、降低、在有证据时提高，或在修复约束期间停止增量需求。记录决定、负责人、生效时间和下一次回读。保存成功不等于结果成功，只有 Live Setting 被确认，而且订单队列在没有隐藏晚发的情况下恢复受控，才能关闭这次变更。</p>
<h2>今天就做的最小动作</h2>
<p>选择最近一个正常仓库班次，只统计在真实交接 Cutoff 前变成 Carrier-ready 的订单。记录有效劳动分钟、中位 Touch Time、瓶颈工位、异常比例和未完成积压，算出保守日上限，并与 Seller Center 当前设置比较。在修改之前写清黄色、橙色和红色动作。证据不完整时，把当前设置标记为 Unvalidated，先开始测量，不要猜。</p>
<h2>来源说明</h2>
<p>这套 WE Marketing 原创运营框架基于 2026 年 10 月 14 日完整重新核验的 TikTok Shop 美国站 Seller University <a href="${sources.capacity}">Order Handling Capacity Tool</a>、<a href="${sources.fulfillment}">Fulfillment Policy</a>、<a href="${sources.bfcm}">2026 BFCM Seller Campaign Guide</a>、<a href="${sources.score}">Logistics and Fulfillment Score</a>与<a href="${sources.practices}">Best Practices for Order Fulfillment</a>。功能权限、阈值、分数版本、上线时间、活动要求与订单 Deadline 都可能变化，执行前必须核对当前美国站 Seller Center 与准确订单记录。</p>
${faq(faqZh, true)}
<h2>相关 WEM 指南</h2><section class="related-grid"><a href="/blog/tiktok-shop-qualifying-dispatch-event?lang=zh"><strong>有效发货证据</strong><span>区分面单、交接与认可事件。</span></a><a href="/blog/tiktok-shop-collection-warehouse-handoff?lang=zh"><strong>CBT 仓库交接 SOP</strong><span>控制截单、扫描、Custody 与异常。</span></a><a href="/blog/tiktok-shop-bfcm-two-week-product-preflight?lang=zh"><strong>BFCM 商品预检</strong><span>放量前检查库存、履约与停止条件。</span></a></section>`;

const citations = Object.values(sources);
const graph = {'@context':'https://schema.org','@graph':[
  {'@type':'BlogPosting','@id':`${url}#article`,headline:enTitle,description:enDescription,inLanguage:'en-US',author:{'@type':'Organization','@id':'https://www.weglobalmarketing.com/#editorial-team',name:'WE Marketing Team'},publisher:{'@type':'Organization','@id':'https://www.weglobalmarketing.com/#organization',name:'WE Marketing',alternateName:'WEM'},image:{'@type':'ImageObject',url:`https://www.weglobalmarketing.com/blog/hero-${slug}-en-v1.png`,width:1792,height:896},datePublished:date,dateModified:date,mainEntityOfPage:{'@type':'WebPage','@id':url},citation:citations,keywords:['TikTok Shop order capacity','Order Handling Capacity','Q4 fulfillment','Logistics and Fulfillment Score']},
  {'@type':'BlogPosting','@id':`${url}?lang=zh#article`,headline:zhTitle,description:zhDescription,inLanguage:'zh-CN',translationOfWork:{'@id':`${url}#article`},author:{'@id':'https://www.weglobalmarketing.com/#editorial-team'},publisher:{'@id':'https://www.weglobalmarketing.com/#organization'},image:{'@type':'ImageObject',url:`https://www.weglobalmarketing.com/blog/hero-${slug}-zh-v1.png`,width:1792,height:896},datePublished:date,dateModified:date,mainEntityOfPage:{'@type':'WebPage','@id':`${url}?lang=zh`},citation:citations},
  ...[[faqEn,'en-US',`${url}#faq`],[faqZh,'zh-CN',`${url}?lang=zh#faq`]].map(([items,lang,id])=>({'@type':'FAQPage','@id':id,inLanguage:lang,mainEntity:items.map(([name,text])=>({'@type':'Question',name,acceptedAnswer:{'@type':'Answer',text}}))})),
  {'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:'https://www.weglobalmarketing.com/'},{'@type':'ListItem',position:2,name:'Blog',item:'https://www.weglobalmarketing.com/blog'},{'@type':'ListItem',position:3,name:enTitle,item:url}]}
]};

const old = await fs.readFile(path.join(base, 'blog/tiktok-shop-qualifying-dispatch-event.html'), 'utf8');
const style = old.match(/<style>[\s\S]*?<\/style>/)[0];
const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><script>document.documentElement.dataset.lang=new URLSearchParams(location.search).get('lang')==='zh'?'zh':'en';document.documentElement.lang=document.documentElement.dataset.lang==='zh'?'zh-CN':'en'</script><title>${enTitle} | WE Marketing</title><meta name="description" content="${enDescription}"><link rel="canonical" href="${url}"><link rel="alternate" hreflang="en-US" href="${url}"><link rel="alternate" hreflang="zh-CN" href="${url}?lang=zh"><link rel="alternate" hreflang="x-default" href="${url}"><script type="application/ld+json">${JSON.stringify(graph)}</script>${style}</head><body><nav class="nav"><a class="logo" href="/"><img src="/assets/we-logo.png" alt="WE Marketing"></a><a href="/services">SERVICES</a><a href="/about">ABOUT</a><a href="/blog">BLOG</a><span class="spacer"></span><div class="switch"><a class="zh" href="?lang=zh">中文</a><a class="en" href="?">EN</a></div></nav><main class="wrap"><div class="tools"><a class="en" href="/blog">← BLOG</a><a class="zh" href="/blog?lang=zh">← 博客</a></div><article lang="en">${EN}</article><article lang="zh-CN">${ZH}</article></main><section class="cta"><h2 class="en">READY TO TALK<br>TO WEM?</h2><h2 class="zh">准备好和 WEM<br>一起把计划落地吗？</h2><p class="en">Turn capacity evidence into a Q4 demand-control system.</p><p class="zh">把产能证据变成一套 Q4 需求控制系统。</p><a class="en" href="https://scheduler.zoom.us/wendylin001">BOOK A DISCOVERY CALL</a><a class="zh" href="https://scheduler.zoom.us/wendylin001">预约咨询</a></section><footer class="footer"><img src="/assets/we-logo.png" alt="WE Marketing"><p class="en">WE Marketing connects strategy, creator operations, paid growth and TikTok Shop execution.</p><p class="zh">WE Marketing 帮助品牌连接策略、达人运营、付费增长与 TikTok Shop 执行。</p><p>© 2026 WE Marketing. All rights reserved.</p></footer><script>if(document.documentElement.dataset.lang==='zh'){document.title=${JSON.stringify(zhTitle+' | WE Marketing')};document.querySelector('meta[name=description]').content=${JSON.stringify(zhDescription)};document.querySelector('link[rel=canonical]').href='${url}?lang=zh'}</script></body></html>`;
await fs.writeFile(path.join(out, 'blog', `${slug}.html`), html);

let list = await fs.readFile(path.join(base, 'BlogList.jsx'), 'utf8');
const row = {slug,tags:['tiktok-shop','shop-operations','fulfillment'],cat:{en:'TIKTOK SHOP U.S. · FULFILLMENT CONTROL',zh:'TIKTOK SHOP 美国站 · 履约控制'},title:{en:enTitle,zh:zhTitle},excerpt:{en:'Set a measured daily order ceiling and trigger ladder before Q4 demand outruns fulfillment.',zh:'Q4 放量前，用真实吞吐量设日上限和触发阶梯。'},date:{en:'Oct 14, 2026',zh:'2026 年 10 月 14 日'},read:{en:'14 min read',zh:'14 分钟阅读'},image:{en:`hero-${slug}-en-v1.png`,zh:`hero-${slug}-zh-v1.png`}};
list = list.replace('const BLOG_POSTS = [', `const BLOG_POSTS = [${JSON.stringify(row).replace(/"([A-Za-z_$][\w$]*)":/g,'$1:')},`);
await fs.writeFile(path.join(out, 'BlogList.jsx'), list);
const sandbox = {}; vm.createContext(sandbox); vm.runInContext(await fs.readFile(path.join(root,'.cache/babel-standalone-7.29.0.min.js'),'utf8'),sandbox);
const compiled = sandbox.Babel.transform(list,{presets:[['react',{runtime:'classic'}]],compact:true,minified:true,sourceType:'script'}).code+'\n';
await fs.writeFile(path.join(out, 'BlogList.compiled.js'), compiled);
const version = sha(compiled).slice(0,12);
await fs.writeFile(path.join(out, 'blog.html'), (await fs.readFile(path.join(base,'blog.html'),'utf8')).replace(/BlogList\.compiled\.js\?v=[^"']+/,`BlogList.compiled.js?v=${version}`));
await fs.writeFile(path.join(out, 'sitemap.xml'), (await fs.readFile(path.join(base,'sitemap.xml'),'utf8')).replace('</urlset>',`<url><loc>${url}</loc><lastmod>${date}</lastmod></url><url><loc>${url}?lang=zh</loc><lastmod>${date}</lastmod></url></urlset>`));
await fs.writeFile(path.join(out, 'llms.txt'), (await fs.readFile(path.join(base,'llms.txt'),'utf8'))+`\n- ${enTitle}: ${url}\n  - 中文：${url}?lang=zh\n`);

if (EN.includes('—') || ZH.includes('—')) throw new Error('em dash found');
const enWords = EN.replace(/<[^>]+>/g,' ').trim().split(/\s+/).length;
const zhChars = ZH.replace(/<[^>]+>/g,'').replace(/\s/g,'').length;
const files = (await fs.readdir(out,{recursive:true,withFileTypes:true})).filter(entry=>entry.isFile());
if (enWords < 1300 || zhChars < 1800 || files.length !== 17) throw new Error(`gate failed: words=${enWords}, zh=${zhChars}, files=${files.length}`);
console.log(JSON.stringify({out,version,enWords,zhChars,files:files.length},null,2));
