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
  "/about",
  "/proof",
  "/contact",
]);

const DICT: Record<Locale, Record<string, string>> = {
  en: {},
  es: { ...es, ...esPricing, ...esHome, ...esProof },
  tr: { ...tr, ...trPricing, ...trHome, ...trProof },
  ru: { ...ru, ...ruPricing, ...ruHome, ...ruProof },
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

/* t(englishSource) → translated string for `locale`, English fallback. */
export function useTranslations(locale: Locale) {
  const table = DICT[locale] ?? {};
  return function t(en: string): string {
    if (locale === DEFAULT_LOCALE) return en;
    return table[en] ?? en;
  };
}
