import fs from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const baseline = path.join(root, 'outputs/2026-10-27-corrected-live-baseline');
const patch = path.join(root, 'outputs/patches/2026-10-27-q4-30-creator-runway-current-repair');
const continuity = path.join(root, 'outputs/patches/2026-10-25-q4-29-current-repair');

await fs.rm(patch, { recursive: true, force: true });

const shared = ['BlogList.jsx', 'BlogList.compiled.js', 'blog.html', 'llms.txt', 'sitemap.xml', 'vercel.json'];
for (const relative of shared) {
  const source = path.join(baseline, relative);
  const destination = path.join(patch, relative);
  await fs.mkdir(path.dirname(destination), { recursive: true });
  await fs.copyFile(source, destination);
}

const continuityFiles = [
  '.wem-delete-paths',
  'vercel.json',
  'blog/tiktok-shop-shipping-protection-insurance-evidence.html',
  'blog/q4-29-shipping-protection/claim-closeout-en-v1.svg',
  'blog/q4-29-shipping-protection/claim-closeout-zh-v1.svg',
  'blog/tiktok-shop-bfcm-virtual-bundles-inventory-returns.html',
];
for (const relative of continuityFiles) {
  const source = path.join(continuity, relative);
  for (const destinationRoot of [patch, baseline]) {
    const destination = path.join(destinationRoot, relative);
    await fs.mkdir(path.dirname(destination), { recursive: true });
    await fs.copyFile(source, destination);
  }
}
const baselineContinuityFiles = [
  'blog/q4-28-virtual-bundles/offer-return-chain-en-v1.svg',
  'blog/q4-28-virtual-bundles/offer-return-chain-zh-v1.svg',
];
for (const relative of baselineContinuityFiles) {
  const source = path.join(baseline, relative);
  const destination = path.join(patch, relative);
  await fs.mkdir(path.dirname(destination), { recursive: true });
  await fs.copyFile(source, destination);
}

const svgs = {
  'blog/q4-30-cancellation-control/owner-readback-en-v1.svg': `<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="520"><rect width="100%" height="100%" fill="#f5f3ff"/><text x="60" y="78" font-family="Arial, PingFang SC, sans-serif" font-size="38" font-weight="800" fill="#18275e">ONE CASE, THREE OWNERS, ONE FINAL READBACK</text><rect x="45" y="180" width="245" height="145" rx="22" fill="#fff" stroke="#8899e8"/><text x="64" y="245" font-family="Arial, PingFang SC, sans-serif" font-size="19" font-weight="700" fill="#18275e">SUPPORT</text><text x="64" y="280" font-family="Arial, PingFang SC, sans-serif" font-size="16" fill="#303957">Intake + buyer update</text><rect x="345" y="180" width="245" height="145" rx="22" fill="#fff" stroke="#8899e8"/><text x="364" y="245" font-family="Arial, PingFang SC, sans-serif" font-size="19" font-weight="700" fill="#18275e">FULFILLMENT</text><text x="364" y="280" font-family="Arial, PingFang SC, sans-serif" font-size="16" fill="#303957">Pick + pack + handoff</text><rect x="645" y="180" width="245" height="145" rx="22" fill="#fff" stroke="#8899e8"/><text x="664" y="245" font-family="Arial, PingFang SC, sans-serif" font-size="19" font-weight="700" fill="#18275e">CASE OWNER</text><text x="664" y="280" font-family="Arial, PingFang SC, sans-serif" font-size="16" fill="#303957">Action + final status</text><rect x="945" y="180" width="245" height="145" rx="22" fill="#fff" stroke="#8899e8"/><text x="964" y="245" font-family="Arial, PingFang SC, sans-serif" font-size="19" font-weight="700" fill="#18275e">RECONCILE</text><text x="964" y="280" font-family="Arial, PingFang SC, sans-serif" font-size="16" fill="#303957">Refund + settlement</text><text x="60" y="425" font-family="Arial, PingFang SC, sans-serif" font-size="24" fill="#303957">Close only after the platform result and the required evidence are visible.</text></svg>`,
  'blog/q4-30-cancellation-control/owner-readback-zh-v1.svg': `<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="520"><rect width="100%" height="100%" fill="#f5f3ff"/><text x="60" y="78" font-family="Arial, PingFang SC, sans-serif" font-size="38" font-weight="800" fill="#18275e">一个案件，三类负责人，一个终态读回</text><rect x="45" y="180" width="245" height="145" rx="22" fill="#fff" stroke="#8899e8"/><text x="64" y="245" font-family="Arial, PingFang SC, sans-serif" font-size="19" font-weight="700" fill="#18275e">客服</text><text x="64" y="280" font-family="Arial, PingFang SC, sans-serif" font-size="16" fill="#303957">受理 + 买家更新</text><rect x="345" y="180" width="245" height="145" rx="22" fill="#fff" stroke="#8899e8"/><text x="364" y="245" font-family="Arial, PingFang SC, sans-serif" font-size="19" font-weight="700" fill="#18275e">履约</text><text x="364" y="280" font-family="Arial, PingFang SC, sans-serif" font-size="16" fill="#303957">拣货 + 打包 + 交接</text><rect x="645" y="180" width="245" height="145" rx="22" fill="#fff" stroke="#8899e8"/><text x="664" y="245" font-family="Arial, PingFang SC, sans-serif" font-size="19" font-weight="700" fill="#18275e">案件负责人</text><text x="664" y="280" font-family="Arial, PingFang SC, sans-serif" font-size="16" fill="#303957">操作 + 终态</text><rect x="945" y="180" width="245" height="145" rx="22" fill="#fff" stroke="#8899e8"/><text x="964" y="245" font-family="Arial, PingFang SC, sans-serif" font-size="19" font-weight="700" fill="#18275e">对账</text><text x="964" y="280" font-family="Arial, PingFang SC, sans-serif" font-size="16" fill="#303957">退款 + 结算</text><text x="60" y="425" font-family="Arial, PingFang SC, sans-serif" font-size="24" fill="#303957">只有平台结果和所需证据都可见，案件才算关闭。</text></svg>`,
  'blog/tiktok-shop-bfcm-2026-creator-content-runway/release-gate-en-v1.svg': `<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="520"><rect width="100%" height="100%" fill="#f5f3ff"/><text x="60" y="78" font-family="Arial, PingFang SC, sans-serif" font-size="38" font-weight="800" fill="#18275e">RELEASE SUPPORT ONLY AFTER A USEFUL SIGNAL</text><rect x="45" y="180" width="245" height="145" rx="22" fill="#fff" stroke="#8899e8"/><text x="64" y="245" font-family="Arial, PingFang SC, sans-serif" font-size="19" font-weight="700" fill="#18275e">CONTENT LIVE</text><text x="64" y="280" font-family="Arial, PingFang SC, sans-serif" font-size="16" fill="#303957">Accurate product story</text><rect x="345" y="180" width="245" height="145" rx="22" fill="#fff" stroke="#8899e8"/><text x="364" y="245" font-family="Arial, PingFang SC, sans-serif" font-size="19" font-weight="700" fill="#18275e">BUYER SIGNAL</text><text x="364" y="280" font-family="Arial, PingFang SC, sans-serif" font-size="16" fill="#303957">Questions + product interest</text><rect x="645" y="180" width="245" height="145" rx="22" fill="#fff" stroke="#8899e8"/><text x="664" y="245" font-family="Arial, PingFang SC, sans-serif" font-size="19" font-weight="700" fill="#18275e">ECONOMICS</text><text x="664" y="280" font-family="Arial, PingFang SC, sans-serif" font-size="16" fill="#303957">Orders + margin context</text><rect x="945" y="180" width="245" height="145" rx="22" fill="#fff" stroke="#8899e8"/><text x="964" y="245" font-family="Arial, PingFang SC, sans-serif" font-size="19" font-weight="700" fill="#18275e">NEXT TEST</text><text x="964" y="280" font-family="Arial, PingFang SC, sans-serif" font-size="16" fill="#303957">Repeat or amplify</text><text x="60" y="425" font-family="Arial, PingFang SC, sans-serif" font-size="24" fill="#303957">Keep enough budget and time for the decision after the first content arrives.</text></svg>`,
  'blog/tiktok-shop-bfcm-2026-creator-content-runway/release-gate-zh-v1.svg': `<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="520"><rect width="100%" height="100%" fill="#f5f3ff"/><text x="60" y="78" font-family="Arial, PingFang SC, sans-serif" font-size="38" font-weight="800" fill="#18275e">出现有效信号，再释放下一轮支持</text><rect x="45" y="180" width="245" height="145" rx="22" fill="#fff" stroke="#8899e8"/><text x="64" y="245" font-family="Arial, PingFang SC, sans-serif" font-size="19" font-weight="700" fill="#18275e">内容上线</text><text x="64" y="280" font-family="Arial, PingFang SC, sans-serif" font-size="16" fill="#303957">商品信息准确</text><rect x="345" y="180" width="245" height="145" rx="22" fill="#fff" stroke="#8899e8"/><text x="364" y="245" font-family="Arial, PingFang SC, sans-serif" font-size="19" font-weight="700" fill="#18275e">买家信号</text><text x="364" y="280" font-family="Arial, PingFang SC, sans-serif" font-size="16" fill="#303957">问题 + 商品兴趣</text><rect x="645" y="180" width="245" height="145" rx="22" fill="#fff" stroke="#8899e8"/><text x="664" y="245" font-family="Arial, PingFang SC, sans-serif" font-size="19" font-weight="700" fill="#18275e">商品经济</text><text x="664" y="280" font-family="Arial, PingFang SC, sans-serif" font-size="16" fill="#303957">订单 + 毛利背景</text><rect x="945" y="180" width="245" height="145" rx="22" fill="#fff" stroke="#8899e8"/><text x="964" y="245" font-family="Arial, PingFang SC, sans-serif" font-size="19" font-weight="700" fill="#18275e">下一轮测试</text><text x="964" y="280" font-family="Arial, PingFang SC, sans-serif" font-size="16" fill="#303957">复投或放大</text><text x="60" y="425" font-family="Arial, PingFang SC, sans-serif" font-size="24" fill="#303957">为第一批内容到达后的判断，保留预算和时间。</text></svg>`,
};

for (const [relative, contents] of Object.entries(svgs)) {
  const destination = path.join(patch, relative);
  await fs.mkdir(path.dirname(destination), { recursive: true });
  await fs.writeFile(destination, contents);
}

const repairs = [
  {
    relative: 'blog/tiktok-shop-order-cancellation-control.html',
    replacements: [
      [
        '<p>The map prevents the two recurring mistakes: support cancelling something already moving, and a warehouse continuing to ship something that has reached a terminal cancellation result. Each handoff must state who is responsible, what evidence is required and when the case returns for review.</p>',
        '<p>The map prevents the two recurring mistakes: support cancelling something already moving, and a warehouse continuing to ship something that has reached a terminal cancellation result. Each handoff must state who is responsible, what evidence is required and when the case returns for review. Keep the same owner visible until the terminal readback is captured, even when another team supplies a missing fact.</p><img src="/blog/q4-30-cancellation-control/owner-readback-en-v1.svg" alt="Order cancellation owner and final readback map">',
      ],
      [
        '<p>这张地图防止两个常见错误：客服取消已经在移动的订单，或仓库继续发出已经达到终态取消结果的订单。每次交接都必须写清负责人、所需证据和复查时间。</p>',
        '<p>这张地图防止两个常见错误：客服取消已经在移动的订单，或仓库继续发出已经达到终态取消结果的订单。每次交接都必须写清负责人、所需证据和复查时间。即使另一团队正在补充事实，也要让同一案件负责人持续可见，直到终态读回被记录。</p><img src="/blog/q4-30-cancellation-control/owner-readback-zh-v1.svg" alt="订单取消负责人和终态读回图">',
      ],
      ['Turn promotion reporting into an evidence-led growth decision.', 'Bring one live cancellation queue, its oldest unresolved state, and the missing handoff. We will map the next auditable control.'],
      ['把促销报表变成有证据、可复核的增长决定。', '带上一个真实取消队列、最早的未解决状态和缺失的交接，我们一起确定下一道可审计控制。'],
    ],
  },
  {
    relative: 'blog/tiktok-shop-bfcm-2026-creator-content-runway.html',
    replacements: [
      [
        '<p>Permission to use creator content also needs to be clear. Commission and content usage are separate commercial questions. Confirm the applicable rights before putting an asset into paid use. Do not assume the first collaboration covers every later channel or duration.</p>',
        '<p>Permission to use creator content also needs to be clear. Commission and content usage are separate commercial questions. Confirm the applicable rights before putting an asset into paid use. Do not assume the first collaboration covers every later channel or duration.</p><img src="/blog/tiktok-shop-bfcm-2026-creator-content-runway/release-gate-en-v1.svg" alt="Creator content support release gate">',
      ],
      [
        '<p>同时，把内容使用权限谈清楚。达人佣金和视频使用权是两个商业问题。进入付费投放前，先确认具体授权范围，不能默认第一段合作涵盖所有渠道和时长。</p>',
        '<p>同时，把内容使用权限谈清楚。达人佣金和视频使用权是两个商业问题。进入付费投放前，先确认具体授权范围，不能默认第一段合作涵盖所有渠道和时长。</p><img src="/blog/tiktok-shop-bfcm-2026-creator-content-runway/release-gate-zh-v1.svg" alt="达人内容支持释放门槛">',
      ],
      ['Turn promotion reporting into an evidence-led growth decision.', 'Bring one hero SKU, the current creator pipeline, and the first content signals. We will identify the next useful test.'],
      ['把促销报表变成有证据、可复核的增长决定。', '带上一个主推 SKU、当前达人流程和第一批内容信号，我们一起找出下一项有效测试。'],
    ],
  },
];

for (const repair of repairs) {
  const source = path.join(baseline, repair.relative);
  let html = await fs.readFile(source, 'utf8');
  for (const [before, after] of repair.replacements) {
    if (!html.includes(before)) throw new Error(`missing replacement anchor in ${repair.relative}: ${before.slice(0, 80)}`);
    html = html.replace(before, after);
  }
  for (const destinationRoot of [patch, baseline]) {
    const destination = path.join(destinationRoot, repair.relative);
    await fs.mkdir(path.dirname(destination), { recursive: true });
    await fs.writeFile(destination, html);
  }
}

for (const [relative, contents] of Object.entries(svgs)) {
  const destination = path.join(baseline, relative);
  await fs.mkdir(path.dirname(destination), { recursive: true });
  await fs.writeFile(destination, contents);
}

console.log(JSON.stringify({ patch, files: shared.length + Object.keys(svgs).length + repairs.length + continuityFiles.length + baselineContinuityFiles.length - 1 }, null, 2));
