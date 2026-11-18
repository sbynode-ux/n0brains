---
title: "Session Flow Report — November 18, 2026"
description: "BTC/ETH/SOL prices at Tokyo, London, and New York opens. All three trading below London session levels. Data from n0brains.com Signals Pro."
pubDate: 2026-11-18
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
| Tokyo | $64,911 | $1,823 | $75.16 |
| London | $64,837 | $1,816 | $75.18 |
| New York | $64,871 | $1,820 | $73.67 |
| **Current** | **$63,916** | **$1,789** | **$74.18** |

## What This Means

**Session flow analysis** tracks how prices move across the three major trading sessions:

- **Tokyo (Asian session)**: Sets the overnight tone. Often driven by Asian institutional flow and weekend gap fills.
- **London (European session)**: The highest-volume session. Where the "smart money" typically positions.
- **New York (US session)**: Where retail and institutional US flow enters. Often determines the daily close.

When all three assets are trading below London opens, it signals that European sellers are in control and US buyers haven't stepped in to absorb the selling. The opposite (trading above London) signals sustained buying pressure.

## Key Levels to Watch

- **BTC**: Current $63,916 — watch for a reclaim of the London open at $64,837
- **ETH**: Current $1,789 — watch for a reclaim of the London open at $1,816
- **SOL**: Current $74.18 — watch for a reclaim of the London open at $75.18

## Get Session Open Data

Session opening prices are tracked by **n0brains.com Signals Pro** and available via the Market Opens API:

```bash
curl -H "X-API-Key: your_key" https://api.n0brains.com/market-opens
```

For real-time signals that incorporate session flow into entry/exit decisions — start free at [n0brains.com](https://n0brains.com).

## Methodology

Session opening prices sourced from the n0brains.com Signals Pro Market Opens API (`/market-opens`). Prices captured at the start of each major trading session. Current prices from the n0brains Levels API. Data pulled at approximately 14:00 UTC on November 18, 2026.
