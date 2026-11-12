// Dog ramp length from the height it must climb.
// length = rise ÷ sin(angle). Gentler angle = longer ramp.
// Angle guidance: about 18–20° is the most-cited vet suggestion for dogs with
// mobility problems; ~25° is the usual upper limit for agile dogs. There is no
// formal veterinary standard, so the page says so.

export const PROFILES = {
  mobility: { label: 'Arthritis, back problems or weak back legs', angle: 18 },
  senior: { label: 'Older dog, still fairly steady', angle: 20 },
  adult: { label: 'Healthy adult dog', angle: 22 },
  agile: { label: 'Young, agile dog', angle: 25 },
};

export const CM_PER_IN = 2.54;

export function rampLength(rise, angleDeg) {
  return rise / Math.sin((angleDeg * Math.PI) / 180);
}

export function calculateRamp({ rise, unit, profile }) {
  const r = Number(rise);
  if (!Number.isFinite(r) || r <= 0) throw new RangeError('Enter a height above zero.');
  if (unit !== 'in' && unit !== 'cm') throw new RangeError('Unit must be in or cm.');
  const riseIn = unit === 'cm' ? r / CM_PER_IN : r;
  if (riseIn > 60) throw new RangeError('Heights above 60 in (152 cm) need a custom ramp or a lift; ask a vet or builder.');
  const p = PROFILES[profile];
  if (!p) throw new RangeError('Choose your dog’s mobility.');
  const lengthIn = rampLength(riseIn, p.angle);
  const table = [18, 20, 22, 25].map((a) => ({ angle: a, lengthIn: rampLength(riseIn, a) }));
  return { riseIn, angle: p.angle, lengthIn, lengthCm: lengthIn * CM_PER_IN, table };
}
