import { disclosureMotion } from '@/scripts/disclosure-motion';
import { userDisabledMotion } from '@/scripts/motion-preference';

export function initialiseSiteNavigation() {
  const menu = document.querySelector<HTMLDetailsElement>('.primary-menu');
  const navigation = menu?.querySelector<HTMLElement>('nav');
  if (!menu || !navigation) return;
  const menuMotion = disclosureMotion(menu, navigation);
  menu.dataset.enhanced = 'true';
  const syncMotion = () => {
    menu.dataset.motionDisabled = String(userDisabledMotion());
  };
  syncMotion();
  window.addEventListener('storage', (event) => {
    if (event.key === 'organic-motion-disabled' || event.key === null)
      syncMotion();
  });
  const desktop = matchMedia('(min-width: 70rem)');
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
  const groups = [
    ...menu.querySelectorAll<HTMLDetailsElement>('.nav-group details'),
  ];
  const motions = new Map(
    groups.map((group) => [
      group,
      disclosureMotion(group, group.querySelector<HTMLElement>('ul')!),
    ]),
  );
  const sync = () => {
    menuMotion.setOpen(desktop.matches, false);
    groups.forEach((group) =>
      motions.get(group)!.setOpen(!desktop.matches, false),
    );
  };
  sync();
  desktop.addEventListener('change', sync);
  groups.forEach((group) => {
    let timer: ReturnType<typeof setTimeout>;
    let openedByPointer = false;
    const summary = group.querySelector('summary');
    const motion = motions.get(group)!;
    const openGroup = () => motion.setOpen(true);
    group.addEventListener('pointerenter', () => {
      clearTimeout(timer);
      if (desktop.matches && finePointer.matches) {
        openedByPointer = true;
        openGroup();
      }
    });
    group.addEventListener('pointerleave', () => {
      if (!desktop.matches || !finePointer.matches) return;
      timer = setTimeout(() => {
        if (openedByPointer || !group.contains(document.activeElement)) {
          if (group.contains(document.activeElement)) summary?.focus();
          motion.setOpen(false);
        }
      }, 160);
    });
    group.addEventListener('focusout', () => {
      if (!desktop.matches) return;
      timer = setTimeout(() => {
        if (!group.contains(document.activeElement) && !group.matches(':hover'))
          motion.setOpen(false);
      }, 160);
    });
    summary?.addEventListener('click', (event) => {
      event.preventDefault();
      if (!desktop.matches) return;
      if (finePointer.matches && event.detail > 0) {
        event.preventDefault();
        openedByPointer = true;
        openGroup();
      } else {
        motion.setOpen(!motion.isOpen());
      }
    });
    group.addEventListener('keydown', (event) => {
      openedByPointer = false;
      if (event.key !== 'Escape' || !desktop.matches || !group.open) return;
      event.preventDefault();
      event.stopPropagation();
      clearTimeout(timer);
      motion.setOpen(false);
      summary?.focus();
    });
  });
  document.addEventListener('pointerdown', (event) => {
    if (!desktop.matches || !(event.target instanceof Node)) return;
    groups.forEach((group) => {
      if (!group.contains(event.target as Node))
        motions.get(group)!.setOpen(false);
    });
  });
  menu.querySelector('summary')?.addEventListener('click', (event) => {
    if (desktop.matches) return;
    event.preventDefault();
    menuMotion.setOpen(!menuMotion.isOpen());
  });
  menu.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape' || desktop.matches) return;
    event.preventDefault();
    menuMotion.setOpen(false);
    menu.querySelector('summary')?.focus();
  });
}
