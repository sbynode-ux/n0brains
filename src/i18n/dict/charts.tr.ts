/* Turkish — /charts hub page. Keys are the English source string. Tickers, venue
   and product names (BTC, ETH, Hyperliquid, NVDA, TSLA, S&P 500, HIP-3, CEX, DEX,
   Coinglass, Pro), coin symbols and numbers stay literal. Links to individual
   chart subpages stay English. "terms" and "free" resolve via the shared base /
   pricing dicts and are intentionally NOT redefined here. "ON-CHAIN" and "S / R"
   chips are kept in English (domain notation) via the English fallback. */
export const tr: Record<string, string> = {
  // ── head ──
  "charts": "grafikler",
  "n0brains live charts — audited win-rate scoreboard, market-state consensus, on-chain liquidation heatmaps, and support/resistance levels. Real data, published edge. Free.":
    "n0brains canlı grafikleri — denetlenmiş isabet oranı skorbordu, piyasa durumu uzlaşısı, on-chain likidasyon ısı haritaları ve destek/direnç seviyeleri. Gerçek veri, yayınlanmış üstünlük. Ücretsiz.",

  // ── hub header ──
  "Live data · published edge": "Canlı veri · yayınlanmış üstünlük",
  "CHARTS": "GRAFİKLER",
  "Every chart here is built from the same data the API serves — and the same":
    "Buradaki her grafik, API'nin sunduğu aynı veriden — ve sinyalleri süzdüğümüz aynı",
  "forward-return record": "ileriye dönük getiri kaydından",
  "we gate signals on. No backtests, no cherry-picking. The majors are free; the full picture is":
    "oluşturulur. Backtest yok, seçmece yok. Ana coinler ücretsiz; tam tablo ise",

  // ── card chips ──
  "THE WEDGE": "KOZ",
  "DIRECTIONAL": "YÖNLÜ",
  "ON-CHAIN · NEW": "ON-CHAIN · YENİ",

  // ── card titles ──
  "Win-rate scoreboard": "İsabet oranı skorbordu",
  "Market-state consensus": "Piyasa durumu uzlaşısı",
  "Cryptocurrency liquidation": "Kripto para likidasyonu",
  "Stock market liquidation": "Borsa likidasyonu",
  "Support & resistance": "Destek ve direnç",

  // ── card descriptions ──
  "Every signal type measured against real post-signal price action — win rate, excess vs BTC, confidence intervals. Audited live, not a backtest.":
    "Her sinyal türü, sinyal sonrası gerçek fiyat hareketine karşı ölçülür — isabet oranı, BTC'ye karşı fazla getiri, güven aralıkları. Backtest değil, canlı denetlenir.",
  "Live bull / bear / neutral consensus across proven signal voters, per coin, regime-aware. The dial nobody else publishes.":
    "Kanıtlanmış sinyal oy vericileri arasında, coin başına ve rejime duyarlı canlı boğa / ayı / nötr uzlaşısı. Başka kimsenin yayınlamadığı gösterge.",
  "Real on-chain DEX positions (Hyperliquid) binned into liquidation clusters — plus modeled CEX intensity. Free vs Coinglass $299.":
    "Likidasyon kümelerine ayrılmış gerçek on-chain DEX pozisyonları (Hyperliquid) — artı modellenmiş CEX yoğunluğu. Coinglass'ın 299 dolarına karşı ücretsiz.",
  "Liquidation clusters for tokenized stocks, indices, metals and commodities (NVDA, TSLA, S&P 500, gold, oil) — real on-chain positions from Hyperliquid HIP-3 perp DEXs. Nobody else maps these.":
    "Tokenleştirilmiş hisseler, endeksler, metaller ve emtialar (NVDA, TSLA, S&P 500, altın, petrol) için likidasyon kümeleri — Hyperliquid HIP-3 perp DEX'lerinden gerçek on-chain pozisyonlar. Bunları başka kimse haritalamıyor.",
  "Order-book + pivot levels overlaid on live price. BTC and ETH free; full coin coverage on Pro.":
    "Canlı fiyatın üzerine bindirilmiş emir defteri + pivot seviyeleri. BTC ve ETH ücretsiz; tam coin kapsamı Pro'da.",

  // ── labels ──
  "free + pro": "ücretsiz + pro",
  "Open chart →": "Grafiği aç →",

  // ── foot ──
  "Analytical data for informational purposes only — not financial advice. See":
    "Yalnızca bilgilendirme amaçlı analitik veriler — finansal tavsiye değildir. Bkz.",
};
