export type HeroRoute = 'home' | 'researchers' | 'teams' | 'organisations';
export type HeroCandidate = {
  name: string;
  note: string;
  title: string;
  body: string;
};
export type HeroGalleryCopy = {
  title: string;
  intro: string;
  back: string;
  catalogue: string;
  open: string;
  compare: string;
  language: string;
  primary: string;
  secondary: string;
  contact: string;
  eyebrow: string;
  groups: Record<
    HeroRoute,
    { label: string; variants: [HeroCandidate, HeroCandidate, HeroCandidate] }
  >;
};
