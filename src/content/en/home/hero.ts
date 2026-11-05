import type { HomePageDefinition } from '@/content/pages.schema';

export const hero = {
  eyebrow: '',
  title: 'Find where you need AI and how to adopt it.',
  description:
    'We help companies, individual researchers and research teams choose AI solutions and put them into practice.',
  badge: 'AI consulting',
  titleLead: 'Find where you need AI and how to adopt it.',
  titleAccent: '',
  primaryCta: {
    label: 'Discuss your task',
    href: '#contact',
  },
  secondaryCta: {
    label: 'How we work',
    href: 'https://docs.veracto.ai/en/',
  },
  note: '',
  modelTitle: 'Choose an approach',
  modelReference: '',
  modelGate: 'Quality and total cost',
  model: [
    {
      number: '01',
      title: 'Current process',
      description: 'Understand the work and its costs.',
    },
    {
      number: '02',
      title: 'Improvement without AI',
      description: 'Consider simpler changes.',
    },
    {
      number: '03',
      title: 'Redesigned process with AI',
      description: 'Assess the tools, changes and cost.',
    },
  ],
} satisfies HomePageDefinition['hero'];
