/* Spanish — home page. Keys are the English source string. Machine-drafted;
   prices/endpoints/tickers/brand names kept literal. Marketing, win-rate/proof
   and disclaimer lines are flagged for human review. */
export const es: Record<string, string> = {
  // ── SEO (title + meta description) ──
  "AI-Powered Crypto Signals API": "API de señales cripto con IA",
  "Cross-asset market intelligence — crypto AND the tokenized stock market (equities, indices, metals, commodities). Signals scored, then cross-corroborated against independent evidence classes (whale flow, funding, events, macro) before conviction. Market-wide risk-appetite, liquidity and flow reads answer where liquidity is, where funds are going, and whether the market is buying something other than crypto. REST, WebSocket, Webhooks, MCP, x402 — built for autonomous trading agents. Free tier — no credit card.":
    "Inteligencia de mercado cross-asset — cripto Y el mercado de acciones tokenizado (renta variable, índices, metales, materias primas). Señales puntuadas y luego corroboradas de forma cruzada frente a clases de evidencia independientes (flujo de ballenas, funding, eventos, macro) antes de la convicción. Las lecturas de apetito de riesgo, liquidez y flujo de todo el mercado responden dónde está la liquidez, hacia dónde va el dinero y si el mercado está comprando algo distinto de cripto. REST, WebSocket, Webhooks, MCP, x402 — hecho para agentes de trading autónomos. Plan gratuito — sin tarjeta.",

  // ── hero — CRAFTED, review ──
  "Pre-trade conditions engine live": "Motor de condiciones pre-operación en vivo",
  "CHECK THE TRADE": "REVISA LA OPERACIÓN",
  "BEFORE": "ANTES",
  "YOU TAKE IT": "DE TOMARLA",
  "Submit the trade you are considering. n0brains checks positioning crowding, scheduled event risk, liquidity, volatility, market structure, stop geometry and conflicts across the live evidence stack, then returns a graded conditions assessment with explicit flags and falsifiers. It is context for your decision, not a recommendation or an automated trade instruction.":
    "Envía la operación que estás considerando. n0brains revisa la saturación del posicionamiento, el riesgo de eventos programados, la liquidez, la volatilidad, la estructura de mercado, la geometría del stop y los conflictos en toda la pila de evidencia en vivo, y luego devuelve una evaluación de condiciones con calificación, con señales de alerta y falsadores explícitos. Es contexto para tu decisión, no una recomendación ni una instrucción de operación automatizada.",
  "Check a trade →": "Revisar una operación →",
  "Create free account ↗": "Crear cuenta gratis ↗",
  "API Docs ↗": "Docs de la API ↗",
  "scroll": "desplázate",

  // ── 01 · pipeline ──
  "01 · the pipeline": "01 · el pipeline",
  "How a signal is made": "Cómo se crea una señal",
  "30+ raw feeds in. Ten intelligence layers. One scored, corroborated signal out — delivered wherever your agent lives.":
    "Más de 30 fuentes en bruto de entrada. Diez capas de inteligencia. Una señal puntuada y corroborada de salida — entregada donde viva tu agente.",
  "intake": "captación",
  "30+ feeds": "30+ fuentes",
  "Market Structure": "Estructura de mercado",
  "Capital Flows": "Flujos de capital",
  "News & Events": "Noticias y eventos",
  "Macro & Regime": "Macro y régimen",
  "Discovery": "Descubrimiento",
  "whales · funding · liq map · options · order book":
    "ballenas · funding · mapa de liq · opciones · libro de órdenes",
  "on-chain · ETF · stablecoin mints": "on-chain · ETF · emisiones de stablecoins",
  "telegram · exploits · news · farcaster · X": "telegram · exploits · noticias · farcaster · X",
  "macro pulse · fear & greed · policy": "macro pulse · miedo y codicia · política",
  "launchpads · DEX screener": "launchpads · DEX screener",
  "process": "procesamiento",
  "every event": "cada evento",
  "n0brains core": "núcleo n0brains",
  "Confidence Decay": "Decaimiento de confianza",
  "Source Accuracy Feedback": "Retroalimentación de precisión de fuentes",
  "Narrative Heatmap": "Mapa de calor de narrativas",
  "Manipulation Detection": "Detección de manipulación",
  "Wallet DNA": "ADN de wallets",
  "Trust & Scam Scoring": "Puntuación de confianza y fraude",
  "Semantic Signal Search": "Búsqueda semántica de señales",
  "ML Outcome Models": "Modelos ML de resultados",
  "Historical Edge": "Ventaja histórica",
  "Binned Calibration": "Calibración por tramos",
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
    "La lista completa de captación y lo que hace cada capa de inteligencia — porque auditable supera a misterioso.",
  "All": "Las",
  "source feeds": "fuentes de datos",
  "expand": "expandir",
  "All 10 intelligence layers": "Las 10 capas de inteligencia",

  // ── source feeds (title + desc) ──
  "Whale Tracking": "Seguimiento de ballenas",
  "Hyperliquid leaderboard consensus. When top traders pile into the same side, we detect it — and like every signal here, its live track record is published on /proof.":
    "Consenso del ranking de Hyperliquid. Cuando los mejores traders se agolpan en el mismo lado, lo detectamos — y como toda señal aquí, su historial en vivo se publica en /proof.",
  "Funding & Liquidations": "Funding y liquidaciones",
  "Multi-venue funding and open-interest positioning plus OKX public liquidation prints. Timing context for reversals and continuations.":
    "Funding multiplataforma y posicionamiento de interés abierto, más las liquidaciones públicas de OKX. Contexto de timing para reversiones y continuaciones.",
  "Deleverage Capitulation": "Capitulación por desapalancamiento",
  "A mechanical, non-directional edge: when price and open interest fall together, positions are being force-unwound — not informed selling. The fire-sale exhausts and price bounces. We measure the price + OI deltas (data most feeds collect but never combine) and flag the capitulation low. Validated on our own forward returns, not folklore — track record on /proof.":
    "Una ventaja mecánica y no direccional: cuando el precio y el interés abierto caen juntos, las posiciones se están cerrando a la fuerza — no es venta informada. La liquidación de emergencia se agota y el precio rebota. Medimos los deltas de precio + OI (datos que la mayoría de las fuentes recopila pero nunca combina) y marcamos el mínimo de capitulación. Validado con nuestros propios retornos futuros, no con folclore — historial en /proof.",
  "DEX Liquidation Map": "Mapa de liquidaciones DEX",
  "Our own liquidation map built from real on-chain DEX perp positions (Hyperliquid + GMX) — exact liquidation prices, not estimates. Clusters near price mark magnet / cascade levels; we use them to place stops and targets, not to pick a direction (liquidity predicts volatility, not which way).":
    "Nuestro propio mapa de liquidaciones construido a partir de posiciones perp reales on-chain en DEX (Hyperliquid + GMX) — precios de liquidación exactos, no estimaciones. Los clústeres cerca del precio marcan niveles imán / de cascada; los usamos para colocar stops y objetivos, no para elegir una dirección (la liquidez predice la volatilidad, no hacia dónde).",
  "On-Chain Flows": "Flujos on-chain",
  "Large ETH exchange-wallet transfers via Alchemy, alongside live whale-positioning sources. Positioning context and capital-concentration tracking — directional whale reads come from Hyperliquid leaderboard positions.":
    "Grandes transferencias de ETH a wallets de exchanges vía Alchemy, junto a fuentes de posicionamiento de ballenas en vivo. Contexto de posicionamiento y seguimiento de concentración de capital — las lecturas direccionales de ballenas provienen de las posiciones del ranking de Hyperliquid.",
  "L/S Ratios": "Ratios L/S",
  "Bybit, Binance, and Gate.io positioning data. Detect extreme crowding before the reversal.":
    "Datos de posicionamiento de Bybit, Binance y Gate.io. Detecta la saturación extrema antes de la reversión.",
  "Options Flow": "Flujo de opciones",
  "Deribit options positioning — put/call open-interest ratio, max-pain magnets, and large smart-money block trades on BTC + ETH. Surfaces institutional positioning the crowd-sentiment feeds miss.":
    "Posicionamiento de opciones en Deribit — ratio put/call de interés abierto, imanes de max-pain y grandes operaciones en bloque de smart money en BTC + ETH. Saca a la luz el posicionamiento institucional que las fuentes de sentimiento de la masa se pierden.",
  "ETF Flows": "Flujos de ETF",
  "US spot BTC + ETH + SOL ETF daily net flows (SoSoValue). Institutional capital context — we publish it as context, not a directional call: our own backtest found ETF net flow is a coincident/lagging demand print, not a leading signal (SOL inflows were even contrarian).":
    "Flujos netos diarios de los ETF spot de BTC + ETH + SOL en EE. UU. (SoSoValue). Contexto de capital institucional — lo publicamos como contexto, no como señal direccional: nuestro propio backtest halló que el flujo neto de ETF es una lectura de demanda coincidente/rezagada, no una señal adelantada (las entradas en SOL fueron incluso contrarias).",
  "Stablecoin Flows": "Flujos de stablecoins",
  "Large USDC mints and USDT Treasury deployments, plus net stablecoin inflow to exchange wallets — fresh dollar liquidity entering crypto and dry powder staged on exchanges (bullish) versus redemptions leaving (bearish). The macro dry-powder signal.":
    "Grandes emisiones de USDC y despliegues de tesorería de USDT, más la entrada neta de stablecoins a wallets de exchanges — liquidez fresca en dólares entrando en cripto y pólvora seca preparada en los exchanges (alcista) frente a redenciones que salen (bajista). La señal macro de pólvora seca.",
  "S/R Levels": "Niveles S/R",
  "Real-time support/resistance from the Hyperliquid order book — treated as zones, not lines, each with its price band. Tracks polarity flips (broken support becomes resistance). Shapes entries and stops; rejects trades near adverse levels.":
    "Soporte/resistencia en tiempo real desde el libro de órdenes de Hyperliquid — tratados como zonas, no como líneas, cada una con su banda de precio. Rastrea los cambios de polaridad (el soporte roto se convierte en resistencia). Da forma a entradas y stops; rechaza operaciones cerca de niveles adversos.",
  "Telegram Channels": "Canales de Telegram",
  "WatcherGuru, ZachXBT Investigations, and more. Fastest source for hacks and breaking events — high speed, needs corroboration.":
    "WatcherGuru, ZachXBT Investigations y más. La fuente más rápida para hackeos y eventos de última hora — mucha velocidad, necesita corroboración.",
  "Security & Exploits": "Seguridad y exploits",
  "Dedicated exploit feed — DefiLlama hacks database (amount, technique, chain) plus rekt.news post-mortems. Structured, first-mover coverage of protocol drains and bridge hacks.":
    "Fuente dedicada a exploits — base de datos de hackeos de DefiLlama (monto, técnica, cadena) más los post-mortems de rekt.news. Cobertura estructurada y de primera mano de vaciados de protocolos y hackeos de puentes.",
  "News & RSS": "Noticias y RSS",
  "CoinDesk, Decrypt, CoinTelegraph, Reddit, Tree of Alpha fast-news, and Trump's Truth Social. Keyword-filtered — broader context, slower than the live feeds.":
    "CoinDesk, Decrypt, CoinTelegraph, Reddit, las noticias rápidas de Tree of Alpha y el Truth Social de Trump. Filtrado por palabras clave — contexto más amplio, más lento que las fuentes en vivo.",
  "Crypto-native social monitoring on Farcaster channels — our highest trades-per-signal social source in the live source audit.":
    "Monitorización social cripto-nativa en canales de Farcaster — nuestra fuente social con más operaciones por señal en la auditoría de fuentes en vivo.",
  "CMC & Macro": "CMC y Macro",
  "CoinMarketCap price alerts, trending coins, Fear & Greed Index, DeFi TVL shifts. Regime context rather than a direct trade trigger.":
    "Alertas de precio de CoinMarketCap, monedas en tendencia, Índice de Miedo y Codicia, cambios en el TVL de DeFi. Contexto de régimen más que un disparador directo de operación.",
  "Exchange Listings": "Listados en exchanges",
  "Real CEX listing catalysts — Binance & Bybit launchpads plus new spot-market detection on Binance, Upbit (Korea / kimchi-premium), and OKX. Tracks coins getting actual exchange access, not memecoin launch spam.":
    "Catalizadores reales de listado en CEX — launchpads de Binance y Bybit más la detección de nuevos mercados spot en Binance, Upbit (Corea / kimchi-premium) y OKX. Rastrea monedas que obtienen acceso real a exchanges, no el spam de lanzamientos de memecoins.",
  "Policy & Regulatory": "Política y regulación",
  "Official government and regulatory RSS — SEC, Treasury, congressional, and agency sources monitored for crypto-relevant policy moves. No paid APIs.":
    "RSS oficiales de gobierno y reguladores — fuentes de la SEC, el Tesoro, el Congreso y agencias, monitorizadas para movimientos de política relevantes para cripto. Sin APIs de pago.",
  "DexScreener trending and boosted-token feed — early on-chain discovery and token activity. Discovery context, non-directional.":
    "Fuente de tokens en tendencia y potenciados de DexScreener — descubrimiento temprano on-chain y actividad de tokens. Contexto de descubrimiento, no direccional.",
  "X / Curated Accounts": "X / Cuentas seleccionadas",
  "A budget-capped X (Twitter) feed of research-vetted directional analysts and on-chain trackers — Arthur Hayes, Ki Young Ju, Pentoshi, EmberCN, Lookonchain, WuBlockchain, and more — plus official exchange listing and hack feeds.":
    "Una fuente de X (Twitter) con presupuesto acotado, de analistas direccionales verificados por investigación y rastreadores on-chain — Arthur Hayes, Ki Young Ju, Pentoshi, EmberCN, Lookonchain, WuBlockchain y más — además de fuentes oficiales de listados en exchanges y de hackeos.",
  "On-Chain Valuation": "Valoración on-chain",
  "MVRV, exchange in/outflows + reserves, and active addresses from Coin Metrics (BTC + ETH). Net outflow / falling exchange reserves = self-custody accumulation; MVRV maps cycle profit vs froth. Feeds the macro composite's on-chain leg.":
    "MVRV, entradas/salidas de exchanges + reservas, y direcciones activas de Coin Metrics (BTC + ETH). Salida neta / reservas de exchange en descenso = acumulación en autocustodia; el MVRV mapea el beneficio del ciclo frente a la euforia. Alimenta la pata on-chain del compuesto macro.",
  "Token Unlocks": "Desbloqueos de tokens",
  "Scheduled token-unlock calendar (DeFiLlama). A large near-term insider/investor cliff on a tradeable token is supply that sellers front-run — flagged as a bearish supply-shock signal that self-proves via the forward-return gate.":
    "Calendario de desbloqueos programados de tokens (DeFiLlama). Un gran precipicio cercano de insiders/inversores en un token operable es oferta que los vendedores anticipan — marcado como una señal bajista de shock de oferta que se autoverifica mediante la puerta de retorno futuro.",
  "Technical Indicators": "Indicadores técnicos",
  "Classic TA computed on Hyperliquid OHLC — RSI, MACD, moving averages (20/50/200 + 200-week), Stochastic, and Fibonacci levels, with a plain-language trend/momentum read. The indicator layer alongside our on-chain + macro data.":
    "AT clásico calculado sobre el OHLC de Hyperliquid — RSI, MACD, medias móviles (20/50/200 + 200 semanas), Estocástico y niveles de Fibonacci, con una lectura de tendencia/momentum en lenguaje sencillo. La capa de indicadores junto a nuestros datos on-chain + macro.",
  "Cycle Position": "Posición en el ciclo",
  "Bitcoin's 4-year-cycle context — months since the halving, cycle phase, and an MVRV valuation band (capitulation → euphoria) as the measured cycle locator. A historical-cadence cycle-low window is shown strictly as labelled context, never a forecast.":
    "El contexto del ciclo de 4 años de Bitcoin — meses desde el halving, fase del ciclo y una banda de valoración MVRV (capitulación → euforia) como localizador medido del ciclo. Una ventana de mínimo de ciclo por cadencia histórica se muestra estrictamente como contexto etiquetado, nunca como pronóstico.",
  "TradFi & Liquidity": "TradFi y liquidez",
  "Net liquidity (Fed balance sheet − Treasury cash − reverse repo, with fresh daily TGA), the dollar index, real yields, the curve, and CME BTC/ETH futures gaps — the macro backdrop that increasingly drives crypto.":
    "Liquidez neta (balance de la Fed − efectivo del Tesoro − repos inversos, con TGA diaria fresca), el índice del dólar, los rendimientos reales, la curva y los gaps de futuros de CME de BTC/ETH — el telón de fondo macro que cada vez impulsa más a cripto.",

  // ── 10 intelligence layers (desc) ──
  "Signal confidence degrades exponentially with age. A liquidation cascade from 4 hours ago is not the same signal as one from 4 minutes ago. Every score you receive reflects time.":
    "La confianza de una señal se degrada exponencialmente con la edad. Una cascada de liquidaciones de hace 4 horas no es la misma señal que una de hace 4 minutos. Cada puntuación que recibes refleja el tiempo.",
  "Source weights self-tune daily via EMA-smoothed win rates from tracked outcomes. Sources that predict correctly get boosted; sources that don't get dampened. Automatically.":
    "Los pesos de las fuentes se autoajustan a diario mediante tasas de acierto suavizadas por EMA a partir de resultados rastreados. Las fuentes que predicen correctamente se potencian; las que no, se atenúan. Automáticamente.",
  "Rolling 1h / 4h / 24h signal momentum per asset. Narrative strength, velocity, and decay rate. Coordination detection: three independent source types firing the same direction in 5 minutes raises a manipulation flag.":
    "Momentum de señal móvil de 1h / 4h / 24h por activo. Fuerza, velocidad y tasa de decaimiento de la narrativa. Detección de coordinación: tres tipos de fuente independientes disparando la misma dirección en 5 minutos levantan una alerta de manipulación.",
  "Social burst scoring, coordinated pump detection, and liquidation cascade identification. If engagement spikes 5× baseline or four unrelated sources fire the same coin in 10 minutes — you know.":
    "Puntuación de estallidos sociales, detección de pumps coordinados e identificación de cascadas de liquidación. Si la interacción se dispara 5× sobre la base o cuatro fuentes no relacionadas disparan la misma moneda en 10 minutos — lo sabes.",
  "Whale signals tagged with wallet archetype — CEX hot/cold, market maker, MEV bot, institutional, smart trader. 700+ verified labeled addresses across Ethereum, refreshed weekly from Etherscan label cloud and a live top-volume sweep. Stealth-accumulation flag fires when a tracked wallet receives a token in ≥3 fragmented buys totaling ≥$500K within 24h — catches quiet accumulation before it shows up in whale-alert feeds.":
    "Señales de ballenas etiquetadas con el arquetipo de wallet — CEX hot/cold, creador de mercado, bot MEV, institucional, smart trader. Más de 700 direcciones etiquetadas y verificadas en Ethereum, actualizadas semanalmente desde la nube de etiquetas de Etherscan y un barrido en vivo de mayor volumen. La alerta de acumulación sigilosa se dispara cuando una wallet rastreada recibe un token en ≥3 compras fragmentadas que suman ≥$500K en 24h — capta la acumulación silenciosa antes de que aparezca en las fuentes de alertas de ballenas.",
  "Every new token signal gets a contract risk pass — GoPlus honeypot check, mint function, sell tax, insider concentration, and DexScreener liquidity. Composite rug probability score. Cached 6 hours per token.":
    "Cada nueva señal de token pasa una revisión de riesgo del contrato — comprobación de honeypot de GoPlus, función de emisión, impuesto de venta, concentración de insiders y liquidez de DexScreener. Puntuación compuesta de probabilidad de rug. En caché durante 6 horas por token.",
  "BGE-M3 embeddings on every signal, stored in a vector database. Find signals by meaning, not just keywords. Semantic deduplication suppresses near-duplicate events before they reach the feed.":
    "Embeddings BGE-M3 en cada señal, almacenados en una base de datos vectorial. Encuentra señales por significado, no solo por palabras clave. La deduplicación semántica suprime eventos casi duplicados antes de que lleguen a la fuente.",
  "Four models score every directional signal: a logistic win-probability, q10/q50/q90 PnL quantiles, a Cox survival model for median hold time, and an HMM market-regime detector — all trained on tracked forward returns. Sub-10ms inference; degrade gracefully when a model is cold.":
    "Cuatro modelos puntúan cada señal direccional: una probabilidad de acierto logística, cuantiles de PnL q10/q50/q90, un modelo de supervivencia de Cox para la duración mediana de la posición y un detector de régimen de mercado HMM — todos entrenados con retornos futuros rastreados. Inferencia sub-10ms; degradan con elegancia cuando un modelo está frío.",
  "Each signal's (type × direction × regime) cell carries its empirical track record. When a cell is anti-predictive (n≥30, win rate ≤30%, avg PnL ≤−2%) we attach a labeled paired_inverse advisory — short-term reversal literature, never silently flipping your signal.":
    "La celda (tipo × dirección × régimen) de cada señal lleva su historial empírico. Cuando una celda es anti-predictiva (n≥30, tasa de acierto ≤30%, PnL medio ≤−2%) adjuntamos un aviso etiquetado paired_inverse — literatura de reversión a corto plazo, nunca invirtiendo tu señal en silencio.",
  "Confidence is mapped to empirical win rate per signal type, per raw-confidence bin. Win-rate is non-monotonic and type-dependent (higher confidence means higher win for sentiment, lower for whale) — a single curve can't capture that, so we bin it.":
    "La confianza se mapea a la tasa de acierto empírica por tipo de señal, por tramo de confianza bruta. La tasa de acierto es no monótona y depende del tipo (mayor confianza significa mayor acierto para sentimiento, menor para ballena) — una sola curva no puede capturar eso, así que la dividimos en tramos.",

  // ── 03 · consolidation ──
  "03 · consolidation": "03 · consolidación",
  "One API. Not twelve.": "Una API. No doce.",
  "Others": "Otros",
  "Whale data from one API. Funding from another. News from three more. L/S ratios, on-chain flows, options positioning, ETF flows, macro calendar — each a separate subscription, separate key, separate rate limit. You duct-tape them together and still do all the synthesis yourself.":
    "Datos de ballenas de una API. Funding de otra. Noticias de tres más. Ratios L/S, flujos on-chain, posicionamiento de opciones, flujos de ETF, calendario macro — cada uno una suscripción aparte, una clave aparte, un límite de tasa aparte. Los apañas con cinta adhesiva y aun así haces toda la síntesis tú mismo.",
  "All of it — one endpoint. Telegram, whales, funding, liquidations, on-chain, L/S ratios, options flow, ETF + stablecoin flows, news, security feeds, macro calendar — fused, corroborated, and scored. Plus narrative momentum, manipulation detection, wallet DNA, token trust scoring, and semantic signal search baked in. One API key. One bill. Raw classified intel your agent can filter, route, and act on directly.":
    "Todo — un solo endpoint. Telegram, ballenas, funding, liquidaciones, on-chain, ratios L/S, flujo de opciones, flujos de ETF + stablecoins, noticias, fuentes de seguridad, calendario macro — fusionado, corroborado y puntuado. Además de momentum de narrativas, detección de manipulación, ADN de wallets, puntuación de confianza de tokens y búsqueda semántica de señales integradas. Una clave API. Una factura. Inteligencia bruta clasificada que tu agente puede filtrar, enrutar y accionar directamente.",

  // ── 04 · receipts — HONESTY / PROOF CLAIMS, review ──
  "04 · receipts": "04 · comprobantes",
  "Our record is public. Theirs isn't.": "Nuestro historial es público. El suyo no.",
  "Most of the industry asks you to trust a backtest you can't audit. We measure every signal type on real prices, publish the result, and demote our own weak signals in the open. The edge here is honesty — not a bigger pile of data.":
    "Gran parte del sector te pide confiar en un backtest que no puedes auditar. Nosotros medimos cada tipo de señal sobre precios reales, publicamos el resultado y degradamos nuestras propias señales débiles a la vista de todos. La ventaja aquí es la honestidad — no un montón más grande de datos.",
  "Typical TG \"call\" group": "Grupo típico de \"señales\" de TG",
  "Publishes live per-signal win-rate": "Publica la tasa de acierto en vivo por señal",
  "Yes —": "Sí —",
  "No": "No",
  "Demotes its own weak signals publicly": "Degrada públicamente sus propias señales débiles",
  "Yes": "Sí",
  "Never": "Nunca",
  "Forward-return vs BTC baseline, with 95% CI": "Retorno futuro frente a la base BTC, con IC del 95%",
  "Price": "Precio",
  "\"lifetime $$$\"": "\"$$$ de por vida\"",
  "Comparison reflects publicly published methodology as of mid-2026. We're thinner than the big dashboards on raw data volume — we compete on":
    "La comparación refleja la metodología publicada públicamente a mediados de 2026. Somos más ligeros que los grandes dashboards en volumen bruto de datos — competimos en",
  "edge quality you can audit": "calidad de ventaja que puedes auditar",
  ", not data quantity. Not financial advice.": ", no en cantidad de datos. No es asesoramiento financiero.",

  // ── 05 · pricing ──
  "05 · pricing": "05 · precios",
  "Choose your tier.": "Elige tu plan.",
  "Start free. Upgrade to Pro for real-time signals.":
    "Empieza gratis. Pásate a Pro para señales en tiempo real.",
  "Free": "Gratis",
  "/mo": "/mes",
  "For evaluation and light usage.": "Para evaluación y uso ligero.",
  "60 requests / minute": "60 solicitudes / minuto",
  "15-minute signal delay": "Retraso de señal de 15 minutos",
  "REST API only": "Solo API REST",
  "Limited signal detail": "Detalle de señal limitado",
  "Community support": "Soporte de la comunidad",
  "Start Free": "Empieza gratis",
  "Popular": "Popular",
  "For active traders. Over 30 data sources. One subscription.":
    "Para traders activos. Más de 30 fuentes de datos. Una suscripción.",
  "600 requests / minute": "600 solicitudes / minuto",
  "<strong>Real-time</strong> signals — no delay": "Señales en <strong>tiempo real</strong> — sin retraso",
  "REST + WebSocket + Webhooks + <strong><a href=\"/docs/mcp\">MCP server</a></strong>":
    "REST + WebSocket + Webhooks + <strong><a href=\"/docs/mcp\">servidor MCP</a></strong>",
  "<strong>MCP endpoint</strong> — drop into Claude Desktop, Cursor, Cline (Bearer auth)":
    "<strong>Endpoint MCP</strong> — intégralo en Claude Desktop, Cursor, Cline (auth Bearer)",
  "Full source &amp; channel detail": "Detalle completo de fuente y canal",
  "Whale tracking &amp; on-chain flows": "Seguimiento de ballenas y flujos on-chain",
  "Corroboration scoring": "Puntuación de corroboración",
  "<strong>Macro conditions</strong> — daily regime + calendar risk":
    "<strong>Condiciones macro</strong> — régimen diario + riesgo de calendario",
  "<strong>Narrative heatmap</strong> — 1h/4h/24h signal momentum per asset":
    "<strong>Mapa de calor de narrativas</strong> — momentum de señal 1h/4h/24h por activo",
  "<strong>Semantic search</strong> — find similar signals by meaning":
    "<strong>Búsqueda semántica</strong> — encuentra señales similares por significado",
  "<strong>Trust scoring</strong> — contract risk + rug probability per token":
    "<strong>Puntuación de confianza</strong> — riesgo del contrato + probabilidad de rug por token",
  "<strong>Manipulation detection</strong> — coordinated pump + social burst flags":
    "<strong>Detección de manipulación</strong> — alertas de pump coordinado + estallido social",
  "<strong>Wallet DNA</strong> — smart money classification + stealth-accumulation flag":
    "<strong>ADN de wallets</strong> — clasificación de smart money + alerta de acumulación sigilosa",
  "<strong>Market-state</strong> — BTC/ETH consensus snapshot from proven voters":
    "<strong>Estado de mercado</strong> — instantánea de consenso BTC/ETH de votantes probados",
  "<strong>Liquidation map</strong> — real-position DEX liq levels (HL + GMX)":
    "<strong>Mapa de liquidaciones</strong> — niveles de liq DEX de posiciones reales (HL + GMX)",
  "Email support": "Soporte por correo",
  "Get Pro": "Obtén Pro",
  "Need more than your rate limit allows? Buy": "¿Necesitas más de lo que permite tu límite de tasa? Compra",
  "pay-per-call credits": "créditos de pago por llamada",
  "— one-time packs from $5, spent only on calls beyond your tier's included rate. Manage them in your":
    "— packs únicos desde $5, gastados solo en llamadas más allá de la tasa incluida en tu plan. Gestiónalos en tu",
  "account": "cuenta",
  ". No account at all? Pay per request in USDC via": ". ¿Sin cuenta? Paga por solicitud en USDC vía",
};
