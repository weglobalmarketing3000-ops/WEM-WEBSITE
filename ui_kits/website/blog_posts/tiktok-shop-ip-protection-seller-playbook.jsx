const { useState, useEffect } = React;

const P = (text) => ({ kind: 'p', text });
const UL = (items) => ({ kind: 'list', items });
const CTA = (label) => ({ kind: 'cta', label, href: 'https://zus03h0enw04.sg.larksuite.com/scheduler/03970278dd9a7925' });

const LABELS = {
  en: { back: 'Blog', toc: 'On this page', faq: 'Frequently asked questions', related: 'Related guides' },
  zh: { back: '博客', toc: '本文目录', faq: '常见问题', related: '相关文章' },
};

const POSTS = {
  en: {
    meta: {
      title: 'How TikTok Shop Sellers Can Protect Themselves From IP Risk',
      cat: 'TIKTOK SHOP IP · SELLER PROTECTION',
      author: 'WE Marketing Team',
      date: 'Jul 1, 2026',
      read: '13 min read',
      heroImage: 'hero-tiktok-shop-ip-protection-seller-playbook.png',
      heroAlt: 'TikTok Shop operations team reviewing IP documents, brand authorization, invoices, and image rights',
    },
    sections: [
      {
        id: 'ip-risk',
        h: 'IP risk is broader than counterfeit products',
        body: [
          P('Intellectual property risk is one of the most underestimated problems on TikTok Shop. Many sellers think only about counterfeit goods or unauthorized luxury logos. Those are major risks, but they are not the whole picture.'),
          P('On TikTok Shop, IP risk can also come from product photos, listing copy, packaging, shop names, creator videos, livestream scripts, music, artwork, supplier documents, brand authorization chains, design patents, and the use of a celebrity name or image.'),
          P('The practical question is not only: can we sell this product? The better question is: can we prove we have the right to sell, display, promote, and advertise this product and content in the United States?'),
        ],
      },
      {
        id: 'pre-launch',
        h: 'Check listings, content, and supplier documents before launch',
        body: [
          P('IP protection should start before the product goes live. A risky product listing can become a risky creator video. A risky creator video can become a risky ad. A risky livestream script can create Shop Health issues, listing restrictions, product takedowns, or account-health warnings.'),
          UL([
            'Product identity: is this your own brand, an authorized brand, a distributor product, or an unbranded product?',
            'Visual similarity: does the product, packaging, logo, or design look too close to another protected brand?',
            'Product images: who created the photos, and do you have commercial-use rights?',
            'Listing copy: does the title or description use unauthorized brand names, celebrity names, media IP, or competitor marks?',
            'Creator content: are scripts, music, visuals, comparisons, and claims cleared for use?',
            'Supplier records: do invoices, receipts, LOAs, and license agreements match the TikTok Shop entity and product?',
          ]),
        ],
      },
      {
        id: 'brand-authorization',
        h: 'Brand authorization must be documented',
        body: [
          P('TikTok Shop may require Brand Authorization for certain brands, products, and categories. Sellers should not rely on a supplier saying, “You can sell this.” Authorization has to be documented.'),
          UL([
            'Who owns the IP and whether that name matches the rights holder.',
            'Who is being authorized and whether it matches the TikTok Shop registered entity.',
            'What rights are granted: trademark use, copyright use, product distribution, co-branding, or licensing.',
            'Whether the United States and TikTok Shop sales, listings, livestreams, short videos, and ads are included.',
            'Whether the authorization is still valid and signed by the IP owner or official representative.',
          ]),
          P('For second-level authorization, sellers may need a complete authorization chain. If the brand owner authorizes a distributor, and that distributor authorizes the seller, both layers may need to be documented.'),
        ],
      },
      {
        id: 'appeal-evidence',
        h: 'What sellers need for an IP violation appeal or listing takedown',
        body: [
          P('If a seller receives an IP violation, listing takedown, Shop Health record, account-health warning, or product removal notice, the appeal should be built around evidence, not emotion.'),
          UL([
            'If you own the IP: prepare trademark, copyright, or design patent certificates that match the disputed IP.',
            'If you are authorized: prepare LOAs, license agreements, or authorization contracts that show the rights, territory, seller entity, and valid dates.',
            'If you bought through legitimate channels: prepare invoices or receipts that match the product and listing timing.',
            'If the violation was a mistake: prepare authorization records, product comparisons, original image files, timestamps, metadata, or other evidence.',
          ]),
          P('Sellers should also remember that appeals are limited. TikTok Shop’s appeal guidance describes timing limits and a maximum of two appeals per case. That is why appeal readiness, document retention, and authorization cleanup should happen before enforcement.'),
        ],
      },
      {
        id: 'evidence-library',
        h: 'Build an IP evidence file for every priority SKU',
        body: [
          P('The fastest way to make an IP appeal difficult is to wait until enforcement before collecting evidence. Every priority SKU should have a file that explains where the product came from, who owns the brand and creative assets, what the seller is allowed to do, and which TikTok Shop entity is using those rights.'),
          P('TikTok Shop’s current appeal requirements are specific. An invoice or receipt must match the listing, be dated before the product went live, and generally be from the previous 12 months. It must not be edited or redacted. If a product uses a purchased digital design, the license needs to permit commercial use; personal-use rights may not be enough.'),
          UL([
            'Supplier contract, purchase order, invoice, and original receipt for the exact product.',
            'Brand authorization, distribution authorization, LOA, or content licensing agreement.',
            'Trademark, copyright, design patent, or other ownership records when relevant.',
            'Original product photos, video files, design files, timestamps, metadata, and creator agreements.',
            'Commercial-use licenses for fonts, music, artwork, templates, stock assets, and digital files.',
            'Listing date, screenshots, revision history, seller entity, and markets covered by each authorization.',
          ]),
          P('This evidence library supports more than appeals. It helps with brand-authorization requests, creator-content review, livestream and paid-ad clearance, and the decision to pause a SKU until its authorization chain is clean.'),
        ],
      },
      {
        id: 'appeal-decision-tree',
        h: 'Which evidence should a seller use for a TikTok Shop IP appeal?',
        body: [
          P('The right appeal package depends on why the seller believes enforcement is incorrect. TikTok Shop separates the issue into four paths: ownership, permission from the rights owner, legitimate purchase, or platform misjudgment. Choosing the wrong path often leads to the wrong document type.'),
          UL([
            'You own the IP: submit a valid certificate covering the same trademark, copyright, or design patent named in the violation.',
            'You have permission: submit an LOA or agreement naming the rights owner, seller entity, rights granted, United States territory, and valid term.',
            'You purchased through a legitimate channel: submit unedited invoices or receipts matching the product and timeline. Purchase proof does not automatically grant trademark or creative-use rights.',
            'You believe the platform misidentified the product or content: submit comparisons, original files, timestamps, metadata, prior authorization, or product views addressing the exact allegation.',
          ]),
          P('TikTok Shop currently allows sellers a maximum of two appeals per case: the first within 30 days of enforcement and the second within 15 days after the first rejection. Teams should verify the live deadline in Shop Health because platform policies can change.'),
        ],
      },
      {
        id: 'brand-protection',
        h: 'Brands also need to protect their own IP',
        body: [
          P('This topic is not only for sellers defending against violations. Brand owners also need protection. Other sellers may copy product images, packaging, listing copy, creator content, or brand names.'),
          UL([
            'Keep trademark and USPTO records updated.',
            'Keep copyright ownership records for photos, videos, design files, and written content.',
            'Use clear agreements with photographers, designers, creators, agencies, and distributors.',
            'Define which sellers are authorized and what materials they can use.',
            'Prepare screenshots, URLs, and evidence templates for infringement reports.',
          ]),
          P('Jurisdiction matters. For US TikTok Shop sellers and brands, USPTO records, US trademark classes, US design patents, copyright ownership evidence, and DMCA-related documents can be especially important.'),
        ],
      },
      {
        id: 'wem-workflow',
        h: 'WEM’s practical IP protection workflow for TikTok Shop sellers',
        body: [
          P('WEM does not present IP work as a guaranteed appeal solution. Trademark, copyright, patent, DMCA, and legal questions should be reviewed with qualified legal counsel. What WEM can help with is the operating system around IP risk.'),
          UL([
            'Screen products before launch to avoid counterfeit, knockoff, design, or authorization problems.',
            'Review product pages, images, packaging, creator briefs, livestream scripts, and ad assets before scaling.',
            'Organize LOAs, license agreements, invoices, receipts, trademark numbers, supplier authorization, purchase records, commercial-use rights, and creative asset licenses.',
            'Build creator-content guardrails so affiliates do not use risky brand names, celebrity references, unauthorized music, or unsupported comparisons.',
            'Recheck assets before paid amplification, Spark Ads, or retargeting.',
            'Create an IP violation response SOP so the team knows whether the issue is trademark, copyright, patent, publicity rights, misjudgment, or missing authorization.',
          ]),
          P('This is not separate from growth. It protects growth. A single risky asset can move from product listing to affiliate content to livestream to paid ads before the team realizes there is a problem.'),
          CTA('Build a TikTok Shop IP protection workflow with WEM →'),
        ],
      },
      {
        id: 'ip-audit',
        h: 'Add IP review to the weekly TikTok Shop operating cadence',
        body: [
          P('IP protection should not be a one-time legal checklist. TikTok Shop content moves from product page to affiliate creator, livestream, Shop Ads, paid amplification, and retargeting. Each handoff can introduce a new image, phrase, music track, comparison, or claim.'),
          UL([
            'Before launch: confirm product identity, authorization, image ownership, packaging, listing copy, and supplier evidence.',
            'Before creator seeding: give affiliates clear trademark, music, comparison, celebrity-reference, and claim boundaries.',
            'Before paid amplification: confirm creator-asset reuse rights and commercial clearance for every visual and audio element.',
            'During weekly review: track Shop Health notices, removed listings, authorization requests, expiring LOAs, and SKUs moving into higher spend.',
            'Before market expansion: confirm that trademark, patent, design, and authorization rights cover the destination country.',
          ]),
          P('This cadence connects IP protection to revenue operations. The goal is not to slow content production. It is to prevent one unverified asset from spreading across every growth channel.'),
        ],
      },
    ],
    faqs: [
      { q: 'What counts as an IP violation on TikTok Shop?', a: 'IP violations can include counterfeit goods, unauthorized trademark use, copyright infringement, knockoffs, patent or design issues, and rights of publicity or personality rights problems.' },
      { q: 'What is a TikTok Shop LOA?', a: 'An LOA is a Letter of Authorization. It should show who grants permission, who receives it, what rights are granted, where those rights apply, and whether the authorization is valid for the seller’s TikTok Shop use case.' },
      { q: 'Can supplier invoices help with an IP appeal?', a: 'Supplier invoices or receipts may help when the seller claims legitimate purchase, but they need to match the product and timing and should not be edited or incomplete. Invoices do not automatically replace brand authorization or commercial-use rights.' },
      { q: 'How many times can a TikTok Shop seller appeal an IP violation?', a: 'TikTok Shop currently states that sellers may submit up to two appeals per case. The first appeal must generally be filed within 30 days of enforcement and the second within 15 days after the first rejection. Sellers should confirm the deadline shown in Shop Health.' },
      { q: 'Does buying a design file give a seller commercial-use rights?', a: 'Not automatically. The license must explicitly permit the commercial use needed for the product and content. Personal-use or limited-use licenses may not support TikTok Shop sales, creator content, or advertising.' },
    ],
    related: [
      { label: 'TikTok Shop US Brand Protection Playbook for Brands and Authorized Sellers', href: 'tiktok-shop-us-brand-protection-playbook.html' },
      { label: 'TikTok Shop Creator Brief Template: What WEM Gives Creators', href: 'tiktok-shop-creator-brief-template.html' },
      { label: 'TikTok Shop Product Listing Optimization: Convert Creator Traffic', href: 'tiktok-shop-product-listing-optimization.html' },
    ],
  },
  zh: {
    meta: {
      title: 'TikTok Shop 卖家怎么保护自己：IP 风险、品牌授权和申诉清单',
      cat: 'TIKTOK SHOP IP · 卖家自保',
      author: 'WE Marketing Team',
      date: '2026 年 7 月 1 日',
      read: '13 分钟阅读',
      heroImage: 'hero-tiktok-shop-ip-protection-seller-playbook.png',
      heroAlt: 'TikTok Shop 运营团队审核 IP 文件、品牌授权、发票和图片使用权',
    },
    sections: [
      {
        id: 'ip风险',
        h: 'IP 风险不只是卖假货',
        body: [
          P('TikTok Shop 卖家最容易低估的一类风险，是 IP，也就是知识产权风险。很多卖家听到 IP 违规，只想到假货、仿牌、大牌 logo。确实，这些是高风险，但不是全部。'),
          P('商品图、标题、包装、店铺名、达人视频、直播话术、音乐、插画、供应商文件、品牌授权链、设计专利、名人姓名或形象，都可能触发 TikTok Shop IP 风险。'),
          P('卖家真正要问的，不只是“这个货能不能卖”，而是“我能不能证明自己有权在美国销售、展示、推广和投放这个商品和内容”。'),
        ],
      },
      {
        id: '上架前检查',
        h: '上架前先查商品、内容和供应商文件',
        body: [
          P('IP 保护要从商品上线前开始。一个有风险的 listing 可能变成有风险的达人视频；有风险的达人视频可能变成有风险的广告；有风险的直播话术可能影响 Shop Health、商品下架、listing restriction 或账号健康。'),
          UL([
            '商品身份：自有品牌、授权品牌、分销款、白牌，还是供应商代工款？',
            '视觉相似：产品、包装、logo、外观是否过于接近他人品牌？',
            '商品图片：谁拍的？有没有商业使用权？',
            '标题文案：是否用了未经授权的品牌名、名人名、影视 IP 或竞品词？',
            '达人内容：脚本、音乐、图片、对比表达和 claim 是否可用？',
            '供应商记录：invoice、receipt、LOA、license agreement 是否能对应店铺主体和具体商品？',
          ]),
        ],
      },
      {
        id: '品牌授权',
        h: '品牌授权不是一句“供应商说可以卖”',
        body: [
          P('TikTok Shop 可能要求某些品牌、商品和类目提供 Brand Authorization。卖家不能只靠供应商一句“可以卖”。授权要有文件。'),
          UL([
            '授权方是谁，是否能对应 IP 权利人。',
            '被授权方是谁，是否和 TikTok Shop 注册主体一致。',
            '授权内容是什么：商标、版权、产品分销、联名、许可使用还是其他权利。',
            '授权范围是否包括美国，以及 TikTok Shop 商品页、短视频、直播、广告和销售。',
            '授权是否仍然有效，是否由 IP 权利人或正式代表签字/盖章。',
          ]),
          P('如果是二级授权，授权链要完整。品牌方授权给一级代理，一级代理再授权给卖家，中间每一层都要能说明清楚。'),
        ],
      },
      {
        id: '申诉材料',
        h: '被 IP 违规、商品下架或 Shop Health 扣分后，申诉要靠证据',
        body: [
          P('卖家收到 IP violation、listing takedown、Shop Health record、account-health warning 或 product removal notice 后，不能随便上传一堆截图。申诉的核心是证据，不是情绪。'),
          UL([
            '如果你是 IP 权利人：准备商标、版权或设计专利等权利证明。',
            '如果你获得授权：准备 LOA、license agreement 或授权合同，写清权利、区域、主体和有效期。',
            '如果你通过合法渠道采购：准备能对应商品和上架时间的 invoice 或 receipt。',
            '如果你认为平台误判：准备授权记录、产品对比图、原始图片、时间戳、metadata 或其他证明。',
          ]),
          P('申诉次数和时间都有限，所以 appeal readiness、document retention 和 authorization cleanup 应该在违规前完成，而不是等平台处理后再补。'),
        ],
      },
      {
        id: '证据文件夹',
        h: '给每个重点 SKU 建立 IP 证据文件夹',
        body: [
          P('最容易让 IP 申诉陷入被动的做法，就是收到违规后才开始找文件。每个重点 SKU 都应该有一个证据文件夹，能说明商品从哪里来、品牌和素材归谁、卖家获得了什么权利，以及是哪一个 TikTok Shop 主体在使用这些权利。'),
          P('TikTok Shop 当前的申诉要求很具体。invoice 或 receipt 要对应 listing 中的商品，日期要早于上架时间，通常应来自过去 12 个月，而且不能被编辑或涂改。如果商品使用了购买的数字设计，授权必须允许商业使用；personal use 不一定足够。'),
          UL([
            '对应具体商品的供应商合同、采购单、invoice 和原始 receipt。',
            '品牌授权、分销授权、LOA 或 content licensing agreement。',
            '适用时保存商标、版权、设计专利或其他权利证明。',
            '原始商品图、视频、设计文件、时间戳、metadata 和达人协议。',
            '字体、音乐、插画、模板、图库素材和数字文件的商业使用许可。',
            '上架日期、页面截图、修改记录、店铺主体，以及每份授权覆盖的市场。',
          ]),
          P('这个文件夹不只是为了 appeal，也能支持品牌授权审核、达人内容审核、直播和广告素材放量，并帮助团队识别哪些 SKU 在授权链理清前不应该扩大。'),
        ],
      },
      {
        id: '申诉决策树',
        h: 'TikTok Shop IP 申诉应该按哪一种证据路径准备',
        body: [
          P('申诉材料取决于卖家为什么认为处罚不正确。TikTok Shop 把常见情况分成四条路径：自己拥有 IP、获得权利人许可、通过合法渠道采购，或平台误判。选错申诉原因，通常也会上传错文件。'),
          UL([
            '你拥有 IP：提交覆盖同一商标、版权或设计专利的有效证明。',
            '你获得权利人许可：提交 LOA 或协议，写明权利人、卖家主体、授权权利、美国地区和有效期。',
            '你通过合法渠道采购：提交未编辑的 invoice 或 receipt，并对应商品和采购时间；采购证明不自动等于商标或素材使用权。',
            '你认为平台误判：提交对比图、原始高清文件、时间戳、metadata、已有授权记录或直接回应具体违规点的商品视图。',
          ]),
          P('TikTok Shop 当前对卖家每个 case 最多允许两次申诉：第一次一般在处罚后 30 天内提交，第二次在第一次被拒后的 15 天内提交。实际操作前仍要以 Shop Health 显示的期限为准。'),
        ],
      },
      {
        id: '品牌保护',
        h: '品牌方也要保护自己的 IP',
        body: [
          P('这篇文章不只写给被投诉的卖家，也写给品牌方。你的商品图、包装、listing copy、达人内容或品牌名，都可能被其他卖家复制、盗用或误导性使用。'),
          UL([
            '维护商标和 USPTO 记录。',
            '保留图片、视频、设计文件和文案的版权归属记录。',
            '和摄影师、设计师、达人、代理商、分销商签清内容使用协议。',
            '定义哪些卖家可以卖，哪些素材可以用。',
            '准备侵权投诉需要的截图、链接和证据模板。',
          ]),
          P('管辖区也很重要。对美国 TikTok Shop 品牌来说，美国商标类别、USPTO 记录、美国设计专利、版权归属证据和 DMCA 相关材料会更关键。'),
        ],
      },
      {
        id: 'wem流程',
        h: 'WEM 给卖家的 IP 自保工作流',
        body: [
          P('WEM 不会把 IP 问题包装成“百分百申诉成功”或“保证合规”。商标、版权、专利、DMCA 和法律问题，需要卖家根据自身情况咨询专业律师或相关顾问。WEM 能做的是把 IP 风险前置到运营流程里。'),
          UL([
            '选品前避开明显仿牌、擦边、外观过近、授权不清的商品。',
            '放量前检查商品页、图片、包装、达人 brief、直播脚本和广告素材。',
            '统一整理 LOA、license agreement、invoice、receipt、商标号、供应商授权、采购记录、商业使用权和素材授权。',
            '给达人和 affiliate 设置内容边界，避免竞品商标、名人图、未经授权音乐和夸张对比。',
            '投放 Spark Ads、paid amplification 或 retargeting 前再做一次 IP 和 claim 检查。',
            '建立 IP 违规响应 SOP，先判断是商标、版权、专利、肖像权、误判还是授权链问题。',
          ]),
          P('这不是增长之外的工作，而是在保护增长。一个风险素材如果进入商品页、affiliate、直播和广告，影响的就不只是一个 listing，而可能是店铺健康、资金、账号权限和品牌声誉。'),
          CTA('和 WEM 建立 TikTok Shop IP 自保流程 →'),
        ],
      },
      {
        id: '每周IP检查',
        h: '把 IP 检查放进 TikTok Shop 每周运营节奏',
        body: [
          P('IP 保护不应该只是一次性的法律清单。TikTok Shop 内容会从商品页进入 affiliate 达人、直播、Shop Ads、paid amplification 和 retargeting。每一次流转都可能新增图片、措辞、音乐、对比或 claim。'),
          UL([
            '上线前：确认商品身份、授权、图片归属、包装、listing copy 和供应商证据。',
            '达人寄样前：讲清商标、音乐、竞品对比、名人引用和 claim 边界。',
            '付费放大前：确认达人素材复用权，以及视觉和音频元素能否用于商业广告。',
            '每周复盘：检查 Shop Health、下架商品、授权补件、即将过期的 LOA 和准备增加预算的 SKU。',
            '扩展新市场前：确认商标、专利、设计和授权覆盖准备销售或维权的国家。',
          ]),
          P('这套节奏把 IP 保护接回收入运营。目标不是拖慢内容生产，而是阻止一份未经核实的素材扩散到所有增长渠道。'),
        ],
      },
    ],
    faqs: [
      { q: 'TikTok Shop 什么算 IP 违规？', a: '常见风险包括假货、未经授权使用商标、版权侵权、仿牌、专利或外观设计问题，以及肖像权或名人形象使用问题。' },
      { q: 'TikTok Shop LOA 是什么？', a: 'LOA 是 Letter of Authorization，授权书应写清授权方、被授权方、授权权利、适用地区、有效期，以及是否覆盖 TikTok Shop 的销售和内容使用场景。' },
      { q: '供应商发票能不能帮助 IP 申诉？', a: '如果卖家主张合法采购，invoice 或 receipt 可能有帮助，但要能对应具体商品和时间，且不能替代品牌授权或素材商业使用权。' },
      { q: 'TikTok Shop 卖家一个 IP 违规可以申诉几次？', a: 'TikTok Shop 当前说明卖家每个 case 最多可以提交两次申诉。第一次一般要在处罚后 30 天内提交，第二次要在第一次被拒后的 15 天内提交；实际期限应以 Shop Health 为准。' },
      { q: '购买设计文件以后就有商业使用权吗？', a: '不一定。购买记录或 license 必须明确允许商品销售、达人内容或广告所需的商业使用。只覆盖 personal use 或有限范围的许可，可能不足以支持 TikTok Shop 运营。' },
    ],
    related: [
      { label: 'TikTok Shop US Brand Protection Playbook for Brands and Authorized Sellers', href: 'tiktok-shop-us-brand-protection-playbook.html?lang=zh' },
      { label: 'TikTok Shop 达人 Brief 模板：WEM 会写清什么', href: 'tiktok-shop-creator-brief-template.html?lang=zh' },
      { label: 'TikTok Shop 商品页优化：怎么把达人流量接住', href: 'tiktok-shop-product-listing-optimization.html?lang=zh' },
    ],
  },
};

function getInitialLang() {
  const urlLang = new URLSearchParams(window.location.search).get('lang');
  if (urlLang === 'zh' || urlLang === 'en') return urlLang;
  const savedLang = localStorage.getItem('we-lang');
  if (savedLang === 'zh' || savedLang === 'en') return savedLang;
  return (navigator.language || '').toLowerCase().startsWith('zh') ? 'zh' : 'en';
}

function App() {
  const [lang, setLang] = useState(getInitialLang);
  const post = POSTS[lang];

  useEffect(() => {
    localStorage.setItem('we-lang', lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.title = lang === 'zh'
      ? 'TikTok Shop 卖家怎么保护自己：IP 风险、品牌授权和申诉清单 | WE Marketing'
      : 'How TikTok Shop Sellers Can Protect Themselves From IP Risk | WE Marketing';
  }, [lang]);

  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });

  return (
    <div data-screen-label="WE Blog · tiktok-shop-ip-protection-seller-playbook">
      <CursorStars />
      <NavBar lang={lang} onLang={setLang} basePath="../" />
      <BlogPost {...post} labels={LABELS[lang]} />
      <CtaFooter lang={lang} />
      <Footer lang={lang} basePath="../" />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
