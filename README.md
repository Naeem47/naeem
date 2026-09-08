# Muhammad Naeem — Flutter Developer Portfolio

Single-page developer portfolio for **Muhammad Naeem Muhammad Iqbal**, a Flutter developer based in Karachi, Pakistan.

Built with **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**. Ready to deploy on Vercel.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The resume download on the site serves [`/resume.pdf`](./public/resume.pdf). Regenerate it with:

```bash
python3 scripts/generate-resume.py
```

## Deploy on Vercel

1. Push this repo to GitHub.
2. Import the project at [vercel.com/new](https://vercel.com/new).
3. Vercel detects Next.js automatically — use the default **Build Command** (`next build`) and **Output** settings.
4. Add your GitHub and LinkedIn URLs in `lib/data.ts` (`socials`) before going live.

## Project structure

- `app/page.tsx` — single-page layout with anchor sections
- `lib/data.ts` — profile, skills, experience, projects, education
- `components/` — navbar, hero, sections, contact form, motion helpers
- `public/resume.pdf` — downloadable resume
