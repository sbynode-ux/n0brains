#!/usr/bin/env python3
"""Generate public/og-proof.png — the social card for the /proof page.

Pulls the LIVE /proof endpoint so the card never claims more than the product
proves. Dark hacker-zine aesthetic to match the site. Re-run any time the
proven set changes:  python3 scripts/gen_og_proof.py

Honesty guardrail: only the `tradeable` (proven) types are shown, with their
real win rate + excess-over-hold + 95% CI lower bound. No invented numbers.
"""
import json
import os
import sys
import urllib.request

from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
BG = (5, 5, 5)
BG_ALT = (12, 12, 12)
ACCENT = (0, 255, 65)
GREEN = (74, 222, 128)
TEXT = (168, 168, 168)
HEAD = (239, 239, 239)
MUTED = (112, 112, 112)
BORDER = (38, 38, 38)

FONT_DIR = "/usr/share/fonts/truetype/dejavu"
MONO = os.path.join(FONT_DIR, "DejaVuSansMono.ttf")
MONO_BOLD = os.path.join(FONT_DIR, "DejaVuSansMono-Bold.ttf")
SANS_BOLD = os.path.join(FONT_DIR, "DejaVuSans-Bold.ttf")

ENDPOINT = "https://api.n0brains.com/proof"
OUT = os.path.join(os.path.dirname(__file__), "..", "public", "og-proof.png")


def f(path, size):
    return ImageFont.truetype(path, size)


def fetch_proven():
    req = urllib.request.Request(ENDPOINT, headers={"User-Agent": "n0brains-og-gen/1.0"})
    with urllib.request.urlopen(req, timeout=20) as r:
        data = json.load(r)
    types = data.get("types", [])
    proven = [t for t in types if t.get("tradeable")]
    return proven


def main():
    try:
        proven = fetch_proven()
    except Exception as e:  # noqa: BLE001
        print(f"WARN: could not fetch /proof ({e}); aborting so we never ship stale numbers", file=sys.stderr)
        sys.exit(1)

    img = Image.new("RGB", (W, H), BG)
    d = ImageDraw.Draw(img)

    # subtle accent rule top
    d.rectangle([0, 0, W, 6], fill=ACCENT)

    # eyebrow
    d.text((64, 70), "// LIVE WIN-RATE SCOREBOARD", font=f(MONO_BOLD, 26), fill=ACCENT)

    # headline
    d.text((60, 120), "Every call.", font=f(SANS_BOLD, 84), fill=HEAD)
    d.text((60, 212), "On the record.", font=f(SANS_BOLD, 84), fill=HEAD)

    # subhead
    d.text(
        (64, 322),
        "Every signal type measured on real prices. Proven only when it beats",
        font=f(MONO, 22),
        fill=TEXT,
    )
    d.text(
        (64, 354),
        "buy-and-hold AND is profitable on its own, 95% CI above zero.",
        font=f(MONO, 22),
        fill=TEXT,
    )

    # proven rows
    y = 388
    n = len(proven)
    d.text((64, y), f"{n} TYPE{'S' if n != 1 else ''} FORWARD-RETURN PROVEN", font=f(MONO_BOLD, 22), fill=GREEN)
    y += 38
    for t in proven[:3]:
        name = t["signal_type"]
        win = f"{float(t['win_rate']) * 100:.1f}%"
        excess = f"{float(t['excess_pct']):+.2f}%"
        ci = f"{float(t['ci_low_pct']):+.2f}%"
        d.text((80, y), f"{name:<11}", font=f(MONO_BOLD, 30), fill=HEAD)
        d.text((320, y + 4), f"win {win}", font=f(MONO, 26), fill=HEAD)
        d.text((520, y + 4), f"excess {excess}", font=f(MONO, 26), fill=GREEN)
        d.text((820, y + 4), f"CI low {ci}", font=f(MONO, 26), fill=GREEN)
        y += 45

    # footer
    d.line([(64, 576), (W - 64, 576)], fill=BORDER, width=1)
    d.text((64, 588), "n0brains.com/proof", font=f(MONO_BOLD, 24), fill=ACCENT)
    d.text(
        (W - 64, 592),
        "agent-native crypto signals",
        font=f(MONO, 20),
        fill=MUTED,
        anchor="ra",
    )

    img.save(os.path.normpath(OUT), "PNG")
    print(f"wrote {os.path.normpath(OUT)}  ({n} proven types)")


if __name__ == "__main__":
    main()
