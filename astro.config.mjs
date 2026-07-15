// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Deployed on Cloudflare Pages at the custom domain, served from the root.
// `site` drives absolute URLs (canonical tags, sitemap, social-share images),
// so it must match the public domain. The Cloudflare *.pages.dev address still
// works as a fallback; the domain is configured under the Pages project's
// Custom domains. No `base` is needed because the site is served from the root.
export default defineConfig({
  site: 'https://tujcybershield.com',
  integrations: [sitemap()],
});
