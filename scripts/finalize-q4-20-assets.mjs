import fs from 'node:fs/promises';
import path from 'node:path';

const root=path.resolve(import.meta.dirname,'..');
const out=path.join(root,'outputs/patches/2026-10-16-q4-20-holiday-returns');
const slug='tiktok-shop-bfcm-2026-holiday-returns-liability';
const url=`https://www.weglobalmarketing.com/blog/${slug}`;
for (const lang of ['en','zh']) {
  const zh=lang==='zh';
  const lanes=zh
    ? [['常规','规则明确、证据完整','按文件化规则处理'],['例外','类目、订单类型或资格不清','转人工核对订单'],['升级','高价值、争议或损坏','指定 Owner 审核证据']]
    : [['ROUTINE','Rule and evidence are clear','Apply the documented rule'],['EXCEPTION','Category, order type or eligibility unclear','Route to order review'],['ESCALATE','High-value, disputed or damaged','Named owner reviews evidence']];
  const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="1300" height="690"><rect width="100%" height="100%" fill="#f7f5ff"/><text x="72" y="82" font-family="Arial" font-size="42" font-weight="700" fill="#18275e">${zh?'退货申请决策闸门':'RETURN REQUEST DECISION GATE'}</text>${lanes.map((r,i)=>{const x=70+i*395;return `<rect x="${x}" y="145" width="360" height="420" rx="28" fill="${i===1?'#e9e5ff':'#fff'}"/><circle cx="${x+58}" cy="205" r="24" fill="#ff2a9d"/><text x="${x+98}" y="216" font-family="Arial" font-size="25" font-weight="700" fill="#3148aa">${r[0]}</text><text x="${x+34}" y="300" font-family="Arial" font-size="22" fill="#283653">${r[1]}</text><path d="M${x+34} 350h292" stroke="#d4cef5" stroke-width="4"/><text x="${x+34}" y="420" font-family="Arial" font-size="22" font-weight="700" fill="#18275e">${r[2]}</text>`}).join('')}<text x="72" y="625" font-family="Arial" font-size="23" fill="#52618a">${zh?'每一步都记录理由、证据、Owner 与下一截止时间':'Record the reason, evidence, owner and next deadline in every lane'}</text></svg>`;
  await fs.writeFile(path.join(out,'blog/q4-20-returns',`decision-${lang}-v1.svg`),svg);
}
const articlePath=path.join(out,'blog',slug+'.html');
let html=await fs.readFile(articlePath,'utf8');
html=html.replace('<h2>Build a SKU-level liability calendar</h2>','<img src="/blog/q4-20-returns/decision-en-v1.svg" alt="BFCM return decision ledger"><h2>Build a SKU-level liability calendar</h2>');
html=html.replace('<h2>建立 SKU 级责任日历</h2>','<img src="/blog/q4-20-returns/decision-zh-v1.svg" alt="BFCM 退货决策台账"><h2>建立 SKU 级责任日历</h2>');
html=html.replace('</head>',`<script>if(new URLSearchParams(location.search).get('lang')==='zh'){document.title='TikTok Shop 2026 BFCM 节日退货：11 月 11 日前先把责任算清楚 | WE Marketing';document.querySelector('meta[name=description]').content='用资格、类目例外、准备金字段、库存处置和售后审核建立 BFCM 退货责任系统。';document.querySelector('link[rel=canonical]').href='${url}?lang=zh'}</script></head>`);
await fs.writeFile(articlePath,html);
