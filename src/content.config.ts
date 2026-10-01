import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { sectionById } from './data/sections';

/**
 * Article collection — the semantic content network.
 *
 * Every planned or published article lives in src/content/articles/*.md.
 * Frontmatter drives routing (/section-slug/article-slug/), layouts,
 * internal linking, the sitemap, and the CONTENT-PLAN.md map.
 *
 * status: "planned"  → renders a noindex brief page (writer's brief, not publishable)
 * status: "published" → indexable article (requires: original element done,
 *                          disclosure added, YMYL rules satisfied)
 */
const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    /** URL slug — used in /section-slug/slug/ */
    slug: z.string(),
    /** Macro-semantic section id: s1..s7 */
    section: z.enum(['s1', 's2', 's3', 's4', 's5', 's6', 's7']),
    /** Human section name (denormalized for convenience) */
    sectionName: z.string(),
    /** Article type drives which layout renders */
    type: z.enum(['pillar', 'review', 'comparison', 'data', 'informational', 'asset']),
    /** Search intent: Informational | Commercial investigation | Transactional */
    intent: z.string(),
    /** Type flags, e.g. ["pillar"], ["review"], ["comparison"], ["data","asset"] */
    flags: z.array(z.string()).default([]),
    status: z.enum(['planned', 'published']).default('planned'),
    /** Primary target query cluster this page owns (one intent per URL) */
    targetQuery: z.string(),
    /** One-line macro context: the single overarching topic of this page */
    macroContext: z.string().optional(),
    /** Pillar article slug this page bridges up to (contextual hierarchy) */
    hub: z.string(),
    /** Sibling article slugs to bridge to (entity–attribute overlap anchors) */
    siblings: z.array(z.string()).default([]),
    /** Launch-queue position (1–12) for the first 12; null = later phases */
    publishQueue: z.number().nullable().default(null),
    /** The required original element (photo, test, dataset) — no publish without it */
    originalElement: z.string().optional(),
    /** Key entities/attributes covered (EAV planning aid) */
    entities: z.array(z.string()).default([]),
    /** Meta description — refine by hand before publishing */
    description: z.string(),
    /** Estimated reading time; set when published */
    minutes: z.number().optional(),
    /** Hero image path (e.g. /images/slug.jpg) — rendered under the headline */
    hero: z.string().optional(),
    /** Alt text for the hero image */
    heroAlt: z.string().optional(),
  })
  // Derive the URL section slug from the section id (s1..s7)
  .transform((data) => ({
    ...data,
    sectionSlug: sectionById(data.section).slug,
  }))});

export const collections = { articles };
