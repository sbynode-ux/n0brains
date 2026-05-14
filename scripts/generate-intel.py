#!/usr/bin/env python3
"""
Daily Intel Post Generator — n0brains.com

Pulls data from the n0brains Signals Pro API and generates a rotating
daily market intel post for the /intel section. Each day uses a different
subset of the data to keep content fresh and avoid repetition.

Usage:
    python3 scripts/generate-intel.py              # generate today's post
    python3 scripts/generate-intel.py --dry-run    # preview without saving
    python3 scripts/generate-intel.py --deploy     # generate + build + push

Rotation (by day of year % 7):
    0 — Signal Roundup (top signals by urgency/score)
    1 — S/R Level Watch (BTC/ETH/SOL support & resistance)
    2 — Session Flow Report (market opens analysis)
    3 — Macro Pulse Deep Dive (regime, bias, conviction, calendar risks)
    4 — Smart Money & Whale Watch (whale signals + directional bias)
    5 — Performance Analytics (30-day signal track record)
    6 — Weekly Intelligence Brief (Sunday only, full ecosystem scan)
"""

import json
import os
import sys
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

# ── Config ────────────────────────────────────────────────────────────────────
API_KEY = "intel_sk_8bfa886016e4bf144002c9df2aa7d67a713ef75a98bbb184fdc071bad9c4fef8"
BASE_URL = "https://api.n0brains.com"
CONTENT_DIR = Path(__file__).resolve().parent.parent / "src" / "content" / "intel"
SITE_DIR = Path(__file__).resolve().parent.parent

HEADERS = {
    "X-API-Key": API_KEY,
    "Content-Type": "application/json",
    "User-Agent": "n0brains-intel-bot/1.0",
}
NOW = datetime.now(timezone.utc)
TODAY = NOW.strftime("%B %d, %Y")
TODAY_ISO = NOW.strftime("%Y-%m-%d")
DAY_OF_YEAR = NOW.timetuple().tm_yday
IS_SUNDAY = NOW.weekday() == 6


# ── API Helpers ───────────────────────────────────────────────────────────────

def api_get(path: str) -> dict:
    """Call n0brains API and return JSON."""
    url = f"{BASE_URL}{path}"
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=15) as resp:
        return json.loads(resp.read())


def fetch_signals(limit: int = 30) -> list[dict]:
    """Fetch latest signals."""
    data = api_get(f"/signals?limit={limit}")
    return data.get("signals", [])


def fetch_levels(coin: str) -> dict:
    """Fetch S/R levels for a coin."""
    return api_get(f"/levels/{coin}")


def fetch_market_opens() -> dict:
    """Fetch session opening prices."""
    return api_get("/market-opens")


def fetch_macro() -> dict:
    """Fetch latest Macro Pulse."""
    return api_get("/macro/latest")


def fetch_performance() -> dict:
    """Fetch 30-day performance stats (no auth needed)."""
    url = f"{BASE_URL}/performance"
    req = urllib.request.Request(url, headers={"User-Agent": "n0brains-intel-bot/1.0"})
    with urllib.request.urlopen(req, timeout=15) as resp:
        return json.loads(resp.read())


# ── Formatting Helpers ────────────────────────────────────────────────────────

def fmt_price(p) -> str:
    """Format a price with appropriate precision."""
    if p is None:
        return "N/A"
    p = float(p)
    if p >= 1000:
        return f"${p:,.0f}"
    elif p >= 1:
        return f"${p:,.2f}"
    else:
        return f"${p:,.4f}"


def fmt_pnl(p) -> str:
    """Format PnL value."""
    if p is None:
        return "0.00"
    p = float(p)
    return f"{p:+.2f}"


def fmt_pct(p) -> str:
    """Format a percentage."""
    if p is None:
        return "N/A"
    return f"{float(p):.1f}%"


def direction_emoji(d: str) -> str:
    """Return emoji for direction."""
    return {"bullish": "🟢", "bearish": "🔴", "neutral": "⚪"}.get(d, "⚪")


def urgency_badge(u: str) -> str:
    """Return markdown badge for urgency."""
    return {"high": "🔴 HIGH", "medium": "🟡 MEDIUM", "low": "🟢 LOW"}.get(u, u)


# ── Post Generators ───────────────────────────────────────────────────────────

def generate_signal_roundup() -> str:
    """Day 0: Top signals by urgency and score."""
    signals = fetch_signals(30)
    high = [s for s in signals if s["urgency"] == "high"]
    medium = [s for s in signals if s["urgency"] == "medium"]
    high.sort(key=lambda s: s.get("score", 0), reverse=True)
    medium.sort(key=lambda s: s.get("score", 0), reverse=True)

    # Build signal tables
    def signal_row(s):
        asset = s.get("asset") or "Market"
        entry = fmt_price(s.get("entry_price"))
        sl = fmt_price(s.get("stop_loss"))
        tp = fmt_price(s.get("take_profit"))
        score = s.get("score", 0)
        return f"| {direction_emoji(s['direction'])} | {asset} | {s['signal_type']} | {s['summary'][:70]} | {entry} | {sl} | {tp} | {score:.1f} |"

    high_rows = "\n".join(signal_row(s) for s in high[:8]) if high else "| — | — | — | No high-urgency signals | — | — | — | — |"
    medium_rows = "\n".join(signal_row(s) for s in medium[:8]) if medium else "| — | — | — | No medium-urgency signals | — | — | — | — |"

    # Count by type
    from collections import Counter
    type_counts = Counter(s["signal_type"] for s in signals)
    dir_counts = Counter(s["direction"] for s in signals)
    type_summary = "\n".join(f"| {t} | {c} |" for t, c in type_counts.most_common())

    slug = f"signal-roundup-{TODAY_ISO}"
    title = f"n0brains Signal Roundup — {TODAY}"
    question = "What are the latest crypto trading signals right now?"
    description = f"{len(high)} high-urgency signals, {len(medium)} medium-urgency. {dir_counts.get('bearish',0)} bearish, {dir_counts.get('bullish',0)} bullish, {dir_counts.get('neutral',0)} neutral. Data from n0brains.com Signals Pro."

    content = f"""---
title: "{title}"
description: "{description}"
pubDate: {TODAY_ISO}
question: "{question}"
category: "signal-roundup"
dataSources:
  - "n0brains.com Signals Pro"
---

## The Short Answer

**{len(high)} high-urgency signals** are active right now, with **{len(medium)} medium-urgency**. The signal distribution is {dir_counts.get('bearish',0)} bearish, {dir_counts.get('bullish',0)} bullish, {dir_counts.get('neutral',0)} neutral — {
"bears have the edge" if dir_counts.get('bearish',0) > dir_counts.get('bullish',0) 
else "bulls have the edge" if dir_counts.get('bullish',0) > dir_counts.get('bearish',0) 
else "the market is evenly balanced"
}.

## High-Urgency Signals

| Dir | Asset | Type | Summary | Entry | Stop | Target | Score |
|-----|-------|------|---------|-------|------|--------|-------|
{high_rows}

## Medium-Urgency Signals

| Dir | Asset | Type | Summary | Entry | Stop | Target | Score |
|-----|-------|------|---------|-------|------|--------|-------|
{medium_rows}

## Signal Distribution

| Type | Count |
|------|-------|
{type_summary}

## Key Takeaways

{
chr(10).join(f"{i+1}. **{s['signal_type'].title()}**: {s['summary'][:100]}" for i, s in enumerate(high[:3])) if high else "1. No high-urgency signals active — the market is quiet."
}

## Get Real-Time Signals

This data is sourced from **n0brains.com Signals Pro**, which ingests from 10+ sources (Telegram, Twitter/X, news RSS, government feeds, CoinMarketCap, Binance funding & liquidations, Hyperliquid order books, whale tracking, and more) and fuses them into scored, corroborated signals with entry, stop-loss, and take-profit levels.

```bash
curl -H "X-API-Key: your_key" https://api.n0brains.com/signals
```

Start free at [n0brains.com](https://n0brains.com). Pro tier ($19.99/month) adds WebSocket streaming, whale tracking, and full source detail.

## Methodology

All data sourced from the n0brains.com Signals Pro API (`/signals` endpoint). Signals are machine-classified, cross-corroborated, and scored in real-time. Urgency is LLM-assessed. Entry, stop-loss, and take-profit levels are algorithmically derived from S/R levels and volatility. Data pulled at approximately {NOW.strftime('%H:%M UTC')} on {TODAY}.
"""
    return slug, content


def generate_sr_levels() -> str:
    """Day 1: S/R Level Watch for BTC, ETH, SOL."""
    coins = ["BTC", "ETH", "SOL"]
    levels_data = {}
    for coin in coins:
        try:
            levels_data[coin] = fetch_levels(coin)
        except Exception:
            levels_data[coin] = None

    # Build level tables
    sections = []
    for coin in coins:
        data = levels_data.get(coin)
        if not data:
            sections.append(f"### {coin}\n\nData temporarily unavailable.\n")
            continue

        price = data["current_price"]
        resistances = data.get("all_resistance", [])[:3]
        supports = data.get("all_support", [])[:3]

        res_rows = "\n".join(
            f"| R{i+1} | {fmt_price(r['price'])} | {r.get('level_type','resistance')} | {r.get('strength',0):.1f} | {r.get('touches',0)} |"
            for i, r in enumerate(resistances)
        )
        sup_rows = "\n".join(
            f"| S{i+1} | {fmt_price(s['price'])} | {s.get('level_type','support')} | {s.get('strength',0):.1f} | {s.get('touches',0)} |"
            for i, s in enumerate(supports)
        )

        sections.append(f"""### {coin} — Current: {fmt_price(price)}

**Resistance Levels**

| Level | Price | Type | Strength | Touches |
|-------|-------|------|----------|---------|
{res_rows}

**Support Levels**

| Level | Price | Type | Strength | Touches |
|-------|-------|------|----------|---------|
{sup_rows}
""")

    slug = f"sr-levels-{TODAY_ISO}"
    title = f"S/R Level Watch — {TODAY}"
    question = "What are the key support and resistance levels for BTC, ETH, and SOL right now?"
    description = f"BTC at {fmt_price(levels_data.get('BTC',{}).get('current_price','N/A'))}, ETH at {fmt_price(levels_data.get('ETH',{}).get('current_price','N/A'))}, SOL at {fmt_price(levels_data.get('SOL',{}).get('current_price','N/A'))}. Key levels with strength scores and touch counts from n0brains.com Signals Pro."

    content = f"""---
title: "{title}"
description: "{description}"
pubDate: {TODAY_ISO}
question: "{question}"
category: "sr-levels"
dataSources:
  - "n0brains.com Signals Pro"
---

## The Short Answer

Key support and resistance levels for the three majors, computed from Hyperliquid order book data with strength scoring and touch-count tracking. Higher strength = more reliable level. More touches = more times the market has respected this level.

{chr(10).join(sections)}

## How to Use These Levels

- **Strength 1.0**: The most reliable level — the market has consistently respected it. High-probability reversal zone.
- **Strength 0.6-0.8**: Moderately reliable — use as secondary confirmation.
- **Strength 0.2-0.4**: Weak level — may break easily. Use as a warning, not a trade trigger.
- **Touches**: Each touch reinforces the level. A level with 5+ touches is battle-tested.

## Get Real-Time S/R Levels

These levels are computed and served by **n0brains.com Signals Pro**, which tracks Hyperliquid order book touches and assigns strength scores. Available on all tiers:

```bash
curl -H "X-API-Key: your_key" https://api.n0brains.com/levels/BTC
```

For real-time signals with entry, stop-loss, and take-profit levels derived from these S/R zones — start free at [n0brains.com](https://n0brains.com).

## Methodology

S/R levels sourced from the n0brains.com Signals Pro Levels API (`/levels/{{coin}}`). Computed from Hyperliquid L2 order book data. Strength = normalized score based on touch count, recency, and order book depth at that level. Data pulled at approximately {NOW.strftime('%H:%M UTC')} on {TODAY}.
"""
    return slug, content


def generate_session_flow() -> str:
    """Day 2: Session Flow Report."""
    opens = fetch_market_opens()
    sessions = opens.get("market_opens", {})

    # Build session table
    session_order = ["tokyo", "london", "new_york"]
    coins = ["BTC", "ETH", "SOL"]

    rows = []
    for session_name in session_order:
        session_data = sessions.get(session_name, [])
        if not session_data:
            continue
        label = session_name.replace("_", " ").title()
        prices = {}
        for entry in session_data:
            prices[entry["coin"]] = entry["price_usd"]
        btc = fmt_price(prices.get("BTC"))
        eth = fmt_price(prices.get("ETH"))
        sol = fmt_price(prices.get("SOL"))
        rows.append(f"| {label} | {btc} | {eth} | {sol} |")

    # Get current prices from levels API
    current_prices = {}
    for coin in coins:
        try:
            lvl = fetch_levels(coin)
            current_prices[coin] = lvl["current_price"]
        except Exception:
            current_prices[coin] = None

    btc_cur = fmt_price(current_prices.get("BTC"))
    eth_cur = fmt_price(current_prices.get("ETH"))
    sol_cur = fmt_price(current_prices.get("SOL"))
    rows.append(f"| **Current** | **{btc_cur}** | **{eth_cur}** | **{sol_cur}** |")

    # Determine trend
    london_btc = None
    for e in sessions.get("london", []):
        if e["coin"] == "BTC":
            london_btc = e["price_usd"]
    trend = "below" if london_btc and current_prices.get("BTC") and current_prices["BTC"] < london_btc else "above"

    slug = f"session-flow-{TODAY_ISO}"
    title = f"Session Flow Report — {TODAY}"
    question = "How are crypto markets moving across trading sessions today?"
    description = f"BTC/ETH/SOL prices at Tokyo, London, and New York opens. All three trading {trend} London session levels. Data from n0brains.com Signals Pro."

    content = f"""---
title: "{title}"
description: "{description}"
pubDate: {TODAY_ISO}
question: "{question}"
category: "session-flow"
dataSources:
  - "n0brains.com Signals Pro"
---

## The Short Answer

All three majors are trading **{trend} their London session opens** — {
"a bearish intraday signal suggesting European selling pressure hasn't been absorbed" if trend == "below"
else "a bullish intraday signal suggesting buying pressure is sustaining through sessions"
}.

## Session-by-Session Prices

| Session | BTC | ETH | SOL |
|---------|-----|-----|-----|
{chr(10).join(rows)}

## What This Means

**Session flow analysis** tracks how prices move across the three major trading sessions:

- **Tokyo (Asian session)**: Sets the overnight tone. Often driven by Asian institutional flow and weekend gap fills.
- **London (European session)**: The highest-volume session. Where the "smart money" typically positions.
- **New York (US session)**: Where retail and institutional US flow enters. Often determines the daily close.

When all three assets are trading below London opens, it signals that European sellers are in control and US buyers haven't stepped in to absorb the selling. The opposite (trading above London) signals sustained buying pressure.

## Key Levels to Watch

{
chr(10).join(
    f"- **{coin}**: Current {fmt_price(current_prices[coin])} — watch for a reclaim of the London open at {fmt_price(next((e['price_usd'] for e in sessions.get('london',[]) if e['coin']==coin), None))}"
    for coin in coins if current_prices.get(coin)
)
}

## Get Session Open Data

Session opening prices are tracked by **n0brains.com Signals Pro** and available via the Market Opens API:

```bash
curl -H "X-API-Key: your_key" https://api.n0brains.com/market-opens
```

For real-time signals that incorporate session flow into entry/exit decisions — start free at [n0brains.com](https://n0brains.com).

## Methodology

Session opening prices sourced from the n0brains.com Signals Pro Market Opens API (`/market-opens`). Prices captured at the start of each major trading session. Current prices from the n0brains Levels API. Data pulled at approximately {NOW.strftime('%H:%M UTC')} on {TODAY}.
"""
    return slug, content


def generate_macro_pulse() -> str:
    """Day 3: Macro Pulse Deep Dive."""
    macro = fetch_macro()

    regime = macro.get("regime", "unknown")
    btc = macro.get("btc", {})
    eth = macro.get("eth", {})
    risks = macro.get("calendar_risks", [])
    generated = macro.get("generated_at", "unknown")

    slug = f"macro-pulse-{TODAY_ISO}"
    title = f"Macro Pulse — {TODAY}"
    question = "What is the macro outlook for Bitcoin and Ethereum right now?"
    description = f"Regime: {regime}. BTC bias: {btc.get('bias','?')} ({btc.get('conviction',0)} conviction). ETH bias: {eth.get('bias','?')} ({eth.get('conviction',0)} conviction). {len(risks)} calendar risks to watch. Data from n0brains.com Signals Pro."

    content = f"""---
title: "{title}"
description: "{description}"
pubDate: {TODAY_ISO}
question: "{question}"
category: "macro-pulse"
dataSources:
  - "n0brains.com Signals Pro"
---

## The Short Answer

The n0brains Macro Pulse — which synthesizes the USD high-impact macro calendar (FOMC, CPI, NFP, PPI) with 7 days of intel signals — calls the current regime **{regime}**. BTC carries a **{btc.get('bias','?')}** bias at **{btc.get('conviction',0)} conviction**, while ETH is **{eth.get('bias','?')}** at **{eth.get('conviction',0)} conviction**.

## Regime Analysis

| Metric | Value |
|--------|-------|
| **Regime** | **{regime}** |
| **Horizon** | {macro.get('horizon', 'week')} |
| **Generated** | {generated} |
| **Lookback** | {macro.get('window_days', 7)} days |

**Regime rationale**: {macro.get('regime_reason', 'No rationale provided.')}

## BTC Outlook

| Metric | Value |
|--------|-------|
| **Bias** | **{btc.get('bias', 'N/A')}** |
| **Conviction** | **{btc.get('conviction', 0)}** |
| **Key Levels** | {btc.get('key_levels', 'N/A')} |
| **Invalidation** | {btc.get('invalidation', 'N/A')} |

**Rationale**: {btc.get('reason', 'No rationale provided.')}

## ETH Outlook

| Metric | Value |
|--------|-------|
| **Bias** | **{eth.get('bias', 'N/A')}** |
| **Conviction** | **{eth.get('conviction', 0)}** |
| **Key Levels** | {eth.get('key_levels', 'N/A')} |
| **Invalidation** | {eth.get('invalidation', 'N/A')} |

**Rationale**: {eth.get('reason', 'No rationale provided.')}

## Calendar Risks

{
chr(10).join(f"- {r}" for r in risks) if risks else "- No major calendar risks flagged for the current window."
}

## How to Use the Macro Pulse

- **Conviction ≥ 0.85**: Veto-grade signal. Contradicting this bias requires exceptional evidence.
- **Conviction 0.70-0.84**: Strong signal. Trade in this direction unless you have a specific edge.
- **Conviction < 0.70**: Moderate signal. Use as context, not as a trade trigger.
- **Invalidation**: The specific event or data point that would flip the bias. Watch for it.

## Get the Macro Pulse Daily

The Macro Pulse is generated daily at 07:00 UTC by **n0brains.com Signals Pro**, synthesizing the macro calendar with 7 days of intel signals. Available on all tiers:

```bash
curl -H "X-API-Key: your_key" https://api.n0brains.com/macro/latest
```

Pro tier adds historical snapshots, full reasoning, and calendar risk details. Start free at [n0brains.com](https://n0brains.com).

## Methodology

Macro Pulse sourced from the n0brains.com Signals Pro Macro API (`/macro/latest`). Synthesizes USD high-impact calendar events (FOMC, CPI, NFP, PPI, Retail Sales) with the last 7 days of intel signals. Sunday editions include a 30-day deep-dive. Data pulled at approximately {NOW.strftime('%H:%M UTC')} on {TODAY}.
"""
    return slug, content


def generate_smart_money() -> str:
    """Day 4: Smart Money & Whale Watch."""
    signals = fetch_signals(30)
    macro = fetch_macro()

    # Filter for whale, smart_money, and high-conviction signals
    whale_signals = [s for s in signals if s["signal_type"] in ("whale", "sentiment")]
    high_conviction = [s for s in signals if s.get("confidence", 0) >= 0.85]

    # Macro context
    btc_bias = macro.get("btc", {}).get("bias", "neutral")
    btc_conviction = macro.get("btc", {}).get("conviction", 0)
    regime = macro.get("regime", "unknown")

    # Build whale table
    def whale_row(s):
        asset = s.get("asset") or "Market"
        entry = fmt_price(s.get("entry_price"))
        score = s.get("score", 0)
        conf = s.get("confidence", 0)
        return f"| {direction_emoji(s['direction'])} | {asset} | {s['signal_type']} | {s['summary'][:70]} | {entry} | {score:.1f} | {conf:.0%} |"

    whale_rows = "\n".join(whale_row(s) for s in whale_signals[:8]) if whale_signals else "| — | — | — | No whale/sentiment signals active | — | — | — |"
    hc_rows = "\n".join(whale_row(s) for s in high_conviction[:8]) if high_conviction else "| — | — | — | No high-conviction signals | — | — | — |"

    slug = f"smart-money-{TODAY_ISO}"
    title = f"Smart Money & Whale Watch — {TODAY}"
    question = "Where is smart money moving in crypto markets right now?"
    description = f"Macro regime: {regime}. BTC bias: {btc_bias} ({btc_conviction} conviction). {len(whale_signals)} whale/sentiment signals, {len(high_conviction)} high-conviction signals. Data from n0brains.com Signals Pro."

    content = f"""---
title: "{title}"
description: "{description}"
pubDate: {TODAY_ISO}
question: "{question}"
category: "smart-money"
dataSources:
  - "n0brains.com Signals Pro"
---

## The Short Answer

The n0brains Macro Pulse calls the regime **{regime}** with BTC bias **{btc_bias}** at **{btc_conviction} conviction**. {
"Smart money is defensive — favoring BTC over altcoins in this risk-off environment." if regime == "risk-off"
else "Smart money is risk-on — capital flowing to altcoins and high-beta plays." if regime == "risk-on"
else "Smart money is range-bound — waiting for a catalyst before committing directionally."
}

## Whale & Sentiment Signals

| Dir | Asset | Type | Summary | Entry | Score | Conf |
|-----|-------|------|---------|-------|-------|------|
{whale_rows}

## High-Conviction Signals (≥85% confidence)

| Dir | Asset | Type | Summary | Entry | Score | Conf |
|-----|-------|------|---------|-------|-------|------|
{hc_rows}

## Macro Context

- **Regime**: {regime} — {macro.get('regime_reason', 'No rationale')}
- **BTC Bias**: {btc_bias} at {btc_conviction} conviction
- **ETH Bias**: {macro.get('eth',{}).get('bias','?')} at {macro.get('eth',{}).get('conviction',0)} conviction
- **Key Calendar Risks**: {', '.join(macro.get('calendar_risks', ['None flagged']))}

## Key Takeaways

{
chr(10).join(f"{i+1}. **{s['signal_type'].title()} on {s.get('asset') or 'Market'}**: {s['summary'][:100]}" for i, s in enumerate(whale_signals[:3])) if whale_signals
else "1. No whale or sentiment signals active — smart money is sitting on its hands."
}

## Track Smart Money in Real-Time

**n0brains.com Signals Pro** tracks whale movements across the Hyperliquid leaderboard, SOL whale wallets (110+ curated addresses), and on-chain flows. Whale signals are cross-corroborated with other sources before being scored and delivered.

```bash
curl -H "X-API-Key: your_key" "https://api.n0brains.com/signals?signal_type=whale"
```

Start free at [n0brains.com](https://n0brains.com). Pro tier ($19.99/month) adds full whale tracking detail and WebSocket streaming.

## Methodology

Whale and sentiment signals sourced from the n0brains.com Signals Pro API (`/signals`). Whale tracking covers Hyperliquid leaderboard consensus, SOL whale wallets, and on-chain flow detection. Macro context from the n0brains Macro Pulse. Data pulled at approximately {NOW.strftime('%H:%M UTC')} on {TODAY}.
"""
    return slug, content


def generate_performance() -> str:
    """Day 5: Performance Analytics."""
    perf = fetch_performance()
    overall = perf.get("overall", {})
    by_type = perf.get("by_signal_type", [])
    by_coin = perf.get("by_coin", [])
    by_source = perf.get("by_source", [])

    period = perf.get("period_days", 30)

    # Sort by PnL
    by_type.sort(key=lambda x: x.get("avg_pnl", 0), reverse=True)
    by_coin.sort(key=lambda x: x.get("avg_pnl", 0), reverse=True)
    by_source.sort(key=lambda x: x.get("avg_pnl", 0), reverse=True)

    def type_row(t):
        wins = t.get("wins", 0)
        total = t.get("total", 0)
        wr = f"{wins/total:.0%}" if total > 0 else "N/A"
        return f"| {t['signal_type']} | {total} | {wins} | {wr} | {fmt_pnl(t.get('avg_pnl'))} |"

    def coin_row(c):
        wins = c.get("wins", 0)
        total = c.get("total", 0)
        wr = f"{wins/total:.0%}" if total > 0 else "N/A"
        return f"| {c['asset']} | {total} | {wins} | {wr} | {fmt_pnl(c.get('avg_pnl'))} |"

    def source_row(s):
        wins = s.get("wins", 0)
        total = s.get("total", 0)
        wr = f"{wins/total:.0%}" if total > 0 else "N/A"
        return f"| {s['source']} | {total} | {wins} | {wr} | {fmt_pnl(s.get('avg_pnl'))} |"

    type_rows = "\n".join(type_row(t) for t in by_type[:8])
    coin_rows = "\n".join(coin_row(c) for c in by_coin[:8])
    source_rows = "\n".join(source_row(s) for s in by_source[:5])

    total_signals = overall.get("total", 0)
    directional_wr = overall.get("win_rate", 0)
    directional_total = overall.get("directional_total", 0)
    directional_wins = overall.get("directional_wins", 0)

    slug = f"performance-{TODAY_ISO}"
    title = f"Signal Performance Analytics — {TODAY}"
    question = "Which crypto trading signals are actually performing well?"
    description = f"{period}-day track record: {total_signals} total signals, {directional_wins}/{directional_total} directional wins ({directional_wr:.0f}% WR). Best type: {by_type[0]['signal_type'] if by_type else 'N/A'} ({fmt_pnl(by_type[0].get('avg_pnl')) if by_type else 'N/A'}). Data from n0brains.com Signals Pro."

    content = f"""---
title: "{title}"
description: "{description}"
pubDate: {TODAY_ISO}
question: "{question}"
category: "performance"
dataSources:
  - "n0brains.com Signals Pro"
---

## The Short Answer

Over the last **{period} days**, n0brains Signals Pro has generated **{total_signals} signals** with **{directional_wins} wins out of {directional_total} directional trades** — a **{directional_wr:.0f}% win rate**. {
f"The best-performing signal type is **{by_type[0]['signal_type']}** at {fmt_pnl(by_type[0].get('avg_pnl'))} average PnL." if by_type else ""
}

## Overall Performance

| Metric | Value |
|--------|-------|
| Total Signals | {total_signals} |
| Wins | {overall.get('wins', 0)} |
| Partials | {overall.get('partials', 0)} |
| Losses | {overall.get('losses', 0)} |
| Expired | {overall.get('expired', 0)} |
| Directional Win Rate | **{directional_wr:.0f}%** ({directional_wins}/{directional_total}) |
| Average PnL | {fmt_pnl(overall.get('avg_pnl'))} |

## Performance by Signal Type

| Type | Total | Wins | Win Rate | Avg PnL |
|------|-------|------|----------|---------|
{type_rows}

## Performance by Coin

| Coin | Total | Wins | Win Rate | Avg PnL |
|------|-------|------|----------|---------|
{coin_rows}

## Performance by Source

| Source | Total | Wins | Win Rate | Avg PnL |
|------|-------|------|----------|---------|
{source_rows}

## Key Takeaways

{
chr(10).join([
    f"1. **Best signal type**: {by_type[0]['signal_type']} at {fmt_pnl(by_type[0].get('avg_pnl'))} avg PnL — {by_type[0].get('wins',0)}/{by_type[0].get('total',0)} wins." if by_type else "",
    f"2. **Best coin**: {by_coin[0]['asset']} at {fmt_pnl(by_coin[0].get('avg_pnl'))} avg PnL — {by_coin[0].get('wins',0)}/{by_coin[0].get('total',0)} wins." if by_coin else "",
    f"3. **Best source**: {by_source[0]['source']} at {fmt_pnl(by_source[0].get('avg_pnl'))} avg PnL." if by_source else "",
    f"4. **Worst signal type**: {by_type[-1]['signal_type']} at {fmt_pnl(by_type[-1].get('avg_pnl'))} — avoid or fade." if len(by_type) > 1 else "",
    f"5. Directional win rate of {directional_wr:.0f}% means {
        'the signals have an edge over random' if directional_wr > 50 else 'there is room for improvement in signal accuracy'
    }.",
])
}

## Track Performance Yourself

The n0brains.com Signals Pro performance tracker is publicly available — no API key required:

```bash
curl https://api.n0brains.com/performance
```

For the full signal feed with entry, stop-loss, and take-profit levels — start free at [n0brains.com](https://n0brains.com).

## Methodology

Performance data sourced from the n0brains.com Signals Pro Performance API (`/performance`). Track record covers {period} days of live signal generation. Win rate calculated on directional signals only (excludes expired/neutral signals). PnL is average per-signal return. Data pulled at approximately {NOW.strftime('%H:%M UTC')} on {TODAY}.
"""
    return slug, content


def generate_weekly_brief() -> str:
    """Day 6 (Sunday): Weekly Intelligence Brief — full ecosystem scan."""
    signals = fetch_signals(30)
    macro = fetch_macro()
    perf = fetch_performance()
    opens = fetch_market_opens()

    # Signal summary
    from collections import Counter
    type_counts = Counter(s["signal_type"] for s in signals)
    dir_counts = Counter(s["direction"] for s in signals)

    # Performance highlights
    by_type = sorted(perf.get("by_signal_type", []), key=lambda x: x.get("avg_pnl", 0), reverse=True)
    by_coin = sorted(perf.get("by_coin", []), key=lambda x: x.get("avg_pnl", 0), reverse=True)

    # Macro
    regime = macro.get("regime", "unknown")
    btc_bias = macro.get("btc", {}).get("bias", "?")
    btc_conv = macro.get("btc", {}).get("conviction", 0)

    # Top signals
    top_signals = sorted(signals, key=lambda s: s.get("score", 0), reverse=True)[:5]

    def sig_row(s):
        asset = s.get("asset") or "Market"
        return f"| {direction_emoji(s['direction'])} | {asset} | {s['signal_type']} | {urgency_badge(s['urgency'])} | {s['summary'][:80]} | {s.get('score',0):.1f} |"

    sig_rows = "\n".join(sig_row(s) for s in top_signals)

    slug = f"weekly-brief-{TODAY_ISO}"
    title = f"Weekly Intelligence Brief — {TODAY}"
    question = "What happened in crypto markets this week and what should I watch next week?"
    description = f"Weekly ecosystem scan: {len(signals)} active signals, regime {regime}, BTC bias {btc_bias} ({btc_conv} conviction). Best performer: {by_coin[0]['asset'] if by_coin else 'N/A'} ({fmt_pnl(by_coin[0].get('avg_pnl')) if by_coin else 'N/A'}). Data from n0brains.com Signals Pro."

    content = f"""---
title: "{title}"
description: "{description}"
pubDate: {TODAY_ISO}
question: "{question}"
category: "weekly-brief"
dataSources:
  - "n0brains.com Signals Pro"
---

## The Short Answer

This week's crypto markets operated under a **{regime}** regime with BTC carrying a **{btc_bias}** bias at **{btc_conv} conviction**. {
f"The best-performing coin by signal PnL was **{by_coin[0]['asset']}** at {fmt_pnl(by_coin[0].get('avg_pnl'))}." if by_coin else ""
} {
f"The worst was **{by_coin[-1]['asset']}** at {fmt_pnl(by_coin[-1].get('avg_pnl'))}." if len(by_coin) > 1 else ""
}

## Macro Regime

| Metric | Value |
|--------|-------|
| Regime | **{regime}** |
| BTC Bias | {btc_bias} ({btc_conv} conviction) |
| ETH Bias | {macro.get('eth',{}).get('bias','?')} ({macro.get('eth',{}).get('conviction',0)} conviction) |
| Horizon | {macro.get('horizon', 'week')} |

**Regime rationale**: {macro.get('regime_reason', 'No rationale provided.')}

## Top Signals This Week

| Dir | Asset | Type | Urgency | Summary | Score |
|-----|-------|------|---------|---------|-------|
{sig_rows}

## Signal Distribution

| Type | Count | Direction | Count |
|------|-------|-----------|-------|
{chr(10).join(f'| {t} | {c} |' for t, c in type_counts.most_common(8))}
{chr(10).join(f'| {d} | {c} |' for d, c in dir_counts.most_common()) if dir_counts else ''}

## Performance Roundup

**Best signal types:**
{chr(10).join(f'- **{t["signal_type"]}**: {fmt_pnl(t.get("avg_pnl"))} avg PnL ({t.get("wins",0)}/{t.get("total",0)} wins)' for t in by_type[:3])}

**Best coins:**
{chr(10).join(f'- **{c["asset"]}**: {fmt_pnl(c.get("avg_pnl"))} avg PnL ({c.get("wins",0)}/{c.get("total",0)} wins)' for c in by_coin[:3])}

## Calendar Risks — Next Week

{
chr(10).join(f"- {r}" for r in macro.get('calendar_risks', [])) if macro.get('calendar_risks') else "- No major calendar risks flagged for the coming week."
}

## Key Takeaways

1. **Regime is {regime}** — {
    "position defensively, favor BTC over altcoins" if regime == "risk-off"
    else "position aggressively, altcoins may outperform" if regime == "risk-on"
    else "trade the range, wait for a breakout"
}.
2. **{by_coin[0]['asset'] if by_coin else 'BTC'} is the best-performing coin** by signal PnL — {
    f"consider overweighting it in your portfolio" if by_coin and by_coin[0].get('avg_pnl', 0) > 0 else "but signal PnL is negative, so trade with caution"
}.
3. **{by_type[0]['signal_type'] if by_type else 'N/A'} signals are the most reliable** — prioritize these over other signal types.
4. **Calendar risks**: {len(macro.get('calendar_risks', []))} events flagged — {
    "position size accordingly" if macro.get('calendar_risks') else "no major events, but stay alert"
}.

## Get the Full Picture

All data in this brief is sourced from **n0brains.com Signals Pro** — the crypto intelligence platform that ingests from 10+ sources, machine-classifies every event, cross-corroborates, and scores into one signal with entry, stop, and take. Delivered via REST API, WebSocket, or Webhook.

```bash
# Signals
curl -H "X-API-Key: your_key" https://api.n0brains.com/signals

# Macro Pulse
curl -H "X-API-Key: your_key" https://api.n0brains.com/macro/latest

# Performance (no auth)
curl https://api.n0brains.com/performance
```

Start free at [n0brains.com](https://n0brains.com). Pro tier ($19.99/month) for real-time WebSocket streaming and full source detail.

## Methodology

All data sourced from n0brains.com Signals Pro APIs: `/signals`, `/macro/latest`, `/performance`, `/market-opens`. Signal performance covers a {perf.get('period_days', 30)}-day rolling window. Macro Pulse generated daily at 07:00 UTC. Data pulled at approximately {NOW.strftime('%H:%M UTC')} on {TODAY}.
"""
    return slug, content


# ── Post Type Router ──────────────────────────────────────────────────────────

GENERATORS = [
    ("signal-roundup", generate_signal_roundup),
    ("sr-levels", generate_sr_levels),
    ("session-flow", generate_session_flow),
    ("macro-pulse", generate_macro_pulse),
    ("smart-money", generate_smart_money),
    ("performance", generate_performance),
    ("weekly-brief", generate_weekly_brief),
]


def get_todays_generator():
    """Pick which post type to generate based on day of year."""
    if IS_SUNDAY:
        return generate_weekly_brief  # Sunday always gets the weekly brief
    idx = DAY_OF_YEAR % 6  # 0-5 for Mon-Sat
    return GENERATORS[idx][1]


# ── Main ──────────────────────────────────────────────────────────────────────

def main():
    dry_run = "--dry-run" in sys.argv
    deploy = "--deploy" in sys.argv

    generator = get_todays_generator()
    gen_name = generator.__name__.replace("generate_", "")
    print(f"[{NOW.strftime('%Y-%m-%d %H:%M')}] Generating: {gen_name} (day {DAY_OF_YEAR})")

    try:
        slug, content = generator()
    except Exception as e:
        print(f"ERROR generating post: {e}")
        sys.exit(1)

    filepath = CONTENT_DIR / f"{slug}.md"

    if dry_run:
        print(f"\n{'='*60}")
        print(f"DRY RUN — would save to: {filepath}")
        print(f"{'='*60}")
        print(content[:2000])
        print(f"\n... ({len(content)} total chars)")
        return

    # Save the post
    CONTENT_DIR.mkdir(parents=True, exist_ok=True)
    filepath.write_text(content)
    print(f"Saved: {filepath} ({len(content)} chars)")

    if deploy:
        import subprocess
        print("Building site...")
        subprocess.run(["npm", "run", "build"], cwd=SITE_DIR, check=True)
        print("Committing...")
        subprocess.run(["git", "add", f"src/content/intel/{slug}.md"], cwd=SITE_DIR, check=True)
        subprocess.run(["git", "commit", "-m", f"intel: {gen_name} — {TODAY_ISO}"], cwd=SITE_DIR, check=True)
        subprocess.run(["git", "push"], cwd=SITE_DIR, check=True)
        print("Deployed!")


if __name__ == "__main__":
    main()
