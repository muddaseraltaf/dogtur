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
