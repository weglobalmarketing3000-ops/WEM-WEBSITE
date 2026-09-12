"""Independent read-only article acceptance; no publication or queue mutations."""
import argparse, hashlib, html, json, re, urllib.request
from pathlib import Path

parser = argparse.ArgumentParser()
parser.add_argument('--local')
parser.add_argument('--report', required=True)
args = parser.parse_args()
base = 'https://www.weglobalmarketing.com'
slug = 'tiktok-shop-merchant-content-compounding-system'
date = '2026-09-12'

def get(route):
    if args.local:
        p = Path(args.local) / route.lstrip('/').split('?')[0]
        return (p if p.suffix else p.with_suffix('.html')).read_bytes()
    with urllib.request.urlopen(base + route, timeout=30) as r:
        return r.read()

def plain(s):
    return html.unescape(re.sub('<[^>]+>', ' ', s)).strip()

report = {'mode': 'local' if args.local else 'production', 'checks': {}, 'assets': {}}
checks = report['checks']
source = get('/blog/' + slug).decode()
index = get('/BlogList.compiled.js').decode()
index_html = get('/blog').decode()
version = re.search(r'BlogList\.compiled\.js\?v=([^"\s]+)', index_html)
report['blog_script_version'] = version.group(1) if version else None
checks['index_cache_version_advanced'] = bool(version) and version.group(1) != 'CHANGE_ME'
checks['index_version_matches_content_hash'] = bool(version) and version.group(1) == hashlib.sha256(index.rstrip('\n').encode()).hexdigest()[:12]
slugs = re.findall(r'\{slug:"([a-z0-9-]+)"', index.split('const BLOG_POSTS=[', 1)[-1].split('const BLOG_TAGS=', 1)[0])
checks['unique_first_card'] = bool(slugs) and slugs[0] == slug and slugs.count(slug) == 1
prior = ['tiktok-shop-short-video-localization-us-shoppers', 'tiktok-shop-live-control-room', 'tiktok-shop-live-auction-economics', 'tiktok-shop-live-auction-category-readiness', 'tiktok-shop-live-temporary-listing-test', 'tiktok-shop-live-funnel-diagnosis']
checks['prior_six_dates_order_preserved'] = slugs[1:7] == prior
checks['canonical'] = f'rel="canonical" href="{base}/blog/{slug}"' in source
checks['hreflang'] = all(f'hreflang="{x}"' in source for x in ['en-US', 'zh-CN', 'x-default'])
schemas = [json.loads(s) for s in re.findall(r'<script[^>]+type="application/ld\+json"[^>]*>(.*?)</script>', source, re.S)]
nodes = [n for s in schemas for n in s.get('@graph', [s])]
posts = [n for n in nodes if n.get('@type') == 'BlogPosting']
faqs = [n for n in nodes if n.get('@type') == 'FAQPage']
checks['bilingual_schema_date'] = len(posts) == 2 and all(n.get('datePublished') == date for n in posts) and {n.get('inLanguage') for n in posts} == {'en-US', 'zh-CN'}
checks['bilingual_faq'] = len(faqs) == 2 and all(len(n.get('mainEntity', [])) >= 5 for n in faqs)
checks['sitemap_date'] = f'<loc>{base}/blog/{slug}</loc><lastmod>{date}</lastmod>' in get('/sitemap.xml').decode()
checks['llms'] = slug in get('/llms.txt').decode()
checks['no_em_dash'] = '—' not in source
for lang in ['en', 'zh-CN']:
    article = re.search(r'<article\s+lang="' + lang + r'"[^>]*>(.*?)</article>', source, re.S).group(1)
    body = re.split(r'<h2[^>]*>(?:Source notes|来源说明|来源与说明|资料来源|来源备注)', article, flags=re.I)[0]
    paragraphs = [plain(p) for p in re.findall(r'<p(?:\s[^>]*)?>(.*?)</p>', body, re.S)]
    text = ' '.join(paragraphs[2:])
    count = len(re.findall(r"\b[\w]+(?:['’-][\w]+)*\b", text)) if lang == 'en' else len(re.findall('[\u4e00-\u9fff]', text))
    report[lang + '_body_count'] = count
    checks[lang + '_body_minimum'] = count >= (1300 if lang == 'en' else 1800)
    if lang == 'zh-CN':
        leaks = re.findall(r"(?:[A-Za-z][A-Za-z'-]*[ ,;:]+){12,}[A-Za-z][A-Za-z'-]*", plain(body))
        report['long_english_runs_in_chinese'] = leaks
        checks['no_english_sentence_leak'] = not leaks
for route in sorted(set(re.findall(r'<img[^>]+src="([^"]+)"', source))):
    blob = get(route)
    report['assets'][route] = {'bytes': len(blob), 'sha256': hashlib.sha256(blob).hexdigest()}
checks['images_nonempty'] = bool(report['assets']) and all(a['bytes'] > 100 for a in report['assets'].values())
checks['editorial_enhancer'] = '/blog/wem-editorial-enhance.js' in source
report['passed'] = all(checks.values())
Path(args.report).write_text(json.dumps(report, ensure_ascii=False, indent=2) + '\n')
print(json.dumps({k: v for k, v in report.items() if k != 'assets'}, ensure_ascii=False, indent=2))
raise SystemExit(0 if report['passed'] else 1)
