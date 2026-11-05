import {
  analyticsContext,
  analyticsLinkEvent,
  analyticsUrl,
} from '@/scripts/analytics-context';

type Payload = Record<string, unknown>;
type Tracker = {
  track: (payload: (value: Payload) => Payload) => Promise<void>;
};
declare global {
  interface Window {
    umami?: Tracker;
    veractoAnalyticsFilter?: (type: string, payload: Payload) => Payload | null;
  }
}
const preferenceKey = 'veracto.analytics.v1';
function storage(key: string) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}
export function initialiseAnalytics() {
  if (window.self !== window.top) return;
  const root = document.querySelector<HTMLElement>('[data-analytics-root]');
  const panel = root?.querySelector<HTMLElement>('.analytics-choice');
  if (!root || !panel) return;
  const excluded = () =>
    !!storage('umami.disabled') || navigator.doNotTrack === '1';
  const allowed = () => storage(preferenceKey) === 'on' && !excluded();
  if (new URLSearchParams(location.search).get('analytics') === 'exclude') {
    try {
      localStorage.setItem('umami.disabled', '1');
    } catch {
      return;
    }
  }
  const context = () =>
    analyticsContext(location.pathname, document.documentElement.lang);
  const send = (name?: string, position?: string) => {
    if (!allowed()) return;
    void window.umami?.track((payload) => ({
      ...payload,
      tag: document.documentElement.lang,
      ...(name ? { name } : {}),
      data: { ...context(), ...(position ? { position } : {}) },
    }));
  };
  let contactVisible = false;
  let contactSent = false;
  const contactView = () => {
    if (contactSent || !contactVisible || !allowed() || !window.umami) return;
    contactSent = true;
    send('contact_view', 'contact');
  };
  const contact = document.getElementById('contact');
  if (contact)
    new IntersectionObserver(
      ([entry]) => {
        contactVisible = (entry?.intersectionRatio ?? 0) >= 0.2;
        contactView();
      },
      { threshold: 0.2 },
    ).observe(contact);
  window.veractoAnalyticsFilter = (_type, payload) => {
    if (!allowed()) return null;
    return {
      ...payload,
      url: analyticsUrl(String(payload.url)),
      referrer: document.referrer ? new URL(document.referrer).origin : '',
    };
  };
  const load = () => {
    if (!allowed() || document.querySelector('[data-veracto-tracker]')) return;
    const tracker = document.createElement('script');
    tracker.src = '/a/script.js';
    tracker.defer = true;
    tracker.dataset.veractoTracker = '';
    tracker.dataset.websiteId = root.dataset.websiteId;
    tracker.dataset.autoPageview = 'false';
    tracker.dataset.doNotTrack = 'true';
    tracker.dataset.beforeSend = 'veractoAnalyticsFilter';
    tracker.dataset.domains = root.dataset.domains;
    tracker.onload = () => {
      send();
      contactView();
      // Recorder stores the page URL: skip any query string rather than collect
      // potentially private parameters. Consent remains a prerequisite.
      const startRecorder = () => {
        if (
          !allowed() ||
          location.search ||
          location.hash ||
          !/^\/(ru\/)?(organisations\/|researchers\/|research-teams\/)?$/.test(
            location.pathname,
          )
        )
          return;
        const recorder = document.createElement('script');
        recorder.src = '/a/recorder.js';
        recorder.defer = true;
        recorder.dataset.websiteId = root.dataset.websiteId;
        document.head.append(recorder);
      };
      if ('requestIdleCallback' in window)
        window.requestIdleCallback(startRecorder, { timeout: 3000 });
      else setTimeout(startRecorder, 1000);
    };
    document.head.append(tracker);
  };
  panel.hidden = storage(preferenceKey) !== null || excluded();
  root
    .querySelector('[data-analytics-settings]')
    ?.addEventListener('click', () => {
      panel.hidden = !panel.hidden;
      const note = root.querySelector<HTMLElement>('[data-analytics-excluded]');
      if (note) note.hidden = !excluded();
    });
  root.addEventListener('click', (event) => {
    if (!(event.target instanceof Element)) return;
    const choice = event.target.closest<HTMLElement>('[data-analytics-choice]')
      ?.dataset.analyticsChoice;
    if (!choice) return;
    panel.hidden = true;
    try {
      localStorage.setItem(preferenceKey, choice);
    } catch {
      return; // Without stored consent, collection stays off.
    }
    panel.hidden = true;
    if (choice === 'off' && window.umami) location.reload();
    else load();
  });
  window.addEventListener('pageshow', (event) => {
    if (!event.persisted || !allowed() || !window.umami) return;
    send();
    contactSent = false;
    contactView();
  });
  window.addEventListener('storage', (event) => {
    if (event.key === preferenceKey || event.key === 'umami.disabled')
      location.reload();
  });
  document.addEventListener(
    'click',
    (event) => {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest<HTMLAnchorElement>('a[href]');
      if (!link) return;
      const name = analyticsLinkEvent(link.href, location.href);
      if (name)
        send(
          name,
          link.closest('.hero')
            ? 'hero'
            : link.closest('header')
              ? 'header'
              : link.closest('footer')
                ? 'footer'
                : link.closest('section')?.id || 'content',
        );
    },
    { capture: true },
  );
  load();
}
