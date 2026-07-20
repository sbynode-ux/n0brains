/* ─── i18n core ────────────────────────────────────────────────────────────
   URL-prefix routing: English stays at the root (/home, /pricing …), the
   other locales live under /es, /tr, /ru. Translation keys ARE the English
   source string, so any missing key falls back to English — English can never
   regress, and a half-translated page degrades gracefully instead of showing
   blank keys. Only the pages in TRANSLATED_PATHS have localized routes. */

import { es } from "./dict/es";
import { tr } from "./dict/tr";
import { ru } from "./dict/ru";
// Per-page dict files (kept separate so pages can be translated independently).
import { es as esHome } from "./dict/home.es";
import { tr as trHome } from "./dict/home.tr";
import { ru as ruHome } from "./dict/home.ru";
import { es as esPricing } from "./dict/pricing.es";
import { tr as trPricing } from "./dict/pricing.tr";
import { ru as ruPricing } from "./dict/pricing.ru";
import { es as esProof } from "./dict/proof.es";
import { tr as trProof } from "./dict/proof.tr";
import { ru as ruProof } from "./dict/proof.ru";
import { es as esCheck } from "./dict/check.es";
import { tr as trCheck } from "./dict/check.tr";
import { ru as ruCheck } from "./dict/check.ru";
import { es as esDocs } from "./dict/docs.es";
import { tr as trDocs } from "./dict/docs.tr";
import { ru as ruDocs } from "./dict/docs.ru";
import { es as esQuickstart } from "./dict/quickstart.es";
import { tr as trQuickstart } from "./dict/quickstart.tr";
import { ru as ruQuickstart } from "./dict/quickstart.ru";
import { es as esCharts } from "./dict/charts.es";
import { tr as trCharts } from "./dict/charts.tr";
import { ru as ruCharts } from "./dict/charts.ru";
import { es as esIntel } from "./dict/intel.es";
import { tr as trIntel } from "./dict/intel.tr";
import { ru as ruIntel } from "./dict/intel.ru";
import { es as esBlog } from "./dict/blog.es";
import { tr as trBlog } from "./dict/blog.tr";
import { ru as ruBlog } from "./dict/blog.ru";
import { es as esPodcast } from "./dict/podcast.es";
import { tr as trPodcast } from "./dict/podcast.tr";
import { ru as ruPodcast } from "./dict/podcast.ru";
import { es as esLogin } from "./dict/login.es";
import { tr as trLogin } from "./dict/login.tr";
import { ru as ruLogin } from "./dict/login.ru";
import { es as esSignup } from "./dict/signup.es";
import { tr as trSignup } from "./dict/signup.tr";
import { ru as ruSignup } from "./dict/signup.ru";

export const LOCALES = ["en", "es", "tr", "ru"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

/* Short code shown in the switcher pill + long endonym in the menu. */
export const LOCALE_LABELS: Record<Locale, string> = {
  en: "EN",
  es: "ES",
  tr: "TR",
  ru: "RU",
};
export const LOCALE_NAMES: Record<Locale, string> = {
  en: "English",
  es: "Español",
  tr: "Türkçe",
  ru: "Русский",
};

/* Base paths (no locale prefix, no trailing slash) that have translated
   routes. Keep in sync with the files under src/pages/{es,tr,ru}/. */
export const TRANSLATED_PATHS = new Set<string>([
  "/home",
  "/pricing",
  "/check",
  "/about",
  "/proof",
  "/contact",
  "/podcast",
  "/intel",
  "/charts",
  "/blog",
  "/login",
  "/signup",
  "/docs",
  "/docs/quickstart",
]);

const DICT: Record<Locale, Record<string, string>> = {
  en: {},
  es: { ...es, ...esPricing, ...esHome, ...esProof, ...esCheck, ...esDocs, ...esQuickstart, ...esCharts, ...esIntel, ...esBlog, ...esPodcast, ...esLogin, ...esSignup },
  tr: { ...tr, ...trPricing, ...trHome, ...trProof, ...trCheck, ...trDocs, ...trQuickstart, ...trCharts, ...trIntel, ...trBlog, ...trPodcast, ...trLogin, ...trSignup },
  ru: { ...ru, ...ruPricing, ...ruHome, ...ruProof, ...ruCheck, ...ruDocs, ...ruQuickstart, ...ruCharts, ...ruIntel, ...ruBlog, ...ruPodcast, ...ruLogin, ...ruSignup },
};

export function toLocale(x: string | undefined | null): Locale {
  return (LOCALES as readonly string[]).includes(x ?? "") ? (x as Locale) : DEFAULT_LOCALE;
}

/* Strip a leading /es|/tr|/ru segment → base path (always starts with "/"). */
export function stripLocale(pathname: string): string {
  const m = pathname.match(/^\/(es|tr|ru)(?=\/|$)/);
  if (!m) return pathname || "/";
  const rest = pathname.slice(3);
  return rest || "/";
}

/* Normalize a path to its lookup key: no locale prefix, no trailing slash. */
function baseKey(pathname: string): string {
  const base = stripLocale(pathname);
  return base !== "/" ? base.replace(/\/$/, "") : "/";
}

/* Where the language switcher should point for the CURRENT page. If the page
   isn't translated in the target locale, fall back to that locale's home. */
export function localizePath(pathname: string, locale: Locale): string {
  const key = baseKey(pathname);
  const target = TRANSLATED_PATHS.has(key) ? key : "/home";
  return locale === DEFAULT_LOCALE ? target : `/${locale}${target}`;
}

/* Where a NAV link should point given the active locale: keep the visitor in
   their locale for pages that are translated, otherwise link to the English
   original (docs, charts, blog … are English-only). */
export function navHref(pathname: string, locale: Locale): string {
  const key = baseKey(pathname.replace(/\/$/, "") || "/");
  if (locale !== DEFAULT_LOCALE && TRANSLATED_PATHS.has(key)) {
    return `/${locale}${key}`;
  }
  return pathname;
}

/* Top-nav section labels. Own map (not the t() dict) so English renders the
   English word and there's no collision with page-title keys. */
const NAV_LABELS: Record<string, Record<Locale, string>> = {
  check:      { en: "check",      es: "comprobar",     tr: "kontrol",         ru: "проверка" },
  docs:       { en: "docs",       es: "guías",         tr: "belgeler",        ru: "документы" },
  quickstart: { en: "quickstart", es: "inicio", tr: "başlangıç", ru: "старт" },
  proof:      { en: "proof",      es: "pruebas",       tr: "kanıt",           ru: "доказательства" },
  charts:     { en: "charts",     es: "gráficos",      tr: "grafikler",       ru: "графики" },
  pricing:    { en: "pricing",    es: "precios",       tr: "fiyatlar",        ru: "цены" },
  intel:      { en: "intel",      es: "inteligencia",  tr: "istihbarat",      ru: "аналитика" },
  blog:       { en: "blog",       es: "blog",          tr: "blog",            ru: "блог" },
  podcast:    { en: "podcast",    es: "podcast",       tr: "podcast",         ru: "подкаст" },
};
export function navLabel(slug: string, locale: Locale): string {
  return NAV_LABELS[slug]?.[locale] ?? slug;
}

/* t(englishSource) → translated string for `locale`, English fallback. */
export function useTranslations(locale: Locale) {
  const table = DICT[locale] ?? {};
  return function t(en: string): string {
    if (locale === DEFAULT_LOCALE) return en;
    return table[en] ?? en;
  };
}
