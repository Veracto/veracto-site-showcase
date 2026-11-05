import type { SiteChrome } from '@/content/site.schema';

export const locale = 'en';

export const chrome = {
  locale,
  skipLinkLabel: 'Skip to content',
  brand: 'Veracto',
  endorsement: 'by evidence lab',
  homeLabel: 'Veracto — home',
  peopleSpecialisationLabel: 'Specialisation',
  peopleNavigation: {
    expand: 'Show everyone',
    collapse: 'Show fewer portraits',
    label: 'Researchers and practitioners supporting Evidence Lab',
    previous: 'Previous expert',
    next: 'Next expert',
    hint: 'Scroll to meet everyone.',
  },
  navigationLabel: 'Primary navigation',
  navigation: [
    {
      label: 'Who we help',
      items: [
        { label: 'Companies', href: '/organisations/' },
        { label: 'Researchers', href: '/researchers/' },
        { label: 'Research teams', href: '/research-teams/' },
      ],
    },
    { label: 'About Veracto', href: '/about/' },
    { label: 'Documentation', href: 'https://docs.veracto.ai/en/' },
    { label: 'Discuss your task', href: '/#contact' },
  ],
  menuLabel: 'Open or close menu',
  menuText: 'Menu',
  languageLabel: 'Language',
  languageLinkLabel: 'RU',
  footerTagline:
    'AI consulting: process audits, solution selection, implementation and training.',
  footerContactsLabel: 'Contact channels',
  footerContacts: [
    { label: 'info@veracto.ai', href: 'mailto:info@veracto.ai' },
    { label: '@veractobot', href: 'https://t.me/veractobot' },
    { label: 'Privacy', href: '/privacy/' },
  ],
  copyright: '© 2026 Evidence Lab',
  domain: 'veracto.ai',
} satisfies SiteChrome;
