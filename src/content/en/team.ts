import { people } from '@/content/en/people';
import type { TeamPageDefinition } from '@/content/pages.schema';

export const teamPage = {
  path: '/team/',
  meta: {
    title: 'The Veracto team',
    description:
      'Veracto co-founders, advisors and experts. Professional roles and fields of expertise.',
  },
  introduction: {
    eyebrow: 'Our team',
    title: 'The people behind Veracto',
    description: 'Veracto co-founders, advisors and experts.',
  },
  principle: { eyebrow: '', title: '', description: '' },
  groups: [
    {
      kind: 'founder',
      eyebrow: '',
      title: 'Co-founders',
      description: '',
      items: [people[0], people[1], people[2]],
    },
    {
      kind: 'supporters',
      eyebrow: 'People behind the project',
      title: 'Advisors and experts',
      description:
        'Advisors guide Evidence Lab’s research approach and development. Experts advise on questions in their specialist fields. Involvement in a specific engagement is agreed separately.',
      items: [people[3], people[4], people[5], people[6]],
    },
  ],
  expertise: {
    eyebrow: 'Professional fields',
    title: 'Fields of expertise',
    description: 'The professional fields of our advisors and experts.',
    items: [
      {
        number: '01',
        title: 'Research',
        description: 'Quantitative methods, modelling and interpretation.',
      },
      {
        number: '02',
        title: 'Economics and management',
        description:
          'Economic modelling, management accounting and organisational development.',
      },
      {
        number: '03',
        title: 'Learning and skills',
        description:
          'Emotional intelligence, leadership and skills development.',
      },
    ],
  },
  note: '',
  callToAction: {
    eyebrow: 'Let’s talk',
    title: 'Discuss your task.',
    description: 'Tell us about your company or research project.',
    label: 'Discuss your task',
    href: 'https://t.me/veractobot',
    secondary: { label: 'How we work', href: '/approach/' },
  },
} as const satisfies TeamPageDefinition;
