import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import vm from 'node:vm';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const sharp = require('/Users/wendylin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');
const root = path.resolve(import.meta.dirname, '..');
const base = path.join(root, 'outputs/patches/2026-10-12-q4-16-cbt-warehouse-handoff');
const out = path.join(root, 'outputs/patches/2026-10-13-q4-17-qualifying-dispatch');
const slug = 'tiktok-shop-qualifying-dispatch-event';
const date = '2026-10-13';
const url = `https://www.weglobalmarketing.com/blog/${slug}`;
const enTitle = 'What Counts as a TikTok Shop Qualifying Dispatch Event?';
const zhTitle = 'TikTok Shop 什么才算有效发货：面单、交仓和承运商扫描不是一回事';
const enDescription = 'Separate label creation, Awaiting Collection, physical handoff, eligible manifest scans and carrier acceptance with one order-level dispatch evidence table.';
const zhDescription = '用订单级发货证据表区分打印面单、Awaiting Collection、实体交仓、合资格扫描与承运商接收。';
const sources = {
  logistics: 'https://seller-us.tiktok.com/university/essay?identity=1&knowledge_id=7740101263378189&role=1',
  fulfillment: 'https://seller-us.tiktok.com/university/essay?identity=1&knowledge_id=3995852763301633&role=1',
  shipping: 'https://seller-us.tiktok.com/university/essay?knowledge_id=6837879804970754',
  ldr: 'https://seller-us.tiktok.com/university/essay?identity=1&knowledge_id=3668989549299511&role=1',
  manifest: 'https://seller-us.tiktok.com/university/essay?knowledge_id=2159226148472596'
};
const sha = value => crypto.createHash('sha256').update(value).digest('hex');

await fs.rm(out, { recursive: true, force: true });
await fs.cp(base, out, { recursive: true });
await fs.mkdir(path.join(out, 'blog/q4-17-dispatch'), { recursive: true });
const logo = (await fs.readFile(path.join(out, 'assets/we-logo.png'))).toString('base64');

function cover(zh) {
  const l1 = zh ? '什么才算' : 'WHAT COUNTS AS';
  const l2 = zh ? '有效发货？' : 'DISPATCH?';
  const sub = zh ? '面单 · 交仓 · 扫描 · 轨迹' : 'LABEL · HANDOFF · SCAN · TRACK';
  return `<svg width="1792" height="896" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bg" x2="1"><stop stop-color="#fffdf8"/><stop offset="1" stop-color="#e9e3ff"/></linearGradient></defs><rect width="1792" height="896" fill="url(#bg)"/><path d="M1070 0h722v896h-780c165-245 182-650 58-896z" fill="#eeeaff"/><rect x="82" y="78" width="560" height="50" rx="25" fill="#e8efff"/><text x="110" y="111" font-family="Arial" font-size="21" font-weight="800" fill="#1746b8">TIKTOK SHOP · FULFILLMENT CONTROL</text><text x="82" y="250" font-family="Arial Narrow,Arial,PingFang SC" font-size="${zh ? 78 : 66}" font-weight="900" fill="#17151a">${l1}</text><text x="82" y="340" font-family="Arial Narrow,Arial,PingFang SC" font-size="${zh ? 76 : 76}" font-weight="900" fill="#245bd7">${l2}</text><rect x="84" y="438" width="88" height="6" rx="3" fill="#ed168c"/><text x="82" y="505" font-family="Arial,PingFang SC" font-size="25" fill="#4f4a55">${sub}</text><image href="data:image/png;base64,${logo}" x="82" y="700" width="145" height="105"/></svg>`;
}

function evidenceVisual(zh) {
  const title = zh ? '订单级发货证据表' : 'Order-level dispatch evidence table';
  const rows = zh ? [['面单已创建','只证明 Tracking 与包裹计划已生成','不是实体交接'],['Awaiting Collection','Tracking 已加入，等待承运接收','不是 In Transit'],['Manifest / In-App Scan','仅合资格订单可能计入 SLA','不能替代实体交仓'],['承运商 Acceptance Scan','证明承运网络接收包裹','核对时间与准确订单'],['In Transit 回读','Seller Center 已识别有效节点','继续监控后续轨迹']] : [['LABEL CREATED','Tracking and package plan exist','Not physical handoff'],['AWAITING COLLECTION','Tracking added; carrier receipt pending','Not In Transit'],['MANIFEST / IN-APP SCAN','May qualify for eligible orders','Does not replace handoff'],['CARRIER ACCEPTANCE SCAN','Carrier network received parcel','Match time to exact order'],['IN TRANSIT READBACK','Seller Center recognized an event','Keep monitoring movement']];
  return `<svg width="1600" height="940" xmlns="http://www.w3.org/2000/svg"><rect width="1600" height="940" rx="42" fill="#f5f2ff"/><text x="70" y="105" font-family="Arial,PingFang SC" font-size="42" font-weight="850" fill="#17141d">${title}</text><g transform="translate(70 170)">${rows.map((r,i)=>`<g transform="translate(0 ${i*135})"><rect width="1460" height="108" rx="24" fill="#fff"/><rect width="16" height="108" rx="8" fill="${i===3?'#ed168c':'#245bd7'}"/><text x="55" y="43" font-family="Arial,PingFang SC" font-size="21" font-weight="850" fill="#1746b8">${r[0]}</text><text x="55" y="80" font-family="Arial,PingFang SC" font-size="20" fill="#4f4a55">${r[1]}</text><text x="1390" y="66" text-anchor="end" font-family="Arial,PingFang SC" font-size="21" font-weight="850" fill="${i===3?'#c91472':'#5f57a8'}">${r[2]}</text></g>`).join('')}</g></svg>`;
}

function decisionVisual(zh) {
  const title = zh ? '不要用一个状态替代整条证据链' : 'Do not let one status replace the evidence chain';
  const steps = zh ? [['准备','订单、包裹、SKU、仓库'],['建单','面单、Tracking、服务方式'],['交接','实体包裹、承运商、时间'],['认定','合资格扫描与 In Transit'],['复核','异常、轨迹、最终结果']] : [['PREPARE','Order, parcel, SKU, warehouse'],['CREATE','Label, tracking, service'],['HAND OFF','Physical parcel, carrier, time'],['QUALIFY','Eligible event and In Transit'],['VERIFY','Exception, movement, outcome']];
  return `<svg width="1600" height="860" xmlns="http://www.w3.org/2000/svg"><rect width="1600" height="860" rx="42" fill="#f5f2ff"/><text x="70" y="105" font-family="Arial,PingFang SC" font-size="42" font-weight="850" fill="#17141d">${title}</text><g transform="translate(55 210)">${steps.map((s,i)=>`<g transform="translate(${i*305} 0)"><rect width="270" height="420" rx="30" fill="#fff"/><circle cx="135" cy="85" r="42" fill="${i===3?'#fce0ef':'#e8efff'}"/><text x="135" y="96" text-anchor="middle" font-family="Arial" font-size="28" font-weight="900" fill="${i===3?'#c91472':'#1746b8'}">${i+1}</text><text x="135" y="170" text-anchor="middle" font-family="Arial,PingFang SC" font-size="22" font-weight="850" fill="#1746b8">${s[0]}</text><foreignObject x="35" y="210" width="200" height="120"><div xmlns="http://www.w3.org/1999/xhtml" style="font:20px Arial,PingFang SC;line-height:1.45;text-align:center;color:#302c35">${s[1]}</div></foreignObject><path d="M92 350h86" stroke="${i===3?'#ed168c':'#245bd7'}" stroke-width="12" stroke-linecap="round"/></g>`).join('')}</g><text x="800" y="765" text-anchor="middle" font-family="Arial,PingFang SC" font-size="25" font-weight="800" fill="#4f4a55">${zh?'合资格事件用于时效判断，实体交接与真实履约仍需单独证明':'A qualifying event can support SLA measurement; real handoff and fulfillment still need proof'}</text></svg>`;
}

const scene = await sharp(path.join(root, 'outputs/2026-10-13-q4-17-raw-scene-v1.png')).resize({ width: 900 }).png().toBuffer();
for (const [lang, zh] of [['en', false], ['zh', true]]) {
  const name = `hero-${slug}-${lang}-v1`;
  await sharp(Buffer.from(cover(zh))).composite([{ input: scene, left: 875, top: 180 }]).png().toFile(path.join(out, 'blog', `${name}.png`));
  await sharp(path.join(out, 'blog', `${name}.png`)).resize({ width: 1600 }).jpeg({ quality: 90 }).toFile(path.join(out, 'blog/optimized', `${name}.jpg`));
  await sharp(path.join(out, 'blog', `${name}.png`)).resize({ width: 880 }).jpeg({ quality: 88 }).toFile(path.join(out, 'blog/thumbs', `${name}.jpg`));
  await sharp(Buffer.from(evidenceVisual(zh))).png().toFile(path.join(out, 'blog/q4-17-dispatch', `evidence-table-${lang}-v1.png`));
  await sharp(Buffer.from(decisionVisual(zh))).png().toFile(path.join(out, 'blog/q4-17-dispatch', `dispatch-chain-${lang}-v1.png`));
}

const faqEn = [
  ['Does printing a TikTok Shop shipping label count as dispatch?', 'No. A label and tracking record prepare the shipment, but the parcel still needs the qualifying event required by the current fulfillment rules.'],
  ['Is Awaiting Collection the same as In Transit?', 'No. Awaiting Collection means shipment information has been added and the package is waiting for carrier receipt. In Transit reflects a recognized logistics event.'],
  ['Can a TikTok Manifest scan count as a qualifying dispatch event?', 'For eligible orders, TikTok Shop says a successful manifest or in-app scan may count for Dispatch SLA measurement. Eligibility and access must be verified for the exact order.'],
  ['Does a qualifying manifest scan replace physical carrier handoff?', 'No. TikTok Shop states that manifest scanning does not replace physical handoff or the carrier scan. Packages must be ready and handed over promptly.'],
  ['What if a carrier scan is missing after handoff?', 'Keep the physical handoff evidence, open a carrier or Seller Center exception, and monitor the exact order until the recognized status and tracking movement appear.'],
  ['What is the smallest useful dispatch control?', 'Create one order-level row that records label time, physical handoff, qualifying event, In Transit readback, evidence link, owner and next-check deadline.']
];
const faqZh = [
  ['打印 TikTok Shop 面单就算发货了吗？', '不算。面单和 Tracking Record 只是在准备 Shipment，包裹还必须出现当前履约规则认可的合资格事件。'],
  ['Awaiting Collection 等于 In Transit 吗？', '不等于。Awaiting Collection 表示运输信息已加入、包裹等待承运商接收；In Transit 反映平台识别到物流节点。'],
  ['TikTok Manifest Scan 能算 Qualifying Dispatch Event 吗？', '对于合资格订单，TikTok Shop 说明成功的 Manifest 或 In-App Scan 可能用于 Dispatch SLA 判断，但必须核对准确订单是否符合资格以及账号是否有权限。'],
  ['合资格 Manifest Scan 能替代实体交仓吗？', '不能。TikTok Shop 明确说明 Manifest Scan 不替代实体交接或承运商扫描；包裹必须真正准备好并及时交给承运商。'],
  ['实体交接后一直没有承运扫描怎么办？', '保留实体交接证据，立即向承运商或 Seller Center 开异常，并持续核对准确订单，直到平台识别状态与后续轨迹出现。'],
  ['今天最小可执行的发货控制是什么？', '为一笔订单建立一行证据，记录面单时间、实体交接、合资格事件、In Transit 回读、证据链接、负责人和下次检查截止时间。']
];
const faq = (items, zh) => `<section class="faq"><h2>${zh ? '常见问题' : 'Common questions'}</h2>${items.map(([q,a]) => `<div class="faq-item"><h3>${q}</h3><p>${a}</p></div>`).join('')}</section>`;

const EN = `
<header class="hero"><div class="kicker">TIKTOK SHOP U.S. · FULFILLMENT CONTROL</div><h1>${enTitle}</h1><p class="dek">Separate shipment preparation from the event TikTok Shop recognizes for dispatch timing.</p><p class="meta">WE Marketing Team · Oct 13, 2026 · 14 min read</p><img src="/blog/hero-${slug}-en-v1.png" alt="TikTok Shop qualifying dispatch event evidence system"></header>
<p><strong>Direct answer:</strong> printing a label is not dispatch, changing an order to Awaiting Collection is not the same as carrier acceptance, and a physical handoff without a recognized event may still leave the platform without timely dispatch evidence. Under the current U.S. Fulfillment Policy, orders generally meet dispatch requirements when they receive the required carrier scan within the applicable Dispatch SLA. Where available and eligible, a manifest or in-app scan may also be recognized as a qualifying dispatch event for SLA measurement. That special recognition does not replace accurate preparation, real carrier handoff, or continued tracking.</p>
<p>The practical control is an order-level evidence table. For every package, record when the label was created, when tracking was attached, when the parcel physically left seller custody, which event may qualify for the SLA, when Seller Center showed In Transit, and who owns the next exception check. That table prevents five different operational moments from being collapsed into one vague statement: “we shipped it.”</p>
<img class="body-visual" src="/blog/q4-17-dispatch/evidence-table-en-v1.png" alt="Order-level TikTok Shop dispatch evidence table">
<h2>Start with the exact order and its applicable SLA</h2>
<p>A dispatch decision begins with the order type, not a warehouse assumption. Regular orders, made-to-order items, backorders, custom handling, pre-orders and virtual goods can follow different clocks. Current account settings and order-level deadlines remain controlling. Before deciding whether an event is late or qualifying, capture the order ID, package ID, order type, shipping method, warehouse, current status, dispatch deadline and assigned carrier.</p>
<p>This matters because a clean-looking daily average can hide the precise package that lacks evidence. The team should never infer that every order in a batch shares the same eligibility merely because one package received a manifest scan. Keep the SLA and recognized event at package level. If a policy, account feature or carrier integration changes, the team can then update affected rows without rewriting the history of unrelated orders.</p>
<h2>Label creation is preparation, not proof of movement</h2>
<p>A label connects a package plan to a carrier service and tracking identifier. It helps the warehouse pick, pack and stage the right item, but it does not prove that the package left the facility. The Customer Order Shipping Requirements tell sellers using TikTok Shipping not to print the label until they are ready to hand the parcel to the carrier. Printing too early widens the gap between Awaiting Collection and In Transit and can create complaints or enforcement risk.</p>
<p>Record the label ID, tracking ID, service, label purchase time, packed weight and final package dimensions. Confirm that the tracking ID in Seller Center matches the label on the physical parcel. If the label is canceled and replaced, the prior evidence cannot automatically be attached to the new label. The package row must point to the current tracking identity and any applicable scan must be repeated under the correct record.</p>
<h2>Awaiting Collection is an intermediate state</h2>
<p>For TikTok Shipping, arranging the shipment adds tracking information and changes the order to Awaiting Collection. This state tells the operation that a carrier handoff is expected. It does not by itself establish that the carrier received the parcel. Treat it as an open custody state: the seller still needs to preserve the package, complete the correct handoff and monitor for a recognized logistics event.</p>
<p>A long interval between Awaiting Collection and In Transit is not harmless, even if a dashboard initially appears to show the Dispatch SLA was met. The current shipping requirements say that unusually long delays can increase customer complaints and enforcement risk. The evidence table therefore needs an Awaiting Collection timestamp and a next-check deadline. When that deadline passes without movement, the row becomes an exception with a named owner.</p>
<h2>Physical handoff needs its own evidence</h2>
<p>The carrier arrives, counts parcels and removes them from the dock. That is an operational custody transfer, but the platform may still be waiting for an acceptance scan. Keep a dock log, pickup receipt, batch photo or other permitted record that identifies the carrier, warehouse, time and package count. For higher-risk batches, reconcile individual Package IDs rather than relying only on the total number of cartons.</p>
<p>Physical proof helps investigate a missing carrier event, but it is not permission to mark a package as successfully recognized by the platform. The owner still checks Seller Center and the tracking page. If the carrier received the parcel but no event appears, open the correct carrier or platform support path while the handoff evidence is fresh. Do not create a new status merely to close an internal report.</p>
<h2>Carrier acceptance is the standard recognized boundary</h2>
<p>The current Fulfillment Policy states that sellers must have orders scanned by a carrier within the applicable Dispatch SLA. Once an order is successfully scanned, Seller Center updates it to In Transit. The accepted event must belong to the exact package and tracking ID. A scan on a different parcel, an internal warehouse scan or an unrelated batch total cannot be used as a substitute.</p>
<p>Operationally, capture the event timestamp, event name, carrier, source system and readback time. If the first event appears after the order deadline, preserve both timestamps rather than editing the internal record to look timely. The purpose of the table is to support honest exception handling, carrier escalation and any valid appeal, not to manufacture a favorable rate.</p>
<img class="body-visual" src="/blog/q4-17-dispatch/dispatch-chain-en-v1.png" alt="TikTok Shop dispatch evidence chain">
<h2>Eligible manifest and in-app scans are a conditional path</h2>
<p>TikTok Shop’s current policy allows qualifying manifest or in-app scan events to be considered for Dispatch SLA measurement where the order, seller and feature are eligible. The Manifest guide explains that a successful scan records the scan time and batch photo and may provide an additional shipment record if the carrier’s first acceptance scan is delayed or missing. This is useful, but it is not a universal replacement for carrier acceptance.</p>
<p>The eligibility gate must be explicit. Record which feature was used, whether access was available, the manifest or scan ID, the included Package IDs, first scan time, photo evidence and the Seller Center readback. Scan only when every included package is genuinely ready. TikTok Shop uses the first recorded manifest scan time, and rescanning does not overwrite that history. A replaced shipping label requires a correct new record.</p>
<h2>A qualifying event does not authorize fake fulfillment</h2>
<p>The Shipping Requirements prohibit using manifest or in-app scanning to misrepresent actual package handoff or fulfillment activity. A warehouse should never scan unfinished cartons, packages still waiting for inventory, or parcels that cannot be handed over promptly merely to protect a metric. That behavior breaks the evidence chain and can leave customers watching a status that does not reflect reality.</p>
<p>Use a stop condition. If physical package count, included orders, labels, warehouse origin or carrier route do not match, pause the scan and release. Remove the exception package from the batch, correct it, and only then create valid evidence. A qualifying event is a measurement input; it does not erase the seller’s responsibility to prepare and hand over the real package correctly.</p>
<h2>Build the evidence table around decisions</h2>
<table><tr><th>Field</th><th>What it proves</th><th>Required action</th></tr><tr><td>Order, package, tracking</td><td>The evidence belongs to the exact shipment</td><td>Stop if identities do not match</td></tr><tr><td>Order type and SLA</td><td>The correct deadline is being used</td><td>Verify current order-level deadline</td></tr><tr><td>Label and Awaiting Collection</td><td>Shipment information was prepared</td><td>Do not call this carrier receipt</td></tr><tr><td>Physical handoff</td><td>Custody left the warehouse</td><td>Retain carrier, time, count and proof</td></tr><tr><td>Qualifying event</td><td>A recognized event may support SLA measurement</td><td>Record eligibility and first event time</td></tr><tr><td>In Transit readback</td><td>Seller Center recognized movement</td><td>Monitor downstream tracking</td></tr><tr><td>Exception owner</td><td>The gap has a next action</td><td>Set deadline and terminal resolution</td></tr></table>
<h2>Close exceptions only with terminal readback</h2>
<p>A support ticket, carrier promise or uploaded document is not a resolved shipment. Keep the row open until the order reaches the required recognized state, is canceled under the correct process, receives a final support decision, or reaches another legitimate terminal outcome. Preserve the original timestamps. When several orders share the same carrier or warehouse failure, link them to one incident while retaining order-level evidence.</p>
<p>Review the table daily by deadline, warehouse, shipping method and carrier. The goal is not to create more reporting. It is to identify the earliest missing event while the package and evidence can still be recovered. A repeated gap points to a process change: later label printing, earlier pickup booking, a separate CBT lane, better scan reconciliation or a lower order-capacity limit.</p>
<h2>The smallest useful action today</h2>
<p>Choose one order currently in Awaiting Collection. Create a row with its exact order and package IDs, label time, physical handoff evidence, applicable SLA, candidate qualifying event, In Transit readback, owner and next-check deadline. If any field is unknown, label it unknown and retrieve the source record. Do not promote the order to “dispatched” in the internal report until the evidence supports that statement.</p>
<h2>Source notes</h2>
<p>This original WE Marketing operating framework draws on complete current TikTok Shop U.S. Seller University guidance on <a href="${sources.logistics}">Logistics & Fulfillment: Shipping Options, Policies, and Best Practices</a>, the <a href="${sources.fulfillment}">Fulfillment Policy</a>, <a href="${sources.shipping}">Customer Order Shipping Requirements</a>, <a href="${sources.ldr}">Late Dispatch Rate Requirements</a>, and <a href="${sources.manifest}">How to Create and Scan a TikTok Manifest</a>, revalidated October 13, 2026. Order types, SLAs, qualifying-event eligibility, feature access, metrics and interface paths can change. Verify the exact order, current U.S. Seller Center state and latest official policy before execution.</p>
${faq(faqEn, false)}
<h2>Related WEM guides</h2><section class="related-grid"><a href="/blog/tiktok-shop-collection-warehouse-handoff"><strong>CBT warehouse handoff SOP</strong><span>Control cutoff, scan, custody and exceptions.</span></a><a href="/blog/tiktok-shop-fulfillment-growth-system"><strong>Fulfillment as a growth system</strong><span>Connect capacity and buyer promise.</span></a><a href="/blog/tiktok-shop-peak-season-shipping-margin"><strong>Peak-season shipping margin</strong><span>Put shipping evidence into SKU economics.</span></a></section>`;

const ZH = `
<header class="hero"><div class="kicker">TIKTOK SHOP 美国站 · 履约控制</div><h1>${zhTitle}</h1><p class="dek">把运输准备动作与平台用于判断发货时效的合资格事件分开。</p><p class="meta">WE Marketing Team · 2026 年 10 月 13 日 · 14 分钟阅读</p><img src="/blog/hero-${slug}-zh-v1.png" alt="TikTok Shop 有效发货事件证据系统"></header>
<p><strong>直接答案：</strong>打印面单不等于发货，订单进入 Awaiting Collection 不等于承运商已接收，实体交仓如果没有平台识别的节点，也可能缺少及时发货证据。根据当前美国站 Fulfillment Policy，订单通常需要在适用 Dispatch SLA 内获得承运商扫描；在功能可用且订单合资格时，Manifest 或 In-App Scan 也可能被平台认定为用于 SLA 判断的 Qualifying Dispatch Event。但这种认定不替代准确备货、真实交接与后续轨迹监控。</p>
<p>最实用的控制是一张订单级发货证据表。每个 Package 分别记录面单创建、Tracking 加入、实体离仓、可能计入 SLA 的事件、Seller Center 出现 In Transit 的时间，以及异常的下一位 Owner。这样团队不会把五个不同动作压缩成一句模糊的“已经发货”。</p>
<img class="body-visual" src="/blog/q4-17-dispatch/evidence-table-zh-v1.png" alt="TikTok Shop 订单级发货证据表">
<h2>先确认准确订单与适用 SLA</h2>
<p>发货判断从订单类型开始，而不是从仓库习惯开始。Regular、Made-to-Order、Backorder、Custom Handling、Pre-order 与 Virtual Goods 可能使用不同时间规则，最终以账号当前设置与订单级 Deadline 为准。判断事件是否迟到或合资格之前，先保存 Order ID、Package ID、Order Type、Shipping Method、Warehouse、Current Status、Dispatch Deadline 与 Assigned Carrier。</p>
<p>日均指标看起来正常，也可能掩盖某个缺少证据的 Package。不能因为一个批次内有一件包裹完成 Manifest Scan，就推断整批订单都具备同样资格。SLA 与 Recognized Event 必须保留在 Package Level。规则、账号功能或承运集成变化时，也能只更新受影响行，不会改写其他订单历史。</p>
<h2>面单只是准备记录，不是移动证明</h2>
<p>面单把 Package Plan、Carrier Service 与 Tracking ID 连接起来，帮助仓库拣货、打包和分区，但不能证明包裹已经离开仓库。Customer Order Shipping Requirements 要求 TikTok Shipping 卖家只在真正准备交给承运商时打印面单；打印过早会扩大 Awaiting Collection 与 In Transit 的间隔，增加投诉与 Enforcement Risk。</p>
<p>证据表应保存 Label ID、Tracking ID、Service、Label Purchase Time、Packed Weight 与 Final Dimensions，并核对 Seller Center Tracking 与实体包裹面单完全一致。如果旧面单取消并重新购买，旧证据不能自动挂到新面单下，Package Row 必须改用当前 Tracking Identity，适用扫描也要在正确记录下重新完成。</p>
<h2>Awaiting Collection 是中间状态</h2>
<p>在 TikTok Shipping 中，Arrange Shipment 会加入 Tracking Information，并把订单改为 Awaiting Collection。这说明流程正在等待承运交接，不代表承运商已经收到包裹。把它当作 Open Custody State：卖家仍需保护实体包裹、完成正确交接，并继续等待平台认可的物流事件。</p>
<p>即使 Dashboard 暂时显示 Dispatch SLA 已满足，Awaiting Collection 与 In Transit 之间的长时间空档也不是安全状态。当前 Shipping Requirements 提醒，异常延迟会增加买家投诉与执法风险。因此表格必须有 Awaiting Collection Timestamp 与 Next-check Deadline；到期仍无轨迹，就自动升级为有负责人的异常。</p>
<h2>实体交仓需要单独证据</h2>
<p>司机到仓、复核包裹并把货带走，是运营层面的 Custody Transfer，但平台可能仍在等待 Acceptance Scan。保存 Dock Log、Pickup Receipt、Batch Photo 或允许使用的其他记录，明确 Carrier、Warehouse、Time 与 Package Count。高风险批次按 Package ID 逐件核对，不只依赖纸箱总数。</p>
<p>实体证据可以用于排查承运节点缺失，但不能让团队自行宣布平台已经认定发货。Owner 仍需查看 Seller Center 与 Tracking Page。如果包裹已被取走却没有事件，趁证据完整时立即走正确的 Carrier 或 Platform Support Route，不能为了关闭内部日报而伪造状态。</p>
<h2>承运商接收扫描是标准边界</h2>
<p>当前 Fulfillment Policy 要求卖家在适用 Dispatch SLA 内获得承运商扫描。订单成功扫描后，Seller Center 会把状态更新为 In Transit。这个事件必须属于准确 Package 与 Tracking ID；其他包裹的扫描、仓库内部扫描或无订单明细的批次总数都不能替代。</p>
<p>实际记录至少包括 Event Timestamp、Event Name、Carrier、Source System 与 Readback Time。如果首次事件晚于 Deadline，保留两个真实时间，不要把内部记录改得看起来准时。证据表用于诚实处理异常、向 Carrier 升级以及支持真正有证据的 Appeal，不是为了制造更好看的指标。</p>
<img class="body-visual" src="/blog/q4-17-dispatch/dispatch-chain-zh-v1.png" alt="TikTok Shop 发货证据链">
<h2>Manifest 与 In-App Scan 是条件路径</h2>
<p>当前规则说明，在订单、卖家与功能均合资格时，Manifest 或 In-App Scan 可能被用于 Dispatch SLA 判断。Manifest 指南解释，成功扫描会保存时间与 Batch Photo；当承运商首次 Acceptance Scan 延迟或缺失时，它可以提供额外 Shipment Record。这很有价值，但不是适用于全部订单的 Carrier Acceptance 替代品。</p>
<p>必须明确记录 Eligibility Gate：使用什么功能、账号是否有权限、Manifest 或 Scan ID、包含哪些 Package ID、第一次扫描时间、照片证据与 Seller Center Readback。只有批次中每个包裹真正准备好时才能扫描。TikTok Shop 使用第一次 Manifest Scan Time，重复扫描不会覆盖历史；更换面单后则需要为新记录重新建立正确扫描证据。</p>
<h2>合资格事件不允许虚假履约</h2>
<p>Shipping Requirements 禁止利用 Manifest 或 In-App Scan 误导实际交接与履约情况。不能为了保护指标，提前扫描尚未封箱、仍在等库存或无法及时交给承运商的包裹。这样做会破坏证据链，并让买家看到与实体事实不一致的状态。</p>
<p>建立 Stop Condition：实体数量、订单清单、面单、Warehouse Origin 或 Carrier Route 任何一项不一致，都暂停 Scan 与 Release。把异常包裹移出批次，修复后再生成有效证据。Qualifying Event 是时效判断的一项输入，不会消除卖家正确备货与真实交接的责任。</p>
<h2>让证据表直接支持决定</h2>
<table><tr><th>字段</th><th>能证明什么</th><th>下一步</th></tr><tr><td>Order、Package、Tracking</td><td>证据属于准确 Shipment</td><td>Identity 不一致立即停止</td></tr><tr><td>Order Type 与 SLA</td><td>使用正确 Deadline</td><td>核对当前订单级时限</td></tr><tr><td>面单与 Awaiting Collection</td><td>运输信息已准备</td><td>不能写成承运接收</td></tr><tr><td>实体交接</td><td>Custody 已离开仓库</td><td>保存 Carrier、时间、数量与凭证</td></tr><tr><td>Qualifying Event</td><td>认可事件可能支持 SLA 判断</td><td>记录资格与首次事件时间</td></tr><tr><td>In Transit 回读</td><td>Seller Center 已识别移动</td><td>继续监控后续轨迹</td></tr><tr><td>Exception Owner</td><td>缺口有下一步动作</td><td>设置 Deadline 与最终结果</td></tr></table>
<h2>只有终态回读才能关闭异常</h2>
<p>提交 Support Ticket、获得 Carrier 口头承诺或上传文件，都不等于 Shipment 已解决。保持该行 Open，直到订单进入要求的认可状态、按照正确流程取消、获得最终支持决定，或达到其他合法 Terminal Outcome。原始时间不能覆盖。多笔订单如果来自同一个 Warehouse 或 Carrier Failure，可以连接同一 Incident，但仍保留订单级证据。</p>
<p>每天按 Deadline、Warehouse、Shipping Method 与 Carrier 复盘。目的不是增加报表，而是在包裹与证据仍可追回时找到最早缺失事件。重复出现的缺口应该触发 Process Change，例如更晚打印面单、更早预约取件、建立独立 CBT Lane、加强 Scan Reconciliation 或降低 Order Capacity。</p>
<h2>今天就做的最小动作</h2>
<p>选择一笔当前处于 Awaiting Collection 的订单，建立一行准确证据：Order ID、Package ID、面单时间、实体交接证据、适用 SLA、候选 Qualifying Event、In Transit 回读、Owner 与 Next-check Deadline。未知字段明确写 Unknown 并回到源记录查证；证据没有支持之前，内部日报不得把它升级成“已发货”。</p>
<h2>来源说明</h2>
<p>这套 WE Marketing 原创运营框架基于 2026 年 10 月 13 日完整重新核验的 TikTok Shop 美国站 Seller University <a href="${sources.logistics}">Logistics & Fulfillment: Shipping Options, Policies, and Best Practices</a>、<a href="${sources.fulfillment}">Fulfillment Policy</a>、<a href="${sources.shipping}">Customer Order Shipping Requirements</a>、<a href="${sources.ldr}">Late Dispatch Rate Requirements</a>与<a href="${sources.manifest}">How to Create and Scan a TikTok Manifest</a>。Order Type、SLA、合资格事件资格、功能权限、指标与界面路径都可能变化，执行前必须核对准确订单、当前美国站 Seller Center 状态与最新官方规则。</p>
${faq(faqZh, true)}
<h2>相关 WEM 指南</h2><section class="related-grid"><a href="/blog/tiktok-shop-collection-warehouse-handoff?lang=zh"><strong>CBT 仓库交接 SOP</strong><span>控制截单、扫描、Custody 与异常。</span></a><a href="/blog/tiktok-shop-fulfillment-growth-system?lang=zh"><strong>履约是一套增长系统</strong><span>连接产能与买家承诺。</span></a><a href="/blog/tiktok-shop-peak-season-shipping-margin?lang=zh"><strong>旺季运费与 SKU 毛利</strong><span>把物流证据写进单品经济账。</span></a></section>`;

const citations = Object.values(sources);
const graph = {'@context':'https://schema.org','@graph':[
  {'@type':'BlogPosting','@id':`${url}#article`,headline:enTitle,description:enDescription,inLanguage:'en-US',author:{'@type':'Organization','@id':'https://www.weglobalmarketing.com/#editorial-team',name:'WE Marketing Team'},publisher:{'@type':'Organization','@id':'https://www.weglobalmarketing.com/#organization',name:'WE Marketing',alternateName:'WEM'},image:{'@type':'ImageObject',url:`https://www.weglobalmarketing.com/blog/hero-${slug}-en-v1.png`,width:1792,height:896},datePublished:date,dateModified:date,mainEntityOfPage:{'@type':'WebPage','@id':url},citation:citations,keywords:['TikTok Shop qualifying dispatch event','Late Dispatch Rate','TikTok Manifest','carrier acceptance scan']},
  {'@type':'BlogPosting','@id':`${url}?lang=zh#article`,headline:zhTitle,description:zhDescription,inLanguage:'zh-CN',translationOfWork:{'@id':`${url}#article`},author:{'@id':'https://www.weglobalmarketing.com/#editorial-team'},publisher:{'@id':'https://www.weglobalmarketing.com/#organization'},image:{'@type':'ImageObject',url:`https://www.weglobalmarketing.com/blog/hero-${slug}-zh-v1.png`,width:1792,height:896},datePublished:date,dateModified:date,mainEntityOfPage:{'@type':'WebPage','@id':`${url}?lang=zh`},citation:citations},
  ...[[faqEn,'en-US',`${url}#faq`],[faqZh,'zh-CN',`${url}?lang=zh#faq`]].map(([items,lang,id])=>({'@type':'FAQPage','@id':id,inLanguage:lang,mainEntity:items.map(([name,text])=>({'@type':'Question',name,acceptedAnswer:{'@type':'Answer',text}}))})),
  {'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:'https://www.weglobalmarketing.com/'},{'@type':'ListItem',position:2,name:'Blog',item:'https://www.weglobalmarketing.com/blog'},{'@type':'ListItem',position:3,name:enTitle,item:url}]}
]};

const old = await fs.readFile(path.join(base, 'blog/tiktok-shop-collection-warehouse-handoff.html'), 'utf8');
const style = old.match(/<style>[\s\S]*?<\/style>/)[0];
const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><script>document.documentElement.dataset.lang=new URLSearchParams(location.search).get('lang')==='zh'?'zh':'en';document.documentElement.lang=document.documentElement.dataset.lang==='zh'?'zh-CN':'en'</script><title>${enTitle} | WE Marketing</title><meta name="description" content="${enDescription}"><link rel="canonical" href="${url}"><link rel="alternate" hreflang="en-US" href="${url}"><link rel="alternate" hreflang="zh-CN" href="${url}?lang=zh"><link rel="alternate" hreflang="x-default" href="${url}"><script type="application/ld+json">${JSON.stringify(graph)}</script>${style}</head><body><nav class="nav"><a class="logo" href="/"><img src="/assets/we-logo.png" alt="WE Marketing"></a><a href="/services">SERVICES</a><a href="/about">ABOUT</a><a href="/blog">BLOG</a><span class="spacer"></span><div class="switch"><a class="zh" href="?lang=zh">中文</a><a class="en" href="?">EN</a></div></nav><main class="wrap"><div class="tools"><a class="en" href="/blog">← BLOG</a><a class="zh" href="/blog?lang=zh">← 博客</a></div><article lang="en">${EN}</article><article lang="zh-CN">${ZH}</article></main><section class="cta"><h2 class="en">READY TO TALK<br>TO WEM?</h2><h2 class="zh">准备好和 WEM<br>一起把计划落地吗？</h2><p class="en">Turn dispatch evidence into an order-level operating control.</p><p class="zh">把发货证据变成订单级运营控制。</p><a class="en" href="https://scheduler.zoom.us/wendylin001">BOOK A DISCOVERY CALL</a><a class="zh" href="https://scheduler.zoom.us/wendylin001">预约咨询</a></section><footer class="footer"><img src="/assets/we-logo.png" alt="WE Marketing"><p class="en">WE Marketing connects strategy, creator operations, paid growth and TikTok Shop execution.</p><p class="zh">WE Marketing 帮助品牌连接策略、达人运营、付费增长与 TikTok Shop 执行。</p><p>© 2026 WE Marketing. All rights reserved.</p></footer><script>if(document.documentElement.dataset.lang==='zh'){document.title=${JSON.stringify(zhTitle+' | WE Marketing')};document.querySelector('meta[name=description]').content=${JSON.stringify(zhDescription)};document.querySelector('link[rel=canonical]').href='${url}?lang=zh'}</script></body></html>`;
await fs.writeFile(path.join(out, 'blog', `${slug}.html`), html);

let list = await fs.readFile(path.join(base, 'BlogList.jsx'), 'utf8');
const row = {slug,tags:['tiktok-shop','shop-operations','fulfillment'],cat:{en:'TIKTOK SHOP U.S. · FULFILLMENT CONTROL',zh:'TIKTOK SHOP 美国站 · 履约控制'},title:{en:enTitle,zh:zhTitle},excerpt:{en:'Separate label creation, physical handoff, eligible scan events and carrier acceptance with one evidence table.',zh:'用一张证据表区分面单、实体交仓、合资格扫描与承运商接收。'},date:{en:'Oct 13, 2026',zh:'2026 年 10 月 13 日'},read:{en:'14 min read',zh:'14 分钟阅读'},image:{en:`hero-${slug}-en-v1.png`,zh:`hero-${slug}-zh-v1.png`}};
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
if (enWords < 1300 || zhChars < 1800) throw new Error(`length gate failed: ${enWords}/${zhChars}`);
console.log(JSON.stringify({out,version,enWords,zhChars,files:(await fs.readdir(out,{recursive:true})).filter(Boolean).length},null,2));
