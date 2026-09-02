(() => {
  const articlePaths = {
    'weekly-tiktok-shop-operating-review': { en: ['The Weekly TikTok Shop', 'Operating Review'], zh: ['每周 TikTok Shop', '运营复盘'] },
    'tiktok-shop-probation-growth-plan': { en: ['Grow During', 'Shop Probation'], zh: ['新店考察期内', '怎么增长？'] },
    'measure-tiktok-shop-partner-performance': { en: ['Measure Your', 'TikTok Shop Partner'], zh: ['合作之后，如何', '评估 Partner？'] },
    'tiktok-shop-affiliate-commission-change': { en: ['Change Commission', 'Protect Creator Trust'], zh: ['调整佣金，也要', '保护达人信任'] },
    'tiktok-shop-open-collaboration-product-fit': { en: ['Open Collaboration', 'Product Gate'], zh: ['Open Collaboration', '商品准入门'] },
    'best-tiktok-shop-agency-by-growth-stage': { en: ['Choose Your Partner', 'By Growth Stage'], zh: ['按增长阶段', '选择 Partner'] },
    'tiktok-shop-content-assortment-balance': { en: ['Content-Led or', 'Assortment-Led?'], zh: ['内容优先，还是', '商品组合优先？'] },
    'tiktok-shop-discovery-diagnosis': { en: ['Where Is Discovery', 'Breaking?'], zh: ['TikTok Shop 流量', '断在哪里？'] },
    'how-to-choose-tiktok-shop-partner': { en: ['Choose a TikTok Shop', 'Partner'], zh: ['如何选择 TikTok Shop', 'Partner'] },
    'tiktok-shop-shop-ready-scale-ready': { en: ['Shop-Ready Is Not', 'Scale-Ready'], zh: ['可上架，不等于', '可放大'] },
    'tiktok-shop-partner-readiness': { en: ['Is Your Brand', 'Partner-Ready?'], zh: ['你的品牌，准备好', '找 Partner 了吗？'] },
    'tiktok-shop-growth-bottleneck': { en: ['Which Growth', 'Bottleneck First?'], zh: ['增长卡在哪里？', '先修哪个？'] },
  };
  const relatedGuides = {
    'manage-20-tiktok-shop-skus-smart-assistant': ['tiktok-shop-seller-assistant-human-control', 'tiktok-shop-catalog-architecture', 'tiktok-shop-product-listing-optimization'],
    'tiktok-shop-live-assortment': ['tiktok-shop-live-first-five-sessions-learning-system', 'tiktok-shop-live-preheat-system', 'weekly-tiktok-shop-operating-review'],
    'weekly-tiktok-shop-operating-review': ['tiktok-shop-growth-bottleneck', 'tiktok-shop-content-assortment-balance', 'measure-tiktok-shop-partner-performance'],
    'tiktok-shop-probation-growth-plan': ['tiktok-shop-shop-ready-scale-ready', 'tiktok-shop-video-volume-vs-conversion', 'tiktok-shop-storefront-merchandising'],
    'measure-tiktok-shop-partner-performance': ['how-to-choose-tiktok-shop-partner', 'tiktok-shop-partner-readiness', 'weekly-tiktok-shop-operating-review'],
    'tiktok-shop-affiliate-commission-change': ['tiktok-shop-open-collaboration-product-fit', 'tiktok-shop-sample-decision-system', 'tiktok-shop-creator-affiliate-management'],
    'tiktok-shop-open-collaboration-product-fit': ['tiktok-shop-video-volume-vs-conversion', 'tiktok-shop-creator-affiliate-management', 'tiktok-shop-sample-roi-tracking'],
    'best-tiktok-shop-agency-by-growth-stage': ['tiktok-shop-creator-affiliate-management', 'tiktok-shop-sample-roi-tracking', 'tiktok-shop-creator-community-brand-growth'],
    'tiktok-shop-content-assortment-balance': ['tiktok-shop-shop-ready-scale-ready', 'tiktok-shop-hero-sku-search-demand', 'tiktok-shop-storefront-merchandising'],
    'tiktok-shop-discovery-diagnosis': ['tiktok-shop-hero-sku-search-demand', 'tiktok-shop-product-card-strategy', 'tiktok-shop-content-assortment-balance'],
    'how-to-choose-tiktok-shop-partner': ['best-tiktok-shop-agency-by-growth-stage', 'tiktok-shop-partner-readiness', 'tiktok-shop-agency-vs-in-house'],
    'tiktok-shop-shop-ready-scale-ready': ['tiktok-shop-growth-bottleneck', 'tiktok-shop-hero-sku-search-demand', 'tiktok-shop-content-assortment-balance'],
    'tiktok-shop-partner-readiness': ['best-tiktok-shop-agency-by-growth-stage', 'how-to-choose-tiktok-shop-partner', 'tiktok-shop-growth-bottleneck'],
    'tiktok-shop-growth-bottleneck': ['tiktok-shop-discovery-diagnosis', 'tiktok-shop-shop-ready-scale-ready', 'tiktok-shop-partner-readiness'],
  };
  const guideNames = {
    'tiktok-shop-seller-assistant-human-control': 'Where TikTok Shop Seller Assistant Should Act, Recommend or Stop',
    'tiktok-shop-catalog-architecture': 'Catalog Architecture for TikTok Shop',
    'tiktok-shop-product-listing-optimization': 'TikTok Shop Product Listing Optimization',
    'manage-20-tiktok-shop-skus-smart-assistant': 'Manage 20+ TikTok Shop SKUs With Smart Assistant Without Optimizing Everything',
    'tiktok-shop-live-assortment': 'Build a TikTok Shop LIVE Assortment That Protects Margin and Inventory', 'tiktok-shop-live-first-five-sessions-learning-system': 'The First Five LIVE Sessions Learning System', 'tiktok-shop-live-preheat-system': 'The TikTok Shop LIVE Preheat System',
    'weekly-tiktok-shop-operating-review': 'The Weekly TikTok Shop Operating Review', 'tiktok-shop-probation-growth-plan': 'Grow While Your TikTok Shop Is in Probation', 'measure-tiktok-shop-partner-performance': 'Measure a TikTok Shop Partner', 'tiktok-shop-affiliate-commission-change': 'Change Affiliate Commission Without Breaking Trust', 'tiktok-shop-open-collaboration-product-fit': 'Open Collaboration Product Fit',
    'tiktok-shop-creator-affiliate-management': 'TikTok Shop Creator Affiliate Management', 'tiktok-shop-sample-roi-tracking': 'TikTok Shop Sample ROI Tracking', 'tiktok-shop-creator-community-brand-growth': 'Why TikTok Shop Brands Need a Creator Community',
    'tiktok-shop-shop-ready-scale-ready': 'Shop-Ready Is Not Scale-Ready', 'tiktok-shop-hero-sku-search-demand': 'TikTok Shop Hero SKU Strategy', 'tiktok-shop-storefront-merchandising': 'TikTok Shop Storefront Merchandising', 'tiktok-shop-video-volume-vs-conversion': 'Make More TikTok Shop Videos or Fix Conversion First?',
    'tiktok-shop-product-card-strategy': 'TikTok Shop Product Card Strategy', 'tiktok-shop-content-assortment-balance': 'Content-Led or Assortment-Led?',
    'best-tiktok-shop-agency-by-growth-stage': 'Best TikTok Shop Agency by Growth Stage', 'tiktok-shop-partner-readiness': 'Is Your Brand Ready to Work With a Partner?', 'tiktok-shop-agency-vs-in-house': 'TikTok Shop Agency vs. In-House Team',
    'tiktok-shop-growth-bottleneck': 'Which TikTok Shop Growth Bottleneck Should You Fix First?', 'tiktok-shop-discovery-diagnosis': 'Where Is TikTok Shop Discovery Breaking?', 'how-to-choose-tiktok-shop-partner': 'How to Choose a TikTok Shop Partner',
  };
  const slug = location.pathname.split('/').filter(Boolean).pop()?.replace(/\.html$/, '');
  const coverAlreadyIncludesCopy = new Set([
    'manage-20-tiktok-shop-skus-smart-assistant',
    'tiktok-shop-ai-first-90-days',
    'tiktok-shop-policy-vs-milestone-quiz',
    'tiktok-shop-correct-or-appeal',
    'tiktok-shop-violation-first-24-hours',
    'tiktok-shop-regulated-claims-review',
    'validate-tiktok-shop-ai-report',
    'tiktok-shop-seller-assistant-human-control',
    'tiktok-shop-live-preheat-system',
    'tiktok-shop-open-collaboration-product-fit',
    'tiktok-shop-affiliate-commission-change',
    'measure-tiktok-shop-partner-performance',
    'tiktok-shop-probation-growth-plan',
    'weekly-tiktok-shop-operating-review',
    'tiktok-shop-live-first-five-sessions-learning-system',
    'tiktok-shop-live-assortment',
  ]);
  const stageTitles = [
    'Stage 1: buy clarity before volume',
    'Stage 2: buy an operating system, not an unbounded creator list',
    'Stage 3: buy controlled expansion after the shop can carry it',
    'Stage 4: evaluate an existing partner with joined-up evidence',
  ];

  document.querySelectorAll('article').forEach((article) => {
    const hero = article.querySelector('.hero');
    if (hero) {
      const cover = document.createElement('div');
      cover.className = 'wem-hero-cover';
      hero.before(cover);
      cover.append(hero);
      if (!coverAlreadyIncludesCopy.has(slug)) {
        const copy = document.createElement('div');
        copy.className = 'wem-hero-copy';
        const lang = article.lang === 'zh-CN' ? 'zh' : 'en';
        const path = articlePaths[slug]?.[lang] || [article.querySelector('h1')?.textContent || '', ''];
        const category = article.querySelector('p')?.textContent || 'TIKTOK SHOP U.S. · OPERATOR GUIDE';
        const description = document.querySelector('meta[name="description"]')?.content || 'A practical WE Marketing operator guide.';
        copy.innerHTML = `<div class="wem-hero-eyebrow">${category}</div><h2>${path[0]}<br>${path[1]}</h2><p>${description}</p>`;
        cover.append(copy);
      }
    }
    let stage = 0;
    article.querySelectorAll('h2').forEach((heading) => {
      const title = heading.textContent.trim();
      if (stageTitles.includes(title)) {
        stage += 1;
        heading.dataset.stage = stage;
        const eyebrow = document.createElement('div');
        eyebrow.className = 'wem-section-eyebrow';
        eyebrow.textContent = `WEM PARTNER FIT · ${String(stage).padStart(2, '0')}`;
        heading.before(eyebrow);
        const detail = heading.nextElementSibling?.nextElementSibling;
        if (detail?.tagName === 'P') detail.classList.add('wem-operator-note');
      }
    });

    const faq = [...article.querySelectorAll('h2')].find((heading) => /frequently asked|常见问题/i.test(heading.textContent));
    if (faq) {
      faq.classList.add('wem-faq-title');
      faq.textContent = article.lang === 'zh-CN' ? '相关问答' : 'Related Q&A';
      const eyebrow = document.createElement('div');
      eyebrow.className = 'wem-section-eyebrow';
      eyebrow.textContent = article.lang === 'zh-CN' ? 'COMMON QUESTIONS' : 'COMMON QUESTIONS';
      faq.before(eyebrow);
      let node = faq.nextElementSibling;
      while (node?.tagName === 'H3') {
        const question = node;
        const answer = question.nextElementSibling;
        if (answer?.tagName !== 'P') break;
        const item = document.createElement('details');
        item.className = 'wem-faq-item';
        const summary = document.createElement('summary');
        summary.textContent = question.textContent;
        item.append(summary, answer);
        question.replaceWith(item);
        node = item.nextElementSibling;
      }
    }

  });

  const isZh = document.documentElement.dataset.lang === 'zh';
  const related = document.createElement('section');
  related.className = 'wem-related';
  const links = relatedGuides[slug] || relatedGuides['best-tiktok-shop-agency-by-growth-stage'];
  related.innerHTML = `<h2>${isZh ? '相关文章' : 'Related guides'}</h2>${links.map((link) => `<a href="/blog/${link}${isZh ? '?lang=zh' : ''}">${guideNames[link]}</a>`).join('')}`;
  const footer = document.createElement('section');
  footer.className = 'cta-footer-wrap';
  footer.innerHTML = isZh
    ? '<svg viewBox="0 0 1440 420" preserveAspectRatio="none" aria-hidden="true"><path d="M-80 270 C210 110, 410 350, 660 190 S1080 80, 1520 250"/><path d="M-100 120 C180 250, 420 70, 720 180 S1110 330, 1530 110"/></svg><div class="cta-footer-inner"><h2>想把美国<br>TikTok Shop 跑起来？</h2><p>告诉我们你的产品、目标市场和现在卡在哪。我们会在 24 小时内回复，直接给下一步建议。</p><div><a href="https://zus03h0enw04.sg.larksuite.com/scheduler/03970278dd9a7925" target="_blank" rel="noopener">预约咨询</a><a href="mailto:hello@weglobalmarketing.com">邮件联系</a></div></div>'
    : '<svg viewBox="0 0 1440 420" preserveAspectRatio="none" aria-hidden="true"><path d="M-80 270 C210 110, 410 350, 660 190 S1080 80, 1520 250"/><path d="M-100 120 C180 250, 420 70, 720 180 S1110 330, 1530 110"/></svg><div class="cta-footer-inner"><h2>Ready to scale<br>on TikTok?</h2><p>Tell us your brand, your stack, your ambition. We\'ll reply in 24 hours.</p><div><a href="https://zus03h0enw04.sg.larksuite.com/scheduler/03970278dd9a7925" target="_blank" rel="noopener">Book a discovery call →</a><a href="mailto:hello@weglobalmarketing.com">Email us instead</a></div></div>';
  const siteFooter = document.createElement('footer');
  siteFooter.className = 'wem-site-footer';
  const footerStyles = document.createElement('style');
  footerStyles.textContent = '.wem-site-footer{display:grid;grid-template-columns:1.5fr 1fr 1fr;gap:48px;padding:72px max(32px,calc((100% - 1120px)/2));background:#000;color:#fff}.wem-site-footer img{height:44px;width:auto}.wem-site-footer p{max-width:330px;margin:20px 0 0;color:rgba(255,255,255,.62);font-size:14px;line-height:1.6}.wem-site-footer strong{display:block;margin-bottom:18px;font-size:12px;letter-spacing:.12em;text-transform:uppercase}.wem-site-footer a{display:block;margin-bottom:10px;color:rgba(255,255,255,.65);font-size:14px;line-height:1.5;text-decoration:none}.wem-site-footer small{grid-column:1/-1;margin-top:16px;padding-top:24px;border-top:1px solid rgba(255,255,255,.12);color:rgba(255,255,255,.42);font-size:11px;letter-spacing:.05em}@media(max-width:650px){.wem-site-footer{grid-template-columns:1fr 1fr;gap:34px 24px;padding:54px 22px 28px}.wem-site-footer>div:first-child{grid-column:1/-1}.wem-site-footer small{margin-top:0}}';
  document.head.append(footerStyles);
  siteFooter.innerHTML = isZh
    ? '<div><img src="/assets/we-logo-white.png" alt="WE Marketing"><p>WE Marketing 是位于南加州的美国 TikTok Shop 代运营与增长机构，服务跨境品牌、Amazon 卖家和在美华人品牌团队。</p></div><div><strong>服务</strong><a href="/services.html#full-service-management">全案代运营</a><a href="/services.html#consulting">策略咨询</a><a href="/services.html#affiliate-management">达人联盟</a><a href="/services.html#ugc-content">UGC 内容</a></div><div><strong>公司</strong><a href="/about.html">关于</a><a href="/showcase.html">案例</a><a href="/blog.html">博客</a><a href="mailto:wendy@weglobalmarketing.com">wendy@weglobalmarketing.com</a></div><small>© 2026 WE Marketing · 版权所有</small>'
    : '<div><img src="/assets/we-logo-white.png" alt="WE Marketing"><p>WE Marketing is a U.S. TikTok Shop Partner Agency helping brands scale through creator affiliates, UGC content, live selling, and shop operations.</p></div><div><strong>Services</strong><a href="/services.html#full-service-management">Full Service</a><a href="/services.html#consulting">Consulting</a><a href="/services.html#affiliate-management">Creator Affiliate</a><a href="/services.html#ugc-content">UGC Content</a></div><div><strong>Company</strong><a href="/about.html">About</a><a href="/showcase.html">Our Work</a><a href="/blog.html">Blog</a><a href="mailto:wendy@weglobalmarketing.com">wendy@weglobalmarketing.com</a></div><small>© 2026 WE Marketing · All rights reserved</small>';
  const main = document.querySelector('main.wrap');
  main?.after(related, footer, siteFooter);
})();

/* Aug 15-31 source-note normalization */
addEventListener('DOMContentLoaded',()=>{document.querySelectorAll('article h2').forEach(h=>{if(!/^(Source notes|Source notes and|来源说明)/i.test(h.textContent.trim()))return;h.textContent=/^来源说明/.test(h.textContent.trim())?'来源说明':'Source notes';const parent=h.parentElement;if(parent&&parent.tagName==='SECTION'){parent.classList.add('wem-source-notes');return;}const section=document.createElement('section');section.className='wem-source-notes';const nodes=[];let cursor=h.nextSibling;while(cursor&&!(cursor.nodeType===1&&cursor.tagName==='H2')){nodes.push(cursor);cursor=cursor.nextSibling;}h.before(section);section.append(h,...nodes);});});
