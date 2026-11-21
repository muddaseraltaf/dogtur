#!/usr/bin/env python3
"""Internal-link audit for the built site (run after `npm run build`).

Lists every article page with fewer than MIN_IN internal links pointing to it
from the body of OTHER article pages (nav, footer, breadcrumbs and the
automatic "more in this section" lists are excluded, so this measures real
contextual links). Also reports broken internal links.

Usage: python3 scripts/link-audit.py [min_inbound=3]
"""
import glob
import os
import re
import sys
from collections import defaultdict

MIN_IN = int(sys.argv[1]) if len(sys.argv) > 1 else 3
DIST = 'dist'
SECTIONS = ('/senior-dog-',)  # article URLs live under /senior-dog-*/<slug>/

def url_of(path):
    u = '/' + os.path.relpath(path, DIST).replace('index.html', '')
    return u if u.endswith('/') else u + '/'

def body_html(html):
    """Article body only: the markdown content sits between the disclosure box
    and the related/recommended blocks. Fall back to <main> minus <nav>/<aside>."""
    m = re.search(r'<main[^>]*>(.*)</main>', html, re.S)
    main = m.group(1) if m else html
    main = re.sub(r'<nav\b.*?</nav>', '', main, flags=re.S)
    main = re.sub(r'<aside\b.*?</aside>', '', main, flags=re.S)
    main = re.sub(r'<section class="related.*?</section>', '', main, flags=re.S)
    return main

pages = {url_of(p): p for p in glob.glob(f'{DIST}/**/index.html', recursive=True)}
articles = {u for u in pages if u.startswith(SECTIONS) and u.count('/') == 3}
tools = {u for u in pages if u.startswith('/tools/') and u != '/tools/'}
targets = articles | tools

inbound = defaultdict(set)
broken = defaultdict(set)
for u, p in pages.items():
    html = open(p, encoding='utf-8').read()
    for href in re.findall(r'href="(/[^"#?]*)', body_html(html)):
        if '.' in href.rsplit('/', 1)[-1]:
            continue
        h = href if href.endswith('/') else href + '/'
        if h not in pages:
            broken[h].add(u)
        elif h in targets and h != u and (u in articles or u in tools):
            inbound[h].add(u)  # only links from article/tool bodies count

weak = sorted(targets, key=lambda t: len(inbound[t]))
print(f'Pages with fewer than {MIN_IN} contextual internal links in:')
n = 0
for t in weak:
    if len(inbound[t]) < MIN_IN:
        n += 1
        print(f'  {len(inbound[t])}  {t}')
print(f'{n} of {len(targets)} pages below {MIN_IN}.')
if broken:
    print('\nBROKEN internal links:')
    for h, src in sorted(broken.items()):
        print(f'  {h}  <- {sorted(src)[:3]}')
sys.exit(1 if broken else 0)
