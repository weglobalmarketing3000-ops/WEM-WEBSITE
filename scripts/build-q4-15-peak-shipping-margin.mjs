import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import vm from 'node:vm';
import {createRequire} from 'node:module';

const require=createRequire(import.meta.url);
const sharp=require('/Users/wendylin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');
const root=path.resolve(import.meta.dirname,'..');
const base=path.join(root,'outputs/patches/2026-10-10-q4-14-bfcm-price-claim-audit');
const out=path.join(root,'outputs/patches/2026-10-11-q4-15-peak-shipping-margin');
const slug='tiktok-shop-peak-season-shipping-margin';
const date='2026-10-11';
const url=`https://www.weglobalmarketing.com/blog/${slug}`;
const sources={
  peak:'https://seller-us.tiktok.com/university/essay?default_language=en&knowledge_id=4797361814980370',
  live:'https://seller-us.tiktok.com/university/essay?knowledge_id=6744662208792321&default_language=en',
  standard:'https://seller-us.tiktok.com/university/essay?knowledge_id=987788883576589&lang=en'
};
const enTitle='Put TikTok Shipping Peak-Season Rates Into SKU Contribution Margin Before You Scale';
const zhTitle='TikTok Shipping 旺季费率先算进 SKU 毛利，再决定放量';
const enDescription='Build a TikTok Shop SKU contribution-margin worksheet that separates LIVE and non-LIVE shipping, dimensional weight and peak-season settlement before scale.';
const zhDescription='建立 TikTok Shop SKU 毛利表，把 LIVE 与非 LIVE 运费、体积重和旺季结算拆开，再决定是否放量。';
const sha=v=>crypto.createHash('sha256').update(v).digest('hex');

await fs.rm(out,{recursive:true,force:true});
for(const d of ['assets','blog','blog/optimized','blog/thumbs','blog/q4-15-shipping-margin']) await fs.mkdir(path.join(out,d),{recursive:true});
await fs.copyFile(path.join(root,'assets/we-logo.png'),path.join(out,'assets/we-logo.png'));
const logo=(await fs.readFile(path.join(out,'assets/we-logo.png'))).toString('base64');

function cover(zh){
  const lines=zh?['旺季运费','毛利闸门']:['PEAK SHIPPING','MARGIN GATE'];
  return `<svg width="1792" height="896" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bg" x2="1"><stop stop-color="#fffdf8"/><stop offset="1" stop-color="#e9e3ff"/></linearGradient><linearGradient id="g" x2="1" y2="1"><stop stop-color="#245bd7"/><stop offset="1" stop-color="#8d62e8"/></linearGradient><filter id="s"><feDropShadow dx="0" dy="18" stdDeviation="20" flood-opacity=".18"/></filter></defs><rect width="1792" height="896" fill="url(#bg)"/><path d="M1080 0h712v896h-770c162-236 180-646 58-896z" fill="#eeeaff"/><rect x="82" y="78" width="625" height="50" rx="25" fill="#e8efff"/><text x="110" y="111" font-family="Arial" font-size="21" font-weight="800" fill="#1746b8">TIKTOK SHOP · SHIPPING ECONOMICS</text>${lines.map((l,i)=>`<text x="82" y="${250+i*88}" font-family="Arial Narrow,Arial,PingFang SC" font-size="${zh?70:64}" font-weight="900" fill="${i?'#245bd7':'#17151a'}">${l}</text>`).join('')}<rect x="84" y="438" width="88" height="6" rx="3" fill="#ed168c"/><text x="82" y="505" font-family="Arial,PingFang SC" font-size="25" fill="#4f4a55">${zh?'先算每单，再放量':'CALCULATE EACH ORDER BEFORE SCALE'}</text><image href="data:image/png;base64,${logo}" x="82" y="700" width="145" height="105"/><g filter="url(#s)"><ellipse cx="1390" cy="750" rx="330" ry="66" fill="#beb9ed"/><rect x="1160" y="170" width="430" height="480" rx="42" fill="#fff"/><rect x="1220" y="230" width="310" height="105" rx="24" fill="url(#g)"/><text x="1375" y="296" text-anchor="middle" font-family="Arial" font-size="39" font-weight="900" fill="#fff">CM / SKU</text><rect x="1220" y="386" width="212" height="22" rx="11" fill="#d6d2e8"/><rect x="1220" y="438" width="270" height="22" rx="11" fill="#d6d2e8"/><rect x="1220" y="490" width="180" height="22" rx="11" fill="#d6d2e8"/><circle cx="1492" cy="516" r="70" fill="#fce0ef"/><path d="M1457 520h70M1492 485v70" stroke="#ed168c" stroke-width="15" stroke-linecap="round"/><path d="M1075 640c90-160 185-196 300-110 86 64 162 45 244-56" fill="none" stroke="#245bd7" stroke-width="22" stroke-linecap="round"/></g></svg>`;
}

function visual(zh,type){
  if(type==='worksheet'){
    const title=zh?'SKU 毛利表：每个订单来源单独计算':'SKU contribution worksheet: calculate each order source separately';
    const rows=zh?[
      ['净收入','买家实付 + 可确认补贴 - 退款'],['商品与促销成本','COGS + Seller-funded Discount'],['平台与达人成本','Referral / Commission / Affiliate'],['履约成本','Seller Shipping + 包材 + 操作'],['风险准备','退货、差额与实际称重调整']
    ]:[
      ['NET REVENUE','Shopper paid + confirmed subsidy - refunds'],['PRODUCT AND PROMO','COGS + seller-funded discount'],['PLATFORM AND CREATOR','Referral / commission / affiliate'],['FULFILLMENT','Seller shipping + packaging + handling'],['RISK ALLOWANCE','Returns, variance and carrier adjustment']
    ];
    return `<svg width="1600" height="920" xmlns="http://www.w3.org/2000/svg"><rect width="1600" height="920" rx="42" fill="#f5f2ff"/><text x="72" y="105" font-family="Arial,PingFang SC" font-size="40" font-weight="850" fill="#17141d">${title}</text><g transform="translate(70 175)">${rows.map((r,i)=>`<g transform="translate(0 ${i*125})"><rect width="1460" height="100" rx="24" fill="#fff"/><rect width="16" height="100" rx="8" fill="${i===0?'#245bd7':'#ed168c'}"/><text x="55" y="43" font-family="Arial,PingFang SC" font-size="22" font-weight="850" fill="#1746b8">${r[0]}</text><text x="55" y="76" font-family="Arial,PingFang SC" font-size="21" fill="#4f4a55">${r[1]}</text><text x="1390" y="63" text-anchor="end" font-family="Arial" font-size="34" font-weight="900" fill="${i===0?'#245bd7':'#ed168c'}">${i===0?'+':'−'}</text></g>`).join('')}</g><rect x="70" y="805" width="1460" height="68" rx="24" fill="#245bd7"/><text x="800" y="849" text-anchor="middle" font-family="Arial,PingFang SC" font-size="25" font-weight="900" fill="#fff">${zh?'= 单笔 Contribution Margin 与 Margin %':'= CONTRIBUTION MARGIN PER ORDER AND MARGIN %'}</text></svg>`;
  }
  const title=zh?'运费不是一个常数：按订单路径建立毛利闸门':'Shipping is not one constant: gate margin by order path';
  const cols=zh?[
    ['LIVE · 低于 5 lb','实际重与体积重都检查','使用当前 LIVE 档位估算'],['LIVE · 超过 5 lb','重量与距离共同影响','以 Calculator 为证据'],['非 LIVE','重量、距离、区域与日期','保存旺季 Rate 截图'],['合并订单 / Cap','包裹数可能下降','卖家可能承担 Cap 以上费用']
  ]:[
    ['LIVE · BELOW 5 LB','Check actual and dimensional weight','Use current LIVE tier estimate'],['LIVE · ABOVE 5 LB','Weight and distance both matter','Use calculator evidence'],['NON-LIVE','Weight, distance, zone and date','Save peak-rate evidence'],['COMBINE / CAP','Package count may fall','Seller may fund fees above cap']
  ];
  return `<svg width="1600" height="820" xmlns="http://www.w3.org/2000/svg"><rect width="1600" height="820" rx="42" fill="#f5f2ff"/><text x="72" y="105" font-family="Arial,PingFang SC" font-size="40" font-weight="850" fill="#17141d">${title}</text><g transform="translate(55 190)">${cols.map((r,i)=>`<g transform="translate(${i*375} 0)"><rect width="345" height="500" rx="30" fill="#fff"/><rect width="345" height="16" rx="8" fill="${i===3?'#ed168c':'#245bd7'}"/><circle cx="58" cy="90" r="29" fill="${i===3?'#fce0ef':'#e8efff'}"/><text x="58" y="100" text-anchor="middle" font-family="Arial" font-size="24" font-weight="900" fill="${i===3?'#c91472':'#1746b8'}">${i+1}</text><text x="30" y="158" font-family="Arial,PingFang SC" font-size="21" font-weight="850" fill="#1746b8">${r[0]}</text><line x1="30" y1="190" x2="315" y2="190" stroke="#ddd7eb" stroke-width="3"/><text x="30" y="245" font-family="Arial,PingFang SC" font-size="20" fill="#17141d"><tspan x="30">${r[1]}</tspan><tspan x="30" dy="46">${r[2]}</tspan></text><path d="M142 410l23 23 43-55" fill="none" stroke="${i===3?'#ed168c':'#245bd7'}" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/></g>`).join('')}</g></svg>`;
}

for(const [lang,zh] of [['en',false],['zh',true]]){
  const n=`hero-${slug}-${lang}-v1`;
  await sharp(Buffer.from(cover(zh))).png().toFile(path.join(out,'blog',`${n}.png`));
  await sharp(path.join(out,'blog',`${n}.png`)).resize({width:1600}).jpeg({quality:90}).toFile(path.join(out,'blog/optimized',`${n}.jpg`));
  await sharp(path.join(out,'blog',`${n}.png`)).resize({width:880}).jpeg({quality:88}).toFile(path.join(out,'blog/thumbs',`${n}.jpg`));
  for(const type of ['worksheet','margin-gate']) await sharp(Buffer.from(visual(zh,type))).png().toFile(path.join(out,'blog/q4-15-shipping-margin',`${type}-${lang}-v1.png`));
}

const faqEn=[
 ['Should I copy TikTok Shop peak-season rates into every SKU margin sheet?','No. Save the current calculator result or applicable rate card as dated evidence for each shipping path. Use that evidence in the worksheet, and refresh it when the package, route, order source or platform rate changes.'],
 ['Is a LIVE flat rate the same as the shipping fee a shopper pays?','No. The official LIVE guidance says the rate card applies to seller settlement, while the shopper-side rate is controlled separately by the seller shipping-fee configuration. Keep both fields separate.'],
 ['Which weight should I use for TikTok Shipping margin?','Use the billable weight supported by the current shipping workflow. TikTok Shop states that shipping fees may use the greater of actual and dimensional weight, and a carrier audit can create a later adjustment.'],
 ['Does combining LIVE orders always improve margin?','Not always. Combining eligible orders from the same shopper may reduce the number of packages and total shipping charges, but package weight, dimensions, split risk, handling and the final rate still need to be checked.'],
 ['How should capped LIVE shipping fees appear in contribution margin?','Treat the amount above the shopper cap that the seller covers as a seller-funded fulfillment cost. Do not record the shopper cap as though it also caps seller settlement.'],
 ['What is the smallest useful peak-season margin test?','Choose one priority SKU, one LIVE path and one non-LIVE path. Save current calculator evidence, calculate contribution margin for each, set a minimum margin floor, and pause scale if either path falls below it.']
];
const faqZh=[
 ['要把 TikTok Shop 旺季费率抄进每个 SKU 毛利表吗？','不要把某张费率表当成永久常数。应按不同发货路径保存当前 Calculator 或适用 Rate Card 的带日期证据，并在包裹、路线、订单来源或平台费率变化时刷新。'],
 ['LIVE Flat Rate 等于消费者支付的运费吗？','不等于。官方 LIVE 说明明确区分 Seller Settlement Rate 与 Shopper-side Shipping Fee，后者还取决于卖家的运费设置，所以两者必须分开记录。'],
 ['TikTok Shipping 毛利应该使用实际重还是体积重？','使用当前流程支持的计费重量。TikTok Shop 说明运费可能按实际重与体积重中较大者计算，并且承运商复核后还可能产生二次调整。'],
 ['合并 LIVE 订单一定会提高毛利吗？','不一定。同一消费者在同一场 LIVE 的符合条件订单合并后，包裹数和总运费可能下降，但仍要检查合并后的重量、尺寸、拆包风险、操作成本和最终结算。'],
 ['LIVE 运费 Cap 应该怎样进入毛利表？','把超过消费者 Cap、最终由卖家承担的部分列为 Seller-funded Fulfillment Cost。不能把消费者支付上限误当成卖家结算成本上限。'],
 ['最小可执行的旺季毛利测试是什么？','选一个 Priority SKU，分别跑一条 LIVE 和一条非 LIVE 路径，保存当前 Calculator 证据，计算两条路径的 Contribution Margin，设置最低毛利底线；任一路径低于底线就暂停放量。']
];
const faq=(items,zh)=>`<section class="faq"><h2>${zh?'常见问题':'Common questions'}</h2>${items.map(([q,a])=>`<div class="faq-item"><h3>${q}</h3><p>${a}</p></div>`).join('')}</section>`;
const P=xs=>xs.join('');

const EN=P([
 `<header class="hero"><div class="kicker">TIKTOK SHOP U.S. · SHIPPING ECONOMICS</div><h1>${enTitle}</h1><p class="dek">Turn current shipping evidence into one SKU-level margin gate before paid, creator or LIVE volume increases.</p><p class="meta">WE Marketing Team · Oct 11, 2026 · 15 min read</p><img src="/blog/hero-${slug}-en-v1.png" alt="TikTok Shop peak-season shipping SKU contribution margin"></header>`,
 `<p><strong>Direct answer:</strong> do not scale a TikTok Shop SKU from a single product margin or a remembered shipping rate. Build contribution margin by order source and package path. Keep LIVE under-five-pound, LIVE over-five-pound and non-LIVE orders separate; use current calculator evidence; include the larger applicable actual or dimensional weight; and count every seller-funded shipping amount. Scale only the paths that remain above a named margin floor after those costs.</p>`,
 `<p>This matters in the 2026 peak window because TikTok Shop says Standard Delivery rates are temporarily adjusted from October 5, 2026 through January 17, 2027 Pacific Time, while Collection by TikTok rates remain unchanged. LIVE packages below five pounds use a weight-tier flat-rate structure, while heavier LIVE packages and non-LIVE packages use weight and distance differently. One blended shipping assumption hides the exact SKU and order path creating the loss.</p>`,
 `<img class="body-visual" src="/blog/q4-15-shipping-margin/worksheet-en-v1.png" alt="TikTok Shop SKU contribution margin worksheet">`,
 `<h2>Contribution margin is the scale decision, not gross margin</h2>`,
 `<p>Gross margin usually subtracts product cost from revenue. Contribution margin goes further. It asks how much one additional order contributes after the variable costs required to win, process and fulfill it. For this operating decision, start with recognized net revenue, then subtract product cost, seller-funded discount, platform and creator costs, seller shipping settlement, packaging, pick-and-pack handling, and a realistic returns or adjustment allowance.</p>`,
 `<p>Use fields, not guesses: <strong>Contribution margin per order = recognized net revenue - COGS - seller-funded promotion - platform and affiliate costs - seller shipping - packaging and handling - variable risk allowance.</strong> Contribution margin percentage divides that amount by recognized net revenue. Leave any unknown input visibly blank or marked for verification. A blank field blocks scale; it is not permission to substitute zero.</p>`,
 `<h2>Build the worksheet at SKU and path level</h2>`,
 `<table><tr><th>Field</th><th>Evidence</th><th>Why it changes the decision</th></tr><tr><td>Product identity</td><td>Product ID, SKU, variant, bundle quantity</td><td>Dimensions, COGS and offer can differ</td></tr><tr><td>Order source</td><td>LIVE or non-LIVE</td><td>Different shipping logic can apply</td></tr><tr><td>Package</td><td>Actual weight, dimensions, dimensional weight</td><td>The larger applicable weight may drive billing</td></tr><tr><td>Route</td><td>Warehouse, destination zone, service</td><td>Distance and eligibility can change cost</td></tr><tr><td>Settlement</td><td>Dated calculator or rate-card capture</td><td>Rate evidence must match the path</td></tr><tr><td>Shopper shipping</td><td>Current shipping-fee configuration and cap</td><td>Shopper payment is not seller settlement</td></tr><tr><td>Margin result</td><td>Per-order dollars and percentage</td><td>Scale only above the named floor</td></tr></table>`,
 `<p>Duplicate the row when any of those fields changes. A beauty bundle sold from a LIVE, the same bundle sold from a video, and a single unit sold outside LIVE are three rows, even if they share one listing. That separation makes the operating choice visible: scale the healthy path, repair the weak path, or stop the SKU.</p>`,
 `<h2>Separate seller settlement from shopper shipping</h2>`,
 `<p>The current LIVE flat-rate guidance warns that its rate card applies to seller settlement. The shopper-side rate takes effect independently according to the seller shipping-fee configuration. Therefore, never enter “free shipping” or a shopper cap as the seller shipping cost. A shopper may pay less while the seller still absorbs the remaining fulfillment amount.</p>`,
 `<p>If capped shipping is enabled for LIVE orders, record the shopper contribution and the seller-funded remainder separately. The cap can improve conversion, but it is also a variable promotion cost. The correct question is not whether the shopper likes the cap. It is whether contribution margin still clears the floor at the likely basket and package configuration.</p>`,
 `<h2>Use billable package evidence, not catalog weight</h2>`,
 `<p>TikTok Shop Standard Delivery guidance says shipping fees can be based on the greater of actual and volumetric or dimensional weight. Seller Center or an ERP may estimate from maintained product data; after handoff, the carrier can measure the parcel and adjust the final charge. That makes packaging data a finance input, not just a warehouse field.</p>`,
 `<p>Measure the packed unit and the packed bundle. Record the source and time of the dimensions. Reconcile estimated settlement against completed-order settlement. If the actual charge repeatedly differs, repair the dimensions, packaging or allowance before increasing volume. A small carton change can move a SKU into another billing outcome even when product weight is unchanged.</p>`,
 `<img class="body-visual" src="/blog/q4-15-shipping-margin/margin-gate-en-v1.png" alt="TikTok Shop LIVE and non-LIVE shipping margin gate">`,
 `<h2>Route LIVE and non-LIVE orders through different gates</h2>`,
 `<p>For an eligible package generated from LIVE orders and weighing below five pounds by both actual and dimensional rules, the current guidance uses a weight-tier LIVE flat rate whether the package contains one order or combined orders. Above five pounds, weight and distance enter the calculation. For non-LIVE packages, the Shipping Calculator uses the standard weight- and distance-based rate card.</p>`,
 `<p>That does not mean a team should manually reproduce every current rate in a permanent spreadsheet. Store the Calculator result, input conditions and timestamp. Reference the official page for the governing rule. This keeps the worksheet auditable while avoiding stale constants when rates, eligibility or the interface changes.</p>`,
 `<h2>Model combined LIVE orders without inventing savings</h2>`,
 `<p>TikTok Shop notes that combining eligible orders placed by the same shopper during the same LIVE may reduce total shipping charges because fewer packages are created. Model this as a scenario, not a guaranteed discount. Compare separate packages with the actual combined package weight, dimensions, handling effort and damage or split risk.</p>`,
 `<p>Use an observed combine rate from your own orders when available. Until then, keep separate and combined outcomes as two scenarios. Do not average the optimistic result into every order. The margin gate should pass under the scenario the team can reasonably operate, not only under the best possible packing outcome.</p>`,
 `<h2>Peak-season scale sequence</h2>`,
 `<ol><li>Freeze one product ID, SKU, bundle and package configuration.</li><li>Measure packed actual weight and dimensions.</li><li>Create separate LIVE and non-LIVE rows.</li><li>Save dated Shipping Calculator evidence for each route.</li><li>Enter shopper-paid shipping and seller settlement separately.</li><li>Complete all remaining variable-cost fields and mark unknowns.</li><li>Calculate contribution margin dollars and percentage.</li><li>Compare the result with the brand's named minimum floor.</li><li>Run a small observed batch and reconcile final settlement.</li><li>Scale only the path that still passes after reconciliation.</li></ol>`,
 `<h2>Operating example without fabricated rates</h2>`,
 `<p>Suppose a brand wants to increase LIVE spend on a bundled skincare SKU. The team first measures the packed bundle, then obtains the current eligible LIVE estimate and a non-LIVE estimate using the same warehouse and realistic destination assumptions. It does not copy a public example rate into the model. It records the actual outputs as time-stamped evidence.</p>`,
 `<p>The LIVE row may benefit from a different rate structure or combined orders, but a shopper shipping cap may move more cost to the seller. The non-LIVE row may show greater zone sensitivity. If one path remains above the margin floor and the other does not, the decision is path-specific: scale the first and repair the second. This is a WEM operating example, not a promise about a particular account's rate or profitability.</p>`,
 `<h2>The smallest useful action today</h2>`,
 `<p>Choose one priority SKU. Measure one packed unit, create one LIVE row and one non-LIVE row, and save the current Shipping Calculator evidence for both. Fill every variable-cost field you can verify. Name the margin floor and one owner. If any required field is unknown, keep the scale decision on hold and assign the missing evidence rather than entering zero.</p>`,
 `<h2>Source notes</h2>`,
 `<p>This original WE Marketing operating framework draws on the complete current TikTok Shop U.S. Seller University <a href="${sources.peak}">TikTok Shipping Peak Season Shipping Rate</a> dated September 26, 2026, <a href="${sources.live}">What Is TikTok Shipping LIVE Flat Rate</a> dated September 21, 2026, and <a href="${sources.standard}">What is TikTok Shipping - Standard Delivery</a>, all revalidated October 11, 2026. Platform rates, eligibility, package rules, calculators, fee configuration and settlement can change. Verify the current U.S. Seller Center and completed-order settlement before execution. This framework does not guarantee a rate, margin, distribution or sales result.</p>`,faq(faqEn,false),
 `<h2>Related WEM guides</h2><section class="related-grid"><a href="/blog/tiktok-shop-bfcm-pricing-margin-waterfall"><strong>BFCM pricing and margin</strong><span>Connect offer design to contribution margin before scale.</span></a><a href="/blog/tiktok-shop-bfcm-price-claim-audit"><strong>BFCM price-claim audit</strong><span>Control price language across product, video and LIVE.</span></a><a href="/blog/tiktok-shop-live-profitability-scorecard"><strong>LIVE profitability scorecard</strong><span>Separate demand signals from contribution economics.</span></a></section>`
]);

const ZH=P([
 `<header class="hero"><div class="kicker">TIKTOK SHOP 美国站 · 运费经济模型</div><h1>${zhTitle}</h1><p class="dek">先把当前运费证据写进每个 SKU 与订单路径，再决定是否增加广告、达人或 LIVE 流量。</p><p class="meta">WE Marketing Team · 2026 年 10 月 11 日 · 15 分钟阅读</p><img src="/blog/hero-${slug}-zh-v1.png" alt="TikTok Shipping 旺季 SKU 毛利"></header>`,
 `<p><strong>直接答案：</strong>不要只看 Product Margin，也不要凭记忆填一个 Shipping Rate 就决定放量。应按订单来源与包裹路径计算 Contribution Margin，把 LIVE 低于 5 lb、LIVE 超过 5 lb 与非 LIVE 订单分开；保存当前 Calculator 证据；检查实际重与体积重中适用的较大值；并计入全部 Seller-funded Shipping。只有扣除这些成本后仍高于明确毛利底线的路径，才进入放量。</p>`,
 `<p>这在 2026 旺季尤其重要。TikTok Shop 当前说明显示，Standard Delivery 在 2026 年 10 月 5 日至 2027 年 1 月 17 日（太平洋时间）临时调整费率，而 Collection by TikTok 费率保持不变。低于 5 lb 的 LIVE 包裹采用按重量档位的 Flat-rate 结构；更重的 LIVE 包裹与非 LIVE 包裹又会以不同方式考虑重量和距离。一个混合运费假设会把真正亏损的 SKU 与订单路径隐藏起来。</p>`,
 `<img class="body-visual" src="/blog/q4-15-shipping-margin/worksheet-zh-v1.png" alt="TikTok Shop SKU 毛利表">`,
 `<h2>放量决策看 Contribution Margin，不只看 Gross Margin</h2>`,
 `<p>Gross Margin 通常只从收入中扣除商品成本。Contribution Margin 继续追问：每增加一单，在赢得订单、处理订单和完成履约所需的可变成本之后，还贡献多少钱。这个运营模型从可确认的 Net Revenue 开始，再扣除 COGS、Seller-funded Discount、平台与达人费用、Seller Shipping Settlement、包材、Pick-and-pack，以及合理的退货或结算差额准备。</p>`,
 `<p>公式应该使用可核验证据：<strong>单笔 Contribution Margin = 可确认净收入 - COGS - 卖家承担的促销 - 平台与达人费用 - 卖家运费 - 包材与操作成本 - 可变风险准备。</strong>再用这个金额除以可确认净收入，得到 Margin Percentage。未知字段必须明确标为待核验或留空。空白会阻止放量，而不是授权团队填成零。</p>`,
 `<h2>毛利表必须做到 SKU × 订单路径</h2>`,
 `<table><tr><th>字段</th><th>证据</th><th>为什么影响决策</th></tr><tr><td>商品身份</td><td>Product ID、SKU、Variant、Bundle 数量</td><td>尺寸、COGS 和 Offer 可能不同</td></tr><tr><td>订单来源</td><td>LIVE 或非 LIVE</td><td>可能适用不同运费逻辑</td></tr><tr><td>包裹</td><td>实际重、尺寸、体积重</td><td>适用的较大重量可能决定计费</td></tr><tr><td>路线</td><td>仓库、目的区域、Service</td><td>距离与资格会改变成本</td></tr><tr><td>结算</td><td>带日期的 Calculator 或 Rate Card 截图</td><td>费率证据必须匹配路径</td></tr><tr><td>消费者运费</td><td>当前运费设置与 Cap</td><td>消费者支付不等于卖家结算</td></tr><tr><td>毛利结果</td><td>单笔金额与百分比</td><td>只放大高于明确底线的路径</td></tr></table>`,
 `<p>以上任何字段变化，都要复制成新的一行。同一个美妆 Bundle 从 LIVE 售出、从短视频售出，以及非 LIVE 的单品订单，即使共用一个 Listing，也应该是三行。拆开以后，运营选择才会清晰：放大健康路径、修复弱路径，或者暂停这个 SKU。</p>`,
 `<h2>Seller Settlement 与 Shopper Shipping 必须分开</h2>`,
 `<p>当前 LIVE Flat Rate 指南特别说明，费率表适用于 Seller Settlement；Shopper-side Shipping Fee 则根据卖家的运费设置独立生效。因此，不能把“包邮”或 Shopper Cap 填成卖家运费成本。消费者支付可能更少，但剩余的履约金额仍可能由卖家承担。</p>`,
 `<p>如果 LIVE 开启 Capped Shipping Fee，就把消费者承担部分与 Seller-funded Remainder 分开记录。Cap 可能改善转化，但同时也是一项可变促销成本。正确问题不是消费者是否喜欢 Cap，而是按照可能出现的 Basket 与 Package 结构，Contribution Margin 是否仍然高于底线。</p>`,
 `<h2>使用可计费包裹证据，不只看 Catalog Weight</h2>`,
 `<p>TikTok Shop Standard Delivery 说明，运费可能按实际重与体积重中较大者计算。Seller Center 或 ERP 会根据维护的商品资料提供估算；包裹交给承运商后，承运商还可能重新测量并调整最终费用。因此，Packaging Data 不是仓库附属字段，而是 Finance Input。</p>`,
 `<p>分别测量单品与 Bundle 的打包后重量和尺寸，记录测量来源与时间，再把 Estimated Settlement 与 Completed-order Settlement 对账。如果实际费用持续出现偏差，先修复尺寸、包材或 Allowance，再增加订单量。即使商品重量不变，一个纸箱变化也可能让 SKU 进入不同的 Billing Outcome。</p>`,
 `<img class="body-visual" src="/blog/q4-15-shipping-margin/margin-gate-zh-v1.png" alt="TikTok Shop LIVE 与非 LIVE 运费毛利闸门">`,
 `<h2>LIVE 与非 LIVE 订单进入不同闸门</h2>`,
 `<p>对于由 LIVE 订单生成、且实际重与体积重规则都低于 5 lb 的符合条件包裹，当前指南采用按重量档位的 LIVE Flat Rate，无论包裹包含一笔还是合并后的多笔订单。超过 5 lb 后，重量与距离都会进入计算。非 LIVE 包裹则由 Shipping Calculator 使用标准的重量与距离 Rate Card。</p>`,
 `<p>这不代表团队应该把每一张当前费率表永久抄进 Spreadsheet。应保存 Calculator Result、输入条件与时间戳，并在台账中引用官方规则。这样既能保留审计证据，也能避免费率、资格或界面更新后继续使用过期常数。</p>`,
 `<h2>合并 LIVE 订单时，不要虚构节省</h2>`,
 `<p>TikTok Shop 说明，同一消费者在同一场 LIVE 下的符合条件订单合并后，因为生成的包裹更少，可能降低总运费。团队应该把它建成 Scenario，而不是 Guaranteed Discount。要比较分别打包与真实合并包裹的重量、尺寸、操作量，以及破损或拆包风险。</p>`,
 `<p>有历史订单时，使用自有数据里的 Observed Combine Rate；没有数据时，就把 Separate 与 Combined 保留为两个场景。不要把最乐观场景平均进所有订单。毛利闸门应该在团队能够稳定执行的场景下通过，而不是只在最理想的装箱结果下通过。</p>`,
 `<h2>旺季放量顺序</h2>`,
 `<ol><li>锁定一个 Product ID、SKU、Bundle 与包裹配置。</li><li>测量打包后的实际重与尺寸。</li><li>分别建立 LIVE 与非 LIVE 行。</li><li>为每条路线保存带日期的 Shipping Calculator 证据。</li><li>把 Shopper-paid Shipping 与 Seller Settlement 分开填写。</li><li>补齐其余可变成本，明确标记未知项。</li><li>计算 Contribution Margin 金额与百分比。</li><li>与品牌明确的 Minimum Margin Floor 比较。</li><li>用一小批真实订单对账最终结算。</li><li>只放大对账后仍然通过的路径。</li></ol>`,
 `<h2>不虚构费率的运营示例</h2>`,
 `<p>假设一个品牌准备增加某个护肤 Bundle 的 LIVE 投放。团队先测量打包后的 Bundle，再用相同仓库与合理目的地区间，取得当前符合条件的 LIVE 估算和非 LIVE 估算。团队不会把官方页面上的 Example Rate 直接复制进模型，而是把自己账号真实输出保存成带时间戳的证据。</p>`,
 `<p>LIVE 行可能因为不同费率结构或合并订单受益，但 Shopper Shipping Cap 也可能把更多成本转给卖家；非 LIVE 行可能对 Zone 更敏感。如果一条路径高于毛利底线而另一条没有通过，决策就应该按路径拆分：放大第一条，修复第二条。这是 WEM 的运营示例，不保证某个账号的费率或盈利结果。</p>`,
 `<h2>今天就做的最小动作</h2>`,
 `<p>选择一个 Priority SKU，测量一个打包单元，建立一行 LIVE 和一行非 LIVE，并保存两条路径当前 Shipping Calculator 证据。填写所有可核验的可变成本，明确 Margin Floor 与一名 Owner。任何必要字段未知时，都保持 Hold 并指派补证据，不要把它填成零。</p>`,
 `<h2>来源说明</h2>`,
 `<p>这套 WE Marketing 原创运营框架基于 TikTok Shop 美国站 Seller University 的完整当前 <a href="${sources.peak}">TikTok Shipping Peak Season Shipping Rate</a>（2026 年 9 月 26 日）、<a href="${sources.live}">What Is TikTok Shipping LIVE Flat Rate</a>（2026 年 9 月 21 日）和 <a href="${sources.standard}">What is TikTok Shipping - Standard Delivery</a>，三份来源均于 2026 年 10 月 11 日重新核验。平台费率、Eligibility、Package Rule、Calculator、运费设置与结算都可能变化，执行前必须核验当前美国站 Seller Center 与真实已完成订单结算。本框架不保证特定费率、毛利、分发或销量结果。</p>`,faq(faqZh,true),
 `<h2>相关 WEM 指南</h2><section class="related-grid"><a href="/blog/tiktok-shop-bfcm-pricing-margin-waterfall?lang=zh"><strong>BFCM 价格与毛利</strong><span>放量前把 Offer Design 连接到 Contribution Margin。</span></a><a href="/blog/tiktok-shop-bfcm-price-claim-audit?lang=zh"><strong>BFCM 价格口径审计</strong><span>统一商品页、短视频与直播的价格表达。</span></a><a href="/blog/tiktok-shop-live-profitability-scorecard?lang=zh"><strong>LIVE 盈利记分卡</strong><span>把需求信号与单笔经济模型分开。</span></a></section>`
]);

const citations=Object.values(sources);
const graph={'@context':'https://schema.org','@graph':[
 {'@type':'BlogPosting','@id':`${url}#article`,headline:enTitle,description:enDescription,inLanguage:'en-US',author:{'@type':'Organization','@id':'https://www.weglobalmarketing.com/#editorial-team',name:'WE Marketing Team'},publisher:{'@type':'Organization','@id':'https://www.weglobalmarketing.com/#organization',name:'WE Marketing',alternateName:'WEM'},image:{'@type':'ImageObject',url:`${url.replace('/blog/'+slug,'')}/blog/hero-${slug}-en-v1.png`,width:1792,height:896},datePublished:date,dateModified:date,mainEntityOfPage:{'@type':'WebPage','@id':url},citation:citations,keywords:['TikTok Shop peak season shipping','TikTok Shop contribution margin','TikTok Shop LIVE shipping']},
 {'@type':'BlogPosting','@id':`${url}?lang=zh#article`,headline:zhTitle,description:zhDescription,inLanguage:'zh-CN',translationOfWork:{'@id':`${url}#article`},author:{'@id':'https://www.weglobalmarketing.com/#editorial-team'},publisher:{'@id':'https://www.weglobalmarketing.com/#organization'},image:{'@type':'ImageObject',url:`https://www.weglobalmarketing.com/blog/hero-${slug}-zh-v1.png`,width:1792,height:896},datePublished:date,dateModified:date,mainEntityOfPage:{'@type':'WebPage','@id':`${url}?lang=zh`},citation:citations},
 ...[[faqEn,'en-US',`${url}#faq`],[faqZh,'zh-CN',`${url}?lang=zh#faq`]].map(([items,lang,id])=>({'@type':'FAQPage','@id':id,inLanguage:lang,mainEntity:items.map(([name,text])=>({'@type':'Question',name,acceptedAnswer:{'@type':'Answer',text}}))})),
 {'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:'https://www.weglobalmarketing.com/'},{'@type':'ListItem',position:2,name:'Blog',item:'https://www.weglobalmarketing.com/blog'},{'@type':'ListItem',position:3,name:enTitle,item:url}]}
 ]};

const old=await fs.readFile(path.join(base,'blog/tiktok-shop-bfcm-price-claim-audit.html'),'utf8');
const style=old.match(/<style>[\s\S]*?<\/style>/)[0];
const html=`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><script>document.documentElement.dataset.lang=new URLSearchParams(location.search).get('lang')==='zh'?'zh':'en';document.documentElement.lang=document.documentElement.dataset.lang==='zh'?'zh-CN':'en'</script><title>${enTitle} | WE Marketing</title><meta name="description" content="${enDescription}"><link rel="canonical" href="${url}"><link rel="alternate" hreflang="en-US" href="${url}"><link rel="alternate" hreflang="zh-CN" href="${url}?lang=zh"><link rel="alternate" hreflang="x-default" href="${url}"><script type="application/ld+json">${JSON.stringify(graph)}</script>${style}</head><body><nav class="nav"><a class="logo" href="/"><img src="/assets/we-logo.png" alt="WE Marketing"></a><a href="/services">SERVICES</a><a href="/about">ABOUT</a><a href="/blog">BLOG</a><span class="spacer"></span><div class="switch"><a class="zh" href="?lang=zh">中文</a><a class="en" href="?">EN</a></div></nav><main class="wrap"><div class="tools"><a class="en" href="/blog">← BLOG</a><a class="zh" href="/blog?lang=zh">← 博客</a></div><article lang="en">${EN}</article><article lang="zh-CN">${ZH}</article></main><section class="cta"><h2 class="en">READY TO TALK<br>TO WEM?</h2><h2 class="zh">准备好和 WEM<br>一起把计划落地吗？</h2><p class="en">Turn shipping evidence into SKU-level contribution decisions before scale.</p><p class="zh">把运费证据变成 SKU 级毛利决策，再决定放量。</p><a class="en" href="https://scheduler.zoom.us/wendylin001">BOOK A DISCOVERY CALL</a><a class="zh" href="https://scheduler.zoom.us/wendylin001">预约咨询</a></section><footer class="footer"><img src="/assets/we-logo.png" alt="WE Marketing"><p class="en">WE Marketing connects strategy, creator operations, paid growth and TikTok Shop execution.</p><p class="zh">WE Marketing 帮助品牌连接策略、达人运营、付费增长与 TikTok Shop 执行。</p><p>© 2026 WE Marketing. All rights reserved.</p></footer><script>if(document.documentElement.dataset.lang==='zh'){document.title=${JSON.stringify(zhTitle+' | WE Marketing')};document.querySelector('meta[name=description]').content=${JSON.stringify(zhDescription)};document.querySelector('link[rel=canonical]').href='${url}?lang=zh'}</script></body></html>`;
await fs.writeFile(path.join(out,'blog',`${slug}.html`),html);

let list=await fs.readFile(path.join(base,'BlogList.jsx'),'utf8');
const row={slug,tags:['tiktok-shop','shop-operations','campaign-growth'],cat:{en:'TIKTOK SHOP U.S. · SHIPPING ECONOMICS',zh:'TIKTOK SHOP 美国站 · 运费经济模型'},title:{en:enTitle,zh:zhTitle},excerpt:{en:'Put current LIVE and non-LIVE shipping evidence into SKU contribution margin before scale.',zh:'把当前 LIVE 与非 LIVE 运费证据写进 SKU 毛利表，再决定是否放量。'},date:{en:'Oct 11, 2026',zh:'2026 年 10 月 11 日'},read:{en:'15 min read',zh:'15 分钟阅读'},image:{en:`hero-${slug}-en-v1.png`,zh:`hero-${slug}-zh-v1.png`}};
list=list.replace('const BLOG_POSTS = [',`const BLOG_POSTS = [${JSON.stringify(row).replace(/"([A-Za-z_$][\w$]*)":/g,'$1:')},`);
await fs.writeFile(path.join(out,'BlogList.jsx'),list);
const sandbox={};vm.createContext(sandbox);vm.runInContext(await fs.readFile(path.join(root,'.cache/babel-standalone-7.29.0.min.js'),'utf8'),sandbox);
const compiled=sandbox.Babel.transform(list,{presets:[['react',{runtime:'classic'}]],compact:true,minified:true,sourceType:'script'}).code+'\n';
await fs.writeFile(path.join(out,'BlogList.compiled.js'),compiled);
const version=sha(compiled).slice(0,12);
await fs.writeFile(path.join(out,'blog.html'),(await fs.readFile(path.join(base,'blog.html'),'utf8')).replace(/BlogList\.compiled\.js\?v=[^"']+/,`BlogList.compiled.js?v=${version}`));
await fs.writeFile(path.join(out,'sitemap.xml'),(await fs.readFile(path.join(base,'sitemap.xml'),'utf8')).replace('</urlset>',`<url><loc>${url}</loc><lastmod>${date}</lastmod></url><url><loc>${url}?lang=zh</loc><lastmod>${date}</lastmod></url></urlset>`));
await fs.writeFile(path.join(out,'llms.txt'),(await fs.readFile(path.join(base,'llms.txt'),'utf8'))+`\n- ${enTitle}: ${url}\n  - 中文：${url}?lang=zh\n`);

if(EN.includes('—')||ZH.includes('—')) throw new Error('em dash found');
console.log(JSON.stringify({out,version,enWords:EN.replace(/<[^>]+>/g,' ').trim().split(/\s+/).length,zhChars:ZH.replace(/<[^>]+>/g,'').replace(/\s/g,'').length,files:(await fs.readdir(out,{recursive:true})).filter(Boolean).length}));
