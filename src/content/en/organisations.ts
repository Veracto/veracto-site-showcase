import type { OrganisationsPageDefinition } from '@/content/pages.schema';

export const organisationsPage = {
  path: '/organisations/',
  meta: {
    title: 'AI consulting for companies — Veracto',
    description:
      'Audit business processes, decide where AI is useful, choose tools and estimate adoption costs.',
  },
  introduction: {
    eyebrow: 'For companies',
    title: 'Know where to adopt AI and what it will cost.',
    description:
      'Business-process audits and AI evaluation for small businesses, including those growing into medium-sized companies.',
  },
  documentation: {
    label: 'How we work',
    href: 'https://docs.veracto.ai/en/routes/organisations/',
  },
  tone: 'organisation',
  fit: {
    eyebrow: '',
    title: 'When you need a clear AI decision',
    description:
      'We work with small businesses, including those growing into medium-sized companies.',
    items: [
      {
        number: '01',
        title: 'Where to start',
        description:
          'You want to use AI but need to identify suitable business processes.',
      },
      {
        number: '02',
        title: 'Which solution to choose',
        description:
          'There are many tools; you need a choice based on your work and budget.',
      },
      {
        number: '03',
        title: 'What it will cost',
        description:
          'You need to estimate setup, subscriptions, staff time and support.',
      },
      {
        number: '04',
        title: 'How to change the process',
        description:
          'Using AI requires changes to how work, checks and responsibilities are organised.',
      },
    ],
  },
  formats: {
    eyebrow: '',
    title: 'An audit with a concrete result',
    description:
      'You receive a recommendation on whether to adopt AI. A simpler improvement may be the better choice.',
    items: [
      {
        number: '01',
        title: 'AI opportunities',
        description:
          'Which parts of the process can benefit from AI and what must change.',
      },
      {
        number: '02',
        title: 'Solution options',
        description:
          'Suitable tools and simpler alternatives, compared by quality and total cost.',
      },
      {
        number: '03',
        title: 'Costs and next steps',
        description:
          'An estimate of the resources needed and a recommendation on how to proceed.',
      },
    ],
  },
  decisionPath: {
    eyebrow: '',
    title: 'From recommendation to adoption',
    description:
      'The audit is a standalone service. Implementation, training and support are agreed separately.',
    items: [
      {
        number: '01',
        title: 'Redesign the process',
        description:
          'Adapt the steps, responsibilities and checks to the chosen AI tools.',
      },
      {
        number: '02',
        title: 'Configure and train',
        description:
          'Configure existing tools, train staff and review their use on your tasks.',
      },
    ],
  },
  result: {
    eyebrow: '',
    title: 'We can help implement the chosen solution',
    description:
      'The audit is a standalone service. Implementation and training are agreed separately if you choose to continue.',
    items: [
      {
        number: '01',
        title: 'Process redesign',
        description: 'Adapt the way work is done to the chosen AI solution.',
      },
      {
        number: '02',
        title: 'Setup and training',
        description:
          'Configure the tools and help employees use them in their work.',
      },
    ],
  },
  callToAction: {
    eyebrow: 'Let’s talk',
    title: 'Thinking about AI for your business?',
    description: 'Tell us where you want to use AI.',
    label: 'Message on Telegram',
    href: 'https://t.me/veractobot',
    secondary: {
      label: 'info@veracto.ai',
      href: 'mailto:info@veracto.ai',
    },
  },
} satisfies OrganisationsPageDefinition;
