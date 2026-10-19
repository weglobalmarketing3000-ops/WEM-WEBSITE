import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import vm from 'node:vm';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const sharp = require('/Users/wendylin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');
const root = path.resolve(import.meta.dirname, '..');
const base = path.join(root, 'outputs/2026-10-19-current-live-baseline/ui_kits/website');
const out = path.join(root, 'outputs/patches/2026-10-19-q4-23-chargeback-evidence');
const slug = 'tiktok-shop-chargeback-seven-day-evidence-pack';
const date = '2026-10-19';
const url = `https://www.weglobalmarketing.com/blog/${slug}`;
const enTitle = 'A Seven-Day TikTok Shop Chargeback Evidence Pack';
const zhTitle = 'TikTok Shop 拒付争议：7 天内要准备好的证据包';
const enDescription = 'Build a TikTok Shop chargeback evidence pack with a seven-day clock, named owner, reason-specific proof, submission receipt and outcome readback.';
const zhDescription = '用七天时钟、具名负责人、按拒付原因匹配的证据、提交回执和结果回读，管理 TikTok Shop 拒付争议。';
const sources = {
  chargeback: 'https://seller-us.tiktok.com/university/essay?default_language=en&identity=1&knowledge_id=7989055607670570',
  evidence: 'https://seller-us.tiktok.com/university/essay?knowledge_id=7042659022210829',
};
const sha = value => crypto.createHash('sha256').update(value).digest('hex');

await fs.rm(out, { recursive: true, force: true });
for (const directory of ['assets', 'blog', 'blog/optimized', 'blog/thumbs', 'blog/q4-23-chargeback']) await fs.mkdir(path.join(out, directory), { recursive: true });
await fs.copyFile(path.join(base, 'assets/we-logo.png'), path.join(out, 'assets/we-logo.png'));

const rawScene = await fs.readFile(path.join(root, 'outputs/2026-10-19-q4-23-raw-scene-v1.png'));
const sceneData = rawScene.toString('base64');
const logoData = (await fs.readFile(path.join(out, 'assets/we-logo.png'))).toString('base64');
const esc = value => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

function coverSvg(zh = false) {
  const lines = zh ? ['拒付争议', '7 天证据包'] : ['7-DAY', 'CHARGEBACK', 'EVIDENCE PACK'];
  const sizes = zh ? [86, 78] : [83, 68, 68];
  const ys = zh ? [278, 382] : [230, 316, 402];
  const subtitle = zh ? '先准备证据，再等待争议' : 'BUILD THE FILE BEFORE THE DISPUTE';
  return `<svg width="1792" height="896" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bg" x2="1"><stop stop-color="#fffdf8"/><stop offset="1" stop-color="#ece7ff"/></linearGradient><filter id="shadow" x="-20%" y="-20%" width="140%" height="150%"><feDropShadow dx="0" dy="20" stdDeviation="22" flood-color="#5b4aa0" flood-opacity=".16"/></filter></defs><rect width="1792" height="896" fill="url(#bg)"/><path d="M1090 0h702v896H930c180-246 252-622 160-896z" fill="#f1edff"/><rect x="82" y="76" width="500" height="52" rx="26" fill="#e7edff"/><circle cx="110" cy="102" r="9" fill="#245bd7"/><text x="133" y="111" font-family="Arial,PingFang SC,sans-serif" font-size="21" font-weight="800" fill="#1746b8">TIKTOK SHOP U.S. / PAYMENT OPERATIONS</text>${lines.map((line,i)=>`<text x="82" y="${ys[i]}" font-family="Arial Narrow,Arial,PingFang SC,sans-serif" font-size="${sizes[i]}" font-weight="900" fill="${i===1?'#245bd7':'#17151a'}">${esc(line)}</text>`).join('')}<rect x="84" y="470" width="90" height="6" rx="3" fill="#245bd7"/><text x="82" y="535" font-family="Arial,PingFang SC,sans-serif" font-size="25" fill="#37332f">${esc(subtitle)}</text><image href="data:image/png;base64,${logoData}" x="78" y="692" width="150" height="110" preserveAspectRatio="xMidYMid meet"/><image href="data:image/png;base64,${sceneData}" x="805" y="110" width="910" height="700" preserveAspectRatio="xMidYMid meet" filter="url(#shadow)"/></svg>`;
}

for (const [lang, zh] of [['en', false], ['zh', true]]) {
  const pngName = `hero-${slug}-${lang}-v1.png`;
  const png = await sharp(Buffer.from(coverSvg(zh))).png().toBuffer();
  await fs.writeFile(path.join(out, 'blog', pngName), png);
  await sharp(png).resize(1280, 640, { fit: 'cover' }).jpeg({ quality: 90, chromaSubsampling: '4:4:4' }).toFile(path.join(out, 'blog/optimized', pngName.replace('.png', '.jpg')));
  await sharp(png).resize(880, 440, { fit: 'cover' }).jpeg({ quality: 88, chromaSubsampling: '4:4:4' }).toFile(path.join(out, 'blog/thumbs', pngName.replace('.png', '.jpg')));
}

function timelineSvg(zh = false) {
  const title = zh ? '七天倒计时：按不可逆节点排队' : 'Seven-day clock: queue by irreversible events';
  const items = zh ? [
    ['DAY 0','接收通知','保存案件、原因、Reply-by Date'],
    ['DAY 1','分配 Owner','按原因列出必须证明的事实'],
    ['DAY 2–4','补齐证据','物流、交易、商品与沟通记录'],
    ['DAY 5','独立复核','删除无关材料，检查矛盾'],
    ['DAY 6','提交并回读','确认文件、状态与时间戳'],
    ['DAY 7','只作缓冲','不要把最后一天当计划'],
  ] : [
    ['DAY 0','CAPTURE','Save case, reason and reply-by date'],
    ['DAY 1','ASSIGN','Name an owner and required facts'],
    ['DAY 2–4','COMPLETE','Collect delivery, transaction and product proof'],
    ['DAY 5','REVIEW','Remove noise and resolve contradictions'],
    ['DAY 6','SUBMIT','Read back files, status and timestamp'],
    ['DAY 7','BUFFER','Do not use the last day as the plan'],
  ];
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1400" height="720" viewBox="0 0 1400 720"><rect width="1400" height="720" rx="34" fill="#fff"/><text x="64" y="82" font-family="Arial,PingFang SC" font-size="39" font-weight="800" fill="#171717">${esc(title)}</text><rect x="64" y="112" width="150" height="6" rx="3" fill="#ed168c"/>${items.map((it,i)=>{const x=64+(i%3)*430,y=175+Math.floor(i/3)*235;return `<g><rect x="${x}" y="${y}" width="390" height="190" rx="24" fill="${i===5?'#fff3f9':'#f2efff'}" stroke="#d8d1ef"/><text x="${x+28}" y="${y+46}" font-family="Arial,PingFang SC" font-size="18" font-weight="800" fill="#245bd7">${esc(it[0])}</text><text x="${x+28}" y="${y+91}" font-family="Arial,PingFang SC" font-size="27" font-weight="800" fill="#171717">${esc(it[1])}</text><foreignObject x="${x+28}" y="${y+112}" width="330" height="60"><div xmlns="http://www.w3.org/1999/xhtml" style="font:18px Arial,'PingFang SC';line-height:1.4;color:#514b57">${esc(it[2])}</div></foreignObject></g>`}).join('')}</svg>`;
}

function packetSvg(zh = false) {
  const title = zh ? '证据包：每个文件证明一个具名事实' : 'Evidence pack: each file proves one named fact';
  const rows = zh ? [
    ['案件封面','Order ID、拒付原因、金额、Reply-by Date、Owner'],
    ['交易事实','交易状态、商品描述、订单确认与变更记录'],
    ['交付证据','运单、轨迹、签收或能连接订单的交付证明'],
    ['商品证据','下单时 Listing、SKU、照片、打包或质检记录'],
    ['沟通与处理','站内消息、退款、取消、换货或已达成协议'],
    ['提交回执','上传文件清单、提交时间、状态与最终结果'],
  ] : [
    ['CASE COVER','Order ID, reason, amount, reply-by date and owner'],
    ['TRANSACTION','Status, product description, confirmation and changes'],
    ['DELIVERY','Tracking, POD and records linked to this order'],
    ['PRODUCT','Order-time listing, SKU, photos, packing and inspection'],
    ['COMMUNICATION','On-platform messages, refunds, cancellation or remedy'],
    ['READBACK','Uploaded file list, timestamp, status and final outcome'],
  ];
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1400" height="760" viewBox="0 0 1400 760"><rect width="1400" height="760" rx="34" fill="#fff"/><text x="64" y="82" font-family="Arial,PingFang SC" font-size="39" font-weight="800" fill="#171717">${esc(title)}</text><rect x="64" y="112" width="150" height="6" rx="3" fill="#245bd7"/>${rows.map((it,i)=>{const y=157+i*88;return `<g><rect x="64" y="${y}" width="1272" height="72" rx="18" fill="${i%2?'#fbf9ff':'#f1eeff'}"/><circle cx="101" cy="${y+36}" r="19" fill="#245bd7"/><text x="95" y="${y+43}" font-family="Arial" font-size="18" font-weight="800" fill="#fff">${i+1}</text><text x="145" y="${y+32}" font-family="Arial,PingFang SC" font-size="21" font-weight="800" fill="#171717">${esc(it[0])}</text><text x="145" y="${y+57}" font-family="Arial,PingFang SC" font-size="17" fill="#514b57">${esc(it[1])}</text></g>`}).join('')}</svg>`;
}
await fs.writeFile(path.join(out, 'blog/q4-23-chargeback/timeline-en-v1.svg'), timelineSvg(false));
await fs.writeFile(path.join(out, 'blog/q4-23-chargeback/timeline-zh-v1.svg'), timelineSvg(true));
await fs.writeFile(path.join(out, 'blog/q4-23-chargeback/evidence-pack-en-v1.svg'), packetSvg(false));
await fs.writeFile(path.join(out, 'blog/q4-23-chargeback/evidence-pack-zh-v1.svg'), packetSvg(true));

const faqEn = [
  ['How long does a TikTok Shop seller have to appeal a chargeback?','The current U.S. Chargeback Policy says sellers generally must respond in Seller Center within seven calendar days of the chargeback notification. Use the specific reply-by date shown in the live notification as the operational deadline.'],
  ['What information is required in a chargeback appeal?','The current policy lists transaction status, a product description and proof that the item was received by the cardholder. The exact case may require additional material, so read the live request before submitting.'],
  ['Does uploading more files create a stronger appeal?','No. Every document may be presented to the financial institution, so each file should be relevant, legible, order-linked and tied to a named fact. Contradictory or unrelated files can weaken the packet.'],
  ['Who decides the final chargeback outcome?','TikTok Shop reviews the seller submission and prepares representment, but the financial institution decides the chargeback outcome. The seller should read the result back in Seller Center and record any financial effect.'],
  ['Should a seller wait for a chargeback before collecting evidence?','No. Delivery, transaction, listing, packing and customer-communication evidence should be retained during normal order operations. The seven-day window is for assembling and validating the packet, not recreating missing history.'],
  ['What is the smallest useful next action?','Create one folder template with a case cover, required-fact checklist, evidence index, independent review field, submission receipt and final outcome. Test it against five recent chargebacks before automating anything.'],
];
const faqZh = [
  ['TikTok Shop 卖家有多长时间申诉拒付？','当前美国站 Chargeback Policy 说明，卖家通常必须在收到拒付通知后的七个自然日内通过 Seller Center 回复。运营上应以实时通知显示的具体 Reply-by Date 为准。'],
  ['拒付申诉必须提供什么信息？','当前政策列出交易状态、商品描述，以及持卡人已收到商品的证明。具体案件可能要求额外材料，因此提交前必须阅读实时请求。'],
  ['上传更多文件会让申诉更强吗？','不会。材料可能被提交给金融机构，每个文件都应相关、清晰、可连接订单，并证明一个具名事实。互相矛盾或无关的文件反而会削弱证据包。'],
  ['谁决定拒付的最终结果？','TikTok Shop 会审核卖家材料并准备 Representment，但最终拒付结果由金融机构决定。卖家应在 Seller Center 回读结果并记录财务影响。'],
  ['卖家应该等到拒付发生才收集证据吗？','不应该。交付、交易、Listing、打包与客户沟通证据应在正常订单运营中保留。七天窗口用于组装和验证证据包，不是重建已经缺失的历史。'],
  ['最小可用下一步是什么？','创建一个统一文件夹模板，包含案件封面、必需事实清单、证据索引、独立复核、提交回执和最终结果。先用最近五个拒付案件测试，再考虑自动化。'],
];
function faq(items) { return `<section class="faq"><h2>${items===faqEn?'Common questions':'常见问题'}</h2>${items.map(([q,a])=>`<div class="faq-item"><h3>${q}</h3><p>${a}</p></div>`).join('')}</section>`; }

const EN = `<p class="eyebrow">TIKTOK SHOP U.S. · PAYMENT OPERATIONS</p><h1>${enTitle}</h1><img class="hero" src="/blog/hero-${slug}-en-v1.png" alt="${enTitle}"><p class="byline">WE Marketing Team · Oct 19, 2026 · 15 min read</p>
<p><strong>Direct answer:</strong> do not begin a chargeback appeal by hunting for random screenshots. Open one case file, capture the live reply-by date, name one accountable owner, identify the disputed fact and assemble only the evidence that proves or disproves that fact. Submit before the deadline, then read back the files, status, timestamp and final financial outcome. The seven-day window is a control clock, not a promise that missing order history can be recreated later.</p>
<p>The current TikTok Shop U.S. Chargeback Policy says a chargeback begins when a customer disputes a transaction through a financial institution or card issuer. Reasons can include non-receipt, a product that differs from the listing, damage, billing errors, duplicate charges or an allegedly unauthorized purchase. That makes a payment chargeback different from an ordinary return request. The evidence must answer the financial dispute, not simply repeat the customer-service history.</p>
<h2>Start with the live notification and exact clock</h2>
<p>The current policy says sellers generally must respond in Seller Center within seven calendar days of the chargeback notification. It also says the specific reply-by date appears in the notification. Capture both the notification time and that visible date because the displayed deadline is the operating truth for the case. Do not calculate a private deadline and assume it matches the platform.</p>
<p>Create an internal deadline before the external deadline. Use day zero to save the case and assign ownership, days one through four to complete evidence, day five for an independent review and day six for submission plus readback. Keep day seven as emergency buffer only. If the team waits until the last day, a permissions problem, large file, unclear image or missing logistics record becomes an unrecoverable failure.</p>
<img src="/blog/q4-23-chargeback/timeline-en-v1.svg" alt="Seven-day TikTok Shop chargeback evidence timeline">
<h2>Write the fact to prove before collecting files</h2>
<p>A useful packet begins with one sentence: “For this reason code, the decision depends on whether…” A non-receipt dispute may depend on whether delivery can be linked to the cardholder’s order and location. A not-as-described dispute may depend on what the listing and selected SKU promised when the order was placed. A damaged-product dispute may depend on condition at packing, handoff and delivery. A duplicate-charge dispute requires transaction records, not a warehouse video.</p>
<p>This sentence prevents evidence dumping. The reviewer can reject a file that does not answer the disputed fact, even when the file looks professional. It also exposes the true gap early. If nobody can name the fact, the team is not ready to decide whether an appeal is supportable.</p>
<h2>Separate required information from supporting material</h2>
<p>The current policy lists three required information groups: the status of the transaction, a description of the product and proof that the item was received by the cardholder. It also identifies additional materials that may be included, such as order confirmation emails, records of changes, refunds or cancellation, tracking numbers, product images and customer messages.</p>
<p>Required does not mean a generic screenshot is sufficient. A transaction status should identify the correct transaction. A product description should reflect the ordered product and selected variant. Proof of receipt should connect the order, shipment and recipient in a way an external reviewer can understand. Supporting files should fill a named evidentiary gap, not create a longer attachment list.</p>
<h2>Build a six-part chargeback packet</h2>
<p><strong>1. Case cover.</strong> Record Order ID, chargeback reference, reason, disputed amount, notification time, visible reply-by date, current status and owner. <strong>2. Transaction record.</strong> Preserve order confirmation, payment and refund state, changes and cancellation history. <strong>3. Product truth.</strong> Save the order-time listing, selected SKU, specifications and relevant claims. <strong>4. Fulfillment and delivery.</strong> Connect packing, label, tracking, handoff and proof of delivery to the same order. <strong>5. Communication and remedy.</strong> Include relevant on-platform messages and any replacement, refund or agreement. <strong>6. Submission readback.</strong> Preserve exactly what was uploaded and what Seller Center displayed afterward.</p>
<p>The packet should read in chronological order. Give files stable names such as 01-case-cover, 02-order-confirmation and 03-proof-of-delivery, followed by the order identifier and capture date. A reviewer should not need local tribal knowledge to understand which image belongs to which fact.</p>
<img src="/blog/q4-23-chargeback/evidence-pack-en-v1.svg" alt="Six-part TikTok Shop chargeback evidence pack">
<h2>Use reason-specific proof</h2>
<p>For “order not received,” focus on order-linked tracking, proof of delivery, delivery location and recipient evidence. For “not as described,” preserve the version of the listing and SKU information that applied at purchase, plus product and packing records. For damage, show condition, protective packaging and the relevant handoff sequence. For unauthorized purchase or billing issues, prioritize transaction facts and follow the live platform request rather than inventing a warehouse-based defense.</p>
<p>The policy says documents forwarded to TikTok Shop may be presented to the financial institution. Assume an external reviewer has no context. Remove internal chatter, unsupported conclusions and unrelated customer data. Keep explanations factual, short and attached to the relevant file.</p>
<h2>Resolve contradictions before submission</h2>
<p>A packet can contain individually valid files that tell conflicting stories. The listing may show one specification while the invoice shows another. The tracking event may say delivered while the customer message says the package went to a different location. A packing video may show the product but not the shipping label. An issued refund may overlap the disputed amount.</p>
<p>Assign a second reviewer who did not assemble the packet. They should check identifiers, dates, amounts, product descriptions, visible addresses, refund state and whether every conclusion is supported. Record unresolved contradictions on the case cover. Hiding them does not remove them from the financial institution’s review.</p>
<h2>Understand representment and decision ownership</h2>
<p>After a seller submits an appeal, TikTok Shop reviews the information and prepares supporting documentation, sometimes called representment, for the financial institution. The current policy explains that the financial institution controls the outcome. This means a submitted appeal is not a win, and a TikTok Shop receipt is not the final financial result.</p>
<p>Keep two owners visible: the internal packet owner and the business owner for the outcome. The packet owner is responsible for completeness, submission and readback. The business owner is responsible for settlement impact, fee treatment, root-cause repair and any customer or inventory follow-up. Without this separation, an operational submission can disappear before Finance sees the result.</p>
<h2>Read back the terminal state</h2>
<p>Immediately after submission, save the chargeback reference, uploaded filenames, submission timestamp, visible status and any confirmation. Reopen the case from the normal queue to prove that the material is attached to the intended dispute. If the interface still shows missing information or allows edits, the owner should not mark the case complete.</p>
<p>The current policy says chargeback appeals can take up to 90 days from the initial notification and that TikTok Shop informs sellers of the outcome in Seller Center. Maintain a follow-up date and a final-state field. Record won, lost, auto-contested, withdrawn or other exact platform wording, along with amount, fees and posting date. Never overwrite the original submission record.</p>
<h2>Prepare evidence during normal order operations</h2>
<p>The fastest seven-day response is built before any dispute. Keep accurate listing snapshots, order and transaction events, packing evidence, shipping labels, tracking, delivery proof and on-platform customer communications under a shared retention rule. Capture identifiers in the image or adjacent ledger so files remain connected after export.</p>
<p>Review lost cases by reason, SKU, carrier, warehouse, missing evidence field and owner. A pattern of non-receipt losses may require stronger delivery proof. Not-as-described losses may require listing repair. Damage disputes may require packaging changes. Duplicate-charge cases may require Finance reconciliation. The appeal packet protects one case; the learning loop prevents the next one.</p>
<h2>A hypothetical operating example</h2>
<p>This is an operational example, not a client result. A seller receives a non-receipt chargeback with a reply-by date seven days away. The assigned owner saves the order and tracking record, but the delivery photo lacks a visible label. On day two, Logistics obtains carrier proof that links the tracking number to the delivery location. A second reviewer confirms the order, amount and absence of an earlier refund. The owner submits on day six, reopens the case, saves the uploaded file list and schedules outcome review. The evidence packet is complete even though the financial institution’s decision is still pending.</p>
<h2>Smallest useful next action</h2>
<p>Create one reusable chargeback folder today with six sections: case cover, transaction, product truth, fulfillment and delivery, communication and remedy, and submission readback. Add fields for reply-by date, owner, disputed fact, contradiction review and final financial outcome. Test the template against five completed cases. If an independent reviewer cannot understand one case in ten minutes, simplify the index and repair the missing evidence source before adding automation.</p>
<h2>Source notes</h2><p>This original WEM operating framework draws on the complete current TikTok Shop U.S. Seller University <a href="${sources.chargeback}">Chargeback Policy</a>, dated September 23, 2026, and the <a href="${sources.evidence}">After-Sales Evidence Guide for Appeals and Disputes</a>, revalidated October 19, 2026. Timers, eligible paths, fees, required documents, interfaces and auto-contest rules may change. Read the live notification and current U.S. policy before execution.</p>
${faq(faqEn)}
<h2>Related WEM guides</h2><section class="related-grid"><a href="/blog/tiktok-shop-return-rejection-evidence-isrr-risk"><strong>Return rejection evidence</strong><span>Use a defensible evidence gate before rejecting an aftersales request.</span></a><a href="/blog/tiktok-shop-aftersales-automation-approval-rules"><strong>Aftersales automation</strong><span>Define what the system may approve and when it must stop.</span></a><a href="/blog/tiktok-shop-bfcm-2026-holiday-returns-liability"><strong>Holiday return liability</strong><span>Plan the window, exceptions and reserve before peak volume.</span></a></section>`;

const ZH = `<p class="eyebrow">TIKTOK SHOP 美国站 · 支付运营</p><h1>${zhTitle}</h1><img class="hero" src="/blog/hero-${slug}-zh-v1.png" alt="${zhTitle}"><p class="byline">WE Marketing Team · 2026 年 10 月 19 日 · 15 分钟阅读</p>
<p><strong>直接结论：</strong>拒付申诉不要从到处找截图开始。先建立一个案件文件，保存实时 Reply-by Date，指定一名最终负责的 Owner，明确本次争议需要证明的事实，再只收集能证明或反驳这个事实的材料。截止时间前提交后，还要回读文件、状态、时间戳与最终财务结果。七天是控制时钟，不代表团队能在最后一天重建已经丢失的订单历史。</p>
<p>当前 TikTok Shop 美国站 Chargeback Policy 说明，拒付是消费者通过金融机构或发卡机构对交易提出争议。原因可能包括未收到商品、商品与 Listing 不符、商品损坏、账单错误、重复扣款或消费者称并未购买。它不同于普通退货申请，证据必须直接回答支付争议，而不是只复述客服处理经过。</p>
<h2>从实时通知和准确时钟开始</h2><p>当前政策说明，卖家通常必须在收到拒付通知后的七个自然日内通过 Seller Center 回复，具体 Reply-by Date 会显示在通知里。必须同时保存通知时间和界面日期，因为实时显示的截止时间才是案件执行依据。不能自己计算一个日期，再假设它一定与平台一致。</p><p>内部截止时间应早于外部截止。Day 0 保存案件并分配 Owner，Day 1 到 Day 4 补齐证据，Day 5 独立复核，Day 6 提交并回读，Day 7 只作紧急缓冲。如果团队等到最后一天，权限问题、文件过大、图片不清或物流记录缺失都会变成无法恢复的失败。</p>
<img src="/blog/q4-23-chargeback/timeline-zh-v1.svg" alt="TikTok Shop 七天拒付证据时间线">
<h2>收集文件前，先写清要证明的事实</h2><p>有效证据包应先写一句话：“针对这个 Reason Code，决定取决于是否……”未收到商品的争议，可能取决于交付是否能连接到持卡人的订单与地点；与描述不符，可能取决于下单时 Listing 和所选 SKU 承诺了什么；商品损坏，可能取决于打包、交接与交付时的状态；重复扣款则需要交易记录，不是仓库视频。</p><p>这句话能阻止 Evidence Dump。即使文件看起来很专业，只要没有回答争议事实，就不应放入证据包。它还会尽早暴露真正缺口。如果团队连要证明什么都无法命名，就还没有准备好判断申诉是否成立。</p>
<h2>区分必须信息和补充材料</h2><p>当前政策列出三组必须信息：交易状态、商品描述，以及持卡人已收到商品的证明。政策也列出可以补充的材料，包括订单确认邮件、订单变更、退款或取消记录、Tracking Number、商品图片和客户消息。</p><p>“必须提供”不等于随便截一张图就够。交易状态必须对应准确交易；商品描述必须对应所购商品和 Variant；收货证明必须让外部审核者看懂订单、包裹和收件人之间的连接。补充文件要填补一个具名证据缺口，而不是只增加附件数量。</p>
<h2>建立六部分拒付证据包</h2><p><strong>1. 案件封面：</strong>记录 Order ID、Chargeback Reference、原因、争议金额、通知时间、Reply-by Date、当前状态与 Owner。<strong>2. 交易事实：</strong>保留订单确认、付款与退款状态、变更和取消历史。<strong>3. 商品真实度：</strong>保存下单时 Listing、SKU、规格与相关 Claim。<strong>4. 履约与交付：</strong>把打包、Label、轨迹、交接与 Proof of Delivery 连接到同一订单。<strong>5. 沟通与 Remedy：</strong>放入相关站内消息，以及换货、退款或协议。<strong>6. 提交回读：</strong>保存实际上传内容和 Seller Center 提交后的显示状态。</p><p>证据包应按时间顺序阅读。文件使用稳定命名，例如 01-case-cover、02-order-confirmation 和 03-proof-of-delivery，后面加订单标识与采集日期。审核者不应依赖团队内部经验才能理解文件对应哪个事实。</p>
<img src="/blog/q4-23-chargeback/evidence-pack-zh-v1.svg" alt="TikTok Shop 六部分拒付证据包">
<h2>按拒付原因匹配证据</h2><p>“未收到订单”应重点提供能连接订单的物流轨迹、交付证明、地点与收件证据；“与描述不符”应保存下单时适用的 Listing 和 SKU 信息，以及商品与打包记录；商品损坏应展示状态、防护包装和相关交接过程；未经授权购买或账单问题应优先使用交易事实，并严格按照实时平台请求处理，不能凭空编造仓库侧抗辩。</p><p>政策说明，提交给 TikTok Shop 的材料可能会被提供给金融机构。应假设外部审核者完全不了解背景。删除内部闲聊、无依据结论与无关客户数据，解释保持简短、客观，并与相关文件放在一起。</p>
<h2>提交前解决矛盾</h2><p>一个证据包里的每个文件可能单独都是真的，但组合起来却互相矛盾。Listing 显示一个规格，Invoice 显示另一个；轨迹写已送达，客户消息却说明包裹到了其他地点；打包视频拍到商品，却没有 Shipping Label；已经发出的退款又与争议金额重叠。</p><p>指定一名没有参与组装的第二审核人，检查标识、日期、金额、商品描述、可见地址、退款状态，以及每个结论是否真的有材料支持。未解决矛盾要直接写在案件封面。隐藏矛盾不会让它从金融机构审核中消失。</p>
<h2>理解 Representment 与责任边界</h2><p>卖家提交申诉后，TikTok Shop 会审核资料并准备提交给金融机构的支持文件，这个过程有时称为 Representment。当前政策明确，最终结果由金融机构决定。因此，成功提交不等于胜诉，TikTok Shop 回执也不等于最终财务结果。</p><p>必须保留两个 Owner：内部证据包 Owner 和结果 Business Owner。证据包 Owner 对完整性、提交与回读负责；Business Owner 对结算影响、费用、根因修复，以及客户或库存后续负责。没有这层分工，运营提交可能在 Finance 看到结果前就失去跟踪。</p>
<h2>回读最终状态</h2><p>提交后立即保存 Chargeback Reference、上传文件名、提交时间、可见状态和确认信息，再从正常队列重新打开案件，证明材料确实挂在预期争议下。如果界面仍显示信息缺失或允许继续编辑，Owner 不能把案件标记为完成。</p><p>当前政策说明，拒付申诉从首次通知起可能需要最多 90 天处理，TikTok Shop 会在 Seller Center 通知结果。因此要建立 Follow-up Date 和 Final State 字段，按平台原文记录 Won、Lost、Auto-contested、Withdrawn 或其他准确状态，同时记录金额、费用与入账日期，不能覆盖原始提交记录。</p>
<h2>在正常订单运营中准备证据</h2><p>最快的七天回复，在争议发生前就已经开始。团队应按统一留存规则保存准确 Listing Snapshot、订单与交易事件、打包证据、Shipping Label、Tracking、Proof of Delivery 和站内客户沟通。图片内或相邻 Ledger 要保留标识，确保文件导出后仍能连接订单。</p><p>按原因、SKU、Carrier、仓库、缺失证据字段和 Owner 复盘败诉案件。未收到商品的重复失败可能需要更强交付证明；与描述不符可能需要修 Listing；损坏争议可能需要改变包装；重复扣款需要 Finance 对账。证据包保护一笔案件，学习循环减少下一笔案件。</p>
<h2>一个假设运营案例</h2><p>这是运营示例，不是客户结果。卖家收到一笔未收货拒付，Reply-by Date 距离当前七天。Owner 保存订单和轨迹，但交付照片没有可见 Label。Day 2，物流团队补到能连接 Tracking Number 和交付地点的 Carrier Proof。第二审核人确认订单、金额，以及没有重复退款。Owner 在 Day 6 提交，重新打开案件，保存上传文件清单，并设置结果复核日期。此时证据包已经完成，但金融机构结果仍处于 Pending。</p>
<h2>最小可用下一步</h2><p>今天创建一个统一拒付文件夹，包含六部分：案件封面、交易、商品真实度、履约与交付、沟通与 Remedy、提交回读。增加 Reply-by Date、Owner、争议事实、矛盾复核与最终财务结果字段。先用五个已完成案件测试模板。如果独立审核者不能在十分钟内看懂一笔案件，就先简化索引、修复证据来源，再增加自动化。</p>
<h2>来源说明</h2><p>这套 WE Marketing 原创运营框架基于 2026 年 10 月 19 日完整重新核验的 TikTok Shop 美国站 Seller University <a href="${sources.chargeback}">Chargeback Policy</a>（页面日期 2026 年 9 月 23 日）与 <a href="${sources.evidence}">After-Sales Evidence Guide for Appeals and Disputes</a>。计时、适用路径、费用、所需文件、界面和 Auto-contest 规则都可能变化，执行前必须阅读实时通知与当前美国站政策。</p>
${faq(faqZh)}
<h2>相关 WEM 指南</h2><section class="related-grid"><a href="/blog/tiktok-shop-return-rejection-evidence-isrr-risk?lang=zh"><strong>退货拒绝证据</strong><span>拒绝售后申请前，先通过可辩护的证据 Gate。</span></a><a href="/blog/tiktok-shop-aftersales-automation-approval-rules?lang=zh"><strong>售后自动化</strong><span>定义系统可以批准什么，以及何时必须停止。</span></a><a href="/blog/tiktok-shop-bfcm-2026-holiday-returns-liability?lang=zh"><strong>节日退货责任</strong><span>高峰前规划窗口、例外与准备金。</span></a></section>`;

const graph = {'@context':'https://schema.org','@graph':[
  ...[[enTitle,enDescription,'en-US',url,`hero-${slug}-en-v1.png`,faqEn],[zhTitle,zhDescription,'zh-CN',`${url}?lang=zh`,`hero-${slug}-zh-v1.png`,faqZh]].flatMap(([headline,description,inLanguage,page,image,items])=>[
    {'@type':'BlogPosting','@id':`${page}#article`,headline,description,inLanguage,datePublished:date,dateModified:date,mainEntityOfPage:{'@id':page},image:{'@type':'ImageObject',url:`https://www.weglobalmarketing.com/blog/${image}`},author:{'@type':'Organization',name:'WE Marketing Team'},publisher:{'@type':'Organization',name:'WE Marketing'},citation:Object.values(sources)},
    {'@type':'FAQPage','@id':`${page}#faq`,inLanguage,mainEntity:items.map(([name,text])=>({'@type':'Question',name,acceptedAnswer:{'@type':'Answer',text}}))},
  ]),
]};
const prior = await fs.readFile(path.join(base, 'blog/tiktok-shop-return-rejection-evidence-isrr-risk.html'), 'utf8');
const style = prior.match(/<style>[^]*?<\/style>/)[0];
const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><script>document.documentElement.dataset.lang=new URLSearchParams(location.search).get('lang')==='zh'?'zh':'en';document.documentElement.lang=document.documentElement.dataset.lang==='zh'?'zh-CN':'en'</script><title>${enTitle} | WE Marketing</title><meta name="description" content="${enDescription}"><link rel="canonical" href="${url}"><link rel="alternate" hreflang="en-US" href="${url}"><link rel="alternate" hreflang="zh-CN" href="${url}?lang=zh"><link rel="alternate" hreflang="x-default" href="${url}"><script type="application/ld+json">${JSON.stringify(graph)}</script>${style}<script>if(new URLSearchParams(location.search).get('lang')==='zh'){document.title=${JSON.stringify(`${zhTitle} | WE Marketing`)};document.querySelector('meta[name=description]').content=${JSON.stringify(zhDescription)};document.querySelector('link[rel=canonical]').href='${url}?lang=zh'}</script></head><body><nav class="nav"><a class="logo" href="/"><img src="/assets/we-logo.png" alt="WE Marketing"></a><span class="spacer"></span><a href="/">OUR SERVICES</a><a href="/showcase">OUR WORK</a><a href="/blog">BLOG</a><span class="switch"><a class="en" href="/blog/${slug}">EN</a><a class="zh" href="/blog/${slug}?lang=zh">中文</a></span></nav><main class="wrap"><div class="tools"><a class="en" href="/blog">← BLOG</a><a class="zh" href="/blog?lang=zh">← 博客</a></div><article lang="en">${EN}</article><article lang="zh-CN">${ZH}</article></main><section class="cta"><h2 class="en">READY TO TALK<br>TO WEM?</h2><h2 class="zh">准备好和 WEM<br>一起把计划落地吗？</h2><p class="en">Turn chargeback evidence into a controlled operating file.</p><p class="zh">把拒付证据变成可控、可复核的运营文件。</p><a class="en" href="https://scheduler.zoom.us/wendylin001">BOOK A DISCOVERY CALL</a><a class="zh" href="https://scheduler.zoom.us/wendylin001">预约咨询</a></section><footer class="footer"><img src="/assets/we-logo.png" alt="WE Marketing"><p class="en">WE Marketing connects strategy, creator operations, paid growth and TikTok Shop execution.</p><p class="zh">WE Marketing 帮助品牌连接策略、达人运营、付费增长与 TikTok Shop 执行。</p><p>© 2026 WE Marketing. All rights reserved.</p></footer></body></html>`;
await fs.writeFile(path.join(out, 'blog', `${slug}.html`), html);

let list = await fs.readFile(path.join(base, 'BlogList.jsx'), 'utf8');
const row = {slug,tags:['tiktok-shop','shop-operations','finance'],cat:{en:'TIKTOK SHOP U.S. · PAYMENT OPERATIONS',zh:'TIKTOK SHOP 美国站 · 支付运营'},title:{en:enTitle,zh:zhTitle},excerpt:{en:'Build the evidence file before a chargeback clock starts.',zh:'在拒付倒计时开始前，就把证据文件准备好。'},date:{en:'Oct 19, 2026',zh:'2026 年 10 月 19 日'},read:{en:'15 min read',zh:'15 分钟阅读'},image:{en:`hero-${slug}-en-v1.png`,zh:`hero-${slug}-zh-v1.png`}};
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
console.log(JSON.stringify({slug,enWords,zhChars,files:files.length,version,out},null,2));
