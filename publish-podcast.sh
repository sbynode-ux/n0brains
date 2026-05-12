#!/usr/bin/env bash
#
# n0brains podcast publisher
# Usage: ./publish-podcast.sh <audio_file> "Episode Title" "Episode description"
#
# Or run without args for interactive mode:
#   ./publish-podcast.sh
#
# What it does:
#   1. Converts audio to MP3 (if needed)
#   2. Extracts duration and file size
#   3. Generates slug and episode number
#   4. Copies MP3 to public/podcast/
#   5. Updates src/data/episodes.json
#   6. Updates public/podcast.xml
#   7. Builds, commits, and pushes to GitHub
#

set -euo pipefail

SITE_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SITE_DIR"

# ── Colors ──────────────────────────────────────────────────────────
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
CYAN='\033[0;36m'
NC='\033[0m'

info()  { echo -e "${CYAN}→${NC} $*"; }
ok()    { echo -e "${GREEN}✓${NC} $*"; }
warn()  { echo -e "${YELLOW}!${NC} $*"; }
err()   { echo -e "${RED}✗${NC} $*"; exit 1; }

# ── Check dependencies ──────────────────────────────────────────────
command -v ffmpeg >/dev/null 2>&1  || err "ffmpeg not found. Install it first."
command -v python3 >/dev/null 2>&1 || err "python3 not found."
command -v git >/dev/null 2>&1     || err "git not found."

# ── Interactive or CLI mode ──────────────────────────────────────────
if [ $# -ge 1 ] && [ -f "$1" ]; then
    AUDIO_FILE="$1"
    TITLE="${2:-}"
    DESCRIPTION="${3:-}"
else
    echo ""
    echo -e "${CYAN}n0brains podcast publisher${NC}"
    echo "Drag an audio file here and press Enter:"
    read -r AUDIO_FILE
    # Strip quotes if present
    AUDIO_FILE="${AUDIO_FILE%\"}"
    AUDIO_FILE="${AUDIO_FILE#\"}"
    AUDIO_FILE="${AUDIO_FILE%\'}"
    AUDIO_FILE="${AUDIO_FILE#\'}"

    [ ! -f "$AUDIO_FILE" ] && err "File not found: $AUDIO_FILE"

    echo ""
    echo -e "Episode title (or press Enter to use filename):"
    read -r TITLE

    echo ""
    echo -e "Short description:"
    read -r DESCRIPTION
    echo ""
fi

[ ! -f "$AUDIO_FILE" ] && err "File not found: $AUDIO_FILE"

# ── Generate title from filename if not provided ─────────────────────
if [ -z "$TITLE" ]; then
    # Strip extension, replace underscores/hyphens with spaces, title case
    TITLE="$(basename "$AUDIO_FILE" | sed 's/\.[^.]*$//' | tr '_-' ' ' | sed 's/^\(.\)/\U\1/')"
fi

[ -z "$TITLE" ] && err "Title is required."

# ── Determine next episode number ───────────────────────────────────
CURRENT_EP=$(python3 -c "
import json
with open('src/data/episodes.json') as f:
    eps = json.load(f)
print(max(e['num'] for e in eps) if eps else 0)
")
NEXT_EP=$((CURRENT_EP + 1))
EP_NUM_PAD=$(printf "%02d" "$NEXT_EP")

info "Episode number: ${NEXT_EP}"

# ── Generate slug from title ─────────────────────────────────────────
# Strip "Ep N:" or "Ep N -" prefix if present, then slugify
SLUG=$(echo "$TITLE" | sed -E 's/^[Ee]p\.?[[:space:]]*[0-9]+[[:space:]]*[:-]?[[:space:]]*//' | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9 ]//g' | sed 's/ \+/-/g' | sed 's/-$//' | cut -c1-60)
MP3_FILENAME="ep-${EP_NUM_PAD}-${SLUG}.mp3"
MP3_PATH="public/podcast/${MP3_FILENAME}"
MP3_URL="https://n0brains.com/podcast/${MP3_FILENAME}"

# ── Clean title: ensure "Ep N:" prefix ──────────────────────────────
# If title doesn't start with "Ep", add it
DISPLAY_TITLE=$(echo "$TITLE" | sed -E 's/^[Ee]p\.?[[:space:]]*[0-9]+[[:space:]]*[:-]?[[:space:]]*//')
DISPLAY_TITLE="Ep ${NEXT_EP}: ${DISPLAY_TITLE}"

info "Title: ${DISPLAY_TITLE}"
info "Slug: ${SLUG}"
info "MP3: ${MP3_FILENAME}"

# ── Convert to MP3 if needed ────────────────────────────────────────
AUDIO_EXT="${AUDIO_FILE##*.}"
if [ "$AUDIO_EXT" = "mp3" ]; then
    info "Already MP3, copying..."
    cp "$AUDIO_FILE" "$MP3_PATH"
else
    info "Converting ${AUDIO_EXT} to MP3..."
    ffmpeg -i "$AUDIO_FILE" -ab 192k -y "$MP3_PATH" 2>/dev/null
fi

ok "MP3 ready: ${MP3_PATH}"

# ── Get duration and size ────────────────────────────────────────────
DURATION_SEC=$(ffprobe -v quiet -show_entries format=duration -of csv=p=0 "$MP3_PATH" | cut -d'.' -f1)
SIZE_BYTES=$(stat -c%s "$MP3_PATH" 2>/dev/null || stat -f%z "$MP3_PATH" 2>/dev/null)

[ -z "$DURATION_SEC" ] && DURATION_SEC=0
[ -z "$SIZE_BYTES" ] && SIZE_BYTES=0

info "Duration: ${DURATION_SEC}s, Size: ${SIZE_BYTES} bytes"

# ── Format duration for RSS (HH:MM:SS or MM:SS) ────────────────────
DURATION_RSS=$(python3 -c "
d = int('${DURATION_SEC}')
h = d // 3600
m = (d % 3600) // 60
s = d % 60
if h:
    print(f'{h}:{m:02d}:{s:02d}')
else:
    print(f'{m}:{s:02d}')
")

# ── Format date ─────────────────────────────────────────────────────
PUB_DATE_ISO=$(date +%Y-%m-%d)
PUB_DATE_RSS=$(date +"%a, %d %b %Y 12:00:00 GMT")

# ── Confirm ──────────────────────────────────────────────────────────
echo ""
echo -e "${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "  Episode:  ${NEXT_EP}"
echo -e "  Title:    ${DISPLAY_TITLE}"
echo -e "  Slug:     ${SLUG}"
echo -e "  File:     ${MP3_FILENAME}"
echo -e "  Duration: ${DURATION_RSS}"
echo -e "  Size:     ${SIZE_BYTES} bytes"
echo -e "  Date:     ${PUB_DATE_ISO}"
echo -e "${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo -e "Publish this episode? [Y/n]"
read -r CONFIRM
[[ "${CONFIRM,,}" == "n" ]] && { warn "Cancelled."; exit 0; }

# ── Update episodes.json ────────────────────────────────────────────
info "Updating episodes.json..."
python3 << PYEOF
import json

with open('src/data/episodes.json') as f:
    episodes = json.load(f)

new_ep = {
    "num": ${NEXT_EP},
    "title": ${DISPLAY_TITLE@Q},
    "summary": ${DESCRIPTION@Q},
    "mp3_url": "${MP3_URL}",
    "duration_sec": ${DURATION_SEC},
    "size_bytes": ${SIZE_BYTES},
    "pubDate": "${PUB_DATE_ISO}",
    "articles": []
}

episodes.insert(0, new_ep)

with open('src/data/episodes.json', 'w') as f:
    json.dump(episodes, f, indent=2)
    f.write('\n')
PYEOF

ok "episodes.json updated"

# ── Update podcast.xml ──────────────────────────────────────────────
info "Updating podcast.xml..."

# Escape for XML
TITLE_XML=$(echo "$DISPLAY_TITLE" | sed 's/&/\&amp;/g; s/</\&lt;/g; s/>/\&gt;/g')
DESC_XML=$(echo "$DESCRIPTION" | sed 's/&/\&amp;/g; s/</\&lt;/g; s/>/\&gt;/g')

python3 << PYEOF
with open('public/podcast.xml') as f:
    xml = f.read()

new_item = """    <item>
      <title>${TITLE_XML}</title>
      <description>${DESC_XML}</description>
      <itunes:summary>${DESC_XML}</itunes:summary>
      <pubDate>${PUB_DATE_RSS}</pubDate>
      <guid isPermaLink="false">n0brains-ep-${EP_NUM_PAD}</guid>
      <enclosure url="${MP3_URL}" length="${SIZE_BYTES}" type="audio/mpeg"/>
      <itunes:duration>${DURATION_RSS}</itunes:duration>
      <itunes:episode>${NEXT_EP}</itunes:episode>
      <itunes:explicit>false</itunes:explicit>
      <itunes:author>n0brains</itunes:author>
    </item>
"""

first_item = xml.find('<item>')
if first_item == -1:
    channel_end = xml.find('</channel>')
    xml = xml[:channel_end] + new_item + '\n  ' + xml[channel_end:]
else:
    xml = xml[:first_item] + new_item + '\n    ' + xml[first_item:]

with open('public/podcast.xml', 'w') as f:
    f.write(xml)
PYEOF

ok "podcast.xml updated"

# ── Build ────────────────────────────────────────────────────────────
info "Building site..."
npm run build 2>&1 | tail -3

# ── Git commit and push ─────────────────────────────────────────────
info "Committing and pushing..."
git add -A
git commit -m "publish: Ep ${NEXT_EP} - ${DISPLAY_TITLE}" >/dev/null 2>&1
git push origin main 2>&1 | tail -1

ok "Episode ${NEXT_EP} published!"
echo ""
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}  Episode ${NEXT_EP}: ${DISPLAY_TITLE}${NC}"
echo -e "${GREEN}  Duration: ${DURATION_RSS}${NC}"
echo -e "${GREEN}  URL: https://n0brains.com/podcast/${MP3_FILENAME}${NC}"
echo -e "${GREEN}  Page: https://n0brains.com/podcast/${NC}"
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"