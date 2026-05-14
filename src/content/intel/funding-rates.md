---
title: "Current Crypto Funding Rate Extremes — May 14, 2026"
description: "INJ leads bearish funding at -0.0221% while RUNE tops bullish at +0.0100%. Overall funding is near-zero across the board — the market is in wait-and-see mode with no extreme positioning. n0brains Macro Pulse confirms: regime is risk-off, BTC bias bearish at 0.85 conviction."
pubDate: 2026-05-14
question: "What are the current crypto funding rate extremes and what do they signal?"
category: "funding-rates"
dataSources:
  - "Binance Futures API"
  - "Hyperliquid API"
  - "n0brains Macro Pulse"
---

## The Short Answer

Funding rates are **near-zero across the board**. No coin is showing extreme bullish or bearish positioning. The market is in a neutral, wait-and-see posture — neither overleveraged longs nor crowded shorts. This is unusual and suggests traders are sitting on their hands ahead of macro catalysts.

**The n0brains Macro Pulse confirms the caution**: regime is **risk-off**, BTC bias is **bearish** at **0.85 conviction**, driven by hotter-than-expected CPI/PPI and heavy long de-leveraging. The market isn't neutral by accident — it's neutral because macro headwinds are suppressing both bullish and bearish conviction.

## Full Funding Rate Table (Binance Perpetuals)

| Symbol | Funding Rate | Mark Price | Signal |
|--------|-------------|------------|--------|
| **RUNE** | **+0.0100%** | $0.58 | Most bullish |
| DOGE | +0.0081% | $0.11 | Bullish |
| ETH | +0.0062% | $2,272.75 | Slightly bullish |
| LINK | +0.0060% | $10.31 | Slightly bullish |
| XRP | +0.0058% | $1.43 | Slightly bullish |
| WIF | +0.0050% | $0.22 | Slightly bullish |
| BTC | +0.0048% | $79,859 | Neutral |
| TIA | +0.0040% | $0.46 | Neutral |
| OP | +0.0039% | $0.15 | Neutral |
| SUI | +0.0018% | $1.21 | Neutral |
| APT | +0.0004% | $1.04 | Neutral |
| FTM | 0.0000% | $0.70 | Flat |
| SOL | -0.0016% | $91.35 | Slightly bearish |
| SEI | -0.0026% | $0.07 | Slightly bearish |
| NEAR | -0.0043% | $1.57 | Slightly bearish |
| AVAX | -0.0046% | $9.78 | Slightly bearish |
| ARB | -0.0112% | $0.13 | Bearish |
| **INJ** | **-0.0221%** | $5.14 | Most bearish |

## Hyperliquid Funding (All Near Zero)

On Hyperliquid, funding rates are effectively **0.0000% across all top 20 assets** — BTC, ETH, SOL, AVAX, SUI, ARB, DOGE, INJ, and others all show flat funding. This confirms the neutral posture is exchange-wide, not Binance-specific.

## Macro Context: n0brains Macro Pulse

The n0brains Macro Pulse — which synthesizes the USD high-impact calendar (FOMC, CPI, NFP, PPI) with 7 days of intel signals — provides critical context for why funding is so flat:

| Metric | Value |
|--------|-------|
| **Regime** | Risk-off |
| **BTC Bias** | Bearish (0.85 conviction) |
| **ETH Bias** | Bearish (0.90 conviction) |
| **BTC Key Level** | $80,000 (psychological), $76,500 (structural) |
| **ETH Key Level** | $3,200 (immediate), $2,850 (major pivot) |
| **Calendar Risks** | Core Retail Sales (May 14), Fed Chair Nomination Vote |

> *"Hotter-than-expected CPI/PPI driving inflation fears and heavy long de-leveraging."* — n0brains Macro Pulse, May 13

This explains the flat funding: traders aren't willing to take directional bets when the macro regime is clearly risk-off and both BTC and ETH carry bearish bias with high conviction.

## Key Takeaways

1. **No extreme positioning anywhere.** The highest absolute funding rate is INJ at -0.0221% — that's 0.16% per 8-hour period. Historically, "extreme" funding starts around ±0.05-0.10% per 8h. We're nowhere near that.

2. **BTC is dead neutral at +0.0048%.** This is the anchor. When BTC funding is flat, the entire market tends to drift without conviction. The Macro Pulse bearish bias at 0.85 conviction suggests this neutrality could break to the downside.

3. **INJ is the outlier.** At -0.0221%, it's the most shorted major coin. This could mean: (a) traders are hedging, (b) there's genuine bearish sentiment on INJ specifically, or (c) it's a mean-reversion setup if funding flips.

4. **ETH slightly more bullish than BTC.** ETH at +0.0062% vs BTC at +0.0048% — a tiny spread, but consistent with the ETH/BTC ratio stabilizing. However, the Macro Pulse gives ETH a 0.90 bearish conviction — the highest of any asset.

5. **This is a coiled spring.** Near-zero funding means there's no "funding squeeze" catalyst in either direction. But it also means the market can move fast when a catalyst arrives — there's no crowded positioning to absorb the move.

## What To Watch

- If BTC funding moves above +0.01%: bullish momentum building
- If BTC funding goes negative: bearish shift, potential for downside acceleration
- INJ funding flip: if INJ shorts get squeezed, could trigger a sharp reversal
- **Core Retail Sales (May 14)**: The Macro Pulse flags this as the key catalyst that could flip the bias

## Get This Data Yourself

This analysis was built using public exchange APIs plus the **n0brains Macro Pulse** — a daily BTC + ETH directional bias that synthesizes the macro calendar with 7 days of intel signals. The Macro Pulse is available to all n0brains users (free tier included).

```bash
curl -H "X-API-Key: your_key" https://api.n0brains.com/macro/latest
```

For real-time funding rates, liquidation cascades, and whale tracking — plus WebSocket streaming — upgrade to [n0brains Pro](https://n0brains.com) at $19.99/month.

## Methodology

Funding rates sourced from Binance Futures API (`/fapi/v1/premiumIndex`) and Hyperliquid Info API (`/info` with `type: meta`). Macro context from n0brains Macro Pulse API (`/macro/latest`). Rates shown are the current 8-hour funding rate as a percentage. Data pulled at approximately 05:30 UTC on May 14, 2026.