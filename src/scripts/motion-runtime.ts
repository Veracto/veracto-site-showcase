import { motionPreference } from '@/scripts/motion-preference';

type Group = 'revision' | 'study';
const activeGroups = new Set<Group>();
const changes = new EventTarget();
export const groupActive = (group: Group) => activeGroups.has(group);
export function setGroupActive(group: Group, active: boolean) {
  if (active === activeGroups.has(group)) return;
  if (active) activeGroups.add(group);
  else activeGroups.delete(group);
  changes.dispatchEvent(new Event('change'));
}

/** Event-driven checks, with no idle frame loop and explicit page cleanup. */
export function observeMotion(
  check: () => void,
  exit: (persisted: boolean) => void,
  resize: () => void = () => {},
) {
  const listeners = new AbortController();
  const options = { signal: listeners.signal };
  let frame: number | undefined;
  function schedule() {
    if (listeners.signal.aborted || frame !== undefined) return;
    frame = requestAnimationFrame(() => {
      frame = undefined;
      if (!document.documentElement.classList.contains('fonts-loading'))
        check();
    });
  }
  for (const event of ['scroll', 'focusin', 'focusout', 'site-fonts-ready'])
    document.addEventListener(event, schedule, { ...options, passive: true });
  // Hidden documents may suspend rAF: stop their scenes synchronously.
  document.addEventListener(
    'visibilitychange',
    () => {
      if (!document.hidden) {
        schedule();
        return;
      }
      if (frame !== undefined) cancelAnimationFrame(frame);
      frame = undefined;
      check();
    },
    options,
  );
  document.addEventListener('toggle', schedule, { ...options, capture: true });
  window.addEventListener('storage', schedule, options);
  window.addEventListener('pageshow', schedule, options);
  window.addEventListener(
    'resize',
    () => {
      resize();
      schedule();
    },
    options,
  );
  motionPreference.addEventListener('change', schedule, options);
  changes.addEventListener('change', schedule, options);
  const observer =
    typeof ResizeObserver === 'undefined'
      ? undefined
      : new ResizeObserver(schedule);
  const main = document.querySelector('main');
  if (main) observer?.observe(main);
  document.fonts.ready.then(schedule);
  window.addEventListener(
    'pagehide',
    (event) => {
      exit(event.persisted);
      if (frame !== undefined) cancelAnimationFrame(frame);
      frame = undefined;
      if (!event.persisted) {
        observer?.disconnect();
        listeners.abort();
      }
    },
    options,
  );
  return schedule;
}
