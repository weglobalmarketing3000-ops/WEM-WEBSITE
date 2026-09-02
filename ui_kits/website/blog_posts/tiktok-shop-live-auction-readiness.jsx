const P = (text) => ({ kind: 'p', text });
const UL = (items, ordered = false) => ({ kind: 'list', items, ordered });
const TABLE = (headers, rows) => ({ kind: 'table', headers, rows });
const CALLOUT = (text) => ({ kind: 'callout', text });
const INFO = (src, alt, caption) => ({ kind: 'infographic', src, alt, caption });
const CTA = (label, href = 'https://zus03h0enw04.sg.larksuite.com/scheduler/03970278dd9a7925') => ({ kind: 'cta', label, href });
const LABELS = { en:{back:'Blog',toc:'On this page',faq:'Frequently asked questions',related:'Related guides'}, zh:{back:'博客',toc:'本文目录',faq:'常见问题',related:'相关文章'} };

const POSTS = {
en:{
 meta:{title:'TikTok Shop LIVE Auctions: The U.S. Brand Readiness System',cat:'TIKTOK SHOP U.S. · LIVE COMMERCE',author:'WE Marketing Team',date:'Updated Aug 12, 2026',read:'13 min read',heroImage:'hero-tiktok-shop-live-auction-readiness.png',heroAlt:'TikTok Shop LIVE auction operating system connecting eligible sellers and creators, accurate listings, on-camera product reveals, and fulfillment'},
 sections:[
  {id:'decision',eyebrow:'THE REAL DECISION',h:'Do not start with the countdown. Start with whether the product belongs in an auction.',body:[
   CALLOUT('A TikTok Shop LIVE auction is not a louder version of a normal product launch. It compresses product proof, creator judgment, pricing, customer expectation, and fulfillment into one timed moment. A brand should use it only when that pressure makes the product easier to understand, not when urgency is being used to hide a weak offer.'),
   P('TikTok Shop Academy’s current U.S. Auction Requirements, dated August 6, 2026, apply to sellers and creators. They require auctions to run through TikTok Shop’s LIVE Auction feature and limit auctions to categories and formats the platform expressly allows. The companion LIVE Auction guide, dated August 3, explains the feature workflow. Together, they set the boundary for eligibility, listing truth, final sale, cancellation, customer protection, Temporary Listings, Surprise Sets, disclosures, and enforcement.'),
   P('The operating question is therefore not “How fast can we add auctions to the LIVE calendar?” It is “Can this team show exactly what is being sold, use an eligible host, keep the listing and on-camera presentation aligned, explain what is final, and fulfill the winning order without improvising?” If any answer is unclear, the countdown magnifies the gap.'),
   INFO('tiktok-shop-auction-readiness-loop.svg','WEM LIVE auction readiness loop: product fit, eligibility, listing truth, host execution, fulfillment, and weekly review','WEM operating framework: earn the right to start the countdown by proving the system can run cleanly end to end.')
  ]},
  {id:'fit',eyebrow:'PRODUCT FIT',h:'Auction fit comes from inspectability and real demand, not artificial excitement',body:[
   P('Auctions work best when viewers can inspect meaningful differences in real time. Collectibles, pre-owned goods, limited variations, or products whose condition and details matter can create a legitimate reason to watch and bid. A standard replenishment item with stable pricing may be easier to buy through a normal product link. Adding a timer does not automatically add value.'),
   P('Before choosing the format, write the buyer’s reason to participate in one sentence. It might be access to a specific item, the ability to see condition before bidding, or a LIVE reveal that makes the assortment understandable. “It will feel exciting” is not enough. The product still needs a clear identity, accurate condition, a price boundary the brand can fulfill, and a reason the audience trusts the host.'),
   TABLE(['Readiness question','Use an auction when…','Use a standard listing when…'],[
    ['Can the item be inspected live?','Condition, variation, or provenance can be shown clearly on camera.','The offer is standardized and a timed reveal adds little information.'],
    ['Does the audience understand the category?','The creator can explain the item and answer category-specific questions accurately.','The host would be learning the product while selling it.'],
    ['Can each winning item be fulfilled?','Inventory, identification, packing, and order handoff are controlled.','The team cannot reliably map the shown item to the shipped item.'],
    ['Is urgency truthful?','The auction reflects a real item and real availability.','The concept depends on exaggerated scarcity or value language.']
   ]),
   P('This is the first WEM gate: product fit before feature access. A brand that cannot pass it should improve its product page, creator education, or normal LIVE format first. Auction capability is not a reason to force an auction.')
  ]},
  {id:'eligibility',eyebrow:'ELIGIBILITY',h:'The seller and the host both need a clean path to the feature',body:[
   P('The Academy page separates seller, seller-type creator, and affiliate-creator eligibility. Current requirements include health-rating and compliance conditions, with additional Product Promotion Score requirements for affiliate creators. Temporary Listings have their own access conditions. These thresholds are platform rules, not WEM targets, and account-specific access can change. Verify the current status inside Seller Center before building the show around one host.'),
   P('Operationally, this means creator selection cannot happen only on camera presence or prior GMV. The team needs to confirm that the creator can access the required auction tools, is not under a LIVE ban or temporary suspension, and can follow listing and reveal rules under pressure. A backup host should be qualified before launch, not discovered after the scheduled creator loses access.'),
   UL(['Confirm seller feature access and account-health status before announcing the LIVE.','Verify creator eligibility in the current seller workflow; do not rely on an old screenshot or verbal assurance.','Choose a host who can explain condition, category, exclusions, and customer questions in plain language.','Prepare a qualified backup host and a normal-LIVE fallback plan.','Do not ask a creator to recreate bidding through comments, external tools, manual randomization, or an unsupported format.']),
   P('Creator fit still matters after the gate. A high-GMV creator from an unrelated category may not be able to explain a collectible, assess product condition, or keep the listing and physical item synchronized. For auctions, product literacy and procedural discipline become part of conversion quality.')
  ]},
  {id:'truth',eyebrow:'LISTING TRUTH',h:'What appears on screen, in the listing, and in the package must be the same product truth',body:[
   P('TikTok Shop requires auction listings to accurately represent the item and use the most accurate category. If category qualification is required, approval must come before the auction. Temporary Listings can speed up LIVE setup, but they disappear after the session and do not sync to the shop or Shopify. That convenience increases the need for a controlled source of truth.'),
   P('The current LIVE Auction guide adds a product-path decision. A Temporary Listing is for a single LIVE test. An approved Auction Product can be reused in future LIVE sessions, but it is not searchable in the shop. Turning an existing product into an Auction Product also removes its searchability, so a brand that needs both paths should create separate listings. Pre-Order, Made-to-Order, and Backorder products cannot be converted to Auction Products. Treat this as catalog architecture, not a last-minute LIVE setting.'),
   P('Create one auction item sheet for every product or set. Give it a stable internal ID, exact title, brand, condition, included pieces, defects, dimensions where relevant, category, fulfillment location, and the camera angle needed to prove the item. The host, moderator, listing operator, and warehouse should work from the same record. The goal is to prevent a good show from creating a bad order.'),
   P('The LIVE should reveal what a buyer cannot judge from a thumbnail. Show condition close-ups, packaging, included accessories, scale, and any relevant wear. Do not let the host fill silence with unverified value claims, investment language, or exaggerated rarity. The clearest show is usually more persuasive than the loudest show because the buyer can understand what will arrive.'),
   P('For Surprise Sets, the official rules go further: eligible categories, sealed and unmodified products, item-value boundaries, complete possible-item information, official randomization, on-screen display, immediate reveal, and prohibited monetary, market-comparison, prize, investment, and exaggerated-scarcity claims. Brands should build a separate checklist for this format rather than treating it as a normal auction with hidden inventory.')
  ]},
  {id:'run',eyebrow:'LIVE EXECUTION',h:'Design the control room before you design the show',body:[
   P('A clean auction needs at least four named owners, even if one person covers more than one role. The host explains and reveals. The moderator manages questions and flags confusion. The listing operator confirms the correct item and starts the official feature. The fulfillment owner receives the winning-item record and protects the chain from screen to package.'),
   TABLE(['Moment','Owner','Required evidence'],[
    ['Before countdown','Listing operator','Correct item ID, category, listing details, inventory, and feature state.'],
    ['During demonstration','Host','The physical item matches the listing and all material condition details are shown.'],
    ['During bidding','Moderator','Customer questions, correction notes, and prohibited-claim intervention are logged.'],
    ['After close','Fulfillment owner','Winning order is matched to the exact item, packed, scanned, and handed off.'],
    ['After LIVE','Operations lead','Cancellations, disputes, defects, and repeated questions are reviewed before the next session.']
   ]),
   P('Rehearse the handoffs with one test item. The test should include a listing check, a complete on-camera description, the countdown cue, the winner record, label or order mapping, packing instructions, and a simulated customer question. A rehearsal that only checks lighting and microphones misses the highest-risk parts of the format.'),
   P('The host brief should be short enough to use live. Include the item identity, three proof points, every condition note, phrases to avoid, the final-sale explanation, and who can answer an uncertain question. If the host does not know, the correct move is to pause and verify, not invent an answer to keep momentum.'),
   P('The LIVE guide allows a countdown from three seconds to two minutes, with an extension option when a bid arrives at the end and a sudden-death option when the clock should not reset. These are show controls, not conversion guarantees. Test timer behavior with one controlled item and keep the product proof, moderation, and fulfillment handoff intact before shortening the pace.')
  ]},
  {id:'aftersale',eyebrow:'AFTER THE WIN',h:'Final sale does not remove the obligation to deliver what was shown',body:[
   P('The current Academy requirements say auction orders are final sales for change-of-mind returns. They also preserve a path for valid issues such as missing, damaged, not-received, or not-as-described items, with evidence and a 14-day window. Buyers also cannot directly cancel before shipment; requests may be reviewed by the seller or Customer Service.'),
   P('Brands should explain the boundary before bidding without turning the LIVE into legal narration. Use one clear sentence, place the same expectation in the listing, and train moderators to answer consistently. Then focus on the controllable work: accurate description, item-level photography, careful packing, scan evidence, and fast support when the delivered item does not match the promise.'),
   P('Auction Protection is not a substitute for quality control. If disputes cluster around condition, missing pieces, or confusing reveals, the team should stop that product format and fix the source record or show flow. More auctions will only create more evidence of the same operating failure.')
  ]},
  {id:'measure',eyebrow:'WEEKLY REVIEW',h:'Measure auction quality before scaling auction volume',body:[
   P('Revenue alone can hide a fragile auction. WEM recommends reviewing five layers: qualified audience, bidding behavior, listing accuracy, fulfillment quality, and repeatable content. Look at unique engaged viewers, qualified bidders, completion rate, winning-price distribution, question themes, correction events, packing exceptions, cancellation requests, disputes, and whether clips from the LIVE create useful product education afterward.'),
   P('Compare auctions with normal LIVE or product-card sales for the same category. If auctions create more revenue but also materially more disputes, manual work, or creator errors, the format may be shifting cost rather than creating durable demand. If the show produces clearer product education, stronger creator confidence, and reliable fulfillment, then expand one controlled variable at a time.'),
   P('Category context matters in that comparison. A collectible audience may expect detailed condition talk and a slower inspection rhythm, while a beauty audience may need shade, seal, ingredient, and packaging clarity before a Surprise Set makes sense. Home, electronics, and fashion accessories create different questions about dimensions, compatibility, variants, and damage risk. Do not copy the pacing of a successful auction from another category without copying the information discipline that made it credible. Build the show around the purchase questions of this product, then let the creator’s style make that evidence watchable.'),
   P('Also separate audience growth from auction quality. A strong creator can attract viewers who enjoy the show but never intended to bid. That attention may still be useful if it produces reusable demonstrations or future product demand, but it should not be mistaken for auction readiness. Review who stayed through the product proof, who asked qualified questions, and where bidding stopped. Those signals tell the team whether to improve the product story, starting position, host education, assortment, or fulfillment promise before adding more traffic.'),
   UL(['Week 1: choose one auction-fit category and complete seller, creator, listing, and fulfillment readiness checks.','Week 2: rehearse with a small item set; correct the source sheet, host brief, and warehouse handoff.','Week 3: run a limited LIVE with one qualified host and a normal-purchase fallback.','Week 4: review buyer questions, bidding, corrections, packing, cancellations, disputes, and content reuse before adding more items or creators.']),
   P('The WEM operating loop is simple: choose the right product, verify access, build listing truth, rehearse the host and handoffs, fulfill the exact promise, then review the evidence. The countdown should be the final step in that system, not the first.'),
   CTA('Build a creator and LIVE commerce operating plan with WEM →')
  ]},
  {id:'sources',eyebrow:'SOURCE NOTES',h:'Sources and boundaries',body:[
   P('Primary sources: TikTok Shop Academy, “Auction Requirements,” dated August 6, 2026, and “LIVE Auction,” dated August 3, 2026, both applicable to the United States. WEM reviewed the live pages on August 12, 2026. Auction format, eligibility, listing, final sale, cancellation, customer protection, Temporary Listing, Surprise Set, disclosure, enforcement, and feature-workflow facts are attributed to those pages.'),
   P('The product-fit gate, auction item sheet, control-room roles, rehearsal, measurement model, and four-week rollout are WEM operating frameworks. They are not TikTok Shop policy, legal advice, or a guarantee of feature access, creator performance, bids, revenue, or dispute outcomes. Confirm current account eligibility and requirements in Seller Center.'),
   CTA('Read the official TikTok Shop LIVE Auction guide','https://seller-us.tiktok.com/university/essay?knowledge_id=8427133325330222')
  ]}
 ],
 faqs:[
  {q:'Can any U.S. TikTok Shop seller run a LIVE auction?',a:'No. TikTok Shop Academy says the Live Auction Feature is available to eligible sellers and creators, with participant-specific account-health and compliance conditions. Confirm current access in Seller Center before scheduling.'},
  {q:'Can a creator run bidding through comments or another tool?',a:'No. The current U.S. requirements say auctions must use TikTok Shop’s LIVE Auction feature. Auctions or related activities outside that feature are not allowed.'},
  {q:'Are TikTok Shop auction orders final sale?',a:'They are final for change-of-mind returns, but valid issues such as missing, damaged, not-received, or not-as-described items can still support a return or refund request under the current requirements.'},
  {q:'What products are best for TikTok Shop LIVE auctions?',a:'Use products whose condition, variation, provenance, or specific identity becomes clearer through live inspection. A standardized replenishment item may be better served by a normal listing.'},
  {q:'What should a brand verify before choosing an auction creator?',a:'Verify current feature eligibility, category knowledge, product fit, ability to follow listing and reveal rules, communication discipline, and a qualified backup plan.'},
  {q:'What is the difference between a Temporary Listing and an Auction Product?',a:'A Temporary Listing is for one LIVE and does not sync to the shop or Shopify. An approved Auction Product can be reused, but it is not searchable in the shop. Build separate listings when the same product needs both an auction and a normal purchase path.'},
  {q:'How should brands measure auction performance?',a:'Review revenue together with qualified bidders, listing corrections, customer questions, cancellations, disputes, packing exceptions, and whether the show creates reusable product education.'}
 ],
 related:[{label:'TikTok Shop LIVE Strategy for U.S. Brands',href:'tiktok-shop-live-strategy-brands'},{label:'TikTok Shop Creator Brief Template',href:'tiktok-shop-creator-brief-template'},{label:'TikTok Shop Product Card Strategy',href:'tiktok-shop-product-card-strategy'}]
},
zh:{
 meta:{title:'TikTok Shop LIVE 拍卖怎么做：美国站品牌上线前的运营系统',cat:'TIKTOK SHOP 美国 · 直播拍卖',author:'WE Marketing Team',date:'更新于 2026 年 8 月 12 日',read:'14 分钟阅读',heroImage:'hero-tiktok-shop-live-auction-readiness.png',heroAlt:'TikTok Shop LIVE 拍卖运营系统，连接卖家与达人资格、准确商品信息、镜头展示和履约保护'},
 sections:[
  {id:'zh-decision',eyebrow:'先做判断',h:'倒计时不是起点，产品是否适合拍卖才是',body:[
   CALLOUT('中国品牌、工厂和出海团队通常具备快速打样、成本控制、稳定生产、包装灵活、小批量测试和快速迭代的优势。但 LIVE 拍卖会把商品信息、达人判断、价格、用户预期和履约压缩到同一个实时场景。供应端速度只有在美国用户看得懂、达人讲得清、仓库发得准时才会变成优势。'),
   P('TikTok Shop Academy 当前适用于美国站的《Auction Requirements》页面日期为 2026 年 8 月 6 日。规则同时适用于卖家和达人，要求拍卖必须通过平台 LIVE Auction Feature 进行，并且只能用于平台明确允许的品类和形式。配套的《LIVE Auction》操作指南日期为 8 月 3 日。两篇资料共同说明了参与资格、商品信息、final sale、取消、用户保护、Temporary Listing、Surprise Set、披露、处罚和功能流程。'),
   P('真正的运营问题不是“我们能不能赶快加一场拍卖”，而是团队能不能在倒计时前确认六件事：商品适合实时竞价；店铺和达人有当前权限；镜头里的实物与 listing 完全一致；主持人知道什么能说、什么不能说；中奖订单能准确映射到实物；售后能处理描述不符、缺件或损坏等有效问题。'),
   INFO('tiktok-shop-auction-readiness-loop-zh.svg','WEM LIVE 拍卖准备闭环：商品匹配、资格、商品信息、达人执行、履约和每周复盘','WEM 运营框架：先证明系统能够稳定运行，再启动倒计时。')
  ]},
  {id:'zh-fit',eyebrow:'商品匹配',h:'真实可展示的差异，比人为制造的刺激更重要',body:[
   P('拍卖更适合能在镜头里被检查和比较的商品，例如收藏品、二手商品、限量变体，或成色与细节会直接影响购买判断的产品。标准化、稳定定价、需要长期复购的商品，往往用普通商品链接更清楚。倒计时本身不会自动创造价值。'),
   P('团队上线前要写出一句真实的参与理由：用户为什么要在这场 LIVE 里竞价，而不是直接购买？可能是看到具体成色、确认配件、获得某个独特款式，或通过实时展示理解商品差异。如果答案只有“现场更刺激”，说明产品逻辑还不够完整。'),
   TABLE(['判断问题','适合拍卖','更适合普通 listing'],[
    ['镜头能否帮助判断','成色、差异、细节或具体实物可以清楚展示','商品高度标准化，实时展示没有增加信息'],
    ['达人是否懂品类','能解释细节并准确回答问题','主持人会边卖边学习'],
    ['实物能否准确履约','每个成交商品都有唯一记录和仓库映射','镜头里的商品可能无法对应到发货实物'],
    ['紧迫感是否真实','来自真实库存和具体商品','依赖夸大稀缺、价值或中奖感']
   ]),
   P('这是 WEM 的第一道 gate：先看 product fit，再看 feature access。产品如果不过关，先改商品页、达人教育或普通 LIVE 结构，不要因为账户出现了拍卖功能就强行使用。')
  ]},
  {id:'zh-eligibility',eyebrow:'资格与达人',h:'店铺有权限，不代表任何达人都适合主持',body:[
   P('Academy 对卖家、seller-type creator 和 affiliate creator 分别列出当前资格条件，包括账户健康、合规状态，以及 affiliate creator 的 Product Promotion Score 要求。Temporary Listing 也有独立的准入条件。这些都是平台当前规则，不是 WEM KPI，执行前必须在 Seller Center 里核对实时状态。'),
   P('对中国团队来说，达人筛选不能只看历史 GMV 或镜头表现。还要确认达人是否真的能进入 Auction target plan、是否受到 LIVE 限制、是否懂这个品类、能否在现场守住商品信息和 claim 边界。一位在其他品类卖得很多的达人，不一定能解释收藏品成色、识别商品细节或把实物与 listing 对齐。'),
   UL(['排期前确认店铺当前功能权限与 account health。','在当前卖家流程中核对达人资格，不依赖旧截图或口头承诺。','选择能用简单语言讲清商品、成色、包含物和售后边界的主持人。','提前准备合格 backup host 和普通 LIVE 方案。','不允许达人通过评论区、外部工具、人工随机或其他非官方方式模拟竞价。']),
   P('达人 brief 也要改变。普通短视频 brief 可以强调购买理由；拍卖 brief 还必须包括唯一商品 ID、镜头必须展示的细节、不能使用的价值或稀缺表达、final sale 解释，以及出现不确定问题时找谁确认。')
  ]},
  {id:'zh-truth',eyebrow:'商品真相',h:'镜头、listing 和包裹必须讲同一个商品',body:[
   P('平台要求拍卖 listing 准确代表所售商品，并选择最准确的品类。如果品类需要 Category Qualification，必须先获得批准。Temporary Listing 虽然可以快速加入 LIVE，但场次结束后会被移除，也不会同步到店铺或 Shopify。速度越快，团队越需要一个稳定的商品 source of truth。'),
   P('新的 LIVE Auction 指南还明确了商品路径选择：Temporary Listing 适合单场测试；已审核的 Auction Product 可反复加入未来 LIVE，但不会在店铺中被搜索到。把现有商品切换成 Auction Product 也会失去搜索入口，因此同一商品如果既要日常销售又要拍卖，应建立两条独立 listing。Pre-Order、Made-to-Order 和 Backorder 商品不能转换为 Auction Product。这是 catalog architecture 决策，不是开播前几分钟的设置。'),
   P('WEM 建议每个拍卖商品或 set 建一张 item sheet：内部唯一 ID、准确标题、品牌、成色、包含物、缺陷、尺寸、品类、仓库位置、包装要求，以及镜头必须证明的画面。主持人、moderator、listing operator 和仓库都使用同一张记录。这样才能避免“现场卖对了，仓库发错了”。'),
   P('LIVE 应该展示缩略图无法证明的内容，例如成色近景、包装、配件、比例和磨损。主持人不能为了填满现场而临时加入未经核实的市场价值、投资升值或夸张稀缺表达。美国用户需要先理解会收到什么，再决定是否竞价。'),
   P('Surprise Set 的要求更复杂：只限符合条件的品类，商品需要满足包装和价值范围要求，必须完整说明所有可能商品，使用官方随机工具，在镜头中展示并及时 reveal，同时禁止 monetary value、市场对比、奖品、投资和夸张稀缺语言。这个 format 应该有独立 SOP，不能照搬普通拍卖。')
  ]},
  {id:'zh-control',eyebrow:'控制台',h:'先设计 control room，再设计 show',body:[
   P('一场稳定拍卖至少需要四个明确角色，即使一个人兼任多个岗位：host 负责讲解与 reveal；moderator 负责问题、纠错和现场边界；listing operator 负责确认商品并启动官方功能；fulfillment owner 负责把成交记录准确交给仓库。'),
   TABLE(['关键时刻','负责人','必须留下的证据'],[
    ['倒计时前','Listing operator','正确商品 ID、品类、信息、库存和功能状态'],
    ['展示中','Host','实物与 listing 一致，成色与重要细节已展示'],
    ['竞价中','Moderator','用户问题、纠错记录和 claim 干预'],
    ['结束后','Fulfillment owner','成交订单与唯一实物匹配、包装、扫描和交接'],
    ['场次复盘','Operations lead','取消、争议、缺陷和重复问题进入下一场改进']
   ]),
   P('正式上线前，用一个测试商品完整 rehearsal：检查 listing、做一次镜头讲解、模拟倒计时、记录 winner、对应订单或 label、走一遍包装指令，再回答一个用户问题。只测试灯光和麦克风，不算完整 rehearsal。'),
   P('如果主持人不知道答案，正确动作是暂停确认，而不是为了保持节奏临时编一个说法。清楚、可验证的解释通常比更吵、更快的现场更能建立信任。'),
   P('LIVE Auction 指南允许把倒计时设为 3 秒到 2 分钟，最后一秒有出价时可选择 Extend Auction 重置计时，也可选 Sudden Death 不重置。它们是 show control，不是 conversion 保证。先用一个可控商品测试 timer behavior，再缩短节奏，不能牺牲商品证明、moderation 或履约交接。')
  ]},
  {id:'zh-after',eyebrow:'成交之后',h:'Final sale 不等于可以忽略描述与履约责任',body:[
   P('Academy 页面说明，拍卖订单对 change-of-mind 原因属于 final sale；但如果商品缺失、损坏、未收到或与描述不符，用户仍可按当前规则在交付后 14 天内凭证据申请退货或退款。买家在发货前也不能直接取消，但可以联系 Customer Service 或卖家提出请求。'),
   P('团队需要在竞价前用一句清楚的话说明边界，并让 listing、主持人和 moderator 使用同样表达。然后把精力放回可控事项：准确描述、商品级照片、包装保护、扫描证据和快速客服。不要把 Auction Protection 当成质量控制替代品。'),
   P('如果争议总是集中在成色、缺件或 reveal 不清楚，应该暂停该商品形式，修 item sheet、镜头顺序或仓库交接。继续增加场次只会把同一个运营问题放大。')
  ]},
  {id:'zh-measure',eyebrow:'每周复盘',h:'先衡量拍卖质量，再扩大拍卖数量',body:[
   P('只看 revenue 很容易掩盖脆弱系统。WEM 建议同时看五层：有效观众、竞价行为、listing 准确度、履约质量和内容复用。可记录 unique engaged viewers、有效 bidder、成交率、成交价分布、用户问题、纠错次数、包装异常、取消请求、争议原因，以及 LIVE 片段是否还能成为有用的商品教育内容。'),
   P('还要把同品类拍卖与普通 LIVE 或 product-card 销售做对比。如果拍卖带来更高收入，却同时增加大量纠纷、人工成本和达人错误，它可能只是把成本推到售后。如果现场让商品更容易理解、达人更有信心、仓库也能稳定兑现，再一次只扩大一个变量。'),
   P('品类差异也要进入复盘。收藏品用户可能需要更慢的成色检查；beauty 类 Surprise Set 要讲清 shade、密封、成分与包装；home、electronics 和 fashion accessories 则会出现尺寸、兼容、变体和运输损坏问题。不要只复制另一场成功拍卖的节奏，要复制它背后的信息纪律，再让达人用自己的表达方式把证据讲得好看。'),
   P('同时要把 audience growth 与 auction quality 分开。一位强达人可以带来很多喜欢看现场、却没有竞价意图的观众。这些注意力如果能产出可复用演示或未来需求仍有价值，但不能被误判为拍卖准备度。团队应该看哪些人留到商品证明环节、提出了什么有效问题、竞价在哪一步停止，再判断下一场应该改商品故事、起拍设置、达人教育、商品组合还是履约承诺。'),
   UL(['第 1 周：选择一个适合拍卖的品类，完成卖家、达人、listing 和履约检查。','第 2 周：用小规模商品 rehearsal，修正 item sheet、host brief 和仓库交接。','第 3 周：由一名合格达人做有限场次，并准备普通购买 fallback。','第 4 周：复盘用户问题、竞价、纠错、包装、取消、争议和内容复用，再决定是否增加商品或达人。']),
   P('WEM 的拍卖运营闭环很简单：选对商品，确认权限，建立商品真相，排练达人和交接，准确履约，再用证据复盘。倒计时应该是这个系统的最后一步，而不是第一步。'),
   CTA('和 WEM 一起搭建达人与 LIVE commerce 运营系统 →')
  ]},
  {id:'zh-source',eyebrow:'来源说明',h:'来源与边界',body:[
   P('主要来源：TikTok Shop Academy《Auction Requirements》，页面日期为 2026 年 8 月 6 日，以及《LIVE Auction》，页面日期为 2026 年 8 月 3 日，均适用于美国站。WEM 于 2026 年 8 月 12 日直接核对。文中拍卖形式、资格、listing、final sale、取消、用户保护、Temporary Listing、Surprise Set、披露、处罚和功能流程事实来自这两篇官方页面。'),
   P('商品匹配 gate、item sheet、control room 分工、rehearsal、衡量模型与四周 rollout 属于 WEM 运营框架，不是 TikTok Shop 政策或法律建议，也不保证功能权限、达人表现、竞价、收入或争议结果。执行前请在 Seller Center 核对账户实时资格。'),
   CTA('阅读 TikTok Shop LIVE Auction 官方指南','https://seller-us.tiktok.com/university/essay?knowledge_id=8427133325330222')
  ]}
 ],
 faqs:[
  {q:'任何美国 TikTok Shop 卖家都可以做 LIVE 拍卖吗？',a:'不可以。Academy 说明 Live Auction Feature 只对符合条件的卖家和达人开放，不同参与者有当前账户健康与合规门槛。排期前应在 Seller Center 核对。'},
  {q:'达人可以通过评论区或外部工具竞价吗？',a:'不可以。当前美国站规则要求拍卖必须使用 TikTok Shop LIVE Auction Feature，功能外的拍卖或相关活动不被允许。'},
  {q:'TikTok Shop 拍卖订单都是 final sale 吗？',a:'对 change-of-mind 原因是 final sale；但缺件、损坏、未收到或与描述不符等有效问题，仍可能按当前规则支持退货或退款请求。'},
  {q:'什么产品更适合 TikTok Shop LIVE 拍卖？',a:'适合通过实时镜头更清楚展示成色、差异、来源或具体实物的产品。高度标准化、稳定复购的商品通常更适合普通 listing。'},
  {q:'品牌选择拍卖达人前要核对什么？',a:'核对当前功能资格、品类知识、产品匹配、执行 listing 与 reveal 规则的能力、现场沟通纪律和 backup host。'},
  {q:'Temporary Listing 和 Auction Product 有什么区别？',a:'Temporary Listing 只用于单场 LIVE，不同步店铺或 Shopify。审核通过的 Auction Product 可反复使用，但不会出现在店铺搜索里。同一个商品既要拍卖又要日常销售时，应建立两条独立 listing。'},
  {q:'拍卖效果应该怎么衡量？',a:'收入之外，还要看有效 bidder、listing 纠错、用户问题、取消、争议、包装异常，以及现场是否产生可复用的商品教育内容。'}
 ],
 related:[{label:'TikTok Shop LIVE 美国品牌策略',href:'tiktok-shop-live-strategy-brands'},{label:'TikTok Shop 达人 Brief 模板',href:'tiktok-shop-creator-brief-template'},{label:'TikTok Shop 商品卡策略',href:'tiktok-shop-product-card-strategy'}]
}
};

const App=()=>{const getLang=()=>new URLSearchParams(window.location.search).get('lang')==='zh'?'zh':'en';const [lang,setLang]=React.useState(getLang());React.useEffect(()=>{const sync=()=>setLang(getLang());window.addEventListener('popstate',sync);return()=>window.removeEventListener('popstate',sync)},[]);React.useEffect(()=>{document.getElementById('seo-static-fallback')?.remove();document.documentElement.lang=lang==='zh'?'zh-CN':'en'},[lang]);return <><CursorStars/><NavBar lang={lang} onLang={setLang} basePath="../"/><BlogPost {...POSTS[lang]} labels={LABELS[lang]}/><CtaFooter lang={lang}/><Footer lang={lang} basePath="../"/></>};
ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
