# Page upgrade standard (dogtur.com, 12 Nov 2026)

Goal: make each page the most useful, honest answer for the searches Google already shows it for, so Google indexes it and moves it from page 2–4 to page 1. No fake testing, ever.

1. **Answer first.** The first two sentences answer the page's main query directly, using its natural wording.
2. **"At a glance" table** (comparison/review pages): a markdown table right after "Key takeaways": Product | Best for | Why it fits | Watch out for. Facts only from the page's own research or the manufacturer. No star ratings, no prices.
3. **Cover the real searches.** You get the page's Search Console queries. Every distinct sub-intent (puppy, senior, wet vs dry, kibble size, "what to feed", brands, small/large dogs, etc.) gets a clear H2/H3 or FAQ answer. Natural language, no keyword stuffing.
4. **FAQ format** (schema is generated automatically from it): `## FAQ`, then `### Question?` and an answer paragraph under each. 5–8 questions, phrased like the real queries.
5. **One original, honest element** we can produce without testing: e.g. a feeding-amount table computed with RER = 70 × kg^0.75 × factor (1.6 neutered adult, 1.8 intact; source: Jennifer Coates DVM, PetMD) linked to /tools/dog-calorie-calculator/; a label-reading checklist; a sizing/decision table; a "which tool for which job" matrix. Show how numbers were calculated.
6. **Accuracy pass.** Re-check facts and every external link (WebFetch). Fix or remove dead/redirected sources. Only real URLs you opened. Keep the honesty note ("research-based, not tested").
7. **Tighten.** Cut repetition and filler. Final length within ±20% of the original unless a section is genuinely missing.
8. Set `updated: 2026-11-12` when changes are substantive. Do not change slug, section, hub or (unless told) title.
9. Keep every existing affiliate button and internal link (including recent "see also" lines). Add 2–4 relevant internal links to published dogtur posts (check `status: published` and the right section prefix: s1 senior-dog-health, s2 senior-dog-nutrition, s3 senior-dog-mobility, s4 senior-dog-behavior, s5 senior-dog-grooming, s6 senior-dog-gear, s7 senior-dog-lifestyle).
10. Health: "signs to discuss with your vet", no medicine dosages, no diagnoses.
