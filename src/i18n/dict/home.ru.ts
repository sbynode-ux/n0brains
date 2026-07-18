/* Russian — home page. Keys are the English source string. Machine-drafted;
   prices/endpoints/tickers kept literal. Win-rate / proof / disclaimer lines
   and the reordered hero headline are flagged for human review. */
export const ru: Record<string, string> = {
  // ── SEO (title + meta description) ──
  "AI-Powered Crypto Signals API": "API криптосигналов на базе ИИ",
  "Cross-asset market intelligence — crypto AND the tokenized stock market (equities, indices, metals, commodities). Signals scored, then cross-corroborated against independent evidence classes (whale flow, funding, events, macro) before conviction. Market-wide risk-appetite, liquidity and flow reads answer where liquidity is, where funds are going, and whether the market is buying something other than crypto. REST, WebSocket, Webhooks, MCP, x402 — built for autonomous trading agents. Free tier — no credit card.":
    "Кросс-активная рыночная аналитика — крипто И токенизированный фондовый рынок (акции, индексы, металлы, товары). Сигналы оцениваются, затем перекрёстно подтверждаются по независимым классам доказательств (потоки китов, funding, события, макро) до вынесения решения. Общерыночные оценки аппетита к риску, ликвидности и потоков отвечают, где находится ликвидность, куда идут средства и покупает ли рынок что-то помимо крипто. REST, WebSocket, Webhooks, MCP, x402 — создано для автономных торговых агентов. Бесплатный тариф — без кредитной карты.",

  // ── hero ── (headline reordered — review)
  "Live Signal Feed Active": "Лента сигналов в реальном времени активна",
  "SIGNALS THAT": "СИГНАЛЫ,",
  "PROVE": "ДОКАЗЫВАЮЩИЕ",
  "THEIR EDGE": "СВОЁ ПРЕИМУЩЕСТВО",
  // hero lede — WIN-RATE / PROOF CLAIM, review
  "We measure every signal type against real post-signal price action and flag a call":
    "Мы измеряем каждый тип сигнала по реальному движению цены после сигнала и помечаем вызов как",
  "only when that type's": "только когда у этого типа",
  "live forward-return record beats BTC over the same window (excess return / alpha) AND is profitable on its own (95% CI lower bound above zero)":
    "живой рекорд форвардной доходности превосходит BTC за то же окно (избыточная доходность / альфа) И прибылен сам по себе (нижняя граница 95% ДИ выше нуля)",
  ", judged per direction — and we publicly demote our own weak signals. Every event is machine-classified, cross-corroborated, and scored with a":
    ", с оценкой по каждому направлению — и мы публично понижаем собственные слабые сигналы. Каждое событие машинно классифицируется, перекрёстно подтверждается и оценивается с",
  "calibrated": "калиброванной",
  "confidence, anchored by": "уверенностью, с опорой на",
  ", our daily BTC + ETH directional bias. Pipe it into your agent or alert system via":
    ", наш ежедневный направленный уклон по BTC + ETH. Передавайте это в вашего агента или систему оповещений через",
  ", or pay-per-call": ", или оплату за вызов",
  "Start Free →": "Начать бесплатно →",
  "See the proof ↗": "Смотреть доказательства ↗",
  "API Docs ↗": "Документация API ↗",
  "loading live win-rate…": "загрузка винрейта в реальном времени…",
  "live scoreboard →": "живое табло →",
  "scroll": "листайте",

  // ── ticker ──
  "10 intel layers": "10 слоёв аналитики",
  "live forward-returns": "живые форвардные доходности",

  // ── 01 · the pipeline ──
  "01 · the pipeline": "01 · конвейер",
  "How a signal is made": "Как создаётся сигнал",
  "30+ raw feeds in. Ten intelligence layers. One scored, corroborated signal out — delivered wherever your agent lives.":
    "30+ сырых лент на входе. Десять слоёв аналитики. Один оценённый, подтверждённый сигнал на выходе — доставляется туда, где живёт ваш агент.",
  "intake": "приём",
  "30+ feeds": "30+ лент",
  "Market Structure": "Структура рынка",
  "Capital Flows": "Потоки капитала",
  "News & Events": "Новости и события",
  "Macro & Regime": "Макро и режим",
  "Discovery": "Обнаружение",
  "whales · funding · liq map · options · order book":
    "киты · funding · карта ликв. · опционы · стакан",
  "on-chain · ETF · stablecoin mints": "on-chain · ETF · эмиссии стейблкоинов",
  "telegram · exploits · news · farcaster · X": "telegram · эксплойты · новости · farcaster · X",
  "macro pulse · fear & greed · policy": "macro pulse · страх и жадность · политика",
  "launchpads · DEX screener": "лаунчпады · DEX screener",
  "process": "обработка",
  "every event": "каждое событие",
  "n0brains core": "ядро n0brains",

  // engine / compute layer titles
  "Confidence Decay": "Затухание уверенности",
  "Source Accuracy Feedback": "Обратная связь по точности источников",
  "Narrative Heatmap": "Тепловая карта нарративов",
  "Manipulation Detection": "Обнаружение манипуляций",
  "Wallet DNA": "ДНК кошельков",
  "Trust & Scam Scoring": "Оценка доверия и мошенничества",
  "Semantic Signal Search": "Семантический поиск сигналов",
  "ML Outcome Models": "ML-модели исходов",
  "Historical Edge": "Историческое преимущество",
  "Binned Calibration": "Калибровка по корзинам",

  // output card labels (payload VALUES stay English)
  "output": "выход",
  "scored signal": "оценённый сигнал",
  "signal": "сигнал",
  "example payload": "пример полезной нагрузки",
  "type": "тип",
  "asset": "актив",
  "direction": "направление",
  "confidence": "уверенность",
  "conviction": "убеждённость",
  "corroboration": "подтверждение",

  // ── 02 · under the hood ──
  "02 · under the hood": "02 · под капотом",
  "Every source. Every layer.": "Каждый источник. Каждый слой.",
  "The full intake list and what each intelligence layer does — because auditable beats mysterious.":
    "Полный список входных данных и что делает каждый слой аналитики — потому что проверяемое лучше загадочного.",
  "All": "Все",
  "source feeds": "источников данных",
  "expand": "развернуть",
  "All 10 intelligence layers": "Все 10 слоёв аналитики",

  // source titles (Macro Pulse / Farcaster / DEX Screener kept literal)
  "Whale Tracking": "Отслеживание китов",
  "Funding & Liquidations": "Funding и ликвидации",
  "Deleverage Capitulation": "Капитуляция делевериджа",
  "DEX Liquidation Map": "Карта ликвидаций DEX",
  "On-Chain Flows": "On-chain потоки",
  "L/S Ratios": "L/S коэффициенты",
  "Options Flow": "Поток опционов",
  "ETF Flows": "Потоки ETF",
  "Stablecoin Flows": "Потоки стейблкоинов",
  "S/R Levels": "Уровни S/R",
  "Telegram Channels": "Каналы Telegram",
  "Security & Exploits": "Безопасность и эксплойты",
  "News & RSS": "Новости и RSS",
  "CMC & Macro": "CMC и макро",
  "Exchange Listings": "Листинги на биржах",
  "Policy & Regulatory": "Политика и регулирование",
  "X / Curated Accounts": "X / Отобранные аккаунты",
  "On-Chain Valuation": "On-chain оценка",
  "Token Unlocks": "Разблокировки токенов",
  "Technical Indicators": "Технические индикаторы",
  "Cycle Position": "Позиция в цикле",
  "TradFi & Liquidity": "TradFi и ликвидность",

  // source descriptions
  "Daily BTC + ETH directional bias. A deterministic macro composite — net liquidity, dollar (DXY), real yields, the curve, VIX (FRED data) — anchors the regime, synthesised with the CPI/FOMC/NFP/PPI calendar and 7d intel signals: regime call, conviction, key levels, invalidation. Sunday weekly 30d deep-dive.":
    "Ежедневный направленный уклон по BTC + ETH. Детерминированная макрокомпозиция — чистая ликвидность, доллар (DXY), реальные доходности, кривая, VIX (данные FRED) — закрепляет режим, синтезируется с календарём CPI/FOMC/NFP/PPI и 7-дневными сигналами аналитики: оценка режима, убеждённость, ключевые уровни, инвалидация. Еженедельный 30-дневный глубокий разбор по воскресеньям.",
  "Hyperliquid leaderboard consensus. When top traders pile into the same side, we detect it — and like every signal here, its live track record is published on /proof.":
    "Консенсус лидерборда Hyperliquid. Когда топовые трейдеры набиваются на одну сторону, мы это обнаруживаем — и, как у каждого сигнала здесь, его живой послужной список публикуется на /proof.",
  "Binance funding extremes and real-time liquidation cascades via WebSocket, plus multi-venue open-interest momentum from Coinglass snapshots. Timing signal for reversals and continuations.":
    "Экстремумы funding на Binance и каскады ликвидаций в реальном времени через WebSocket, плюс мультивенюшный моментум открытого интереса из снимков Coinglass. Сигнал тайминга для разворотов и продолжений.",
  "A mechanical, non-directional edge: when price and open interest fall together, positions are being force-unwound — not informed selling. The fire-sale exhausts and price bounces. We measure the price + OI deltas (data most feeds collect but never combine) and flag the capitulation low. Validated on our own forward returns, not folklore — track record on /proof.":
    "Механическое, ненаправленное преимущество: когда цена и открытый интерес падают вместе, позиции принудительно закрываются — это не осознанная продажа. Распродажа выдыхается, и цена отскакивает. Мы измеряем дельты цены + OI (данные, которые собирает большинство лент, но никогда не совмещает) и помечаем дно капитуляции. Проверено на наших собственных форвардных доходностях, а не на фольклоре — послужной список на /proof.",
  "Our own liquidation map built from real on-chain DEX perp positions (Hyperliquid + GMX) — exact liquidation prices, not estimates. Clusters near price mark magnet / cascade levels; we use them to place stops and targets, not to pick a direction (liquidity predicts volatility, not which way).":
    "Наша собственная карта ликвидаций, построенная из реальных on-chain перп-позиций на DEX (Hyperliquid + GMX) — точные цены ликвидации, а не оценки. Кластеры возле цены отмечают уровни-магниты / каскады; мы используем их, чтобы ставить стопы и цели, а не выбирать направление (ликвидность предсказывает волатильность, а не то, куда пойдёт цена).",
  "Large ETH/BTC transfers to/from exchanges via Alchemy + mempool.space WebSockets. Positioning context and capital-concentration tracking — directional whale reads come from Hyperliquid leaderboard positions.":
    "Крупные переводы ETH/BTC на биржи и с бирж через WebSocket Alchemy + mempool.space. Контекст позиционирования и отслеживание концентрации капитала — направленные прочтения по китам берутся из позиций лидерборда Hyperliquid.",
  "Bybit, Binance, and Gate.io positioning data. Detect extreme crowding before the reversal.":
    "Данные позиционирования Bybit, Binance и Gate.io. Обнаруживайте экстремальную скученность перед разворотом.",
  "Deribit options positioning — put/call open-interest ratio, max-pain magnets, and large smart-money block trades on BTC + ETH. Surfaces institutional positioning the crowd-sentiment feeds miss.":
    "Позиционирование по опционам Deribit — соотношение put/call открытого интереса, магниты max-pain и крупные блочные сделки умных денег по BTC + ETH. Выявляет институциональное позиционирование, которое пропускают ленты настроений толпы.",
  "US spot BTC + ETH + SOL ETF daily net flows (SoSoValue). Institutional capital context — we publish it as context, not a directional call: our own backtest found ETF net flow is a coincident/lagging demand print, not a leading signal (SOL inflows were even contrarian).":
    "Ежедневные чистые потоки спотовых BTC + ETH + SOL ETF в США (SoSoValue). Контекст институционального капитала — мы публикуем это как контекст, а не как направленный вызов: наш собственный бэктест показал, что чистый поток ETF — это совпадающий/запаздывающий индикатор спроса, а не опережающий сигнал (притоки SOL были даже контртрендовыми).",
  "Large USDC mints and USDT Treasury deployments, plus net stablecoin inflow to exchange wallets — fresh dollar liquidity entering crypto and dry powder staged on exchanges (bullish) versus redemptions leaving (bearish). The macro dry-powder signal.":
    "Крупные эмиссии USDC и развёртывания казначейства USDT, плюс чистый приток стейблкоинов в кошельки бирж — свежая долларовая ликвидность, входящая в крипто, и сухой порох, подготовленный на биржах (бычье), против уходящих погашений (медвежье). Макросигнал сухого пороха.",
  "Real-time support/resistance from the Hyperliquid order book — treated as zones, not lines, each with its price band. Tracks polarity flips (broken support becomes resistance). Shapes entries and stops; rejects trades near adverse levels.":
    "Поддержка/сопротивление в реальном времени из стакана Hyperliquid — рассматриваются как зоны, а не линии, каждая со своим ценовым диапазоном. Отслеживает смену полярности (пробитая поддержка становится сопротивлением). Формирует входы и стопы; отклоняет сделки вблизи неблагоприятных уровней.",
  "WatcherGuru, ZachXBT Investigations, and more. Fastest source for hacks and breaking events — high speed, needs corroboration.":
    "WatcherGuru, ZachXBT Investigations и другие. Самый быстрый источник по хакам и срочным событиям — высокая скорость, требует подтверждения.",
  "Dedicated exploit feed — DefiLlama hacks database (amount, technique, chain) plus rekt.news post-mortems. Structured, first-mover coverage of protocol drains and bridge hacks.":
    "Выделенная лента эксплойтов — база данных хаков DefiLlama (сумма, техника, сеть) плюс разборы rekt.news. Структурированное освещение первым осушений протоколов и хаков мостов.",
  "CoinDesk, Decrypt, CoinTelegraph, Reddit, Tree of Alpha fast-news, and Trump's Truth Social. Keyword-filtered — broader context, slower than the live feeds.":
    "CoinDesk, Decrypt, CoinTelegraph, Reddit, быстрые новости Tree of Alpha и Truth Social Трампа. Фильтрация по ключевым словам — более широкий контекст, медленнее живых лент.",
  "Crypto-native social monitoring on Farcaster channels — our highest trades-per-signal social source in the live source audit.":
    "Крипто-нативный социальный мониторинг каналов Farcaster — наш социальный источник с наибольшим числом сделок на сигнал в аудите живых источников.",
  "CoinMarketCap price alerts, trending coins, Fear & Greed Index, DeFi TVL shifts. Regime context rather than a direct trade trigger.":
    "Ценовые оповещения CoinMarketCap, трендовые монеты, индекс страха и жадности, сдвиги TVL в DeFi. Контекст режима, а не прямой триггер сделки.",
  "Real CEX listing catalysts — Binance & Bybit launchpads plus new spot-market detection on Binance, Upbit (Korea / kimchi-premium), and OKX. Tracks coins getting actual exchange access, not memecoin launch spam.":
    "Реальные катализаторы листингов на CEX — лаунчпады Binance и Bybit плюс обнаружение новых спотовых рынков на Binance, Upbit (Корея / kimchi-премия) и OKX. Отслеживает монеты, получающие реальный доступ к биржам, а не спам запусков мемкоинов.",
  "Official government and regulatory RSS — SEC, Treasury, congressional, and agency sources monitored for crypto-relevant policy moves — plus congressional stock-trade disclosures. No paid APIs.":
    "Официальный государственный и регуляторный RSS — SEC, Минфин, конгресс и агентства, отслеживаемые на предмет значимых для крипто политических шагов — плюс раскрытия биржевых сделок конгрессменов. Без платных API.",
  "DexScreener trending and boosted-token feed — early on-chain discovery and token activity. Discovery context, non-directional.":
    "Лента трендовых и продвигаемых токенов DexScreener — раннее on-chain обнаружение и активность токенов. Контекст обнаружения, ненаправленный.",
  "A budget-capped X (Twitter) feed of research-vetted directional analysts and on-chain trackers — Arthur Hayes, Ki Young Ju, Pentoshi, EmberCN, Lookonchain, WuBlockchain, and more — plus official exchange listing and hack feeds.":
    "Ограниченная по бюджету лента X (Twitter) из проверенных исследованием направленных аналитиков и on-chain трекеров — Arthur Hayes, Ki Young Ju, Pentoshi, EmberCN, Lookonchain, WuBlockchain и другие — плюс официальные ленты листингов бирж и хаков.",
  "MVRV, exchange in/outflows + reserves, and active addresses from Coin Metrics (BTC + ETH). Net outflow / falling exchange reserves = self-custody accumulation; MVRV maps cycle profit vs froth. Feeds the macro composite's on-chain leg.":
    "MVRV, притоки/оттоки бирж + резервы и активные адреса из Coin Metrics (BTC + ETH). Чистый отток / снижение резервов бирж = накопление в самокастоди; MVRV отображает прибыль цикла против пены. Питает on-chain ногу макрокомпозиции.",
  "Scheduled token-unlock calendar (DeFiLlama). A large near-term insider/investor cliff on a tradeable token is supply that sellers front-run — flagged as a bearish supply-shock signal that self-proves via the forward-return gate.":
    "Календарь запланированных разблокировок токенов (DeFiLlama). Крупный близкий обрыв инсайдеров/инвесторов по торгуемому токену — это предложение, которое продавцы опережают — помечается как медвежий сигнал шока предложения, самоподтверждающийся через шлюз форвардной доходности.",
  "Classic TA computed on Hyperliquid OHLC — RSI, MACD, moving averages (20/50/200 + 200-week), Stochastic, and Fibonacci levels, with a plain-language trend/momentum read. The indicator layer alongside our on-chain + macro data.":
    "Классический ТА, рассчитанный на OHLC Hyperliquid — RSI, MACD, скользящие средние (20/50/200 + 200-недельная), стохастик и уровни Фибоначчи, с прочтением тренда/моментума простым языком. Слой индикаторов рядом с нашими on-chain + макро данными.",
  "Bitcoin's 4-year-cycle context — months since the halving, cycle phase, and an MVRV valuation band (capitulation → euphoria) as the measured cycle locator. A historical-cadence cycle-low window is shown strictly as labelled context, never a forecast.":
    "Контекст 4-летнего цикла Bitcoin — месяцы с халвинга, фаза цикла и полоса оценки MVRV (капитуляция → эйфория) как измеренный локатор цикла. Окно дна цикла по исторической каденции показывается строго как помеченный контекст, никогда как прогноз.",
  "Net liquidity (Fed balance sheet − Treasury cash − reverse repo, with fresh daily TGA), the dollar index, real yields, the curve, and CME BTC/ETH futures gaps — the macro backdrop that increasingly drives crypto.":
    "Чистая ликвидность (баланс ФРС − наличные Казначейства − обратное репо, со свежим ежедневным TGA), индекс доллара, реальные доходности, кривая и гэпы фьючерсов CME BTC/ETH — макрофон, который всё больше движет крипто.",

  // compute layer descriptions
  "Signal confidence degrades exponentially with age. A liquidation cascade from 4 hours ago is not the same signal as one from 4 minutes ago. Every score you receive reflects time.":
    "Уверенность сигнала экспоненциально снижается с возрастом. Каскад ликвидаций 4-часовой давности — не тот же сигнал, что 4-минутной. Каждая оценка, которую вы получаете, отражает время.",
  "Source weights self-tune daily via EMA-smoothed win rates from tracked outcomes. Sources that predict correctly get boosted; sources that don't get dampened. Automatically.":
    "Веса источников ежедневно самонастраиваются через сглаженные по EMA винрейты из отслеживаемых исходов. Источники, предсказывающие верно, усиливаются; те, что нет — приглушаются. Автоматически.",
  "Rolling 1h / 4h / 24h signal momentum per asset. Narrative strength, velocity, and decay rate. Coordination detection: three independent source types firing the same direction in 5 minutes raises a manipulation flag.":
    "Скользящий моментум сигналов 1ч / 4ч / 24ч по активу. Сила, скорость и темп затухания нарратива. Обнаружение координации: три независимых типа источников, срабатывающих в одном направлении за 5 минут, поднимают флаг манипуляции.",
  "Social burst scoring, coordinated pump detection, and liquidation cascade identification. If engagement spikes 5× baseline or four unrelated sources fire the same coin in 10 minutes — you know.":
    "Оценка социальных всплесков, обнаружение скоординированных пампов и идентификация каскадов ликвидаций. Если вовлечённость подскакивает в 5× от базовой или четыре несвязанных источника срабатывают по одной монете за 10 минут — вы знаете.",
  "Whale signals tagged with wallet archetype — CEX hot/cold, market maker, MEV bot, institutional, smart trader. 700+ verified labeled addresses across Ethereum, refreshed weekly from Etherscan label cloud and a live top-volume sweep. Stealth-accumulation flag fires when a tracked wallet receives a token in ≥3 fragmented buys totaling ≥$500K within 24h — catches quiet accumulation before it shows up in whale-alert feeds.":
    "Сигналы китов помечены архетипом кошелька — CEX горячий/холодный, маркет-мейкер, MEV-бот, институциональный, умный трейдер. 700+ проверенных помеченных адресов по Ethereum, обновляются еженедельно из облака меток Etherscan и живого прохода по топовому объёму. Флаг скрытого накопления срабатывает, когда отслеживаемый кошелёк получает токен в ≥3 фрагментированных покупках на сумму ≥$500K в течение 24ч — ловит тихое накопление до того, как оно проявится в лентах оповещений о китах.",
  "Every new token signal gets a contract risk pass — GoPlus honeypot check, mint function, sell tax, insider concentration, and DexScreener liquidity. Composite rug probability score. Cached 6 hours per token.":
    "Каждый сигнал нового токена проходит проверку риска контракта — проверка honeypot GoPlus, функция mint, налог на продажу, концентрация инсайдеров и ликвидность DexScreener. Композитная оценка вероятности rug. Кэшируется 6 часов на токен.",
  "BGE-M3 embeddings on every signal, stored in a vector database. Find signals by meaning, not just keywords. Semantic deduplication suppresses near-duplicate events before they reach the feed.":
    "Эмбеддинги BGE-M3 на каждом сигнале, хранящиеся в векторной базе данных. Находите сигналы по смыслу, а не только по ключевым словам. Семантическая дедупликация подавляет почти дублирующиеся события до того, как они попадут в ленту.",
  "Four models score every directional signal: a logistic win-probability, q10/q50/q90 PnL quantiles, a Cox survival model for median hold time, and an HMM market-regime detector — all trained on tracked forward returns. Sub-10ms inference; degrade gracefully when a model is cold.":
    "Четыре модели оценивают каждый направленный сигнал: логистическая вероятность выигрыша, квантили PnL q10/q50/q90, модель выживания Кокса для медианного времени удержания и детектор рыночного режима HMM — все обучены на отслеживаемых форвардных доходностях. Инференс менее 10мс; изящно деградируют, когда модель холодная.",
  "Each signal's (type × direction × regime) cell carries its empirical track record. When a cell is anti-predictive (n≥30, win rate ≤30%, avg PnL ≤−2%) we attach a labeled paired_inverse advisory — short-term reversal literature, never silently flipping your signal.":
    "Ячейка (тип × направление × режим) каждого сигнала несёт свой эмпирический послужной список. Когда ячейка антипредиктивна (n≥30, винрейт ≤30%, средний PnL ≤−2%), мы прикрепляем помеченный совет paired_inverse — литература о краткосрочных разворотах, никогда молча не переворачивая ваш сигнал.",
  "Confidence is mapped to empirical win rate per signal type, per raw-confidence bin. Win-rate is non-monotonic and type-dependent (higher confidence means higher win for sentiment, lower for whale) — a single curve can't capture that, so we bin it.":
    "Уверенность сопоставляется с эмпирическим винрейтом по типу сигнала, по корзине сырой уверенности. Винрейт немонотонен и зависит от типа (более высокая уверенность означает более высокий выигрыш для sentiment, более низкий для whale) — одна кривая не может это уловить, поэтому мы разбиваем на корзины.",

  // ── 03 · consolidation ──
  "03 · consolidation": "03 · консолидация",
  "One API. Not twelve.": "Один API. Не двенадцать.",
  "Others": "Другие",
  "Whale data from one API. Funding from another. News from three more. L/S ratios, on-chain flows, options positioning, ETF flows, macro calendar — each a separate subscription, separate key, separate rate limit. You duct-tape them together and still do all the synthesis yourself.":
    "Данные по китам из одного API. Funding из другого. Новости ещё из трёх. L/S коэффициенты, on-chain потоки, позиционирование по опционам, потоки ETF, макрокалендарь — каждый отдельная подписка, отдельный ключ, отдельный лимит запросов. Вы скотчем скрепляете их вместе и всё равно сами делаете весь синтез.",
  "All of it — one endpoint. Telegram, whales, funding, liquidations, on-chain, L/S ratios, options flow, ETF + stablecoin flows, news, security feeds, macro calendar — fused, corroborated, and scored. Plus narrative momentum, manipulation detection, wallet DNA, token trust scoring, and semantic signal search baked in. One API key. One bill. Raw classified intel your agent can filter, route, and act on directly.":
    "Всё это — один endpoint. Telegram, киты, funding, ликвидации, on-chain, L/S коэффициенты, поток опционов, потоки ETF + стейблкоинов, новости, ленты безопасности, макрокалендарь — сплавлено, подтверждено и оценено. Плюс встроенные моментум нарративов, обнаружение манипуляций, ДНК кошельков, оценка доверия токенов и семантический поиск сигналов. Один API-ключ. Один счёт. Сырая классифицированная аналитика, которую ваш агент может фильтровать, маршрутизировать и на которой напрямую действовать.",

  // ── 04 · receipts ── (HONESTY / PROOF — review)
  "04 · receipts": "04 · чеки",
  "Our record is public. Theirs isn't.": "Наш послужной список публичен. Их — нет.",
  "Most of the industry asks you to trust a backtest you can't audit. We measure every signal type on real prices, publish the result, and demote our own weak signals in the open. The edge here is honesty — not a bigger pile of data.":
    "Большая часть отрасли просит вас довериться бэктесту, который вы не можете проверить. Мы измеряем каждый тип сигнала на реальных ценах, публикуем результат и открыто понижаем собственные слабые сигналы. Преимущество здесь — честность, а не куча данных побольше.",
  'Typical TG "call" group': "Типичная TG-группа «сигналов»",
  "Publishes live per-signal win-rate": "Публикует живой винрейт по каждому сигналу",
  "Yes —": "Да —",
  "No": "Нет",
  "Demotes its own weak signals publicly": "Публично понижает собственные слабые сигналы",
  "Yes": "Да",
  "Never": "Никогда",
  "Forward-return vs BTC baseline, with 95% CI": "Форвардная доходность против базы BTC, с 95% ДИ",
  "Price": "Цена",
  '"lifetime $$$"': "«пожизненно $$$»",
  "Comparison reflects publicly published methodology as of mid-2026. We're thinner than the big dashboards on raw data volume — we compete on":
    "Сравнение отражает публично опубликованную методологию по состоянию на середину 2026 года. Мы тоньше больших дашбордов по объёму сырых данных — мы конкурируем в",
  "edge quality you can audit": "качестве преимущества, которое вы можете проверить",
  ", not data quantity. Not financial advice.": ", а не в количестве данных. Не является финансовым советом.",

  // ── 05 · pricing ──
  "05 · pricing": "05 · цены",
  "Choose your tier.": "Выберите тариф.",
  "Start free. Upgrade to Pro for real-time signals.":
    "Начните бесплатно. Перейдите на Pro для сигналов в реальном времени.",
  "Free": "Бесплатно",
  "For evaluation and light usage.": "Для оценки и лёгкого использования.",
  "Start Free": "Начать бесплатно",
  "Popular": "Популярно",
  "For active traders. Over 30 data sources. One subscription.":
    "Для активных трейдеров. Более 30 источников данных. Одна подписка.",
  "Get Pro": "Получить Pro",
  "Need more than your rate limit allows? Buy":
    "Нужно больше, чем позволяет ваш лимит запросов? Купите",
  "pay-per-call credits": "кредиты с оплатой за вызов",
  "— one-time packs from $5, spent only on calls beyond your tier's included rate. Manage them in your":
    "— разовые пакеты от $5, тратятся только на вызовы сверх включённой в ваш тариф нормы. Управляйте ими в вашем",
  "account": "аккаунте",
  ". No account at all? Pay per request in USDC via":
    ". Совсем нет аккаунта? Платите за запрос в USDC через",

  // pro / free feature bullets (rendered via set:html)
  "600 requests / minute": "600 запросов / минуту",
  "<strong>Real-time</strong> signals — no delay": "Сигналы <strong>в реальном времени</strong> — без задержки",
  'REST + WebSocket + Webhooks + <strong><a href="/docs/mcp">MCP server</a></strong>':
    'REST + WebSocket + Webhooks + <strong><a href="/docs/mcp">MCP-сервер</a></strong>',
  "<strong>MCP endpoint</strong> — drop into Claude Desktop, Cursor, Cline (19 tools, Bearer auth)":
    "<strong>MCP endpoint</strong> — подключите к Claude Desktop, Cursor, Cline (19 инструментов, авторизация Bearer)",
  "Full source &amp; channel detail": "Полная детализация источника и канала",
  "Whale tracking &amp; on-chain flows": "Отслеживание китов и on-chain потоки",
  "Corroboration scoring": "Оценка подтверждения",
  "<strong>Macro Pulse</strong> — daily + weekly BTC/ETH bias":
    "<strong>Macro Pulse</strong> — ежедневный + еженедельный уклон BTC/ETH",
  "<strong>Narrative heatmap</strong> — 1h/4h/24h signal momentum per asset":
    "<strong>Тепловая карта нарративов</strong> — моментум сигналов 1ч/4ч/24ч по активу",
  "<strong>Semantic search</strong> — find similar signals by meaning":
    "<strong>Семантический поиск</strong> — находите похожие сигналы по смыслу",
  "<strong>Trust scoring</strong> — contract risk + rug probability per token":
    "<strong>Оценка доверия</strong> — риск контракта + вероятность rug по токену",
  "<strong>Manipulation detection</strong> — coordinated pump + social burst flags":
    "<strong>Обнаружение манипуляций</strong> — флаги скоординированного пампа + социального всплеска",
  "<strong>Wallet DNA</strong> — smart money classification + stealth-accumulation flag":
    "<strong>ДНК кошельков</strong> — классификация умных денег + флаг скрытого накопления",
  "<strong>Market-state</strong> — BTC/ETH consensus snapshot from proven voters":
    "<strong>Состояние рынка</strong> — снимок консенсуса BTC/ETH от проверенных голосующих",
  "<strong>Liquidation map</strong> — real-position DEX liq levels (HL + GMX)":
    "<strong>Карта ликвидаций</strong> — уровни ликв. DEX по реальным позициям (HL + GMX)",
  "Email support": "Поддержка по email",
  "60 requests / minute": "60 запросов / минуту",
  "15-minute signal delay": "Задержка сигнала 15 минут",
  "REST API only": "Только REST API",
  "Limited signal detail": "Ограниченная детализация сигнала",
  "Community support": "Поддержка сообщества",

  // ── client-injected (proof strip) ──
  "live win-rate scoreboard": "живое табло винрейта",
  "signal type forward-return proven": "тип сигнала подтверждён форвардной доходностью",
  "signal types forward-return proven": "типов сигналов подтверждено форвардной доходностью",
};
