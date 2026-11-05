import { motionDisabled } from '@/scripts/motion-preference';
import { observeMotion } from '@/scripts/motion-runtime';
import {
  navigationBlocksMotion,
  navigationBottom,
} from '@/scripts/navigation-state';

const plots = Array.from(
  document.querySelectorAll<HTMLElement>('[data-market-plot]'),
);
if (!motionDisabled() && typeof Element.prototype.animate === 'function') {
  plots.forEach((plot) => {
    plot.dataset.marketState = 'pending';
  });
}
const completed = new Set<HTMLElement>();
const active = new Map<HTMLElement, Animation[]>();
const css = getComputedStyle(document.documentElement);
const milliseconds = (name: string) => {
  const value = css.getPropertyValue(name).trim();
  return parseFloat(value) * (value.endsWith('ms') ? 1 : 1000);
};
function finish(plot: HTMLElement) {
  active.get(plot)?.forEach((effect) => effect.cancel());
  active.delete(plot);
  completed.add(plot);
  plot.dataset.marketState = 'complete';
}
function check() {
  for (const plot of plots) {
    if (completed.has(plot)) continue;
    if (motionDisabled() || !Element.prototype.animate) {
      finish(plot);
      continue;
    }
    const bounds = plot.getBoundingClientRect();
    const top = navigationBottom();
    const availableHeight = innerHeight - top;
    const visibleHeight = Math.max(
      0,
      Math.min(bounds.bottom, innerHeight) - Math.max(bounds.top, top),
    );
    const readable =
      bounds.height <= availableHeight
        ? bounds.top >= top && bounds.bottom <= innerHeight
        : visibleHeight >= availableHeight * 0.8;
    const visible = !document.hidden && !navigationBlocksMotion() && readable;
    if (active.has(plot)) {
      if (!visible) finish(plot);
      continue;
    }
    if (!visible) continue;
    try {
      const effects = Array.from(
        plot.querySelectorAll<SVGRectElement>('.market-bar'),
      ).map((bar, index) =>
        bar.animate([{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)' }], {
          duration: milliseconds('--motion-structure'),
          delay: Math.min(index, 3) * milliseconds('--motion-stagger'),
          easing: css.getPropertyValue('--motion-ease').trim(),
          fill: 'backwards',
        }),
      );
      active.set(plot, effects);
      plot.dataset.marketState = 'playing';
      Promise.all(effects.map((effect) => effect.finished))
        .then(() => finish(plot))
        .catch(() => finish(plot));
    } catch {
      finish(plot);
    }
  }
}
observeMotion(check, () => plots.forEach(finish))();
