# Portfolio (React)

Vite + React conversion of `index.html` with [Framer Motion](https://www.framer.com/motion/) for scroll reveals, hero stagger, and micro-interactions.

## Run locally

```bash
cd portfolio-react
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Assets & legacy pages

- Static images live in `public/assets/` (copied from the original `assets/` folder).
- Case study HTML is copied next to the built site as `public/about.html`, `public/vpp_case_study_v3.html`, and `public/venya_case_study.html` so existing `assets/...` paths in those files keep working (same as the original folder layout).

## Contact CTA

Replace the placeholder `mailto:you@example.com` in `src/components/ClosingCta.jsx` with your real address.
