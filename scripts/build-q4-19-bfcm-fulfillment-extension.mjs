import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import vm from 'node:vm';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const sharp = require('/Users/wendylin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');
const root = path.resolve(import.meta.dirname, '..');
const base = path.join(root, 'outputs/2026-10-15-q4-19-live-baseline/ui_kits/website');
const out = path.join(root, 'outputs/patches/2026-10-15-q4-19-bfcm-fulfillment-extension');
const slug = 'tiktok-shop-bfcm-fulfillment-extension-order-sla';
const date = '2026-10-15';
const url = `https://www.weglobalmarketing.com/blog/${slug}`;
const enTitle = 'Do Not Assume the BFCM Fulfillment Extension Covers Every TikTok Shop Order';
const zhTitle = '不要默认 BFCM 所有订单都自动延长履约：逐单看 SLA';
const enDescription = 'Separate TikTok Shop BFCM extensions from standard, capacity and disruption rules, then control each order with a deadline board and exception log.';
const zhDescription = '区分 TikTok Shop BFCM、标准、产能与临时延期规则，用订单级 Deadline Board 和 Exception Log 控制风险。';
const sources = {
  capacity: 'https://seller-us.tiktok.com/university/essay?course_type=1&from=search&identity=1&knowledge_id=5941246229022506&role=1',
  fulfillment: 'https://seller-us.tiktok.com/university/essay?identity=1&knowledge_id=3995852763301633&role=1',
  bfcm: 'https://seller-us.tiktok.com/university/essay?content_id=2786070166210347&course_type=1&from=new-and-updated&identity=1&knowledge_id=26854147802894&learning_id=26854147802894&module_id=latest_policies&role=seller',
  ldr: 'https://seller-us.tiktok.com/university/essay?default_language=en&knowledge_id=3668989549299511',
  practices: 'https://seller-us.tiktok.com/university/essay?course_type=1&knowledge_id=6179821974439723'
};
const sha = value => crypto.createHash('sha256').update(value).digest('hex');

await fs.rm(out, { recursive: true, force: true });
for (const directory of ['assets', 'blog', 'blog/optimized', 'blog/thumbs', 'blog/q4-19-sla']) await fs.mkdir(path.join(out, directory), { recursive: true });
await fs.copyFile(path.join(base, 'assets/we-logo.png'), path.join(out, 'assets/we-logo.png'));
const logo = (await fs.readFile(path.join(out, 'assets/we-logo.png'))).toString('base64');

function cover(zh) {
  const lines = zh ? ['BFCM 延期', '不是所有订单', '逐单核对 SLA'] : ['BFCM EXTENSION', 'IS NOT EVERY', "ORDER'S SLA"];
  const sizes = zh ? [68, 68, 68] : [63, 63, 63];
  const ys = [220, 300, 380];
  return `<svg width="1792" height="896" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bg" x2="1"><stop stop-color="#fffdf8"/><stop offset="1" stop-color="#e9e3ff"/></linearGradient></defs><rect width="1792" height="896" fill="url(#bg)"/><path d="M1070 0h722v896h-780c165-245 182-650 58-896z" fill="#eeeaff"/><rect x="82" y="78" width="540" height="50" rx="25" fill="#e8efff"/><text x="110" y="111" font-family="Arial" font-size="21" font-weight="800" fill="#1746b8">TIKTOK SHOP · BFCM FULFILLMENT</text>${lines.map((line,i)=>`<text x="82" y="${ys[i]}" font-family="Arial Narrow,Arial,PingFang SC" font-size="${sizes[i]}" font-weight="900" fill="${i===1?'#245bd7':'#17151a'}">${line}</text>`).join('')}<rect x="84" y="456" width="88" height="6" rx="3" fill="#ed168c"/><text x="82" y="520" font-family="Arial,PingFang SC" font-size="25" fill="#4f4a55">${zh?'每个订单，以当前期限为准':'READ THE DEADLINE ON EACH ORDER'}</text><image href="data:image/png;base64,${logo}" x="82" y="700" width="145" height="105"/></svg>`;
}

function capacityVisual(zh) {
  const title = zh ? '订单级 Deadline Board' : 'Order-level deadline board';
  const rows = zh ? [
    ['订单事实','Order ID、收到时间、订单类型','不从批次推断'],
    ['规则来源','BFCM、标准、产能或临时延期','只选有证据的一项'],
    ['当前期限','Dispatch、自动取消、Deliver-by','以订单详情为准'],
    ['有效事件','平台认可的扫描或交接事件','面单不等于发货'],
    ['执行控制','负责人、下一动作、再次回读','终态前保持开放']
  ] : [
    ['ORDER FACT','ID, received time and order type','Never infer from the batch'],
    ['RULE SOURCE','BFCM, standard, capacity or disruption','Use one evidenced path'],
    ['LIVE DEADLINES','Dispatch, auto-cancel and deliver-by','Read Order Details'],
    ['QUALIFYING EVENT','Recognized scan or handoff event','A label is not dispatch'],
    ['EXECUTION CONTROL','Owner, next action and readback','Keep open until terminal']
  ];
  return `<svg width="1600" height="940" xmlns="http://www.w3.org/2000/svg"><rect width="1600" height="940" rx="42" fill="#f5f2ff"/><text x="70" y="105" font-family="Arial,PingFang SC" font-size="42" font-weight="850" fill="#17141d">${title}</text><g transform="translate(70 170)">${rows.map((r,i)=>`<g transform="translate(0 ${i*135})"><rect width="1460" height="108" rx="24" fill="#fff"/><rect width="16" height="108" rx="8" fill="${i===2?'#ed168c':'#245bd7'}"/><text x="55" y="43" font-family="Arial,PingFang SC" font-size="21" font-weight="850" fill="#1746b8">${r[0]}</text><text x="55" y="80" font-family="Arial,PingFang SC" font-size="20" fill="#4f4a55">${r[1]}</text><text x="1390" y="66" text-anchor="end" font-family="Arial,PingFang SC" font-size="21" font-weight="850" fill="${i===2?'#c91472':'#5f57a8'}">${r[2]}</text></g>`).join('')}</g></svg>`;
}

function triggerVisual(zh) {
  const title = zh ? 'Exception Log：只记录需要处置的差异' : 'Exception log: record only actionable differences';
  const steps = zh ? [
    ['规则不符','预期延期未显示','保存订单详情证据'],
    ['期限变化','回读发现时间变化','重排队列并标注原因'],
    ['事件缺失','无认可扫描或交接','联系仓库与承运商'],
    ['取消风险','接近自动取消期限','升级负责人并持续回读']
  ] : [
    ['RULE MISMATCH','Expected extension is absent','Save Order Details evidence'],
    ['DEADLINE CHANGED','A readback shows a new time','Re-sequence and record why'],
    ['EVENT MISSING','No recognized scan or handoff','Escalate warehouse and carrier'],
    ['CANCEL RISK','Auto-cancel deadline is near','Name owner and keep reading back']
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
  return `<svg width="1600" height="860" xmlns="http://www.w3.org/2000/svg"><rect width="1600" height="860" rx="42" fill="#f5f2ff"/><text x="70" y="105" font-family="Arial,PingFang SC" font-size="42" font-weight="850" fill="#17141d">${title}</text><g transform="translate(70 190)">${steps.map((s,i)=>`<g transform="translate(${i*375} 0)"><rect width="340" height="455" rx="32" fill="#fff"/><circle cx="170" cy="88" r="46" fill="${['#e6f3ff','#fff4d5','#fce6d8','#fce0ef'][i]}"/><text x="170" y="98" text-anchor="middle" font-family="Arial" font-size="28" font-weight="900" fill="${['#245bd7','#8e6a00','#c45b18','#c91472'][i]}">${i+1}</text><text x="170" y="180" text-anchor="middle" font-family="Arial,PingFang SC" font-size="22" font-weight="850" fill="#1746b8">${s[0]}</text>${textBlock(s[1],235,20,'#302c35',zh?11:23)}${textBlock(s[2],335,19,'#625b68',zh?12:25)}</g>`).join('')}</g><text x="800" y="760" text-anchor="middle" font-family="Arial,PingFang SC" font-size="25" font-weight="800" fill="#4f4a55">${zh?'没有订单级证据，就不要把延期当作已应用':'No order-level evidence means no extension claim'}</text></svg>`;
}

const scene = await sharp(path.join(root, 'outputs/2026-10-15-q4-19-raw-scene-v1.png')).resize({ width: 850 }).png().toBuffer();
for (const [lang, zh] of [['en', false], ['zh', true]]) {
  const name = `hero-${slug}-${lang}-v1`;
  await sharp(Buffer.from(cover(zh))).composite([{ input: scene, left: 910, top: 145 }]).png().toFile(path.join(out, 'blog', `${name}.png`));
  await sharp(path.join(out, 'blog', `${name}.png`)).resize({ width: 1600 }).jpeg({ quality: 90 }).toFile(path.join(out, 'blog/optimized', `${name}.jpg`));
  await sharp(path.join(out, 'blog', `${name}.png`)).resize({ width: 880 }).jpeg({ quality: 88 }).toFile(path.join(out, 'blog/thumbs', `${name}.jpg`));
  await sharp(Buffer.from(capacityVisual(zh))).png().toFile(path.join(out, 'blog/q4-19-sla', `deadline-board-${lang}-v1.png`));
  await sharp(Buffer.from(triggerVisual(zh))).png().toFile(path.join(out, 'blog/q4-19-sla', `exception-log-${lang}-v1.png`));
}

const faqEn = [
  ['Does the BFCM fulfillment extension cover every TikTok Shop order?', 'No. The current guide defines date windows, seller types and order types. It expressly excludes preorder and backorder orders. Read the deadlines on each Order Details record.'],
  ['What is different for local and international shipping?', 'The current BFCM table expresses local-shipping additions in business days and international-shipping additions in calendar days. Never copy one clock into the other.'],
  ['Does an extra day prove that an order was dispatched on time?', 'No. The deadline and the qualifying dispatch event are different evidence. A created label alone does not necessarily establish recognized carrier handoff.'],
  ['Can Order Handling Capacity create another extension?', 'Current guidance describes an additional capacity-based path for eligible excess orders. It is separate from the BFCM calendar, so verify the exact order record instead of stacking extensions manually.'],
  ['What belongs in the exception log?', 'Record only a material difference: missing expected extension, changed deadline, wrong order classification, absent qualifying event, carrier issue or rising auto-cancel risk.'],
  ['What is the smallest useful action today?', 'Open the oldest unshipped order, capture its order type and three live deadlines, name the rule source, owner and next readback time, then repeat for the risk queue.']
];
const faqZh = [
  ['BFCM Fulfillment Extension 会覆盖所有 TikTok Shop 订单吗？', '不会。当前指引按下单日期、卖家类型和订单类型划分，并明确 Preorder 与 Backorder 不适用。必须读取每个订单详情中的期限。'],
  ['本地发货和国际发货有什么不同？', '当前 BFCM 表格中，本地发货按 Business Day 增加，国际发货按 Calendar Day 增加，不能把一种时钟直接复制给另一种。'],
  ['多一天是否证明订单按时发货？', '不是。Deadline 与有效 Dispatch Event 是两份不同证据。只创建面单不一定构成平台认可的真实承运交接。'],
  ['Order Handling Capacity 会带来另一种延期吗？', '当前指引描述了符合条件的超量订单可能进入产能扩展路径。它与 BFCM 日历不同，不能由团队自行叠加，仍以订单记录为准。'],
  ['Exception Log 应记录什么？', '只记录实质差异：预期延期未显示、期限变化、订单分类错误、有效事件缺失、承运异常或自动取消风险上升。'],
  ['今天最小可执行动作是什么？', '打开最早的未发货订单，记录订单类型与三个当前期限，标明规则来源、负责人和下次回读时间，再处理风险队列。']
];
const faq = (items, zh) => `<section class="faq"><h2>${zh ? '常见问题' : 'Common questions'}</h2>${items.map(([q,a]) => `<div class="faq-item"><h3>${q}</h3><p>${a}</p></div>`).join('')}</section>`;

const EN = `
<header class="hero"><div class="kicker">TIKTOK SHOP U.S. · BFCM FULFILLMENT</div><h1>${enTitle}</h1><p class="dek">Separate the extension rules, then run every risky order from its live deadlines.</p><p class="meta">WE Marketing Team · Oct 15, 2026 · 15 min read</p><img src="/blog/hero-${slug}-en-v1.png" alt="TikTok Shop BFCM fulfillment extension order-level SLA control"></header>
<p><strong>Direct answer:</strong> do not add a BFCM extension to every TikTok Shop order in a spreadsheet. The current U.S. BFCM Seller Campaign Guide defines specific order-receive windows, shipping models and order types. It also states that the BFCM SLA extensions do not apply to preorder and backorder orders. For an operational decision, the controlling evidence is the current Dispatch SLA, Auto-Cancellation SLA and Deliver-by SLA shown on the exact order record. A campaign calendar is a planning input, not proof that an individual order received an extension.</p>
<p>WEM’s control is a deadline board plus an exception log. The deadline board records the platform’s live promise for each risk order. The exception log contains only mismatches that require action. This prevents one campaign announcement from silently rewriting standard orders, international orders, custom handling, capacity-based extensions or temporary disruption rules. It also keeps the warehouse focused on the packages that are genuinely closest to a terminal deadline.</p>
<img class="body-visual" src="/blog/q4-19-sla/deadline-board-en-v1.png" alt="TikTok Shop order-level BFCM deadline board">
<h2>Start with the BFCM table, but stop at the order record</h2>
<p>The current guide lists three BFCM order-receive windows. For local shipping, Standard and Auction orders received November 11 through November 24 receive one additional business day across dispatch, auto-cancellation and deliver-by; November 25 through December 1 receives two additional business days; December 2 through December 5 receives one additional business day. Made-to-Order or Custom Handling Time rows show one additional business day for the deliver-by clock, while dispatch and auto-cancellation are marked not applicable in the table.</p>
<p>International shipping uses calendar days instead of business days. Standard and Auction orders follow a one, two, one calendar-day sequence across the same three windows. Made-to-Order or Custom Handling Time rows show one calendar day in the first window, two calendar days in the second and one calendar day in the third for deliver-by, with dispatch and auto-cancellation marked not applicable. The table expressly says the extensions do not apply to preorder and backorder orders. These details are useful for review, but the live order still decides execution.</p>
<table><tr><th>Order received</th><th>Local Standard and Auction</th><th>International Standard and Auction</th></tr><tr><td>Nov 11 to Nov 24</td><td>+1 business day</td><td>+1 calendar day</td></tr><tr><td>Nov 25 to Dec 1</td><td>+2 business days</td><td>+2 calendar days</td></tr><tr><td>Dec 2 to Dec 5</td><td>+1 business day</td><td>+1 calendar day</td></tr></table>
<h2>Separate four rule sources before assigning a deadline</h2>
<p>The first source is the BFCM calendar extension. It depends on the order-receive window, seller type and order type. The second is the normal fulfillment policy for the relevant order. The current Fulfillment Policy says regular orders should reach In Transit within two business days after entering Awaiting Shipment and describes later auto-cancellation and delivery requirements. Different order products can follow different clocks, so a standard-order rule should not be pasted onto a preorder, backorder or custom-handling record.</p>
<p>The third source is Order Handling Capacity. Current guidance describes a separate path for eligible excess orders above the shop’s configured daily capacity. The fourth is a platform-declared temporary extension for a widespread disruption. Current LDR guidance notes that such extensions can be regional and that TikTok Shop may not notify every seller directly. Neither source should be manually stacked on top of BFCM. Label the source only when it is visible in current guidance and supported by the exact order’s displayed deadline.</p>
<h2>Build the deadline board from live Order Details</h2>
<p>Open Seller Center, go to Manage Orders, choose To Ship and inspect Shipping Method or Order Details. For each priority order, capture Order ID, order-receive timestamp, shipping model, order type, applicable campaign window, current Dispatch SLA, current Auto-Cancellation SLA, current Deliver-by SLA, warehouse, carrier, qualifying event status, owner and the time of the readback. A deadline without its readback time is weak evidence because the platform can update the record.</p>
<p>Sort first by the earliest irreversible deadline, not by the date the row entered someone’s spreadsheet. Auto-cancellation risk may require immediate owner escalation. A package with an earlier dispatch deadline may need the next carrier handoff. An order whose extension is expected but absent belongs in the exception log while the team continues working to the shorter visible deadline. Never wait for support to answer while an active clock expires.</p>
<h2>Keep dispatch proof separate from deadline proof</h2>
<p>An extended deadline does not prove successful dispatch. LDR is evaluated at the order level using recognized qualifying dispatch events. A printed label, packed parcel, warehouse shelf scan or internal “ready” status can be operational progress without being the event TikTok Shop recognizes. The dispatch board should therefore show both the deadline and the qualifying event. Close the dispatch task only after the current order record reflects the required platform event.</p>
<p>Use the carrier and handoff evidence named by the active fulfillment method. If the parcel was physically handed over but the recognized event is absent, record the carrier, tracking number, handoff location, timestamp, manifest or receipt, responsible owner and next readback. This supports escalation without pretending the order has reached the platform’s terminal state.</p>
<img class="body-visual" src="/blog/q4-19-sla/exception-log-en-v1.png" alt="TikTok Shop BFCM SLA exception log">
<h2>Use the exception log for differences, not every order</h2>
<p>The deadline board is the operating queue. The exception log is narrower. Add an entry when the expected extension is absent, the order is classified differently from the plan, a deadline changes between readbacks, a qualifying event is missing after handoff, the carrier cannot meet the remaining window, or the order approaches auto-cancellation. Store the old value, current value, evidence link, operational impact, owner, next action and next readback.</p>
<p>Do not make “extension applied” a free-text assumption. Use explicit states such as Confirmed on Order Details, Not Displayed, Not Applicable, Changed, or Unknown. Unknown is a real state, not permission to choose the longer deadline. Work to the visible deadline while the owner resolves the discrepancy. Close the exception only when the order record, carrier evidence or support resolution reaches a terminal, attributable result.</p>
<h2>A hypothetical order shows why bulk extension fails</h2>
<p>Suppose a local Standard order is received on November 27 and its Order Details shows a later dispatch and auto-cancellation deadline consistent with the two-business-day BFCM window. That record can be scheduled from the displayed times. A preorder received the same day is expressly excluded from the BFCM extension, so the first order’s treatment cannot be copied. An international custom-handling order received the same day follows a different table row and a calendar-day deliver-by addition. These are hypothetical examples for applying the method, not promises about any live shop.</p>
<p>Now suppose the local Standard order also arrived after the shop exceeded its configured capacity. The team should not add the BFCM days and a capacity day on its own. It should read the platform-generated deadlines, record the confirmed source if visible and operate from the live times. This is the practical boundary between policy literacy and unauthorized deadline arithmetic.</p>
<h2>Review the board at three operational moments</h2>
<table><tr><th>Moment</th><th>Readback</th><th>Decision</th></tr><tr><td>Start of shift</td><td>Order type, three deadlines, backlog age</td><td>Assign owner and carrier window</td></tr><tr><td>Before carrier cutoff</td><td>Package state, qualifying event, exception status</td><td>Handoff, escalate or reroute</td></tr><tr><td>After handoff</td><td>Recognized event and current order state</td><td>Close or keep exception open</td></tr></table>
<p>During a BFCM surge, run the review more frequently for the risk queue. Track normal throughput separately from exception work so the warehouse can see whether a policy mismatch, inventory problem, packing constraint or carrier issue is causing the pressure. Change one control at a time where possible. Adding labor, changing carrier service and editing order classifications together destroys the learning signal.</p>
<h2>The smallest useful action today</h2>
<p>Open the oldest unshipped order. Record its exact order type, receive time, shipping model, three live deadlines and recognized-event status. Assign one owner and a next readback time. If the expected BFCM extension is not visible, work to the shorter displayed deadline and open an exception with evidence. Repeat for the next highest-risk order until every package near an irreversible deadline has a named action.</p>
<h2>Source notes</h2>
<p>This original WE Marketing operating framework draws on complete current TikTok Shop U.S. Seller University guidance in the <a href="${sources.bfcm}">2026 BFCM Seller Campaign Guide</a>, <a href="${sources.fulfillment}">Fulfillment Policy</a>, <a href="${sources.ldr}">Late Dispatch Rate Requirements</a>, <a href="${sources.capacity}">Order Handling Capacity Tool</a>, and <a href="${sources.practices}">Best Practices for Order Fulfillment</a>, revalidated October 15, 2026. Campaign windows, eligible order types, platform extensions, account access and displayed deadlines can change. Verify the current U.S. Seller Center and the exact order record before execution.</p>
${faq(faqEn, false)}
<h2>Related WEM guides</h2><section class="related-grid"><a href="/blog/tiktok-shop-order-capacity-q4-demand-spike"><strong>Q4 order capacity control</strong><span>Set the ceiling and trigger ladder before demand spikes.</span></a><a href="/blog/tiktok-shop-qualifying-dispatch-event"><strong>Qualifying dispatch evidence</strong><span>Separate labels, handoff and recognized events.</span></a><a href="/blog/tiktok-shop-collection-warehouse-handoff"><strong>CBT warehouse handoff SOP</strong><span>Control cutoff, scan, custody and exceptions.</span></a></section>`;

const ZH = `
<header class="hero"><div class="kicker">TIKTOK SHOP 美国站 · BFCM 履约</div><h1>${zhTitle}</h1><p class="dek">先拆清延期规则，再按照每个订单的当前期限执行。</p><p class="meta">WE Marketing Team · 2026 年 10 月 15 日 · 15 分钟阅读</p><img src="/blog/hero-${slug}-zh-v1.png" alt="TikTok Shop BFCM 订单级履约 SLA 控制"></header>
<p><strong>直接答案：</strong>不要在内部表格里给所有 TikTok Shop 订单统一增加 BFCM 延期。当前美国站 BFCM Seller Campaign Guide 按 Order Receive Date、Shipping Model 与 Order Type 划分适用范围，并明确说明 Preorder 和 Backorder 不适用这些 BFCM SLA Extension。真正用于执行的证据，是准确订单记录当前显示的 Dispatch SLA、Auto-Cancellation SLA 与 Deliver-by SLA。活动日历只能用来计划，不能证明某一单已经得到延期。</p>
<p>WEM 的控制方法是 Deadline Board 加 Exception Log。Deadline Board 保存每个风险订单的实时平台期限；Exception Log 只记录需要动作的差异。这样可以防止一条 Campaign 公告静默覆盖 Standard、International、Custom Handling、Capacity-based Extension 或临时区域性延期，也可以让仓库优先处理最接近不可逆期限的 Package。</p>
<img class="body-visual" src="/blog/q4-19-sla/deadline-board-zh-v1.png" alt="TikTok Shop BFCM 订单级 Deadline Board">
<h2>先读 BFCM 表格，但执行必须回到订单记录</h2>
<p>当前指引列出三个 BFCM 收单窗口。本地发货的 Standard 与 Auction 订单，如果在 11 月 11 日至 11 月 24 日收到，Dispatch、Auto-Cancellation 与 Deliver-by 各增加 1 个 Business Day；11 月 25 日至 12 月 1 日各增加 2 个 Business Day；12 月 2 日至 12 月 5 日各增加 1 个 Business Day。Made-to-Order 或 Custom Handling Time 行在 Deliver-by 显示增加 1 个 Business Day，而 Dispatch 和 Auto-Cancellation 在表格中为 N/A。</p>
<p>International Shipping 使用 Calendar Day，而不是 Business Day。Standard 与 Auction 在三个窗口依次是增加 1、2、1 个 Calendar Day。Made-to-Order 或 Custom Handling Time 的 Deliver-by 在三个窗口依次增加 1、2、1 个 Calendar Day，Dispatch 与 Auto-Cancellation 仍为 N/A。表格明确说明这些延期不适用于 Preorder 与 Backorder。以上信息用于复核，但实际操作仍以 Live Order 为准。</p>
<table><tr><th>收到订单日期</th><th>本地 Standard 与 Auction</th><th>国际 Standard 与 Auction</th></tr><tr><td>11 月 11 日至 11 月 24 日</td><td>+1 Business Day</td><td>+1 Calendar Day</td></tr><tr><td>11 月 25 日至 12 月 1 日</td><td>+2 Business Days</td><td>+2 Calendar Days</td></tr><tr><td>12 月 2 日至 12 月 5 日</td><td>+1 Business Day</td><td>+1 Calendar Day</td></tr></table>
<h2>分开四种规则来源，再给订单安排期限</h2>
<p>第一种是 BFCM Calendar Extension，取决于收单窗口、Seller Type 与 Order Type。第二种是对应订单的 Normal Fulfillment Policy。当前 Fulfillment Policy 说明，Regular Order 进入 Awaiting Shipment 后应在两个 Business Day 内达到 In Transit，并描述后续自动取消和送达要求。不同订单产品可能使用不同 Clock，Standard Order 规则不能直接复制给 Preorder、Backorder 或 Custom Handling。</p>
<p>第三种是 Order Handling Capacity。当前指引描述了店铺超过设定 Daily Capacity 后，符合条件的超量订单可能进入另一条扩展路径。第四种是平台针对大范围异常发布的 Temporary Extension。当前 LDR 指引说明，这类延期可能只覆盖特定地区，而且平台不一定逐一通知每个卖家。团队不能手动把这些路径叠加到 BFCM 上。只有在当前指引可见，并且准确订单显示的期限支持时，才能标明来源。</p>
<h2>从 Live Order Details 建立 Deadline Board</h2>
<p>进入 Seller Center 的 Manage Orders，打开 To Ship，再检查 Shipping Method 或 Order Details。对每个优先订单记录 Order ID、收到订单时间、Shipping Model、Order Type、适用活动窗口、当前 Dispatch SLA、当前 Auto-Cancellation SLA、当前 Deliver-by SLA、Warehouse、Carrier、Qualifying Event 状态、负责人和回读时间。没有回读时间的 Deadline 证据很弱，因为平台记录可能变化。</p>
<p>排序时优先看最早的不可逆期限，而不是订单进入内部表格的日期。接近 Auto-Cancellation 的订单需要立即升级负责人；Dispatch Deadline 更早的 Package 需要优先进入下一班 Carrier Handoff；预期有延期但未显示的订单要进入 Exception Log，同时继续按照较短的可见期限执行。不能因为等待 Support 回复，让仍在运行的 Clock 过期。</p>
<h2>Deadline 证据与 Dispatch 证据必须分开</h2>
<p>Deadline 延长不等于已经成功发货。LDR 按订单级别与平台认可的 Qualifying Dispatch Event 评估。创建面单、完成打包、仓库内部扫描或标记 Ready，都可能代表运营进度，但不一定是 TikTok Shop 认可的事件。因此 Deadline Board 必须同时显示当前期限与 Qualifying Event，只有订单记录反映要求的平台事件后，才能关闭 Dispatch Task。</p>
<p>按照当前 Fulfillment Method 保存 Carrier 与 Handoff 证据。如果包裹已经真实交接，但平台事件还未出现，就记录 Carrier、Tracking Number、交接地点、时间、Manifest 或 Receipt、负责人和下次回读。这些证据可以支持升级，但不能被描述为平台已经达到终态。</p>
<img class="body-visual" src="/blog/q4-19-sla/exception-log-zh-v1.png" alt="TikTok Shop BFCM SLA Exception Log">
<h2>Exception Log 只记录差异，不复制全部订单</h2>
<p>Deadline Board 是主执行队列，Exception Log 的范围更窄。预期延期未出现、订单分类和计划不同、两次回读之间 Deadline 变化、真实交接后仍缺少 Qualifying Event、Carrier 无法满足剩余窗口，或订单接近 Auto-Cancellation 时，才新增异常。每条记录包含 Old Value、Current Value、Evidence Link、Operational Impact、Owner、Next Action 与 Next Readback。</p>
<p>不要用自由文本写“延期已应用”。使用明确状态，例如 Confirmed on Order Details、Not Displayed、Not Applicable、Changed 或 Unknown。Unknown 是真实状态，但不代表可以选择更长的期限。负责人解决差异期间，团队仍按照可见期限执行。只有订单记录、承运证据或 Support Resolution 达到可归属的终态后，才关闭异常。</p>
<h2>一个假设例子说明为什么不能批量延期</h2>
<p>假设一笔本地 Standard Order 在 11 月 27 日收到，而且 Order Details 显示了与两天 BFCM Window 相符的更晚 Dispatch 和 Auto-Cancellation Deadline，团队可以按照页面显示的时间排程。同一天收到的 Preorder 明确不适用 BFCM Extension，不能复制第一笔订单的处理方式。当天收到的 International Custom Handling Order 又属于不同表格行，并使用 Calendar Day 的 Deliver-by Extension。以上只是方法示例，不是对任何 Live Shop 的承诺。</p>
<p>如果第一笔本地 Standard Order 同时发生在店铺超过 Configured Capacity 之后，团队也不能自行把 BFCM 天数与 Capacity Day 相加。必须读取平台生成的 Deadline，在可见时记录已确认的来源，并按照 Live Time 执行。这就是理解政策与擅自计算期限之间的边界。</p>
<h2>在三个运营节点回读</h2>
<table><tr><th>节点</th><th>回读内容</th><th>决定</th></tr><tr><td>班次开始</td><td>Order Type、三个期限、Backlog Age</td><td>分配负责人和 Carrier Window</td></tr><tr><td>承运 Cutoff 前</td><td>Package State、有效事件、异常状态</td><td>交接、升级或改道</td></tr><tr><td>交接之后</td><td>认可事件与当前订单状态</td><td>关闭或保持异常开放</td></tr></table>
<p>BFCM 爆单期间，对风险队列增加回读频率。把普通吞吐量与 Exception Work 分开统计，才能判断压力来自政策差异、库存问题、打包约束还是承运异常。在条件允许时一次只改变一项控制；同时加人、更换 Carrier Service 和修改 Order Classification 会破坏学习信号。</p>
<h2>今天就做的最小动作</h2>
<p>打开最早的未发货订单，记录准确 Order Type、Receive Time、Shipping Model、三个 Live Deadline 与 Recognized-event Status。分配一名负责人和下一次回读时间。如果预期的 BFCM Extension 没有显示，就按照较短的页面期限执行，并以证据创建 Exception。逐单重复，直到所有接近不可逆期限的 Package 都有明确动作。</p>
<h2>来源说明</h2>
<p>这套 WE Marketing 原创运营框架基于 2026 年 10 月 15 日完整重新核验的 TikTok Shop 美国站 Seller University <a href="${sources.bfcm}">2026 BFCM Seller Campaign Guide</a>、<a href="${sources.fulfillment}">Fulfillment Policy</a>、<a href="${sources.ldr}">Late Dispatch Rate Requirements</a>、<a href="${sources.capacity}">Order Handling Capacity Tool</a>与<a href="${sources.practices}">Best Practices for Order Fulfillment</a>。活动窗口、适用订单类型、平台延期、账号权限与显示期限都可能变化，执行前必须核对当前美国站 Seller Center 与准确订单记录。</p>
${faq(faqZh, true)}
<h2>相关 WEM 指南</h2><section class="related-grid"><a href="/blog/tiktok-shop-order-capacity-q4-demand-spike?lang=zh"><strong>Q4 订单产能控制</strong><span>放量前设置上限与 Trigger Ladder。</span></a><a href="/blog/tiktok-shop-qualifying-dispatch-event?lang=zh"><strong>有效发货证据</strong><span>区分面单、交接与认可事件。</span></a><a href="/blog/tiktok-shop-collection-warehouse-handoff?lang=zh"><strong>CBT 仓库交接 SOP</strong><span>控制截单、扫描、Custody 与异常。</span></a></section>`;

const citations = Object.values(sources);
const graph = {'@context':'https://schema.org','@graph':[
  {'@type':'BlogPosting','@id':`${url}#article`,headline:enTitle,description:enDescription,inLanguage:'en-US',author:{'@type':'Organization','@id':'https://www.weglobalmarketing.com/#editorial-team',name:'WE Marketing Team'},publisher:{'@type':'Organization','@id':'https://www.weglobalmarketing.com/#organization',name:'WE Marketing',alternateName:'WEM'},image:{'@type':'ImageObject',url:`https://www.weglobalmarketing.com/blog/hero-${slug}-en-v1.png`,width:1792,height:896},datePublished:date,dateModified:date,mainEntityOfPage:{'@type':'WebPage','@id':url},citation:citations,keywords:['TikTok Shop BFCM fulfillment extension','TikTok Shop order SLA','Late Dispatch Rate','BFCM order deadlines']},
  {'@type':'BlogPosting','@id':`${url}?lang=zh#article`,headline:zhTitle,description:zhDescription,inLanguage:'zh-CN',translationOfWork:{'@id':`${url}#article`},author:{'@id':'https://www.weglobalmarketing.com/#editorial-team'},publisher:{'@id':'https://www.weglobalmarketing.com/#organization'},image:{'@type':'ImageObject',url:`https://www.weglobalmarketing.com/blog/hero-${slug}-zh-v1.png`,width:1792,height:896},datePublished:date,dateModified:date,mainEntityOfPage:{'@type':'WebPage','@id':`${url}?lang=zh`},citation:citations},
  ...[[faqEn,'en-US',`${url}#faq`],[faqZh,'zh-CN',`${url}?lang=zh#faq`]].map(([items,lang,id])=>({'@type':'FAQPage','@id':id,inLanguage:lang,mainEntity:items.map(([name,text])=>({'@type':'Question',name,acceptedAnswer:{'@type':'Answer',text}}))})),
  {'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:'https://www.weglobalmarketing.com/'},{'@type':'ListItem',position:2,name:'Blog',item:'https://www.weglobalmarketing.com/blog'},{'@type':'ListItem',position:3,name:enTitle,item:url}]}
]};

const old = await fs.readFile(path.join(base, 'blog/tiktok-shop-order-capacity-q4-demand-spike.html'), 'utf8');
const style = old.match(/<style>[\s\S]*?<\/style>/)[0];
const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><script>document.documentElement.dataset.lang=new URLSearchParams(location.search).get('lang')==='zh'?'zh':'en';document.documentElement.lang=document.documentElement.dataset.lang==='zh'?'zh-CN':'en'</script><title>${enTitle} | WE Marketing</title><meta name="description" content="${enDescription}"><link rel="canonical" href="${url}"><link rel="alternate" hreflang="en-US" href="${url}"><link rel="alternate" hreflang="zh-CN" href="${url}?lang=zh"><link rel="alternate" hreflang="x-default" href="${url}"><script type="application/ld+json">${JSON.stringify(graph)}</script>${style}</head><body><nav class="nav"><a class="logo" href="/"><img src="/assets/we-logo.png" alt="WE Marketing"></a><a href="/services">SERVICES</a><a href="/about">ABOUT</a><a href="/blog">BLOG</a><span class="spacer"></span><div class="switch"><a class="zh" href="?lang=zh">中文</a><a class="en" href="?">EN</a></div></nav><main class="wrap"><div class="tools"><a class="en" href="/blog">← BLOG</a><a class="zh" href="/blog?lang=zh">← 博客</a></div><article lang="en">${EN}</article><article lang="zh-CN">${ZH}</article></main><section class="cta"><h2 class="en">READY TO TALK<br>TO WEM?</h2><h2 class="zh">准备好和 WEM<br>一起把计划落地吗？</h2><p class="en">Turn live order deadlines into an accountable BFCM fulfillment system.</p><p class="zh">把订单实时期限变成可追责的 BFCM 履约系统。</p><a class="en" href="https://scheduler.zoom.us/wendylin001">BOOK A DISCOVERY CALL</a><a class="zh" href="https://scheduler.zoom.us/wendylin001">预约咨询</a></section><footer class="footer"><img src="/assets/we-logo.png" alt="WE Marketing"><p class="en">WE Marketing connects strategy, creator operations, paid growth and TikTok Shop execution.</p><p class="zh">WE Marketing 帮助品牌连接策略、达人运营、付费增长与 TikTok Shop 执行。</p><p>© 2026 WE Marketing. All rights reserved.</p></footer><script>if(document.documentElement.dataset.lang==='zh'){document.title=${JSON.stringify(zhTitle+' | WE Marketing')};document.querySelector('meta[name=description]').content=${JSON.stringify(zhDescription)};document.querySelector('link[rel=canonical]').href='${url}?lang=zh'}</script></body></html>`;
await fs.writeFile(path.join(out, 'blog', `${slug}.html`), html);

let list = await fs.readFile(path.join(base, 'BlogList.jsx'), 'utf8');
const row = {slug,tags:['tiktok-shop','shop-operations','fulfillment'],cat:{en:'TIKTOK SHOP U.S. · BFCM FULFILLMENT',zh:'TIKTOK SHOP 美国站 · BFCM 履约'},title:{en:enTitle,zh:zhTitle},excerpt:{en:'Separate BFCM extension rules and operate every risky order from its live deadlines.',zh:'区分 BFCM 延期规则，逐单按照当前期限处理风险。'},date:{en:'Oct 15, 2026',zh:'2026 年 10 月 15 日'},read:{en:'15 min read',zh:'15 分钟阅读'},image:{en:`hero-${slug}-en-v1.png`,zh:`hero-${slug}-zh-v1.png`}};
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
