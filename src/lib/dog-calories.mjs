// Dog daily calorie math (pure functions, shared by the calculator page and its test).
// Source: RER = 70 × kg^0.75 and the life-stage factors below, as published by
// Jennifer Coates, DVM (PetMD, "How Many Calories Does a Dog Need?").

export const LB_PER_KG = 2.20462;

/** Life-stage / activity factors that multiply RER. */
export const FACTORS = {
  neutered: { label: 'Typical spayed or neutered adult', factor: 1.6 },
  intact: { label: 'Typical intact (not neutered) adult', factor: 1.8 },
  lose: { label: 'Needs to lose weight (enter target weight)', factor: 1.0 },
  gain: { label: 'Needs to gain weight (enter target weight)', factor: 1.7 },
  light: { label: 'Light exercise / active', factor: 2.0 },
  moderate: { label: 'Moderate work or exercise', factor: 3.0 },
  heavy: { label: 'Heavy work (sled, herding all day)', factor: 6.0 },
  puppyYoung: { label: 'Puppy under 4 months', factor: 3.0 },
  puppyOld: { label: 'Puppy 4 months to adult', factor: 2.0 },
};

export const MIN_KG = 0.5;
export const MAX_KG = 100;

export function toKg(weight, unit) {
  const w = Number(weight);
  if (!Number.isFinite(w) || w <= 0) throw new RangeError('Enter a weight above zero.');
  if (unit !== 'kg' && unit !== 'lb') throw new RangeError('Unit must be kg or lb.');
  return unit === 'lb' ? w / LB_PER_KG : w;
}

/** Resting energy requirement in kcal/day. */
export function rer(kg) {
  return 70 * Math.pow(kg, 0.75);
}

/**
 * Full result for the calculator.
 * @returns {{kg:number, rer:number, daily:number, low:number, high:number, treats:number, cups:number|null, perMeal:number|null}}
 */
export function calculate({ weight, unit, stage, kcalPerCup, meals = 2 }) {
  const kg = toKg(weight, unit);
  if (kg < MIN_KG || kg > MAX_KG) {
    throw new RangeError(`Weight must be between ${MIN_KG} and ${MAX_KG} kg (about 1 to 220 lb).`);
  }
  const f = FACTORS[stage];
  if (!f) throw new RangeError('Choose a life stage.');
  const r = rer(kg);
  const daily = r * f.factor;
  // Individual dogs vary; show a ±10% band as the realistic starting range.
  const low = daily * 0.9;
  const high = daily * 1.1;
  // 10% treat rule: treats should stay under 10% of daily calories.
  const treats = daily * 0.1;

  let cups = null;
  let perMeal = null;
  const kpc = Number(kcalPerCup);
  if (kcalPerCup !== '' && kcalPerCup != null && Number.isFinite(kpc) && kpc > 0) {
    // Food from the bowl = daily calories minus the treat allowance.
    cups = (daily - treats) / kpc;
    const m = Math.max(1, Math.round(Number(meals) || 1));
    perMeal = cups / m;
  }
  return { kg, rer: r, daily, low, high, treats, cups, perMeal };
}
