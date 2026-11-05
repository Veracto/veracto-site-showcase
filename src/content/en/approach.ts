import type { ApproachPageDefinition } from '@/content/pages.schema';

export const approachPage = {
  path: '/approach/',
  meta: {
    title: 'Our approach to AI adoption — Veracto',
    description:
      'Start from your business or research needs, decide whether AI is useful and plan the process changes, tools and training.',
  },
  introduction: {
    eyebrow: 'Our approach',
    title: 'Start with the process. Choose the right AI solution.',
    description:
      'We examine how the work is organised and what you want to improve. Then we assess whether AI is useful and what needs to change for adoption.',
  },
  navigation: {
    label: 'On this page',
    items: [
      {
        label: 'Ways to work together',
        href: '#method-gates',
      },
      {
        label: 'Choosing a solution',
        href: '#evidence-rules',
      },
    ],
  },
  stepsHeading: {
    eyebrow: '',
    title: 'Choose the format you need',
    description:
      'An audit is a standalone service. Implementation is agreed separately; researchers can start directly with individual training.',
  },
  stepLabels: {
    question: '',
    artifact: '',
    gate: '',
    details: '',
  },
  steps: [
    {
      number: '01',
      title: 'Audit and recommendations',
      description:
        'Understand the process, assess the need for AI and compare solutions and costs.',
      question: '',
      artifact:
        'Understand the process, assess the need for AI and compare solutions and costs.',
      gate: '',
      reference: {
        label: 'Details in the documentation',
        href: 'https://docs.veracto.ai/en/consulting/choosing-solutions/',
      },
    },
    {
      number: '02',
      title: 'Implementation support',
      description:
        'Redesign the chosen process, configure existing tools and test their use.',
      question: '',
      artifact:
        'Redesign the chosen process, configure existing tools and test their use.',
      gate: '',
      reference: {
        label: 'Details in the documentation',
        href: 'https://docs.veracto.ai/en/consulting/how-it-works/',
      },
    },
    {
      number: '03',
      title: 'Training and support',
      description:
        'Help participants learn the tools and work through difficulties as they arise.',
      question: '',
      artifact:
        'Help participants learn the tools and work through difficulties as they arise.',
      gate: '',
      reference: {
        label: 'Details in the documentation',
        href: 'https://docs.veracto.ai/en/routes/researchers/',
      },
    },
  ],
  anatomy: {
    eyebrow: '',
    title: '',
    description: '',
    items: [
      {
        number: '01',
        title: 'Companies',
        description:
          'Decide whether you need AI, where to use it and what it will cost. Get recommendations for tools and changes to your business processes.',
      },
      {
        number: '02',
        title: 'Individual researchers',
        description:
          'Choose AI tools for your research and learn to use them through individual sessions on your project.',
      },
      {
        number: '03',
        title: 'Research teams and laboratories',
        description:
          'Use AI together: select shared tools, adapt the research workflow and train colleagues.',
      },
    ],
  },
  principles: {
    eyebrow: '',
    title: 'A solution must fit the process and budget',
    description:
      'Compare the current process, an improvement without AI and the same improvement with a suitable AI function. Adopt, refine, test again or stop.',
    items: [
      {
        number: '01',
        title: 'Process changes',
        description:
          'We consider how AI changes the steps, responsibilities and quality checks.',
      },
      {
        number: '02',
        title: 'Full costs',
        description:
          'We account for tools, setup, training, review and support.',
      },
    ],
  },
  callToAction: {
    eyebrow: 'Let’s talk',
    title: 'Let’s find the right starting point',
    description:
      'Describe your situation. We’ll help choose between an audit, implementation support and training.',
    label: 'Discuss your task',
    href: 'https://t.me/veractobot',
    secondary: {
      label: 'Explore our approach',
      href: 'https://docs.veracto.ai/en/consulting/how-it-works/',
    },
  },
} satisfies ApproachPageDefinition;
