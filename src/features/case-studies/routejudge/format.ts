/**
 * Locale-aware number formatting. Portuguese writes 93,3 and 1.674 where
 * English writes 93.3 and 1,674, so numbers interpolated into the copy go
 * through Intl instead of toString().
 */
export const formatNumber = (value: number, language: string, decimals = 1) =>
  new Intl.NumberFormat(language.startsWith("pt") ? "pt-BR" : "en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);

export const formatInt = (value: number, language: string) => formatNumber(value, language, 0);
