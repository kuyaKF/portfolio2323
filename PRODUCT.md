# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Plain static HTML/CSS/JS, no build step. Deploys directly to GitHub Pages (branch `main`, root) at https://kuyakf.github.io/portfolio/. Matches the rest of the repo, where every showcased project (landing_pages/, prototyping_forms/) is also plain static HTML.

## Users

Primary audience is recruiters and hiring managers screening Felix for full-time or contract front-end developer roles. They arrive with limited time and need to judge breadth and quality of shipped work quickly, then decide whether to move him forward in a hiring process.

## Product Purpose

A personal portfolio site for Felix Angelo Jr., a front-end web developer, that proves his ability to turn marketing/design concepts into fast, cross-device, production landing pages. Success means a recruiter can quickly see the range and quality of real shipped work and download/view his resume, leading to interview requests.

## Positioning

Two combined differentiators, both real and both to be represented:
1. Speed and volume at agency pace: 10+ years converting PSD/Figma marketing designs into responsive landing pages and email templates, with 18 shipped, live-linked builds as direct proof (not claims).
2. Currently blending an AI-augmented workflow (Claude Code, ChatGPT, Lovable.dev, Beefree.io) into a classic HTML/CSS/JS/jQuery foundation — practical modern tooling fluency layered onto a decade of hand-built front-end craft, not an AI-native shortcut story.

## Operating Context

Felix has worked remotely since 2019 for VIP Response.nl (marketing/campaign landing pages, email templates, large-scale Facebook campaign assets) after a Senior/Junior Frontend Developer track at E-Communication LTD (2014-2019, PSD-to-HTML conversion, PHP/JS integration, promoted to Lead Frontend Developer). The portfolio is the primary artifact he sends to prospective employers/clients; each project card links out to a live, working build hosted in this same repo.

## Capabilities and Constraints

- Static site only — no backend, no CMS, no server-side rendering available (GitHub Pages constraint).
- Must continue linking out to the 17 currently-featured live project builds under `landing_pages/` (16) and `prototyping_forms/` (1), plus the external LPBEM website (1) — 18 total (each project keeps its own folder/URL or external URL; the redesign changes only the showcase/index page, not the individual project builds).
- Three folders exist under `landing_pages/` (`jeansRus`, `maxvision-lander`, `novaparis-fr-shopify-rip`) that are NOT currently featured on the index page. `prototyping_forms/amazon-payment` and `prototyping_forms/cc-template` were featured but removed from the showcase 2026-08-10 at the user's request (files untouched, just unfeatured — same treatment as the other three). Scope is to preserve the current 18 featured projects as-is; adding any of these five back is an open/undecided expansion, not assumed in scope.
- Resume must become viewable directly from the portfolio page (previously only referenced in the header nav pattern implied by the resume PDF's own "Portfolio" link; the live site itself did not surface resume.pdf before this redesign).
- jQuery + Masonry.js currently power the grid/hover interactions; not a binding constraint, but reflects the existing JS dependency footprint if reused.

## Evidence on Hand

- 16 landing page builds under `landing_pages/` currently featured on the index grid (rituals-rip-2024, checkantivirus.com-rip, nikeair-lp, solar-alt, tmrwtoday-iphone15, splittestsolar-orange-survey, striveagle-medicare-blue-lp, striveagle-medicare-purple-lp, striveagle-redlp, striveagle-survey-splittest, nedealand-survey, sector-alarm, onlinestreaming-lp-rip, jakevstyson, bespaarkampioen, popmart-labubu-qt2).
- 1 form prototype under `prototyping_forms/` currently featured (black-red-form). 17 total in-repo featured projects.
- Each featured project has a desktop screenshot thumbnail in `img/` (`{project-name}-desktop.{jpg|png}`).
- `resume.pdf` at repo root — current ATS-optimized version (older version kept as `resume-old.pdf`, not for display).
- The LPBEM website (https://lpbem.com/) is featured on the portfolio as the 18th project — added 2026-08-10, tagged separately from the in-repo campaign builds since it's an external, currently-live production site he owns end-to-end (backend, frontend, CMS), not a static replica hosted in this repo. Screenshot at `img/lpbem-desktop.png` (captured via headless Edge, not a repo-local build).
- Headshot photo at `img/kuyakf.jpg`.
- Self-reported volume claim (2026-08-10): 200+ landing pages shipped since 2014, of which the 18 featured here are a handpicked selection, not the full body of work. Surfaced on the page itself as `.collection-note`, directly above the filter/grid. Treat as user-supplied professional fact, same standing as resume content — don't treat "only 18 shown" as needing justification beyond this note.
- No testimonials, case studies, press, or client logos on hand — must not be fabricated.

## Product Principles

1. Every project card is a real link to a real, live, working build — the portfolio's credibility rests on click-through proof, not claims or mockup screenshots.
2. Screenshot previews must be visible on the page itself, not hidden behind a click/expand. A first redesign attempt (a CI/build-pipeline "run list" that hid screenshots behind an expand interaction) was rejected specifically for this reason — confirmed 2026-08-10.
3. Optimize for a fast, low-effort scan: a recruiter should grasp breadth and quality within seconds, not need to read paragraphs.
4. Static-first, zero-build simplicity is a durable constraint, not a temporary shortcut — it must keep deploying cleanly to GitHub Pages with no build pipeline.
5. Represent both differentiators (marketing-campaign production speed, and current AI-augmented workflow) without over-indexing into an "AI-generated site" aesthetic — the site's own craft is evidence against that impression.

## Brand Commitments

Standing visual-direction decision, confirmed 2026-08-10: after rejecting a build-pipeline/dashboard concept for hiding previews, the user chose the **standing/conventional path** — a bold, image-forward project grid (screenshots always visible, no metaphor layered on top) — with **agency/studio portfolio sites** as the craft bar (bigger, bolder case-study-style imagery and magazine-like layout, not a small thumbnail gallery). Skip the direction-roll process on future redesigns of this surface unless the user asks to revisit it.

## Accessibility & Inclusion

No specific standard confirmed; no known assistive-technology user requirement stated. Standard responsive/semantic-HTML practice applies as baseline, not a compliance target.
