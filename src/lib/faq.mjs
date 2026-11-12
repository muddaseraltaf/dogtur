// Pull FAQ question/answer pairs out of an article's markdown body so the
// layouts can emit FAQPage JSON-LD. Expects the house format:
//   ## FAQ   (or "## Frequently asked questions")
//   ### Question?
//   Answer paragraph(s)...

const FAQ_HEADING = /^##\s+(FAQ|FAQs|Frequently asked questions)\b.*$/im;

/** Markdown inline → plain text (links, emphasis, code, html tags). */
export function plain(md) {
  return md
    .replace(/<[^>]+>/g, '')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[*_`]{1,3}([^*_`]+)[*_`]{1,3}/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
}

export function extractFaq(body = '') {
  const m = FAQ_HEADING.exec(body);
  if (!m) return [];
  let rest = body.slice(m.index + m[0].length);
  const next = rest.search(/^##\s/m);
  if (next >= 0) rest = rest.slice(0, next);
  const items = [];
  for (const block of rest.split(/^###\s+/m).slice(1)) {
    const nl = block.indexOf('\n');
    const q = plain(nl < 0 ? block : block.slice(0, nl));
    const a = plain(nl < 0 ? '' : block.slice(nl + 1));
    if (q && a) items.push({ q, a });
  }
  return items;
}

export function faqJsonLd(items) {
  if (!items.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}
