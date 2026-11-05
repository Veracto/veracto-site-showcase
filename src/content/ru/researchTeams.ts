import type { ResearchTeamsPageDefinition } from '@/content/pages.schema';

export const researchTeamsPage = {
  path: '/ru/research-teams/',
  meta: {
    title: 'Внедрение ИИ для исследовательских команд — Veracto',
    description:
      'Общие ИИ-инструменты, адаптация исследовательских процессов и обучение команд и лабораторий.',
  },
  introduction: {
    eyebrow: 'Для исследовательских команд и лабораторий',
    title: 'Применяйте ИИ вместе с командой.',
    description:
      'Общие инструменты, организация совместной работы и обучение на исследовательских задачах команды.',
  },
  documentation: {
    label: 'Как проходит работа',
    href: 'https://docs.veracto.ai/ru/routes/research-teams/',
  },
  tone: 'research-team',
  fit: {
    eyebrow: '',
    title: 'ИИ-практика для всей команды',
    description: '',
    items: [
      {
        number: '01',
        title: 'Общий подход',
        description:
          'Выбранные инструменты, согласованный порядок работы и понятная ответственность.',
      },
      {
        number: '02',
        title: 'Навыки команды',
        description:
          'Участники умеют применять инструменты и продолжать работу коллег.',
      },
    ],
  },
  operatingModel: {
    eyebrow: '',
    title: 'Совместное применение ИИ',
    description: '',
    items: [
      {
        number: '01',
        title: 'Общие инструменты',
        description:
          'Выбрать и настроить инструменты для исследовательских задач команды.',
      },
      {
        number: '02',
        title: 'Исследовательские процессы',
        description:
          'Адаптировать совместную работу с источниками, данными и результатами анализа.',
      },
      {
        number: '03',
        title: 'Обучение команды',
        description: 'Совместить общие занятия с практикой для участников.',
      },
    ],
  },
  engagement: {
    eyebrow: '',
    title: 'Совместное применение ИИ',
    description: '',
    items: [
      {
        number: '01',
        title: 'Общие инструменты',
        description:
          'Выбрать и настроить инструменты для исследовательских задач команды.',
      },
      {
        number: '02',
        title: 'Исследовательские процессы',
        description:
          'Адаптировать совместную работу с источниками, данными и результатами анализа.',
      },
      {
        number: '03',
        title: 'Обучение команды',
        description: 'Совместить общие занятия с практикой для участников.',
      },
    ],
  },
  result: {
    eyebrow: '',
    title: 'ИИ-практика для всей команды',
    description: '',
    items: [
      {
        number: '01',
        title: 'Общий подход',
        description:
          'Выбранные инструменты, согласованный порядок работы и понятная ответственность.',
      },
      {
        number: '02',
        title: 'Навыки команды',
        description:
          'Участники умеют применять инструменты и продолжать работу коллег.',
      },
    ],
  },
  callToAction: {
    eyebrow: 'Обсудим вашу задачу',
    title: 'Где ИИ мог бы помочь вашей команде?',
    description:
      'Расскажите об исследовании и о том, как устроена совместная работа.',
    label: 'Написать в Telegram',
    href: 'https://t.me/veractobot',
    secondary: {
      label: 'info@veracto.ai',
      href: 'mailto:info@veracto.ai',
    },
  },
} satisfies ResearchTeamsPageDefinition;
