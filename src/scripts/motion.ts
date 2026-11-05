import { motionDisabled } from '@/scripts/motion-preference';
import {
  navigationBlocksMotion,
  navigationBottom,
} from '@/scripts/navigation-state';
import { observeMotion } from '@/scripts/motion-runtime';
import { createScene } from '@/scripts/scene-player';

/** The only live micro-motion is the finite reveal of an empty divider. */
if (typeof IntersectionObserver !== 'undefined') {
  let active: ReturnType<typeof createScene> | undefined;
  let activeRoot: HTMLElement | undefined;
  const schedule = observeMotion(
    () => {
      if (
        motionDisabled() ||
        document.hidden ||
        navigationBlocksMotion() ||
        (activeRoot &&
          activeRoot.getBoundingClientRect().top < navigationBottom())
      )
        active?.finish('static');
    },
    (persisted) => {
      active?.finish();
      if (!persisted) observer.disconnect();
    },
    () => active?.finish(),
  );
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const root = entry.target as HTMLElement;
        if (!entry.isIntersecting || entry.intersectionRatio < 0.25) {
          if (root.getAttribute('data-micro-active') === 'true')
            active?.finish();
          continue;
        }
        observer.unobserve(root);
        if (
          motionDisabled() ||
          document.hidden ||
          navigationBlocksMotion() ||
          root.getBoundingClientRect().top < navigationBottom()
        )
          continue;
        if (active && !active.done) continue;
        root.dataset.microActive = 'true';
        activeRoot = root;
        active = createScene({
          root,
          attribute: 'data-micro-state',
          notify: schedule,
          onFinish: () => {
            delete root.dataset.microActive;
          },
          build: () => {
            const style = getComputedStyle(document.documentElement);
            const time = style.getPropertyValue('--motion-detail').trim();
            const duration =
              Number.parseFloat(time) * (time.endsWith('ms') ? 1 : 1000);
            const effect = root.animate(
              [{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)' }],
              {
                duration,
                easing: style.getPropertyValue('--motion-ease').trim(),
                fill: 'backwards',
              },
            );
            effect.pause();
            effect.currentTime = 0;
            return [effect];
          },
        });
        active.play();
      }
    },
    { threshold: [0, 0.25] },
  );
  document
    .querySelectorAll<HTMLElement>('[data-motion="draw"]')
    .forEach((root) => observer.observe(root));
}
