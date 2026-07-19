/* Russian — /docs/quickstart. Machine-drafted onboarding voice; friendly + clear.
   Code, config, endpoints, placeholders, client brand names, tool names and
   tickers stay literal. Brand-only labels fall back to English by design. */
export const ru: Record<string, string> = {
  // ── head / hero ──
  "Quickstart — connect your agent to n0brains": "Быстрый старт — подключите вашего агента к n0brains",
  "Five minutes to a market-aware AI agent. Step-by-step: get a free key, connect claude.ai (custom connector), Claude Code, Claude Desktop, OpenClaw, Hermes, Cursor, or any MCP client — then hand your agent a job from the prompt library. No SDK, no install.":
    "Пять минут до ИИ-агента, понимающего рынок. Пошагово: получите бесплатный ключ, подключите claude.ai (пользовательский коннектор), Claude Code, Claude Desktop, OpenClaw, Hermes, Cursor или любой MCP-клиент — затем дайте агенту задачу из библиотеки промптов. Без SDK, без установки.",
  "Five minutes to a": "Пять минут до",
  "market-aware agent": "агента, понимающего рынок",
  "n0brains is an intelligence layer your agent calls like a native tool — live signals, graded pre-trade checks, levels, macro regime. No SDK, nothing to install. Three steps: get a key, connect the agent you already use, ask the first question.":
    "n0brains — это слой интеллекта, который ваш агент вызывает как встроенный инструмент: живые сигналы, оценённые проверки перед сделкой, уровни, макрорежим. Без SDK, ничего не нужно устанавливать. Три шага: получите ключ, подключите агента, которым вы уже пользуетесь, задайте первый вопрос.",
  "get key": "получить ключ",
  "connect agent": "подключить агента",
  "ask": "спросить",

  // ── side nav / chip nav ──
  "01 · get your key": "01 · получите ключ",
  "02 · connect your agent": "02 · подключите агента",
  "03 · first question": "03 · первый вопрос",
  "other mcp clients": "другие mcp-клиенты",
  "plain rest": "просто rest",
  "prompt library": "библиотека промптов",
  "free vs pro": "бесплатный vs pro",
  "troubleshooting": "устранение неполадок",
  "going further": "дальше",
  "api reference": "справочник api",
  "mcp server": "mcp-сервер",
  "setup": "настройка",
  "connect": "подключение",
  "use it": "используйте",
  "more docs": "ещё документация",
  "on this page": "на этой странице",

  // ── step 01 ──
  "Get your key": "Получите ключ",
  "Create a free account": "Создайте бесплатный аккаунт",
  "— no card, ~30 seconds.": "— без карты, ~30 секунд.",
  "Your API key is shown": "Ваш API-ключ показывается",
  "once": "только один раз",
  ", right after signup — copy it now. Lost it?": ", сразу после регистрации — скопируйте его сейчас. Потеряли?",
  "Regenerate from the dashboard": "Сгенерируйте заново в панели",
  "; the old key stops working immediately.": "; старый ключ сразу перестаёт работать.",
  "Paste your key here and every snippet on this page personalizes itself:":
    "Вставьте ключ сюда, и каждый фрагмент на этой странице подстроится сам:",
  "apply": "применить",
  "Stays in this tab — never sent anywhere, never saved.":
    "Остаётся в этой вкладке — никуда не отправляется и не сохраняется.",
  "✓ key applied to {n} snippets — stays in this tab, never sent or saved.":
    "✓ ключ применён к {n} фрагментам — остаётся в этой вкладке, не отправляется и не сохраняется.",
  "✓ key applied": "✓ ключ применён",
  "copied": "скопировано",

  // ── step 02 chooser ──
  "Connect your agent": "Подключите вашего агента",
  "Pick the agent you already use. Every path below points at the same MCP server —":
    "Выберите агента, которым уже пользуетесь. Каждый путь ниже ведёт к одному и тому же MCP-серверу —",
  "— and a free key already unlocks 14 tools, including the flagship":
    "— и бесплатный ключ уже открывает 14 инструментов, включая флагманский",
  "start here": "начните здесь",
  "web + mobile app — no install at all": "веб + мобильное приложение — вообще без установки",
  "one command in your terminal": "одна команда в терминале",
  "same connector flow as claude.ai": "тот же процесс коннектора, что и в claude.ai",
  "self-hosted agent gateway": "самостоятельно размещаемый шлюз агентов",
  "Nous Research personal agent": "личный агент Nous Research",
  "and any mcpServers-style client": "и любой клиент в стиле mcpServers",
  "generic config block": "универсальный блок конфигурации",
  "works with literally any agent": "работает буквально с любым агентом",
  "Cline · Continue · other MCP": "Cline · Continue · другие MCP",
  "No MCP? Plain REST": "Нет MCP? Просто REST",

  // ── claude.ai card ──
  "custom connector": "пользовательский коннектор",
  "easiest · no install": "проще всего · без установки",
  "Works on the claude.ai web app (and the mobile apps once connected). The free Claude plan allows one custom connector — n0brains fits in it.":
    "Работает в веб-приложении claude.ai (и в мобильных приложениях после подключения). Бесплатный план Claude позволяет один пользовательский коннектор — n0brains в него помещается.",
  "Open": "Откройте",
  "Settings → Connectors": "Настройки → Коннекторы",
  "(on some accounts it's labeled": "(в некоторых аккаунтах это называется",
  "Customize → Connectors": "Настроить → Коннекторы",
  "Click": "Нажмите",
  "Add custom connector": "Добавить пользовательский коннектор",
  "Name it": "Назовите его",
  "and paste this as the remote MCP server URL:": "и вставьте это как URL удалённого MCP-сервера:",
  "copy URL": "копировать URL",
  "copy": "копировать",
  "Add": "Добавить",
  ". In any chat, open the": ". В любом чате откройте меню",
  "menu →": "→",
  "Connectors": "Коннекторы",
  "and toggle n0brains on.": "и включите n0brains.",
  "Ask:": "Спросите:",
  "\"What does n0brains say about BTC right now?\"": "\"Что n0brains говорит про BTC прямо сейчас?\"",
  "— Claude will call the tools itself.": "— Claude сам вызовет инструменты.",
  "Why the key is in the URL:": "Почему ключ в URL:",
  "claude.ai custom connectors can't yet attach auth headers on self-serve accounts (Anthropic's request-header option is still in beta), so the n0brains server also accepts":
    "пользовательские коннекторы claude.ai пока не могут добавлять заголовки авторизации в self-service-аккаунтах (опция заголовков запроса от Anthropic всё ещё в бете), поэтому сервер n0brains также принимает",
  "on the URL. Treat that URL like a password — anyone holding it can spend your quota. If it ever leaks,":
    "в URL. Относитесь к этому URL как к паролю — любой, у кого он есть, может потратить вашу квоту. Если он когда-нибудь утечёт,",
  "regenerate the key": "сгенерируйте ключ заново",
  ", value = your bare key, and drop the query string from the URL.":
    ", значение = сам ключ, и уберите строку запроса из URL.",

  // ── Claude Code card ──
  "One command in your terminal —": "Одна команда в терминале —",
  "makes it available in every project:": "делает его доступным во всех проектах:",
  "copy command": "копировать команду",
  "Restart Claude Code (or open a new session) and the n0brains tools appear automatically. Prefer a skill instead of tools?":
    "Перезапустите Claude Code (или откройте новую сессию), и инструменты n0brains появятся автоматически. Предпочитаете skill вместо инструментов?",
  "and drop it into": "и поместите его в",

  // ── Claude Desktop card ──
  "Same custom-connector flow as claude.ai:": "Тот же процесс пользовательского коннектора, что и в claude.ai:",
  "Settings → Connectors → Add custom connector": "Настройки → Коннекторы → Добавить пользовательский коннектор",
  ", paste the same URL-with-key from the": ", вставьте тот же URL-с-ключом из",
  "claude.ai section": "раздела claude.ai",
  ". Connectors added on either surface sync to the other.":
    ". Коннекторы, добавленные на одной из площадок, синхронизируются с другой.",
  "Managing servers by config file instead? The classic":
    "Управляете серверами через файл конфигурации? Классический",
  "route and per-OS file paths are on the": "путь и пути к файлам для каждой ОС — на",
  "MCP page": "странице MCP",

  // ── OpenClaw card ──
  "MCP is built in (recent releases). One CLI call registers the server:":
    "MCP встроен (в последних версиях). Один вызов CLI регистрирует сервер:",
  "Or add it by hand to": "Или добавьте вручную в",
  "under": "в раздел",
  "(JSON5 — trailing commas fine;": "(JSON5 — завершающие запятые допустимы;",
  "substitution works in headers):": "подстановка работает в заголовках):",
  "copy config": "копировать конфигурацию",
  "Verify with": "Проверьте командой",
  ", then ask your agent for a BTC read. Getting 401s with a correct key? Update OpenClaw — one older build silently dropped custom headers on streamable-http (see":
    ", затем попросите агента дать сводку по BTC. Получаете 401 с верным ключом? Обновите OpenClaw — одна из старых сборок молча отбрасывала пользовательские заголовки на streamable-http (см.",
  "). Prefer skills over MCP? The same": "). Предпочитаете skills вместо MCP? Тот же",
  "skill file drops straight into your OpenClaw skills directory.":
    "файл skill кладётся прямо в каталог skills в OpenClaw.",

  // ── Hermes card ──
  "The self-hosted": "Самостоятельно размещаемый",
  "Hermes agent": "агент Hermes",
  "reads MCP servers from": "читает MCP-серверы из",
  "Tidier: put the key in": "Аккуратнее: положите ключ в",
  "as": "как",
  "and write the header value as": "и запишите значение заголовка как",
  "— Hermes resolves": "— Hermes подставляет",
  "from env at connect time. A running session picks the edit up automatically (or run":
    "из окружения при подключении. Запущенная сессия подхватывает изменение автоматически (или выполните",
  "); verify with": "); проверьте командой",
  ". Tools register as": ". Инструменты регистрируются как",

  // ── Cursor card ──
  "Settings → MCP → Add server": "Настройки → MCP → Добавить сервер",
  ", or add to": ", или добавьте в",

  // ── other MCP clients card ──
  "Cline · Continue · any MCP client": "Cline · Continue · любой MCP-клиент",
  "Anything that speaks the standard": "Всё, что понимает стандартный формат конфигурации",
  "config shape takes the exact block from the": "берёт тот же блок из",
  "Cursor section": "раздела Cursor",
  "— remote streamable-HTTP URL plus an": "— удалённый streamable-HTTP URL плюс заголовок",
  "(or": "(или",
  ") header. The server also answers": "). Сервер также отвечает на",
  "and": "и",
  "without auth, so client \"test connection\" buttons work before you've wired the key.":
    "без авторизации, так что кнопки \"проверить подключение\" в клиенте работают ещё до того, как вы пропишете ключ.",

  // ── REST card ──
  "No MCP? Plain REST — any agent at all": "Нет MCP? Просто REST — вообще любой агент",
  "Every tool has a REST twin. Paste this into any agent's instructions — that's the whole integration:":
    "У каждого инструмента есть REST-близнец. Вставьте это в инструкции любого агента — это вся интеграция:",
  "copy prompt": "копировать промпт",
  "Shell pipelines and bots: the": "Shell-конвейеры и боты:",
  "prints JSON to stdout for": "выводит JSON в stdout — для",
  ". No account at all?": ". Совсем без аккаунта?",
  "pays per request in USDC — no signup.": "платит за запрос в USDC — без регистрации.",

  // ── step 03 ──
  "Ask the first question": "Задайте первый вопрос",
  "Say this to your connected agent:": "Скажите это подключённому агенту:",
  "Your agent calls": "Ваш агент вызывает",
  "and gets back a graded conditions read. Here's a real response (trimmed) from a free key:":
    "и получает оценённый разбор условий. Вот реальный ответ (сокращённый) с бесплатного ключа:",
  "real response · 2026-07-17": "реальный ответ · 2026-07-17",
  "How to read it: the": "Как это читать:",
  "describes conditions around the trade, never a directive.":
    "описывает условия вокруг сделки, но никогда не является указанием.",
  "are what's working against it,": "— это то, что играет против неё,",
  "are what to watch for the read to die,": "— это то, за чем следить, чтобы понять, что разбор больше не действителен,",
  "is what it couldn't assess from your inputs (give it a stop and a target and it grades those too). Every check is logged before its outcome and resolved at its horizon; grade performance publishes on":
    "— это то, что не удалось оценить по вашим данным (дайте стоп и цель — и это тоже будет оценено). Каждая проверка фиксируется до её исхода и разрешается на своём горизонте; результативность оценок публикуется на",
  "once it clears the same verification standard as every number we publish. Free keys get 3 checks a day.":
    "как только она проходит тот же стандарт проверки, что и каждая публикуемая нами цифра. Бесплатные ключи получают 3 проверки в день.",

  // ── prompt library ──
  "Give your agent a job": "Дайте агенту задачу",
  "Connected? Now make it useful. Each prompt below is a complete standing instruction — copy one into your agent's system prompt / custom instructions. They're written for REST so they work on every agent (MCP-connected agents will simply use the matching tools).":
    "Подключились? Теперь сделайте это полезным. Каждый промпт ниже — это законченная постоянная инструкция; скопируйте одну в system prompt / пользовательские инструкции вашего агента. Они написаны под REST, поэтому работают с любым агентом (агенты, подключённые по MCP, просто используют соответствующие инструменты).",
  "Ask n0brains first — pre-trade check": "Сначала спросите n0brains — проверка перед сделкой",
  "Before any trade, POST /check and get a graded A–F read of the conditions — crypto and tokenized stocks. The flagship.":
    "Перед любой сделкой сделайте POST /check и получите оценку условий по шкале A–F — крипта и токенизированные акции. Флагман.",
  "Market-aware research assistant": "Исследовательский ассистент, понимающий рынок",
  "Makes an agent check signals, levels, and regime before answering any market question.":
    "Заставляет агента проверять сигналы, уровни и режим, прежде чем отвечать на любой вопрос о рынке.",
  "Daily macro brief": "Ежедневная макросводка",
  "A morning routine: regime, calendar risk, rotation, and any supported asset bias.":
    "Утренняя рутина: режим, календарный риск, ротация и любой подтверждённый уклон по активу.",
  "Token safety screen": "Проверка безопасности токена",
  "Screen any token for honeypot / rug risk before touching it.":
    "Проверяйте любой токен на риск honeypot / rug, прежде чем его трогать.",
  "Liquidation-magnet hunter": "Охотник за магнитами ликвидаций",
  "Find where leveraged positions get flushed — which side is heavier and pulls price.":
    "Найдите, где сносит позиции с плечом — какая сторона тяжелее и тянет цену.",
  "Rotation / rebalance scout": "Разведчик ротации / ребалансировки",
  "Is capital flowing into alts or into BTC? Surface the rotation candidates.":
    "Капитал перетекает в альты или в BTC? Покажите кандидатов на ротацию.",
  "Sentiment-divergence finder": "Поиск дивергенций настроений",
  "Spot crowd-vs-flow mismatches: sentiment one way, on-chain signals the other.":
    "Замечайте расхождения между толпой и потоком: настроение в одну сторону, on-chain-сигналы в другую.",

  // ── free vs pro ──
  "Free vs Pro": "Бесплатный vs Pro",
  "Free — $0": "Бесплатно — $0",
  "Pro — $39.99/mo": "Pro — $39.99/мес",
  "MCP tools": "Инструменты MCP",
  "all 40": "все 40",
  "3 / day": "3 / день",
  "unlimited": "без ограничений",
  "Signal feed": "Лента сигналов",
  "15-min delay": "задержка 15 мин",
  "real-time": "в реальном времени",
  "Rate limit": "Лимит запросов",
  "Trade journal": "Журнал сделок",
  "— entries snapshotted, outcomes resolved from real candles":
    "— входы фиксируются снимком, исходы определяются по реальным свечам",
  "Streams": "Потоки",
  "REST polling": "опрос по REST",
  "A Pro-only tool called with a free key returns error":
    "Инструмент только-для-Pro, вызванный с бесплатным ключом, возвращает ошибку",
  "— and its": "— и его поле",
  "field lists exactly what your key can do, so agents self-discover their tier. Between tiers?":
    "перечисляет ровно то, что может ваш ключ, так что агенты сами определяют свой тариф. Между тарифами?",
  "pays per call in USDC, no subscription.": "платит за вызов в USDC, без подписки.",

  // ── troubleshooting ──
  "Troubleshooting": "Устранение неполадок",
  "Symptom": "Симптом",
  "Fix": "Решение",
  "The key isn't reaching us. Send": "Ключ до нас не доходит. Отправьте",
  "or": "или",
  "as a header — or, on claude.ai, keep": "как заголовок — или, в claude.ai, оставьте",
  "in the connector URL. Check for a truncated paste.":
    "в URL коннектора. Проверьте, не обрезалась ли вставка.",
  "Pro-only tool": "инструмент только для Pro",
  "Free key hit a Pro tool. The error's": "Бесплатный ключ обратился к Pro-инструменту. Список",
  "list shows everything your key can call.": "в ошибке показывает всё, что может вызвать ваш ключ.",
  "quota": "квота",
  "Free": "Бесплатный",
  "is 3/day — resets 00:00 UTC.": "— 3/день, сбрасывается в 00:00 UTC.",
  "Rate limit (60/min free, 600/min Pro). Honor": "Лимит запросов (60/мин бесплатно, 600/мин Pro). Учитывайте",
  "Redirects / empty responses": "Редиректы / пустые ответы",
  "Use the trailing slash:": "Используйте завершающий слэш:",
  "The bare": "Голый",
  "answers with a 307 some clients fumble.": "отвечает 307, с которым некоторые клиенты не справляются.",
  "OpenClaw 401 with a correct key": "OpenClaw 401 при верном ключе",
  "Update OpenClaw — one 2026.4.x build dropped custom headers on streamable-http connections.":
    "Обновите OpenClaw — одна из сборок 2026.4.x отбрасывала пользовательские заголовки на соединениях streamable-http.",
  "claude.ai: connected but tools never fire": "claude.ai: подключено, но инструменты не срабатывают",
  "Toggle the connector on in the chat's": "Включите коннектор в меню",
  "→ Connectors menu. Free Claude plans allow one custom connector.":
    "→ Коннекторы в чате. Бесплатные планы Claude позволяют один пользовательский коннектор.",

  // ── going further ──
  "Going further": "Дальше",
  "Every tool + error code:": "Каждый инструмент + код ошибки:",
  "MCP reference": "справочник MCP",
  "every REST endpoint:": "каждый REST-эндпоинт:",
  "API docs": "документация API",
  "Agent skill file:": "Файл skill для агента:",
  "— tools, auth, and behaviour rules in one Markdown drop-in.":
    "— инструменты, авторизация и правила поведения в одном Markdown-файле, готовом к использованию.",
  "Shell pipelines:": "Shell-конвейеры:",
  "the": "",
  "Walletless pay-per-call:": "Оплата за вызов без кошелька:",
  "Is any of this real?": "Всё это вообще реально?",
  "The live, public track record:": "Живая, публичная история результатов:",
  "Everything n0brains returns is analytical data on public markets — not financial advice. Keep a human in the loop; an agent should never be told to place trades unattended. See":
    "Всё, что возвращает n0brains, — это аналитические данные о публичных рынках, а не финансовый совет. Держите человека в контуре; агенту нельзя поручать совершать сделки без присмотра. См.",
  "terms": "условия",
};
