/* Spanish — /charts hub page. Keys are the English source string. Tickers, venue
   and product names (BTC, ETH, Hyperliquid, NVDA, TSLA, S&P 500, HIP-3, CEX, DEX,
   Coinglass, Pro), coin symbols and numbers stay literal. Links to individual
   chart subpages stay English. "terms" and "free" resolve via the shared base /
   pricing dicts and are intentionally NOT redefined here. "ON-CHAIN" and "S / R"
   chips are kept in English (domain notation) via the English fallback. */
export const es: Record<string, string> = {
  // ── head ──
  "charts": "gráficos",
  "n0brains live charts — audited win-rate scoreboard, market-state consensus, on-chain liquidation heatmaps, and support/resistance levels. Real data, published edge. Free.":
    "Gráficos en vivo de n0brains — marcador de tasa de acierto auditado, consenso de estado del mercado, mapas de calor de liquidaciones on-chain y niveles de soporte/resistencia. Datos reales, ventaja publicada. Gratis.",

  // ── hub header ──
  "Live data · published edge": "Datos en vivo · ventaja publicada",
  "CHARTS": "GRÁFICOS",
  "Every chart here is built from the same data the API serves — and the same":
    "Cada gráfico aquí se construye con los mismos datos que sirve la API — y el mismo",
  "forward-return record": "registro de retornos futuros",
  "we gate signals on. No backtests, no cherry-picking. The majors are free; the full picture is":
    "con el que filtramos las señales. Sin backtests, sin selección interesada. Las principales son gratis; el panorama completo es",

  // ── card chips ──
  "THE WEDGE": "LA CUÑA",
  "DIRECTIONAL": "DIRECCIONAL",
  "ON-CHAIN · NEW": "ON-CHAIN · NUEVO",

  // ── card titles ──
  "Win-rate scoreboard": "Marcador de tasa de acierto",
  "Market-state consensus": "Consenso de estado del mercado",
  "Cryptocurrency liquidation": "Liquidación de criptomonedas",
  "Stock market liquidation": "Liquidación del mercado bursátil",
  "Support & resistance": "Soporte y resistencia",

  // ── card descriptions ──
  "Every signal type measured against real post-signal price action — win rate, excess vs BTC, confidence intervals. Audited live, not a backtest.":
    "Cada tipo de señal medido contra la acción real del precio posterior a la señal — tasa de acierto, exceso vs BTC, intervalos de confianza. Auditado en vivo, no un backtest.",
  "Live bull / bear / neutral consensus across proven signal voters, per coin, regime-aware. The dial nobody else publishes.":
    "Consenso alcista / bajista / neutral en vivo entre los votantes de señales probadas, por moneda y según el régimen. El indicador que nadie más publica.",
  "Real on-chain DEX positions (Hyperliquid) binned into liquidation clusters — plus modeled CEX intensity. Free vs Coinglass $299.":
    "Posiciones reales on-chain de DEX (Hyperliquid) agrupadas en clústeres de liquidación — más intensidad de CEX modelada. Gratis frente a los $299 de Coinglass.",
  "Liquidation clusters for tokenized stocks, indices, metals and commodities (NVDA, TSLA, S&P 500, gold, oil) — real on-chain positions from Hyperliquid HIP-3 perp DEXs. Nobody else maps these.":
    "Clústeres de liquidación para acciones tokenizadas, índices, metales y materias primas (NVDA, TSLA, S&P 500, oro, petróleo) — posiciones reales on-chain de los perp DEX HIP-3 de Hyperliquid. Nadie más los mapea.",
  "Order-book + pivot levels overlaid on live price. BTC and ETH free; full coin coverage on Pro.":
    "Niveles de libro de órdenes + pivotes superpuestos sobre el precio en vivo. BTC y ETH gratis; cobertura completa de monedas en Pro.",

  // ── labels ──
  "free + pro": "gratis + pro",
  "Open chart →": "Abrir gráfico →",

  // ── foot ──
  "Analytical data for informational purposes only — not financial advice. See":
    "Datos analíticos solo con fines informativos — no es asesoramiento financiero. Consulta los",
};
