const LABELS = {
  en: { back: 'Blog', toc: 'On this page', faq: 'Frequently asked questions', related: 'Related guides' },
  zh: { back: '博客', toc: '本文目录', faq: '常见问题', related: '相关文章' },
};

const POSTS = {
  en: {
    meta: {
      title: 'TikTok Shop Beauty Cold Start: Build a 0-to-1 Hero Product System',
      desc: 'Build a TikTok Shop Beauty cold start across Hero SKUs, creator demonstrations, claims, product pages, offers, affiliate activation, GMV Max, inventory, and customer feedback.',
      cat: 'TIKTOK SHOP U.S. · BEAUTY',
      author: 'WE Marketing Team',
      date: 'Jul 26, 2026',
      read: '16 min read',
      heroImage: 'hero-tiktok-shop-beauty-cold-start.png',
      heroAlt: 'Unbranded Beauty Hero SKU and creator demonstration arranged as a TikTok Shop zero-to-one cold-start system',
    },
    sections: [
  {
    id: "direct-answer",
    eyebrow: "THE REAL CORRECTION",
    h: "A Beauty cold start should establish a credible proof path",
    body: [
      {
        kind: "p",
        text: "A Beauty cold start does not fail because the brand lacks enough products. It usually fails because the launch spreads creator attention, samples, content, offers, and paid budget before one product has established a credible proof path."
      },
      {
        kind: "callout",
        text: "Direct answer: A TikTok Shop Beauty cold start is a controlled 0-to-1 test that connects hero-product selection, creator fit, product demonstration, claims and listing accuracy, offer economics, affiliate activation, GMV Max, inventory, fulfillment, and customer feedback. The first launch cycle should end with a decision to scale, repair, or stop."
      },
      {
        kind: "p",
        text: "TikTok for Business recommends launching three to seven Beauty products, using early sales, engagement, and affiliate pick-up to identify winners. That is useful as a screening range. It is not a reason to give every product equal samples, content, inventory, and paid support."
      },
      {
        kind: "infographic",
        src: "tiktok-shop-beauty-zero-to-one-loop.svg",
        alt: "WE Marketing TikTok Shop Beauty zero-to-one cold-start loop connecting Hero SKU selection, creator fit, product proof, claims, listing conversion, GMV Max, customer feedback, and the next decision",
        caption: "WE Marketing Beauty cold-start framework: product proof, trust, conversion, and operations should lead to one clear scale, repair, or stop decision."
      }
    ]
  },
  {
    id: "beauty-cold-starts-begin-with-proof-not-product-volume",
    h: "Beauty cold starts begin with proof, not product volume",
    body: [
      {
        kind: "p",
        text: "Beauty is not one content job. Makeup, skincare, hair care, body care, fragrance, and beauty tools create different purchase questions and different levels of trust."
      },
      {
        kind: "table",
        headers: [
          "Beauty product type",
          "What the shopper needs to evaluate",
          "Strong proof formats"
        ],
        rows: [
          [
            "Makeup",
            "Shade, finish, coverage, texture, wear, and application",
            "Real application, close-up finish, shade context, wear check"
          ],
          [
            "Skincare",
            "Texture, routine fit, usage, ingredients, and trust",
            "Texture demo, routine placement, directions, responsible ingredient education"
          ],
          [
            "Hair care",
            "Hair type, application, finish, hold, and ease of use",
            "Sectioned application, styling process, movement, humidity or hold context"
          ],
          [
            "Body care",
            "Texture, scent description, absorption, area of use, and routine value",
            "On-body application, texture, routine, package-size clarity"
          ],
          [
            "Beauty tools",
            "Physical fit, area of use, technique, cleaning, and storage",
            "Close-up demonstration, angle and contour fit, step-by-step technique"
          ]
        ]
      },
      {
        kind: "p",
        text: "A high-view Beauty video may still leave the purchase question unanswered. A visually satisfying serum drop, transformation cut, or unboxing can earn attention without explaining who the product is for, how it fits a routine, what the shopper should expect, or why this listing is worth buying."
      }
    ]
  },
  {
    id: "screen-three-to-seven-products-then-concentrate-on-one",
    h: "Screen three to seven products, then concentrate on one to three Hero SKUs",
    body: [
      {
        kind: "p",
        text: "TikTok's Beauty cold-start PDF recommends launching three to seven products at once and using early results to identify the winners. WE Marketing separates that quick screen from the real launch:"
      },
      {
        kind: "table",
        headers: [
          "Stage",
          "Product scope",
          "Decision"
        ],
        rows: [
          [
            "Quick screen",
            "3 to 7 products, shades, sets, or formats",
            "Which candidates earn creator interest, useful engagement, product clicks, and early orders?"
          ],
          [
            "0-to-1 launch",
            "1 to 3 Hero SKUs",
            "Which product can support repeatable proof, clear positioning, workable economics, and reliable inventory?"
          ],
          [
            "Controlled extension",
            "Proven Hero SKU plus a routine, shade, refill, bundle, or adjacent product",
            "Does the extension increase customer value without fragmenting content and inventory?"
          ]
        ]
      },
      {
        kind: "p",
        text: "TikTok's PDF says less than 0.7% of Beauty hero products account for 62.8% of category GMV in Southeast Asia. That is a regional data point from the source, not a U.S. market benchmark. The practical lesson is concentration: a small number of proven products can deserve a disproportionate share of launch resources."
      },
      {
        kind: "p",
        text: "A viable Beauty Hero SKU should be understandable on camera, relevant to a recognizable routine or problem, supported by accurate product evidence, safe and compliant for its intended use, and financially able to carry samples, affiliate commission, shipping, offers, and paid testing."
      }
    ]
  },
  {
    id: "choose-creators-for-use-case-fit-and-demonstration-abi",
    h: "Choose creators for use-case fit and demonstration ability",
    body: [
      {
        kind: "p",
        text: "Beauty creator matching is not only visual alignment. The creator has to be credible for the product's use case and capable of showing the evidence that the shopper needs."
      },
      {
        kind: "p",
        text: "WE Marketing evaluates four Beauty creator-fit dimensions:"
      },
      {
        kind: "list",
        items: [
          "Product affinity: Would the creator personally use the product, or can they credibly place it in an existing routine?",
          "Audience fit: Does the audience match the product's use case, price tolerance, skin, hair, shade, style, or routine context?",
          "Demonstration fit: Can the creator apply, explain, compare, or show the product accurately on camera?",
          "Working fit: Can the creator select the correct product, follow claim boundaries, publish reliably, link the right listing, and communicate when facts need correction?"
        ],
        ordered: true
      },
      {
        kind: "p",
        text: "Makeup often needs real application skill and presentation ability. Skincare and personal care usually need more trust, ingredient and usage clarity, and responsible expectations. A creator who performs well with an unrelated Beauty product is not automatically right for every formula, shade, tool, or claim environment."
      },
      {
        kind: "p",
        text: "TikTok's PDF recommends a 10% to 15% base affiliate commission and distributing 400 to 500 samples over four months. Treat those numbers as source-specific planning inputs, not universal targets. A brand should not adopt that sample volume unless it can screen creators, fulfill samples, follow up, review content, support claims, and learn from the resulting signals."
      }
    ]
  },
  {
    id: "give-every-beauty-video-one-clear-proof-job",
    h: "Give every Beauty video one clear proof job",
    body: [
      {
        kind: "p",
        text: "Beauty content needs enough variety to test different purchase questions. The team should not count ten versions of the same unboxing as ten independent learnings."
      },
      {
        kind: "table",
        headers: [
          "Content job",
          "Shopper question",
          "Useful execution"
        ],
        rows: [
          [
            "Texture and application",
            "What does it feel like and how is it used?",
            "Close-up texture, amount, tool, technique, and finish"
          ],
          [
            "Shade and appearance",
            "What may it look like in a relevant context?",
            "Shade context, lighting disclosure, real application, finish close-up"
          ],
          [
            "Routine fit",
            "Where does it belong and what comes before or after it?",
            "Simple routine sequence with accurate directions"
          ],
          [
            "Product distinction",
            "Why this product instead of a familiar alternative?",
            "Formula, format, applicator, packaging, or use-case comparison"
          ],
          [
            "Objection handling",
            "What may stop the purchase?",
            "Scent, texture, residue, size, cleaning, compatibility, or learning curve"
          ],
          [
            "Trust",
            "Is the product legitimate and represented responsibly?",
            "Label, ingredients, directions, packaging, brand context, and realistic expectations"
          ]
        ]
      },
      {
        kind: "p",
        text: "The brief should define the evidence the creator must communicate, not force every creator into the same script. It should also identify prohibited or unsupported claims, required usage directions, important warnings, and any lighting or editing conditions that could change how a shade or result appears."
      },
      {
        kind: "p",
        text: "Before-and-after content is not self-validating. The brand still needs to know the time period, routine, lighting, camera conditions, editing, other products used, and whether the stated outcome is supported. When that evidence is unavailable, use a direct product demonstration instead of turning a visual difference into a causal claim."
      }
    ]
  },
  {
    id: "build-the-listing-and-claims-layer-before-scaling-crea",
    h: "Build the listing and claims layer before scaling creator traffic",
    body: [
      {
        kind: "p",
        text: "Beauty conversion depends on trust before the order. A creator can make a product desirable, but the listing must help the shopper understand the formula, shade, quantity, use, warnings, shipping, and return expectations accurately."
      },
      {
        kind: "table",
        headers: [
          "Listing layer",
          "What it must resolve"
        ],
        rows: [
          [
            "Product identity",
            "Exact product type, variant, shade, size, quantity, and intended use"
          ],
          [
            "Visuals",
            "Packaging, applicator, texture, shade or finish context, and scale"
          ],
          [
            "Formula and labels",
            "Ingredient list, active ingredients where applicable, directions, warnings, and net contents"
          ],
          [
            "Routine guidance",
            "When, where, how much, and how often to use the product without unsupported promises"
          ],
          [
            "Offer",
            "Exact bundle contents, gifts, free-shipping terms, discounts, and current validity"
          ],
          [
            "Customer experience",
            "Fulfillment timing, packaging condition, support, returns, expiration, and shelf-life disclosure"
          ]
        ]
      },
      {
        kind: "p",
        text: "TikTok Shop's current U.S. Beauty and Personal Care Products Requirements say some sellers may need category qualification documents. The requirements distinguish cosmetics from over-the-counter drug products and may require cosmetic labels, Drug Facts, invoices, warnings, expiration information, and other evidence depending on the seller and product."
      },
      {
        kind: "p",
        text: "The same policy prohibits unverified medical applications, incorrectly labeled cosmetic-drug products, certain skin-bleaching or melanin-reduction products, recalled products, prohibited ingredients, and products not packaged or labeled for U.S. retail. It also describes shelf-life and safety responsibilities. Brands should verify their current product classification, documentation, labels, claims, and eligibility before launch. This article is operating guidance, not legal or regulatory advice."
      }
    ]
  },
  {
    id: "use-pricing-bundles-gifts-and-free-shipping-as-control",
    h: "Use pricing, bundles, gifts, and free shipping as controlled variables",
    body: [
      {
        kind: "p",
        text: "TikTok's Beauty PDF recommends competitive pricing, value-driven bundles, and free shipping. Those tools can reduce first-order friction, but they should not be stacked without a commercial question."
      },
      {
        kind: "table",
        headers: [
          "Offer variable",
          "Question it tests",
          "Risk to monitor"
        ],
        rows: [
          [
            "Competitive entry price",
            "Is the base price blocking trial?",
            "Training demand around an unsustainable price"
          ],
          [
            "Free shipping",
            "Is delivery cost stopping the first order?",
            "Low-AOV orders becoming unprofitable"
          ],
          [
            "Gift with purchase",
            "Does relevant added value improve the decision?",
            "Gift cost, unclear terms, or weak product relevance"
          ],
          [
            "Routine bundle",
            "Does a complete use case increase value and AOV?",
            "More explanation, inventory complexity, or incompatible products"
          ],
          [
            "Multi-unit bundle",
            "Is replenishment or sharing a real reason to buy more?",
            "Premature volume before product trust exists"
          ]
        ]
      },
      {
        kind: "p",
        text: "The team should calculate contribution margin after product cost, discounts, affiliate commission, paid spend, samples, pick and pack, shipping, refunds, gifts, and customer support. An offer should make the purchase decision easier while preserving enough economic room to keep learning."
      }
    ]
  },
  {
    id: "use-gmv-max-after-the-product-and-content-path-can-be-",
    h: "Use GMV Max after the product and content path can be measured",
    body: [
      {
        kind: "p",
        text: "TikTok's PDF presents GMV Max as an all-in-one cold-start engine. Its example launch setup includes a minimum $500 weekly budget, three to seven products, at least five videos, Maximum Delivery bidding, and later creative and budget expansion. These are source-specific recommendations, not universal instructions for every Beauty brand."
      },
      {
        kind: "p",
        text: "TikTok for Business currently describes Product GMV Max as an automated TikTok Shop Ads solution that uses available creative assets and optimizes organic and paid delivery toward product-level GMV. Its current best-practice guidance also emphasizes sufficient budget, stable ROI settings, and the use of affiliate videos."
      },
      {
        kind: "p",
        text: "Paid distribution can help compare creators, hooks, demonstrations, and offers. It cannot repair an unsupported claim, a misleading shade presentation, weak reviews, an unclear product page, or unstable inventory. WE Marketing's launch gate is simple: the Hero SKU, listing, claims, featured inventory, offer, tracking, and initial credible content pool must be ready before the team treats paid delivery as a scale decision."
      },
      {
        kind: "p",
        text: "There is also an attribution boundary. TikTok states that the GMV Max dashboard can attribute orders for promoted products from paid, organic, and affiliate sources to Product GMV Max. Review spend, total product GMV, content-level signals, margin, and the wider shop trend together instead of assuming every dashboard dollar represents incremental advertising impact."
      }
    ]
  },
  {
    id: "run-the-first-month-as-four-beauty-decisions",
    h: "Run the first month as four Beauty decisions",
    body: [
      {
        kind: "h3",
        text: "Days 1 to 7: Product truth"
      },
      {
        kind: "p",
        text: "Screen three to seven candidates. Confirm product classification, qualification needs, labels, claims, margin, offer, inventory, shipping, listing accuracy, and the initial content questions. Select one to three Hero SKUs for concentrated testing."
      },
      {
        kind: "h3",
        text: "Days 8 to 14: Creator and proof fit"
      },
      {
        kind: "p",
        text: "Recruit a focused creator cohort across the relevant use cases, appearances, routines, and demonstration skills. Track response, sample acceptance, delivery, questions, posting, correct product links, and whether each video completes a useful proof job."
      },
      {
        kind: "h3",
        text: "Days 15 to 21: Conversion and amplification"
      },
      {
        kind: "p",
        text: "Repair repeated product-page or claim confusion. Test promising brand and authorized affiliate content with controlled paid support. Review product clicks, conversion, order value, offer response, content quality, customer questions, reviews, margin, and fulfillment."
      },
      {
        kind: "h3",
        text: "Days 22 to 30: Scale, repair, or stop"
      },
      {
        kind: "p",
        text: "Scale only when more than one credible proof path produces useful demand and the product remains supportable. Repair one named constraint when the signal exists but the listing, creator fit, content, offer, trust, or inventory is failing. Stop when several credible tests show weak interest or no sustainable economic path."
      }
    ]
  },
  {
    id: "measure-where-the-beauty-system-lost-trust-or-momentum",
    h: "Measure where the Beauty system lost trust or momentum",
    body: [
      {
        kind: "table",
        headers: [
          "Signal",
          "Likely question"
        ],
        rows: [
          [
            "Relevant creators do not accept",
            "Is the product, offer, trust level, commission, or outreach cohort wrong?"
          ],
          [
            "Samples arrive but posts do not",
            "Is the product hard to use, the brief unclear, follow-up weak, or creator fit poor?"
          ],
          [
            "Videos earn views but few product clicks",
            "Is the content satisfying without explaining a purchase reason?"
          ],
          [
            "Clicks are healthy but orders are weak",
            "Are claims, reviews, price, shipping, shade choice, size, or listing clarity blocking conversion?"
          ],
          [
            "Orders occur but refunds or complaints rise",
            "Did content or the listing create the wrong result, shade, texture, scent, packaging, or usage expectation?"
          ],
          [
            "One creator sells but others do not",
            "Is the product repeatable, or did performance depend on one audience relationship?"
          ],
          [
            "GMV rises while contribution falls",
            "Are gifts, discounts, commissions, ads, samples, shipping, and refunds consuming the margin?"
          ]
        ]
      },
      {
        kind: "p",
        text: "Weekly review should include creator response, sample acceptance, delivery, publication, repeat posting, content by proof job, product clicks, conversion, AOV, offer performance, reviews, refunds and reasons, contribution margin, inventory coverage, and the next action. GMV is an outcome. It does not explain where the launch system failed."
      }
    ]
  },
  {
    id: "how-we-marketing-supports-beauty-cold-starts",
    h: "How WE Marketing supports Beauty cold starts",
    body: [
      {
        kind: "p",
        text: "WE Marketing helps Beauty brands connect Hero SKU selection, creator matching, affiliate setup, sample follow-up, claims-aware briefs, localized product pages, UGC testing, creator community operations, GMV Max coordination, and weekly commercial decisions."
      },
      {
        kind: "p",
        text: "The work is not simply translating product features or sending a larger creator list. Creator questions should improve the listing and brief. Content response should change the next creator cohort. Customer questions and reviews should change claims, education, and product-page detail. Paid testing should concentrate only after the product and proof path produce evidence worth amplifying."
      },
      {
        kind: "p",
        text: "WE Marketing's active creator community can give a Beauty launch a warmer starting point, but community size cannot replace product fit, demonstration skill, responsible claims, or follow-through."
      },
      {
        kind: "cta",
        label: "Talk with WE Marketing about a Beauty cold start →",
        href: "https://zus03h0enw04.sg.larksuite.com/scheduler/03970278dd9a7925"
      }
    ]
  },
  {
    id: "sources-and-evidence-boundaries",
    h: "Sources and evidence boundaries",
    body: [
      {
        kind: "p",
        text: "Primary source: TikTok for Business, Beauty | From Zero to Performer (https://ads.tiktok.com/business/library/Beauty_cold_start_EN.pdf)."
      },
      {
        kind: "p",
        text: "Supporting sources: TikTok Shop Seller University, Beauty and Personal Care Products Requirements (https://seller-us.tiktok.com/university/essay?default_language=en&knowledge_id=1789325403522858); TikTok for Business, About Product GMV Max (https://ads.tiktok.com/help/article/about-product-gmv-max?lang=en); Best practices for Product GMV Max (https://ads.tiktok.com/help/article/best-practices-for-product-gmv-max); and About affiliate creatives for TikTok Shop Ads (https://ads.tiktok.com/help/article/about-affiliate-creatives-for-tiktok-shop-ads)."
      },
      {
        kind: "p",
        text: "The Beauty PDF's 0.7% and 62.8% concentration figures are labeled for Southeast Asia, not the United States. Platform features, budgets, commission examples, sample guidance, eligibility, attribution, and interfaces can change. Verify current Seller Center, TikTok Ads Manager, product documentation, and professional compliance guidance before execution. WE Marketing frameworks in this article are operating guidance, not TikTok rules or a guarantee of sales, creator output, approval, or profitability."
      }
    ]
  }
],
    faqs: [
  {
    q: "What is a TikTok Shop Beauty cold start?",
    a: "A TikTok Shop Beauty cold start is a controlled 0-to-1 test connecting Hero SKU selection, creator fit, demonstration content, listing and claim accuracy, offer economics, affiliate activation, GMV Max, inventory, fulfillment, and customer feedback. The goal is to decide whether to scale, repair, or stop."
  },
  {
    q: "How many Beauty products should a brand launch on TikTok Shop?",
    a: "TikTok's Beauty cold-start PDF recommends launching three to seven products. WE Marketing treats that as a screening range, then concentrates the real launch on one to three Hero SKUs so samples, creators, content, inventory, and paid learning are not fragmented."
  },
  {
    q: "What makes a good TikTok Shop Beauty Hero SKU?",
    a: "A strong Beauty Hero SKU is easy to demonstrate, relevant to a recognizable use case or routine, supported by accurate evidence and claims, financially able to carry launch costs, and stocked well enough to convert the demand created by creators and paid testing."
  },
  {
    q: "How should a Beauty brand choose TikTok Shop creators?",
    a: "Evaluate product affinity, audience fit, demonstration ability, and working reliability. The creator should credibly use or explain the product, reach the relevant shopper, show the evidence needed for a purchase, follow claim boundaries, link the correct product, and communicate reliably."
  },
  {
    q: "How many samples should a Beauty brand send?",
    a: "TikTok's PDF recommends 400 to 500 samples over four months, but this is not a universal quota. Sample volume should match the brand's creator-screening quality, follow-up capacity, product margin, inventory, compliance support, and ability to learn from the resulting content."
  },
  {
    q: "When should a Beauty brand start GMV Max?",
    a: "Begin controlled paid testing when the Hero SKU, listing, claims, featured inventory, offer, tracking, and initial credible content pool are ready. GMV Max can distribute and compare content, but it cannot repair an unsupported claim, misleading demonstration, unclear product page, or unstable operation."
  },
  {
    q: "What Beauty metrics matter besides GMV?",
    a: "Track creator response, sample acceptance, delivery and posting, content by proof job, product clicks, conversion, AOV, offer performance, reviews, refunds and reasons, contribution margin, inventory coverage, and whether the result repeats across creators and content angles."
  },
  {
    q: "Are Beauty product claims and labels part of cold-start strategy?",
    a: "Yes. Claims and labels affect product eligibility, creator guidance, shopper trust, listing accuracy, customer expectations, and paid scalability. Brands should confirm the current product classification, documentation, labels, directions, warnings, and claim support before activating creators or ads."
  }
],
    related: [
      { label: 'TikTok Shop Beauty Brand Agency Guide', href: 'tiktok-shop-beauty-brand-agency-guide.html' },
      { label: 'TikTok Shop Fashion Cold Start', href: 'tiktok-shop-fashion-cold-start.html' },
      { label: 'TikTok Shop Creator Affiliate Management', href: 'tiktok-shop-creator-affiliate-management.html' },
    ],
  },
  zh: {
    meta: {
      title: 'TikTok Shop 美妆冷启动：从 Hero SKU 到可重复增长的 0-1 系统',
      desc: '面向美妆品牌的 TikTok Shop 美国站冷启动方法：Hero SKU、达人演示、claim、商品页、Offer、Affiliate、GMV Max、库存和用户反馈。',
      cat: 'TIKTOK SHOP 美国站 · 美妆冷启动',
      author: 'WE Marketing Team',
      date: '2026 年 7 月 26 日',
      read: '16 分钟阅读',
      heroImage: 'hero-tiktok-shop-beauty-cold-start.png',
      heroAlt: '无品牌 Beauty Hero SKU 和达人演示组成的 TikTok Shop 0-1 冷启动系统',
    },
    sections: [
  {
    id: "zh-direct-answer",
    eyebrow: "核心纠正",
    h: "美妆冷启动要先建立可信的产品证明路径",
    body: [
      {
        kind: "p",
        text: "美妆冷启动跑不出来，通常不是因为品牌产品不够多，而是还没有验证一个产品的可信购买路径，就提前把达人、样品、内容、Offer 和投放预算分散到整个产品目录。"
      },
      {
        kind: "callout",
        text: "直接答案： TikTok Shop 美妆冷启动是一段受控的 0-1 产品验证期。品牌需要把 Hero SKU、达人匹配、产品演示、claim 与商品页准确性、Offer 经济模型、Affiliate、GMV Max、库存、履约和用户反馈连接起来，并在第一轮结束时明确决定 Scale、Repair 或 Stop。"
      },
      {
        kind: "p",
        text: "TikTok for Business 建议 Beauty 品牌同时 launch 3-7 个产品，并根据早期销售、engagement 和 affiliate pick-up 判断 winner。这个数量更适合做快速筛选，不代表每个商品都应该获得相同的寄样、内容、库存和投放资源。"
      },
      {
        kind: "infographic",
        src: "tiktok-shop-beauty-zero-to-one-loop-zh.svg",
        alt: "WE Marketing TikTok Shop 美妆冷启动 0-1 闭环，连接 Hero SKU、达人匹配、产品证明、claim、商品页、GMV Max、用户反馈和下一步决定",
        caption: "WE Marketing 美妆冷启动框架：产品证明、信任、转化和运营最终要支持 Scale、Repair 或 Stop。"
      }
    ]
  },
  {
    id: "zh-美妆冷启动先验证产品证明-不是先扩大产品数量",
    h: "美妆冷启动先验证产品证明，不是先扩大产品数量",
    body: [
      {
        kind: "p",
        text: "Beauty 不是一种内容任务。Makeup、skincare、hair care、body care、fragrance 和 beauty tools 面对的购买问题和信任门槛都不同。"
      },
      {
        kind: "table",
        headers: [
          "Beauty 产品类型",
          "消费者需要判断什么",
          "更有效的证明方式"
        ],
        rows: [
          [
            "Makeup",
            "色号、妆效、遮盖、质地、持妆和上妆方式",
            "真实上妆、近景妆效、色号语境、wear check"
          ],
          [
            "Skincare",
            "质地、routine 位置、使用方式、成分和信任",
            "质地演示、routine 顺序、准确用法、负责任的成分教育"
          ],
          [
            "Hair care",
            "发质语境、使用步骤、造型结果、定型和易用性",
            "分区使用、造型过程、头发动态、湿度或定型语境"
          ],
          [
            "Body care",
            "质地、香味描述、吸收、使用区域和 routine 价值",
            "身体使用、质地、routine 和包装容量"
          ],
          [
            "Beauty tools",
            "物理贴合、使用区域、手法、清洁和收纳",
            "近景演示、角度与轮廓贴合、分步骤手法"
          ]
        ]
      },
      {
        kind: "p",
        text: "一条高播放 Beauty 视频仍然可能没有回答购买问题。精致的 serum drop、转场或开箱可以吸引注意力，却不一定说明产品适合谁、怎样加入 routine、消费者应该期待什么，或者为什么要买这个 listing。"
      }
    ]
  },
  {
    id: "zh-先筛选-3-7-个产品-再集中-1-3-个-hero-sku",
    h: "先筛选 3-7 个产品，再集中 1-3 个 Hero SKU",
    body: [
      {
        kind: "p",
        text: "TikTok Beauty cold-start PDF 建议同时上线 3-7 个产品，用早期结果判断 winner。WE Marketing 会把 quick screen 和真正的 launch 分开："
      },
      {
        kind: "table",
        headers: [
          "阶段",
          "产品范围",
          "需要做出的决定"
        ],
        rows: [
          [
            "Quick screen",
            "3-7 个产品、色号、套装或形态",
            "哪些候选能获得达人兴趣、有效互动、商品点击和早期订单？"
          ],
          [
            "0-1 launch",
            "1-3 个 Hero SKU",
            "哪个产品可以建立可重复的产品证明、清晰定位、可承受利润和稳定库存？"
          ],
          [
            "受控扩展",
            "已验证 Hero SKU 加 routine、色号、refill、bundle 或关联产品",
            "扩展能否提高客户价值，同时不打散内容和库存？"
          ]
        ]
      },
      {
        kind: "p",
        text: "TikTok PDF 提到，在东南亚市场，不到 0.7% 的 Beauty hero products 贡献了 62.8% 的类目 GMV。这是来源中的区域数据，不是美国站 benchmark。对运营更有用的结论是资源集中：少数已经验证的商品，可能值得获得更大比例的达人、内容、库存和预算。"
      },
      {
        kind: "p",
        text: "一个可用的 Beauty Hero SKU 应该能在镜头里被快速理解，属于清晰的 routine 或使用问题，有准确证据支持，符合预期用途和当前要求，并且利润可以承担样品、达人佣金、运费、Offer 和受控投放。"
      }
    ]
  },
  {
    id: "zh-达人匹配要同时看使用语境和演示能力",
    h: "达人匹配要同时看使用语境和演示能力",
    body: [
      {
        kind: "p",
        text: "Beauty 达人匹配不只是审美一致。达人需要对产品使用语境有可信度，也要能够展示消费者真正需要的证据。"
      },
      {
        kind: "p",
        text: "WE Marketing 会从四个维度判断 Beauty creator fit："
      },
      {
        kind: "list",
        items: [
          "Product affinity： 达人会不会真实使用这个产品，或者能否自然地放进现有 routine？",
          "Audience fit： 受众是否符合产品的使用场景、价格、肤质、发质、色号、风格或 routine？",
          "Demonstration fit： 达人能否准确上妆、解释、比较或展示产品？",
          "Working fit： 达人能否选对商品、遵守 claim 边界、稳定发布、挂对链接，并在事实需要修正时及时沟通？"
        ],
        ordered: true
      },
      {
        kind: "p",
        text: "Makeup 往往需要真实上妆能力和镜头呈现。Skincare 和 personal care 通常更依赖信任、成分与用法清晰度，以及合理预期。一个达人卖过其他 Beauty 产品，不代表他一定适合所有 formula、shade、tool 或 claim 环境。"
      },
      {
        kind: "p",
        text: "TikTok PDF 建议设置 10%-15% base affiliate commission，并在四个月内寄出 400-500 份样品。这些数字应该被视为来源中的 planning input，不是所有品牌必须完成的 KPI。只有当团队能够筛选达人、履约寄样、持续 follow-up、审核内容、支持 claim 和读取信号时，这个样品规模才有意义。"
      }
    ]
  },
  {
    id: "zh-每条-beauty-内容都要承担一个明确的证明任务",
    h: "每条 Beauty 内容都要承担一个明确的证明任务",
    body: [
      {
        kind: "p",
        text: "Beauty 内容需要用不同角度回答不同购买问题。十条相同开箱不能被当成十次独立学习。"
      },
      {
        kind: "table",
        headers: [
          "内容任务",
          "消费者问题",
          "可用执行方式"
        ],
        rows: [
          [
            "质地与使用",
            "质地是什么，应该怎样使用？",
            "近景质地、用量、工具、手法和 finish"
          ],
          [
            "色号与外观",
            "在相关语境里可能呈现什么效果？",
            "色号语境、灯光说明、真实上妆和近景妆效"
          ],
          [
            "Routine fit",
            "应该放在哪一步，前后使用什么？",
            "按准确用法展示简单 routine"
          ],
          [
            "产品差异",
            "为什么选择它，而不是熟悉的替代品？",
            "Formula、形态、applicator、包装或使用场景比较"
          ],
          [
            "异议处理",
            "什么问题可能阻止购买？",
            "香味、质地、残留、容量、清洁、兼容性或学习成本"
          ],
          [
            "信任",
            "产品是否正规，并被负责任地呈现？",
            "标签、成分、用法、包装、品牌背景和合理预期"
          ]
        ]
      },
      {
        kind: "p",
        text: "Brief 应该明确达人需要表达的证据，而不是要求所有人使用同一个 script。它还应该写清不支持或禁止的 claim、必要用法、重要 warning，以及可能改变色号或效果呈现的灯光和剪辑条件。"
      },
      {
        kind: "p",
        text: "Before-and-after 画面本身不能证明因果。品牌还需要知道时间范围、routine、灯光、相机条件、剪辑、同时使用的其他产品，以及结果是否有支持。当这些证据不存在时，应该使用直接产品演示，不要把画面差异写成产品必然造成的结果。"
      }
    ]
  },
  {
    id: "zh-放大达人流量前-先建立商品页和-claim-层",
    h: "放大达人流量前，先建立商品页和 claim 层",
    body: [
      {
        kind: "p",
        text: "Beauty 的转化依赖下单前的信任。达人可以让产品看起来有吸引力，但商品页还要准确说明 formula、shade、数量、用法、warning、物流和退换预期。"
      },
      {
        kind: "table",
        headers: [
          "商品页层级",
          "必须解决的问题"
        ],
        rows: [
          [
            "产品身份",
            "准确产品类型、变体、色号、容量、数量和预期用途"
          ],
          [
            "视觉",
            "包装、applicator、质地、色号或 finish 语境和真实比例"
          ],
          [
            "Formula 与标签",
            "成分表、适用时的 active ingredients、用法、warning 和净含量"
          ],
          [
            "Routine 指导",
            "什么时候、在哪一步、使用多少和使用频率，不做无支持承诺"
          ],
          [
            "Offer",
            "准确 bundle 内容、赠品、包邮规则、折扣和有效状态"
          ],
          [
            "客户体验",
            "履约时效、包装状态、客服、退货、有效期和 shelf-life disclosure"
          ]
        ]
      },
      {
        kind: "p",
        text: "TikTok Shop 当前美国站 Beauty and Personal Care Products Requirements 说明，部分卖家可能需要提交 category qualification 文件。要求会根据 seller 和 product 区分 cosmetics 与 OTC drug，并可能涉及 cosmetic label、Drug Facts、invoice、warning、expiration 等材料。"
      },
      {
        kind: "p",
        text: "同一政策也禁止未验证的 medical application、错误标记的 cosmetic-drug product、部分 bleach 或 melanin-reduction 产品、recall 产品、禁止成分，以及不符合美国零售包装或标签要求的商品。政策也说明了 shelf life 与安全责任。品牌上线前需要核对当前产品分类、材料、标签、claim 和 eligibility。本文属于运营信息，不是法律或合规建议。"
      }
    ]
  },
  {
    id: "zh-把价格-bundle-赠品和包邮当作受控变量",
    h: "把价格、bundle、赠品和包邮当作受控变量",
    body: [
      {
        kind: "p",
        text: "TikTok Beauty PDF 建议 competitive pricing、value-driven bundles 和 free shipping。这些工具可以降低首单阻力，但不应该在没有商业问题的情况下全部叠加。"
      },
      {
        kind: "table",
        headers: [
          "Offer 变量",
          "要测试的问题",
          "需要监控的风险"
        ],
        rows: [
          [
            "Competitive entry price",
            "基础价格是否阻碍尝试？",
            "用户只接受不可持续低价"
          ],
          [
            "Free shipping",
            "运费是否阻碍首单？",
            "低客单订单失去利润"
          ],
          [
            "Gift with purchase",
            "相关赠品能否增强购买决定？",
            "赠品成本、规则不清或关联性弱"
          ],
          [
            "Routine bundle",
            "完整使用场景能否提高价值和 AOV？",
            "解释与库存更复杂，产品可能不兼容"
          ],
          [
            "Multi-unit bundle",
            "补货或分享是否是真实购买理由？",
            "产品信任还没建立就提前扩大数量"
          ]
        ]
      },
      {
        kind: "p",
        text: "团队要计算扣除产品成本、折扣、达人佣金、投放、样品、仓库操作、物流、退款、赠品和客服后的 contribution margin。Offer 应该降低购买决策难度，同时保留足够的经济空间继续学习。"
      }
    ]
  },
  {
    id: "zh-产品和内容路径可衡量后-再使用-gmv-max",
    h: "产品和内容路径可衡量后，再使用 GMV Max",
    body: [
      {
        kind: "p",
        text: "TikTok PDF 把 GMV Max 定义为 all-in-one cold-start engine。它的示例 launch setup 包括每周至少 500 美元预算、3-7 个产品、至少 5 条视频、Maximum Delivery bidding，以及后续增加 creative 和预算。这些是来源建议，不是所有 Beauty 品牌都要照搬的固定指令。"
      },
      {
        kind: "p",
        text: "TikTok for Business 当前将 Product GMV Max 定义为 TikTok Shop Ads 自动化解决方案，使用可用 creative assets，并共同优化 organic 和 paid delivery。当前 best-practice guidance 还强调充分预算、稳定 ROI settings 和 affiliate videos。"
      },
      {
        kind: "p",
        text: "Paid distribution 可以帮助比较达人、hook、演示方式和 Offer，但不能修复无支持 claim、误导性的色号呈现、弱评价、模糊商品页或不稳定库存。WE Marketing 的 launch gate 很清楚：Hero SKU、listing、claim、主推库存、Offer、tracking 和第一批可信内容准备好后，才能把付费分发当作 scale decision。"
      },
      {
        kind: "p",
        text: "还要注意 attribution 边界。TikTok 说明，GMV Max dashboard 可以把 promoted products 的 paid、organic 和 affiliate orders 归因到 Product GMV Max。复盘时应该同时看 spend、total product GMV、内容信号、margin 和整体店铺趋势，不要默认 dashboard 里的每一美元都是广告带来的增量。"
      }
    ]
  },
  {
    id: "zh-用四个-beauty-决策完成第一个月",
    h: "用四个 Beauty 决策完成第一个月",
    body: [
      {
        kind: "h3",
        text: "Days 1-7：Product truth"
      },
      {
        kind: "p",
        text: "快速筛选 3-7 个候选，确认产品分类、qualification、标签、claim、利润、Offer、库存、物流、商品页准确性和最初内容问题。选择 1-3 个 Hero SKU 进入集中测试。"
      },
      {
        kind: "h3",
        text: "Days 8-14：Creator and proof fit"
      },
      {
        kind: "p",
        text: "根据相关使用场景、外观语境、routine 和演示能力招募集中达人 cohort。追踪回复、样品接受、签收、问题、发布、挂链准确性，以及每条视频是否完成有效证明任务。"
      },
      {
        kind: "h3",
        text: "Days 15-21：Conversion and amplification"
      },
      {
        kind: "p",
        text: "修复重复出现的商品页或 claim 问题。对有潜力的品牌内容和已授权 affiliate content 进行受控投放。复盘商品点击、转化、AOV、Offer、内容质量、用户问题、评价、margin 和履约。"
      },
      {
        kind: "h3",
        text: "Days 22-30：Scale、Repair 或 Stop"
      },
      {
        kind: "p",
        text: "只有当不止一条可信证明路径产生有效需求，而且产品仍然可支持时才 Scale。产品存在信号，但 listing、达人 fit、内容、Offer、信任或库存有一层失败时，先 Repair 一个明确问题。多个可信测试都没有兴趣或可持续利润路径时，应该 Stop。"
      }
    ]
  },
  {
    id: "zh-找到-beauty-系统在哪一层失去信任或动能",
    h: "找到 Beauty 系统在哪一层失去信任或动能",
    body: [
      {
        kind: "table",
        headers: [
          "信号",
          "应该检查的问题"
        ],
        rows: [
          [
            "相关达人不接受",
            "产品、Offer、信任、佣金或 outreach cohort 是否错误？"
          ],
          [
            "样品签收后不发布",
            "产品是否难用、brief 是否不清楚、follow-up 是否弱、creator fit 是否不足？"
          ],
          [
            "视频有播放但商品点击弱",
            "内容是否令人满意，却没有说明购买理由？"
          ],
          [
            "点击正常但订单弱",
            "Claim、评价、价格、物流、色号选择、容量或商品页是否阻碍转化？"
          ],
          [
            "有订单但退款或投诉增加",
            "内容或 listing 是否制造了错误的效果、色号、质地、香味、包装或用法预期？"
          ],
          [
            "只有一个达人能卖",
            "产品是否可重复，还是结果依赖一个达人和受众关系？"
          ],
          [
            "GMV 增长但 contribution 下降",
            "赠品、折扣、佣金、投放、样品、物流和退款是否消耗利润？"
          ]
        ]
      },
      {
        kind: "p",
        text: "Beauty 周度复盘应该包括达人回复、样品接受、签收、发布、repeat posting、不同证明任务的内容、商品点击、转化、AOV、Offer、评价、退款原因、contribution margin、库存覆盖和 next action。GMV 是结果，不能单独解释系统在哪一层失败。"
      }
    ]
  },
  {
    id: "zh-we-marketing-怎么帮助-beauty-品牌做冷启动",
    h: "WE Marketing 怎么帮助 Beauty 品牌做冷启动",
    body: [
      {
        kind: "p",
        text: "WE Marketing 帮助 Beauty 品牌连接 Hero SKU、达人匹配、Affiliate 设置、样品 follow-up、claim-aware brief、本地化商品页、UGC 测试、达人社群运营、GMV Max 协同和每周商业决策。"
      },
      {
        kind: "p",
        text: "这项工作不只是翻译产品卖点或提供更大的达人名单。达人问题应该进入商品页和 brief；内容反应应该改变下一轮 creator cohort；用户问题和评价应该改变 claim、教育和商品页细节；只有当产品与证明路径产生值得放大的证据后，才集中 paid testing。"
      },
      {
        kind: "p",
        text: "WE Marketing 的活跃达人社群可以让 Beauty 冷启动有更温暖的起点，但社群规模不能替代产品 fit、演示能力、负责任的 claim 和持续 follow-up。"
      },
      {
        kind: "cta",
        label: "和 WE Marketing 讨论美妆品牌美国站冷启动 →",
        href: "https://zus03h0enw04.sg.larksuite.com/scheduler/03970278dd9a7925"
      }
    ]
  },
  {
    id: "zh-来源与证据边界",
    h: "来源与证据边界",
    body: [
      {
        kind: "p",
        text: "主要来源：TikTok for Business，Beauty | From Zero to Performer（https://ads.tiktok.com/business/library/Beauty_cold_start_EN.pdf）。"
      },
      {
        kind: "p",
        text: "辅助来源：TikTok Shop Seller University，Beauty and Personal Care Products Requirements（https://seller-us.tiktok.com/university/essay?default_language=en&knowledge_id=1789325403522858）；TikTok for Business，About Product GMV Max（https://ads.tiktok.com/help/article/about-product-gmv-max?lang=en）、Best practices for Product GMV Max（https://ads.tiktok.com/help/article/best-practices-for-product-gmv-max）和 About affiliate creatives for TikTok Shop Ads（https://ads.tiktok.com/help/article/about-affiliate-creatives-for-tiktok-shop-ads）。"
      },
      {
        kind: "p",
        text: "Beauty PDF 中 0.7% 和 62.8% 的集中度数据标注为东南亚，不是美国市场数据。平台功能、预算、佣金示例、样品建议、eligibility、attribution 和界面可能变化。执行前应核对 Seller Center、TikTok Ads Manager、产品材料和专业合规建议。本文 WE Marketing 框架属于运营方法，不是 TikTok 官方规则，也不承诺销售、达人发布、审批或利润结果。"
      }
    ]
  }
],
    faqs: [
  {
    q: "TikTok Shop Beauty 冷启动是什么？",
    a: "TikTok Shop Beauty 冷启动是一段受控的 0-1 测试，把 Hero SKU、达人匹配、演示内容、listing 与 claim 准确性、Offer、Affiliate、GMV Max、库存、履约和用户反馈连接起来，目标是做出 Scale、Repair 或 Stop 的决定。"
  },
  {
    q: "Beauty 品牌应该同时上线多少个产品？",
    a: "TikTok Beauty cold-start PDF 建议同时 launch 3-7 个产品。WE Marketing 把它作为快速筛选范围，真正进入 launch 后集中 1-3 个 Hero SKU，避免样品、达人、内容、库存和投放学习被打散。"
  },
  {
    q: "什么样的 Beauty 产品适合做 Hero SKU？",
    a: "一个强 Beauty Hero SKU 应该容易演示，属于清晰使用场景或 routine，有准确证据和 claim 支持，利润可以承担冷启动成本，并有足够库存承接达人内容和投放创造的需求。"
  },
  {
    q: "Beauty 品牌怎样选择 TikTok Shop 达人？",
    a: "同时检查 product affinity、audience fit、demonstration ability 和 working reliability。达人应该能可信地使用或解释产品，触达相关消费者，展示购买所需证据，遵守 claim 边界，挂对商品并可靠沟通。"
  },
  {
    q: "Beauty 品牌应该寄多少样品？",
    a: "TikTok PDF 建议四个月寄出 400-500 份样品，但这不是通用 KPI。寄样规模应该匹配品牌的达人筛选、follow-up、产品利润、库存、合规支持，以及从内容中读取和应用学习的能力。"
  },
  {
    q: "Beauty 品牌什么时候开始 GMV Max？",
    a: "Hero SKU、listing、claim、主推库存、Offer、tracking 和第一批可信内容准备好后，再开始受控投放。GMV Max 可以分发和比较内容，但不能修复无支持 claim、误导演示、模糊商品页或不稳定运营。"
  },
  {
    q: "除了 GMV，Beauty 冷启动还要看什么？",
    a: "要看达人回复、样品接受、签收和发布、不同证明任务的内容、商品点击、转化、AOV、Offer、评价、退款原因、contribution margin、库存覆盖，以及结果能否在不同达人和内容角度中重复。"
  },
  {
    q: "Beauty 产品的 claim 和标签是否属于冷启动策略？",
    a: "属于。Claim 和标签会影响产品 eligibility、达人指导、消费者信任、商品页准确性、用户预期和付费放大。品牌激活达人或广告前，需要确认当前产品分类、材料、标签、用法、warning 和 claim support。"
  }
],
    related: [
      { label: 'TikTok Shop Beauty 品牌 Agency 指南', href: 'tiktok-shop-beauty-brand-agency-guide.html?lang=zh' },
      { label: 'TikTok Shop 服装冷启动', href: 'tiktok-shop-fashion-cold-start.html?lang=zh' },
      { label: 'TikTok Shop 达人联盟管理', href: 'tiktok-shop-creator-affiliate-management.html?lang=zh' },
    ],
  },
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
  return <div data-screen-label="WE Blog · Beauty Cold Start">
    <CursorStars />
    <NavBar lang={lang} onLang={setLang} basePath="../" />
    <BlogPost {...post} labels={LABELS[lang]} />
    <CtaFooter lang={lang} />
    <Footer lang={lang} basePath="../" />
  </div>;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
