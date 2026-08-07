---
title: "Macro Pulse — August 07, 2026"
description: "Regime: risk-off. BTC bias: bearish (0.45 conviction). ETH bias: neutral (0.55 conviction). 2 calendar risks to watch. Data from n0brains.com Signals Pro."
pubDate: 2026-08-07
question: "What is the macro outlook for Bitcoin and Ethereum right now?"
category: "macro-pulse"
dataSources:
  - "n0brains.com Signals Pro"
---

## The Short Answer

The n0brains Macro Pulse — which synthesizes the USD high-impact macro calendar (FOMC, CPI, NFP, PPI) with 7 days of intel signals — calls the current regime **risk-off**. BTC carries a **bearish** bias at **0.45 conviction**, while ETH is **neutral** at **0.55 conviction**.

## Regime Analysis

| Metric | Value |
|--------|-------|
| **Regime** | **risk-off** |
| **Horizon** | week |
| **Generated** | 2026-08-07T12:16:40.651131+00:00 |
| **Lookback** | 7 days |

**Regime rationale**: Negative net liquidity and high real yields (z=2.38) driving a deterministic risk-off regime.

## BTC Outlook

| Metric | Value |
|--------|-------|
| **Bias** | **bearish** |
| **Conviction** | **0.45** |
| **Key Levels** | Support: $64k, $62.5k | Resistance: $65.9k (liq magnet) |
| **Invalidation** | NFP print significantly exceeds 85K forecast, sparking a USD reversal. |

**Rationale**: Extreme put-skew (+10.2 IV pts) and bearish whale options flow suggest heavy downside hedging.

## ETH Outlook

| Metric | Value |
|--------|-------|
| **Bias** | **neutral** |
| **Conviction** | **0.55** |
| **Key Levels** | Support: $1900 | Resistance: $1953 (liq magnet) |
| **Invalidation** | Sustained break above $1953 triggers short liquidation squeeze. |

**Rationale**: Conflicting signals: bullish large-notional call buying vs. bearish whale movement to exchanges.

## Calendar Risks

- Aug 7: Non-Farm Employment Change (NFP) - high volatility risk
- Aug 7: Unemployment Rate - potential indicator of recession fears

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

Macro Pulse sourced from the n0brains.com Signals Pro Macro API (`/macro`). Synthesizes USD high-impact calendar events (FOMC, CPI, NFP, PPI, Retail Sales) with the last 7 days of intel signals. Sunday editions include a 30-day deep-dive. Data pulled at approximately 13:00 UTC on August 07, 2026.
