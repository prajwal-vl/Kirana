# Kirana — Smart Billing for Local Stores

An AI-powered billing and analytics landing page built with **Next.js 14**, **TypeScript**, and **CSS Modules**. Uses [Lucide React](https://lucide.dev/) for icons and [Sora](https://fonts.google.com/specimen/Sora) + [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) from Google Fonts.

---

## Project Structure

```
kirana/
├── src/
│   ├── app/
│   │   ├── globals.css          # CSS variables, keyframe animations
│   │   ├── layout.tsx           # Root layout + metadata
│   │   └── page.tsx             # Main page (composes all sections)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx / .module.css
│   │   │   └── Footer.tsx / .module.css
│   │   ├── sections/
│   │   │   ├── Hero.tsx / .module.css
│   │   │   ├── Problem.tsx / .module.css
│   │   │   ├── Features.tsx / .module.css
│   │   │   ├── HowItWorks.tsx / .module.css
│   │   │   ├── Pricing.tsx / .module.css
│   │   │   ├── Testimonials.tsx / .module.css
│   │   │   └── CTA.tsx / .module.css
│   │   └── ui/
│   │       ├── PhoneMockup.tsx / .module.css
│   │       ├── FeatureVisuals.tsx / .module.css
│   │       └── SectionTag.tsx / .module.css
│   └── lib/
│       └── constants.ts         # All content data (copy, features, pricing, etc.)
├── public/                      # Static assets (add your images/icons here)
├── next.config.js
├── tsconfig.json
├── package.json
└── README.md
```

---

## Prerequisites

- **Node.js** v18 or higher — [Download](https://nodejs.org/)
- **npm** v9+ (bundled with Node.js) or **yarn** / **pnpm**

Check your version:
```bash
node -v   # should be >= 18
npm -v    # should be >= 9
```

---

## Setup Instructions

### 1. Install dependencies

```bash
cd kirana
npm install
```

> This will install Next.js 14, React 18, TypeScript, Lucide React, and all dev dependencies.

### 2. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page hot-reloads on any file change.

### 3. Build for production

```bash
npm run build
npm run start
```

---

## Customising Content

All text content, pricing, features, testimonials, and mock data live in one file:

```
src/lib/constants.ts
```

Edit this file to update:
- **Navigation links** — `NAV_LINKS`
- **Hero stats** — `HERO_STATS`
- **Problem cards** — `PROBLEMS`
- **How it works steps** — `STEPS`
- **Pricing plans** — `PLANS`
- **Testimonials** — `TESTIMONIALS`
- **Phone mockup bill items** — `MOCK_BILL_ITEMS`
- **Udhar book customers** — `MOCK_CUSTOMERS`

---

## Customising Design

All design tokens (colors, fonts) are CSS variables in `src/app/globals.css`:

```css
:root {
  --saffron: #E85D26;        /* primary brand color */
  --saffron-light: #FFF0E8;  /* light tint for backgrounds */
  --saffron-mid: #F5884A;    /* mid tone for gradients */
  --green: #1A7A4A;          /* testimonials section bg */
  --green-mid: #2DA066;      /* success states */
  --navy: #0F1B2D;           /* dark section bg + text */
  --cream: #FDF8F0;          /* page background */
  --muted: #6B7A8D;          /* secondary text */
  --font-main: 'Sora', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```

Change any value here and it cascades across the entire site.

---

## Adding a New Section

1. Create `src/components/sections/MySection.tsx` and `MySection.module.css`
2. Import and use it in `src/app/page.tsx`

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 14 (App Router) | Framework |
| TypeScript | Type safety |
| CSS Modules | Scoped component styles |
| Lucide React | Icons |
| Google Fonts (Sora + JetBrains Mono) | Typography |

---

## License

MIT — free to use and modify for your projects.
