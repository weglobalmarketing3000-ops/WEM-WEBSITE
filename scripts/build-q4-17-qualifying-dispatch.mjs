import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import vm from 'node:vm';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const sharp = require('/Users/wendylin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');
const root = path.resolve(import.meta.dirname, '..');
const base = path.resolve(process.env.WEM_Q4_17_BASE || '/private/tmp/wem-q4-17-live.RAYwD3/ui_kits/website');
const out = path.join(root, 'outputs/patches/2026-10-13-q4-17-qualifying-dispatch');
const sourceDir = path.join(root, 'outputs/2026-10-13-q4-17-source');
const scene = path.join(root, 'outputs/2026-10-13-q4-17-visuals/qualifying-dispatch-raw-scene-v1.png');
const slug = 'tiktok-shop-qualifying-dispatch-event';
const date = '2026-10-13';
const url = `https://www.weglobalmarketing.com/blog/${slug}`;
const enTitle = 'What Counts as a TikTok Shop Qualifying Dispatch Event?';
const zhTitle = '什么才算 TikTok Shop Qualifying Dispatch Event？';
const enDescription = 'Separate label creation, package readiness, TikTok scans, carrier acceptance and physical handoff in one evidence-based dispatch control.';
const zhDescription = '把面单创建、包裹就绪、TikTok 扫描、承运商接收与实体交接分开记录，建立可核验的发货控制。';
const sources = [
  'https://seller-us.tiktok.com/university/essay?knowledge_id=2143365058316052',
  'https://seller-us.tiktok.com/university/essay?default_language=en&knowledge_id=2159226148472596',
  'https://seller-us.tiktok.com/university/essay?default_language=en&knowledge_id=3668989549299511',
  'https://seller-us.tiktok.com/university/essay?identity=1&knowledge_id=3995852763301633&role=1'
];
const sha = value => crypto.createHash('sha256').update(value).digest('hex');

await fs.rm(out, { recursive: true, force: true });
for (const dir of ['assets', 'blog', 'blog/optimized', 'blog/thumbs', 'blog/q4-17-dispatch']) await fs.mkdir(path.join(out, dir), { recursive: true });
await fs.copyFile(path.join(base, 'assets/we-logo.png'), path.join(out, 'assets/we-logo.png'));
const logo = (await fs.readFile(path.join(out, 'assets/we-logo.png'))).toString('base64');

function esc(value) { return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;'); }

async function makeCover(lang) {
  const zh = lang === 'zh';
  const title = zh ? ['什么才算', '合格的', '发货事件？'] : ['WHAT COUNTS AS', 'A QUALIFYING', 'DISPATCH EVENT?'];
  const subtitle = zh ? '时间 · 证据 · 实体交接' : 'TIME · EVIDENCE · PHYSICAL HANDOFF';
  const overlay = Buffer.from(`<svg width="1792" height="896" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="fade" x1="0" x2="1"><stop stop-color="#fffdf8" offset="0"/><stop stop-color="#fffdf8" stop-opacity=".97" offset=".42"/><stop stop-color="#fffdf8" stop-opacity="0" offset=".68"/></linearGradient></defs>
    <rect width="1792" height="896" fill="url(#fade)"/>
    <rect x="84" y="72" width="515" height="50" rx="25" fill="#e7efff"/><text x="112" y="106" font-family="Arial,PingFang SC" font-size="21" font-weight="800" fill="#1f55c7">TIKTOK SHOP U.S. · FULFILLMENT</text>
    ${title.map((line, i) => `<text x="84" y="${240 + i * 90}" font-family="Arial Narrow,Arial,PingFang SC" font-size="${zh ? 74 : (i === 2 ? 65 : 59)}" font-weight="900" fill="${i === 1 ? '#245bd7' : '#17151a'}">${esc(line)}</text>`).join('')}
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
  if (type === 'events') {
    const title = zh ? '不要把五个不同事件都叫“已发货”' : 'Do not call five different events “dispatched”';
    const rows = zh ? [
      ['1', '创建面单', '有 Tracking，不等于包裹已完成'],
      ['2', '包裹就绪', '准确商品已打包、贴标并通过检查'],
      ['3', 'TikTok Scan', '符合条件时可能作为 Qualifying Event'],
      ['4', '实体交接', '包裹真正离开卖家控制'],
      ['5', 'Carrier Acceptance', '承运商网络正式接收并扫描']
    ] : [
      ['1', 'Label created', 'Tracking exists, but the parcel may not be ready'],
      ['2', 'Package ready', 'Correct goods are packed, labeled and checked'],
      ['3', 'TikTok scan', 'May qualify for eligible orders and methods'],
      ['4', 'Physical handoff', 'The parcel actually leaves seller control'],
      ['5', 'Carrier acceptance', 'The carrier network records induction']
    ];
    return `<svg width="1600" height="900" xmlns="http://www.w3.org/2000/svg"><rect width="1600" height="900" rx="42" fill="#f5f2ff"/><text x="70" y="100" font-family="Arial,PingFang SC" font-size="42" font-weight="850" fill="#17141d">${title}</text><g transform="translate(70 160)">${rows.map((r,i)=>`<g transform="translate(0 ${i*132})"><rect width="1460" height="108" rx="24" fill="#fff"/><circle cx="60" cy="54" r="34" fill="${i===2?'#ed168c':'#245bd7'}"/><text x="60" y="65" text-anchor="middle" font-family="Arial" font-size="28" font-weight="900" fill="#fff">${r[0]}</text><text x="125" y="48" font-family="Arial,PingFang SC" font-size="27" font-weight="850" fill="#1746b8">${r[1]}</text><text x="125" y="83" font-family="Arial,PingFang SC" font-size="22" fill="#4f4a55">${r[2]}</text></g>`).join('')}</g></svg>`;
  }
  const title = zh ? '四证一账：发货异常的最小证据链' : 'Four proofs and one ledger: minimum dispatch evidence';
  const cols = zh ? [
    ['包裹证据', '面单、包装、SKU 与数量'], ['扫描证据', '时间、照片、Manifest 与结果'], ['交接证据', '承运商、批次、数量与签收'], ['系统证据', 'Tracking、状态、SLA 与异常'], ['决策账', 'Owner、截止时间与修复结果']
  ] : [
    ['Package proof', 'Label, pack, SKU and count'], ['Scan proof', 'Time, photo, manifest and result'], ['Handoff proof', 'Carrier, batch, count and receipt'], ['System proof', 'Tracking, status, SLA and exception'], ['Decision ledger', 'Owner, deadline and repair result']
  ];
  return `<svg width="1600" height="760" xmlns="http://www.w3.org/2000/svg"><rect width="1600" height="760" rx="42" fill="#f5f2ff"/><text x="70" y="105" font-family="Arial,PingFang SC" font-size="42" font-weight="850" fill="#17141d">${title}</text><g transform="translate(45 190)">${cols.map((r,i)=>`<g transform="translate(${i*302} 0)"><rect width="275" height="410" rx="28" fill="#fff"/><rect width="275" height="14" rx="7" fill="${i===4?'#ed168c':'#245bd7'}"/><circle cx="50" cy="77" r="27" fill="#ece8ff"/><text x="50" y="87" text-anchor="middle" font-family="Arial" font-size="23" font-weight="900" fill="#245bd7">${i+1}</text><text x="28" y="145" font-family="Arial,PingFang SC" font-size="25" font-weight="850" fill="#1746b8">${r[0]}</text><foreignObject x="28" y="186" width="220" height="170"><div xmlns="http://www.w3.org/1999/xhtml" style="font:22px Arial,PingFang SC;color:#4f4a55;line-height:1.55">${r[1]}</div></foreignObject></g>`).join('')}</g></svg>`;
}

for (const lang of ['en', 'zh']) {
  await makeCover(lang);
  for (const type of ['events', 'ledger']) await sharp(Buffer.from(diagram(lang, type))).png().toFile(path.join(out, 'blog/q4-17-dispatch', `${type}-${lang}-v1.png`));
}

const faqEn = [
  ['Does printing a shipping label count as a qualifying dispatch event?', 'No. A label and tracking number prepare the order record, but they do not prove package readiness, a qualifying scan, physical handoff or carrier acceptance.'],
  ['Which events may qualify for dispatch SLA measurement?', 'For eligible orders, TikTok Shop may use the earliest recognized carrier acceptance scan, USPS manifest, in-app single scan or in-app batch scan, depending on the order and shipping method.'],
  ['Does an In-App Scan change the order to In Transit?', 'No. TikTok says it adds a shipment-confirmation event but does not replace carrier handoff or the carrier scan.'],
  ['Can Seller Shipping orders use In-App Scan?', 'The current In-App Scan guide says no. It is available only to selected sellers using TikTok Shipping labels.'],
  ['Does a TikTok Manifest prove every parcel was accepted by the carrier?', 'No. It records the batch scan and photo. The physical package count and later carrier acceptance still require separate reconciliation.'],
  ['What should the team do when the qualifying event is missing?', 'Identify the exact order and SLA, preserve package and handoff evidence, contact the responsible carrier or TikTok support path, and monitor until the native status is resolved.']
];
const faqZh = [
  ['打印面单就算 Qualifying Dispatch Event 吗？', '不算。面单和 Tracking 只是准备订单记录，并不能证明包裹就绪、完成合格扫描、实体交接或承运商接收。'],
  ['哪些事件可能用于 Dispatch SLA 判断？', '对于符合条件的订单，TikTok Shop 可能按订单与物流方式识别最早的 Carrier Acceptance、USPS Manifest、In-App Single Scan 或 In-App Batch Scan。'],
  ['In-App Scan 会把订单状态改成 In Transit 吗？', '不会。TikTok 说明它会增加 Shipment-confirmation Event，但不替代承运商交接或 Carrier Scan。'],
  ['Seller Shipping 订单可以用 In-App Scan 吗？', '当前 In-App Scan 指南说明不可以。该功能只面向使用 TikTok Shipping 面单的部分符合条件卖家。'],
  ['TikTok Manifest 能证明整批包裹都被承运商接收吗？', '不能。它记录批次扫描与照片，实体包裹数量和后续 Carrier Acceptance 仍需单独对账。'],
  ['缺少 Qualifying Event 时团队应该做什么？', '锁定准确订单与 SLA，保存包裹和交接证据，联系对应承运商或 TikTok Support 路径，并持续回读到原生状态解决。']
];
const faqHtml = (items, zh) => `<section class="faq"><h2>${zh ? '常见问题' : 'Frequently asked questions'}</h2>${items.map(([q,a])=>`<div class="faq-item"><h3>${q}</h3><p>${a}</p></div>`).join('')}</section>`;

const EN = [
  `<p class="eyebrow">TIKTOK SHOP U.S. · FULFILLMENT CONTROL</p><h1>${enTitle}</h1><img class="hero" src="/blog/hero-${slug}-en-v1.png" alt="${enTitle}"><p class="byline">WE Marketing Team · Oct 13, 2026 · 16 min read</p>`,
  `<p><strong>Direct answer:</strong> a qualifying dispatch event is a shipment event TikTok Shop recognizes when deciding whether an eligible order met its Dispatch SLA. Depending on the order and shipping method, the earliest recognized event may be a carrier acceptance scan, USPS manifest, In-App single scan or In-App batch scan. Printing a label, adding tracking, putting a parcel on a warehouse table or telling the team that pickup occurred is not the same thing.</p>`,
  `<p>The distinction matters because one order can carry several clocks and several kinds of evidence. A TikTok scan can support Dispatch SLA measurement for an eligible order, yet it does not prove that a carrier physically accepted the parcel. A carrier acceptance scan can establish network induction, but it does not prove the SKU, quantity or packaging was correct. The operating system must preserve both the platform event and the physical handoff.</p>`,
  `<blockquote><p><strong>Operating rule:</strong> record the event TikTok recognizes, the event the carrier records and the event the warehouse actually completed. Never collapse three different facts into one “shipped” status.</p></blockquote>`,
  `<h2>Start with the official event list</h2><p>TikTok Shop's current Late Dispatch Rate Requirements say that, for eligible orders, the platform may use the earliest available qualifying dispatch event. The listed examples are a carrier acceptance scan, USPS manifest, In-App single scan and In-App batch scan. Eligibility and shipping method matter. The event used for one order should not be assumed for every order, carrier or account.</p>`,
  `<p>The current Fulfillment Policy also states that sellers must have orders scanned by a carrier within the Dispatch SLA. Where available and eligible, manifest or In-App Scan events may be used for Dispatch SLA measurement. Sellers remain responsible for accurate preparation and timely carrier handoff. That is the key boundary: an alternate qualifying event can support the platform clock, but it does not eliminate physical fulfillment duties.</p>`,
  `<figure><img src="/blog/q4-17-dispatch/events-en-v1.png" alt="Five distinct dispatch events from label creation to carrier acceptance"><figcaption>Label creation, package readiness, TikTok scan, handoff and carrier acceptance are different control points.</figcaption></figure>`,
  `<h2>Label creation is preparation, not dispatch proof</h2><p>A shipping label connects the order to a tracking identifier and logistics route. It can move an order into a preparation state, but it does not show that the correct product is inside the box, that the parcel is sealed, that the package is at the correct warehouse, or that anyone has handed it to a carrier. Treat label purchase as a data event.</p>`,
  `<p>Use a separate package-ready gate. The warehouse should verify the order, SKU, variation, quantity, label, packaging and carrier route before any scan intended to support dispatch. If a label is canceled and replaced, earlier manifest evidence may not carry over. TikTok's current Manifest guide explicitly says that a package with a new label must be added to a new manifest and scanned again.</p>`,
  `<h2>In-App Scan can qualify, but only inside its boundary</h2><p>The current In-App Scan guide applies to selected eligible sellers using TikTok Shipping labels. The seller scans each label in the TikTok Shop Seller App shortly before handoff and follows the app flow to take a package photo. A successful scan records the time and photo. For eligible orders, that event may be recognized for Dispatch SLA measurement.</p>`,
  `<p>The same guide says In-App Scan is not available for Seller Shipping. It also says the scan does not change the order status and does not replace actual carrier handoff or the carrier scan. The shopper may see “Package ready for carrier pickup,” which is accurate only if the parcel is fully prepared and promptly released. Scanning early to create a favorable clock while the parcel remains unfinished misrepresents fulfillment activity and can trigger enforcement.</p>`,
  `<h2>TikTok Manifest is a batch event, not a carrier receipt</h2><p>TikTok Manifest lets selected sellers using TikTok Shipping labels group packages from one warehouse and scan one QR code when the full batch is ready for handoff. The platform records the first scan time and a photo. For eligible orders, the event may qualify for Dispatch SLA measurement. A repeat scan does not replace the first recorded time.</p>`,
  `<p>The warehouse must reconcile the manifest count to the physical batch before scanning. Keep each warehouse separate. A successful manifest scan adds a shipment-confirmation record, but the official guide says it does not replace physical handoff or carrier acceptance. The signed batch count, pickup record and subsequent tracking movement remain essential evidence.</p>`,
  `<h2>Carrier acceptance answers a different question</h2><p>A carrier acceptance scan shows that the parcel entered the carrier network. It is stronger evidence of physical induction than label creation or a package-ready record. For USPS workflows, current guidance distinguishes acceptance from a scan form or manifest preparation. The warehouse should still investigate if the accepted package count does not match the released batch.</p>`,
  `<p>Do not treat the absence of an immediate carrier scan as proof that no handoff occurred, and do not treat a warehouse statement as proof that the platform received a qualifying event. Preserve both sides, then resolve the gap. The operational objective is not to win an argument about one timestamp. It is to make the order, carrier and platform records converge.</p>`,
  `<h2>Build a four-proof dispatch record</h2><p>For each controlled batch, preserve four types of evidence. Package proof covers SKU, variation, count, label and packaging. Scan proof covers the exact event, timestamp, photo, manifest and success or failure result. Handoff proof covers carrier, location, batch count, pickup or drop-off time and receipt. System proof covers tracking, order state, applicable SLA and later movement.</p>`,
  `<p>Add one decision ledger across the four proofs. Name the owner, deadline, exception, next action and final readback. If a carrier accepted 98 parcels but the manifest contains 100, the ledger should identify the two order IDs and hold them as exceptions. The batch is not “done” because the majority moved.</p>`,
  `<figure><img src="/blog/q4-17-dispatch/ledger-en-v1.png" alt="Four proofs and one dispatch decision ledger"><figcaption>Keep enough evidence to explain the platform clock and the physical handoff.</figcaption></figure>`,
  `<h2>Use the earliest recognized event carefully</h2><p>The earliest qualifying event may be used for Late Dispatch Rate measurement on eligible orders. That does not mean the earliest timestamp should automatically drive every internal decision. A package can meet a platform dispatch clock and still create an operational exception if handoff is delayed, the wrong carrier receives it or tracking never advances.</p>`,
  `<p>Review the order by shipping method. Seller Shipping, TikTok Shipping, Collection by TikTok and Fulfilled by TikTok do not have identical workflows. In-App Scan has an explicit current boundary. Manifest access is selective. FBT orders are handled differently because TikTok controls the end-to-end logistics. Record the actual route shown on the order instead of applying one SOP to every label.</p>`,
  `<h2>Run a daily dispatch exception review</h2><ol><li><strong>Freeze the cutoff.</strong> Identify orders whose Dispatch SLA is at risk today.</li><li><strong>Check the recognized event.</strong> Read the native tracking and shipment-confirmation record for each order.</li><li><strong>Reconcile the physical batch.</strong> Match label, parcel, manifest and handoff counts.</li><li><strong>Separate missing scan from missing handoff.</strong> They require different owners and evidence.</li><li><strong>Escalate by route.</strong> Contact the carrier, CBT provider or TikTok support path that owns the missing event.</li><li><strong>Close only on readback.</strong> Record the terminal native status or keep the order open as an exception.</li></ol>`,
  `<h2>A hypothetical warehouse example</h2><p>The following is an operating example, not a client result. A warehouse creates a 120-package TikTok Manifest at 3:40 PM. The app scan succeeds at 3:46 PM, but the carrier receipt lists 118 packages at 4:05 PM. The platform event may qualify for eligible orders, yet the physical record exposes two unresolved parcels.</p>`,
  `<p>The operator does not mark the entire batch complete. They identify the two order IDs, verify whether each parcel remained at the dock, save the first scan record, preserve the carrier receipt and assign an owner before the cutoff. If one label was replaced, that parcel enters a new manifest flow. The final ledger records what the platform recognized and what the carrier actually accepted.</p>`,
  `<h2>The smallest useful next action</h2><p>Take one dispatch batch from today. Write five timestamps in one row: label created, package ready, TikTok scan, physical handoff and carrier acceptance. Attach the exact native or physical evidence for each. If one field is Unknown, assign its owner and deadline instead of calling the order shipped.</p>`,
  `<h2>Source notes and execution boundary</h2><p>This original WE Marketing dispatch-control framework draws on the current TikTok Shop U.S. Seller University <a href="${sources[0]}">In-App Scan</a>, <a href="${sources[1]}">How to Create and Scan a TikTok Manifest</a>, <a href="${sources[2]}">Late Dispatch Rate Requirements</a> and <a href="${sources[3]}">Fulfillment Policy</a>, revalidated October 13, 2026. The official materials define current event eligibility and responsibilities. WEM adds the five-event separation, four-proof record and exception ledger. Availability, account eligibility, carrier behavior, interfaces and policy wording can change. Verify the current order, Seller Center and carrier record before acting.</p>`,
  faqHtml(faqEn, false),
  `<h2>Related WEM guides</h2><section class="related-grid"><a href="/blog/tiktok-shop-collection-warehouse-handoff"><strong>Collection warehouse handoff SOP</strong><span>Control cutoff, scan, count and carrier exceptions.</span></a><a href="/blog/tiktok-shop-peak-season-shipping-margin"><strong>Peak-season shipping margin</strong><span>Put real shipping cost into SKU economics.</span></a><a href="/blog/tiktok-shop-delayed-order-promise-control"><strong>Delayed-order promise control</strong><span>Separate policy, promise and buyer communication.</span></a></section>`
].join('');

const ZH = [
  `<p class="eyebrow">TIKTOK SHOP 美国站 · 履约控制</p><h1>${zhTitle}</h1><img class="hero" src="/blog/hero-${slug}-zh-v1.png" alt="${zhTitle}"><p class="byline">WE Marketing Team · 2026 年 10 月 13 日 · 16 分钟阅读</p>`,
  `<p><strong>直接答案：</strong>Qualifying Dispatch Event 是 TikTok Shop 在判断符合条件的订单是否满足 Dispatch SLA 时认可的发货事件。根据准确订单与物流方式，最早被识别的事件可能是 Carrier Acceptance Scan、USPS Manifest、In-App Single Scan 或 In-App Batch Scan。打印面单、上传 Tracking、把包裹放在仓库桌上，或团队口头说已 Pickup，都不是同一件事。</p>`,
  `<p>这个区别很重要，因为同一订单可以同时存在多只时钟和多种证据。TikTok Scan 对符合条件的订单可能支持 Dispatch SLA 判断，但它不证明承运商已经实体接收；Carrier Acceptance 可以证明包裹进入网络，却不证明箱内 SKU、数量和包装一定正确。运营系统必须同时保留平台事件与实体交接。</p>`,
  `<blockquote><p><strong>运营规则：</strong>分别记录 TikTok 认可的事件、承运商记录的事件和仓库实际完成的事件。绝不能把三条不同事实压成一个“已发货”。</p></blockquote>`,
  `<h2>先锁定官方认可的事件清单</h2><p>TikTok Shop 当前 Late Dispatch Rate Requirements 说明，对于符合条件的订单，平台可能使用最早可用的 Qualifying Dispatch Event。列出的例子包括 Carrier Acceptance Scan、USPS Manifest、In-App Single Scan 与 In-App Batch Scan。订单资格和物流方式都会影响判断，不能把一个订单适用的事件默认复制到所有订单、承运商和账号。</p>`,
  `<p>当前 Fulfillment Policy 同时要求卖家在 Dispatch SLA 内让订单获得承运商扫描；在功能可用且订单符合条件时，Manifest 或 In-App Scan 也可能用于 Dispatch SLA 判断。卖家仍负责准确备货并及时完成 Carrier Handoff。边界非常清楚：额外的 Qualifying Event 可以支持平台时钟，但不会消除实体履约责任。</p>`,
  `<figure><img src="/blog/q4-17-dispatch/events-zh-v1.png" alt="从面单创建到承运商接收的五个不同发货事件"><figcaption>面单创建、包裹就绪、TikTok Scan、实体交接与 Carrier Acceptance 是不同控制点。</figcaption></figure>`,
  `<h2>创建面单是准备，不是发货证明</h2><p>面单把订单连接到 Tracking ID 与物流路径，可能让订单进入准备状态，但它无法证明准确商品已经装箱、包裹已经封好、包裹位于正确仓库，或任何承运商已经接收。把购买面单视为 Data Event，而不是实体交接。</p>`,
  `<p>仓库必须另设 Package-ready Gate，在用于支持发货的扫描前，核对订单、SKU、Variation、数量、面单、包装与承运商路径。如果原面单被取消并更换，先前 Manifest 证据可能不会继续有效。当前 Manifest 指南明确说明，新面单的包裹需要加入新的 Manifest 并重新扫描。</p>`,
  `<h2>In-App Scan 可能合格，但有明确边界</h2><p>当前 In-App Scan 指南适用于使用 TikTok Shipping 面单的部分符合条件卖家。卖家在交接前不久，通过 TikTok Shop Seller App 扫描每张面单，并按流程拍摄包裹照片。成功扫描会记录时间和照片；对于符合条件的订单，这个事件可能被识别用于 Dispatch SLA 判断。</p>`,
  `<p>同一指南说明 In-App Scan 不适用于 Seller Shipping，也不会直接把订单状态改成 In Transit，更不替代实际交接和 Carrier Scan。买家可能看到 Package ready for carrier pickup，前提是包裹真的完成准备并很快交出。包裹未完成就提前扫描，只为了制造更早时钟，会错误表达履约状态，并可能触发 Enforcement。</p>`,
  `<h2>TikTok Manifest 是批次事件，不是承运商收据</h2><p>TikTok Manifest 允许部分使用 TikTok Shipping 面单的卖家，把同一仓库的包裹分成批次，在整批准备交接时扫描一个 QR Code。平台保存第一次 Scan Time 和照片；对符合条件的订单，该事件可能用于 Dispatch SLA。重复扫描不会替换第一次记录时间。</p>`,
  `<p>仓库扫描前必须把 Manifest Count 与实体批次逐一核对，并且不同仓库分开建单。成功 Manifest Scan 会增加 Shipment-confirmation Record，但官方指南明确说它不替代实体交接或 Carrier Acceptance。签字批次数量、Pickup Record 与后续 Tracking Movement 仍是必要证据。</p>`,
  `<h2>Carrier Acceptance 回答另一道问题</h2><p>Carrier Acceptance Scan 表示包裹已经进入承运商网络。对于实体 Induction，它比面单创建或 Package-ready Record 更强。USPS 当前流程也把 Acceptance 与创建 Scan Form 或 Manifest 区分。即使承运商完成扫描，如果接收数量和仓库释放批次不一致，也必须继续调查。</p>`,
  `<p>不要把没有即时 Carrier Scan 直接当作没有交接，也不要把仓库口头确认当作平台一定收到 Qualifying Event。先把两边证据保存下来，再解决差距。目标不是围绕一个 Timestamp 赢得争论，而是让订单、承运商与平台记录最终一致。</p>`,
  `<h2>建立四证一账的发货记录</h2><p>每个受控批次保留四类证据。Package Proof 覆盖 SKU、Variation、数量、面单与包装；Scan Proof 覆盖准确事件、时间、照片、Manifest 与成功或失败结果；Handoff Proof 覆盖承运商、地点、批次数量、Pickup 或 Drop-off 时间与收据；System Proof 覆盖 Tracking、订单状态、适用 SLA 与后续 Movement。</p>`,
  `<p>再用一张 Decision Ledger 连接四类证据，记录 Owner、Deadline、Exception、Next Action 与 Final Readback。如果 Carrier 接收 98 个包裹，而 Manifest 有 100 个，就要列出两个准确 Order ID 并保留为 Exception。多数包裹已经移动，不代表整个批次完成。</p>`,
  `<figure><img src="/blog/q4-17-dispatch/ledger-zh-v1.png" alt="四类证据与一张发货决策账"><figcaption>用最小证据链解释平台时钟与实体交接。</figcaption></figure>`,
  `<h2>谨慎使用最早认可事件</h2><p>对符合条件的订单，最早 Qualifying Event 可能用于 Late Dispatch Rate 判断，但最早时间不应自动成为所有内部决定的依据。订单可以满足平台 Dispatch Clock，却仍然产生运营异常，例如 Handoff 延迟、交给错误承运商，或 Tracking 长时间没有后续 Movement。</p>`,
  `<p>必须按 Shipping Method 审查。Seller Shipping、TikTok Shipping、Collection by TikTok 与 Fulfilled by TikTok 并不是同一套流程。In-App Scan 有当前明确边界，Manifest Access 是选择性开放，FBT 由 TikTok 处理端到端物流。记录订单上真实显示的 Route，不要把一份 SOP 套在所有面单上。</p>`,
  `<h2>每天运行 Dispatch Exception Review</h2><ol><li><strong>冻结 Cutoff。</strong>找出今天 Dispatch SLA 有风险的订单。</li><li><strong>检查 Recognized Event。</strong>逐单回读原生 Tracking 与 Shipment-confirmation Record。</li><li><strong>核对实体批次。</strong>匹配面单、包裹、Manifest 与 Handoff 数量。</li><li><strong>分开 Missing Scan 与 Missing Handoff。</strong>两者 Owner 与证据不同。</li><li><strong>按 Route 升级。</strong>联系负责缺失事件的 Carrier、CBT Provider 或 TikTok Support。</li><li><strong>只按回读关闭。</strong>记录终态原生 Status，否则继续保留为 Exception。</li></ol>`,
  `<h2>一个假设仓库案例</h2><p>以下是假设运营示例，不是客户结果。仓库在下午 3:40 创建包含 120 个包裹的 TikTok Manifest，App 在 3:46 扫描成功，但 Carrier Receipt 在 4:05 只记录 118 个。平台事件对符合条件的订单可能合格，但实体记录暴露出两个未解决包裹。</p>`,
  `<p>Operator 不会把整批标记 Complete，而是找出两个 Order ID，检查包裹是否仍在 Dock，保存第一次 Scan Record 与 Carrier Receipt，并在 Cutoff 前分配 Owner。如果其中一个面单被更换，该包裹进入新的 Manifest Flow。最终 Ledger 同时记录平台认可了什么，以及承运商实际接收了什么。</p>`,
  `<h2>现在就做的最小动作</h2><p>选取今天的一个 Dispatch Batch，在同一行写下五个时间：Label Created、Package Ready、TikTok Scan、Physical Handoff 与 Carrier Acceptance，并给每个时间附上准确原生或实体证据。任何一项是 Unknown，就分配 Owner 与 Deadline，不要把订单称为已发货。</p>`,
  `<h2>来源说明与执行边界</h2><p>这套 WE Marketing 发货控制框架基于当前 TikTok Shop 美国站 Seller University 的 <a href="${sources[0]}">In-App Scan</a>、<a href="${sources[1]}">How to Create and Scan a TikTok Manifest</a>、<a href="${sources[2]}">Late Dispatch Rate Requirements</a> 与 <a href="${sources[3]}">Fulfillment Policy</a>，并于 2026 年 10 月 13 日重新核验。官方资料定义当前事件资格与卖家责任；WEM 增加五事件拆分、四证一账与异常台账。功能、账号资格、承运商行为、界面和政策文字都可能变化，执行前应核对准确订单、Seller Center 与 Carrier Record。</p>`,
  faqHtml(faqZh, true),
  `<h2>相关 WEM 指南</h2><section class="related-grid"><a href="/blog/tiktok-shop-collection-warehouse-handoff?lang=zh"><strong>Collection 仓库交接 SOP</strong><span>控制截单、扫描、数量与承运商异常。</span></a><a href="/blog/tiktok-shop-peak-season-shipping-margin?lang=zh"><strong>旺季物流贡献利润</strong><span>把真实物流成本放回 SKU 经济模型。</span></a><a href="/blog/tiktok-shop-delayed-order-promise-control?lang=zh"><strong>延迟订单承诺控制</strong><span>分开政策、承诺与买家沟通。</span></a></section>`
].join('');

const graph = {'@context':'https://schema.org','@graph':[
  {'@type':'BlogPosting','@id':`${url}#article`,headline:enTitle,description:enDescription,inLanguage:'en-US',author:{'@type':'Organization','@id':'https://www.weglobalmarketing.com/#editorial-team',name:'WE Marketing Team'},publisher:{'@type':'Organization','@id':'https://www.weglobalmarketing.com/#organization',name:'WE Marketing',alternateName:'WEM'},image:{'@type':'ImageObject',url:`https://www.weglobalmarketing.com/blog/hero-${slug}-en-v1.png`,width:1792,height:896},datePublished:date,dateModified:date,mainEntityOfPage:{'@type':'WebPage','@id':url},citation:sources,keywords:['TikTok Shop qualifying dispatch event','In-App Scan','TikTok Manifest','Late Dispatch Rate']},
  {'@type':'BlogPosting','@id':`${url}?lang=zh#article`,headline:zhTitle,description:zhDescription,inLanguage:'zh-CN',translationOfWork:{'@id':`${url}#article`},author:{'@id':'https://www.weglobalmarketing.com/#editorial-team'},publisher:{'@id':'https://www.weglobalmarketing.com/#organization'},image:{'@type':'ImageObject',url:`https://www.weglobalmarketing.com/blog/hero-${slug}-zh-v1.png`,width:1792,height:896},datePublished:date,dateModified:date,mainEntityOfPage:{'@type':'WebPage','@id':`${url}?lang=zh`},citation:sources},
  ...[[faqEn,'en-US',`${url}#faq`],[faqZh,'zh-CN',`${url}?lang=zh#faq`]].map(([items,lang,id])=>({'@type':'FAQPage','@id':id,inLanguage:lang,mainEntity:items.map(([name,text])=>({'@type':'Question',name,acceptedAnswer:{'@type':'Answer',text}}))})),
  {'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:'https://www.weglobalmarketing.com/'},{'@type':'ListItem',position:2,name:'Blog',item:'https://www.weglobalmarketing.com/blog'},{'@type':'ListItem',position:3,name:enTitle,item:url}]}
]};

const oldHtml = await fs.readFile(path.join(base, 'blog/tiktok-shop-collection-warehouse-handoff.html'), 'utf8');
const style = oldHtml.match(/<style>[\s\S]*?<\/style>/)[0];
const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><script>document.documentElement.dataset.lang=new URLSearchParams(location.search).get('lang')==='zh'?'zh':'en';document.documentElement.lang=document.documentElement.dataset.lang==='zh'?'zh-CN':'en'</script><title>${enTitle} | WE Marketing</title><meta name="description" content="${enDescription}"><link rel="canonical" href="${url}"><link rel="alternate" hreflang="en-US" href="${url}"><link rel="alternate" hreflang="zh-CN" href="${url}?lang=zh"><link rel="alternate" hreflang="x-default" href="${url}"><script type="application/ld+json">${JSON.stringify(graph)}</script>${style}</head><body><nav class="nav"><a class="logo" href="/"><img src="/assets/we-logo.png" alt="WE Marketing"></a><span class="spacer"></span><a href="/">OUR SERVICES</a><a href="/showcase">OUR WORK</a><a href="/blog">BLOG</a><span class="switch"><a class="en" href="${url}">EN</a><a class="zh" href="${url}?lang=zh">中文</a></span></nav><main class="wrap"><div class="tools"><a class="en" href="/blog">← BLOG</a><a class="zh" href="/blog?lang=zh">← 博客</a></div><article lang="en">${EN}</article><article lang="zh-CN">${ZH}</article></main><section class="cta"><h2 class="en">READY TO TALK<br>TO WEM?</h2><h2 class="zh">准备好和 WEM<br>一起把计划落地吗？</h2><p class="en">Turn dispatch timestamps into one evidence-backed fulfillment control.</p><p class="zh">把发货时间点整理成一套有证据的履约控制。</p><a class="en" href="https://scheduler.zoom.us/wendylin001">BOOK A DISCOVERY CALL</a><a class="zh" href="https://scheduler.zoom.us/wendylin001">预约咨询</a></section><footer class="footer"><img src="/assets/we-logo.png" alt="WE Marketing"><p class="en">WE Marketing connects strategy, creator operations, paid growth and TikTok Shop execution.</p><p class="zh">WE Marketing 帮助品牌连接策略、达人运营、付费增长与 TikTok Shop 执行。</p><p>© 2026 WE Marketing. All rights reserved.</p></footer><script>if(document.documentElement.dataset.lang==='zh'){document.title=${JSON.stringify(zhTitle+' | WE Marketing')};document.querySelector('meta[name=description]').content=${JSON.stringify(zhDescription)};document.querySelector('link[rel=canonical]').href='${url}?lang=zh'}</script></body></html>`;
await fs.writeFile(path.join(out, 'blog', `${slug}.html`), html);

let list = await fs.readFile(path.join(base, 'BlogList.jsx'), 'utf8');
const row = {slug,tags:['tiktok-shop','shop-operations'],cat:{en:'TIKTOK SHOP U.S. · FULFILLMENT CONTROL',zh:'TIKTOK SHOP 美国站 · 履约控制'},title:{en:enTitle,zh:zhTitle},excerpt:{en:'Separate label creation, TikTok scans, physical handoff and carrier acceptance.',zh:'把面单创建、TikTok 扫描、实体交接与承运商接收分开记录。'},date:{en:'Oct 13, 2026',zh:'2026 年 10 月 13 日'},read:{en:'16 min read',zh:'16 分钟阅读'},image:{en:`hero-${slug}-en-v1.png`,zh:`hero-${slug}-zh-v1.png`}};
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

const sourceFiles = ['in-app-scan.html','tiktok-manifest.html','late-dispatch-rate.html','fulfillment-policy.html'];
const sourceReport = {status:'source_revalidated',date,sources:[]};
for (const file of sourceFiles) { const bytes=await fs.readFile(path.join(sourceDir,file)); sourceReport.sources.push({file,bytes:bytes.length,sha256:sha(bytes)}); }
sourceReport.facts = ['The earliest recognized qualifying dispatch event depends on order eligibility and shipping method.','Carrier acceptance, USPS manifest, in-app single scan and in-app batch scan may qualify for eligible orders.','In-App Scan and TikTok Manifest do not replace physical handoff or carrier acceptance.','In-App Scan currently excludes Seller Shipping and requires TikTok Shipping labels.','WEM separates label, readiness, platform scan, physical handoff and carrier acceptance as five controls.'];
await fs.writeFile(path.join(sourceDir,'metadata.json'),`${JSON.stringify(sourceReport,null,2)}\n`);
console.log(JSON.stringify({out,version,files:(await fs.readdir(out,{recursive:true})).length,enWords:EN.replace(/<[^>]+>/g,' ').trim().split(/\s+/).length,zhChars:ZH.replace(/<[^>]+>/g,'').replace(/\s/g,'').length},null,2));
