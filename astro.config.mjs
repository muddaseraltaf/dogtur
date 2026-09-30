import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  // Production domain. Keep this as the canonical host for dogtur.com.
  site: 'https://dogtur.com',
  integrations: [
    sitemap({
      // Only index published (non-draft) URLs; planned briefs stay out of the sitemap.
      filter: (page) => !page.includes('/planned/'),
    }),
  ],
});
