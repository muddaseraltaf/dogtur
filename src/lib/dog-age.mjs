// Dog age → human years. Two published methods, shown side by side:
// 1. Classic rule (AKC, crediting AVMA guidance): year 1 = 15, year 2 = +9, then ~+5/yr.
// 2. Epigenetic formula (Wang et al. 2020, Cell Systems, UC San Diego; Labradors):
//    human age = 16 × ln(dog age) + 31. Designed for adult dogs (1 year and older).
// Senior onset by size matches dogtur's "What age is a senior dog?" chart.

export const SIZES = {
  toy: { label: 'Toy (under 10 lb / 4.5 kg)', seniorFrom: 11, seniorTo: 12 },
  small: { label: 'Small (10–20 lb / 4.5–9 kg)', seniorFrom: 9, seniorTo: 11 },
  medium: { label: 'Medium (20–50 lb / 9–23 kg)', seniorFrom: 8, seniorTo: 10 },
  large: { label: 'Large (50–90 lb / 23–41 kg)', seniorFrom: 7, seniorTo: 9 },
  giant: { label: 'Giant (over 90 lb / 41 kg)', seniorFrom: 6, seniorTo: 7 },
};

export const MAX_YEARS = 30;

export function classicHumanAge(years) {
  if (years <= 1) return 15 * years;
  if (years <= 2) return 15 + 9 * (years - 1);
  return 24 + 5 * (years - 2);
}

/** Returns null below 1 year (the formula is meant for adult dogs). */
export function epigeneticHumanAge(years) {
  if (years < 1) return null;
  return 16 * Math.log(years) + 31;
}

export function lifeStage(years, size) {
  const s = SIZES[size];
  if (years < 1) return 'Puppy';
  if (years < 3) return 'Young adult';
  if (years < s.seniorFrom) return 'Mature adult';
  return 'Senior';
}

export function calculateAge({ years, months = 0, size }) {
  const y = years === '' || years == null ? 0 : Number(years);
  const m = months === '' || months == null ? 0 : Number(months);
  if (!Number.isFinite(y) || !Number.isFinite(m) || y < 0 || m < 0 || m > 11) {
    throw new RangeError('Enter years (0 or more) and months (0 to 11).');
  }
  const total = y + m / 12;
  if (total <= 0) throw new RangeError('Enter an age above zero.');
  if (total > MAX_YEARS) throw new RangeError(`Enter an age of ${MAX_YEARS} years or less.`);
  const s = SIZES[size];
  if (!s) throw new RangeError('Choose a size.');
  return {
    total,
    classic: classicHumanAge(total),
    epigenetic: epigeneticHumanAge(total),
    stage: lifeStage(total, size),
    seniorFrom: s.seniorFrom,
    seniorTo: s.seniorTo,
    yearsToSenior: Math.max(0, s.seniorFrom - total),
  };
}
