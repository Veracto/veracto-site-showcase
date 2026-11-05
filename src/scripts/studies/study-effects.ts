export type StudyEffect =
  'draw' | 'draw-line' | 'grow' | 'assemble' | 'transfer' | 'unfold' | 'stamp';

export function isRendered(element: Element) {
  for (let node: Element | null = element; node; node = node.parentElement) {
    const style = getComputedStyle(node);
    if (style.display === 'none' || style.visibility === 'hidden') return false;
  }
  return element.getClientRects().length > 0;
}

const pacing: Record<StudyEffect, string> = {
  draw: 'linear',
  'draw-line': 'cubic-bezier(.45,0,.55,1)',
  grow: 'cubic-bezier(.45,0,.55,1)',
  assemble: 'cubic-bezier(.33,0,.67,1)',
  transfer: 'cubic-bezier(.45,0,.55,1)',
  unfold: 'cubic-bezier(.45,0,.55,1)',
  stamp: 'cubic-bezier(.2,.8,.3,1)',
};

export function studyFrames(kind: StudyEffect, from = '0,10'): Keyframe[] {
  const [x, y] = from.split(',').map(Number);
  if (kind === 'draw')
    return [
      { strokeDasharray: '1', strokeDashoffset: '1' },
      { strokeDasharray: '1', strokeDashoffset: '0' },
    ];
  if (kind === 'draw-line')
    return [{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)' }];
  if (kind === 'grow')
    return [{ transform: 'scaleY(0)' }, { transform: 'scaleY(1)' }];
  if (kind === 'unfold')
    return [{ clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)' }];
  if (kind === 'stamp')
    return [
      { transform: 'scale(1.45) rotate(-8deg)', opacity: 0 },
      { transform: 'scale(1) rotate(0deg)', opacity: 1 },
    ];
  if (kind === 'transfer')
    return [
      { transform: `translate(${x}px,${y}px)`, opacity: 0, offset: 0 },
      { transform: `translate(${x}px,${y}px)`, opacity: 1, offset: 0.12 },
      { transform: 'none', opacity: 1, offset: 0.8 },
      { transform: 'none', opacity: 0, offset: 1 },
    ];
  return [
    { transform: `translate(${x}px,${y}px)`, opacity: 0.25 },
    { transform: 'none', opacity: 1 },
  ];
}

export function buildStudyEffects(
  root: HTMLElement,
  duration: number,
  speed = 1,
) {
  return [...root.querySelectorAll<HTMLElement | SVGElement>('[data-fx]')]
    .filter(isRendered)
    .map((element) => {
      const start = Number(element.dataset.at ?? 0) / duration;
      const span = Number(element.dataset.for ?? 1000) / duration;
      const frames = studyFrames(
        element.dataset.fx as StudyEffect,
        element.dataset.from,
      );
      const timeline: Keyframe[] = [
        { ...frames[0], offset: 0 },
        ...frames.map((frame, i) => ({
          ...frame,
          easing: pacing[element.dataset.fx as StudyEffect],
          offset: start + (frame.offset ?? i / (frames.length - 1)) * span,
        })),
        { ...frames.at(-1), offset: 1 },
      ];
      const effect = element.animate(timeline, {
        duration: duration / speed,
        fill: 'both',
      });
      effect.pause();
      effect.currentTime = 0;
      return effect;
    });
}
