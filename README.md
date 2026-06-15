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

The form submits directly from the browser to [Web3Forms](https://web3forms.com)
(free; their free plan only accepts client-side submissions).

1. Sign up at **web3forms.com** and create an Access Key for your email
2. `cp .env.local.example .env.local` and paste the key into `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`
3. Restart `npm run dev`

On Vercel, add `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` under **Project → Settings →
Environment Variables**. The key is public by design; spam is handled by a
honeypot field plus the Web3Forms dashboard.

## Build

```bash
npm run build
npm start
```

## Customize

- **Content** lives in [`lib/data.ts`](lib/data.ts) — projects, skills, experience, socials.
- **Theme tokens** (colors, shadows, animations) are in [`tailwind.config.ts`](tailwind.config.ts).
- Update social links in `SOCIALS` and the canonical URL in [`app/layout.tsx`](app/layout.tsx).
