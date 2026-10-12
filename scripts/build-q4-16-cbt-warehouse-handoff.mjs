import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import vm from 'node:vm';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const sharp = require('/Users/wendylin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');
const root = path.resolve(import.meta.dirname, '..');
const base = path.join(root, 'outputs/patches/2026-10-11-q4-15-peak-shipping-margin');
const out = path.join(root, 'outputs/patches/2026-10-12-q4-16-cbt-warehouse-handoff');
const slug = 'tiktok-shop-collection-warehouse-handoff';
const date = '2026-10-12';
const url = `https://www.weglobalmarketing.com/blog/${slug}`;
const enTitle = 'Collection by TikTok Warehouse Handoff: The Cutoff, Scan and Exception SOP';
const zhTitle = 'Collection by TikTok 仓库交接：截单、扫描与异常处理 SOP';
const enDescription = 'A practical Collection by TikTok warehouse SOP for cutoff control, picking, packing, labels, batch scans, physical handoff and pickup exceptions.';
const zhDescription = '一套可执行的 Collection by TikTok 仓库 SOP，覆盖截单、拣货、打包、面单、批次扫描、实体交接与异常处理。';
const sources = {
  overview: 'https://seller-us.tiktok.com/university/essay?default_language=en&knowledge_id=8667360597444366',
  sop: 'https://seller-us.tiktok.com/university/essay?default_language=en&identity=1&knowledge_id=196358794184494',
  shipping: 'https://seller-us.tiktok.com/university/essay?knowledge_id=6837879804970754',
  manifest: 'https://seller-us.tiktok.com/university/essay?default_language=en&knowledge_id=2159226148472596'
};
const sha = value => crypto.createHash('sha256').update(value).digest('hex');

await fs.rm(out, { recursive: true, force: true });
await fs.cp(base, out, { recursive: true });
await fs.mkdir(path.join(out, 'blog/q4-16-cbt-handoff'), { recursive: true });
const logo = (await fs.readFile(path.join(out, 'assets/we-logo.png'))).toString('base64');

function cover(zh) {
  const l1 = zh ? '仓库交接' : 'WAREHOUSE';
  const l2 = zh ? '截单与扫描' : 'HANDOFF SOP';
  const sub = zh ? '截单 · 分拣 · 扫描 · 交接' : 'CUTOFF · SORT · SCAN · HANDOFF';
  return `<svg width="1792" height="896" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bg" x2="1"><stop stop-color="#fffdf8"/><stop offset="1" stop-color="#e9e3ff"/></linearGradient><linearGradient id="g" x2="1" y2="1"><stop stop-color="#245bd7"/><stop offset="1" stop-color="#8d62e8"/></linearGradient><filter id="s"><feDropShadow dx="0" dy="18" stdDeviation="20" flood-opacity=".17"/></filter></defs><rect width="1792" height="896" fill="url(#bg)"/><path d="M1080 0h712v896h-770c162-236 180-646 58-896z" fill="#eeeaff"/><rect x="82" y="78" width="625" height="50" rx="25" fill="#e8efff"/><text x="110" y="111" font-family="Arial" font-size="21" font-weight="800" fill="#1746b8">TIKTOK SHOP · COLLECTION BY TIKTOK</text><text x="82" y="250" font-family="Arial Narrow,Arial,PingFang SC" font-size="${zh ? 74 : 70}" font-weight="900" fill="#17151a">${l1}</text><text x="82" y="340" font-family="Arial Narrow,Arial,PingFang SC" font-size="${zh ? 70 : 64}" font-weight="900" fill="#245bd7">${l2}</text><rect x="84" y="438" width="88" height="6" rx="3" fill="#ed168c"/><text x="82" y="505" font-family="Arial,PingFang SC" font-size="25" fill="#4f4a55">${sub}</text><image href="data:image/png;base64,${logo}" x="82" y="700" width="145" height="105"/><g filter="url(#s)"><ellipse cx="1395" cy="750" rx="330" ry="66" fill="#beb9ed"/><rect x="1135" y="210" width="420" height="330" rx="38" fill="#fff"/><rect x="1185" y="260" width="320" height="160" rx="22" fill="url(#g)"/><rect x="1225" y="300" width="240" height="20" rx="10" fill="#fff" opacity=".9"/><rect x="1225" y="345" width="170" height="20" rx="10" fill="#fff" opacity=".9"/><path d="M1290 475h310l80 115h-310z" fill="#d6d1ff" stroke="#245bd7" stroke-width="12"/><circle cx="1425" cy="600" r="44" fill="#fce0ef"/><path d="M1403 600l17 17 32-40" fill="none" stroke="#ed168c" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/><path d="M1060 650c130-125 225-110 320-25 94 84 185 48 290-75" fill="none" stroke="#245bd7" stroke-width="22" stroke-linecap="round"/></g></svg>`;
}

function flowVisual(zh) {
  const title = zh ? 'CBT 仓库交接控制链' : 'CBT warehouse handoff control chain';
  const steps = zh ? [['1','截单','锁定批次、仓库与 Pickup 日期'],['2','拣货打包','核 SKU、重量、尺寸与特殊处理'],['3','贴标分区','官方面单，CBT 包裹独立摆放'],['4','扫描核对','数量、Manifest、照片与失败清单'],['5','实体交接','只交指定 CBT Pickup Carrier']] : [['1','CUTOFF','Lock batch, warehouse and pickup date'],['2','PICK + PACK','Verify SKU, weight, size and handling'],['3','LABEL + ZONE','Official labels, separate CBT staging'],['4','SCAN + MATCH','Count, manifest, photo and failures'],['5','HANDOFF','Only the designated CBT pickup carrier']];
  return `<svg width="1600" height="880" xmlns="http://www.w3.org/2000/svg"><rect width="1600" height="880" rx="42" fill="#f5f2ff"/><text x="70" y="105" font-family="Arial,PingFang SC" font-size="42" font-weight="850" fill="#17141d">${title}</text><g transform="translate(55 185)">${steps.map((s,i)=>`<g transform="translate(${i*305} 0)"><rect width="270" height="520" rx="30" fill="#fff"/><rect width="270" height="16" rx="8" fill="${i===4?'#ed168c':'#245bd7'}"/><circle cx="55" cy="85" r="30" fill="${i===4?'#fce0ef':'#e8efff'}"/><text x="55" y="96" text-anchor="middle" font-family="Arial" font-size="25" font-weight="900" fill="${i===4?'#c91472':'#1746b8'}">${s[0]}</text><text x="30" y="155" font-family="Arial,PingFang SC" font-size="21" font-weight="850" fill="#1746b8">${s[1]}</text><line x1="30" y1="190" x2="240" y2="190" stroke="#ddd7eb" stroke-width="3"/><foreignObject x="30" y="220" width="210" height="170"><div xmlns="http://www.w3.org/1999/xhtml" style="font:20px Arial,PingFang SC;line-height:1.5;color:#302c35">${s[2]}</div></foreignObject><path d="M95 430l27 27 54-68" fill="none" stroke="${i===4?'#ed168c':'#245bd7'}" stroke-width="13" stroke-linecap="round" stroke-linejoin="round"/></g>`).join('')}</g><text x="800" y="810" text-anchor="middle" font-family="Arial,PingFang SC" font-size="25" font-weight="800" fill="#4f4a55">${zh?'扫描记录不替代实体交接':'A scan record does not replace physical carrier handoff'}</text></svg>`;
}

function exceptionVisual(zh) {
  const title = zh ? '异常不是聊天记录：必须进入 Exception Ledger' : 'Exceptions need a ledger, not a chat thread';
  const rows = zh ? [['未取件','保留批次，联系服务商，记录新日期'],['面单或包材失败','隔离包裹，重打面单或重新包装'],['扫描数量不符','停止交接，逐件复核并重扫'],['错仓或错承运商','禁止出库，按正确仓库与 CBT 路径重建'],['退件到仓','登记、拍照、检查、分类并更新库存决定']] : [['MISSED PICKUP','Hold the batch, contact provider, record new date'],['LABEL OR PACK FAILURE','Quarantine, reprint label or repack'],['SCAN COUNT MISMATCH','Stop handoff, reconcile each parcel and rescan'],['WRONG WAREHOUSE OR CARRIER','Do not release; rebuild the correct CBT path'],['RETURN TO WAREHOUSE','Check in, photograph, inspect, classify and decide inventory']];
  return `<svg width="1600" height="940" xmlns="http://www.w3.org/2000/svg"><rect width="1600" height="940" rx="42" fill="#f5f2ff"/><text x="70" y="105" font-family="Arial,PingFang SC" font-size="42" font-weight="850" fill="#17141d">${title}</text><g transform="translate(70 170)">${rows.map((r,i)=>`<g transform="translate(0 ${i*130})"><rect width="1460" height="105" rx="24" fill="#fff"/><rect width="16" height="105" rx="8" fill="${i===0?'#ed168c':'#245bd7'}"/><text x="55" y="44" font-family="Arial,PingFang SC" font-size="21" font-weight="850" fill="#1746b8">${r[0]}</text><text x="55" y="79" font-family="Arial,PingFang SC" font-size="21" fill="#4f4a55">${r[1]}</text><text x="1390" y="67" text-anchor="end" font-family="Arial" font-size="30" font-weight="900" fill="${i===0?'#ed168c':'#245bd7'}">OWNER + TIME</text></g>`).join('')}</g></svg>`;
}

for (const [lang, zh] of [['en', false], ['zh', true]]) {
  const name = `hero-${slug}-${lang}-v1`;
  await sharp(Buffer.from(cover(zh))).png().toFile(path.join(out, 'blog', `${name}.png`));
  await sharp(path.join(out, 'blog', `${name}.png`)).resize({ width: 1600 }).jpeg({ quality: 90 }).toFile(path.join(out, 'blog/optimized', `${name}.jpg`));
  await sharp(path.join(out, 'blog', `${name}.png`)).resize({ width: 880 }).jpeg({ quality: 88 }).toFile(path.join(out, 'blog/thumbs', `${name}.jpg`));
  await sharp(Buffer.from(flowVisual(zh))).png().toFile(path.join(out, 'blog/q4-16-cbt-handoff', `handoff-chain-${lang}-v1.png`));
  await sharp(Buffer.from(exceptionVisual(zh))).png().toFile(path.join(out, 'blog/q4-16-cbt-handoff', `exception-ledger-${lang}-v1.png`));
}

const faqEn = [
  ['Does a TikTok Manifest scan prove that the carrier received every package?', 'No. The official guide says a manifest scan records the batch and may qualify for dispatch treatment on eligible orders, but it does not replace physical handoff or the carrier acceptance scan.'],
  ['Can CBT parcels be handed directly to the last-mile carrier named on the label?', 'No. The CBT warehouse SOP says CBT parcels must be separated and handed only to the pickup carrier designated by CBT, not directly to a last-mile carrier.'],
  ['What is the same-day CBT pickup cancellation cutoff?', 'The current CBT warehouse SOP says same-day cancellations must be communicated directly to the carrier by 9:00 AM local time. Confirm the current provider instructions before acting.'],
  ['Can one TikTok Manifest contain packages from multiple warehouses?', 'No. The manifest guide requires one warehouse per manifest. Filter by warehouse and create a separate manifest for each physical origin.'],
  ['What should the warehouse do when a package fails label or packaging inspection?', 'Remove it from the handoff batch, record the exception, reprint a clear official label or repack the parcel, then repeat verification before release.'],
  ['What is the smallest useful CBT control test?', 'Run one pickup batch with a locked cutoff, independent package count, scan evidence, signed physical handoff record and next-day exception review. Repair any mismatch before expanding volume.']
];
const faqZh = [
  ['TikTok Manifest 扫描能证明承运商已收到全部包裹吗？', '不能。官方说明指出，Manifest Scan 会记录批次，并可能在符合条件的订单中用于判断发货时效，但它不替代实体交接，也不替代承运商的 Acceptance Scan。'],
  ['CBT 包裹可以直接交给面单上的末端承运商吗？', '不可以。CBT 仓库 SOP 要求包裹独立分区，并且只能交给 CBT 指定的 Pickup Carrier，不能绕过取件服务商直接交给末端承运商。'],
  ['当天取消 CBT 取件的截点是什么？', '当前 CBT 仓库 SOP 说明，当天取消必须在当地时间上午 9:00 前直接通知承运商。实际操作前仍要核对当前服务商要求。'],
  ['一个 TikTok Manifest 能包含多个仓库的包裹吗？', '不能。Manifest 指南要求每个 Manifest 只对应一个仓库。必须先按 Warehouse 过滤，再为每个实体出库点分别创建批次。'],
  ['包裹没有通过面单或包装检查时怎么办？', '先从交接批次中隔离，登记异常，重新打印清晰的官方面单或重新包装，然后重新核验后才能放行。'],
  ['最小可执行的 CBT 控制测试是什么？', '先跑一个 Pickup Batch：锁定截单时间，独立复核包裹数，保存扫描证据和实体交接记录，并在次日复盘异常；任何数量或状态不一致都先修复，再扩大批次。']
];
const faq = (items, zh) => `<section class="faq"><h2>${zh ? '常见问题' : 'Common questions'}</h2>${items.map(([q,a]) => `<div class="faq-item"><h3>${q}</h3><p>${a}</p></div>`).join('')}</section>`;

const EN = `
<header class="hero"><div class="kicker">TIKTOK SHOP U.S. · COLLECTION BY TIKTOK</div><h1>${enTitle}</h1><p class="dek">Control the warehouse moment when an order moves from seller responsibility into a verified carrier handoff.</p><p class="meta">WE Marketing Team · Oct 12, 2026 · 15 min read</p><img src="/blog/hero-${slug}-en-v1.png" alt="Collection by TikTok warehouse cutoff scan and handoff SOP"></header>
<p><strong>Direct answer:</strong> treat Collection by TikTok handoff as a controlled batch release, not as a driver arrival. Lock a warehouse cutoff, pick and pack against one package list, use the official CBT label, stage CBT parcels separately, reconcile the physical count to the scan record, and release the batch only to the designated CBT pickup carrier. A manifest or in-app scan can create useful dispatch evidence, but it does not replace the physical handoff or the carrier acceptance scan.</p>
<p>Collection by TikTok combines pickup and last-mile services under TikTok Shipping for eligible U.S. sellers. The current overview says sellers can keep their existing warehouses while using pickup in supported areas. That convenience does not remove warehouse responsibility. Before pickup, the seller still owns SKU accuracy, packaging, label quality, origin integrity, readiness, and exception communication.</p>
<img class="body-visual" src="/blog/q4-16-cbt-handoff/handoff-chain-en-v1.png" alt="Collection by TikTok warehouse handoff control chain">
<h2>Define the handoff boundary before writing the SOP</h2>
<p>The operating boundary has three different records. First, the warehouse creates an order and package record. Second, a TikTok Manifest or in-app scan may record that a prepared batch exists. Third, the designated carrier physically receives and scans the parcels. These events are related, but they are not interchangeable. The shipping requirements warn sellers not to use manifest or scan functions to misrepresent actual handoff activity, and they monitor unusually long gaps between Awaiting Collection and In Transit.</p>
<p>Your warehouse SOP should therefore identify the exact release event. A supervisor signs only after the package count, warehouse origin, labels, scan evidence and pickup carrier all match. The exception owner then watches for the first carrier movement. If it does not appear within the operating threshold, the batch becomes an active exception rather than an assumed success.</p>
<h2>Build one cutoff clock backward from pickup</h2>
<p>The current CBT warehouse SOP describes a typical daily pickup window of 10:00 to 18:00 local time and says sellers should have packages ready before pickup. It also states that same-day pickup cancellations must be communicated directly to carriers by 9:00 AM local time. Treat these as current official reference points, not as a promise for every warehouse. Your assigned provider, local schedule, holidays and account arrangement remain controlling.</p>
<p>Set a warehouse-specific pickup time and work backward. A practical control schedule has five gates: order cutoff, pick completion, pack completion, label and scan reconciliation, and dock release. Add buffer between each gate. If the carrier comes early, the batch is ready. If volume spikes, the team can stop adding orders rather than mixing incomplete parcels into a released batch.</p>
<table><tr><th>Gate</th><th>Required evidence</th><th>Stop condition</th></tr><tr><td>Order cutoff</td><td>Frozen package list by warehouse and pickup date</td><td>Late orders move to the next controlled batch</td></tr><tr><td>Pick</td><td>SKU, variant, quantity and order match</td><td>Short pick or substitution is isolated</td></tr><tr><td>Pack</td><td>Package protection, weight, dimensions and handling marks</td><td>Unsafe or inaccurate package is repacked</td></tr><tr><td>Label and scan</td><td>Official readable label, batch count, scan result and photo</td><td>Count or barcode mismatch stops release</td></tr><tr><td>Handoff</td><td>Designated carrier, time, parcel count and warehouse record</td><td>Wrong carrier or missing record stops release</td></tr></table>
<h2>Pick and pack for auditability</h2>
<p>Use a package-level worklist, not only an order total. Each row should contain order ID, package ID, SKU and variant, quantity, warehouse, label ID, actual packed weight, dimensions, special handling status and final staging zone. One person can pick and another can verify. For high-risk SKUs, photograph the packed contents before sealing when privacy and internal policy permit.</p>
<p>Packaging has to protect the product and support the carrier path. The shipping requirements place responsibility on sellers using CBT for secure packing and compliant labels. The CBT warehouse SOP expects labels to be clear, legible, securely attached to a flat surface, and scannable without folds, wrinkles or obstruction. A label that exists but cannot scan is an exception, not a completed package.</p>
<h2>Keep CBT parcels in a separate physical lane</h2>
<p>The CBT warehouse SOP requires sellers to sort and pack CBT parcels separately and have them collected by the CBT pickup carrier. It specifically warns against handing CBT parcels directly to a last-mile delivery carrier. The label may name a downstream network, but the warehouse release path remains the assigned CBT pickup flow.</p>
<p>Create a clearly marked staging area for each pickup date and warehouse. Do not mix CBT with Seller Shipping, other TikTok Shipping handoffs or returns. Use a visible batch card that shows package count, manifest ID when used, cutoff time, assigned carrier and exception count. Physical separation makes the final count faster and prevents a busy dock from releasing the right package to the wrong network.</p>
<h2>Use scans as evidence, not theater</h2>
<p>For invited sellers, TikTok Manifest can group packages from the same warehouse. The official guide says the team should print the manifest, scan its QR code in the Seller App, verify that the recognized package list matches the physical batch, take the required photo and then hand the parcels to the carrier promptly. TikTok Shop retains the first recorded manifest scan time, so rescanning does not replace an earlier time.</p>
<p>A scan should happen only when every included package is ready for handoff. If the count is wrong, stop and reconcile. If a label was canceled and replaced, the prior manifest scan does not carry over to the new label. Create the correct record again. Never scan unfinished packages merely to improve a metric. The shipping requirements explicitly prohibit misuse of manifest or in-app scan events.</p>
<h2>Record the physical handoff separately</h2>
<p>At pickup, verify the service provider and driver route against the assigned CBT information. Count the parcels with the driver or approved process, record the time and retain the available receipt, photo or dock log. The supervisor should be able to answer four questions later: which packages left, from which warehouse, with which carrier, and at what time.</p>
<p>After release, monitor the first logistics movement. A scan record may qualify for dispatch treatment in some eligible cases, but it does not remove the need for physical movement. Use a next-check deadline. If the package remains Awaiting Collection or lacks expected movement, open an exception with the provider while the batch evidence is still easy to retrieve.</p>
<img class="body-visual" src="/blog/q4-16-cbt-handoff/exception-ledger-en-v1.png" alt="Collection by TikTok warehouse exception ledger">
<h2>Run one exception ledger</h2>
<p>A warehouse chat can coordinate, but it is not the system of record. The exception ledger should name the package, batch, failure type, discovery time, current custody, evidence, owner, next deadline and resolution. Use a short controlled taxonomy: late order, short pick, wrong SKU, packaging failure, unreadable label, scan mismatch, missed pickup, wrong carrier, wrong warehouse, delayed first movement, failed delivery and return.</p>
<p>For a missed pickup, keep the batch controlled, contact the provider and record the new plan. For a labeling or packaging failure, remove the package from the release count, correct it and repeat verification. For a count mismatch, stop the dock handoff until the physical and digital lists agree. For a wrong carrier or origin, do not improvise an offline route. Rebuild the correct CBT path.</p>
<h2>Handle returns as a new warehouse event</h2>
<p>The CBT SOP includes a failed-delivery and return process. When a parcel returns, check it into a separate return area, photograph the exterior condition, verify the package and item identity, inspect the product, record the reason and decide whether it can return to sellable inventory. Do not quietly place it back into stock. The original shipment record and the return disposition should remain linked.</p>
<p>Use return patterns to improve the outbound SOP. Repeated address issues, label damage, packaging failures or SKU mistakes should create a named corrective action. The goal is not merely to close exceptions; it is to reduce how often the same failure reaches the dock.</p>
<h2>Daily CBT warehouse review</h2>
<ol><li>Confirm today's warehouse, pickup provider and expected window.</li><li>Lock the order cutoff and package list.</li><li>Review open exceptions from the prior batch.</li><li>Verify pick, pack, weight, dimensions and labels.</li><li>Stage CBT parcels separately by batch.</li><li>Reconcile scan count, package count and photos.</li><li>Release only to the designated CBT pickup carrier.</li><li>Record the physical handoff and first movement.</li><li>Escalate missed pickup or status gaps by owner and deadline.</li><li>Review returns and update the corrective-action list.</li></ol>
<h2>The smallest useful action today</h2>
<p>Choose one warehouse and one pickup batch. Write the five gate times, print a package-level checklist, create a CBT-only staging zone and assign one handoff supervisor. Reconcile the physical package count to the scan record and keep a signed release record. The next day, review every package that lacks expected movement before expanding the process.</p>
<h2>Source notes</h2>
<p>This original WE Marketing operating framework draws on the complete current TikTok Shop U.S. Seller University <a href="${sources.overview}">What is Collection by TikTok (CBT)</a>, <a href="${sources.sop}">CBT Order Processing: Warehouse Operations SOP</a>, <a href="${sources.shipping}">Customer Order Shipping Requirements</a>, and <a href="${sources.manifest}">How to Create and Scan a TikTok Manifest</a>, revalidated October 12, 2026. Eligibility, pickup areas, carrier assignments, time windows, interface paths, scan treatment and fulfillment rules can change. Verify the current U.S. Seller Center and assigned service-provider instructions before execution.</p>
${faq(faqEn, false)}
<h2>Related WEM guides</h2><section class="related-grid"><a href="/blog/tiktok-shop-peak-season-shipping-margin"><strong>Peak-season shipping margin</strong><span>Put current shipping evidence into SKU contribution margin.</span></a><a href="/blog/tiktok-shop-fulfillment-growth-system"><strong>Fulfillment as a growth system</strong><span>Connect warehouse execution to growth risk.</span></a><a href="/blog/tiktok-shop-preorder-mto-backorder"><strong>Pre-order and handling controls</strong><span>Match promises to fulfillment capacity.</span></a></section>`;

const ZH = `
<header class="hero"><div class="kicker">TIKTOK SHOP 美国站 · COLLECTION BY TIKTOK</div><h1>${zhTitle}</h1><p class="dek">把订单从卖家仓责任转移到承运商之前的最后一个小时，做成可核验的交接控制。</p><p class="meta">WE Marketing Team · 2026 年 10 月 12 日 · 15 分钟阅读</p><img src="/blog/hero-${slug}-zh-v1.png" alt="Collection by TikTok 仓库截单扫描与交接 SOP"></header>
<p><strong>直接答案：</strong>Collection by TikTok 的仓库交接不能只理解为“司机来了，把货拿走”。它应该是一套受控的 Batch Release：先锁定仓库截单时间；按照同一份包裹清单完成拣货与打包；使用官方 CBT 面单；把 CBT 包裹独立分区；让实体数量、扫描记录与批次照片一致；最后只交给 CBT 指定的 Pickup Carrier。Manifest 或 In-App Scan 可以形成发货证据，但不能替代实体交接，也不能替代承运商的 Acceptance Scan。</p>
<p>Collection by TikTok 把 Pickup 与 Last-mile Service 组合在 TikTok Shipping 体系内，让符合条件的美国卖家继续使用现有仓库。对中国品牌或跨境团队来说，便利并不等于责任转移。司机取件之前，SKU 准确性、包装、面单、出库仓、批次准备度与异常沟通仍由卖家仓负责。</p>
<img class="body-visual" src="/blog/q4-16-cbt-handoff/handoff-chain-zh-v1.png" alt="Collection by TikTok 仓库交接控制链">
<h2>先定义“交接完成”，再写 SOP</h2>
<p>仓库里至少有三种不同记录。第一，系统生成 Order 与 Package Record。第二，TikTok Manifest 或 In-App Scan 记录一个已经准备好的批次。第三，指定承运商实体接收并扫描包裹。这三件事互相关联，但不能互相替代。Customer Order Shipping Requirements 明确禁止利用 Manifest 或扫描功能虚构实际交接，平台也会关注 Awaiting Collection 与 In Transit 之间异常过长的间隔。</p>
<p>因此，SOP 必须写清楚真正的 Release Event。只有当包裹数量、出库仓、面单、扫描证据与 Pickup Carrier 全部一致，主管才能签字放行。放行后还要继续观察第一条承运商轨迹；如果在内部设定时限内没有出现，批次应自动进入 Exception Ledger，而不是被默认成已成功发货。</p>
<h2>从 Pickup Time 倒推唯一的截单时钟</h2>
<p>当前 CBT Warehouse Operations SOP 提到，日常取件窗口通常是当地时间 10:00 至 18:00，并要求卖家仓在取件前准备好包裹；当天取消取件，则应在当地时间上午 9:00 前直接通知承运商。团队应把这些当成当前官方参考，而不是所有仓库的固定承诺。最终仍以账号实际分配的服务商、当地排期、节假日与当前通知为准。</p>
<p>为每个 Warehouse 设定实际 Pickup Time，再向前倒推五道闸门：Order Cutoff、Pick Complete、Pack Complete、Label and Scan Reconciliation、Dock Release。每道闸门之间保留缓冲。订单晚于 Cutoff，就进入下一个受控批次，而不是临时塞进已经扫描的包裹堆。</p>
<table><tr><th>闸门</th><th>必须保留的证据</th><th>停止条件</th></tr><tr><td>截单</td><td>按仓库与 Pickup Date 冻结包裹清单</td><td>迟到订单进入下一批次</td></tr><tr><td>拣货</td><td>SKU、Variant、数量与订单一致</td><td>缺货或替换商品必须隔离</td></tr><tr><td>打包</td><td>防护、重量、尺寸与特殊处理标识</td><td>不安全或数据不准就重新包装</td></tr><tr><td>面单与扫描</td><td>官方清晰面单、批次数量、扫描结果、照片</td><td>数量或条码不一致就停止放行</td></tr><tr><td>实体交接</td><td>指定承运商、时间、包裹数与仓库记录</td><td>承运商错误或证据缺失就停止放行</td></tr></table>
<h2>让拣货与打包可以被追溯</h2>
<p>不要只保留订单总数，要建立 Package-level Worklist。每一行至少包括 Order ID、Package ID、SKU 与 Variant、数量、Warehouse、Label ID、打包后的实际重量与尺寸、特殊处理状态、最终 Staging Zone。可以由一人拣货、另一人复核；对于高风险 SKU，在符合隐私与内部政策的前提下，可在封箱前保存内容物照片。</p>
<p>Customer Order Shipping Requirements 把安全包装与合规面单的责任放在使用 CBT 的卖家身上。CBT Warehouse SOP 进一步要求面单清晰可读、牢固贴在包裹平面，条码不能被折痕、褶皱或遮挡影响。面单已经打印但无法扫描，仍然是异常包裹，不能算完成。</p>
<h2>为 CBT 建立独立的实体分区</h2>
<p>官方 CBT 仓库 SOP 要求卖家把 CBT 包裹单独分拣打包，并交给 CBT Pickup Carrier。它还明确提醒，不能绕过 Pickup Carrier，直接把 CBT 包裹交给面单所显示的末端承运商。即使面单上出现下游网络，仓库出库路径仍然要走被分配的 CBT 取件流程。</p>
<p>仓库应按 Pickup Date 与 Warehouse 建立清晰标记的 Staging Zone，不能与 Seller Shipping、其他 TikTok Shipping 批次或退件混放。每个批次挂一张 Batch Card，写明 Package Count、Manifest ID、Cutoff Time、Assigned Carrier 与 Exception Count。实体分区能加快最终复核，也能避免忙碌 Dock 把正确包裹交给错误网络。</p>
<h2>扫描是证据，不是为了做出“已发货”的样子</h2>
<p>对获得权限的卖家，TikTok Manifest 可以把同一仓库的包裹组成批次。官方指南要求团队打印 Manifest，在 Seller App 扫描 QR Code，确认系统识别的 Package List 与实体批次一致，完成批次照片，再迅速交给承运商。TikTok Shop 使用第一次 Manifest Scan Time，重复扫描不会覆盖最初时间。</p>
<p>只有当批次内每个包裹都真正准备好交接时才扫描。数量不一致就立即停止并逐件复核。取消旧面单并购买新面单后，旧的 Manifest Scan 不会自动转移到新面单，需要重新建立正确记录。不能为了时效指标扫描尚未完成的包裹，官方 Shipping Requirements 明确禁止滥用 Manifest 或 In-App Scan。</p>
<h2>实体交接必须单独留证</h2>
<p>Pickup 到达时，先把服务商与 Driver Route 和账号分配的 CBT 信息核对。按照批准流程与司机复核包裹数量，记录时间，并保存可获得的 Receipt、照片或 Dock Log。以后复盘时，主管必须能回答四个问题：哪些 Package 离开了、从哪个 Warehouse 离开、交给了哪个 Carrier、具体时间是什么。</p>
<p>交接后继续监控第一条 Logistics Movement。部分符合条件的扫描记录可能用于判断 Dispatch SLA，但这不意味着包裹已经发生实体移动。为批次设置 Next-check Deadline；如果包裹长时间停留在 Awaiting Collection，或者没有预期轨迹，应在证据仍容易调取时立刻联系 Provider 并打开异常。</p>
<img class="body-visual" src="/blog/q4-16-cbt-handoff/exception-ledger-zh-v1.png" alt="Collection by TikTok 仓库异常台账">
<h2>异常必须进入同一张 Ledger</h2>
<p>仓库群聊可以协调，但不能成为 System of Record。Exception Ledger 至少包括 Package、Batch、Failure Type、发现时间、当前 Custody、证据、Owner、下一个 Deadline 与 Resolution。建议使用固定分类：Late Order、Short Pick、Wrong SKU、Packaging Failure、Unreadable Label、Scan Mismatch、Missed Pickup、Wrong Carrier、Wrong Warehouse、Delayed First Movement、Failed Delivery、Return。</p>
<p>Missed Pickup 时，保持批次受控，联系 Provider 并记录新计划；面单或包装失败时，从 Release Count 中移除，修复后重新核验；数量不一致时，停止 Dock Handoff，直到实体与数字清单完全一致；Wrong Carrier 或 Wrong Origin 时，不要临时寻找 Offline Route，而要重建正确 CBT 路径。</p>
<h2>退件是一次新的仓库事件</h2>
<p>CBT SOP 包含 Failed Delivery and Return Process。退件回仓时，应进入独立 Return Zone，登记到仓时间，拍摄外包装状态，核对 Package 与 Item Identity，检查商品情况，记录退件原因，并决定能否回到 Sellable Inventory。不能不留记录就直接放回库存。原 Shipment Record 与 Return Disposition 必须保持关联。</p>
<p>退件模式还要反向修复出库 SOP。如果地址问题、面单损坏、包装失败或 SKU 错误反复出现，就创建明确的 Corrective Action 与 Owner。目标不是只把异常关闭，而是减少同类问题再次走到 Dock。</p>
<h2>每日 CBT 仓库复盘</h2>
<ol><li>确认当天 Warehouse、Pickup Provider 与预计窗口。</li><li>锁定 Order Cutoff 与 Package List。</li><li>检查上一批次尚未关闭的异常。</li><li>复核拣货、打包、重量、尺寸与面单。</li><li>按批次独立摆放 CBT 包裹。</li><li>核对扫描数、实体包裹数与照片。</li><li>只交给指定 CBT Pickup Carrier。</li><li>记录实体交接与第一条承运商轨迹。</li><li>按 Owner 与 Deadline 升级 Missed Pickup 或状态缺口。</li><li>复盘退件，并更新 Corrective Action List。</li></ol>
<h2>今天就做的最小动作</h2>
<p>选择一个 Warehouse 和一个 Pickup Batch，写出五道闸门的时间，打印 Package-level Checklist，建立 CBT-only Staging Zone，并指定一名 Handoff Supervisor。让实体包裹数与扫描记录完全一致，保存签字放行证据；第二天先检查所有没有预期轨迹的包裹，再决定是否扩大批次。</p>
<h2>来源说明</h2>
<p>这套 WE Marketing 原创运营框架基于 TikTok Shop 美国站 Seller University 的完整当前 <a href="${sources.overview}">What is Collection by TikTok (CBT)</a>、<a href="${sources.sop}">CBT Order Processing: Warehouse Operations SOP</a>、<a href="${sources.shipping}">Customer Order Shipping Requirements</a> 与 <a href="${sources.manifest}">How to Create and Scan a TikTok Manifest</a>，均于 2026 年 10 月 12 日重新核验。Eligibility、Pickup Area、Carrier Assignment、Time Window、界面路径、扫描认定与履约规则都可能变化，执行前必须核验当前美国站 Seller Center 与实际分配服务商的最新要求。</p>
${faq(faqZh, true)}
<h2>相关 WEM 指南</h2><section class="related-grid"><a href="/blog/tiktok-shop-peak-season-shipping-margin?lang=zh"><strong>旺季运费与 SKU 毛利</strong><span>把当前运费证据写进单笔 Contribution Margin。</span></a><a href="/blog/tiktok-shop-fulfillment-growth-system?lang=zh"><strong>履约是一套增长系统</strong><span>把仓库执行与增长风险连接起来。</span></a><a href="/blog/tiktok-shop-preorder-mto-backorder?lang=zh"><strong>预售与 Handling Control</strong><span>让承诺与真实履约能力匹配。</span></a></section>`;

const citations = Object.values(sources);
const graph = {'@context':'https://schema.org','@graph':[
  {'@type':'BlogPosting','@id':`${url}#article`,headline:enTitle,description:enDescription,inLanguage:'en-US',author:{'@type':'Organization','@id':'https://www.weglobalmarketing.com/#editorial-team',name:'WE Marketing Team'},publisher:{'@type':'Organization','@id':'https://www.weglobalmarketing.com/#organization',name:'WE Marketing',alternateName:'WEM'},image:{'@type':'ImageObject',url:`https://www.weglobalmarketing.com/blog/hero-${slug}-en-v1.png`,width:1792,height:896},datePublished:date,dateModified:date,mainEntityOfPage:{'@type':'WebPage','@id':url},citation:citations,keywords:['Collection by TikTok','CBT warehouse SOP','TikTok Shop pickup','TikTok Manifest']},
  {'@type':'BlogPosting','@id':`${url}?lang=zh#article`,headline:zhTitle,description:zhDescription,inLanguage:'zh-CN',translationOfWork:{'@id':`${url}#article`},author:{'@id':'https://www.weglobalmarketing.com/#editorial-team'},publisher:{'@id':'https://www.weglobalmarketing.com/#organization'},image:{'@type':'ImageObject',url:`https://www.weglobalmarketing.com/blog/hero-${slug}-zh-v1.png`,width:1792,height:896},datePublished:date,dateModified:date,mainEntityOfPage:{'@type':'WebPage','@id':`${url}?lang=zh`},citation:citations},
  ...[[faqEn,'en-US',`${url}#faq`],[faqZh,'zh-CN',`${url}?lang=zh#faq`]].map(([items,lang,id])=>({'@type':'FAQPage','@id':id,inLanguage:lang,mainEntity:items.map(([name,text])=>({'@type':'Question',name,acceptedAnswer:{'@type':'Answer',text}}))})),
  {'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:'https://www.weglobalmarketing.com/'},{'@type':'ListItem',position:2,name:'Blog',item:'https://www.weglobalmarketing.com/blog'},{'@type':'ListItem',position:3,name:enTitle,item:url}]}
]};

const old = await fs.readFile(path.join(base, 'blog/tiktok-shop-peak-season-shipping-margin.html'), 'utf8');
const style = old.match(/<style>[\s\S]*?<\/style>/)[0];
const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><script>document.documentElement.dataset.lang=new URLSearchParams(location.search).get('lang')==='zh'?'zh':'en';document.documentElement.lang=document.documentElement.dataset.lang==='zh'?'zh-CN':'en'</script><title>${enTitle} | WE Marketing</title><meta name="description" content="${enDescription}"><link rel="canonical" href="${url}"><link rel="alternate" hreflang="en-US" href="${url}"><link rel="alternate" hreflang="zh-CN" href="${url}?lang=zh"><link rel="alternate" hreflang="x-default" href="${url}"><script type="application/ld+json">${JSON.stringify(graph)}</script>${style}</head><body><nav class="nav"><a class="logo" href="/"><img src="/assets/we-logo.png" alt="WE Marketing"></a><a href="/services">SERVICES</a><a href="/about">ABOUT</a><a href="/blog">BLOG</a><span class="spacer"></span><div class="switch"><a class="zh" href="?lang=zh">中文</a><a class="en" href="?">EN</a></div></nav><main class="wrap"><div class="tools"><a class="en" href="/blog">← BLOG</a><a class="zh" href="/blog?lang=zh">← 博客</a></div><article lang="en">${EN}</article><article lang="zh-CN">${ZH}</article></main><section class="cta"><h2 class="en">READY TO TALK<br>TO WEM?</h2><h2 class="zh">准备好和 WEM<br>一起把计划落地吗？</h2><p class="en">Turn warehouse handoff into a controlled, evidence-backed operating system.</p><p class="zh">把仓库交接变成受控、可核验的运营系统。</p><a class="en" href="https://scheduler.zoom.us/wendylin001">BOOK A DISCOVERY CALL</a><a class="zh" href="https://scheduler.zoom.us/wendylin001">预约咨询</a></section><footer class="footer"><img src="/assets/we-logo.png" alt="WE Marketing"><p class="en">WE Marketing connects strategy, creator operations, paid growth and TikTok Shop execution.</p><p class="zh">WE Marketing 帮助品牌连接策略、达人运营、付费增长与 TikTok Shop 执行。</p><p>© 2026 WE Marketing. All rights reserved.</p></footer><script>if(document.documentElement.dataset.lang==='zh'){document.title=${JSON.stringify(zhTitle+' | WE Marketing')};document.querySelector('meta[name=description]').content=${JSON.stringify(zhDescription)};document.querySelector('link[rel=canonical]').href='${url}?lang=zh'}</script></body></html>`;
await fs.writeFile(path.join(out, 'blog', `${slug}.html`), html);

let list = await fs.readFile(path.join(base, 'BlogList.jsx'), 'utf8');
const row = {slug,tags:['tiktok-shop','shop-operations','fulfillment'],cat:{en:'TIKTOK SHOP U.S. · COLLECTION BY TIKTOK',zh:'TIKTOK SHOP 美国站 · 仓库履约'},title:{en:enTitle,zh:zhTitle},excerpt:{en:'Control CBT cutoff, labels, scans, physical carrier handoff and warehouse exceptions.',zh:'用一套 SOP 控制 CBT 截单、面单、扫描、实体交接与仓库异常。'},date:{en:'Oct 12, 2026',zh:'2026 年 10 月 12 日'},read:{en:'15 min read',zh:'15 分钟阅读'},image:{en:`hero-${slug}-en-v1.png`,zh:`hero-${slug}-zh-v1.png`}};
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
