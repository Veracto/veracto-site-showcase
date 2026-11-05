import { createScene } from '@/scripts/scene-player';
import { observeMotion } from '@/scripts/motion-runtime';
import { motionDisabled } from '@/scripts/motion-preference';
import type { RefreshId } from '@/content/visualization-refresh.schema';
import { storyEffects } from '@/views/storyLab/scripts/refresh-story-effects';

type Entry = {
  root: HTMLElement;
  art: HTMLElement;
  wanted: boolean;
  player?: ReturnType<typeof createScene>;
  sync: () => void;
  reset: () => void;
};
const scenes: Entry[] = [];
const schedule = observeMotion(check, () =>
  scenes.forEach(({ player }) => player?.pause()),
);
for (const root of document.querySelectorAll<HTMLElement>(
  '[data-refresh-story]',
)) {
  const art = root.querySelector<HTMLElement>('.refresh-story-art')!;
  const toggle = root.querySelector<HTMLButtonElement>('[data-story-toggle]')!;
  const replay = root.querySelector<HTMLButtonElement>('[data-story-replay]')!;
  const status = root.querySelector<HTMLElement>('[role="status"]')!;
  const entry: Entry = {
    root,
    art,
    wanted: false,
    sync,
    reset: () => {
      entry.player = makePlayer();
    },
  };
  function sync() {
    const state = art.getAttribute('data-refresh-state') ?? 'ready';
    toggle.textContent =
      state === 'running'
        ? root.dataset.pause!
        : state === 'paused'
          ? root.dataset.resume!
          : root.dataset.play!;
    toggle.disabled = state === 'static';
    replay.disabled = state === 'static' || state === 'ready';
    status.textContent = root.dataset[state] ?? root.dataset.ready!;
  }
  function makePlayer() {
    return createScene({
      root: art,
      attribute: 'data-refresh-state',
      notify: schedule,
      build: () => storyEffects(art, root.dataset.refreshStory as RefreshId),
      onFinish: () => {
        entry.wanted = false;
        sync();
      },
    });
  }
  function start(restart = false) {
    if (motionDisabled() || typeof art.animate !== 'function') return;
    if (restart || entry.player?.done) {
      entry.player?.finish();
      entry.player = makePlayer();
    }
    entry.wanted = true;
    const rect = art.getBoundingClientRect();
    if (rect.top < 0 || rect.bottom > innerHeight)
      art.scrollIntoView({ block: 'center', behavior: 'instant' });
    schedule();
  }
  toggle.addEventListener('click', () => {
    if (art.getAttribute('data-refresh-state') === 'running') {
      entry.wanted = false;
      entry.player?.pause();
      sync();
    } else start();
  });
  replay.addEventListener('click', () => start(true));
  entry.player = makePlayer();
  root.querySelector<HTMLElement>('.refresh-story-controls')!.hidden = false;
  scenes.push(entry);
  sync();
}
function check() {
  for (const entry of scenes) {
    const { root, art, player } = entry;
    if (motionDisabled() || typeof art.animate !== 'function') {
      player?.finish('static');
      entry.wanted = false;
      art.setAttribute('data-refresh-state', 'static');
      entry.sync();
      continue;
    }
    if (art.getAttribute('data-refresh-state') === 'static') {
      entry.reset();
      entry.sync();
      continue;
    }
    if (player?.done) continue;
    const rect = art.getBoundingClientRect();
    if (
      entry.wanted &&
      !document.hidden &&
      rect.top >= 0 &&
      rect.bottom <= innerHeight
    )
      player?.play();
    else if (art.getAttribute('data-refresh-state') === 'running')
      player?.pause();
    root.dataset.storyPlayback =
      art.getAttribute('data-refresh-state') ?? 'ready';
    entry.sync();
  }
}
schedule();
