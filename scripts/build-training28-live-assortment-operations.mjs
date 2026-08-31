import fs from 'node:fs/promises';
import path from 'node:path';
import vm from 'node:vm';

const repo = path.resolve(import.meta.dirname, '..');
const patch = path.join(repo, 'outputs/patches/2026-08-31-training28');
const blog = path.join(patch, 'blog');
const slug = 'tiktok-shop-live-assortment';
const date = '2026-08-31';
const titleEn = 'Build a TikTok Shop LIVE Assortment That Protects Margin and Inventory';
const titleZh = 'TikTok Shop LIVE 货盘运营：管住库存、毛利、上下架与复盘';
const descriptionEn = 'A practical operating system for releasing, sequencing, monitoring, and reviewing TikTok Shop LIVE products without losing control of inventory or contribution margin.';
const descriptionZh = '一套用于 TikTok Shop LIVE 商品准入、排序、监控与复盘的经营系统，在放大直播需求前保护库存和贡献毛利。';
const sources = [
  'https://seller-us.tiktok.com/university/essay?default_language=en&identity=1&knowledge_id=2077848582981422',
  'https://seller-us.tiktok.com/university/essay?default_language=en&knowledge_id=4034166325692203',
  'https://seller-us.tiktok.com/university/essay?course_type=1&from=search&identity=1&knowledge_id=6927759780628226&role=1',
  'https://seller-us.tiktok.com/university/essay?from=feature_guide&identity=1&knowledge_id=463621005051661&role=2',
];

const en = `
<h2>Direct answer: a LIVE assortment is an operating commitment, not a shopping bag</h2>
<p>A TikTok Shop LIVE assortment should contain only products the team can truthfully demonstrate, keep available, sell at an acceptable contribution margin, pin at the right moment, and fulfill after demand arrives. The job is not to collect the largest possible catalog or repeat a fixed taxonomy of traffic products and hero products. The job is to decide which SKUs may enter the next session, under what commercial conditions, in what sequence, and with which stop rule.</p>
<p>This is deliberately different from WEM's first-five-sessions framework. That earlier guide uses product roles inside a controlled learning cycle. This guide governs the product set itself: listing readiness, available-to-promise inventory, offer economics, run-of-show placement, live monitoring, removal authority, and post-session disposition. A product can have a compelling story and still fail the release gate because its stock is fragile, its discount destroys contribution, its claim is not ready, or nobody owns the decision to pause it.</p>
<blockquote>The smallest useful LIVE assortment is the set of products your team can promise, demonstrate, transact, and fulfill without losing control.</blockquote>
<figure><img src="/blog/${slug}-release-gate-v1.svg" alt="TikTok Shop LIVE assortment release gate"><figcaption>Every SKU must pass product truth, supply, economics, room readiness, and ownership before it enters the LIVE set.</figcaption></figure>

<h2>What the official product-set tools do, and what they do not do</h2>
<p>Current U.S. TikTok Shop Seller University describes LIVE Product Sets as reusable groups that can be created in-app or in LIVE Manager and added to a session together. The official material also explains that products can be added from supported sources, reordered, copied, edited, or removed. Products may fail to add when they are sold out, removed, duplicated, affected by an inactive affiliate arrangement, or otherwise not in a normal status. Separate preparation guidance tells operators to add products to the LIVE Showcase before featuring them and to organize sets in advance.</p>
<p>Those capabilities reduce setup friction, but they do not approve a product economically or operationally. A successful add is not proof that the current price is profitable, the inventory is safe to expose, the listing can support the host's language, or the warehouse can absorb a demand spike. Treat the platform set as the execution container. Keep the commercial decision in a separate assortment control ledger owned by the brand.</p>

<h2>Use a five-part release gate before a SKU enters the session</h2>
<p>Run every candidate through five gates. First, product truth: the listing, variation names, images, claims, dimensions, ingredients, compatibility, and demonstration language must agree. Second, supply: record sellable inventory, units already committed elsewhere, replenishment timing, and the quantity the team is willing to expose to this session. Third, economics: model the actual customer price, discounts, seller-funded incentives, affiliate commission where applicable, expected variable fulfillment cost, and a conservative allowance for returns or service cost. Use the brand's own numbers, not a universal benchmark.</p>
<p>Fourth, room readiness: confirm the sample, demonstration setup, host notes, moderator answers, pin position, and any bundle logic. Fifth, ownership: name the person who can release, pause, substitute, or remove the SKU. If one gate is unknown, label it unknown and resolve it before the product enters the set. Unknown is not a quiet pass.</p>
<table><thead><tr><th>Gate</th><th>Required evidence</th><th>Release question</th></tr></thead><tbody>
<tr><td>Product truth</td><td>Current listing and approved demonstration claims</td><td>Can the room show exactly what the buyer will receive?</td></tr>
<tr><td>Supply</td><td>Sellable stock, reservations, replenishment, exposure cap</td><td>Can we honor the demand we are inviting?</td></tr>
<tr><td>Economics</td><td>Net price and variable-cost ledger</td><td>Does an incremental order clear our contribution floor?</td></tr>
<tr><td>Room readiness</td><td>Sample, host notes, sequence, moderator answers</td><td>Can the team explain and pin it accurately?</td></tr>
<tr><td>Ownership</td><td>Named release and stop owner</td><td>Who acts when the facts change?</td></tr>
</tbody></table>

<h2>Build an inventory envelope, not a static stock screenshot</h2>
<p>The inventory number visible during planning can become stale before the session starts. Create an available-to-promise envelope for each LIVE SKU. Begin with verified sellable units, subtract reservations and other known commitments, protect a service buffer, and then set a session exposure cap. The cap is a management choice, not a platform promise. It should reflect replenishment confidence, expected session length, other channels drawing from the same stock, and the operational cost of overselling.</p>
<p>Assign three checkpoints: before the set is released, immediately before going LIVE, and during the session at a defined trigger. A trigger might be the remaining exposed quantity, a fulfillment exception, or a sudden promotion change. Do not wait for a shopper complaint to discover that the room is presenting an unavailable variation. If inventory truth cannot be refreshed, stop featuring the item and direct the host to the approved fallback rather than improvising scarcity language.</p>

<h2>Protect contribution margin with a session-level ledger</h2>
<p>Gross merchandise value does not tell the team whether a product belongs in the LIVE. For each candidate, calculate a session contribution view using the brand's verified inputs: expected paid price minus product cost, seller-funded discounts, commission, payment or platform costs where applicable, pick-and-pack, shipping contribution, packaging, and a reasonable service or return allowance. Keep platform-funded and seller-funded benefits separate. Do not assume an offer is free to the seller because the shopper sees a lower price.</p>
<p>Then add the interaction effects. A bundle may improve basket economics while increasing pick complexity. A low-price item may create more orders while consuming scarce packing capacity. A promotion may be viable for one SKU but destructive when stacked with another seller-funded incentive. Record the floor at which the product must be paused or returned to its standard offer. The floor should be approved before the host mentions a price. If the team cannot reconstruct the effective price and funding source, the SKU is not ready for the room.</p>
<figure><img src="/blog/${slug}-control-ledger-v1.svg" alt="TikTok Shop LIVE assortment control ledger"><figcaption>The control ledger joins inventory, price, variable cost, room position, and stop ownership without pretending one metric is enough.</figcaption></figure>

<h2>Sequence the room around buyer decisions and operational limits</h2>
<p>A product list is not yet a run of show. Sequence products around the buyer questions the host can resolve and the operational conditions the team can maintain. Put the approved opening product where the host can demonstrate a clear problem and proof. Place comparison products together only when the differences are accurate and available variants are ready. Put complementary products near the moment when the buyer understands the primary item, not merely because cross-sell is a goal. Keep fragile-stock or complex-fulfillment products out of repeated high-attention positions unless their caps and stop rules are actively monitored.</p>
<p>Current Seller University guidance explains that products must be present in the LIVE Showcase and that operators can reorder products. It also describes pinning products during the stream. Use those controls to reflect the approved sequence, but let audience questions change emphasis only within the release envelope. A spike in comments can justify a longer demonstration. It cannot justify an unapproved claim, an unmodeled discount, or continued selling after the stock owner calls a stop.</p>

<h2>Separate four live signals so the team does not chase noise</h2>
<p>During the session, monitor four signal families. Attention signals tell you whether viewers notice the product or demonstration. Consideration signals include substantive questions, requests for comparison, and product-detail exploration where available. Transaction signals include product clicks, add-to-cart behavior, and orders where available. Operations signals include available stock, failed variations, pin accuracy, pricing discrepancies, moderation escalations, and fulfillment warnings.</p>
<p>Each signal changes a different decision. More comments may change demonstration time. A pricing discrepancy should pause the claim. A stock trigger should remove or replace the product. Orders alone should not override a negative contribution floor. Missing account-level data remains unknown, not zero. The operator should record the exact source and timestamp of every decisive readback so the post-session review can distinguish what happened in the room from what the team merely expected.</p>

<h2>Create explicit add, hold, remove, and retire decisions</h2>
<p>Every SKU should leave the post-LIVE review with one disposition. Add means it passed the gate and can enter a future set under stated conditions. Hold means the product needs one named repair, such as a listing clarification, inventory confirmation, sample replacement, or economics check. Remove means it must leave the active set now because a release condition failed. Retire means the product should not return to this session format unless the underlying product, supply, or economics materially change.</p>
<p>Avoid a vague “try again” bucket. Record the owner, required evidence, and earliest review date. Keep the platform Product Set synchronized only after the decision ledger is approved. This prevents copied sets from quietly carrying old pricing assumptions, unavailable variations, or products the team no longer intends to feature.</p>
<figure><img src="/blog/${slug}-review-loop-v1.svg" alt="TikTok Shop LIVE post-session assortment decision loop"><figcaption>Post-session review ends with an owned disposition, not a general opinion about whether the product performed.</figcaption></figure>

<h2>Hypothetical operating example</h2>
<p>This is a hypothetical example, not a WEM client result. A U.S. beauty brand prepares six SKUs for a 45-minute LIVE. The bestseller has strong demand, but only one shade has safe inventory. A routine bundle appears attractive at the advertised price, but the team discovers that an existing seller-funded coupon pushes contribution below its approved floor. A newer item has adequate stock and margin, yet the host sample carries old packaging and cannot support the current listing language.</p>
<p>The operator releases the bestseller only in the verified shade with a session cap, holds the bundle until the effective-price ledger is corrected, and removes the new item until a current sample and approved claims arrive. Two stable products fill the remaining sequence. During the LIVE, the stock owner sees the bestseller reach its trigger and tells the operator to stop pinning it. The host transitions to the approved comparison product without claiming it is “almost sold out.” At review, the team records what shoppers asked, which units were exposed, the effective contribution view, and one required change per held SKU. The operating success is control and reusable evidence, not a claim that assortment governance guarantees sales.</p>

<h2>Smallest useful next action</h2>
<p>Before the next LIVE, make a one-page control ledger for the first three products you intend to feature. For each SKU, record listing truth, sellable inventory, session cap, effective customer price, seller-funded costs, contribution floor, demonstration proof, sequence position, fallback, and stop owner. Read it beside the current Product Set and LIVE Showcase. Remove any item whose values disagree or remain unknown. That single reconciliation is more useful than adding another ungoverned product to the shopping bag.</p>

<h2>Source notes and execution boundary</h2>
<p>This original WEM operating framework draws on complete current U.S. TikTok Shop Seller University materials revalidated August 31, 2026: <a href="${sources[0]}">LIVE Product Set</a>, <a href="${sources[1]}">A Guide to Your First LIVE Selling Preparations &amp; How to Select Products</a>, <a href="${sources[2]}">TikTok LIVE Shopping</a>, and <a href="${sources[3]}">Choosing the Right Products for LIVE Selling</a>. Platform interfaces, eligibility, limits, product status, promotion controls, and account-level analytics may change. Verify the current U.S. Seller Center and the brand's own inventory and economics before execution.</p>

<h2>Frequently asked questions</h2>
<h3>How many products should a TikTok Shop LIVE include?</h3><p>Use only the number your team can demonstrate, monitor, and fulfill under the session plan. Official guidance offers product-selection examples and platform limits, but the operating number depends on session length, buyer questions, inventory, economics, and team capacity.</p>
<h3>Is a LIVE Product Set the same as an approved assortment?</h3><p>No. The Product Set is a platform container. The approved assortment is the brand's decision record showing that each SKU passed product-truth, supply, economics, room-readiness, and ownership gates.</p>
<h3>Should the highest-GMV product always stay pinned?</h3><p>No. Pinning should match the current demonstration and approved sequence. A product must also remain truthful, available, economically acceptable, and operationally safe.</p>
<h3>What should happen when inventory becomes uncertain during LIVE?</h3><p>Use the pre-agreed stop owner and fallback. Pause featuring or remove the product until inventory truth is restored. Do not improvise scarcity claims.</p>
<h3>How often should a LIVE assortment be reviewed?</h3><p>Review it before release, immediately before the session, at defined live triggers, and after the session. Reusable sets should also be reconciled before they are copied into a new event.</p>
<h3>What is the most important post-LIVE assortment metric?</h3><p>There is no single metric. Join buyer attention and transaction evidence with inventory, effective price, contribution, exceptions, and fulfillment outcomes, then make one owned disposition for each SKU.</p>`;

const zh = `
<h2>直接答案：LIVE 货盘是一项经营承诺，不是购物袋清单</h2>
<p>TikTok Shop LIVE 货盘里，只应该放团队能够真实演示、稳定供货、在可接受贡献毛利下成交、在正确时点挂车，并且在需求到来后完成履约的商品。重点不是把目录塞得越满越好，也不是再次套用“引流款、主推款、信任款”的固定分类。真正要解决的是：哪些 SKU 可以进入下一场直播，以什么商业条件进入，排在什么位置，以及什么情况必须停止。</p>
<p>这与 WEM 的“前五场学习系统”明确区分。前一篇用商品角色帮助团队建立受控学习循环；这一篇管理货盘本身，包括 Listing 准备度、可承诺库存、Offer 经营账、直播顺序、场中监控、下架权限和场后去留。一个商品即使故事很好，如果库存脆弱、折扣击穿贡献毛利、宣称尚未确认，或没有人负责叫停，也不能通过准入。</p>
<blockquote>最小但有用的 LIVE 货盘，是团队能够承诺、演示、成交和履约，并始终保持控制的那组商品。</blockquote>
<figure><img src="/blog/${slug}-release-gate-zh-v1.svg" alt="TikTok Shop LIVE 货盘准入门"><figcaption>每个 SKU 都要通过商品真实度、供给、经营账、直播间准备和责任人五道门。</figcaption></figure>

<h2>官方 Product Set 能做什么，不能替品牌决定什么</h2>
<p>当前美国站 TikTok Shop Seller University 将 LIVE Product Set 定义为可重复使用的商品集合，可在 App 或 LIVE Manager 中创建，并整组加入直播。官方页面也说明了添加、排序、复制、编辑和移除等能力。商品如果售罄、下架、重复、联盟合作失效或状态异常，可能无法加入。其他准备资料则要求商品先进入 LIVE Showcase，并建议团队提前组织 Product Set。</p>
<p>这些功能能降低配置成本，却不会替品牌完成经营审批。成功加入不代表当前价格有利润，不代表库存能承受曝光，也不代表 Listing 足以支撑主播的话术，或仓库能够接住需求。把平台 Product Set 当成执行容器，把商业决定留在品牌自己的货盘控制表里。</p>

<h2>每个 SKU 入场前，都要通过五道准入门</h2>
<p>第一道是商品真实度：Listing、变体名称、图片、宣称、尺寸、成分、兼容性和演示语言必须一致。第二道是供给：记录可售库存、其他渠道已占用数量、补货时间，以及本场愿意释放的上限。第三道是经营账：核算消费者实付价、折扣、卖家承担的优惠、适用时的联盟佣金、可变履约成本，以及保守的退货或客服成本。全部使用品牌自己的已核验数字，不套用通用 Benchmark。</p>
<p>第四道是直播间准备：样品、演示条件、主播笔记、Moderator 回答、挂车位置和组合逻辑都要就绪。第五道是责任人：明确谁可以批准、暂停、替换或移除 SKU。任何一项未知，都要明确标成“未知”，并在入场前解决。未知不能默认通过。</p>
<table><thead><tr><th>准入门</th><th>所需证据</th><th>放行问题</th></tr></thead><tbody>
<tr><td>商品真实度</td><td>当前 Listing 与已批准演示宣称</td><td>直播间展示的是否就是买家会收到的？</td></tr>
<tr><td>供给</td><td>可售库存、占用、补货和场次上限</td><td>能否履行我们主动创造的需求？</td></tr>
<tr><td>经营账</td><td>净成交价与可变成本表</td><td>新增一单能否守住贡献毛利底线？</td></tr>
<tr><td>直播间准备</td><td>样品、话术、顺序和 Moderator 答案</td><td>团队能否准确解释并挂对商品？</td></tr>
<tr><td>责任人</td><td>放行人与叫停人</td><td>事实变化时谁立即行动？</td></tr>
</tbody></table>

<h2>建立“可承诺库存区间”，不要依赖一张静态库存截图</h2>
<p>计划时看到的库存，开播前可能已经失效。每个 LIVE SKU 都需要一个可承诺库存区间：从已核验的可售数量出发，减去预留与其他已知占用，保留服务缓冲，再设定本场曝光上限。这个上限是品牌经营决定，不是平台承诺。它需要考虑补货可信度、直播时长、其他渠道共用库存，以及超卖带来的运营成本。</p>
<p>至少设三个回读点：货盘放行前、开播前，以及场中达到指定触发条件时。触发条件可以是剩余可曝光数量、履约异常或促销突然变化。不要等到消费者投诉，才发现直播间正在介绍一个无法购买的变体。库存事实无法刷新时，应停止主推，并让主播切换到已批准的备用商品，不要临场编造“快售罄”等稀缺话术。</p>

<h2>用场次经营账保护贡献毛利</h2>
<p>GMV 不能单独决定一个商品是否应该进入直播。每个候选 SKU 都要建立场次贡献视角：预计实付价减去货品成本、卖家承担折扣、佣金、适用的平台或支付成本、拣货打包、运费承担、包装，以及合理的售后或退货预留。平台承担与卖家承担必须分开。消费者看到价格下降，不代表这项优惠对卖家免费。</p>
<p>还要加入联动影响。Bundle 可能提升客单经营账，却增加拣货复杂度；低价商品可能增加订单，却占用稀缺打包产能；某个优惠对单 SKU 可行，与另一个卖家优惠叠加后却可能亏损。提前写清必须暂停或恢复原价的底线。主播说出价格前，经营账必须已经批准。如果团队无法还原有效成交价和出资来源，这个 SKU 就没有准备好。</p>
<figure><img src="/blog/${slug}-control-ledger-zh-v1.svg" alt="TikTok Shop LIVE 货盘控制表"><figcaption>把库存、价格、可变成本、场内位置和叫停责任接在一起，而不是迷信一个指标。</figcaption></figure>

<h2>按消费者决策与运营限制安排顺序</h2>
<p>商品列表不等于 Run of Show。顺序应该围绕主播能解决的消费者问题，以及团队能够维持的经营条件。开场商品要能快速呈现清晰问题与证明。只有差异真实、相关变体可买时，才把对比商品放在一起。搭配商品应出现在消费者理解主商品之后，而不是因为团队泛泛地想做 Cross-sell。库存脆弱或履约复杂的商品，不应该反复占据高注意位置，除非团队正在监控上限和停止规则。</p>
<p>当前 Seller University 说明商品需要进入 LIVE Showcase，并提供排序与挂车控制。团队可以用这些功能执行已批准顺序，但观众问题只能在放行边界内改变重点。评论突然增加，可以让主播延长演示；却不能授权未经批准的宣称、未核算的折扣，或在库存 Owner 叫停后继续销售。</p>

<h2>分开看四类场中信号，避免追逐噪音</h2>
<p>第一类是注意信号，判断观众是否注意到商品或演示。第二类是考虑信号，包括有实质内容的问题、对比请求，以及账户可见时的商品详情探索。第三类是交易信号，包括商品点击、加购和订单。第四类是运营信号，包括可用库存、失效变体、挂车准确性、价格差异、Moderator 升级和履约预警。</p>
<p>每类信号改变的决定不同。评论增加可能改变演示时长；价格不一致应该暂停相关话术；库存达到触发线应该移除或替换；订单增长也不能覆盖负贡献毛利。账户数据缺失就是未知，不是零。每个关键回读都要记录来源与时间，场后才能区分真实发生的事和团队原先的预期。</p>

<h2>每个商品都必须得到明确的加入、暂缓、移除或退役决定</h2>
<p>场后复盘结束时，每个 SKU 只能进入四种状态之一。加入，表示通过准入，可以在明确条件下进入下一场；暂缓，表示需要完成一个具名修复，例如澄清 Listing、确认库存、更换样品或重算经营账；移除，表示准入条件已经失效，必须立刻离开活跃货盘；退役，表示除非商品、供给或经济条件发生实质变化，否则不再回到这种直播场景。</p>
<p>不要留下模糊的“下次再试”。必须写明 Owner、所需证据和最早复核日期。只有控制表完成批准后，才同步平台 Product Set，避免复制旧集合时把过期价格、不可用变体或已经不该主推的商品一起带入新场次。</p>
<figure><img src="/blog/${slug}-review-loop-zh-v1.svg" alt="TikTok Shop LIVE 场后货盘决策循环"><figcaption>场后复盘要以有 Owner 的商品去留决定结束，而不是一句“表现还可以”。</figcaption></figure>

<h2>假设性运营示例</h2>
<p>以下是假设示例，不是 WEM 客户结果。一家美国美妆品牌为 45 分钟 LIVE 准备六个 SKU。畅销品需求强，但只有一个色号的库存安全；Routine Bundle 的展示价看起来有吸引力，但已有卖家优惠叠加后，贡献毛利低于批准底线；新品库存和毛利都可以，主播手上的样品却是旧包装，无法支撑当前 Listing 语言。</p>
<p>运营只放行畅销品中已核验的色号，并设本场上限；Bundle 暂缓，等有效价格表修复；新品先移除，等当前样品与批准宣称到位。其余顺序由两个稳定商品补足。场中，库存 Owner 看到畅销品触发线后，要求停止挂车；主播切到已批准的对比商品，没有说“马上售罄”。复盘时，团队记录消费者问题、曝光数量、实际贡献视角、异常，以及每个暂缓 SKU 唯一要修的事项。这里的成功是控制与可复用证据，不是宣称货盘治理能保证销量。</p>

<h2>今天最小可执行动作</h2>
<p>下一场 LIVE 前，先为准备主推的前三个商品做一页控制表。逐个记录 Listing 事实、可售库存、本场上限、消费者实付价、卖家承担成本、贡献毛利底线、演示证明、顺序位置、备用商品和叫停 Owner。把它与当前 Product Set 和 LIVE Showcase 并排核对。任何值不一致或仍未知，就先移除。完成这一步，比再往购物袋里增加一个没人治理的商品更有价值。</p>

<h2>来源说明与执行边界</h2>
<p>这个原创 WEM 经营框架基于 2026 年 8 月 31 日重新核验的完整美国站 TikTok Shop Seller University 资料：<a href="${sources[0]}">LIVE Product Set</a>、<a href="${sources[1]}">A Guide to Your First LIVE Selling Preparations &amp; How to Select Products</a>、<a href="${sources[2]}">TikTok LIVE Shopping</a> 与 <a href="${sources[3]}">Choosing the Right Products for LIVE Selling</a>。平台界面、资格、限制、商品状态、促销控制和账户数据可能变化。执行前请核验当前美国 Seller Center，以及品牌自己的库存和经营账。</p>

<h2>常见问题</h2>
<h3>一场 TikTok Shop LIVE 应该放多少商品？</h3><p>只放团队能够演示、监控并履约的数量。官方资料提供商品选择示例和平台限制，但经营数量取决于场次时长、消费者问题、库存、经济条件与团队能力。</p>
<h3>LIVE Product Set 就等于已经批准的货盘吗？</h3><p>不等于。Product Set 是平台容器；批准货盘是品牌自己的决策记录，证明每个 SKU 通过了商品真实度、供给、经营账、直播间准备和责任人五道门。</p>
<h3>GMV 最高的商品是否应该一直挂车？</h3><p>不应该。挂车要匹配当前演示与已批准顺序，同时商品还必须保持真实、可售、经济可接受和运营安全。</p>
<h3>直播中库存突然不确定怎么办？</h3><p>立即启用提前约定的叫停 Owner 与备用商品。库存事实恢复前暂停主推或移除商品，不要编造稀缺话术。</p>
<h3>LIVE 货盘多久复核一次？</h3><p>至少在放行前、开播前、场中触发点和场后各复核一次。可重复使用的 Product Set 在复制到新场次前也必须重新对账。</p>
<h3>场后判断货盘最重要的指标是什么？</h3><p>没有单一指标。要把注意、交易证据与库存、有效价格、贡献毛利、异常和履约结果接起来，再给每个 SKU 一个有 Owner 的去留决定。</p>`;

const strip = (html) => html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
const enWords = strip(en).split(/\s+/).length;
const zhChars = (strip(zh).match(/[\u3400-\u9fff]/g) || []).length;
if (enWords < 1300) throw new Error(`English body too short: ${enWords}`);
if (zhChars < 1800) throw new Error(`Chinese body too short: ${zhChars}`);
if (/[—]/.test(en + zh)) throw new Error('Em dash detected');

const faqs = (body) => [...body.matchAll(/<h3>([^<]+)<\/h3><p>([^<]+)<\/p>/g)]
  .slice(-6)
  .map(([, name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } }));
const esc = (s) => s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const decorateBody = (body) => body.replace(/<h2>([^<]+)<\/h2>([\s\S]*?)(?=<h2>|$)/g, (block, title, content) => {
  if (/^Direct answer|^直接答案|Frequently asked|常见问题/i.test(title)) return block;
  if (/^Source notes|^来源说明/i.test(title)) return `<section class="wem-source-card wem-source-notes"><h2>${title.replace(/ and (?:operating |execution )?boundary/i, '').replace(/与执行边界|与运营边界/g, '')}</h2>${content}</section>`;
  if (/^Smallest useful|^今天最小可执行动作/i.test(title)) return `<section class="wem-action-card"><h2>${title}</h2>${content}</section>`;
  if (/^Hypothetical|^假设性运营示例/i.test(title)) return `<section class="wem-example-card"><h2>${title}</h2>${content}</section>`;
  return `<section class="wem-topic-card"><h2>${title}</h2>${content}</section>`;
});

const logoData = `data:image/png;base64,${(await fs.readFile(path.join(repo, 'ui_kits/website/assets/we-logo.png'))).toString('base64')}`;
const cover = `<svg xmlns="http://www.w3.org/2000/svg" width="1774" height="887" viewBox="0 0 1774 887">
<defs><linearGradient id="bg" x2="1" y2="1"><stop stop-color="#fffdf8"/><stop offset="1" stop-color="#e8e5ff"/></linearGradient><linearGradient id="p" x2="1" y2="1"><stop stop-color="#7668e8"/><stop offset="1" stop-color="#a994ff"/></linearGradient><filter id="s"><feDropShadow dx="0" dy="18" stdDeviation="18" flood-color="#453a86" flood-opacity=".18"/></filter></defs>
<rect width="1774" height="887" fill="url(#bg)"/><rect x="74" y="64" width="420" height="50" rx="25" fill="#dce7ff"/><text x="100" y="97" font-family="Arial" font-size="19" font-weight="700" fill="#2457c7">TIKTOK SHOP U.S. · LIVE OPERATIONS</text>
<text x="76" y="210" font-family="Arial Black,Arial" font-size="68" font-weight="900" fill="#171424">LIVE ASSORTMENT</text><text x="76" y="286" font-family="Arial Black,Arial" font-size="68" font-weight="900" fill="#315bdd">WITHOUT LOSING</text><text x="76" y="362" font-family="Arial Black,Arial" font-size="68" font-weight="900" fill="#171424">CONTROL</text>
<rect x="78" y="405" width="90" height="8" rx="4" fill="#315bdd"/><text x="78" y="468" font-family="Arial" font-size="26" fill="#403b52">Protect inventory, margin, and the next decision.</text>
<g transform="translate(1005 105)" filter="url(#s)"><ellipse cx="330" cy="590" rx="330" ry="70" fill="#d0c9ff"/><rect x="72" y="360" width="520" height="220" rx="48" fill="#9b91ed"/><rect x="118" y="248" width="430" height="175" rx="42" fill="#bdb6ff"/><rect x="178" y="138" width="310" height="160" rx="38" fill="#d4d0ff"/><rect x="220" y="84" width="92" height="135" rx="22" fill="url(#p)"/><rect x="334" y="105" width="106" height="112" rx="20" fill="#fff" stroke="#7668e8" stroke-width="5"/><path d="M358 142h58M358 165h44M358 188h52" stroke="#5460dc" stroke-width="9" stroke-linecap="round"/><rect x="133" y="425" width="128" height="104" rx="20" fill="#fff"/><path d="M158 457h78M158 482h62M158 507h70" stroke="#5460dc" stroke-width="10" stroke-linecap="round"/><rect x="293" y="453" width="108" height="77" rx="15" fill="#6a5cdf"/><path d="M420 443h80l24 87h-128z" fill="#f1a2c9"/><circle cx="503" cy="151" r="64" fill="#5262e8"/><path d="M475 151l18 18 37-43" fill="none" stroke="#fff" stroke-width="13" stroke-linecap="round" stroke-linejoin="round"/></g>
<image href="${logoData}" x="78" y="760" width="135" height="82" preserveAspectRatio="xMinYMid meet"/></svg>`;

const diagram = (title, labels, accent = '#ff4fa3') => `<svg xmlns="http://www.w3.org/2000/svg" width="1400" height="760" viewBox="0 0 1400 760"><rect width="1400" height="760" rx="34" fill="#17142f"/><text x="72" y="92" fill="#fff" font-family="Arial" font-size="38" font-weight="800">${title}</text><path d="M130 380H1270" stroke="#5f56a4" stroke-width="10" stroke-linecap="round"/>${labels.map((label, i) => { const x = 145 + i * (1110 / (labels.length - 1)); return `<g transform="translate(${x} 255)"><circle cx="0" cy="125" r="62" fill="#383272" stroke="${accent}" stroke-width="7"/><text x="0" y="136" text-anchor="middle" fill="#fff" font-family="Arial" font-size="30" font-weight="800">${i + 1}</text><rect x="-102" y="218" width="204" height="72" rx="22" fill="#f3f0ff"/><text x="0" y="264" text-anchor="middle" fill="#231d43" font-family="Arial" font-size="20" font-weight="700">${label}</text></g>`; }).join('')}<text x="72" y="700" fill="#bcb6e8" font-family="Arial" font-size="18">WE MARKETING · OPERATOR FRAMEWORK</text></svg>`;

const schema = { '@context': 'https://schema.org', '@graph': [
  { '@type': 'BlogPosting', headline: titleEn, description: descriptionEn, inLanguage: 'en-US', datePublished: date, dateModified: date, mainEntityOfPage: `https://www.weglobalmarketing.com/blog/${slug}`, image: `https://www.weglobalmarketing.com/blog/hero-${slug}-v1.png`, author: { '@type': 'Organization', name: 'WE Marketing' }, publisher: { '@type': 'Organization', name: 'WE Marketing' }, citation: sources },
  { '@type': 'BlogPosting', headline: titleZh, description: descriptionZh, inLanguage: 'zh-CN', datePublished: date, dateModified: date, mainEntityOfPage: `https://www.weglobalmarketing.com/blog/${slug}?lang=zh`, image: `https://www.weglobalmarketing.com/blog/hero-${slug}-v1.png`, author: { '@type': 'Organization', name: 'WE Marketing' }, publisher: { '@type': 'Organization', name: 'WE Marketing' }, citation: sources },
  { '@type': 'FAQPage', inLanguage: 'en-US', mainEntity: faqs(en) },
  { '@type': 'FAQPage', inLanguage: 'zh-CN', mainEntity: faqs(zh) },
] };

const page = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><script>document.documentElement.dataset.lang=new URLSearchParams(location.search).get('lang')==='zh'?'zh':'en';document.documentElement.lang=document.documentElement.dataset.lang==='zh'?'zh-CN':'en'</script><title>${esc(titleEn)} | WE Marketing</title><meta name="description" content="${esc(descriptionEn)}"><link rel="canonical" href="https://www.weglobalmarketing.com/blog/${slug}"><link rel="alternate" hreflang="en-US" href="https://www.weglobalmarketing.com/blog/${slug}"><link rel="alternate" hreflang="zh-CN" href="https://www.weglobalmarketing.com/blog/${slug}?lang=zh"><link rel="alternate" hreflang="x-default" href="https://www.weglobalmarketing.com/blog/${slug}"><meta property="og:type" content="article"><meta property="og:title" content="${esc(titleEn)}"><meta property="og:description" content="${esc(descriptionEn)}"><meta property="og:image" content="https://www.weglobalmarketing.com/blog/hero-${slug}-v1.png"><meta property="article:published_time" content="${date}"><meta name="twitter:card" content="summary_large_image"><script type="application/ld+json">${JSON.stringify(schema)}</script><link rel="stylesheet" href="/blog/wem-editorial-system.css"><link rel="stylesheet" href="/blog/wem-editorial-article.css"><style>html,body{max-width:100%;overflow-x:hidden}.wrap{max-width:980px;margin:auto;padding:32px 22px 80px}.wrap article{max-width:860px}.wrap h1{max-width:780px;font-size:clamp(40px,5vw,62px);line-height:1.02;overflow-wrap:anywhere}.wrap article>p:not(:first-child),.wrap article li{font-size:18px;line-height:1.72}.hero,figure img{display:block;width:100%;height:auto;border-radius:20px}table{width:100%}.wem-topic-card,.wem-source-card,.wem-example-card{margin:28px 0;padding:28px 32px;border:1px solid #ded9d1;border-left:4px solid #ff1493;border-radius:16px;background:#fff;box-shadow:0 12px 30px rgba(34,28,76,.06)}.wem-topic-card h2,.wem-source-card h2,.wem-example-card h2,.wem-action-card h2{margin:0 0 18px;padding:0;border:0;font-size:clamp(25px,3vw,32px);line-height:1.18;color:#1746b8;letter-spacing:-.025em}.wem-topic-card h2:after,.wem-source-card h2:after,.wem-example-card h2:after,.wem-action-card h2:after{display:none}.wem-topic-card p,.wem-source-card p,.wem-example-card p{margin:0 0 14px}.wem-topic-card p:last-child,.wem-source-card p:last-child,.wem-example-card p:last-child{margin-bottom:0}.wem-source-card{border-left-color:#6b59df;background:linear-gradient(120deg,#f7f6ff,#fff)}.wem-source-card a{color:#1746b8;text-decoration-color:#9b8feb;text-decoration-thickness:1px;text-underline-offset:3px}.wem-example-card{border-left-color:#8b75ec;background:#faf9ff}.wem-action-card{margin:34px 0;padding:30px 34px;border-radius:16px;background:linear-gradient(122deg,#171b4d,#3436a6 66%,#7c35df);box-shadow:0 16px 38px rgba(37,33,107,.18);color:#fff}.wem-action-card h2,.wem-action-card p{color:#fff!important}.wem-action-card p{margin:0!important;font-size:18px!important;line-height:1.7!important}.wem-topic-card table{margin:22px 0 4px}article[lang=zh-CN]{display:none}html[data-lang=zh] article[lang=en]{display:none}html[data-lang=zh] article[lang=zh-CN]{display:block}@media(max-width:650px){.wrap{padding:20px 15px 60px}.wrap h1{font-size:40px}.wrap article>p:not(:first-child),.wrap article li{font-size:17px}.wem-topic-card,.wem-source-card,.wem-example-card{padding:22px 20px}.wem-action-card{padding:25px 22px}.wem-topic-card h2,.wem-source-card h2,.wem-example-card h2,.wem-action-card h2{font-size:25px}table{display:block;overflow:auto}}</style></head><body><main class="wrap"><a href="/blog">← Blog</a><article lang="en"><p>TIKTOK SHOP U.S. · LIVE OPERATIONS</p><h1>${titleEn}</h1><p>WE Marketing Team · Aug 31, 2026 · 16 min read</p><img class="hero" src="/blog/hero-${slug}-v1.png" alt="WE Marketing editorial cover for TikTok Shop LIVE assortment operations">${decorateBody(en)}</article><article lang="zh-CN"><p>TIKTOK SHOP 美国站 · LIVE 运营</p><h1>${titleZh}</h1><p>WE Marketing Team · 2026 年 8 月 31 日 · 16 分钟阅读</p><img class="hero" src="/blog/hero-${slug}-v1.png" alt="WE Marketing 关于 TikTok Shop LIVE 货盘运营的编辑风封面">${decorateBody(zh)}</article></main><script src="/blog/wem-editorial-enhance.js" defer></script></body></html>`;

await fs.rm(patch, { recursive: true, force: true });
await fs.mkdir(path.join(blog, 'optimized'), { recursive: true });
await fs.mkdir(path.join(blog, 'thumbs'), { recursive: true });
await fs.mkdir(path.join(patch, 'assets'), { recursive: true });
await fs.copyFile(path.join(repo, 'ui_kits/website/assets/we-logo.png'), path.join(patch, 'assets/we-logo.png'));
await fs.writeFile(path.join(blog, `${slug}.html`), page);
await fs.writeFile(path.join(blog, `hero-${slug}-v1.svg`), cover);
await fs.writeFile(path.join(blog, `${slug}-release-gate-v1.svg`), diagram('THE FIVE-PART LIVE ASSORTMENT RELEASE GATE', ['TRUTH', 'SUPPLY', 'MARGIN', 'ROOM', 'OWNER']));
await fs.writeFile(path.join(blog, `${slug}-release-gate-zh-v1.svg`), diagram('LIVE 货盘五道准入门', ['真实度', '供给', '毛利', '场内', '责任人']));
await fs.writeFile(path.join(blog, `${slug}-control-ledger-v1.svg`), diagram('THE LIVE ASSORTMENT CONTROL LEDGER', ['STOCK', 'PRICE', 'COST', 'POSITION', 'STOP']));
await fs.writeFile(path.join(blog, `${slug}-control-ledger-zh-v1.svg`), diagram('LIVE 货盘控制表', ['库存', '价格', '成本', '位置', '叫停']));
await fs.writeFile(path.join(blog, `${slug}-review-loop-v1.svg`), diagram('POST-LIVE SKU DISPOSITION', ['ADD', 'HOLD', 'REMOVE', 'RETIRE']));
await fs.writeFile(path.join(blog, `${slug}-review-loop-zh-v1.svg`), diagram('场后 SKU 去留决定', ['加入', '暂缓', '移除', '退役']));

let list = await fs.readFile(path.join(repo, 'outputs/patches/2026-08-21-training27/BlogList.jsx'), 'utf8');
const row = `{slug:'${slug}',tags:['tiktok-shop','live','shop-operations'],cat:{en:'TIKTOK SHOP U.S. · LIVE OPERATIONS',zh:'TIKTOK SHOP 美国站 · LIVE 运营'},title:{en:'${titleEn}',zh:'${titleZh}'},excerpt:{en:'Release, sequence, monitor, and review LIVE products without losing inventory or margin control.',zh:'用准入、排序、监控与复盘管住 LIVE 商品的库存和毛利。'},date:{en:'Aug 31, 2026',zh:'2026 年 8 月 31 日'},read:{en:'16 min read',zh:'16 分钟阅读'},image:'hero-${slug}-v1.png'},`;
if (!list.includes(`slug:'${slug}'`)) list = list.replace('const BLOG_POSTS = [', `const BLOG_POSTS = [${row}`);
await fs.writeFile(path.join(patch, 'BlogList.jsx'), list);
const babelCode = await fs.readFile(path.join(repo, '.cache/babel-standalone-7.29.0.min.js'), 'utf8');
const sandbox = {}; vm.createContext(sandbox); vm.runInContext(babelCode, sandbox);
const compiled = sandbox.Babel.transform(list, { presets: [['react', { runtime: 'classic' }]], comments: false, compact: true, minified: true, sourceType: 'script' }).code;
await fs.writeFile(path.join(patch, 'BlogList.compiled.js'), `${compiled}\n`);

const fetchText = async (url) => { const response = await fetch(url); if (!response.ok) throw new Error(`${url} returned ${response.status}`); return response.text(); };
let index = await fetchText('https://www.weglobalmarketing.com/blog');
index = index.replace(/BlogList\.compiled\.js\?v=[^"']+/, 'BlogList.compiled.js?v=20260831-training28-01');
await fs.writeFile(path.join(patch, 'blog.html'), index);
let sitemap = await fetchText('https://www.weglobalmarketing.com/sitemap.xml');
if (!sitemap.includes(`/blog/${slug}</loc>`)) sitemap = sitemap.replace('</urlset>', `<url><loc>https://www.weglobalmarketing.com/blog/${slug}</loc><lastmod>${date}</lastmod></url></urlset>`);
else sitemap = sitemap.replace(new RegExp(`(<loc>https://www\\.weglobalmarketing\\.com/blog/${slug}</loc><lastmod>)[^<]+`), `$1${date}`);
await fs.writeFile(path.join(patch, 'sitemap.xml'), sitemap);
let llms = await fetchText('https://www.weglobalmarketing.com/llms.txt');
if (!llms.includes(`https://www.weglobalmarketing.com/blog/${slug}`)) llms += `\n- ${titleEn}: https://www.weglobalmarketing.com/blog/${slug}\n  - Chinese: https://www.weglobalmarketing.com/blog/${slug}?lang=zh\n`;
await fs.writeFile(path.join(patch, 'llms.txt'), llms);
let enhancer = await fetchText('https://www.weglobalmarketing.com/blog/wem-editorial-enhance.js');
if (!enhancer.includes(`'${slug}': ['tiktok-shop-live-first-five-sessions-learning-system'`)) enhancer = enhancer.replace("'weekly-tiktok-shop-operating-review': ['tiktok-shop-growth-bottleneck', 'tiktok-shop-content-assortment-balance', 'measure-tiktok-shop-partner-performance'],", `'${slug}': ['tiktok-shop-live-first-five-sessions-learning-system', 'tiktok-shop-live-preheat-system', 'weekly-tiktok-shop-operating-review'],\n    'weekly-tiktok-shop-operating-review': ['tiktok-shop-growth-bottleneck', 'tiktok-shop-content-assortment-balance', 'measure-tiktok-shop-partner-performance'],`);
if (!enhancer.includes(`'${slug}': '${titleEn}'`)) enhancer = enhancer.replace("'weekly-tiktok-shop-operating-review': 'The Weekly TikTok Shop Operating Review',", `'${slug}': '${titleEn}', 'tiktok-shop-live-first-five-sessions-learning-system': 'The First Five LIVE Sessions Learning System', 'tiktok-shop-live-preheat-system': 'The TikTok Shop LIVE Preheat System',\n    'weekly-tiktok-shop-operating-review': 'The Weekly TikTok Shop Operating Review',`);
for (const protectedSlug of ['tiktok-shop-live-preheat-system', slug]) {
  if (!new RegExp(`coverAlreadyIncludesCopy[\\s\\S]*?'${protectedSlug}'[\\s\\S]*?\\]`).test(enhancer)) {
    enhancer = enhancer.replace(/(const coverAlreadyIncludesCopy = new Set\(\[)/, `$1\n    '${protectedSlug}',`);
  }
}
await fs.writeFile(path.join(blog, 'wem-editorial-enhance.js'), enhancer);

console.log(JSON.stringify({ patch, slug, date, enWords, zhChars, files: (await fs.readdir(blog)).length }, null, 2));
