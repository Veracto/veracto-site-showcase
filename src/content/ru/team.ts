import { people } from '@/content/ru/people';
import type { TeamPageDefinition } from '@/content/pages.schema';

export const teamPage = {
  path: '/ru/team/',
  meta: {
    title: 'Команда Veracto',
    description:
      'Сооснователи, адвайзеры и эксперты Veracto. Профессиональные роли и области компетенций.',
  },
  introduction: {
    eyebrow: 'Команда',
    title: 'Люди Veracto',
    description: 'Сооснователи, адвайзеры и эксперты Veracto.',
  },
  principle: { eyebrow: '', title: '', description: '' },
  groups: [
    {
      kind: 'founder',
      eyebrow: '',
      title: 'Сооснователи',
      description: '',
      items: [people[0], people[1], people[2]],
    },
    {
      kind: 'supporters',
      eyebrow: 'Люди проекта',
      title: 'Адвайзеры и эксперты',
      description:
        'Адвайзеры помогают развивать научный подход и направления работы Evidence Lab. Эксперты консультируют по вопросам своей специализации. Участие в конкретном проекте согласуем отдельно.',
      items: [people[3], people[4], people[5], people[6]],
    },
  ],
  expertise: {
    eyebrow: 'Профессиональные области',
    title: 'Области компетенций',
    description: 'Профессиональные области наших адвайзеров и экспертов.',
    items: [
      {
        number: '01',
        title: 'Исследования',
        description: 'Количественные методы, моделирование и интерпретация.',
      },
      {
        number: '02',
        title: 'Экономика и управление',
        description:
          'Экономическое моделирование, управленческий учёт и развитие организаций.',
      },
      {
        number: '03',
        title: 'Обучение и навыки',
        description: 'Эмоциональный интеллект, лидерство и развитие навыков.',
      },
    ],
  },
  note: '',
  callToAction: {
    eyebrow: 'Обсудим вашу задачу',
    title: 'Обсудим вашу задачу.',
    description: 'Расскажите о своей компании или исследовательском проекте.',
    label: 'Обсудить задачу',
    href: 'https://t.me/veractobot',
    secondary: { label: 'Как мы работаем', href: '/ru/approach/' },
  },
} as const satisfies TeamPageDefinition;
