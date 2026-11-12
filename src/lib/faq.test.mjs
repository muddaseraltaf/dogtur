import { test } from 'node:test';
import assert from 'node:assert/strict';
import { extractFaq, faqJsonLd } from './faq.mjs';

const body = `Intro.

## Key takeaways

- one

## FAQ

### How much should I feed my Yorkie?

Most adults need **150–200** calories. See our [calculator](/tools/dog-calorie-calculator/).

### Is wet food better?

Either works.

## The bottom line

Done.`;

test('extracts questions and plain-text answers, stops at next H2', () => {
  const f = extractFaq(body);
  assert.equal(f.length, 2);
  assert.equal(f[0].q, 'How much should I feed my Yorkie?');
  assert.equal(f[0].a, 'Most adults need 150–200 calories. See our calculator.');
  assert.equal(f[1].a, 'Either works.');
});

test('no FAQ section gives empty list and no JSON-LD', () => {
  assert.deepEqual(extractFaq('## Other\n\n### Q\n\nA'), []);
  assert.equal(faqJsonLd([]), null);
});

test('JSON-LD shape', () => {
  const ld = faqJsonLd(extractFaq(body));
  assert.equal(ld['@type'], 'FAQPage');
  assert.equal(ld.mainEntity[1].name, 'Is wet food better?');
});
