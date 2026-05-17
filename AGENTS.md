# PrevisLens Waitlist Agent Guidelines

This repository is the standalone landing/waitlist site for `previslens.com`.

It is separate from `/Users/ivy/Desktop/hp/3dproject`. Do not treat this repo as the 3D product app, and do not copy product-app code, state stores, API routes, or workspace UI into this landing page unless the user explicitly asks.

## Product Truth

The current product positioning should reflect the active PrevisLens direction:

1. Agent-first product previsualization
2. Brand DNA and creative goal intake
3. Strategy and direction selection
4. Uploaded source/reference assets as grounding material
5. Structured storyboard / shot plan review
6. Video-ready execution after the storyboard is approved

Avoid old or generic positioning such as:

1. Figma alternative
2. Moodboard workspace
3. Generic 3D editor
4. Generic AI video generator
5. Unqualified “instant final video”

## Deployment Boundary

This site is intended for Cloudflare/static export.

Rules:

1. Keep `next.config.mjs` static-export compatible.
2. Do not add Next API routes for waitlist, Stripe, Airtable, or server-side form handling.
3. Waitlist submission must use an external endpoint configured through `NEXT_PUBLIC_WAITLIST_ENDPOINT`.
4. Static assets used by metadata must exist under `public/`.

## SEO

SEO copy should be specific to PrevisLens and aligned with the current product:

1. Agent-first product previsualization
2. Grounded storyboard / shot plan
3. Brand DNA
4. Source asset / reference image grounding
5. Product video planning and execution
6. Cinematic product shots

Do not use unrelated SEO terms from older projects.

## Change Discipline

Make small, direct changes. Preserve the current visual language unless the user asks for a redesign.
