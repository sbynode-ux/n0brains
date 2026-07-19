/* Turkish — home page. Keys are the English source string. Machine-drafted;
   Haqd + Morte review. Prices/endpoints/tickers/brand names kept literal.
   Hero headline reordered for Turkish grammar and flagged for review. */
export const tr: Record<string, string> = {
  // ── SEO (title + meta description) ──
  "AI-Powered Crypto Signals API": "Yapay Zeka Destekli Kripto Sinyal API'si",
  "Cross-asset market intelligence — crypto AND the tokenized stock market (equities, indices, metals, commodities). Signals scored, then cross-corroborated against independent evidence classes (whale flow, funding, events, macro) before conviction. Market-wide risk-appetite, liquidity and flow reads answer where liquidity is, where funds are going, and whether the market is buying something other than crypto. REST, WebSocket, Webhooks, MCP, x402 — built for autonomous trading agents. Free tier — no credit card.":
    "Varlık sınıfları arası piyasa istihbaratı — kripto VE tokenize edilmiş hisse senedi piyasası (hisseler, endeksler, metaller, emtialar). Sinyaller puanlanır, ardından kanaate varılmadan önce bağımsız kanıt sınıflarına (balina akışı, funding, olaylar, makro) karşı çapraz doğrulanır. Piyasa genelindeki risk iştahı, likidite ve akış okumaları likiditenin nerede olduğunu, paranın nereye gittiğini ve piyasanın kripto dışında bir şey alıp almadığını yanıtlar. REST, WebSocket, Webhooks, MCP, x402 — otonom işlem ajanları için tasarlandı. Ücretsiz katman — kredi kartı gerekmez.",

  // ── hero — CRAFTED, headline reordered, review ──
  "Pre-trade conditions engine live": "İşlem öncesi koşul motoru canlı",
  "CHECK THE TRADE": "İŞLEME",
  "BEFORE": "GİRMEDEN ÖNCE",
  "YOU TAKE IT": "KONTROL ET",
  "Submit the trade you are considering. n0brains checks positioning crowding, scheduled event risk, liquidity, volatility, market structure, stop geometry and conflicts across the live evidence stack, then returns a graded conditions assessment with explicit flags and falsifiers. It is context for your decision, not a recommendation or an automated trade instruction.":
    "Düşündüğün işlemi gönder. n0brains; pozisyon kalabalıklığını, planlı olay riskini, likiditeyi, oynaklığı, piyasa yapısını, stop geometrisini ve canlı kanıt yığınındaki çelişkileri kontrol eder, ardından açık uyarılar ve çürütücülerle notlandırılmış bir koşul değerlendirmesi döndürür. Bu, kararın için bağlamdır; bir öneri ya da otomatik işlem talimatı değildir.",
  "Check a trade →": "Bir işlemi kontrol et →",
  "Create free account ↗": "Ücretsiz hesap oluştur ↗",
  "API Docs ↗": "API Dokümanları ↗",
  "scroll": "kaydır",

  // ── 01 · pipeline ──
  "01 · the pipeline": "01 · hat",
  "How a signal is made": "Bir sinyal nasıl oluşturulur",
  "30+ raw feeds in. Ten intelligence layers. One scored, corroborated signal out — delivered wherever your agent lives.":
    "30'dan fazla ham kaynak girer. On istihbarat katmanı. Puanlanmış, doğrulanmış tek bir sinyal çıkar — ajanın nerede yaşıyorsa oraya teslim edilir.",
  "intake": "alım",
  "30+ feeds": "30+ kaynak",
  "Market Structure": "Piyasa Yapısı",
  "Capital Flows": "Sermaye Akışları",
  "News & Events": "Haberler ve Olaylar",
  "Macro & Regime": "Makro ve Rejim",
  "Discovery": "Keşif",
  "whales · funding · liq map · options · order book":
    "balinalar · funding · liq haritası · opsiyonlar · emir defteri",
  "on-chain · ETF · stablecoin mints": "zincir üstü · ETF · stablecoin basımları",
  "telegram · exploits · news · farcaster · X": "telegram · istismarlar · haberler · farcaster · X",
  "macro pulse · fear & greed · policy": "macro pulse · korku ve açgözlülük · politika",
  "launchpads · DEX screener": "launchpad'ler · DEX screener",
  "process": "işleme",
  "every event": "her olay",
  "n0brains core": "n0brains çekirdeği",
  "Confidence Decay": "Güven Sönümü",
  "Source Accuracy Feedback": "Kaynak Doğruluğu Geri Bildirimi",
  "Narrative Heatmap": "Anlatı Isı Haritası",
  "Manipulation Detection": "Manipülasyon Tespiti",
  "Wallet DNA": "Cüzdan DNA'sı",
  "Trust & Scam Scoring": "Güven ve Dolandırıcılık Puanlaması",
  "Semantic Signal Search": "Anlamsal Sinyal Araması",
  "ML Outcome Models": "ML Sonuç Modelleri",
  "Historical Edge": "Tarihsel Avantaj",
  "Binned Calibration": "Kutulanmış Kalibrasyon",
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
    "Tam alım listesi ve her istihbarat katmanının ne yaptığı — çünkü denetlenebilir olmak, gizemli olmayı yener.",
  "All": "Tüm",
  "source feeds": "veri kaynağı",
  "expand": "genişlet",
  "All 10 intelligence layers": "10 istihbarat katmanının tümü",

  // ── source feeds (title + desc) ──
  "Whale Tracking": "Balina Takibi",
  "Hyperliquid leaderboard consensus. When top traders pile into the same side, we detect it — and like every signal here, its live track record is published on /proof.":
    "Hyperliquid lider tablosu konsensüsü. En iyi trader'lar aynı tarafa yığıldığında bunu tespit ederiz — ve buradaki her sinyal gibi, canlı geçmiş performansı /proof üzerinde yayımlanır.",
  "Funding & Liquidations": "Funding ve Likidasyonlar",
  "Multi-venue funding and open-interest positioning plus OKX public liquidation prints. Timing context for reversals and continuations.":
    "Çok borsalı funding ve açık pozisyon konumlanması artı OKX kamuya açık likidasyon kayıtları. Dönüşler ve devamlar için zamanlama bağlamı.",
  "Deleverage Capitulation": "Kaldıraç Azaltma Kapitülasyonu",
  "A mechanical, non-directional edge: when price and open interest fall together, positions are being force-unwound — not informed selling. The fire-sale exhausts and price bounces. We measure the price + OI deltas (data most feeds collect but never combine) and flag the capitulation low. Validated on our own forward returns, not folklore — track record on /proof.":
    "Mekanik, yönsüz bir avantaj: fiyat ve açık pozisyon birlikte düştüğünde pozisyonlar zorla kapatılıyordur — bilgiye dayalı satış değil. Zorunlu satış tükenir ve fiyat sıçrar. Fiyat + OI deltalarını ölçeriz (çoğu kaynağın topladığı ama asla birleştirmediği veri) ve kapitülasyon dibini işaretleriz. Söylenceyle değil, kendi ileriye dönük getirilerimizle doğrulanmıştır — geçmiş performans /proof üzerinde.",
  "DEX Liquidation Map": "DEX Likidasyon Haritası",
  "Our own liquidation map built from real on-chain DEX perp positions (Hyperliquid + GMX) — exact liquidation prices, not estimates. Clusters near price mark magnet / cascade levels; we use them to place stops and targets, not to pick a direction (liquidity predicts volatility, not which way).":
    "Gerçek zincir üstü DEX perp pozisyonlarından (Hyperliquid + GMX) oluşturulan kendi likidasyon haritamız — tahmin değil, kesin likidasyon fiyatları. Fiyata yakın kümeler mıknatıs / kaskad seviyelerini işaret eder; bunları yön seçmek için değil, stop ve hedef yerleştirmek için kullanırız (likidite oynaklığı tahmin eder, hangi yönü değil).",
  "On-Chain Flows": "Zincir Üstü Akışlar",
  "Large ETH exchange-wallet transfers via Alchemy, alongside live whale-positioning sources. Positioning context and capital-concentration tracking — directional whale reads come from Hyperliquid leaderboard positions.":
    "Alchemy üzerinden büyük ETH borsa-cüzdanı transferleri ile canlı balina-konumlanma kaynakları. Konumlanma bağlamı ve sermaye yoğunlaşması takibi — yönlü balina okumaları Hyperliquid lider tablosu pozisyonlarından gelir.",
  "L/S Ratios": "L/S Oranları",
  "Bybit, Binance, and Gate.io positioning data. Detect extreme crowding before the reversal.":
    "Bybit, Binance ve Gate.io konumlanma verileri. Dönüşten önce aşırı kalabalıklaşmayı tespit et.",
  "Options Flow": "Opsiyon Akışı",
  "Deribit options positioning — put/call open-interest ratio, max-pain magnets, and large smart-money block trades on BTC + ETH. Surfaces institutional positioning the crowd-sentiment feeds miss.":
    "Deribit opsiyon konumlanması — put/call açık pozisyon oranı, max-pain mıknatısları ve BTC + ETH üzerinde büyük smart-money blok işlemleri. Kalabalık-duyarlılık kaynaklarının kaçırdığı kurumsal konumlanmayı ortaya çıkarır.",
  "ETF Flows": "ETF Akışları",
  "US spot BTC + ETH + SOL ETF daily net flows (SoSoValue). Institutional capital context — we publish it as context, not a directional call: our own backtest found ETF net flow is a coincident/lagging demand print, not a leading signal (SOL inflows were even contrarian).":
    "ABD spot BTC + ETH + SOL ETF günlük net akışları (SoSoValue). Kurumsal sermaye bağlamı — bunu yönlü bir çağrı değil, bağlam olarak yayımlıyoruz: kendi backtest'imiz ETF net akışının öncü bir sinyal değil, eşzamanlı/gecikmeli bir talep göstergesi olduğunu buldu (SOL girişleri hatta karşıt yönlüydü).",
  "Stablecoin Flows": "Stablecoin Akışları",
  "Large USDC mints and USDT Treasury deployments, plus net stablecoin inflow to exchange wallets — fresh dollar liquidity entering crypto and dry powder staged on exchanges (bullish) versus redemptions leaving (bearish). The macro dry-powder signal.":
    "Büyük USDC basımları ve USDT hazine dağıtımları, artı borsa cüzdanlarına net stablecoin girişi — kriptoya giren taze dolar likiditesi ve borsalarda hazır bekleyen kuru barut (yükseliş) ile ayrılan itfalar (düşüş) karşılaştırması. Makro kuru barut sinyali.",
  "S/R Levels": "Destek/Direnç Seviyeleri",
  "Real-time support/resistance from the Hyperliquid order book — treated as zones, not lines, each with its price band. Tracks polarity flips (broken support becomes resistance). Shapes entries and stops; rejects trades near adverse levels.":
    "Hyperliquid emir defterinden gerçek zamanlı destek/direnç — çizgi değil, her biri kendi fiyat bandıyla bölge olarak ele alınır. Polarite dönüşlerini izler (kırılan destek dirence dönüşür). Girişleri ve stopları biçimlendirir; olumsuz seviyelere yakın işlemleri reddeder.",
  "Telegram Channels": "Telegram Kanalları",
  "WatcherGuru, ZachXBT Investigations, and more. Fastest source for hacks and breaking events — high speed, needs corroboration.":
    "WatcherGuru, ZachXBT Investigations ve daha fazlası. Hack'ler ve son dakika olayları için en hızlı kaynak — yüksek hız, doğrulama gerektirir.",
  "Security & Exploits": "Güvenlik ve İstismarlar",
  "Dedicated exploit feed — DefiLlama hacks database (amount, technique, chain) plus rekt.news post-mortems. Structured, first-mover coverage of protocol drains and bridge hacks.":
    "Özel istismar kaynağı — DefiLlama hack veritabanı (tutar, teknik, zincir) artı rekt.news otopsileri. Protokol boşaltmaları ve köprü hack'lerinin yapılandırılmış, ilk-hareket eden kapsamı.",
  "News & RSS": "Haberler ve RSS",
  "CoinDesk, Decrypt, CoinTelegraph, Reddit, Tree of Alpha fast-news, and Trump's Truth Social. Keyword-filtered — broader context, slower than the live feeds.":
    "CoinDesk, Decrypt, CoinTelegraph, Reddit, Tree of Alpha hızlı haberleri ve Trump'ın Truth Social'ı. Anahtar kelimeyle filtrelenir — daha geniş bağlam, canlı kaynaklardan daha yavaş.",
  "Crypto-native social monitoring on Farcaster channels — our highest trades-per-signal social source in the live source audit.":
    "Farcaster kanallarında kripto-yerel sosyal izleme — canlı kaynak denetiminde sinyal başına en yüksek işlem oranına sahip sosyal kaynağımız.",
  "CMC & Macro": "CMC ve Makro",
  "CoinMarketCap price alerts, trending coins, Fear & Greed Index, DeFi TVL shifts. Regime context rather than a direct trade trigger.":
    "CoinMarketCap fiyat uyarıları, yükselen coinler, Korku ve Açgözlülük Endeksi, DeFi TVL değişimleri. Doğrudan bir işlem tetikleyicisinden çok rejim bağlamı.",
  "Exchange Listings": "Borsa Listelemeleri",
  "Real CEX listing catalysts — Binance & Bybit launchpads plus new spot-market detection on Binance, Upbit (Korea / kimchi-premium), and OKX. Tracks coins getting actual exchange access, not memecoin launch spam.":
    "Gerçek CEX listeleme katalizörleri — Binance ve Bybit launchpad'leri artı Binance, Upbit (Kore / kimchi-premium) ve OKX'te yeni spot-piyasa tespiti. Memecoin lansman spam'ini değil, gerçek borsa erişimi kazanan coinleri izler.",
  "Policy & Regulatory": "Politika ve Düzenleme",
  "Official government and regulatory RSS — SEC, Treasury, congressional, and agency sources monitored for crypto-relevant policy moves. No paid APIs.":
    "Resmi hükümet ve düzenleyici RSS'leri — kriptoyla ilgili politika hamleleri için izlenen SEC, Hazine, Kongre ve kurum kaynakları. Ücretli API yok.",
  "DexScreener trending and boosted-token feed — early on-chain discovery and token activity. Discovery context, non-directional.":
    "DexScreener yükselen ve öne çıkarılan token kaynağı — erken zincir üstü keşif ve token aktivitesi. Keşif bağlamı, yönsüz.",
  "X / Curated Accounts": "X / Seçilmiş Hesaplar",
  "A budget-capped X (Twitter) feed of research-vetted directional analysts and on-chain trackers — Arthur Hayes, Ki Young Ju, Pentoshi, EmberCN, Lookonchain, WuBlockchain, and more — plus official exchange listing and hack feeds.":
    "Araştırmayla doğrulanmış yönlü analistlerden ve zincir üstü takipçilerden oluşan, bütçe sınırlı bir X (Twitter) kaynağı — Arthur Hayes, Ki Young Ju, Pentoshi, EmberCN, Lookonchain, WuBlockchain ve daha fazlası — artı resmi borsa listeleme ve hack kaynakları.",
  "On-Chain Valuation": "Zincir Üstü Değerleme",
  "MVRV, exchange in/outflows + reserves, and active addresses from Coin Metrics (BTC + ETH). Net outflow / falling exchange reserves = self-custody accumulation; MVRV maps cycle profit vs froth. Feeds the macro composite's on-chain leg.":
    "Coin Metrics'ten MVRV, borsa giriş/çıkışları + rezervler ve aktif adresler (BTC + ETH). Net çıkış / düşen borsa rezervleri = kendi saklamada birikim; MVRV döngü kârı ile köpüğü haritalar. Makro kompozitin zincir üstü ayağını besler.",
  "Token Unlocks": "Token Kilit Açılışları",
  "Scheduled token-unlock calendar (DeFiLlama). A large near-term insider/investor cliff on a tradeable token is supply that sellers front-run — flagged as a bearish supply-shock signal that self-proves via the forward-return gate.":
    "Planlı token kilit-açılış takvimi (DeFiLlama). İşlem yapılabilir bir tokende büyük ve yakın vadeli bir insider/yatırımcı uçurumu, satıcıların önden koştuğu bir arzdır — ileriye dönük getiri kapısıyla kendini kanıtlayan düşüş yönlü bir arz-şoku sinyali olarak işaretlenir.",
  "Technical Indicators": "Teknik Göstergeler",
  "Classic TA computed on Hyperliquid OHLC — RSI, MACD, moving averages (20/50/200 + 200-week), Stochastic, and Fibonacci levels, with a plain-language trend/momentum read. The indicator layer alongside our on-chain + macro data.":
    "Hyperliquid OHLC üzerinde hesaplanan klasik teknik analiz — RSI, MACD, hareketli ortalamalar (20/50/200 + 200-hafta), Stokastik ve Fibonacci seviyeleri, sade dilde bir trend/momentum okumasıyla. Zincir üstü + makro verilerimizin yanındaki gösterge katmanı.",
  "Cycle Position": "Döngü Konumu",
  "Bitcoin's 4-year-cycle context — months since the halving, cycle phase, and an MVRV valuation band (capitulation → euphoria) as the measured cycle locator. A historical-cadence cycle-low window is shown strictly as labelled context, never a forecast.":
    "Bitcoin'in 4 yıllık döngü bağlamı — halving'den bu yana geçen aylar, döngü fazı ve ölçülen döngü konumlayıcısı olarak bir MVRV değerleme bandı (kapitülasyon → öfori). Tarihsel-ritim bir döngü-dibi penceresi kesinlikle etiketli bağlam olarak gösterilir, asla bir tahmin olarak değil.",
  "TradFi & Liquidity": "TradFi ve Likidite",
  "Net liquidity (Fed balance sheet − Treasury cash − reverse repo, with fresh daily TGA), the dollar index, real yields, the curve, and CME BTC/ETH futures gaps — the macro backdrop that increasingly drives crypto.":
    "Net likidite (Fed bilançosu − Hazine nakdi − ters repo, taze günlük TGA ile), dolar endeksi, reel getiriler, eğri ve CME BTC/ETH vadeli işlem boşlukları — kriptoyu giderek daha fazla yönlendiren makro arka plan.",

  // ── 10 intelligence layers (desc) ──
  "Signal confidence degrades exponentially with age. A liquidation cascade from 4 hours ago is not the same signal as one from 4 minutes ago. Every score you receive reflects time.":
    "Sinyal güveni yaşla birlikte üstel olarak azalır. 4 saat önceki bir likidasyon kaskadı, 4 dakika öncekiyle aynı sinyal değildir. Aldığın her puan zamanı yansıtır.",
  "Source weights self-tune daily via EMA-smoothed win rates from tracked outcomes. Sources that predict correctly get boosted; sources that don't get dampened. Automatically.":
    "Kaynak ağırlıkları, izlenen sonuçlardan gelen EMA ile düzeltilmiş kazanma oranlarıyla her gün kendini ayarlar. Doğru tahmin eden kaynaklar güçlendirilir; etmeyenler zayıflatılır. Otomatik olarak.",
  "Rolling 1h / 4h / 24h signal momentum per asset. Narrative strength, velocity, and decay rate. Coordination detection: three independent source types firing the same direction in 5 minutes raises a manipulation flag.":
    "Varlık başına kayan 1s / 4s / 24s sinyal momentumu. Anlatı gücü, hızı ve sönüm oranı. Koordinasyon tespiti: 5 dakikada aynı yönde ateşleyen üç bağımsız kaynak türü bir manipülasyon uyarısı kaldırır.",
  "Social burst scoring, coordinated pump detection, and liquidation cascade identification. If engagement spikes 5× baseline or four unrelated sources fire the same coin in 10 minutes — you know.":
    "Sosyal patlama puanlaması, koordineli pump tespiti ve likidasyon kaskadı tanımlaması. Etkileşim taban çizgisinin 5× üzerine sıçrarsa ya da 10 dakikada ilgisiz dört kaynak aynı coini ateşlerse — bilirsin.",
  "Whale signals tagged with wallet archetype — CEX hot/cold, market maker, MEV bot, institutional, smart trader. 700+ verified labeled addresses across Ethereum, refreshed weekly from Etherscan label cloud and a live top-volume sweep. Stealth-accumulation flag fires when a tracked wallet receives a token in ≥3 fragmented buys totaling ≥$500K within 24h — catches quiet accumulation before it shows up in whale-alert feeds.":
    "Balina sinyalleri cüzdan arketipiyle etiketlenir — CEX hot/cold, piyasa yapıcı, MEV botu, kurumsal, akıllı trader. Ethereum genelinde 700'den fazla doğrulanmış etiketli adres, Etherscan etiket bulutundan ve canlı bir en-yüksek-hacim taramasından haftalık yenilenir. Gizli-birikim uyarısı, izlenen bir cüzdan 24 saat içinde toplamda ≥$500K tutan ≥3 parçalı alımda bir token aldığında ateşlenir — balina-uyarı kaynaklarında görünmeden önce sessiz birikimi yakalar.",
  "Every new token signal gets a contract risk pass — GoPlus honeypot check, mint function, sell tax, insider concentration, and DexScreener liquidity. Composite rug probability score. Cached 6 hours per token.":
    "Her yeni token sinyali bir kontrat risk taramasından geçer — GoPlus honeypot kontrolü, mint fonksiyonu, satış vergisi, insider yoğunlaşması ve DexScreener likiditesi. Bileşik rug olasılık puanı. Token başına 6 saat önbelleğe alınır.",
  "BGE-M3 embeddings on every signal, stored in a vector database. Find signals by meaning, not just keywords. Semantic deduplication suppresses near-duplicate events before they reach the feed.":
    "Her sinyalde bir vektör veritabanında saklanan BGE-M3 gömüleri. Sinyalleri yalnızca anahtar kelimeyle değil, anlamla bul. Anlamsal tekilleştirme, neredeyse yinelenen olayları kaynağa ulaşmadan önce bastırır.",
  "Four models score every directional signal: a logistic win-probability, q10/q50/q90 PnL quantiles, a Cox survival model for median hold time, and an HMM market-regime detector — all trained on tracked forward returns. Sub-10ms inference; degrade gracefully when a model is cold.":
    "Dört model her yönlü sinyali puanlar: lojistik bir kazanma olasılığı, q10/q50/q90 PnL çeyreklikleri, medyan tutma süresi için bir Cox sağkalım modeli ve bir HMM piyasa-rejimi dedektörü — hepsi izlenen ileriye dönük getirilerle eğitilir. 10ms'nin altında çıkarım; bir model soğukken zarifçe zayıflar.",
  "Each signal's (type × direction × regime) cell carries its empirical track record. When a cell is anti-predictive (n≥30, win rate ≤30%, avg PnL ≤−2%) we attach a labeled paired_inverse advisory — short-term reversal literature, never silently flipping your signal.":
    "Her sinyalin (tür × yön × rejim) hücresi kendi ampirik geçmiş performansını taşır. Bir hücre anti-tahminsel olduğunda (n≥30, kazanma oranı ≤30%, ort. PnL ≤−2%) etiketli bir paired_inverse uyarısı ekleriz — kısa vadeli dönüş literatürü, sinyalini asla sessizce ters çevirmeden.",
  "Confidence is mapped to empirical win rate per signal type, per raw-confidence bin. Win-rate is non-monotonic and type-dependent (higher confidence means higher win for sentiment, lower for whale) — a single curve can't capture that, so we bin it.":
    "Güven, sinyal türü başına ve ham-güven kutusu başına ampirik kazanma oranına eşlenir. Kazanma oranı monoton değildir ve türe bağlıdır (daha yüksek güven, sentiment için daha yüksek, balina için daha düşük kazanç demektir) — tek bir eğri bunu yakalayamaz, bu yüzden kutulara ayırırız.",

  // ── 03 · consolidation ──
  "03 · consolidation": "03 · birleştirme",
  "One API. Not twelve.": "Tek API. On iki değil.",
  "Others": "Diğerleri",
  "Whale data from one API. Funding from another. News from three more. L/S ratios, on-chain flows, options positioning, ETF flows, macro calendar — each a separate subscription, separate key, separate rate limit. You duct-tape them together and still do all the synthesis yourself.":
    "Balina verisi bir API'den. Funding bir başkasından. Haberler üç ayrısından. L/S oranları, zincir üstü akışlar, opsiyon konumlanması, ETF akışları, makro takvim — her biri ayrı bir abonelik, ayrı bir anahtar, ayrı bir hız limiti. Onları koli bandıyla bir araya getirir ve yine de tüm sentezi kendin yaparsın.",
  "All of it — one endpoint. Telegram, whales, funding, liquidations, on-chain, L/S ratios, options flow, ETF + stablecoin flows, news, security feeds, macro calendar — fused, corroborated, and scored. Plus narrative momentum, manipulation detection, wallet DNA, token trust scoring, and semantic signal search baked in. One API key. One bill. Raw classified intel your agent can filter, route, and act on directly.":
    "Hepsi — tek bir endpoint. Telegram, balinalar, funding, likidasyonlar, zincir üstü, L/S oranları, opsiyon akışı, ETF + stablecoin akışları, haberler, güvenlik kaynakları, makro takvim — birleştirilmiş, doğrulanmış ve puanlanmış. Ayrıca anlatı momentumu, manipülasyon tespiti, cüzdan DNA'sı, token güven puanlaması ve anlamsal sinyal araması yerleşik. Tek API anahtarı. Tek fatura. Ajanının doğrudan filtreleyip yönlendirip üzerine hareket edebileceği ham, sınıflandırılmış istihbarat.",

  // ── 04 · receipts — HONESTY / PROOF CLAIMS, review ──
  "04 · receipts": "04 · kanıtlar",
  "Our record is public. Theirs isn't.": "Bizim geçmişimiz herkese açık. Onlarınki değil.",
  "Most of the industry asks you to trust a backtest you can't audit. We measure every signal type on real prices, publish the result, and demote our own weak signals in the open. The edge here is honesty — not a bigger pile of data.":
    "Sektörün çoğu, denetleyemeyeceğin bir backtest'e güvenmeni ister. Biz her sinyal türünü gerçek fiyatlar üzerinde ölçer, sonucu yayımlar ve kendi zayıf sinyallerimizi açıkça düşürürüz. Buradaki avantaj dürüstlüktür — daha büyük bir veri yığını değil.",
  "Typical TG \"call\" group": "Tipik TG \"sinyal\" grubu",
  "Publishes live per-signal win-rate": "Sinyal başına canlı kazanma oranını yayımlar",
  "Yes —": "Evet —",
  "No": "Hayır",
  "Demotes its own weak signals publicly": "Kendi zayıf sinyallerini açıkça düşürür",
  "Yes": "Evet",
  "Never": "Asla",
  "Forward-return vs BTC baseline, with 95% CI": "BTC taban çizgisine karşı ileriye dönük getiri, %95 GA ile",
  "Price": "Fiyat",
  "\"lifetime $$$\"": "\"ömür boyu $$$\"",
  "Comparison reflects publicly published methodology as of mid-2026. We're thinner than the big dashboards on raw data volume — we compete on":
    "Karşılaştırma, 2026 ortası itibarıyla kamuya açık olarak yayımlanan metodolojiyi yansıtır. Ham veri hacminde büyük panolardan daha inceyiz — rekabet ettiğimiz alan",
  "edge quality you can audit": "denetleyebileceğin avantaj kalitesi",
  ", not data quantity. Not financial advice.": ", veri miktarı değil. Finansal tavsiye değildir.",

  // ── 05 · pricing ──
  "05 · pricing": "05 · fiyatlandırma",
  "Choose your tier.": "Katmanını seç.",
  "Start free. Upgrade to Pro for real-time signals.":
    "Ücretsiz başla. Gerçek zamanlı sinyaller için Pro'ya yükselt.",
  "Free": "Ücretsiz",
  "/mo": "/ay",
  "For evaluation and light usage.": "Değerlendirme ve hafif kullanım için.",
  "60 requests / minute": "60 istek / dakika",
  "15-minute signal delay": "15 dakikalık sinyal gecikmesi",
  "REST API only": "Yalnızca REST API",
  "Limited signal detail": "Sınırlı sinyal detayı",
  "Community support": "Topluluk desteği",
  "Start Free": "Ücretsiz Başla",
  "Popular": "Popüler",
  "For active traders. Over 30 data sources. One subscription.":
    "Aktif trader'lar için. 30'dan fazla veri kaynağı. Tek abonelik.",
  "600 requests / minute": "600 istek / dakika",
  "<strong>Real-time</strong> signals — no delay": "<strong>Gerçek zamanlı</strong> sinyaller — gecikme yok",
  "REST + WebSocket + Webhooks + <strong><a href=\"/docs/mcp\">MCP server</a></strong>":
    "REST + WebSocket + Webhooks + <strong><a href=\"/docs/mcp\">MCP sunucusu</a></strong>",
  "<strong>MCP endpoint</strong> — drop into Claude Desktop, Cursor, Cline (Bearer auth)":
    "<strong>MCP endpoint'i</strong> — Claude Desktop, Cursor, Cline'a ekle (Bearer auth)",
  "Full source &amp; channel detail": "Tam kaynak ve kanal detayı",
  "Whale tracking &amp; on-chain flows": "Balina takibi ve zincir üstü akışlar",
  "Corroboration scoring": "Doğrulama puanlaması",
  "<strong>Macro conditions</strong> — daily regime + calendar risk":
    "<strong>Makro koşullar</strong> — günlük rejim + takvim riski",
  "<strong>Narrative heatmap</strong> — 1h/4h/24h signal momentum per asset":
    "<strong>Anlatı ısı haritası</strong> — varlık başına 1s/4s/24s sinyal momentumu",
  "<strong>Semantic search</strong> — find similar signals by meaning":
    "<strong>Anlamsal arama</strong> — benzer sinyalleri anlama göre bul",
  "<strong>Trust scoring</strong> — contract risk + rug probability per token":
    "<strong>Güven puanlaması</strong> — token başına kontrat riski + rug olasılığı",
  "<strong>Manipulation detection</strong> — coordinated pump + social burst flags":
    "<strong>Manipülasyon tespiti</strong> — koordineli pump + sosyal patlama uyarıları",
  "<strong>Wallet DNA</strong> — smart money classification + stealth-accumulation flag":
    "<strong>Cüzdan DNA'sı</strong> — smart money sınıflandırması + gizli-birikim uyarısı",
  "<strong>Market-state</strong> — BTC/ETH consensus snapshot from proven voters":
    "<strong>Piyasa durumu</strong> — kanıtlanmış oy verenlerden BTC/ETH konsensüs anlık görüntüsü",
  "<strong>Liquidation map</strong> — real-position DEX liq levels (HL + GMX)":
    "<strong>Likidasyon haritası</strong> — gerçek-pozisyon DEX liq seviyeleri (HL + GMX)",
  "Email support": "E-posta desteği",
  "Get Pro": "Pro'yu Al",
  "Need more than your rate limit allows? Buy": "Hız limitinin izin verdiğinden fazlası mı lazım? Satın al:",
  "pay-per-call credits": "çağrı başına ödeme kredileri",
  "— one-time packs from $5, spent only on calls beyond your tier's included rate. Manage them in your":
    "— $5'ten başlayan tek seferlik paketler, yalnızca katmanının dahil oranını aşan çağrılarda harcanır. Bunları şuradan yönet:",
  "account": "hesabın",
  ". No account at all? Pay per request in USDC via": ". Hiç hesabın yok mu? USDC ile istek başına şu yolla öde:",
};
