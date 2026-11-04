# Dr. Khawar Iqbal Gondal — Surgical Practice Website

Premium multipage site for **Dr. Khawar Iqbal Gondal**, Laparoscopic & General Surgeon serving Gujrat and Mandi Bahauddin, Pakistan.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS + Framer Motion
- react-hook-form + zod + Resend (appointments)
- `@react-three/fiber` organ viewer (desktop) with PNG fallback on mobile
- SEO: `generateMetadata`, Open Graph image, `sitemap.xml`, `robots.txt`, JSON-LD

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable | Required | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Yes (production) | Absolute site origin, e.g. `https://drkhawar.pk` — used for canonical URLs, sitemap, Open Graph, and structured data |
| `RESEND_API_KEY` | Yes (forms) | Resend API key for appointment emails |
| `APPOINTMENT_FROM_EMAIL` | Yes (forms) | Verified Resend sender (or `onboarding@resend.dev` while testing) |
| `APPOINTMENT_TO_EMAIL` | Yes (forms) | Inbox that receives appointment requests |

Copy `.env.example` → `.env.local` for local development. Never commit real secrets.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |

## Project structure

- `app/` — routes, API (`/api/appointment`), `sitemap.ts`, `robots.ts`, `opengraph-image.tsx`
- `components/` — layout, home/about sections, forms, SEO (`JsonLd`), UI kit
- `data/` — doctor, hospitals, services, FAQs, testimonials, blog posts
- `lib/` — site metadata helpers, structured data, appointment schema, rate limit
- `public/images/` — local assets; `public/models/organ.glb` — 3D model

## SEO & structured data

- Every page exports unique metadata via `createPageMetadata` (titles/descriptions targeting local search terms)
- Root Open Graph image: `/opengraph-image`
- `Physician`, `MedicalClinic`, `FAQPage`, and `WebSite` JSON-LD
- Sitemap at `/sitemap.xml` · robots at `/robots.txt`

## Deploy to Vercel

1. Push the repo to GitHub (or import the folder in the Vercel dashboard).
2. Create a new Vercel project → Framework Preset: **Next.js**.
3. Add environment variables from `.env.example` (set `NEXT_PUBLIC_SITE_URL` to your production domain, including `https://`).
4. Deploy. After the first deploy, point a custom domain in **Project → Settings → Domains** and update `NEXT_PUBLIC_SITE_URL` to match, then redeploy.
5. Confirm:
   - `/` loads and forms submit (Resend domain verified)
   - `/sitemap.xml` and `/robots.txt` resolve
   - `/opengraph-image` returns a 1200×630 PNG
6. Optional: submit the sitemap URL in Google Search Console.

### CLI alternative

```bash
npm i -g vercel
vercel
vercel --prod
```

Add the same env vars when prompted, or in the Vercel project settings.

## Content edits

Update copy and listings under `data/` — no CMS required. Hospital schedules, FAQs, services, and blog posts are plain TypeScript modules.
