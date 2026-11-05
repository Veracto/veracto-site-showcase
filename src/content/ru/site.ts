import type { SiteChrome } from '@/content/site.schema';

export const locale = 'ru';

export const chrome = {
  locale,
  skipLinkLabel: 'Перейти к содержанию',
  brand: 'Veracto',
  endorsement: 'by evidence lab',
  homeLabel: 'Veracto — главная',
  peopleSpecialisationLabel: 'Специализация',
  peopleNavigation: {
    expand: 'Показать всех',
    collapse: 'Свернуть портреты',
    label: 'Учёные и практики, поддерживающие Evidence Lab',
    previous: 'Предыдущий эксперт',
    next: 'Следующий эксперт',
    hint: 'Листайте, чтобы увидеть всех.',
  },
  navigationLabel: 'Основная навигация',
  navigation: [
    {
      label: 'Кому помогаем',
      items: [
        { label: 'Компаниям', href: '/ru/organisations/' },
        { label: 'Исследователям', href: '/ru/researchers/' },
        { label: 'Исследовательским командам', href: '/ru/research-teams/' },
      ],
    },
    { label: 'О Veracto', href: '/ru/about/' },
    { label: 'Документация', href: 'https://docs.veracto.ai/ru/' },
    { label: 'Обсудить задачу', href: '/ru/#contact' },
  ],
  menuLabel: 'Открыть или закрыть меню',
  menuText: 'Меню',
  languageLabel: 'Switch to English',
  languageLinkLabel: 'EN',
  footerTagline:
    'ИИ-консалтинг: аудит процессов, выбор решений, внедрение и обучение.',
  footerContactsLabel: 'Контакты',
  footerContacts: [
    { label: 'info@veracto.ai', href: 'mailto:info@veracto.ai' },
    { label: '@veractobot', href: 'https://t.me/veractobot' },
    { label: 'Конфиденциальность', href: '/ru/privacy/' },
  ],
  copyright: '© 2026 Evidence Lab',
  domain: 'veracto.ai',
} satisfies SiteChrome;
