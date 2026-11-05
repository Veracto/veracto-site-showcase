import type { HomePageDefinition } from '@/content/pages.schema';

export const audiences = {
  eyebrow: '',
  title: 'What would help you?',
  description: '',
  items: [
    {
      number: '01',
      tone: 'organisation',
      title: 'Companies',
      description:
        'AI for your business processes: where, how and at what cost.',
      artifact: [
        'Process audit',
        'AI solution selection',
        'Costs and adoption plan',
      ],
      label: 'For companies',
      href: '/organisations/',
    },
    {
      number: '02',
      tone: 'research',
      title: 'Individual researchers',
      description:
        'Choose tools and learn to use them in individual sessions on your research.',
      artifact: [
        'Tool selection',
        'Individual training',
        'Practice on your project',
      ],
      label: 'For individual researchers',
      href: '/researchers/',
    },
    {
      number: '03',
      tone: 'research-team',
      title: 'Research teams and laboratories',
      description:
        'Bring tools and AI agents into shared research work and train the team.',
      artifact: ['Shared tools', 'Team workflows', 'Team training'],
      label: 'For research teams and laboratories',
      href: '/research-teams/',
    },
  ],
} satisfies HomePageDefinition['audiences'];

export const transformation = {
  eyebrow: '',
  title: 'Choose the help you need',
  description: '',
  items: [
    {
      number: '01',
      title: 'Audit and recommendations',
      description:
        'Whether AI is useful, which solution to choose and what it will cost.',
    },
    {
      number: '02',
      title: 'Implementation support',
      description:
        'Process changes, configured tools and support for adoption.',
    },
    {
      number: '03',
      title: 'Individual and team training',
      description: 'Practice with the chosen tools on your projects.',
    },
  ],
} satisfies HomePageDefinition['transformation'];
