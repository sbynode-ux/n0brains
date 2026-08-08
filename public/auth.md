# Auth

Authentication guide for the n0brains API and MCP server.

n0brains is agent-native market intelligence: crypto + tokenized-equity signals, pre-trade
vetting, positioning, liquidation maps, and a public audited win-rate
([proof](https://n0brains.com/proof)). This page is the machine-readable summary of how to
authenticate. Full docs: [n0brains.com/docs](https://n0brains.com/docs/).

## Get a key

- Sign up at [n0brains.com/signup](https://n0brains.com/signup) — the API key is shown once at registration.
- Or via REST: `POST https://api.n0brains.com/auth/register` with `{"email": "...", "password": "...", "terms_accepted": true}`.
- Additional keys: `POST https://api.n0brains.com/auth/api-keys` with your JWT (`Authorization: Bearer <jwt>` from `/auth/login`).
- Free tier works immediately; Pro unlocks the full surface.

## REST

Base URL `https://api.n0brains.com`. Send the key as a header — either form works:

```
X-API-Key: YOUR_KEY
Authorization: Bearer YOUR_KEY
```

Query-parameter auth is **not** accepted on REST endpoints. Machine-readable API
description: [openapi.json](https://api.n0brains.com/openapi.json). Catalog:
[/.well-known/api-catalog](https://n0brains.com/.well-known/api-catalog).

## MCP (Model Context Protocol)

Streamable-HTTP server at `https://api.n0brains.com/mcp/` (keep the trailing slash).

- `initialize` and `tools/list` work unauthenticated — browse the catalog before signing up.
- Authenticate with the same headers as REST, **or** `?api_key=YOUR_KEY` as a URL query
  parameter for clients that cannot set headers (for example claude.ai custom connectors).
- Server card: [/.well-known/mcp.json](https://n0brains.com/.well-known/mcp.json).

## x402 — pay per call, no account

Selected endpoints accept [x402](https://www.x402.org/) payments (USDC on Base) with no
registration. Discovery document:
[api.n0brains.com/.well-known/x402.json](https://api.n0brains.com/.well-known/x402.json).

## Errors

Auth failures return HTTP 401 with a typed body: `{"error": {"code": "INVALID_API_KEY", ...}}`.
Rate-limit and quota responses include `retry_after_seconds`.
