---
title: "Macro Pulse — August 01, 2026"
description: "Regime: risk-off. BTC bias: bearish (0.65 conviction). ETH bias: bearish (0.75 conviction). 2 calendar risks to watch. Data from n0brains.com Signals Pro."
pubDate: 2026-08-01
question: "What is the macro outlook for Bitcoin and Ethereum right now?"
category: "macro-pulse"
dataSources:
  - "n0brains.com Signals Pro"
---

## The Short Answer

The n0brains Macro Pulse — which synthesizes the USD high-impact macro calendar (FOMC, CPI, NFP, PPI) with 7 days of intel signals — calls the current regime **risk-off**. BTC carries a **bearish** bias at **0.65 conviction**, while ETH is **bearish** at **0.75 conviction**.

## Regime Analysis

| Metric | Value |
|--------|-------|
| **Regime** | **risk-off** |
| **Horizon** | week |
| **Generated** | 2026-08-01T06:59:59.577807+00:00 |
| **Lookback** | 7 days |

**Regime rationale**: Negative net liquidity, rising DXY, and high real yields driving a deterministic risk-off composite (-0.544).

## BTC Outlook

| Metric | Value |
|--------|-------|
| **Bias** | **bearish** |
| **Conviction** | **0.65** |
| **Key Levels** | Support: $62,724 (liq magnet); Resistance: $65,500 (call wall) |
| **Invalidation** | BTC reclaiming $65,500 on high volume or net liquidity z-score turning positive. |

**Rationale**: Coldcard hack ($70M) and extreme put-skew hedging (+12.4 IV pts) outweigh bullish whale-fading signals.

## ETH Outlook

| Metric | Value |
|--------|-------|
| **Bias** | **bearish** |
| **Conviction** | **0.75** |
| **Key Levels** | Support: $1,897 (whale entry); Resistance: $1,960 (call wall) |
| **Invalidation** | ETH reclaiming $1,960 or significant reversal in put-skew volatility. |

**Rationale**: Heavy whale outflows to Binance, extreme put-skew (+13.0 IV pts), and bearish options flow (selling 1960-C).

## Calendar Risks

- Potential liquidity shifts following FOMC press conference fallout
- Macro volatility from real yield (real_y10) fluctuations

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

Macro Pulse sourced from the n0brains.com Signals Pro Macro API (`/macro`). Synthesizes USD high-impact calendar events (FOMC, CPI, NFP, PPI, Retail Sales) with the last 7 days of intel signals. Sunday editions include a 30-day deep-dive. Data pulled at approximately 13:00 UTC on August 01, 2026.
