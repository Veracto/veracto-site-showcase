import { hero } from '@/content/en/home/hero';
import { audiences, transformation } from '@/content/en/home/overview';
import { approach, callToAction, trust } from '@/content/en/home/outcomes';
import type { HomePageDefinition } from '@/content/pages.schema';

export const homePage = {
  meta: {
    title: 'Veracto — AI consulting and adoption support',
    description:
      'AI consulting for companies, individual researchers and research teams: solution choice, process changes, cost estimates and training.',
  },
  hero,
  audiences,
  transformation,
  approach,
  trust,
  callToAction,
} satisfies HomePageDefinition;
