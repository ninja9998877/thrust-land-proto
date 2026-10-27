# Thrust Land Proto

Minimal web feel-test: three nozzle layouts, single-finger thrust, hold-to-steer → soft land.

**No Unity / no ads.** Independent from Sort. Cigarette-skin art drop-in.

Current version: **v22**

## Play

- **GitHub Pages**: https://ninja9998877.github.io/thrust-land-proto/
- **Live stats**: https://ninja9998877.github.io/thrust-land-proto/stats.html
- Local: open `index.html` in a browser

## v22 highlights

- **Lightweight Firestore telemetry** (project `thrust-land-proto`)
  - Unique landers (anon id in `localStorage`, counted once)
  - Success landing count + fail/Boom count
  - Attempts (each enter-play) and per-level L1/L2/L3 success/fail
  - Dashboard: `stats.html` (public read)
- Public web config only in the client — **no service-account keys**

## v21 highlights

- **L2 thrust +35%**: `thrustMult: 1.35` (base 90 → 121.5); L1/L3 unchanged

## v20 highlights

- **3 levels** (HUD `Level 1/3`… — numbers only, **no craft/brand names**):
  - **L1**: bottom 3 + top 2 corner nozzles
  - **L2**: bottom 6, no top
  - **L3**: bottom 3 compact-center, no top
- Soft land → dry black-humor English line + **Next** (L3 clear → **Again** loops to L1)
- Crash → **Boom!** + **Reset** retries **same level**

## Controls

| Input | Action |
|------|--------|
| Hold + drag | Below craft → bottom nozzles; above → top (if any); drag to aim |
| Reset / `R` | After crash — retry current level |
| Next / Again / `R` | After land — next level, or loop to L1 after clear |

## Files

- `index.html` — game
- `analytics.js` — Firestore counters
- `stats.html` — live dashboard
- `firestore.rules` — anon increment + public read
- `assets/` — cigarette skin PNGs
