# dogtur.com authority plan (living file)

Started 12 Nov 2026. Continuous project.

**Every session:** (1) read "NEXT UP" below, (2) do it, (3) tick it in the Roadmap, (4) add one dated line to the Log, (5) move NEXT UP to the next open item. When Muddaser asks "what's next?", answer from NEXT UP + Roadmap.

## NEXT UP (updated 21 Nov 2026)
1. **Indexing, first thing on 22 Nov** (before other sites use the shared quota): the 8 left from Day 1: trash cans, collars, Yorkies, Maltese, Boston, American Bully, French Bulldog, calorie calculator. Then Day 2 list on 23 Nov, Day 3 on 24 Nov (Day 3 now also includes the Corgi and beef liver posts).
2. **Week 2 (from 28 Nov):** 29 Nov Search Console check, puppy shampoo post, Tool #4 chocolate calculator, push less-poop page to top 5 (see Roadmap).
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

## Decisions
- 12 Nov 2026, Muddaser: **widen to all dogs** (senior care stays a flagship section). URL slugs keep `senior-dog-*` on purpose: no second URL migration; only display names changed (names live in `src/data/sections.ts`).

## Muddaser must click (open items)
1. Author name yes/no ("Written by Muddaser Altaf" + true bio + photo).
2. Real-dog photos into `photos-inbox/`.
3. Amazon SiteStripe short links (amzn.to) for these products, then a session wires the buttons in:
   - French Bulldog post: Royal Canin French Bulldog Adult https://www.amazon.com/dp/B00OV5KLEA · Royal Canin French Bulldog Puppy https://www.amazon.com/dp/B0CL1BGTJP · Purina Pro Plan Sensitive Skin & Stomach Salmon & Rice https://www.amazon.com/dp/B01EY9KPZM · Hill's Science Diet Adult Sensitive Stomach & Skin https://www.amazon.com/dp/B003MW7790
   - Chihuahua post: Royal Canin Chihuahua Adult https://www.amazon.com/dp/B00IK5SPHM · Royal Canin Chihuahua Puppy https://www.amazon.com/dp/B0074JN35Y
   - Umbrella post: PETLESO https://www.amazon.com/dp/B0G8JRFG4P · ENJOYING https://www.amazon.com/dp/B07RGWD7XM · NAMSAN https://www.amazon.com/dp/B0H28Y7D8Z · LOVEPET https://www.amazon.com/dp/B07W116BLK
   - Golden brush post: Coastal Safari Pin Brush https://www.amazon.com/dp/B074N7YPSB · Hertzko Slicker https://www.amazon.com/dp/B00ZGPI3OY · Mars Coat King rake https://www.amazon.com/dp/B007L8Z17Q · FURminator Large Long Hair https://www.amazon.com/dp/B0040QQ07C · Chris Christensen #504 comb https://www.amazon.com/dp/B07T6DQBVF
   - Rottweiler post (pick the amazon.com pages): Purina Pro Plan Large Breed Puppy Chicken & Rice · Hill's Science Diet Puppy Large Breed · Royal Canin Rottweiler Puppy · Royal Canin Rottweiler Adult · Blue Buffalo Life Protection Large Breed Puppy · Blue Buffalo Life Protection Large Breed Adult
   - Corgi post: Royal Canin Medium Adult (dry) · Royal Canin Medium Puppy (dry)
   (Check each is in stock first. Also check Ruffwear Headwater collar is still sold; the collar page has a button for it.)
4. Request indexing: only AFTER the page-upgrade round is live. Follow the Indexing plan below.

## Indexing plan (written 12 Nov 2026)
**Rule: improve first, then ask Google.** A "Request indexing" on a page Google already judged weak just gets it re-judged as weak. So: upgrade → deploy → request. The quota is shared by all 17 sites on muddaser321 (~10 a day in practice), so spread it over 3 days and leave room for other sites.

Where things stand (GSC, 12 Nov): 42 indexed. Live posts Google crawled but refused ("crawled, not indexed"): Maltese, allergies/yeast, hypothyroidism, ramps, orthopedic beds, senior health guide, senior age. Not crawled yet ("discovered"): Yorkies, /recommended-products/. All of these are in the 12 Nov upgrade round.

**Day 1 (after the upgrade deploy): pages with proven demand** — 12 Nov attempt blocked: "Quota Exceeded" (shared quota already spent by other sites that day). Homepage confirmed indexed. Retry the full Day 1 list first thing next day.
1. https://dogtur.com/
2. /senior-dog-nutrition/best-high-fiber-dog-food/
3. /senior-dog-gear/dog-proof-trash-cans/
4. /senior-dog-gear/best-waterproof-dog-collars/
5. /senior-dog-nutrition/best-dog-food-for-yorkies/
6. /senior-dog-nutrition/best-dog-food-for-maltese/
7. /senior-dog-nutrition/best-dog-food-for-boston-terrier/
8. /senior-dog-nutrition/best-dog-foods-for-american-bully/
9. /senior-dog-nutrition/best-dog-food-for-french-bulldogs/
10. /tools/dog-calorie-calculator/

**Day 2: new + previously refused pages**
11. /senior-dog-nutrition/best-dog-food-for-chihuahua/
12. /senior-dog-nutrition/best-dog-food-for-rottweilers/
13. /senior-dog-gear/best-dog-umbrella/
14. /senior-dog-grooming/best-brush-for-golden-retriever/
15. /senior-dog-nutrition/best-dog-food-for-allergies-and-yeast-infection/
16. /senior-dog-gear/best-dog-ramps-senior-dogs/
17. /senior-dog-gear/best-orthopedic-dog-beds-senior-dogs/
18. /senior-dog-nutrition/best-dog-foods-for-hypothyroidism/
19. /senior-dog-health/senior-dog-health-guide/
20. /senior-dog-health/what-age-is-a-senior-dog/

**Day 3: tools and hubs**
21. /tools/dog-age-calculator/ 22. /tools/dog-ramp-calculator/ 23. /tools/ 24. /senior-dog-nutrition/best-dog-food-for-less-poop/ (already ranks; request only so the upgrade is seen) 25. /recommended-products/ 26. /senior-dog-nutrition/best-dog-food-for-corgis/ 27. /senior-dog-nutrition/how-to-cook-beef-liver-for-dogs/

**How to send (works, 12 Nov):** m321 Chrome → Search Console property `https://dogtur.com/` → type the full URL in the top "Inspect any URL" box → Enter → wait ~10 s → click REQUEST INDEXING (a JS-dispatched mousedown/mouseup/click works) → wait up to ~2 min for "Indexing requested" or "Quota Exceeded" → Dismiss. Stop at the first Quota Exceeded.

**After requesting**
- Don't re-request the same URL. Re-check with URL Inspection after ~14 days (~29 Nov).
- Still "crawled, not indexed" after 4 weeks → that page needs real-dog photos or merging into a stronger page, not another request.
- Sitemap (/sitemap-index.xml) updates itself on every deploy; no resubmission needed.

**Noindex / removal decisions**
- Live posts: none should be noindexed. Every live post now has a clear search purpose; weak ones get upgraded, not hidden.
- Old WordPress junk (/search/…, /author/…, /category/…) already 404 or 301: leave it, Google drops it on its own. Never use the Removals tool on them (it hides, it doesn't fix).
- Old addresses that 301 to a loosely related page (soft-404 risk), fix by writing the real page later, then repoint: /best-dog-food-for-corgi/ (→ senior food), /best-names-for-dogs/ (→ homepage; becomes a dog-name tool), /best-puppy-shampoo/ (→ grooming guide).

## Roadmap: 21 Nov 2026 to mid-Feb 2027
Goal: more pages on Google page 1 for searches dogtur already shows for, then widen to new dog topics. Each week mixes the same five jobs: **index**, **improve**, **add**, **interlink**, **measure**.

**KPIs** (baseline 21 Nov): indexed pages 46 · clicks per week 7 · impressions per week ~1,410 · pages averaging top 10: 1 (less-poop, 10.2) · tools 3 · live posts 36 (incl. tools).
Targets by mid-Feb: indexed 70+ · clicks per week 50+ · 8+ pages in top 10 · 6 tools.

**Standing weekly routine**
- Index: every new or substantially updated page gets a Request indexing, first thing in the morning, max ~8 a day (shared quota).
- Add: 2 new posts a week (or 1 post + 1 tool). Topic must come from Search Console demand or sit next to an existing cluster.
- Interlink: every new page gets links FROM 3+ related existing pages, and links TO its hub, siblings and a relevant tool.
- Improve: 1–2 existing pages a week to UPGRADE_STANDARD.md, chosen from Search Console: position 8–20 first (closest to page 1), then "crawled, not indexed".
- Measure: Search Console check every 2 weeks (dates below); update KPIs and the Log.

### Month 1
**Week 1 (21–27 Nov)**
- [x] Indexing Day 1: homepage, high-fiber (21 Nov; quota then ran out)
- [ ] Indexing: rest of Day 1 (8), Day 2 (10), Day 3 (5)
- [x] New post: how to cook beef liver for dogs; 301 repointed (21 Nov)
- [x] New post: best dog food for Corgis; 301 repointed (21 Nov)
- [x] Section pages: drop leftover "aging dogs" wording (21 Nov)

**Week 2 (28 Nov–4 Dec)**
- [ ] 29 Nov: Search Console check: did requested pages get indexed? Old WordPress URLs replaced by new ones? Positions vs 21 Nov
- [ ] New post: best puppy shampoo (repoint /best-puppy-shampoo/); start a "puppy" angle across food posts
- [ ] Tool #4: dog chocolate toxicity calculator + companion post "my dog ate chocolate: what to do" (vet-sourced, call-the-vet first)
- [ ] Improve: less-poop page (position ~10: push into top 5: title/intro CTR, add comparison depth)

**Week 3 (5–11 Dec)**
- [ ] Hub pages: turn the 7 section pages into real hubs (intro, "start here" picks, tools, all guides). /senior-dog-behavior/ already gets impressions at ~33
- [x] Interlinking audit: `npm run audit` (scripts/link-audit.py); 10 weak pages fixed, all 36 now have 3+ contextual links in (21 Nov, pulled forward)
- [ ] Improve: joint supplements (52→33, rising) and essential products (67→26)
- [ ] New post: from Search Console's newest rising queries (pick on the day)

**Week 4 (12–18 Dec)**
- [ ] 13 Dec: Search Console check + CTR review of every page at position ≤15 (titles/descriptions)
- [ ] Improve: dementia page (position ~76) + Tool #5: canine cognitive dysfunction checklist (CADES-style, vet-sourced)
- [ ] Improve: senior dog food (position 70–80: rethink angle; compete on a narrower query such as "senior dog food for small dogs")
- [ ] New post: from Search Console demand

### Month 2 (19 Dec–15 Jan): breed food cluster + gear
- [ ] Breed food posts, 2 a week, most-searched breeds not yet covered: Labrador, German Shepherd, Golden Retriever, Shih Tzu, Pomeranian, Dachshund, Pit Bull, Husky. Each links to the calorie calculator and sibling breeds
- [ ] Gear cluster next to collars/trash cans: harness by dog size, crate sizes, car seat covers
- [ ] Tool #6: gear size finder (collar, harness, crate, bed) linked from the gear posts
- [ ] 27 Dec + 10 Jan: Search Console checks; improve the 2 pages closest to page 1 each time

### Month 3 (16 Jan–15 Feb): health cluster + links
- [ ] Health posts with search demand, strict YMYL rules: ear infections, itchy skin, diarrhea, vomiting ("when to see a vet"); anal glands as its own post only if the fiber page reaches top 10 for it
- [ ] Tools #7–8: dog food recall checker (FDA data), cost of owning a dog
- [ ] Links: list dog blogs and resource pages that link to calculators; draft outreach emails for the tools (sent only with Muddaser's OK)
- [ ] Prune/merge: any page still "crawled, not indexed" after 6 weeks gets merged into a stronger page or rewritten
- [ ] Mid-Feb: full review against KPIs; write the next quarter's roadmap

### Blocked on Muddaser (biggest ranking levers left)
- Amazon SiteStripe links for products in the 5 new posts (no income from them until then)
- Author name yes/no + real-dog photos (trust signals Google weighs on pet health and product pages)
- Approval before any outreach email is sent

## Tools backlog (ranked: demand × fit with existing traffic × effort)
Free = pure code, no API. API = needs a key (key goes in Cloudflare env, never in the page).

| # | Tool | Why | Type |
|---|---|---|---|
| 1 | ✅ LIVE 12 Nov: Dog food calorie & feeding calculator (weight, age, activity, kcal/cup on the bag) | Feeds every food page we rank for | Free |
| 2 | ✅ LIVE 12 Nov: Dog age in human years (breed-size based, not ×7) | Huge evergreen search, fits senior pillar | Free |
| 3 | Chocolate toxicity calculator (type, amount, dog weight → risk + "call vet") | Viral, gets links; strict vet-source wording | Free |
| 4 | Gear size finders: collar, harness, bed, crate, life jacket, boots (✅ ramp length calculator live 12 Nov) | Direct path to affiliate links we already have | Free |
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
- 12 Nov 2026 (later): widened to all dogs (nav, homepage, about, trust pages, section names, llms.txt). Shipped 4 posts on lost demand: /senior-dog-nutrition/best-dog-food-for-french-bulldogs/, /senior-dog-nutrition/best-dog-food-for-chihuahua/, /senior-dog-gear/best-dog-umbrella/, /senior-dog-grooming/best-brush-for-golden-retriever/ (old WP URLs 301 to them). Shipped /tools/ + /tools/dog-calorie-calculator/ (math in src/lib/dog-calories.mjs, `npm test`). Titles tuned to search wording. Commit 529081d. Next: tool #2 dog age calculator + post "best dog food for anal gland issues"; GSC re-check ~26 Nov.
- 12 Nov 2026 (round 2, Muddaser: "improve pages before indexing"): GSC drill-down found 7 live posts "crawled, not indexed" + 2 "discovered". Upgraded 14 pages to UPGRADE_STANDARD.md (answer-first, at-a-glance tables, real-query coverage, honest original element, source audit; helpers removed unverifiable stats and fixed errors: Hill's w/d fiber %, CertiPUR-US scope, ramp "2× height" = 30° slope, 2 false "no affiliate links" disclosures). New post: Rottweiler food. Tools #2 dog age + #3 ramp calculators; shared ToolLayout; FAQPage schema auto-generated from every "## FAQ" (31 pages); markdown table styles. Indexing plan written above: request only after this deploy, 3 days, ~10/day.
- 12 Nov 2026: Day 1 indexing approved by Muddaser; blocked by shared daily quota (already used). Nothing requested yet. Retry 13 Nov.
- 21 Nov 2026 check (no indexing requests sent yet): last 7 days vs previous 7: clicks 7 vs 5, impressions ~1,410 flat, but positions improving on most upgraded pages (less-poop 12.8→10.2, Chihuahua 47→14, trash cans 62→47, joint supplements 52→33, Boston 55→31, essential products 67→26). Indexed 42→46; crawled-not-indexed 16→20 (report lags). Google still serves several OLD WordPress URLs (yorkies, umbrella, chihuahua, french bulldog) despite 301s, so indexing requests for the new URLs matter. Old URL /how-to-cook-beef-liver-for-dogs/ shows at position ~10 but 301s to the nutrition guide: candidate for its own post.
- 21 Nov 2026: indexing sent for homepage + high-fiber, then "Quota Exceeded" (shared quota). Wrote the 3-month Roadmap + NEXT UP. Fixed section-page description wording.
- 21 Nov 2026 (later): published Corgi food + beef liver posts (old WP URLs now 301 to them; Search Console showed little demand for either, kept as breed-cluster start + common owner question). Built `npm run audit` internal-link checker; fixed 10 under-linked pages (trash cans had 0 contextual links in). 53 pages, 0 broken links.
