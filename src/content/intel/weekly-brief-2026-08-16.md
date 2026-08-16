---
title: "Weekly Intelligence Brief — August 16, 2026"
description: "Weekly ecosystem scan: 30 active signals, regime risk-off, BTC bias neutral (0.4 conviction). Best performer: N/A (N/A). Data from n0brains.com Signals Pro."
pubDate: 2026-08-16
question: "What happened in crypto markets this week and what should I watch next week?"
category: "weekly-brief"
dataSources:
  - "n0brains.com Signals Pro"
---

## The Short Answer

This week's crypto markets operated under a **risk-off** regime with BTC carrying a **neutral** bias at **0.4 conviction**.  

## Macro Regime

| Metric | Value |
|--------|-------|
| Regime | **risk-off** |
| BTC Bias | neutral (0.4 conviction) |
| ETH Bias | bearish (0.3 conviction) |
| Horizon | week |

**Regime rationale**: Negative net liquidity and high real yields (z=2.085) driving a deterministic risk-off environment.

## Top Signals This Week

| Dir | Asset | Type | Urgency | Summary | Score |
|-----|-------|------|---------|---------|-------|
| ⚪ | AVAX | macro_flow | 🟢 LOW | 💧 AVAX order-book stress: spread 1.4bps (+2.9σ vs trailing), depth ask-heavy (im | 0.3 |
| ⚪ | BNB | macro_flow | 🟢 LOW | 💧 BNB order-book stress: spread 0.8bps (+4.4σ vs trailing), depth balanced (imba | 0.3 |
| ⚪ | BNB | macro_flow | 🟢 LOW | 💧 BNB order-book stress: spread 0.7bps (+3.6σ vs trailing), depth bid-heavy (imb | 0.3 |
| ⚪ | AVAX | macro_flow | 🟢 LOW | 💧 AVAX order-book stress: spread 1.7bps (+3.8σ vs trailing), depth bid-heavy (im | 0.3 |
| ⚪ | OP | funding_norm | 🟡 MEDIUM | ⚖️ OP funding_norm: extreme negative (shorts pay) funding -76% annualized — crow | 0.2 |

## Signal Distribution

| Type | Count | Direction | Count |
|------|-------|-----------|-------|
| vol_break | 6 |
| funding | 5 |
| funding_norm | 5 |
| hack | 4 |
| macro_flow | 4 |
| price | 2 |
| liq_magnet | 2 |
| options_flow | 2 |
| neutral | 17 |
| bearish | 9 |
| bullish | 4 |

## Performance Roundup

**Best signal types:**


**Best coins:**


## Calendar Risks — Next Week

- FOMC Meeting Minutes (Aug 19) - potential volatility driver

## Key Takeaways

1. **Regime is risk-off** — position defensively, favor BTC over altcoins.
2. **BTC is the best-performing coin** by signal PnL — but signal PnL is negative, so trade with caution.
3. **N/A signals are the most reliable** — prioritize these over other signal types.
4. **Calendar risks**: 1 events flagged — position size accordingly.

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

All data sourced from n0brains.com Signals Pro APIs: `/signals`, `/macro`, `/performance`, `/market-opens`. Signal performance covers a 30-day rolling window. Macro Pulse generated daily at 07:00 UTC. Data pulled at approximately 13:00 UTC on August 16, 2026.
