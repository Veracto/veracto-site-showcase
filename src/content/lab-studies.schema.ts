export type StudyHeader = { eyebrow: string; title: string; intro: string };
export type StudyItem = { label: string; title: string; body: string };
export type TeamStudy = StudyHeader & {
  roles: readonly StudyItem[];
  exchange: readonly [string, string, string];
  protocol: string;
  fields: readonly string[];
  next: string;
};
export type OrganisationStudy = StudyHeader & {
  forecast: StudyItem;
  assumptions: string;
  pilot: StudyItem;
  boundary: string;
  observations: StudyItem;
  rows: readonly string[];
  unknown: string;
  decision: string;
  options: readonly string[];
};
export type HomeStudy = StudyHeader & {
  parts: readonly StudyItem[];
  change: string;
  rule: string;
};
export type MethodStudy = StudyHeader & {
  diagnosis: StudyItem;
  question: string;
  alternative: StudyItem;
  condition: string;
  steps: readonly StudyItem[];
  decision: string;
};
export type HandoverStudy = StudyHeader & {
  exception: StudyItem;
  manual: string;
  rules: readonly StudyItem[];
  attempt: string;
  open: string;
};
export type LabStudies = {
  team: TeamStudy;
  organisation: OrganisationStudy;
  home: HomeStudy;
  method: MethodStudy;
  handover: HandoverStudy;
  disclosure: string;
};
