export const locales = [
  "ja",
  "en",
  "zh-CN",
  "ko",
  "es",
  "de",
  "fr",
  "pt",
] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  ja: "日本語",
  en: "English",
  "zh-CN": "简体中文",
  ko: "한국어",
  es: "Español",
  de: "Deutsch",
  fr: "Français",
  pt: "Português",
};

export const localeFlags: Record<Locale, string> = {
  ja: "🇯🇵",
  en: "🇺🇸",
  "zh-CN": "🇨🇳",
  ko: "🇰🇷",
  es: "🇪🇸",
  de: "🇩🇪",
  fr: "🇫🇷",
  pt: "🇧🇷",
};
