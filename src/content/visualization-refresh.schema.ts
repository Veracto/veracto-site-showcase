export type RefreshId =
  'home' | 'research' | 'team' | 'organisation' | 'method' | 'handover';
export type RefreshNode = {
  label: string;
  title: string;
  detail: string;
  icon: 'source' | 'process' | 'review' | 'manual' | 'ai' | 'stop';
};
export type RefreshCandidate = {
  id: RefreshId;
  route: string;
  currentId: string;
  name: string;
  title: string;
  assessment: string;
  proposal: string;
  nodes: RefreshNode[];
  bridge: string;
  fields: string[];
  note: string;
};
export type VisualizationRefresh = {
  title: string;
  intro: string;
  status: string;
  disclosure: string;
  current: string;
  context: string;
  back: string;
  language: string;
  candidate: string;
  assessment: string;
  proposal: string;
  candidates: RefreshCandidate[];
};
export type RefreshPlayback = {
  play: string;
  pause: string;
  resume: string;
  replay: string;
  ready: string;
  running: string;
  paused: string;
  complete: string;
  static: string;
  hint: string;
  scenes: Record<RefreshId, string[]>;
};
