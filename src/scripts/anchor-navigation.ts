import { navigateWithTransition } from '@/scripts/page-transitions';
import { motionDisabled } from '@/scripts/motion-preference';

const storageKey = 'veracto-scroll-target';

function scrollToTarget(id: string) {
  const target = document.getElementById(id);
  if (!target) return;
  target.scrollIntoView({
    behavior: motionDisabled() ? 'instant' : 'smooth',
    block: 'start',
  });
  const hadTabIndex = target.hasAttribute('tabindex');
  if (!hadTabIndex) target.setAttribute('tabindex', '-1');
  target.focus({ preventScroll: true });
  if (!hadTabIndex)
    target.addEventListener('blur', () => target.removeAttribute('tabindex'), {
      once: true,
    });
}

export function initialiseAnchorNavigation() {
  document.addEventListener('click', (event) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.ctrlKey ||
      event.metaKey ||
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
    const url = new URL(link.href, location.href);
    if (url.origin !== location.origin || !url.hash) return;
    let id: string;
    try {
      id = decodeURIComponent(url.hash.slice(1));
    } catch {
      return;
    }
    const path = url.pathname + url.search;
    if (path === location.pathname + location.search) {
      if (!document.getElementById(id)) return;
      event.preventDefault();
      if (location.hash) history.replaceState(history.state, '', path);
      scrollToTarget(id);
    } else {
      try {
        sessionStorage.setItem(storageKey, JSON.stringify({ path, id }));
      } catch {
        return;
      }
      event.preventDefault();
      navigateWithTransition(path);
    }
  });

  try {
    const stored = sessionStorage.getItem(storageKey);
    sessionStorage.removeItem(storageKey);
    if (!stored) return;
    const target: unknown = JSON.parse(stored);
    if (
      typeof target !== 'object' ||
      target === null ||
      !('path' in target) ||
      !('id' in target) ||
      target.path !== location.pathname + location.search ||
      typeof target.id !== 'string'
    )
      return;
    const id = target.id;
    void document.fonts.ready.then(() => {
      requestAnimationFrame(() => scrollToTarget(id));
    });
  } catch {
    // Native links remain available when optional browser storage is blocked.
  }
}
