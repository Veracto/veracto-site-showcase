import type { HomePageDefinition } from '@/content/pages.schema';

export const hero = {
  eyebrow: '',
  title: 'Поймите, где нужен ИИ и как его внедрить.',
  description:
    'Помогаем компаниям, исследователям и исследовательским командам выбрать ИИ-решения и освоить их применение.',
  badge: 'ИИ-консалтинг',
  titleLead: 'Поймите, где нужен ИИ и как его внедрить.',
  titleAccent: '',
  primaryCta: {
    label: 'Обсудить задачу',
    href: '#contact',
  },
  secondaryCta: {
    label: 'Как мы работаем',
    href: 'https://docs.veracto.ai/ru/',
  },
  note: '',
  modelTitle: 'Выбрать подход',
  modelReference: '',
  modelGate: 'Качество и полная стоимость',
  model: [
    {
      number: '01',
      title: 'Текущий процесс',
      description: 'Понять, как устроена работа и сколько она стоит.',
    },
    {
      number: '02',
      title: 'Улучшение без ИИ',
      description: 'Рассмотреть более простые изменения.',
    },
    {
      number: '03',
      title: 'Перестроенный процесс с ИИ',
      description: 'Оценить инструменты, изменения и затраты.',
    },
  ],
} satisfies HomePageDefinition['hero'];
