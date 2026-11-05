import type { ResearchTeamsPageDefinition } from '@/content/pages.schema';

export const researchTeamsPage = {
  path: '/research-teams/',
  meta: {
    title: 'AI adoption for research teams — Veracto',
    description:
      'Shared AI tools, adapted research workflows and training for teams and laboratories.',
  },
  introduction: {
    eyebrow: 'For research teams and laboratories',
    title: 'Bring AI into your team’s research.',
    description:
      'Shared tools, adapted workflows and training on your team’s research tasks.',
  },
  documentation: {
    label: 'How we work',
    href: 'https://docs.veracto.ai/en/routes/research-teams/',
  },
  tone: 'research-team',
  fit: {
    eyebrow: '',
    title: 'AI use that colleagues can share',
    description: '',
    items: [
      {
        number: '01',
        title: 'A common approach',
        description:
          'Selected tools, agreed ways of working and clear responsibilities.',
      },
      {
        number: '02',
        title: 'Skills across the team',
        description:
          'Participants know how to use the tools and continue each other’s work.',
      },
    ],
  },
  operatingModel: {
    eyebrow: '',
    title: 'Build a shared way to use AI',
    description: '',
    items: [
      {
        number: '01',
        title: 'Shared tools',
        description:
          'Choose and configure tools for the team’s research tasks.',
      },
      {
        number: '02',
        title: 'Research workflows',
        description:
          'Adapt how colleagues work with sources, data and analytical results.',
      },
      {
        number: '03',
        title: 'Team training',
        description: 'Combine shared sessions with practice for participants.',
      },
    ],
  },
  engagement: {
    eyebrow: '',
    title: 'Build a shared way to use AI',
    description: '',
    items: [
      {
        number: '01',
        title: 'Shared tools',
        description:
          'Choose and configure tools for the team’s research tasks.',
      },
      {
        number: '02',
        title: 'Research workflows',
        description:
          'Adapt how colleagues work with sources, data and analytical results.',
      },
      {
        number: '03',
        title: 'Team training',
        description: 'Combine shared sessions with practice for participants.',
      },
    ],
  },
  result: {
    eyebrow: '',
    title: 'AI use that colleagues can share',
    description: '',
    items: [
      {
        number: '01',
        title: 'A common approach',
        description:
          'Selected tools, agreed ways of working and clear responsibilities.',
      },
      {
        number: '02',
        title: 'Skills across the team',
        description:
          'Participants know how to use the tools and continue each other’s work.',
      },
    ],
  },
  callToAction: {
    eyebrow: 'Let’s talk',
    title: 'Where could AI help your team?',
    description:
      'Tell us about your research and how colleagues work together.',
    label: 'Message on Telegram',
    href: 'https://t.me/veractobot',
    secondary: {
      label: 'info@veracto.ai',
      href: 'mailto:info@veracto.ai',
    },
  },
} satisfies ResearchTeamsPageDefinition;
