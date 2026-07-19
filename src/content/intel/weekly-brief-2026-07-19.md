---
title: "Weekly Intelligence Brief — July 19, 2026"
description: "Weekly ecosystem scan: 30 active signals, regime range, BTC bias bullish (0.3 conviction). Best performer: N/A (N/A). Data from n0brains.com Signals Pro."
pubDate: 2026-07-19
question: "What happened in crypto markets this week and what should I watch next week?"
category: "weekly-brief"
dataSources:
  - "n0brains.com Signals Pro"
---

## The Short Answer

This week's crypto markets operated under a **range** regime with BTC carrying a **bullish** bias at **0.3 conviction**.  

## Macro Regime

| Metric | Value |
|--------|-------|
| Regime | **range** |
| BTC Bias | bullish (0.3 conviction) |
| ETH Bias | bearish (0.4 conviction) |
| Horizon | week |

**Regime rationale**: Deterministic composite score -0.18; high real yields and DXY offset positive net liquidity and M2 growth.

## Top Signals This Week

| Dir | Asset | Type | Urgency | Summary | Score |
|-----|-------|------|---------|---------|-------|
| 🔴 | BTC | hack | 🔴 HIGH | Post-mortem on a hack or exploit, discussing transparency and privacy trade-offs | 0.7 |
| 🔴 | ETH | hack | 🔴 HIGH | SwissBorg reported a $13.7M exploit via a compromised 3rd-party AI oracle. | 0.7 |
| 🔴 | BTC | hack | 🟡 MEDIUM | rekt.news postmortem on a crypto hack, likely detailing exploit mechanics and lo | 0.4 |
| ⚪ | BTC | vol_break | 🟡 MEDIUM | 🎯 BTC volatility compressed (ATR 0.09% at ≤p10 of 7d). Claim: an either-way move | 0.4 |
| ⚪ | ETH | vol_break | 🟡 MEDIUM | 🎯 ETH volatility compressed (ATR 0.14% at ≤p10 of 7d). Claim: an either-way move | 0.4 |

## Signal Distribution

| Type | Count | Direction | Count |
|------|-------|-----------|-------|
| liq_magnet | 9 |
| vol_break | 9 |
| funding_norm | 5 |
| hack | 5 |
| regulatory | 1 |
| gap_fill | 1 |
| neutral | 24 |
| bearish | 5 |
| bullish | 1 |

## Performance Roundup

**Best signal types:**


**Best coins:**


## Calendar Risks — Next Week

- Potential shifts in real yield trajectory (real_y10)
- DXY volatility near 120.50 level

## Key Takeaways

1. **Regime is range** — trade the range, wait for a breakout.
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

All data sourced from n0brains.com Signals Pro APIs: `/signals`, `/macro`, `/performance`, `/market-opens`. Signal performance covers a 30-day rolling window. Macro Pulse generated daily at 07:00 UTC. Data pulled at approximately 13:00 UTC on July 19, 2026.
