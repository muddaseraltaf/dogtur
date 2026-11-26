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

// ---- Lap Day: the date your dog's human-equivalent age catches up with yours.
// Uses the classic rule above (the one Lap Day calculators conventionally use).
// A fun estimate, not a health measure.
const DAY_MS = 86400000;
const YEAR_DAYS = 365.2425;

function parseDate(v) {
  if (v instanceof Date) return new Date(Date.UTC(v.getUTCFullYear(), v.getUTCMonth(), v.getUTCDate()));
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(v ?? ''));
  if (!m) return null;
  const d = new Date(Date.UTC(+m[1], +m[2] - 1, +m[3]));
  return Number.isNaN(d.getTime()) ? null : d;
}

/**
 * @returns {{date: Date, dogYears: number, humanAge: number}|null} null if it never happens within 30 dog years.
 */
export function lapDay({ ownerBirth, dogBirth, today = new Date() }) {
  const ob = parseDate(ownerBirth);
  const db = parseDate(dogBirth);
  const now = parseDate(today);
  if (!ob || !db) throw new RangeError('Enter both birth dates.');
  if (db > now) throw new RangeError('Your dog’s birth date can’t be in the future.');
  if (ob > now) throw new RangeError('Your birth date can’t be in the future.');
  if (db < ob) throw new RangeError('This calculator expects the dog to be born after you.');
  if ((now - db) / DAY_MS / YEAR_DAYS > MAX_YEARS) throw new RangeError(`Dog age must be ${MAX_YEARS} years or less.`);
  for (let day = 1; day <= MAX_YEARS * 366; day++) {
    const t = db.getTime() + day * DAY_MS;
    const dogYears = day / YEAR_DAYS;
    const ownerAge = (t - ob.getTime()) / DAY_MS / YEAR_DAYS;
    if (classicHumanAge(dogYears) >= ownerAge) {
      return { date: new Date(t), dogYears, humanAge: ownerAge };
    }
  }
  return null;
}
