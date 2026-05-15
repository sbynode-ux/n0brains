#!/usr/bin/env python3
"""
n0brains Podcast Publisher — GTK3 drag-drop GUI
Drop an .m4a/.mp3/.wav file → enter title + description → publish.
"""

import gi
gi.require_version('Gtk', '3.0')
from gi.repository import Gtk, Gdk, GLib, Pango

import os
import sys
import json
import threading
import subprocess
import shutil
import stat
from datetime import datetime, timezone
from pathlib import Path

SITE_DIR = Path(__file__).parent.resolve()
EPISODES_JSON = SITE_DIR / "src/data/episodes.json"
PODCAST_XML   = SITE_DIR / "public/podcast.xml"
PODCAST_DIR   = SITE_DIR / "public/podcast"
PUBLISH_SCRIPT = SITE_DIR / "publish-podcast.sh"

AUDIO_EXTS = {'.m4a', '.mp3', '.wav', '.aac', '.ogg', '.flac', '.aiff'}

# ── CSS ─────────────────────────────────────────────────────────────────────
CSS = b"""
window {
    background-color: #0a0a0a;
}
.drop-zone {
    background-color: #111111;
    border: 2px dashed #333333;
    border-radius: 12px;
    color: #666666;
}
.drop-zone.drag-over {
    border-color: #00ff88;
    background-color: #0d1a14;
    color: #00ff88;
}
.drop-zone.file-ready {
    border-color: #00ff88;
    border-style: solid;
    background-color: #0d1a14;
}
.drop-label {
    color: #666666;
    font-size: 15px;
}
.file-label {
    color: #00ff88;
    font-size: 14px;
    font-weight: bold;
}
.section-label {
    color: #888888;
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 1px;
}
entry {
    background-color: #1a1a1a;
    color: #e0e0e0;
    border: 1px solid #333333;
    border-radius: 6px;
    padding: 8px 12px;
    font-size: 14px;
    caret-color: #00ff88;
}
entry:focus {
    border-color: #00ff88;
    box-shadow: 0 0 0 2px rgba(0,255,136,0.15);
}
textview {
    background-color: #1a1a1a;
    color: #e0e0e0;
    font-size: 14px;
}
textview text {
    background-color: #1a1a1a;
    color: #e0e0e0;
}
scrolledwindow {
    border: 1px solid #333333;
    border-radius: 6px;
}
.publish-btn {
    background-color: #00ff88;
    color: #0a0a0a;
    border: none;
    border-radius: 8px;
    font-size: 15px;
    font-weight: bold;
    padding: 12px 32px;
}
.publish-btn:hover {
    background-color: #00e077;
}
.publish-btn:disabled {
    background-color: #1a3329;
    color: #336655;
}
.cancel-btn {
    background-color: transparent;
    color: #666666;
    border: 1px solid #333333;
    border-radius: 8px;
    font-size: 14px;
    padding: 12px 24px;
}
.cancel-btn:hover {
    border-color: #666666;
    color: #aaaaaa;
}
.log-view {
    background-color: #050505;
    color: #00ff88;
    font-family: monospace;
    font-size: 12px;
    border-radius: 8px;
    padding: 8px;
}
.log-view text {
    background-color: #050505;
    color: #00ff88;
    font-family: monospace;
}
.ep-badge {
    background-color: #1a1a1a;
    border-radius: 6px;
    color: #888888;
    font-size: 12px;
    padding: 4px 10px;
}
.title-bar {
    color: #ffffff;
    font-size: 18px;
    font-weight: bold;
}
.subtitle {
    color: #444444;
    font-size: 12px;
}
.success-label {
    color: #00ff88;
    font-size: 14px;
}
.error-label {
    color: #ff4444;
    font-size: 14px;
}
"""


def get_next_ep_num():
    try:
        with open(EPISODES_JSON) as f:
            eps = json.load(f)
        return max(e['num'] for e in eps) + 1 if eps else 1
    except Exception:
        return 1


def slugify(title: str) -> str:
    import re
    s = re.sub(r'^[Ee]p\.?\s*\d+\s*[:\-]?\s*', '', title)
    s = s.lower()
    s = re.sub(r'[^a-z0-9 ]', '', s)
    s = re.sub(r' +', '-', s.strip())
    return s[:60].rstrip('-')


class PodcastPublisher(Gtk.Window):
    def __init__(self):
        super().__init__(title="n0brains Podcast Publisher")
        self.set_default_size(560, 680)
        self.set_resizable(False)
        self.set_position(Gtk.WindowPosition.CENTER)

        # Apply CSS
        provider = Gtk.CssProvider()
        provider.load_from_data(CSS)
        Gtk.StyleContext.add_provider_for_screen(
            Gdk.Screen.get_default(),
            provider,
            Gtk.STYLE_PROVIDER_PRIORITY_APPLICATION
        )

        self.audio_file = None
        self.publishing = False

        self._build_ui()
        self.show_all()
        self._update_state()

    def _build_ui(self):
        outer = Gtk.Box(orientation=Gtk.Orientation.VERTICAL, spacing=0)
        outer.set_margin_top(24)
        outer.set_margin_bottom(24)
        outer.set_margin_start(28)
        outer.set_margin_end(28)
        self.add(outer)

        # Header
        hdr = Gtk.Box(orientation=Gtk.Orientation.HORIZONTAL, spacing=8)
        hdr.set_margin_bottom(20)
        title_lbl = Gtk.Label(label="n0brains")
        title_lbl.get_style_context().add_class("title-bar")
        title_lbl.set_halign(Gtk.Align.START)
        sub_lbl = Gtk.Label(label="Podcast Publisher")
        sub_lbl.get_style_context().add_class("subtitle")
        sub_lbl.set_valign(Gtk.Align.END)
        sub_lbl.set_margin_bottom(2)

        self.ep_badge = Gtk.Label(label=f"Ep {get_next_ep_num()}")
        self.ep_badge.get_style_context().add_class("ep-badge")
        self.ep_badge.set_halign(Gtk.Align.END)

        hdr.pack_start(title_lbl, False, False, 0)
        hdr.pack_start(sub_lbl, False, False, 0)
        hdr.pack_end(self.ep_badge, False, False, 0)
        outer.pack_start(hdr, False, False, 0)

        # Drop zone
        self.drop_zone = Gtk.EventBox()
        self.drop_zone.set_size_request(-1, 120)
        self.drop_zone.get_style_context().add_class("drop-zone")
        self.drop_zone.set_margin_bottom(20)

        drop_inner = Gtk.Box(orientation=Gtk.Orientation.VERTICAL, spacing=6)
        drop_inner.set_valign(Gtk.Align.CENTER)
        drop_inner.set_halign(Gtk.Align.CENTER)

        self.drop_icon = Gtk.Label(label="⬇")
        self.drop_icon.set_markup('<span size="xx-large">⬇</span>')

        self.drop_label = Gtk.Label(label="Drop audio file here")
        self.drop_label.get_style_context().add_class("drop-label")

        self.file_label = Gtk.Label(label="")
        self.file_label.get_style_context().add_class("file-label")
        self.file_label.set_ellipsize(Pango.EllipsizeMode.MIDDLE)
        self.file_label.set_max_width_chars(50)

        drop_inner.pack_start(self.drop_icon, False, False, 0)
        drop_inner.pack_start(self.drop_label, False, False, 0)
        drop_inner.pack_start(self.file_label, False, False, 0)
        self.drop_zone.add(drop_inner)

        # Enable drag-drop
        self.drop_zone.drag_dest_set(
            Gtk.DestDefaults.ALL,
            [],
            Gdk.DragAction.COPY
        )
        self.drop_zone.drag_dest_add_uri_targets()
        self.drop_zone.connect("drag-data-received", self._on_drag_data)
        self.drop_zone.connect("drag-motion", self._on_drag_motion)
        self.drop_zone.connect("drag-leave", self._on_drag_leave)

        # Also allow clicking to open file chooser
        self.drop_zone.connect("button-press-event", self._on_drop_zone_click)
        self.drop_zone.add_events(Gdk.EventMask.BUTTON_PRESS_MASK)

        outer.pack_start(self.drop_zone, False, False, 0)

        # Title field
        title_sec = Gtk.Label(label="TITLE")
        title_sec.get_style_context().add_class("section-label")
        title_sec.set_halign(Gtk.Align.START)
        title_sec.set_margin_bottom(6)
        outer.pack_start(title_sec, False, False, 0)

        self.title_entry = Gtk.Entry()
        self.title_entry.set_placeholder_text("Episode title…")
        self.title_entry.set_margin_bottom(16)
        self.title_entry.connect("changed", self._on_field_changed)
        outer.pack_start(self.title_entry, False, False, 0)

        # Description field
        desc_sec = Gtk.Label(label="DESCRIPTION")
        desc_sec.get_style_context().add_class("section-label")
        desc_sec.set_halign(Gtk.Align.START)
        desc_sec.set_margin_bottom(6)
        outer.pack_start(desc_sec, False, False, 0)

        desc_scroll = Gtk.ScrolledWindow()
        desc_scroll.set_size_request(-1, 90)
        desc_scroll.set_policy(Gtk.PolicyType.NEVER, Gtk.PolicyType.AUTOMATIC)
        desc_scroll.set_margin_bottom(20)

        self.desc_view = Gtk.TextView()
        self.desc_view.set_wrap_mode(Gtk.WrapMode.WORD)
        self.desc_view.get_buffer().set_text("")
        self.desc_view.get_buffer().connect("changed", self._on_field_changed)
        desc_scroll.add(self.desc_view)
        outer.pack_start(desc_scroll, False, False, 0)

        # Log output (hidden until publishing)
        self.log_scroll = Gtk.ScrolledWindow()
        self.log_scroll.set_size_request(-1, 120)
        self.log_scroll.set_policy(Gtk.PolicyType.NEVER, Gtk.PolicyType.AUTOMATIC)
        self.log_scroll.set_margin_bottom(16)
        self.log_scroll.set_no_show_all(True)

        self.log_view = Gtk.TextView()
        self.log_view.set_editable(False)
        self.log_view.set_wrap_mode(Gtk.WrapMode.WORD_CHAR)
        self.log_view.get_style_context().add_class("log-view")
        self.log_buffer = self.log_view.get_buffer()
        self.log_scroll.add(self.log_view)
        outer.pack_start(self.log_scroll, False, False, 0)

        # Status label
        self.status_label = Gtk.Label(label="")
        self.status_label.set_halign(Gtk.Align.START)
        self.status_label.set_margin_bottom(16)
        outer.pack_start(self.status_label, False, False, 0)

        # Buttons
        btn_box = Gtk.Box(orientation=Gtk.Orientation.HORIZONTAL, spacing=12)
        btn_box.set_halign(Gtk.Align.END)

        self.cancel_btn = Gtk.Button(label="Clear")
        self.cancel_btn.get_style_context().add_class("cancel-btn")
        self.cancel_btn.connect("clicked", self._on_clear)

        self.publish_btn = Gtk.Button(label="Publish Episode")
        self.publish_btn.get_style_context().add_class("publish-btn")
        self.publish_btn.connect("clicked", self._on_publish)

        btn_box.pack_start(self.cancel_btn, False, False, 0)
        btn_box.pack_start(self.publish_btn, False, False, 0)
        outer.pack_end(btn_box, False, False, 0)

    # ── Drag-drop handlers ───────────────────────────────────────────────────

    def _on_drag_motion(self, widget, ctx, x, y, time):
        widget.get_style_context().add_class("drag-over")
        Gdk.drag_status(ctx, Gdk.DragAction.COPY, time)
        return True

    def _on_drag_leave(self, widget, ctx, time):
        widget.get_style_context().remove_class("drag-over")

    def _on_drag_data(self, widget, ctx, x, y, data, info, time):
        widget.get_style_context().remove_class("drag-over")
        uris = data.get_uris()
        if not uris:
            return
        path = uris[0]
        # Strip file:// prefix
        if path.startswith("file://"):
            path = path[7:]
        path = GLib.uri_unescape_string(path, None)
        self._set_file(path)
        Gtk.drag_finish(ctx, True, False, time)

    def _on_drop_zone_click(self, widget, event):
        if self.publishing:
            return
        dialog = Gtk.FileChooserDialog(
            title="Select audio file",
            parent=self,
            action=Gtk.FileChooserAction.OPEN
        )
        dialog.add_buttons(
            Gtk.STOCK_CANCEL, Gtk.ResponseType.CANCEL,
            Gtk.STOCK_OPEN, Gtk.ResponseType.OK
        )
        filt = Gtk.FileFilter()
        filt.set_name("Audio files")
        for ext in AUDIO_EXTS:
            filt.add_pattern(f"*{ext}")
        dialog.add_filter(filt)

        if dialog.run() == Gtk.ResponseType.OK:
            self._set_file(dialog.get_filename())
        dialog.destroy()

    # ── State ────────────────────────────────────────────────────────────────

    def _set_file(self, path: str):
        path = path.strip()
        if not os.path.isfile(path):
            self._set_status(f"File not found: {path}", error=True)
            return
        ext = Path(path).suffix.lower()
        if ext not in AUDIO_EXTS:
            self._set_status(f"Unsupported format: {ext}", error=True)
            return
        self.audio_file = path
        fname = os.path.basename(path)
        self.file_label.set_text(fname)
        self.drop_label.set_text("Audio file ready")
        self.drop_zone.get_style_context().remove_class("drag-over")
        self.drop_zone.get_style_context().add_class("file-ready")
        self.drop_icon.set_markup('<span size="xx-large">🎙</span>')

        # Auto-fill title from filename if blank
        if not self.title_entry.get_text().strip():
            stem = Path(path).stem
            auto = stem.replace('_', ' ').replace('-', ' ').title()
            self.title_entry.set_text(auto)

        self._set_status("")
        self._update_state()

    def _on_field_changed(self, *_):
        self._update_state()

    def _update_state(self):
        title = self.title_entry.get_text().strip()
        can_publish = bool(self.audio_file and title and not self.publishing)
        self.publish_btn.set_sensitive(can_publish)

    def _on_clear(self, *_):
        self.audio_file = None
        self.file_label.set_text("")
        self.drop_label.set_text("Drop audio file here")
        self.drop_zone.get_style_context().remove_class("file-ready")
        self.drop_zone.get_style_context().remove_class("drag-over")
        self.drop_icon.set_markup('<span size="xx-large">⬇</span>')
        self.title_entry.set_text("")
        self.desc_view.get_buffer().set_text("")
        self.log_scroll.hide()
        self._set_status("")
        self._update_state()

    def _set_status(self, msg, error=False, success=False):
        self.status_label.set_text(msg)
        ctx = self.status_label.get_style_context()
        ctx.remove_class("success-label")
        ctx.remove_class("error-label")
        if error:
            ctx.add_class("error-label")
        elif success:
            ctx.add_class("success-label")

    # ── Publish ──────────────────────────────────────────────────────────────

    def _on_publish(self, *_):
        if self.publishing or not self.audio_file:
            return
        title = self.title_entry.get_text().strip()
        buf = self.desc_view.get_buffer()
        description = buf.get_text(buf.get_start_iter(), buf.get_end_iter(), False).strip()

        self.publishing = True
        self.publish_btn.set_sensitive(False)
        self.cancel_btn.set_sensitive(False)
        self.log_buffer.set_text("")
        self.log_scroll.show()
        self._set_status("Publishing…")
        self._append_log(f"→ Starting publish for: {os.path.basename(self.audio_file)}\n")

        t = threading.Thread(
            target=self._publish_worker,
            args=(self.audio_file, title, description),
            daemon=True
        )
        t.start()

    def _append_log(self, text):
        def _do():
            end = self.log_buffer.get_end_iter()
            self.log_buffer.insert(end, text)
            # Scroll to bottom
            adj = self.log_scroll.get_vadjustment()
            adj.set_value(adj.get_upper())
        GLib.idle_add(_do)

    def _publish_worker(self, audio_file, title, description):
        try:
            self._run_publish(audio_file, title, description)
        except Exception as e:
            GLib.idle_add(self._on_publish_error, str(e))

    def _run_publish(self, audio_file: str, title: str, description: str):
        import re, time

        # ── 1. Load episodes.json ────────────────────────────────────────────
        with open(EPISODES_JSON) as f:
            episodes = json.load(f)

        current_max = max(e['num'] for e in episodes) if episodes else 0
        next_ep = current_max + 1
        ep_num_pad = f"{next_ep:02d}"
        self._append_log(f"→ Episode number: {next_ep}\n")

        # ── 2. Generate slug + filenames ─────────────────────────────────────
        slug = slugify(title)
        mp3_filename = f"ep-{ep_num_pad}-{slug}.mp3"
        mp3_path = PODCAST_DIR / mp3_filename
        mp3_url = f"https://n0brains.com/podcast/{mp3_filename}"

        display_title = re.sub(r'^[Ee]p\.?\s*\d+\s*[:\-]?\s*', '', title).strip()
        display_title = f"Ep {next_ep}: {display_title}"
        self._append_log(f"→ Title: {display_title}\n")
        self._append_log(f"→ File: {mp3_filename}\n")

        # ── 3. Convert to MP3 ─────────────────────────────────────────────────
        ext = Path(audio_file).suffix.lower()
        if ext == '.mp3':
            self._append_log("→ Already MP3, copying…\n")
            shutil.copy2(audio_file, mp3_path)
        else:
            self._append_log(f"→ Converting {ext} → MP3…\n")
            result = subprocess.run(
                ['ffmpeg', '-i', audio_file, '-ab', '192k', '-y', str(mp3_path)],
                capture_output=True, text=True
            )
            if result.returncode != 0:
                raise RuntimeError(f"ffmpeg failed:\n{result.stderr[-500:]}")
        self._append_log("✓ MP3 ready\n")

        # ── 4. Duration + size ───────────────────────────────────────────────
        dur_result = subprocess.run(
            ['ffprobe', '-v', 'quiet', '-show_entries', 'format=duration',
             '-of', 'csv=p=0', str(mp3_path)],
            capture_output=True, text=True
        )
        duration_sec = int(float(dur_result.stdout.strip().split('.')[0])) if dur_result.stdout.strip() else 0
        size_bytes = mp3_path.stat().st_size

        def fmt_dur(d):
            h, rem = divmod(d, 3600)
            m, s = divmod(rem, 60)
            return f"{h}:{m:02d}:{s:02d}" if h else f"{m}:{s:02d}"

        duration_rss = fmt_dur(duration_sec)
        self._append_log(f"→ Duration: {duration_rss}, Size: {size_bytes:,} bytes\n")

        # ── 5. Dates ─────────────────────────────────────────────────────────
        now = datetime.now(timezone.utc)
        pub_date_iso = now.strftime('%Y-%m-%d')
        pub_date_rss = now.strftime('%a, %d %b %Y 12:00:00 GMT')

        # ── 6. Update episodes.json ──────────────────────────────────────────
        self._append_log("→ Updating episodes.json…\n")
        new_ep = {
            "num": next_ep,
            "title": display_title,
            "summary": description,
            "mp3_url": mp3_url,
            "duration_sec": duration_sec,
            "size_bytes": size_bytes,
            "pubDate": pub_date_iso,
            "articles": []
        }
        episodes.insert(0, new_ep)
        with open(EPISODES_JSON, 'w') as f:
            json.dump(episodes, f, indent=2)
            f.write('\n')
        self._append_log("✓ episodes.json updated\n")

        # ── 7. Update podcast.xml ────────────────────────────────────────────
        self._append_log("→ Updating podcast.xml…\n")

        def xml_escape(s):
            return (s.replace('&', '&amp;')
                     .replace('<', '&lt;')
                     .replace('>', '&gt;')
                     .replace('"', '&quot;'))

        title_xml = xml_escape(display_title)
        desc_xml = xml_escape(description)

        new_item = f"""    <item>
      <title>{title_xml}</title>
      <description>{desc_xml}</description>
      <itunes:summary>{desc_xml}</itunes:summary>
      <pubDate>{pub_date_rss}</pubDate>
      <guid isPermaLink="false">n0brains-ep-{ep_num_pad}</guid>
      <enclosure url="{mp3_url}" length="{size_bytes}" type="audio/mpeg"/>
      <itunes:duration>{duration_rss}</itunes:duration>
      <itunes:episode>{next_ep}</itunes:episode>
      <itunes:explicit>false</itunes:explicit>
      <itunes:author>n0brains</itunes:author>
    </item>
"""
        with open(PODCAST_XML) as f:
            xml = f.read()

        first_item = xml.find('<item>')
        if first_item == -1:
            channel_end = xml.find('</channel>')
            xml = xml[:channel_end] + new_item + '\n  ' + xml[channel_end:]
        else:
            xml = xml[:first_item] + new_item + '\n    ' + xml[first_item:]

        with open(PODCAST_XML, 'w') as f:
            f.write(xml)
        self._append_log("✓ podcast.xml updated\n")

        # ── 8. npm build ──────────────────────────────────────────────────────
        self._append_log("→ Building site…\n")
        build = subprocess.run(
            ['npm', 'run', 'build'],
            capture_output=True, text=True,
            cwd=str(SITE_DIR)
        )
        if build.returncode != 0:
            raise RuntimeError(f"npm build failed:\n{build.stdout[-300:]}\n{build.stderr[-300:]}")
        self._append_log("✓ Build complete\n")

        # ── 9. Git commit + push ──────────────────────────────────────────────
        self._append_log("→ Committing…\n")
        subprocess.run(['git', 'add', '-A'], cwd=str(SITE_DIR), check=True, capture_output=True)
        subprocess.run(
            ['git', 'commit', '-m', f'publish: {display_title}'],
            cwd=str(SITE_DIR), check=True, capture_output=True
        )
        self._append_log("→ Pushing to GitHub…\n")
        push = subprocess.run(
            ['git', 'push', 'origin', 'main'],
            cwd=str(SITE_DIR), capture_output=True, text=True
        )
        if push.returncode != 0:
            raise RuntimeError(f"git push failed:\n{push.stderr}")
        self._append_log("✓ Pushed\n")

        GLib.idle_add(self._on_publish_done, next_ep, display_title, mp3_url, duration_rss)

    def _on_publish_done(self, ep_num, title, url, duration):
        self.publishing = False
        self.cancel_btn.set_sensitive(True)
        self._append_log(f"\n✓ Published! Ep {ep_num}: {title}\n")
        self._append_log(f"  {url}\n")
        self._set_status(f"✓ Ep {ep_num} published — {duration}", success=True)
        # Refresh ep badge
        self.ep_badge.set_text(f"Ep {get_next_ep_num()}")
        # Reset for next episode
        self.audio_file = None
        self.file_label.set_text("")
        self.drop_label.set_text("Drop next episode here")
        self.drop_zone.get_style_context().remove_class("file-ready")
        self.drop_icon.set_markup('<span size="xx-large">✓</span>')
        self.title_entry.set_text("")
        self.desc_view.get_buffer().set_text("")
        self._update_state()

    def _on_publish_error(self, msg):
        self.publishing = False
        self.cancel_btn.set_sensitive(True)
        self._update_state()
        self._append_log(f"\n✗ Error: {msg}\n")
        self._set_status(f"✗ Failed: {msg[:80]}", error=True)


def main():
    app = PodcastPublisher()
    app.connect("destroy", Gtk.main_quit)
    # If file passed as argument, pre-load it
    if len(sys.argv) > 1 and os.path.isfile(sys.argv[1]):
        GLib.timeout_add(200, lambda: app._set_file(sys.argv[1]) or False)
    Gtk.main()


if __name__ == '__main__':
    main()
