import { motionDisabled } from '@/scripts/motion-preference';

type Options = {
  root: HTMLElement;
  attribute: string;
  build: () => Animation[];
  playbackRate?: number;
  notify: () => void;
  onFinish?: (state: 'static' | 'complete') => void;
};

/** A finite scene always releases its effects to the complete CSS frame. */
export function createScene({
  root,
  attribute,
  build,
  playbackRate = 1,
  notify,
  onFinish,
}: Options) {
  let effects: Animation[] = [];
  let done = false;
  let elapsed = 0;
  function cancel() {
    effects.forEach((effect) => {
      effect.onfinish = null;
      effect.cancel();
    });
    effects = [];
  }
  function finish(state: 'static' | 'complete' = 'complete') {
    if (done) return;
    done = true;
    cancel();
    const final = motionDisabled() ? 'static' : state;
    root.setAttribute(attribute, final);
    onFinish?.(final);
    notify();
  }
  function rebuild() {
    if (done) return;
    cancel();
    elapsed = 0;
    root.setAttribute(attribute, 'ready');
    if (motionDisabled() || typeof root.animate !== 'function') {
      finish('static');
      return;
    }
    try {
      effects = build();
      effects.forEach((effect) => {
        effect.playbackRate = playbackRate;
      });
      if (!effects.length) finish('static');
    } catch {
      // build() can throw before returning its partially constructed array.
      root
        .getAnimations({ subtree: true })
        .forEach((effect) => effect.cancel());
      finish('static');
    }
  }
  rebuild();
  return {
    finish,
    rebuild,
    get done() {
      return done;
    },
    pause() {
      if (done || !effects.length) return;
      elapsed = Number(effects[0]?.currentTime ?? elapsed);
      effects.forEach((effect) => effect.pause());
      root.setAttribute(attribute, 'paused');
    },
    play() {
      if (done || !effects.length || root.getAttribute(attribute) === 'running')
        return;
      try {
        const now = Number(document.timeline.currentTime ?? 0);
        effects[0]!.onfinish = () => finish();
        effects.forEach((effect) => {
          effect.play();
          effect.startTime = now - elapsed / effect.playbackRate;
        });
        root.setAttribute(attribute, 'running');
      } catch {
        finish('static');
      }
    },
  };
}
