---
title: "Weekly Intelligence Brief — September 13, 2026"
description: "Weekly ecosystem scan: 30 active signals, regime risk-on, BTC bias bullish (0.55 conviction). Best performer: N/A (N/A). Data from n0brains.com Signals Pro."
pubDate: 2026-09-13
question: "What happened in crypto markets this week and what should I watch next week?"
category: "weekly-brief"
dataSources:
  - "n0brains.com Signals Pro"
---

## The Short Answer

This week's crypto markets operated under a **risk-on** regime with BTC carrying a **bullish** bias at **0.55 conviction**.  

## Macro Regime

| Metric | Value |
|--------|-------|
| Regime | **risk-on** |
| BTC Bias | bullish (0.55 conviction) |
| ETH Bias | bullish (0.5 conviction) |
| Horizon | week |

**Regime rationale**: Net liquidity surge and DXY weakness anchor risk-on, offset by high real yields.

## Top Signals This Week

| Dir | Asset | Type | Urgency | Summary | Score |
|-----|-------|------|---------|---------|-------|
| 🟢 | BTC | options_flow | 🟡 MEDIUM | 🐋 BTC options flow: buy 4.7 BTC-14SEP26-80000-C (~$361k notional) → bullish posi | 0.4 |
| 🔴 | BTC | whale_pos_follow | 🟡 MEDIUM | 🐋 Whale Follow (shadow): 1 whales SHORT BTC → follow hypothesis: bearish (observ | 0.3 |
| 🔴 | HYPE | whale_pos_follow | 🟡 MEDIUM | 🐋 Whale Follow (shadow): 1 whales SHORT HYPE → follow hypothesis: bearish (obser | 0.3 |
| ⚪ | DOGE | macro_flow | 🟢 LOW | 💧 DOGE order-book stress: spread 1.8bps (+5.5σ vs trailing), depth bid-heavy (im | 0.3 |
| ⚪ | ETH | macro_flow | 🟢 LOW | 💧 ETH order-book stress: spread 0.8bps (+150.9σ vs trailing), depth balanced (im | 0.3 |

## Signal Distribution

| Type | Count | Direction | Count |
|------|-------|-----------|-------|
| funding | 18 |
| whale_pos_follow | 3 |
| deleverage | 2 |
| sentiment | 2 |
| macro_flow | 2 |
| hack | 1 |
| price | 1 |
| options_flow | 1 |
| bullish | 20 |
| bearish | 6 |
| neutral | 4 |

## Performance Roundup

**Best signal types:**


**Best coins:**


## Calendar Risks — Next Week

- FOMC Rate Decision & Projections (Sep 16) - High volatility expected
- FOMC Press Conference - Forward guidance on rates
- DXY reaction to US data - Dollar strength could cap crypto gains

## Key Takeaways

1. **Regime is risk-on** — position aggressively, altcoins may outperform.
2. **BTC is the best-performing coin** by signal PnL — but signal PnL is negative, so trade with caution.
3. **N/A signals are the most reliable** — prioritize these over other signal types.
4. **Calendar risks**: 3 events flagged — position size accordingly.

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

All data sourced from n0brains.com Signals Pro APIs: `/signals`, `/macro`, `/performance`, `/market-opens`. Signal performance covers a 30-day rolling window. Macro Pulse generated daily at 07:00 UTC. Data pulled at approximately 13:00 UTC on September 13, 2026.
