// BlogPost.jsx, shared layout for individual blog posts (dark)
// content props: { meta:{title,desc,cat,date,read,author}, sections:[{id,h,body:[{kind,...}]}], faqs:[{q,a}], related:[{label,href}] }
// body kinds:
//   - { kind:'p', text }
//   - { kind:'list', items, ordered? }
//   - { kind:'h3', text }
//   - { kind:'table', headers, rows }
//   - { kind:'cta', label, href }
//   - { kind:'callout', text }
//   - { kind:'sub', text }   // sub-heading lighter than h3
const BlogPost = ({ meta, sections, faqs, related, labels }) => {
  const ui = {
    back: 'Blog',
    toc: 'On this page',
    faq: 'Frequently asked questions',
    related: 'Related guides',
    ...(labels || {}),
  };
  const [openFaq, setOpenFaq] = React.useState(null);
  const [activeSection, setActiveSection] = React.useState(sections[0]?.id);
  React.useEffect(() => {
    const onScroll = () => {
      const ys = sections.map(s => {
        const el = document.getElementById(s.id);
        return { id: s.id, y: el ? el.getBoundingClientRect().top : 9999 };
      }).filter(x => x.y < 200).sort((a,b) => b.y - a.y);
      if (ys[0]) setActiveSection(ys[0].id);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [sections]);

  const renderBlock = (b, i) => {
    if (b.kind === 'p') return <p key={i} style={bpStyles.p}>{b.text}</p>;
    if (b.kind === 'h3') return <h3 key={i} style={bpStyles.h3}>{b.text}</h3>;
    if (b.kind === 'sub') return <div key={i} style={bpStyles.sub}>{b.text}</div>;
    if (b.kind === 'callout') return <div key={i} style={bpStyles.callout}>{b.text}</div>;
    if (b.kind === 'list') {
      const Tag = b.ordered ? 'ol' : 'ul';
      return <Tag key={i} style={bpStyles.list}>{b.items.map((it, j) => <li key={j} style={bpStyles.li}>{it}</li>)}</Tag>;
    }
    if (b.kind === 'table') {
      return (
        <div key={i} style={bpStyles.tableWrap}>
          <table style={bpStyles.table}>
            <thead><tr>{b.headers.map((h, j) => <th key={j} style={bpStyles.th}>{h}</th>)}</tr></thead>
            <tbody>
              {b.rows.map((r, j) => (
                <tr key={j} style={{ background: j % 2 ? 'rgba(255,255,255,.02)' : 'transparent' }}>
                  {r.map((c, k) => <td key={k} style={bpStyles.td}>{c}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    if (b.kind === 'cta') {
      const isBook = /book/i.test(b.label || '') || /discovery/i.test(b.label || '');
      const href = isBook ? 'https://zus03h0enw04.sg.larksuite.com/scheduler/03970278dd9a7925' : b.href;
      return <a key={i} href={href} target={isBook ? '_blank' : undefined} rel={isBook ? 'noopener' : undefined} style={bpStyles.ctaBtn}>{b.label}</a>;
    }
    if (b.kind === 'infographic') {
      if (b.src) {
        return (
          <figure key={i} style={bpStyles.infoWrap}>
            <img src={b.src} alt={b.alt || ''} style={bpStyles.infoImg}/>
            {b.caption && <figcaption style={bpStyles.infoCap}>{b.caption}</figcaption>}
          </figure>
        );
      }
      return (
        <div key={i} style={bpStyles.infoPlaceholder}>
          <span style={bpStyles.infoLabel}>[DATA GRAPHIC]</span>
          <span style={bpStyles.infoTitle}>{b.title || 'Pending upload'}</span>
        </div>
      );
    }
    return null;
  };

  return (
    <article style={bpStyles.wrap}>
      <div style={bpStyles.orb}/>
      <header style={bpStyles.header}>
        <div style={bpStyles.headerInner}>
          <a href="../blog.html" style={bpStyles.back}>
            <i data-lucide="arrow-left" style={{ width: 14, height: 14 }}/> {ui.back}
          </a>
          <div style={bpStyles.cat}>{meta.cat}</div>
          <h1 style={bpStyles.h1}>{meta.title}</h1>
          <div style={bpStyles.metaRow}>
            <span>{meta.author}</span>
            <span style={bpStyles.dot}>·</span>
            <span>{meta.date}</span>
            <span style={bpStyles.dot}>·</span>
            <span>{meta.read}</span>
          </div>
          {meta.heroImage && (
            <div style={bpStyles.heroWrap}>
              <img src={meta.heroImage} alt={meta.heroAlt || meta.title} style={bpStyles.heroImg}/>
            </div>
          )}
        </div>
      </header>

      <div style={bpStyles.body}>
        <aside style={bpStyles.toc}>
          <div style={bpStyles.tocLabel}>{ui.toc}</div>
          <nav style={bpStyles.tocNav}>
            {sections.map(s => (
              <a key={s.id} href={`#${s.id}`} style={{ ...bpStyles.tocLink, ...(activeSection === s.id ? bpStyles.tocLinkActive : {}) }}>
                {s.h}
              </a>
            ))}
            <a href="#faq" style={bpStyles.tocLink}>{ui.faq}</a>
          </nav>
        </aside>

        <div style={bpStyles.col}>
          {sections.map(s => (
            <section key={s.id} id={s.id} style={bpStyles.section}>
              <h2 style={bpStyles.h2}>{s.h}</h2>
              {s.body.map(renderBlock)}
            </section>
          ))}

          <section id="faq" style={bpStyles.section}>
            <h2 style={bpStyles.h2}>{ui.faq}</h2>
            <div style={bpStyles.faqList}>
              {faqs.map((f, i) => (
                <div key={i} style={bpStyles.faqItem}>
                  <button style={bpStyles.faqQ} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    <span>{f.q}</span>
                    <i data-lucide={openFaq === i ? 'minus' : 'plus'} style={{ width: 18, height: 18, color: '#FF1493' }}/>
                  </button>
                  {openFaq === i && <div style={bpStyles.faqA}>{f.a}</div>}
                </div>
              ))}
            </div>
          </section>

          {related && related.length > 0 && (
            <section style={bpStyles.section}>
              <h2 style={bpStyles.h2}>{ui.related}</h2>
              <div style={bpStyles.relatedList}>
                {related.map((r, i) => (
                  <a key={i} href={r.href} style={bpStyles.relatedLink}>
                    {r.label} <i data-lucide="arrow-right" style={{ width: 14, height: 14 }}/>
                  </a>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </article>
  );
};

const bpStyles = {
  wrap: { position: 'relative', background: '#000', color: '#fff', overflow: 'hidden' },
  orb: { position: 'absolute', top: -240, left: '50%', transform: 'translateX(-50%)', width: 900, height: 600, background: 'radial-gradient(ellipse, #FF1493 0%, transparent 60%)', filter: 'blur(90px)', opacity: .18, pointerEvents: 'none' },
  header: { position: 'relative', borderBottom: '1px solid rgba(255,255,255,.08)', padding: '60px 0 56px' },
  headerInner: { maxWidth: 920, margin: '0 auto', padding: '0 32px' },
  back: { display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,.55)', textDecoration: 'none', marginBottom: 32 },
  cat: { fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase', color: '#FF1493', marginBottom: 22 },
  h1: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(40px, 5.4vw, 76px)', lineHeight: 1.0, letterSpacing: '-.01em', textTransform: 'uppercase', margin: 0, color: '#fff' },
  metaRow: { display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.55)', marginTop: 28 },
  heroWrap: { marginTop: 44, borderRadius: 18, overflow: 'hidden', border: '1px solid rgba(255,255,255,.1)', boxShadow: '0 0 0 1px rgba(255,20,147,.12), 0 20px 60px rgba(0,0,0,.5)' },
  heroImg: { width: '100%', height: 'auto', display: 'block' },
  dot: { opacity: .5 },
  body: { position: 'relative', maxWidth: 1180, margin: '0 auto', padding: '64px 32px 100px', display: 'grid', gridTemplateColumns: '220px 1fr', gap: 64, alignItems: 'flex-start' },
  toc: { position: 'sticky', top: 100, alignSelf: 'flex-start' },
  tocLabel: { fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,.5)', marginBottom: 16, paddingBottom: 14, borderBottom: '1px solid rgba(255,255,255,.1)' },
  tocNav: { display: 'flex', flexDirection: 'column', gap: 12 },
  tocLink: { fontFamily: 'var(--font-sans)', fontSize: 13, lineHeight: 1.4, color: 'rgba(255,255,255,.55)', textDecoration: 'none', borderLeft: '2px solid transparent', paddingLeft: 12, transition: 'color .2s, border-color .2s' },
  tocLinkActive: { color: '#FF1493', borderLeftColor: '#FF1493' },
  col: { maxWidth: 760, fontFamily: 'var(--font-sans)' },
  section: { marginBottom: 56, scrollMarginTop: 100 },
  h2: { fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(28px, 3vw, 40px)', lineHeight: 1.1, letterSpacing: '-.005em', textTransform: 'uppercase', margin: '0 0 24px', color: '#fff' },
  h3: { fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, lineHeight: 1.25, textTransform: 'uppercase', letterSpacing: '.01em', margin: '32px 0 12px', color: '#FF1493' },
  sub: { fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,.55)', margin: '24px 0 8px' },
  p: { fontFamily: 'var(--font-sans)', fontSize: 17, lineHeight: 1.7, color: 'rgba(255,255,255,.82)', margin: '0 0 18px' },
  list: { fontFamily: 'var(--font-sans)', fontSize: 17, lineHeight: 1.65, color: 'rgba(255,255,255,.82)', margin: '0 0 18px', paddingLeft: 24 },
  li: { margin: '0 0 8px' },
  callout: { borderLeft: '3px solid #FF1493', padding: '14px 22px', background: 'rgba(255,20,147,.06)', borderRadius: '0 12px 12px 0', fontFamily: 'var(--font-sans)', fontSize: 17, lineHeight: 1.6, color: '#fff', margin: '24px 0' },
  tableWrap: {
    overflowX: 'auto',
    margin: '28px 0 34px',
    border: '1px solid rgba(255,20,147,.22)',
    borderRadius: 16,
    background: 'radial-gradient(circle at 16% 0%, rgba(255,20,147,.13), transparent 34%), radial-gradient(circle at 88% 12%, rgba(0,229,255,.08), transparent 32%), linear-gradient(135deg, rgba(255,255,255,.045), rgba(255,255,255,.01))',
    boxShadow: '0 0 0 1px rgba(255,255,255,.035), 0 24px 70px rgba(0,0,0,.38)',
    padding: 1,
  },
  table: { width: '100%', borderCollapse: 'separate', borderSpacing: 0, fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.5, color: 'rgba(255,255,255,.82)', background: 'rgba(2,2,2,.72)', borderRadius: 15, overflow: 'hidden' },
  th: { fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: '#FF1493', textAlign: 'left', padding: '16px 18px', borderBottom: '1px solid rgba(255,255,255,.12)', background: 'linear-gradient(90deg, rgba(255,20,147,.13), rgba(155,48,255,.08), rgba(0,229,255,.04))' },
  td: { padding: '16px 18px', borderBottom: '1px solid rgba(255,255,255,.07)', verticalAlign: 'top' },
  ctaBtn: { display: 'inline-block', background: 'linear-gradient(90deg,#FF1493,#9B30FF)', color: '#fff', padding: '16px 30px', borderRadius: 999, fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 15, letterSpacing: '.04em', textTransform: 'uppercase', textDecoration: 'none', margin: '12px 0 8px' },
  infoWrap: { margin: '32px 0', borderRadius: 14, overflow: 'hidden', border: '1px solid rgba(255,255,255,.12)', background: '#0A0A0A' },
  infoImg: { width: '100%', height: 'auto', display: 'block' },
  infoCap: { fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,.55)', padding: '14px 18px', borderTop: '1px solid rgba(255,255,255,.08)' },
  infoPlaceholder: { margin: '32px 0', padding: '40px 32px', borderRadius: 14, border: '1px dashed rgba(255,20,147,.4)', background: 'rgba(255,20,147,.04)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 },
  infoLabel: { fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.18em', color: '#FF1493', fontWeight: 700 },
  infoTitle: { fontFamily: 'var(--font-sans)', fontSize: 15, color: 'rgba(255,255,255,.7)' },
  faqList: { display: 'flex', flexDirection: 'column', gap: 12 },
  faqItem: { background: '#0A0A0A', border: '1px solid rgba(255,255,255,.08)', borderRadius: 14, overflow: 'hidden' },
  faqQ: { width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, padding: '20px 24px', background: 'transparent', border: 'none', color: '#fff', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, letterSpacing: '.005em', textAlign: 'left', cursor: 'pointer' },
  faqA: { padding: '0 24px 22px', fontFamily: 'var(--font-sans)', fontSize: 16, lineHeight: 1.65, color: 'rgba(255,255,255,.78)' },
  relatedList: { display: 'flex', flexDirection: 'column', gap: 10 },
  relatedLink: { display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: '#FF1493', textDecoration: 'none', padding: '14px 0', borderBottom: '1px solid rgba(255,255,255,.08)' },
};
window.BlogPost = BlogPost;
