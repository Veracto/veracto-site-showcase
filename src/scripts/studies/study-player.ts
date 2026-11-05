import { narrativePlaybackRate } from '@/scripts/narrative-timing';
import { buildStudyEffects, isRendered } from '@/scripts/studies/study-effects';
import { mobileEntry } from '@/scripts/studies/mobile-entry';
import { createScene } from '@/scripts/scene-player';
import { motionDisabled } from '@/scripts/motion-preference';
import {
  navigationBlocksMotion,
  navigationBottom,
} from '@/scripts/navigation-state';
import {
  groupActive,
  observeMotion,
  setGroupActive,
} from '@/scripts/motion-runtime';

const wide = matchMedia('(min-width: 48rem)');
let active: ReturnType<typeof mount>[] = [];
const schedule = observeMotion(
  check,
  () => {
    players.forEach((player) => {
      player.interrupt();
      player.pause();
    });
    active = [];
    setGroupActive('study', false);
  },
  () => {
    if (players.map((player) => player.resize()).some(Boolean)) {
      active.forEach((player) => player.pause());
      active = [];
    }
  },
);
function mount(root: HTMLElement) {
  const entry = mobileEntry(root, schedule);
  const duration = Number(root.dataset.duration ?? 6000);
  const requestedSpeed = Number(
    root.closest<HTMLElement>('[data-study-speed]')?.dataset.studySpeed ?? 1,
  );
  const mobileSpeed = Number(
    root.closest<HTMLElement>('[data-study-mobile-speed]')?.dataset
      .studyMobileSpeed ?? requestedSpeed,
  );
  const graphic = () =>
    [...root.querySelectorAll<HTMLElement | SVGElement>('.study-motion')].find(
      isRendered,
    );
  const visibleCues = () =>
    [...root.querySelectorAll<HTMLElement | SVGElement>('[data-fx]')].filter(
      isRendered,
    );
  let builtFor = graphic();
  let builtWide = wide.matches;
  let builtCues = visibleCues();
  const focus = root.querySelector<HTMLElement>('[data-focus]');
  const scene = createScene({
    playbackRate: narrativePlaybackRate,
    root,
    attribute: 'data-study-state',
    notify: schedule,
    onFinish: () => entry.cancel(),
    build: () => {
      const selected = wide.matches ? requestedSpeed : mobileSpeed;
      return buildStudyEffects(
        root,
        duration,
        Number.isFinite(selected) && selected > 0 ? selected : 1,
      );
    },
  });
  return {
    ...scene,
    get done() {
      return scene.done;
    },
    interrupt: entry.cancel,
    play() {
      entry.start();
      scene.play();
    },
    visible() {
      if (!wide.matches) {
        const state = entry.inspect();
        if (state === 'static') scene.finish('static');
        return state === 'ready';
      }
      const current = graphic();
      if (!current || !focus) return false;
      const g = current.getBoundingClientRect();
      const f = focus.getBoundingClientRect();
      const top = navigationBottom();
      return (
        f.top >= top &&
        f.bottom <= innerHeight &&
        Math.min(g.bottom, innerHeight) - Math.max(g.top, top) >=
          Math.min(g.height, innerHeight - top) * 0.65
      );
    },
    resize() {
      entry.cancel();
      if (scene.done) return false;
      const nextCues = visibleCues();
      if (
        builtFor === graphic() &&
        builtWide === wide.matches &&
        builtCues.length === nextCues.length &&
        builtCues.every((cue, index) => cue === nextCues[index])
      )
        return false;
      entry.reset();
      builtFor = graphic();
      builtWide = wide.matches;
      builtCues = nextCues;
      scene.rebuild();
      return true;
    },
  };
}
const players = [
  ...document.querySelectorAll<HTMLElement>('[data-study-step]'),
].map(mount);
function check() {
  if (motionDisabled()) {
    players.forEach((player) => player.finish('static'));
    setGroupActive('study', false);
    return;
  }
  if (
    document.hidden ||
    navigationBlocksMotion() ||
    (wide.matches && groupActive('revision'))
  ) {
    players.forEach((player) => player.interrupt());
    active.forEach((player) => player.pause());
    active = [];
    setGroupActive('study', false);
    return;
  }
  const desired = wide.matches
    ? [
        active.find((player) => !player.done && player.visible()) ??
          players.find((player) => !player.done && player.visible()),
      ].filter(
        (player): player is ReturnType<typeof mount> => player !== undefined,
      )
    : players.filter((player) => !player.done && player.visible());
  active
    .filter((player) => !desired.includes(player))
    .forEach((player) => player.pause());
  desired
    .filter((player) => !active.includes(player))
    .forEach((player) => player.play());
  active = desired;
  setGroupActive(
    'study',
    active.some((player) => !player.done),
  );
}
schedule();
