/* Russian — /charts hub page. Keys are the English source string. Tickers, venue
   and product names (BTC, ETH, Hyperliquid, NVDA, TSLA, S&P 500, HIP-3, CEX, DEX,
   Coinglass, Pro), coin symbols and numbers stay literal. Links to individual
   chart subpages stay English. "terms" and "free" resolve via the shared base /
   pricing dicts and are intentionally NOT redefined here. "ON-CHAIN" and "S / R"
   chips are kept in English (domain notation) via the English fallback. */
export const ru: Record<string, string> = {
  // ── head ──
  "charts": "графики",
  "n0brains live charts — audited win-rate scoreboard, market-state consensus, on-chain liquidation heatmaps, and support/resistance levels. Real data, published edge. Free.":
    "Живые графики n0brains — проверяемое табло винрейта, консенсус состояния рынка, on-chain тепловые карты ликвидаций и уровни поддержки/сопротивления. Реальные данные, опубликованное преимущество. Бесплатно.",

  // ── hub header ──
  "Live data · published edge": "Живые данные · опубликованное преимущество",
  "CHARTS": "ГРАФИКИ",
  "Every chart here is built from the same data the API serves — and the same":
    "Каждый график здесь построен на тех же данных, что отдаёт API — и на том же",
  "forward-return record": "журнале форвардной доходности",
  "we gate signals on. No backtests, no cherry-picking. The majors are free; the full picture is":
    ", по которому мы фильтруем сигналы. Без бэктестов, без подтасовки. Основные монеты бесплатны; полная картина —",

  // ── card chips ──
  "THE WEDGE": "КОЗЫРЬ",
  "DIRECTIONAL": "НАПРАВЛЕНИЕ",
  "ON-CHAIN · NEW": "ON-CHAIN · НОВОЕ",

  // ── card titles ──
  "Win-rate scoreboard": "Табло винрейта",
  "Market-state consensus": "Консенсус состояния рынка",
  "Cryptocurrency liquidation": "Ликвидации криптовалют",
  "Stock market liquidation": "Ликвидации фондового рынка",
  "Support & resistance": "Поддержка и сопротивление",

  // ── card descriptions ──
  "Every signal type measured against real post-signal price action — win rate, excess vs BTC, confidence intervals. Audited live, not a backtest.":
    "Каждый тип сигнала измеряется по реальному движению цены после сигнала — винрейт, превышение над BTC, доверительные интервалы. Проверяется вживую, а не бэктест.",
  "Live bull / bear / neutral consensus across proven signal voters, per coin, regime-aware. The dial nobody else publishes.":
    "Живой бычий / медвежий / нейтральный консенсус проверенных источников сигналов, по каждой монете, с учётом режима. Индикатор, который больше никто не публикует.",
  "Real on-chain DEX positions (Hyperliquid) binned into liquidation clusters — plus modeled CEX intensity. Free vs Coinglass $299.":
    "Реальные on-chain позиции DEX (Hyperliquid), сгруппированные в кластеры ликвидаций — плюс смоделированная интенсивность CEX. Бесплатно против 299 долларов у Coinglass.",
  "Liquidation clusters for tokenized stocks, indices, metals and commodities (NVDA, TSLA, S&P 500, gold, oil) — real on-chain positions from Hyperliquid HIP-3 perp DEXs. Nobody else maps these.":
    "Кластеры ликвидаций для токенизированных акций, индексов, металлов и сырьевых товаров (NVDA, TSLA, S&P 500, золото, нефть) — реальные on-chain позиции с perp-DEX Hyperliquid HIP-3. Больше никто их не картирует.",
  "Order-book + pivot levels overlaid on live price. BTC and ETH free; full coin coverage on Pro.":
    "Уровни стакана + пивоты, наложенные на живую цену. BTC и ETH бесплатно; полное покрытие монет на Pro.",

  // ── labels ──
  "free + pro": "бесплатно + pro",
  "Open chart →": "Открыть график →",

  // ── foot ──
  "Analytical data for informational purposes only — not financial advice. See":
    "Аналитические данные только для информационных целей — не является финансовым советом. См.",
};
