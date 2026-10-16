import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import vm from 'node:vm';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const sharp = require('/Users/wendylin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');
const root = path.resolve(import.meta.dirname, '..');
const base = path.join(root, 'outputs/2026-10-16-current-live-baseline/ui_kits/website');
const out = path.join(root, 'outputs/patches/2026-10-16-q4-20-bfcm-holiday-returns');
const slug = 'tiktok-shop-bfcm-2026-holiday-return-window-liability';
const date = '2026-10-16';
const url = `https://www.weglobalmarketing.com/blog/${slug}`;
const enTitle = 'TikTok Shop BFCM 2026 Holiday Returns: Plan the Liability Before November 11';
const zhTitle = 'TikTok Shop 2026 BFCM 节日退货：11 月 11 日前先把责任算清楚';
const enDescription = 'Map the BFCM holiday return window, SKU exceptions, cost ownership and reserve fields before eligible TikTok Shop orders begin on November 11.';
const zhDescription = '11 月 11 日前核对 BFCM 节日退货窗口、SKU 例外、成本责任与准备金字段，避免把交付当作交易终点。';
const sources = {
  bfcm: 'https://seller-us.tiktok.com/university/essay?content_id=2786070166210347&course_type=1&from=new-and-updated&identity=1&knowledge_id=26854147802894&learning_id=26854147802894&module_id=latest_policies&role=seller',
  returns: 'https://seller-us.tiktok.com/university/essay?knowledge_id=984433248438058&lang=en',
  customer: 'https://seller-us.tiktok.com/university/essay?knowledge_id=3253210454181634',
  customize: 'https://seller-us.tiktok.com/university/essay?course_type=1&knowledge_id=4875447742662443',
  auction: 'https://seller-us.tiktok.com/university/essay?knowledge_id=5425223583352594'
};
const sha = value => crypto.createHash('sha256').update(value).digest('hex');

await fs.rm(out, { recursive: true, force: true });
for (const directory of ['assets', 'blog', 'blog/optimized', 'blog/thumbs', 'blog/q4-20-returns']) await fs.mkdir(path.join(out, directory), { recursive: true });
await fs.copyFile(path.join(base, 'assets/we-logo.png'), path.join(out, 'assets/we-logo.png'));
const logo = (await fs.readFile(path.join(out, 'assets/we-logo.png'))).toString('base64');

function cover(zh) {
  const lines = zh ? ['BFCM 退货', '延长到 2 月 10 日', '提前算清责任'] : ['BFCM RETURNS', 'STAY OPEN', 'UNTIL FEB 10'];
  const sizes = zh ? [65, 62, 64] : [61, 66, 66];
  const ys = [220, 300, 380];
  return `<svg width="1792" height="896" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bg" x2="1"><stop stop-color="#fffdf8"/><stop offset="1" stop-color="#ece7ff"/></linearGradient></defs><rect width="1792" height="896" fill="url(#bg)"/><path d="M1080 0h712v896h-795c170-245 205-640 83-896z" fill="#f1edff"/><rect x="82" y="78" width="525" height="50" rx="25" fill="#e8efff"/><text x="110" y="111" font-family="Arial" font-size="21" font-weight="800" fill="#1746b8">TIKTOK SHOP · BFCM RETURNS</text>${lines.map((line,i)=>`<text x="82" y="${ys[i]}" font-family="Arial Narrow,Arial,PingFang SC" font-size="${sizes[i]}" font-weight="900" fill="${i===1?'#245bd7':'#17151a'}">${line}</text>`).join('')}<rect x="84" y="456" width="88" height="6" rx="3" fill="#ed168c"/><text x="82" y="520" font-family="Arial,PingFang SC" font-size="25" fill="#4f4a55">${zh?'11 月 11 日前完成准备':'PLAN LIABILITY BEFORE NOV 11'}</text><image href="data:image/png;base64,${logo}" x="82" y="700" width="145" height="105"/></svg>`;
}

function calendarVisual(zh) {
  const title = zh ? 'BFCM 退货责任日历' : 'BFCM return-liability calendar';
  const rows = zh ? [
    ['9 月 20 日','资格窗口参考起点','先确认商品与活动资格'],
    ['11 月 11 日 16:00 PT','节日退货窗口订单开始','责任台账正式启用'],
    ['12 月 31 日 23:59 PT','适用销售窗口结束','锁定订单批次'],
    ['1 月','退货与退款持续发生','每周更新准备金'],
    ['2 月 10 日','符合条件订单最晚申请退货','案件结算后再关闭责任']
  ] : [
    ['SEP 20','Campaign eligibility reference begins','Confirm item and campaign eligibility'],
    ['NOV 11 · 4:00 PM PT','Holiday return order window opens','Activate the liability ledger'],
    ['DEC 31 · 11:59 PM PT','Eligible sales window closes','Lock the order cohort'],
    ['JANUARY','Returns and refunds keep arriving','Refresh the reserve weekly'],
    ['FEB 10','Latest return-request date for eligible orders','Close only after cases settle']
  ];
  return `<svg width="1600" height="940" xmlns="http://www.w3.org/2000/svg"><rect width="1600" height="940" rx="42" fill="#f5f2ff"/><text x="70" y="105" font-family="Arial,PingFang SC" font-size="42" font-weight="850" fill="#17141d">${title}</text><g transform="translate(70 165)">${rows.map((r,i)=>`<g transform="translate(0 ${i*138})"><rect width="1460" height="112" rx="24" fill="#fff"/><rect width="16" height="112" rx="8" fill="${i===4?'#ed168c':'#245bd7'}"/><text x="55" y="44" font-family="Arial,PingFang SC" font-size="21" font-weight="850" fill="#1746b8">${r[0]}</text><text x="55" y="82" font-family="Arial,PingFang SC" font-size="20" fill="#302c35">${r[1]}</text><text x="1390" y="68" text-anchor="end" font-family="Arial,PingFang SC" font-size="20" font-weight="800" fill="${i===4?'#c91472':'#5f57a8'}">${r[2]}</text></g>`).join('')}</g></svg>`;
}

function reserveVisual(zh) {
  const title = zh ? 'SKU 例外与准备金字段' : 'SKU exception and reserve fields';
  const groups = zh ? [
    ['适用性','类目、活动资格、订单日期、是否可退'],
    ['例外','电子产品/珠宝等类目规则、竞拍、不可退商品'],
    ['成本责任','正向运费、退货面单、处理、折价、退款'],
    ['证据','Seller Center 状态、退货原因、物流与判责'],
    ['准备金','订单金额、毛利、预计退货概率、回收价值']
  ] : [
    ['APPLICABILITY','Category, campaign eligibility, order date, returnability'],
    ['EXCEPTIONS','Category rules, auctions and non-returnable products'],
    ['COST OWNER','Forward freight, label, handling, write-down and refund'],
    ['EVIDENCE','Seller Center status, reason, logistics and attribution'],
    ['RESERVE','Order value, margin, expected return probability and recovery']
  ];
  return `<svg width="1600" height="900" xmlns="http://www.w3.org/2000/svg"><rect width="1600" height="900" rx="42" fill="#f5f2ff"/><text x="70" y="105" font-family="Arial,PingFang SC" font-size="42" font-weight="850" fill="#17141d">${title}</text><g transform="translate(70 170)">${groups.map((g,i)=>`<g transform="translate(${(i%2)*750} ${Math.floor(i/2)*190})"><rect width="710" height="155" rx="28" fill="#fff"/><circle cx="68" cy="77" r="34" fill="${['#e6f3ff','#fff0f7','#eee9ff','#fff4d5','#e8f7ef'][i]}"/><text x="68" y="87" text-anchor="middle" font-family="Arial" font-size="25" font-weight="900" fill="${i===1?'#c91472':'#245bd7'}">${i+1}</text><text x="125" y="62" font-family="Arial,PingFang SC" font-size="21" font-weight="850" fill="#1746b8">${g[0]}</text><text x="125" y="103" font-family="Arial,PingFang SC" font-size="18" fill="#4f4a55">${g[1]}</text></g>`).join('')}</g><text x="800" y="810" text-anchor="middle" font-family="Arial,PingFang SC" font-size="24" font-weight="800" fill="#4f4a55">${zh?'没有证据的比例保持 Unknown，不要编造准备金率':'Keep unsupported rates Unknown. Do not invent a reserve percentage.'}</text></svg>`;
}

const scene = await sharp(path.join(root, 'outputs/2026-10-16-q4-20-raw-scene-v1.png')).resize({ width: 790 }).png().toBuffer();
for (const [lang, zh] of [['en', false], ['zh', true]]) {
  const name = `hero-${slug}-${lang}-v1`;
  await sharp(Buffer.from(cover(zh))).composite([{ input: scene, left: 960, top: 170 }]).png().toFile(path.join(out, 'blog', `${name}.png`));
  await sharp(path.join(out, 'blog', `${name}.png`)).resize({ width: 1600 }).jpeg({ quality: 90 }).toFile(path.join(out, 'blog/optimized', `${name}.jpg`));
  await sharp(path.join(out, 'blog', `${name}.png`)).resize({ width: 880 }).jpeg({ quality: 88 }).toFile(path.join(out, 'blog/thumbs', `${name}.jpg`));
  await sharp(Buffer.from(calendarVisual(zh))).png().toFile(path.join(out, 'blog/q4-20-returns', `liability-calendar-${lang}-v1.png`));
  await sharp(Buffer.from(reserveVisual(zh))).png().toFile(path.join(out, 'blog/q4-20-returns', `sku-reserve-map-${lang}-v1.png`));
}

const faqEn = [
  ['Which TikTok Shop BFCM orders receive the extended holiday return window?', 'The current U.S. guide applies it to eligible items sold from November 11, 2026 at 4:00 PM PT through December 31, 2026 at 11:59 PM PT. Verify each item and order because category and order-type exceptions remain.'],
  ['What is the latest return-request date for eligible orders?', 'The current guide says eligible purchases can be returned until February 10, 2027. A request deadline is not the same as the final date when every return, refund and settlement will be complete.'],
  ['Does a seller-configured 14-day or 30-day window replace the BFCM window?', 'No for eligible holiday orders. Current guidance says the BFCM holiday extension overrides the seller-configured return window. Keep the configured value in the ledger, but record the active override separately.'],
  ['Are electronics, jewelry and LIVE Auction orders handled the same way?', 'Not necessarily. The BFCM guide notes that selected categories such as electronics and jewelry may follow standard return rules, and auction orders are not eligible for the holiday extension. Verify the exact product and order.'],
  ['Does the longer customer window also extend the seller review SLA?', 'No. The current guide says standard aftersales review SLAs remain the same during BFCM. Queue age and review deadlines therefore need their own control.'],
  ['What is the smallest useful action before November 11?', 'Classify the highest-volume and highest-margin SKUs by eligibility, exception, returnability, logistics route, cost owner and evidence source. Leave any unsupported reserve rate as Unknown.']
];
const faqZh = [
  ['哪些 TikTok Shop BFCM 订单适用延长的节日退货窗口？', '当前美国站指南适用于 2026 年 11 月 11 日 16:00 PT 至 12 月 31 日 23:59 PT 售出的符合条件商品。类目和订单类型仍有例外，必须逐个商品和订单核对。'],
  ['符合条件订单最晚什么时候可以申请退货？', '当前指南写明可退到 2027 年 2 月 10 日。申请截止日不等于全部退件、退款和结算都在当天完成。'],
  ['卖家设置的 14 天或 30 天窗口会取代 BFCM 窗口吗？', '不会取代符合条件的节日订单。当前指引说明 BFCM Holiday Extension 会覆盖卖家配置窗口。台账仍应保留配置值，同时单独记录当前 Override。'],
  ['电子产品、珠宝和 LIVE Auction 订单都按同一规则处理吗？', '不一定。BFCM 指南提示电子产品、珠宝等选定类目可能遵循标准退货规则，竞拍订单不适用节日延长。必须核对准确商品和订单。'],
  ['消费者退货时间变长，卖家售后审核 SLA 也会变长吗？', '不会。当前指南明确标准售后审核 SLA 在 BFCM 期间保持不变，因此 Queue Age 与 Review Deadline 要单独控制。'],
  ['11 月 11 日前最小可执行动作是什么？', '先把最高销量和最高毛利 SKU 按资格、例外、可退性、物流路线、成本 Owner 与证据来源分类；没有依据的准备金率保持 Unknown。']
];
const faq = items => `<section class="faq"><h2>${items===faqZh?'常见问题':'Frequently asked questions'}</h2>${items.map(([q,a])=>`<div class="faq-item"><h3>${q}</h3><p>${a}</p></div>`).join('')}</section>`;

const EN = `
<p class="eyebrow">TIKTOK SHOP U.S. · BFCM RETURNS</p><h1>${enTitle}</h1><img class="hero" src="/blog/hero-${slug}-en-v1.png" alt="${enTitle}"><p class="byline">WE Marketing Team · Oct 16, 2026 · 16 min read</p>
<p><strong>Direct answer:</strong> an eligible BFCM sale is not economically finished when the parcel is delivered. The current U.S. BFCM Seller Campaign Guide says eligible items sold from November 11, 2026 at 4:00 PM PT through December 31, 2026 at 11:59 PM PT may be returned until February 10, 2027. It also says the holiday extension overrides a seller-configured return window. Build the liability calendar, SKU exception map and reserve fields before November 11 so revenue, inventory and customer-service decisions do not treat delivery as the end of exposure.</p>
<p>This is not permission to apply one return assumption to the entire catalog. The same guide says selected categories such as electronics and jewelry may follow standard return rules, while auction orders are not eligible for the holiday extension. Current returns guidance also separates returnable, conditionally returnable and non-returnable products. The operating unit is therefore the SKU-order pair, supported by the current product category, order type, purchase time, return state and liability evidence.</p>
<h2>Separate the customer window from the financial close</h2>
<p>The customer return-request window answers how long an eligible buyer may initiate a return. It does not answer when the parcel will arrive, when inspection will finish, when the refund will settle, which party owns the shipping cost or what value the returned unit will retain. Finance should keep the liability cohort open until the request window ends and unresolved cases reach a terminal result. Operations should not book a delivered order as fully settled merely because the forward shipment succeeded.</p>
<p>Use four dates for each cohort: purchase date, delivery date, latest eligible request date and final case-settlement date. The first three can often be observed or derived from current policy and order records. The fourth varies by actual return transit, review and refund progress, so it should remain open until evidence exists. That distinction prevents a February 10 request deadline from being misread as a universal February 10 financial close.</p>
<img class="body-visual" src="/blog/q4-20-returns/liability-calendar-en-v1.png" alt="TikTok Shop BFCM holiday return liability calendar">
<h2>Build the calendar before the first eligible order</h2>
<p>Start with a pre-window classification checkpoint. Before November 11, assign every priority SKU an owner and capture its campaign eligibility, product category, returnability, seller-configured window, expected holiday override, return address, logistics route and evidence link. On November 11 at 4:00 PM PT, activate the holiday cohort only for eligible items and orders. At December 31 at 11:59 PM PT, freeze the cohort of potentially extended orders rather than deleting the control.</p>
<p>During January, reconcile open requests, parcels in transit, inspections, refund decisions, replacement decisions and unresolved attribution. On February 10, identify the last eligible requests, but keep cases open while they travel or await resolution. A calendar owner should publish a weekly count and dollar exposure by state: no request, requested, return in transit, received, under review, refunded, replaced, rejected or closed. Never collapse those states into one generic return count.</p>
<h2>Use an applicability gate before any reserve math</h2>
<p>Gate one is the purchase timestamp. Gate two is item and campaign eligibility. Gate three is category or product returnability. Gate four is the order type. Gate five is the live order record. If any gate is Unknown, do not choose the longest or shortest assumption simply to complete the spreadsheet. Record Unknown, name the owner and preserve the source needed for a decision. Reserve math built on the wrong population looks precise while hiding a classification error.</p>
<p>The current guide names examples of selected categories, including electronics and jewelry, that may follow standard return rules. Treat those examples as a prompt to verify the exact category, not as a permanent list. Current returns requirements also identify products that may be non-returnable or subject to specific conditions. The exact Seller Center product and order state is stronger evidence than a merchandising label copied into a planning sheet.</p>
<h2>Keep auction orders in a separate lane</h2>
<p>The BFCM guide says auction orders are not eligible for the extended holiday return window. Current LIVE Auction guidance describes a separate protection path for valid seller-fault issues and distinguishes those issues from a change-of-mind return. Do not mix auction orders with standard holiday-return cohorts. Track auction order type, final-sale disclosure, item truth, issue reason, evidence deadline and resolution separately.</p>
<p>This separation matters for both customer communication and reserve quality. A standard eligible BFCM order may carry an extended change-of-mind window, while an auction order may be reviewed under the auction-specific issue rules. One generic “returnable until February” statement can mislead shoppers, support teams and finance. Use order-specific language that matches the current product and order record.</p>
<h2>Map the cost owner, not only the refund amount</h2>
<p>A return can create several economic events: refunded item revenue, forward freight treatment, return-label cost, warehouse receiving, inspection labor, repackaging, damaged or opened-product write-down, disposal, replacement shipment, payment or platform adjustments and recovered inventory value. Each field needs an owner and evidence source. The refund amount alone is not the total liability.</p>
<p>Also distinguish platform-handled and seller-managed routes. Current customer return guidance notes that platform fulfillment can involve platform-handled liability in some situations, while seller-managed orders can require different evidence and cost ownership. Do not infer liability from the fulfillment label alone. Capture the decision, reason, amount, evidence and final state from the actual case.</p>
<img class="body-visual" src="/blog/q4-20-returns/sku-reserve-map-en-v1.png" alt="TikTok Shop BFCM SKU exception and reserve map">
<h2>Create a reserve model without inventing a return rate</h2>
<p>For every priority SKU, record gross item revenue, contribution margin before returns, forward-freight treatment, estimated return-label cost, expected receiving and inspection cost, potential write-down, expected recovery value, replacement exposure and refund exposure. Add expected return probability only when the shop has a defensible historical or scenario basis. If no basis exists, leave it Unknown and run low, central and high scenarios with the assumptions labeled.</p>
<p>A useful model explains sensitivity rather than hiding uncertainty. For example, show how the reserve changes if return probability increases, recovery value falls or return-label cost rises. Keep category exceptions separate. Do not average a low-risk sealed consumable with a high-value electronics SKU merely to produce one reassuring percentage. The purpose is to protect cash and decisions, not to predict a perfectly accurate final number.</p>
<h2>Do not confuse the longer return window with a longer review SLA</h2>
<p>The BFCM guide says standard aftersales review SLAs remain the same during the campaign. A customer may have longer to request a return, while the seller can still have a short period to review a cancellation, refund-only request or return-and-refund request. The liability calendar therefore needs two clocks: the outer customer eligibility window and the inner case-review SLA. Missing the inner clock can create an avoidable default outcome even when the reserve amount is correct.</p>
<p>Build a queue with request time, request type, deadline, owner, evidence needed, current state and next readback. Sort by the earliest irreversible review deadline. The policy source can define the expected review timing, but the live Seller Center case remains the execution record. If a displayed timer conflicts with a planning assumption, work to the visible shorter deadline while the discrepancy is resolved.</p>
<h2>Use return reasons as operating evidence</h2>
<p>Return reasons should change more than the reserve. Group them by product truth, fit or sizing, damage, wrong item, late delivery, expectation mismatch, missing parts, quality, buyer preference and Unknown. Connect each reason to the SKU, content claim, creator script, product page, packing step, carrier or customer-service response that may need repair. Do not use one return-rate number as a verdict on the whole channel.</p>
<p>A weekly review should ask which causes are preventable, which are category-normal, which require policy evidence and which are still unclassified. Assign one corrective action at a time. If product truth is unclear, repair the listing and content before buying more traffic. If packaging damage is rising, investigate the handoff and carton standard. If Unknown is large, improve reason capture before changing commercial decisions.</p>
<h2>A hypothetical SKU shows the full chain</h2>
<p>This is an operating example, not a client result. Suppose an eligible standard SKU is sold on November 20. The order belongs to the holiday cohort and the current guide indicates the customer may request a return through February 10. The team records the seller-configured window, the observed holiday override, item margin, expected label and inspection costs, potential recovery value and the actual case state. It does not close the exposure at delivery.</p>
<p>Now suppose a jewelry SKU and a LIVE Auction order are sold the same day. The team does not copy the standard SKU decision. It verifies whether the jewelry category follows the standard rule and places the auction order in its separate issue-protection lane. Three transactions on one date can produce three different liability paths because category, eligibility and order type were preserved.</p>
<h2>Run one weekly liability review through February</h2>
<p>The owner should reconcile sales cohort value, open requests, return transit, received units, review queue, refunds, replacements, write-downs, recoveries and Unknown classifications. Finance owns the reserve logic, operations owns physical flow, customer service owns case response, merchandising owns SKU truth and leadership owns any stop decision. Close a cohort only when the latest request opportunity has passed and every remaining case has a named state and owner.</p>
<p>The smallest useful action today is to classify the top-selling and highest-margin SKUs before November 11. Add eligibility, category exception, returnability, configured window, holiday override, logistics route, cost owner and evidence source. This is a WEM operating framework, not an official TikTok Shop accounting rule or a substitute for professional accounting advice.</p>
<h2>Source notes</h2>
<p>This original WEM operating framework draws on current U.S. TikTok Shop Seller University materials revalidated October 16, 2026: the <a href="${sources.bfcm}">2026 BFCM Seller Campaign Guide</a>, <a href="${sources.returns}">Requirements for Managing Returns, Refunds, and Replacements</a>, <a href="${sources.customer}">Customer Order Cancellation, Return, and Refund Policy</a>, <a href="${sources.customize}">Customizing Return and Refund Features</a>, and <a href="${sources.auction}">LIVE Auction Best Practices</a>. Platform windows, categories, interfaces, review timers and liability decisions may change. Verify the current U.S. Seller Center, exact product and exact order before execution.</p>
${faq(faqEn)}
<h2>Related WEM guides</h2><section class="related-grid"><a href="/blog/tiktok-shop-bfcm-fulfillment-extension-order-sla"><strong>BFCM fulfillment extension</strong><span>Operate every risky order from its live deadlines.</span></a><a href="/blog/tiktok-shop-returns-margin-trust"><strong>Returns, margin and trust</strong><span>Turn return evidence into a repair loop.</span></a><a href="/blog/tiktok-shop-peak-season-shipping-margin"><strong>Peak-season shipping margin</strong><span>Put logistics evidence into SKU contribution margin.</span></a></section>`;

const ZH = `
<p class="eyebrow">TIKTOK SHOP 美国站 · BFCM 退货</p><h1>${zhTitle}</h1><img class="hero" src="/blog/hero-${slug}-zh-v1.png" alt="${zhTitle}"><p class="byline">WE Marketing Team · 2026 年 10 月 16 日 · 16 分钟阅读</p>
<p><strong>直接结论：</strong>符合条件的 BFCM 订单送达后，经济责任还没有结束。当前美国站 BFCM Seller Campaign Guide 写明：2026 年 11 月 11 日 16:00 PT 至 12 月 31 日 23:59 PT 售出的符合条件商品，消费者可在 2027 年 2 月 10 日前申请退货；节日延长会覆盖卖家自己配置的退货窗口。品牌应在 11 月 11 日前建好 Liability Calendar、SKU Exception Map 和 Reserve Fields，避免把 Delivery 当成交易终点。</p>
<p>这并不代表全店可以套用一个退货假设。当前指南提示电子产品、珠宝等选定类目可能继续遵循标准规则，Auction Order 不适用节日延长。当前退货指引还区分可退、附条件可退和不可退商品。因此实际控制单位应是 SKU 与订单组合，并由当前商品类目、订单类型、购买时间、退货状态和责任证据支持。</p>
<h2>把消费者窗口与财务关账分开</h2>
<p>消费者退货申请窗口只回答符合条件的买家最晚何时能发起退货，不回答包裹何时到仓、何时完成质检、何时退款结算、谁承担退货物流，也不回答退回商品最后还能保留多少价值。Finance 应让责任批次保持开放，直到申请窗口结束，且所有未决案件到达可验证终态。不能因为正向配送完成，就把订单记成完全结算。</p>
<p>每个批次至少保存四个日期：购买日、送达日、最晚可申请日和案件最终结算日。前三项通常能从当前政策或订单记录中观察或推导；第四项取决于真实退件运输、审核与退款过程，在有证据前必须保持 Open。这样才不会把 2 月 10 日的申请截止日误读为全部责任统一在当天结束。</p>
<img class="body-visual" src="/blog/q4-20-returns/liability-calendar-zh-v1.png" alt="TikTok Shop BFCM 节日退货责任日历">
<h2>第一张符合条件订单出现前，先搭责任日历</h2>
<p>先设置窗口前检查点。11 月 11 日前，为每个优先 SKU 指定 Owner，并记录活动资格、商品类目、可退性、卖家配置窗口、预计 Holiday Override、退货地址、物流路线与证据链接。11 月 11 日 16:00 PT 起，只给符合条件的商品与订单启用节日责任批次。12 月 31 日 23:59 PT 后，锁定可能适用延长的订单 Cohort，而不是删除控制。</p>
<p>1 月期间，每周核对已申请、退件运输中、已到仓、质检中、退款决定、换货决定与尚未判责的案件。2 月 10 日识别最后一批合资格申请，但只要退件仍在途中或结果未定，就不能关闭。Owner 应按状态发布数量与金额：未申请、已申请、运输中、已收货、审核中、已退款、已换货、已拒绝或已关闭，不能全部压成一个 Return Count。</p>
<h2>做准备金之前，先通过适用性 Gate</h2>
<p>Gate 1 是购买时间，Gate 2 是商品与活动资格，Gate 3 是类目或商品可退性，Gate 4 是订单类型，Gate 5 是当前订单记录。任何一项是 Unknown，都不能为了填完表格而直接选最长或最短假设。应保留 Unknown、指定 Owner，并写明完成判断还缺什么来源。建立在错误订单池上的准备金，看起来精确，实质上隐藏了分类错误。</p>
<p>当前指南用电子产品、珠宝等作为可能遵循标准规则的例子。要把它们当成提醒去核对准确类目，不能当成永久完整清单。当前退货要求还列出可能不可退或受特定条件约束的商品。Seller Center 的商品与订单真实状态，比计划表里复制的 Merchandising Label 更强。</p>
<h2>竞拍订单必须走独立路径</h2>
<p>BFCM 指南说明 Auction Order 不适用延长的节日退货窗口。当前 LIVE Auction 指引描述了针对有效卖家责任问题的另一条保护路径，并把这些问题与 Change of Mind 区分开。不要把竞拍订单混进普通节日退货 Cohort，应单独记录订单类型、Final-sale Disclosure、商品事实、问题原因、证据时限和最终结果。</p>
<p>这种分流同时影响消费者沟通和准备金质量。一个普通且符合条件的 BFCM 订单可能拥有延长的改变主意窗口，竞拍订单则可能按照竞拍特定问题规则审核。一句笼统的“都可以退到二月”会误导消费者、客服和财务。对外表达必须回到准确商品与订单记录。</p>
<h2>核对成本 Owner，不要只看退款金额</h2>
<p>一次退货可能产生多项经济事件：商品收入退款、正向运费处理、退货面单、仓库收货、质检人工、重新包装、开封或损坏商品折价、报废、换货再次发货、支付或平台调整，以及库存回收价值。每个字段都需要 Owner 与证据来源。Refund Amount 不是全部责任。</p>
<p>还要区分平台处理和卖家管理路径。当前消费者退货指引说明，平台履约在某些情况下可能包含平台处理的责任，而卖家管理订单可能需要不同证据和成本归属。不能只凭 Fulfillment Label 推断判责，必须从实际案件中保存决定、原因、金额、证据和终态。</p>
<img class="body-visual" src="/blog/q4-20-returns/sku-reserve-map-zh-v1.png" alt="TikTok Shop BFCM SKU 例外与准备金字段">
<h2>没有退货率证据时，不要编造一个数字</h2>
<p>每个优先 SKU 应记录商品收入、退货前 Contribution Margin、正向运费处理、预计退货面单成本、收货与质检成本、潜在折价、预计回收价值、换货风险与退款风险。只有店铺拥有可解释的历史或情景依据时，才加入 Expected Return Probability。没有依据时保持 Unknown，并用明确标注假设的低、中、高三个情景运行。</p>
<p>有效模型应解释敏感性，而不是隐藏不确定性。例如展示退货概率上升、回收价值下降或退货面单成本增加时，Reserve 如何变化。类目例外必须分开。不能为了得出一个令人安心的平均比例，就把低风险密封消耗品和高价值电子 SKU 混在一起。目标是保护现金与决策，不是预测一个看似完美的最终数字。</p>
<h2>消费者窗口变长，不等于卖家审核 SLA 变长</h2>
<p>BFCM 指南说明标准 Aftersales Review SLA 在活动期间保持不变。消费者可以拥有更长的退货申请时间，卖家处理取消、仅退款或退货退款请求的审核时间仍可能很短。因此责任日历要维护两只时钟：外层消费者 Eligibility Window，内层 Case Review SLA。忽略内层时钟，即使准备金金额正确，也可能造成可避免的默认结果。</p>
<p>建立包含 Request Time、Request Type、Deadline、Owner、所需证据、Current State 和 Next Readback 的队列，并按最早不可逆审核期限排序。政策来源可以定义预期时间，当前 Seller Center Case 才是执行记录。如果页面计时器与计划假设冲突，在解决差异期间按照页面更短期限执行。</p>
<h2>把退货原因变成运营证据</h2>
<p>退货原因不应只改变准备金，还应按商品事实、尺寸或适配、损坏、错货、延迟送达、预期不符、缺件、质量、买家偏好和 Unknown 分组。把每个原因连接到可能需要修复的 SKU、内容 Claim、达人脚本、商品页、打包步骤、承运商或客服回应。不能用一个整体退货率给整个渠道下结论。</p>
<p>每周复盘要问：哪些原因可预防，哪些属于类目正常现象，哪些需要政策证据，哪些仍未分类。每次只分配一个清晰整改动作。商品事实不清时，先修 Listing 与内容再加流量；包装损坏上升时，检查交接与箱规；Unknown 过大时，先提升原因采集质量，再改商业决定。</p>
<h2>一个假设 SKU 展示完整责任链</h2>
<p>以下是运营示例，不是客户结果。假设一个符合条件的普通 SKU 在 11 月 20 日售出，该订单进入节日 Cohort，当前指南表示消费者可在 2 月 10 日前申请退货。团队记录卖家配置窗口、观察到的 Holiday Override、商品毛利、预计面单与质检成本、可能回收价值和真实案件状态，不会在 Delivery 时关闭责任。</p>
<p>同一天又售出一个珠宝 SKU 和一个 LIVE Auction Order，团队不会复制前一张订单的判断，而是确认珠宝类目是否遵循标准规则，并把竞拍订单放入独立的问题保护路径。同一天的三笔交易可能产生三条不同责任路径，因为类目、资格和订单类型都被保留。</p>
<h2>持续到二月的每周责任复盘</h2>
<p>Owner 每周核对销售批次金额、开放申请、退件运输、已到仓商品、审核队列、退款、换货、折价、回收和 Unknown 分类。Finance 负责准备金逻辑，Operations 负责实体流转，Customer Service 负责案件响应，Merchandising 负责 SKU 事实，Leadership 负责 Stop Decision。只有最晚申请机会已经结束，并且每个剩余案件都有明确状态与负责人时，才能关闭 Cohort。</p>
<p>今天最小可执行动作，是在 11 月 11 日前先给最高销量和最高毛利 SKU 分类，补齐资格、类目例外、可退性、配置窗口、节日覆盖、物流路线、成本 Owner 和证据来源。这是 WEM 的运营框架，不是 TikTok Shop 官方会计规则，也不能替代专业会计意见。</p>
<h2>来源说明</h2>
<p>这套 WE Marketing 原创运营框架基于 2026 年 10 月 16 日完整重新核验的 TikTok Shop 美国站 Seller University <a href="${sources.bfcm}">2026 BFCM Seller Campaign Guide</a>、<a href="${sources.returns}">Requirements for Managing Returns, Refunds, and Replacements</a>、<a href="${sources.customer}">Customer Order Cancellation, Return, and Refund Policy</a>、<a href="${sources.customize}">Customizing Return and Refund Features</a>与<a href="${sources.auction}">LIVE Auction Best Practices</a>。平台窗口、类目、界面、审核计时与责任判断都可能变化，执行前必须核对当前美国站 Seller Center、准确商品与准确订单。</p>
${faq(faqZh)}
<h2>相关 WEM 指南</h2><section class="related-grid"><a href="/blog/tiktok-shop-bfcm-fulfillment-extension-order-sla?lang=zh"><strong>BFCM 履约延长</strong><span>按实时截止时间逐单运营风险订单。</span></a><a href="/blog/tiktok-shop-returns-margin-trust?lang=zh"><strong>退货、毛利与信任</strong><span>把退货证据变成修复闭环。</span></a><a href="/blog/tiktok-shop-peak-season-shipping-margin?lang=zh"><strong>旺季物流毛利</strong><span>把物流证据写进 SKU Contribution Margin。</span></a></section>`;

const citations = Object.values(sources);
const graph = {'@context':'https://schema.org','@graph':[
  {'@type':'BlogPosting','@id':`${url}#article`,headline:enTitle,description:enDescription,inLanguage:'en-US',author:{'@type':'Organization','@id':'https://www.weglobalmarketing.com/#editorial-team',name:'WE Marketing Team'},publisher:{'@type':'Organization','@id':'https://www.weglobalmarketing.com/#organization',name:'WE Marketing',alternateName:'WEM'},image:{'@type':'ImageObject',url:`https://www.weglobalmarketing.com/blog/hero-${slug}-en-v1.png`,width:1792,height:896},datePublished:date,dateModified:date,mainEntityOfPage:{'@type':'WebPage','@id':url},citation:citations,keywords:['TikTok Shop BFCM holiday returns','TikTok Shop return window','return liability reserve','BFCM 2026']},
  {'@type':'BlogPosting','@id':`${url}?lang=zh#article`,headline:zhTitle,description:zhDescription,inLanguage:'zh-CN',translationOfWork:{'@id':`${url}#article`},author:{'@id':'https://www.weglobalmarketing.com/#editorial-team'},publisher:{'@id':'https://www.weglobalmarketing.com/#organization'},image:{'@type':'ImageObject',url:`https://www.weglobalmarketing.com/blog/hero-${slug}-zh-v1.png`,width:1792,height:896},datePublished:date,dateModified:date,mainEntityOfPage:{'@type':'WebPage','@id':`${url}?lang=zh`},citation:citations},
  ...[[faqEn,'en-US',`${url}#faq`],[faqZh,'zh-CN',`${url}?lang=zh#faq`]].map(([items,lang,id])=>({'@type':'FAQPage','@id':id,inLanguage:lang,mainEntity:items.map(([name,text])=>({'@type':'Question',name,acceptedAnswer:{'@type':'Answer',text}}))})),
  {'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:'https://www.weglobalmarketing.com/'},{'@type':'ListItem',position:2,name:'Blog',item:'https://www.weglobalmarketing.com/blog'},{'@type':'ListItem',position:3,name:enTitle,item:url}]}
]};

const old = await fs.readFile(path.join(base, 'blog/tiktok-shop-bfcm-fulfillment-extension-order-sla.html'), 'utf8');
const style = old.match(/<style>[\s\S]*?<\/style>/)[0];
const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><script>document.documentElement.dataset.lang=new URLSearchParams(location.search).get('lang')==='zh'?'zh':'en';document.documentElement.lang=document.documentElement.dataset.lang==='zh'?'zh-CN':'en'</script><title>${enTitle} | WE Marketing</title><meta name="description" content="${enDescription}"><link rel="canonical" href="${url}"><link rel="alternate" hreflang="en-US" href="${url}"><link rel="alternate" hreflang="zh-CN" href="${url}?lang=zh"><link rel="alternate" hreflang="x-default" href="${url}"><script type="application/ld+json">${JSON.stringify(graph)}</script>${style}</head><body><nav class="nav"><a class="logo" href="/"><img src="/assets/we-logo.png" alt="WE Marketing"></a><span class="spacer"></span><a href="/">OUR SERVICES</a><a href="/showcase">OUR WORK</a><a href="/blog">BLOG</a><span class="switch"><a class="en" href="?">EN</a><a class="zh" href="?lang=zh">中文</a></span></nav><main class="wrap"><div class="tools"><a class="en" href="/blog">← BLOG</a><a class="zh" href="/blog?lang=zh">← 博客</a></div><article lang="en">${EN}</article><article lang="zh-CN">${ZH}</article></main><section class="cta"><h2 class="en">READY TO TALK<br>TO WEM?</h2><h2 class="zh">准备好和 WEM<br>一起把计划落地吗？</h2><p class="en">Turn the holiday return window into a controlled liability system.</p><p class="zh">把节日退货窗口变成可控、可追责的责任系统。</p><a class="en" href="https://scheduler.zoom.us/wendylin001">BOOK A DISCOVERY CALL</a><a class="zh" href="https://scheduler.zoom.us/wendylin001">预约咨询</a></section><footer class="footer"><img src="/assets/we-logo.png" alt="WE Marketing"><p class="en">WE Marketing connects strategy, creator operations, paid growth and TikTok Shop execution.</p><p class="zh">WE Marketing 帮助品牌连接策略、达人运营、付费增长与 TikTok Shop 执行。</p><p>© 2026 WE Marketing. All rights reserved.</p></footer><script>if(document.documentElement.dataset.lang==='zh'){document.title=${JSON.stringify(zhTitle+' | WE Marketing')};document.querySelector('meta[name=description]').content=${JSON.stringify(zhDescription)};document.querySelector('link[rel=canonical]').href='${url}?lang=zh'}</script></body></html>`;
await fs.writeFile(path.join(out, 'blog', `${slug}.html`), html);

let list = await fs.readFile(path.join(base, 'BlogList.jsx'), 'utf8');
const row = {slug,tags:['tiktok-shop','shop-operations','fulfillment'],cat:{en:'TIKTOK SHOP U.S. · BFCM RETURNS',zh:'TIKTOK SHOP 美国站 · BFCM 退货'},title:{en:enTitle,zh:zhTitle},excerpt:{en:'Map the holiday return window, SKU exceptions and liability reserve before November 11.',zh:'11 月 11 日前对清节日退货窗口、SKU 例外与责任准备金。'},date:{en:'Oct 16, 2026',zh:'2026 年 10 月 16 日'},read:{en:'16 min read',zh:'16 分钟阅读'},image:{en:`hero-${slug}-en-v1.png`,zh:`hero-${slug}-zh-v1.png`}};
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
