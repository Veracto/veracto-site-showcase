/** Navigation owns this DOM contract; animation controllers use this API. */
export function navigationBlocksMotion() {
  const header = document.querySelector('.site-header');
  const menu = header?.querySelector<HTMLDetailsElement>('.primary-menu');
  if (!header || !menu) return false;
  if (header.contains(document.activeElement)) return true;
  if (!menu.open) return false;
  return (
    !matchMedia('(min-width: 70rem)').matches ||
    Boolean(menu.querySelector('.nav-group details[open]'))
  );
}

export function navigationBottom() {
  return Math.max(
    0,
    document.querySelector('.site-header')?.getBoundingClientRect().bottom ?? 0,
  );
}
