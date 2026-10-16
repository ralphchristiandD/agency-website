# Enrich Home & Site Shell Redesign: Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restyle the header, footer, Home and Contact pages into a distinctive, premium look for the client draft.

**Architecture:** Design tokens and shared utilities live in `app/assets/css/main.css`; components consume them.
Home sections stay in `app/pages/index.vue`; the hero illustration stays in `HeroVisual.vue`.
No new packages; fonts come from a Google Fonts stylesheet link.

**Tech Stack:** Nuxt 4, Vue 3 `<script setup lang="ts">`, Tailwind CSS v4.

**Spec:** `docs/superpowers/specs/2026-10-17-home-redesign-design.md`

## Global Constraints

- Client copy from `docs/client-brief.md` used verbatim.
- Colors: existing tokens only (`navy`, `navy-light`, `charcoal`, `slate`, `line`, `mist`, `accent`, `accent-soft`), no hex in components.
- Fonts: Instrument Serif (headlines), Hanken Grotesk (body), Google Fonts link only.
- Business name "Enrich"; email enrich.tog@gmail.com; location "California, USA".
- Animations ≤300ms, all disabled under `prefers-reduced-motion`.
- Tap targets ≥44px on mobile. Must look right at 390px and 1440px.
- No new npm packages.

## Review Focus

1. Mobile menu: opens and closes, closes after navigation and on Escape, no page scroll behind it breaking layout.
2. Long words/lines at 390px (e.g. "Administrative Support", the H1, the email address in the footer) must not overflow horizontally.
3. Service "Contact Us" links must still pre-select the service on `/contact?service=…`.
4. Reduced motion: content must be visible with no fade (reveal) when motion is off.
5. Portfolio and Privacy pages must still render correctly with the new shared styles (`eyebrow`, `field`, buttons kept as utilities).

Verification for every task: `npm run generate` completes with no errors and the prerendered
HTML in `.output/public` / `dist` contains the expected text; then a visual check at 390px and 1440px in `npm run dev`.

---

### Task 1: Design system + site data

**Files:** Modify `app/assets/css/main.css`, `nuxt.config.ts`, `app/data/site.ts`

- [ ] Add `--font-serif: "Instrument Serif"` to `@theme`; set `--font-sans` to Hanken Grotesk.
- [ ] Base: `h1, h2` use `font-serif font-normal`; `h3, h4` stay sans.
- [ ] Restyle `btn*` utilities to `rounded-lg`, keep the three names; add `.btn-arrow` hover nudge.
- [ ] Add `link-underline` utility (animated underline). Keep `eyebrow`, `field` (`rounded-lg`).
- [ ] `nuxt.config.ts`: replace Manrope link with Instrument Serif (400, 400 italic) + Hanken Grotesk (400;500;600;700); `siteName: 'Enrich'`.
- [ ] `site.ts`: `name: 'Enrich'`.
- [ ] Verify: `npm run generate` passes.

### Task 2: Header + footer

**Files:** Modify `app/components/SiteHeader.vue`, `app/components/SiteFooter.vue`

- [ ] Header: serif "Enrich" wordmark; links with `link-underline` and active state; Get Started `btn-primary`.
      Transparent at top, white + `border-line` after scroll. Mobile panel transitions in, links ≥44px, Escape closes it.
- [ ] Footer: wordmark, core message, Pages / Contact columns, socials, © + Privacy Policy.
- [ ] Verify: generate passes; header/footer HTML contains "Enrich".

### Task 3: Hero + core message

**Files:** Modify `app/pages/index.vue`, `app/components/HeroVisual.vue`

- [ ] Hero: serif H1 on three lines, client subheadline, two buttons. No eyebrow.
- [ ] HeroVisual: calendar card + chart card + video timeline card, layered, decorative (`aria-hidden`), legible at 390px.
- [ ] New section: three lines of the core message, each linking to `#service-admin`, `#service-analytics`, `#service-video`.
- [ ] Verify: generate passes; `/` HTML contains "We make sense of your data."

### Task 4: Who We Are + Services

**Files:** Modify `app/pages/index.vue`, `app/data/site.ts` (add optional `teamPhoto?: string`)

- [ ] Who We Are: heading left, paragraph + ruled highlights list right; photo shows only if `site.teamPhoto` is set.
- [ ] Services: three full-width rows with `id="service-<key>"`, icon, serif name, tagline, two-column list (desktop),
      Contact Us link to `{ path: '/contact', query: { service: key } }`. Row hover tint on desktop.
- [ ] Verify: generate passes; HTML contains `/contact?service=video`.

### Task 5: Why Choose Us + How It Works + CTA

**Files:** Modify `app/pages/index.vue`, `app/components/CtaBand.vue`

- [ ] Why Choose Us: navy section, 2×2 ruled list, no numbers.
- [ ] How It Works: three steps joined by a line; horizontal ≥md, vertical with left line on mobile.
- [ ] CtaBand: full-width navy band, serif heading, `btn-light` with arrow (props unchanged: `title`, `button`).
- [ ] Verify: generate passes.

### Task 6: Contact page restyle + docs

**Files:** Modify `app/pages/contact.vue`, `CLAUDE.md`

- [ ] Contact: serif H1, no eyebrow, form panel `rounded-xl`, fields unchanged.
- [ ] CLAUDE.md design rules updated: fonts, corners, labels, buttons.
- [ ] Verify: generate passes; check `/portfolio` and `/privacy` still render.
