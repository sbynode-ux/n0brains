---
name: n0brains-signals
description: Use this skill to give your agent live crypto market intelligence — corroborated trading signals, support/resistance levels, and session opens — from the n0brains Signals API (https://api.n0brains.com). Invoke it whenever an agent needs to make a market-aware decision: before opening a position, sizing a trade, exiting on news, or reacting to whale flows. Requires an n0brains API key.
user-invocable: true
---

# n0brains Signals

You are now talking to the n0brains signal pipeline. Many watchers feed it: Telegram channels, RSS, on-chain wallets, exchange order books, government filings, social media. An LLM classifies every event, cross-corroborates it, scores it. The output is **a stream of actionable signals** with direction, confidence, and entry/SL/TP levels.

**You decide what to do with the signal. n0brains never trades for you.** It is an intelligence layer; execution stays with the user or their dedicated trading agent.

---

## Installing this skill

This is a plain Markdown file. To use it in an agent runtime:

- **OpenClaw** — drop this file into your agent's skills directory. Set the `NB_API_KEY` environment variable (or your runtime's secret store, key `n0brains_api_key`) to the key from your n0brains account dashboard.
- **Claude Code** — copy this file into `~/.claude/skills/n0brains-signals/SKILL.md`. Set `NB_API_KEY` in your environment.
- **Custom orchestrator** — load this file as system context. Read the key from `NB_API_KEY` or your secret store.

Get a free key at https://n0brains.com/signup — free tier is 60 req/min, 15-minute delay, REST only.

---

## When to use this skill

Reach for these tools whenever the user — or the task you've been given — needs to make a *market-aware* decision:

- Before opening or closing a position → `get_signals` filtered to the asset
- When monitoring news / regulatory risk → `get_signals` with `signal_type=regulatory`
- When deciding entry / stop levels → `get_levels` for nearest S/R
- When timing entries to liquidity → `get_market_opens` for session prices
- When you need *real-time* reaction → `stream_signals` (Pro tier only)
- When following up on an alert → `get_signal` with the signal ID

If the task isn't market-related, **don't invoke this skill** — it just burns the user's rate limit.

## Authentication

Every call needs the user's API key. Read it from one of:

1. Environment variable `NB_API_KEY` (preferred)
2. The runtime's secret store, key `n0brains_api_key`
3. Ask the user once and cache for the session

Send it on every request as the `X-API-Key` header. For the WebSocket stream it goes in the URL as `?api_key=...`. **Never log the key or echo it back to the user.**

```bash
curl https://api.n0brains.com/signals -H "X-API-Key: $NB_API_KEY"
```

## Tier awareness

| Tier | Rate | Delay | WS / Webhooks | Per-signal fields |
| --- | --- | --- | --- | --- |
| Free | 60 req/min | 15 min | ❌ | summary only — no `sources`, `source`, `channel` |
| Pro  | 600 req/min | real-time | ✅ | full detail incl. corroboration trail |

If the user appears to be running real-time trades on the Free tier, **say something** — it's a trading hazard, not a feature gap. Pricing: https://n0brains.com/#pricing. If `stream_signals` returns `403`, they need to upgrade — don't retry.

---

## The five tools

All are HTTP calls to `https://api.n0brains.com`. Responses are JSON. Timestamps are Unix epoch (seconds).

### 1. `get_signals` — list active signals

The default question: "what's happening in the market right now?" Filter aggressively; don't pull the whole feed.

```
get_signals(
  asset?:        string,          // "BTC", "ETH", "SOL"
  signal_type?:  SignalType,      // regulatory | whale | sentiment | price | hack | listing | macro | liquidation | funding | other
  direction?:    "bullish" | "bearish" | "neutral",
  urgency?:      "high" | "medium" | "low",
  limit?:        int,             // 1–200, default 50
  offset?:       int,             // default 0
  include_opens?: bool            // default true
) -> SignalsResponse
```

Response:

```jsonc
{
  "count": 2,
  "signals": [
    {
      "id": 195,
      "asset": "BTC",                // null = market-wide
      "signal_type": "whale",
      "direction": "bullish",
      "urgency": "high",
      "summary": "Strategy buys 535 BTC for $43M",
      "confidence": 0.95,            // 0.0–1.0
      "action_hint": "trade_signal", // trade_signal | alert | monitor | ignore
      "corroborated": true,
      "score": 1.42,                 // source_weight × urgency × confidence
      "entry_price": 81262.50,
      "stop_loss": 80871.00,
      "take_profit": 81385.50,
      "timestamp": 1778555605,
      "expires_at": 1778570005,
      // Pro tier only:
      "sources": ["whale_hyperliquid", "funding_binance"],
      "source": "whale_hyperliquid",
      "channel": "hyperliquid_leaderboard",
      "disclaimer": "Not financial advice. Past performance does not guarantee future results."
    }
  ],
  "market_opens": {
    "tokyo":    { "BTC": 81150.00, "ETH": 3200.50, "SOL": 96.30, "timestamp": 1778539200 },
    "london":   { "BTC": 81201.50, "ETH": 3205.00, "SOL": 96.48, "timestamp": 1778553600 },
    "new_york": { "BTC": 81262.50, "ETH": 3210.00, "SOL": 96.55, "timestamp": 1778560800 }
  }
}
```

```bash
curl "https://api.n0brains.com/signals?asset=BTC&urgency=high" -H "X-API-Key: $NB_API_KEY"
```

Pitfalls: Free tier strips `sources`/`source`/`channel` — check before reading. `asset` can be `null` (market-wide). 15-min delay on Free — don't chase 1-min candles.

### 2. `get_signal` — fetch one signal by ID

```
get_signal(id: int) -> Signal
```

Same shape as an item in `get_signals`. `404` if the ID doesn't exist or was expired and purged.

```bash
curl https://api.n0brains.com/signals/195 -H "X-API-Key: $NB_API_KEY"
```

### 3. `get_levels` — nearest support / resistance

```
get_levels(coin: string) -> LevelsResponse
```

`coin` is the bare ticker. Levels come from the Hyperliquid order book; liquid majors only.

```jsonc
{
  "coin": "BTC",
  "current_price": 81262.50,
  "nearest_resistance": 81450.00,
  "nearest_support": 80871.00,
  "all_resistance": [81450.00, 81800.00, 82200.00, 82500.00, 83000.00],
  "all_support": [80871.00, 80500.00, 80000.00, 79500.00, 79000.00]
}
```

Pitfalls: shitcoins return `404`. Levels drift constantly — re-fetch before placing the order, not at the start of analysis.

### 4. `get_market_opens` — session opening prices

```
get_market_opens() -> MarketOpensResponse
```

No params.

```jsonc
{
  "market_opens": {
    "tokyo":     { "BTC": 81150.00, "ETH": 3200.50, "SOL": 96.30, "timestamp": 1778539200 },
    "shanghai":  { "BTC": 81180.00, "ETH": 3202.00, "SOL": 96.35, "timestamp": 1778542800 },
    "hong_kong": { "BTC": 81190.00, "ETH": 3203.50, "SOL": 96.40, "timestamp": 1778542800 },
    "london":    { "BTC": 81201.50, "ETH": 3205.00, "SOL": 96.48, "timestamp": 1778553600 },
    "new_york":  { "BTC": 81262.50, "ETH": 3210.00, "SOL": 96.55, "timestamp": 1778560800 }
  }
}
```

### 5. `stream_signals` — real-time WebSocket feed *(Pro only)*

```
wss://api.n0brains.com/stream?api_key=intel_sk_...
```

API key goes in the URL — no header on the WS handshake.

- Server → client: every new signal as `{"type": "signal", "data": <Signal>}`.
- Heartbeat: send the literal string `"ping"` every ~30s; server replies `{"type": "pong", "timestamp": <unix>}`. Stop and the server closes after 60s.

```python
import asyncio, json, os, websockets

async def consume():
    url = f"wss://api.n0brains.com/stream?api_key={os.environ['NB_API_KEY']}"
    async with websockets.connect(url, ping_interval=None) as ws:
        async def heartbeat():
            while True:
                await ws.send("ping")
                await asyncio.sleep(30)
        asyncio.create_task(heartbeat())
        async for msg in ws:
            event = json.loads(msg)
            if event.get("type") != "signal":
                continue
            sig = event["data"]
            if sig["score"] >= 1.3 and sig["urgency"] == "high":
                await on_signal(sig)

asyncio.run(consume())
```

Pitfalls: `403` means Free tier — don't retry. Fire-and-forget — no replay; pair with periodic `get_signals` polling for catch-up. No query params on `/stream` — filter in code on `data.score` / `data.asset` / `data.signal_type`.

---

## Errors

Every error is `{"detail": "<string>"}`.

| Code | Meaning | Action |
| --- | --- | --- |
| `400` | Bad params | Fix the call (common: bad `signal_type` enum). |
| `401` | Missing/invalid key | Re-read the key from the user's env. |
| `403` | Tier doesn't allow | Surface to user with upgrade link. **Do not retry.** |
| `404` | Resource missing | Signal expired, coin not tracked, etc. |
| `429` | Rate limited | Back off — `Retry-After` header says how long. |
| `5xx` | Our side | Exponential backoff, cap 3 retries. |

---

## Behaviour rules

- **Bias toward `get_signals` with filters.** Pulling the whole feed and post-filtering wastes rate and context.
- **Respect `expires_at`.** Signals are time-bound; an expired signal is noise.
- **Score is multiplicative, not absolute.** A score of 1.5 isn't "150% confident" — it's `source_weight × urgency × confidence`. Use it as a sort key, not a probability.
- **`action_hint` is a suggestion**, not a command. `trade_signal` ≠ "execute this trade". The user — or the supervising agent — decides.
- **Every response carries a disclaimer** (`"Not financial advice. Past performance does not guarantee future results."`). Surface it the first time you summarize signals, then once per session.
- **Never auto-trade.** n0brains is intelligence, not execution.
