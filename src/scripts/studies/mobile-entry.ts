import { navigationBottom } from '@/scripts/navigation-state';

/** Stable episode geometry, never the transform of an animated child. */
export function mobileEntry(root: HTMLElement, notify: () => void) {
  let started = false;
  let since: number | undefined;
  let timer: ReturnType<typeof setTimeout> | undefined;
  const dwell = 250;
  function cancel() {
    clearTimeout(timer);
    timer = undefined;
    since = undefined;
  }
  return {
    cancel,
    start() {
      started = true;
      cancel();
    },
    reset() {
      started = false;
      cancel();
    },
    inspect(): 'static' | 'ready' | 'wait' {
      const rect = root.getBoundingClientRect();
      const top = navigationBottom();
      const rem = Number.parseFloat(
        getComputedStyle(document.documentElement).fontSize,
      );
      const reserve = Math.min(3 * rem, innerHeight * 0.1);
      const bottom = innerHeight - reserve;
      const available = bottom - top;
      // Oversized text/landscape keeps the complete static illustration.
      if (rect.height > available || available <= 0) {
        cancel();
        return 'static';
      }
      if (started) {
        const shown =
          Math.min(rect.bottom, innerHeight) - Math.max(rect.top, top);
        return shown >= Math.min(rect.height, innerHeight - top) * 0.35
          ? 'ready'
          : 'wait';
      }
      if (rect.height <= 0 || rect.top < top || rect.bottom > bottom) {
        cancel();
        return 'wait';
      }
      const now = performance.now();
      since ??= now;
      const remaining = dwell - (now - since);
      if (remaining <= 0) return 'ready';
      if (timer === undefined)
        timer = setTimeout(() => {
          timer = undefined;
          notify();
        }, remaining);
      return 'wait';
    },
  };
}
