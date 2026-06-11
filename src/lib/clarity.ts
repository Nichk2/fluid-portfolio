const CLARITY_ID = import.meta.env.VITE_CLARITY_ID;

export function initClarity(): void {
  if (!import.meta.env.PROD || !CLARITY_ID) return;

  (function (c, l, a, r, i, t, y) {
    c[a] =
      c[a] ||
      function (...args: unknown[]) {
        (c[a].q = c[a].q || []).push(args);
      };
    t = l.createElement(r) as HTMLScriptElement;
    t.async = true;
    t.src = "https://www.clarity.ms/tag/" + i;
    y = l.getElementsByTagName(r)[0];
    y.parentNode?.insertBefore(t, y);
  })(window, document, "clarity", "script", CLARITY_ID);
}

export function trackClarityPage(page: string): void {
  if (!import.meta.env.PROD || !CLARITY_ID) return;
  window.clarity?.("set", "page", page);
}
