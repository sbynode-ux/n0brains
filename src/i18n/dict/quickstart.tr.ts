/* Turkish — /docs/quickstart. Machine-drafted onboarding voice; friendly + clear.
   Code, config, endpoints, placeholders, client brand names, tool names and
   tickers stay literal. Brand-only labels fall back to English by design. */
export const tr: Record<string, string> = {
  // ── head / hero ──
  "Quickstart — connect your agent to n0brains": "Hızlı başlangıç — ajanını n0brains'e bağla",
  "Five minutes to a market-aware AI agent. Step-by-step: get a free key, connect claude.ai (custom connector), Claude Code, Claude Desktop, OpenClaw, Hermes, Cursor, or any MCP client — then hand your agent a job from the prompt library. No SDK, no install.":
    "Piyasa farkındalıklı bir yapay zeka ajanına beş dakika. Adım adım: ücretsiz bir anahtar al, claude.ai (özel bağlayıcı), Claude Code, Claude Desktop, OpenClaw, Hermes, Cursor veya herhangi bir MCP istemcisini bağla — sonra ajanına prompt kütüphanesinden bir görev ver. SDK yok, kurulum yok.",
  "Five minutes to a": "Beş dakikada bir",
  "market-aware agent": "piyasa farkındalıklı ajan",
  "n0brains is an intelligence layer your agent calls like a native tool — live signals, graded pre-trade checks, levels, macro regime. No SDK, nothing to install. Three steps: get a key, connect the agent you already use, ask the first question.":
    "n0brains, ajanının yerel bir araç gibi çağırdığı bir zeka katmanıdır — canlı sinyaller, notlu işlem öncesi kontroller, seviyeler, makro rejim. SDK yok, kurulacak bir şey yok. Üç adım: bir anahtar al, zaten kullandığın ajanı bağla, ilk soruyu sor.",
  "get key": "anahtar al",
  "connect agent": "ajanı bağla",
  "ask": "sor",

  // ── side nav / chip nav ──
  "01 · get your key": "01 · anahtarını al",
  "02 · connect your agent": "02 · ajanını bağla",
  "03 · first question": "03 · ilk soru",
  "other mcp clients": "diğer mcp istemcileri",
  "plain rest": "sade rest",
  "prompt library": "prompt kütüphanesi",
  "free vs pro": "ücretsiz vs pro",
  "troubleshooting": "sorun giderme",
  "going further": "daha ileri",
  "api reference": "api referansı",
  "mcp server": "mcp sunucusu",
  "setup": "kurulum",
  "connect": "bağlan",
  "use it": "kullan",
  "more docs": "daha fazla belge",
  "on this page": "bu sayfada",

  // ── step 01 ──
  "Get your key": "Anahtarını al",
  "Create a free account": "Ücretsiz bir hesap oluştur",
  "— no card, ~30 seconds.": "— kart yok, ~30 saniye.",
  "Your API key is shown": "API anahtarın",
  "once": "yalnızca bir kez",
  ", right after signup — copy it now. Lost it?": " gösterilir, kayıttan hemen sonra — hemen kopyala. Kaybettin mi?",
  "Regenerate from the dashboard": "Panelden yeniden oluştur",
  "; the old key stops working immediately.": "; eski anahtar hemen çalışmayı durdurur.",
  "Paste your key here and every snippet on this page personalizes itself:":
    "Anahtarını buraya yapıştır, bu sayfadaki her parça kendini kişiselleştirsin:",
  "apply": "uygula",
  "Stays in this tab — never sent anywhere, never saved.":
    "Bu sekmede kalır — hiçbir yere gönderilmez, hiçbir zaman kaydedilmez.",
  "✓ key applied to {n} snippets — stays in this tab, never sent or saved.":
    "✓ anahtar {n} parçaya uygulandı — bu sekmede kalır, gönderilmez ve kaydedilmez.",
  "✓ key applied": "✓ anahtar uygulandı",
  "copied": "kopyalandı",

  // ── step 02 chooser ──
  "Connect your agent": "Ajanını bağla",
  "Pick the agent you already use. Every path below points at the same MCP server —":
    "Zaten kullandığın ajanı seç. Aşağıdaki her yol aynı MCP sunucusuna işaret eder —",
  "— and a free key already unlocks 14 tools, including the flagship":
    "— ve ücretsiz bir anahtar zaten 14 aracın kilidini açar, amiral gemisi olan",
  "start here": "buradan başla",
  "web + mobile app — no install at all": "web + mobil uygulama — hiç kurulum yok",
  "one command in your terminal": "terminalinde tek komut",
  "same connector flow as claude.ai": "claude.ai ile aynı bağlayıcı akışı",
  "self-hosted agent gateway": "kendi sunucunda barındırılan ajan ağ geçidi",
  "Nous Research personal agent": "Nous Research kişisel ajanı",
  "and any mcpServers-style client": "ve mcpServers tarzı her istemci",
  "generic config block": "genel yapılandırma bloğu",
  "works with literally any agent": "kelimenin tam anlamıyla her ajanla çalışır",
  "Cline · Continue · other MCP": "Cline · Continue · diğer MCP",
  "No MCP? Plain REST": "MCP yok mu? Sade REST",

  // ── claude.ai card ──
  "custom connector": "özel bağlayıcı",
  "easiest · no install": "en kolayı · kurulum yok",
  "Works on the claude.ai web app (and the mobile apps once connected). The free Claude plan allows one custom connector — n0brains fits in it.":
    "claude.ai web uygulamasında çalışır (ve bir kez bağlandığında mobil uygulamalarda da). Ücretsiz Claude planı bir özel bağlayıcıya izin verir — n0brains oraya sığar.",
  "Open": "Aç",
  "Settings → Connectors": "Ayarlar → Bağlayıcılar",
  "(on some accounts it's labeled": "(bazı hesaplarda şöyle etiketlenir:",
  "Customize → Connectors": "Özelleştir → Bağlayıcılar",
  "Click": "Şuna tıkla:",
  "Add custom connector": "Özel bağlayıcı ekle",
  "Name it": "Şu adı ver:",
  "and paste this as the remote MCP server URL:": "ve bunu uzak MCP sunucusu URL'si olarak yapıştır:",
  "copy URL": "URL'yi kopyala",
  "copy": "kopyala",
  "Add": "Ekle",
  ". In any chat, open the": ". Herhangi bir sohbette",
  "menu →": "menüsünü aç →",
  "Connectors": "Bağlayıcılar",
  "and toggle n0brains on.": "ve n0brains'i aç.",
  "Ask:": "Sor:",
  "\"What does n0brains say about BTC right now?\"": "\"n0brains şu anda BTC hakkında ne diyor?\"",
  "— Claude will call the tools itself.": "— Claude araçları kendisi çağıracak.",
  "Why the key is in the URL:": "Anahtar neden URL'de:",
  "claude.ai custom connectors can't yet attach auth headers on self-serve accounts (Anthropic's request-header option is still in beta), so the n0brains server also accepts":
    "claude.ai özel bağlayıcıları self-servis hesaplarda henüz kimlik doğrulama başlıkları ekleyemiyor (Anthropic'in istek başlığı seçeneği hâlâ beta), bu yüzden n0brains sunucusu ayrıca şunu da kabul eder:",
  "on the URL. Treat that URL like a password — anyone holding it can spend your quota. If it ever leaks,":
    "URL'de. O URL'yi bir parola gibi sakla — eline geçiren herkes kotanı harcayabilir. Bir gün sızarsa,",
  "regenerate the key": "anahtarı yeniden oluştur",
  ", value = your bare key, and drop the query string from the URL.":
    ", değer = anahtarının kendisi, ve URL'den sorgu dizesini çıkar.",

  // ── Claude Code card ──
  "One command in your terminal —": "Terminalinde tek komut —",
  "makes it available in every project:": "onu her projede kullanılabilir yapar:",
  "copy command": "komutu kopyala",
  "Restart Claude Code (or open a new session) and the n0brains tools appear automatically. Prefer a skill instead of tools?":
    "Claude Code'u yeniden başlat (veya yeni bir oturum aç), n0brains araçları otomatik olarak görünür. Araçlar yerine bir skill mi tercih edersin?",
  "and drop it into": "ve şuraya bırak:",

  // ── Claude Desktop card ──
  "Same custom-connector flow as claude.ai:": "claude.ai ile aynı özel bağlayıcı akışı:",
  "Settings → Connectors → Add custom connector": "Ayarlar → Bağlayıcılar → Özel bağlayıcı ekle",
  ", paste the same URL-with-key from the": ", anahtarlı aynı URL'yi şuradan yapıştır:",
  "claude.ai section": "claude.ai bölümü",
  ". Connectors added on either surface sync to the other.":
    ". Her iki yüzeyde eklenen bağlayıcılar diğerine senkronize olur.",
  "Managing servers by config file instead? The classic":
    "Sunucuları bunun yerine yapılandırma dosyasıyla mı yönetiyorsun? Klasik",
  "route and per-OS file paths are on the": "yolu ve işletim sistemine göre dosya yolları şurada:",
  "MCP page": "MCP sayfası",

  // ── OpenClaw card ──
  "MCP is built in (recent releases). One CLI call registers the server:":
    "MCP yerleşik olarak gelir (son sürümlerde). Tek bir CLI çağrısı sunucuyu kaydeder:",
  "Or add it by hand to": "Ya da elle şuraya ekle:",
  "under": "şunun altına:",
  "(JSON5 — trailing commas fine;": "(JSON5 — sondaki virgüller sorun değil;",
  "substitution works in headers):": "başlıklarda değişken ikamesi çalışır):",
  "copy config": "yapılandırmayı kopyala",
  "Verify with": "Şununla doğrula:",
  ", then ask your agent for a BTC read. Getting 401s with a correct key? Update OpenClaw — one older build silently dropped custom headers on streamable-http (see":
    ", sonra ajanından bir BTC okuması iste. Doğru anahtarla 401 mi alıyorsun? OpenClaw'ı güncelle — eski bir sürüm streamable-http'de özel başlıkları sessizce düşürüyordu (bkz.",
  "). Prefer skills over MCP? The same": "). MCP yerine skill mi tercih edersin? Aynı",
  "skill file drops straight into your OpenClaw skills directory.":
    "skill dosyası doğrudan OpenClaw skills dizinine bırakılır.",

  // ── Hermes card ──
  "The self-hosted": "Kendi sunucunda barındırılan",
  "Hermes agent": "Hermes ajanı",
  "reads MCP servers from": "MCP sunucularını şuradan okur:",
  "Tidier: put the key in": "Daha derli toplu: anahtarı şuraya koy:",
  "as": "şu şekilde:",
  "and write the header value as": "ve başlık değerini şöyle yaz:",
  "— Hermes resolves": "— Hermes şunu çözer:",
  "from env at connect time. A running session picks the edit up automatically (or run":
    "bağlanma sırasında ortamdan. Çalışan bir oturum değişikliği otomatik olarak alır (ya da şunu çalıştır:",
  "); verify with": "); şununla doğrula:",
  ". Tools register as": ". Araçlar şu şekilde kaydolur:",

  // ── Cursor card ──
  "Settings → MCP → Add server": "Ayarlar → MCP → Sunucu ekle",
  ", or add to": ", ya da şuraya ekle:",

  // ── other MCP clients card ──
  "Cline · Continue · any MCP client": "Cline · Continue · herhangi bir MCP istemcisi",
  "Anything that speaks the standard": "Standart",
  "config shape takes the exact block from the": "yapılandırma biçimini konuşan her şey, tam bloğu şuradan alır:",
  "Cursor section": "Cursor bölümü",
  "— remote streamable-HTTP URL plus an": "— uzak streamable-HTTP URL'si artı bir",
  "(or": "(veya",
  ") header. The server also answers": ") başlığı. Sunucu ayrıca şunlara da yanıt verir:",
  "and": "ve",
  "without auth, so client \"test connection\" buttons work before you've wired the key.":
    "kimlik doğrulaması olmadan, böylece istemcinin \"bağlantıyı test et\" düğmeleri anahtarı bağlamadan önce çalışır.",

  // ── REST card ──
  "No MCP? Plain REST — any agent at all": "MCP yok mu? Sade REST — hangi ajan olursa olsun",
  "Every tool has a REST twin. Paste this into any agent's instructions — that's the whole integration:":
    "Her aracın bir REST ikizi var. Bunu herhangi bir ajanın talimatlarına yapıştır — entegrasyonun tamamı bu:",
  "copy prompt": "prompt'u kopyala",
  "Shell pipelines and bots: the": "Shell pipeline'ları ve botlar:",
  "prints JSON to stdout for": "aracı stdout'a JSON yazar — şunun için:",
  ". No account at all?": ". Hiç hesabın yok mu?",
  "pays per request in USDC — no signup.": "her istek için USDC ile öder — kayıt yok.",

  // ── step 03 ──
  "Ask the first question": "İlk soruyu sor",
  "Say this to your connected agent:": "Bağlı ajanına şunu söyle:",
  "Your agent calls": "Ajanın şunu çağırır:",
  "and gets back a graded conditions read. Here's a real response (trimmed) from a free key:":
    "ve notlu bir koşul okuması alır. İşte ücretsiz bir anahtardan gerçek bir yanıt (kırpılmış):",
  "real response · 2026-07-17": "gerçek yanıt · 2026-07-17",
  "How to read it: the": "Nasıl okunur:",
  "describes conditions around the trade, never a directive.":
    "işlem çevresindeki koşulları tanımlar, asla bir talimat değildir.",
  "are what's working against it,": "ona karşı çalışan şeylerdir,",
  "are what to watch for the read to die,": "okumanın geçerliliğini yitirmesi için izlenecek şeylerdir,",
  "is what it couldn't assess from your inputs (give it a stop and a target and it grades those too). Every check is logged before its outcome and resolved at its horizon; grade performance publishes on":
    "girdilerinden değerlendiremediği şeydir (bir stop ve bir hedef ver, onları da notlandırır). Her kontrol, sonucundan önce kaydedilir ve ufkunda çözümlenir; not performansı şurada yayımlanır:",
  "once it clears the same verification standard as every number we publish. Free keys get 3 checks a day.":
    "yayımladığımız her rakamla aynı doğrulama standardını geçtikten sonra. Ücretsiz anahtarlar günde 3 kontrol alır.",

  // ── prompt library ──
  "Give your agent a job": "Ajanına bir görev ver",
  "Connected? Now make it useful. Each prompt below is a complete standing instruction — copy one into your agent's system prompt / custom instructions. They're written for REST so they work on every agent (MCP-connected agents will simply use the matching tools).":
    "Bağlandın mı? Şimdi onu işe yarar hale getir. Aşağıdaki her prompt eksiksiz, kalıcı bir talimattır — birini ajanının system prompt'una / özel talimatlarına kopyala. REST için yazıldılar, bu yüzden her ajanda çalışırlar (MCP ile bağlı ajanlar yalnızca ilgili araçları kullanır).",
  "Ask n0brains first — pre-trade check": "Önce n0brains'e sor — işlem öncesi kontrol",
  "Before any trade, POST /check and get a graded A–F read of the conditions — crypto and tokenized stocks. The flagship.":
    "Herhangi bir işlemden önce POST /check yap ve koşulların A–F notlu bir okumasını al — kripto ve tokenleştirilmiş hisseler. Amiral gemisi.",
  "Market-aware research assistant": "Piyasa farkındalıklı araştırma asistanı",
  "Makes an agent check signals, levels, and regime before answering any market question.":
    "Bir ajanın, herhangi bir piyasa sorusunu yanıtlamadan önce sinyalleri, seviyeleri ve rejimi kontrol etmesini sağlar.",
  "Daily macro brief": "Günlük makro özet",
  "A morning routine: regime, calendar risk, rotation, and any supported asset bias.":
    "Bir sabah rutini: rejim, takvim riski, rotasyon ve desteklenen her varlık eğilimi.",
  "Token safety screen": "Token güvenlik taraması",
  "Screen any token for honeypot / rug risk before touching it.":
    "Herhangi bir tokene dokunmadan önce honeypot / rug riski için tara.",
  "Liquidation-magnet hunter": "Likidasyon mıknatısı avcısı",
  "Find where leveraged positions get flushed — which side is heavier and pulls price.":
    "Kaldıraçlı pozisyonların nerede süpürüldüğünü bul — hangi taraf daha ağır ve fiyatı çekiyor.",
  "Rotation / rebalance scout": "Rotasyon / yeniden dengeleme gözcüsü",
  "Is capital flowing into alts or into BTC? Surface the rotation candidates.":
    "Sermaye altcoinlere mi yoksa BTC'ye mi akıyor? Rotasyon adaylarını öne çıkar.",
  "Sentiment-divergence finder": "Duygu-ıraksama bulucu",
  "Spot crowd-vs-flow mismatches: sentiment one way, on-chain signals the other.":
    "Kalabalık ile akış arasındaki uyumsuzlukları yakala: duygu bir yönde, on-chain sinyaller diğer yönde.",

  // ── free vs pro ──
  "Free vs Pro": "Ücretsiz vs Pro",
  "Free — $0": "Ücretsiz — 0 $",
  "Pro — $39.99/mo": "Pro — 39,99 $/ay",
  "MCP tools": "MCP araçları",
  "all 40": "40'ın tümü",
  "3 / day": "3 / gün",
  "unlimited": "sınırsız",
  "Signal feed": "Sinyal akışı",
  "15-min delay": "15 dk gecikme",
  "real-time": "gerçek zamanlı",
  "Rate limit": "İstek limiti",
  "Trade journal": "İşlem günlüğü",
  "— entries snapshotted, outcomes resolved from real candles":
    "— girişler anlık kaydedilir, sonuçlar gerçek mumlarla çözümlenir",
  "Streams": "Akışlar",
  "REST polling": "REST yoklaması",
  "A Pro-only tool called with a free key returns error":
    "Ücretsiz bir anahtarla çağrılan yalnızca-Pro bir araç şu hatayı döndürür:",
  "— and its": "— ve",
  "field lists exactly what your key can do, so agents self-discover their tier. Between tiers?":
    "alanı, anahtarının tam olarak ne yapabileceğini listeler; böylece ajanlar planlarını kendileri keşfeder. Planlar arasında mısın?",
  "pays per call in USDC, no subscription.": "her çağrı için USDC ile öder, abonelik yok.",

  // ── troubleshooting ──
  "Troubleshooting": "Sorun giderme",
  "Symptom": "Belirti",
  "Fix": "Çözüm",
  "The key isn't reaching us. Send": "Anahtar bize ulaşmıyor. Şunu gönder:",
  "or": "veya",
  "as a header — or, on claude.ai, keep": "başlık olarak — ya da claude.ai'de şunu tut:",
  "in the connector URL. Check for a truncated paste.":
    "bağlayıcı URL'sinde. Yapıştırmanın kısaltılıp kısaltılmadığını kontrol et.",
  "Pro-only tool": "yalnızca-Pro araç",
  "Free key hit a Pro tool. The error's": "Ücretsiz anahtar bir Pro araca denk geldi. Hatanın",
  "list shows everything your key can call.": "listesi anahtarının çağırabileceği her şeyi gösterir.",
  "quota": "kota",
  "Free": "Ücretsiz",
  "is 3/day — resets 00:00 UTC.": "günde 3'tür — 00:00 UTC'de sıfırlanır.",
  "Rate limit (60/min free, 600/min Pro). Honor": "İstek limiti (60/dk ücretsiz, 600/dk Pro). Şuna uy:",
  "Redirects / empty responses": "Yönlendirmeler / boş yanıtlar",
  "Use the trailing slash:": "Sondaki eğik çizgiyi kullan:",
  "The bare": "Çıplak",
  "answers with a 307 some clients fumble.": "bazı istemcilerin beceremediği bir 307 ile yanıt verir.",
  "OpenClaw 401 with a correct key": "Doğru anahtarla OpenClaw 401",
  "Update OpenClaw — one 2026.4.x build dropped custom headers on streamable-http connections.":
    "OpenClaw'ı güncelle — bir 2026.4.x sürümü streamable-http bağlantılarında özel başlıkları düşürüyordu.",
  "claude.ai: connected but tools never fire": "claude.ai: bağlı ama araçlar hiç çalışmıyor",
  "Toggle the connector on in the chat's": "Bağlayıcıyı sohbetin",
  "→ Connectors menu. Free Claude plans allow one custom connector.":
    "→ Bağlayıcılar menüsünden aç. Ücretsiz Claude planları bir özel bağlayıcıya izin verir.",

  // ── going further ──
  "Going further": "Daha ileri",
  "Every tool + error code:": "Her araç + hata kodu:",
  "MCP reference": "MCP referansı",
  "every REST endpoint:": "her REST endpoint'i:",
  "API docs": "API belgeleri",
  "Agent skill file:": "Ajan skill dosyası:",
  "— tools, auth, and behaviour rules in one Markdown drop-in.":
    "— araçlar, kimlik doğrulama ve davranış kuralları tek bir Markdown dosyasında hazır.",
  "Shell pipelines:": "Shell pipeline'ları:",
  "the": "",
  "Walletless pay-per-call:": "Cüzdansız çağrı başına ödeme:",
  "Is any of this real?": "Bunların hiçbiri gerçek mi?",
  "The live, public track record:": "Canlı, herkese açık geçmiş performans:",
  "Everything n0brains returns is analytical data on public markets — not financial advice. Keep a human in the loop; an agent should never be told to place trades unattended. See":
    "n0brains'in döndürdüğü her şey, halka açık piyasalara dair analitik veridir — finansal tavsiye değildir. Döngüde bir insan tut; bir ajana asla gözetimsiz işlem yapması söylenmemelidir. Bkz.",
  "terms": "şartlar",
};
