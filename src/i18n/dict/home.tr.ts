/* Turkish — home page. Keys are the English source string. Machine-drafted;
   prices/endpoints/tickers kept literal. Win-rate / proof / disclaimer lines
   and the reordered hero headline are flagged for human review. */
export const tr: Record<string, string> = {
  // ── SEO (title + meta description) ──
  "AI-Powered Crypto Signals API": "Yapay Zeka Destekli Kripto Sinyal API'si",
  "Cross-asset market intelligence — crypto AND the tokenized stock market (equities, indices, metals, commodities). Signals scored, then cross-corroborated against independent evidence classes (whale flow, funding, events, macro) before conviction. Market-wide risk-appetite, liquidity and flow reads answer where liquidity is, where funds are going, and whether the market is buying something other than crypto. REST, WebSocket, Webhooks, MCP, x402 — built for autonomous trading agents. Free tier — no credit card.":
    "Varlık sınıfları arası piyasa istihbaratı — kripto VE tokenize edilmiş hisse senedi piyasası (hisseler, endeksler, metaller, emtialar). Sinyaller puanlanır, ardından kanaate varılmadan önce bağımsız kanıt sınıflarına (balina akışı, funding, olaylar, makro) karşı çapraz doğrulanır. Piyasa genelindeki risk iştahı, likidite ve akış okumaları likiditenin nerede olduğunu, paranın nereye gittiğini ve piyasanın kripto dışında bir şey alıp almadığını yanıtlar. REST, WebSocket, Webhooks, MCP, x402 — otonom işlem ajanları için tasarlandı. Ücretsiz katman — kredi kartı gerekmez.",

  // ── hero ── (headline reordered for Turkish grammar — review)
  "Live Signal Feed Active": "Canlı Sinyal Akışı Aktif",
  "SIGNALS THAT": "AVANTAJINI",
  "PROVE": "KANITLAYAN",
  "THEIR EDGE": "SİNYALLER",
  // hero lede — WIN-RATE / PROOF CLAIM, review
  "We measure every signal type against real post-signal price action and flag a call":
    "Her sinyal türünü, sinyal sonrası gerçek fiyat hareketine karşı ölçüyoruz ve bir çağrıyı",
  "only when that type's": "olarak yalnızca, o türün",
  "live forward-return record beats BTC over the same window (excess return / alpha) AND is profitable on its own (95% CI lower bound above zero)":
    "canlı ileri-getiri kaydı aynı pencerede BTC'yi geçtiği (fazla getiri / alfa) VE kendi başına kârlı olduğu (%95 GA alt sınırı sıfırın üzerinde)",
  ", judged per direction — and we publicly demote our own weak signals. Every event is machine-classified, cross-corroborated, and scored with a":
    "durumda, yön bazında, işaretleriz — ve kendi zayıf sinyallerimizi açıkça düşürürüz. Her olay makineyle sınıflandırılır, çapraz doğrulanır ve",
  "calibrated": "kalibre edilmiş",
  "confidence, anchored by": "bir güvenle puanlanır, çıpası",
  ", our daily BTC + ETH directional bias. Pipe it into your agent or alert system via":
    " — günlük BTC + ETH yön eğilimimiz. Bunu ajanınıza veya uyarı sisteminize şu kanallarla aktarın:",
  ", or pay-per-call": ", ya da çağrı başına ödemeli",
  "Start Free →": "Ücretsiz Başla →",
  "See the proof ↗": "Kanıtı gör ↗",
  "API Docs ↗": "API Dokümanları ↗",
  "loading live win-rate…": "canlı kazanma oranı yükleniyor…",
  "live scoreboard →": "canlı skor tablosu →",
  "scroll": "kaydır",

  // ── ticker ──
  "10 intel layers": "10 istihbarat katmanı",
  "live forward-returns": "canlı ileri getiriler",

  // ── 01 · the pipeline ──
  "01 · the pipeline": "01 · işlem hattı",
  "How a signal is made": "Bir sinyal nasıl oluşur",
  "30+ raw feeds in. Ten intelligence layers. One scored, corroborated signal out — delivered wherever your agent lives.":
    "30+ ham besleme girer. On istihbarat katmanı. Puanlanmış, doğrulanmış tek bir sinyal çıkar — ajanınız nerede yaşıyorsa oraya teslim edilir.",
  "intake": "giriş",
  "30+ feeds": "30+ besleme",
  "Market Structure": "Piyasa Yapısı",
  "Capital Flows": "Sermaye Akışları",
  "News & Events": "Haberler ve Olaylar",
  "Macro & Regime": "Makro ve Rejim",
  "Discovery": "Keşif",
  "whales · funding · liq map · options · order book":
    "balinalar · funding · liq haritası · opsiyonlar · emir defteri",
  "on-chain · ETF · stablecoin mints": "zincir üstü · ETF · stablecoin basımları",
  "telegram · exploits · news · farcaster · X": "telegram · exploitler · haberler · farcaster · X",
  "macro pulse · fear & greed · policy": "macro pulse · korku ve açgözlülük · politika",
  "launchpads · DEX screener": "launchpad'ler · DEX screener",
  "process": "işle",
  "every event": "her olay",
  "n0brains core": "n0brains çekirdeği",

  // engine / compute layer titles
  "Confidence Decay": "Güven Azalması",
  "Source Accuracy Feedback": "Kaynak Doğruluk Geri Bildirimi",
  "Narrative Heatmap": "Anlatı Isı Haritası",
  "Manipulation Detection": "Manipülasyon Tespiti",
  "Wallet DNA": "Cüzdan DNA'sı",
  "Trust & Scam Scoring": "Güven ve Dolandırıcılık Puanı",
  "Semantic Signal Search": "Anlamsal Sinyal Araması",
  "ML Outcome Models": "ML Sonuç Modelleri",
  "Historical Edge": "Tarihsel Avantaj",
  "Binned Calibration": "Kutulanmış Kalibrasyon",

  // output card labels (payload VALUES stay English)
  "output": "çıktı",
  "scored signal": "puanlanmış sinyal",
  "signal": "sinyal",
  "example payload": "örnek yük",
  "type": "tür",
  "asset": "varlık",
  "direction": "yön",
  "confidence": "güven",
  "conviction": "kanaat",
  "corroboration": "doğrulama",

  // ── 02 · under the hood ──
  "02 · under the hood": "02 · kaputun altında",
  "Every source. Every layer.": "Her kaynak. Her katman.",
  "The full intake list and what each intelligence layer does — because auditable beats mysterious.":
    "Tam giriş listesi ve her istihbarat katmanının ne yaptığı — çünkü denetlenebilir olmak gizemli olmayı yener.",
  "All": "Tüm",
  "source feeds": "veri beslemesi",
  "expand": "genişlet",
  "All 10 intelligence layers": "10 istihbarat katmanının tümü",

  // source titles (Macro Pulse / Farcaster / DEX Screener kept literal)
  "Whale Tracking": "Balina Takibi",
  "Funding & Liquidations": "Funding ve Likidasyonlar",
  "Deleverage Capitulation": "Kaldıraç Azaltma Teslimiyeti",
  "DEX Liquidation Map": "DEX Likidasyon Haritası",
  "On-Chain Flows": "Zincir Üstü Akışlar",
  "L/S Ratios": "L/S Oranları",
  "Options Flow": "Opsiyon Akışı",
  "ETF Flows": "ETF Akışları",
  "Stablecoin Flows": "Stablecoin Akışları",
  "S/R Levels": "Destek/Direnç Seviyeleri",
  "Telegram Channels": "Telegram Kanalları",
  "Security & Exploits": "Güvenlik ve Exploitler",
  "News & RSS": "Haberler ve RSS",
  "CMC & Macro": "CMC ve Makro",
  "Exchange Listings": "Borsa Listelemeleri",
  "Policy & Regulatory": "Politika ve Düzenleme",
  "X / Curated Accounts": "X / Seçilmiş Hesaplar",
  "On-Chain Valuation": "Zincir Üstü Değerleme",
  "Token Unlocks": "Token Kilit Açılışları",
  "Technical Indicators": "Teknik Göstergeler",
  "Cycle Position": "Döngü Konumu",
  "TradFi & Liquidity": "TradFi ve Likidite",

  // source descriptions
  "Daily BTC + ETH directional bias. A deterministic macro composite — net liquidity, dollar (DXY), real yields, the curve, VIX (FRED data) — anchors the regime, synthesised with the CPI/FOMC/NFP/PPI calendar and 7d intel signals: regime call, conviction, key levels, invalidation. Sunday weekly 30d deep-dive.":
    "Günlük BTC + ETH yön eğilimi. Determinist bir makro bileşen — net likidite, dolar (DXY), reel getiriler, verim eğrisi, VIX (FRED verisi) — rejimi çıpalar; CPI/FOMC/NFP/PPI takvimi ve 7 günlük istihbarat sinyalleriyle sentezlenir: rejim çağrısı, kanaat, kilit seviyeler, geçersizleşme. Pazar günü haftalık 30 günlük derin analiz.",
  "Hyperliquid leaderboard consensus. When top traders pile into the same side, we detect it — and like every signal here, its live track record is published on /proof.":
    "Hyperliquid liderlik tablosu konsensüsü. En iyi trader'lar aynı tarafta toplandığında bunu tespit ederiz — ve buradaki her sinyal gibi, canlı geçmiş performansı /proof üzerinde yayımlanır.",
  "Binance funding extremes and real-time liquidation cascades via WebSocket, plus multi-venue open-interest momentum from Coinglass snapshots. Timing signal for reversals and continuations.":
    "WebSocket üzerinden Binance funding uçları ve gerçek zamanlı likidasyon çığları, artı Coinglass anlık görüntülerinden çok borsalı açık pozisyon momentumu. Dönüşler ve devamlar için zamanlama sinyali.",
  "A mechanical, non-directional edge: when price and open interest fall together, positions are being force-unwound — not informed selling. The fire-sale exhausts and price bounces. We measure the price + OI deltas (data most feeds collect but never combine) and flag the capitulation low. Validated on our own forward returns, not folklore — track record on /proof.":
    "Mekanik, yönsüz bir avantaj: fiyat ve açık pozisyon birlikte düştüğünde, pozisyonlar zorla kapatılıyordur — bilinçli satış değil. Zorunlu satış tükenir ve fiyat sıçrar. Fiyat + OI farklarını ölçeriz (çoğu beslemenin topladığı ama asla birleştirmediği veri) ve teslimiyet dibini işaretleriz. Folklorla değil, kendi ileri getirilerimizle doğrulanmıştır — geçmiş performans /proof üzerinde.",
  "Our own liquidation map built from real on-chain DEX perp positions (Hyperliquid + GMX) — exact liquidation prices, not estimates. Clusters near price mark magnet / cascade levels; we use them to place stops and targets, not to pick a direction (liquidity predicts volatility, not which way).":
    "Gerçek zincir üstü DEX perp pozisyonlarından (Hyperliquid + GMX) oluşturulmuş kendi likidasyon haritamız — tahmin değil, kesin likidasyon fiyatları. Fiyata yakın kümeler mıknatıs / çığ seviyelerini işaretler; bunları yön seçmek için değil, stop ve hedef yerleştirmek için kullanırız (likidite, hangi yöne değil, oynaklığı öngörür).",
  "Large ETH/BTC transfers to/from exchanges via Alchemy + mempool.space WebSockets. Positioning context and capital-concentration tracking — directional whale reads come from Hyperliquid leaderboard positions.":
    "Alchemy + mempool.space WebSocket'leri üzerinden borsalara giren/çıkan büyük ETH/BTC transferleri. Pozisyonlama bağlamı ve sermaye yoğunlaşması takibi — yönlü balina okumaları Hyperliquid liderlik tablosu pozisyonlarından gelir.",
  "Bybit, Binance, and Gate.io positioning data. Detect extreme crowding before the reversal.":
    "Bybit, Binance ve Gate.io pozisyonlama verileri. Dönüşten önce aşırı kalabalıklaşmayı tespit et.",
  "Deribit options positioning — put/call open-interest ratio, max-pain magnets, and large smart-money block trades on BTC + ETH. Surfaces institutional positioning the crowd-sentiment feeds miss.":
    "Deribit opsiyon pozisyonlaması — put/call açık pozisyon oranı, max-pain mıknatısları ve BTC + ETH üzerinde büyük akıllı para blok işlemleri. Kalabalık-duyarlı beslemelerin kaçırdığı kurumsal pozisyonlamayı yüzeye çıkarır.",
  "US spot BTC + ETH + SOL ETF daily net flows (SoSoValue). Institutional capital context — we publish it as context, not a directional call: our own backtest found ETF net flow is a coincident/lagging demand print, not a leading signal (SOL inflows were even contrarian).":
    "ABD spot BTC + ETH + SOL ETF günlük net akışları (SoSoValue). Kurumsal sermaye bağlamı — bunu yönlü bir çağrı olarak değil, bağlam olarak yayımlarız: kendi backtest'imiz ETF net akışının öncü bir sinyal değil, eşzamanlı/gecikmeli bir talep göstergesi olduğunu buldu (SOL girişleri hatta ters yönlüydü).",
  "Large USDC mints and USDT Treasury deployments, plus net stablecoin inflow to exchange wallets — fresh dollar liquidity entering crypto and dry powder staged on exchanges (bullish) versus redemptions leaving (bearish). The macro dry-powder signal.":
    "Büyük USDC basımları ve USDT Hazine dağıtımları, artı borsa cüzdanlarına net stablecoin girişi — kriptoya giren taze dolar likiditesi ve borsalarda hazır bekleyen kuru barut (yükseliş) ile çıkan itfalar (düşüş) karşılaştırması. Makro kuru barut sinyali.",
  "Real-time support/resistance from the Hyperliquid order book — treated as zones, not lines, each with its price band. Tracks polarity flips (broken support becomes resistance). Shapes entries and stops; rejects trades near adverse levels.":
    "Hyperliquid emir defterinden gerçek zamanlı destek/direnç — çizgi değil, her biri kendi fiyat bandıyla bölge olarak ele alınır. Polarite dönüşlerini izler (kırılan destek dirence dönüşür). Girişleri ve stop'ları şekillendirir; olumsuz seviyelere yakın işlemleri reddeder.",
  "WatcherGuru, ZachXBT Investigations, and more. Fastest source for hacks and breaking events — high speed, needs corroboration.":
    "WatcherGuru, ZachXBT Investigations ve daha fazlası. Hackler ve son dakika olayları için en hızlı kaynak — yüksek hız, doğrulama gerektirir.",
  "Dedicated exploit feed — DefiLlama hacks database (amount, technique, chain) plus rekt.news post-mortems. Structured, first-mover coverage of protocol drains and bridge hacks.":
    "Özel exploit beslemesi — DefiLlama hack veritabanı (tutar, teknik, zincir) artı rekt.news otopsileri. Protokol boşaltmaları ve köprü hacklerinin yapılandırılmış, ilk hareket eden kapsamı.",
  "CoinDesk, Decrypt, CoinTelegraph, Reddit, Tree of Alpha fast-news, and Trump's Truth Social. Keyword-filtered — broader context, slower than the live feeds.":
    "CoinDesk, Decrypt, CoinTelegraph, Reddit, Tree of Alpha hızlı haberleri ve Trump'ın Truth Social'ı. Anahtar kelimeyle filtrelenmiş — daha geniş bağlam, canlı beslemelerden daha yavaş.",
  "Crypto-native social monitoring on Farcaster channels — our highest trades-per-signal social source in the live source audit.":
    "Farcaster kanallarında kripto-yerlisi sosyal izleme — canlı kaynak denetimindeki sinyal başına en çok işlem üreten sosyal kaynağımız.",
  "CoinMarketCap price alerts, trending coins, Fear & Greed Index, DeFi TVL shifts. Regime context rather than a direct trade trigger.":
    "CoinMarketCap fiyat uyarıları, trend olan coinler, Korku ve Açgözlülük Endeksi, DeFi TVL değişimleri. Doğrudan işlem tetikleyicisinden çok rejim bağlamı.",
  "Real CEX listing catalysts — Binance & Bybit launchpads plus new spot-market detection on Binance, Upbit (Korea / kimchi-premium), and OKX. Tracks coins getting actual exchange access, not memecoin launch spam.":
    "Gerçek CEX listeleme katalizörleri — Binance ve Bybit launchpad'leri artı Binance, Upbit (Kore / kimchi-primi) ve OKX'te yeni spot piyasa tespiti. Memecoin lansman spam'i değil, gerçek borsa erişimi kazanan coinleri izler.",
  "Official government and regulatory RSS — SEC, Treasury, congressional, and agency sources monitored for crypto-relevant policy moves — plus congressional stock-trade disclosures. No paid APIs.":
    "Resmi hükümet ve düzenleyici RSS — kripto ile ilgili politika hamleleri için izlenen SEC, Hazine, Kongre ve kurum kaynakları — artı Kongre hisse senedi işlem beyanları. Ücretli API yok.",
  "DexScreener trending and boosted-token feed — early on-chain discovery and token activity. Discovery context, non-directional.":
    "DexScreener trend ve öne çıkarılan token beslemesi — erken zincir üstü keşif ve token aktivitesi. Keşif bağlamı, yönsüz.",
  "A budget-capped X (Twitter) feed of research-vetted directional analysts and on-chain trackers — Arthur Hayes, Ki Young Ju, Pentoshi, EmberCN, Lookonchain, WuBlockchain, and more — plus official exchange listing and hack feeds.":
    "Araştırmayla doğrulanmış yönlü analistlerin ve zincir üstü takipçilerin bütçe sınırlı bir X (Twitter) beslemesi — Arthur Hayes, Ki Young Ju, Pentoshi, EmberCN, Lookonchain, WuBlockchain ve daha fazlası — artı resmi borsa listeleme ve hack beslemeleri.",
  "MVRV, exchange in/outflows + reserves, and active addresses from Coin Metrics (BTC + ETH). Net outflow / falling exchange reserves = self-custody accumulation; MVRV maps cycle profit vs froth. Feeds the macro composite's on-chain leg.":
    "Coin Metrics'ten MVRV, borsa giriş/çıkışları + rezervler ve aktif adresler (BTC + ETH). Net çıkış / düşen borsa rezervleri = öz saklama birikimi; MVRV, döngü kârını köpüğe karşı haritalar. Makro bileşenin zincir üstü ayağını besler.",
  "Scheduled token-unlock calendar (DeFiLlama). A large near-term insider/investor cliff on a tradeable token is supply that sellers front-run — flagged as a bearish supply-shock signal that self-proves via the forward-return gate.":
    "Planlı token kilit açılış takvimi (DeFiLlama). İşlem görebilir bir token üzerinde büyük, yakın vadeli bir içeriden/yatırımcı uçurumu, satıcıların önden koştuğu bir arzdır — ileri getiri kapısıyla kendini kanıtlayan düşüş yönlü bir arz şoku sinyali olarak işaretlenir.",
  "Classic TA computed on Hyperliquid OHLC — RSI, MACD, moving averages (20/50/200 + 200-week), Stochastic, and Fibonacci levels, with a plain-language trend/momentum read. The indicator layer alongside our on-chain + macro data.":
    "Hyperliquid OHLC üzerinde hesaplanan klasik TA — RSI, MACD, hareketli ortalamalar (20/50/200 + 200 haftalık), Stokastik ve Fibonacci seviyeleri, sade dilde bir trend/momentum okumasıyla. Zincir üstü + makro verimizin yanındaki gösterge katmanı.",
  "Bitcoin's 4-year-cycle context — months since the halving, cycle phase, and an MVRV valuation band (capitulation → euphoria) as the measured cycle locator. A historical-cadence cycle-low window is shown strictly as labelled context, never a forecast.":
    "Bitcoin'in 4 yıllık döngü bağlamı — halving'den bu yana geçen aylar, döngü aşaması ve ölçülü döngü konumlandırıcı olarak bir MVRV değerleme bandı (teslimiyet → öfori). Tarihsel kadanslı bir döngü-dibi penceresi kesinlikle etiketli bağlam olarak gösterilir, asla bir tahmin olarak değil.",
  "Net liquidity (Fed balance sheet − Treasury cash − reverse repo, with fresh daily TGA), the dollar index, real yields, the curve, and CME BTC/ETH futures gaps — the macro backdrop that increasingly drives crypto.":
    "Net likidite (Fed bilançosu − Hazine nakiti − ters repo, taze günlük TGA ile), dolar endeksi, reel getiriler, verim eğrisi ve CME BTC/ETH vadeli işlem boşlukları — kriptoyu giderek daha çok yönlendiren makro arka plan.",

  // compute layer descriptions
  "Signal confidence degrades exponentially with age. A liquidation cascade from 4 hours ago is not the same signal as one from 4 minutes ago. Every score you receive reflects time.":
    "Sinyal güveni yaşla üstel olarak azalır. 4 saat önceki bir likidasyon çığı, 4 dakika öncekiyle aynı sinyal değildir. Aldığınız her puan zamanı yansıtır.",
  "Source weights self-tune daily via EMA-smoothed win rates from tracked outcomes. Sources that predict correctly get boosted; sources that don't get dampened. Automatically.":
    "Kaynak ağırlıkları, izlenen sonuçlardan EMA ile yumuşatılmış kazanma oranları aracılığıyla her gün kendini ayarlar. Doğru tahmin eden kaynaklar güçlendirilir; etmeyenler zayıflatılır. Otomatik olarak.",
  "Rolling 1h / 4h / 24h signal momentum per asset. Narrative strength, velocity, and decay rate. Coordination detection: three independent source types firing the same direction in 5 minutes raises a manipulation flag.":
    "Varlık başına kayan 1s / 4s / 24s sinyal momentumu. Anlatı gücü, hızı ve azalma oranı. Koordinasyon tespiti: 5 dakika içinde aynı yönde ateşlenen üç bağımsız kaynak türü bir manipülasyon bayrağı kaldırır.",
  "Social burst scoring, coordinated pump detection, and liquidation cascade identification. If engagement spikes 5× baseline or four unrelated sources fire the same coin in 10 minutes — you know.":
    "Sosyal patlama puanlaması, koordineli pump tespiti ve likidasyon çığı belirleme. Etkileşim taban çizgisinin 5 katına fırlarsa ya da 10 dakika içinde ilgisiz dört kaynak aynı coini ateşlerse — bilirsiniz.",
  "Whale signals tagged with wallet archetype — CEX hot/cold, market maker, MEV bot, institutional, smart trader. 700+ verified labeled addresses across Ethereum, refreshed weekly from Etherscan label cloud and a live top-volume sweep. Stealth-accumulation flag fires when a tracked wallet receives a token in ≥3 fragmented buys totaling ≥$500K within 24h — catches quiet accumulation before it shows up in whale-alert feeds.":
    "Cüzdan arketipiyle etiketlenmiş balina sinyalleri — CEX sıcak/soğuk, piyasa yapıcı, MEV botu, kurumsal, akıllı trader. Ethereum genelinde 700+ doğrulanmış etiketli adres, Etherscan etiket bulutundan ve canlı en yüksek hacim taramasından haftalık olarak yenilenir. İzlenen bir cüzdan 24 saat içinde ≥3 parçalı alımda toplam ≥500K$ token aldığında gizli birikim bayrağı ateşlenir — balina-uyarı beslemelerinde görünmeden önce sessiz birikimi yakalar.",
  "Every new token signal gets a contract risk pass — GoPlus honeypot check, mint function, sell tax, insider concentration, and DexScreener liquidity. Composite rug probability score. Cached 6 hours per token.":
    "Her yeni token sinyali bir kontrat risk taramasından geçer — GoPlus honeypot kontrolü, mint fonksiyonu, satış vergisi, içeriden yoğunlaşma ve DexScreener likiditesi. Bileşik rug olasılık puanı. Token başına 6 saat önbelleğe alınır.",
  "BGE-M3 embeddings on every signal, stored in a vector database. Find signals by meaning, not just keywords. Semantic deduplication suppresses near-duplicate events before they reach the feed.":
    "Her sinyalde BGE-M3 embedding'leri, bir vektör veritabanında saklanır. Sinyalleri yalnızca anahtar kelimelerle değil, anlamla bulun. Anlamsal tekilleştirme, beslemeye ulaşmadan önce neredeyse yinelenen olayları bastırır.",
  "Four models score every directional signal: a logistic win-probability, q10/q50/q90 PnL quantiles, a Cox survival model for median hold time, and an HMM market-regime detector — all trained on tracked forward returns. Sub-10ms inference; degrade gracefully when a model is cold.":
    "Dört model her yönlü sinyali puanlar: lojistik bir kazanma olasılığı, q10/q50/q90 PnL çeyreklikleri, medyan tutma süresi için bir Cox sağkalım modeli ve bir HMM piyasa rejimi dedektörü — hepsi izlenen ileri getiriler üzerinde eğitildi. 10ms altı çıkarım; bir model soğukken zarifçe düşer.",
  "Each signal's (type × direction × regime) cell carries its empirical track record. When a cell is anti-predictive (n≥30, win rate ≤30%, avg PnL ≤−2%) we attach a labeled paired_inverse advisory — short-term reversal literature, never silently flipping your signal.":
    "Her sinyalin (tür × yön × rejim) hücresi kendi ampirik geçmiş performansını taşır. Bir hücre anti-öngörücü olduğunda (n≥30, kazanma oranı ≤%30, ort. PnL ≤−%2) etiketli bir paired_inverse uyarısı ekleriz — kısa vadeli dönüş literatürü, sinyalinizi asla sessizce tersine çevirmeden.",
  "Confidence is mapped to empirical win rate per signal type, per raw-confidence bin. Win-rate is non-monotonic and type-dependent (higher confidence means higher win for sentiment, lower for whale) — a single curve can't capture that, so we bin it.":
    "Güven, sinyal türü başına, ham güven kutusu başına ampirik kazanma oranına eşlenir. Kazanma oranı monoton değildir ve türe bağlıdır (daha yüksek güven, sentiment için daha yüksek kazanç, balina için daha düşük anlamına gelir) — tek bir eğri bunu yakalayamaz, bu yüzden kutulara ayırırız.",

  // ── 03 · consolidation ──
  "03 · consolidation": "03 · birleştirme",
  "One API. Not twelve.": "Tek API. On iki değil.",
  "Others": "Diğerleri",
  "Whale data from one API. Funding from another. News from three more. L/S ratios, on-chain flows, options positioning, ETF flows, macro calendar — each a separate subscription, separate key, separate rate limit. You duct-tape them together and still do all the synthesis yourself.":
    "Balina verisi bir API'den. Funding başka birinden. Haberler üç tanesinden daha. L/S oranları, zincir üstü akışlar, opsiyon pozisyonlaması, ETF akışları, makro takvim — her biri ayrı bir abonelik, ayrı bir anahtar, ayrı bir hız sınırı. Onları bantla birbirine yapıştırırsınız ve yine de tüm sentezi kendiniz yaparsınız.",
  "All of it — one endpoint. Telegram, whales, funding, liquidations, on-chain, L/S ratios, options flow, ETF + stablecoin flows, news, security feeds, macro calendar — fused, corroborated, and scored. Plus narrative momentum, manipulation detection, wallet DNA, token trust scoring, and semantic signal search baked in. One API key. One bill. Raw classified intel your agent can filter, route, and act on directly.":
    "Hepsi — tek bir endpoint. Telegram, balinalar, funding, likidasyonlar, zincir üstü, L/S oranları, opsiyon akışı, ETF + stablecoin akışları, haberler, güvenlik beslemeleri, makro takvim — birleştirilmiş, doğrulanmış ve puanlanmış. Ayrıca anlatı momentumu, manipülasyon tespiti, cüzdan DNA'sı, token güven puanlaması ve anlamsal sinyal araması gömülü olarak. Tek bir API anahtarı. Tek bir fatura. Ajanınızın doğrudan filtreleyebileceği, yönlendirebileceği ve üzerine hareket edebileceği ham sınıflandırılmış istihbarat.",

  // ── 04 · receipts ── (HONESTY / PROOF — review)
  "04 · receipts": "04 · makbuzlar",
  "Our record is public. Theirs isn't.": "Bizim kaydımız herkese açık. Onlarınki değil.",
  "Most of the industry asks you to trust a backtest you can't audit. We measure every signal type on real prices, publish the result, and demote our own weak signals in the open. The edge here is honesty — not a bigger pile of data.":
    "Sektörün çoğu, denetleyemeyeceğiniz bir backtest'e güvenmenizi ister. Biz her sinyal türünü gerçek fiyatlar üzerinde ölçer, sonucu yayımlar ve kendi zayıf sinyallerimizi açıkça düşürürüz. Buradaki avantaj dürüstlüktür — daha büyük bir veri yığını değil.",
  'Typical TG "call" group': 'Tipik TG "çağrı" grubu',
  "Publishes live per-signal win-rate": "Sinyal başına canlı kazanma oranı yayımlar",
  "Yes —": "Evet —",
  "No": "Hayır",
  "Demotes its own weak signals publicly": "Kendi zayıf sinyallerini açıkça düşürür",
  "Yes": "Evet",
  "Never": "Asla",
  "Forward-return vs BTC baseline, with 95% CI": "BTC referansına karşı ileri getiri, %95 GA ile",
  "Price": "Fiyat",
  '"lifetime $$$"': '"ömür boyu $$$"',
  "Comparison reflects publicly published methodology as of mid-2026. We're thinner than the big dashboards on raw data volume — we compete on":
    "Karşılaştırma, 2026 ortası itibarıyla herkese açık yayımlanmış metodolojiyi yansıtır. Ham veri hacminde büyük panellerden daha inceyiz — şurada rekabet ederiz:",
  "edge quality you can audit": "denetleyebileceğiniz avantaj kalitesi",
  ", not data quantity. Not financial advice.": ", veri miktarında değil. Yatırım tavsiyesi değildir.",

  // ── 05 · pricing ──
  "05 · pricing": "05 · fiyatlandırma",
  "Choose your tier.": "Katmanını seç.",
  "Start free. Upgrade to Pro for real-time signals.":
    "Ücretsiz başla. Gerçek zamanlı sinyaller için Pro'ya yükselt.",
  "Free": "Ücretsiz",
  "For evaluation and light usage.": "Değerlendirme ve hafif kullanım için.",
  "Start Free": "Ücretsiz Başla",
  "Popular": "Popüler",
  "For active traders. Over 30 data sources. One subscription.":
    "Aktif trader'lar için. 30'dan fazla veri kaynağı. Tek abonelik.",
  "Get Pro": "Pro'yu Al",
  "Need more than your rate limit allows? Buy":
    "Hız sınırınızın izin verdiğinden fazlası mı lazım? Satın alın:",
  "pay-per-call credits": "çağrı başına ödeme kredileri",
  "— one-time packs from $5, spent only on calls beyond your tier's included rate. Manage them in your":
    "— 5$'dan başlayan tek seferlik paketler, yalnızca katmanınıza dahil hızın ötesindeki çağrılarda harcanır. Bunları şurada yönetin:",
  "account": "hesabınız",
  ". No account at all? Pay per request in USDC via":
    ". Hiç hesabınız yok mu? İstek başına USDC ile ödeyin:",

  // pro / free feature bullets (rendered via set:html)
  "600 requests / minute": "600 istek / dakika",
  "<strong>Real-time</strong> signals — no delay": "<strong>Gerçek zamanlı</strong> sinyaller — gecikmesiz",
  'REST + WebSocket + Webhooks + <strong><a href="/docs/mcp">MCP server</a></strong>':
    'REST + WebSocket + Webhooks + <strong><a href="/docs/mcp">MCP sunucusu</a></strong>',
  "<strong>MCP endpoint</strong> — drop into Claude Desktop, Cursor, Cline (19 tools, Bearer auth)":
    "<strong>MCP endpoint</strong> — Claude Desktop, Cursor, Cline'a takın (19 araç, Bearer kimlik doğrulama)",
  "Full source &amp; channel detail": "Tam kaynak ve kanal detayı",
  "Whale tracking &amp; on-chain flows": "Balina takibi ve zincir üstü akışlar",
  "Corroboration scoring": "Doğrulama puanlaması",
  "<strong>Macro Pulse</strong> — daily + weekly BTC/ETH bias":
    "<strong>Macro Pulse</strong> — günlük + haftalık BTC/ETH eğilimi",
  "<strong>Narrative heatmap</strong> — 1h/4h/24h signal momentum per asset":
    "<strong>Anlatı ısı haritası</strong> — varlık başına 1s/4s/24s sinyal momentumu",
  "<strong>Semantic search</strong> — find similar signals by meaning":
    "<strong>Anlamsal arama</strong> — benzer sinyalleri anlamla bulun",
  "<strong>Trust scoring</strong> — contract risk + rug probability per token":
    "<strong>Güven puanlaması</strong> — token başına kontrat riski + rug olasılığı",
  "<strong>Manipulation detection</strong> — coordinated pump + social burst flags":
    "<strong>Manipülasyon tespiti</strong> — koordineli pump + sosyal patlama bayrakları",
  "<strong>Wallet DNA</strong> — smart money classification + stealth-accumulation flag":
    "<strong>Cüzdan DNA'sı</strong> — akıllı para sınıflandırması + gizli birikim bayrağı",
  "<strong>Market-state</strong> — BTC/ETH consensus snapshot from proven voters":
    "<strong>Piyasa durumu</strong> — kanıtlanmış oy verenlerden BTC/ETH konsensüs anlık görüntüsü",
  "<strong>Liquidation map</strong> — real-position DEX liq levels (HL + GMX)":
    "<strong>Likidasyon haritası</strong> — gerçek pozisyonlu DEX liq seviyeleri (HL + GMX)",
  "Email support": "E-posta desteği",
  "60 requests / minute": "60 istek / dakika",
  "15-minute signal delay": "15 dakikalık sinyal gecikmesi",
  "REST API only": "Yalnızca REST API",
  "Limited signal detail": "Sınırlı sinyal detayı",
  "Community support": "Topluluk desteği",

  // ── client-injected (proof strip) ──
  "live win-rate scoreboard": "canlı kazanma oranı skor tablosu",
  "signal type forward-return proven": "sinyal türü ileri getiriyle kanıtlandı",
  "signal types forward-return proven": "sinyal türü ileri getiriyle kanıtlandı",
};
