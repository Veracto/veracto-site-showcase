export type StaticVisuals = {
  title: string;
  intro: string;
  backgroundStatus: string;
  navigation: string;
  back: string;
  language: string;
  proof: string;
  studies: {
    id: 'process' | 'organisation' | 'research';
    label: string;
    heading: string;
    description: string;
    alt: string;
    steps: [string, string, string];
    note: string;
  }[];
};
