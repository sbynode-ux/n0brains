/* Russian — /proof page. Keys are the English source string. Numbers, %, dates,
   grades, tickers, endpoints and signal_type tokens stay literal. Win-rate /
   "proven" / methodology / calibration-withheld / disclaimer lines are
   translated literally at exact claim strength — flagged for human review. */
export const ru: Record<string, string> = {
  // ── head ──
  "proof": "доказательство",
  "n0brains live forward-return proof — every signal type measured against real post-signal price action, with win rate, excess vs BTC, and confidence intervals. The exact gate we use to flag signals. Not advice.":
    "Живое доказательство форвардной доходности n0brains — каждый тип сигнала измеряется по реальному движению цены после сигнала, с долей прибыльных, превышением над BTC и доверительными интервалами. Тот самый фильтр, которым мы помечаем сигналы. Не совет.",

  // ── hero ──
  "live audit · refreshed every 60s": "живой аудит · обновляется каждые 60s",
  "EVERY CALL.": "КАЖДЫЙ ПРОГНОЗ.",
  "ON THE RECORD.": "ПОД ЗАПИСЬ.",
  "No curated backtests. No survivor bias. Every directional signal is measured against real post-signal prices and posted here live — wins, losses, and the types we demote. This page renders the":
    "Без отобранных бэктестов. Без ошибки выжившего. Каждый направленный сигнал измеряется по реальным ценам после сигнала и публикуется здесь в реальном времени — победы, проигрыши и типы, которые мы понижаем. Эта страница отображает тот самый",
  "exact": "точный",
  "gate the pipeline uses to flag": "фильтр, который конвейер использует, чтобы пометить",
  ", so it can never claim edge the product doesn't actually act on.":
    ", поэтому она никогда не сможет заявить преимущество, на котором продукт на самом деле не действует.",
  "proven · live": "подтверждено · в реальном времени",
  "measuring…": "измеряем…",
  "win rate · 24h forward return": "доля прибыльных · форвардная доходность за 24h",

  // ── stat band ──
  "proven signal types": "подтверждённые типы сигналов",
  "signals measured · 30d": "измеренные сигналы · 30d",
  "best proven win-rate": "лучшая подтверждённая доля прибыльных",
  "per-type proven horizon · real HL prices": "подтверждённый горизонт по типу · реальные цены HL",
  "loading results…": "загрузка результатов…",

  // ── the gate ──
  "The gate": "Фильтр",
  "Every signal type is forced through the same three checks, per direction, regime-aware. Pass all three → the API flags it. Fail any → it stays published here as":
    "Каждый тип сигнала проходит одни и те же три проверки, по направлению и с учётом режима. Прошёл все три → API помечает его. Провалил любую → он остаётся опубликованным здесь как",
  "intel only": "только информация",
  ". No type is grandfathered in.": ". Ни один тип не получает поблажек за старшинство.",
  "candidates": "кандидаты",
  "loading…": "загрузка…",
  "forward-return gate": "фильтр форвардной доходности",
  "n ≥ 30 measured signals": "n ≥ 30 измеренных сигналов",
  "beats BTC + profitable, per (type, direction)": "превосходит BTC + прибыльно, по (тип, направление)",
  "regime-aware — gated on the regime that holds": "с учётом режима — фильтруется по действующему режиму",
  "expected move > round-trip cost": "ожидаемое движение > стоимость полного оборота",
  "proven": "подтверждённый",
  "intel only — stays public": "только информация — остаётся публичной",

  // ── full audit ──
  "The full audit — failures included": "Полный аудит — включая провалы",
  "Types that don't clear the bar stay on the board as": "Типы, которые не проходят планку, остаются на доске как",
  ". Public demotion is the feature: when edge decays, this board says so before our marketing does.":
    ". Публичное понижение — это и есть функция: когда преимущество угасает, эта доска говорит об этом раньше нашего маркетинга.",

  // ── methodology ──
  "methodology": "методология",
  "Every directional signal is measured against real post-signal price action — Hyperliquid 1-hour candles — at the horizon where each type is proven (1h, 4h or 24h) over a rolling 30-day window. For each signal type we publish the win rate, the mean return of the trade itself, the mean":
    "Каждый направленный сигнал измеряется по реальному движению цены после сигнала — часовые свечи Hyperliquid — на горизонте, где каждый тип подтверждён (1h, 4h или 24h), на скользящем окне в 30 дней. Для каждого типа сигнала мы публикуем долю прибыльных, среднюю доходность самой сделки и среднее",
  "excess vs BTC over the same window": "превышение над BTC за то же окно",
  ", and 95% confidence intervals. A type is marked": ", и 95% доверительные интервалы. Тип помечается как",
  "only when it clears 30+ measured signals AND both beats BTC AND is profitable on its own — judged":
    "подтверждённый только когда он преодолевает 30+ измеренных сигналов И одновременно превосходит BTC И прибылен сам по себе — оценка ведётся",
  "per (type, direction) and regime": "по (тип, направление) и режиму",
  ", not on the pooled blend. (So a type can read proven here while its":
    ", а не по объединённой смеси. (Так что тип может выглядеть подтверждённым здесь, пока его",
  "pooled": "объединённый",
  "excess-return CI, shown in the table, still dips below zero — the pool mixes a winning direction with a losing one; the gate scores them separately.) Beating BTC alone isn't enough — a type that only looks good by being short in a downtrend, while still losing money, does not qualify. The live":
    "ДИ избыточной доходности, показанный в таблице, всё ещё опускается ниже нуля — пул смешивает выигрышное направление с проигрышным; фильтр оценивает их по отдельности.) Одного превосходства над BTC недостаточно — тип, который выглядит хорошо только потому, что стоит в шорте на нисходящем тренде, при этом продолжая терять деньги, не проходит. Живой",
  "gate applies this same per-(type, direction), regime-aware test, and additionally downgrades any call whose expected move is too small to clear round-trip trading cost (fees + slippage) — a move you can't profit from after costs isn't a trade.":
    "фильтр применяет ту же проверку по (тип, направление) с учётом режима и дополнительно понижает любой прогноз, ожидаемое движение которого слишком мало, чтобы покрыть стоимость полного оборота сделки (комиссии + проскальзывание) — движение, на котором нельзя заработать после издержек, это не сделка.",

  // ── edge accumulation ──
  "Edge accumulation": "Накопление преимущества",
  "Does the per-signal edge above actually compound, or is it a few lucky outliers? Below is an illustrative account starting at index 100 that takes":
    "Действительно ли преимущество на сигнал выше складывается, или это несколько удачных выбросов? Ниже — иллюстративный счёт, начинающийся с индекса 100, который берёт",
  "every proven-type signal": "каждый сигнал подтверждённого типа",
  ", one at a time, risking": ", по одному за раз, рискуя",
  "of equity per signal and compounding the realized 24h return — in fire-time order. Fixed fractional size, no leverage, no stacking.":
    "капитала на сигнал и наращивая сложным процентом реализованную доходность за 24h — в порядке срабатывания. Фиксированный дробный размер, без плеча, без наложения позиций.",
  "Illustrative of edge accumulation on measured returns, not a live-traded or guaranteed account.":
    "Иллюстрация накопления преимущества на измеренных доходностях, а не реально торгуемый или гарантированный счёт.",

  // ── grade performance: published only once proven (calibration withheld) ──
  "Grade performance: published only once proven": "Производительность по оценкам: публикуется только после подтверждения",
  "Every": "Каждый вердикт по",
  "pre-trade check": "предторговой проверке",
  "verdict is logged the moment it is issued and resolved at its stated horizon against real prices. Grade-level performance publishes here under the same standard as every other number on this page: only after the deployed engine clears our weekly verification bar on consecutive weeks. Nothing less unlocks this section.":
    "фиксируется в момент выдачи и разрешается на заявленном горизонте по реальным ценам. Производительность на уровне оценок публикуется здесь по тому же стандарту, что и любое другое число на этой странице: только после того, как развёрнутый движок преодолеет нашу еженедельную планку проверки несколько недель подряд. Ничто меньшее не открывает этот раздел.",
  "Until that standard is met, no grade-performance claim is made — by design.":
    "Пока этот стандарт не выполнен, никаких заявлений о производительности по оценкам не делается — так задумано.",

  // ── legal ──
  "A type is shown as": "Тип показывается как",
  "forward-return proven": "подтверждённый по форвардной доходности",
  "only when its live post-signal price record clears 30+ measured signals AND both beats BTC and is profitable on its own — evaluated per (type, direction) and regime, at a 95% confidence interval above zero. These are the types we flag":
    "только когда его живой ценовой рекорд после сигнала преодолевает 30+ измеренных сигналов И одновременно превосходит BTC и прибылен сам по себе — оценивается по (тип, направление) и режиму, с 95% доверительным интервалом выше нуля. Это те типы, которые мы помечаем как",
  "in the API. Measured on real prices for informational purposes only — not financial advice, and past performance does not guarantee future results. See":
    "в API. Измеряется на реальных ценах исключительно в информационных целях — не является финансовым советом, и прошлые результаты не гарантируют будущих. См.",

  // ── cta ──
  "These numbers update whether they flatter us or not.": "Эти цифры обновляются, льстят они нам или нет.",
  "Pipe the proven signals straight into your agent — REST, WebSocket, Webhook, MCP, or x402.":
    "Направьте подтверждённые сигналы прямо в вашего агента — REST, WebSocket, Webhook, MCP или x402.",
  "Start Free →": "Начать бесплатно →",
  "API Docs ↗": "Документация API ↗",

  // ── client-JS strings ──
  "0 types currently clear the bar. The gate is real — when edge decays, this page says so first.":
    "Прямо сейчас планку проходят 0 типов. Фильтр реальный — когда преимущество угасает, эта страница говорит об этом первой.",
  "win rate · n=": "доля прибыльных · n=",
  "avg return": "средняя доходность",
  "excess vs BTC": "превышение над BTC",
  "95% CI low": "95% ДИ ниж.",
  "no type currently clears the gate": "сейчас ни один тип не проходит фильтр",
  "none right now": "сейчас нет",
  "coin-flip line": "линия орла или решки",
  "proof unavailable": "доказательство недоступно",
  "fetch failed": "ошибка загрузки",
  "signal type forward-return proven": "тип сигнала подтверждён по форвардной доходности",
  "signal types forward-return proven": "типов сигналов подтверждено по форвардной доходности",
  "type": "тип",
  "signals": "сигналы",
  "win rate": "доля прибыльных",
  "grade": "оценка",
  "given": "выдано",
  "resolved": "разрешено",
  "excess CI low": "превыш. ДИ ниж.",
  "n (backtest)": "n (бэктест)",
  "mean return of the trade itself": "средняя доходность самой сделки",
  "mean return minus BTC over the same window": "средняя доходность за вычетом BTC за то же окно",
  "95% confidence lower bound on excess return — the conservative edge":
    "нижняя 95% доверительная граница избыточной доходности — консервативное преимущество",
  "Last updated": "Обновлено",
  "every check is logged and resolved against real prices; grade performance publishes here once the deployed engine clears the verification standard":
    "каждая проверка фиксируется и разрешается по реальным ценам; производительность по оценкам публикуется здесь после того, как развёрнутый движок преодолевает стандарт проверки",
  "no checks logged yet": "проверок пока не зафиксировано",
  "pending": "в ожидании",
  "rows are split by origin — <b>probe</b> = our own automated calibration account (hits the same public /check around the clock so every grade accumulates a scoreable record; disclosed, never blended into the customer rows) · <b>real</b> = customer checks":
    "строки разделены по происхождению — <b>probe</b> = наш собственный автоматический калибровочный аккаунт (обращается к тому же публичному /check круглосуточно, чтобы каждая оценка накапливала поддающуюся оценке запись; раскрыт, никогда не смешивается со строками клиентов) · <b>real</b> = проверки клиентов",
  "engine": "движок",
  "current · weights derived from measured outcomes · calibrating fresh since 2026-07-06":
    "текущий · веса выведены из измеренных исходов · калибруется заново с 2026-07-06",
  "archived": "в архиве",
  "archived engine versions — earlier weight sets and their full records (v1's top band measured INVERTED at n=60; we replaced the engine and kept the receipt — that is the point of this page)":
    "архивные версии движка — прежние наборы весов и их полные записи (верхняя полоса v1 измерилась ИНВЕРТИРОВАННО при n=60; мы заменили движок и сохранили квитанцию — в этом и смысл этой страницы)",
  "re-scored on": "переоценён на",
  "prior resolved crypto checks —": "ранее разрешённых крипто-проверках —",
  "NOT a live record": "НЕ живая запись",
  "check-grade calibration unavailable": "калибровка оценок проверок недоступна",
  "equity curve unavailable": "кривая капитала недоступна",
  "All proven (combined)": "Все подтверждённые (совокупно)",
  "Lines": "Линии",
  "proven signals over": "подтверждённых сигналов за",
  "days": "дней",
  "index": "индекс",
  "per signal": "на сигнал",
  "illustrative, not a live account": "иллюстративно, не реальный счёт",
};
