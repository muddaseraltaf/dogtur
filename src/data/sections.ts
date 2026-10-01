/**
 * The 7 macro-semantic sections of the dogtur.com topical map.
 * Central entity: the senior dog.
 * Central search intent: "help me care for my aging dog" (know → decide → buy).
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
    name: 'Senior Dog Health & Vet Care',
    role: 'core',
    pillar: 'senior-dog-health-guide',
    blurb:
      'Aging signs vs illness, common senior-dog conditions, vet visits, bloodwork, dental care, and the real costs of senior vet care — always framed as "signs to discuss with your vet."',
  },
  {
    id: 's2',
    slug: 'senior-dog-nutrition',
    name: 'Senior Dog Nutrition & Feeding',
    role: 'core',
    pillar: 'senior-dog-nutrition-guide',
    blurb:
      'What to feed an aging dog: research-based food reviews, feeding charts, diet transitions, and honest answers to contested nutrition questions.',
  },
  {
    id: 's3',
    slug: 'senior-dog-mobility',
    name: 'Senior Dog Mobility, Joints & Pain',
    role: 'core',
    pillar: 'senior-dog-mobility-guide',
    blurb:
      'Arthritis, pain-sign recognition, joint supplements, and mobility aids — with explicit safety rules (no dosages, no human painkillers, vet-deference on treatments).',
  },
  {
    id: 's4',
    slug: 'senior-dog-behavior',
    name: 'Senior Dog Behavior & Cognition',
    role: 'core',
    pillar: 'senior-dog-behavior-changes-guide',
    blurb:
      'Cognitive dysfunction (dog dementia), night pacing, anxiety, enrichment, and what behavior changes mean — normal aging vs warning signs.',
  },
  {
    id: 's5',
    slug: 'senior-dog-grooming',
    name: 'Senior Dog Grooming & Daily Care',
    role: 'outer',
    pillar: 'senior-dog-grooming-daily-care-guide',
    blurb:
      'Bathing, nail trimming, skin and coat care, incontinence management, and daily-care routines that keep an old dog comfortable.',
  },
  {
    id: 's6',
    slug: 'senior-dog-gear',
    name: 'Senior Dog Gear & Products',
    role: 'core',
    pillar: 'essential-products-senior-dogs',
    blurb:
      'Research-based reviews of beds, ramps, harnesses, strollers, and every product a senior dog actually needs — plus what is not worth buying.',
  },
  {
    id: 's7',
    slug: 'senior-dog-lifestyle',
    name: 'Senior Dog Lifestyle, Travel & End-of-Life',
    role: 'outer',
    pillar: 'living-with-senior-dog-guide',
    blurb:
      'Exercising, traveling, and adopting senior dogs; lifespan data; and compassionate, vet-deferred end-of-life guidance.',
  },
];

export const sectionById = (id: Section['id']): Section =>
  SECTIONS.find((s) => s.id === id)!;

export const sectionBySlug = (slug: string): Section | undefined =>
  SECTIONS.find((s) => s.slug === slug);
