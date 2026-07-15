# Cyber Shield Club website

The website of **Cyber Shield**, TUJ's digital-safety club — a monthly student publication that turns security research into plain-language advice anyone can use.

Built with [Astro](https://astro.build) as a fully static site: articles are Markdown files in this repo, search runs entirely in the browser ([Pagefind](https://pagefind.app)), and there is no database, backend, analytics, or third-party service of any kind.

**Want to publish an article without touching code?** Read [PUBLISHING.md](PUBLISHING.md).

## Local development

You need [Node.js](https://nodejs.org) 20 or newer.

```bash
npm install      # first time only
npm run dev      # start a dev server at http://localhost:4321
npm run build    # production build into dist/ + Pagefind search index
npm run preview  # serve the production build locally
```

Notes:

- In `npm run dev`, draft articles (`draft: true`) are visible so writers can preview them. Production builds exclude drafts from pages, sitemap, and search.
- The search box only works after `npm run build` (the index is generated then). Use `npm run preview` to test it locally.
- If an article's frontmatter is invalid (missing title, description over 160 characters, bad date, etc.), the build fails with a message naming the file and field. That's intentional — fix the frontmatter and rebuild.

## How the site is organized

```
src/content/articles/   ← one Markdown file per article (see PUBLISHING.md)
src/assets/             ← the club logo + article cover images
src/pages/              ← page templates (home, articles, issues, tags, about, 404)
src/components/         ← header, footer, cards, search, theme toggle
src/styles/             ← design tokens and global CSS
public/                 ← favicons, robots.txt, social-preview image
.github/workflows/      ← automatic deployment
```

## Deployment

The site is hosted on **Cloudflare Pages**, connected to this GitHub repo. Every push to `main` triggers an automatic build and deploy; a typical publish is live about one to two minutes after the commit. You can watch builds in the Cloudflare dashboard under **Workers & Pages → tujcybershield → Deployments**.

One-time Cloudflare project setup (an admin does this once):

1. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**, and pick this repository.
2. Set the build configuration:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
3. **Save and Deploy.**

The site is served at:

```
https://tujcybershield.com/
```

(The Cloudflare `https://tujcybershield.pages.dev/` address still works as a fallback.) The custom domain is configured in the Cloudflare Pages project under **Custom domains**. Because Cloudflare serves from the domain root, there is no `base` path in [astro.config.mjs](astro.config.mjs) (unlike a GitHub Pages project site). Cloudflare Pages is free with generous limits and works with private repos.

## Credits

Designed and built by Carl Masters for the Cyber Shield Club. Type set in Libre Franklin and Source Serif 4 (self-hosted via Fontsource).
