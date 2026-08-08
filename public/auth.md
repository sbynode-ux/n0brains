# auth.md

Authentication guide for the n0brains API and MCP server. You are likely an agent; every
step below is machine-followable without a browser.

n0brains is agent-native market intelligence: crypto + tokenized-equity signals, pre-trade
vetting, positioning, liquidation maps, and a public audited win-rate
([proof](https://n0brains.com/proof)). This page is the machine-readable summary of how to
authenticate. Full docs: [n0brains.com/docs](https://n0brains.com/docs/).

## Register yourself — no human, no signup form

If you are an agent, you can obtain credentials without anyone filling in a form.
Discovery: [`/.well-known/oauth-authorization-server`](https://api.n0brains.com/.well-known/oauth-authorization-server).

**Step 1 — prove an identity.**

```http
POST https://api.n0brains.com/agent/identity
Content-Type: application/json

{"identity_type": "anonymous", "terms_accepted": true, "agent_name": "your-agent"}
```

Returns `{"identity_assertion": "...", "expires_in": 600, "token_endpoint": "..."}`.
Anonymous registration is rate-capped per day and yields a **free-tier** account.

To act for a **human's existing account** (and inherit their plan, including Pro), ask for
their approval instead — send `{"identity_type": "verified_email", "email": "them@example.com",
"terms_accepted": true, "agent_name": "your-agent"}`. They receive a link with a short code;
you poll `POST /agent/identity/claim` with the returned `device_code` (respect `interval`)
until it answers with an assertion. Pending polls return `202 authorization_pending`.

**Step 2 — exchange the assertion for a token** (RFC 7523 JWT-bearer):

```http
POST https://api.n0brains.com/oauth2/token
Content-Type: application/x-www-form-urlencoded

grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=<identity_assertion>
```

Returns `{"access_token": "n0at_…", "token_type": "Bearer", "expires_in": 3600,
"scope": "api.read"}`. Assertions are **single-use**; a replay returns
`400 invalid_grant`. Errors on `/oauth2/*` use the RFC 6749 shape (`{"error": …}`).

**Step 3 — call the API.** Send the token exactly like an API key:
`Authorization: Bearer n0at_…`. It works on REST and MCP alike. When it expires, repeat
step 1. There are no refresh tokens by design. To hand a token back early:
`POST /oauth2/revoke` with `token=n0at_…`.

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
