import { test } from 'node:test';
import assert from 'node:assert/strict';
import { calculateAge, classicHumanAge, epigeneticHumanAge } from './dog-age.mjs';
import { calculateRamp, rampLength } from './ramp.mjs';

test('classic dog-years rule: 1→15, 2→24, 5→39', () => {
  assert.equal(classicHumanAge(1), 15);
  assert.equal(classicHumanAge(2), 24);
  assert.equal(classicHumanAge(5), 39);
});

test('epigenetic formula: 2 years ≈ 42, 4 years ≈ 53, puppies → null', () => {
  assert.equal(Math.round(epigeneticHumanAge(2)), 42);
  assert.equal(Math.round(epigeneticHumanAge(4)), 53);
  assert.equal(epigeneticHumanAge(0.5), null);
});

test('life stage depends on size', () => {
  assert.equal(calculateAge({ years: 8, size: 'large' }).stage, 'Senior');
  assert.equal(calculateAge({ years: 8, size: 'toy' }).stage, 'Mature adult');
  assert.equal(calculateAge({ years: 0, months: 6, size: 'toy' }).stage, 'Puppy');
});

test('age input validation', () => {
  assert.throws(() => calculateAge({ years: 0, months: 0, size: 'toy' }));
  assert.throws(() => calculateAge({ years: 3, months: 12, size: 'toy' }));
  assert.throws(() => calculateAge({ years: -1, size: 'toy' }));
  assert.throws(() => calculateAge({ years: 3, size: 'huge' }));
  assert.throws(() => calculateAge({ years: 40, size: 'toy' }));
});

test('ramp length: 24 in rise at 18° ≈ 77.7 in', () => {
  assert.equal(Math.round(rampLength(24, 18) * 10) / 10, 77.7);
  const r = calculateRamp({ rise: 60.96, unit: 'cm', profile: 'mobility' });
  assert.ok(Math.abs(r.riseIn - 24) < 1e-9);
  assert.equal(r.angle, 18);
  assert.equal(r.table.length, 4);
});

test('ramp input validation', () => {
  assert.throws(() => calculateRamp({ rise: 0, unit: 'in', profile: 'adult' }));
  assert.throws(() => calculateRamp({ rise: 20, unit: 'ft', profile: 'adult' }));
  assert.throws(() => calculateRamp({ rise: 20, unit: 'in', profile: 'nope' }));
  assert.throws(() => calculateRamp({ rise: 80, unit: 'in', profile: 'adult' }));
});

import { lapDay } from './dog-age.mjs';

test('Lap Day: owner 30 at dog birth → dog catches up when 15+9+5(n-2) ≥ 30+n', () => {
  // Classic rule: at 3 dog years dog = 29, owner = 33; at 4 → 34 vs 34. So ~4 years after the dog's birth.
  const r = lapDay({ ownerBirth: '1990-01-01', dogBirth: '2020-01-01', today: '2021-01-01' });
  assert.ok(r && Math.abs(r.dogYears - 4) < 0.05, `dogYears ${r && r.dogYears}`);
});

test('Lap Day: young owner is lapped in the first year', () => {
  const r = lapDay({ ownerBirth: '2015-06-01', dogBirth: '2020-06-01', today: '2021-01-01' });
  // owner is 5 at dog birth; dog reaches 5+t when 15t = 5+t → t ≈ 0.357 years
  assert.ok(r && Math.abs(r.dogYears - 5 / 14) < 0.01);
});

test('Lap Day: validation', () => {
  assert.throws(() => lapDay({ ownerBirth: '', dogBirth: '2020-01-01' }));
  assert.throws(() => lapDay({ ownerBirth: '1990-01-01', dogBirth: '2999-01-01' }));
  assert.throws(() => lapDay({ ownerBirth: '2021-01-01', dogBirth: '2020-01-01', today: '2022-01-01' }));
  assert.throws(() => lapDay({ ownerBirth: 'not-a-date', dogBirth: '2020-01-01' }));
});

import { calculateChocolate, band } from './chocolate.mjs';

test('chocolate bands follow Merck thresholds', () => {
  assert.equal(band(19.9), 'low');
  assert.equal(band(20), 'mild');
  assert.equal(band(45), 'heart');
  assert.equal(band(60), 'seizure');
});

test('1 oz milk chocolate, 10 lb dog ≈ 14.4 mg/kg', () => {
  const r = calculateChocolate({ type: 'milk', amount: 1, amountUnit: 'oz', weight: 10, weightUnit: 'lb' });
  assert.ok(Math.abs(r.mgPerKg - (28.3495 * 2.3) / (10 / 2.20462)) < 1e-9);
  assert.equal(r.band, 'low');
});

test('65% dark bar uses 15.5 × 0.65 mg/g; 50 g in a 10 kg dog is in the heart band', () => {
  const r = calculateChocolate({ type: 'darkPct', cocoaPct: 65, amount: 50, amountUnit: 'g', weight: 10, weightUnit: 'kg' });
  assert.ok(Math.abs(r.mgPerKg - 50 * 15.5 * 0.65 / 10) < 1e-9);
  assert.equal(r.band, 'heart');
});

test('chocolate validation', () => {
  assert.throws(() => calculateChocolate({ type: 'nope', amount: 1, amountUnit: 'g', weight: 5, weightUnit: 'kg' }));
  assert.throws(() => calculateChocolate({ type: 'darkPct', cocoaPct: 10, amount: 1, amountUnit: 'g', weight: 5, weightUnit: 'kg' }));
  assert.throws(() => calculateChocolate({ type: 'milk', amount: 0, amountUnit: 'g', weight: 5, weightUnit: 'kg' }));
  assert.throws(() => calculateChocolate({ type: 'milk', amount: 5, amountUnit: 'lb', weight: 5, weightUnit: 'kg' }));
  assert.throws(() => calculateChocolate({ type: 'milk', amount: 5, amountUnit: 'g', weight: 500, weightUnit: 'kg' }));
});
