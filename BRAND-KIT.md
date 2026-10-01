# Dogtur Brand Kit

The single source of truth for Dogtur's visual identity. Keep this updated
whenever the brand changes; the site reads its tokens from
`src/styles/global.css` (`:root` variables).

## Brand

- **Name:** Dogtur (one word, capital D). Never "Dog Tur".
- **Domain:** dogtur.com
- **Tagline:** *Research-based senior dog guides*
- **Personality:** warm, calm, trustworthy. The voice of a knowledgeable friend
  who has read everything so the reader doesn't have to. Never hypey, never
  clinical.

## Logo

- **Mark:** `public/brand/dogtur-mark.png` (512px, optimized) — a gentle senior
  dog's face in cream line-art on a deep Forest badge.
- **Small-size variant:** `public/brand/dogtur-mark-180.png` (180px, apple-touch-icon).
- **Favicon:** `public/favicon.svg` — cream paw print on Forest (hand-drawn,
  matches the mark's palette).
- **Lockup:** mark (44px, 12px rounded corners) + "Dogtur" wordmark in
  extrabold system sans + tagline in small muted text. See `.brand` in
  `src/styles/global.css` and the header in `src/layouts/BaseLayout.astro`.
- **Rules:**
  - Minimum on-screen size: 24px. Below that, use the favicon paw.
  - Clear space: at least the height of the dog's ear on all sides.
  - Don't stretch, recolor, add shadows, or place on busy photography.
  - The mark always sits on Forest green or white — never on Cream.

## Colors

| Token          | Hex       | Use                                              |
|----------------|-----------|--------------------------------------------------|
| Forest         | `#2f7d4f` | Primary brand. Logo badge, links, buttons, theme-color |
| Deep Pine      | `#1e2a24` | Headlines and body text (`--ink`)                |
| Cream          | `#fdfbf7` | Page background (`--paper`), logo line-art      |
| Sage Mist      | `#e8f3ec` | Soft highlights, hover states (`--accent-soft`)  |
| Stone          | `#5a6b62` | Secondary text (`--muted`)                       |
| Sand Line      | `#e3ddd2` | Borders and dividers (`--line`)                  |
| Amber          | `#b3541e` | Warnings and callouts only (`--warn`)            |
| Amber Wash     | `#fdf0e4` | Warning callout backgrounds (`--warn-soft`)      |

Contrast: Deep Pine on Cream ≈ 14:1. Cream on Forest ≈ 8:1. Both pass WCAG AA
for body text.

## Typography

System stacks only — no webfont downloads (fast Core Web Vitals, works offline).

- **Body:** Georgia, 'Times New Roman', serif — 1.0625rem / 1.75. Warm,
  editorial, easy reading for the 45+ audience.
- **Headings, nav, UI:** -apple-system, 'Segoe UI', Roboto, Helvetica, Arial,
  sans-serif. `h1` 2.1rem, `h2` 1.5rem, `h3` 1.2rem.
- Never use more than these two stacks.

## Buttons & links

- **Affiliate CTA:** `.affiliate-btn` — solid Forest, white text, "Check price on Amazon".
- **Plain Amazon link (no commission):** `.affiliate-btn.plain` — white with
  Forest border. Used only when no affiliate link exists for a product.
- All affiliate links carry `rel="nofollow sponsored noopener"`.

## Imagery

- Article heroes: real licensed photography (Pexels / CC0), landscape,
  1600px wide, honest alt text describing the actual photo.
- Never present stock photos as Dogtur's own product-testing photography.
- Social default: `public/og-default.jpg` (grey-muzzled senior dog portrait).

## Voice (short version)

Plain words, specific numbers, no miracle claims. Attribute other
publications' test findings by name. Say "we haven't tested this hands-on
yet" where true. Full rules: `/editorial-policy/`.
