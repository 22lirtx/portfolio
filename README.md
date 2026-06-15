# Layan Alharbi — Portfolio

A premium personal portfolio for **Layan Alharbi** — Computer Science graduate & UI/UX designer.

> _"Designing experiences that make technology feel human."_

## Stack

- **Next.js 14** (App Router) · **React 18** · **TypeScript**
- **Tailwind CSS** (custom rose-gold / soft-pink luxury theme)
- **Framer Motion** (scroll reveals, micro-interactions, modal case studies)

## Features

- Premium animated hero with aurora background, grid + grain overlays
- Light / dark mode with no flash-of-wrong-theme (inline pre-hydration script)
- Glassmorphism, gradient accents, floating elements, scroll progress bar
- Sections: Hero · About · Skills · Featured Projects · Experience · Achievements · Testimonials · Contact
- Interactive case-study modals (Seraaj, Rahub, Smart Pilgrimage Experience)
- Fully responsive & mobile-first
- SEO: metadata, Open Graph, Twitter cards, JSON-LD Person schema
- Accessible: semantic landmarks, focus states, `prefers-reduced-motion` support

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Contact form (real email sending)

The form posts to `app/api/contact/route.ts`, which delivers messages via
[Web3Forms](https://web3forms.com) (free, no domain needed).

1. Sign up at **web3forms.com** with `layan.hani.alharbi@gmail.com`
2. Copy the **Access Key** they email you
3. `cp .env.local.example .env.local` and paste the key into `WEB3FORMS_ACCESS_KEY`
4. Restart `npm run dev`

Until a key is set, the form shows a friendly "email me directly" fallback.
On Vercel, add `WEB3FORMS_ACCESS_KEY` under **Project → Settings → Environment Variables**.

## Build

```bash
npm run build
npm start
```

## Customize

- **Content** lives in [`lib/data.ts`](lib/data.ts) — projects, skills, experience, socials.
- **Theme tokens** (colors, shadows, animations) are in [`tailwind.config.ts`](tailwind.config.ts).
- Update social links in `SOCIALS` and the canonical URL in [`app/layout.tsx`](app/layout.tsx).
