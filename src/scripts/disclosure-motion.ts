import { motionDisabled } from '@/scripts/motion-preference';

/** Keep details open until its exit finishes; reverse from the painted opacity. */
export function disclosureMotion(
  details: HTMLDetailsElement,
  panel: HTMLElement,
) {
  let target = details.open;
  let animation: Animation | undefined;
  const settle = (open: boolean) => {
    details.open = open;
    panel.inert = !open;
    animation?.cancel();
    animation = undefined;
  };
  return {
    isOpen: () => target,
    setOpen(open: boolean, animate = true) {
      if (target === open && !animation && details.open === open) return;
      target = open;
      details.dataset.disclosureOpen = String(open);
      const from = details.open ? Number(getComputedStyle(panel).opacity) : 0;
      animation?.cancel();
      animation = undefined;
      if (!animate || motionDisabled() || !panel.animate) {
        settle(open);
        return;
      }
      details.open = true;
      panel.inert = !open;
      const token = getComputedStyle(panel)
        .getPropertyValue('--motion-detail')
        .trim();
      const duration = token.endsWith('ms')
        ? parseFloat(token)
        : parseFloat(token) * 1000;
      const current = panel.animate(
        [{ opacity: from }, { opacity: open ? 1 : 0 }],
        {
          duration: Math.max(
            80,
            (duration || 320) * Math.abs(from - Number(open)),
          ),
          easing: getComputedStyle(panel)
            .getPropertyValue('--motion-ease')
            .trim(),
          fill: 'both',
        },
      );
      animation = current;
      void current.finished
        .then(() => {
          if (animation === current) settle(target);
        })
        .catch(() => {
          // Reversal or a breakpoint change intentionally cancels this animation.
        });
    },
  };
}
