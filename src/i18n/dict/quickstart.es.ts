/* Spanish — /docs/quickstart. Machine-drafted onboarding voice; friendly + clear.
   Code, config, endpoints, placeholders, client brand names, tool names and
   tickers stay literal. Brand-only labels fall back to English by design. */
export const es: Record<string, string> = {
  // ── head / hero ──
  "Quickstart — connect your agent to n0brains": "Guía rápida — conecta tu agente a n0brains",
  "Five minutes to a market-aware AI agent. Step-by-step: get a free key, connect claude.ai (custom connector), Claude Code, Claude Desktop, OpenClaw, Hermes, Cursor, or any MCP client — then hand your agent a job from the prompt library. No SDK, no install.":
    "Cinco minutos para tener un agente de IA consciente del mercado. Paso a paso: consigue una clave gratuita, conecta claude.ai (conector personalizado), Claude Code, Claude Desktop, OpenClaw, Hermes, Cursor o cualquier cliente MCP — y luego dale a tu agente una tarea de la biblioteca de prompts. Sin SDK, sin instalación.",
  "Five minutes to a": "Cinco minutos para un",
  "market-aware agent": "agente consciente del mercado",
  "n0brains is an intelligence layer your agent calls like a native tool — live signals, graded pre-trade checks, levels, macro regime. No SDK, nothing to install. Three steps: get a key, connect the agent you already use, ask the first question.":
    "n0brains es una capa de inteligencia que tu agente llama como una herramienta nativa — señales en vivo, chequeos pre-operación con nota, niveles, régimen macro. Sin SDK, nada que instalar. Tres pasos: consigue una clave, conecta el agente que ya usas, haz la primera pregunta.",
  "get key": "consigue la clave",
  "connect agent": "conecta el agente",
  "ask": "pregunta",

  // ── side nav / chip nav ──
  "01 · get your key": "01 · consigue tu clave",
  "02 · connect your agent": "02 · conecta tu agente",
  "03 · first question": "03 · primera pregunta",
  "other mcp clients": "otros clientes mcp",
  "plain rest": "rest simple",
  "prompt library": "biblioteca de prompts",
  "free vs pro": "gratis vs pro",
  "troubleshooting": "resolución de problemas",
  "going further": "ir más allá",
  "api reference": "referencia de la api",
  "mcp server": "servidor mcp",
  "setup": "configuración",
  "connect": "conectar",
  "use it": "úsalo",
  "more docs": "más docs",
  "on this page": "en esta página",

  // ── step 01 ──
  "Get your key": "Consigue tu clave",
  "Create a free account": "Crea una cuenta gratuita",
  "— no card, ~30 seconds.": "— sin tarjeta, ~30 segundos.",
  "Your API key is shown": "Tu clave API se muestra",
  "once": "una sola vez",
  ", right after signup — copy it now. Lost it?": ", justo después del registro — cópiala ahora. ¿La perdiste?",
  "Regenerate from the dashboard": "Regenérala desde el panel",
  "; the old key stops working immediately.": "; la clave anterior deja de funcionar de inmediato.",
  "Paste your key here and every snippet on this page personalizes itself:":
    "Pega tu clave aquí y cada fragmento de esta página se personaliza solo:",
  "apply": "aplicar",
  "Stays in this tab — never sent anywhere, never saved.":
    "Se queda en esta pestaña — nunca se envía a ningún sitio, nunca se guarda.",
  "✓ key applied to {n} snippets — stays in this tab, never sent or saved.":
    "✓ clave aplicada a {n} fragmentos — se queda en esta pestaña, nunca se envía ni se guarda.",
  "✓ key applied": "✓ clave aplicada",
  "copied": "copiado",

  // ── step 02 chooser ──
  "Connect your agent": "Conecta tu agente",
  "Pick the agent you already use. Every path below points at the same MCP server —":
    "Elige el agente que ya usas. Cada ruta de abajo apunta al mismo servidor MCP —",
  "— and a free key already unlocks 14 tools, including the flagship":
    "— y una clave gratuita ya desbloquea 14 herramientas, incluida la insignia",
  "start here": "empieza aquí",
  "web + mobile app — no install at all": "web + app móvil — sin instalar nada",
  "one command in your terminal": "un comando en tu terminal",
  "same connector flow as claude.ai": "mismo flujo de conector que claude.ai",
  "self-hosted agent gateway": "gateway de agentes autoalojado",
  "Nous Research personal agent": "agente personal de Nous Research",
  "and any mcpServers-style client": "y cualquier cliente de estilo mcpServers",
  "generic config block": "bloque de configuración genérico",
  "works with literally any agent": "funciona con literalmente cualquier agente",
  "Cline · Continue · other MCP": "Cline · Continue · otros MCP",
  "No MCP? Plain REST": "¿Sin MCP? REST simple",

  // ── claude.ai card ──
  "custom connector": "conector personalizado",
  "easiest · no install": "lo más fácil · sin instalación",
  "Works on the claude.ai web app (and the mobile apps once connected). The free Claude plan allows one custom connector — n0brains fits in it.":
    "Funciona en la app web de claude.ai (y en las apps móviles una vez conectado). El plan gratuito de Claude permite un conector personalizado — n0brains cabe en él.",
  "Open": "Abre",
  "Settings → Connectors": "Ajustes → Conectores",
  "(on some accounts it's labeled": "(en algunas cuentas aparece como",
  "Customize → Connectors": "Personalizar → Conectores",
  "Click": "Haz clic en",
  "Add custom connector": "Añadir conector personalizado",
  "Name it": "Nómbralo",
  "and paste this as the remote MCP server URL:": "y pega esto como la URL del servidor MCP remoto:",
  "copy URL": "copiar URL",
  "copy": "copiar",
  "Add": "Añadir",
  ". In any chat, open the": ". En cualquier chat, abre el",
  "menu →": "menú →",
  "Connectors": "Conectores",
  "and toggle n0brains on.": "y activa n0brains.",
  "Ask:": "Pregunta:",
  "\"What does n0brains say about BTC right now?\"": "\"¿Qué dice n0brains sobre BTC ahora mismo?\"",
  "— Claude will call the tools itself.": "— Claude llamará a las herramientas por su cuenta.",
  "Why the key is in the URL:": "Por qué la clave va en la URL:",
  "claude.ai custom connectors can't yet attach auth headers on self-serve accounts (Anthropic's request-header option is still in beta), so the n0brains server also accepts":
    "los conectores personalizados de claude.ai aún no pueden adjuntar cabeceras de autenticación en cuentas self-service (la opción de cabeceras de Anthropic sigue en beta), así que el servidor de n0brains también acepta",
  "on the URL. Treat that URL like a password — anyone holding it can spend your quota. If it ever leaks,":
    "en la URL. Trata esa URL como una contraseña — quien la tenga puede gastar tu cuota. Si alguna vez se filtra,",
  "regenerate the key": "regenera la clave",
  ", value = your bare key, and drop the query string from the URL.":
    ", valor = tu clave tal cual, y quita la cadena de consulta de la URL.",

  // ── Claude Code card ──
  "One command in your terminal —": "Un solo comando en tu terminal —",
  "makes it available in every project:": "la hace disponible en todos los proyectos:",
  "copy command": "copiar comando",
  "Restart Claude Code (or open a new session) and the n0brains tools appear automatically. Prefer a skill instead of tools?":
    "Reinicia Claude Code (o abre una sesión nueva) y las herramientas de n0brains aparecen automáticamente. ¿Prefieres una skill en lugar de herramientas?",
  "and drop it into": "y colócalo en",

  // ── Claude Desktop card ──
  "Same custom-connector flow as claude.ai:": "El mismo flujo de conector personalizado que claude.ai:",
  "Settings → Connectors → Add custom connector": "Ajustes → Conectores → Añadir conector personalizado",
  ", paste the same URL-with-key from the": ", pega la misma URL-con-clave de la",
  "claude.ai section": "sección de claude.ai",
  ". Connectors added on either surface sync to the other.":
    ". Los conectores añadidos en cualquiera de las dos superficies se sincronizan con la otra.",
  "Managing servers by config file instead? The classic":
    "¿Prefieres gestionar los servidores por archivo de configuración? La clásica ruta",
  "route and per-OS file paths are on the": "y las rutas de archivo por sistema operativo están en la",
  "MCP page": "página MCP",

  // ── OpenClaw card ──
  "MCP is built in (recent releases). One CLI call registers the server:":
    "MCP viene integrado (en versiones recientes). Una llamada de CLI registra el servidor:",
  "Or add it by hand to": "O añádelo a mano en",
  "under": "bajo",
  "(JSON5 — trailing commas fine;": "(JSON5 — las comas finales están permitidas;",
  "substitution works in headers):": "la sustitución funciona en las cabeceras):",
  "copy config": "copiar configuración",
  "Verify with": "Verifica con",
  ", then ask your agent for a BTC read. Getting 401s with a correct key? Update OpenClaw — one older build silently dropped custom headers on streamable-http (see":
    ", luego pídele a tu agente una lectura de BTC. ¿Recibes 401 con una clave correcta? Actualiza OpenClaw — una versión antigua descartaba en silencio las cabeceras personalizadas en streamable-http (ver",
  "). Prefer skills over MCP? The same": "). ¿Prefieres skills en vez de MCP? El mismo",
  "skill file drops straight into your OpenClaw skills directory.":
    "archivo de skill va directo a tu directorio de skills de OpenClaw.",

  // ── Hermes card ──
  "The self-hosted": "El agente autoalojado",
  "Hermes agent": "Hermes",
  "reads MCP servers from": "lee servidores MCP desde",
  "Tidier: put the key in": "Más limpio: pon la clave en",
  "as": "como",
  "and write the header value as": "y escribe el valor de la cabecera como",
  "— Hermes resolves": "— Hermes resuelve",
  "from env at connect time. A running session picks the edit up automatically (or run":
    "desde el entorno al conectar. Una sesión en marcha recoge el cambio automáticamente (o ejecuta",
  "); verify with": "); verifica con",
  ". Tools register as": ". Las herramientas se registran como",

  // ── Cursor card ──
  "Settings → MCP → Add server": "Ajustes → MCP → Añadir servidor",
  ", or add to": ", o añádelo en",

  // ── other MCP clients card ──
  "Cline · Continue · any MCP client": "Cline · Continue · cualquier cliente MCP",
  "Anything that speaks the standard": "Cualquier cosa que hable el formato de configuración estándar",
  "config shape takes the exact block from the": "toma el bloque exacto de la",
  "Cursor section": "sección de Cursor",
  "— remote streamable-HTTP URL plus an": "— URL remota streamable-HTTP más una cabecera",
  "(or": "(o",
  ") header. The server also answers": "). El servidor también responde a",
  "and": "y",
  "without auth, so client \"test connection\" buttons work before you've wired the key.":
    "sin autenticación, así que los botones de \"probar conexión\" del cliente funcionan antes de configurar la clave.",

  // ── REST card ──
  "No MCP? Plain REST — any agent at all": "¿Sin MCP? REST simple — cualquier agente",
  "Every tool has a REST twin. Paste this into any agent's instructions — that's the whole integration:":
    "Cada herramienta tiene su gemela REST. Pega esto en las instrucciones de cualquier agente — esa es toda la integración:",
  "copy prompt": "copiar prompt",
  "Shell pipelines and bots: the": "Pipelines de shell y bots: el",
  "prints JSON to stdout for": "imprime JSON en stdout para",
  ". No account at all?": ". ¿Sin cuenta siquiera?",
  "pays per request in USDC — no signup.": "paga por petición en USDC — sin registro.",

  // ── step 03 ──
  "Ask the first question": "Haz la primera pregunta",
  "Say this to your connected agent:": "Dile esto a tu agente conectado:",
  "Your agent calls": "Tu agente llama a",
  "and gets back a graded conditions read. Here's a real response (trimmed) from a free key:":
    "y recibe una lectura de las condiciones con nota. Aquí tienes una respuesta real (recortada) de una clave gratuita:",
  "real response · 2026-07-17": "respuesta real · 2026-07-17",
  "How to read it: the": "Cómo leerla: la",
  "describes conditions around the trade, never a directive.":
    "describe las condiciones en torno a la operación, nunca es una directiva.",
  "are what's working against it,": "son lo que juega en su contra,",
  "are what to watch for the read to die,": "son lo que hay que vigilar para que la lectura deje de valer,",
  "is what it couldn't assess from your inputs (give it a stop and a target and it grades those too). Every check is logged before its outcome and resolved at its horizon; grade performance publishes on":
    "es lo que no pudo evaluar con tus datos (dale un stop y un objetivo y también los califica). Cada chequeo se registra antes de su resultado y se resuelve en su horizonte; el rendimiento de las notas se publica en",
  "once it clears the same verification standard as every number we publish. Free keys get 3 checks a day.":
    "una vez que supera el mismo estándar de verificación que cada cifra que publicamos. Las claves gratuitas tienen 3 chequeos al día.",

  // ── prompt library ──
  "Give your agent a job": "Dale una tarea a tu agente",
  "Connected? Now make it useful. Each prompt below is a complete standing instruction — copy one into your agent's system prompt / custom instructions. They're written for REST so they work on every agent (MCP-connected agents will simply use the matching tools).":
    "¿Conectado? Ahora hazlo útil. Cada prompt de abajo es una instrucción permanente completa — copia uno en el system prompt / instrucciones personalizadas de tu agente. Están escritos para REST, así que funcionan en cualquier agente (los agentes conectados por MCP simplemente usarán las herramientas correspondientes).",
  "Ask n0brains first — pre-trade check": "Pregunta a n0brains primero — chequeo previo a la operación",
  "Before any trade, POST /check and get a graded A–F read of the conditions — crypto and tokenized stocks. The flagship.":
    "Antes de cualquier operación, haz POST /check y obtén una lectura de las condiciones con nota A–F — cripto y acciones tokenizadas. La insignia.",
  "Market-aware research assistant": "Asistente de investigación consciente del mercado",
  "Makes an agent check signals, levels, and regime before answering any market question.":
    "Hace que un agente consulte señales, niveles y régimen antes de responder cualquier pregunta de mercado.",
  "Daily macro brief": "Resumen macro diario",
  "A morning routine: regime, calendar risk, rotation, and any supported asset bias.":
    "Una rutina matinal: régimen, riesgo de calendario, rotación y cualquier sesgo de activo respaldado.",
  "Token safety screen": "Filtro de seguridad de tokens",
  "Screen any token for honeypot / rug risk before touching it.":
    "Analiza cualquier token en busca de riesgo de honeypot / rug antes de tocarlo.",
  "Liquidation-magnet hunter": "Cazador de imanes de liquidación",
  "Find where leveraged positions get flushed — which side is heavier and pulls price.":
    "Encuentra dónde se barren las posiciones apalancadas — qué lado pesa más y arrastra el precio.",
  "Rotation / rebalance scout": "Explorador de rotación / rebalanceo",
  "Is capital flowing into alts or into BTC? Surface the rotation candidates.":
    "¿El capital fluye hacia las alts o hacia BTC? Destaca los candidatos de rotación.",
  "Sentiment-divergence finder": "Detector de divergencias de sentimiento",
  "Spot crowd-vs-flow mismatches: sentiment one way, on-chain signals the other.":
    "Detecta desajustes entre la masa y el flujo: el sentimiento hacia un lado, las señales on-chain hacia el otro.",

  // ── free vs pro ──
  "Free vs Pro": "Gratis vs Pro",
  "Free — $0": "Gratis — 0 $",
  "Pro — $39.99/mo": "Pro — 39,99 $/mes",
  "MCP tools": "Herramientas MCP",
  "all 40": "las 40",
  "3 / day": "3 / día",
  "unlimited": "ilimitado",
  "Signal feed": "Feed de señales",
  "15-min delay": "retraso de 15 min",
  "real-time": "tiempo real",
  "Rate limit": "Límite de peticiones",
  "Trade journal": "Diario de operaciones",
  "— entries snapshotted, outcomes resolved from real candles":
    "— entradas capturadas, resultados resueltos con velas reales",
  "Streams": "Flujos",
  "REST polling": "sondeo REST",
  "A Pro-only tool called with a free key returns error":
    "Una herramienta solo-Pro llamada con una clave gratuita devuelve el error",
  "— and its": "— y su campo",
  "field lists exactly what your key can do, so agents self-discover their tier. Between tiers?":
    "enumera exactamente lo que tu clave puede hacer, así los agentes descubren su plan por sí mismos. ¿Entre planes?",
  "pays per call in USDC, no subscription.": "paga por llamada en USDC, sin suscripción.",

  // ── troubleshooting ──
  "Troubleshooting": "Resolución de problemas",
  "Symptom": "Síntoma",
  "Fix": "Solución",
  "The key isn't reaching us. Send": "La clave no nos está llegando. Envía",
  "or": "o",
  "as a header — or, on claude.ai, keep": "como cabecera — o, en claude.ai, mantén",
  "in the connector URL. Check for a truncated paste.":
    "en la URL del conector. Comprueba que no se haya cortado al pegar.",
  "Pro-only tool": "herramienta solo-Pro",
  "Free key hit a Pro tool. The error's": "Una clave gratuita alcanzó una herramienta Pro. La lista",
  "list shows everything your key can call.": "del error muestra todo lo que tu clave puede llamar.",
  "quota": "cuota",
  "Free": "El",
  "is 3/day — resets 00:00 UTC.": "gratuito es 3/día — se reinicia a las 00:00 UTC.",
  "Rate limit (60/min free, 600/min Pro). Honor": "Límite de peticiones (60/min gratis, 600/min Pro). Respeta",
  "Redirects / empty responses": "Redirecciones / respuestas vacías",
  "Use the trailing slash:": "Usa la barra final:",
  "The bare": "El",
  "answers with a 307 some clients fumble.": "responde con un 307 que algunos clientes no gestionan bien.",
  "OpenClaw 401 with a correct key": "OpenClaw 401 con una clave correcta",
  "Update OpenClaw — one 2026.4.x build dropped custom headers on streamable-http connections.":
    "Actualiza OpenClaw — una versión 2026.4.x descartaba las cabeceras personalizadas en conexiones streamable-http.",
  "claude.ai: connected but tools never fire": "claude.ai: conectado pero las herramientas nunca se activan",
  "Toggle the connector on in the chat's": "Activa el conector en el menú",
  "→ Connectors menu. Free Claude plans allow one custom connector.":
    "→ Conectores del chat. Los planes gratuitos de Claude permiten un conector personalizado.",

  // ── going further ──
  "Going further": "Ir más allá",
  "Every tool + error code:": "Cada herramienta + código de error:",
  "MCP reference": "referencia MCP",
  "every REST endpoint:": "cada endpoint REST:",
  "API docs": "documentación de la API",
  "Agent skill file:": "Archivo de skill del agente:",
  "— tools, auth, and behaviour rules in one Markdown drop-in.":
    "— herramientas, autenticación y reglas de comportamiento en un único archivo Markdown listo para usar.",
  "Shell pipelines:": "Pipelines de shell:",
  "the": "el",
  "Walletless pay-per-call:": "Pago por llamada sin cartera:",
  "Is any of this real?": "¿Algo de esto es real?",
  "The live, public track record:": "El historial público y en vivo:",
  "Everything n0brains returns is analytical data on public markets — not financial advice. Keep a human in the loop; an agent should never be told to place trades unattended. See":
    "Todo lo que devuelve n0brains son datos analíticos sobre mercados públicos — no es asesoramiento financiero. Mantén a una persona en el circuito; nunca se le debe decir a un agente que opere sin supervisión. Consulta los",
  "terms": "términos",
};
