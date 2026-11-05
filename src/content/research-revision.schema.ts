export type ResearchRevision = {
  eyebrow: string;
  title: string;
  intro: string;
  disclosure: string;
  chapters: readonly {
    id: 'source' | 'draft' | 'review' | 'revision';
    step: string;
    title: string;
    label: string;
    anchor: string;
    before: string;
    focus: string;
    after: string;
    field: string;
    value: string;
    foot: string;
  }[];
};
