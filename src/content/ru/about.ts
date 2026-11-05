import type { AboutPageDefinition } from '@/content/pages.schema';

export const aboutPage = {
  path: '/ru/about/',
  meta: {
    title: 'О Veracto и Evidence Lab',
    description:
      'Познакомьтесь с основателями Veracto, а также с учёными и практиками, поддерживающими Evidence Lab.',
  },
  introduction: {
    eyebrow: 'О Veracto',
    title: 'Экономическая экспертиза и прикладной ИИ',
    description:
      'Veracto — ИИ-консалтинг Evidence Lab для компаний, исследователей и исследовательских команд.',
  },
  architecture: {
    eyebrow: '',
    title: 'Evidence Lab и Veracto',
    description: '',
    items: [
      {
        number: '01',
        title: 'Evidence Lab',
        description:
          'Развивает методологию, стандарты качества и общую экспертизу.',
      },
      {
        number: '02',
        title: 'Veracto',
        description:
          'Проводит ИИ-консалтинг, сопровождает внедрение и обучение.',
      },
    ],
  },
  reason: {
    eyebrow: '',
    title: 'Решение должно подходить вашей работе',
    description:
      'Оцениваем, нужен ли ИИ, какие инструменты подойдут и что потребуется изменить в процессе. Помогаем с внедрением и обучаем применению инструментов. Подробности — в документации.',
  },
  scope: {
    eyebrow: '',
    title: '',
    description: '',
    items: [
      {
        number: '01',
        title: 'Аудит',
        description: 'Рекомендации и оценка затрат.',
      },
      {
        number: '02',
        title: 'Внедрение и обучение',
        description: 'Настроенные инструменты и практические навыки.',
      },
    ],
  },
  people: {
    eyebrow: '',
    title: 'Кто стоит за Veracto',
    description:
      'Основатели — Артём Шапошников, Михаил Каляев и Тим Смыков. Evidence Lab поддерживают учёные и практики.',
    label: 'Познакомиться с командой',
    href: '/ru/about/#founder',
  },
  callToAction: {
    eyebrow: '',
    title: 'Обсудим ИИ для вашей работы',
    description: 'Расскажите о своём бизнесе или исследовании.',
    label: 'Написать в Telegram',
    href: 'https://t.me/veractobot',
    secondary: {
      label: 'info@veracto.ai',
      href: 'mailto:info@veracto.ai',
    },
  },
} satisfies AboutPageDefinition;
