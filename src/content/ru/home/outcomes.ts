import type { HomePageDefinition } from '@/content/pages.schema';
export const approach = {
  eyebrow: '',
  title: 'Перестраиваем процесс под ИИ',
  description:
    'Внедрение ИИ может изменить сам порядок работы. Помогаем определить, что стоит перестроить и оправданы ли затраты.',
  steps: [
    {
      number: '01',
      title: 'Аудит и рекомендации',
      description:
        'Нужен ли ИИ, какое решение выбрать и сколько оно будет стоить.',
    },
    {
      number: '02',
      title: 'Помощь с внедрением',
      description:
        'Изменения процесса, настройка инструментов и сопровождение внедрения.',
    },
    {
      number: '03',
      title: 'Индивидуальное и командное обучение',
      description: 'Практика с выбранными инструментами на ваших проектах.',
    },
  ],
  cta: {
    label: 'Как мы работаем',
    href: '/ru/about/',
  },
} satisfies HomePageDefinition['approach'];

export const trust = {
  eyebrow: 'Команда Veracto',
  title: 'Экономическая экспертиза и прикладной ИИ',
  description:
    'Три сооснователя объединяют экономику, консалтинг и работу с ИИ-инструментами.',
  items: [
    {
      number: '01',
      title: 'Команда и поддержка проекта',
      description: '',
      label: 'Познакомиться с командой',
      href: '/ru/about/#founder',
    },
  ],
  supportTitle: 'Evidence Lab поддерживают',
} satisfies HomePageDefinition['trust'];

export const callToAction = {
  eyebrow: 'Обсудим вашу задачу',
  title: 'Хотите внедрить ИИ, но непонятно, с чего начать?',
  description:
    'Расскажите о своём бизнесе или исследовании. Поможем определить, с каким вопросом стоит работать.',
  label: 'Написать в Telegram',
  href: 'https://t.me/veractobot',
  secondary: { label: 'info@veracto.ai', href: 'mailto:info@veracto.ai' },
} satisfies HomePageDefinition['callToAction'];
