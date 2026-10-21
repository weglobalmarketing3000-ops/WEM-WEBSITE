import fs from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const baseline = path.join(root, 'outputs/2026-10-21-current-live-baseline/ui_kits/website/ui_kits/website');
const patch = path.join(root, 'outputs/patches/2026-10-21-q4-25-evidence-ledger');
const slug = 'tiktok-shop-order-to-appeal-evidence-ledger';
const existing = [
  'BlogList.compiled.js', 'BlogList.jsx', 'assets/we-logo.png', 'blog.html', 'llms.txt', 'sitemap.xml',
  `blog/${slug}.html`,
  `blog/hero-${slug}-en-v1.png`, `blog/hero-${slug}-zh-v1.png`,
  `blog/optimized/hero-${slug}-en-v1.jpg`, `blog/optimized/hero-${slug}-zh-v1.jpg`,
  'blog/q4-25-evidence/ledger-en-v1.svg', 'blog/q4-25-evidence/ledger-zh-v1.svg',
  `blog/thumbs/hero-${slug}-en-v1.jpg`, `blog/thumbs/hero-${slug}-zh-v1.jpg`,
];

await fs.rm(patch, { recursive: true, force: true });
for (const relative of existing) {
  const target = path.join(patch, relative);
  await fs.mkdir(path.dirname(target), { recursive: true });
  await fs.copyFile(path.join(baseline, relative), target);
}

const replace = (text, from, to, label) => {
  if (!text.includes(from)) throw new Error(`Missing replacement anchor: ${label}`);
  return text.replace(from, to);
};

const contentUrl = 'https://seller-us.tiktok.com/university/essay?knowledge_id=6837891779151617&lang=en';
const termsUrl = 'https://seller-us.tiktok.com/university/essay?knowledge_id=1331308753078058&lang=en';
const fulfillmentUrl = 'https://seller-us.tiktok.com/university/essay?knowledge_id=3995852763301633';
const returnsUrl = 'https://seller-us.tiktok.com/university/essay?knowledge_id=984433248438058';
const chargebackUrl = 'https://seller-us.tiktok.com/university/essay?knowledge_id=7989055607670570';
const enforcementUrl = 'https://seller-us.tiktok.com/university/essay?knowledge_id=2380042836166443';

const articlePath = path.join(patch, `blog/${slug}.html`);
let html = await fs.readFile(articlePath, 'utf8');
html = replace(html, 'content="A six-frame protocol for order-linked TikTok Shop return inspection evidence."', 'content="A cross-functional TikTok Shop evidence ledger connecting content, orders, fulfillment, returns, chargebacks and appeals."', 'English meta description');
html = replace(html, "content='用六张图记录可关联、可复核的 TikTok Shop 退货验货证据。'", "content='建立贯穿内容、订单、履约、退货、拒付与申诉的 TikTok Shop 全链路证据台账。'", 'Chinese meta description');
for (let i = 0; i < 2; i += 1) {
  html = replace(html, `\"citation\":[\"${fulfillmentUrl}\"`, `\"citation\":[\"${contentUrl}\",\"${termsUrl}\",\"${fulfillmentUrl}\"`, `schema citations ${i + 1}`);
}

const enPolicy = `<h2>2. Connect content promises and seller duties to the order</h2><p>The evidence chain begins before fulfillment. TikTok Shop's Content Policy applies to the promoted content shoppers see, so preserve the content identifier, published version, product claim, offer terms and landing product at the time the order was influenced. A deleted post or revised product page should not erase the version that shaped the buyer's expectation. Record the controlled source and retrieval time without copying unnecessary customer data.</p><p>Seller Terms define the account-level responsibility boundary. The ledger should therefore show which seller entity, store, operator and approved system owned each action. It should also distinguish a buyer-facing promise from a later operational interpretation. This is especially important when content, listing, warehouse and aftersales teams use different tools: one event key should connect them without pretending they made the same decision.</p><blockquote><p><strong>Control rule:</strong> preserve what was actually displayed or submitted, who owned it, and the resulting system state. A draft, a chat approval and a platform-confirmed action are three different states.</p></blockquote>`;
const zhPolicy = `<h2>2. 把内容承诺和卖家责任连接到订单</h2><p>证据链从履约之前就开始。TikTok Shop Content Policy 适用于消费者看到的推广内容，因此应保存影响该订单的内容标识、发布版本、商品主张、优惠条件和落地商品。帖子删除或商品页改版后，也不能抹掉当时塑造买家预期的版本。记录受控来源与读取时间即可，不要复制不必要的客户数据。</p><p>Seller Terms 划定账户层面的责任边界。台账应显示每个动作由哪一个卖家主体、店铺、运营人员和获准系统负责，并把面向买家的承诺与后续运营解释分开。内容、商品页、仓库和售后团队使用不同工具时尤其如此：用同一个事件键连接各环节，但不要假装它们做的是同一个决定。</p><blockquote><p><strong>控制规则：</strong>保留实际展示或提交的内容、负责人以及系统结果。草稿、聊天中的批准和平台确认的动作是三个不同状态。</p></blockquote>`;
html = replace(html, '<h2>2. Record fulfillment as observable handoffs</h2>', `${enPolicy}<h2>3. Record fulfillment as observable handoffs</h2>`, 'English policy section');
html = replace(html, '<h2>2. 把履约写成可观察的交接</h2>', `${zhPolicy}<h2>3. 把履约写成可观察的交接</h2>`, 'Chinese policy section');

for (const [from, to] of [['<h2>3. Add the aftersales', '<h2>4. Add the aftersales'], ['<h2>4. Treat a chargeback', '<h2>5. Treat a chargeback'], ['<h2>5. Keep enforcement', '<h2>6. Keep enforcement'], ['<h2>6. Define fields', '<h2>7. Define fields'], ['<h2>7. Review exceptions', '<h2>8. Review exceptions'], ['<h2>8. Make the next review', '<h2>9. Make the next review'], ['<h2>9. Make retention', '<h2>10. Make retention'], ['<h2>3. 记录售后', '<h2>4. 记录售后'], ['<h2>4. 把拒付', '<h2>5. 把拒付'], ['<h2>5. 把处罚', '<h2>6. 把处罚'], ['<h2>6. 在需要之前', '<h2>7. 在需要之前'], ['<h2>7. 每周复盘', '<h2>8. 每周复盘'], ['<h2>8. 让下一位', '<h2>9. 让下一位'], ['<h2>9. 让保留', '<h2>10. 让保留'], ['<h2>10. 从一个', '<h2>11. 从一个']]) html = html.replace(from, to);

html = replace(html, '<p>Set one controlled storage location per evidence type. A document sent through chat may be useful for collaboration, but the ledger should still point to the controlled original and say which version was submitted.</p>', '<p>Set one controlled storage location per evidence type. A document sent through chat may be useful for collaboration, but the ledger should still point to the controlled original and say which version was submitted.</p><figure><img src="/blog/q4-25-evidence/handoff-en-v1.svg" alt="Evidence handoff from content through appeal"><figcaption>One event key connects owners and proof while every system readback remains distinct.</figcaption></figure><p>Use controlled vocabulary for status: candidate, draft, approved, submitted, accepted, rejected and verified complete must not collapse into one generic “done” field. Require a timestamp and source-system readback whenever a state changes. This gives managers a reliable queue and prevents a prepared file from being counted as a submitted appeal.</p>', 'English second visual');
html = replace(html, '<p>每类材料设置一个受控存放位置。聊天里传过的文件可以方便协作，但台账仍应指向受控原件，并明确哪一个版本实际提交。</p>', '<p>每类材料设置一个受控存放位置。聊天里传过的文件可以方便协作，但台账仍应指向受控原件，并明确哪一个版本实际提交。</p><figure><img src="/blog/q4-25-evidence/handoff-zh-v1.svg" alt="从内容到申诉的证据交接"><figcaption>同一个事件键连接负责人和证据，但各系统读回必须分别保留。</figcaption></figure><p>状态词也要受控：候选、草稿、已批准、已提交、已接受、已拒绝和已验证完成，不能都合并成“完成”。每次状态变化都必须有时间和来源系统读回，管理者才能看到真实队列，也不会把准备好的文件误算成已提交申诉。</p>', 'Chinese second visual');

const enSourceOld = `This WEM operating framework draws on complete current TikTok Shop U.S. material read and revalidated October 21, 2026: <a href="${fulfillmentUrl}">Fulfillment Policy</a>, <a href="${returnsUrl}">Requirements for Managing Returns, Refunds, and Replacements</a>, <a href="${chargebackUrl}">Chargeback Policy</a> and <a href="${enforcementUrl}">Seller Enforcement Policy</a>.`;
const enSourceNew = `This WEM operating framework draws on complete current TikTok Shop U.S. material read and revalidated October 21, 2026: <a href="${contentUrl}">Content Policy</a>, <a href="${termsUrl}">TikTok Shop Seller Terms of Service</a>, <a href="${fulfillmentUrl}">Fulfillment Policy</a>, <a href="${returnsUrl}">Requirements for Managing Returns, Refunds, and Replacements</a>, <a href="${chargebackUrl}">Chargeback Policy</a> and <a href="${enforcementUrl}">Seller Enforcement Policy</a>.`;
html = replace(html, enSourceOld, enSourceNew, 'English source notes');
const zhSourceOld = `本文基于 2026 年 10 月 21 日完整读取并复核的 TikTok Shop 美国站官方材料：<a href="${fulfillmentUrl}">Fulfillment Policy</a>、<a href="${returnsUrl}">Requirements for Managing Returns, Refunds, and Replacements</a>、<a href="${chargebackUrl}">Chargeback Policy</a> 与 <a href="${enforcementUrl}">Seller Enforcement Policy</a>。`;
const zhSourceNew = `本文基于 2026 年 10 月 21 日完整读取并复核的 TikTok Shop 美国站官方材料：<a href="${contentUrl}">Content Policy</a>、<a href="${termsUrl}">TikTok Shop Seller Terms of Service</a>、<a href="${fulfillmentUrl}">Fulfillment Policy</a>、<a href="${returnsUrl}">Requirements for Managing Returns, Refunds, and Replacements</a>、<a href="${chargebackUrl}">Chargeback Policy</a> 与 <a href="${enforcementUrl}">Seller Enforcement Policy</a>。`;
html = replace(html, zhSourceOld, zhSourceNew, 'Chinese source notes');

html = replace(html, '</span></a></section><section class="faq"><h2>Frequently asked questions</h2>', '</span></a><a href="/blog/tiktok-shop-content-policy-appeal-evidence"><strong>Content-policy appeal evidence</strong><span>Connect the published claim, review reason and submission readback.</span></a></section><section class="faq"><h2>Frequently asked questions</h2>', 'English related guide');
html = replace(html, '</span></a></section><section class="faq"><h2>常见问题</h2>', '</span></a><a href="/blog/tiktok-shop-content-policy-appeal-evidence?lang=zh"><strong>内容政策申诉证据</strong><span>连接已发布主张、审核原因与提交读回。</span></a></section><section class="faq"><h2>常见问题</h2>', 'Chinese related guide');
const enFaq = '<div class="faq-item"><h3>How should content evidence connect to an order?</h3><p>Store the content identifier, published version, product or offer shown, retrieval time and the event key that links it to the order without copying unnecessary customer data.</p></div>';
const zhFaq = '<div class="faq-item"><h3>内容证据应该怎样关联订单？</h3><p>保存内容标识、发布版本、展示的商品或优惠、读取时间，以及连接订单的事件键，但不要复制不必要的客户数据。</p></div>';
html = replace(html, '</p></div></section></article><article lang="zh-CN">', `</p></div>${enFaq}</section></article><article lang="zh-CN">`, 'English FAQ');
html = replace(html, '</p></div></section></article></main><section class="cta">', `</p></div>${zhFaq}</section></article></main><section class="cta">`, 'Chinese FAQ');

const schemaEnOld = '{"@type":"Question","name":"What is the smallest next action?","acceptedAnswer":{"@type":"Answer","text":"Create the minimum fields for five recent orders and ask another operator to retrieve one case."}}]';
const schemaEnNew = `${schemaEnOld.slice(0, -1)},{"@type":"Question","name":"How should content evidence connect to an order?","acceptedAnswer":{"@type":"Answer","text":"Store the content identifier, published version, product or offer shown, retrieval time and the event key that links it to the order without copying unnecessary customer data."}}]`;
html = replace(html, schemaEnOld, schemaEnNew, 'English FAQ schema');
const schemaZhOld = '{"@type":"Question","name":"最小下一步是什么？","acceptedAnswer":{"@type":"Answer","text":"为最近五笔订单建立最小字段，并请另一位运营同事独立取回其中一案。"}}]';
const schemaZhNew = `${schemaZhOld.slice(0, -1)},{"@type":"Question","name":"内容证据应该怎样关联订单？","acceptedAnswer":{"@type":"Answer","text":"保存内容标识、发布版本、展示的商品或优惠、读取时间，以及连接订单的事件键，但不要复制不必要的客户数据。"}}]`;
html = replace(html, schemaZhOld, schemaZhNew, 'Chinese FAQ schema');
html = html.replace('Turn return inspection into evidence-led, reviewable operations.', 'Connect content, fulfillment, aftersales and appeals through one reviewable evidence system.').replace('把退货验货变成有证据、可复核的运营流程。', '用一套可复核的证据系统连接内容、履约、售后与申诉。');
await fs.writeFile(articlePath, html);

const svg = (zh = false) => `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="620" viewBox="0 0 1200 620"><rect width="1200" height="620" rx="36" fill="#f1efff"/><text x="70" y="92" font-family="Arial,sans-serif" font-size="24" font-weight="700" fill="#1746b8">${zh ? '证据交接链' : 'EVIDENCE HANDOFF CHAIN'}</text><text x="70" y="145" font-family="Arial,sans-serif" font-size="42" font-weight="800" fill="#171717">${zh ? '一个事件键，六个可复核节点' : 'One event key, six reviewable nodes'}</text>${(zh ? ['内容版本','订单事实','履约读回','售后决定','拒付材料','申诉终态'] : ['CONTENT','ORDER','FULFILLMENT','AFTERSALES','CHARGEBACK','APPEAL']).map((label, i) => `<g transform="translate(${70 + (i % 3) * 365},${205 + Math.floor(i / 3) * 165})"><rect width="315" height="118" rx="22" fill="#fff" stroke="#d8d2ef" stroke-width="2"/><circle cx="42" cy="42" r="22" fill="${i % 2 ? '#ed168c' : '#1746b8'}"/><text x="42" y="50" text-anchor="middle" font-family="Arial,sans-serif" font-size="20" font-weight="800" fill="#fff">${i + 1}</text><text x="80" y="49" font-family="Arial,sans-serif" font-size="22" font-weight="800" fill="#171717">${label}</text><text x="28" y="88" font-family="Arial,sans-serif" font-size="16" fill="#59535f">${zh ? '负责人 · 时间 · 原件 · 系统读回' : 'owner · time · original · readback'}</text></g>`).join('')}<path d="M385 264h50M750 264h50M385 429h50M750 429h50" stroke="#7864df" stroke-width="7" stroke-linecap="round"/><text x="1130" y="585" text-anchor="end" font-family="Arial,sans-serif" font-size="16" font-weight="700" fill="#1746b8">WE MARKETING</text></svg>`;
await fs.writeFile(path.join(patch, 'blog/q4-25-evidence/handoff-en-v1.svg'), svg(false));
await fs.writeFile(path.join(patch, 'blog/q4-25-evidence/handoff-zh-v1.svg'), svg(true));

console.log(JSON.stringify({ patch, files: (await fs.readdir(patch, { recursive: true })).filter((name) => !name.endsWith('/')).length }, null, 2));
