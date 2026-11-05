// Only these selected treatments are approved for public production release.
// Source: Tim explicitly requested the entire dev site be promoted on 2026-09-30.
// Originals, alternative candidates and PNG review masters remain private.
// Tim requested his resume portrait, with the shared paper background, on 2026-11-02.
export const portraitRegistry = {
  artem: 'artem-paper-v1',
  timofey: 'tim-paper-v1',
  ratner: 'ratner-paper-v1',
  romanenko: 'romanenko-paper-v1',
  shimanskaya: 'shimanskaya-paper-v1',
  paiva: 'paiva-paper-v3',
} as const;

export const portraitDimensions = {
  artem: [1122, 1402],
  timofey: [1122, 1402],
  ratner: [1122, 1402],
  romanenko: [1122, 1402],
  shimanskaya: [1122, 1402],
  paiva: [1122, 1402],
} as const;
