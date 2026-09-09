# Authentic Sikkim

A fast, responsive Sikkim news and culture website built with Next.js 16, TypeScript and Tailwind CSS.

## What is included

- Responsive homepage and mobile navigation
- Latest, category, district and article pages
- Search and topic browsing
- Tourism/photo sections
- Education and government-jobs content areas
- SEO metadata, sitemap, robots and RSS routes
- Accessible images and keyboard focus states
- Firebase newsroom integration when environment variables are configured
- Local fallback content so the public site works without a paid backend
- No paid API is required for the basic website

## Run locally

```bash
npm ci
npm run dev
```

Then open `http://localhost:3000`.

## Deploy for free

See `DEPLOYMENT.md`. Cloudflare currently supports Git-based automatic deployments and a Next.js-on-Workers path, while GitHub Pages is suitable only if this application is converted to a static export.

## Content

Replace the demo stories in `services/news.ts` with your own reporting or connect the Firebase `news` collection. Always verify facts and dates before publishing news.
