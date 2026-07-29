# Forest Canopy Explorer

A React/Vite app that visualizes mock tree stands on a Leaflet map. Users can tap each polygon to view details about tree type, canopy density, health, and management recommendations.

## What it demonstrates

- React and Vite application structure
- Leaflet map integration with GeoJSON-style polygons
- Interactive modal popups for stand details
- A canopy-density legend for visual interpretation
- GitHub Actions workflow for security checks and GitHub Pages deployment
- Jenkins pipeline support for checkout, OWASP dependency scanning, and SonarQube analysis

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
2. Run an OWASP dependency scan
3. Run a security audit check
4. Build the Vite app
5. Deploy the `dist/` folder to GitHub Pages

## Jenkins pipeline

A Jenkinsfile is included at the repository root with stages for:

- Checkout
- OWASP dependency check
- SonarQube analysis
- Build