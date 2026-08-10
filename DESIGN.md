# Design

<!-- impeccable:design-schema 1 -->

## World

Bold, image-forward agency/studio case-study grid. Screenshots are always
visible at full card size — nothing is gated behind a click or expand
interaction. This replaced an earlier CI/build-pipeline "run list" concept
(see git history) that hid previews behind a click; the user rejected that
concept specifically for hiding the work, then confirmed this direction as
a standing preference — see `PRODUCT.md` → Brand Commitments. Do not
reintroduce a click-to-reveal pattern for primary project imagery.

## Tokens

Defined in `css/styles.css` under `:root`.

- `--ground`, `--surface`, `--surface-raised`, `--ink`, `--ink-muted`,
  `--ink-faint`, `--border`, `--border-strong` — all theme-aware, see
  Theming below. Never hardcode a color that should track the theme;
  always reach for the token.
- `--accent-*` — one committed status green for the status pill, resume
  button hover, hover CTA pill, and focus rings. Do not add a second field
  color. `--accent-l` (lightness) is the one accent value that differs per
  theme (darker green reads on light ground, brighter green reads on dark
  ground) — everything else derives from it via `calc()`/`hsl()`.
- `--display`: `'Bricolage Grotesque'` (Google Fonts) — the name lockup and
  every project title. Chosen for real character (irregular grotesque,
  variable weight/optical size) without landing on the flagged
  "overused AI-portfolio font" list.
- `--sans`: system-ui stack, no webfont — body copy (tagline, footer).
- `--mono`: `'JetBrains Mono'` — small data only (category tag, year,
  filter chips, search, CTA pill). Not the display voice this time; this
  world is image-led, not terminal-led.

## Theming (dark default, light opt-in)

Confirmed 2026-08-10: dark is the default theme; light is a user-triggered
override, not the other way around.

- Base `:root` (no attribute needed) holds the **dark** tokens — ground
  `#0D1721` (a very dark navy, changed 2026-08-10 from an earlier
  near-black `#0D0F11` at the user's request, then iterated darker twice
  more in the same session: `#21374E` → `#122130` → `#0D1721`. `#21374E`
  is in fact the exact background color of this portfolio's original
  pre-redesign site — the navy *hue* is a deliberate callback, not a
  coincidence, even though the final lightness ended up much darker than
  that original value; don't "simplify" the hue back toward neutral gray),
  surface `hsl(210 40% 27%)`, surface-raised `hsl(210 38% 32%)`, border
  `hsl(210 25% 36%)`/`hsl(210 25% 46%)` — these were tuned against the
  first, lighter `#21374E` ground and deliberately left unchanged through
  the later darkening passes, so the gap between ground and surface grew
  each time (intentional: more elevation contrast reads as more
  "premium," not a mistake to rebalance back to a small gap), ink
  `#EDEEF0`, ink-muted `hsl(210 18% 74%)`, ink-faint `hsl(210 14% 60%)` —
  all deliberately hue-matched to the navy ground (210°) rather than
  neutral gray, so elevation reads as "lighter navy," not "random gray
  card on a blue page." Accent lightness bumped to `52%` (brighter green
  needed for contrast on a dark ground; the light theme's `29%` would be
  invisible here). `:root[data-theme="light"]` overrides back to the
  original light palette, untouched by this change. This ordering (dark
  as the unmarked default) is deliberate — don't flip it to
  `[data-theme="dark"]` + light-as-default without re-confirming with the
  user, since "dark mode default" was an explicit requirement.
- An inline `<script>` at the very top of `<head>` (before any CSS or the
  `<title>`) reads `localStorage.getItem('theme')` and sets
  `data-theme="light"` synchronously, before first paint, only when the
  user previously chose light. This is required to avoid a flash of the
  wrong theme — do not move theme-restore logic into `js/app.js`, which
  loads too late (after first paint) to prevent the flash.
- `#themeToggle` (`js/app.js`) flips the `data-theme` attribute and
  persists the choice to `localStorage['theme']`. Sun icon shows in dark
  mode ("switch to light"), moon icon shows in light mode ("switch to
  dark") — the icon represents the destination, not the current state.
- **Contrast gotcha already hit once**: `.btn-resume`, `.chip.is-active`,
  and `.project-cta` all pair a *solid* background with text that must
  invert per theme (e.g. `.btn-resume` is a near-black pill with white
  text in light mode, but that same near-black `--ink` token IS near-white
  in dark mode — hardcoding `color: #fff` on those looked fine in light
  mode and broke completely in dark mode, text invisible against a
  now-light background). Fixed by using `color: var(--ground)` instead of
  `#fff` on all three — `--ground` is already the correct inverse of
  `--ink`/`--accent-strong` in both themes, so it self-corrects. Any new
  solid-fill component must follow this pattern (inverse text = the
  ground token, not a hardcoded white/black), not repeat the bug.
- `body` has `transition: background-color .25s ease, color .25s ease` so
  the toggle doesn't hard-cut.

## Layout

- `.site` max-width `1320px` — wider canvas than a typical narrow content
  column, deliberately, to give screenshots agency-scale room.
- `.intro` — compact identity strip (avatar, name, tagline, status pill,
  resume button). Not a full-bleed hero; the grid is the point, per
  Product Principle 2 (previews visible immediately).
- `.grid` — CSS Grid, 2 columns ≥900px, 1 column between 640-900px, 1
  column with each card also stacked internally below 640px. An odd
  project count (18 is even now, but don't assume it stays that way)
  leaving one item alone in the last row is fine; do not add filler.
- **Cards are horizontal media+body rows, confirmed 2026-08-10** — image
  left (`flex: 0 0 42%`, so it scales with whatever column width the 2-col
  vs 1-col grid gives it, rather than a fixed pixel width that would break
  proportions across breakpoints), body right. Below 640px `.project`
  switches to `flex-direction: column` and `.project-media` goes full
  width — this was an explicit requirement ("horizontal on desktop,
  collapse on top of each other on mobile"), not incidental.

## Components

Redesigned 2026-08-10 from a vertical image-over-text card (see git
history / earlier DESIGN.md revisions) into a horizontal media+body row
with a description, byline, and explicit CTA button, modeled after a
reference the user liked (rounded card, hashtag chip on the image, title,
paragraph, footer row with avatar + byline + action button).

- **`.project`** is now an `<article>`, not a link — it holds multiple
  distinct interactive targets (the media thumbnail and the CTA button),
  so wrapping the whole thing in one `<a>` stopped being correct HTML once
  it grew a real footer.
  - **IMPORTANT**: `.project{ display: flex; }` overrides the browser's
    default `[hidden]{display:none}` UA rule (this bit us once already
    with the old `<a>`-based card — same mechanism, different element).
    `.project[hidden]{ display: none; }` is declared immediately before
    `.project` to restore correct filter/hide behavior. This rule must be
    re-added any time `.project`'s tag or base `display` changes — it is
    not a one-time fix, it's a standing requirement of this pattern.
- **`.project-media`** is the `<a>` now (wraps the image + `.project-tag`
  only), linking straight to the live deployment. `aspect-ratio: 4/3` on
  desktop, `16/11` full-width on mobile, `object-fit: cover`,
  `object-position: top` (crops toward the page's hero, the most
  informative region of a landing-page screenshot). No hover
  grayscale/desaturation anymore — that belonged to the previous vertical
  card and was dropped along with it; images just display normally, with
  a modest `scale(1.045)` on hover as the one remaining image-hover
  polish.
- **`.project-tag`** — a hashtag pill (`#landingpage`, `#survey`, `#form`,
  `#fullstack`) overlaid top-left on the image, **color-coded by
  category since 2026-08-10** (the user's explicit request to "add some
  color," scoped deliberately to the tags rather than a broader palette
  change — see the exchange before assuming this opens the door to color
  elsewhere): `--tag-landingpage` blue `#2563EB`, `--tag-survey` violet
  `#7C3AED`, `--tag-form` burnt orange `#C2410C`, `--tag-fullstack` green
  `#15803D` (a fixed value, not `var(--accent)` — deliberately not tied
  to the theme-shifting accent so it stays legible without recalculating
  per theme). All four are fixed regardless of site theme (white text,
  chosen for ~5:1+ contrast against white) — not built from the
  `--ink`/`--ground` tokens, because these chips sit on top of photos of
  wildly varying color, not page chrome, so they need to stay legible
  against arbitrary image content rather than tracking light/dark state.
  Applied via a modifier class on the same element (`.project-tag
  .is-survey`, `.is-form`, `.is-fullstack`); plain `.project-tag` alone
  defaults to the landingpage blue since that's 12 of the 18 cards — every
  span still explicitly carries `.is-landingpage` too, so nothing is
  silently relying on the default. These four are a separate, narrowly
  scoped categorical palette, not a second competing *accent* — the
  "no second committed accent color" rule (Do not, below) still means
  the interactive accent (CTAs, focus rings, status pill) stays
  single-hue green; it does not forbid this kind of content-meaningful
  color elsewhere.
- **`.project-desc`** — every card now has a real paragraph description
  (added 2026-08-10; previously only the once-"featured" LPBEM card had
  one). Descriptions are grounded, non-fabricated (project type and
  real purpose, no invented metrics/testimonials, consistent with
  Evidence on Hand in `PRODUCT.md`).
- **`.project-footer`**: byline (`.project-avatar` + text) on the left,
  `.project-cta` button on the right.
  - **Byline text names the employer/client, not the author.** No "by
    Felix Angelo Jr." anywhere — this is obviously his own portfolio, so
    crediting himself on every card read as redundant (his explicit
    correction). The byline text is "VIP Response.nl" for the 17
    in-repo campaign builds and "LPBEM" for the LPBEM card, paired one
    to one with the avatar logic below. Don't reintroduce a personal
    byline; if a name is ever needed again, it should still be the
    company, matching the avatar.
  - **Avatar logic**: `img/vipresponse-logo.png` (his employer's real
    logo, fetched from vipresponse.nl's own site icon) for all 17
    in-repo campaign builds; `img/lpbem-logo.png` (fetched from
    lpbem.com/img/logo.png) for the LPBEM card specifically — it was
    built independently, not through VIP Response.nl. Don't swap this to
    per-project-name reasoning; it's strictly "LPBEM card gets the LPBEM
    logo + 'LPBEM' text, everything else gets the VIP Response logo +
    'VIP Response.nl' text."
  - `.project-avatar` has a hardcoded `background:#fff` regardless of
    theme — these are real third-party brand marks (not theme-driven UI
    chrome), and both logo files assume a light backdrop.
- **`.project-cta` wording is not uniform — this was tried and reverted.**
  LPBEM reads "view live website →" (a real, currently-live production
  site he owns, not a demo); the other 17 read "view live demo →". An
  in-between revision briefly unified both to "view live demo →"; the
  user asked within minutes to split them again. Treat the LPBEM
  distinction as settled, not a coin flip to revisit casually.
- **`.btn-resume`** — real `download` attribute (`felix-angelo-jr-resume.pdf`),
  not just `target="_blank"`; the label must match the actual behavior.
- Filter chips + search — same functional pattern throughout every
  redesign: `js/app.js` filters `.project` elements by `data-category`
  and `data-name` substring, with a real empty state.

## Motion

Cards fade/lift into place on scroll (`IntersectionObserver`, staggered
~60ms), plus a modest `scale(1.045)` image hover. Respects
`prefers-reduced-motion`.

### Cursor ring + dot

A small hexagonal ring (`#cursorRing`, an inline SVG `<polygon>`) plus an
independent center dot (`#cursorDot`) trail the pointer with a
"rubberband" delay, added 2026-08-10 per explicit request. Iterated
several times in review — see the history below, it matters for not
re-introducing a rejected version.

- **The lag is CSS, not JS.** `js/app.js` only writes
  `--pointer-x`/`--pointer-y` custom properties on every `mousemove`; each
  element's own `transition: transform` duration does the catch-up
  animation, driven by those properties feeding a `translate3d()`. Do not
  rewrite this as a `requestAnimationFrame` lerp loop — the CSS-transition
  approach is cheaper (compositor-only, no per-frame JS) and was chosen
  deliberately after the user referenced prop-for-that.netlify.app's
  same technique (CSS reacting to JS-updated custom properties, not JS
  driving the animation directly).
- **Two elements, two independent speeds, same source properties.**
  `.cursor-dot` transitions `transform` in `.12s` (reads as glued to the
  real pointer); `.cursor-ring` transitions in `.6s` (visibly trails and
  catches up — the actual rubberband feel the user asked for). Both read
  the same `--pointer-x`/`--pointer-y`, so the divergence is pure CSS
  timing, not two different JS-tracked positions. Do not collapse these
  back into one element with a pseudo-element child — that was tried
  first and can't produce independent motion, because a pseudo-element's
  position is relative to its already-transformed parent.
- **Ring shape is an SVG polygon, not a CSS circle.** `viewBox="0 0 24
  24"`, `points="12,2 20,7 20,17 12,22 4,17 4,7"` (hexagon), styled via
  `fill:none; stroke:var(--accent); stroke-width:2px` on the `<svg>` (SVG
  inherits stroke/fill to the `<polygon>`). A `border-radius`+`border`
  div can't produce a hexagon; don't revert to that approach if asked to
  adjust the shape again — adjust the `points` attribute instead.
- **Stacking is intentionally `z-index: 100`/`101`, on top of content.**
  This flipped from an earlier version that used `z-index: -1` to sit
  *behind* content as a soft ambient background glow — the user
  explicitly asked for it to render above cards instead, since a small
  cursor accent reads as part of the pointer, not page decoration.
  `position: fixed` always paints in a later stacking step than static
  in-flow content regardless of DOM order, so getting this right in
  either direction requires an explicit z-index, never `0`/`auto`.
- **Works in both themes now**, using `var(--accent)` directly (no
  light-mode `display:none` override). An earlier version used a blurred
  `radial-gradient` + `mix-blend-mode: screen`, which is invisible
  against a light ground and so was dark-mode-only; the current solid
  stroke has no such limitation.
- Disabled on touch/coarse pointers
  (`@media (hover:none),(pointer:coarse)`) and on
  `prefers-reduced-motion: reduce`, both in CSS (`display:none`) and in JS
  (the `mousemove` listener is never attached when
  `matchMedia('(hover:hover) and (pointer:fine)')` is false), so it costs
  nothing on mobile.
- `pointer-events: none` on both elements — they must never intercept
  clicks, especially now that they render above cards.

## Content rules

- 18 total featured projects: 17 in-repo builds (16 `landing_pages/` + 1
  `prototyping_forms/`, linked to `https://kuyakf.github.io/portfolio/…`)
  plus the external LPBEM website (`https://lpbem.com/`) — this is the
  whole credibility mechanism of the page, keep every link real.
- Five folders/projects are intentionally not featured: three under
  `landing_pages/` (`jeansRus`, `maxvision-lander`,
  `novaparis-fr-shopify-rip`) that were never featured, plus two under
  `prototyping_forms/` (`amazon-payment`, `cc-template`) that *were*
  featured and were removed from the showcase 2026-08-10 at the user's
  request — the folders/files themselves are untouched, only the
  `index.html` cards were deleted. See
  `PRODUCT.md` before adding them.
- **`.collection-note`** (added 2026-08-10, between `.intro` and
  `.filters`): "200+ landing pages shipped since 2014. These {N} are the
  handpicked best of that work." Currently `{N}` = 18. **This count must
  stay in sync with the actual featured-project total** — it was written
  once for 20, then the Amazon Payment Form and CC Template cards were
  removed (also 2026-08-10) without updating this line on the first pass;
  caught and fixed before shipping, but it's exactly the kind of stale
  copy that's easy to miss on a future removal/addition. When the count
  changes, grep the whole file (`index.html`, `PRODUCT.md`, `DESIGN.md`)
  for the old number rather than trusting memory of where it appears —
  meta description, direction-contract comment, filter chip counts,
  footer text, and this note all carry it independently. Self-reported
  fact, not fabricated — see `PRODUCT.md` → Evidence on Hand. Keep it
  short and in the established voice (period-separated, no em-dash) if
  it's ever edited.
- **CTA wording differentiates LPBEM**: "view live website →" for LPBEM,
  "view live demo →" for the other 17. See Components → `.project-cta`.
- The LPBEM card (`data-category="website"`, `tag` "#fullstack") is a
  **normal-sized** grid card, same `4/3` media ratio as every other card —
  tried as an oversized, full-column-span "featured" card first (wider
  ratio, larger title) but the user asked for it back down to the same
  size as the rest. Don't re-introduce a `.project.is-featured`-style
  size bump without asking again; its only remaining distinction is the
  avatar (LPBEM's own logo instead of VIP Response's).
- Ship years are real (folder mtimes), not invented. Category tags
  (Landing Page / Survey / Form) are descriptive labels only; the actual
  filter grouping uses the real folder-based `data-category`.
- Avoid em-dash-heavy copy (AI-cadence tell) — use periods/commas.

## Do not

- Do not hide project screenshots behind a click, expand, or hover-only
  reveal on any device — this is the specific thing that got the previous
  direction rejected.
- Do not reintroduce Inter or another default webfont for body prose
  without a named reason.
- Do not remove the `.project[hidden]{ display:none; }` override rule —
  it has broken silently twice now across two different card structures
  when omitted (see Components).
- Do not add per-card background-color variety (the reference the user
  liked used varying white/navy/black card backgrounds) — that wasn't
  part of what was asked for and would conflict with "no second committed
  accent color." Only raise this if the user asks for it directly.
- Do not add a second committed *accent* color (CTAs, focus rings, status
  pill stay single-hue green) — but the `.project-tag` category colors
  (Components → `.project-tag`) are an intentional exception the user
  asked for directly; don't treat their existence as license to extend
  color further without asking.
- Do not merge the cursor ring and dot back into one element, revert the
  ring to a CSS circle, or move it back behind content (`z-index: -1`) —
  all three were tried and explicitly undone. See Cursor ring + dot.
