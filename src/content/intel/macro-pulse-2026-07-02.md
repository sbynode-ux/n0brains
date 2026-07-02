---
title: "Macro Pulse — July 02, 2026"
description: "Regime: risk-off. BTC bias: bearish (0.65 conviction). ETH bias: bearish (0.55 conviction). 3 calendar risks to watch. Data from n0brains.com Signals Pro."
pubDate: 2026-07-02
question: "What is the macro outlook for Bitcoin and Ethereum right now?"
category: "macro-pulse"
dataSources:
  - "n0brains.com Signals Pro"
---

## The Short Answer

The n0brains Macro Pulse — which synthesizes the USD high-impact macro calendar (FOMC, CPI, NFP, PPI) with 7 days of intel signals — calls the current regime **risk-off**. BTC carries a **bearish** bias at **0.65 conviction**, while ETH is **bearish** at **0.55 conviction**.

## Regime Analysis

| Metric | Value |
|--------|-------|
| **Regime** | **risk-off** |
| **Horizon** | week |
| **Generated** | 2026-07-02T07:00:00.870544+00:00 |
| **Lookback** | 7 days |

**Regime rationale**: High real yields (2.2%) and strong DXY (120.8) driving a negative deterministic composite score.

## BTC Outlook

| Metric | Value |
|--------|-------|
| **Bias** | **bearish** |
| **Conviction** | **0.65** |
| **Key Levels** | Watch DXY resistance at 121 and BTC support levels following ETF outflows. |
| **Invalidation** | A significant beat in NFP or a sudden reversal in real yields (real_y10). |

**Rationale**: Negative cross-asset spillover from NASDAQ/NDX and bearish analyst outlook on June close signals.

## ETH Outlook

| Metric | Value |
|--------|-------|
| **Bias** | **bearish** |
| **Conviction** | **0.55** |
| **Key Levels** | ETH realized price $1,954; watch for breakdown below recent support. |
| **Invalidation** | Stabilization of order-book spreads and positive shift in MVRV metrics. |

**Rationale**: Thinning liquidity (high spread) and recent MEV/Flashloan exploits creating volatility risk.

## Calendar Risks

- Non-Farm Employment Change (NFP) - potential for USD strength/weakness
- Unemployment Rate - risk of recessionary fears vs. soft landing
- Average Hourly Earnings - impact on inflation/rate expectations

## How to Use the Macro Pulse

- **Conviction ≥ 0.85**: Veto-grade signal. Contradicting this bias requires exceptional evidence.
- **Conviction 0.70-0.84**: Strong signal. Trade in this direction unless you have a specific edge.
- **Conviction < 0.70**: Moderate signal. Use as context, not as a trade trigger.
- **Invalidation**: The specific event or data point that would flip the bias. Watch for it.

## Get the Macro Pulse Daily

The Macro Pulse is generated daily at 07:00 UTC by **n0brains.com Signals Pro**, synthesizing the macro calendar with 7 days of intel signals. Available on all tiers:

```bash
curl -H "X-API-Key: your_key" https://api.n0brains.com/macro
```

Pro tier adds historical snapshots, full reasoning, and calendar risk details. Start free at [n0brains.com](https://n0brains.com).

## Methodology

Macro Pulse sourced from the n0brains.com Signals Pro Macro API (`/macro`). Synthesizes USD high-impact calendar events (FOMC, CPI, NFP, PPI, Retail Sales) with the last 7 days of intel signals. Sunday editions include a 30-day deep-dive. Data pulled at approximately 13:00 UTC on July 02, 2026.
