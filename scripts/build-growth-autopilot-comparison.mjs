import fs from 'node:fs/promises';
import path from 'node:path';
import vm from 'node:vm';
import crypto from 'node:crypto';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const sharp=require('/Users/wendylin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');
const {marked}=await import('/Users/wendylin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/marked/lib/marked.esm.js');
const root=path.resolve(import.meta.dirname,'..');
const base=path.join(root,'outputs/patches/2026-09-22-growth-autopilot-roi-protection');
const foundationBase=path.join(root,'outputs/patches/2026-09-21-growth-autopilot');
const out=path.join(root,'outputs/patches/2026-09-23-growth-autopilot-comparison');
const slug='tiktok-shop-growth-autopilot-vs-gmv-max-pro',date='2026-09-23';
const hero=`hero-${slug}-v1.png`,url=`https://www.weglobalmarketing.com/blog/${slug}`;
const sha=s=>crypto.createHash('sha256').update(s).digest('hex');
const esc=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const strip=s=>s.replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();
const en=`
**The first question is not which label sounds more advanced. It is whether your shop can safely commit to the operating rhythm the interface is asking for.** In the Growth Autopilot beta screen reviewed for this article, the seller chooses a seven-day budget and a seven-day ROI target, then sees recurring cycles. GMV Max Pro appears as a separate setup choice whose card refers to a daily budget and ROI target. TikTok's public GMV Max Pro documentation describes a solution pack built on GMV Max, with account-dependent building blocks around affiliate cost, coupons and eligible commission savings. These are not interchangeable descriptions.

The practical choice is therefore not a feature checklist. It is a fit decision: can this SKU, its inventory, its content permissions, and its margin survive the next cycle without the team changing every variable halfway through? If not, a seven-day automatic cycle can turn an unclear operating situation into a more expensive unclear operating situation.

![Growth Autopilot and GMV Max Pro shown as separate setup modes in the beta campaign screen.](assets/growth-autopilot-2026/campaign-setup.jpeg)

*Seller-provided beta interface evidence reviewed September 23, 2026. The screen has Promote products selected. It does not establish rules for LIVE.*

## The visible comparison, and the boundary around it

| Question | Growth Autopilot beta screen | GMV Max Pro public description | What an operator should not assume |
|---|---|---|---|
| Planning window | Seven-day ROI target and seven-day budget in automated cycles. | The setup card shown beside it refers to daily budget and ROI target. | That every GMV Max Pro campaign uses the same UI in every account. |
| Protection | The beta screen says 90% of the ROI target is protected if the listed criteria are met. | Standard GMV Max has separate public campaign-level credit rules. | That the standard formula, order floor, exclusions, or credit terms apply unchanged to beta. |
| Extra spend | A separate growth investment is shown as charged as used and not included in ROI protection. | GMV Max Pro may bring affiliate costs, coupons, and eligible commission savings into a broader view. | That the beta includes every Pro building block or that every cost is covered. |
| Product scope | The shown product setting offers All products, including newly added products automatically, or selected products up to 500. | Product GMV Max publicly optimizes selected promoted products and may use authorized affiliate assets. | That the screen proves any particular creator asset, product, or market is eligible. |
| Continuity | The schedule screen says cycles restart automatically unless paused or deleted. | Pro availability and building blocks vary by market, eligibility, setup, and rollout stage. | That a seller has access, or that a recurring cycle is right for every shop. |

The table is deliberately narrow. It separates what was visible in one beta account from what TikTok documents publicly about GMV Max Pro. A beta campaign screen is strong evidence of that screen. It is not a public product manual, eligibility promise, or campaign-result case study.

## A seven-day cycle changes the readiness test

Daily control and seven-day commitment are different management problems. A daily setup can still be mishandled, but it gives the team a shorter natural readback. A recurring seven-day cycle asks the brand to prepare a fuller operating window: stock has to remain sellable, the product page cannot become ambiguous after creator content starts moving, and the commercial owner needs a contribution floor before the budget begins.

That is why WEM would start with a release gate, not a budget field. Confirm the priority SKU, live price and offer, available variants, sellable inventory, delivery promise, creator authorizations, product proof, and the owner who can pause or correct a real exception. Then decide whether the business can learn from one stable cycle. A target ROI does not repair a weak product page, a missing variant, an unapproved creator video, or an unsupported claim.

![The beta scheduling screen says cycles restart automatically unless the campaign is paused or deleted.](assets/growth-autopilot-2026/schedule.jpeg)

*The dates shown are an example from the supplied screen, not a universal schedule or rollout date.*

## Two shops, two sensible answers

**Hypothetical shop A: ready to test a stable hero SKU.** A skincare brand has one hero SKU with confirmed inventory, a stable offer, several authorized creator videos, clear ingredient and use instructions, and a person who checks stock and customer questions daily. Its margin owner can separate campaign spend from any separate growth investment and can leave the learning lane intact for a full cycle. This shop may be able to evaluate whether the visible Growth Autopilot cycle is worth testing, provided the feature is actually available in its account and the live terms are acceptable.

**Hypothetical shop B: too many moving parts.** A fashion seller has newly arriving variants, changing bundle prices, stock gaps, unapproved creator assets, and no agreed answer to return or sizing questions. A seven-day cycle is not a shortcut around that work. The right move is to stabilize one product and one offer, get usable authorized content, and make the weekly owner accountable for exceptions. The shop may later choose a GMV Max route available to its account, but it should not use either label as permission to scale an unfinished buying system.

Neither example predicts performance. They show why readiness is a commercial condition, not an ad setting.

## GMV Max Pro is broader, not automatically better for this decision

TikTok's current GMV Max Pro page says the solution pack can help advertisers consider ad spend alongside affiliate costs, coupons and platform commissions, with available building blocks varying by account and rollout. That matters for a brand with active creator costs or a deliberate incentive plan. But it does not make GMV Max Pro a default answer, and it does not prove that Growth Autopilot includes the same levers.

For the comparison in front of an operator, use two separate questions. First, does the account expose the setup mode and its live terms? Second, what business cost or operational constraint must the next campaign actually manage? If the problem is that affiliate cost, coupon use and commission savings are material, inspect the actual GMV Max Pro building blocks available to the account. If the question is whether a stable SKU can accept a recurring seven-day cycle, inspect the beta cycle, protection terms, separate growth investment, and owner capacity. Do not collapse those questions into a single "best" product label.

## A short fit decision before you launch

1. **Open the real account surface.** Confirm whether Growth Autopilot or GMV Max Pro is visible to the account. Availability is not established by a screenshot from another account.
2. **Name the SKU and the promise.** Choose one priority product, its current price, offer, variant, stock position, delivery expectation and the proof the content will use.
3. **Separate the cost buckets.** Keep campaign cost, any beta growth investment charged, affiliate commissions, coupons, platform charges, and contribution after fulfillment separate. Do not call attributed gross revenue profit.
4. **Check the asset permissions.** Product GMV Max can use authorized affiliate videos for selected products, but authorization and availability must be confirmed for the account and the actual post.
5. **Assign the cycle owner.** The person who can see a stock exception or a broken product promise needs authority to stop, repair or document it. A recurring cycle cannot be ownerless.

**Smallest useful next action:** make a one-page cycle-readiness row for one SKU. Include the account mode actually visible, seven-day or daily planning window, price, margin floor, stock, authorized assets, product-page gap, customer-service risk, and the named owner. If one of those fields is unknown, solve that before treating automation as scale.

## Continue the Growth Autopilot series

Start with [the seven-day Growth Autopilot foundation](/blog/tiktok-shop-growth-autopilot-beta-guide), then use [the 90% ROI protection and total-cycle cost guide](/blog/tiktok-shop-growth-autopilot-roi-protection) to separate the visible threshold from profit and cash.

## Source notes

Checked September 23, 2026. The campaign setup and schedule images are authorized seller-provided beta evidence. The Product GMV Max overview, GMV Max Pro overview and standard GMV Max ROI protection page are current public TikTok references. Beta access, market availability, interface labels, eligibility, protection criteria, credit calculation and product scope can vary. This article reports observed setup differences and a readiness framework, not a guarantee of feature access or results.

## Frequently asked questions

### Is Growth Autopilot the same as GMV Max Pro?

No. They appear as separate setup choices in the reviewed beta screen. TikTok publicly describes GMV Max Pro as a broader solution pack built on GMV Max; do not assume its building blocks are included in Growth Autopilot.

### Is Growth Autopilot available to every TikTok Shop seller?

The supplied beta screen does not prove universal access. Check the current Seller Center or Ads Manager interface and the account's applicable terms.

### Does the screenshot prove Growth Autopilot supports LIVE?

No. The screenshot has Promote products selected. A visible LIVE option at the top is not enough to infer how a LIVE setup works or whether it is available.

### What does the seven-day cycle change for a shop?

It raises the need for stable stock, a clear offer, usable authorized content, margin room and an owner who can complete or correctly intervene in the learning cycle.

### Are new products automatically included?

The reviewed All products beta option says newly added products will be automatically included. Confirm the account's live scope and whether that is commercially safe before using it.

### Should we choose a mode based only on ROI protection?

No. Protection is conditional and separate from broader product, inventory, creator, service and contribution-margin readiness. Read the live terms before launch.
`;
const zh=`
**真正该先问的，不是哪一个名字听起来更高级，而是店铺能不能承接这个设置要求的经营节奏。** 在本次核对的 Growth Autopilot beta 建广告页面里，卖家需要设置七天预算和七天 ROI 目标，之后进入循环。GMV Max Pro 则是并列的另一个设置选项，卡片上写的是每日预算和 ROI 目标。TikTok 当前公开资料把 GMV Max Pro 定义为建立在 GMV Max 之上的方案包，可能把联盟佣金、优惠券和符合资格的平台佣金节省放进更完整的增长视图。两者不是同一个东西。

所以，正确的判断不是列功能表，而是看匹配度：这个 SKU、库存、内容授权和利润空间，能否在下一个周期里保持真实且稳定？如果不行，七天自动循环不会让问题消失，只会把不清楚的经营状态放大。

![beta 建广告页面中，Growth Autopilot 与 GMV Max Pro 是两个并列的设置选项。](assets/growth-autopilot-2026/campaign-setup.jpeg)

*本文核对的是 2026 年 9 月 23 日提供的 beta 界面。页面实际选中的是推广商品，不能由此推出 LIVE 的具体规则。*

## 能确认的差别，和不能越过的边界

| 要问什么 | Growth Autopilot beta 页面 | GMV Max Pro 公开说明 | 不应该自行假设的事 |
|---|---|---|---|
| 规划单位 | 七天 ROI 目标、七天预算和自动循环。 | 并列设置卡写着每日预算与 ROI 目标。 | 所有 GMV Max Pro 账户都显示同一套界面。 |
| 保障 | 页面写着符合所列条件时，保障 ROI 目标的 90%。 | 常规 GMV Max 有另一套公开的广告金规则。 | 常规公式、订单门槛、排除项或广告金条款原样适用于 beta。 |
| 额外投入 | 单独的增长投入按实际使用计费，且不纳入 ROI 保障。 | Pro 可能把联盟成本、优惠券和符合资格的佣金节省放到更广的经营视图。 | beta 自动拥有 Pro 的全部组件，或所有成本都被保障。 |
| 商品范围 | 页面显示全部商品可自动纳入新上架商品，或手动选最多 500 个商品。 | Product GMV Max 公开说明可优化已选商品并使用授权达人素材。 | 某个达人视频、商品或市场当然符合资格。 |
| 连续运行 | 排期页面写着除非暂停或删除，否则周期会自动重启。 | Pro 的可用组件会随市场、资格、设置和 rollout 而不同。 | 所有店铺都开通，或每个店铺都适合连续周期。 |

这个表故意只写到证据能支持的位置。一个 beta 页面只能证明该页面当时显示了什么，不能替代公开产品手册、资格承诺或投放案例。

## 七天周期改变的是准备度，不只是预算长度

每日控制和七天承诺，是两种不同的管理问题。每日设置当然也可能操作错误，但团队更容易在短周期回读。连续七天则要求品牌先把一个更完整的经营窗口准备好：库存要持续可卖，达人内容开始带来需求后商品页不能突然变得含糊，商业 Owner 也要在预算开始前知道贡献利润的底线。

因此 WEM 会先做放行检查，不会先填预算。先确认优先 SKU、实时价格和 Offer、可售变体、库存、配送承诺、达人授权、商品证明，以及发生例外时谁有权暂停或处理。ROI 目标不能修复一个没有讲清楚的商品页、缺货变体、未授权的达人视频或不支持的 claim。

![beta 排期页面显示，除非暂停或删除，否则周期会自动重启。](assets/growth-autopilot-2026/schedule.jpeg)

*截图日期只是当时页面的示例，不是统一的周期或产品开放日期。*

## 两个假设店铺，两个更合理的答案

**假设店铺 A：适合评估稳定 Hero SKU。** 一家护肤品牌只有一个优先 SKU，库存已确认，价格和 Offer 稳定，有数条已授权的达人视频，成分和使用说明清楚，也有人每天检查库存和用户问题。负责利润的人能把广告花费与单独收取的增长投入分开记录，并且团队能够完整保留一个学习周期。若账户真的开放了功能、实时条款也接受，这样的店铺可以评估 Growth Autopilot 的七天周期是否值得测试。

**假设店铺 B：变量仍然太多。** 一家服饰店的新变体不断上架，组合价频繁变，库存有空档，达人素材没有完成授权，尺码和退货问题也没有统一答案。七天周期不是绕过这些工作的方法。更合理的动作是先稳定一个商品和一个 Offer，准备可用的授权内容，并让每周 Owner 对异常负责。以后它也许可以使用账户可见的某种 GMV Max 设置，但不能把任何一个名字当成放大一个未完成购买系统的理由。

这两个例子都是假设，不预测表现。它们只说明，准备度是经营条件，不是广告按钮。

## GMV Max Pro 更宽，不等于对这个问题自动更好

TikTok 当前的 GMV Max Pro 页面说，这个方案包可以帮助广告主同时理解广告投入、联盟成本、优惠券和平台佣金对整体效率的影响，并且可用组件随账户和 rollout 而变。对于正在承担达人佣金或需要管理优惠工具的品牌，这确实重要。但这不代表 GMV Max Pro 对所有店铺都是默认答案，更不代表 Growth Autopilot 自动包含相同能力。

实际比较时，拆成两个问题。第一，账户现在到底开放了什么设置和什么条款？第二，这次投放真正需要管理的是哪一笔成本或哪个经营限制？如果难点是联盟佣金、优惠券与佣金节省，先看该账户实际可用的 GMV Max Pro 组件。如果问题是稳定 SKU 能否承接连续七天周期，则看 beta 周期、保障条款、单独增长投入和 Owner 能力。不要把这两个问题压成一个“哪个更好”。

## 上线前的简短匹配检查

1. **打开真实账户界面。** 确认账户是否真的看得到 Growth Autopilot 或 GMV Max Pro。别的账户截图不能证明你的账户已开通。
2. **明确 SKU 和承诺。** 写下优先商品、实时价格、Offer、变体、库存、配送预期和内容需要使用的真实证明。
3. **把成本分开。** 广告花费、beta 可能实际收取的增长投入、达人佣金、优惠券、平台费用与履约后的贡献利润要分开，不要把归因 GMV 当利润。
4. **检查素材授权。** Product GMV Max 可以使用已授权的达人视频，但实际账号和实际视频是否可用，都要单独确认。
5. **指定周期 Owner。** 看见缺货、错误商品承诺或客服问题的人，要有权暂停、修复或记录。连续周期不能没有负责人。

**今天最小可执行动作：** 只为一个 SKU 做一行周期准备表，写清账户可见模式、七天或每日规划单位、价格、利润底线、库存、已授权素材、商品页缺口、客服风险和 Owner。任何一格不清楚，都先补真实度，再谈自动放大。

## 继续阅读 Growth Autopilot 系列

先读 [Growth Autopilot 七天周期基础篇](/blog/tiktok-shop-growth-autopilot-beta-guide?lang=zh)，再用 [90% ROI 保障与周期总成本指南](/blog/tiktok-shop-growth-autopilot-roi-protection?lang=zh) 把页面门槛、利润和现金分开核对。

## 来源说明

核对日期：2026 年 9 月 23 日。建广告与排期截图是授权提供的卖家 beta 证据。Product GMV Max、GMV Max Pro 和常规 GMV Max ROI 保障页面是当前公开 TikTok 资料。beta 的开通、市场、界面名称、资格、保障标准、广告金计算和商品范围都可能变化。本文解释观察到的设置差别和准备度框架，不承诺功能可用或投放结果。

## 常见问题

### Growth Autopilot 和 GMV Max Pro 是同一个吗？

不是。在核对的 beta 页面里它们是两个并列设置。TikTok 公开把 GMV Max Pro 定义为建立在 GMV Max 上的更宽方案包，不能假设这些组件自动出现在 Growth Autopilot 里。

### 所有 TikTok Shop 卖家都能用 Growth Autopilot 吗？

截图不能证明普遍开放。请在当前 Seller Center 或 Ads Manager 里核对账户界面和适用条款。

### 这个截图能证明 Growth Autopilot 支持 LIVE 吗？

不能。截图选中的是推广商品。上方有 LIVE 选项，不等于可以推出 LIVE 的设置方式或资格。

### 七天周期对店铺多了什么要求？

它更要求库存、Offer、已授权内容、利润空间和 Owner 都稳定，团队能够完成或正确处理一个完整学习周期。

### 新上架商品会被自动加入吗？

核对的 beta 页面里，选择全部商品时写着新上架商品会自动纳入。投放前仍要以自己账户的实时范围为准，并判断这样做是否安全。

### 能不能只因为 ROI 保障就选择一个模式？

不建议。保障是有条件的，还要分别检查商品、库存、达人、客服和贡献利润准备度，并在上线前读完实时条款。
`;
const data={en:{title:'Growth Autopilot vs. GMV Max Pro: Which TikTok Shop Setup Fits Your Business?',description:'Compare the visible Growth Autopilot beta cycle with GMV Max Pro, then decide whether your SKU, inventory, budget and operating owner are ready.',body:marked.parse(en)},zh:{title:'Growth Autopilot 和 GMV Max Pro 怎么选？先看七天预算、操作空间和店铺准备度',description:'对比 Growth Autopilot beta 的七天周期与 GMV Max Pro，再判断你的 SKU、库存、预算和运营 Owner 是否真的准备好。',body:marked.parse(zh)}};
for(const lang of ['en','zh']){data[lang].body=data[lang].body.replaceAll('assets/growth-autopilot-2026/','/blog/growth-autopilot-2026/').replace(/<p>(<img[^>]+>)<\/p>\s*<p><em>([\s\S]*?)<\/em><\/p>/g,'<figure>$1<figcaption>$2</figcaption></figure>').replace(/<table>/g,'<div class="growth-table"><table>').replace(/<\/table>/g,'</table></div>');data[lang].faq=[...data[lang].body.matchAll(/<h3>(.*?)<\/h3>\s*<p>([\s\S]*?)<\/p>/g)].map(m=>({'@type':'Question',name:strip(m[1]),acceptedAnswer:{'@type':'Answer',text:strip(m[2])}}));if(data[lang].faq.length!==6)throw Error('FAQ parse '+lang);}
await fs.rm(out,{recursive:true,force:true}); await fs.mkdir(path.join(out,'blog/thumbs'),{recursive:true}); await fs.mkdir(path.join(out,'blog/optimized'),{recursive:true});
await fs.cp(path.join(root,'blog-ideas/assets/growth-autopilot-2026'),path.join(out,'blog/growth-autopilot-2026'),{recursive:true});
const logo=await sharp(path.join(root,'ui_kits/website/assets/we-logo.png')).resize(130,130).png().toBuffer();
const scene=Buffer.from(`<svg width="1792" height="896" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g" x1="0" x2="1"><stop stop-color="#f8f4ff"/><stop offset="1" stop-color="#e5e0fb"/></linearGradient><filter id="s"><feDropShadow dx="0" dy="18" stdDeviation="16" flood-opacity=".16"/></filter></defs><rect width="1792" height="896" fill="url(#g)"/><g filter="url(#s)"><rect x="1110" y="170" width="400" height="390" rx="38" fill="#fff"/><rect x="1160" y="228" width="300" height="70" rx="18" fill="#dcd4fb"/><rect x="1160" y="330" width="120" height="150" rx="20" fill="#2458ca"/><rect x="1310" y="330" width="150" height="150" rx="20" fill="#8f64e8"/><circle cx="1195" cy="366" r="23" fill="#fff" opacity=".82"/><path d="M1385 360l36 16v44c0 35-36 53-36 53s-36-18-36-53v-44z" fill="#fff"/><path d="M1370 410l13 13 27-31" fill="none" stroke="#8f64e8" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/><rect x="1045" y="556" width="530" height="115" rx="34" fill="#fff"/><text x="1115" y="625" font-family="Arial" font-size="30" font-weight="700" fill="#2458ca">7-DAY CYCLE</text><text x="1390" y="625" font-family="Arial" font-size="30" font-weight="700" fill="#7a56cf">DAILY VIEW</text></g></svg>`);
const labels=Buffer.from(`<svg width="1792" height="896" xmlns="http://www.w3.org/2000/svg"><style>.k{font:700 22px Arial;fill:#2458ca;letter-spacing:3px}.h{font:800 58px Arial;fill:#171717}.s{font:500 26px Arial;fill:#37332f}</style><text x="92" y="145" class="k">TIKTOK SHOP · BETA FIT</text><text x="92" y="250" class="h">GROWTH AUTOPILOT</text><text x="92" y="320" class="h">VS. GMV MAX PRO</text><text x="92" y="405" class="s">Choose the operating rhythm</text><text x="92" y="442" class="s">your shop can actually support</text></svg>`);
await sharp(scene).composite([{input:labels},{input:logo,left:86,top:736}]).png().toFile(path.join(out,'blog',hero));
await sharp(path.join(out,'blog',hero)).resize({width:1600}).jpeg({quality:90}).toFile(path.join(out,'blog/optimized',hero.replace('.png','.jpg'))); await sharp(path.join(out,'blog',hero)).resize({width:880}).jpeg({quality:86}).toFile(path.join(out,'blog/thumbs',hero.replace('.png','.jpg')));
const schemas={'@context':'https://schema.org','@graph':['en','zh'].flatMap(lang=>[{'@type':'BlogPosting','@id':url+(lang==='zh'?'?lang=zh':'')+'#article',headline:data[lang].title,description:data[lang].description,inLanguage:lang==='en'?'en-US':'zh-CN',datePublished:date,dateModified:date,mainEntityOfPage:url+(lang==='zh'?'?lang=zh':''),image:`https://www.weglobalmarketing.com/blog/${hero}`,author:{'@type':'Person',name:'Wendy Lin'},publisher:{'@type':'Organization',name:'WE Marketing'},citation:['https://ads.tiktok.com/resources/help/article/about-product-gmv-max?lang=en','https://ads.tiktok.com/resources/help/article/about-gmv-max-pro?lang=en','https://ads.tiktok.com/resources/help/article/about-roi-protection-for-gmv-max-campaigns?lang=en']},{'@type':'FAQPage',inLanguage:lang==='en'?'en-US':'zh-CN',mainEntity:data[lang].faq}])};
let html=await fs.readFile(path.join(base,'blog/tiktok-shop-growth-autopilot-roi-protection.html'),'utf8'); html=html.replaceAll('tiktok-shop-growth-autopilot-roi-protection',slug).replace(/<title>[^<]*<\/title>/,`<title>${esc(data.en.title)} | WE Marketing</title>`).replace(/<meta name="description" content="[^"]*">/,`<meta name="description" content="${esc(data.en.description)}">`).replace(/<meta property="og:title" content="[^"]*">/,`<meta property="og:title" content="${esc(data.en.title)}">`).replace(/<meta property="og:description" content="[^"]*">/,`<meta property="og:description" content="${esc(data.en.description)}">`).replace(/<meta property="article:published_time" content="[^"]*">/,`<meta property="article:published_time" content="${date}">`).replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/,`<script type="application/ld+json">${JSON.stringify(schemas)}</script>`).replace(/<script>if\(new URLSearchParams\(location\.search\)\.get\('lang'\)==='zh'\)\{[\s\S]*?<\/script>/g,'').replace(/<style>\.growth-table[\s\S]*?<\/style>/g,'');
for(const lang of ['en','zh']){const code=lang==='en'?'en':'zh-CN';html=html.replace(new RegExp(`<article lang="${code}">[\\s\\S]*?<\/article>`),`<article lang="${code}"><p>TIKTOK SHOP · ${lang==='en'?'BETA FIT REVIEW':'BETA 匹配判断'}</p><h1>${esc(data[lang].title)}</h1><p>Wendy Lin · ${lang==='en'?'Sep 23, 2026 · 11 min read':'2026 年 9 月 23 日 · 11 分钟阅读'}</p><img class="hero" src="/blog/${hero}" alt="${lang==='en'?'Growth Autopilot versus GMV Max Pro fit decision':'Growth Autopilot 与 GMV Max Pro 的匹配判断'}">${data[lang].body}</article>`)}
html=html.replace('/blog/growth-autopilot-editorial-v1.js"','/blog/growth-autopilot-editorial-v1.js?v=20260923-comparison-fix-01"').replace('</head>',`<style>.growth-table{max-width:100%;overflow-x:auto;margin:28px 0}.growth-table table{min-width:650px;border-collapse:collapse}.growth-table th,.growth-table td{padding:14px;text-align:left;vertical-align:top;border-bottom:1px solid #ded9d1;font-size:16px;line-height:1.6}.growth-table th{background:#eae5fa;color:#20203a}.wrap article figure{display:block}.wrap article figure img{object-fit:contain;background:#fff}</style></head>`).replace('</body>',`<script>if(new URLSearchParams(location.search).get('lang')==='zh'){document.title=${JSON.stringify(data.zh.title+' | WE Marketing')};document.querySelector('meta[name="description"]').content=${JSON.stringify(data.zh.description)};document.querySelector('meta[property="og:title"]').content=${JSON.stringify(data.zh.title)};document.querySelector('meta[property="og:description"]').content=${JSON.stringify(data.zh.description)};document.querySelector('link[rel="canonical"]').href=${JSON.stringify(url+'?lang=zh')};}</script></body>`); await fs.writeFile(path.join(out,'blog',slug+'.html'),html);
for(const prior of ['tiktok-shop-growth-autopilot-beta-guide','tiktok-shop-growth-autopilot-roi-protection']){const source=prior==='tiktok-shop-growth-autopilot-beta-guide'?foundationBase:base;let p=await fs.readFile(path.join(source,'blog',prior+'.html'),'utf8'); const enLink=`<p class="wem-related-note"><strong>Related guide:</strong> <a href="/blog/${slug}">Growth Autopilot vs. GMV Max Pro: choose the operating fit</a>.</p>`; const zhLink=`<p class="wem-related-note"><strong>延伸阅读：</strong><a href="/blog/${slug}?lang=zh">Growth Autopilot 与 GMV Max Pro 匹配判断</a>。</p>`; p=p.replace(/<script>if\(new URLSearchParams\(location\.search\)\.get\('lang'\)==='zh'\)\{[\s\S]*?<\/script>/g,'').replace('/blog/growth-autopilot-editorial-v1.js"','/blog/growth-autopilot-editorial-v1.js?v=20260923-comparison-fix-01"').replace('</article><article lang="zh-CN">',enLink+'</article><article lang="zh-CN">').replace('</article></main>',zhLink+'</article></main>');await fs.writeFile(path.join(out,'blog',prior+'.html'),p);}
let enhancer=await fs.readFile(path.join(foundationBase,'blog/growth-autopilot-editorial-v1.js'),'utf8');enhancer=enhancer.replace("const relatedGuides = {",`const relatedGuides = {\n    '${slug}': ['tiktok-shop-growth-autopilot-beta-guide','tiktok-shop-growth-autopilot-roi-protection','tiktok-shop-gmv-max-readiness'],`).replace("const guideNames = {",`const guideNames = {\n    'tiktok-shop-growth-autopilot-beta-guide': 'TikTok Shop Growth Autopilot: The New 7-Day Ad Cycle',\n    'tiktok-shop-growth-autopilot-roi-protection': 'Growth Autopilot ROI Protection and Total-Cycle Cost',`).replace("const coverAlreadyIncludesCopy = new Set([",`const coverAlreadyIncludesCopy = new Set(['${slug}',`);await fs.writeFile(path.join(out,'blog/growth-autopilot-editorial-v1.js'),enhancer);
let list=await fs.readFile(path.join(base,'BlogList.jsx'),'utf8');if(list.includes(slug))throw Error('duplicate slug');const row={slug,tags:['tiktok-shop','gmv-max','paid-media'],cat:{en:'TIKTOK SHOP / BETA FIT',zh:'TIKTOK SHOP / BETA 匹配'},title:{en:data.en.title,zh:data.zh.title},excerpt:{en:data.en.description,zh:data.zh.description},date:{en:'Sep 23, 2026',zh:'2026 年 9 月 23 日'},read:{en:'11 min read',zh:'11 分钟阅读'},image:hero};list=list.replace('const BLOG_POSTS = [','const BLOG_POSTS = ['+JSON.stringify(row).replace(/"([A-Za-z_$][\w$]*)":/g,'$1:')+',');await fs.writeFile(path.join(out,'BlogList.jsx'),list);const sandbox={};vm.createContext(sandbox);vm.runInContext(await fs.readFile(path.join(root,'.cache/babel-standalone-7.29.0.min.js'),'utf8'),sandbox);const compiled=sandbox.Babel.transform(list,{presets:[['react',{runtime:'classic'}]],compact:true,minified:true,sourceType:'script'}).code+'\n';await fs.writeFile(path.join(out,'BlogList.compiled.js'),compiled);let index=await fs.readFile(path.join(base,'blog.html'),'utf8');await fs.writeFile(path.join(out,'blog.html'),index.replace(/BlogList\.compiled\.js\?v=[^"']+/,`BlogList.compiled.js?v=${sha(compiled).slice(0,12)}`));let sitemap=await fs.readFile(path.join(base,'sitemap.xml'),'utf8');await fs.writeFile(path.join(out,'sitemap.xml'),sitemap.replace('</urlset>',`<url><loc>${url}</loc><lastmod>${date}</lastmod></url><url><loc>${url}?lang=zh</loc><lastmod>${date}</lastmod></url></urlset>`));await fs.writeFile(path.join(out,'llms.txt'),await fs.readFile(path.join(base,'llms.txt'),'utf8')+`\n- ${data.en.title}: ${url}\n  - 中文：${url}?lang=zh\n`);console.log(JSON.stringify({out,enWords:strip(data.en.body).split(/\s+/).length,zhHan:(data.zh.body.match(/[\u3400-\u9fff]/g)||[]).length,faq:data.en.faq.length,cover:hero}));
