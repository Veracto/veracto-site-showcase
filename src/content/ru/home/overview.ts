import type { HomePageDefinition } from '@/content/pages.schema';

export const audiences = {
  eyebrow: '',
  title: 'Что нужно вам?',
  description: '',
  items: [
    {
      number: '01',
      tone: 'organisation',
      title: 'Компании',
      description: 'ИИ в бизнес-процессах: выбор решения, внедрение и затраты.',
      artifact: [
        'Аудит процессов',
        'Выбор ИИ-решения',
        'Затраты и план внедрения',
      ],
      label: 'Для компаний',
      href: '/ru/organisations/',
    },
    {
      number: '02',
      tone: 'research',
      title: 'Исследователи',
      description:
        'Подобрать инструменты и освоить их на индивидуальных занятиях по своему исследованию.',
      artifact: [
        'Подбор инструментов',
        'Индивидуальное обучение',
        'Практика на своём проекте',
      ],
      label: 'Для исследователей',
      href: '/ru/researchers/',
    },
    {
      number: '03',
      tone: 'research-team',
      title: 'Исследовательские команды',
      description:
        'Связать инструменты и ИИ-агентов в совместной работе и обучить участников команды.',
      artifact: ['Общие инструменты', 'Командные процессы', 'Обучение команды'],
      label: 'Для исследовательских команд',
      href: '/ru/research-teams/',
    },
  ],
} satisfies HomePageDefinition['audiences'];

export const transformation = {
  eyebrow: '',
  title: 'Выберите нужный формат',
  description: '',
  items: [
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
} satisfies HomePageDefinition['transformation'];
