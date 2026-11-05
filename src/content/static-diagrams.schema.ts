export type StaticDiagramId =
  | 'workbench'
  | 'process'
  | 'research'
  | 'team'
  | 'organisation'
  | 'method'
  | 'handover'
  | 'claim-review';
export type StaticDiagramContent = {
  id: string;
  artwork: StaticDiagramId;
  eyebrow: string;
  title: string;
  description: string;
  alt: string;
  captions: readonly {
    title: string;
    detail: string;
    reference?: { label: string; href: string };
  }[];
  note: string;
};
export type StaticDiagrams = Record<
  'home' | 'team' | 'organisation' | 'method' | 'handover' | 'claim',
  StaticDiagramContent
>;
