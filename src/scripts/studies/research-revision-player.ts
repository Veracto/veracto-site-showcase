import { narrativePlaybackRate } from '@/scripts/narrative-timing';
import { buildRevisionEffects } from '@/scripts/studies/research-revision-effects';
import { mobileEntry } from '@/scripts/studies/mobile-entry';
import { createScene } from '@/scripts/scene-player';
import { motionDisabled } from '@/scripts/motion-preference';
import {
  navigationBlocksMotion,
  navigationBottom,
} from '@/scripts/navigation-state';
import { observeMotion, setGroupActive } from '@/scripts/motion-runtime';

const wide = matchMedia('(min-width: 48rem)');
const roots = [
  ...document.querySelectorAll<HTMLElement>('[data-revision-chapter]'),
];
let active: ReturnType<typeof mount>[] = [];
const requestCheck = observeMotion(
  check,
  () => {
    players.forEach((player) => {
      player.interrupt();
      player.pause();
    });
    active = [];
    setGroupActive('revision', false);
  },
  () => players.forEach((player) => player.interrupt()),
);
function mount(root: HTMLElement) {
  const entry = mobileEntry(root, requestCheck);
  let paired = isTwoColumn();
  const paper = root.querySelector<HTMLElement>('.revision-paper');
  const focus = root.querySelector<HTMLElement>('.claim-focus');
  const scene = createScene({
    playbackRate: narrativePlaybackRate,
    root,
    attribute: 'data-revision-state',
    notify: requestCheck,
    onFinish: () => entry.cancel(),
    build: () => buildRevisionEffects(root, 0, paired ? 3900 : 1900),
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
      if (!paper || !focus) return false;
      const rect = paper.getBoundingClientRect();
      const text = focus.getBoundingClientRect();
      const top = navigationBottom();
      const shown = Math.max(
        0,
        Math.min(rect.bottom, innerHeight) - Math.max(rect.top, top),
      );
      return (
        shown >= Math.min(rect.height, innerHeight - top) * 0.65 &&
        text.top >= top &&
        text.bottom <= innerHeight
      );
    },
    refreshLayout(nextPaired: boolean) {
      if (scene.done || paired === nextPaired) return false;
      entry.reset();
      paired = nextPaired;
      scene.rebuild();
      return true;
    },
  };
}
const players = roots.map(mount);
function isTwoColumn() {
  const first = roots[0],
    second = roots[1];
  return (
    roots.length === 4 &&
    first !== undefined &&
    second !== undefined &&
    Math.abs(
      first.getBoundingClientRect().top - second.getBoundingClientRect().top,
    ) < 4
  );
}
function nextVisible() {
  for (let index = 0; index < players.length; index++) {
    const player = players[index];
    if (!player || player.done || !player.visible()) continue;
    const first = index - (index % 2);
    const pair = players.slice(first, first + 2);
    if (pair.every((player) => player.done || player.visible())) return pair;
  }
  return [];
}
function check() {
  const paired = isTwoColumn();
  if (players.map((player) => player.refreshLayout(paired)).some(Boolean))
    active = [];
  if (motionDisabled()) {
    players.forEach((player) => player.finish('static'));
    setGroupActive('revision', false);
    return;
  }
  if (document.hidden || navigationBlocksMotion()) {
    players.forEach((player) => player.interrupt());
    active.forEach((player) => player.pause());
    active = [];
    setGroupActive('revision', false);
    return;
  }
  if (
    active.some((player) => !player.done) &&
    active.every((player) => player.done || player.visible()) &&
    paired
  )
    return;
  const desired = paired
    ? nextVisible()
    : players.filter((player) => !player.done && player.visible());
  active
    .filter((player) => !desired.includes(player))
    .forEach((player) => player.pause());
  desired
    .filter((player) => !active.includes(player))
    .forEach((player) => player.play());
  active = desired;
  setGroupActive(
    'revision',
    active.some((player) => !player.done),
  );
}
requestCheck();
