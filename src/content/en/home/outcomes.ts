import type { HomePageDefinition } from '@/content/pages.schema';
export const approach = {
  eyebrow: '',
  title: 'Adapt the process to AI',
  description:
    'AI adoption can change how work is organised. We identify the changes worth making and assess their costs.',
  steps: [
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
  cta: {
    label: 'How we work',
    href: '/about/',
  },
} satisfies HomePageDefinition['approach'];

export const trust = {
  eyebrow: 'The Veracto team',
  title: 'Economic expertise and applied AI',
  description:
    'Three co-founders bring together economics, consulting and AI tools.',
  items: [
    {
      number: '01',
      title: 'Team and project support',
      description: '',
      label: 'Meet the team',
      href: '/about/#founder',
    },
  ],
  supportTitle: 'Supporting Evidence Lab',
} satisfies HomePageDefinition['trust'];

export const callToAction = {
  eyebrow: 'Let’s talk',
  title: 'Want to use AI, but unsure where to start?',
  description:
    'Tell us about your business or research. We’ll help identify the question to work on.',
  label: 'Message on Telegram',
  href: 'https://t.me/veractobot',
  secondary: { label: 'info@veracto.ai', href: 'mailto:info@veracto.ai' },
} satisfies HomePageDefinition['callToAction'];
