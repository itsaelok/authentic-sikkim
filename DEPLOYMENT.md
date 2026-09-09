# Authentic Sikkim — free deployment

## Recommended: Cloudflare Workers

This project is a Next.js 16 application with App Router pages and route handlers. Cloudflare's current recommended path for full-stack Next.js is Workers with vinext.

1. Push this repository to GitHub.
2. In Cloudflare, open **Workers & Pages → Create application → Import a repository**.
3. Select `itsaelok/authentic-sikkim`.
4. Let Cloudflare's automatic Next.js configuration create the Workers/vinext setup, or run `npx wrangler setup` locally.
5. Add Firebase environment variables only if you want the live newsroom/admin backend:
   - `NEXT_PUBLIC_FIREBASE_API_KEY`
   - `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
   - `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
   - `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
   - `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
   - `NEXT_PUBLIC_FIREBASE_APP_ID`
6. Add `NEXT_PUBLIC_SITE_URL` after you know the final public hostname.
7. Deploy.

The public site includes local fallback stories and local images, so it remains readable even when Firebase is not configured.

## Local development

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm start
```

## Important

Do not put Firebase service-account credentials or other private secrets in `NEXT_PUBLIC_*` variables. The current public variables are intended for the browser Firebase SDK only.
