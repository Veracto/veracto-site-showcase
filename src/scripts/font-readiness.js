/* global document, Event */
// Runs in the head before the first paint; no inline code or external origin.
(() => {
  if (!document.fonts) return;
  const root = document.documentElement;
  root.classList.add('fonts-loading');
  document.addEventListener(
    'DOMContentLoaded',
    async () => {
      const text =
        root.lang === 'ru' ? 'Veracto Research' : 'Veracto Research';
      try {
        await Promise.allSettled(
          [400, 500, 600, 700].map((weight) =>
            document.fonts.load(`${weight} 1em Manrope`, text),
          ),
        );
        await document.fonts.ready;
      } finally {
        // Failed font requests settle too: the page stays usable with fallback.
        root.classList.remove('fonts-loading');
        document.dispatchEvent(new Event('site-fonts-ready'));
      }
    },
    { once: true },
  );
})();
