# dogtur.com authority plan (living file)

Started 12 Nov 2026. Continuous project: every session reads this first, then RECOVERY_STATUS.md, then updates the log at the bottom.
Search Console: m321 Chrome, property **URL-prefix `https://dogtur.com/`** (the `sc-domain:` property is NOT verified).

## Snapshot 12 Nov 2026 (Search Console)
- Last 28 days: 22 clicks, 5.35K impressions, CTR 0.4%, avg position 34.3.
- Last 3 months: 1,000+ queries, ~8.4K impressions.
- Indexing: 42 indexed, 57 not (21 old 404s, 10 noindex briefs, 8 redirects, 16 crawled-not-indexed, 2 discovered).
- Live: 26 published posts (2,100–4,300 words each), 71 noindex brief pages, sitemap 41 URLs.

### Where Google already tests dogtur (3 months, by topic)
| Topic | Queries | Impressions | Avg pos |
|---|---|---|---|
| Dog-proof trash cans | 78 | 1,307 | 27 |
| High-fiber food (+ anal glands, scooting) | 113 | 1,139 | 33 |
| Waterproof / scratch-proof collars | 42 | 986 | 24 |
| Senior dog food / diet / supplements | 139 | 977 | 72 |
| Yorkie food | 101 | 655 | 31 |
| Boston Terrier food | 42 | 493 | 37 |
| Less-poop food | 46 | 422 | 38 |
| Maltese food | 48 | 418 | 30 |
| Brushes / grooming | 47 | 367 | 38 |
| American Bully food | 42 | 324 | 21 |
| Rottweiler food | 46 | 201 | 33 |
| Dog beds | 23 | 191 | 42 |
| Life jackets | 27 | 134 | 42 |
| Cushing's | 25 | 113 | 73 |
| Chihuahua / French Bulldog food | 41 | 126 | 26–40 |
| Dementia (CCD) | ~5 | ~80 | 92 |

Only page with real clicks: `/senior-dog-nutrition/best-dog-food-for-less-poop/` (17 clicks / 28 days, pos 14).

## What the data says (plain words)
1. **Google sees dogtur as a dog-food-by-breed + dog-gear site, not a senior-dog site.** Breed food and gear sit at positions 20–35. Every "senior" query sits at 70–90 (too strong competition: Purina, AKC, PetMD, Chewy).
2. **Some demand was thrown away in the 7 Nov redirects.** These old pages had impressions but now redirect to a general page, so that demand is lost:
   - `/best-dog-umbrella/` → `/senior-dog-gear/` (153 impressions, **position 15**)
   - `/best-dog-food-for-french-bulldogs/` → senior food page (90 imp, pos 19)
   - `/best-dog-food-for-chihuahua/` → senior food page (58 imp, pos 32)
   - `/best-brush-for-golden-retriever/` → grooming guide (15 imp, pos 34)
   Fix: write each page fresh and point the old address at it.
3. **No trust signals yet**: no named author, no real photos, no vet review. On pet-health and product pages this caps rankings (Google's YMYL rule).
4. **Zero tools.** Big dog sites win links and repeat visits with calculators. Dogtur has none.

## The plan (in order)
### Phase 1: recover what is already earned (next 2 weeks)
1. Recreate the 4 lost pages above (umbrella, French Bulldog food, Chihuahua food, Golden Retriever brush) and repoint the old redirects.
2. Anal-gland/scooting post: "best dog food for anal gland issues" (fiber page's only clicks came from this angle).
3. Senior Rottweiler food (Rottweiler queries 201 imp).
4. Title/description refresh on pages at position 3–15 with 0 clicks (collars "scratch resistant", "rust proof"; pet-friendly trash can).
5. Remove the 71 noindex brief pages from the build (they waste crawl; keep the .md files as drafts).

### Phase 2: trust (needs Muddaser)
- Author: "Written by Muddaser Altaf" with a short true bio + photo. Still undecided since 7 Nov.
- Real-dog photos into `photos-inbox/` (still empty).
- Optional vet reviewer for health posts.

### Phase 3: tools (link + traffic magnets) — see list below
Build 1 tool every 1–2 weeks, each with a companion article and links to related buying guides.

### Phase 4: steady publishing
- 2 posts per week, each on a query Google already shows dogtur for, or a topic next to a tool.
- Monthly Search Console review: update this file's snapshot and pick next topics from rising queries.

## Tools backlog (ranked: demand × fit with existing traffic × effort)
Free = pure code, no API. API = needs a key (key goes in Cloudflare env, never in the page).

| # | Tool | Why | Type |
|---|---|---|---|
| 1 | Dog food calorie & feeding calculator (weight, age, activity, kcal/cup on the bag) | Feeds every food page we rank for | Free |
| 2 | Dog age in human years (breed-size based, not ×7) | Huge evergreen search, fits senior pillar | Free |
| 3 | Chocolate toxicity calculator (type, amount, dog weight → risk + "call vet") | Viral, gets links; strict vet-source wording | Free |
| 4 | Gear size finders: collar, harness, bed, crate, life jacket, boots | Direct path to affiliate links we already have | Free |
| 5 | Dog food recall checker + alerts (FDA recall feed) | Authority + return visits | Free (public FDA data) |
| 6 | Senior dog quality-of-life scale (HHHHHMM) | Real need, senior pillar | Free |
| 7 | Dementia (CCD) symptom checklist | Our dementia page sits at pos 77; tool helps | Free |
| 8 | "Too hot to walk my dog?" (pavement temperature from local weather) | Seasonal spikes, shareable | API: weather (OpenWeather free tier) |
| 9 | Dog food label checker: photo of ingredient label → plain-words breakdown | Unique, nobody does it well | API: Claude or Gemini vision |
| 10 | Breed identifier from photo | Very high search demand | API: vision model |
| 11 | Dog name generator (by breed, look, personality) | High volume, easy | API: LLM (or free word lists) |
| 12 | Breed match quiz (home size, time, allergies) | Links to breed food pages | Free |
| 13 | Cost of owning a dog calculator (by breed + country) | Good for links | Free |
| 14 | Pregnancy due date + heat cycle calculator | Steady demand | Free |
| 15 | Water intake + treat calorie budget | Small, quick wins | Free |
| 16 | Dog-friendly places near me | Nice, but crowded and costly | API: Google Places (paid per call) |

Not building: medicine dosage calculators (Benadryl etc.) and symptom "diagnosis" tools. Too risky without a vet; Google punishes them on YMYL sites.
Note: Muddaser also owns puppysizecalculator.com; cross-link, don't duplicate the puppy weight tool.

## Log
- 12 Nov 2026: plan created from fresh GSC pull (28d + 3 months, 1,000 queries, pages, indexing). Waiting on Muddaser: niche scope decision, author yes/no, photos.
