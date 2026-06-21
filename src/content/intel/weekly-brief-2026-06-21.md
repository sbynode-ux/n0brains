---
title: "Weekly Intelligence Brief — June 21, 2026"
description: "Weekly ecosystem scan: 21 active signals, regime risk-off, BTC bias bearish (0.65 conviction). Best performer: N/A (N/A). Data from n0brains.com Signals Pro."
pubDate: 2026-06-21
question: "What happened in crypto markets this week and what should I watch next week?"
category: "weekly-brief"
dataSources:
  - "n0brains.com Signals Pro"
---

## The Short Answer

This week's crypto markets operated under a **risk-off** regime with BTC carrying a **bearish** bias at **0.65 conviction**.  

## Macro Regime

| Metric | Value |
|--------|-------|
| Regime | **risk-off** |
| BTC Bias | bearish (0.65 conviction) |
| ETH Bias | bearish (0.55 conviction) |
| Horizon | week |

**Regime rationale**: High real yields (z=2.7) and steep curve inversion driving a deterministic risk-off composite score of -0.619.

## Top Signals This Week

| Dir | Asset | Type | Urgency | Summary | Score |
|-----|-------|------|---------|---------|-------|
| 🔴 | Market | hack | 🔴 HIGH | mySwap drained $300K via Starknet hack | 3.1 |
| 🔴 | Market | hack | 🔴 HIGH | Namada Shielded Pools drained $600K via exploit | 3.1 |
| 🔴 | NAM | hack | 🔴 HIGH | Namada Shielded Pools drained $600K via IBC transfer logic exploit. | 3.1 |
| 🔴 | Market | hack | 🔴 HIGH | LABUBU/OLPC drained $1.1M via Deflationary Reserve Poisoning on BSC | 3.1 |
| 🔴 | Market | hack | 🔴 HIGH | mySwap on Starknet drained $300K via CL Pool Accounting Hack. | 3.1 |

## Signal Distribution

| Type | Count | Direction | Count |
|------|-------|-----------|-------|
| macro | 9 |
| hack | 6 |
| macro_flow | 4 |
| sentiment | 1 |
| unlock | 1 |
| bearish | 13 |
| neutral | 4 |
| bullish | 4 |

## Performance Roundup

**Best signal types:**


**Best coins:**


## Calendar Risks — Next Week

- Core PCE Price Index m/m (June 25): Inflationary surprise could spike yields.
- Final GDP q/q (June 25): Economic strength vs. recession fears.

## Key Takeaways

1. **Regime is risk-off** — position defensively, favor BTC over altcoins.
2. **BTC is the best-performing coin** by signal PnL — but signal PnL is negative, so trade with caution.
3. **N/A signals are the most reliable** — prioritize these over other signal types.
4. **Calendar risks**: 2 events flagged — position size accordingly.

## Get the Full Picture

All data in this brief is sourced from **n0brains.com Signals Pro** — the crypto intelligence platform that ingests from 10+ sources, machine-classifies every event, cross-corroborates, and scores into one signal with entry, stop, and take. Delivered via REST API, WebSocket, or Webhook.

```bash
# Signals
curl -H "X-API-Key: your_key" https://api.n0brains.com/signals

# Macro Pulse
curl -H "X-API-Key: your_key" https://api.n0brains.com/macro

# Performance (no auth)
curl https://api.n0brains.com/performance
```

Start free at [n0brains.com](https://n0brains.com). Pro tier ($39.99/month) for real-time WebSocket streaming and full source detail.

## Methodology

All data sourced from n0brains.com Signals Pro APIs: `/signals`, `/macro`, `/performance`, `/market-opens`. Signal performance covers a 30-day rolling window. Macro Pulse generated daily at 07:00 UTC. Data pulled at approximately 13:00 UTC on June 21, 2026.
