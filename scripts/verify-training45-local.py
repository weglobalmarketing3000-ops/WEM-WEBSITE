"""Read-only static verification of the target-only local training-45 package."""
import hashlib
import html
import json
import re
from pathlib import Path

repo=Path(__file__).resolve().parents[1]
base=repo/'outputs/patches/2026-09-21-training45-scoped-local'
slug='tiktok-shop-jewelry-category-operating-system'
date='2026-09-21'
site='https://www.weglobalmarketing.com'
def read(route):
    p=base/route
    return p.read_text() if p.suffix in {'.html','.js','.jsx','.xml','.txt','.svg'} else p.read_bytes()
page=read(f'blog/{slug}.html')
list_js=read('BlogList.compiled.js')
index=read('blog.html')
checks={}
entries=re.findall(r'\{slug:"([a-z0-9-]+)"',list_js.split('const BLOG_POSTS=[',1)[1].split('const BLOG_TAGS=',1)[0])
checks['source_rank3_unique']=list_js.count('slug:"'+slug+'"')==1 and entries[:3]==[
    'tiktok-shop-growth-autopilot-vs-gmv-max-pro',
    'tiktok-shop-growth-autopilot-roi-protection',
    slug,
]
checks['foundation_retained']=len(entries)>3 and entries[3]=='tiktok-shop-growth-autopilot-beta-guide'
checks['index_cache_hash']=hashlib.sha256(list_js.rstrip('\n').encode()).hexdigest()[:12] in index
checks['canonical']=f'rel="canonical" href="{site}/blog/{slug}"' in page
checks['hreflang']=all(f'hreflang="{x}"' in page for x in ('en-US','zh-CN','x-default'))
graph=json.loads(re.search(r'<script type="application/ld\+json">(.*?)</script>',page,re.S).group(1))['@graph']
posts=[n for n in graph if n.get('@type')=='BlogPosting']
faqs=[n for n in graph if n.get('@type')=='FAQPage']
checks['bilingual_date']=len(posts)==2 and all(n['datePublished']==date and n['dateModified']==date for n in posts)
checks['six_faqs_each']=len(faqs)==2 and all(len(n['mainEntity'])==6 for n in faqs)
checks['sitemap']=all(f'<loc>{site}/blog/{slug}{suffix}</loc><lastmod>{date}</lastmod>' in read('sitemap.xml') for suffix in ('','?lang=zh'))
checks['llms']=slug in read('llms.txt')
checks['source_links']=all(s['url'] in page for s in json.loads((repo/'content/training45-jewelry.json').read_text())['sources'])
checks['no_em_dash']='—' not in page
counts={}
for lang in ('en','zh-CN'):
    article=re.search(r'<article lang="'+lang+r'">(.*?)</article>',page,re.S).group(1)
    body=article.split('<section class="wem-source-notes">',1)[0]
    paras=' '.join(html.unescape(re.sub(r'<[^>]+>',' ',x)) for x in re.findall(r'<p>(.*?)</p>',body,re.S))
    counts[lang]=len(re.findall(r"\b[\w]+(?:['-][\w]+)*\b",paras)) if lang=='en' else len(re.findall(r'[\u4e00-\u9fff]',paras))
checks['en_length']=counts['en']>=1300
checks['zh_length']=counts['zh-CN']>=1800
checks['no_english_leak']=not re.search(r"(?:[A-Za-z][A-Za-z'-]*[ ,;:]+){12,}[A-Za-z][A-Za-z'-]*",re.search(r'<article lang="zh-CN">(.*?)</article>',page,re.S).group(1))
assets=[s.lstrip('/') for s in re.findall(r'<img[^>]+src="([^"]+)"',page)]
checks['all_images']=all(
    ((base/a) if (base/a).exists() else (repo/'ui_kits/website'/a)).exists()
    and ((base/a) if (base/a).exists() else (repo/'ui_kits/website'/a)).stat().st_size>100
    for a in assets
)
checks['enhancer']=slug in read('blog/wem-editorial-enhance.js')
report={'status':'local_only_not_published','slug':slug,'date':date,'checks':checks,'bodyCounts':counts,'assets':assets,'passed':all(checks.values())}
out=repo/'outputs/2026-09-21-training45-local-verify.json'
out.write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
print(json.dumps(report,ensure_ascii=False,indent=2))
raise SystemExit(0 if report['passed'] else 1)
