import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import vm from 'node:vm';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const sharp = require('/Users/wendylin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');
const root = path.resolve(import.meta.dirname, '..');
const base = path.join(root, 'outputs/patches/2026-10-19-q4-23-chargeback-evidence');
const out = path.join(root, 'outputs/patches/2026-10-20-q4-24-return-inspection-photos');
const sourceOut = path.join(root, 'outputs/2026-10-20-q4-24-source');
const slug = 'tiktok-shop-return-inspection-photo-evidence';
const date = '2026-10-20';
const url = `https://www.weglobalmarketing.com/blog/${slug}`;
const titleEn = 'Photograph TikTok Shop Returns for the Decision You May Need to Defend';
const titleZh = 'TikTok Shop 退货验货怎么拍：按未来可能申诉的标准留证';
const sources = [
  'https://seller-us.tiktok.com/university/essay?identity=1&knowledge_id=984433248438058',
  'https://seller-us.tiktok.com/university/essay?knowledge_id=7042659022210829',
];
const hash = (value) => crypto.createHash('sha256').update(value).digest('hex');

await fs.rm(out, { recursive: true, force: true });
await fs.cp(base, out, { recursive: true });
for (const relative of [
  'blog/tiktok-shop-chargeback-seven-day-evidence-pack.html',
  'blog/hero-tiktok-shop-chargeback-seven-day-evidence-pack-en-v1.png',
  'blog/hero-tiktok-shop-chargeback-seven-day-evidence-pack-zh-v1.png',
  'blog/optimized/hero-tiktok-shop-chargeback-seven-day-evidence-pack-en-v1.jpg',
  'blog/optimized/hero-tiktok-shop-chargeback-seven-day-evidence-pack-zh-v1.jpg',
  'blog/thumbs/hero-tiktok-shop-chargeback-seven-day-evidence-pack-en-v1.jpg',
  'blog/thumbs/hero-tiktok-shop-chargeback-seven-day-evidence-pack-zh-v1.jpg',
]) await fs.rm(path.join(out, relative), { force: true });
await fs.rm(path.join(out, 'blog/q4-23-evidence'), { recursive: true, force: true });
await fs.mkdir(sourceOut, { recursive: true });
for (const [index, source] of sources.entries()) {
  const response = await fetch(source, { headers: { 'user-agent': 'Mozilla/5.0' } });
  if (!response.ok) throw new Error(`Official source ${index + 1} returned ${response.status}`);
  await fs.writeFile(path.join(sourceOut, index === 0 ? 'returns-refunds-replacements.html' : 'aftersales-evidence-guide.html'), await response.text());
}

const logo = (await fs.readFile(path.join(out, 'assets/we-logo.png'))).toString('base64');
async function cover(lang) {
  const zh = lang === 'zh';
  const lines = zh ? ['退货验货怎么拍', '六张图留证'] : ['PHOTOGRAPH', 'THE RETURN'];
  const sub = zh ? '按未来可能申诉的标准，记录身份、全貌与缺陷。' : 'Six frames that preserve identity, condition and decision evidence.';
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1792" height="896"><defs><linearGradient id="g" x2="1" y2="1"><stop stop-color="#fffdf9"/><stop offset="1" stop-color="#efedff"/></linearGradient><filter id="s"><feDropShadow dx="0" dy="18" stdDeviation="22" flood-color="#7187e9" flood-opacity=".2"/></filter></defs><rect width="1792" height="896" fill="url(#g)"/><path d="M1225 0h567v896H982c206-160 226-525 243-896z" fill="#e6e3ff"/><rect x="82" y="72" width="680" height="64" rx="32" fill="#e7ebff"/><circle cx="118" cy="104" r="11" fill="#2356d7"/><text x="145" y="114" font-family="Arial" font-size="27" font-weight="700" fill="#2356d7">${zh ? 'TIKTOK SHOP 美国站 / 售后证据' : 'TIKTOK SHOP U.S. / AFTERSALES EVIDENCE'}</text><text x="86" y="282" font-family="Arial" font-size="74" font-weight="900" fill="#151515">${lines[0]}<tspan x="86" dy="91" fill="#2356d7">${lines[1]}</tspan></text><path d="M88 450h70" stroke="#2356d7" stroke-width="8" stroke-linecap="round"/><text x="88" y="535" font-family="Arial" font-size="29" fill="#27304f">${sub}</text><image href="data:image/png;base64,${logo}" x="90" y="724" width="182" height="90" preserveAspectRatio="xMidYMid meet"/><g transform="translate(1015 112)" filter="url(#s)"><ellipse cx="340" cy="640" rx="310" ry="55" fill="#d3cff2"/><rect x="84" y="98" width="510" height="475" rx="52" fill="#fff" stroke="#8798e9" stroke-width="12"/><rect x="128" y="145" width="422" height="284" rx="30" fill="#f2f0ff"/><path d="M180 222l158-66 158 66-158 68z" fill="#7187e9"/><path d="M180 222v138l158 68V290z" fill="#5e53c9"/><path d="M496 222v138l-158 68V290z" fill="#8f82ea"/><circle cx="515" cy="482" r="103" fill="#ff78bd"/><path d="M465 482h100M515 432v100" stroke="#fff" stroke-width="18" stroke-linecap="round"/><rect x="10" y="500" width="330" height="84" rx="42" fill="#2356d7"/><text x="46" y="553" font-family="Arial" font-size="25" font-weight="800" fill="#fff">6 PHOTO FRAMES</text></g></svg>`;
  const stem = `hero-${slug}-${lang}-v1`;
  await sharp(Buffer.from(svg)).png().toFile(path.join(out, 'blog', `${stem}.png`));
  await sharp(Buffer.from(svg)).jpeg({ quality: 87 }).toFile(path.join(out, 'blog/optimized', `${stem}.jpg`));
  await sharp(Buffer.from(svg)).resize(880, 440).jpeg({ quality: 87 }).toFile(path.join(out, 'blog/thumbs', `${stem}.jpg`));
}
await cover('en');
await cover('zh');

const diagram = (lang, kind) => {
  const zh = lang === 'zh';
  const title = kind === 'frames' ? (zh ? '六张图，不是六个随机角度' : 'SIX FRAMES, NOT SIX RANDOM ANGLES') : (zh ? '文件名就是证据索引' : 'THE FILE NAME IS THE EVIDENCE INDEX');
  const rows = kind === 'frames' ? (zh ? [
    ['01', '身份', '退货标签、订单或追踪标识'], ['02', '外箱', '六面外观、封口与运输损伤'], ['03', '全套', '商品、配件、赠品与包装'], ['04', '正面', '商品全貌和当前状态'], ['05', '问题', '近景、尺度与缺陷位置'], ['06', '功能', '可复现的功能结果或测试状态'],
  ] : [
    ['01', 'IDENTITY', 'Return label, order or tracking reference'], ['02', 'PARCEL', 'Six sides, seal and transit damage'], ['03', 'CONTENTS', 'Item, parts, gifts and packaging'], ['04', 'WHOLE ITEM', 'Full view and present condition'], ['05', 'ISSUE', 'Close-up, scale and exact location'], ['06', 'FUNCTION', 'Repeatable test or functional state'],
  ]) : (zh ? [
    ['订单', 'ORDER-1234'], ['收到', '2026-10-20T1412'], ['镜头', 'F05-ISSUE'], ['版本', 'ORIGINAL'],
  ] : [
    ['ORDER', 'ORDER-1234'], ['RECEIVED', '2026-10-20T1412'], ['FRAME', 'F05-ISSUE'], ['VERSION', 'ORIGINAL'],
  ]);
  const rowHeight = kind === 'frames' ? 83 : 110;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1300" height="720"><rect width="100%" height="100%" fill="#f7f5ff"/><text x="70" y="78" font-family="Arial" font-size="38" font-weight="800" fill="#18275e">${title}</text>${rows.map((row, index) => { const y = 118 + index * rowHeight; return `<rect x="70" y="${y}" width="1160" height="${rowHeight - 12}" rx="20" fill="${index % 2 ? '#e9e5ff' : '#fff'}"/><circle cx="125" cy="${y + (rowHeight - 12) / 2}" r="29" fill="#7187e9"/><text x="107" y="${y + (rowHeight - 12) / 2 + 8}" font-family="Arial" font-size="20" font-weight="800" fill="#fff">${row[0]}</text><text x="178" y="${y + 31}" font-family="Arial" font-size="23" font-weight="800" fill="#2356d7">${row[1]}</text>${row[2] ? `<text x="440" y="${y + 31}" font-family="Arial" font-size="20" fill="#303957">${row[2]}</text>` : ''}`; }).join('')}</svg>`;
};
await fs.mkdir(path.join(out, 'blog/q4-24-evidence'), { recursive: true });
for (const lang of ['en', 'zh']) for (const kind of ['frames', 'naming']) await fs.writeFile(path.join(out, 'blog/q4-24-evidence', `${kind}-${lang}-v1.svg`), diagram(lang, kind));

const faqEn = [
  ['How many return inspection photos can sellers submit?', 'The current Returns Grading Framework allows up to six JPG or PNG images, each no larger than 5 MB. Video is not accepted in that photo field.'],
  ['Should the team photograph every return?', 'Use a consistent intake protocol for every return, then retain the most decision-relevant frames according to policy, category risk and your controlled retention rules.'],
  ['What should the first photo show?', 'Start with identity: the return label, order reference or tracking reference, captured so the remaining images can be tied to the correct parcel.'],
  ['Can a close-up prove an item is unsellable?', 'Not by itself. Pair the close-up with a full-item view, parcel and contents context, scale, and a factual description of how the condition affects resale or function.'],
  ['Should inspectors edit or annotate the original photos?', 'Preserve originals unchanged. If an annotated copy helps a reviewer, create it as a separate derivative and retain the original file and capture metadata.'],
  ['What is the smallest useful next action?', 'Test the six-frame protocol on five recent returns and check whether another reviewer can reach the same grade without asking the original inspector.'],
];
const faqZh = [
  ['退货验货最多能提交几张照片？', '当前 Returns Grading Framework 允许最多六张 JPG 或 PNG 图片，每张不超过 5 MB；该图片字段不接受视频。'],
  ['每一笔退货都要拍吗？', '建议每一笔退货都执行一致的入库留证协议，再按政策、品类风险和受控保留规则保存最支持决策的镜头。'],
  ['第一张图应该拍什么？', '先拍身份标识，包括退货标签、订单号或追踪号，让后续所有图片都能明确关联到正确包裹。'],
  ['一张缺陷近照能证明商品不可二次销售吗？', '单独一张通常不够。还要配合商品全貌、包裹与内容物、尺度参照，以及缺陷如何影响功能或二次销售的客观说明。'],
  ['验货员可以编辑或标注原图吗？', '原图应保持不变。如果标注副本能帮助复核，可以另存衍生版本，同时保留原文件和采集信息。'],
  ['最小可用下一步是什么？', '用最近五笔退货测试六张图协议，看另一位复核人能否在不询问原验货员的情况下得出相同等级。'],
];
const faq = (items, zh) => `<section class="faq"><h2>${zh ? '常见问题' : 'Frequently asked questions'}</h2>${items.map(([question, answer]) => `<div class="faq-item"><h3>${question}</h3><p>${answer}</p></div>`).join('')}</section>`;

const enSections = [
  ['Start with the decision, not the camera', 'A return inspection is not a warehouse photo task. It is a decision record. The inspector may approve a full refund, reject a request with supporting detail, or appeal a speedy refund. Under the current Returns Grading Framework, the condition choices are Original, Minor damage / Functional, Severe damage / Unsellable, and Buyer shipped the wrong item. The photographs must help another reviewer understand why the selected grade fits the item that actually came back.', 'Design the sequence around a future reader who was not present. That person needs identity, context, condition and consequence. A beautiful close-up without an order reference can be unusable. A label photo without the item can prove receipt but not condition. Six connected frames are stronger than six unrelated angles.'],
  ['Frame 1: establish parcel and order identity', 'Photograph the return label or another approved order-linked identifier before opening or moving the contents. The order number, return tracking reference or QR code should be legible. Keep unrelated personal details out of the composition when they are not needed. This first frame is the bridge between the physical parcel and the Seller Center case.', 'Record who received the parcel, when it was received and where inspection occurred in the inspection log. The photo file itself should not be the only place where identity lives. If a label is torn or unreadable, record that condition and use the strongest available alternative link rather than guessing.'],
  ['Frame 2: preserve the parcel exterior', 'Capture the parcel exterior before breaking the seal. The official after-sales evidence guide recommends showing all six sides of the returned package in a continuous unboxing record. For the six-image submission limit, create a clear exterior frame or contact view that shows the box, seal, dents, punctures, wet areas, retaping and other transit clues without hiding their location.', 'Do not crop so tightly that scale and orientation disappear. If damage appears on one corner, the reviewer should still be able to see which corner it is. This distinguishes an incoming parcel condition from damage introduced after intake.'],
  ['Frame 3: show the complete returned contents', 'Place the item, accessories, components, gifts, manuals and original packaging in one organized frame. Compare the layout with the order contents list and, when relevant, the original dispatch evidence. Missing-item disputes require proof of what came back and what should have come back. A complete contents frame makes that comparison possible.', 'Do not add parts from another unit merely to demonstrate what a complete set looks like. If a reference set is needed, photograph it separately and label it clearly as reference, never as the returned contents.'],
  ['Frame 4: show the whole item before the defect', 'Photograph the full item on a neutral surface with enough light to show color, shape, tags, seals and general condition. This is the context frame for every later close-up. It helps a reviewer determine whether the photographed defect belongs to the returned item and whether the condition is localized or widespread.', 'Use the same repeatable setup for similar SKUs. A fixed background, camera distance and orientation reduce accidental ambiguity. Do not apply filters, beauty correction or generative fill. Evidence should preserve the item, not improve its presentation.'],
  ['Frame 5: document the exact issue with scale', 'Move close enough to show the claimed damage, contamination, wear, removed tag, missing seal, wrong model, serial mismatch or other condition. Include a neutral scale reference when size matters and a wider contextual edge when location matters. Focus, exposure and color must be accurate enough for another person to inspect the fact.', 'Describe only what the image proves. “A 22 mm tear at the left seam” is stronger than “customer destroyed the product.” The first statement is observable. The second attributes intent that the photograph cannot establish.'],
  ['Frame 6: record function or comparison when relevant', 'For functional products, document the test state, connected accessories and result. A still image may show a display code, power state or measured output; when continuous video is permitted in another evidence workflow, preserve that separate record too. For a wrong-item return, use the sixth frame to compare model identifiers, serial information or defining attributes against the order record.', 'Never stage a result the team cannot reproduce. Keep the test method, tool and pass/fail definition in the inspection log. The reviewer should be able to understand what was tested and what was not.'],
  ['Name files so the evidence can survive handoffs', 'Use a deterministic pattern such as ORDER-1234_2026-10-20T1412_F05-ISSUE_ORIGINAL.jpg. Include an order-safe reference, capture time, frame number, purpose and version. Avoid customer names, vague names such as IMG-final2, or filenames that overwrite earlier evidence. Store the originals in a controlled order folder and generate separate derivatives only when required for file size or annotation.', 'Hashing, immutable storage or access logs can strengthen provenance where risk justifies them, but the basic discipline comes first: no silent replacement, no mixed orders, no unclear versions, and no evidence living only on one employee’s phone.'],
  ['Connect the photo set to the selected grade', 'After capture, the inspector selects the condition grade and writes a short factual explanation that points to the relevant frames. Original should mean the returned condition supports that grade under the current interface. Minor damage / Functional should describe the damage while confirming function. Severe damage / Unsellable should identify the condition affecting resale. Buyer shipped the wrong item should connect the received item to the expected SKU and the mismatch.', 'The grade, comment and photos must tell one story. If they conflict, pause. A second reviewer should either agree, request a missing frame or change the grade before submission.'],
  ['Submit within the actual deadline and preserve readback', 'The current requirements say sellers generally have four business days to review return and refund requests, while certain lower-value inspection decisions may require action within two business days. Seller Center controls the specific case. Record the displayed deadline, the selected action, the uploaded filenames, the additional comment and the confirmation after submission.', 'A folder of prepared images is not a submitted response. A clicked button is not a final outcome. Preserve the Seller Center readback and continue tracking any appeal, dispute or financial result until it reaches a terminal state.'],
  ['Use the photo failures to repair operations', 'Review five cases weekly. Track missing identifiers, unreadable labels, absent accessories, inconsistent lighting, unsupported grades, late inspection and files that cannot be tied to a case. Then repair the first repeated failure in receiving, warehouse layout, training or data capture. The goal is not to create more photos. It is to make the next decision faster, more consistent and easier to defend.', 'The smallest useful action today is to run the six-frame protocol on five recent returns and ask a second reviewer to grade them independently. Any disagreement identifies the next operational repair.'],
];
const zhSections = [
  ['先定义决策，再拿起相机', '退货验货不是仓库随手拍照，而是一份决策记录。验货后，团队可能全额退款、带证据拒绝请求，或对 speedy refund 提起申诉。当前 Returns Grading Framework 的等级包括 Original、Minor damage / Functional、Severe damage / Unsellable，以及 Buyer shipped the wrong item。照片要让没有在现场的复核人看懂：为什么收到的这件商品符合所选等级。', '所以镜头顺序要围绕未来的读者设计。对方需要身份、环境、状态和后果。一张漂亮的缺陷特写如果没有订单关联，可能无法使用；一张退货标签如果没有商品，也只能证明收到包裹，不能证明商品状态。六张互相关联的图，比六个随机角度更强。'],
  ['第 1 张：先建立包裹与订单身份', '在拆包或移动内容物之前，拍清退货标签或其他允许使用的订单级标识。订单号、退货追踪号或二维码应当可读。画面不需要的个人信息不要额外纳入。第一张图负责把实体包裹与 Seller Center 案件连接起来。', '验货台账还要记录谁收货、何时收货、在哪里验货。身份信息不能只存在照片里。如果标签破损或无法读取，应记录这一状态，并使用最可靠的替代关联方式，不能猜。'],
  ['第 2 张：保留外箱原始状态', '在破坏封口前拍摄包裹外观。官方售后证据指南建议，连续退货拆箱记录要显示包裹六个面。面对最多六张图片的提交限制，可以制作一张清晰的外箱记录图，让箱体、封口、凹陷、穿孔、浸水、二次胶带和其他运输痕迹都能被定位。', '不要裁得太近，导致尺度和方向消失。如果损伤发生在某个角，复核人仍应看得出具体是哪一个角。这样才能区分到仓时已经存在的问题，与收货后处理造成的问题。'],
  ['第 3 张：一次展示全部退回内容物', '把商品、配件、部件、赠品、说明书和原包装整理在同一画面中，再与订单内容清单和必要时的原始出库证据对照。缺件争议需要同时证明实际退回了什么，以及本来应该退回什么。完整内容物图提供这一步比较所需的上下文。', '不要从另一件商品中拿配件补齐画面。如果必须使用完整套装做参考，要单独拍摄并明确标记为参考，绝不能把它当成当前退货的内容物。'],
  ['第 4 张：拍全貌，再拍缺陷', '用中性背景和足够光线拍摄商品全貌，让颜色、形状、吊牌、封口与整体状态可见。这是后续所有特写的上下文图，能帮助复核人确认缺陷属于这件退货商品，并判断问题是局部还是广泛存在。', '同类 SKU 尽量使用固定背景、固定距离与固定方向，减少无意的歧义。不能使用滤镜、美颜或生成式填充。证据需要忠实保留商品状态，而不是让商品更好看。'],
  ['第 5 张：用尺度记录准确问题', '靠近拍清损伤、污染、磨损、拆除吊牌、缺少封口、型号错误、序列号不符或其他状态。尺寸重要时放入中性尺度参照；位置重要时保留一部分较宽的上下文边缘。对焦、曝光与颜色必须准确到足以让另一位人员检查事实。', '文字只描述图片可以证明的内容。“左侧缝线有 22 mm 裂口”比“买家故意损坏商品”更强。前者是可观察事实，后者是在推断意图，而照片无法证明意图。'],
  ['第 6 张：必要时记录功能或对照', '对功能型商品，记录测试状态、连接配件和结果。静态图可以显示报错码、电源状态或测量结果；如果另一条证据流程允许连续视频，也要单独保留。对于买家退错商品，第六张可以用来对比型号、序列信息或定义性属性与订单记录。', '不能摆拍一个团队无法复现的结果。验货台账要保留测试方法、工具和通过或失败标准，让复核人知道测了什么，也知道没有测什么。'],
  ['用文件名让证据经得起交接', '使用确定性命名，例如 ORDER-1234_2026-10-20T1412_F05-ISSUE_ORIGINAL.jpg，包含安全的订单引用、采集时间、镜头编号、用途和版本。不要使用客户姓名，也不要使用 IMG-final2 这类模糊名称，更不能覆盖旧文件。原图保存在受控订单文件夹中，只有在压缩或标注确有需要时才生成单独衍生版本。', '在风险较高的业务中，哈希、不可变存储或访问日志可以增强来源证明；但基础纪律更重要：不能静默替换、不能混入其他订单、不能版本不清，也不能让证据只留在某位员工手机里。'],
  ['把照片组连接到所选等级', '拍摄完成后，验货员选择状态等级，并写一段简短事实说明，指向相关镜头。Original 要符合当前界面对原始状态的要求；Minor damage / Functional 要描述损伤并说明功能状态；Severe damage / Unsellable 要指出影响二次销售的具体情况；Buyer shipped the wrong item 要把收到的商品、预期 SKU 与不一致点连接起来。', '等级、备注与照片必须讲同一个故事。如果三者冲突，就先暂停。第二位复核人应当同意、要求补镜头，或在提交前调整等级。'],
  ['按案件真实截止时间提交，并保存回读', '当前要求通常给卖家四个工作日审查退货退款请求，某些较低金额的验货决策可能只有两个工作日。具体案件仍以 Seller Center 显示为准。团队要记录界面截止时间、所选动作、上传文件名、补充说明与提交确认。', '准备好图片文件夹不等于已经回复；点击按钮也不等于案件完成。必须保存 Seller Center 回读，并继续追踪后续申诉、争议或资金结果，直到真正进入终态。'],
  ['用拍摄失败反向修复运营', '每周抽查五个案件，记录身份缺失、标签不可读、配件未铺全、灯光不一致、等级无支撑、验货超时，以及文件无法关联案件等问题。然后修复收货、仓库布局、培训或数据采集环节里重复最多的第一个失败点。目标不是制造更多照片，而是让下一次决策更快、更一致、更容易被复核。', '今天最小可用的下一步，是用最近五笔退货执行六张图协议，再让第二位复核人独立分级。所有分歧都会直接指出下一项运营修复。'],
];

function article(zh) {
  const sections = zh ? zhSections : enSections;
  const related = zh ? [
    ['拒绝退货前的证据', '用证据与 ISRR 风险审查售后拒绝。', '/blog/tiktok-shop-return-rejection-evidence-isrr-risk?lang=zh'],
    ['售后自动化边界', '用金额与证据阈值控制自动动作。', '/blog/tiktok-shop-aftersales-automation-approval-rules?lang=zh'],
    ['七天拒付证据包', '在拒付时钟启动前连接订单证据。', '/blog/tiktok-shop-chargeback-seven-day-evidence-pack?lang=zh'],
  ] : [
    ['Return rejection evidence', 'Review return decisions through evidence and ISRR risk.', '/blog/tiktok-shop-return-rejection-evidence-isrr-risk'],
    ['Aftersales automation controls', 'Gate automated actions with amount and evidence thresholds.', '/blog/tiktok-shop-aftersales-automation-approval-rules'],
    ['Seven-day chargeback pack', 'Connect order evidence before the chargeback clock begins.', '/blog/tiktok-shop-chargeback-seven-day-evidence-pack'],
  ];
  const sourceNote = zh
    ? `本原创 WEM 运营框架基于 2026 年 10 月 20 日完整读取并重新验证的 TikTok Shop 美国站官方资料：<a href="${sources[0]}">Requirements for Managing Returns, Refunds, and Replacements</a> 与 <a href="${sources[1]}">After-Sales Evidence Guide for Appeals and Disputes</a>。六张图协议、文件命名、二次复核与周度失败复盘属于 WEM 运营设计，不是平台保证或法律意见。规则、金额、时限、资格和界面会变化，执行前请核对 Seller Center 当前案件与官方页面。`
    : `This original WEM operating framework draws on complete current TikTok Shop U.S. material read and revalidated October 20, 2026: <a href="${sources[0]}">Requirements for Managing Returns, Refunds, and Replacements</a> and the <a href="${sources[1]}">After-Sales Evidence Guide for Appeals and Disputes</a>. The six-frame protocol, file naming, second review and weekly failure review are WEM operating design, not a platform guarantee or legal advice. Rules, values, deadlines, eligibility and interface paths can change; verify the live Seller Center case and official pages before acting.`;
  const direct = zh
    ? '直接结论：按未来可能申诉的标准拍摄每一笔退货。先证明包裹和订单身份，再记录外箱、全部内容物、商品全貌、准确问题与必要的功能结果。最多六张图不是让团队随机拍六个角度，而是让六个镜头共同支撑一个可复核的状态等级。'
    : 'Direct answer: photograph every return as if the decision may later need to be defended. Establish parcel and order identity first, then preserve the exterior, complete contents, whole item, exact issue and any relevant functional result. The six-image limit is not an invitation to take six random angles. It is a compact evidence sequence that supports one reviewable condition grade.';
  return `<p class="eyebrow">${zh ? 'TIKTOK SHOP 美国站 · 退货验货证据' : 'TIKTOK SHOP U.S. · RETURN INSPECTION EVIDENCE'}</p><h1>${zh ? titleZh : titleEn}</h1><img class="hero" src="/blog/hero-${slug}-${zh ? 'zh' : 'en'}-v1.png" alt="${zh ? titleZh : titleEn}"><p class="byline">${zh ? 'WE Marketing Team · 2026 年 10 月 20 日 · 16 分钟阅读' : 'WE Marketing Team · Oct 20, 2026 · 16 min read'}</p><p><strong>${zh ? '直接结论：' : 'Direct answer:'}</strong> ${direct.replace(/^直接结论：|^Direct answer: /, '')}</p>${sections.map((section, index) => `<h2>${section[0]}</h2><p>${section[1]}</p><p>${section[2]}</p>${index === 5 ? `<img src="/blog/q4-24-evidence/frames-${zh ? 'zh' : 'en'}-v1.svg" alt="${zh ? '六张图退货验货协议' : 'Six-frame return inspection protocol'}">` : ''}${index === 6 ? `<img src="/blog/q4-24-evidence/naming-${zh ? 'zh' : 'en'}-v1.svg" alt="${zh ? '退货证据文件命名规则' : 'Return evidence file naming convention'}">` : ''}`).join('')}<h2>${zh ? '来源说明' : 'Source notes'}</h2><p>${sourceNote}</p><h2>${zh ? '相关 WEM 指南' : 'Related WEM guides'}</h2><section class="related-grid">${related.map(([label, description, href]) => `<a href="${href}"><strong>${label}</strong><span>${description}</span></a>`).join('')}</section>${faq(zh ? faqZh : faqEn, zh)}`;
}

const en = article(false);
const zh = article(true);
const prior = await fs.readFile(path.join(base, 'blog/tiktok-shop-chargeback-seven-day-evidence-pack.html'), 'utf8');
const style = prior.match(/<style>[\s\S]*?<\/style>/)[0];
const graph = { '@context': 'https://schema.org', '@graph': [
  ['en-US', titleEn, 'A six-frame protocol for order-linked TikTok Shop return inspection evidence.', url, faqEn, 'en'],
  ['zh-CN', titleZh, '用六张图记录可关联、可复核的 TikTok Shop 退货验货证据。', `${url}?lang=zh`, faqZh, 'zh'],
].flatMap(([language, headline, description, page, faqs, imageLang]) => [
  { '@type': 'BlogPosting', '@id': `${page}#article`, headline, description, inLanguage: language, datePublished: date, dateModified: date, mainEntityOfPage: { '@id': page }, image: { '@type': 'ImageObject', url: `https://www.weglobalmarketing.com/blog/hero-${slug}-${imageLang}-v1.png` }, citation: sources },
  { '@type': 'FAQPage', '@id': `${page}#faq`, inLanguage: language, mainEntity: faqs.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) },
]) };
const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><script>document.documentElement.dataset.lang=new URLSearchParams(location.search).get('lang')==='zh'?'zh':'en';document.documentElement.lang=document.documentElement.dataset.lang==='zh'?'zh-CN':'en'</script><title>${titleEn} | WE Marketing</title><meta name="description" content="A six-frame protocol for order-linked TikTok Shop return inspection evidence."><link rel="canonical" href="${url}"><link rel="alternate" hreflang="en-US" href="${url}"><link rel="alternate" hreflang="zh-CN" href="${url}?lang=zh"><link rel="alternate" hreflang="x-default" href="${url}"><script type="application/ld+json">${JSON.stringify(graph)}</script>${style}<script>if(new URLSearchParams(location.search).get('lang')==='zh'){document.title='${titleZh} | WE Marketing';document.querySelector('meta[name=description]').content='用六张图记录可关联、可复核的 TikTok Shop 退货验货证据。';document.querySelector('link[rel=canonical]').href='${url}?lang=zh'}</script></head><body><nav class="nav"><a class="logo" href="/"><img src="/assets/we-logo.png" alt="WE Marketing"></a><span class="spacer"></span><a href="/">OUR SERVICES</a><a href="/showcase">OUR WORK</a><a href="/blog">BLOG</a><span class="switch"><a class="en" href="${url}">EN</a><a class="zh" href="${url}?lang=zh">中文</a></span></nav><main class="wrap"><div class="tools"><a class="en" href="/blog">← BLOG</a><a class="zh" href="/blog?lang=zh">← 博客</a></div><article lang="en">${en}</article><article lang="zh-CN">${zh}</article></main><section class="cta"><h2 class="en">READY TO TALK<br>TO WEM?</h2><h2 class="zh">准备好和 WEM<br>一起把计划落地吗？</h2><p class="en">Turn return inspection into evidence-led, reviewable operations.</p><p class="zh">把退货验货变成有证据、可复核的运营流程。</p><a class="en" href="https://scheduler.zoom.us/wendylin001">BOOK A DISCOVERY CALL</a><a class="zh" href="https://scheduler.zoom.us/wendylin001">预约咨询</a></section><footer class="footer"><img src="/assets/we-logo.png" alt="WE Marketing"><p class="en">WE Marketing connects strategy, creator operations, paid growth and TikTok Shop execution.</p><p class="zh">WE Marketing 帮助品牌连接策略、达人运营、付费增长与 TikTok Shop 执行。</p><p>© 2026 WE Marketing. All rights reserved.</p></footer></body></html>`;
await fs.writeFile(path.join(out, 'blog', `${slug}.html`), html);

let list = await fs.readFile(path.join(base, 'BlogList.jsx'), 'utf8');
const row = { slug, tags: ['tiktok-shop', 'shop-operations'], cat: { en: 'TIKTOK SHOP U.S. · RETURN EVIDENCE', zh: 'TIKTOK SHOP 美国站 · 退货证据' }, title: { en: titleEn, zh: titleZh }, excerpt: { en: 'Use six connected frames to preserve return identity, condition and decision evidence.', zh: '用六个互相关联的镜头，保留退货身份、状态与决策证据。' }, date: { en: 'Oct 20, 2026', zh: '2026 年 10 月 20 日' }, read: { en: '16 min read', zh: '16 分钟阅读' }, image: { en: `hero-${slug}-en-v1.png`, zh: `hero-${slug}-zh-v1.png` } };
list = list.replace('const BLOG_POSTS = [', `const BLOG_POSTS = [\n${JSON.stringify(row).replace(/"([A-Za-z_$][\w$]*)":/g, '$1:')},`);
await fs.writeFile(path.join(out, 'BlogList.jsx'), list);
const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(await fs.readFile(path.join(root, '.cache/babel-standalone-7.29.0.min.js'), 'utf8'), sandbox);
const compiled = `${sandbox.Babel.transform(list, { presets: [['react', { runtime: 'classic' }]], compact: true, minified: true, sourceType: 'script' }).code}\n`;
await fs.writeFile(path.join(out, 'BlogList.compiled.js'), compiled);
const index = await fs.readFile(path.join(base, 'blog.html'), 'utf8');
await fs.writeFile(path.join(out, 'blog.html'), index.replace(/BlogList\.compiled\.js\?v=[^"']+/, `BlogList.compiled.js?v=${hash(compiled).slice(0, 12)}`));
const sitemap = await fs.readFile(path.join(base, 'sitemap.xml'), 'utf8');
await fs.writeFile(path.join(out, 'sitemap.xml'), sitemap.replace('</urlset>', `<url><loc>${url}</loc><lastmod>${date}</lastmod></url><url><loc>${url}?lang=zh</loc><lastmod>${date}</lastmod></url></urlset>`));
const llms = await fs.readFile(path.join(base, 'llms.txt'), 'utf8');
await fs.writeFile(path.join(out, 'llms.txt'), `${llms}\n- ${titleEn}: ${url}\n  - 中文：${url}?lang=zh\n`);
const report = { slug, date, enWords: (en.replace(/<[^>]+>/g, ' ').match(/[A-Za-z0-9’'-]+/g) || []).length, zhChars: (zh.match(/[\u3400-\u9fff]/g) || []).length, files: (await Array.fromAsync(fs.glob('**/*', { cwd: out }))).length, sourceBytes: Object.fromEntries(await Promise.all(['returns-refunds-replacements.html', 'aftersales-evidence-guide.html'].map(async (file) => [file, (await fs.stat(path.join(sourceOut, file))).size]))) };
await fs.writeFile(path.join(root, 'outputs/2026-10-20-q4-24-build-report.json'), `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify({ out, report }, null, 2));
