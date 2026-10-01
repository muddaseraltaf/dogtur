// Dogtur's most recommended products: the top pick from each buying guide.
// Images must come from Amazon's sanctioned sources only (SiteStripe image
// links or the Product Advertising API) — never download/re-host Amazon
// product photos. Until an image URL is supplied, cards render a placeholder.
export interface RecommendedProduct {
  name: string;
  why: string;
  url: string;
  /** plain Amazon link (no tracking tag) vs SiteStripe affiliate link */
  plain: boolean;
  guideHref: string;
  guideTitle: string;
  image: string | null;
}

export const RECOMMENDED: RecommendedProduct[] = [
  {
    name: 'Hill\u2019s Science Diet Adult 7+',
    why: 'The dependable, vet-familiar baseline for a healthy senior \u2014 moderate protein, restrained fat, and long-term feeding-trial backing.',
    url: 'https://amzn.to/4yZUm4W',
    plain: false,
    guideHref: '/senior-dog-nutrition/best-dog-food-senior-dogs/',
    guideTitle: 'Best Dog Food for Senior Dogs',
    image: null,
  },
  {
    name: 'Nutramax Dasuquin with ASU',
    why: 'The vet-clinic joint supplement standard: glucosamine + chondroitin + ASU, NASC-sealed, with the strongest owner-rating record we found.',
    url: 'https://amzn.to/4hnVKs5',
    plain: false,
    guideHref: '/senior-dog-mobility/best-joint-supplements-senior-dogs/',
    guideTitle: 'Best Joint Supplements for Senior Dogs',
    image: null,
  },
  {
    name: 'Big Barker Orthopedic Dog Bed',
    why: '7 inches of layered, CertiPUR-US foam built for large and giant seniors \u2014 the only pick here with a published pilot study behind it.',
    url: 'https://amzn.to/4hz38jj',
    plain: false,
    guideHref: '/senior-dog-gear/best-orthopedic-dog-beds-senior-dogs/',
    guideTitle: 'Best Orthopedic Dog Beds for Senior Dogs',
    image: null,
  },
  {
    name: 'Gen7Pets Natural-Step Ramp (72")',
    why: 'The longest mainstream car ramp, which means the gentlest slope \u2014 the single most important comfort factor for arthritic dogs.',
    url: 'https://amzn.to/4z8cSbk',
    plain: false,
    guideHref: '/senior-dog-gear/best-dog-ramps-senior-dogs/',
    guideTitle: 'Best Dog Ramps for Senior Dogs',
    image: null,
  },
  {
    name: 'Hill\u2019s Science Diet Adult Sensitive Stomach & Skin',
    why: 'Digestibility-first with prebiotic fiber \u2014 the vet-recommended line behind the strongest owner-reported stool improvements we found.',
    url: 'https://www.amazon.com/dp/B003MW7790',
    plain: true,
    guideHref: '/senior-dog-nutrition/best-dog-food-for-less-poop/',
    guideTitle: 'Best Dog Food for Less Poop',
    image: null,
  },
  {
    name: 'Hill\u2019s Science Diet Adult Sensitive Stomach & Skin',
    why: 'A vet-recommended digestibility line with prebiotic fiber \u2014 our first suggestion for gassy, sensitive-stomach seniors.',
    url: 'https://www.amazon.com/dp/B003MW7790',
    plain: true,
    guideHref: '/senior-dog-nutrition/best-dog-food-for-boston-terrier/',
    guideTitle: 'Best Dog Food for Boston Terriers',
    image: null,
  },
  {
    name: 'Royal Canin Yorkshire Terrier Adult',
    why: 'Kibble shaped for the Yorkie muzzle with coat-supporting nutrients \u2014 the breed-specific reference point done right.',
    url: 'https://amzn.to/4jwnsEm',
    plain: false,
    guideHref: '/senior-dog-nutrition/best-dog-food-for-yorkies/',
    guideTitle: 'Best Dog Food for Yorkies',
    image: null,
  },
  {
    name: 'VICTOR Hi-Pro Plus (30/20)',
    why: '30% protein / 20% fat for active, hard-keeper breeds \u2014 judge it on the panel, not the \u201cbully-specific\u201d marketing.',
    url: 'https://amzn.to/4hZn0fN',
    plain: false,
    guideHref: '/senior-dog-nutrition/best-dog-foods-for-american-bully/',
    guideTitle: 'Best Dog Foods for American Bullies',
    image: null,
  },
  {
    name: 'Hill\u2019s Science Diet Adult Perfect Weight',
    why: 'High-protein, higher-fiber weight management \u2014 the profile that matters most for hypothyroid dogs fighting weight gain.',
    url: 'https://amzn.to/4rGieYE',
    plain: false,
    guideHref: '/senior-dog-nutrition/best-dog-foods-for-hypothyroidism/',
    guideTitle: 'Best Dog Foods for Hypothyroidism',
    image: null,
  },
  {
    name: 'Hill\u2019s Prescription Diet w/d Multi-Benefit',
    why: 'A veterinary high-fiber diet (~22% fiber dry-matter) for dogs whose gut issues need more than an over-the-counter formula.',
    url: 'https://amzn.to/4rEcWgm',
    plain: false,
    guideHref: '/senior-dog-nutrition/best-high-fiber-dog-food/',
    guideTitle: 'Best High-Fiber Dog Food',
    image: null,
  },
  {
    name: 'Natural Balance L.I.D. Limited Ingredient',
    why: 'Single-animal-protein recipes for elimination-diet investigations \u2014 the honest starting point when allergies are suspected.',
    url: 'https://amzn.to/3TssQhn',
    plain: false,
    guideHref: '/senior-dog-nutrition/best-dog-food-for-allergies-and-yeast-infection/',
    guideTitle: 'Best Dog Food for Allergies & Yeast',
    image: null,
  },
  {
    name: 'Big Barker 7" Orthopedic (Large)',
    why: 'Dense layered foam that passes the press test for a 70-lb senior \u2014 buy for the joints your Golden will have at twelve.',
    url: 'https://amzn.to/4hz38jj',
    plain: false,
    guideHref: '/senior-dog-gear/best-dog-beds-for-golden-retrievers/',
    guideTitle: 'Best Dog Beds for Golden Retrievers',
    image: null,
  },
  {
    name: 'Tuff Pupper Classic Heavy Duty Collar',
    why: 'A 3mm ballistic-polymer weave that shrugs off water and stink \u2014 the strong-dog waterproof pick.',
    url: 'https://www.amazon.com/dp/B0863X178G',
    plain: true,
    guideHref: '/senior-dog-gear/best-waterproof-dog-collars/',
    guideTitle: 'Best Waterproof Dog Collars',
    image: null,
  },
  {
    name: 'simplehuman 50L Semi-Round (Slide Lock)',
    why: 'A locking-lid stainless can that actually defeats a determined senior scavenger \u2014 the slide lock is the whole game.',
    url: 'https://amzn.to/4AJkkv7',
    plain: false,
    guideHref: '/senior-dog-gear/dog-proof-trash-cans/',
    guideTitle: 'Dog-Proof Trash Cans',
    image: null,
  },
];
