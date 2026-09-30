"""Regenerate CONTENT-PLAN.md from article frontmatter. Run: python3 scripts/content-plan.py"""
import os, re

ART = 'src/content/articles'
SEC_NAMES = {'s1':'Senior Dog Health & Vet Care','s2':'Senior Dog Nutrition & Feeding',
 's3':'Senior Dog Mobility, Joints & Pain','s4':'Senior Dog Behavior, Cognition & Mental Wellbeing',
 's5':'Senior Dog Grooming, Hygiene & Daily Care','s6':'Senior Dog Gear & Products',
 's7':'Senior Dog Lifestyle, Travel, Adoption & End-of-Life'}
SEC_SLUGS = {'s1':'senior-dog-health','s2':'senior-dog-nutrition','s3':'senior-dog-mobility',
 's4':'senior-dog-behavior','s5':'senior-dog-grooming','s6':'senior-dog-gear','s7':'senior-dog-lifestyle'}

def fm(path):
    d = {}
    with open(path) as f:
        txt = f.read()
    m = re.match(r'^---\n(.*?)\n---', txt, re.S)
    for line in m.group(1).split('\n'):
        mm = re.match(r'^(\w+):\s*(.*)$', line)
        if mm:
            v = mm.group(2).strip()
            if v.startswith('"') and v.endswith('"'): v = v[1:-1]
            d[mm.group(1)] = v
    return d

def main():
    arts = [fm(os.path.join(ART, fn)) for fn in sorted(os.listdir(ART))]
    L = []
    L.append('# Dog Tur — Content Plan\n')
    L.append('> Canonical strategy: `~/workspace/research_notes/semantic-seo-dogtur-20260930-0755/report.md`.')
    L.append('> Regenerate this file with `python3 scripts/content-plan.py` after frontmatter changes.\n')
    L.append('## Strategy snapshot\n')
    L.append('- **Central entity:** the senior dog')
    L.append('- **Central search intent:** "help me care for my aging dog" (know → decide → buy)')
    L.append('- **Source context:** independent, experience-first senior-dog guide and testing blog — NOT a veterinary authority')
    L.append(f'- **Articles:** {len(arts)} planned '
             f"({sum(1 for a in arts if a['type']=='pillar')} pillars, "
             f"{sum(1 for a in arts if a['type']=='review')} reviews, "
             f"{sum(1 for a in arts if a['type']=='comparison')} comparisons, "
             f"{sum(1 for a in arts if a['type']=='data')} data, "
             f"{sum(1 for a in arts if a['type']=='informational')} informational). "
             'All currently `status: planned` (noindex writer briefs).')
    L.append('- **URL pattern:** `/section-slug/article-slug/`\n')
    L.append('### YMYL guardrails (non-negotiable)')
    L.append('- No medication dosages. No diagnosis at a distance. No cure/miracle claims.')
    L.append('- Health content frames everything as "signs to discuss with your vet."')
    L.append('- Explicit warning against human painkillers (ibuprofen, acetaminophen).')
    L.append('- Vet review where feasible, with named reviewer byline.')
    L.append('- Affiliate disclosure on every money page; no review publishes without real hands-on testing + original evidence.\n')
    L.append('## Section map\n')
    L.append('| # | Section | Role | Articles | Pillar URL |')
    L.append('|---|---------|------|----------|------------|')
    order = ['s1','s2','s3','s4','s5','s6','s7']
    pillars = {a['section']: a for a in arts if a['type']=='pillar'}
    roles = {'s1':'core','s2':'core','s3':'core','s4':'core','s5':'outer','s6':'core','s7':'outer'}
    for i, s in enumerate(order, 1):
        n = sum(1 for a in arts if a['section']==s)
        p = pillars[s]
        L.append(f"| {i} | {SEC_NAMES[s]} | {roles[s]} | {n} | /{SEC_SLUGS[s]}/{p['slug']}/ |")
    L.append('')
    L.append('## Launch queue (first 12) — publish 2–3/week\n')
    L.append('| # | Week | Article | Type | Original element required |')
    L.append('|---|------|---------|------|---------------------------|')
    q = sorted([a for a in arts if a['publishQueue']!='null'], key=lambda a: int(a['publishQueue']))
    weeks = ['1','1','2','2','3','3','4','4','5','5','6','6']
    for a, w in zip(q, weeks):
        oe = a.get('originalElement','—')
        if len(oe) > 90: oe = oe[:87]+'…'
        L.append(f"| {a['publishQueue']} | {w} | [{a['title']}](/{SEC_SLUGS[a['section']]}/{a['slug']}/) | {a['type']} | {oe} |")
    L.append('')
    L.append('After the launch 12, continue at 2–3/week in this order: S1 health spokes → S2 nutrition spokes → S3 mobility spokes → S4 behavior spokes → S5 grooming spokes → S6 gear reviews → S7 lifestyle/data. Publish data/asset pages (survey, lifespan table, statistics) as soon as their original datasets are ready — they earn links early.\n')
    L.append(f'## Full article table ({len(arts)})\n')
    L.append('| Queue | Slug | Section | Type | Intent | Target query | Status |')
    L.append('|-------|------|---------|------|--------|--------------|--------|')
    def sortkey(a):
        qv = int(a['publishQueue']) if a['publishQueue']!='null' else 999
        return (qv, a['section'], a['slug'])
    for a in sorted(arts, key=sortkey):
        qv = a['publishQueue'] if a['publishQueue']!='null' else '—'
        L.append(f"| {qv} | `{a['slug']}` | {a['section'].upper()} | {a['type']} | {a['intent']} | {a['targetQuery']} | {a['status']} |")
    L.append('')
    L.append('## Per-article publishing checklist\n')
    L.append('Flip `status` from `planned` to `published` ONLY when every box is ticked:\n')
    for item in [
        'Original element complete (test data, photos, chart, dataset — per the brief)',
        'Outline fully written; every H2 promise in the brief is kept',
        'FAQ section added (3–8 questions), each also a bridge to a sibling page',
        'Internal links: hub ↑, all listed siblings ↔, pillar cited where relevant',
        'YMYL check (health pages): no dosages, no diagnosis, vet-deference framing, painkiller warning where relevant',
        'Money pages: disclosure box present, affiliate links use real programs with `rel="sponsored nofollow"`',
        'Reviews: testing box dated, scorecard filled with measured values, pros/cons from testing notes, comparison table complete',
        'JSON-LD placeholders replaced (Review products/ratings; FAQ questions if added)',
        'Meta description hand-refined; title ≤ 60 chars',
        'Images: original photos with descriptive alt text, compressed (WebP)',
        '`npm run build` passes; page renders correctly at mobile width',
    ]:
        L.append(f'- [ ] {item}')
    L.append('')
    L.append('## Deduplication notes\n')
    L.append('- Orthopedic beds + ramps live canonically in **S6 Gear**; S3 mobility pages bridge to them.')
    L.append('- Raised bowls live canonically in **S5 Grooming & Daily Care** (`best-raised-bowls-senior-dogs`); S6 holds the comparison (`raised-feeder-vs-floor-bowls`) and bridges to it.')
    L.append('- Grooming products (brushes) live in S6; S5 grooming guides bridge to them.')
    L.append('- End-of-life: `quality-of-life-scale-dogs-hhhhhmm` is the canonical HHHHHMM page; end-of-life spokes bridge to it, never duplicate the scale.\n')
    with open('CONTENT-PLAN.md','w') as f:
        f.write('\n'.join(L) + '\n')
    print(f'regenerated CONTENT-PLAN.md from {len(arts)} articles')

if __name__ == '__main__':
    main()
