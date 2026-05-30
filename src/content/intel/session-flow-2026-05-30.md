---
title: "Session Flow Report — May 30, 2026"
description: "BTC/ETH/SOL prices at Tokyo, London, and New York opens. All three trading above London session levels. Data from n0brains.com Signals Pro."
pubDate: 2026-05-30
question: "How are crypto markets moving across trading sessions today?"
category: "session-flow"
dataSources:
  - "n0brains.com Signals Pro"
---

## The Short Answer

All three majors are trading **above their London session opens** — a bullish intraday signal suggesting buying pressure is sustaining through sessions.

## Session-by-Session Prices

| Session | BTC | ETH | SOL |
|---------|-----|-----|-----|
| Tokyo | $73,386 | $2,012 | $81.92 |
| London | $73,373 | $2,004 | $82.05 |
| New York | $72,571 | $1,981 | $80.56 |
| **Current** | **$73,526** | **$2,017** | **$82.71** |

## What This Means

**Session flow analysis** tracks how prices move across the three major trading sessions:

- **Tokyo (Asian session)**: Sets the overnight tone. Often driven by Asian institutional flow and weekend gap fills.
- **London (European session)**: The highest-volume session. Where the "smart money" typically positions.
- **New York (US session)**: Where retail and institutional US flow enters. Often determines the daily close.

When all three assets are trading below London opens, it signals that European sellers are in control and US buyers haven't stepped in to absorb the selling. The opposite (trading above London) signals sustained buying pressure.

## Key Levels to Watch

- **BTC**: Current $73,526 — watch for a reclaim of the London open at $73,373
- **ETH**: Current $2,017 — watch for a reclaim of the London open at $2,004
- **SOL**: Current $82.71 — watch for a reclaim of the London open at $82.05

## Get Session Open Data

Session opening prices are tracked by **n0brains.com Signals Pro** and available via the Market Opens API:

```bash
curl -H "X-API-Key: your_key" https://api.n0brains.com/market-opens
```

For real-time signals that incorporate session flow into entry/exit decisions — start free at [n0brains.com](https://n0brains.com).

## Methodology

Session opening prices sourced from the n0brains.com Signals Pro Market Opens API (`/market-opens`). Prices captured at the start of each major trading session. Current prices from the n0brains Levels API. Data pulled at approximately 04:00 UTC on May 30, 2026.
