/* Russian — home page. Keys are the English source string. Machine-drafted;
   prices/endpoints/tickers/brand names kept literal. Marketing, win-rate/proof
   and disclaimer lines are flagged for human review. */
export const ru: Record<string, string> = {
  // ── SEO (title + meta description) ──
  "AI-Powered Crypto Signals API": "API криптосигналов на базе ИИ",
  "Cross-asset market intelligence — crypto AND the tokenized stock market (equities, indices, metals, commodities). Signals scored, then cross-corroborated against independent evidence classes (whale flow, funding, events, macro) before conviction. Market-wide risk-appetite, liquidity and flow reads answer where liquidity is, where funds are going, and whether the market is buying something other than crypto. REST, WebSocket, Webhooks, MCP, x402 — built for autonomous trading agents. Free tier — no credit card.":
    "Кросс-активная рыночная аналитика — крипто И токенизированный фондовый рынок (акции, индексы, металлы, товары). Сигналы оцениваются, затем перекрёстно подтверждаются по независимым классам доказательств (потоки китов, funding, события, макро) до вынесения решения. Общерыночные оценки аппетита к риску, ликвидности и потоков отвечают, где находится ликвидность, куда идут средства и покупает ли рынок что-то помимо крипто. REST, WebSocket, Webhooks, MCP, x402 — создано для автономных торговых агентов. Бесплатный тариф — без кредитной карты.",

  // ── hero — CRAFTED, review ──
  "Pre-trade conditions engine live": "Движок предторговых условий в работе",
  "CHECK THE TRADE": "ПРОВЕРЬ СДЕЛКУ",
  "BEFORE": "ПРЕЖДЕ ЧЕМ",
  "YOU TAKE IT": "ОТКРЫТЬ ЕЁ",
  "Submit the trade you are considering. n0brains checks positioning crowding, scheduled event risk, liquidity, volatility, market structure, stop geometry and conflicts across the live evidence stack, then returns a graded conditions assessment with explicit flags and falsifiers. It is context for your decision, not a recommendation or an automated trade instruction.":
    "Отправьте сделку, которую рассматриваете. n0brains проверяет скученность позиционирования, риск запланированных событий, ликвидность, волатильность, структуру рынка, геометрию стопа и противоречия по всему стеку живых доказательств, а затем возвращает оценку условий с явными флагами и фальсификаторами. Это контекст для вашего решения, а не рекомендация и не инструкция для автоматической сделки.",
  "Check a trade →": "Проверить сделку →",
  "Create free account ↗": "Создать бесплатный аккаунт ↗",
  "API Docs ↗": "Документация API ↗",
  "scroll": "листайте",

  // ── 01 · pipeline ──
  "01 · the pipeline": "01 · конвейер",
  "How a signal is made": "Как рождается сигнал",
  "30+ raw feeds in. Ten intelligence layers. One scored, corroborated signal out — delivered wherever your agent lives.":
    "Более 30 сырых источников на входе. Десять слоёв аналитики. Один оценённый, подтверждённый сигнал на выходе — доставленный туда, где живёт ваш агент.",
  "intake": "приём",
  "30+ feeds": "30+ источников",
  "Market Structure": "Структура рынка",
  "Capital Flows": "Потоки капитала",
  "News & Events": "Новости и события",
  "Macro & Regime": "Макро и режим",
  "Discovery": "Обнаружение",
  "whales · funding · liq map · options · order book":
    "киты · funding · карта ликв · опционы · стакан",
  "on-chain · ETF · stablecoin mints": "он-чейн · ETF · эмиссии стейблкоинов",
  "telegram · exploits · news · farcaster · X": "telegram · эксплойты · новости · farcaster · X",
  "macro pulse · fear & greed · policy": "macro pulse · страх и жадность · политика",
  "launchpads · DEX screener": "лаунчпады · DEX screener",
  "process": "обработка",
  "every event": "каждое событие",
  "n0brains core": "ядро n0brains",
  "Confidence Decay": "Затухание уверенности",
  "Source Accuracy Feedback": "Обратная связь по точности источников",
  "Narrative Heatmap": "Тепловая карта нарративов",
  "Manipulation Detection": "Обнаружение манипуляций",
  "Wallet DNA": "ДНК кошельков",
  "Trust & Scam Scoring": "Оценка доверия и мошенничества",
  "Semantic Signal Search": "Семантический поиск сигналов",
  "ML Outcome Models": "ML-модели исходов",
  "Historical Edge": "Историческое преимущество",
  "Binned Calibration": "Калибровка по бинам",
  "output": "вывод",
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
    "Полный список приёма и что делает каждый слой аналитики — потому что проверяемое лучше загадочного.",
  "All": "Все",
  "source feeds": "источников данных",
  "expand": "развернуть",
  "All 10 intelligence layers": "Все 10 слоёв аналитики",

  // ── source feeds (title + desc) ──
  "Whale Tracking": "Отслеживание китов",
  "Hyperliquid leaderboard consensus. When top traders pile into the same side, we detect it — and like every signal here, its live track record is published on /proof.":
    "Консенсус таблицы лидеров Hyperliquid. Когда топ-трейдеры набиваются на одну сторону, мы это обнаруживаем — и, как у каждого сигнала здесь, его живой послужной список публикуется на /proof.",
  "Funding & Liquidations": "Funding и ликвидации",
  "Multi-venue funding and open-interest positioning plus OKX public liquidation prints. Timing context for reversals and continuations.":
    "Funding по нескольким площадкам и позиционирование по открытому интересу плюс публичные записи ликвидаций OKX. Тайминг-контекст для разворотов и продолжений.",
  "Deleverage Capitulation": "Капитуляция делевериджа",
  "A mechanical, non-directional edge: when price and open interest fall together, positions are being force-unwound — not informed selling. The fire-sale exhausts and price bounces. We measure the price + OI deltas (data most feeds collect but never combine) and flag the capitulation low. Validated on our own forward returns, not folklore — track record on /proof.":
    "Механическое, ненаправленное преимущество: когда цена и открытый интерес падают вместе, позиции принудительно закрываются — это не осознанная продажа. Распродажа выдыхается, и цена отскакивает. Мы измеряем дельты цены + OI (данные, которые собирает большинство источников, но никогда не сочетает) и отмечаем минимум капитуляции. Проверено на наших собственных форвардных доходностях, а не на фольклоре — послужной список на /proof.",
  "DEX Liquidation Map": "Карта ликвидаций DEX",
  "Our own liquidation map built from real on-chain DEX perp positions (Hyperliquid + GMX) — exact liquidation prices, not estimates. Clusters near price mark magnet / cascade levels; we use them to place stops and targets, not to pick a direction (liquidity predicts volatility, not which way).":
    "Наша собственная карта ликвидаций, построенная на реальных он-чейн перп-позициях DEX (Hyperliquid + GMX) — точные цены ликвидации, а не оценки. Кластеры около цены отмечают уровни-магниты / каскадов; мы используем их для расстановки стопов и целей, а не для выбора направления (ликвидность предсказывает волатильность, а не сторону).",
  "On-Chain Flows": "Он-чейн потоки",
  "Large ETH exchange-wallet transfers via Alchemy, alongside live whale-positioning sources. Positioning context and capital-concentration tracking — directional whale reads come from Hyperliquid leaderboard positions.":
    "Крупные переводы ETH на кошельки бирж через Alchemy, наряду с живыми источниками позиционирования китов. Контекст позиционирования и отслеживание концентрации капитала — направленные оценки китов берутся из позиций таблицы лидеров Hyperliquid.",
  "L/S Ratios": "L/S-соотношения",
  "Bybit, Binance, and Gate.io positioning data. Detect extreme crowding before the reversal.":
    "Данные позиционирования Bybit, Binance и Gate.io. Обнаруживайте экстремальную скученность до разворота.",
  "Options Flow": "Поток опционов",
  "Deribit options positioning — put/call open-interest ratio, max-pain magnets, and large smart-money block trades on BTC + ETH. Surfaces institutional positioning the crowd-sentiment feeds miss.":
    "Позиционирование опционов Deribit — соотношение put/call по открытому интересу, магниты max-pain и крупные блочные сделки smart-money по BTC + ETH. Выявляет институциональное позиционирование, которое пропускают источники настроений толпы.",
  "ETF Flows": "Потоки ETF",
  "US spot BTC + ETH + SOL ETF daily net flows (SoSoValue). Institutional capital context — we publish it as context, not a directional call: our own backtest found ETF net flow is a coincident/lagging demand print, not a leading signal (SOL inflows were even contrarian).":
    "Ежедневные чистые потоки спотовых ETF BTC + ETH + SOL в США (SoSoValue). Контекст институционального капитала — мы публикуем это как контекст, а не как направленный сигнал: наш собственный бэктест показал, что чистый поток ETF — это совпадающий/запаздывающий индикатор спроса, а не опережающий сигнал (притоки в SOL были даже контрарными).",
  "Stablecoin Flows": "Потоки стейблкоинов",
  "Large USDC mints and USDT Treasury deployments, plus net stablecoin inflow to exchange wallets — fresh dollar liquidity entering crypto and dry powder staged on exchanges (bullish) versus redemptions leaving (bearish). The macro dry-powder signal.":
    "Крупные эмиссии USDC и казначейские развёртывания USDT, плюс чистый приток стейблкоинов на кошельки бирж — свежая долларовая ликвидность, заходящая в крипто, и сухой порох, подготовленный на биржах (бычье), против уходящих погашений (медвежье). Макросигнал сухого пороха.",
  "S/R Levels": "Уровни S/R",
  "Real-time support/resistance from the Hyperliquid order book — treated as zones, not lines, each with its price band. Tracks polarity flips (broken support becomes resistance). Shapes entries and stops; rejects trades near adverse levels.":
    "Поддержка/сопротивление в реальном времени из стакана Hyperliquid — рассматриваются как зоны, а не линии, каждая со своей ценовой полосой. Отслеживает смену полярности (пробитая поддержка становится сопротивлением). Формирует входы и стопы; отклоняет сделки вблизи неблагоприятных уровней.",
  "Telegram Channels": "Каналы Telegram",
  "WatcherGuru, ZachXBT Investigations, and more. Fastest source for hacks and breaking events — high speed, needs corroboration.":
    "WatcherGuru, ZachXBT Investigations и другие. Самый быстрый источник по хакам и срочным событиям — высокая скорость, требует подтверждения.",
  "Security & Exploits": "Безопасность и эксплойты",
  "Dedicated exploit feed — DefiLlama hacks database (amount, technique, chain) plus rekt.news post-mortems. Structured, first-mover coverage of protocol drains and bridge hacks.":
    "Специализированный источник по эксплойтам — база хаков DefiLlama (сумма, техника, сеть) плюс разборы rekt.news. Структурированное освещение опустошений протоколов и хаков мостов из первых рук.",
  "News & RSS": "Новости и RSS",
  "CoinDesk, Decrypt, CoinTelegraph, Reddit, Tree of Alpha fast-news, and Trump's Truth Social. Keyword-filtered — broader context, slower than the live feeds.":
    "CoinDesk, Decrypt, CoinTelegraph, Reddit, быстрые новости Tree of Alpha и Truth Social Трампа. С фильтром по ключевым словам — более широкий контекст, медленнее живых источников.",
  "Crypto-native social monitoring on Farcaster channels — our highest trades-per-signal social source in the live source audit.":
    "Крипто-нативный мониторинг соцсетей на каналах Farcaster — наш социальный источник с наибольшим числом сделок на сигнал в аудите живых источников.",
  "CMC & Macro": "CMC и макро",
  "CoinMarketCap price alerts, trending coins, Fear & Greed Index, DeFi TVL shifts. Regime context rather than a direct trade trigger.":
    "Ценовые оповещения CoinMarketCap, трендовые монеты, индекс страха и жадности, сдвиги TVL в DeFi. Скорее контекст режима, чем прямой триггер сделки.",
  "Exchange Listings": "Листинги на биржах",
  "Real CEX listing catalysts — Binance & Bybit launchpads plus new spot-market detection on Binance, Upbit (Korea / kimchi-premium), and OKX. Tracks coins getting actual exchange access, not memecoin launch spam.":
    "Реальные катализаторы листингов на CEX — лаунчпады Binance и Bybit плюс обнаружение новых спотовых рынков на Binance, Upbit (Корея / kimchi-premium) и OKX. Отслеживает монеты, получающие реальный доступ к биржам, а не спам запусков мемкоинов.",
  "Policy & Regulatory": "Политика и регулирование",
  "Official government and regulatory RSS — SEC, Treasury, congressional, and agency sources monitored for crypto-relevant policy moves. No paid APIs.":
    "Официальные государственные и регуляторные RSS — источники SEC, Казначейства, Конгресса и ведомств, отслеживаемые на предмет значимых для крипто политических шагов. Без платных API.",
  "DexScreener trending and boosted-token feed — early on-chain discovery and token activity. Discovery context, non-directional.":
    "Лента трендовых и продвигаемых токенов DexScreener — раннее он-чейн обнаружение и активность токенов. Контекст обнаружения, ненаправленный.",
  "X / Curated Accounts": "X / Отобранные аккаунты",
  "A budget-capped X (Twitter) feed of research-vetted directional analysts and on-chain trackers — Arthur Hayes, Ki Young Ju, Pentoshi, EmberCN, Lookonchain, WuBlockchain, and more — plus official exchange listing and hack feeds.":
    "Лента X (Twitter) с ограниченным бюджетом из проверенных исследованием направленных аналитиков и он-чейн трекеров — Arthur Hayes, Ki Young Ju, Pentoshi, EmberCN, Lookonchain, WuBlockchain и других — плюс официальные ленты листингов на биржах и хаков.",
  "On-Chain Valuation": "Он-чейн оценка",
  "MVRV, exchange in/outflows + reserves, and active addresses from Coin Metrics (BTC + ETH). Net outflow / falling exchange reserves = self-custody accumulation; MVRV maps cycle profit vs froth. Feeds the macro composite's on-chain leg.":
    "MVRV, притоки/оттоки бирж + резервы и активные адреса от Coin Metrics (BTC + ETH). Чистый отток / падающие резервы бирж = накопление в самостоятельном хранении; MVRV отображает прибыль цикла против перегрева. Питает он-чейн ветвь макрокомпозита.",
  "Token Unlocks": "Разлоки токенов",
  "Scheduled token-unlock calendar (DeFiLlama). A large near-term insider/investor cliff on a tradeable token is supply that sellers front-run — flagged as a bearish supply-shock signal that self-proves via the forward-return gate.":
    "Календарь запланированных разлоков токенов (DeFiLlama). Крупный ближайший обрыв инсайдеров/инвесторов по торгуемому токену — это предложение, которое продавцы опережают — отмечается как медвежий сигнал шока предложения, самоподтверждающийся через воротца форвардной доходности.",
  "Technical Indicators": "Технические индикаторы",
  "Classic TA computed on Hyperliquid OHLC — RSI, MACD, moving averages (20/50/200 + 200-week), Stochastic, and Fibonacci levels, with a plain-language trend/momentum read. The indicator layer alongside our on-chain + macro data.":
    "Классический теханализ, рассчитанный на OHLC Hyperliquid — RSI, MACD, скользящие средние (20/50/200 + 200-недельная), Стохастик и уровни Фибоначчи, с чтением тренда/моментума простым языком. Слой индикаторов рядом с нашими он-чейн + макро данными.",
  "Cycle Position": "Позиция в цикле",
  "Bitcoin's 4-year-cycle context — months since the halving, cycle phase, and an MVRV valuation band (capitulation → euphoria) as the measured cycle locator. A historical-cadence cycle-low window is shown strictly as labelled context, never a forecast.":
    "Контекст 4-летнего цикла Bitcoin — месяцы с халвинга, фаза цикла и полоса оценки MVRV (капитуляция → эйфория) как измеренный локатор цикла. Окно минимума цикла по историческому ритму показывается строго как помеченный контекст, а не как прогноз.",
  "TradFi & Liquidity": "TradFi и ликвидность",
  "Net liquidity (Fed balance sheet − Treasury cash − reverse repo, with fresh daily TGA), the dollar index, real yields, the curve, and CME BTC/ETH futures gaps — the macro backdrop that increasingly drives crypto.":
    "Чистая ликвидность (баланс ФРС − наличные Казначейства − обратное репо, со свежим ежедневным TGA), индекс доллара, реальные доходности, кривая и гэпы фьючерсов CME BTC/ETH — макрофон, всё сильнее определяющий крипто.",

  // ── 10 intelligence layers (desc) ──
  "Signal confidence degrades exponentially with age. A liquidation cascade from 4 hours ago is not the same signal as one from 4 minutes ago. Every score you receive reflects time.":
    "Уверенность сигнала экспоненциально снижается с возрастом. Каскад ликвидаций 4-часовой давности — это не тот же сигнал, что 4-минутной давности. Каждая оценка, которую вы получаете, отражает время.",
  "Source weights self-tune daily via EMA-smoothed win rates from tracked outcomes. Sources that predict correctly get boosted; sources that don't get dampened. Automatically.":
    "Веса источников ежедневно самонастраиваются через сглаженные по EMA доли выигрышей из отслеживаемых исходов. Источники, предсказывающие верно, усиливаются; те, что нет, — приглушаются. Автоматически.",
  "Rolling 1h / 4h / 24h signal momentum per asset. Narrative strength, velocity, and decay rate. Coordination detection: three independent source types firing the same direction in 5 minutes raises a manipulation flag.":
    "Скользящий моментум сигналов 1ч / 4ч / 24ч по активу. Сила нарратива, скорость и темп затухания. Обнаружение координации: три независимых типа источников, сработавших в одном направлении за 5 минут, поднимают флаг манипуляции.",
  "Social burst scoring, coordinated pump detection, and liquidation cascade identification. If engagement spikes 5× baseline or four unrelated sources fire the same coin in 10 minutes — you know.":
    "Оценка социальных всплесков, обнаружение скоординированных пампов и идентификация каскадов ликвидаций. Если вовлечённость подскакивает в 5× относительно базы или четыре несвязанных источника срабатывают по одной монете за 10 минут — вы знаете.",
  "Whale signals tagged with wallet archetype — CEX hot/cold, market maker, MEV bot, institutional, smart trader. 700+ verified labeled addresses across Ethereum, refreshed weekly from Etherscan label cloud and a live top-volume sweep. Stealth-accumulation flag fires when a tracked wallet receives a token in ≥3 fragmented buys totaling ≥$500K within 24h — catches quiet accumulation before it shows up in whale-alert feeds.":
    "Сигналы китов помечаются архетипом кошелька — CEX hot/cold, маркетмейкер, MEV-бот, институционал, умный трейдер. 700+ проверенных размеченных адресов по Ethereum, обновляемых еженедельно из облака меток Etherscan и живого прохода по топ-объёму. Флаг скрытого накопления срабатывает, когда отслеживаемый кошелёк получает токен в ≥3 дробных покупках на общую сумму ≥$500K в течение 24ч — ловит тихое накопление до того, как оно появится в лентах китовых оповещений.",
  "Every new token signal gets a contract risk pass — GoPlus honeypot check, mint function, sell tax, insider concentration, and DexScreener liquidity. Composite rug probability score. Cached 6 hours per token.":
    "Каждый новый сигнал по токену проходит проверку риска контракта — проверка honeypot GoPlus, функция эмиссии, налог на продажу, концентрация инсайдеров и ликвидность DexScreener. Составная оценка вероятности rug. Кэшируется на 6 часов на токен.",
  "BGE-M3 embeddings on every signal, stored in a vector database. Find signals by meaning, not just keywords. Semantic deduplication suppresses near-duplicate events before they reach the feed.":
    "Эмбеддинги BGE-M3 для каждого сигнала, хранящиеся в векторной базе данных. Находите сигналы по смыслу, а не только по ключевым словам. Семантическая дедупликация подавляет почти дублирующиеся события до того, как они попадут в ленту.",
  "Four models score every directional signal: a logistic win-probability, q10/q50/q90 PnL quantiles, a Cox survival model for median hold time, and an HMM market-regime detector — all trained on tracked forward returns. Sub-10ms inference; degrade gracefully when a model is cold.":
    "Четыре модели оценивают каждый направленный сигнал: логистическая вероятность выигрыша, квантили PnL q10/q50/q90, модель выживаемости Кокса для медианного времени удержания и HMM-детектор рыночного режима — все обучены на отслеживаемых форвардных доходностях. Вывод менее 10 мс; изящно деградируют, когда модель холодная.",
  "Each signal's (type × direction × regime) cell carries its empirical track record. When a cell is anti-predictive (n≥30, win rate ≤30%, avg PnL ≤−2%) we attach a labeled paired_inverse advisory — short-term reversal literature, never silently flipping your signal.":
    "Ячейка каждого сигнала (тип × направление × режим) несёт свой эмпирический послужной список. Когда ячейка анти-предсказательна (n≥30, доля выигрышей ≤30%, средний PnL ≤−2%), мы добавляем помеченное уведомление paired_inverse — литература о краткосрочных разворотах, никогда молча не переворачивая ваш сигнал.",
  "Confidence is mapped to empirical win rate per signal type, per raw-confidence bin. Win-rate is non-monotonic and type-dependent (higher confidence means higher win for sentiment, lower for whale) — a single curve can't capture that, so we bin it.":
    "Уверенность отображается на эмпирическую долю выигрышей по типу сигнала и по бину сырой уверенности. Доля выигрышей немонотонна и зависит от типа (более высокая уверенность означает более высокий выигрыш для sentiment и более низкий для whale) — одна кривая этого не отразит, поэтому мы делим на бины.",

  // ── 03 · consolidation ──
  "03 · consolidation": "03 · консолидация",
  "One API. Not twelve.": "Один API. Не двенадцать.",
  "Others": "Другие",
  "Whale data from one API. Funding from another. News from three more. L/S ratios, on-chain flows, options positioning, ETF flows, macro calendar — each a separate subscription, separate key, separate rate limit. You duct-tape them together and still do all the synthesis yourself.":
    "Данные о китах из одного API. Funding из другого. Новости ещё из трёх. L/S-соотношения, он-чейн потоки, позиционирование опционов, потоки ETF, макрокалендарь — каждый отдельная подписка, отдельный ключ, отдельный лимит запросов. Вы скрепляете их скотчем и всё равно делаете весь синтез сами.",
  "All of it — one endpoint. Telegram, whales, funding, liquidations, on-chain, L/S ratios, options flow, ETF + stablecoin flows, news, security feeds, macro calendar — fused, corroborated, and scored. Plus narrative momentum, manipulation detection, wallet DNA, token trust scoring, and semantic signal search baked in. One API key. One bill. Raw classified intel your agent can filter, route, and act on directly.":
    "Всё это — один эндпоинт. Telegram, киты, funding, ликвидации, он-чейн, L/S-соотношения, поток опционов, потоки ETF + стейблкоинов, новости, ленты безопасности, макрокалендарь — слитые, подтверждённые и оценённые. Плюс встроенные моментум нарративов, обнаружение манипуляций, ДНК кошельков, оценка доверия к токенам и семантический поиск сигналов. Один API-ключ. Один счёт. Сырая классифицированная аналитика, которую ваш агент может напрямую фильтровать, маршрутизировать и на её основе действовать.",

  // ── 04 · receipts — HONESTY / PROOF CLAIMS, review ──
  "04 · receipts": "04 · квитанции",
  "Our record is public. Theirs isn't.": "Наш послужной список публичен. Их — нет.",
  "Most of the industry asks you to trust a backtest you can't audit. We measure every signal type on real prices, publish the result, and demote our own weak signals in the open. The edge here is honesty — not a bigger pile of data.":
    "Большая часть индустрии просит вас довериться бэктесту, который вы не можете проверить. Мы измеряем каждый тип сигнала на реальных ценах, публикуем результат и открыто понижаем свои же слабые сигналы. Преимущество здесь — честность, а не большая куча данных.",
  "Typical TG \"call\" group": "Типичная TG-группа \"сигналов\"",
  "Publishes live per-signal win-rate": "Публикует живую долю выигрышей по сигналам",
  "Yes —": "Да —",
  "No": "Нет",
  "Demotes its own weak signals publicly": "Публично понижает свои слабые сигналы",
  "Yes": "Да",
  "Never": "Никогда",
  "Forward-return vs BTC baseline, with 95% CI": "Форвардная доходность против базы BTC, с 95% ДИ",
  "Price": "Цена",
  "\"lifetime $$$\"": "\"пожизненно $$$\"",
  "Comparison reflects publicly published methodology as of mid-2026. We're thinner than the big dashboards on raw data volume — we compete on":
    "Сравнение отражает публично опубликованную методологию по состоянию на середину 2026 года. По объёму сырых данных мы легче больших дашбордов — мы конкурируем в",
  "edge quality you can audit": "качестве преимущества, которое вы можете проверить",
  ", not data quantity. Not financial advice.": ", а не в количестве данных. Не является финансовой рекомендацией.",

  // ── 05 · pricing ──
  "05 · pricing": "05 · цены",
  "Choose your tier.": "Выберите свой тариф.",
  "Start free. Upgrade to Pro for real-time signals.":
    "Начните бесплатно. Перейдите на Pro для сигналов в реальном времени.",
  "Free": "Бесплатно",
  "/mo": "/мес",
  "For evaluation and light usage.": "Для ознакомления и лёгкого использования.",
  "60 requests / minute": "60 запросов / минуту",
  "15-minute signal delay": "Задержка сигнала 15 минут",
  "REST API only": "Только REST API",
  "Limited signal detail": "Ограниченная детализация сигнала",
  "Community support": "Поддержка сообщества",
  "Start Free": "Начать бесплатно",
  "Popular": "Популярно",
  "For active traders. Over 30 data sources. One subscription.":
    "Для активных трейдеров. Более 30 источников данных. Одна подписка.",
  "600 requests / minute": "600 запросов / минуту",
  "<strong>Real-time</strong> signals — no delay": "Сигналы в <strong>реальном времени</strong> — без задержки",
  "REST + WebSocket + Webhooks + <strong><a href=\"/docs/mcp\">MCP server</a></strong>":
    "REST + WebSocket + Webhooks + <strong><a href=\"/docs/mcp\">MCP-сервер</a></strong>",
  "<strong>MCP endpoint</strong> — drop into Claude Desktop, Cursor, Cline (Bearer auth)":
    "<strong>MCP-эндпоинт</strong> — подключите к Claude Desktop, Cursor, Cline (Bearer-авторизация)",
  "Full source &amp; channel detail": "Полная детализация источника и канала",
  "Whale tracking &amp; on-chain flows": "Отслеживание китов и он-чейн потоки",
  "Corroboration scoring": "Оценка подтверждения",
  "<strong>Macro conditions</strong> — daily regime + calendar risk":
    "<strong>Макроусловия</strong> — ежедневный режим + риск календаря",
  "<strong>Narrative heatmap</strong> — 1h/4h/24h signal momentum per asset":
    "<strong>Тепловая карта нарративов</strong> — моментум сигналов 1ч/4ч/24ч по активу",
  "<strong>Semantic search</strong> — find similar signals by meaning":
    "<strong>Семантический поиск</strong> — находите похожие сигналы по смыслу",
  "<strong>Trust scoring</strong> — contract risk + rug probability per token":
    "<strong>Оценка доверия</strong> — риск контракта + вероятность rug по токену",
  "<strong>Manipulation detection</strong> — coordinated pump + social burst flags":
    "<strong>Обнаружение манипуляций</strong> — флаги скоординированного пампа + социального всплеска",
  "<strong>Wallet DNA</strong> — smart money classification + stealth-accumulation flag":
    "<strong>ДНК кошельков</strong> — классификация smart money + флаг скрытого накопления",
  "<strong>Market-state</strong> — BTC/ETH consensus snapshot from proven voters":
    "<strong>Состояние рынка</strong> — снимок консенсуса BTC/ETH от проверенных голосующих",
  "<strong>Liquidation map</strong> — real-position DEX liq levels (HL + GMX)":
    "<strong>Карта ликвидаций</strong> — уровни ликв DEX по реальным позициям (HL + GMX)",
  "Email support": "Поддержка по эл. почте",
  "Get Pro": "Получить Pro",
  "Need more than your rate limit allows? Buy": "Нужно больше, чем позволяет ваш лимит запросов? Купите",
  "pay-per-call credits": "кредиты с оплатой за вызов",
  "— one-time packs from $5, spent only on calls beyond your tier's included rate. Manage them in your":
    "— разовые пакеты от $5, тратятся только на вызовы сверх включённого в ваш тариф лимита. Управляйте ими в своём",
  "account": "аккаунте",
  ". No account at all? Pay per request in USDC via": ". Совсем нет аккаунта? Платите за запрос в USDC через",
};
