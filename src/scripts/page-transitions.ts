import {
  motionDisabled,
  userDisabledMotion,
} from '@/scripts/motion-preference';

let outgoing: Animation | undefined;
let destination: string | undefined;

/** Keep the old page visible while the next document loads. */
export function navigateWithTransition(url: string) {
  if (motionDisabled() || !document.body.animate) {
    location.assign(url);
    return;
  }
  destination = url;
  if (outgoing) return;
  const duration =
    parseFloat(
      getComputedStyle(document.body).getPropertyValue('--motion-feedback'),
    ) || 160;
  outgoing = document.body.animate(
    [
      { opacity: Number(getComputedStyle(document.body).opacity) },
      { opacity: 0.35 },
    ],
    {
      duration,
      easing: 'ease-out',
      fill: 'forwards',
    },
  );
  void outgoing.finished.then(() => {
    if (destination) location.assign(destination);
  });
}

export function initialisePageTransitions() {
  const sync = () => {
    document.documentElement.dataset.motionDisabled = String(
      userDisabledMotion() || typeof document.body.animate !== 'function',
    );
  };
  sync();
  window.addEventListener('storage', sync);
  // A restored document does not rerun its initial CSS entrance.
  window.addEventListener('pageshow', (event) => {
    if (!event.persisted) return;
    outgoing?.cancel();
    outgoing = undefined;
    destination = undefined;
    sync();
    if (motionDisabled() || typeof document.body.animate !== 'function') return;
    const entrance = document.body.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 160,
      easing: 'ease-out',
    });
    void entrance.finished.then(() => entrance.cancel());
  });
  document.addEventListener('click', (event) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      !(event.target instanceof Element)
    )
      return;
    const link = event.target.closest<HTMLAnchorElement>('a[href]');
    if (
      !link ||
      link.hasAttribute('download') ||
      (link.target && link.target !== '_self')
    )
      return;
    const url = new URL(link.href);
    if (
      url.origin !== location.origin ||
      url.hash ||
      url.pathname + url.search === location.pathname + location.search ||
      motionDisabled()
    )
      return;
    event.preventDefault();
    navigateWithTransition(url.href);
  });
}
