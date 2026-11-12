/**
 * The 7 macro-semantic sections of the dogtur.com topical map.
 * Central entity: the dog (every life stage; senior care stays a flagship strength).
 * Central search intent: "help me care for my dog" (know → decide → buy).
 * 12 Nov 2026: widened from senior-only. URL slugs keep their old
 * "senior-dog-*" names on purpose (no second URL migration); only names change.
 */
export interface Section {
  id: 's1' | 's2' | 's3' | 's4' | 's5' | 's6' | 's7';
  /** URL segment, e.g. /senior-dog-health/ */
  slug: string;
  name: string;
  /** core = monetization/commercial signal consolidation; outer = trust/history feeding the core */
  role: 'core' | 'outer';
  /** Pillar (hub) article slug for this section */
  pillar: string;
  blurb: string;
}

export const SECTIONS: Section[] = [
  {
    id: 's1',
    slug: 'senior-dog-health',
    name: 'Dog Health & Vet Care',
    role: 'core',
    pillar: 'senior-dog-health-guide',
    blurb:
      'Common conditions, warning signs, vet visits, bloodwork, dental care and what care really costs, for puppies to seniors. Always framed as "signs to discuss with your vet."',
  },
  {
    id: 's2',
    slug: 'senior-dog-nutrition',
    name: 'Dog Food & Nutrition',
    role: 'core',
    pillar: 'senior-dog-nutrition-guide',
    blurb:
      'What to feed your dog: breed-by-breed food guides, digestion and stool problems, allergies, special diets and senior feeding, built on label analysis and veterinary research.',
  },
  {
    id: 's3',
    slug: 'senior-dog-mobility',
    name: 'Joints, Mobility & Pain',
    role: 'core',
    pillar: 'senior-dog-mobility-guide',
    blurb:
      'Arthritis, hip and joint problems, pain signs, joint supplements and mobility aids, with strict safety rules (no dosages, no human painkillers).',
  },
  {
    id: 's4',
    slug: 'senior-dog-behavior',
    name: 'Behavior & Cognition',
    role: 'core',
    pillar: 'senior-dog-behavior-changes-guide',
    blurb:
      'What behavior changes mean, anxiety, enrichment, and dog dementia: normal behavior vs warning signs.',
  },
  {
    id: 's5',
    slug: 'senior-dog-grooming',
    name: 'Grooming & Daily Care',
    role: 'outer',
    pillar: 'senior-dog-grooming-daily-care-guide',
    blurb:
      'Brushes by coat type, bathing, nails, skin and coat care, and daily routines that keep any dog comfortable.',
  },
  {
    id: 's6',
    slug: 'senior-dog-gear',
    name: 'Dog Gear & Products',
    role: 'core',
    pillar: 'essential-products-senior-dogs',
    blurb:
      'Honest, research-based guides to collars, beds, ramps, trash cans, rain gear and the products dogs actually need, plus what is not worth buying.',
  },
  {
    id: 's7',
    slug: 'senior-dog-lifestyle',
    name: 'Lifestyle, Travel & Senior Life',
    role: 'outer',
    pillar: 'living-with-senior-dog-guide',
    blurb:
      'Exercise, travel, adoption, lifespan, and living well with an older dog, including compassionate end-of-life guidance.',
  },
];

export const sectionById = (id: Section['id']): Section =>
  SECTIONS.find((s) => s.id === id)!;

export const sectionBySlug = (slug: string): Section | undefined =>
  SECTIONS.find((s) => s.slug === slug);
