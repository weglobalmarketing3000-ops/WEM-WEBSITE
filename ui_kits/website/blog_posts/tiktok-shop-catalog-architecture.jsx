const LABELS = {
  "en": {
    "back": "Blog",
    "toc": "On this page",
    "faq": "Frequently asked questions",
    "related": "Related guides"
  },
  "zh": {
    "back": "博客",
    "toc": "本文目录",
    "faq": "常见问题",
    "related": "相关文章"
  }
};
const POSTS = {
  "en": {
    "meta": {
      "title": "TikTok Shop Catalog Architecture: Combined Listings, Bundles and Subscriptions",
      "desc": "Choose Combined Listings, Virtual Bundles, or Product Subscriptions by customer job, product identity, inventory, fulfillment, creator links, and lifecycle risk.",
      "cat": "TIKTOK SHOP U.S. · CAMPAIGNS & GROWTH",
      "author": "WE Marketing Team",
      "date": "Jul 28, 2026",
      "read": "12 min read",
      "heroImage": "hero-tiktok-shop-catalog-architecture-v2.png",
      "heroAlt": "WE Marketing Catalog Architecture cover with related products, a product bundle, and a replenishment product on a lavender operating scene"
    },
    "sections": [
      {
        "id": "direct-answer",
        "eyebrow": "DIRECT ANSWER",
        "h": "Search demand should narrow the shortlist, not choose the winner",
        "body": [
          {
            "kind": "p",
            "text": "TikTok Shop catalog architecture should match the shopping job. Use Combined Listings when shoppers need to move among closely related products, Virtual Bundles when several products must be purchased together, and Product Subscriptions when one replenishable product should reorder on a schedule. These tools are not interchangeable."
          },
          {
            "kind": "p",
            "text": "The practical mistake is to start with the feature. A brand sees a new catalog option and asks how to turn it on. The better question is what relationship the catalog must create: choice, basket, or repeat purchase. That decision affects product IDs, reviews, creator links, inventory, fulfillment, returns, discount commitments, and reporting."
          },
          {
            "kind": "callout",
            "text": "WEM operating rule: design the customer and operations relationship first, then choose the catalog structure that can support it without breaking product truth."
          }
        ]
      },
      {
        "id": "define-the-three-catalog-jobs",
        "h": "Define the three catalog jobs",
        "body": [
          {
            "kind": "p",
            "text": "Combined Listings connect separate, closely related product IDs on one product-detail experience. A shopper can use “More choices” to move between the linked listings, but the products remain separate purchases with separate product IDs."
          },
          {
            "kind": "p",
            "text": "Virtual Bundles combine existing products into a new purchasable bundle. The components do not need to be physically pre-packed. Inventory is connected to the component SKUs, while the bundle is presented and ordered as one offer."
          },
          {
            "kind": "p",
            "text": "Product Subscriptions let eligible sellers offer a recurring discount on repeat purchases of an eligible product. Subscription design is therefore a retention and replenishment decision, not a way to group products."
          },
          {
            "kind": "table",
            "headers": [
              "Structure",
              "Customer job",
              "Catalog relationship",
              "Best fit",
              "Main operating risk"
            ],
            "rows": [
              [
                "Combined Listing",
                "Compare and switch",
                "Separate related PIDs linked in one experience",
                "Related styles, sizes, formats, or products that deserve separate pages",
                "Linking products that are not truly comparable and confusing the choice"
              ],
              [
                "Virtual Bundle",
                "Buy a routine or kit together",
                "A bundle offer built from component products",
                "Complementary routines, kits, multi-item use cases, selected multipacks",
                "Component inventory, fulfillment, returns, and creator-link disruption"
              ],
              [
                "Product Subscription",
                "Reorder a replenishable product",
                "Repeat orders attached to one eligible product",
                "Consumables with a credible usage cadence",
                "Discount, free-shipping, stock, price, and subscriber commitments"
              ]
            ]
          },
          {
            "kind": "infographic",
            "src": "tiktok-shop-catalog-operations-matrix.svg",
            "alt": "Operations matrix comparing identity, inventory, fulfillment, creator links, and lifecycle risk across three TikTok Shop catalog structures",
            "caption": "Customer-facing structure is safe only when identity, inventory, fulfillment, creators, and lifecycle controls agree."
          }
        ]
      },
      {
        "id": "start-with-the-customer-decision-not-catalog-cleanup",
        "h": "Start with the customer decision, not catalog cleanup",
        "body": [
          {
            "kind": "p",
            "text": "A catalog may look messy internally but still make sense to shoppers. Do not combine listings simply because product names are similar. Ask whether the shopper is making one comparison decision. If two products solve materially different problems, need different proof, or have different purchase expectations, keeping them separate may be clearer."
          },
          {
            "kind": "p",
            "text": "Do not build a bundle because the individual products are slow. A bundle needs a coherent use case: a morning routine, a starter kit, a coordinated outfit, a refill set, or another reason the products are more useful together. Pairing a weak product with a popular product can raise basket size, but it can also lower conversion or create return friction if the combined value is unclear."
          },
          {
            "kind": "p",
            "text": "Do not activate subscriptions only to create predictable revenue. A subscription fits when customers can estimate usage, the product replenishes naturally, inventory is dependable, the recurring discount is sustainable, and the brand can support the promised experience over time."
          }
        ]
      },
      {
        "id": "the-wem-choice-basket-repeat-decision-gate",
        "h": "The WEM choice-basket-repeat decision gate",
        "body": [
          {
            "kind": "h3",
            "text": "Gate 1: What must the shopper decide?"
          },
          {
            "kind": "p",
            "text": "Use a Combined Listing when the main question is “Which one fits me?” The related products should be close enough that switching among them is useful, while each still deserves its own listing, content, price, and product identity."
          },
          {
            "kind": "p",
            "text": "Use a Virtual Bundle when the main question is “What do I need together?” The bundle should reduce decision effort or create a complete use case. Its value should remain understandable even without a deep discount."
          },
          {
            "kind": "p",
            "text": "Use a Subscription when the main question is “When will I need this again?” The product should have a reasonably predictable consumption cycle and low enough surprise risk that repeat ordering helps rather than traps the customer."
          },
          {
            "kind": "h3",
            "text": "Gate 2: What happens to identity and proof?"
          },
          {
            "kind": "p",
            "text": "Catalog structure changes how product identity is carried. Combined Listings preserve separate product IDs. That is useful when each item needs its own reviews, creator content, search relevance, and conversion history."
          },
          {
            "kind": "p",
            "text": "A newly created Virtual Bundle generally creates a bundle product identity. TikTok Shop also documents conversion paths that may retain sales and reviews at the product-ID level, but conversion can delete or rebuild SKUs and affect settings. This is not a casual merchandising edit."
          },
          {
            "kind": "p",
            "text": "Before conversion, export the current PID and SKU map, creator links, sample status, open-collaboration settings, review history, subscription status, warehouse mapping, and external-system mapping. Record which assets must survive and which can be rebuilt."
          },
          {
            "kind": "p",
            "text": "Subscriptions depend on continuity. Pausing blocks new subscribers while existing subscribers continue. Deactivation cancels active subscriptions. Deletion also removes subscription history and is irreversible according to the current official guide. Assign one owner to any subscription status change."
          },
          {
            "kind": "h3",
            "text": "Gate 3: Can operations keep the promise?"
          },
          {
            "kind": "p",
            "text": "For a Combined Listing, check:"
          },
          {
            "kind": "list",
            "items": [
              "Every linked product is in the same eligible category and genuinely related.",
              "Titles, images, options, and prices make the differences easy to understand.",
              "Affiliate commission rules are ready before linking products in open collaboration.",
              "Reporting can still distinguish each PID and its content path."
            ]
          },
          {
            "kind": "p",
            "text": "For a Virtual Bundle, check:"
          },
          {
            "kind": "list",
            "items": [
              "Every component is eligible, live, and available.",
              "The selected main product represents the bundle’s primary category and traffic intent.",
              "Bundle price, images, description, and component quantities are accurate.",
              "The lowest-stock component will not repeatedly make the offer unavailable.",
              "Warehouse, FBT goods mapping, split shipment, tracking, return, and refund workflows are understood.",
              "Creator links and sample workflows are reviewed before conversion."
            ]
          },
          {
            "kind": "p",
            "text": "For a Subscription, check:"
          },
          {
            "kind": "list",
            "items": [
              "Seller and category eligibility are confirmed in the current account.",
              "The product has stable replenishment demand and inventory coverage.",
              "The allowed recurring discount and required free-shipping commitment fit contribution margin.",
              "Price changes, SKU changes, and stockouts have a named owner.",
              "Customer support can explain pause, cancellation, skipped orders, and price changes."
            ]
          },
          {
            "kind": "infographic",
            "src": "tiktok-shop-catalog-choice-basket-repeat.svg",
            "alt": "WEM catalog decision gate mapping choice to Combined Listings, basket to Virtual Bundles, and repeat purchase to Product Subscriptions",
            "caption": "Choose the catalog structure from the customer job: choice, basket, or repeat."
          }
        ]
      },
      {
        "id": "combined-listings-preserve-choice-without-multiplying-conf",
        "h": "Combined Listings: preserve choice without multiplying confusion",
        "body": [
          {
            "kind": "p",
            "text": "TikTok Shop’s current U.S. guide describes Combined Listings as a way to connect two to twenty closely related products in the same category. Products used as gifts or auction items are excluded. The Shopify workflow can use suggested combinations or manual selection."
          },
          {
            "kind": "p",
            "text": "The strategic value is navigation, not forced consolidation. A shopper who lands on one relevant product can discover the related choice without returning to search. That can be useful when variants cannot or should not live under one PID."
          },
          {
            "kind": "p",
            "text": "The smallest safe launch is one product family. Choose two to five related products, define the exact difference among them, standardize the comparison language, verify each listing independently, and then link them. Review clicks between choices, conversion by PID, returns, and shopper questions. If people move but do not buy, the relationship or explanation may be wrong."
          }
        ]
      },
      {
        "id": "virtual-bundles-sell-a-system-then-engineer-the-component-",
        "h": "Virtual Bundles: sell a system, then engineer the component truth",
        "body": [
          {
            "kind": "p",
            "text": "TikTok Shop defines Virtual Bundles as groups of existing products sold together without requiring physical pre-packing. The current U.S. guide describes product selection, a main product, buyer options, SKU pricing and images, conversion workflows, component inventory, split-package handling, and FBT mapping."
          },
          {
            "kind": "p",
            "text": "The main product matters because its category and attributes influence how the bundle is classified and discovered. Choose it based on the bundle’s primary shopper intent, not whichever component has the largest inventory."
          },
          {
            "kind": "p",
            "text": "Inventory is only as strong as the constrained component. If one required sub-SKU is unavailable, the bundle can become unavailable. A merchandising team may see an attractive kit while fulfillment sees multiple Goods IDs, fulfillment centers, packages, deadlines, and return paths. Both views must be reconciled before launch."
          },
          {
            "kind": "p",
            "text": "Use a bundle bill of materials with bundle SKU, component SKU, quantity, warehouse, safety stock, owner, replacement rule, and after-sales rule. Test one real order through allocation, label creation, shipment, tracking, delivery, cancellation, and return before creator promotion."
          }
        ]
      },
      {
        "id": "product-subscriptions-treat-recurring-revenue-as-a-service",
        "h": "Product Subscriptions: treat recurring revenue as a service obligation",
        "body": [
          {
            "kind": "p",
            "text": "TikTok Shop’s current U.S. guide limits Product Subscriptions to selected sellers and eligible categories, with a Shop Performance Score threshold, fixed recurring discount choices, and free-shipping terms. These conditions can change, so confirm them inside the account before planning a launch."
          },
          {
            "kind": "p",
            "text": "The discount is not merely a conversion lever. An increase can affect existing and new subscribers, while a decrease may apply only to new subscribers, leaving existing subscribers on the earlier higher discount. Price fluctuation, SKU changes, stock, pausing, deactivation, and deletion therefore need lifecycle controls."
          },
          {
            "kind": "p",
            "text": "Start with one replenishable product whose reorder timing is already visible in customer behavior. Model contribution margin after the subscription discount, shipping, commission, fulfillment, support, refunds, and expected churn. Build inventory coverage for upcoming recurring orders separately from one-time demand."
          }
        ]
      },
      {
        "id": "use-a-catalog-change-control-before-publishing",
        "h": "Use a catalog change control before publishing",
        "body": [
          {
            "kind": "p",
            "text": "Every catalog architecture change should have a short change record:"
          },
          {
            "kind": "p",
            "text": "1. State the customer job: choice, basket, or repeat. 2. Record the current PID, SKU, reviews, creator links, subscriptions, inventory, and warehouse mappings. 3. Choose the smallest test family, kit, or replenishment product. 4. Map the desired product identity and every system that consumes it. 5. Verify eligibility and current account controls. 6. Test purchase, fulfillment, tracking, support, cancellation, and return paths. 7. Publish with a rollback or repair owner. 8. Review after seven and twenty-eight days using customer and operational evidence."
          },
          {
            "kind": "p",
            "text": "The decision is successful when shoppers understand the relationship and the team can operate it reliably. A cleaner-looking catalog is not enough."
          },
          {
            "kind": "infographic",
            "src": "tiktok-shop-catalog-change-control.svg",
            "alt": "Eight-step WEM catalog change control from customer job and current product map through testing, publishing, and review",
            "caption": "Treat every catalog architecture change as a controlled operational release."
          }
        ]
      },
      {
        "id": "a-30-minute-next-action",
        "h": "A 30-minute next action",
        "body": [
          {
            "kind": "p",
            "text": "Take one current product family and label the intended job: choice, basket, repeat, or none. Then list the product IDs, component SKUs, creator links, subscription status, inventory owner, and fulfillment path. If the team cannot complete that map, do not change the architecture yet. The missing map is the first operating task."
          },
          {
            "kind": "cta",
            "label": "Talk with WE Marketing about your TikTok Shop catalog architecture →",
            "href": "https://zus03h0enw04.sg.larksuite.com/scheduler/03970278dd9a7925"
          }
        ]
      },
      {
        "id": "sources-and-operating-boundaries",
        "h": "Sources and operating boundaries",
        "body": [
          {
            "kind": "p",
            "text": "Primary TikTok Shop U.S. Academy material reviewed in full on July 28, 2026: “Combined Listings,” “Virtual Bundles,” and “Setting Up Product Subscriptions,” plus the Shopify Combined Listings and Product Subscriptions feature guides. Feature availability, eligibility, interfaces, limits, and fulfillment support can change. Confirm the current controls in Seller Center and with the account manager where the official guide requires it."
          },
          {
            "kind": "p",
            "text": "The choice-basket-repeat framework, decision gates, change-control sequence, and operating checklists are WE Marketing methods. Examples are operational examples, not client results. No performance outcome is guaranteed."
          }
        ]
      }
    ],
    "faqs": [
      {
        "q": "What is the difference between Combined Listings and Virtual Bundles?",
        "a": "Combined Listings connect separate related product IDs so shoppers can switch between them. A Virtual Bundle creates one purchasable offer from multiple component products. Combined Listings support comparison; Virtual Bundles support buying items together."
      },
      {
        "q": "Should variants be one listing or Combined Listings?",
        "a": "Use one listing when the options are true variations of the same product and can share product truth. Consider Combined Listings when closely related products need separate product IDs, reviews, content, attributes, or pricing but shoppers benefit from moving between them."
      },
      {
        "q": "Do Virtual Bundles need to be physically pre-packed?",
        "a": "No. TikTok Shop describes Virtual Bundles as products sold together without physical pre-packing. The component inventory and fulfillment mapping still need to support the bundle accurately."
      },
      {
        "q": "Can a product with subscriptions be converted to a Virtual Bundle?",
        "a": "The current Academy guide warns that active subscriptions do not carry over when a product converts to a Virtual Bundle. Audit and protect the subscriber lifecycle before any conversion."
      },
      {
        "q": "What happens if one component of a Virtual Bundle is out of stock?",
        "a": "The bundle’s available inventory depends on its components. A required component shortage can make the bundle unavailable, so component-level safety stock and replenishment ownership are essential."
      },
      {
        "q": "When is a Product Subscription a good fit?",
        "a": "It fits a replenishable product with predictable usage, stable inventory, workable recurring economics, clear customer value, and support processes for lifecycle changes. It is a poor fit when reorder timing is uncertain or margins cannot support the commitment."
      },
      {
        "q": "Can I use all three structures in one catalog?",
        "a": "Yes, when each serves a distinct job. A brand may link related standalone products, bundle complementary products, and offer subscription on an eligible replenishable standalone product. Avoid converting or linking products without checking how the structures interact."
      }
    ],
    "related": [
      {
        "label": "TikTok Shop Product Card Strategy",
        "href": "tiktok-shop-product-card-strategy.html"
      },
      {
        "label": "TikTok Shop U.S. Launch Checklist",
        "href": "tiktok-shop-us-launch-checklist.html"
      },
      {
        "label": "TikTok Shop Creator Affiliate Management",
        "href": "tiktok-shop-creator-affiliate-management.html"
      }
    ]
  },
  "zh": {
    "meta": {
      "title": "TikTok Shop 商品目录架构：Combined Listings、组合套装与订阅怎么选",
      "desc": "从消费者任务、商品身份、库存、履约、达人链接与生命周期风险，判断该用 Combined Listings、Virtual Bundles 还是 Product Subscriptions。",
      "cat": "TIKTOK SHOP 美国站 · CAMPAIGNS & GROWTH",
      "author": "WE Marketing Team",
      "date": "2026 年 7 月 28 日",
      "read": "12 分钟阅读",
      "heroImage": "hero-tiktok-shop-catalog-architecture-v2.png",
      "heroAlt": "WE Marketing 商品目录架构封面：关联商品、组合套装和复购商品组成的紫色运营场景"
    },
    "sections": [
      {
        "id": "zh-direct-answer",
        "eyebrow": "直接答案",
        "h": "搜索需求负责缩小候选范围，不负责直接选出爆品",
        "body": [
          {
            "kind": "p",
            "text": "TikTok Shop 商品目录架构的核心，不是功能开得越多越好，而是让每一种结构只负责一个明确的购买任务。消费者需要在相近商品之间做选择，用 Combined Listings；需要一次买齐多个商品，用 Virtual Bundles；需要按周期复购同一个消耗型商品，用 Product Subscriptions。三者不能互相替代。"
          },
          {
            "kind": "p",
            "text": "品牌最容易犯的错误，是先看到功能，再找使用场景。更稳的顺序是先定义关系：这是选择关系、购物篮关系，还是复购关系？不同答案会影响 PID、评价、达人链接、库存、履约、退货、折扣承诺和数据归因。"
          },
          {
            "kind": "callout",
            "text": "WEM 的运营原则：先设计消费者和运营需要维持的关系，再选择不会破坏商品真实性的目录结构。"
          }
        ]
      },
      {
        "id": "zh-先定义三种目录任务",
        "h": "先定义三种目录任务",
        "body": [
          {
            "kind": "p",
            "text": "Combined Listings 会把多个相近但独立的 PID 连接在同一个商品详情体验里。消费者可以通过 “More choices” 切换，但每个商品仍然是独立购买、独立 PID。"
          },
          {
            "kind": "p",
            "text": "Virtual Bundles 会把现有商品组合成一个可购买的套装。仓库不一定要提前把它们物理打包，但系统里的组件 SKU、库存和履约必须支持这次组合购买。"
          },
          {
            "kind": "p",
            "text": "Product Subscriptions 是让符合条件的商品按周期复购，并给订阅用户固定档位的额外折扣。它解决的是留存和补货，不是把多个商品放在一起。"
          },
          {
            "kind": "table",
            "headers": [
              "结构",
              "消费者任务",
              "最适合",
              "主要风险"
            ],
            "rows": [
              [
                "Combined Listing",
                "比较并切换",
                "相近款式、规格、形态，但需要独立页面的商品",
                "关系不够清楚，越连越难选"
              ],
              [
                "Virtual Bundle",
                "一次买齐",
                "日常流程、入门套装、搭配组合、多件装",
                "组件库存、拆包履约、退货和达人链接"
              ],
              [
                "Product Subscription",
                "定期补货",
                "有稳定消耗周期的单品",
                "折扣、包邮、库存、价格和订阅承诺"
              ]
            ]
          },
          {
            "kind": "infographic",
            "src": "tiktok-shop-catalog-operations-matrix-zh.svg",
            "alt": "三种 TikTok Shop 商品目录结构的商品身份、库存、履约、达人链接与生命周期风险对照矩阵",
            "caption": "消费者看到的结构必须与商品身份、库存、履约、达人和生命周期控制一致。"
          }
        ]
      },
      {
        "id": "zh-从消费者决策开始-不要从-整理后台-开始",
        "h": "从消费者决策开始，不要从“整理后台”开始",
        "body": [
          {
            "kind": "p",
            "text": "内部看起来很乱，不代表消费者一定看不懂。不要因为名字相似就把商品互链。先问消费者是否真的在做同一次比较。如果两个商品解决的问题不同、需要不同证明、使用场景也不同，分开反而更清楚。"
          },
          {
            "kind": "p",
            "text": "也不要因为某些商品卖得慢就硬做套装。一个好套装需要完整的使用理由，例如早晚护理、入门套装、完整穿搭或补充组合。低折扣时消费者仍然应该看得懂为什么要一起买。"
          },
          {
            "kind": "p",
            "text": "订阅也不是为了把收入变得“可预测”就应该开启。只有当消费者能估算使用周期、库存稳定、持续折扣和包邮仍有利润，而且团队能够长期兑现体验时，订阅才成立。"
          }
        ]
      },
      {
        "id": "zh-wem-的-choice-basket-repeat-决策-gate",
        "h": "WEM 的 Choice-Basket-Repeat 决策 Gate",
        "body": [
          {
            "kind": "h3",
            "text": "Gate 1：消费者到底要做什么决定？"
          },
          {
            "kind": "p",
            "text": "如果核心问题是“哪个更适合我”，优先评估 Combined Listings。相连商品要足够相近，切换才有意义；同时每个商品又应该保留自己的页面、内容、价格和身份。"
          },
          {
            "kind": "p",
            "text": "如果核心问题是“我需要一起买什么”，评估 Virtual Bundle。套装要减少消费者的决策成本，或者提供一个完整使用场景，而不是只靠大折扣制造价值感。"
          },
          {
            "kind": "p",
            "text": "如果核心问题是“我什么时候还会用完”，评估 Subscription。商品的消耗周期要相对稳定，复购的意外风险要足够低。"
          },
          {
            "kind": "h3",
            "text": "Gate 2：商品身份和证明会发生什么变化？"
          },
          {
            "kind": "p",
            "text": "Combined Listings 保留独立 PID。每个商品仍然可以拥有自己的评价、达人内容、搜索相关性和转化历史，适合“有关联但不是同一个商品”的关系。"
          },
          {
            "kind": "p",
            "text": "新建 Virtual Bundle 通常会形成一个套装商品身份。官方也提供标准商品与 Virtual Bundle 的转换路径，部分转换可以在 PID 层保留销量和评价，但 SKU 可能被删除或重建，订阅和其他设置也会受影响。这不是一个随手修改的陈列动作。"
          },
          {
            "kind": "p",
            "text": "转换之前要导出 PID 和 SKU 映射、达人链接、寄样状态、Open Collaboration、评价、订阅、仓库和 ERP/Shopify 映射。明确哪些资产必须保留，哪些可以重建。"
          },
          {
            "kind": "p",
            "text": "Subscription 更依赖连续性。暂停只阻止新订阅，已有订阅继续；停用会取消现有订阅；删除还会清除历史，而且不可恢复。所有状态变化必须有唯一负责人。"
          },
          {
            "kind": "h3",
            "text": "Gate 3：运营能不能持续兑现？"
          },
          {
            "kind": "p",
            "text": "Combined Listing 上线前检查："
          },
          {
            "kind": "list",
            "items": [
              "所有关联商品在当前规则下符合条件，类目一致，而且关系真实；",
              "标题、图片、选项和价格能快速说明区别；",
              "Open Collaboration 中涉及的佣金规则已经配置；",
              "数据报表仍然能区分每个 PID 和内容路径。"
            ]
          },
          {
            "kind": "p",
            "text": "Virtual Bundle 上线前检查："
          },
          {
            "kind": "list",
            "items": [
              "组件商品均符合条件、处于 Live 状态并有库存；",
              "Main Product 能代表套装的主要类目和搜索意图；",
              "套装价格、图片、描述和组件数量准确；",
              "最低库存组件不会频繁让整个套装断货；",
              "仓库、FBT Goods ID、拆包、轨迹、退货退款流程已确认；",
              "转换前已检查达人链接和寄样任务。"
            ]
          },
          {
            "kind": "p",
            "text": "Subscription 上线前检查："
          },
          {
            "kind": "list",
            "items": [
              "在当前账户里确认卖家和类目资格；",
              "商品有稳定的补货需求和库存覆盖；",
              "固定折扣和包邮条款在贡献利润里可承受；",
              "价格、SKU 和缺货变化有 owner；",
              "客服能解释暂停、取消、跳过订单和价格变化。"
            ]
          },
          {
            "kind": "infographic",
            "src": "tiktok-shop-catalog-choice-basket-repeat-zh.svg",
            "alt": "WEM 商品目录决策 Gate，将 Choice 对应 Combined Listings、Basket 对应 Virtual Bundles、Repeat 对应 Product Subscriptions",
            "caption": "先定义消费者任务，再选择目录结构。"
          }
        ]
      },
      {
        "id": "zh-combined-listings-保留选择-不要制造更多困惑",
        "h": "Combined Listings：保留选择，不要制造更多困惑",
        "body": [
          {
            "kind": "p",
            "text": "TikTok Shop 当前美国站资料把 Combined Listings 定义为关联 2 到 20 个同类目的相近商品。Gift 和 Auction 商品不适用。Shopify 入口支持系统建议和手动组合。"
          },
          {
            "kind": "p",
            "text": "它的价值是导航，不是强制合并。消费者从一个相关商品进入后，可以看到其他接近选择，不必回到搜索页。但每个 PID 仍要独立成立。"
          },
          {
            "kind": "p",
            "text": "最小安全测试是一个商品家族。先选 2 到 5 个相近商品，写清每个商品唯一差异，统一比较语言，逐个验证页面，再建立关联。上线后看跨商品点击、各 PID 转化、退货和消费者问题。如果用户频繁切换但不购买，通常是关系或解释不够清楚。"
          }
        ]
      },
      {
        "id": "zh-virtual-bundles-先卖完整系统-再处理组件真相",
        "h": "Virtual Bundles：先卖完整系统，再处理组件真相",
        "body": [
          {
            "kind": "p",
            "text": "TikTok Shop 把 Virtual Bundles 定义为多个现有商品一起销售，但仓库不需要提前物理打包。官方资料详细说明了 Main Product、买家选项、SKU 价格和图片、转换、组件库存、拆包履约与 FBT 映射。"
          },
          {
            "kind": "p",
            "text": "Main Product 很重要，因为它的类目和属性会影响套装的分类与流量。应该按消费者购买这个套装的主要意图选择，而不是按哪个组件库存最多来选。"
          },
          {
            "kind": "p",
            "text": "套装库存由最受限制的组件决定。任何必需组件缺货，都可能让整套不可售。运营团队看到的是一个套装，履约团队看到的却是多个 Goods ID、仓库、包裹、时效和退货路径。上线前必须把两种视角对齐。"
          },
          {
            "kind": "p",
            "text": "建议建立一张 Bundle BOM：套装 SKU、组件 SKU、数量、仓库、安全库存、负责人、替代规则和售后规则。达人开始推广之前，用一个真实订单完整测试分配、面单、发货、轨迹、签收、取消和退货。"
          }
        ]
      },
      {
        "id": "zh-product-subscriptions-重复收入也是长期服务承诺",
        "h": "Product Subscriptions：重复收入也是长期服务承诺",
        "body": [
          {
            "kind": "p",
            "text": "当前美国站官方资料把 Product Subscriptions 限定在部分卖家和部分品类，并包含 SPS 条件、固定折扣档位和订阅包邮条款。这些条件可能变化，因此任何计划都必须先在 Seller Center 当前账户里确认。"
          },
          {
            "kind": "p",
            "text": "订阅折扣不只是转化工具。折扣提高可能影响新老订阅用户；折扣降低通常只对新用户生效，已有用户可能保留原来的更高折扣。因此价格波动、SKU 变化、库存、暂停、停用和删除都需要生命周期控制。"
          },
          {
            "kind": "p",
            "text": "先从一个复购周期已经能从客户行为中看见的商品开始。贡献利润要扣除订阅折扣、包邮、佣金、履约、客服、退款和流失成本。未来订阅订单的库存覆盖应该和一次性需求分开管理。"
          }
        ]
      },
      {
        "id": "zh-上线前建立-catalog-change-control",
        "h": "上线前建立 Catalog Change Control",
        "body": [
          {
            "kind": "p",
            "text": "每一次目录结构调整都应该留下简短变更记录："
          },
          {
            "kind": "p",
            "text": "1. 明确任务：Choice、Basket 还是 Repeat； 2. 记录当前 PID、SKU、评价、达人链接、订阅、库存和仓库映射； 3. 只选一个最小商品家族、套装或复购品做测试； 4. 画出目标商品身份，以及所有需要消费这个身份的系统； 5. 确认当前账户资格和控制项； 6. 测试购买、履约、轨迹、客服、取消和退货； 7. 发布时指定 rollback 或 repair owner； 8. 第 7 天和第 28 天按消费者与运营证据复盘。"
          },
          {
            "kind": "p",
            "text": "只有当消费者理解关系，而且团队能稳定执行，结构调整才算成功。后台看起来更整齐，不等于业务更健康。"
          },
          {
            "kind": "infographic",
            "src": "tiktok-shop-catalog-change-control-zh.svg",
            "alt": "WEM 商品目录变更控制八步流程，从消费者任务和当前商品映射，到测试、发布与复盘",
            "caption": "把目录调整作为一次可验证、可修复的运营发布。"
          }
        ]
      },
      {
        "id": "zh-今天可以做的-30-分钟动作",
        "h": "今天可以做的 30 分钟动作",
        "body": [
          {
            "kind": "p",
            "text": "选一个现有商品家族，给它标注 Choice、Basket、Repeat 或 None。然后写下 PID、组件 SKU、达人链接、订阅状态、库存 owner 和履约路径。如果团队还无法完成这张图，先不要改目录。把缺失映射补齐，就是今天最小、最有价值的下一步。"
          },
          {
            "kind": "cta",
            "label": "和 WE Marketing 讨论 TikTok Shop 商品目录架构 →",
            "href": "https://zus03h0enw04.sg.larksuite.com/scheduler/03970278dd9a7925"
          }
        ]
      },
      {
        "id": "zh-来源与边界",
        "h": "来源与边界",
        "body": [
          {
            "kind": "p",
            "text": "本文完整阅读并使用了 TikTok Shop 美国站 Academy 的 “Combined Listings”、“Virtual Bundles” 和 “Setting Up Product Subscriptions”，以及 Shopify 对应功能资料，核验日期为 2026 年 7 月 28 日。功能资格、界面、数量限制与履约能力可能变化；正式上线前请以当前 Seller Center 和官方要求为准。"
          },
          {
            "kind": "p",
            "text": "Choice-Basket-Repeat、决策 Gate、Change Control 和检查表属于 WE Marketing 的运营方法。文中举例均为运营示例，不是客户结果，也不承诺业绩。"
          }
        ]
      }
    ],
    "faqs": [
      {
        "q": "Combined Listings 和 Virtual Bundles 有什么区别？",
        "a": "Combined Listings 连接多个独立 PID，让消费者在相近商品间切换；Virtual Bundle 把多个组件做成一个可一起购买的 Offer。前者解决比较，后者解决一次买齐。"
      },
      {
        "q": "Variants 应该放在一个 Listing 还是做 Combined Listings？",
        "a": "如果它们是同一个商品的真实规格差异，可以共享商品真相，优先一个 Listing。如果相近商品需要独立 PID、评价、内容、属性或价格，但消费者需要来回比较，可以评估 Combined Listings。"
      },
      {
        "q": "Virtual Bundle 需要仓库提前物理打包吗？",
        "a": "不需要。官方把它定义为无需提前物理打包的组合销售，但组件库存和履约映射仍然必须准确支持套装。"
      },
      {
        "q": "已经开了订阅的商品能直接转 Virtual Bundle 吗？",
        "a": "当前官方资料明确提醒，活跃订阅不会在转换后自动带入 Virtual Bundle。转换前必须先审计并保护现有订阅关系。"
      },
      {
        "q": "Virtual Bundle 一个组件缺货会怎样？",
        "a": "套装可售库存依赖所有必需组件。一个组件短缺就可能让整个套装不可售，因此要按组件设置安全库存和补货负责人。"
      },
      {
        "q": "什么商品适合 Product Subscription？",
        "a": "适合消耗周期可预测、库存稳定、持续折扣和包邮后仍有合理利润、客户价值清楚，而且团队能管理生命周期变化的商品。"
      },
      {
        "q": "同一个目录可以同时使用三种结构吗？",
        "a": "可以，只要任务不同。品牌可以关联相近单品、组合互补套装，并为符合条件的补货型单品设置订阅。关键是先检查结构之间的转换和依赖关系。"
      }
    ],
    "related": [
      {
        "label": "TikTok Shop 商品卡策略",
        "href": "tiktok-shop-product-card-strategy.html?lang=zh"
      },
      {
        "label": "TikTok Shop 美国站上线清单",
        "href": "tiktok-shop-us-launch-checklist.html?lang=zh"
      },
      {
        "label": "TikTok Shop 达人联盟管理",
        "href": "tiktok-shop-creator-affiliate-management.html?lang=zh"
      }
    ]
  }
};

function App() {
  const [lang, setLang] = React.useState(() => {
    const urlLang = new URLSearchParams(window.location.search).get('lang');
    if (urlLang === 'zh' || urlLang === 'en') return urlLang;
    const saved = localStorage.getItem('we-lang');
    return saved === 'zh' || saved === 'en' ? saved : 'en';
  });
  const post = POSTS[lang];
  React.useEffect(() => {
    localStorage.setItem('we-lang', lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.title = `${post.meta.title} | WE Marketing`;
  }, [lang, post]);
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
  return <div data-screen-label="WE Blog · Catalog Architecture">
    <CursorStars />
    <NavBar lang={lang} onLang={setLang} basePath="../" />
    <BlogPost {...post} labels={LABELS[lang]} />
    <CtaFooter lang={lang} />
    <Footer lang={lang} basePath="../" />
  </div>;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
