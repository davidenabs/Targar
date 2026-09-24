# TARGAR Website — Next.js Redesign

Rebuilt per `TARGAR-Website-Redesign-Implementation-Guide.md`. Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm run start
```

The project builds and statically generates cleanly (`/`, `/privacy`, `/terms`, sitemap, robots.txt, manifest, app icons).

## What's implemented

- Full design system (colors, type scale, spacing, shadows) as Tailwind v4 `@theme` tokens in `app/globals.css`
- All existing TARGAR copy in `lib/content.ts` — edit copy there, not in JSX
- Header with scroll-solidify behavior + full-screen mobile nav
- Hero with staggered headline, scroll parallax on the phone mockup, trust chips
- Equation strip ("No card. No POS. No cash. = One phone number.") with sequential reveal
- How it works (3 steps), Product (7 feature cards) with hover-lift + scroll reveal
- Market section: new apron photo as lead image + existing 4 market photos in a grid, plus a desktop-only auto-drifting marquee (paused when the tab is hidden, disabled under `prefers-reduced-motion`)
- App Store button opens an accessible modal ("The iOS version is on its way. Check back soon.") instead of showing a static "Coming Soon" label — see `components/AppStoreModal.tsx`. Flip `siteConfig.iosAppLive` in `lib/content.ts` once the iOS app ships and update the button to link out directly.
- Google Play button links straight to the store, unchanged behavior
- `/privacy` and `/terms` — structured, indexable pages with clearly marked `[pending]` legal text blocks, ready for real copy
- SEO: per-page metadata, Organization + SoftwareApplication JSON-LD, `sitemap.ts`, `robots.ts`, `manifest.ts`, app icons generated from the brand mark
- Accessibility: semantic landmarks, focus-visible rings, modal focus trap + restore, alt text on every image, reduced-motion support
- Self-hosted Inter (via `@fontsource-variable/inter`) — no runtime Google Fonts request

## Still needed before launch

1. **Real Privacy Policy / Terms of Service legal text** — replace the `[Pending final legal text...]` placeholders in `app/privacy/page.tsx` and `app/terms/page.tsx`.
2. **A proper 1200×630 OG/social-share image** at `public/og-image.png` — referenced in `app/layout.tsx` metadata but not yet created.
3. **Official Apple "Download on the App Store" badge artwork**, if you want to swap the current text+glyph button for Apple's official mark (see Apple's marketing guidelines).
4. A true white-on-transparent full logo lockup for the dark footer, if you'd rather not use the reconstructed icon+wordmark that's there now.
5. Real device QA (iOS Safari + Android Chrome) and a Lighthouse pass — not yet run in this environment.

## Project structure

See the implementation guide (§12) for the full annotated file tree and the Server/Client component rationale.
