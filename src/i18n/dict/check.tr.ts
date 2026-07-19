export const tr: Record<string, string> = {
  // ── auth / signed state (JS) ──
  "signed out — please log in again": "oturum kapatıldı — lütfen tekrar giriş yap",
  "anonymous — 1 free check today": "anonim — bugün 1 ücretsiz kontrol",
  "1 free (no account)": "1 ücretsiz (hesap yok)",
  "signed in — session": "giriş yapıldı — oturum",
  "using API key": "API anahtarı kullanılıyor",
  "Session expired — please log in again.": "Oturum süresi doldu — lütfen tekrar giriş yap.",

  // ── chart-parse states (JS) ──
  "reading chart…": "grafik okunuyor…",
  "couldn't read a ticker from that image — type it instead": "bu görselden ticker okunamadı — bunun yerine elle yaz",
  "Reading this as": "Bunu şöyle okuyoruz:",
  " (NOT covered — check the spelling)": " (kapsam DIŞI — yazımı kontrol et)",
  " — confirm?": " — onaylıyor musun?",
  "📈 drop a different screenshot to re-read": "📈 yeniden okumak için başka bir ekran görüntüsü bırak",
  "chart read failed: ": "grafik okunamadı: ",
  " — type the ticker instead": " — bunun yerine ticker'ı elle yaz",
  "✓ applied — ": "✓ uygulandı — ",
  " filled in below": " aşağıya dolduruldu",

  // ── shortcuts / stages / submit (JS) ──
  "pick an asset first (need a price for % stops)": "önce bir varlık seç (% stoplar için fiyat gerekir)",
  "reading positioning…": "pozisyonlanma okunuyor…",
  "scanning scheduled events…": "planlı olaylar taranıyor…",
  "measuring volatility…": "volatilite ölçülüyor…",
  "checking proven edges…": "kanıtlanmış avantajlar kontrol ediliyor…",
  "grading…": "notlandırılıyor…",
  "RUN CHECK": "KONTROL ET",
  "Please complete the verification widget first.": "Önce doğrulama widget'ını tamamla.",
  "First look at ": "İlk kez bakılıyor: ",
  " — warming market data, auto-retrying in ~": " — piyasa verisi ısıtılıyor, ~",
  " — warming market data. Run the check again in ~": " — piyasa verisi ısıtılıyor. ~",
  "s…": "sn içinde otomatik yeniden deneniyor…",
  "s.": "sn içinde kontrolü tekrar çalıştır.",
  "0 free left — accounts get 3/day": "0 ücretsiz kaldı — hesaplar 3/gün alır",

  // ── verdict panel / score (JS) ──
  "LONG": "LONG",
  "SHORT": "SHORT",
  "horizon": "vade",
  "regime:": "rejim:",
  "score": "skor",
  "realized daily vol": "gerçekleşen günlük vol",
  "engine": "motor",
  "unlimited (pro)": "sınırsız (pro)",
  "free checks left": "ücretsiz kontrol kaldı",

  // ── status + trust strip (JS) ──
  "engine online · ": "motor çevrimiçi · ",
  " grades resolved on the public record": " not kamuya açık kayıtta çözüldü",
  " grades already resolved on the ": " not zaten ",
  "public record": "kamuya açık kayıt",
  " — we grade our own grades.": "'te çözüldü — kendi notlarımızı da notlandırıyoruz.",
  "every verdict is logged and resolved against real prices; grade performance publishes on /proof once it clears our verification standard.": "her karar gerçek fiyatlara göre kaydedilir ve çözülür; not performansı, doğrulama standardımızı geçtiğinde /proof üzerinde yayınlanır.",

  // ── copy result (JS) ──
  "n0brains graded my": "n0brains'in notu —",
  "— conditions checked before entry:": "— girişten önce koşullar kontrol edildi:",
  "✓ copied": "✓ kopyalandı",
  "copy result": "sonucu kopyala",

  // ── history (JS) ──
  "your record:": "kendi sicilin:",
  "profitable · avg": "kârlı · ort",
  "per check": "kontrol başına",
  "pending": "beklemede",
  "n/a": "yok",
  " · stopped": " · stop oldu",
  "re-check now": "şimdi tekrar kontrol et",

  // ── page meta ──
  "check": "kontrol",
  "Ask n0brains First — graded pre-trade conditions check. Submit your trade idea (asset, side, leverage, stop) and get a grade A–F with the reasons: crowding, event risk, liquidation distance vs volatility, and evidence conflicts. Every verdict is logged and resolved.": "Önce n0brains'e sor — işlem öncesi notlu koşul kontrolü. İşlem fikrini gönder (varlık, yön, kaldıraç, stop) ve nedenleriyle A–F notu al: kalabalıklaşma, olay riski, volatiliteye karşı likidasyon mesafesi ve kanıt çelişkileri. Her karar kaydedilir ve çözülür.",

  // ── hero ──
  "pre-trade check · ask n0brains first": "işlem öncesi kontrol · önce n0brains'e sor",
  "ASK SOMEONE WHO KNOWS FIRST.": "ÖNCE BİLENE SOR.",
  "ASK n0brains.": "n0brains'E SOR.",
  "About to take a trade? Tell us what you're planning. We check the market around it — who's crowded on your side, what news is coming, whether your leverage survives a normal day — and give it a grade from A to F. Every verdict is logged before its outcome and resolved at the selected horizon — grade performance publishes on": "İşlem yapmak üzere misin? Ne planladığını bize anlat. Çevresindeki piyasayı kontrol ederiz — senin tarafında kim kalabalıklaşmış, hangi haberler geliyor, kaldıracın normal bir günü atlatır mı — ve A'dan F'ye bir not veririz. Her karar sonucundan önce kaydedilir ve seçilen vadede çözülür — not performansı",
  "once it meets the same verification standard as everything else we publish.": "üzerinde, yayımladığımız diğer her şeyle aynı doğrulama standardını karşıladığında yayınlanır.",
  "engine online · every verdict logged & resolved": "motor çevrimiçi · her karar kaydedildi ve çözüldü",
  "try one:": "birini dene:",
  "BTC long 10×": "BTC long 10×",
  "ETH short + stop": "ETH short + stop",
  "SOL long 20× tight stop": "SOL long 20× dar stop",

  // ── signed-out gate ──
  "Try": "Aşağıda",
  "1 free check": "1 ücretsiz kontrolü",
  "below — no account. Free accounts get": "dene — hesap gerekmez. Ücretsiz hesaplar günde",
  "3 checks a day": "3 kontrol",
  "+ your history; Pro is unlimited.": "+ geçmişini alır; Pro sınırsızdır.",
  "LOG IN": "GİRİŞ YAP",
  "CREATE FREE ACCOUNT": "ÜCRETSİZ HESAP OLUŞTUR",
  "advanced: use an API key instead": "gelişmiş: bunun yerine bir API anahtarı kullan",
  "USE KEY": "ANAHTARI KULLAN",

  // ── form ──
  "📈 drop a chart screenshot here (or click) — we'll read the ticker": "📈 buraya bir grafik ekran görüntüsü bırak (veya tıkla) — ticker'ı okuruz",
  "✓ use": "✓ kullan",
  "✗ ignore": "✗ yoksay",
  "ASSET": "VARLIK",
  "SIDE": "YÖN",
  "spot": "spot",
  "ENTRY": "GİRİŞ",
  "optional — live price if empty": "isteğe bağlı — boşsa canlı fiyat",
  "STOP": "STOP",
  "optional": "isteğe bağlı",
  "TARGET": "HEDEF",
  "LEVERAGE": "KALDIRAÇ",
  "HORIZON": "VADE",
  "TODAY": "BUGÜN",

  // ── result panel ──
  "GRADE": "NOT",
  "conditions": "koşullar",
  "That's your free check for today —": "Bugünkü ücretsiz kontrolün bu —",
  "a free account gets 3/day + your history": "ücretsiz bir hesap 3/gün + geçmişini alır",
  "▍WORKING AGAINST YOU": "▍SANA KARŞI ÇALIŞAN",
  "▍IN YOUR FAVOR": "▍SENİN LEHİNE",
  "▍WHAT WOULD CHANGE THIS GRADE": "▍BU NOTU NE DEĞİŞTİRİR",
  "rendered from live market data — your orders vs our measured structure": "canlı piyasa verisinden oluşturuldu — senin emirlerin, bizim ölçtüğümüz yapıya karşı",
  "▍THE TERRAIN": "▍ARAZİ",
  "▍NOT CHECKED — YOU DIDN'T TELL US": "▍KONTROL EDİLMEDİ — BİZE SÖYLEMEDİN",
  "download chart": "grafiği indir",
  "Conditions assessment measured from live market data — analytical, not financial advice. Grades are logged and resolved at horizon; calibration publishes on": "Koşul değerlendirmesi canlı piyasa verisinden ölçülür — analitiktir, finansal tavsiye değildir. Notlar kaydedilir ve vadede çözülür; kalibrasyon şurada yayınlanır:",
  "▍YOUR LEVELS, AUDITED": "▍SENİN SEVİYELERİN, DENETLENDİ",

  // ── history section ──
  "▍YOUR CHECKS · ON THE RECORD": "▍KONTROLLERİN · KAYITTA",
  "when": "ne zaman",
  "trade": "işlem",
  "grade": "not",
  "result": "sonuç",
  "Results are the side-adjusted move from your entry to the end of the horizon (or your stop, if it was hit first). Pending checks resolve automatically — come back after the horizon.": "Sonuçlar, girişinden vadenin sonuna kadar yöne göre ayarlanmış harekettir (ya da önce vurulduysa stopun). Bekleyen kontroller otomatik olarak çözülür — vadeden sonra geri gel.",

  // ── how it works + signoff ──
  "▍HOW IT WORKS": "▍NASIL ÇALIŞIR",
  "Type in the trade you're thinking about. Only the coin and long/short are required.": "Düşündüğün işlemi yaz. Sadece coin ve long/short zorunludur.",
  "We grade the conditions around it, A to F, and show every reason.": "Çevresindeki koşulları A'dan F'ye notlandırırız ve her nedeni gösteririz.",
  "Come back after the horizon — the verdict resolves against what actually happened and stays logged, permanently.": "Vadeden sonra geri gel — karar, gerçekte ne olduğuna göre çözülür ve kalıcı olarak kayıtlı kalır.",
  "// every verdict is logged before the outcome": "// her karar sonuçtan önce kaydedilir",
};
