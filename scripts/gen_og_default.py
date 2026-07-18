#!/usr/bin/env python3
"""Generate the claim-free, check-first default social/link-preview card."""
import os

from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
BG = (5, 8, 5)
ACCENT = (45, 230, 90)       # green
HEAD = (239, 239, 239)       # near-white
MUTED = (130, 140, 130)
SUB = (150, 158, 150)

FONT_DIR = "/usr/share/fonts/truetype/dejavu"
SANS = os.path.join(FONT_DIR, "DejaVuSans.ttf")
SANS_BOLD = os.path.join(FONT_DIR, "DejaVuSans-Bold.ttf")
MONO = os.path.join(FONT_DIR, "DejaVuSansMono.ttf")
MONO_BOLD = os.path.join(FONT_DIR, "DejaVuSansMono-Bold.ttf")
OUT = os.path.join(os.path.dirname(__file__), "..", "public", "og-default.png")


def f(path, size):
    return ImageFont.truetype(path, size)


def main():
    img = Image.new("RGB", (W, H), BG)
    d = ImageDraw.Draw(img)

    # subtle vignette border
    d.rectangle([24, 24, W - 24, H - 24], outline=(20, 30, 20), width=1)

    pad = 96

    # ── header: ── N0BRAINS // PRE-TRADE CHECK
    hy = 120
    d.line([(pad, hy + 8), (pad + 56, hy + 8)], fill=ACCENT, width=3)
    hx = pad + 72
    hf = f(MONO_BOLD, 26)
    d.text((hx, hy - 6), "N0BRAINS", font=hf, fill=ACCENT)
    w1 = d.textlength("N0BRAINS", font=hf)
    d.text((hx + w1 + 18, hy - 6), "//", font=hf, fill=(90, 110, 90))
    w2 = d.textlength("//", font=hf)
    d.text((hx + w1 + 18 + w2 + 18, hy - 6), "PRE-TRADE CHECK", font=hf, fill=ACCENT)

    # ── big tagline: ASK N0BRAINS / FIRST.
    big = f(SANS_BOLD, 120)
    line1_y = 165
    line2_y = line1_y + 140
    d.text((pad, line1_y), "ASK N0BRAINS", font=big, fill=HEAD)

    first = "FIRST."
    fw = d.textlength(first, font=big)
    d.text((pad, line2_y), first, font=big, fill=ACCENT)
    # underline under FIRST
    ul_y = line2_y + 132
    d.line([(pad, ul_y), (pad + fw, ul_y)], fill=ACCENT, width=4)

    # ── bottom subtitle
    subf = f(MONO, 28)
    sy = 500
    d.text((pad, sy), "// conditions before conviction", font=subf, fill=SUB)
    # n0brains /> tag on the right
    tagf = f(MONO_BOLD, 30)
    tag = "<n0brains />"
    tw = d.textlength(tag, font=tagf)
    d.text((W - pad - tw, sy - 2), tag, font=tagf, fill=HEAD)
    # url bottom-right
    urlf = f(MONO, 22)
    url = "n0brains.com"
    uw = d.textlength(url, font=urlf)
    d.text((W - pad - uw, sy + 40), url, font=urlf, fill=MUTED)

    img.save(OUT)
    print(f"wrote {os.path.abspath(OUT)}")


if __name__ == "__main__":
    main()
