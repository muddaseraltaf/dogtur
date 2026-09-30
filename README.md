# Dog Tur — senior dog care authority blog

Astro static site for **dogtur.com**: an experience-first senior-dog-care
topical-authority affiliate blog. Semantic SEO architecture (central entity:
*the senior dog*; central intent: *"help me care for my aging dog"*).

Strategy source: `~/workspace/research_notes/semantic-seo-dogtur-20260930-0755/report.md`

## Local development

```bash
npm install     # once
npm run dev     # local preview at http://localhost:4321
npm run build   # static build → dist/
npm run preview # serve the production build locally
npm run check   # astro check (types)
```

Article content lives in `src/content/articles/*.md` (84 planned articles, all
`status: planned` → rendered as **noindex writer briefs** until fleshed out).

- Regenerate article briefs: `python3 scripts/generate-articles.py`
- Regenerate the content map: `python3 scripts/content-plan.py` → `CONTENT-PLAN.md`

## Publishing an article

1. Work the brief in `src/content/articles/<slug>.md`: complete the original
   element (tests, photos, data), write the full outline, add FAQ + internal links.
2. Follow the per-article checklist in `CONTENT-PLAN.md` (YMYL rules, disclosure,
   JSON-LD placeholders, images).
3. Set `status: published` in frontmatter.
4. `npm run build` — verify the page renders and is no longer noindexed.

## Deploying to Cloudflare Pages (when ready)

Cloudflare Pages settings:

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | 20+ (`.nvmrc` not included; set `NODE_VERSION=20` env var in Pages) |

Steps: push this repo to GitHub → Cloudflare Dashboard → Workers & Pages →
Create → Pages → Connect to Git → select the repo → set the build settings
above → Deploy.

Then add the custom domain `dogtur.com` under the Pages project's
**Custom domains** tab. Cloudflare will provision SSL automatically.

> ⚠️ **DNS cutover warning:** pointing `dogtur.com` at Cloudflare Pages
> **replaces the current WordPress site**. Keep a full backup/export of the
> existing WordPress content first, set up 301 redirects for any URLs worth
> preserving, and only switch DNS when the new site is ready to go live.

## Project layout

```
src/
  content/articles/   84 article briefs (content collection)
  data/sections.ts    the 7 macro-semantic sections
  layouts/            BaseLayout, ArticleLayout, ReviewLayout, PillarLayout
  components/         Breadcrumbs, DisclosureBox, ComparisonTable, ProsCons, ScoreCard, Faq
  pages/              homepage, [section]/index, [section]/[slug], trust pages, 404
  styles/global.css   no-framework base styles
public/robots.txt     sitemap reference; draft paths disallowed
CONTENT-PLAN.md       the 84-article map + launch queue + publishing checklist
```

## Status

Local scaffold complete; `npm run build` passes (99 pages). No remote, no
deploy, no DNS changes made — all deferred until explicitly authorized.
