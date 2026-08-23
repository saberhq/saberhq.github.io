# Saber HQ Design System

Personal brand system for **Saber Hafezqorani** (saberhq.com) — computational biologist working at AI × Bio. One identity across the resume, personal website, blog, slides, and anything shared publicly.

**Sources**
- Resume (origin of the system): Claude Design project `4db79629-88e3-4a61-9b2d-7f886a9e0b12` — Geist + vermillion were settled there
- Website repo: https://github.com/saberhq/saberhq.github.io (Hugo, Book theme — generic theme being reworked onto this system; see github.md)
- Live site: https://saberhq.com

**The idea: instrument-panel editorial.** Warm paper, near-black ink, exactly one accent (Okabe–Ito vermillion), Geist for the voice, Geist Mono for the measurements. Structure comes from rules and grids, not boxes and shadows. Print-influenced (New Yorker-adjacent restraint), but engineered rather than literary — the mono rail treats a career like telemetry.

## Content fundamentals
- First person, plain and factual; friendly but precise. Real examples: "Friendly notes on what I'm building, reading, and figuring out." · "AI × Bio research, notes, and projects."
- Sentence case everywhere. The ONLY uppercase is mono section labels (`01 EXPERIENCE`) and micro footer strips (`SABER HAFEZQORANI — RÉSUMÉ`).
- Metadata is data: dates (`Sep 2025 — Aug 2026`), durations (`1 year`), locations, metrics (`62,000 downloads, 300+ GitHub stars`) are always Geist Mono, usually muted.
- Punctuation is the icon set: `—` bullets, `·` separators, `×` (AI × Bio), `/` paths, `→` continue, `↗` external, `[Paper] [Code] [Video] [Blog]` artifact links.
- Concrete numbers, bolded sparingly with weight 600 (never 700 in body).
- Tool/project names in mono inline: `mapdash`, `ntEmbd`, `NanoSim`.
- No emoji, no exclamation marks in published copy.

## Visual foundations
**Color.** Warm paper `#FAF9F7`, ink `#191613`, muted scale `--ink-2/3/4`. One accent: vermillion `#D55E00`, used *sparingly* — section numbers, links, affiliation names, dash bullets. Never large fills; `--accent-wash` only behind inline code/selection. Dark mode is warm dark (`#16130F`), accent lifts to `#F08A3E`. The other Okabe–Ito colors are **data-viz only** (`--viz-1…8`, theme-invariant, vermillion leads, grey de-emphasizes).

**Type.** Geist Sans for all reading text; Geist Mono for the instrument panel (see tokens/typography.css for the scale). Display tracks tight (−0.032em); mono labels track open (+0.14em, uppercase). Weights: 400 body, 500 mono emphasis, 600 headings.

**Structure.** Sections open with a `--rule-w-strong` solid ink top rule + numbered mono label, number in accent. Hairlines (`--rule`) divide minor content. Leader lines (1px hairline flex filler) connect title ↔ affiliation. The **rail**: two-column grid, mono meta column (`--rail-col`) left, content right.

**Surfaces.** Flat paper; no gradients (except a paper-fade protecting text over photos), no textures. Cards: hairline border, 6px radius, **no shadow at rest**; hover = `0 4px 12px rgba(0,0,0,.1)` + `translateY(-2px)`. Print: radius 0, no hovers.

**Links.** Accent color, no underline; hover → ink + underline (offset 2px). Focus: 2px accent outline, offset 2px.

**Buttons.** Primary = solid ink (inverts in dark); secondary = hairline outline. Accent is never a button fill.

**Motion.** 160ms, `--ease`; opacity/color/translate only. No bounces, no springs.

**Data viz.** Okabe–Ito palette only. Mono axis labels, hairline gridlines, no chart junk.

## Iconography
No icon set exists in the sources — the typefaces provide the glyphs (see Content fundamentals). Keep it that way on brand surfaces. If a UI genuinely needs functional icons (nav, media controls), use Lucide from CDN at 1.5px stroke, 16–20px, `currentColor` — an intentional addition, not sourced.

**Mark.** No drawn logo — the mark is typographic: primary `saberhq.com` in Geist Mono (footer strips, headers, corner marks); wordmark `SABER HQ` in Geist 600, uppercase, +0.04em tracking. Never draw a monogram glyph.

## Index
- `styles.css` — entry point; imports everything under `tokens/`
- `tokens/` — fonts, colors (light + dark), typography, spacing
- `guidelines/` — specimen cards (Design System tab)
- `components/core/` — Button, Tag, Card, SectionHeader (`.jsx` + `.d.ts` + `.prompt.md`)
- `ui_kits/website/index.html` — home page sample in the new brand (real site content)
- `ui_kits/blog/index.html` — blog article template (real post content)
- `SKILL.md` — portable instructions for reusing this system in other agentic sessions
- `github.md` — source repo association + sync state

## Intentional additions
- Lucide CDN fallback for functional icons (sources contain none).

## Caveats
- Fonts load from Google Fonts as variable fonts. For print/PDF export, embed static-weight TrueType instances (Chromium PDF engine mangles variable fonts — lesson recorded in the resume project).
- Website UI kit screens apply the NEW brand to real site content; they intentionally do not replicate the current Hugo Book theme.
