import type { AboutPageDefinition } from '@/content/pages.schema';

export const aboutPage = {
  path: '/about/',
  meta: {
    title: 'About Veracto and Evidence Lab',
    description:
      'Meet Veracto’s co-founders and the researchers and practitioners supporting Evidence Lab.',
  },
  introduction: {
    eyebrow: 'About Veracto',
    title: 'Economic expertise and applied AI',
    description:
      'Veracto is Evidence Lab’s AI consulting practice for companies, individual researchers and research teams.',
  },
  architecture: {
    eyebrow: '',
    title: 'Evidence Lab and Veracto',
    description: '',
    items: [
      {
        number: '01',
        title: 'Evidence Lab',
        description:
          'Develops the methodology, quality standards and shared expertise.',
      },
      {
        number: '02',
        title: 'Veracto',
        description:
          'Provides AI consulting, implementation support and training.',
      },
    ],
  },
  reason: {
    eyebrow: '',
    title: 'The solution should fit your work',
    description:
      'We assess whether AI is useful, which tools fit and what needs to change in the workflow. We help with adoption and teach people to use the tools. The documentation explains how we work.',
  },
  scope: {
    eyebrow: '',
    title: '',
    description: '',
    items: [
      {
        number: '01',
        title: 'Audit',
        description: 'Recommendations and cost estimates.',
      },
      {
        number: '02',
        title: 'Implementation and training',
        description: 'Configured tools and practical skills.',
      },
    ],
  },
  people: {
    eyebrow: '',
    title: 'The people behind Veracto',
    description:
      'Founded by Artem Shaposhnikov, Michael Kalyaev and Tim Smykov. Evidence Lab is supported by researchers and practitioners.',
    label: 'Meet the team',
    href: '/about/#founder',
  },
  callToAction: {
    eyebrow: '',
    title: 'Discuss AI for your work',
    description: 'Tell us about your business or research.',
    label: 'Message on Telegram',
    href: 'https://t.me/veractobot',
    secondary: {
      label: 'info@veracto.ai',
      href: 'mailto:info@veracto.ai',
    },
  },
} satisfies AboutPageDefinition;
