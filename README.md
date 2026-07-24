# GMC Solutions — Vite + React + Tailwind + GitHub Pages (Full Landing)

## Quick Start
```bash
npm i
npm run dev
```

## Build
```bash
npm run build
```

The static build is generated into `dist/`.

## Deploy to GitHub Pages
1. Ensure `vite.config.ts` has `base: '/gmcsolutions-site/'` (update if repo name changes).
2. Go to **Settings → Pages** and set **Build and deployment** to **GitHub Actions**.
3. Push to `main` to trigger `.github/workflows/deploy.yml`.
