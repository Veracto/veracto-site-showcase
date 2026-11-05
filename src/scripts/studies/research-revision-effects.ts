const ease = 'cubic-bezier(.22,1,.36,1)';

export function buildRevisionEffects(
  root: HTMLElement,
  time: number,
  length = 3900,
) {
  const effects: Animation[] = [];
  const kind = root.dataset.revisionChapter;
  function cue(
    name: string,
    from: Keyframe,
    to: Keyframe,
    start: number,
    end: number,
    leave = false,
  ) {
    const target = root.querySelector<HTMLElement | SVGElement>(
      `[data-cue="${name}"]`,
    );
    if (!target) return;
    const frames: Keyframe[] = [
      { ...from, offset: 0 },
      { ...from, offset: start, easing: ease },
      { ...to, offset: end },
    ];
    if (leave)
      frames.push({ ...to, offset: 0.78 }, { ...to, opacity: 0, offset: 0.88 });
    frames.push({ ...to, ...(leave ? { opacity: 0 } : {}), offset: 1 });
    const effect = target.animate(frames, { duration: length, fill: 'both' });
    effect.pause();
    effect.currentTime = time;
    effects.push(effect);
  }
  cue(
    'back',
    { transform: 'translate(-.5rem,.5rem) rotate(-2deg)' },
    { transform: 'none' },
    0,
    0.18,
  );
  cue(
    'paper',
    { clipPath: 'inset(0 0 100% 0)' },
    { clipPath: 'inset(0 0 0% 0)' },
    0,
    0.2,
  );
  cue(
    'wash',
    { transform: 'scaleX(0)' },
    { transform: 'scaleX(1)' },
    0.16,
    0.43,
  );
  cue(
    'ink',
    { strokeDasharray: '1', strokeDashoffset: '1' },
    { strokeDasharray: '1', strokeDashoffset: '0' },
    0.35,
    0.66,
  );
  cue(
    'rule',
    { transform: 'scaleX(0)' },
    { transform: 'scaleX(1)' },
    0.47,
    0.62,
  );
  cue(
    'field',
    { clipPath: 'inset(0 100% 0 0)' },
    { clipPath: 'inset(0 0% 0 0)' },
    kind === 'draft' ? 0.1 : 0.6,
    kind === 'draft' ? 0.3 : 0.82,
  );
  cue(
    'thread',
    { strokeDasharray: '1', strokeDashoffset: '1' },
    { strokeDasharray: '1', strokeDashoffset: '0' },
    0.66,
    0.9,
  );
  cue('tip', { opacity: 0 }, { opacity: 1 }, 0.86, 0.9);
  cue(
    'receiver',
    { transform: 'translateY(.7rem) rotate(-12deg)', opacity: 0.25 },
    { transform: 'none', opacity: 1 },
    0.8,
    0.95,
  );
  if (kind === 'review' || kind === 'draft') {
    cue(
      'pen',
      { left: '0%', opacity: 0, transform: 'translateY(.3rem)' },
      { left: 'calc(100% - 4.5rem)', opacity: 1, transform: 'none' },
      0.35,
      0.66,
      true,
    );
  }
  return effects;
}
