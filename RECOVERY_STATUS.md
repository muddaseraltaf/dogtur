# dogtur.com recovery status

Owner chat: GSC recovery chat (started from Master). Last update: **7 Nov 2026**.

## Found (7 Nov 2026)
- **Search Console lost access.** The site moved from WordPress to this Astro build on Cloudflare Pages on 1 Oct. The move dropped Google's verification file, `google100a123f2f003b39.html`, so Google stopped accepting muddaser321 as the owner some time after 24 Oct. The site itself kept working and stayed in Google.
- **Broken pages.** Search Console listed 20 "Not found (404)" pages. Old WordPress addresses that still had impressions brought it to 40 dead addresses in total: old breed food posts, grooming posts, /about-us/, /contact-us/, /category/best/, /author/, feeds.
- **Indexing (report dated 23 Oct):** 41 indexed, 57 not indexed. Of those, 20 were 404s, 13 noindex, 3 redirects, 18 "crawled, not indexed" and 3 "discovered, not indexed".
- **8 live articles are "crawled, not indexed".** Google read them but chose not to show them: american-bully, allergies-and-yeast, hypothyroidism, dog ramps, health guide, what-age-is-a-senior-dog, orthopedic beds, waterproof collars. The likely reason is a 5-week-old site whose long "research-based" articles have no named person behind them (the schema author is "Organization: Dogtur"), only stock (Pexels) photos and no first-hand proof.
- No manual actions or security issues (24 Oct check).

## Shipped
| Date | What | Verified live |
|---|---|---|
| 7 Nov | Restored the verification file (commit 6f8586c). Search Console says "Ownership verified" (HTML file) | yes, access is back |
| 7 Nov | 301 redirects for 40 legacy addresses, each to the closest live page (commits 62f3a3f, 7b6bd82) | yes: 50 of 50 old addresses (including the 10 older redirects) return 301, and every target returns 200 |

Deploy = push to `main` on GitHub muddaseraltaf/dogtur. Cloudflare Pages builds it in about 1–2 minutes.

## Next
1. **Needs Muddaser:** real-dog photos or short clips of an older dog using a ramp, bed or collar (his, a friend's or family's). Stock photos can't prove first-hand use. Swap them into the 8 non-indexed articles first.
2. **Needs Muddaser's OK:** put a real named author on the site (bio page plus Person schema) instead of "Dogtur". Never invent a persona; that is what sank puppysizecalculator.
3. **Ask Muddaser first (deleting pages):** health pages (YMYL) without a vet reviewer. Either get a real vet to review them, or trim them to safe, clearly sourced basics.
4. **Around 21 Nov:** re-check Search Console Pages. The 404 count should fall as Google re-crawls. Use **Validate fix** on "Not found (404)" once most show as redirects. Check whether the 8 articles get indexed.
5. Small extra: a second verification method in Search Console settings (meta tag) so a future rebuild can't lock us out again.
