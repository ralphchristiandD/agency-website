# Saved: the Portfolio page (hidden from the website)

The Portfolio page was taken off the website on 2026-10-19, at the developer's request,
until there are real, client-approved work samples. Nothing was deleted.

Files outside `app/pages/` are not shown on the website, so `portfolio.vue` is safe here.

## What's still in the project (unchanged)

- `app/components/PortfolioCard.vue`  the card design for each project
- `app/data/portfolio.ts`             the list of projects (placeholders for now)

## How to bring the page back

1. Move `backups/portfolio-page/portfolio.vue` back to `app/pages/portfolio.vue`.
2. Add `'/portfolio'` back to `nitro.prerender.routes` in `nuxt.config.ts`.
3. Add the "Portfolio" links back in `app/components/SiteHeader.vue` and `app/components/SiteFooter.vue`.
4. Point the hero's "Explore Our Work" button (`app/pages/index.vue`) back to `/portfolio`.
5. In `app/pages/privacy.vue`, mention YouTube portfolio videos again (if the portfolio uses videos).

Or restore the whole site exactly as it was with the Git tag `with-portfolio-page`.
