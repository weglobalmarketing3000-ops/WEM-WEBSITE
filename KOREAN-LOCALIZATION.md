# WE Marketing Korean Localization Draft

## Status and boundary

- Source baseline: production deployment `dpl_GG1AyYWBAzznhtfh1dG9uDpimHZh`
- Public baseline verified against `https://www.weglobalmarketing.com/`
- Korean work is a local draft only.
- Do not push, deploy, or change production aliases.
- A route counts as complete only after translation, metadata/schema checks, desktop QA, and mobile QA.

## Voice

- Use natural Korean B2B website copy in professional `합니다` style.
- Prefer clear operator language over literal translation or promotional hype.
- Keep paragraphs compact. Do not add claims, guarantees, platform rules, prices, or credentials.
- Preserve the source's factual boundaries, dates, metrics, citations, and disclaimers.
- Avoid em dashes. Use Korean punctuation and sentence structure.

## Canonical terminology

| Source term | Korean standard |
|---|---|
| WE Marketing / WEM | Keep as written |
| TikTok Shop | Keep as written |
| TikTok Shop U.S. | TikTok Shop 미국 |
| creator | 크리에이터 |
| creator affiliate | 크리에이터 어필리에이트 |
| affiliate program | 어필리에이트 프로그램 |
| Affiliate Center | Affiliate Center |
| sample seeding | 제품 샘플 시딩 |
| creator outreach | 크리에이터 아웃리치 |
| creator matchmaking | 크리에이터 매칭 |
| UGC | UGC |
| short-form video | 숏폼 영상 |
| LIVE / live selling | LIVE / 라이브 커머스 |
| shop operations / shop ops | 스토어 운영 |
| Seller Center | Seller Center |
| product listing / listing | 상품 리스팅 / 리스팅 |
| product detail page | 상품 상세 페이지 |
| hero SKU | 핵심 SKU |
| cold start | 콜드스타트 |
| zero to one | 0에서 1 |
| GMV | GMV |
| GMV Max | GMV Max |
| gross merchandise value | 총거래액 |
| offer | 오퍼 |
| commission | 커미션 |
| conversion | 전환 |
| conversion rate | 전환율 |
| fulfillment | 주문 이행 |
| shop health | 스토어 건전성 |
| Shop Performance Score (SPS) | Shop Performance Score(SPS) |
| TikTok Shop Partner (TSP) | TikTok Shop Partner(TSP) |
| Academy | Academy |

## Standard UI

| English | Korean |
|---|---|
| Services | 서비스 |
| Case Studies / Our Work | 성공 사례 |
| Blog / Insights | 인사이트 |
| About Us | 회사 소개 |
| Contact | 문의 |
| Book a discovery call | 상담 예약하기 |
| Book a call | 상담 예약하기 |
| Learn more | 자세히 보기 |
| See our work | 사례 보기 |
| Get started | 시작하기 |
| Apply | 신청하기 |
| Read more | 더 읽기 |
| Frequently asked questions | 자주 묻는 질문 |
| Sources | 출처 |
| Published | 게시 |
| Updated | 업데이트 |

## SEO rules

- Korean pages use dedicated `/ko/...` URLs because static query parameters cannot return Korean server-side metadata.
- Every Korean route must use `<html lang="ko-KR">`.
- Every Korean route needs a self-referencing canonical and `ko-KR` hreflang.
- Preserve `en-US`, `zh-CN`, and `x-default` alternates.
- Korean BlogPosting and FAQ schema must match visible Korean content.
- Internal links should stay within the Korean route set when an equivalent exists.
- Brand, product, platform, and tool names must not be translated or invented.

## Completion definition

A route is complete only when the ledger has:

1. `translation=complete`
2. `metadata=pass`
3. `schema=pass`
4. `links=pass`
5. `desktop=pass`
6. `mobile=pass`
7. `language_review=pass`

Anything else remains `incomplete`.
