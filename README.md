# Land Parcel Scorecard

A simple React/Vite demo app that evaluates mock land parcels using basic suitability rules.

## What it demonstrates

- Basic React components
- Data-driven rendering
- A simple land parcel scoring function
- Vite production build
- GitHub Actions workflow
- GitHub Pages deployment

## Local development

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Build:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## GitHub Pages deployment

This project includes a GitHub Actions workflow at:

```text
.github/workflows/deploy-pages.yml
```

On every push to `main`, GitHub Actions will:

1. Check out the repository
2. Set up Node.js
3. Install dependencies
4. Build the Vite app
5. Deploy the `dist/` folder to GitHub Pages