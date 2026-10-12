# Nicholas's Portfolio — Current State Audit

Purpose: reference doc capturing what exists today, before a redesign. Written for handoff to another agent — assume no prior context on this codebase.

Repo: `fluid-portfolio` (deploys to `https://Nichk2.github.io/nicholas_portfolio/`)

---

## 1. Tech Stack

- **Framework:** React 18 + TypeScript, built with Vite 5 (`@vitejs/plugin-react-swc`)
- **Routing:** `react-router-dom` v6, using `HashRouter` (not `BrowserRouter`) — required because the site is a static GitHub Pages deploy with no server-side rewrite rules. URLs look like `/#/case-study/visabuddy`.
- **Styling:** Tailwind CSS v4 (via `@tailwindcss/vite` plugin — there is NO `tailwind.config.js`; all design tokens live as CSS custom properties in `src/index.css`) + `tailwindcss-animate`
- **Component library:** shadcn/ui on top of Radix UI primitives (`components.json` present, `src/components/ui/*` — accordion, dialog, dropdown, tabs, toast, tooltip, carousel, chart, sidebar, etc. — most of these are scaffolded but not all are used on real pages)
- **Animation:**
  - **GSAP is the actual animation engine**, used throughout: `gsap.context()` + `ScrollTrigger` for entrance and scroll-reveal animations, plus manual magnetic-button (mouse-follow) effects via `gsap.to()`.
  - `framer-motion` is listed in `package.json` dependencies but is **never imported anywhere in `src/`**. Dead/unused dependency — either leftover scaffolding or an abandoned plan. Worth deciding whether to actually adopt it or remove it.
  - **Lenis** (`lenis` package) provides smooth-scroll physics, wired into GSAP's ticker and `ScrollTrigger.update` via `src/hooks/useSmoothScroll.ts`. Only mounted on a specific allowlist of routes (`LENIS_ROUTES` in that file) — currently: `/`, and 5 of the 6 case studies (HybrasCollab is the one missing it — worth checking if that's intentional).
- **i18n:** `react-i18next` + `i18next-http-backend`, English and Portuguese, JSON files in `public/locales/{en,pt}/`, one namespace per page/section.
- **Analytics:** Microsoft Clarity (`src/lib/clarity.ts`, `ClarityRouteTracker` component tracks route changes since it's a SPA).
- **Other installed but lightly-used libs:** TanStack Query, react-hook-form + zod, recharts (used for 2 charts on the VisaBuddy case study — training metrics, RAG eval metrics), embla-carousel (custom carousel logic is actually hand-rolled with useState + arrays in most case studies, not embla).
- **Package manager:** bun (there's a `bun.lockb`) but `package-lock.json` also exists — check which is actually current before installing.

---

## 2. Design Tokens (src/index.css)

Dark theme only, oklch color space:

- Background: `oklch(0.15 0.02 280)` — near-black purple
- Primary: `oklch(0.7 0.25 340)` — pink/magenta
- Accent: `oklch(0.75 0.2 300)` — violet
- Foreground: `oklch(0.93 0.01 90)` — off-white
- Single typeface for everything: **"Plus Jakarta Sans"** (loaded via Google Fonts `<link>` in `index.html`), used for both `--font-body` and `--font-display` — i.e. no distinct display face, weight/size does the differentiation.
- Recurring visual motifs: `noise-bg` texture overlay, `glass-nav` / `enhanced-glass` glassmorphism (backdrop-blur + translucent borders), rounded-2xl cards, `link-underline` hover state.

---

## 3. Routes / Pages (src/App.tsx)

| Route | File | Lines | Notes |
|---|---|---|---|
| `/` | `pages/Index.tsx` | 96 | Composes Navigation + Hero + Portfolio + Contact + Footer |
| `/aboutme` | `pages/About.tsx` | 388 | About/skills page |
| `/case-study/visabuddy` | `pages/VisaBuddy.tsx` | 654 | AI chatbot / RAG project |
| `/case-study/photox` | `pages/Photox.tsx` | 413 | |
| `/case-study/hybras-collab` | `pages/HybrasCollab.tsx` | 597 | |
| `/case-study/myholybooks` | `pages/MyHolyBooks.tsx` | 812 | Largest/most complex case study |
| `/case-study/p3m-platform` | `pages/P3MPlatform.tsx` | 338 | |
| `/case-study/awesome-games` | `pages/AwesomeGames.tsx` | 607 | |
| `*` | `pages/NotFound.tsx` | 28 | 404 |

### Home (`/`) section order
1. **Navigation** (`components/Navigation.tsx`) — fixed header, logo morph animation on scroll (collapsed "N." → expanded "Nicholas"), language switcher (EN/PT), mobile hamburger menu, magnetic CTA button.
2. **Hero** (`components/Hero.tsx`) — big display title, subtitle, description with inline highlighted spans, scroll-down indicator with floating + magnetic animation.
3. **Portfolio** (`components/Portfolio.tsx`) — grid of 6 project cards (2-col on desktop), each linking to a case study, hover reveals description + arrow icon.
4. **Contact** (`components/Contact.tsx`) — heading, description, single CTA button.
5. **Footer** (`components/Footer.tsx`) — copyright, social links, branding.
6. Floating "scroll to top" button (in `Index.tsx` itself, not a separate component).

### About page (`/aboutme`) section order
1. Hero: text content (left) + contact CTA + image (right)
2. Skills section, 2-column layout:
   - Left: Design Skills card, Research Skills card (with tools list)
   - Right: AI Skills card (glowing border effect), Frontend Skills card (tech stack tags)
3. Scroll-to-top button

### Case-study page pattern (shared across all 6)
All 6 case studies follow **the same template structure**, defined by shared style constants in `src/components/CaseStudyTemplate.ts` (`CASE_STUDY_STYLES` object: background, navigation, heroSection, contentSection, glassCard, typography scale, etc.) — this is the single most important file to look at for a redesign since it's the de facto design system for these pages.

Common skeleton:
1. Local fixed nav (back-link + "Nicholas" logo — NOT reusing the home `Navigation` component, simpler duplicate)
2. Hero section: category label, project logo, project info cards (client/year/role/etc.)
3. Content sections (varies per project but generally follows a UX case-study narrative): Overview → Problem/Challenge → Research/Persona/Empathy Map → Design process (Ideate/Prototype) → Before/After or Lo-fi/Hi-fi comparison carousels → Testing → Final Design/Results → Key Takeaways
4. "Next Project" section (link to next case study)
5. Scroll-to-top button

Per-project section specifics:
- **VisaBuddy** (AI/ML-heavy): Overview → Problem → Training Platform (Jupyter/Modal GIFs) → UX/UI Design (before/after carousel) → Backend section (FastAPI/Chroma/HuggingFace stack) → Frontend section (React/Tailwind/TS stack) → Model Metrics (2 recharts: training metrics, RAG eval) → Results → Quick Note
- **Photox**: Overview → Challenge → Solution (before/after carousel) → Design Process (Empathize/Define/Ideate/Prototype/Test, each with carousels) → Results
- **HybrasCollab**: Overview → Challenge → Solution Carousel → Research → Persona → Empathy Map → Testing → Design Evolution (before/after carousel) → Final Design → Results
- **MyHolyBooks** (most complex — 812 lines): Overview → Challenge → Solution → Design Process (Empathize/Define/Ideate with tab-based feature exploration/Prototype/Test, several large carousels with nav arrows + pagination dots) → Final Product (tabbed) → Results
- **P3MPlatform**: Overview → Problem → Goal → Layers Section Redesign → Commodity Cards Redesign → Menu Simplification → New Dashboard → Quick Search Redesign → Final Result → Results
- **AwesomeGames**: Introduction → Key Sections (with emoji icons) → Process Card → Persona → Site Map → Information Architecture → Wireframes → Testing → Aggregated Empathy Map → Style Guide → High Fidelity Designs → Key Takeaways (has its own inline Footer at the bottom, unlike other case studies)

---

## 4. Shared Components (src/components/)

| Component | Role |
|---|---|
| `Navigation.tsx` | Home/global nav — logo morph, language switcher, mobile menu, magnetic CTA |
| `Hero.tsx` | Home hero only |
| `Portfolio.tsx` | Home project grid |
| `Contact.tsx` | Home contact CTA section |
| `Footer.tsx` | Home footer |
| `CaseStudyTemplate.ts` | NOT a component — shared style-constant object used by all case-study pages |
| `ScrollToTop.tsx` | Resets scroll position on route change; defers to Lenis where active |
| `ScrollToTopButton.tsx` | Floating button used on case-study pages (Index.tsx has its own inline version instead of reusing this — inconsistency to note) |
| `ClarityRouteTracker.tsx` | Fires Clarity page-view tracking on route change |
| `NavLink.tsx` | Small nav-link helper |
| `components/ui/*` | Full shadcn/Radix component set (many scaffolded, not all used) |

## 5. Hooks (src/hooks/)

| Hook | Role |
|---|---|
| `useSmoothScroll.ts` | Initializes Lenis, wires to GSAP ticker/ScrollTrigger. Route-gated via `LENIS_ROUTES` |
| `useScrollReveal.ts` | Queries `.scroll-reveal` class elements, GSAP fade+slide-up on scroll via ScrollTrigger |
| `useGsapScrollReveal.ts` | Near-duplicate of above (has `hasInitialized` ref guard) + exports `useMagneticEffect` and `useTextReveal` utility hooks — **overlaps with useScrollReveal.ts, worth consolidating** |
| `use-mobile.tsx` | Breakpoint detection |
| `use-toast.ts` | shadcn toast state |

---

## 6. Content / i18n structure

`public/locales/{en,pt}/*.json` — one file per namespace, matching page/section names: `hero`, `navigation`, `portfolio`, `contact`, `footer`, `about`, `index`, `casestudy` (shared case-study strings), plus one file per project: `visabuddy`, `photox`, `hybrascollab`, `myholybooks`, `p3mplatform`, `awesomegames`. All page copy is translation-driven — no hardcoded English strings in the case-study bodies (images/alt text aside).

---

## 7. Assets

`src/Image/<ProjectName>/` — one folder per case study, containing raw design artifacts (lo-fi/hi-fi screens, personas, empathy maps, site maps, style guides, process GIFs, tech-stack SVG logos). These are imported directly into each page file. Large, unoptimized mix of PNG/JPG/SVG/GIF — worth auditing file sizes if performance matters in the redesign.

---

## 8. Known inconsistencies / things to decide on before redesigning

1. `framer-motion` installed but unused — decide: adopt it (e.g. replace hand-rolled GSAP magnetic effects, or use for page transitions React Router doesn't give you for free) or remove it.
2. `useScrollReveal.ts` and `useGsapScrollReveal.ts` overlap significantly — consolidate.
3. Case-study pages duplicate a local nav instead of reusing `Navigation.tsx` — decide if the redesign wants one unified nav across the whole site.
4. `ScrollToTopButton.tsx` exists but `Index.tsx` reimplements its own inline version instead of using it.
5. HybrasCollab is missing from `LENIS_ROUTES` (smooth scroll not active there) — unclear if intentional.
6. Both `bun.lockb` and `package-lock.json` exist — confirm the canonical package manager.
7. No dark/light theme toggle despite `next-themes` being installed — site is dark-mode-only currently.
8. Carousels are hand-rolled (useState + array index) rather than using the installed `embla-carousel-react` — inconsistent with the dependency actually in package.json.
