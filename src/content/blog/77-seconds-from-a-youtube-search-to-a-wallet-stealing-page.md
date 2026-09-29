---
title: "I Searched \"Automated Trader.\" 77 Seconds Later, a Fake Claude Setup Page Was Reaching for My Wallet."
description: "A YouTube description link led to a page that AES-encrypts its own payload so no scanner can read it. Here is the file, the decryption, and the three checks that proved we were clean."
pubDate: 2026-08-13
keywords: ["crypto security", "wallet phishing", "AI agents", "malware analysis", "Phantom wallet", "MetaMask"]
---

Not a hypothetical. Not a report we read somewhere. This happened on our own
machine on 2026-08-13, and the browser history has the receipts down to the
second.

```
02:15:28  YouTube search: "automated trader"
02:15:56  open video: "AI Trading: I Built an Automated Trading Bot with Claude AI (Live Results)"
02:16:45  click the link in the description
          -> storage.googleapis.com/danieltaylor/work.guide
```

Seventy-seven seconds from an ordinary search to a page whose entire job was to
get a wallet connected. The page called itself **"AI Agent Setup Guide."** It
rendered a spinner in Anthropic's brand orange and said:

> *Verifying your connection is secure. You will be redirected automatically.*

There is no verification. There is no redirect. That screen is the whole disguise.

## The part that should worry you: nothing could see it

We fetched the URL through an automated tool first. The tool reported a security
check page. That is all it could report — and that is the design.

The file is 1.5 MB of HTML wearing a `.guide` extension, served as `text/html`
from a public Google Cloud Storage bucket. Free hosting, a trusted domain, an
extension no scanner has a rule for.

Inside is exactly one `<script>`, and here is its final line, deobfuscated down to
the shape that matters:

```js
key   = crypto.subtle.importKey("raw", <embedded bytes>, {name:"AES-CBC"}, ...)
plain = crypto.subtle.decrypt({name:"AES-CBC", iv:<embedded iv>}, key, <embedded ciphertext>)
eval(new TextDecoder().decode(plain))
```

The page **is** the ciphertext. The key and IV ride along with it. Nothing
decrypts until a real browser executes it.

So a URL scanner sees a spinner. A link preview sees a spinner. A crawler sees a
spinner. A security vendor pulling the page sees a spinner. The malicious code
exists only in the seconds after a human's browser runs it, and never lands on
disk in a form anything scans.

That is not clever new cryptography. It is the ordinary WebCrypto API present in
every browser, used to make a payload invisible to everything except the victim.

## What was inside

We decrypted it statically — replaced the `eval` with a file write, so the payload
was dumped, never executed. Out came 845 KB of a second obfuscation layer:
control-flow flattening, 4,174 string fragments split into 8-character chunks.

Decoding that string table:

```
Claude ... Agent Setup Guide          <- the disguise
MetaMask   metamask.io/d...
okx.com/   ...ase.com   ...by.io      <- wallet brands, download paths
/phantom   ethereum    `eth_s...      <- eth_signTypedData / eth_sendTransaction
"Import ... wallet"    "Download ... wallet/d..."
navigator.platform     localStorage   <- fingerprint first, pick the right fake screen
```

An AI-agent onboarding flow that fingerprints your OS and installed wallets, then
asks you to "connect" or "import" one to continue setup. Two payoffs, either one
ending the same way: a recovery phrase typed into a form, or a signature approved
in a popup.

## The new victim profile

Read the bait again: *"I Built an Automated Trading Bot with Claude AI."*

That is not spray-and-pray crypto phishing. It selects for a specific person —
someone building AI agents, who therefore holds crypto, who is already in the
habit of running setup guides they found online, and who will not blink at a page
saying "AI Agent Setup Guide" in Anthropic's colors.

If you build agents and you hold keys on the same machine, that is you. It was us.

## How we proved we were clean

Opening the page does not move funds. It cannot. A wallet does not auto-connect,
and no transfer happens without an approval click or a typed seed phrase. But
"probably fine" is not an answer when the downside is your keys, so we checked.
The method is reusable, so here it is in full.

**1. Browser history — did the flow advance?**

```sql
SELECT datetime(v.visit_date/1000000,'unixepoch','localtime'), v.visit_type, p.url
FROM moz_historyvisits v JOIN moz_places p ON p.id = v.place_id
WHERE p.url LIKE '%storage.googleapis.com%';
```

One visit. Zero navigations after it. The flow never advanced past the spinner.

**2. Wallet extension storage — was a connection ever granted?**

Wallets keep a list of sites you approved. Grep the extension's IndexedDB for the
lure's origin. No match.

**A no-match proves nothing until you prove the grep works.** So we ran a positive
control: grep the same database for origins we *had* connected. It returned a real
dApp we use. The instrument reads plaintext origins, the instrument found real
ones, and the instrument does not find the lure. Now the absence is evidence.

Skip this step and a typo, a wrong path, or an encrypted store hands you a
comforting no-match that means nothing.

**3. On-chain — is there a delegate?**

A Solana drainer's payoff is an `approve` delegate on your token accounts, or a
signed transfer. Enumerate every token account and read the delegate field:

```
getTokenAccountsByOwner(<wallet>, {programId: <Token / Token-2022>}, {encoding:"jsonParsed"})
```

Roughly 160 token accounts. `DELEGATE: none` on every one. Last transaction 51
days old. Nothing signed, nothing approved, nothing moved.

Total damage: one localStorage key, `__lid=cmsr6qazxcs32bsb7` — a campaign
tracking ID. They logged an impression. That is all they got.

## Do this now

- **If you clicked anything on a page like this:** revoke approvals (revoke.cash
  for EVM, check token-account delegates for Solana), move funds to a wallet whose
  seed has never been typed into a browser, and treat any phrase you entered as
  public.
- **If you only loaded it:** run the three checks above. Do not skip the positive
  control in step 2.
- **Stop trusting the file extension.** `.guide`, `.txt`, `.pdf` in a URL is a
  string, not a fact. `Content-Type` is what your browser obeys.
- **A trusted domain is not a trusted file.** `storage.googleapis.com` is Google.
  The bucket belongs to a stranger.
- **Keep your wallet on a different machine — or at minimum a different browser
  profile — than the one you research on.** This is the control that would have
  made the whole incident boring.

## What we did not verify

We never executed the payload. Everything through the decryption is observed; the
attack flow is reconstructed from decrypted strings, not watched running. We did
not identify the command-and-control endpoint, we did not confirm which fake
screen a given OS and wallet combination receives, and we are not naming an actor.
We verified the video's title and the link in its description, and nothing about
who runs the channel.

Both artifacts are reported: the object to Google Cloud abuse, the video to
YouTube.

## Indicators

```
url      https://storage.googleapis.com/danieltaylor/work.guide
bucket   danieltaylor           object: work.guide
md5      dbca0068efdf5019e8dcc86e9debaed7
size     1508392 bytes          content-type: text/html; charset=utf-8
uploaded 2026-08-08 18:51:30 UTC
title    "AI Agent Setup Guide"
tech     obfuscator.io -> AES-CBC via crypto.subtle -> eval; 2nd layer 845075 bytes
ls key   __lid = cmsr6qazxcs32bsb7
source   YouTube video id 1DPogwDq_C4, link in description
```

The bait works because the search was real, the interest was real, and the page
looked like the thing we actually build. Check the payload, not the packaging.
