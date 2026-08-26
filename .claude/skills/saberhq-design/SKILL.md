---
name: saberhq-design
description: Use this skill to generate well-branded interfaces and assets for Saber HQ (Saber Hafezqorani's personal brand — saberhq.com), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

Brand in one line: warm paper + near-black ink, ONE accent (Okabe–Ito vermillion #D55E00, dark-mode #F08A3E) plus a companion accent held in reserve (carmine #A62B4D, dark-mode #DE5A78 — see readme.md before spending it), Geist Sans for all reading text, Geist Mono for the "instrument panel" (dates, locations, section labels, tags, metrics). Sections open with a 1.5px ink rule + numbered mono label. Other Okabe–Ito colors are data-viz only. No emoji; punctuation (— · × / → ↗) is the icon set. The mark is typographic: `saberhq.com` in Geist Mono — never draw a logo.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view: link `styles.css` (or inline the token values from `tokens/*.css`) and follow readme.md. If working on production code (e.g. the Hugo site at saberhq/saberhq.github.io), copy the token CSS and read the rules here to become an expert in designing with this brand.

For print/PDF outputs: embed static-weight TrueType instances of Geist/Geist Mono, not the variable fonts (Chromium PDF export mangles variable fonts).

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
