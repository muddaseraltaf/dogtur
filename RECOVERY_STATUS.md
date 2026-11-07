# dogtur.com recovery status

Owner: GSC recovery chat (started from Master). Last update: **7 Nov 2026**. Pick up here; nothing is waiting in chat.

## Muddaser must click / decide
1. **Real-dog photos or clips** (biggest missing piece). Take 10–20 phone photos or 10-second clips of an older dog (yours, a friend's or family's): on a ramp, on an orthopedic bed, being brushed, eating from a bowl, wearing a collar in water. Drop them in `dogtur-site/photos-inbox/` and the next session will add them to the matching posts. Stock photos can't prove anyone used the product, which is why 8 posts sit "crawled, not indexed".
2. **Author name: yes or no.** Can the site say "Written by Muddaser Altaf" with a short, true bio and photo? Google trusts pages with a real person behind them. We will never invent a vet or expert.
3. **Request indexing (from 8 Nov, about 2 minutes):** today's quota was already used up, since it is shared by all sites on muddaser321. In Search Console → top search bar, paste each address, then click **Request indexing**:
   - https://dogtur.com/senior-dog-nutrition/best-dog-food-for-maltese/
   - https://dogtur.com/senior-dog-grooming/best-dog-brush-for-short-hair/
   - https://dogtur.com/senior-dog-grooming/senior-dog-grooming-daily-care-guide/
   - https://dogtur.com/senior-dog-health/cushings-disease-in-senior-dogs/
   - https://dogtur.com/senior-dog-gear/dog-proof-trash-cans/
   - https://dogtur.com/senior-dog-gear/best-waterproof-dog-collars/

   A next session can also do this.
4. Optional, worth it: if a vet friend would review the health posts (Cushing's, health guide, hypothyroidism), add a "Reviewed by Dr. X" line with their consent.

## Check result (7 Nov 2026)
- **Search Console:** the property opens (verified by HTML file). Old data is back: 16 months total 40 clicks, 12.1K impressions, average position 34. There was no real traffic before Jul 2026. Impressions went 988 (Jul), 3,014 (Aug), 2,318 (Sep), 2,881 (Oct).
- **Manual actions:** none. **Security issues:** none.
- **Sitemaps:** `/sitemap-index.xml` submitted 1 Oct, last read 5 Nov, Success, 37 pages. No separate `sitemap.xml` needed.
- **Page indexing (Google's report from 23 Oct):** 41 indexed, 57 not.
  - 20 "not found" (old WordPress addresses, fixed 7 Nov with redirects)
  - 13 noindex (old writer-brief pages)
  - 18 "crawled, not indexed", including 8 live posts plus old WordPress junk (spam search pages, /author/, /category/)
  - 3 "discovered, not indexed"
- **Where Google shows dogtur (last 3 months, impressions):**

  | Topic | Impressions | Avg. position |
  |---|---|---|
  | dog-proof trash cans | 1,192 | 27 |
  | high-fiber dog food | 1,072 | 35 |
  | waterproof collars | 822 | 26 |
  | senior dog food | 686 | 73 |
  | Yorkie food | 543 | 32 |
  | Boston Terrier food | 492 | 35 |
  | Maltese food | 441 | 30 |
  | short-hair brushes | 417 | 38 |
  | less-poop food | 397 | 41 |
  | American Bully food | 321 | 20 |
  | Rottweiler puppy food | 222 | 33 |
  | Cushing's | 120 | 72 |

  Most impressions still sit on the **old WordPress addresses**, which now redirect, so Google will move them to the new pages over the next weeks. Only one new page ranks well so far: /senior-dog-nutrition/best-dog-food-for-less-poop/ (position 13.9, 14 clicks).

## Strategy (plain words)
- **What's working:** Google already tests dogtur for buying-guide searches (trash cans, collars, fiber, breed foods). They sit on pages 2–4. Pages moving to page 1 is where clicks start.
- **What was broken:** the move from WordPress on 1 Oct dropped the Google verification file and left 40 old addresses dead. Both are fixed. The old pages' Google history now flows to the new pages through redirects.
- **What holds it back:**
  1. It is a 5-week-old site.
  2. No real person is named.
  3. Only stock photos, with nothing showing anyone used the products.
  4. Health topics with no vet review.

  Google is stricter about pet health and buying advice, so proof matters more than more words.
- **What to add next, in order:**
  1. Real-dog photos and video on the posts that already get impressions.
  2. The real author page.
  3. Recreate the old posts that still had demand, written fresh and honest, on topics Google already shows dogtur for. Next candidates: Rottweiler food (222 impressions; puppy angle is off-niche, so do "senior Rottweiler"), Chihuahua food (67), French Bulldog food (47), dog kayak life jackets (156; off-niche, so skip unless the site widens).
  4. Internal links between related posts (done for the new ones).
  5. One post a week, not batches.
- **Affiliate links:** Amazon links are already on 14 buying guides. That's fine to keep, but income won't come until pages reach page 1. Don't add more link-heavy pages until the photo proof is in. Later, pet brands that pay per customer (fresh food, GPS collars) beat Amazon's 3%.

## Shipped
| Date | What | Verified live |
|---|---|---|
| 7 Nov | Restored the Google verification file (commit 6f8586c). Search Console: "Ownership verified" | yes |
| 7 Nov | 301 redirects for 40 legacy WordPress addresses to the closest live page (62f3a3f, 7b6bd82) | yes: 50 of 50 return 301, every target returns 200 |
| 7 Nov | **4 new posts** on topics Google already shows dogtur for: Maltese food (old page had ~600 impressions), short-hair dog brushes (~430), senior grooming routine (first post in the empty grooming section), Cushing's in senior dogs (~120). Research-based with sources, no fake testing claims, no persona. Old WordPress addresses for these topics now 301 to the new posts (commit 46ecf05) | yes: all 4 return 200, old addresses 301 to them, sitemap lists 41 pages |
| 7 Nov | Titles and descriptions matched to real search wording: trash cans ("pet-proof garbage cans"), Yorkies ("Yorkshire Terriers"), Boston Terriers, American Bully, high-fiber ("best fiber for dogs") | yes |
| 7 Nov | Freshness: real publish dates on all posts (30 Sep), "Updated" line plus datePublished/dateModified in schema. Only the 4 new posts show Updated 7 Nov (no fake "updated" dates) | yes |
| 7 Nov | Internal links from 6 related posts to the new ones (Yorkies → Maltese, health guide, hypothyroidism and senior-age posts → Cushing's, products and collars → brush and grooming) | yes |
| 7 Nov | Sitemap resubmitted in Search Console ("Sitemap submitted successfully") | yes |
| 7 Nov | Request indexing: blocked by the daily quota. See "Muddaser must click" #3 | no |

Deploy = push to `main` on GitHub muddaseraltaf/dogtur. Cloudflare Pages builds it in about 1–2 minutes.

## Next session
- Around 21 Nov: re-check Search Console Pages. The 404 count should drop; click **Validate fix** on "Not found (404)". Check whether the 8 posts and the 4 new posts are indexed, and compare impressions with the table above.
- Request indexing for the 6 addresses in the must-click list if nobody has done it yet.
- If photos have arrived in `photos-inbox/`, add them, then set `updated:` on those posts.
- Add a second verification method (meta tag in Settings → Ownership verification) so a future rebuild can't lock us out.
