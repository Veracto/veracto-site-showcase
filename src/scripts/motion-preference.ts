export const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');

/** Storage is optional, and the system preference always wins. */
export function userDisabledMotion() {
  try {
    return localStorage.getItem('organic-motion-disabled') === 'true';
  } catch {
    return false;
  }
}

export function motionDisabled() {
  return motionPreference.matches || userDisabledMotion();
}
