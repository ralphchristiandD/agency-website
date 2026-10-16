# Enrich: Home Page & Site Shell Redesign

Date: 2026-10-17
Status: Draft, waiting for approval

## Why

The current draft works, but it looks AI-generated: every section repeats the same
pattern (small blue capital label → heading → grid of equal boxes), with stock building
blocks (icons in pale rounded squares, three identical cards, "01–04" numbers on navy,
a centered CTA card) and template defaults (Manrope, pill buttons, very rounded cards).

This redesign is a **draft to present to the client**. It has to look custom-made and
premium, like a U.S. consulting or creative-services firm, not an outsourcing template.

## Goals

- Home page, header and footer feel deliberately designed and distinctive.
- Every section works and looks right at **390px (phone)** and **1440px (desktop)**.
- Subtle, responsive micro-interactions; fast loading (Lighthouse 90+).
- Looks finished even before real photos and the logo arrive.

## Non-goals (this round)

- Portfolio page redesign (next round). It will automatically pick up the new
  fonts, colors and buttons, but its layout is not reworked now.
- Real photos, logo, final social links (the developer will provide them later).
- Any new npm package.

## Anti-goals (a failure even if it "works")

- Changing the client's wording, adding pages, pricing, fake stats/testimonials/logos.
- Heavy or attention-grabbing animation.
- Grey "image coming soon" boxes that make the draft look unfinished.
- Swapping one template look for another (e.g. the same layout repeated with a new font).

## Fixed constraints

From the client brief (`docs/client-brief.md`) and CLAUDE.md hard rules:
- Three pages + Privacy Policy. Client wording used as written.
- Colors: navy, charcoal, white, subtle accent. Existing color tokens stay.
- Nuxt 4 + Tailwind v4 only. No UI libraries, no new npm packages.
- Only the gentle fade-up scroll animation; everything respects reduced motion.
- Business name: **Enrich**. Email: **enrich.tog@gmail.com**.

## Decided with the developer

- The design rules in CLAUDE.md may change (font, corners, labels, layout patterns),
  as long as the client's colors and wording stay. CLAUDE.md is updated to match.
- Work order: site shell + Home first, then Contact styling, Portfolio later.
- Build in small steps, one section at a time, checked on mobile and desktop.
- Logo: text wordmark "Enrich" until the real logo is provided.

## Design (Claude's calls; the developer can override)

### Visual language
- **Fonts:** *Newsreader* (changed from Instrument Serif during build: a common default, single weight) for headlines (H1/H2, large, elegant, consulting feel),
  *Hanken Grotesk* for body text, buttons, and small headings. Both from Google Fonts
  (a stylesheet link, not an npm package). Only the weights actually used are loaded.
- **Corners:** squarer. Buttons and inputs `rounded-lg`, cards/panels `rounded-xl`.
- **Section labels:** the small blue capital "eyebrow" labels are removed from most
  sections. Structure comes from headings, thin rules and layout instead.
- **Dividers over boxes:** thin `line` rules instead of bordered cards and shadows.
- **Buttons:** keep three styles (`btn-primary`, `btn-secondary`, `btn-light`),
  restyled; primary buttons get a small arrow that nudges right on hover.
- **Accent blue:** used even more sparingly (links, focus rings, one highlight per section at most).

### Header (all pages)
- Left: "Enrich" wordmark in the serif. Right: Home · Portfolio · Contact Us · **Get Started**.
- Transparent over the page top, turns solid white with a hairline border on scroll.
- Links get a smooth underline on hover; the current page is marked.
- Mobile: menu button opens a full-width panel with large, easy-to-tap links (≥44px)
  and the Get Started button; closes on navigation and on Escape.

### Home page, top to bottom
1. **Hero:** large serif H1 "Less Busywork. Better Insights. Greater Impact." on three
   lines, client subheadline, buttons "Let's Work Together" (primary) and "Explore Our Work".
   Right side (below on mobile): a code-built illustration combining the three services,
   a calendar card, a small dashboard chart, and a video-editing timeline, layered
   like a tidy desk. No stock photos. Simplified on phones so it stays legible.
2. **Core message (new section):** the client's line set large, one sentence per line:
   "We handle your operations. / We make sense of your data. / We elevate your content."
   Each line links down to its service.
3. **Who We Are:** heading on the left, client paragraph on the right, the four
   highlights as a clean ruled list (not check-mark chips). Has an optional photo slot
   that appears only when a team photo is added. Without a photo the layout is complete.
4. **Our Services:** three full-width rows separated by rules (not three equal cards).
   Each row: icon, service name (serif), tagline, the service list in two columns on
   desktop, and a "Contact Us" button that pre-selects that service on the contact form.
   Soft background highlight on hover (desktop).
5. **Why Choose Us** (navy section): "Global Talent. U.S.-Led Support." with the four
   differentiators in a 2×2 ruled list. No "01–04" numbers.
6. **How It Works:** three steps joined by a line, horizontal on desktop and vertical on mobile.
7. **Final CTA:** full-width navy band (not a rounded card), large serif
   "Your Business Deserves More Time to Grow." + "Let's Get Started".

### Footer (all pages)
Wordmark + the core message, page links, email, location, social links, © line and
Privacy Policy. Comfortable tap spacing on mobile.

### Contact page
Restyled to the new visual language (fonts, fields, buttons, layout spacing). Form
fields and wording unchanged.

### Interactions
Button arrow nudge, link underline, service-row hover, header solid-on-scroll,
mobile menu open/close transition, fade-up on scroll. All short (≤300ms) and disabled
under `prefers-reduced-motion`.

### Performance
Static prerendered pages (already in place); fonts limited to used weights with
`display=swap`; hero illustration is inline SVG/HTML (no image download); images, when
added later, get width/height and lazy loading; YouTube embeds stay click-to-load.

## Data changes
- `app/data/site.ts`: `name` → "Enrich". Email already correct.
- `nuxt.config.ts`: `siteName` → "Enrich"; font link replaced.

## Open items (developer to provide later)
- Logo file, team photos, real social links.
- Confirm whether "California, USA" is the real business location.

## Done when
- Home, header, footer and Contact match this design at 390px and 1440px.
- `npm run generate` builds without errors.
- Lighthouse 90+ on Home and Contact (mobile and desktop).
- CLAUDE.md design rules updated to describe the new system.

## Left to the builder
Exact spacing, font sizes, icon drawings, illustration details, and transition timings,
within the rules above.
