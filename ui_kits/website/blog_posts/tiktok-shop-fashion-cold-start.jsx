const LABELS = {
  en: { back: 'Blog', toc: 'On this page', faq: 'Frequently asked questions', related: 'Related guides' },
  zh: { back: '博客', toc: '本文目录', faq: '常见问题', related: '相关文章' },
};

const POSTS = {
  en: {
    meta: {
      title: 'TikTok Shop Fashion Cold Start: Build a 0-to-1 Bestseller System',
      desc: 'Launch a Fashion brand on TikTok Shop with a practical system for hero SKUs, creators, try-on content, size clarity, offers, GMV Max, inventory, returns, and weekly decisions.',
      cat: 'TIKTOK SHOP U.S. · FASHION',
      author: 'WE Marketing Team',
      date: 'Jul 26, 2026',
      read: '13 min read',
      heroImage: 'hero-tiktok-shop-fashion-cold-start.png',
      heroAlt: 'Fashion hero SKUs, creator content, product variants, and performance review arranged as a TikTok Shop zero-to-one cold-start system',
    },
    sections: [
  {
    id: "direct-answer",
    eyebrow: "THE REAL CORRECTION",
    h: "A Fashion cold start should identify a repeatable hero SKU",
    body: [
      {
        kind: "p",
        text: "A TikTok Shop Fashion cold start should not be judged by how many styles a brand uploads or how quickly one video produces a sales spike. Its real job is to identify a hero product that creators can explain repeatedly, shoppers can evaluate confidently, the product page can represent accurately, and the business can keep in stock without losing the economics to discounts, commissions, ads, and returns."
      },
      {
        kind: "callout",
        text: "Direct answer: A Fashion cold start is a controlled 0-to-1 test across product selection, creator fit, try-on proof, size and variant clarity, offer economics, GMV Max, inventory, fulfillment, and returns. The first launch cycle should end with a clear decision: scale the winner, repair the broken layer, or stop spending on a product that has not earned more resources."
      },
      {
        kind: "p",
        text: "TikTok for Business describes Fashion as a bestseller-driven category. Its Fashion cold-start guide says more than 50% of Fashion shop GMV comes from best-selling products and that the average bestseller lasts three to four months. Those figures make focus important, but they also make speed easy to misunderstand. A short commercial window does not mean a brand should rush seven products into paid traffic. It means the team must learn quickly enough to concentrate inventory, creator attention, and content on the right product while the opportunity is still useful."
      },
      {
        kind: "infographic",
        src: "tiktok-shop-fashion-zero-to-one-loop.svg",
        alt: "WEM TikTok Shop Fashion zero-to-one cold-start loop connecting product screening, creator fit, try-on proof, product-page clarity, paid testing, inventory, returns, and the next decision",
        caption: "WEM operating framework: every launch layer should make the next product, creator, content, inventory, or spending decision clearer."
      }
    ]
  },
  {
    id: "screen-several-products-then-concentrate-on-one-to-thr",
    h: "Screen several products, then concentrate on one to three hero SKUs",
    body: [
      {
        kind: "p",
        text: "TikTok's Fashion guide recommends launching and testing three to seven products. That is a sensible screening range when the brand needs evidence about which silhouette, price point, color, or use occasion earns attention. It should not become a rule to split every resource equally across seven listings."
      },
      {
        kind: "p",
        text: "WEM separates the quick screen from the real launch:"
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
            "3–7 styles, colors, fits, or offers",
            "Which products earn creator interest, useful engagement, product clicks, and early orders?"
          ],
          [
            "0-to-1 launch",
            "1–3 hero SKUs",
            "Which product can support repeatable try-on content, clear variant choice, workable economics, and reliable stock?"
          ],
          [
            "Controlled extension",
            "Proven hero plus limited colors, bundles, or adjacent pieces",
            "Does newness increase customer value without fragmenting inventory and content?"
          ]
        ]
      },
      {
        kind: "p",
        text: "A Fashion hero SKU needs more than visual appeal. It should have a clear reason to wear it, a silhouette that reads on camera, enough size and color availability to convert the demand being created, and a margin structure that can absorb samples, affiliate commission, offers, shipping, paid testing, and expected returns."
      },
      {
        kind: "p",
        text: "Variant complexity matters. A listing with five colors and eight sizes is not one inventory decision. It is forty possible variant combinations. If creators repeatedly feature a color or size that is unavailable, strong content can create frustration instead of momentum. Before launch, the team should identify the featured variant, the depth of stock behind it, acceptable substitutes, and the point where paid or creator activity must pause."
      }
    ]
  },
  {
    id: "choose-creators-for-style-body-and-size-context-and-wo",
    h: "Choose creators for style, body and size context, and working reliability",
    body: [
      {
        kind: "p",
        text: "Fashion creator matching is not only an aesthetic decision. The viewer needs enough context to judge how the item may fit, move, layer, and look in a real situation. A creator can match the brand's visual identity while still being a poor test partner if the audience, body or size context, content format, or working behavior does not match the product's actual job."
      },
      {
        kind: "p",
        text: "WEM uses four Fashion creator-fit questions:"
      },
      {
        kind: "list",
        items: [
          "Style fit: Does the creator already make outfits or scenarios where the product belongs?",
          "Shopper fit: Does the audience match the likely wearer, use occasion, price tolerance, and style language?",
          "Proof fit: Can the creator show the details a shopper needs, including fit, fabric, movement, length, styling, and variant choice?",
          "Working fit: Does the creator communicate clearly, select the correct size, meet timelines, link the correct product, and respond when facts need correction?"
        ],
        ordered: true
      },
      {
        kind: "p",
        text: "Follower count cannot answer those questions. A smaller creator whose audience trusts their workwear, modest-fashion, petite, plus-size, streetwear, or occasion-dressing recommendations may create more useful evidence than a larger lifestyle account with no consistent fashion role."
      },
      {
        kind: "p",
        text: "Size representation should be planned deliberately. This does not mean asking every creator to make universal fit claims. It means selecting a cohort that can demonstrate the product across relevant body and size contexts, while requiring each creator to describe only their own experience accurately. The brand should provide measurement guidance, model information, fabric stretch, intended fit, and approved language without scripting the creator's personality."
      }
    ]
  },
  {
    id: "make-the-try-on-answer-a-purchase-question",
    h: "Make the try-on answer a purchase question",
    body: [
      {
        kind: "p",
        text: "Fashion content can generate views because the transformation, styling, or personality is entertaining. That does not mean the content answered the questions blocking a purchase."
      },
      {
        kind: "p",
        text: "A useful creative pool covers different jobs:"
      },
      {
        kind: "list",
        items: [
          "Silhouette proof: Show the full look from useful angles without hiding the shape in fast cuts.",
          "Fit proof: State the creator's selected size and relevant fit context; show waist, length, shoulder, rise, sleeve, or stretch where appropriate.",
          "Movement proof: Sit, walk, turn, layer, reach, or move in the way the item will actually be used.",
          "Material proof: Show texture, weight, lining, transparency, structure, stretch, and finish without unsupported quality claims.",
          "Styling proof: Demonstrate more than one realistic outfit or occasion so the shopper sees wardrobe value.",
          "Objection handling: Answer the question that would otherwise stop the order, such as length, support, coverage, pockets, wash care, or weather fit.",
          "Offer proof: Explain the bundle, discount, shipping, or limited launch offer accurately and only while it is current."
        ]
      },
      {
        kind: "p",
        text: "The creative brief should tell the creator what the content must help the shopper decide. It should not force every creator to open with the same line. Repetitive scripts make it harder to learn whether the product has several believable stories or only one temporary hook."
      },
      {
        kind: "p",
        text: "TikTok's Fashion guide recommends at least five launch videos and later expanding creative output. The important operating question is whether those videos test different purchase questions. Fourteen copies of the same try-on do not create fourteen useful learnings."
      }
    ]
  },
  {
    id: "the-product-page-must-finish-what-the-video-starts",
    h: "The product page must finish what the video starts",
    body: [
      {
        kind: "p",
        text: "A creator may make a garment desirable in ten seconds, but the listing still has to help the shopper choose correctly. TikTok's Fashion guide calls for at least five product photos across different angles, colors, and sizes, together with a clear size chart and clean imagery."
      },
      {
        kind: "p",
        text: "For Fashion, WEM treats the product page as a fit and expectation system:"
      },
      {
        kind: "table",
        headers: [
          "Product-page element",
          "What it must resolve"
        ],
        rows: [
          [
            "Title and category",
            "What the item is, without vague trend language"
          ],
          [
            "Images and video",
            "Front, back, side, detail, movement, color, and styling context"
          ],
          [
            "Model information",
            "Model height, measurements when available, and size worn"
          ],
          [
            "Size chart",
            "Garment measurements or clearly labeled body measurements with units"
          ],
          [
            "Fit note",
            "Intended fit, stretch, rise, length, and sizing guidance"
          ],
          [
            "Material and care",
            "Fabric composition, lining, transparency, feel, and care instructions"
          ],
          [
            "Variants",
            "Accurate color and size names with the correct image association"
          ],
          [
            "Shipping and returns",
            "Current expectations and policy links"
          ],
          [
            "FAQ",
            "Repeated fit, fabric, color, care, and use questions from creators and shoppers"
          ]
        ]
      },
      {
        kind: "p",
        text: "Do not call an item \"true to size\" as a universal fact when the evidence only comes from one model or creator. Avoid making color accuracy claims that product photography cannot support. If the garment varies materially by color, size, or production batch, the listing and quality-control process need to reflect that."
      }
    ]
  },
  {
    id: "use-price-and-bundles-to-reduce-decision-friction-not-",
    h: "Use price and bundles to reduce decision friction, not hide weak fit",
    body: [
      {
        kind: "p",
        text: "TikTok's guide recommends competitive pricing, value-driven bundles, and free shipping as cold-start tools. Those can help, but Fashion economics are vulnerable to discount stacking and returns."
      },
      {
        kind: "p",
        text: "The team should model contribution margin by SKU and variant:"
      },
      {
        kind: "p",
        text: "Net sales – product cost – platform/shop discounts – affiliate commission – paid spend – sample cost – pick and pack – shipping – return and refund cost"
      },
      {
        kind: "p",
        text: "A two-for-one offer can increase order value but also increase size uncertainty or return exposure. Free shipping may improve conversion while making a low-priced single item unprofitable. A deep discount can produce orders from shoppers who would not choose the product at its sustainable price."
      },
      {
        kind: "p",
        text: "The cold-start offer should make the first decision easier while preserving a usable read on demand. Test one major variable at a time when possible. If the product, price, commission, shipping, and content concept all change together, the team may see GMV without knowing what actually worked."
      }
    ]
  },
  {
    id: "use-gmv-max-after-the-launch-path-is-measurable",
    h: "Use GMV Max after the launch path is measurable",
    body: [
      {
        kind: "p",
        text: "TikTok's Fashion PDF presents GMV Max as an all-in-one cold-start engine. Its Week 1 setup includes a minimum $500 weekly budget, three to seven products, at least five videos, and Maximum Delivery bidding. It then recommends expanding creative output and scaling budget during weeks two through five based on results."
      },
      {
        kind: "p",
        text: "Those are source-specific recommendations, not universal budget instructions. The current TikTok for Business help center says Product GMV Max automates campaign creation and settings using available creative assets and optimizes organic and paid traffic toward TikTok Shop GMV. Current eligibility, interface recommendations, attribution, and account settings should be verified before launch."
      },
      {
        kind: "p",
        text: "WEM's gate is straightforward: paid distribution should begin only when the product page, featured variants, price, shipping, inventory, tracking, and initial credible content pool are ready. GMV Max can help distribute and compare available content. It cannot correct a misleading size chart, a sold-out featured color, a weak product thesis, or an unsustainable return pattern."
      },
      {
        kind: "p",
        text: "Affiliate creatives can expand the usable content pool when creators authorize eligible posts for Shop Ads. Authorization scope, linked products, collaboration status, commissions, and usage outside the platform workflow still need to be checked. Authorization is an operating input, not a transfer of general ownership."
      }
    ]
  },
  {
    id: "run-the-first-month-as-four-decision-cycles",
    h: "Run the first month as four decision cycles",
    body: [
      {
        kind: "h3",
        text: "Week 1: Build the launch gate"
      },
      {
        kind: "p",
        text: "Select three to seven candidates for the quick screen. Score visual proof, creator fit, price, margin, variant complexity, inventory depth, shipping, and return exposure. Prepare accurate product pages, size information, samples, creator briefs, tracking, and escalation owners."
      },
      {
        kind: "h3",
        text: "Week 2: Create varied proof"
      },
      {
        kind: "p",
        text: "Activate a deliberately mixed creator cohort. Test silhouette, fit, movement, fabric, styling, and objection-handling content. Track sample acceptance, time to post, correct product linking, viewer questions, product clicks, and variant demand."
      },
      {
        kind: "h3",
        text: "Week 3: Concentrate the signal"
      },
      {
        kind: "p",
        text: "Move resources toward one to three hero SKUs and the creators and content jobs producing useful evidence. Repair the product page where questions repeat. Reallocate stock toward featured variants when demand and supply justify it. Begin or adjust paid testing only after the launch path is reliable."
      },
      {
        kind: "h3",
        text: "Week 4: Decide what earned scale"
      },
      {
        kind: "p",
        text: "Review the full system. Do not promote a product to \"winner\" status because one video or discount created GMV. Check whether content response repeats, conversion survives reasonable pricing, featured variants remain available, contribution margin is workable, fulfillment is stable, and return reasons are understood."
      }
    ]
  },
  {
    id: "measure-where-the-fashion-system-lost-momentum",
    h: "Measure where the Fashion system lost momentum",
    body: [
      {
        kind: "table",
        headers: [
          "Signal",
          "Likely question"
        ],
        rows: [
          [
            "Creators do not accept the product",
            "Is the style, value, commission, sample policy, or outreach cohort wrong?"
          ],
          [
            "Samples are accepted but content is not posted",
            "Is fit selection, delivery, follow-up, brief clarity, or creator reliability failing?"
          ],
          [
            "Videos receive views but few product clicks",
            "Is the product story entertaining without creating purchase intent?"
          ],
          [
            "Product clicks are healthy but orders are weak",
            "Are size choice, price, shipping, reviews, images, or variant availability blocking conversion?"
          ],
          [
            "Orders occur but returns are high",
            "Did content or the listing create the wrong fit, color, fabric, or quality expectation?"
          ],
          [
            "One creator sells but others do not",
            "Is the product repeatable, or did the result depend on one creator-audience relationship?"
          ],
          [
            "GMV grows but contribution falls",
            "Are discounts, commission, ads, shipping, and returns consuming the margin?"
          ]
        ]
      },
      {
        kind: "p",
        text: "Fashion cold-start reporting should include creator pipeline, samples, content job, product clicks, conversion, order value, variant demand, cancellations, returns and reasons, contribution margin, inventory coverage, and next action. GMV is an outcome, not a diagnosis."
      }
    ]
  },
  {
    id: "scale-repair-or-stop",
    h: "Scale, repair, or stop",
    body: [
      {
        kind: "p",
        text: "Scale when more than one credible content path can create qualified demand, the product page converts with low confusion, inventory supports the featured variants, economics remain workable, and fulfillment and returns are controlled."
      },
      {
        kind: "p",
        text: "Repair when the product earns attention but one layer is clearly failing: creator cohort, fit explanation, product imagery, size chart, price, shipping, stock allocation, or content diversity. Define the repair, owner, measurement, and review date before adding more budget."
      },
      {
        kind: "p",
        text: "Stop when the product repeatedly fails to earn creator or shopper interest, requires unsustainable discounting, produces unacceptable return patterns, or cannot be stocked and fulfilled reliably. Stopping is not failure. It protects the next test from inheriting bad economics and false confidence."
      }
    ]
  },
  {
    id: "how-wem-supports-fashion-cold-starts",
    h: "How WEM supports Fashion cold starts",
    body: [
      {
        kind: "p",
        text: "WE Marketing is a TikTok Shop operating partner specializing in creator-community operations. WEM connects creator matching, affiliate setup, sample seeding, localized product pages, UGC and content testing, GMV Max coordination, and weekly performance reviews."
      },
      {
        kind: "p",
        text: "For Fashion, that means the team does not treat the creator list, product page, ad campaign, and return report as separate workstreams. Creator questions improve the size and fit guidance. Product-page friction changes the next brief. Variant demand changes inventory allocation. Return reasons change the product claim and creator selection. Paid testing concentrates only after the launch path produces evidence worth amplifying."
      },
      {
        kind: "p",
        text: "WEM's active creator community can give a launch a warmer starting point, but community size does not replace fit. The operating advantage comes from matching the right product with the right creator context, following the sample through publication, and turning every result into the next commercial decision."
      },
      {
        kind: "cta",
        label: "Talk with WEM about a Fashion cold start →",
        href: "https://zus03h0enw04.sg.larksuite.com/scheduler/03970278dd9a7925"
      }
    ]
  },
  {
    id: "sources-and-boundaries",
    h: "Sources and boundaries",
    body: [
      {
        kind: "p",
        text: "Primary source: TikTok for Business, Fashion | From Zero to Performer. Supporting sources: TikTok for Business help-center pages for Product GMV Max, Product GMV Max best practices, affiliate creatives for TikTok Shop Ads, and Affiliate Mass Authorization versus video-code authorization."
      },
      {
        kind: "p",
        text: "Platform features, recommendations, budgets, eligibility, attribution, and interfaces can change. Verify current settings in Seller Center and TikTok Ads Manager. WEM frameworks in this article are operating guidance, not TikTok rules, financial advice, or a guarantee of GMV, creator output, return rate, or profitability."
      }
    ]
  }
],
    faqs: [
  {
    q: "What is a TikTok Shop Fashion cold start?",
    a: "It is a controlled 0-to-1 launch test connecting product selection, creator fit, try-on content, size and variant clarity, price, affiliate activity, GMV Max, inventory, fulfillment, returns, and weekly decisions. Its purpose is to identify a repeatable hero SKU and decide whether to scale, repair, or stop."
  },
  {
    q: "How many Fashion products should a brand test on TikTok Shop?",
    a: "TikTok's Fashion guide recommends launching and testing three to seven products. WEM treats that as a quick screen, then concentrates the real launch on one to three hero SKUs so creator attention, samples, inventory, content, and paid learning are not fragmented."
  },
  {
    q: "What makes a good TikTok Shop Fashion hero SKU?",
    a: "A strong hero SKU has a clear use occasion, visible silhouette or styling value, credible creator fit, accurate size and variant information, sufficient featured-variant inventory, workable margin after launch costs and returns, and enough content depth to support more than one believable creator story."
  },
  {
    q: "How should a Fashion brand choose TikTok Shop creators?",
    a: "Evaluate style fit, shopper fit, proof fit, and working reliability. The creator should already make content where the garment belongs, reach the likely wearer, demonstrate fit and movement accurately, select the correct size and product link, and communicate reliably through the collaboration."
  },
  {
    q: "Why do Fashion TikTok videos get views but no sales?",
    a: "The content may be entertaining without answering a purchase question. Review whether it shows fit, movement, material, styling value, and the correct product. If clicks are healthy but orders are weak, inspect size clarity, images, price, shipping, reviews, and variant availability."
  },
  {
    q: "When should a Fashion brand start GMV Max?",
    a: "Begin controlled paid testing after the product page, size and variant information, offer, featured inventory, shipping, tracking, and initial credible creative pool are ready. GMV Max can amplify and compare available content, but it cannot repair a misleading listing or unstable operation."
  },
  {
    q: "What Fashion metrics matter besides GMV?",
    a: "Track creator acceptance, samples delivered and posted, content by proof job, product clicks, conversion, order value, size and color demand, cancellations, returns and reasons, contribution margin, inventory coverage, and whether performance repeats across creators and content angles."
  }
],
    related: [
      { label: 'TikTok Shop Food and Beverage Cold Start', href: 'tiktok-shop-food-beverage-cold-start.html' },
      { label: 'TikTok Shop Creator Affiliate Management', href: 'tiktok-shop-creator-affiliate-management.html' },
      { label: 'TikTok Shop Product Card Strategy', href: 'tiktok-shop-product-card-strategy.html' },
    ],
  },
  zh: {
    meta: {
      title: 'TikTok Shop 服装冷启动：从选款到爆款的 0-1 运营系统',
      desc: '面向服装品牌、工厂和跨境团队的 TikTok Shop 美国站冷启动方法：选款、Hero SKU、达人匹配、试穿内容、尺码、商品页、GMV Max、库存与退货。',
      cat: 'TIKTOK SHOP 美国站 · 服装冷启动',
      author: 'WE Marketing Team',
      date: '2026 年 7 月 26 日',
      read: '13 分钟阅读',
      heroImage: 'hero-tiktok-shop-fashion-cold-start-zh.png',
      heroAlt: '服装 Hero SKU、达人内容、商品变体和复盘模块组成的 TikTok Shop 0-1 冷启动系统',
    },
    sections: [
  {
    id: "zh-direct-answer",
    eyebrow: "核心纠正",
    h: "服装冷启动要找到可重复的 Hero SKU",
    body: [
      {
        kind: "p",
        text: "中国服装品牌、工厂和跨境团队进入美国市场，通常已经有几项真实优势：打样快、成本控制能力强、供应稳定、包装和吊牌调整灵活、能做小批量测试，也能根据销售反馈快速改版。这些能力很适合服装的快节奏上新，但它们还不能自动变成 TikTok Shop 的冷启动优势。"
      },
      {
        kind: "p",
        text: "美国消费者不会因为供应链反应快就下单。她们需要通过达人试穿判断版型、长度、面料、颜色和搭配价值；需要在商品页里准确选择尺码和变体；也会用物流、退换货体验和评价判断品牌是否可信。服装团队真正要建立的，是从选款、达人、内容、商品页、Offer、GMV Max、库存到退货复盘的完整闭环。"
      },
      {
        kind: "callout",
        text: "直接答案： TikTok Shop 服装冷启动是一段受控的 0-1 产品验证期。品牌要同时验证选款、达人匹配、试穿证明、尺码与变体清晰度、价格、投放、库存、履约和退货，最后明确做出 Scale、Repair 或 Stop 的决定。"
      },
      {
        kind: "p",
        text: "TikTok for Business 的 Fashion cold-start guide 提到，超过 50% 的 Fashion shop GMV 来自 best-selling products，Fashion bestseller 的平均生命周期是 3–4 个月。这个信息说明资源必须集中，也说明团队不能把“速度”理解成一次上很多款、同时大量投流。真正需要快的是学习速度：在商业窗口还有效时，尽快找出值得集中库存、达人和内容资源的 Hero SKU。"
      },
      {
        kind: "infographic",
        src: "tiktok-shop-fashion-zero-to-one-loop-zh.svg",
        alt: "WEM TikTok Shop 服装冷启动 0-1 运营闭环，连接选款、达人匹配、试穿证明、商品页、投放、库存退货和下一步决策",
        caption: "WEM 运营框架：每一层都要让下一轮选款、达人、内容、库存和预算决定更清楚。"
      }
    ]
  },
  {
    id: "zh-先筛-3-7-个候选-再集中-1-3-个-hero-sku",
    h: "先筛 3–7 个候选，再集中 1–3 个 Hero SKU",
    body: [
      {
        kind: "p",
        text: "TikTok 的 Fashion guide 建议同时 launch 和 test 3–7 个商品。这个范围适合做初筛，用来比较不同款式、版型、颜色、价格带和场景能不能获得达人兴趣、有效互动、商品点击和早期订单。"
      },
      {
        kind: "p",
        text: "但真正进入冷启动 launch 后，不应该继续平均分配资源。WEM 建议把动作拆成三层："
      },
      {
        kind: "table",
        headers: [
          "阶段",
          "商品范围",
          "要回答的问题"
        ],
        rows: [
          [
            "快速筛选",
            "3–7 个款式、颜色、版型或 Offer",
            "哪些商品能得到达人兴趣、点击和早期成交？"
          ],
          [
            "0-1 launch",
            "1–3 个 Hero SKU",
            "哪个商品能持续产生试穿内容、清楚选尺码、保持利润并稳定供货？"
          ],
          [
            "受控扩展",
            "已验证 Hero SKU 加少量颜色、套装或关联款",
            "上新是否增加客户价值，而不是把库存和内容重新打散？"
          ]
        ]
      },
      {
        kind: "p",
        text: "服装 Hero SKU 不能只看设计感。它需要有明确穿着场景，镜头里能快速看懂版型，有足够的尺码和颜色库存承接达人带来的需求，也要能承担样品、佣金、折扣、运费、投放和预期退货成本。"
      },
      {
        kind: "p",
        text: "服装库存要按变体看。一个商品有 5 个颜色、8 个尺码，就可能形成 40 个库存组合。如果达人反复展示的颜色或尺码很快售罄，内容越强，用户失望越大。launch 前要确定主推变体、库存深度、可接受替代款，以及什么时候必须暂停达人或付费流量。"
      }
    ]
  },
  {
    id: "zh-达人匹配不只看风格-还要看身材-尺码语境和合作可靠性",
    h: "达人匹配不只看风格，还要看身材、尺码语境和合作可靠性",
    body: [
      {
        kind: "p",
        text: "服装达人 fit 不能只看账号是否“好看”。用户需要通过达人判断衣服怎么穿、怎么动、怎么搭，以及可能适合什么身材和场景。"
      },
      {
        kind: "p",
        text: "WEM 会从四个维度判断 Fashion creator fit："
      },
      {
        kind: "list",
        items: [
          "Style fit： 达人原本的穿搭、场景和审美里，是否自然存在这个商品？",
          "Shopper fit： 达人受众是否接近目标消费者的年龄、场景、价格接受度和风格语言？",
          "Proof fit： 达人是否能真实展示版型、长度、面料、运动状态、搭配和变体选择？",
          "Working fit： 达人是否能正确选尺码、按时交付、挂对商品链接，并在产品事实需要修正时配合沟通？"
        ],
        ordered: true
      },
      {
        kind: "p",
        text: "粉丝量无法回答这些问题。一个专注 petite、plus-size、通勤、modest fashion、streetwear 或 occasion dressing 的中小达人，可能比泛生活方式大号提供更有价值的购买证明。"
      },
      {
        kind: "p",
        text: "品牌也要主动规划 body and size coverage，但不能要求达人替所有消费者做“普遍适合”的承诺。每位达人只能准确描述自己的真实体验。品牌需要提供清楚的测量方式、模特信息、面料弹性、设计版型和 approved language，同时保留达人的表达方式。"
      }
    ]
  },
  {
    id: "zh-试穿内容必须回答一个购买问题",
    h: "试穿内容必须回答一个购买问题",
    body: [
      {
        kind: "p",
        text: "服装内容很容易因为变装、穿搭和个人表现力获得播放，但有播放不代表用户已经得到下单需要的信息。"
      },
      {
        kind: "p",
        text: "一个有学习价值的 creative pool，至少应该覆盖："
      },
      {
        kind: "list",
        items: [
          "版型证明： 从正面、侧面、背面和完整造型看清轮廓，不用过快剪辑隐藏版型。",
          "尺码与 fit： 说明达人选择的尺码和相关身材语境，展示腰、肩、裤长、袖长、rise 或弹性。",
          "动态证明： 坐下、走路、转身、叠穿或完成真实使用动作。",
          "面料证明： 展示纹理、厚薄、内衬、透度、结构、弹性和表面细节，不做无法支持的质量承诺。",
          "搭配证明： 展示两个以上真实穿着场景，让用户理解衣橱价值。",
          "异议处理： 回答口袋、覆盖度、长度、洗护、支撑、天气或场合等真实问题。",
          "Offer 说明： 准确说明仍然有效的套装、折扣、包邮或 launch offer。"
        ]
      },
      {
        kind: "p",
        text: "Creator brief 的任务，是告诉达人这条内容要帮助用户做什么决定，而不是强迫所有人说同一个开头。TikTok 的 Fashion guide 建议冷启动至少准备 5 条视频，后续增加 creative volume。真正重要的不是数字，而是这些视频有没有测试不同购买问题。14 条完全相同的试穿，不会带来 14 条新学习。"
      }
    ]
  },
  {
    id: "zh-商品页要完成达人视频没有时间完成的决定",
    h: "商品页要完成达人视频没有时间完成的决定",
    body: [
      {
        kind: "p",
        text: "达人可以在十秒内让一件衣服变得有吸引力，但商品页仍然需要帮助用户准确选款。TikTok 的 Fashion guide 建议每个商品至少上传 5 张图片，覆盖不同角度、颜色和尺码，并提供清楚的 size chart 和干净背景图。"
      },
      {
        kind: "p",
        text: "WEM 会把服装商品页当作一套 fit 与预期管理系统："
      },
      {
        kind: "table",
        headers: [
          "商品页模块",
          "必须解决的问题"
        ],
        rows: [
          [
            "标题与类目",
            "商品到底是什么，不用模糊趋势词替代产品信息"
          ],
          [
            "图片与视频",
            "正面、背面、侧面、细节、动态、颜色和搭配"
          ],
          [
            "模特信息",
            "模特身高、可提供的相关尺寸和所穿尺码"
          ],
          [
            "Size chart",
            "明确说明是成衣尺寸还是身体尺寸，并统一单位"
          ],
          [
            "Fit note",
            "设计版型、弹性、rise、长度和选码建议"
          ],
          [
            "面料与洗护",
            "成分、内衬、透度、触感和洗护方式"
          ],
          [
            "颜色与尺码变体",
            "名称准确，图片与对应变体一致"
          ],
          [
            "物流和退换货",
            "当前时效、适用政策和官方入口"
          ],
          [
            "FAQ",
            "达人和消费者重复提出的尺码、颜色、面料和使用问题"
          ]
        ]
      },
      {
        kind: "p",
        text: "不能因为一个模特或达人穿着合适，就把“true to size”写成适用于所有人的事实。也不要用无法保证色差的图片做绝对颜色承诺。如果不同颜色、尺码或生产批次确实存在明显差异，商品页和 QC 都要反映这个事实。"
      }
    ]
  },
  {
    id: "zh-价格和套装用于降低决策阻力-不是掩盖-fit-问题",
    h: "价格和套装用于降低决策阻力，不是掩盖 fit 问题",
    body: [
      {
        kind: "p",
        text: "TikTok guide 建议 Fashion 冷启动关注 competitive pricing、value-driven bundles 和 free shipping。这些工具可以帮助转化，但服装利润很容易被多层折扣和退货消耗。"
      },
      {
        kind: "p",
        text: "品牌应该按 SKU 和变体计算 contribution margin："
      },
      {
        kind: "p",
        text: "净销售额 – 产品成本 – 平台/店铺折扣 – 达人佣金 – 投放 – 样品 – 仓库操作 – 物流 – 退货退款成本"
      },
      {
        kind: "p",
        text: "Two-for-one 可以提高客单价，也可能同时扩大尺码不确定性和退货风险。包邮可能提高转化，但让低客单单件商品失去利润。深折扣可以制造订单，却不一定证明消费者愿意在可持续价格下购买。"
      },
      {
        kind: "p",
        text: "冷启动 Offer 要帮助用户更容易完成第一次决定，同时保留对真实需求的判断。尽量一次只改变一个主要变量。如果产品、价格、佣金、物流和内容同时改变，即使 GMV 上升，团队也很难知道真正有效的原因。"
      }
    ]
  },
  {
    id: "zh-gmv-max-只能放大已经可测量的-launch-path",
    h: "GMV Max 只能放大已经可测量的 launch path",
    body: [
      {
        kind: "p",
        text: "TikTok Fashion PDF 把 GMV Max 定义为 cold-start engine。它的 Week 1 建议包括每周至少 500 美元预算、3–7 个商品、至少 5 条视频和 Maximum Delivery；随后在 Week 2–5 增加内容，并根据结果调整预算。"
      },
      {
        kind: "p",
        text: "这些是该 PDF 的来源建议，不是所有账号都必须使用的预算指令。TikTok for Business 当前帮助中心说明，Product GMV Max 会使用可用 creative assets 自动完成部分 campaign 设置，并共同优化 organic 和 paid traffic。执行前仍要检查美国站当前界面、账号权限、系统建议、归因方式和预算承受能力。"
      },
      {
        kind: "p",
        text: "WEM 的投放 gate 很明确：商品页、尺码和变体信息、Offer、主推库存、物流、tracking 和第一批可信内容准备好之后，再开始受控投放。GMV Max 可以帮助分发和比较内容，但不能修复错误的尺码表、售罄的主推颜色、模糊的产品定位或失控的退货。"
      },
      {
        kind: "p",
        text: "当达人授权符合条件的 affiliate post 用于 Shop Ads 时，affiliate creatives 可以扩大素材池。但授权范围、商品链接、合作状态、佣金和平台外使用权必须分别确认。平台授权不等于品牌获得了内容的通用所有权。"
      }
    ]
  },
  {
    id: "zh-用四个决策周期完成第一个月",
    h: "用四个决策周期完成第一个月",
    body: [
      {
        kind: "h3",
        text: "Week 1：建立 launch gate"
      },
      {
        kind: "p",
        text: "用 3–7 个候选做快速筛选，检查镜头证明、达人 fit、价格、利润、变体复杂度、库存深度、物流和退货风险。准备准确商品页、size chart、样品、brief、tracking 和异常处理 owner。"
      },
      {
        kind: "h3",
        text: "Week 2：制造不同类型的证明"
      },
      {
        kind: "p",
        text: "激活有差异的达人 cohort，测试版型、尺码、动态、面料、搭配和异议处理内容。追踪寄样接受、发布速度、挂链准确性、用户问题、商品点击和变体需求。"
      },
      {
        kind: "h3",
        text: "Week 3：集中有效信号"
      },
      {
        kind: "p",
        text: "把资源集中到 1–3 个 Hero SKU，以及真正产生有效学习的达人和内容任务。重复问题要进入商品页。达人主推变体的需求和库存合理时，才调整库存分配。launch path 稳定之后，再开始或调整 paid testing。"
      },
      {
        kind: "h3",
        text: "Week 4：决定什么值得 Scale"
      },
      {
        kind: "p",
        text: "不能因为一条视频或一次折扣产生 GMV，就把商品定义为 winner。要检查内容反应能不能重复、正常价格下能不能转化、主推变体是否有库存、利润是否可承受、履约是否稳定，以及退货原因是否清楚。"
      }
    ]
  },
  {
    id: "zh-找到-fashion-系统在哪一层失去动能",
    h: "找到 Fashion 系统在哪一层失去动能",
    body: [
      {
        kind: "table",
        headers: [
          "信号",
          "应该检查的问题"
        ],
        rows: [
          [
            "达人不愿意接",
            "款式、价值、佣金、样品政策或达人 cohort 是否错误？"
          ],
          [
            "接样但不发布",
            "选码、物流、follow-up、brief 或合作可靠性是否有问题？"
          ],
          [
            "有播放但商品点击弱",
            "内容是否只好看，却没有建立购买理由？"
          ],
          [
            "点击正常但订单弱",
            "尺码、图片、价格、物流、评价或变体库存是否阻碍转化？"
          ],
          [
            "有订单但退货高",
            "内容或 listing 是否制造了错误的 fit、颜色、面料或质量预期？"
          ],
          [
            "只有一个达人能卖",
            "商品是否可重复，还是只适合一个达人和受众关系？"
          ],
          [
            "GMV 增长但利润下降",
            "折扣、佣金、投放、物流和退货是否吃掉贡献利润？"
          ]
        ]
      },
      {
        kind: "p",
        text: "Fashion 周报除了 GMV，还应该包括达人 pipeline、寄样、内容任务、商品点击、转化、客单价、尺码和颜色需求、取消、退货原因、贡献利润、库存覆盖和 next action。GMV 是结果，不是诊断。"
      }
    ]
  },
  {
    id: "zh-scale-repair-或-stop",
    h: "Scale、Repair 或 Stop",
    body: [
      {
        kind: "p",
        text: "Scale： 不止一种可信内容路径能产生有效需求；商品页能低摩擦转化；主推变体库存充足；利润可承受；履约和退货处于可控范围。"
      },
      {
        kind: "p",
        text: "Repair： 商品有注意力，但达人 cohort、fit 说明、图片、size chart、价格、物流、库存分配或内容多样性中有一层明确失败。先定义修复动作、owner、指标和复盘日期，再增加预算。"
      },
      {
        kind: "p",
        text: "Stop： 商品长期无法获得达人或消费者兴趣，需要不可持续折扣才出单，退货模式不可接受，或者无法稳定补货和履约。停止不是失败，而是保护下一次测试不继承错误利润和虚假信心。"
      }
    ]
  },
  {
    id: "zh-wem-怎么帮助服装品牌做美国站冷启动",
    h: "WEM 怎么帮助服装品牌做美国站冷启动",
    body: [
      {
        kind: "p",
        text: "WE Marketing 是 TikTok Shop 运营合作伙伴，专注达人社群运营。WEM 会连接达人匹配、affiliate 设置、寄样、美国本地化商品页、UGC 和内容测试、GMV Max 协同与每周 performance review。"
      },
      {
        kind: "p",
        text: "对中国服装品牌和工厂来说，WEM 的作用不是把国内商品资料翻译成英文。团队需要把供应链优势转成美国消费者看得懂的产品证据：哪个款适合做 Hero SKU、哪些达人能覆盖真实风格和尺码语境、试穿内容要回答什么问题、商品页怎样降低选码错误、哪个变体应该补货，以及退货原因应该怎样改变下一轮选款和 brief。"
      },
      {
        kind: "p",
        text: "WEM 的活跃达人社群可以让冷启动拥有更温暖的起点，但社群规模不能替代匹配。真正的运营优势，是把正确商品放进正确达人语境，跟进样品到发布，并把每个结果转化成下一步商业决定。"
      },
      {
        kind: "cta",
        label: "和 WEM 讨论服装品牌美国站冷启动 →",
        href: "https://zus03h0enw04.sg.larksuite.com/scheduler/03970278dd9a7925"
      }
    ]
  },
  {
    id: "zh-来源与边界",
    h: "来源与边界",
    body: [
      {
        kind: "p",
        text: "主要来源：TikTok for Business，Fashion | From Zero to Performer。辅助来源包括 Product GMV Max、Product GMV Max best practices、TikTok Shop Ads affiliate creatives，以及 Affiliate Mass Authorization 与 video code authorization 的官方帮助中心页面。"
      },
      {
        kind: "p",
        text: "平台功能、预算、权限、归因和界面可能变化，执行前应以 Seller Center、TikTok Ads Manager 和美国站当前信息为准。本文 WEM 框架属于运营方法，不是 TikTok 官方规则、财务建议或 GMV、达人发布、退货率与利润保证。"
      }
    ]
  }
],
    faqs: [
  {
    q: "TikTok Shop 服装冷启动是什么？",
    a: "它是一段受控的 0-1 launch test，把选款、达人 fit、试穿内容、尺码和变体、价格、affiliate、GMV Max、库存、履约、退货和周度决策连接起来，目标是找到可重复的 Hero SKU，并决定 Scale、Repair 或 Stop。"
  },
  {
    q: "服装品牌应该测试多少个商品？",
    a: "TikTok Fashion guide 建议同时 launch 和 test 3–7 个商品。WEM 把它作为快速筛选，真正进入 launch 后集中 1–3 个 Hero SKU，避免达人注意力、样品、库存、内容和投放学习被平均打散。"
  },
  {
    q: "什么样的服装适合做 TikTok Shop Hero SKU？",
    a: "需要有明确穿着场景、镜头里能看懂的版型或搭配价值、可信的达人 fit、准确的尺码与变体信息、足够的主推库存，并且在计入样品、佣金、折扣、投放、物流和退货后仍有可承受利润。"
  },
  {
    q: "服装品牌怎么选择 TikTok Shop 达人？",
    a: "同时检查 style fit、shopper fit、proof fit 和 working fit。达人不仅要审美匹配，还要能接触目标消费者、真实展示 fit 和动态、正确选尺码和挂链，并能可靠完成沟通和发布。"
  },
  {
    q: "为什么服装视频有播放却没有订单？",
    a: "视频可能好看，却没有回答购买问题。先检查是否展示版型、尺码、动态、面料和搭配价值；如果商品点击正常但订单弱，再检查 size chart、图片、价格、运费、评价和变体库存。"
  },
  {
    q: "服装品牌什么时候开始 GMV Max？",
    a: "商品页、size chart、变体、Offer、主推库存、物流、tracking 和第一批可信 creative pool 准备好后，再做受控投放。GMV Max 能放大和比较内容，但不能修复误导 listing 或不稳定运营。"
  },
  {
    q: "除了 GMV，服装冷启动还要看什么？",
    a: "要看达人接受率、寄样到发布、不同内容任务、商品点击、转化、客单价、尺码和颜色需求、取消、退货与原因、贡献利润、库存覆盖，以及结果能否在不同达人和内容角度中重复。"
  }
],
    related: [
      { label: 'TikTok Shop 食品饮料冷启动', href: 'tiktok-shop-food-beverage-cold-start.html?lang=zh' },
      { label: 'TikTok Shop 达人联盟管理', href: 'tiktok-shop-creator-affiliate-management.html?lang=zh' },
      { label: 'TikTok Shop 商品卡策略', href: 'tiktok-shop-product-card-strategy.html?lang=zh' },
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
  return <div data-screen-label="WE Blog · Fashion Cold Start">
    <CursorStars />
    <NavBar lang={lang} onLang={setLang} basePath="../" />
    <BlogPost {...post} labels={LABELS[lang]} />
    <CtaFooter lang={lang} />
    <Footer lang={lang} basePath="../" />
  </div>;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
