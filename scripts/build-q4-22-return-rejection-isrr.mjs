import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import vm from 'node:vm';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const sharp = require('/Users/wendylin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');
const root = path.resolve(import.meta.dirname, '..');
const base = path.join(root, 'outputs/2026-10-18-current-live-baseline/ui_kits/website');
const out = path.join(root, 'outputs/patches/2026-10-18-q4-22-return-rejection-isrr');
const slug = 'tiktok-shop-return-rejection-evidence-isrr-risk';
const date = '2026-10-18';
const url = `https://www.weglobalmarketing.com/blog/${slug}`;
const enTitle = 'Before You Reject a TikTok Shop Return, Check the Evidence and ISRR Risk';
const zhTitle = '拒绝 TikTok Shop 退货前：先看证据和 ISRR 风险';
const enDescription = 'A practical rejection gate for TikTok Shop returns: case eligibility, evidence quality, ISRR exposure, escalation and final-state readback.';
const zhDescription = '用资格、证据质量、ISRR 暴露、升级路径和最终状态回读，决定 TikTok Shop 退货申请能否拒绝。';
const sources = {
  isrr: 'https://seller-us.tiktok.com/university/essay?knowledge_id=368451231696653',
  manage: 'https://seller-us.tiktok.com/university/essay?knowledge_id=5258293639497493',
  evidence: 'https://seller-us.tiktok.com/university/essay?knowledge_id=7042659022210829',
  returns: 'https://seller-us.tiktok.com/university/essay?knowledge_id=984433248438058',
  policy: 'https://seller-us.tiktok.com/university/essay?knowledge_id=3253210454181634',
};
const sha = value => crypto.createHash('sha256').update(value).digest('hex');

await fs.rm(out, { recursive: true, force: true });
for (const directory of ['assets', 'blog', 'blog/optimized', 'blog/thumbs', 'blog/q4-22-isrr']) await fs.mkdir(path.join(out, directory), { recursive: true });
await fs.copyFile(path.join(base, 'assets/we-logo.png'), path.join(out, 'assets/we-logo.png'));
const logo = (await fs.readFile(path.join(out, 'assets/we-logo.png'))).toString('base64');

function cover(zh) {
  const lines = zh ? ['拒绝退货前', '先查证据', '再看 ISRR'] : ['BEFORE YOU', 'REJECT A RETURN', 'CHECK THE EVIDENCE'];
  const sizes = zh ? [70, 70, 70] : [67, 62, 58];
  const ys = [220, 302, 384];
  return `<svg width="1792" height="896" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bg" x2="1"><stop stop-color="#fffdf8"/><stop offset="1" stop-color="#ece7ff"/></linearGradient></defs><rect width="1792" height="896" fill="url(#bg)"/><path d="M1080 0h712v896h-795c170-245 205-640 83-896z" fill="#f1edff"/><rect x="82" y="78" width="525" height="50" rx="25" fill="#e8efff"/><text x="110" y="111" font-family="Arial,PingFang SC" font-size="21" font-weight="800" fill="#1746b8">TIKTOK SHOP · AFTERSALES EVIDENCE</text>${lines.map((line,i)=>`<text x="82" y="${ys[i]}" font-family="Arial Narrow,Arial,PingFang SC" font-size="${sizes[i]}" font-weight="900" fill="${i===1?'#245bd7':'#17151a'}">${line}</text>`).join('')}<rect x="84" y="456" width="88" height="6" rx="3" fill="#ed168c"/><text x="82" y="520" font-family="Arial,PingFang SC" font-size="25" fill="#4f4a55">${zh?'每次拒绝都要能被复核':'BUILD A DEFENSIBLE REJECTION GATE'}</text><image href="data:image/png;base64,${logo}" x="82" y="700" width="145" height="105"/></svg>`;
}

function evidenceMatrix(zh) {
  const title = zh ? '拒绝前证据矩阵' : 'Evidence matrix before rejection';
  const rows = zh ? [
    ['订单与申请事实','订单号、状态、请求类型、原因、倒计时','事实不完整 → 请求补充或升级'],
    ['配送与交付','有效物流轨迹、ETA、交付或异常记录','记录冲突 → 交给物流 Owner'],
    ['商品与退件状态','连续打包记录、开箱照片、组件与序列信息','无法连接订单 → 不拒绝'],
    ['退货分级','Original / Minor / Severe / Wrong item','按当前界面要求提交照片与说明'],
    ['政策与例外','类目、不可退条件、平台判断、滥用信号','规则不明确 → 指定 Policy Owner'],
  ] : [
    ['CASE FACTS','Order ID, state, request type, reason and timer','Incomplete → request facts or escalate'],
    ['DELIVERY','Valid tracking, ETA, delivery and exception records','Conflict → logistics owner'],
    ['ITEM CONDITION','Continuous packing record, unboxing photos, components and serials','Cannot link to order → do not reject'],
    ['RETURN GRADE','Original / Minor / Severe / Wrong item','Use the live form evidence requirement'],
    ['POLICY &amp; EXCEPTIONS','Category, non-returnable rule, platform judgment and abuse signal','Unclear → named policy owner'],
  ];
  return `<svg width="1600" height="920" xmlns="http://www.w3.org/2000/svg"><rect width="1600" height="920" rx="42" fill="#f5f2ff"/><text x="70" y="100" font-family="Arial,PingFang SC" font-size="42" font-weight="850" fill="#17141d">${title}</text><g transform="translate(70 155)">${rows.map((r,i)=>`<g transform="translate(0 ${i*137})"><rect width="1460" height="112" rx="24" fill="#fff"/><rect width="15" height="112" rx="8" fill="${i===4?'#ed168c':'#245bd7'}"/><text x="48" y="38" font-family="Arial,PingFang SC" font-size="20" font-weight="850" fill="#1746b8">${r[0]}</text><text x="48" y="78" font-family="Arial,PingFang SC" font-size="18" fill="#302c35">${r[1]}</text><text x="1395" y="66" text-anchor="end" font-family="Arial,PingFang SC" font-size="18" font-weight="800" fill="${i===4?'#c91472':'#5f57a8'}">${r[2]}</text></g>`).join('')}</g></svg>`;
}

function escalationMatrix(zh) {
  const title = zh ? '拒绝决定与升级矩阵' : 'Rejection and escalation matrix';
  const groups = zh ? [
    ['通过拒绝 Gate','资格明确 + 证据可连接订单 + 政策路径清楚','按当前时限提交并保存终态'],
    ['补充证据','关键照片、订单连接或物流事实缺失','先补证，不让倒计时失控'],
    ['人工升级','高价值、证据冲突、特殊类目或重复争议','具名 Owner 与明确响应时钟'],
    ['不要拒绝','事实支持买家，或证据不足以支持拒绝','批准适用 Remedy 并记录根因'],
    ['复盘 ISRR','拒绝被推翻、申诉失败或平台介入','按 SKU、原因、Owner 与规则版本复盘'],
  ] : [
    ['PASS REJECTION GATE','Eligibility clear + evidence linked + policy path clear','Submit within live timer and save terminal state'],
    ['COMPLETE EVIDENCE','Required photos, order linkage or delivery fact missing','Fill the named gap before the timer expires'],
    ['HUMAN ESCALATION','High value, conflict, special category or repeated dispute','Named owner and response clock'],
    ['DO NOT REJECT','Facts support buyer or proof cannot defend rejection','Approve the applicable remedy and record root cause'],
    ['REVIEW ISRR','Overturn, failed appeal or platform-managed review','Review by SKU, reason, owner and rule version'],
  ];
  return `<svg width="1600" height="940" xmlns="http://www.w3.org/2000/svg"><rect width="1600" height="940" rx="42" fill="#f5f2ff"/><text x="70" y="105" font-family="Arial,PingFang SC" font-size="42" font-weight="850" fill="#17141d">${title}</text><g transform="translate(70 170)">${groups.map((g,i)=>`<g transform="translate(${(i%2)*750} ${Math.floor(i/2)*205})"><rect width="710" height="170" rx="28" fill="#fff"/><circle cx="62" cy="72" r="31" fill="${['#e6f3ff','#fff0f7','#eee9ff','#fff4d5','#e8f7ef'][i]}"/><text x="62" y="81" text-anchor="middle" font-family="Arial" font-size="23" font-weight="900" fill="${i===3?'#c91472':'#245bd7'}">${i+1}</text><text x="112" y="51" font-family="Arial,PingFang SC" font-size="20" font-weight="850" fill="#1746b8">${g[0]}</text><text x="112" y="91" font-family="Arial,PingFang SC" font-size="17" fill="#302c35">${g[1]}</text><text x="112" y="132" font-family="Arial,PingFang SC" font-size="17" font-weight="800" fill="#5f57a8">${g[2]}</text></g>`).join('')}</g></svg>`;
}

const scene = await sharp(path.join(root, 'outputs/2026-10-18-q4-22-raw-scene-v1.png')).resize({ width: 810 }).png().toBuffer();
for (const [lang, zh] of [['en', false], ['zh', true]]) {
  const name = `hero-${slug}-${lang}-v1`;
  await sharp(Buffer.from(cover(zh))).composite([{ input: scene, left: 950, top: 150 }]).png().toFile(path.join(out, 'blog', `${name}.png`));
  await sharp(path.join(out, 'blog', `${name}.png`)).resize({ width: 1600 }).jpeg({ quality: 90 }).toFile(path.join(out, 'blog/optimized', `${name}.jpg`));
  await sharp(path.join(out, 'blog', `${name}.png`)).resize({ width: 880 }).jpeg({ quality: 88 }).toFile(path.join(out, 'blog/thumbs', `${name}.jpg`));
  await sharp(Buffer.from(evidenceMatrix(zh))).png().toFile(path.join(out, 'blog/q4-22-isrr', `evidence-matrix-${lang}-v1.png`));
  await sharp(Buffer.from(escalationMatrix(zh))).png().toFile(path.join(out, 'blog/q4-22-isrr', `escalation-matrix-${lang}-v1.png`));
}

const faqEn = [
  ['What does ISRR measure?', 'ISRR measures the share of eligible seller-reviewed aftersales requests where a seller rejection is later determined to be invalid. Use the current policy and live Seller Center calculation because eligibility and thresholds can change.'],
  ['Does every rejected return enter ISRR?', 'No. The current requirements identify included and excluded scenarios. Do not assume every rejection belongs in the metric; classify the case from the live request and current policy.'],
  ['What evidence should support a returned-item condition decision?', 'Use order-linked, clear evidence that matches the live form and the standardized Returns Grading Framework. The current return workflow asks for JPG or PNG photos, up to six images, within the stated file-size limit.'],
  ['Can a packing video replace return-condition photos?', 'Not automatically. A continuous packing record may support certain disputes, but the live return-grading response can require specific image formats. Match evidence to the exact case type and submission surface.'],
  ['What should happen when evidence conflicts?', 'Do not force a rejection. Preserve both records, identify the missing fact, assign a named owner, protect the deadline and escalate to the appropriate logistics, policy or aftersales reviewer.'],
  ['What is the smallest useful action today?', 'Add a rejection gate to the aftersales queue: eligibility, reason, required evidence, contradiction check, ISRR exposure, owner, deadline and terminal readback. Test it against ten completed cases.'],
];
const faqZh = [
  ['ISRR 衡量什么？', 'ISRR 衡量符合条件且由卖家审核的售后申请中，卖家拒绝后来被判定为无效的比例。资格与阈值可能变化，应以当前政策与 Seller Center 实时计算为准。'],
  ['每一笔被拒绝的退货都会进入 ISRR 吗？', '不会。当前要求列出了纳入与排除场景。不能默认每次拒绝都进入该指标，应按实时申请与当前政策分类。'],
  ['退件状态判断需要什么证据？', '使用能够连接准确订单、清晰且符合当前表单与 Returns Grading Framework 的证据。当前流程要求 JPG 或 PNG 照片，最多六张，并遵守文件大小限制。'],
  ['打包视频可以代替退货状态照片吗？', '不能默认替代。连续打包记录可能支持特定争议，但实时退货分级回复可能要求特定图片格式。证据必须匹配准确案件类型与提交界面。'],
  ['证据互相冲突时怎么办？', '不要强行拒绝。保留双方记录，指出缺失事实，指定 Owner，保护截止时间，并升级给物流、政策或售后审核人。'],
  ['今天最小可执行动作是什么？', '给售后队列增加拒绝 Gate：资格、原因、必需证据、冲突检查、ISRR 暴露、Owner、截止时间与终态回读，并用十个已完成案例测试。'],
];
const faq = (items, zh) => `<section class="faq"><h2>${zh?'常见问题':'Frequently asked questions'}</h2>${items.map(([q,a])=>`<div class="faq-item"><h3>${q}</h3><p>${a}</p></div>`).join('')}</section>`;

const EN = `<p class="eyebrow">TIKTOK SHOP U.S. · AFTERSALES EVIDENCE</p><h1>${enTitle}</h1><img class="hero" src="/blog/hero-${slug}-en-v1.png" alt="${enTitle}"><p class="byline">WE Marketing Team · Oct 18, 2026 · 16 min read</p>
<p><strong>Direct answer:</strong> reject a TikTok Shop return or refund request only when the request is eligible for seller review, the case facts are complete, the evidence is connected to the exact order, the policy path supports rejection and a reviewer can defend the decision before the live deadline. If any of those elements is missing, complete the evidence, choose the correct remedy or escalate. A fast unsupported rejection can become a customer dispute, an unsuccessful appeal, a platform-managed review and an avoidable Invalid Seller Rejection Rate exposure.</p>
<p>ISRR is not a reason to approve every request. It is a quality signal for seller-reviewed aftersales decisions. The current U.S. requirement measures eligible seller rejections later determined to be invalid and evaluates the metric on a rolling window. The operating response is not to stop making decisions. It is to build a consistent gate that separates defensible rejection, evidence completion, human escalation and approval of the remedy supported by the facts.</p>
<h2>Start with the case, not the customer-service script</h2>
<p>Before reviewing evidence, identify the request type and the live order state. A refund-only request, a return-and-refund request, a speedy-refund appeal, a delivered-not-received case, a replacement and a returned-item condition dispute can follow different policy and evidence paths. The same customer sentence can lead to different actions depending on whether the order is unshipped, in transit, delivered, returned, awaiting inspection or already auto-approved.</p>
<p>Capture the request ID, order ID, SKU, quantity, fulfillment path, delivery state, reason selected by the customer, request timestamp, response deadline, current platform status and available action. If the interface offers Respond, Appeal or another path, record the actual path rather than translating it into a generic internal label. The live case record is the execution surface.</p>
<h2>Understand what ISRR is actually testing</h2>
<p>The current ISRR requirement describes a percentage of eligible seller-reviewed aftersales requests in which a rejection is later determined to be invalid. It is evaluated weekly over a rolling eight-week window. The policy also describes applicability conditions, included and excluded scenarios, warning thresholds and platform-managed review when performance exceeds applicable limits. Those details can change, so the team should preserve the source date and verify the live dashboard rather than hard-coding a permanent threshold into a training slide.</p>
<p>Operationally, every overturned rejection should be readable as a decision-quality event. Which request type was involved? What evidence was missing or weak? Was the wrong reason selected? Did the reviewer miss a policy exception? Did the warehouse photos fail to connect the return to the order? Did an escalation sit past its timer? Grouping those outcomes by SKU, reason, reviewer, warehouse and rule version is more useful than treating ISRR as a standalone number.</p>
<img src="/blog/q4-22-isrr/evidence-matrix-en-v1.png" alt="Evidence matrix for TikTok Shop return rejection decisions">
<h2>Build evidence that proves the exact fact you need</h2>
<p>Strong evidence is specific, continuous and order-linked. A packing record should show the order identifier and relevant product before handoff. Tracking evidence should show the shipment and the event that supports the claim. Returned-item evidence should show the item, packaging, accessories, serial information or other identifying details, and the condition the reviewer is relying on. Screenshots should include enough context to explain who agreed to what and when.</p>
<p>The current After-Sales Evidence Guide explains that clear evidence matters for rejections, disputes and appeals. It also describes examples such as tracking information, packing records, product demonstrations, inspection reports, authenticity documents and agreement screenshots, depending on the case. More files are not automatically stronger. Each file should support a named fact and connect to the exact order.</p>
<h2>Use the Returns Grading Framework without inventing a condition</h2>
<p>For returned products, the current workflow uses standardized grades such as Original, Minor damage or Functional, Severe damage or Unsellable, and Buyer shipped the wrong item. The grade is a structured observation, not a shortcut to a commercial outcome. Choose it from the item actually received, then follow the current case type and interface for the available remedy or appeal.</p>
<p>The current requirements describe a photo submission surface using JPG or PNG files, no larger than the stated limit, with up to six images and an optional comments field. A separate packing video may be useful evidence for another dispute path, but it does not excuse missing the specific return-condition images requested by the live form. Evidence must fit the decision surface.</p>
<h2>Run a contradiction check before rejection</h2>
<p>Ask whether seller evidence and customer evidence describe the same item, time and event. A warehouse image without an order identifier may not rebut a customer photo. A delivery scan may not resolve a package-damage claim. A listing screenshot captured after the sale may not prove what the buyer saw at purchase. A product demonstration for another SKU may not prove functionality for the returned unit.</p>
<p>If records conflict, name the conflict. Do not hide it inside a reviewer note. Assign the next fact to a specific owner: logistics validates the delivery event; the warehouse validates receipt and condition; merchandising validates listing truth; customer service validates communication and timing; a policy owner validates the applicable rule. Protect the deadline while the fact is completed.</p>
<h2>Decide among four lanes</h2>
<p><strong>Lane one, defensible rejection:</strong> seller review is allowed, all required facts are complete, evidence is valid and connected, no controlling exception is present, and the current policy supports the result. <strong>Lane two, evidence completion:</strong> the likely decision may be defensible, but a named proof is missing. <strong>Lane three, human escalation:</strong> value, policy complexity, conflict, abuse signal or business impact exceeds the reviewer’s authority. <strong>Lane four, do not reject:</strong> available facts support the buyer or cannot support rejection; choose the applicable refund, return, replacement or other remedy.</p>
<p>Every lane needs an owner, a response clock and a terminal readback. A note saying “sent to another team” is not a terminal state. Record the final platform action, amount, evidence package, reviewer, timestamp, appeal eligibility and follow-up action. If the platform later changes the result, append the new state instead of overwriting the original decision record.</p>
<img src="/blog/q4-22-isrr/escalation-matrix-en-v1.png" alt="TikTok Shop return rejection and escalation matrix">
<h2>Do not reject merely to protect margin</h2>
<p>A refund or return can be expensive, but margin pressure is not evidence. If the facts support a buyer remedy, approve the correct outcome and route the root cause to the operating owner. Repeated damaged-item requests may point to packaging. Wrong-item requests may point to pick verification. Functionality complaints may point to product quality, instructions or exaggerated content. The aftersales decision and the prevention decision are connected but not interchangeable.</p>
<p>Likewise, do not automatically approve every request to keep ISRR low. That can conceal product and abuse patterns, produce inconsistent customer treatment and erase learning. The goal is not the fewest rejections. The goal is a high share of decisions that remain valid after independent review because the evidence and policy path were correct.</p>
<h2>Use timers as a control, not a surprise</h2>
<p>Current return requirements describe short seller response windows for several request types, with automatic approval possible when sellers do not act. Add the live deadline to the evidence queue at intake. Sort cases by the earliest irreversible deadline, then by risk. A high-value case without a named reviewer should not wait behind routine cases merely because it arrived later.</p>
<p>Set internal checkpoints before the platform deadline: intake complete, evidence complete, decision review, submission and terminal readback. If the evidence cannot be completed safely, choose the policy-supported alternative or escalate before time expires. A last-minute rejection with weak proof is not a recovery plan.</p>
<h2>Review invalid outcomes as a system</h2>
<p>For every overturned rejection or unsuccessful seller appeal, record request type, reason, SKU, category, fulfillment path, evidence files, missing fact, reviewer, escalation path, rule version and final platform rationale. Look for repeated failure modes: unlinked warehouse photos, unsupported listing claims, delivery evidence that does not answer the complaint, wrong grading selection or missed deadlines.</p>
<p>Turn each repeated mode into one bounded repair. Update the intake checklist, change a warehouse photo requirement, train one review scenario, repair listing truth or change escalation authority. Do not answer a high ISRR signal only with more reminders to “be careful.” The repair should change the decision system.</p>
<h2>A hypothetical operating example</h2>
<p>This is an example, not a client result. A customer returns a bundled device and reports a missing component. The warehouse photographs the outer parcel but does not capture the bundle contents or order identifier. The reviewer cannot defend a rejection from that evidence, so the case enters evidence completion. A second case shows a different serial number, complete unboxing images and an order-linked packing record; it escalates to a trained reviewer because the value exceeds normal authority. A third case shows that the listing itself omitted an included-item detail, so the team approves the appropriate remedy and routes listing repair to merchandising.</p>
<h2>Smallest useful next action</h2>
<p>Add eight fields to the aftersales queue today: request eligibility, selected reason, exact fact required, evidence link, contradiction result, ISRR exposure, decision owner and live deadline. Add a ninth field for terminal readback. Test the gate against ten completed cases, including at least one rejection later overturned. If a reviewer cannot explain which fact and policy path supported the original decision, repair the gate before scaling it.</p>
<h2>Source notes</h2><p>This original WEM operating framework draws on complete current TikTok Shop U.S. Seller University materials revalidated October 18, 2026: <a href="${sources.isrr}">Requirements for Invalid Seller Rejection Rate (ISRR) Metric</a>, <a href="${sources.manage}">How to Manage Your Invalid Seller Rejection Rate (ISRR)</a>, <a href="${sources.evidence}">After-Sales Evidence Guide for Appeals and Disputes</a>, <a href="${sources.returns}">Requirements for Managing Returns, Refunds, and Replacements</a>, and the <a href="${sources.policy}">Customer Order Cancellation, Return, and Refund Policy</a>. Platform thresholds, eligibility, interfaces, timers and evidence requirements may change. Verify the live U.S. policy and exact case before execution.</p>
${faq(faqEn, false)}
<h2>Related WEM guides</h2><section class="related-grid"><a href="/blog/tiktok-shop-aftersales-automation-approval-rules"><strong>Aftersales automation</strong><span>Define what the system may approve and when it must stop.</span></a><a href="/blog/tiktok-shop-bfcm-2026-holiday-returns-liability"><strong>BFCM holiday returns</strong><span>Plan the liability window and category exceptions.</span></a><a href="/blog/tiktok-shop-correct-or-appeal"><strong>Correct or appeal</strong><span>Choose the next action from facts, evidence and deadline.</span></a></section>`;

const ZH = `<p class="eyebrow">TIKTOK SHOP 美国站 · 售后证据</p><h1>${zhTitle}</h1><img class="hero" src="/blog/hero-${slug}-zh-v1.png" alt="${zhTitle}"><p class="byline">WE Marketing Team · 2026 年 10 月 18 日 · 16 分钟阅读</p>
<p><strong>直接结论：</strong>只有当该申请允许卖家审核、案件事实完整、证据能够连接到准确订单、当前政策路径支持拒绝，并且审核者能在实时截止时间前为决定负责时，才拒绝 TikTok Shop 退货或退款申请。任何一项缺失，都应先补证、选择正确 Remedy 或升级。一次快速但无依据的拒绝，可能变成消费者争议、卖家申诉失败、平台介入审核，以及可避免的 Invalid Seller Rejection Rate 风险。</p>
<p>ISRR 不是要求卖家批准所有申请。它是对卖家售后审核质量的信号。当前美国站要求衡量符合条件的卖家审核申请中，卖家拒绝后来被判定无效的比例，并使用滚动窗口评估。运营上不能停止做决定，而要建立一致 Gate，把可辩护拒绝、证据补全、人工升级和按事实批准正确处理方式分开。</p>
<h2>先识别案件，不要先套客服话术</h2>
<p>审核证据前，先确认申请类型与实时订单状态。Refund-only、Return and Refund、Speedy Refund Appeal、已送达未收到、换货和退件状态争议，可能走不同政策与证据路径。相同一句客户描述，在订单未发货、运输中、已送达、已退回、待质检或已自动批准时，动作都可能不同。</p>
<p>保存 Request ID、Order ID、SKU、数量、履约路径、配送状态、买家选择原因、申请时间、响应截止时间、当前平台状态和可用动作。如果界面提供 Respond、Appeal 或其他入口，就记录真实入口，不要全部翻译成一个内部通用标签。实时 Case Record 才是执行界面。</p>
<h2>理解 ISRR 真正在测试什么</h2>
<p>当前 ISRR 要求把指标定义为：符合条件并由卖家审核的售后申请中，卖家拒绝后来被判定为无效的比例。它按周评估，并使用滚动八周窗口。政策还描述了适用条件、纳入与排除场景、警告阈值，以及在表现超过适用限制时的平台管理审核。这些细节可能变化，因此团队要保存来源日期并核对实时 Dashboard，不能把某个阈值永久写死在培训幻灯片。</p>
<p>每次拒绝被推翻都应被读取为 Decision Quality Event：涉及哪种申请？缺了什么证据？原因是否选错？审核人是否漏掉政策例外？仓库照片是否无法连接退件与订单？升级是否错过计时器？按 SKU、原因、审核人、仓库和规则版本分组，比把 ISRR 当成孤立数字更有用。</p>
<img src="/blog/q4-22-isrr/evidence-matrix-zh-v1.png" alt="TikTok Shop 退货拒绝证据矩阵">
<h2>证据必须证明你真正需要的那个事实</h2>
<p>强证据应具体、连续并能连接订单。打包记录要展示订单标识和交接前相关商品；物流证据要展示对应运单和支持判断的事件；退件证据要展示商品、包装、配件、序列信息或其他识别细节，以及审核人依据的状态；Agreement Screenshot 要包含足够上下文，说明谁在什么时间同意了什么。</p>
<p>当前 After-Sales Evidence Guide 说明，清晰证据会影响拒绝、争议和申诉，并按案件举例物流信息、打包记录、商品演示、质检报告、真伪文件和协议截图等。文件越多不等于证据越强。每个文件都要支持一个具名事实，并连接到准确订单。</p>
<h2>使用 Returns Grading Framework，不要发明退件状态</h2>
<p>当前退货流程使用标准化 Grade，例如 Original、Minor damage / Functional、Severe damage / Unsellable 和 Buyer shipped the wrong item。Grade 是结构化观察，不是商业结果的捷径。应根据实际收到商品选择，再按当前案件类型和界面执行可用处理或申诉。</p>
<p>当前要求描述了照片提交界面：JPG 或 PNG、遵守规定文件大小、最多六张，并可填写补充说明。另一条争议路径可能需要连续打包视频，但这不能替代实时退件分级界面要求的状态照片。证据必须适合具体决策界面。</p>
<h2>拒绝前必须做证据冲突检查</h2>
<p>检查卖家证据与消费者证据是否描述同一件商品、同一个时间和同一个事件。没有订单标识的仓库照片可能无法反驳客户照片；Delivery Scan 不能自动解决包裹损坏；售后才截取的 Listing 页面不能证明消费者下单时看到什么；另一个 SKU 的商品演示不能证明本次退件功能正常。</p>
<p>记录冲突时，要直接命名冲突，不能藏在 Reviewer Note。把下一项事实交给指定 Owner：物流核对交付事件，仓库核对收货与状态，Merchandising 核对 Listing Truth，客服核对沟通与时间，Policy Owner 核对适用规则。补全事实时也必须保护截止时间。</p>
<h2>把案件分进四条 Lane</h2>
<p><strong>Lane 1，可辩护拒绝：</strong>卖家拥有审核权、事实完整、证据有效并可连接、没有控制性例外，当前政策支持结果。<strong>Lane 2，补充证据：</strong>可能可以拒绝，但缺一项具名证明。<strong>Lane 3，人工升级：</strong>金额、政策复杂度、证据冲突、滥用信号或业务影响超出审核人权限。<strong>Lane 4，不应拒绝：</strong>现有事实支持买家，或证据不足以支持拒绝，应执行适用退款、退货、换货或其他 Remedy。</p>
<p>每条 Lane 都需要 Owner、响应时钟和 Terminal Readback。“已转给其他团队”不是终态。记录平台最终动作、金额、证据包、审核人、时间戳、申诉资格和后续动作。如果平台后来改变结果，要追加新状态，不能覆盖原始决定记录。</p>
<img src="/blog/q4-22-isrr/escalation-matrix-zh-v1.png" alt="TikTok Shop 退货拒绝与升级矩阵">
<h2>不能因为毛利压力就拒绝</h2>
<p>退款或退货可能很贵，但毛利压力不是证据。如果事实支持买家处理方式，就批准正确结果，并把根因交给运营 Owner。损坏申请重复出现可能指向包装，错货可能指向拣货核验，功能问题可能指向商品质量、说明或夸大内容。售后决定与预防决定相连，但不能互相替代。</p>
<p>同样，也不能为了压低 ISRR 就自动批准全部申请。那会掩盖商品与滥用模式，制造不一致客户处理，并删除学习信号。目标不是最少拒绝，而是让高比例决定在独立复核后仍有效，因为证据和政策路径正确。</p>
<h2>把计时器当控制，不要让它变成意外</h2>
<p>当前退货要求为多种申请描述了很短的卖家响应窗口，卖家不行动可能触发自动批准。案件进入队列时就要写入实时 Deadline，先按最早不可逆截止时间排序，再看风险。高价值且没有 Reviewer 的案件，不能因为晚进入就排在普通案例后面。</p>
<p>在平台截止前设置内部 Checkpoint：Intake Complete、Evidence Complete、Decision Review、Submission 和 Terminal Readback。无法安全补齐证据时，在超时前选择政策支持的替代方式或升级。最后一分钟用弱证据拒绝，不是恢复方案。</p>
<h2>把无效结果当成系统问题复盘</h2>
<p>每次拒绝被推翻或卖家申诉失败，都记录申请类型、原因、SKU、类目、履约路径、证据文件、缺失事实、审核人、升级路径、规则版本和平台最终理由。寻找重复失败模式：仓库照片无法连接订单、Listing Claim 无证据、配送记录没有回答消费者问题、分级选择错误，或错过时限。</p>
<p>每个重复模式只分配一项清晰修复：更新 Intake Checklist、改变仓库拍照要求、训练一个审核场景、修复 Listing Truth，或调整升级权限。不能只靠提醒团队“更仔细”来处理高 ISRR 信号。修复必须改变决策系统。</p>
<h2>一个假设运营案例</h2>
<p>这是运营示例，不是客户结果。消费者退回一套组合设备并表示缺少组件。仓库只拍了外箱，没有拍组合内容和订单标识，审核人无法用该证据支持拒绝，因此案件进入补证 Lane。第二个案件展示不同序列号、完整开箱照片和订单连接的打包记录，但因价值超过普通权限而升级给训练过的审核人。第三个案件发现 Listing 自身没有写清配件内容，团队批准适用处理，并把 Listing 修复交给 Merchandising。</p>
<h2>最小下一步</h2>
<p>今天就在售后队列增加八个字段：申请资格、选择原因、需要证明的准确事实、证据链接、冲突结果、ISRR 暴露、Decision Owner 与实时截止时间，再加第九个 Terminal Readback。用十个已完成案例测试 Gate，其中至少一个拒绝后来被推翻。如果审核人无法解释原决定依赖哪个事实和政策路径，就先修复 Gate 再扩大。</p>
<h2>来源说明</h2><p>这套 WE Marketing 原创运营框架基于 2026 年 10 月 18 日完整重新核验的 TikTok Shop 美国站 Seller University <a href="${sources.isrr}">Requirements for Invalid Seller Rejection Rate (ISRR) Metric</a>、<a href="${sources.manage}">How to Manage Your Invalid Seller Rejection Rate (ISRR)</a>、<a href="${sources.evidence}">After-Sales Evidence Guide for Appeals and Disputes</a>、<a href="${sources.returns}">Requirements for Managing Returns, Refunds, and Replacements</a>与<a href="${sources.policy}">Customer Order Cancellation, Return, and Refund Policy</a>。平台阈值、资格、界面、计时和证据要求都可能变化，执行前必须核对当前美国站政策与准确案件。</p>
${faq(faqZh, true)}
<h2>相关 WEM 指南</h2><section class="related-grid"><a href="/blog/tiktok-shop-aftersales-automation-approval-rules?lang=zh"><strong>售后自动化</strong><span>定义系统可以批准什么，以及何时必须停止。</span></a><a href="/blog/tiktok-shop-bfcm-2026-holiday-returns-liability?lang=zh"><strong>BFCM 节日退货</strong><span>规划责任窗口与类目例外。</span></a><a href="/blog/tiktok-shop-correct-or-appeal?lang=zh"><strong>整改还是申诉</strong><span>按事实、证据与截止时间选择动作。</span></a></section>`;

const graph = {'@context':'https://schema.org','@graph':[
  ...[[enTitle,enDescription,'en-US',url,`hero-${slug}-en-v1.png`,faqEn],[zhTitle,zhDescription,'zh-CN',`${url}?lang=zh`,`hero-${slug}-zh-v1.png`,faqZh]].flatMap(([headline,description,inLanguage,page,image,items])=>[
    {'@type':'BlogPosting','@id':`${page}#article`,headline,description,inLanguage,datePublished:date,dateModified:date,mainEntityOfPage:{'@id':page},image:{'@type':'ImageObject',url:`https://www.weglobalmarketing.com/blog/${image}`},author:{'@type':'Organization',name:'WE Marketing Team'},publisher:{'@type':'Organization',name:'WE Marketing'},citation:Object.values(sources)},
    {'@type':'FAQPage','@id':`${page}#faq`,inLanguage,mainEntity:items.map(([name,text])=>({'@type':'Question',name,acceptedAnswer:{'@type':'Answer',text}}))},
  ]),
]};
const style = (await fs.readFile(path.join(base, 'blog/tiktok-shop-aftersales-automation-approval-rules.html'), 'utf8')).match(/<style>[^]*?<\/style>/)[0];
const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><script>document.documentElement.dataset.lang=new URLSearchParams(location.search).get('lang')==='zh'?'zh':'en';document.documentElement.lang=document.documentElement.dataset.lang==='zh'?'zh-CN':'en'</script><title>${enTitle} | WE Marketing</title><meta name="description" content="${enDescription}"><link rel="canonical" href="${url}"><link rel="alternate" hreflang="en-US" href="${url}"><link rel="alternate" hreflang="zh-CN" href="${url}?lang=zh"><link rel="alternate" hreflang="x-default" href="${url}"><script type="application/ld+json">${JSON.stringify(graph)}</script>${style}<script>if(new URLSearchParams(location.search).get('lang')==='zh'){document.title=${JSON.stringify(`${zhTitle} | WE Marketing`)};document.querySelector('meta[name=description]').content=${JSON.stringify(zhDescription)};document.querySelector('link[rel=canonical]').href='${url}?lang=zh'}</script></head><body><nav class="nav"><a class="logo" href="/"><img src="/assets/we-logo.png" alt="WE Marketing"></a><span class="spacer"></span><a href="/">OUR SERVICES</a><a href="/showcase">OUR WORK</a><a href="/blog">BLOG</a><span class="switch"><a class="en" href="/blog/${slug}">EN</a><a class="zh" href="/blog/${slug}?lang=zh">中文</a></span></nav><main class="wrap"><div class="tools"><a class="en" href="/blog">← BLOG</a><a class="zh" href="/blog?lang=zh">← 博客</a></div><article lang="en">${EN}</article><article lang="zh-CN">${ZH}</article></main><section class="cta"><h2 class="en">READY TO TALK<br>TO WEM?</h2><h2 class="zh">准备好和 WEM<br>一起把计划落地吗？</h2><p class="en">Turn aftersales evidence into decisions that survive review.</p><p class="zh">把售后证据变成经得住复核的决定。</p><a class="en" href="https://scheduler.zoom.us/wendylin001">BOOK A DISCOVERY CALL</a><a class="zh" href="https://scheduler.zoom.us/wendylin001">预约咨询</a></section><footer class="footer"><img src="/assets/we-logo.png" alt="WE Marketing"><p class="en">WE Marketing connects strategy, creator operations, paid growth and TikTok Shop execution.</p><p class="zh">WE Marketing 帮助品牌连接策略、达人运营、付费增长与 TikTok Shop 执行。</p><p>© 2026 WE Marketing. All rights reserved.</p></footer></body></html>`;
await fs.writeFile(path.join(out, 'blog', `${slug}.html`), html);

const q421 = await fs.readFile(path.join(base, 'blog/tiktok-shop-aftersales-automation-approval-rules.html'), 'utf8');
await fs.writeFile(path.join(out, 'blog/tiktok-shop-aftersales-automation-approval-rules.html'), q421.replaceAll('用权限、证据和停止条件管理 TikTok Shop 售后自动化。','用权限、证据、停止条件与最终状态回读管理 TikTok Shop 退款、退货和换货自动化。'));

let list = await fs.readFile(path.join(base, 'BlogList.jsx'), 'utf8');
const row = {slug,tags:['tiktok-shop','shop-operations','returns'],cat:{en:'TIKTOK SHOP U.S. · AFTERSALES EVIDENCE',zh:'TIKTOK SHOP 美国站 · 售后证据'},title:{en:enTitle,zh:zhTitle},excerpt:{en:'Check eligibility, evidence quality and ISRR exposure before rejecting a return.',zh:'拒绝退货前，先核对资格、证据质量与 ISRR 暴露。'},date:{en:'Oct 18, 2026',zh:'2026 年 10 月 18 日'},read:{en:'16 min read',zh:'16 分钟阅读'},image:{en:`hero-${slug}-en-v1.png`,zh:`hero-${slug}-zh-v1.png`}};
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
if (enWords < 1300 || zhChars < 1800 || files.length !== 18) throw new Error(`gate failed: words=${enWords}, zh=${zhChars}, files=${files.length}`);
console.log(JSON.stringify({slug,enWords,zhChars,files:files.length,version,out},null,2));
