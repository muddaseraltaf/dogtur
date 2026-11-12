// Run: node --test src/lib/
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { calculate, rer, toKg } from './dog-calories.mjs';

test('RER for a 10 kg dog is about 394 kcal', () => {
  assert.equal(Math.round(rer(10)), 394);
});

test('pounds convert to kilograms', () => {
  assert.ok(Math.abs(toKg(22.0462, 'lb') - 10) < 1e-9);
});

test('neutered 10 kg adult needs about 630 kcal/day', () => {
  const r = calculate({ weight: 10, unit: 'kg', stage: 'neutered' });
  assert.equal(Math.round(r.daily), 630);
  assert.equal(r.cups, null);
});

test('cups use calories after the 10% treat allowance', () => {
  const r = calculate({ weight: 10, unit: 'kg', stage: 'neutered', kcalPerCup: 350, meals: 2 });
  assert.ok(Math.abs(r.cups - (r.daily * 0.9) / 350) < 1e-9);
  assert.ok(Math.abs(r.perMeal - r.cups / 2) < 1e-9);
});

test('bad input is rejected', () => {
  assert.throws(() => calculate({ weight: 0, unit: 'kg', stage: 'neutered' }));
  assert.throws(() => calculate({ weight: 'abc', unit: 'kg', stage: 'neutered' }));
  assert.throws(() => calculate({ weight: 10, unit: 'stone', stage: 'neutered' }));
  assert.throws(() => calculate({ weight: 10, unit: 'kg', stage: 'nope' }));
  assert.throws(() => calculate({ weight: 500, unit: 'kg', stage: 'neutered' }));
});
