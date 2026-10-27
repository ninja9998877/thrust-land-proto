# Thrust Land Proto

Minimal web feel-test: three nozzle layouts, single-finger thrust, hold-to-steer → soft land.

**No Unity / no levels-as-campaign / no ads.** Independent from Sort. Cigarette-skin art drop-in.

Current version: **v20**

## Play

- **GitHub Pages**: https://ninja9998877.github.io/thrust-land-proto/
- Local: open `index.html` in a browser
- Mirror: https://raw.githack.com/ninja9998877/thrust-land-proto/main/index.html

## v20 highlights

- **3 levels** (HUD `Level 1/3`… — numbers only, **no craft/brand names**):
  - **L1**: bottom 3 + top 2 corner nozzles
  - **L2**: bottom 6, no top
  - **L3**: bottom 3 compact-center, no top (more stable than span-without-top)
- Soft land → dry black-humor English line + **Next** (L3 clear → short end line + **Again** loops to L1)
- Crash → **Boom!** + **Reset** retries **same level**
- English UI; Reset not always-on; cigarette skin + bottom minimap kept

## Controls

| Input | Action |
|------|--------|
| Hold + drag | Below craft → bottom nozzles; above → top (if any); drag to aim |
| Reset / `R` | After crash — retry current level |
| Next / Again / `R` | After land — next level, or loop to L1 after clear |

## Files

- `index.html` — single-page Canvas 2D proto
- `assets/` — cigarette skin PNGs
