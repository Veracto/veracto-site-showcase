import type { ResearchersPageDefinition } from '@/content/pages.schema';

export const researchersPage = {
  path: '/researchers/',
  meta: {
    title: 'Individual AI training for researchers — Veracto',
    description:
      'Choose AI tools and learn to use them through individual sessions on your research project.',
  },
  introduction: {
    eyebrow: 'For individual researchers',
    title: 'Learn to use AI in your research.',
    description:
      'We help you choose tools and learn to use them through individual sessions on your project.',
  },
  documentation: {
    label: 'How we work',
    href: 'https://docs.veracto.ai/en/routes/researchers/',
  },
  tone: 'research',
  fit: {
    eyebrow: '',
    title: 'Tools you know how to use',
    description:
      'You can start with individual training. If you need to rethink your workflow, we can audit it first.',
    items: [
      {
        number: '01',
        title: 'A suitable set of tools',
        description: 'Tools selected and configured for your research tasks.',
      },
      {
        number: '02',
        title: 'Practical skills',
        description:
          'You practise using them, reviewing outputs and handling difficulties.',
      },
    ],
  },
  work: {
    eyebrow: '',
    title: 'What AI can help with',
    description: '',
    items: [
      {
        number: '01',
        title: 'Sources and literature',
        description: 'Find, compare and organise research materials.',
      },
      {
        number: '02',
        title: 'Data and code',
        description: 'Prepare data, analyse results and write code.',
      },
      {
        number: '03',
        title: 'Ideas and writing',
        description: 'Develop arguments and work on research texts.',
      },
    ],
  },
  engagement: {
    eyebrow: '',
    title: 'Tools you know how to use',
    description:
      'You can start with individual training. If you need to rethink your workflow, we can audit it first.',
    items: [
      {
        number: '01',
        title: 'A suitable set of tools',
        description: 'Tools selected and configured for your research tasks.',
      },
      {
        number: '02',
        title: 'Practical skills',
        description:
          'You practise using them, reviewing outputs and handling difficulties.',
      },
    ],
  },
  result: {
    eyebrow: '',
    title: 'Tools you know how to use',
    description: 'You can start with individual training.',
    items: [
      {
        number: '01',
        title: 'A suitable set of tools',
        description: 'Tools selected and configured for your research tasks.',
      },
      {
        number: '02',
        title: 'Practical skills',
        description:
          'You practise using them, reviewing outputs and handling difficulties.',
      },
    ],
  },
  callToAction: {
    eyebrow: 'Let’s talk',
    title: 'What are you working on?',
    description:
      'Tell us about your project and what you would like AI to help with.',
    label: 'Message on Telegram',
    href: 'https://t.me/veractobot',
    secondary: {
      label: 'info@veracto.ai',
      href: 'mailto:info@veracto.ai',
    },
  },
} satisfies ResearchersPageDefinition;
