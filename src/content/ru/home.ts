import { hero } from '@/content/ru/home/hero';
import { audiences, transformation } from '@/content/ru/home/overview';
import { approach, callToAction, trust } from '@/content/ru/home/outcomes';
import type { HomePageDefinition } from '@/content/pages.schema';

export const homePage = {
  meta: {
    title: 'Veracto — ИИ-консалтинг и сопровождение',
    description:
      'ИИ-консалтинг для компаний, исследователей и исследовательских команд: выбор решений, изменения процессов, оценка затрат и обучение.',
  },
  hero,
  audiences,
  transformation,
  approach,
  trust,
  callToAction,
} satisfies HomePageDefinition;
