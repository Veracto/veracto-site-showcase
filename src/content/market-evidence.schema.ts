export type MarketEvidence = {
  id: string;
  eyebrow: string;
  title: string;
  population: string;
  bars: { label: string; value: number }[];
  source: { label: string; href: string };
  limitation: string;
  implication: string;
  reference: { label: string; href: string };
};
