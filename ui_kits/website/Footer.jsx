// Footer.jsx, dark
const Footer = ({ lang, basePath = '' }) => {
  const b = basePath;
  const home = b || '/';
  const linkedIn = (
    <a href="https://www.linkedin.com/company/we-marketingtsp" target="_blank" rel="noopener" aria-label="WE Marketing LinkedIn" style={fStyles.socialLink}>
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" style={{ display: 'block' }}>
        <path fill="currentColor" d="M6.94 8.98H3.72V20h3.22V8.98ZM5.33 7.47c1.03 0 1.86-.84 1.86-1.86S6.36 3.75 5.33 3.75s-1.86.84-1.86 1.86.83 1.86 1.86 1.86ZM20.53 13.72c0-3.02-1.61-4.43-3.76-4.43-1.73 0-2.51.95-2.94 1.62V8.98h-3.09c.04 1.03 0 11.02 0 11.02h3.22v-6.16c0-.33.02-.66.12-.89.26-.66.85-1.34 1.84-1.34 1.3 0 1.82 1.01 1.82 2.48V20h3.22v-6.28h-.43Z"/>
      </svg>
    </a>
  );
  const t = {
    en: {
      tag: 'WE Marketing is a U.S. TikTok Shop Partner Agency helping brands scale through creator affiliates, UGC content, live selling, and shop operations.',
      rights: '© 2026 WE Marketing · All rights reserved',
      cols: [
        ['Services', [['Full Service', b + 'services#full-service-management'], ['Cold Start', b + 'services#cold-start'], ['Consulting', b + 'services#consulting'], ['Creator Affiliate', b + 'services#affiliate-management'], ['UGC Content', b + 'services#ugc-content'], ['Creator Matchmaking', b + 'services#creator-matchmaking'], ['Creator Live Selling', b + 'services#creator-live'], ['Short Video Support', b + 'services#content-performance']]],
        ['Company', [['About', b + 'about'], ['Our Work', b + 'showcase'], ['Blog', b + 'blog'], ['Contact', home + '#Contact']]],
        ['Contact', [['wendy@weglobalmarketing.com','mailto:wendy@weglobalmarketing.com'], ['(626) 600-0360','tel:+16266000360']]],
      ],
    },
    zh: {
      tag: 'WE Marketing 是位于南加州的美国 TikTok Shop 代运营与增长机构，服务跨境品牌、Amazon 卖家和在美华人品牌团队。',
      rights: '© 2026 WE Marketing · 版权所有',
      cols: [
        ['服务', [['全案代运营', b + 'services#full-service-management'], ['美国冷启动', b + 'services#cold-start'], ['策略咨询', b + 'services#consulting'], ['达人联盟', b + 'services#affiliate-management'], ['UGC 内容', b + 'services#ugc-content'], ['达人匹配', b + 'services#creator-matchmaking'], ['达人直播带货', b + 'services#creator-live'], ['短视频优化', b + 'services#content-performance']]],
        ['公司', [['关于', b + 'about'], ['案例', b + 'showcase'], ['博客', b + 'blog'], ['联系', home + '#Contact']]],
        ['联系方式', [['wendy@weglobalmarketing.com','mailto:wendy@weglobalmarketing.com'], ['(626) 600-0360','tel:+16266000360']]],
      ],
    },
  }[lang];
  return (
    <footer style={fStyles.wrap}>
      <div style={fStyles.inner}>
        <div style={fStyles.top}>
          <div>
            <img src={(basePath ? '../' : '') + '../../assets/we-logo-white.png'} alt="WE" style={{ height: 44 }}/>
            <p style={fStyles.tag}>{t.tag}</p>
          </div>
          <div style={fStyles.cols}>
            {t.cols.map(([title, items], i) => (
              <div key={i}>
                <div style={fStyles.colTitle}>{title}</div>
                {items.map(([label, href], j) => <a key={j} href={href} style={fStyles.link}>{label}</a>)}
                {i === 2 && <div style={fStyles.socialUnderContact}>{linkedIn}</div>}
              </div>
            ))}
          </div>
        </div>
        <div style={fStyles.bottom}>
          <div>{t.rights}</div>
        </div>
      </div>
    </footer>
  );
};
const fStyles = {
  wrap: { background: '#000', color: '#fff', padding: '72px 0 32px', borderTop: '1px solid rgba(255,255,255,.08)' },
  inner: { maxWidth: 1280, margin: '0 auto', padding: '0 32px' },
  top: { display: 'grid', gridTemplateColumns: '1.2fr 2fr', gap: 64 },
  tag: { fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,.6)', marginTop: 20, maxWidth: 320 },
  cols: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 },
  colTitle: { fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 12, letterSpacing: '.12em', textTransform: 'uppercase', color: '#fff', marginBottom: 18 },
  link: { fontFamily: 'var(--font-sans)', fontSize: 14, color: 'rgba(255,255,255,.6)', marginBottom: 10, cursor: 'pointer', lineHeight: 1.5, textDecoration: 'none', display: 'block' },
  bottom: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 64, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,.08)', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.05em', color: 'rgba(255,255,255,.4)' },
  socialUnderContact: { marginTop: 16 },
  socialLink: { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: 999, color: '#fff', background: '#0A66C2', border: '1px solid rgba(255,255,255,.18)', textDecoration: 'none', boxShadow: '0 10px 30px rgba(10,102,194,.28)' },
};
window.Footer = Footer;
