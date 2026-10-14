# Project Rulebook: Business Support Agency Website

Claude: read this whole file before making any change. It describes the client brief,
the design rules, and how this project is organized.

## About me (the developer)

- I'm a beginner at web development. I know basic Figma and some Python, not Vue or Nuxt yet.
- Explain each change you make in simple terms (2–4 sentences), including which files you touched.
- Work in small steps. One section or one fix at a time. Never rewrite the whole site at once.
- Ask before adding any new npm package, library, or service.
- After a change, tell me how to check it in the browser (desktop and mobile view).

## The client

A U.S.-led remote business support agency (team members include people in the Philippines).
Three services: Administrative Support, Data Analytics & Reporting, Video Editing & Creative Support.

Goal: be seen as a reliable business support **partner**, not a cheap outsourcing company.
Core message: "We handle your operations. We make sense of your data. We elevate your content."

The full original brief is in `docs/client-brief.md`. Copy on the site comes from that brief;
do not rewrite the client's wording unless I ask.

## Hard rules from the client

- **Only three pages:** Home, Portfolio, Contact Us. (Privacy Policy is a legal footer page, which is allowed.)
- **No** extra pages, pricing, pricing calculators, or public prices.
- **No** fake testimonials, invented statistics, made-up client logos, or invented results.
  A portfolio "result" may only appear if the client provides it and confirms it is real.
- **No** confidential client data in any portfolio screenshot.
- **No** generic VA/outsourcing language ("cheap", "hire an agent", "from $X/hr").
- **No** long paragraphs, crowded layouts, or excessive animation. Excessive stock photos are also out.

## Tech stack

| Purpose | Tool |
|---|---|
| Framework | Nuxt 4 (Vue 3, `<script setup lang="ts">`) |
| Styling | Tailwind CSS v4 (configured in CSS, no tailwind.config.js) |
| Portfolio data | `app/data/portfolio.ts` (plain TypeScript list, no database) |
| Contact form | Web3Forms (key in `.env` as `NUXT_PUBLIC_WEB3FORMS_KEY`) |
| Analytics | Google Analytics 4 (ID in `.env` as `NUXT_PUBLIC_GA_ID`) |
| Videos | YouTube embeds that load only on click (keeps pages fast) |
| Hosting | Netlify (`netlify.toml`), static output via `npm run generate` |

Do not add a database, Firebase, a UI component library, or a CSS framework other than Tailwind.

## Design rules

All colors and the font are defined once in `app/assets/css/main.css` under `@theme`.
Always use these tokens. Never hard-code hex colors in components.

| Token | Hex | Use |
|---|---|---|
| `navy` | #0F1E3D | Brand color, headings, dark sections, primary buttons |
| `navy-light` | #1C3160 | Hover on navy |
| `charcoal` | #2B2F36 | Body text |
| `slate` | #5B6372 | Secondary text |
| `line` | #E4E7EC | Borders, dividers |
| `mist` | #F5F7FA | Light section backgrounds |
| `accent` | #3B82C4 | Small highlights, links, eyebrow labels (use sparingly) |
| `accent-soft` | #E8F1FA | Icon backgrounds, tinted boxes |

- **Font:** Manrope (loaded from Google Fonts in `nuxt.config.ts`).
- **Headlines:** large and bold (`font-extrabold` for page H1s, `font-bold` for H2/H3), tight tracking.
- **Spacing:** generous whitespace. Sections use the `section` utility (py-20 / sm:py-28).
- **Width:** content sits inside `container-page` (max-w-6xl with side padding).
- **Corners:** cards `rounded-3xl`, inputs `rounded-xl`, buttons `rounded-full`.
- **Buttons:** use `btn-primary`, `btn-secondary`, or `btn-light`. Don't invent new button styles.
- **Animation:** only the gentle `v-reveal` fade-up (add `v-reveal class="reveal"`). Respect reduced motion.
- **Mobile first:** every section must look right at 390px wide and at 1440px wide.
- **Accessibility:** real labels on form fields, alt text on meaningful images, visible focus states,
  good color contrast.

## Folder map

```
app/
  app.vue              Root: default SEO title template + Google Analytics
  layouts/default.vue  Header + page + footer wrapper
  pages/               One file = one page (index = Home, portfolio, contact, privacy)
  components/          Reusable pieces (SiteHeader, SiteFooter, PortfolioCard, CtaBand, ...)
  data/
    site.ts            Business name, email, location, social links  ← client details go here
    services.ts        The three services and their bullet lists
    portfolio.ts       Portfolio projects                             ← add projects here
  assets/css/main.css  Design tokens + reusable utilities (btn-primary, field, ...)
  plugins/reveal.ts    The v-reveal scroll animation
public/                Static files (favicon, robots.txt, /portfolio images)
docs/client-brief.md   The original client brief
```

## SEO

- Each page sets its own `title` and `description` with `useSeoMeta()`.
- Keep one `<h1>` per page.
- All pages are prerendered as static HTML.

## Before launch checklist

- [ ] Replace placeholders in `app/data/site.ts` (name, email, location, socials) and the logo in `SiteHeader.vue`
- [ ] Replace placeholder projects in `app/data/portfolio.ts` with real, approved samples
- [ ] Set `NUXT_PUBLIC_WEB3FORMS_KEY`, `NUXT_PUBLIC_GA_ID`, `NUXT_PUBLIC_SITE_URL`, `NUXT_PUBLIC_SITE_NAME`
      in Netlify's environment variables
- [ ] Replace the privacy policy placeholder with the client-approved version
- [ ] Add a social share image (`public/og-image.png`, 1200x630) and wire it into `useSeoMeta`
- [ ] Test the contact form end to end (submission arrives in the client's inbox)
- [ ] Lighthouse score 90+ on all pages, mobile and desktop
- [ ] Test on a real phone, plus Chrome, Safari, and Edge
