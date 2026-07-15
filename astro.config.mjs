// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Deployed on Cloudflare Pages, served from the domain root:
//   https://tuj-cyber-shield-club-website.pages.dev/
//
// When the club buys a custom domain (e.g. cybershield.example):
//   Change `site` to 'https://cybershield.example' and add the domain under
//   the Cloudflare Pages project (Custom domains). No `base` is needed because
//   the site is served from the root.
export default defineConfig({
  site: 'https://tuj-cyber-shield-club-website.pages.dev',
  integrations: [sitemap()],
});
