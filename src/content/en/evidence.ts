import type { EvidencePageDefinition } from '@/content/pages.schema';

export const evidencePage = {
  path: '/evidence/',
  meta: {
    title: 'How Veracto substantiates results',
    description:
      "What a case must show: the baseline workflow, comparison of options, measured findings, limits and the client's independent use.",
  },
  introduction: {
    eyebrow: 'Evidence standard',
    title: 'What supports a result',
    description:
      'Report the result with the test method, costs and limits. Include both positive and negative observations.',
  },
  status: {
    eyebrow: 'Current publication status',
    title: 'Client cases have not yet been published.',
    description:
      'Examples on the site explain the method. They do not establish a client effect; case publication requires reviewed material and permission.',
  },
  standard: {
    eyebrow: 'Required case record',
    title: 'What a case must show',
    description: '',
    items: [
      {
        number: '01',
        title: 'Context and task',
        description: 'who did the work, what was needed and the agreed scope.',
      },
      {
        number: '02',
        title: 'Baseline workflow',
        description:
          'observed measures, quality, difficulties and measurement limits.',
      },
      {
        number: '03',
        title: 'Option comparison',
        description:
          'what changed without AI, what AI adds and other changes that affected the result.',
      },
      {
        number: '04',
        title: 'Findings and costs',
        description:
          'Accepted outputs, failures, total effort and expenditure, with measurement conditions.',
        reference: {
          href: 'https://docs.veracto.ai/en/quality/effort-and-cost/',
          label: 'How we assess effort and benefit',
        },
      },
      {
        number: '05',
        title: 'Limits and decision',
        description:
          'untested conditions, risks and the basis for continuing, revising or stopping.',
      },
      {
        number: '06',
        title: 'Independent use',
        description:
          'new tasks without guidance, help, exceptions and follow-up. If untested, say so.',
        reference: {
          href: 'https://docs.veracto.ai/en/quality/independent-use/',
          label: 'How we verify independent work',
        },
      },
    ],
  },
  publicity: {
    eyebrow: 'Publication permission',
    title: 'Evidence and permission are separate requirements',
    description:
      'Evidence alone does not authorise publication. Each identifying element needs approval.',
    items: [
      {
        number: '01',
        title: 'Internal record',
        description: 'Available only to agreed project participants.',
      },
      {
        number: '02',
        title: 'Anonymised pattern',
        description:
          'Published without identifying information, after de-identification review and agreement.',
      },
      {
        number: '03',
        title: 'Named case',
        description:
          'Agree the name, context, wording and the data to be published.',
      },
      {
        number: '04',
        title: 'Quote, portrait, logo or metric',
        description: 'Each element needs a verified basis and permission.',
      },
    ],
  },
  callToAction: {
    eyebrow: 'Before a test begins',
    title: 'Agree criteria before testing.',
    description: 'Describe the result you will use to make the decision.',
    label: 'Discuss your task',
    href: 'https://t.me/veractobot',
    secondary: {
      href: 'https://docs.veracto.ai/en/quality/verify-result/',
      label: 'How we verify and accept the result',
    },
  },
} satisfies EvidencePageDefinition;
