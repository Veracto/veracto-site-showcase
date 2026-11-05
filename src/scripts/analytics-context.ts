export function analyticsUrl(value: string) {
  const url = new URL(value);
  url.hash = '';
  const query = new URLSearchParams();
  for (const key of ['utm_source', 'utm_medium', 'utm_campaign']) {
    const value = url.searchParams.get(key);
    if (value && /^[\w-]{1,64}$/.test(value)) query.set(key, value);
  }
  url.search = query.toString();
  return url.href;
}

export function analyticsContext(path: string, language: string) {
  const page = path.replace(/^\/ru(?=\/|$)/, '') || '/';
  const audience = ['organisations', 'researchers', 'research-teams'].find(
    (route) => page === `/${route}/`,
  );
  return { page, language, audience: audience ?? 'general' };
}

export function analyticsLinkEvent(href: string, current: string) {
  const target = new URL(href, current);
  const source = new URL(current);
  if (target.protocol === 'mailto:') return 'email_click';
  if (target.hostname === 't.me') return 'telegram_click';
  if (target.hostname === 'docs.veracto.ai') return 'docs_click';
  if (target.origin !== source.origin) return;
  if (target.pathname.startsWith('/ru/') !== source.pathname.startsWith('/ru/'))
    return 'language_change';
  if (target.hash === '#contact') return 'primary_cta';
  if (
    /^\/(ru\/)?(organisations|researchers|research-teams)\/$/.test(
      target.pathname,
    )
  )
    return 'audience_click';
  return undefined;
}
