---
title: "Weekly Intelligence Brief — August 09, 2026"
description: "Weekly ecosystem scan: 30 active signals, regime risk-off, BTC bias bearish (0.45 conviction). Best performer: N/A (N/A). Data from n0brains.com Signals Pro."
pubDate: 2026-08-09
question: "What happened in crypto markets this week and what should I watch next week?"
category: "weekly-brief"
dataSources:
  - "n0brains.com Signals Pro"
---

## The Short Answer

This week's crypto markets operated under a **risk-off** regime with BTC carrying a **bearish** bias at **0.45 conviction**.  

## Macro Regime

| Metric | Value |
|--------|-------|
| Regime | **risk-off** |
| BTC Bias | bearish (0.45 conviction) |
| ETH Bias | neutral (0.35 conviction) |
| Horizon | week |

**Regime rationale**: Negative net liquidity and high real yields (2.43%) driving a deterministic risk-off composite score of -0.476.

## Top Signals This Week

| Dir | Asset | Type | Urgency | Summary | Score |
|-----|-------|------|---------|---------|-------|
| ⚪ | BRENTOIL | funding_norm | 🟡 MEDIUM | ⚖️ BRENTOIL funding_norm: extreme negative (shorts pay) funding -84% annualized  | 0.3 |
| ⚪ | CL | funding_norm | 🟡 MEDIUM | ⚖️ CL funding_norm: extreme negative (shorts pay) funding -90% annualized — crow | 0.3 |
| ⚪ | BTC | vol_break | 🟡 MEDIUM | 🎯 BTC volatility compressed (ATR 0.05% at ≤p10 of 7d). Claim: an either-way move | 0.3 |
| ⚪ | ETH | liq_magnet | 🟡 MEDIUM | 🧲 ETH liquidation magnet: dense short cluster ~$10,067,626 at 1955.901 (+1.99% f | 0.3 |
| ⚪ | BTC | liq_magnet | 🟡 MEDIUM | 🧲 BTC liquidation magnet: dense long cluster ~$506,973,819 at 62964.155 (-3.00%  | 0.3 |

## Signal Distribution

| Type | Count | Direction | Count |
|------|-------|-----------|-------|
| funding | 9 |
| funding_norm | 7 |
| liq_magnet | 4 |
| hack | 2 |
| price | 2 |
| whale_position | 2 |
| options_flow | 2 |
| vol_break | 1 |
| neutral | 13 |
| bullish | 10 |
| bearish | 7 |

## Performance Roundup

**Best signal types:**


**Best coins:**


## Calendar Risks — Next Week

- Aug 12: Core CPI m/m & y/y (Major volatility driver)
- Aug 13: Core PPI m/m (Inflation trend confirmation)

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

All data sourced from n0brains.com Signals Pro APIs: `/signals`, `/macro`, `/performance`, `/market-opens`. Signal performance covers a 30-day rolling window. Macro Pulse generated daily at 07:00 UTC. Data pulled at approximately 13:00 UTC on August 09, 2026.
