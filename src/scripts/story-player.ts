import { narrativePlaybackRate } from '@/scripts/narrative-timing';
import { createScene } from '@/scripts/scene-player';
import { motionDisabled } from '@/scripts/motion-preference';
import {
  navigationBlocksMotion,
  navigationBottom,
} from '@/scripts/navigation-state';
import { observeMotion } from '@/scripts/motion-runtime';

const ease = 'cubic-bezier(.22,1,.36,1)';
const duration = 12000;
let active: ReturnType<typeof mount> | undefined;
const schedule = observeMotion(
  check,
  (persisted) => {
    players.forEach((player) => (persisted ? player.pause() : player.finish()));
    active = undefined;
  },
  () => players.forEach((player) => player.pause()),
);
function frames(el: SVGElement): Keyframe[] {
  const start = Number(el.dataset.start || 0) / 12;
  const end = Math.min(Number(el.dataset.end || 1) / 12, 1);
  const [x, y] = (el.dataset.from || '0,0').split(',').map(Number);
  const initial: Keyframe = {
    opacity: el.hasAttribute('data-reveal') ? 0 : 1,
    transform: `translate(${x}px, ${y}px)`,
  };
  const final: Keyframe = { opacity: 1, transform: 'translate(0px, 0px)' };
  if (el.hasAttribute('data-draw')) {
    const length = (el as SVGGeometryElement).getTotalLength();
    Object.assign(initial, {
      strokeDasharray: `${length}`,
      strokeDashoffset: length,
    });
    Object.assign(final, { strokeDasharray: `${length}`, strokeDashoffset: 0 });
  }
  const values: Keyframe[] = [
    { ...initial, offset: 0 },
    { ...initial, offset: start, easing: ease },
    { ...final, offset: end },
    { ...final, offset: 1 },
  ];
  if (el.dataset.leave) {
    const at = Number(el.dataset.leave) / 12;
    values.splice(
      3,
      0,
      { ...final, offset: at },
      { ...final, opacity: 0, offset: Math.min(at + 0.04, 1) },
    );
    values[values.length - 1]!.opacity = 0;
  }
  return values;
}

function mount(root: HTMLElement) {
  const svg = root.querySelector('svg');
  let inView = false;
  const scene = createScene({
    playbackRate: narrativePlaybackRate,
    root,
    attribute: 'data-motion-state',
    notify: schedule,
    onFinish: (state) => {
      root.dataset.complete = 'true';
      root.dataset.reduced = String(state === 'static');
    },
    build: () => {
      if (!svg || typeof IntersectionObserver === 'undefined') return [];
      return [...svg.querySelectorAll<SVGElement>('[data-start]')].map(
        (element) => {
          const effect = element.animate(frames(element), {
            duration,
            fill: 'both',
          });
          effect.pause();
          effect.currentTime = 0;
          return effect;
        },
      );
    },
  });
  const api = {
    ...scene,
    get done() {
      return scene.done;
    },
    visible: () => inView,
    clear: () =>
      !svg ||
      !document.querySelector('.site-header') ||
      svg.getBoundingClientRect().top >= navigationBottom(),
  };
  if (svg && typeof IntersectionObserver !== 'undefined') {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        inView = entry.isIntersecting && entry.intersectionRatio >= 0.12;
        if (inView && !scene.done) {
          active?.pause();
          active = api;
        } else scene.pause();
        schedule();
      },
      { threshold: [0, 0.12, 0.5] },
    );
    observer.observe(svg);
    window.addEventListener(
      'pagehide',
      (event) => {
        if (!event.persisted) observer.disconnect();
      },
      { once: false },
    );
  }
  return api;
}
const players = [...document.querySelectorAll<HTMLElement>('[data-story]')].map(
  mount,
);
function check() {
  if (motionDisabled()) {
    players.forEach((player) => player.finish('static'));
    return;
  }
  if (document.hidden || navigationBlocksMotion()) {
    players.forEach((player) => player.pause());
    return;
  }
  if (!active || active.done || !active.visible())
    active = players.find((player) => !player.done && player.visible());
  if (active?.clear()) active.play();
  else active?.pause();
}
schedule();
