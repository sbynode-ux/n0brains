/* Spanish — home page. Keys are the English source string. Machine-drafted;
   prices/endpoints/tickers kept literal. Win-rate / proof / disclaimer lines
   are flagged for human review. */
export const es: Record<string, string> = {
  // ── SEO (title + meta description) ──
  "AI-Powered Crypto Signals API": "API de señales cripto con IA",
  "Cross-asset market intelligence — crypto AND the tokenized stock market (equities, indices, metals, commodities). Signals scored, then cross-corroborated against independent evidence classes (whale flow, funding, events, macro) before conviction. Market-wide risk-appetite, liquidity and flow reads answer where liquidity is, where funds are going, and whether the market is buying something other than crypto. REST, WebSocket, Webhooks, MCP, x402 — built for autonomous trading agents. Free tier — no credit card.":
    "Inteligencia de mercado cross-asset — cripto Y el mercado de acciones tokenizado (renta variable, índices, metales, materias primas). Señales puntuadas y luego corroboradas de forma cruzada frente a clases de evidencia independientes (flujo de ballenas, funding, eventos, macro) antes de la convicción. Las lecturas de apetito de riesgo, liquidez y flujo de todo el mercado responden dónde está la liquidez, hacia dónde va el dinero y si el mercado está comprando algo distinto de cripto. REST, WebSocket, Webhooks, MCP, x402 — hecho para agentes de trading autónomos. Plan gratuito — sin tarjeta.",

  // ── hero ──
  "Live Signal Feed Active": "Feed de señales en vivo activo",
  "SIGNALS THAT": "SEÑALES QUE",
  "PROVE": "DEMUESTRAN",
  "THEIR EDGE": "SU VENTAJA",
  // hero lede — WIN-RATE / PROOF CLAIM, review
  "We measure every signal type against real post-signal price action and flag a call":
    "Medimos cada tipo de señal frente a la acción real del precio tras la señal y marcamos una llamada como",
  "only when that type's": "solo cuando su",
  "live forward-return record beats BTC over the same window (excess return / alpha) AND is profitable on its own (95% CI lower bound above zero)":
    "registro de retorno futuro en vivo supera a BTC en la misma ventana (retorno en exceso / alfa) Y es rentable por sí solo (límite inferior del IC del 95% por encima de cero)",
  ", judged per direction — and we publicly demote our own weak signals. Every event is machine-classified, cross-corroborated, and scored with a":
    ", juzgado por dirección — y degradamos públicamente nuestras propias señales débiles. Cada evento se clasifica por máquina, se corrobora de forma cruzada y se puntúa con una",
  "calibrated": "calibrada",
  "confidence, anchored by": "confianza, anclada por",
  ", our daily BTC + ETH directional bias. Pipe it into your agent or alert system via":
    ", nuestro sesgo direccional diario para BTC y ETH. Canalízalo a tu agente o sistema de alertas vía",
  ", or pay-per-call": ", o pago por llamada",
  "Start Free →": "Empieza gratis →",
  "See the proof ↗": "Ver la prueba ↗",
  "API Docs ↗": "Docs de la API ↗",
  "loading live win-rate…": "cargando tasa de acierto en vivo…",
  "live scoreboard →": "marcador en vivo →",
  "scroll": "desliza",

  // ── ticker (home-only phrases; signal-type tokens fall back to English) ──
  "10 intel layers": "10 capas de intel",
  "live forward-returns": "retornos futuros en vivo",

  // ── 01 · the pipeline ──
  "01 · the pipeline": "01 · la canalización",
  "How a signal is made": "Cómo se crea una señal",
  "30+ raw feeds in. Ten intelligence layers. One scored, corroborated signal out — delivered wherever your agent lives.":
    "Entran 30+ feeds en bruto. Diez capas de inteligencia. Sale una señal puntuada y corroborada — entregada allí donde viva tu agente.",
  "intake": "entrada",
  "30+ feeds": "30+ feeds",
  "Market Structure": "Estructura de mercado",
  "Capital Flows": "Flujos de capital",
  "News & Events": "Noticias y eventos",
  "Macro & Regime": "Macro y régimen",
  "Discovery": "Descubrimiento",
  "whales · funding · liq map · options · order book":
    "ballenas · funding · mapa de liq · opciones · libro de órdenes",
  "on-chain · ETF · stablecoin mints": "on-chain · ETF · emisiones de stablecoin",
  "telegram · exploits · news · farcaster · X": "telegram · exploits · noticias · farcaster · X",
  "macro pulse · fear & greed · policy": "macro pulse · miedo y codicia · política",
  "launchpads · DEX screener": "launchpads · DEX screener",
  "process": "procesar",
  "every event": "cada evento",
  "n0brains core": "núcleo n0brains",

  // engine / compute layer titles
  "Confidence Decay": "Decaimiento de confianza",
  "Source Accuracy Feedback": "Retroalimentación de precisión de fuentes",
  "Narrative Heatmap": "Mapa de calor narrativo",
  "Manipulation Detection": "Detección de manipulación",
  "Wallet DNA": "ADN de carteras",
  "Trust & Scam Scoring": "Puntuación de confianza y fraude",
  "Semantic Signal Search": "Búsqueda semántica de señales",
  "ML Outcome Models": "Modelos de resultado ML",
  "Historical Edge": "Ventaja histórica",
  "Binned Calibration": "Calibración por bins",

  // output card labels (payload VALUES stay English)
  "output": "salida",
  "scored signal": "señal puntuada",
  "signal": "señal",
  "example payload": "carga de ejemplo",
  "type": "tipo",
  "asset": "activo",
  "direction": "dirección",
  "confidence": "confianza",
  "conviction": "convicción",
  "corroboration": "corroboración",

  // ── 02 · under the hood ──
  "02 · under the hood": "02 · bajo el capó",
  "Every source. Every layer.": "Cada fuente. Cada capa.",
  "The full intake list and what each intelligence layer does — because auditable beats mysterious.":
    "La lista completa de entrada y lo que hace cada capa de inteligencia — porque auditable gana a misterioso.",
  "All": "Todas las",
  "source feeds": "fuentes de datos",
  "expand": "expandir",
  "All 10 intelligence layers": "Las 10 capas de inteligencia",

  // source titles (Macro Pulse / Farcaster / DEX Screener kept literal)
  "Whale Tracking": "Seguimiento de ballenas",
  "Funding & Liquidations": "Funding y liquidaciones",
  "Deleverage Capitulation": "Capitulación por desapalancamiento",
  "DEX Liquidation Map": "Mapa de liquidaciones DEX",
  "On-Chain Flows": "Flujos on-chain",
  "L/S Ratios": "Ratios L/S",
  "Options Flow": "Flujo de opciones",
  "ETF Flows": "Flujos de ETF",
  "Stablecoin Flows": "Flujos de stablecoins",
  "S/R Levels": "Niveles S/R",
  "Telegram Channels": "Canales de Telegram",
  "Security & Exploits": "Seguridad y exploits",
  "News & RSS": "Noticias y RSS",
  "CMC & Macro": "CMC y macro",
  "Exchange Listings": "Listados en exchanges",
  "Policy & Regulatory": "Política y regulación",
  "X / Curated Accounts": "X / Cuentas seleccionadas",
  "On-Chain Valuation": "Valoración on-chain",
  "Token Unlocks": "Desbloqueos de tokens",
  "Technical Indicators": "Indicadores técnicos",
  "Cycle Position": "Posición en el ciclo",
  "TradFi & Liquidity": "TradFi y liquidez",

  // source descriptions
  "Daily BTC + ETH directional bias. A deterministic macro composite — net liquidity, dollar (DXY), real yields, the curve, VIX (FRED data) — anchors the regime, synthesised with the CPI/FOMC/NFP/PPI calendar and 7d intel signals: regime call, conviction, key levels, invalidation. Sunday weekly 30d deep-dive.":
    "Sesgo direccional diario para BTC y ETH. Un compuesto macro determinista — liquidez neta, dólar (DXY), rendimientos reales, la curva, VIX (datos FRED) — ancla el régimen, sintetizado con el calendario CPI/FOMC/NFP/PPI y 7 días de señales de intel: señal de régimen, convicción, niveles clave, invalidación. Análisis profundo semanal de 30 días los domingos.",
  "Hyperliquid leaderboard consensus. When top traders pile into the same side, we detect it — and like every signal here, its live track record is published on /proof.":
    "Consenso del ranking de Hyperliquid. Cuando los mejores traders se amontonan en el mismo lado, lo detectamos — y como toda señal aquí, su historial en vivo se publica en /proof.",
  "Binance funding extremes and real-time liquidation cascades via WebSocket, plus multi-venue open-interest momentum from Coinglass snapshots. Timing signal for reversals and continuations.":
    "Extremos de funding en Binance y cascadas de liquidación en tiempo real vía WebSocket, más el momentum de interés abierto multi-venue desde las capturas de Coinglass. Señal de timing para reversiones y continuaciones.",
  "A mechanical, non-directional edge: when price and open interest fall together, positions are being force-unwound — not informed selling. The fire-sale exhausts and price bounces. We measure the price + OI deltas (data most feeds collect but never combine) and flag the capitulation low. Validated on our own forward returns, not folklore — track record on /proof.":
    "Una ventaja mecánica y no direccional: cuando el precio y el interés abierto caen juntos, las posiciones se están liquidando a la fuerza — no es venta informada. La liquidación forzosa se agota y el precio rebota. Medimos los deltas de precio + OI (datos que la mayoría de feeds recopilan pero nunca combinan) y marcamos el mínimo de capitulación. Validado sobre nuestros propios retornos futuros, no sobre folclore — historial en /proof.",
  "Our own liquidation map built from real on-chain DEX perp positions (Hyperliquid + GMX) — exact liquidation prices, not estimates. Clusters near price mark magnet / cascade levels; we use them to place stops and targets, not to pick a direction (liquidity predicts volatility, not which way).":
    "Nuestro propio mapa de liquidaciones construido a partir de posiciones perp reales on-chain en DEX (Hyperliquid + GMX) — precios de liquidación exactos, no estimaciones. Los clústeres cerca del precio marcan niveles imán / de cascada; los usamos para colocar stops y objetivos, no para elegir dirección (la liquidez predice la volatilidad, no hacia dónde).",
  "Large ETH/BTC transfers to/from exchanges via Alchemy + mempool.space WebSockets. Positioning context and capital-concentration tracking — directional whale reads come from Hyperliquid leaderboard positions.":
    "Grandes transferencias de ETH/BTC hacia/desde exchanges vía WebSockets de Alchemy + mempool.space. Contexto de posicionamiento y seguimiento de concentración de capital — las lecturas direccionales de ballenas provienen de las posiciones del ranking de Hyperliquid.",
  "Bybit, Binance, and Gate.io positioning data. Detect extreme crowding before the reversal.":
    "Datos de posicionamiento de Bybit, Binance y Gate.io. Detecta el amontonamiento extremo antes de la reversión.",
  "Deribit options positioning — put/call open-interest ratio, max-pain magnets, and large smart-money block trades on BTC + ETH. Surfaces institutional positioning the crowd-sentiment feeds miss.":
    "Posicionamiento de opciones en Deribit — ratio put/call de interés abierto, imanes de max-pain y grandes operaciones en bloque de smart money en BTC + ETH. Revela el posicionamiento institucional que los feeds de sentimiento de la multitud pasan por alto.",
  "US spot BTC + ETH + SOL ETF daily net flows (SoSoValue). Institutional capital context — we publish it as context, not a directional call: our own backtest found ETF net flow is a coincident/lagging demand print, not a leading signal (SOL inflows were even contrarian).":
    "Flujos netos diarios de ETF spot de BTC + ETH + SOL en EE. UU. (SoSoValue). Contexto de capital institucional — lo publicamos como contexto, no como señal direccional: nuestro propio backtest halló que el flujo neto de ETF es una lectura de demanda coincidente/rezagada, no una señal adelantada (las entradas de SOL fueron incluso contrarias).",
  "Large USDC mints and USDT Treasury deployments, plus net stablecoin inflow to exchange wallets — fresh dollar liquidity entering crypto and dry powder staged on exchanges (bullish) versus redemptions leaving (bearish). The macro dry-powder signal.":
    "Grandes emisiones de USDC y despliegues de tesorería de USDT, más la entrada neta de stablecoins a carteras de exchanges — nueva liquidez en dólares entrando en cripto y pólvora seca preparada en los exchanges (alcista) frente a redenciones que salen (bajista). La señal macro de pólvora seca.",
  "Real-time support/resistance from the Hyperliquid order book — treated as zones, not lines, each with its price band. Tracks polarity flips (broken support becomes resistance). Shapes entries and stops; rejects trades near adverse levels.":
    "Soporte/resistencia en tiempo real desde el libro de órdenes de Hyperliquid — tratados como zonas, no líneas, cada una con su banda de precio. Rastrea los cambios de polaridad (un soporte roto pasa a ser resistencia). Da forma a entradas y stops; rechaza operaciones cerca de niveles adversos.",
  "WatcherGuru, ZachXBT Investigations, and more. Fastest source for hacks and breaking events — high speed, needs corroboration.":
    "WatcherGuru, ZachXBT Investigations y más. La fuente más rápida para hacks y eventos de última hora — mucha velocidad, necesita corroboración.",
  "Dedicated exploit feed — DefiLlama hacks database (amount, technique, chain) plus rekt.news post-mortems. Structured, first-mover coverage of protocol drains and bridge hacks.":
    "Feed dedicado de exploits — base de datos de hacks de DefiLlama (importe, técnica, cadena) más las autopsias de rekt.news. Cobertura estructurada y de primer movimiento de drenajes de protocolos y hacks de puentes.",
  "CoinDesk, Decrypt, CoinTelegraph, Reddit, Tree of Alpha fast-news, and Trump's Truth Social. Keyword-filtered — broader context, slower than the live feeds.":
    "CoinDesk, Decrypt, CoinTelegraph, Reddit, las noticias rápidas de Tree of Alpha y la Truth Social de Trump. Filtrado por palabras clave — contexto más amplio, más lento que los feeds en vivo.",
  "Crypto-native social monitoring on Farcaster channels — our highest trades-per-signal social source in the live source audit.":
    "Monitorización social cripto-nativa en canales de Farcaster — nuestra fuente social con más operaciones por señal en la auditoría de fuentes en vivo.",
  "CoinMarketCap price alerts, trending coins, Fear & Greed Index, DeFi TVL shifts. Regime context rather than a direct trade trigger.":
    "Alertas de precio de CoinMarketCap, monedas en tendencia, Índice de Miedo y Codicia, cambios en el TVL de DeFi. Contexto de régimen más que un disparador directo de operación.",
  "Real CEX listing catalysts — Binance & Bybit launchpads plus new spot-market detection on Binance, Upbit (Korea / kimchi-premium), and OKX. Tracks coins getting actual exchange access, not memecoin launch spam.":
    "Catalizadores reales de listado en CEX — launchpads de Binance y Bybit más la detección de nuevos mercados spot en Binance, Upbit (Corea / prima kimchi) y OKX. Rastrea monedas que consiguen acceso real a exchanges, no el spam de lanzamientos de memecoins.",
  "Official government and regulatory RSS — SEC, Treasury, congressional, and agency sources monitored for crypto-relevant policy moves — plus congressional stock-trade disclosures. No paid APIs.":
    "RSS oficial gubernamental y regulatorio — SEC, Tesoro, fuentes del Congreso y de agencias monitorizadas en busca de movimientos de política relevantes para cripto — más las divulgaciones de operaciones bursátiles del Congreso. Sin APIs de pago.",
  "DexScreener trending and boosted-token feed — early on-chain discovery and token activity. Discovery context, non-directional.":
    "Feed de tokens en tendencia e impulsados de DexScreener — descubrimiento temprano on-chain y actividad de tokens. Contexto de descubrimiento, no direccional.",
  "A budget-capped X (Twitter) feed of research-vetted directional analysts and on-chain trackers — Arthur Hayes, Ki Young Ju, Pentoshi, EmberCN, Lookonchain, WuBlockchain, and more — plus official exchange listing and hack feeds.":
    "Un feed de X (Twitter) con presupuesto limitado de analistas direccionales verificados por investigación y rastreadores on-chain — Arthur Hayes, Ki Young Ju, Pentoshi, EmberCN, Lookonchain, WuBlockchain y más — más los feeds oficiales de listados de exchanges y de hacks.",
  "MVRV, exchange in/outflows + reserves, and active addresses from Coin Metrics (BTC + ETH). Net outflow / falling exchange reserves = self-custody accumulation; MVRV maps cycle profit vs froth. Feeds the macro composite's on-chain leg.":
    "MVRV, entradas/salidas + reservas de exchanges y direcciones activas de Coin Metrics (BTC + ETH). Salida neta / reservas de exchange en descenso = acumulación en autocustodia; MVRV mapea el beneficio del ciclo frente a la espuma. Alimenta la pata on-chain del compuesto macro.",
  "Scheduled token-unlock calendar (DeFiLlama). A large near-term insider/investor cliff on a tradeable token is supply that sellers front-run — flagged as a bearish supply-shock signal that self-proves via the forward-return gate.":
    "Calendario programado de desbloqueos de tokens (DeFiLlama). Un gran acantilado cercano de insiders/inversores sobre un token operable es oferta que los vendedores se adelantan — marcado como señal bajista de shock de oferta que se autodemuestra mediante el filtro de retorno futuro.",
  "Classic TA computed on Hyperliquid OHLC — RSI, MACD, moving averages (20/50/200 + 200-week), Stochastic, and Fibonacci levels, with a plain-language trend/momentum read. The indicator layer alongside our on-chain + macro data.":
    "AT clásico calculado sobre el OHLC de Hyperliquid — RSI, MACD, medias móviles (20/50/200 + 200 semanas), Estocástico y niveles de Fibonacci, con una lectura de tendencia/momentum en lenguaje llano. La capa de indicadores junto a nuestros datos on-chain + macro.",
  "Bitcoin's 4-year-cycle context — months since the halving, cycle phase, and an MVRV valuation band (capitulation → euphoria) as the measured cycle locator. A historical-cadence cycle-low window is shown strictly as labelled context, never a forecast.":
    "Contexto del ciclo de 4 años de Bitcoin — meses desde el halving, fase del ciclo y una banda de valoración MVRV (capitulación → euforia) como localizador medido del ciclo. Una ventana de mínimo de ciclo por cadencia histórica se muestra estrictamente como contexto etiquetado, nunca como pronóstico.",
  "Net liquidity (Fed balance sheet − Treasury cash − reverse repo, with fresh daily TGA), the dollar index, real yields, the curve, and CME BTC/ETH futures gaps — the macro backdrop that increasingly drives crypto.":
    "Liquidez neta (balance de la Fed − efectivo del Tesoro − repo inverso, con TGA diario fresco), el índice del dólar, los rendimientos reales, la curva y los gaps de futuros de CME BTC/ETH — el telón de fondo macro que cada vez más impulsa a cripto.",

  // compute layer descriptions
  "Signal confidence degrades exponentially with age. A liquidation cascade from 4 hours ago is not the same signal as one from 4 minutes ago. Every score you receive reflects time.":
    "La confianza de una señal se degrada exponencialmente con la edad. Una cascada de liquidación de hace 4 horas no es la misma señal que una de hace 4 minutos. Cada puntuación que recibes refleja el tiempo.",
  "Source weights self-tune daily via EMA-smoothed win rates from tracked outcomes. Sources that predict correctly get boosted; sources that don't get dampened. Automatically.":
    "Los pesos de las fuentes se autoajustan a diario mediante tasas de acierto suavizadas por EMA a partir de los resultados rastreados. Las fuentes que aciertan se potencian; las que no, se atenúan. Automáticamente.",
  "Rolling 1h / 4h / 24h signal momentum per asset. Narrative strength, velocity, and decay rate. Coordination detection: three independent source types firing the same direction in 5 minutes raises a manipulation flag.":
    "Momentum de señal móvil a 1h / 4h / 24h por activo. Fuerza, velocidad y tasa de decaimiento de la narrativa. Detección de coordinación: tres tipos de fuente independientes disparando la misma dirección en 5 minutos levantan una bandera de manipulación.",
  "Social burst scoring, coordinated pump detection, and liquidation cascade identification. If engagement spikes 5× baseline or four unrelated sources fire the same coin in 10 minutes — you know.":
    "Puntuación de ráfagas sociales, detección de pumps coordinados e identificación de cascadas de liquidación. Si la interacción se dispara 5× sobre la base o cuatro fuentes no relacionadas disparan la misma moneda en 10 minutos — lo sabes.",
  "Whale signals tagged with wallet archetype — CEX hot/cold, market maker, MEV bot, institutional, smart trader. 700+ verified labeled addresses across Ethereum, refreshed weekly from Etherscan label cloud and a live top-volume sweep. Stealth-accumulation flag fires when a tracked wallet receives a token in ≥3 fragmented buys totaling ≥$500K within 24h — catches quiet accumulation before it shows up in whale-alert feeds.":
    "Señales de ballenas etiquetadas con el arquetipo de cartera — CEX caliente/frío, creador de mercado, bot MEV, institucional, trader inteligente. Más de 700 direcciones etiquetadas y verificadas en Ethereum, actualizadas semanalmente desde la nube de etiquetas de Etherscan y un barrido en vivo de mayor volumen. La bandera de acumulación sigilosa se dispara cuando una cartera rastreada recibe un token en ≥3 compras fragmentadas que suman ≥500K$ en 24h — capta la acumulación silenciosa antes de que aparezca en los feeds de alertas de ballenas.",
  "Every new token signal gets a contract risk pass — GoPlus honeypot check, mint function, sell tax, insider concentration, and DexScreener liquidity. Composite rug probability score. Cached 6 hours per token.":
    "Cada señal de token nuevo pasa por un análisis de riesgo de contrato — comprobación de honeypot de GoPlus, función de emisión, impuesto de venta, concentración de insiders y liquidez de DexScreener. Puntuación compuesta de probabilidad de rug. En caché 6 horas por token.",
  "BGE-M3 embeddings on every signal, stored in a vector database. Find signals by meaning, not just keywords. Semantic deduplication suppresses near-duplicate events before they reach the feed.":
    "Embeddings BGE-M3 en cada señal, almacenados en una base de datos vectorial. Encuentra señales por significado, no solo por palabras clave. La deduplicación semántica suprime eventos casi duplicados antes de que lleguen al feed.",
  "Four models score every directional signal: a logistic win-probability, q10/q50/q90 PnL quantiles, a Cox survival model for median hold time, and an HMM market-regime detector — all trained on tracked forward returns. Sub-10ms inference; degrade gracefully when a model is cold.":
    "Cuatro modelos puntúan cada señal direccional: una probabilidad de acierto logística, cuantiles de PnL q10/q50/q90, un modelo de supervivencia de Cox para el tiempo medio de mantenimiento y un detector de régimen de mercado HMM — todos entrenados sobre retornos futuros rastreados. Inferencia sub-10ms; se degradan con elegancia cuando un modelo está frío.",
  "Each signal's (type × direction × regime) cell carries its empirical track record. When a cell is anti-predictive (n≥30, win rate ≤30%, avg PnL ≤−2%) we attach a labeled paired_inverse advisory — short-term reversal literature, never silently flipping your signal.":
    "La celda (tipo × dirección × régimen) de cada señal lleva su historial empírico. Cuando una celda es antipredictiva (n≥30, tasa de acierto ≤30%, PnL medio ≤−2%) adjuntamos un aviso etiquetado paired_inverse — literatura de reversión a corto plazo, nunca invirtiendo tu señal en silencio.",
  "Confidence is mapped to empirical win rate per signal type, per raw-confidence bin. Win-rate is non-monotonic and type-dependent (higher confidence means higher win for sentiment, lower for whale) — a single curve can't capture that, so we bin it.":
    "La confianza se mapea a la tasa de acierto empírica por tipo de señal, por bin de confianza bruta. La tasa de acierto no es monótona y depende del tipo (más confianza significa más acierto para sentimiento, menos para ballena) — una sola curva no puede capturar eso, así que la agrupamos en bins.",

  // ── 03 · consolidation ──
  "03 · consolidation": "03 · consolidación",
  "One API. Not twelve.": "Una API. No doce.",
  "Others": "Otros",
  "Whale data from one API. Funding from another. News from three more. L/S ratios, on-chain flows, options positioning, ETF flows, macro calendar — each a separate subscription, separate key, separate rate limit. You duct-tape them together and still do all the synthesis yourself.":
    "Datos de ballenas de una API. Funding de otra. Noticias de tres más. Ratios L/S, flujos on-chain, posicionamiento de opciones, flujos de ETF, calendario macro — cada uno una suscripción aparte, una clave aparte, un límite de peticiones aparte. Los pegas con cinta adhesiva y aun así haces toda la síntesis tú mismo.",
  "All of it — one endpoint. Telegram, whales, funding, liquidations, on-chain, L/S ratios, options flow, ETF + stablecoin flows, news, security feeds, macro calendar — fused, corroborated, and scored. Plus narrative momentum, manipulation detection, wallet DNA, token trust scoring, and semantic signal search baked in. One API key. One bill. Raw classified intel your agent can filter, route, and act on directly.":
    "Todo — un solo endpoint. Telegram, ballenas, funding, liquidaciones, on-chain, ratios L/S, flujo de opciones, flujos de ETF + stablecoins, noticias, feeds de seguridad, calendario macro — fusionado, corroborado y puntuado. Además, momentum narrativo, detección de manipulación, ADN de carteras, puntuación de confianza de tokens y búsqueda semántica de señales integrados. Una clave API. Una factura. Intel clasificada en bruto que tu agente puede filtrar, enrutar y sobre la que actuar directamente.",

  // ── 04 · receipts ── (HONESTY / PROOF — review)
  "04 · receipts": "04 · recibos",
  "Our record is public. Theirs isn't.": "Nuestro historial es público. El suyo no.",
  "Most of the industry asks you to trust a backtest you can't audit. We measure every signal type on real prices, publish the result, and demote our own weak signals in the open. The edge here is honesty — not a bigger pile of data.":
    "La mayor parte del sector te pide confiar en un backtest que no puedes auditar. Nosotros medimos cada tipo de señal sobre precios reales, publicamos el resultado y degradamos nuestras propias señales débiles a la vista de todos. La ventaja aquí es la honestidad — no un montón más grande de datos.",
  'Typical TG "call" group': 'Grupo típico de "señales" de TG',
  "Publishes live per-signal win-rate": "Publica la tasa de acierto en vivo por señal",
  "Yes —": "Sí —",
  "No": "No",
  "Demotes its own weak signals publicly": "Degrada públicamente sus propias señales débiles",
  "Yes": "Sí",
  "Never": "Nunca",
  "Forward-return vs BTC baseline, with 95% CI": "Retorno futuro frente a la base de BTC, con IC del 95%",
  "Price": "Precio",
  '"lifetime $$$"': '"$$$ de por vida"',
  "Comparison reflects publicly published methodology as of mid-2026. We're thinner than the big dashboards on raw data volume — we compete on":
    "La comparación refleja la metodología publicada de forma pública a mediados de 2026. Somos más ligeros que los grandes paneles en volumen de datos en bruto — competimos en",
  "edge quality you can audit": "calidad de ventaja que puedes auditar",
  ", not data quantity. Not financial advice.": ", no en cantidad de datos. No es asesoramiento financiero.",

  // ── 05 · pricing ──
  "05 · pricing": "05 · precios",
  "Choose your tier.": "Elige tu plan.",
  "Start free. Upgrade to Pro for real-time signals.":
    "Empieza gratis. Mejora a Pro para señales en tiempo real.",
  "Free": "Gratis",
  "For evaluation and light usage.": "Para evaluación y uso ligero.",
  "Start Free": "Empieza gratis",
  "Popular": "Popular",
  "For active traders. Over 30 data sources. One subscription.":
    "Para traders activos. Más de 30 fuentes de datos. Una suscripción.",
  "Get Pro": "Obtén Pro",
  "Need more than your rate limit allows? Buy":
    "¿Necesitas más de lo que permite tu límite de peticiones? Compra",
  "pay-per-call credits": "créditos de pago por llamada",
  "— one-time packs from $5, spent only on calls beyond your tier's included rate. Manage them in your":
    "— paquetes de un solo uso desde 5 $, gastados solo en llamadas que superen la tarifa incluida en tu plan. Gestiónalos en tu",
  "account": "cuenta",
  ". No account at all? Pay per request in USDC via":
    ". ¿Sin cuenta alguna? Paga por petición en USDC vía",

  // pro / free feature bullets (rendered via set:html)
  "600 requests / minute": "600 peticiones / minuto",
  "<strong>Real-time</strong> signals — no delay": "Señales <strong>en tiempo real</strong> — sin retraso",
  'REST + WebSocket + Webhooks + <strong><a href="/docs/mcp">MCP server</a></strong>':
    'REST + WebSocket + Webhooks + <strong><a href="/docs/mcp">servidor MCP</a></strong>',
  "<strong>MCP endpoint</strong> — drop into Claude Desktop, Cursor, Cline (19 tools, Bearer auth)":
    "<strong>Endpoint MCP</strong> — conéctalo a Claude Desktop, Cursor, Cline (19 herramientas, autenticación Bearer)",
  "Full source &amp; channel detail": "Detalle completo de fuente y canal",
  "Whale tracking &amp; on-chain flows": "Seguimiento de ballenas y flujos on-chain",
  "Corroboration scoring": "Puntuación de corroboración",
  "<strong>Macro Pulse</strong> — daily + weekly BTC/ETH bias":
    "<strong>Macro Pulse</strong> — sesgo diario + semanal de BTC/ETH",
  "<strong>Narrative heatmap</strong> — 1h/4h/24h signal momentum per asset":
    "<strong>Mapa de calor narrativo</strong> — momentum de señal a 1h/4h/24h por activo",
  "<strong>Semantic search</strong> — find similar signals by meaning":
    "<strong>Búsqueda semántica</strong> — encuentra señales similares por significado",
  "<strong>Trust scoring</strong> — contract risk + rug probability per token":
    "<strong>Puntuación de confianza</strong> — riesgo de contrato + probabilidad de rug por token",
  "<strong>Manipulation detection</strong> — coordinated pump + social burst flags":
    "<strong>Detección de manipulación</strong> — banderas de pump coordinado + ráfaga social",
  "<strong>Wallet DNA</strong> — smart money classification + stealth-accumulation flag":
    "<strong>ADN de carteras</strong> — clasificación de smart money + bandera de acumulación sigilosa",
  "<strong>Market-state</strong> — BTC/ETH consensus snapshot from proven voters":
    "<strong>Estado de mercado</strong> — instantánea de consenso de BTC/ETH de votantes probados",
  "<strong>Liquidation map</strong> — real-position DEX liq levels (HL + GMX)":
    "<strong>Mapa de liquidaciones</strong> — niveles de liq DEX de posiciones reales (HL + GMX)",
  "Email support": "Soporte por correo",
  "60 requests / minute": "60 peticiones / minuto",
  "15-minute signal delay": "Retraso de señal de 15 minutos",
  "REST API only": "Solo API REST",
  "Limited signal detail": "Detalle de señal limitado",
  "Community support": "Soporte de la comunidad",

  // ── client-injected (proof strip) ──
  "live win-rate scoreboard": "marcador de tasa de acierto en vivo",
  "signal type forward-return proven": "tipo de señal probado por retorno futuro",
  "signal types forward-return proven": "tipos de señal probados por retorno futuro",
};
