import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import vm from 'node:vm';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const sharp = require('/Users/wendylin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');
const root = path.resolve(import.meta.dirname, '..');
const base = path.join(root, 'outputs/patches/2026-10-17-q4-21-aftersales-automation');
const out = path.join(root, 'outputs/patches/2026-10-18-q4-22-isrr-return-evidence');
const reportPath = path.join(root, 'outputs/2026-10-18-q4-22-build-report.json');
const slug = 'tiktok-shop-return-rejection-evidence-isrr-risk';
const date = '2026-10-18';
const url = `https://www.weglobalmarketing.com/blog/${slug}`;
const titleEn = 'Before You Reject a TikTok Shop Return, Check the Evidence and ISRR Risk';
const titleZh = '拒绝 TikTok Shop 退货前：先看证据和 ISRR 风险';
const descriptionEn = 'A practical evidence and escalation system for TikTok Shop return rejections and ISRR risk.';
const descriptionZh = '用订单事实、政策资格、证据卡和升级机制控制 TikTok Shop 退货拒绝与 ISRR 风险。';
const sources = [
  'https://seller-us.tiktok.com/university/essay?knowledge_id=368451231696653&lang=en',
  'https://seller-us.tiktok.com/university/essay?knowledge_id=984433248438058&lang=en',
];
const hash = (value) => crypto.createHash('sha256').update(value).digest('hex');

await fs.rm(out, { recursive: true, force: true });
for (const directory of ['assets', 'blog', 'blog/optimized', 'blog/thumbs', 'blog/q4-22-evidence']) {
  await fs.mkdir(path.join(out, directory), { recursive: true });
}
await fs.cp(path.join(base, 'assets/we-logo.png'), path.join(out, 'assets/we-logo.png'));
const logo = (await fs.readFile(path.join(out, 'assets/we-logo.png'))).toString('base64');

async function buildCover(lang) {
  const zh = lang === 'zh';
  const lines = zh ? ['拒绝退货前', '先检查证据'] : ['REJECT A RETURN?', 'CHECK THE EVIDENCE'];
  const subtitle = zh ? '让决定经得起复核，也看清 ISRR 风险。' : 'Make the decision reviewable. See the ISRR risk.';
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1792" height="896">
    <defs><linearGradient id="field" x1="0" x2="1"><stop stop-color="#fffdf9"/><stop offset="1" stop-color="#f1efff"/></linearGradient><filter id="shadow"><feDropShadow dx="0" dy="18" stdDeviation="22" flood-color="#7187e9" flood-opacity=".18"/></filter></defs>
    <rect width="1792" height="896" fill="url(#field)"/>
    <path d="M1250 0h542v896H990c215-174 226-511 260-896z" fill="#eeebff" opacity=".7"/>
    <rect x="82" y="72" width="590" height="64" rx="32" fill="#e7ebff"/>
    <circle cx="118" cy="104" r="11" fill="#2356d7"/><text x="145" y="114" font-family="Arial" font-size="27" font-weight="700" fill="#2356d7">${zh ? 'TIKTOK SHOP 美国站 / 售后运营' : 'TIKTOK SHOP U.S. / AFTERSALES'}</text>
    <text x="86" y="282" font-family="Arial Narrow,Arial" font-size="78" font-weight="900" fill="#151515">${lines[0]}<tspan x="86" dy="91" fill="#2356d7">${lines[1]}</tspan></text>
    <path d="M88 450h70" stroke="#2356d7" stroke-width="8" stroke-linecap="round"/>
    <text x="88" y="535" font-family="Arial" font-size="31" fill="#27304f">${subtitle}</text>
    <image href="data:image/png;base64,${logo}" x="90" y="724" width="182" height="90" preserveAspectRatio="xMidYMid meet"/>
    <g transform="translate(1025 115)" filter="url(#shadow)">
      <ellipse cx="325" cy="630" rx="290" ry="55" fill="#d7d2f5"/>
      <rect x="80" y="140" width="440" height="415" rx="48" fill="#ffffff" stroke="#8798e9" stroke-width="12"/>
      <rect x="128" y="205" width="290" height="38" rx="19" fill="#cad2ff"/><rect x="128" y="285" width="245" height="28" rx="14" fill="#e2e5fa"/><rect x="128" y="342" width="285" height="28" rx="14" fill="#e2e5fa"/>
      <circle cx="420" cy="430" r="112" fill="#7e71dc"/><circle cx="420" cy="430" r="65" fill="#f8f7ff"/><path d="M395 432l24 24 49-60" fill="none" stroke="#2356d7" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M497 507l112 112" stroke="#ff5aaf" stroke-width="34" stroke-linecap="round"/>
      <rect x="18" y="475" width="185" height="78" rx="39" fill="#ff73ba"/><text x="50" y="523" font-family="Arial" font-size="25" font-weight="700" fill="#fff">EVIDENCE</text>
    </g>
  </svg>`;
  const stem = `hero-${slug}-${lang}-v1`;
  await sharp(Buffer.from(svg)).png().toFile(path.join(out, 'blog', `${stem}.png`));
  await sharp(Buffer.from(svg)).jpeg({ quality: 87 }).toFile(path.join(out, 'blog/optimized', `${stem}.jpg`));
  await sharp(Buffer.from(svg)).resize(880, 440).jpeg({ quality: 87 }).toFile(path.join(out, 'blog/thumbs', `${stem}.jpg`));
}
for (const lang of ['en', 'zh']) await buildCover(lang);

function gates(lang) {
  const zh = lang === 'zh';
  const rows = zh
    ? [['01', '订单与申请', '订单、商品、配送、理由与当前状态'], ['02', '政策与资格', '使用当前规则，不凭团队记忆'], ['03', '证据一致性', '照片、验货、物流与沟通彼此解释'], ['04', '终态与申诉', '记录平台复核、申诉与最终订单状态']]
    : [['01', 'ORDER + REQUEST', 'Order, item, delivery, reason and current state'], ['02', 'POLICY + ELIGIBILITY', 'Use the current rule, not team memory'], ['03', 'EVIDENCE COHERENCE', 'Photos, inspection, logistics and messages agree'], ['04', 'OUTCOME + APPEAL', 'Read back review, appeal and final order state']];
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1300" height="720"><rect width="100%" height="100%" fill="#f7f5ff"/><text x="70" y="84" font-family="Arial" font-size="42" font-weight="800" fill="#18275e">${zh ? '拒绝决定的四个证据关口' : 'FOUR EVIDENCE GATES BEFORE A REJECTION'}</text>${rows.map((row, i) => { const y = 132 + i * 132; return `<rect x="70" y="${y}" width="1160" height="104" rx="22" fill="${i % 2 ? '#e9e5ff' : '#fff'}"/><circle cx="133" cy="${y + 52}" r="34" fill="#7187e9"/><text x="113" y="${y + 62}" font-family="Arial" font-size="25" font-weight="800" fill="#fff">${row[0]}</text><text x="195" y="${y + 44}" font-family="Arial" font-size="24" font-weight="800" fill="#2356d7">${row[1]}</text><text x="195" y="${y + 76}" font-family="Arial" font-size="21" fill="#303957">${row[2]}</text>`; }).join('')}</svg>`;
}

function decision(lang) {
  const zh = lang === 'zh';
  const cols = zh
    ? [['继续审核', '事实完整', '资格明确', '证据一致'], ['暂停并补证', '关键字段缺失', '照片无法关联', '记录互相冲突'], ['升级处理', '规则边界不清', '时钟即将到期', '平台复核或申诉']]
    : [['CONTINUE REVIEW', 'Facts complete', 'Eligibility clear', 'Evidence coherent'], ['PAUSE + COMPLETE', 'Required field missing', 'Photo cannot be linked', 'Records conflict'], ['ESCALATE', 'Rule boundary unclear', 'Clock is close', 'Platform review or appeal']];
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1300" height="690"><rect width="100%" height="100%" fill="#f7f5ff"/><text x="70" y="84" font-family="Arial" font-size="36" font-weight="800" fill="#18275e">${zh ? '证据回读后，只进入三条路径' : 'AFTER EVIDENCE, CHOOSE ONE OF THREE PATHS'}</text>${cols.map((col, i) => { const x = 70 + i * 395; return `<rect x="${x}" y="155" width="350" height="420" rx="30" fill="#fff" stroke="${i === 1 ? '#ff69b4' : '#d8d4f2'}" stroke-width="5"/><rect x="${x}" y="155" width="350" height="88" rx="30" fill="${i === 1 ? '#ff7cbe' : '#7187e9'}"/><text x="${x + 28}" y="210" font-family="Arial" font-size="23" font-weight="800" fill="#fff">${col[0]}</text>${col.slice(1).map((line, j) => `<circle cx="${x + 42}" cy="${310 + j * 82}" r="8" fill="#ff4aa7"/><text x="${x + 66}" y="${318 + j * 82}" font-family="Arial" font-size="21" fill="#27304f">${line}</text>`).join('')}`; }).join('')}</svg>`;
}
for (const lang of ['en', 'zh']) {
  await fs.writeFile(path.join(out, 'blog/q4-22-evidence', `evidence-gates-${lang}-v1.svg`), gates(lang));
  await fs.writeFile(path.join(out, 'blog/q4-22-evidence', `decision-paths-${lang}-v1.svg`), decision(lang));
}

const faqEn = [
  ['What does ISRR measure?', 'It measures the share of eligible seller-reviewed aftersales requests where a seller rejection is later determined invalid. It is an operating quality signal across a defined scope and window, not a verdict on one isolated case.'],
  ['Can a seller appeal the ISRR metric?', 'No. The metric itself cannot be appealed. Eligible platform-initiated aftersales decisions may use the standard appeal process, so retain the complete order-level evidence and final readback.'],
  ['When should a rejection stop?', 'Pause or escalate when a required fact is missing, evidence conflicts, policy scope is unclear, the category needs special treatment, or no named owner can complete the review before its deadline.'],
  ['Why is a photo not enough?', 'A photo must connect to the order, item, timing and claimed condition, and it must agree with inspection, logistics and communication records. An isolated or ambiguous image cannot explain the entire decision.'],
  ['What must a rejection record retain?', 'Keep the order and request facts, applied rule version, evidence for and against the reason, capture time, reviewer, remaining clock, submitted action and terminal outcome.'],
  ['What is the smallest useful next action?', 'Audit ten recent rejections with the same six-field evidence card. Group missing fields by reason, SKU, warehouse and reviewer, then repair the most repeated gap before changing policy or automation.'],
];
const faqZh = [
  ['ISRR 衡量什么？', '它衡量符合条件的卖家审核售后申请中，卖家拒绝后来被判定为无效的比例。它是在明确范围和窗口内使用的运营质量信号，不是单个案件的对错标签。'],
  ['卖家可以申诉 ISRR 指标吗？', '不能直接申诉指标本身。符合资格的平台发起售后决定可以按标准流程申诉，因此必须保留完整的订单级证据与最终状态回读。'],
  ['什么时候应停止拒绝？', '关键事实缺失、证据冲突、政策范围不清、类目需要特殊处理，或没有具名 Owner 能在截止时间前完成审核时，应暂停或升级。'],
  ['为什么一张照片不够？', '照片必须关联订单、商品、时间和所称状态，并与验货、物流及沟通记录一致。孤立或含义模糊的图片无法解释整项决定。'],
  ['拒绝记录必须保留什么？', '保留订单与申请事实、适用规则版本、支持和反驳理由的证据、采集时间、审核人、剩余时钟、提交动作和最终结果。'],
  ['最小可用下一步是什么？', '用同一张六字段证据卡审计最近十笔拒绝，按原因、SKU、仓库和审核人归类缺失字段，再先修复最重复的缺口。'],
];
const faqMarkup = (items, zh) => `<section class="faq"><h2>${zh ? '常见问题' : 'Frequently asked questions'}</h2>${items.map(([q, a]) => `<div class="faq-item"><h3>${q}</h3><p>${a}</p></div>`).join('')}</section>`;

const en = [
  `<p class="eyebrow">TIKTOK SHOP U.S. · AFTERSALES OPERATIONS</p><h1>${titleEn}</h1><img class="hero" src="/blog/hero-${slug}-en-v1.png" alt="${titleEn}"><p class="byline">WE Marketing Team · Oct 18, 2026 · 16 min read</p>`,
  `<p><strong>Direct answer:</strong> before rejecting a return, verify the order facts, current eligibility, readable evidence and the next clock. A rejection is not a customer-service phrase or a button state. It is an operating decision that may be reviewed later, so the record must explain why the request was in scope, what evidence was read, who owned the decision and what finally happened.</p>`,
  `<h2>Read ISRR as a quality signal, not a rejection quota</h2><p>The current Requirements for Invalid Seller Rejection Rate define ISRR as the percentage of eligible seller-reviewed aftersales requests where the seller rejects a request and that rejection is later determined invalid. The requirements describe a weekly evaluation using a rolling eight-week window. That makes ISRR a feedback signal about decision quality across a defined population, not a simple count of how often a team says no.</p><p>The useful operating question is not, “How many rejections are still allowed?” It is, “Which rejections did not survive a later facts-and-evidence review?” A team can lower risk by making every refusal reproducible. Another reviewer should be able to open the same order, see the same rule, read the same evidence and understand the same conclusion without reconstructing the case from chat.</p>`,
  `<h2>Separate metric scope from case truth</h2><p>The official ISRR material identifies excluded scenarios, including logistics-related reasons, malicious buyer or buyer-abuse cases, high-value buyer cases decided by the platform, and certain Auction or Final Sale buyer-fault cases in the U.S. calculation. Scope matters because a blended dashboard can hide whether a problem comes from seller judgment, logistics evidence or a platform-managed path.</p><p>An exclusion does not mean evidence is unnecessary. The customer still needs a correct outcome, and the seller still needs a readable record. Treat scope as a routing rule: first determine which process owns the case, then apply the evidence and review requirements for that process. Do not use an exclusion list as permission to make a less careful decision.</p>`,
  `<img src="/blog/q4-22-evidence/evidence-gates-en-v1.svg" alt="Four evidence gates before a return rejection">`,
  `<h2>Gate one: confirm the order and request</h2><p>Begin with the exact order, product, variant, quantity, delivery state, request type, buyer reason and current case status. A warehouse photo of a similar unit is not evidence for this unit. A tracking event from another package is not evidence for this shipment. The identifiers must connect before the reviewer interprets the content.</p><p>Record what is known and what is still missing. If a serial number, package label, component list or delivery event is needed to distinguish the case, name it as a required fact. Do not quietly convert “unknown” into “buyer fault” merely because the review clock is short.</p>`,
  `<h2>Gate two: read the current policy and eligibility</h2><p>Place the case against the current return, refund, replacement, category and order rules. Team memory and an old screenshot can be useful clues, but neither proves the live rule. The policy path should identify why the request is eligible or ineligible, which remedy is available and whether a category, order type or platform-managed exception changes the reviewer’s authority.</p><p>Store the rule name or version with the decision. When policy changes, that record separates a correct historical decision from a new operating rule. It also prevents reviewers from using the latest wording to rewrite what was actually available when the decision was made.</p>`,
  `<h2>Gate three: test whether the evidence tells one story</h2><p>Useful evidence is connected, timed and mutually intelligible. Product photos should identify the relevant item and claimed condition. Inspection records should say who inspected what, when and against which acceptance criteria. Logistics events should correspond to the same order and package. Communication records should preserve the buyer’s actual reason rather than a compressed internal label.</p><p>More files do not automatically create stronger evidence. Ten ambiguous images can be weaker than one labeled photo plus a complete inspection entry. Read evidence for and against the proposed refusal. If a carrier scan conflicts with warehouse intake or the buyer’s image cannot be linked to the item, stop and resolve the conflict rather than selecting the evidence that supports the preferred answer.</p>`,
  `<h2>Gate four: define the terminal outcome</h2><p>A click on Reject is not terminal proof. Read back whether the request was rejected, returned for more information, placed in platform review, appealed, reversed, refunded or otherwise completed. Keep the final order state, amount, timestamps and owner with the evidence card. This is what turns a decision attempt into an auditable operating result.</p><p>The official requirements distinguish the ISRR metric from appealable platform-initiated aftersales decisions. Sellers cannot appeal the metric itself, while eligible decisions can follow the standard appeal path. Retain order-level material because a dashboard screenshot cannot explain or support an individual appeal.</p>`,
  `<h2>Do not turn thresholds into permission</h2><p>The current requirements state that an Overall ISRR of 20% or higher triggers a warning, while Refund-only and Return and Refund requests must remain below 30%. They also describe platform-managed review for eligible aftersales requests when relevant thresholds are exceeded. These are control thresholds, not a budget for invalid refusals.</p><p>When the metric rises, segment the invalid decisions by request reason, SKU, category, warehouse, reviewer and missing evidence field. Then repair the recurring source of error. Training may be appropriate, but the root cause might instead be an unclear listing, a weak warehouse inspection step, missing identifiers or a review queue that forces decisions before evidence arrives.</p>`,
  `<img src="/blog/q4-22-evidence/decision-paths-en-v1.svg" alt="Three decision paths after evidence readback">`,
  `<h2>Use three explicit decision paths</h2><p><strong>Continue review</strong> only when required facts are complete, the current rule is clear and evidence is coherent. <strong>Pause and complete</strong> when the case needs a named missing record or a conflict resolved. <strong>Escalate</strong> when the rule boundary is unclear, a special category or fraud-sensitive signal appears, the deadline is close, or platform review or appeal is involved.</p><p>Each path needs an owner and clock. “Manual review” without a named person or due time is not a safe stop condition. Preserve the material already gathered when a case moves between paths so the next reviewer does not restart from an incomplete support conversation.</p>`,
  `<h2>Build a six-field rejection evidence card</h2><ol><li>Order and request facts, including identifiers and current status.</li><li>The current rule and eligibility path used for the decision.</li><li>Evidence supporting and contradicting the proposed refusal.</li><li>Capture time, source and linkage for each material record.</li><li>Named reviewer, remaining deadline and required next action.</li><li>Submitted action, platform response and terminal order outcome.</li></ol><p>The card is not extra paperwork for its own sake. It creates a consistent review unit for training, appeals, weekly root-cause analysis and future automation. If a field repeatedly remains blank, fix the system that should produce it rather than teaching reviewers to write around the absence.</p>`,
  `<h2>An operating example</h2><p>This is a hypothetical operating example, not a client result. A return request says an item arrived damaged. Warehouse photos show damaged packaging but contain no order label, serial reference or intake timestamp. The team should not turn “damaged packaging” into a refusal reason. It should link the order, confirm the item and applicable rule, obtain the intake record and compare the buyer’s evidence. If the facts cannot be completed before the clock, the case escalates.</p><p>A different case may include the order label, timestamped inspection video, component checklist, buyer reason and a documented applicable exception. That record may support a reviewable refusal, but the team still reads back the platform response and final state. The difference is not confidence or tone. It is connected evidence.</p>`,
  `<h2>Smallest useful next action</h2><p>Pull ten recent return rejections and complete the same six-field evidence card for each. Group missing fields by reason, SKU, warehouse and reviewer. Choose the most repeated gap and repair that input before tightening refusal rules or adding automation. Re-run the ten cases after the repair and verify whether another reviewer reaches the same conclusion from the record alone.</p>`,
  `<h2>Source notes</h2><p>This original WEM operating framework draws on the current <a href="${sources[0]}">Requirements for Invalid Seller Rejection Rate (ISRR) Metric</a> and <a href="${sources[1]}">Requirements for Managing Returns, Refunds, and Replacements</a>, fully read and revalidated on October 18, 2026. Platform rules, eligibility, thresholds and interfaces can change. Verify the live policy and current order record before execution.</p>`,
  `<h2>Related WEM guides</h2><section class="related-grid"><a href="/blog/tiktok-shop-aftersales-automation-approval-rules"><strong>Aftersales automation</strong><span>Define what a system may approve and when a person must intervene.</span></a><a href="/blog/tiktok-shop-bfcm-2026-holiday-returns-liability"><strong>BFCM holiday returns</strong><span>Plan windows, exceptions, reserves and evidence before peak volume.</span></a><a href="/blog/tiktok-shop-bfcm-fulfillment-extension-order-sla"><strong>BFCM order SLA</strong><span>Read fulfillment deadlines per order instead of assuming coverage.</span></a></section>`,
  faqMarkup(faqEn, false),
].join('');

const zh = [
  `<p class="eyebrow">TIKTOK SHOP 美国站 · 售后运营</p><h1>${titleZh}</h1><img class="hero" src="/blog/hero-${slug}-zh-v1.png" alt="${titleZh}"><p class="byline">WE Marketing Team · 2026 年 10 月 18 日 · 16 分钟阅读</p>`,
  `<p><strong>直接结论：</strong>拒绝退货前，先核对订单事实、当前资格、可读证据和下一步时钟。拒绝不是一句客服话术，也不是按钮状态。它是一项之后可能被平台复核的运营决定，因此记录必须解释案件为什么在适用范围内、审核者读取了哪些证据、谁拥有决定，以及最终发生了什么。</p>`,
  `<h2>把 ISRR 当成质量信号，不要当成拒绝配额</h2><p>当前 Invalid Seller Rejection Rate 要求把 ISRR 定义为：符合条件、由卖家审核的售后申请中，卖家拒绝后来被判定为无效的比例。官方说明采用每周评估和滚动八周窗口。因此，它反映的是明确范围内的决策质量，而不是团队说了多少次“不”。</p><p>真正有用的问题不是“还能拒绝多少笔”，而是“哪些拒绝没有通过后续事实与证据复核”。降低风险的做法，是让每一次拒绝都可重现。另一位审核者打开同一个订单，应该能看到同一条规则、读到同一组证据，并在不重新翻聊天记录的情况下理解结论。</p>`,
  `<h2>先分清指标范围，再判断案件事实</h2><p>官方 ISRR 材料列出了美国站计算中的部分排除情形，包括物流相关原因、恶意买家或买家滥用、高价值买家由平台判断的案件，以及部分 Auction 或 Final Sale 中属于买家责任的情形。范围很重要，因为把所有案件混进一个看板，会掩盖问题到底来自卖家判断、物流证据还是平台管理路径。</p><p>被排除不代表可以不留证据。客户仍然需要正确结果，卖家也仍然需要一份可读记录。把范围当成路由规则：先判断哪条流程拥有案件，再应用这条流程的证据与审核要求。不要把排除清单当成降低判断标准的许可。</p>`,
  `<img src="/blog/q4-22-evidence/evidence-gates-zh-v1.svg" alt="拒绝决定的四个证据关口">`,
  `<h2>第一关：确认订单与申请</h2><p>从准确的订单、商品、变体、数量、配送状态、申请类型、买家理由和当前案件状态开始。相似商品的仓库照片，不能证明这一件商品；另一包裹的物流事件，也不能证明这一票配送。审核者开始解释内容前，标识必须先连接起来。</p><p>把已经知道和仍然缺失的事实分开记录。如果需要序列号、包裹标签、组件清单或配送事件才能区分案件，就把它写成必需事实。不能因为审核时钟很短，就悄悄把“未知”改写成“买家责任”。</p>`,
  `<h2>第二关：读取当前政策与资格</h2><p>把案件放回当前退货、退款、换货、类目和订单规则中判断。团队记忆和旧截图可以提供线索，但都不能证明在线规则。政策路径必须说明申请为什么有资格或没有资格、有哪些处理方式，以及类目、订单类型或平台管理例外是否改变了审核者的权限。</p><p>把规则名称或版本与决定一起保存。政策变化后，这条记录可以区分正确的历史决定与新的运营规则，也能避免团队用今天的文字去重写当时真正可用的判断条件。</p>`,
  `<h2>第三关：检查证据能否讲同一个故事</h2><p>有效证据必须可关联、有时间，而且彼此能够解释。商品照片要识别相关商品与所称状态；验货记录要说明谁在什么时候按照什么标准检查了什么；物流事件必须对应同一订单和包裹；沟通记录要保留买家的实际理由，而不是只留下压缩后的内部标签。</p><p>文件更多，不等于证据更强。十张含义模糊的图片，可能不如一张带标识的照片和一条完整验货记录。审核时既要看支持拒绝的证据，也要看反驳拒绝的证据。如果承运商扫描与仓库入库冲突，或买家图片无法关联商品，应先解决冲突，而不是只选择支持预设答案的部分。</p>`,
  `<h2>第四关：定义最终结果</h2><p>点击 Reject 不是终态证明。回读申请最终是被拒绝、要求补资料、进入平台复核、被申诉、被撤销、完成退款，还是进入其他状态。把最终订单状态、金额、时间和 Owner 与证据卡放在一起，才能把一次操作尝试变成可审计结果。</p><p>官方要求区分 ISRR 指标本身与可以申诉的平台发起售后决定。卖家不能申诉指标本身，但符合资格的决定可以走标准申诉路径。因此必须保留订单级材料，因为一张看板截图无法解释或支持某一笔申诉。</p>`,
  `<h2>不要把阈值理解成允许额度</h2><p>当前要求写明 Overall ISRR 达到 20% 或以上会触发警告，Refund-only 与 Return and Refund 请求需要低于 30%。当相关阈值被超过时，符合条件的售后申请可能进入平台管理复核。这些是控制阈值，不是“可以有多少无效拒绝”的预算。</p><p>指标上升时，按申请原因、SKU、类目、仓库、审核人和缺失证据字段拆分无效决定，再修复重复错误来源。问题可能需要培训，也可能来自不清楚的 Listing、薄弱的仓库验货步骤、缺少商品标识，或审核队列要求在证据到达前就作决定。</p>`,
  `<img src="/blog/q4-22-evidence/decision-paths-zh-v1.svg" alt="证据回读后的三条决定路径">`,
  `<h2>只使用三条明确路径</h2><p><strong>继续审核：</strong>必需事实完整、当前规则明确、证据一致时才继续作决定。<strong>暂停并补证：</strong>案件缺少一条具名记录，或必须先解决证据冲突时使用。<strong>升级处理：</strong>规则边界不清、出现特殊类目或欺诈敏感信号、截止时间临近，或涉及平台复核与申诉时使用。</p><p>每条路径都需要 Owner 和时钟。没有具名人员和截止时间的“人工审核”不是安全停止条件。案件跨路径时保留已经收集的材料，不能让下一位审核者从一段不完整的客服聊天重新开始。</p>`,
  `<h2>建立六字段拒绝证据卡</h2><ol><li>订单与申请事实，包括标识和当前状态。</li><li>作决定时使用的当前规则与资格路径。</li><li>支持和反驳拒绝理由的证据。</li><li>每条材料的采集时间、来源与关联方式。</li><li>具名审核人、剩余截止时间与下一步动作。</li><li>提交动作、平台回应与最终订单结果。</li></ol><p>这张卡不是为了增加形式工作。它为培训、申诉、每周根因复盘和未来自动化提供一致的审核单元。如果某个字段反复空白，应修复本该产生这条信息的系统，而不是训练审核者绕过缺失。</p>`,
  `<h2>一个运营示例</h2><p>这是一个假设运营示例，不是客户结果。一笔退货申请称商品到货损坏，仓库照片显示包装破损，但没有订单标签、序列号或入库时间。团队不能直接把“包装破损”写成拒绝理由，而应先关联订单、确认商品与适用规则、取得入库记录，并与买家证据对照。截止时间前无法补全事实时，案件进入升级路径。</p><p>另一笔案件可能拥有订单标签、带时间的验货视频、组件清单、买家理由和文件化适用例外。这套记录也许能够支持一项可复核的拒绝，但团队仍需回读平台回应与最终状态。两者的差别不是语气或信心，而是证据是否真正连接。</p>`,
  `<h2>最小可用下一步</h2><p>抽取最近十笔退货拒绝，逐笔填写同一张六字段证据卡。按原因、SKU、仓库和审核人归类缺失字段，选择最重复的缺口，先修复这个输入，再考虑收紧拒绝规则或增加自动化。修复后重新审核这十笔，验证另一位审核者能否只凭记录得出相同结论。</p>`,
  `<h2>来源说明</h2><p>这套原创 WEM 运营框架基于当前 <a href="${sources[0]}">Requirements for Invalid Seller Rejection Rate (ISRR) Metric</a> 与 <a href="${sources[1]}">Requirements for Managing Returns, Refunds, and Replacements</a>，已于 2026 年 10 月 18 日读取完整原文并重新核验。平台规则、资格、阈值和界面可能变化，执行前请核对在线政策与当前订单记录。</p>`,
  `<h2>相关 WEM 指南</h2><section class="related-grid"><a href="/blog/tiktok-shop-aftersales-automation-approval-rules?lang=zh"><strong>售后自动化</strong><span>定义系统可以执行什么，以及什么时候必须由人介入。</span></a><a href="/blog/tiktok-shop-bfcm-2026-holiday-returns-liability?lang=zh"><strong>BFCM 节日退货</strong><span>高峰订单前规划窗口、例外、准备金与证据。</span></a><a href="/blog/tiktok-shop-bfcm-fulfillment-extension-order-sla?lang=zh"><strong>BFCM 订单 SLA</strong><span>逐单读取履约截止时间，不默认所有订单都适用。</span></a></section>`,
  faqMarkup(faqZh, true),
].join('');

const prior = await fs.readFile(path.join(base, 'blog/tiktok-shop-aftersales-automation-approval-rules.html'), 'utf8');
const style = prior.match(/<style>[\s\S]*?<\/style>/)[0];
const graph = {
  '@context': 'https://schema.org',
  '@graph': [
    ['en-US', titleEn, descriptionEn, url, faqEn, 'en'],
    ['zh-CN', titleZh, descriptionZh, `${url}?lang=zh`, faqZh, 'zh'],
  ].flatMap(([language, headline, description, page, faqs, lang]) => [
    { '@type': 'BlogPosting', '@id': `${page}#article`, headline, description, inLanguage: language, datePublished: date, dateModified: date, mainEntityOfPage: { '@id': page }, image: { '@type': 'ImageObject', url: `https://www.weglobalmarketing.com/blog/hero-${slug}-${lang}-v1.png` }, citation: sources },
    { '@type': 'FAQPage', '@id': `${page}#faq`, inLanguage: language, mainEntity: faqs.map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })) },
  ]),
};
const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><script>document.documentElement.dataset.lang=new URLSearchParams(location.search).get('lang')==='zh'?'zh':'en';document.documentElement.lang=document.documentElement.dataset.lang==='zh'?'zh-CN':'en'</script><title>${titleEn} | WE Marketing</title><meta name="description" content="${descriptionEn}"><link rel="canonical" href="${url}"><link rel="alternate" hreflang="en-US" href="${url}"><link rel="alternate" hreflang="zh-CN" href="${url}?lang=zh"><link rel="alternate" hreflang="x-default" href="${url}"><script type="application/ld+json">${JSON.stringify(graph)}</script>${style}<script>if(new URLSearchParams(location.search).get('lang')==='zh'){document.title='${titleZh} | WE Marketing';document.querySelector('meta[name=description]').content='${descriptionZh}';document.querySelector('link[rel=canonical]').href='${url}?lang=zh'}</script></head><body><nav class="nav"><a class="logo" href="/"><img src="/assets/we-logo.png" alt="WE Marketing"></a><span class="spacer"></span><a href="/">OUR SERVICES</a><a href="/showcase">OUR WORK</a><a href="/blog">BLOG</a><span class="switch"><a class="en" href="${url}">EN</a><a class="zh" href="${url}?lang=zh">中文</a></span></nav><main class="wrap"><div class="tools"><a class="en" href="/blog">← BLOG</a><a class="zh" href="/blog?lang=zh">← 博客</a></div><article lang="en">${en}</article><article lang="zh-CN">${zh}</article></main><section class="cta"><h2 class="en">READY TO TALK<br>TO WEM?</h2><h2 class="zh">准备好和 WEM<br>一起把计划落地吗？</h2><p class="en">Turn return decisions into evidence-led, reviewable operations.</p><p class="zh">把退货决定变成有证据、可复核的运营流程。</p><a class="en" href="https://scheduler.zoom.us/wendylin001">BOOK A DISCOVERY CALL</a><a class="zh" href="https://scheduler.zoom.us/wendylin001">预约咨询</a></section><footer class="footer"><img src="/assets/we-logo.png" alt="WE Marketing"><p class="en">WE Marketing connects strategy, creator operations, paid growth and TikTok Shop execution.</p><p class="zh">WE Marketing 帮助品牌连接策略、达人运营、付费增长与 TikTok Shop 执行。</p><p>© 2026 WE Marketing. All rights reserved.</p></footer></body></html>`;
await fs.writeFile(path.join(out, 'blog', `${slug}.html`), html);

let list = await fs.readFile(path.join(base, 'BlogList.jsx'), 'utf8');
const row = { slug, tags: ['tiktok-shop', 'aftersales'], cat: { en: 'TIKTOK SHOP U.S. · AFTERSALES', zh: 'TIKTOK SHOP 美国站 · 售后运营' }, title: { en: titleEn, zh: titleZh }, excerpt: { en: 'Make every return rejection evidence-led and reviewable.', zh: '让每一次退货拒绝都有证据，也经得起复核。' }, date: { en: 'Oct 18, 2026', zh: '2026 年 10 月 18 日' }, read: { en: '16 min read', zh: '16 分钟阅读' }, image: { en: `hero-${slug}-en-v1.png`, zh: `hero-${slug}-zh-v1.png` } };
list = list.replace('const BLOG_POSTS = [', `const BLOG_POSTS = [\n  ${JSON.stringify(row).replace(/"([A-Za-z_$][\w$]*)":/g, '$1:')},`);
await fs.writeFile(path.join(out, 'BlogList.jsx'), list);
const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(await fs.readFile(path.join(root, '.cache/babel-standalone-7.29.0.min.js'), 'utf8'), sandbox);
const compiled = `${sandbox.Babel.transform(list, { presets: [['react', { runtime: 'classic' }]], compact: true, minified: true, sourceType: 'script' }).code}\n`;
await fs.writeFile(path.join(out, 'BlogList.compiled.js'), compiled);
const index = await fs.readFile(path.join(base, 'blog.html'), 'utf8');
await fs.writeFile(path.join(out, 'blog.html'), index.replace(/BlogList\.compiled\.js\?v=[^"']+/, `BlogList.compiled.js?v=${hash(compiled).slice(0, 12)}`));
let sitemap = await fs.readFile(path.join(base, 'sitemap.xml'), 'utf8');
sitemap = sitemap.replace('</urlset>', `<url><loc>${url}</loc><lastmod>${date}</lastmod></url><url><loc>${url}?lang=zh</loc><lastmod>${date}</lastmod></url></urlset>`);
await fs.writeFile(path.join(out, 'sitemap.xml'), sitemap);
const llms = await fs.readFile(path.join(base, 'llms.txt'), 'utf8');
await fs.writeFile(path.join(out, 'llms.txt'), `${llms}\n- ${titleEn}: ${url}\n  - 中文：${url}?lang=zh\n`);

const files = [];
for await (const entry of await fs.glob('**/*', { cwd: out })) {
  const absolute = path.join(out, entry);
  if ((await fs.stat(absolute)).isFile()) files.push([entry, hash(await fs.readFile(absolute))]);
}
const report = {
  slug,
  date,
  enWords: (en.replace(/<[^>]+>/g, ' ').match(/[A-Za-z0-9’'-]+/g) || []).length,
  zhChars: (zh.match(/[\u3400-\u9fff]/g) || []).length,
  files: files.sort((a, b) => a[0].localeCompare(b[0])),
};
await fs.writeFile(reportPath, `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify({ out, reportPath, enWords: report.enWords, zhChars: report.zhChars, files: report.files.length }, null, 2));
