import type {
  ContactPageDefinition,
  PrivacyPageDefinition,
} from '@/content/pages.schema';

export const contactPage = {
  path: '/contact/',
  meta: {
    title: 'Discuss your task with Veracto',
    description:
      'Tell us the task, difficulty and result you need. We will agree the scope, materials and way of working together.',
  },
  introduction: {
    eyebrow: 'First conversation',
    title: 'Where would you like to use AI?',
    description:
      'A short message is enough. You do not need a detailed specification for the first conversation.',
  },
  brief: {
    eyebrow: 'What to tell us',
    title: 'What to tell us',
    description:
      'Start with your situation; we’ll clarify the next step together.',
  },
  steps: [
    'Your business or research project.',
    'What you want to improve or understand.',
    'What you have already tried with AI.',
  ],
  email: {
    eyebrow: 'One direct channel',
    title: 'Email us about your task.',
    description:
      'A short message is enough. You do not need a detailed specification for the first conversation.',
    address: 'info@veracto.ai',
    actionLabel: 'info@veracto.ai',
    safetyNote:
      'Project materials can be shared after we agree how to handle them.',
  },
  telegram: {
    label: 'Telegram · @veractobot',
    href: 'https://t.me/veractobot',
  },
  privacyLink: { label: 'How enquiries are handled', href: '/privacy/' },
  alternative: { label: 'How we work', href: '/approach/' },
} satisfies ContactPageDefinition;

export const privacyPage = {
  path: '/privacy/',
  meta: {
    title: 'Enquiries and data — Veracto',
    description:
      'How to contact Veracto by email and agree the use of materials in a consulting engagement.',
  },
  introduction: {
    eyebrow: 'Privacy',
    title: 'Enquiries and project materials',
    description:
      'The site has no enquiry form. Contact links open your email app or Telegram. Agree the use of project materials before sharing them.',
  },
  detailsLabel: 'Current website data handling',
  sections: [
    {
      number: '01',
      title: 'Your first email',
      description:
        'Describe the task without confidential material. Agree the use of project files separately before sharing them.',
    },
    {
      number: '02',
      title: 'Analytics and advertising',
      description:
        'With your consent, self-hosted Umami collects page visits and contact-link events. A sample of sessions is recorded for up to five minutes, with input fields masked; recordings are retained for 30 days, with backup copies kept for up to 14 additional days. No advertising trackers are used. You can decline or change your choice in Analytics preferences at the bottom of the page. Do Not Track and the local umami.disabled exclusion are respected.',
    },
    {
      number: '03',
      title: 'Data processing details',
      description:
        'Details of the controller, enquiry processing, retention periods and access or deletion requests will be published once approved.',
    },
    {
      number: '04',
      title: 'Consulting project materials',
      description:
        'Before work starts, agree the permitted materials and services, where files are stored, who has access and how consultant access ends.',
    },
  ],
} satisfies PrivacyPageDefinition;
