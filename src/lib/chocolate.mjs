// Dog chocolate toxicity estimate.
// Source: Merck Veterinary Manual, "Chocolate Toxicosis in Animals"
// (full review Sept 2024): methylxanthine content by product and dose bands.
// mg of methylxanthines (theobromine + caffeine) per gram of product.
export const CHOCOLATES = {
  white: { label: 'White chocolate', mgPerG: 0.04 },
  milk: { label: 'Milk chocolate', mgPerG: 2.3 },
  semisweet: { label: 'Semisweet / sweet dark chocolate (e.g. chips)', mgPerG: 5.6 },
  darkPct: { label: 'Dark chocolate bar (enter % cocoa)', mgPerG: null },
  baking: { label: 'Unsweetened baking chocolate', mgPerG: 15.5 },
  cocoa: { label: 'Dry cocoa powder', mgPerG: 28.5 },
  hulls: { label: 'Cocoa bean hulls / cocoa mulch', mgPerG: 9 },
};

export const G_PER_OZ = 28.3495;
export const LB_PER_KG = 2.20462;

// Merck dose bands for dogs (mg/kg): mild signs 20, cardiotoxic 40–50, seizures ≥60.
export function band(mgPerKg) {
  if (mgPerKg >= 60) return 'seizure';
  if (mgPerKg >= 40) return 'heart';
  if (mgPerKg >= 20) return 'mild';
  return 'low';
}

export function calculateChocolate({ type, cocoaPct, amount, amountUnit, weight, weightUnit }) {
  const c = CHOCOLATES[type];
  if (!c) throw new RangeError('Choose the type of chocolate.');
  let mgPerG = c.mgPerG;
  if (type === 'darkPct') {
    const pct = Number(cocoaPct);
    if (!Number.isFinite(pct) || pct < 30 || pct > 100) throw new RangeError('Enter the cocoa percentage from the wrapper (30 to 100).');
    // Merck: a 65% bar ≈ 15.5 mg/g × 0.65 (scaled from unsweetened chocolate).
    mgPerG = 15.5 * (pct / 100);
  }
  const a = Number(amount);
  if (!Number.isFinite(a) || a <= 0) throw new RangeError('Enter how much was eaten.');
  if (amountUnit !== 'g' && amountUnit !== 'oz') throw new RangeError('Amount unit must be g or oz.');
  const w = Number(weight);
  if (!Number.isFinite(w) || w <= 0) throw new RangeError('Enter your dog’s weight.');
  if (weightUnit !== 'lb' && weightUnit !== 'kg') throw new RangeError('Weight unit must be lb or kg.');
  const grams = amountUnit === 'oz' ? a * G_PER_OZ : a;
  const kg = weightUnit === 'lb' ? w / LB_PER_KG : w;
  if (kg < 0.5 || kg > 100) throw new RangeError('Dog weight must be between 0.5 and 100 kg (about 1 to 220 lb).');
  const mg = grams * mgPerG;
  const mgPerKg = mg / kg;
  return { grams, kg, mg, mgPerKg, band: band(mgPerKg) };
}
