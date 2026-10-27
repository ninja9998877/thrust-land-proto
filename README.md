# Thrust Land Proto

Minimal web feel-test: one craft, single-finger thrust, hold-to-steer → soft land.

**No Unity / no levels / no ads.** Independent from Sort. Includes cigarette-skin art drop-in.

Current version: **v19**

## Play

- **GitHub Pages**: https://ninja9998877.github.io/thrust-land-proto/
- Local: open `index.html` in a browser
- Mirror: https://raw.githack.com/ninja9998877/thrust-land-proto/main/index.html

## v19 highlights

- **English UI** throughout (HUD, status, hints, outcomes)
- **Single craft** only (Falcon-layout nozzles: bottom 3 + top 2 corners). Craft switcher and 1/2/3 keys removed/hidden. **No craft-name label** in UI.
- **Reset not always-on**: hidden during flight; **Reset (R)** appears only after a crash. Success shows **Again**.
- **Outcomes**: soft land on pad (speed / tilt / pad gates) → green flash + **Landed!**; hard impact / tip-over / miss pad → boom particles + **Boom!**
- Fuel empty still allows free-fall; miracle soft land counts as success
- Keeps v18 nozzle counts, cigarette skin, bottom minimap

## Controls

| Input | Action |
|------|--------|
| Hold + drag | Finger below craft → bottom nozzles; above → top; drag to aim |
| Left mouse drag | Same (right button ignored) |
| Reset / Again / `R` | Only after outcome — restart from ~3000 m with random tilt |

Orange line = bottom exhaust, cyan = top; ember/ash FX overlay. Bottom minimap: green cross = pad (ashtray), yellow triangle = craft.

## Files

- `index.html` — single-page (Canvas 2D + simple rigid body), no build
- `assets/` — cigarette skin PNGs (craft / ashtray pad / intro hand / FX)

## Success bar

Opens playable; soft/hard landing feedback works; no Chinese UI leftovers; no always-on Reset.
