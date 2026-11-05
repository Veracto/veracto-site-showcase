import type { RefreshId } from '@/content/visualization-refresh.schema';
import { storyLayout } from '@/views/storyLab/scripts/refresh-story-layout';
export function storyEffects(root: HTMLElement, id: RefreshId) {
  const tokens = getComputedStyle(document.documentElement);
  const token = tokens.getPropertyValue('--motion-structure').trim();
  const milliseconds =
    Number.parseFloat(token) * (token.endsWith('ms') ? 1 : 1000);
  const duration = (milliseconds || 560) * 6;
  const easing = tokens.getPropertyValue('--motion-ease').trim();
  const effects: Animation[] = [];
  const animate = (
    target: Element,
    frames: Keyframe[],
    delay = 0,
    length = duration,
  ) => {
    const effect = target.animate(
      frames.map((frame) => ({ ...frame, easing })),
      {
        duration: length,
        delay,
        easing: 'linear',
        fill: 'both',
      },
    );
    effect.pause();
    effects.push(effect);
  };
  // The clock finishes after every shorter, delayed effect has completed.
  animate(root.querySelector('svg')!, [{ opacity: 1 }, { opacity: 1 }]);
  const layout = storyLayout(id);
  root.querySelectorAll('[data-story-packet]').forEach((packet, index) => {
    animate(
      packet,
      layout.flights[index]!.frames.map(
        ({ point: [x, y], offset, opacity }) => ({
          transform: `translate(${x}px, ${y}px)`,
          offset,
          opacity,
        }),
      ),
    );
  });
  const steps = root
    .closest('[data-refresh-story]')!
    .querySelectorAll('[data-story-step]');
  const halos = root.querySelectorAll('[data-story-halo]');
  const count = steps.length;
  steps.forEach((step, index) => {
    const delay = (index * duration) / count;
    animate(
      step,
      [
        { borderColor: tokens.getPropertyValue('--line').trim() },
        {
          borderColor: tokens.getPropertyValue('--forest').trim(),
          offset: 0.2,
        },
        {
          borderColor: tokens.getPropertyValue('--forest').trim(),
          offset: 0.8,
        },
        { borderColor: tokens.getPropertyValue('--line').trim() },
      ],
      delay,
      duration / count,
    );
  });
  halos.forEach((halo, index) => {
    // Equal comparison: the same checkpoint lights up for all options together.
    const delay =
      id === 'organisation' ? duration / 3 : (index * duration) / halos.length;
    animate(
      halo,
      [
        { opacity: 0.25 },
        { opacity: 1, offset: 0.3 },
        { opacity: 1, offset: 0.7 },
        { opacity: 0.25 },
      ],
      delay,
      duration / halos.length,
    );
  });
  return effects;
}
