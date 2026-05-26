// Footer.jsx, dark
const Footer = ({ lang, basePath = '' }) => {
  const b = basePath;
  const t = {
    en: {
      cols: [
        ['Services', [['Coldstart', b + 'index.html#Services'], ['Affiliate', b + 'affiliate.html'], ['Short Video', b + 'index.html#Services'], ['Live', b + 'index.html#Services'], ['Creator Matchmaking', b + 'index.html#Services'], ['Shop Mgmt', b + 'index.html#Services']]],
        ['Company', [['About', b + 'about.html'], ['Our Work', b + 'showcase.html'], ['Blog', b + 'blog.html'], ['Contact', b + 'index.html#Contact']]],
        ['Contact', [['wendy@weglobalmarketing.com','mailto:wendy@weglobalmarketing.com'], ['(626) 600-0360','tel:+16266000360']]],
      ],
    },
    zh: {
      cols: [
        ['服务', [['冷启动', b + 'index.html#Services'], ['联盟分销', b + 'affiliate.html'], ['短视频', b + 'index.html#Services'], ['直播', b + 'index.html#Services'], ['达人匹配', b + 'index.html#Services'], ['店铺代运营', b + 'index.html#Services']]],
        ['公司', [['关于', b + 'about.html'], ['案例', b + 'showcase.html'], ['博客', b + 'blog.html'], ['联系', b + 'index.html#Contact']]],
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
            <p style={fStyles.tag}>{lang === 'zh' ? 'WE Marketing 是经过认证的 TikTok Shop 代理机构，帮助美国各地的品牌通过达人驱动的电商扩大规模。' : 'WE Marketing is a certified TikTok Shop agency helping brands across the U.S. scale through creator-driven commerce.'}</p>
          </div>
          <div style={fStyles.cols}>
            {t.cols.map(([title, items], i) => (
              <div key={i}>
                <div style={fStyles.colTitle}>{title}</div>
                {items.map(([label, href], j) => <a key={j} href={href} style={fStyles.link}>{label}</a>)}
              </div>
            ))}
          </div>
        </div>
        <div style={fStyles.bottom}>
          <div>© 2026 WE Marketing · All rights reserved</div>
          <div style={{ display: 'flex', gap: 16 }}>
            <i data-lucide="instagram" style={{ width: 18, height: 18 }}/>
            <i data-lucide="youtube" style={{ width: 18, height: 18 }}/>
            <i data-lucide="linkedin" style={{ width: 18, height: 18 }}/>
          </div>
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
};
window.Footer = Footer;
