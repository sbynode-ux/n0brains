---
title: "Session Flow Report — September 05, 2026"
description: "BTC/ETH/SOL prices at Tokyo, London, and New York opens. All three trading below London session levels. Data from n0brains.com Signals Pro."
pubDate: 2026-09-05
question: "How are crypto markets moving across trading sessions today?"
category: "session-flow"
dataSources:
  - "n0brains.com Signals Pro"
---

## The Short Answer

All three majors are trading **below their London session opens** — a bearish intraday signal suggesting European selling pressure hasn't been absorbed.

## Session-by-Session Prices

| Session | BTC | ETH | SOL |
|---------|-----|-----|-----|
| Tokyo | $79,666 | $2,456 | $101.94 |
| London | $79,705 | $2,457 | $102.21 |
| New York | $79,368 | $2,453 | $101.26 |
| **Current** | **$79,668** | **$2,458** | **$103.19** |

## What This Means

**Session flow analysis** tracks how prices move across the three major trading sessions:

- **Tokyo (Asian session)**: Sets the overnight tone. Often driven by Asian institutional flow and weekend gap fills.
- **London (European session)**: The highest-volume session. Where the "smart money" typically positions.
- **New York (US session)**: Where retail and institutional US flow enters. Often determines the daily close.

When all three assets are trading below London opens, it signals that European sellers are in control and US buyers haven't stepped in to absorb the selling. The opposite (trading above London) signals sustained buying pressure.

## Key Levels to Watch

- **BTC**: Current $79,668 — watch for a reclaim of the London open at $79,705
- **ETH**: Current $2,458 — watch for a reclaim of the London open at $2,457
- **SOL**: Current $103.19 — watch for a reclaim of the London open at $102.21

## Get Session Open Data

Session opening prices are tracked by **n0brains.com Signals Pro** and available via the Market Opens API:

```bash
curl -H "X-API-Key: your_key" https://api.n0brains.com/market-opens
```

For real-time signals that incorporate session flow into entry/exit decisions — start free at [n0brains.com](https://n0brains.com).

## Methodology

Session opening prices sourced from the n0brains.com Signals Pro Market Opens API (`/market-opens`). Prices captured at the start of each major trading session. Current prices from the n0brains Levels API. Data pulled at approximately 13:00 UTC on September 05, 2026.
