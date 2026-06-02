# ⛅ Weather Now - Dashboard

High-performance weather dashboard built with React and Feature-Sliced Design.
Focused on efficient network usage, optimized assets, and scalable architecture.

**Project was initially developed locally without version control and later imported into GitHub.**

---

## Live Demo

- **Deployed App:** [Link to Vercel](https://weather-now-dashboard-fz0sl32y1-alexs-projects-ad859b69.vercel.app/)
- **Design Core:** UI/UX concept inspired by [Frontend Mentor](https://www.frontendmentor.io/challenges/weather-app-K1FhddVm49)
- **Data Source:** Powered by [Open-Meteo API](https://open-meteo.com)

---

## Key Features & Architectural Highlights

Complete Application Views & Logic:

- **Interactive City Search (search-by-city):** Instant, non-blocking location search engine powered by custom async debouncing (700ms) and real-time RTK Query hydration to prevent API rate-limiting.
- **Dynamic Suggestions Dropdown:** Implements high-fidelity UI rendering that dynamically toggles loading skeletons, immediate search progress states, and fallback results based on precise DOM mousedown outside-click capture logic.
- **Geocoding Integrations:** Native Promisification wrapper wrapping the legacy browser Geolocation API into modern asynchronous async/await structures, handling hardware coordinate detection safely with structured new Error trace maps.
- **Multi-Unit Toggle System (units):** Global client-side configuration layer managing automated conversion scales (Metric / Imperial) instantly synchronized across all independent weather widgets.

---

## Tech Stack & Dependencies

The codebase relies strictly on a production-ready, ultra-modern development ecosystem:

- **Core Runtime:** React 19 (Strict Mode active), TypeScript ~5.9, Vite 7+ (Native ESM Modules setup).
- **State Architecture:** Redux Toolkit 2.11 (Slices, Selectors) paired with React Redux 9.2.
- **Data Hydration:** RTK Query (Automated server state synchronization, query caching, and parameter polling).
- **Styling Architecture:** Sass 1.97+ (SCSS Modules), BEM Methodology, dynamic CSS Custom Properties, and `clsx` utility modifiers.
- **Build & Optimization Plugins:** `vite-plugin-image-optimizer` (powered by `sharp` 0.34 and `svgo` 4.0 for asset compressions), `@vitejs/plugin-react` 5.1.

---

## Feature-Sliced Design (FSD) Layout

The project directory structure follows strict FSD structural slices to ensure strict decoupling and bulletproof maintainability:

- `1_app/` — Root configurations, application global SCSS baselines, Redux global state store registries.
- `2_pages/` — Main view layers combining composite modules into complete dashboard routes.
- `3_widgets/` — Structural layout aggregates (e.g., dynamic forecast grids, main detailed weather blocks).
- `4_features/` — Interactive user actions (search-by-city, toggle-measurement-units).
- `5_entities/` — Pure business domain logic, isolated data models, and specialized slice structures (weather, units, API mapping utilities).
- `6_shared/` — Abstract reusable layers containing core HTTP base queries, design system UI primitives (Input, Button, SelectList), utility hooks (useDebounce, useOutsideClick), and asset configs.

---

## Getting Started Locally

1. Clone the project locally:

```bash
git clone https://github.com/tin0x/weather-now-dashboard.git
```

2. Boot into the source directory and pull production dependencies:

```bash
cd weather-now-dashboard
npm install
```

3. Fire up Vite local dev environment:

```bash
npm run dev
```

4. Run strict static type checks and compile production-ready assets:

```bash
npm run build
```

5. Run ESLint validation checks to ensure strict architectural formatting guidelines:

```bash
npm run lint
```
