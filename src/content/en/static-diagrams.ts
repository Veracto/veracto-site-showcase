import type { StaticDiagrams } from '@/content/static-diagrams.schema';

export const staticDiagrams = {
  home: {
    id: 'study-home',
    artwork: 'workbench',
    eyebrow: '',
    title: 'Choose the help you need',
    description:
      'AI adoption can require a new way of working. We help identify the changes worth making and assess their costs.',
    alt: 'Illustrative workspace with source materials, a three-option comparison and a lens for reviewing the result.',
    captions: [
      {
        title: 'Audit and recommendations',
        detail:
          'Whether AI is useful, which solution to choose and what it will cost.',
      },
      {
        title: 'Implementation support',
        detail: 'Process changes, configured tools and support for adoption.',
      },
      {
        title: 'Individual and team training',
        detail: 'Practice with the chosen tools on your projects.',
      },
    ],
    note: '',
  },
  organisation: {
    id: 'study-organisation',
    artwork: 'organisation',
    eyebrow: '',
    title: 'Where is AI useful, which solution fits and what will it cost?',
    description:
      'An audit gives you recommendations for your business. A simpler option without AI may be better.',
    alt: 'Three document trays represent the opportunity assessment, solution options and cost estimate.',
    captions: [
      {
        title: 'Where to apply AI',
        detail: 'Priority processes and the changes needed for AI.',
      },
      {
        title: 'Which solution to choose',
        detail: 'Suitable tools and a comparison of alternatives.',
      },
      {
        title: 'What it will cost',
        detail:
          'Estimated adoption and running costs, with recommended next steps.',
      },
    ],
    note: '',
  },
  team: {
    id: 'study-team',
    artwork: 'team',
    eyebrow: '',
    title: 'AI in shared research work',
    description:
      'We connect colleagues’ tools and AI agents in a shared environment.',
    alt: 'Connected materials illustrate collaboration between research team members.',
    captions: [
      {
        title: 'Shared tools',
        detail:
          'Select and configure an environment for sources, data and analysis.',
      },
      {
        title: 'Connected work',
        detail:
          'Organise how colleagues share materials and analytical results.',
      },
      {
        title: 'Team training',
        detail: 'Learn to use the tools on the team’s research tasks.',
      },
    ],
    note: '',
  },
  method: {
    id: 'method-gates',
    artwork: 'process',
    eyebrow: '',
    title: 'Choose the format you need',
    description:
      'An audit is a standalone service. Implementation is agreed separately; researchers can start directly with individual training.',
    alt: 'Materials, tool choices and practical instructions illustrate the available engagement formats.',
    captions: [
      {
        title: 'Audit and recommendations',
        detail:
          'Understand the process, assess the need for AI and compare solutions and costs.',
        reference: {
          label: 'Costs and tool selection',
          href: 'https://docs.veracto.ai/en/consulting/choosing-solutions/',
        },
      },
      {
        title: 'Implementation support',
        detail:
          'Redesign the chosen process, configure existing tools and test their use.',
        reference: {
          label: 'Implementation support',
          href: 'https://docs.veracto.ai/en/consulting/how-it-works/',
        },
      },
      {
        title: 'Training and support',
        detail:
          'Help participants learn the tools and work through difficulties as they arise.',
        reference: {
          label: 'Individual training',
          href: 'https://docs.veracto.ai/en/routes/researchers/',
        },
      },
    ],
    note: '',
  },
  claim: {
    id: 'research-revision',
    artwork: 'research',
    eyebrow: '',
    title: 'Individual training on your project',
    description: '',
    alt: 'Research materials and analytical tools illustrate practice on a researcher’s project.',
    captions: [
      {
        title: 'Tools for your research',
        detail: 'We select and configure AI tools for your tasks.',
      },
      {
        title: 'Practice on your materials',
        detail: 'Individual sessions apply the tools to your project.',
      },
      {
        title: 'Skills you can use',
        detail:
          'Learn to review outputs, correct errors and choose how to work.',
      },
    ],
    note: '',
  },
  handover: {
    id: 'study-handover',
    artwork: 'handover',
    eyebrow: '',
    title: 'Put the chosen tools into practice',
    description: '',
    alt: 'Instructions and supporting materials.',
    captions: [
      {
        title: 'Tools',
        detail: 'The selected setup.',
      },
      {
        title: 'Practice',
        detail: 'Skills for applying the tools.',
      },
      {
        title: 'Support',
        detail: 'Help with questions as they arise.',
      },
    ],
    note: '',
  },
} satisfies StaticDiagrams;
