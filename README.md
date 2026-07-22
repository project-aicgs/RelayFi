# Relay landing page

Implementation of the [Relay Figma file](https://www.figma.com/design/3u6eYv5GMCoQGGcsgTG3tK/Relay-Page) with three visual states:

| Figma frame | Behavior |
|-------------|----------|
| **Main Outer Frame** | Default — gray layer stack, compact handoff row |
| **Main Transition States** | When bento section scrolls into view (~35% visible) |
| **Main Hover States** | When hovering an individual bento card |

## Stack

- Next.js 16 (App Router)
- Tailwind CSS v4
- [Motion](https://motion.dev/) for layout / scroll / hover transitions
- Design tokens + assets from Figma MCP (`get_design_context`, `get_variable_defs`)

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project layout

```
src/
  app/              # page + global styles / fonts
  components/
    bento/          # four feature cards + stateful visuals
    hero/           # incident widget
    layout/         # header
    sections/       # hero, bento, stats, enterprise
  hooks/            # scroll in-view for transition state
  lib/              # tokens, assets, bento state helpers
```

## Assets

Figma MCP asset URLs in `src/lib/assets.ts` expire after ~7 days. For production, export from Figma into `public/` and point `assets.ts` at local paths.

## Responsive notes

- Bento grid stacks on small screens; desktop follows the 1440px composition.
- Logo marquee animates horizontally; disabled under `prefers-reduced-motion`.
